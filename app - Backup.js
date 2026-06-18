// BeatSeed prototype

const LOOP_LIBRARY = [
    { id: "drums_01", name: "Drums 01", file: "audio/loops/drums_1.mp3", type: "drums", gain: 1.0 },
    { id: "drums_02", name: "Drums 02", file: "audio/loops/drums_2.mp3", type: "drums", gain: 1.0 },
    { id: "drums_03", name: "Drums 03", file: "audio/loops/drums_3.mp3", type: "drums", gain: 1.0 },
    { id: "drums_04", name: "Drums 04", file: "audio/loops/drums_4.mp3", type: "drums", gain: 1.0 },
    { id: "drums_05", name: "Drums 05", file: "audio/loops/drums_5.mp3", type: "drums", gain: 1.0 },

    { id: "bass_01", name: "Bass 01", file: "audio/loops/bass_1.mp3", type: "bass", gain: 0.8 },
    { id: "bass_02", name: "Bass 02", file: "audio/loops/bass_2.mp3", type: "bass", gain: 0.8 },
    { id: "bass_03", name: "Bass 03", file: "audio/loops/bass_3.mp3", type: "bass", gain: 0.8 },
    { id: "bass_04", name: "Bass 04", file: "audio/loops/bass_4.mp3", type: "bass", gain: 0.8 },
    { id: "bass_05", name: "Bass 05", file: "audio/loops/bass_5.mp3", type: "bass", gain: 0.8 },

    { id: "texture_01", name: "Texture 01", file: "audio/loops/texture_1.mp3", type: "texture", gain: 0.6 },
    { id: "texture_02", name: "Texture 02", file: "audio/loops/texture_2.mp3", type: "texture", gain: 0.6 },
    { id: "texture_03", name: "Texture 03", file: "audio/loops/texture_3.mp3", type: "texture", gain: 0.6 },
    { id: "texture_04", name: "Texture 04", file: "audio/loops/texture_4.mp3", type: "texture", gain: 0.6 },
    { id: "texture_05", name: "Texture 05", file: "audio/loops/texture_5.mp3", type: "texture", gain: 0.6 }
];

const MAX_LAYERS = 3;

let audioContext = null;
let analyserNode = null;
let masterGainNode = null;
let visualizerData = null;
let visualizerBars = [];

let buffersById = new Map();
let activeSourcesByLoopId = new Map();
let activeGainNodesByLoopId = new Map();

let isPlaying = false;
let transportStartTime = 0;
let pausedOffset = 0;

let beat = {
  name: "Untitled Beat",
  loops: [],
  volumes: {}
};

const beatNameEl = document.getElementById("beatName");
const playButton = document.getElementById("playButton");
const stopButton = document.getElementById("stopButton");
const newBeatButton = document.getElementById("newBeatButton");
const activeLoopsEl = document.getElementById("activeLoops");
const loopLibraryEl = document.getElementById("loopLibrary");
const loopCountEl = document.getElementById("loopCount");
const shareLinkEl = document.getElementById("shareLink");
const copyButton = document.getElementById("copyButton");

function safeEncode(data) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}

function safeDecode(text) {
  return JSON.parse(decodeURIComponent(escape(atob(text))));
}

function getLoopById(loopId) {
  return LOOP_LIBRARY.find(loop => loop.id === loopId);
}

function getSelectedLoopOfType(loopType) {
  return beat.loops
    .map(loopId => getLoopById(loopId))
    .find(loop => loop && loop.type === loopType);
}

function getLoopVolume(loopId) {
  if (!beat.volumes || beat.volumes[loopId] === undefined) {
    return 1.0;
  }

  return Math.max(0, Math.min(1.5, beat.volumes[loopId]));
}

function setLoopVolume(loopId, volumeValue) {
  beat.volumes[loopId] = Math.max(0, Math.min(1.5, volumeValue));

  const gainNode = activeGainNodesByLoopId.get(loopId);
  const loop = getLoopById(loopId);

  if (gainNode && loop) {
    gainNode.gain.value = loop.gain * getLoopVolume(loopId);
  }

  updateShareLink();
}

