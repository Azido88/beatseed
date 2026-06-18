// BeatSeed prototype

const TEXT = {
  en: {
    play: "Play",
    pause: "Pause",
    stop: "Stop",
    rename: "Rename",
    save: "Save",
    newBeat: "New",
    layers: "layers",
    addLoop: "Add one loop",
    shareLink: "Share link",
    savedBeats: "Saved beats",
    copy: "Copy",
    copied: "Copied",
    noLoops: "No loops yet. Start the beat with one sound.",
    vol: "Vol",
    editChop: "Edit Chop",
    chop: "Chop",
    remove: "Remove",
    selected: "Selected",
    replace: "Replace",
    add: "+ Add",
    heroEyebrow: "3-minute friend-built beats",
    heroTagline: "Add one sound. Send it to a friend. Build a full loop together.",
    chooseContribution: "Choose your contribution",
    shareHint: "This first prototype stores the beat inside the URL. No server needed yet.",
    madeBy: "Made by Azido Games",
    footerText: "If you enjoy BeatSeed, check out my upcoming rhythm shooter, Stellar Rhythm.",
    wishlist: "Stellar Rhythm on Steam",
    support: "Support on Ko-fi",
    load: "Load",
    delete: "Delete",
    chopEditor: "Chop Editor",
    close: "Close",
    grid: "Grid",
    rearrangedLoop: "Your rearranged loop - tap a slot to edit it",
    originalLoop: "Original loop - tap a slice to place it above",
    reset: "Reset",
    random: "Random",
    reverseSelected: "Reverse selected",
    muteSelected: "Mute selected",
    done: "Done",
    beatNamePrompt: "Beat name:",
    beatSaved: "Beat saved on this device.",
    untitledBeat: "Untitled Beat",
    friendBeat: "Friend Beat",
    beatPrefix: "Beat"
  },

  zhTW: {
    play: "播放",
    pause: "暫停",
    stop: "停止",
    rename: "重新命名",
    save: "儲存",
    newBeat: "新節拍",
    layers: "層",
    addLoop: "加入一個 Loop",
    shareLink: "分享連結",
    savedBeats: "已儲存節拍",
    copy: "複製",
    copied: "已複製",
    noLoops: "還沒有 Loop。先加入一個聲音吧。",
    vol: "音量",
    editChop: "編輯切片",
    chop: "切片",
    remove: "移除",
    selected: "已選擇",
    replace: "替換",
    add: "+ 加入",
    heroEyebrow: "3分鐘朋友共創節拍",
    heroTagline: "加入一個聲音，傳給朋友，一起完成完整 Loop。",
    chooseContribution: "選擇你的貢獻",
    shareHint: "這個初版會把節拍存在網址裡，暫時不需要伺服器。",
    madeBy: "Azido Games 製作",
    footerText: "如果你喜歡 BeatSeed，也可以看看我正在開發的節奏射擊遊戲 Stellar Rhythm。",
    wishlist: "將 Stellar Rhythm 加入願望清單",
    support: "在 Ko-fi 支持我",
    load: "載入",
    delete: "刪除",
    chopEditor: "切片編輯器",
    close: "關閉",
    grid: "格數",
    rearrangedLoop: "重新排列的 Loop - 點選上方格子進行編輯",
    originalLoop: "原始 Loop - 點選下方切片放到上方",
    reset: "重設",
    random: "隨機",
    reverseSelected: "反轉所選",
    muteSelected: "靜音所選",
    done: "完成",
    beatNamePrompt: "節拍名稱：",
    beatSaved: "節拍已儲存在此裝置。",
    untitledBeat: "未命名節拍",
    friendBeat: "朋友的節拍",
    beatPrefix: "節拍"
  }
};

let currentLanguage =
  navigator.language.startsWith("zh")
    ? "zhTW"
    : "en";

function t(key) {
  return TEXT[currentLanguage]?.[key] ?? key;
}

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
const DEFAULT_CHOP_SLICES = 8;

let audioContext = null;
let analyserNode = null;
let masterGainNode = null;
let visualizerData = null;
let visualizerBars = [];

let buffersById = new Map();
let reversedBuffersById = new Map();
let activeSourcesByLoopId = new Map();
let activeGainNodesByLoopId = new Map();
let playingChopSlotByLoopId = new Map();

let isPlaying = false;
let transportStartTime = 0;
let pausedOffset = 0;

let selectedChopLoopId = null;
let selectedChopSlotIndex = 0;

let chopEditorPlayheadAnimation = null;

let beat = {
  name: "Untitled Beat",
  loops: [],
  volumes: {},
  chops: {}
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
const SAVED_BEATS_KEY = "beatseed_saved_beats_v1";

let chopEditorEl = document.getElementById("chopEditor");
if (!chopEditorEl) {
  chopEditorEl = document.createElement("div");
  chopEditorEl.id = "chopEditor";
  chopEditorEl.className = "chop-editor hidden";
  activeLoopsEl.insertAdjacentElement("afterend", chopEditorEl);
}

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

function ensureBeatDataObjects() {
  if (!beat.volumes) beat.volumes = {};
  if (!beat.chops) beat.chops = {};
}

function getLoopVolume(loopId) {
  ensureBeatDataObjects();

  if (beat.volumes[loopId] === undefined) {
    return 1.0;
  }

  return Math.max(0, Math.min(1.5, beat.volumes[loopId]));
}

function setLoopVolume(loopId, volumeValue) {
  ensureBeatDataObjects();

  beat.volumes[loopId] = Math.max(0, Math.min(1.5, volumeValue));

  const gainNode = activeGainNodesByLoopId.get(loopId);
  const loop = getLoopById(loopId);

  if (gainNode && loop) {
    gainNode.gain.value = loop.gain * getLoopVolume(loopId);
  }

  updateShareLink();
}

function makeIdentityPattern(sliceCount) {
  const pattern = [];
  for (let i = 0; i < sliceCount; i++) {
    pattern.push(i);
  }
  return pattern;
}

function getChopRecipe(loopId) {
  ensureBeatDataObjects();

  const recipe = beat.chops[loopId];

  if (!recipe || !Array.isArray(recipe.pattern)) {
    return {
      slices: DEFAULT_CHOP_SLICES,
      pattern: makeIdentityPattern(DEFAULT_CHOP_SLICES),
      reverse: {},
      silent: {}
    };
  }

  const sliceCount = Math.max(4, Math.min(32, Number(recipe.slices) || DEFAULT_CHOP_SLICES));
  let pattern = recipe.pattern.slice(0, sliceCount);

  while (pattern.length < sliceCount) {
    pattern.push(pattern.length);
  }

  pattern = pattern.map(value => {
    const cleanValue = Math.floor(Number(value));
    if (Number.isNaN(cleanValue)) return 0;
    return Math.max(0, Math.min(sliceCount - 1, cleanValue));
  });

  const reverse = {};
  if (recipe.reverse) {
    for (const key in recipe.reverse) {
      const cleanKey = Math.floor(Number(key));
      if (!Number.isNaN(cleanKey) && cleanKey >= 0 && cleanKey < sliceCount) {
        reverse[cleanKey] = recipe.reverse[key] === true;
      }
    }
  }

  const silent = {};
  if (recipe.silent) {
    for (const key in recipe.silent) {
      const cleanKey = Math.floor(Number(key));
      if (!Number.isNaN(cleanKey) && cleanKey >= 0 && cleanKey < sliceCount) {
        silent[cleanKey] = recipe.silent[key] === true;
      }
    }
  }

  return {
    slices: sliceCount,
    pattern: pattern,
    reverse: reverse,
    silent: silent
  };
}

function setChopRecipe(loopId, recipe) {
  ensureBeatDataObjects();

  beat.chops[loopId] = {
    slices: recipe.slices,
    pattern: recipe.pattern.slice(),
    reverse: recipe.reverse || {},
    silent: recipe.silent || {}
  };

  updateShareLink();
}

async function refreshPlayingLoopAfterChopEdit(loopId) {
  if (isPlaying && beat.loops.includes(loopId)) {
    await startLoopSource(loopId);
  }

  if (selectedChopLoopId === loopId) {
    startChopEditorPlayheadAnimation(loopId);
  }
}

function resetChopRecipe(loopId, sliceCount = DEFAULT_CHOP_SLICES) {
  setChopRecipe(loopId, {
    slices: sliceCount,
    pattern: makeIdentityPattern(sliceCount)
  });
}

function hasCustomChop(loopId) {
  const recipe = getChopRecipe(loopId);

  for (let i = 0; i < recipe.pattern.length; i++) {
    if (recipe.pattern[i] !== i) return true;
    if (recipe.reverse && recipe.reverse[i] === true) return true;
    if (recipe.silent && recipe.silent[i] === true) return true;
  }

  return false;
}

function getOffsetAtTime(bufferDuration, targetTime) {
  if (!isPlaying) {
    return pausedOffset % bufferDuration;
  }

  const elapsed = targetTime - transportStartTime;
  return ((elapsed % bufferDuration) + bufferDuration) % bufferDuration;
}

function updateChopPlayhead(loopId, slotIndex) {
  playingChopSlotByLoopId.set(loopId, slotIndex);

  const recipe = getChopRecipe(loopId);
  const rowSize = recipe.slices === 32 ? 16 : recipe.slices;
  const rowIndex = Math.floor(slotIndex / rowSize);
  const slotInRow = slotIndex % rowSize;
  const slotWidthPercent = 100 / rowSize;

  document.querySelectorAll(`.chop-playhead[data-loop-id="${loopId}"]`).forEach(playhead => {
    const playheadRow = Number(playhead.dataset.rowIndex);

    if (playheadRow === rowIndex) {
      playhead.style.display = "block";
      playhead.style.left = `${slotInRow * slotWidthPercent}%`;
      playhead.style.width = `${slotWidthPercent}%`;
    } else {
      playhead.style.display = "none";
    }
  });
}

async function drawChopWaveforms(loopId) {
  await ensureAudioContext();

  const loop = getLoopById(loopId);
  if (!loop) return;

  const buffer = await loadBuffer(loop);
  const recipe = getChopRecipe(loopId);

  document.querySelectorAll(`.top-waveform[data-loop-id="${loopId}"]`).forEach(canvas => {
    drawWaveformCanvas(
      canvas,
      buffer,
      recipe,
      true,
      Number(canvas.dataset.startSlot),
      Number(canvas.dataset.endSlot)
    );
  });

  document.querySelectorAll(`.bottom-waveform[data-loop-id="${loopId}"]`).forEach(canvas => {
    drawWaveformCanvas(
      canvas,
      buffer,
      recipe,
      false,
      Number(canvas.dataset.startSlot),
      Number(canvas.dataset.endSlot)
    );
  });
}

function drawWaveformCanvas(canvas, buffer, recipe, useChopPattern, startSlot = 0, endSlot = null) {
  const displayWidth = Math.max(1, canvas.clientWidth);
  const displayHeight = Math.max(1, canvas.clientHeight);
  const pixelRatio = window.devicePixelRatio || 1;

  canvas.width = Math.floor(displayWidth * pixelRatio);
  canvas.height = Math.floor(displayHeight * pixelRatio);

  const ctx = canvas.getContext("2d");
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  ctx.clearRect(0, 0, displayWidth, displayHeight);

  const data = buffer.getChannelData(0);
  const sliceCount = recipe.slices;
  const rowEndSlot = endSlot === null ? sliceCount : endSlot;
  const visibleSlots = Math.max(1, rowEndSlot - startSlot);
  const slotWidth = displayWidth / visibleSlots;
  const centerY = displayHeight / 2;

  ctx.fillStyle = "rgba(255, 255, 255, 0.055)";
  ctx.fillRect(0, 0, displayWidth, displayHeight);

  ctx.strokeStyle = useChopPattern ? "rgba(119, 255, 146, 0.92)" : "rgba(41, 231, 255, 0.92)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();

  for (let slotIndex = startSlot; slotIndex < rowEndSlot; slotIndex++) {
    const sourceSliceIndex = useChopPattern ? recipe.pattern[slotIndex] : slotIndex;
    const isReversed = useChopPattern && recipe.reverse && recipe.reverse[slotIndex] === true;

    const sourceStartSample = Math.floor((sourceSliceIndex / sliceCount) * data.length);
    const sourceEndSample = Math.floor(((sourceSliceIndex + 1) / sliceCount) * data.length);
    const sourceLength = Math.max(1, sourceEndSample - sourceStartSample);

    const visualSlotIndex = slotIndex - startSlot;
    const visualStartX = visualSlotIndex * slotWidth;
    const visualEndX = (visualSlotIndex + 1) * slotWidth;

    for (let px = Math.floor(visualStartX); px < Math.floor(visualEndX); px++) {
      const rawLocalPos = (px - visualStartX) / slotWidth;
      const localPos = isReversed ? 1 - rawLocalPos : rawLocalPos;
      const sampleIndex = sourceStartSample + Math.floor(localPos * sourceLength);

      let minValue = 1;
      let maxValue = -1;

      const samplesPerPixel = Math.max(1, Math.floor(sourceLength / slotWidth));

      for (let s = 0; s < samplesPerPixel; s++) {
        const value = data[Math.min(data.length - 1, sampleIndex + s)];
        if (value < minValue) minValue = value;
        if (value > maxValue) maxValue = value;
      }

      const y1 = centerY - (maxValue * centerY * 0.86);
      const y2 = centerY - (minValue * centerY * 0.86);

      ctx.moveTo(px, y1);
      ctx.lineTo(px, y2);
    }
  }

  ctx.stroke();

  ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
  ctx.lineWidth = 1;

  for (let i = 1; i < visibleSlots; i++) {
    const gridX = i * slotWidth;
    ctx.beginPath();
    ctx.moveTo(gridX, 0);
    ctx.lineTo(gridX, displayHeight);
    ctx.stroke();
  }
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
        name: incoming.name || t("friendBeat"),
        loops: cleanedLoops,
        volumes: incoming.volumes || {},
        chops: incoming.chops || {}
      };
    }
  } catch (err) {
    console.warn("Could not read beat from URL", err);
  }

  ensureBeatDataObjects();
}