function getOffsetAtTime(bufferDuration, targetTime) {
  if (!isPlaying) {
    return pausedOffset % bufferDuration;
  }

  const elapsed = targetTime - transportStartTime;
  return ((elapsed % bufferDuration) + bufferDuration) % bufferDuration;
}

function createVisualizer() {
  const visualizerWrap = document.createElement("div");
  visualizerWrap.id = "eqVisualizer";
  visualizerWrap.className = "eq-visualizer";

  for (let i = 0; i < 24; i++) {
    const bar = document.createElement("div");
    bar.className = "eq-bar";
    visualizerWrap.appendChild(bar);
    visualizerBars.push(bar);
  }

  beatNameEl.parentElement.insertAdjacentElement("afterend", visualizerWrap);
}

function animateVisualizer() {
  requestAnimationFrame(animateVisualizer);

  if (!analyserNode || !visualizerData) return;

  analyserNode.getByteFrequencyData(visualizerData);

  for (let i = 0; i < visualizerBars.length; i++) {
    const normalPos = i / Math.max(1, visualizerBars.length - 1);
    const curvedPos = Math.pow(normalPos, 1.35);
    const dataIndex = Math.floor(curvedPos * (visualizerData.length - 1));

    let energy = visualizerData[dataIndex] / 255;

    if (i < 3) {
      energy *= 0.42;
    } else if (i < 6) {
      energy *= 0.68;
    }

    if (i >= visualizerBars.length - 4) {
      energy *= 2.2;
    } else if (i >= visualizerBars.length - 8) {
      energy *= 1.55;
    }

    energy = Math.min(energy, 1);
    energy = Math.pow(energy, 0.85);

    const height = 6 + (energy * 78);

    visualizerBars[i].style.height = `${height}px`;
    visualizerBars[i].style.opacity = `${0.3 + energy * 0.7}`;
  }
}