function updateShareLink() {
  ensureBeatDataObjects();

  const url = new URL(window.location.href);
  url.hash = "beat=" + safeEncode(beat);
  shareLinkEl.value = url.toString();
  history.replaceState(null, "", url.toString());
}

function renameBeat() {
  const newName = prompt(t("beatNamePrompt"), beat.name);

  if (!newName) return;

  beat.name = newName.trim() || t("untitledBeat");
  render();
}

function getSavedBeats() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVED_BEATS_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (err) {
    return [];
  }
}

function saveBeatLocally() {
  const savedBeats = getSavedBeats();
  const cleanBeatName = beat.name.trim() || t("untitledBeat");

  beat.name = cleanBeatName;

  const existingIndex = savedBeats.findIndex(item => {
    return item.beat && item.beat.name === cleanBeatName;
  });

  const beatToSave = {
    id: existingIndex >= 0 ? savedBeats[existingIndex].id : Date.now(),
    savedAt: new Date().toISOString(),
    beat: JSON.parse(JSON.stringify(beat))
  };

  if (existingIndex >= 0) {
    savedBeats[existingIndex] = beatToSave;
  } else {
    savedBeats.unshift(beatToSave);
  }

  localStorage.setItem(SAVED_BEATS_KEY, JSON.stringify(savedBeats.slice(0, 25)));

  renderSavedBeats();
  alert(t("beatSaved"));
}

function loadSavedBeat(savedBeatId) {
  const savedBeats = getSavedBeats();
  const found = savedBeats.find(item => String(item.id) === String(savedBeatId));

  if (!found || !found.beat) return;

  stopBeat();

  beat = JSON.parse(JSON.stringify(found.beat));
  ensureBeatDataObjects();

  selectedChopLoopId = null;
  selectedChopSlotIndex = 0;

  render();
}

function deleteSavedBeat(savedBeatId) {
  const savedBeats = getSavedBeats();
  const filtered = savedBeats.filter(item => String(item.id) !== String(savedBeatId));

  localStorage.setItem(SAVED_BEATS_KEY, JSON.stringify(filtered));

  render();
}

function renderSavedBeats() {
  let savedBeatsEl = document.getElementById("savedBeats");

  if (!savedBeatsEl) {
    savedBeatsEl = document.createElement("div");
    savedBeatsEl.id = "savedBeats";
    savedBeatsEl.className = "saved-beats";
    shareLinkEl.parentElement.parentElement.insertAdjacentElement("afterend", savedBeatsEl);
  }

  const savedBeats = getSavedBeats();

  if (savedBeats.length === 0) {
    savedBeatsEl.innerHTML = "";
    return;
  }

  const savedHtml = savedBeats.map(item => {
    const savedName = item.beat && item.beat.name
      ? item.beat.name
      : t("untitledBeat");

    return `
      <div class="saved-beat-row">
        <strong>${savedName}</strong>
        <div class="saved-beat-actions">
          <button class="secondary load-saved-beat-button" data-save-id="${item.id}" type="button">${t("load")}</button>
          <button class="ghost delete-saved-beat-button" data-save-id="${item.id}" type="button">${t("delete")}</button>
        </div>
      </div>
    `;
  }).join("");

  savedBeatsEl.innerHTML = `
    <div class="share-card">
      <div class="section-title-row">
        <h2>${t("savedBeats")}</h2>
        <span class="pill">${savedBeats.length}</span>
      </div>
      <div class="saved-beat-list">
        ${savedHtml}
      </div>
    </div>
  `;

  savedBeatsEl.querySelectorAll(".load-saved-beat-button").forEach(button => {
    button.addEventListener("click", () => loadSavedBeat(button.dataset.saveId));
  });

  savedBeatsEl.querySelectorAll(".delete-saved-beat-button").forEach(button => {
    button.addEventListener("click", () => deleteSavedBeat(button.dataset.saveId));
  });
}