function loadBeatFromUrl() {
  const hash = window.location.hash.replace(/^#beat=/, "");
  if (!hash) return;

  try {
    const incoming = safeDecode(hash);
    if (incoming && Array.isArray(incoming.loops)) {
      const cleanedLoops = [];

      incoming.loops.forEach(loopId => {
        const incomingLoop = getLoopById(loopId);
        if (!incomingLoop) return;

        const existingIndex = cleanedLoops.findIndex(existingId => {
          const existingLoop = getLoopById(existingId);
          return existingLoop && existingLoop.type === incomingLoop.type;
        });

        if (existingIndex >= 0) {
          cleanedLoops[existingIndex] = incomingLoop.id;
        } else if (cleanedLoops.length < MAX_LAYERS) {
          cleanedLoops.push(incomingLoop.id);
        }
      });

      beat = {
        name: incoming.name || "Friend Beat",
        loops: cleanedLoops,
        volumes: incoming.volumes || {}
      };
    }
  } catch (err) {
    console.warn("Could not read beat from URL", err);
  }
}

function updateShareLink() {
  const url = new URL(window.location.href);
  url.hash = "beat=" + safeEncode(beat);
  shareLinkEl.value = url.toString();
  history.replaceState(null, "", url.toString());
}

function render() {
  beatNameEl.textContent = beat.name;
  loopCountEl.textContent = `${beat.loops.length} layer${beat.loops.length === 1 ? "" : "s"}`;

  activeLoopsEl.innerHTML = "";

  if (beat.loops.length === 0) {
    activeLoopsEl.innerHTML = `<div class="empty">No loops yet. Start the beat with one sound.</div>`;
  } else {
    beat.loops.forEach((loopId, index) => {
      const loop = getLoopById(loopId);
      if (!loop) return;

      const row = document.createElement("div");
      row.className = "active-loop";
      row.innerHTML = `
        <strong>${index + 1}. ${loop.name}</strong>
        <span class="loop-meta">${loop.type}</span>

        <div class="volume-control">
          <span class="loop-meta">Vol</span>
          <input class="volume-slider" type="range" min="0" max="150" value="${Math.round(getLoopVolume(loop.id) * 100)}">
          <span class="volume-readout">${Math.round(getLoopVolume(loop.id) * 100)}%</span>
        </div>

        <button class="remove-loop-button" type="button">Remove</button>
      `;

      row.querySelector(".remove-loop-button").addEventListener("click", () => removeLoop(loop.id));
      const volumeSlider = row.querySelector(".volume-slider");
      const volumeReadout = row.querySelector(".volume-readout");

      volumeSlider.addEventListener("input", () => {
        const newVolume = Number(volumeSlider.value) / 100;
        volumeReadout.textContent = `${volumeSlider.value}%`;
        setLoopVolume(loop.id, newVolume);
      });
      activeLoopsEl.appendChild(row);
    });
  }

  loopLibraryEl.innerHTML = "";

  LOOP_LIBRARY.forEach(loop => {
    const alreadySelected = beat.loops.includes(loop.id);
    const selectedLoopOfSameType = getSelectedLoopOfType(loop.type);
    const hasSameTypeSelected = selectedLoopOfSameType !== undefined;

    let buttonLabel = "+ Add";
    if (alreadySelected) {
      buttonLabel = "Selected";
    } else if (hasSameTypeSelected) {
      buttonLabel = "Replace";
    }

    const button = document.createElement("button");
    button.className = alreadySelected ? "loop-button selected" : "loop-button";
    button.disabled = alreadySelected;
    button.innerHTML = `<span><strong>${loop.name}</strong><br><span class="loop-meta">${loop.type}</span></span><span class="loop-meta">${buttonLabel}</span>`;
    button.addEventListener("click", () => addLoop(loop.id));
    loopLibraryEl.appendChild(button);
  });

  updateShareLink();
}

async function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    masterGainNode = audioContext.createGain();
    masterGainNode.gain.value = 0.9;

    analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = 128;
    analyserNode.smoothingTimeConstant = 0.78;

    visualizerData = new Uint8Array(analyserNode.frequencyBinCount);

    const compressorNode = audioContext.createDynamicsCompressor();
    compressorNode.threshold.value = -10;
    compressorNode.knee.value = 18;
    compressorNode.ratio.value = 8;
    compressorNode.attack.value = 0.003;
    compressorNode.release.value = 0.16;

    masterGainNode.connect(compressorNode);
    compressorNode.connect(analyserNode);
    analyserNode.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }
}

async function loadBuffer(loop) {
  if (buffersById.has(loop.id)) return buffersById.get(loop.id);

  const response = await fetch(loop.file);

  if (!response.ok) {
    throw new Error(`Missing audio file: ${loop.file}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const decoded = await audioContext.decodeAudioData(arrayBuffer);

  buffersById.set(loop.id, decoded);
  return decoded;
}

function stopLoopSource(loopId) {
  const active = activeSourcesByLoopId.get(loopId);
  if (!active) return;

  try {
    active.source.stop();
  } catch (err) {}

  activeSourcesByLoopId.delete(loopId);
  activeGainNodesByLoopId.delete(loopId);
}

async function startLoopSource(loopId, startAtTime = null) {
  await ensureAudioContext();

  const loop = getLoopById(loopId);
  if (!loop) return;

  stopLoopSource(loopId);

  const buffer = await loadBuffer(loop);

  const source = audioContext.createBufferSource();
  const gainNode = audioContext.createGain();

  source.buffer = buffer;
  source.loop = true;

  gainNode.gain.value = loop.gain * getLoopVolume(loop.id);

  source.connect(gainNode);
  gainNode.connect(masterGainNode);

  const now = audioContext.currentTime;
  const actualStartTime = startAtTime ?? (now + 0.15);
  const offset = getOffsetAtTime(buffer.duration, actualStartTime);

  source.start(actualStartTime, offset);

  activeSourcesByLoopId.set(loopId, {
    source: source,
    gainNode: gainNode
  });

  activeGainNodesByLoopId.set(loopId, gainNode);
}

async function startAllLoopSources() {
  await ensureAudioContext();

  if (beat.loops.length === 0) return;

  // IMPORTANT:
  // Preload/decode every selected loop BEFORE scheduling playback.
  // Mobile browsers can decode slowly, which makes loops start out of sync.
  for (const loopId of beat.loops) {
    const loop = getLoopById(loopId);
    if (!loop) continue;
    await loadBuffer(loop);
  }

  const startAtTime = audioContext.currentTime + 0.25;

  transportStartTime = startAtTime - pausedOffset;

  for (const loopId of beat.loops) {
    await startLoopSource(loopId, startAtTime);
  }

  isPlaying = true;
  playButton.textContent = "Pause";
}

function pauseBeat() {
  if (!isPlaying || !audioContext) return;

  const firstLoopId = beat.loops[0];
  const firstLoop = getLoopById(firstLoopId);
  const firstBuffer = firstLoop ? buffersById.get(firstLoop.id) : null;

  if (firstBuffer) {
    pausedOffset = getOffsetAtTime(firstBuffer.duration, audioContext.currentTime);
  }

  activeSourcesByLoopId.forEach((active, loopId) => {
    try {
      active.source.stop();
    } catch (err) {}
  });

  activeSourcesByLoopId.clear();
  activeGainNodesByLoopId.clear();

  isPlaying = false;
  playButton.textContent = "Play";
}

function stopBeat() {
  activeSourcesByLoopId.forEach((active, loopId) => {
    try {
      active.source.stop();
    } catch (err) {}
  });

  activeSourcesByLoopId.clear();
  activeGainNodesByLoopId.clear();

  isPlaying = false;
  pausedOffset = 0;
  transportStartTime = 0;
  playButton.textContent = "Play";
}

async function playBeat() {
  await ensureAudioContext();

  if (isPlaying) {
    pauseBeat();
    return;
  }

  await startAllLoopSources();
}

async function addLoop(loopId) {
  const newLoop = getLoopById(loopId);
  if (!newLoop) return;

  let replacedLoopId = null;

  const existingIndex = beat.loops.findIndex(existingLoopId => {
    const existingLoop = getLoopById(existingLoopId);
    return existingLoop && existingLoop.type === newLoop.type;
  });

  if (existingIndex >= 0) {
    replacedLoopId = beat.loops[existingIndex];
    beat.loops[existingIndex] = newLoop.id;
  } else if (beat.loops.length < MAX_LAYERS) {
    beat.loops.push(newLoop.id);
  }

  render();

  if (isPlaying) {
    if (replacedLoopId) {
      stopLoopSource(replacedLoopId);
    }

    await startLoopSource(newLoop.id);
  }
}

async function removeLoop(loopId) {
  beat.loops = beat.loops.filter(existingLoopId => existingLoopId !== loopId);

  if (isPlaying) {
    stopLoopSource(loopId);
  }

  render();
}

function newBeat() {
  stopBeat();

  beat = {
    name: `Beat ${Math.floor(1000 + Math.random() * 9000)}`,
    loops: [],
    volumes: {}
  };

  render();
}

async function copyShareLink() {
  try {
    await navigator.clipboard.writeText(shareLinkEl.value);
    copyButton.textContent = "Copied";
    setTimeout(() => copyButton.textContent = "Copy", 900);
  } catch (err) {
    shareLinkEl.select();
    document.execCommand("copy");
  }
}

createVisualizer();
animateVisualizer();

loadBeatFromUrl();
render();

playButton.addEventListener("click", playBeat);
stopButton.addEventListener("click", stopBeat);
newBeatButton.addEventListener("click", newBeat);
copyButton.addEventListener("click", copyShareLink);