function render() {
  ensureBeatDataObjects();

  beatNameEl.textContent = beat.name;

  newBeatButton.textContent = t("newBeat");
  copyButton.textContent = t("copy");
  playButton.textContent = isPlaying ? t("pause") : t("play");
  stopButton.textContent = t("stop");

  document.getElementById("heroEyebrow").textContent = t("heroEyebrow");
  document.getElementById("heroTagline").textContent = t("heroTagline");
  document.getElementById("chooseContributionLabel").textContent = t("chooseContribution");
  document.getElementById("addLoopTitle").textContent = t("addLoop");
  document.getElementById("shareLinkLabel").textContent = t("shareLink");
  document.getElementById("shareHint").textContent = t("shareHint");
  document.getElementById("footerMadeBy").textContent = t("madeBy");
  document.getElementById("footerText").textContent = t("footerText");
  document.getElementById("wishlistText").textContent = t("wishlist");
  document.getElementById("supportText").textContent = t("support");

  loopCountEl.textContent = `${beat.loops.length} ${t("layers")}`;

  if (!document.getElementById("renameBeatButton")) {
    const renameButton = document.createElement("button");
    renameButton.id = "renameBeatButton";
    renameButton.className = "secondary";
    renameButton.type = "button";
    renameButton.textContent = t("rename");
    renameButton.addEventListener("click", renameBeat);
    renameButton.style.marginBottom = "12px";

    const saveButton = document.createElement("button");
    saveButton.id = "saveBeatButton";
    saveButton.className = "secondary";
    saveButton.type = "button";
    saveButton.textContent = t("save");
    saveButton.addEventListener("click", saveBeatLocally);

  let beatControls = document.getElementById("beatControls");

  if (!beatControls) {
    beatControls = document.createElement("div");
    beatControls.id = "beatControls";
    beatControls.className = "beat-controls";

    const transport = document.querySelector(".transport");

    if (transport) {
      transport.insertAdjacentElement("afterend", beatControls);
    } else {
      beatNameEl.parentElement.insertAdjacentElement("afterend", beatControls);
    }
  }

  beatControls.appendChild(renameButton);
  beatControls.appendChild(saveButton);
  beatControls.appendChild(newBeatButton);
  }

  activeLoopsEl.innerHTML = "";

  if (beat.loops.length === 0) {
    activeLoopsEl.innerHTML = `<div class="empty">${t("noLoops")}</div>`;
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
          <span class="loop-meta">${t("vol")}</span>
          <input class="volume-slider" type="range" min="0" max="150" value="${Math.round(getLoopVolume(loop.id) * 100)}">
          <span class="volume-readout">${Math.round(getLoopVolume(loop.id) * 100)}%</span>
        </div>

        <button class="edit-chop-button" type="button">${hasCustomChop(loop.id) ? t("editChop") : t("chop")}</button>
        <button class="remove-loop-button" type="button">${t("remove")}</button>
      `;

      row.querySelector(".remove-loop-button").addEventListener("click", () => removeLoop(loop.id));
      row.querySelector(".edit-chop-button").addEventListener("click", () => openChopEditor(loop.id));

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

    let buttonLabel = t("add");
    if (alreadySelected) {
      buttonLabel = t("selected");
    } else if (hasSameTypeSelected) {
      buttonLabel = t("replace");
    }

    const button = document.createElement("button");
    button.className = alreadySelected ? "loop-button selected" : "loop-button";
    button.disabled = alreadySelected;
    button.innerHTML = `<span><strong>${loop.name}</strong><br><span class="loop-meta">${loop.type}</span></span><span class="loop-meta">${buttonLabel}</span>`;
    button.addEventListener("click", () => addLoop(loop.id));
    loopLibraryEl.appendChild(button);
  });

  renderChopEditor();
  renderSavedBeats();
  updateShareLink();
}

function startChopEditorPlayheadAnimation(loopId) {
  if (chopEditorPlayheadAnimation) {
    cancelAnimationFrame(chopEditorPlayheadAnimation);
  }

  function animate() {
    if (selectedChopLoopId !== loopId) return;

    const loop = getLoopById(loopId);
    const buffer = loop ? buffersById.get(loop.id) : null;

    if (isPlaying && audioContext && buffer) {
      const recipe = getChopRecipe(loopId);
      const offset = getOffsetAtTime(buffer.duration, audioContext.currentTime);
      const sliceDuration = buffer.duration / recipe.slices;
      const currentSlot = Math.floor(offset / sliceDuration);

      updateChopPlayhead(loopId, Math.max(0, Math.min(recipe.slices - 1, currentSlot)));
    }

    chopEditorPlayheadAnimation = requestAnimationFrame(animate);
  }

  chopEditorPlayheadAnimation = requestAnimationFrame(animate);
}

function openChopEditor(loopId) {
  selectedChopLoopId = loopId;

  const recipe = getChopRecipe(loopId);

  if (isPlaying && audioContext) {
    const loop = getLoopById(loopId);
    const buffer = loop ? buffersById.get(loop.id) : null;

    if (buffer) {
      const offset = getOffsetAtTime(buffer.duration, audioContext.currentTime);
      const sliceDuration = buffer.duration / recipe.slices;
      const currentSlot = Math.floor(offset / sliceDuration);

      selectedChopSlotIndex = Math.max(0, Math.min(recipe.slices - 1, currentSlot));
      playingChopSlotByLoopId.set(loopId, selectedChopSlotIndex);
    } else {
      selectedChopSlotIndex = 0;
      playingChopSlotByLoopId.set(loopId, 0);
    }
  } else {
    selectedChopSlotIndex = 0;
    playingChopSlotByLoopId.set(loopId, 0);
  }

  renderChopEditor();
  startChopEditorPlayheadAnimation(loopId);
}

function closeChopEditor() {
  if (chopEditorPlayheadAnimation) {
    cancelAnimationFrame(chopEditorPlayheadAnimation);
    chopEditorPlayheadAnimation = null;
  }

  selectedChopLoopId = null;
  selectedChopSlotIndex = 0;
  renderChopEditor();
}

function convertChopRecipe(oldRecipe, newSliceCount) {
  const oldSliceCount = oldRecipe.slices;
  const oldPattern = oldRecipe.pattern;
  const newPattern = [];

  // Same size: keep exactly as-is
  if (oldSliceCount === newSliceCount) {
    return {
      slices: newSliceCount,
      pattern: oldPattern.slice()
    };
  }

  // Going UP in resolution, e.g. 4 -> 8
  // Expand each old slice into its matching smaller pieces.
  if (newSliceCount > oldSliceCount) {
    for (let newSlotIndex = 0; newSlotIndex < newSliceCount; newSlotIndex++) {
      const oldSlotFloat = (newSlotIndex * oldSliceCount) / newSliceCount;
      const oldSlotIndex = Math.floor(oldSlotFloat);
      const positionInsideOldSlot = oldSlotFloat - oldSlotIndex;

      const oldSourceSlice = oldPattern[Math.min(oldSlotIndex, oldPattern.length - 1)];

      const newSourceFloat = ((oldSourceSlice + positionInsideOldSlot) * newSliceCount) / oldSliceCount;
      const newSourceSlice = Math.floor(newSourceFloat);

      newPattern.push(Math.max(0, Math.min(newSliceCount - 1, newSourceSlice)));
    }
  }

  // Going DOWN in resolution, e.g. 8 -> 4
  // Use the first old slot covered by each new slot as the best simple estimate.
  else {
    for (let newSlotIndex = 0; newSlotIndex < newSliceCount; newSlotIndex++) {
      const oldSlotIndex = Math.floor((newSlotIndex * oldSliceCount) / newSliceCount);
      const oldSourceSlice = oldPattern[Math.min(oldSlotIndex, oldPattern.length - 1)];

      const newSourceSlice = Math.floor((oldSourceSlice * newSliceCount) / oldSliceCount);

      newPattern.push(Math.max(0, Math.min(newSliceCount - 1, newSourceSlice)));
    }
  }

  return {
    slices: newSliceCount,
    pattern: newPattern
  };
}

async function changeChopGrid(loopId, sliceCount) {
  const oldRecipe = getChopRecipe(loopId);

  const currentVisualSlot = playingChopSlotByLoopId.has(loopId)
    ? playingChopSlotByLoopId.get(loopId)
    : selectedChopSlotIndex;

  const playheadPercent = (currentVisualSlot + 0.5) / Math.max(1, oldRecipe.slices);

  const convertedRecipe = convertChopRecipe(oldRecipe, sliceCount);
  setChopRecipe(loopId, convertedRecipe);

  const newVisualSlot = Math.max(
    0,
    Math.min(sliceCount - 1, Math.floor(playheadPercent * sliceCount))
  );

  selectedChopSlotIndex = Math.min(selectedChopSlotIndex, sliceCount - 1);
  playingChopSlotByLoopId.set(loopId, newVisualSlot);

  render();

  if (isPlaying && beat.loops.includes(loopId)) {
    await startLoopSource(loopId);
  }

  updateChopPlayhead(loopId, newVisualSlot);
}

function setChopSlot(loopId, targetSlotIndex, sourceSliceIndex) {
  const recipe = getChopRecipe(loopId);

  recipe.pattern[targetSlotIndex] = sourceSliceIndex;
  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);

  selectedChopSlotIndex = Math.min(targetSlotIndex + 1, recipe.slices - 1);

  renderChopEditor();
  render();
}

function toggleReverseSelectedChop(loopId) {
  const recipe = getChopRecipe(loopId);

  recipe.reverse[selectedChopSlotIndex] = recipe.reverse[selectedChopSlotIndex] !== true;

  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);

  renderChopEditor();
  render();
}

function toggleSilentSelectedChop(loopId) {
  const recipe = getChopRecipe(loopId);

  recipe.silent[selectedChopSlotIndex] =
    recipe.silent[selectedChopSlotIndex] !== true;

  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);

  renderChopEditor();
  render();
}

function randomizeChop(loopId) {
  const recipe = getChopRecipe(loopId);

  for (let i = 0; i < recipe.slices; i++) {
    recipe.pattern[i] = Math.floor(Math.random() * recipe.slices);
  }

  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);
  renderChopEditor();
  render();
}

async function resetCurrentChop(loopId) {
  const recipe = getChopRecipe(loopId);
  resetChopRecipe(loopId, recipe.slices);

  await refreshPlayingLoopAfterChopEdit(loopId);

  renderChopEditor();
  render();
}

function buildChopRowsHtml(loop, recipe, mode) {
  const rowSize = recipe.slices === 32 ? 16 : recipe.slices;
  let html = "";

  for (let rowStart = 0; rowStart < recipe.slices; rowStart += rowSize) {
    const rowEnd = Math.min(recipe.slices, rowStart + rowSize);
    const rowIndex = rowStart / rowSize;

    let buttonsHtml = "";

    for (let slotIndex = rowStart; slotIndex < rowEnd; slotIndex++) {
      if (mode === "top") {
        const sourceSliceIndex = recipe.pattern[slotIndex];
        const selectedClass = slotIndex === selectedChopSlotIndex ? " selected" : "";
        const isSilent = recipe.silent && recipe.silent[slotIndex] === true;
        const reverseText = recipe.reverse && recipe.reverse[slotIndex] === true ? "↩ " : "";
        const slotText = isSilent ? "X" : `${reverseText}${sourceSliceIndex + 1}`;

        buttonsHtml += `
          <button
            class="chop-slot${selectedClass}${isSilent ? " silent" : ""}"
            data-target-slot="${slotIndex}"
            data-loop-id="${loop.id}"
            data-slot-index="${slotIndex}"
            type="button">
            ${slotText}
          </button>
        `;
      } else {
        buttonsHtml += `
          <button
            class="chop-source-slice"
            data-source-slice="${slotIndex}"
            type="button">
            ${slotIndex + 1}
          </button>
        `;
      }
    }

    html += `
      <canvas
        class="chop-waveform ${mode === "top" ? "top-waveform" : "bottom-waveform"}"
        data-loop-id="${loop.id}"
        data-start-slot="${rowStart}"
        data-end-slot="${rowEnd}">
      </canvas>

    ${mode === "top" ? `
      <div
        class="chop-playhead"
        data-loop-id="${loop.id}"
        data-row-index="${rowIndex}"
        style="top:${86 + rowIndex * 118}px;">
      </div>
      ` : ""}
      <div
        class="chop-lane ${mode === "top" ? "top-lane" : "bottom-lane"}"
        data-loop-id="${loop.id}"
        data-row-index="${rowIndex}"
        style="grid-template-columns: repeat(${rowEnd - rowStart}, 1fr);">
        ${buttonsHtml}
      </div>
    `;
  }

  return html;
}

function renderChopEditor() {
  if (!chopEditorEl) return;

  if (!selectedChopLoopId || !beat.loops.includes(selectedChopLoopId)) {
    chopEditorEl.classList.add("hidden");
    chopEditorEl.innerHTML = "";
    return;
  }

  const loop = getLoopById(selectedChopLoopId);
  if (!loop) {
    closeChopEditor();
    return;
  }

  const recipe = getChopRecipe(loop.id);

  chopEditorEl.classList.remove("hidden");

  const topRowsHtml = buildChopRowsHtml(loop, recipe, "top");
  const bottomRowsHtml = buildChopRowsHtml(loop, recipe, "bottom");

  chopEditorEl.innerHTML = `
    <div class="chop-header">
      <div>
        <p class="label">${t("chopEditor")}</p>
        <h2>${loop.name}</h2>
      </div>
      <button class="ghost close-chop-button" type="button">${t("close")}</button>
    </div>

    <div class="chop-grid-buttons">
      <span class="loop-meta">${t("grid")}</span>
      <button class="${recipe.slices === 4 ? "selected" : ""}" data-grid-size="4" type="button">4</button>
      <button class="${recipe.slices === 8 ? "selected" : ""}" data-grid-size="8" type="button">8</button>
      <button class="${recipe.slices === 16 ? "selected" : ""}" data-grid-size="16" type="button">16</button>
      <button class="${recipe.slices === 32 ? "selected" : ""}" data-grid-size="32" type="button">32</button>
    </div>

    <div class="chop-lane-wrap">
      <p class="loop-meta">${t("rearrangedLoop")}</p>
      ${topRowsHtml}
    </div>

    <div class="chop-lane-wrap">
      <p class="loop-meta">${t("originalLoop")}</p>
      ${bottomRowsHtml}
    </div>

    <div class="chop-actions">
      <button class="secondary reset-chop-button" type="button">${t("reset")}</button>
      <button class="secondary random-chop-button" type="button">${t("random")}</button>
      <button class="secondary reverse-chop-button" type="button">${t("reverseSelected")}</button>
      <button class="secondary mute-chop-button" type="button">${t("muteSelected")}</button>
      <button class="done-chop-button" type="button">${t("done")}</button>
    </div>
  `;

  chopEditorEl.querySelector(".close-chop-button").addEventListener("click", closeChopEditor);
  chopEditorEl.querySelector(".done-chop-button").addEventListener("click", closeChopEditor);
  chopEditorEl.querySelector(".reset-chop-button").addEventListener("click", () => resetCurrentChop(loop.id));
  chopEditorEl.querySelector(".random-chop-button").addEventListener("click", () => randomizeChop(loop.id));
  chopEditorEl.querySelector(".reverse-chop-button").addEventListener("click", () => toggleReverseSelectedChop(loop.id));
  chopEditorEl.querySelector(".mute-chop-button").addEventListener("click", () => toggleSilentSelectedChop(loop.id));

  chopEditorEl.querySelectorAll("[data-grid-size]").forEach(button => {
    button.addEventListener("click", () => changeChopGrid(loop.id, Number(button.dataset.gridSize)));
  });

  chopEditorEl.querySelectorAll("[data-target-slot]").forEach(button => {
    button.addEventListener("click", () => {
      selectedChopSlotIndex = Number(button.dataset.targetSlot);
      renderChopEditor();
    });
  });

  chopEditorEl.querySelectorAll("[data-source-slice]").forEach(button => {
    button.addEventListener("click", () => {
      const sourceSliceIndex = Number(button.dataset.sourceSlice);
      setChopSlot(loop.id, selectedChopSlotIndex, sourceSliceIndex);
    });
  });

  const visiblePlayheadSlot = playingChopSlotByLoopId.has(loop.id)
  ? playingChopSlotByLoopId.get(loop.id)
  : 0;

  updateChopPlayhead(loop.id, visiblePlayheadSlot);

  drawChopWaveforms(loop.id);
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

function getReversedBuffer(loopId, buffer) {
  if (reversedBuffersById.has(loopId)) {
    return reversedBuffersById.get(loopId);
  }

  const reversedBuffer = audioContext.createBuffer(
    buffer.numberOfChannels,
    buffer.length,
    buffer.sampleRate
  );

  for (let channelIndex = 0; channelIndex < buffer.numberOfChannels; channelIndex++) {
    const originalData = buffer.getChannelData(channelIndex);
    const reversedData = reversedBuffer.getChannelData(channelIndex);

    for (let sampleIndex = 0; sampleIndex < buffer.length; sampleIndex++) {
      reversedData[sampleIndex] = originalData[buffer.length - 1 - sampleIndex];
    }
  }

  reversedBuffersById.set(loopId, reversedBuffer);
  return reversedBuffer;
}

function stopLoopSource(loopId) {
  const active = activeSourcesByLoopId.get(loopId);
  if (!active) return;

  active.stopped = true;

  if (active.schedulerTimer) {
    clearInterval(active.schedulerTimer);
  }

  if (Array.isArray(active.sources)) {
    active.sources.forEach(source => {
      try {
        source.stop();
      } catch (err) {}
    });
  }

  if (active.source) {
    try {
      active.source.stop();
    } catch (err) {}
  }

  activeSourcesByLoopId.delete(loopId);
  activeGainNodesByLoopId.delete(loopId);
}

function scheduleChopSlice(active, sourceSliceIndex, playTime, sourceOffset, duration, shouldFadeIn, shouldFadeOut, slotIndexForVisual, isReversed) {
  if (!active || active.stopped) return;
  if (duration <= 0.005) return;

  const source = audioContext.createBufferSource();
  const sliceGain = audioContext.createGain();

  source.buffer = isReversed ? active.reversedBuffer : active.buffer;

  const fadeTime = Math.min(0.012, duration * 0.35);

  sliceGain.gain.setValueAtTime(shouldFadeIn ? 0 : 1, playTime);

  if (shouldFadeIn) {
    sliceGain.gain.linearRampToValueAtTime(1, playTime + fadeTime);
  }

  if (shouldFadeOut) {
    sliceGain.gain.setValueAtTime(1, Math.max(playTime, playTime + duration - fadeTime));
    sliceGain.gain.linearRampToValueAtTime(0, playTime + duration);
  }

  source.connect(sliceGain);
  sliceGain.connect(active.gainNode);

  try {
    source.start(playTime, sourceOffset, duration);

    const delayUntilHeard = Math.max(0, (playTime - audioContext.currentTime) * 1000);

    setTimeout(() => {
      if (!active.stopped) {
        updateChopPlayhead(active.loopId, slotIndexForVisual);
      }
    }, delayUntilHeard);

  } catch (err) {
    console.warn("Could not schedule chop slice", err);
    return;
  }

  active.sources.push(source);

  source.onended = () => {
    active.sources = active.sources.filter(item => item !== source);
  };
}

function scheduleChopPlayheadOnly(active, playTime, slotIndexForVisual) {
  const delayUntilHeard = Math.max(0, (playTime - audioContext.currentTime) * 1000);

  setTimeout(() => {
    if (!active.stopped) {
      updateChopPlayhead(active.loopId, slotIndexForVisual);
    }
  }, delayUntilHeard);
}

function runChopScheduler(active) {
  const scheduleAheadTime = 0.55;

  while (!active.stopped && active.nextSlotTime < audioContext.currentTime + scheduleAheadTime) {
  const sourceSliceIndex = active.recipe.pattern[active.nextSlotIndex];
  const slotIndexForVisual = active.nextSlotIndex;

  const isSilent =
    active.recipe.silent &&
    active.recipe.silent[active.nextSlotIndex] === true;

  if (isSilent) {
    scheduleChopPlayheadOnly(active, active.nextSlotTime, slotIndexForVisual);

    active.nextSlotTime += active.sliceDuration;
    active.nextSlotIndex = (active.nextSlotIndex + 1) % active.recipe.slices;
    continue;
  }

  const isReversed = active.recipe.reverse && active.recipe.reverse[active.nextSlotIndex] === true;

    const sourceOffset = isReversed
      ? active.buffer.duration - ((sourceSliceIndex + 1) * active.sliceDuration)
      : sourceSliceIndex * active.sliceDuration;

    const previousSlotIndex = (active.nextSlotIndex - 1 + active.recipe.slices) % active.recipe.slices;
    const nextSlotIndex = (active.nextSlotIndex + 1) % active.recipe.slices;

    const previousSourceSliceIndex = active.recipe.pattern[previousSlotIndex];
    const nextSourceSliceIndex = active.recipe.pattern[nextSlotIndex];

    const naturalFromPrevious = ((previousSourceSliceIndex + 1) % active.recipe.slices) === sourceSliceIndex;
    const naturalToNext = ((sourceSliceIndex + 1) % active.recipe.slices) === nextSourceSliceIndex;

    scheduleChopSlice(
      active,
      sourceSliceIndex,
      active.nextSlotTime,
      sourceOffset,
      active.sliceDuration,
      !naturalFromPrevious,
      !naturalToNext,
      slotIndexForVisual,
      isReversed
    );

    active.nextSlotTime += active.sliceDuration;
    active.nextSlotIndex = (active.nextSlotIndex + 1) % active.recipe.slices;
  }
}

function startChoppedLoopSource(loopId, buffer, gainNode, actualStartTime) {
  const recipe = getChopRecipe(loopId);
  const sliceDuration = buffer.duration / recipe.slices;
  const offset = getOffsetAtTime(buffer.duration, actualStartTime);

  const startSlotIndex = Math.floor(offset / sliceDuration);
  const offsetInsideSlot = offset - (startSlotIndex * sliceDuration);

  const active = {
    loopId: loopId,
    type: "chopped",
    buffer: buffer,
    reversedBuffer: getReversedBuffer(loopId, buffer),
    gainNode: gainNode,
    recipe: recipe,
    sliceDuration: sliceDuration,
    sources: [],
    stopped: false,
    nextSlotIndex: startSlotIndex,
    nextSlotTime: actualStartTime
  };

  const firstSourceSliceIndex = recipe.pattern[startSlotIndex];
  const firstIsReversed = recipe.reverse && recipe.reverse[startSlotIndex] === true;
  const firstIsSilent = recipe.silent && recipe.silent[startSlotIndex] === true;

  const firstSourceOffset = firstIsReversed
    ? buffer.duration - ((firstSourceSliceIndex + 1) * sliceDuration) + offsetInsideSlot
    : (firstSourceSliceIndex * sliceDuration) + offsetInsideSlot;
  const firstDuration = sliceDuration - offsetInsideSlot;

  const previousSlotIndex = (startSlotIndex - 1 + recipe.slices) % recipe.slices;
  const nextSlotIndex = (startSlotIndex + 1) % recipe.slices;

  const previousSourceSliceIndex = recipe.pattern[previousSlotIndex];
  const nextSourceSliceIndex = recipe.pattern[nextSlotIndex];

  const naturalFromPrevious = ((previousSourceSliceIndex + 1) % recipe.slices) === firstSourceSliceIndex;
  const naturalToNext = ((firstSourceSliceIndex + 1) % recipe.slices) === nextSourceSliceIndex;

  if (firstIsSilent) {
    scheduleChopPlayheadOnly(active, actualStartTime, startSlotIndex);
  } else {
    scheduleChopSlice(
      active,
      firstSourceSliceIndex,
      actualStartTime,
      firstSourceOffset,
      firstDuration,
      !naturalFromPrevious,
      !naturalToNext,
      startSlotIndex,
      firstIsReversed
    );
  }

  active.nextSlotIndex = (startSlotIndex + 1) % recipe.slices;
  active.nextSlotTime = actualStartTime + firstDuration;

  active.schedulerTimer = setInterval(() => runChopScheduler(active), 80);
  runChopScheduler(active);

  activeSourcesByLoopId.set(loopId, active);
}

async function startLoopSource(loopId, startAtTime = null) {
  await ensureAudioContext();

  const loop = getLoopById(loopId);
  if (!loop) return;

  stopLoopSource(loopId);

  const buffer = await loadBuffer(loop);

  const gainNode = audioContext.createGain();
  gainNode.gain.value = loop.gain * getLoopVolume(loop.id);
  gainNode.connect(masterGainNode);

  const now = audioContext.currentTime;
  const actualStartTime = startAtTime ?? (now + 0.15);

  activeGainNodesByLoopId.set(loopId, gainNode);

  if (hasCustomChop(loop.id)) {
    startChoppedLoopSource(loopId, buffer, gainNode, actualStartTime);
    return;
  }

  const source = audioContext.createBufferSource();

  source.buffer = buffer;
  source.loop = true;

  source.connect(gainNode);

  const offset = getOffsetAtTime(buffer.duration, actualStartTime);

  source.start(actualStartTime, offset);

  activeSourcesByLoopId.set(loopId, {
    type: "normal",
    source: source,
    gainNode: gainNode
  });
}

async function startAllLoopSources() {
  await ensureAudioContext();

  if (beat.loops.length === 0) return;

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
  playButton.textContent = t("pause");
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
    active.stopped = true;

    if (active.schedulerTimer) {
      clearInterval(active.schedulerTimer);
    }

    if (Array.isArray(active.sources)) {
      active.sources.forEach(source => {
        try {
          source.stop();
        } catch (err) {}
      });
    }

    if (active.source) {
      try {
        active.source.stop();
      } catch (err) {}
    }
  });

  activeSourcesByLoopId.clear();
  activeGainNodesByLoopId.clear();

  isPlaying = false;

  playingChopSlotByLoopId.clear();

  document.querySelectorAll(".chop-slot").forEach(slot => {
    slot.classList.remove("playing");
  });

  playButton.textContent = t("play");
}

function stopBeat() {
  activeSourcesByLoopId.forEach((active, loopId) => {
    active.stopped = true;

    if (active.schedulerTimer) {
      clearInterval(active.schedulerTimer);
    }

    if (Array.isArray(active.sources)) {
      active.sources.forEach(source => {
        try {
          source.stop();
        } catch (err) {}
      });
    }

    if (active.source) {
      try {
        active.source.stop();
      } catch (err) {}
    }
  });

  activeSourcesByLoopId.clear();
  activeGainNodesByLoopId.clear();

  isPlaying = false;
  pausedOffset = 0;
  transportStartTime = 0;

  playingChopSlotByLoopId.clear();

  document.querySelectorAll(".chop-slot").forEach(slot => {
    slot.classList.remove("playing");
  });

  playButton.textContent = t("play");
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
  ensureBeatDataObjects();

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

  if (!beat.chops[newLoop.id]) {
    beat.chops[newLoop.id] = {
      slices: DEFAULT_CHOP_SLICES,
      pattern: makeIdentityPattern(DEFAULT_CHOP_SLICES)
    };
  }

  if (replacedLoopId) {
    delete beat.chops[replacedLoopId];
    delete beat.volumes[replacedLoopId];

    if (selectedChopLoopId === replacedLoopId) {
      selectedChopLoopId = newLoop.id;
      selectedChopSlotIndex = 0;
    }
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

  delete beat.chops[loopId];
  delete beat.volumes[loopId];

  if (selectedChopLoopId === loopId) {
    selectedChopLoopId = null;
    selectedChopSlotIndex = 0;
  }

  if (isPlaying) {
    stopLoopSource(loopId);
  }

  render();
}

function newBeat() {
  stopBeat();

  beat = {
    name: `${t("beatPrefix")} ${Math.floor(1000 + Math.random() * 9000)}`,
    loops: [],
    volumes: {},
    chops: {}
  };

  selectedChopLoopId = null;
  selectedChopSlotIndex = 0;

  render();
}

async function copyShareLink() {
  try {
    await navigator.clipboard.writeText(shareLinkEl.value);
    copyButton.textContent = t("copied");
    setTimeout(() => copyButton.textContent = t("copy"), 900);
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
