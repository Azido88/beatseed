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
    editChop: "Edit Remix",
    chop: "Remix / Rearrange",
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
    reverseSelected: "Stutter selected",
    muteSelected: "Mute selected",
    done: "Done",
    beatNamePrompt: "Beat name:",
    beatSaved: "Beat saved on this device.",
    untitledBeat: "Untitled Beat",
    friendBeat: "Friend Beat",
    beatPrefix: "Beat",
    startBeatTitle: "Create a Beat Together",
    collabBeatTitle: "{name} started this beat",
    startBeatText: "Add one musical idea, then pass it on.",
    collabBeatText: "Listen to what they made, then choose an element to add.",
    creatorNextTitle: "Nice - you added {elements}",
    creatorNextText: "Add another element yourself, or send this beat to a friend to complete it.",
    chooseDifferentElement: "Choose a Different Element",
    inviteShareTitle: "Send to a friend to complete",
    inviteShareHint: "Copy this link and send it to someone. They can listen and add the next part.",
    producerLabel: "Producer name",
    producerPlaceholder: "Your name or artist name",
    continueButton: "Continue",
    anonymousButton: "Continue as Anonymous",
    chooseElement: "Step 1: Choose an element",
    chooseStyle: "Step 2: Choose a style",
    pickLoop: "Step 3: Pick a loop",
    nextStep: "Next step",
    addAnotherElement: "Add another element",
    sendToFriend: "Send to a friend to complete",
    alreadyAdded: "Already added",
    noMatchingLoops: "No loops match that element and style yet.",
    completeBeat: "Beat complete",
    completeBeatText: "All available elements are in. Share the finished beat.",
    drumsElement: "Drums",
    bassElement: "Bass",
    instrumentsElement: "Other Instruments",
    vocalsElement: "Vocals",
    hiphopStyle: "Hip-Hop",
    electronicStyle: "Electronic",
    lofiStyle: "Lo-Fi",
    latinStyle: "Latin",
    nameStepHelp: "Tell your collaborator who is adding the next part.",
    chooseElementHelp: "Choose what you want to add to this beat.",
    chooseStyleHelp: "Pick a style to filter the loop list.",
    pickLoopHelp: "Now choose one loop from the list above.",
    continueBeatHelp: "Add another element yourself, or send this beat to a friend to complete it.",
    changeChoice: "Choose a Different Element",
    anonymousName: "Anonymous",
    chooseAnotherElement: "Choose another element",
    addedElementPrefix: "Nice - you added {element}.",
    pickDifferentLoop: "Pick a Different Loop",
    inviteLinkCopied: "Invite link copied",
    locked: "Locked",
    pickThisLoop: "Pick This Loop",
    filterResults: "Filter Results",
    hideFilters: "Hide Filters",
    previewing: "Previewing",
    noFiltersActive: "All styles",
    shareLatestUpdate: "Share Latest Update"
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
    editChop: "編輯 Remix",
    chop: "重新編排",
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
    reverseSelected: "Stutter 所選",
    muteSelected: "靜音所選",
    done: "完成",
    beatNamePrompt: "節拍名稱：",
    beatSaved: "節拍已儲存在此裝置。",
    untitledBeat: "未命名節拍",
    friendBeat: "朋友的節拍",
    beatPrefix: "節拍",
    startBeatTitle: "一起創作節拍",
    collabBeatTitle: "{name} 開始了這個節拍",
    startBeatText: "加入一個音樂想法，然後傳給朋友繼續完成。",
    collabBeatText: "先聽聽已經完成的部分，再選擇你要加入的元素。",
    producerLabel: "製作人名稱",
    producerPlaceholder: "你的名字或藝名",
    continueButton: "繼續",
    anonymousButton: "匿名繼續",
    chooseElement: "步驟 1：選擇元素",
    chooseStyle: "步驟 2：選擇風格",
    pickLoop: "步驟 3：選擇 Loop",
    nextStep: "下一步",
    addAnotherElement: "加入另一個元素",
    sendToFriend: "傳給朋友一起完成",
    alreadyAdded: "已加入",
    noMatchingLoops: "目前沒有符合這個元素和風格的 Loop。",
    completeBeat: "節拍完成",
    completeBeatText: "目前可用的元素都已加入。分享完成的節拍吧。",
    drumsElement: "鼓組",
    bassElement: "低音",
    instrumentsElement: "其他樂器",
    vocalsElement: "人聲",
    hiphopStyle: "Hip-Hop",
    electronicStyle: "Electronic",
    lofiStyle: "Lo-Fi",
    latinStyle: "Latin",
    nameStepHelp: "先告訴朋友這一段是誰加入的。",
    chooseElementHelp: "選擇你想加入這個節拍的元素。",
    chooseStyleHelp: "選擇風格來篩選 Loop。",
    pickLoopHelp: "現在從上方列表選擇一個 Loop。",
    continueBeatHelp: "你可以自己再加入另一個元素，也可以傳給朋友繼續完成。",
    changeChoice: "更改元素 / 風格",
    anonymousName: "匿名",
    chooseAnotherElement: "選擇另一個元素",
    addedElementPrefix: "很好 - 你加入了 {element}。",
    pickDifferentLoop: "選擇不同 Loop",
    inviteLinkCopied: "邀請連結已複製",
    locked: "已鎖定",
    pickThisLoop: "選擇這個 Loop",
    filterResults: "篩選結果",
    hideFilters: "隱藏篩選",
    previewing: "預覽中",
    noFiltersActive: "所有風格",
    shareLatestUpdate: "分享最新版本"
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
  { id: "drums_01", name: "Boom Bap Drums 01", file: "audio/loops/drums_1.mp3", type: "drums", tags: ["drums", "hiphop"], gain: 1.0 },
  { id: "drums_02", name: "Boom Bap Drums 02", file: "audio/loops/drums_2.mp3", type: "drums", tags: ["drums", "hiphop"], gain: 1.0 },
  { id: "drums_03", name: "Dusty Drums 01", file: "audio/loops/drums_3.mp3", type: "drums", tags: ["drums", "hiphop", "lofi"], gain: 1.0 },
  { id: "drums_04", name: "Funky Drums 01", file: "audio/loops/drums_4.mp3", type: "drums", tags: ["drums", "hiphop", "lofi"], gain: 1.0 },
  { id: "drums_05", name: "Funky Drums 02", file: "audio/loops/drums_5.mp3", type: "drums", tags: ["drums", "hiphop", "lofi"], gain: 1.0 },
  { id: "drums_06", name: "Reggaeton Groove 01", file: "audio/loops/drums_6.mp3", type: "drums", tags: ["drums", "latin"], gain: 1.0 },
  { id: "drums_07", name: "Reggaeton Groove 02", file: "audio/loops/drums_7.mp3", type: "drums", tags: ["drums", "latin"], gain: 1.0 },
  { id: "drums_08", name: "Reggaeton Groove 03", file: "audio/loops/drums_8.mp3", type: "drums", tags: ["drums", "latin"], gain: 1.0 },
  { id: "drums_09", name: "Chill Reggaeton Drums 01", file: "audio/loops/drums_9.mp3", type: "drums", tags: ["drums", "latin", "lofi"], gain: 1.0 },
  { id: "drums_10", name: "Reggaeton Groove 04", file: "audio/loops/drums_10.mp3", type: "drums", tags: ["drums", "latin"], gain: 1.0 },
  { id: "drums_11", name: "Funky Drums 03", file: "audio/loops/drums_11.mp3", type: "drums", tags: ["drums", "hiphop", "lofi"], gain: 1.0 },
  { id: "drums_12", name: "Funky Drums 04", file: "audio/loops/drums_12.mp3", type: "drums", tags: ["drums", "hiphop", "lofi"], gain: 1.0 },
  { id: "drums_13", name: "Boom Bap Drums 03", file: "audio/loops/drums_13.mp3", type: "drums", tags: ["drums", "hiphop"], gain: 1.0 },
  { id: "drums_14", name: "Funky Drums 05", file: "audio/loops/drums_14.mp3", type: "drums", tags: ["drums", "hiphop", "lofi"], gain: 1.0 },
  { id: "drums_15", name: "Chill Drums 01", file: "audio/loops/drums_15.mp3", type: "drums", tags: ["drums", "electronic", "lofi"], gain: 1.0 },
  { id: "drums_16", name: "Funky Drums 06", file: "audio/loops/drums_16.mp3", type: "drums", tags: ["drums", "hiphop", "lofi"], gain: 1.0 },
  { id: "drums_17", name: "Light Glitchy Drums 01", file: "audio/loops/drums_17.mp3", type: "drums", tags: ["drums", "electronic", "lofi"], gain: 1.0 },
  { id: "drums_18", name: "Funky Drums 07", file: "audio/loops/drums_18.mp3", type: "drums", tags: ["drums", "hiphop", "lofi"], gain: 1.0 },
  { id: "drums_19", name: "Chill Drums 02", file: "audio/loops/drums_19.mp3", type: "drums", tags: ["drums", "electronic", "lofi"], gain: 1.0 },
  { id: "drums_20", name: "Straight Drums 01", file: "audio/loops/drums_20.mp3", type: "drums", tags: ["drums", "electronic"], gain: 1.0 },


  { id: "bass_01", name: "Funky Deep Bass 01", file: "audio/loops/bass_1.mp3", type: "bass", tags: ["bass", "hiphop", "lofi", "latin"], gain: 0.8 },
  { id: "bass_02", name: "Funky Bass Guitar 01", file: "audio/loops/bass_2.mp3", type: "bass", tags: ["bass", "hiphop", "lofi", "latin"], gain: 0.8 },
  { id: "bass_03", name: "Funky Bass Guitar 02", file: "audio/loops/bass_3.mp3", type: "bass", tags: ["bass", "hiphop", "lofi", "latin"], gain: 0.8 },
  { id: "bass_04", name: "Rolling Bass Synth 01", file: "audio/loops/bass_4.mp3", type: "bass", tags: ["bass", "electronic"], gain: 0.8 },
  { id: "bass_05", name: "Funky Bass Guitar 03", file: "audio/loops/bass_5.mp3", type: "bass", tags: ["bass", "hiphop", "lofi", "latin"], gain: 0.8 },
  { id: "bass_06", name: "Fat Electronic Bass 01", file: "audio/loops/bass_6.mp3", type: "bass", tags: ["bass", "electronic"], gain: 0.8 },
  { id: "bass_07", name: "Funky Bass Guitar 04", file: "audio/loops/bass_7.mp3", type: "bass", tags: ["bass", "hiphop", "lofi", "latin"], gain: 0.8 },
  { id: "bass_08", name: "Funky Deep Bass 02", file: "audio/loops/bass_8.mp3", type: "bass", tags: ["bass", "hiphop", "lofi", "electronic", "latin"], gain: 0.8 },
  { id: "bass_09", name: "Glitchy Light Bass 01", file: "audio/loops/bass_9.mp3", type: "bass", tags: ["bass", "hiphop", "electronic"], gain: 0.8 },
  { id: "bass_10", name: "Playful Bass 01", file: "audio/loops/bass_10.mp3", type: "bass", tags: ["bass", "hiphop", "lofi", "latin"], gain: 0.8 },
  { id: "bass_11", name: "Crispy Bass 01", file: "audio/loops/bass_11.mp3", type: "bass", tags: ["bass", "hiphop", "lofi", "electronic", "latin"], gain: 0.8 },
  { id: "bass_12", name: "Simple Sub 01", file: "audio/loops/bass_12.mp3", type: "bass", tags: ["bass", "hiphop", "lofi", "latin"], gain: 0.8 },
  
  { id: "texture_01", name: "Chimes 01", file: "audio/loops/texture_1.mp3", type: "texture", tags: ["texture", "hiphop", "lofi"], gain: 0.6 },
  { id: "texture_02", name: "Gated Guitar 01", file: "audio/loops/texture_2.mp3", type: "texture", tags: ["texture", "electronic", "lofi"], gain: 0.6 },
  { id: "texture_03", name: "Ethereal Strings 01", file: "audio/loops/texture_3.mp3", type: "texture", tags: ["texture", "hiphop", "lofi"], gain: 0.6 },
  { id: "texture_04", name: "Electronic Glitches 01", file: "audio/loops/texture_4.mp3", type: "texture", tags: ["texture", "electronic"], gain: 0.6 },
  { id: "texture_05", name: "Electronic Glitches 02", file: "audio/loops/texture_5.mp3", type: "texture", tags: ["texture", "electronic"], gain: 0.6 },
  { id: "texture_06", name: "Video Game Bubbles 01", file: "audio/loops/texture_6.mp3", type: "texture", tags: ["texture", "electronic", "hiphop", "lofi"], gain: 0.6 },
  { id: "texture_07", name: "Electronic Glitches 03", file: "audio/loops/texture_7.mp3", type: "texture", tags: ["texture", "electronic", "hiphop", "lofi", "latin"], gain: 0.6 },
  { id: "texture_08", name: "Electronic Glitches 04", file: "audio/loops/texture_8.mp3", type: "texture", tags: ["texture", "electronic", "hiphop", "lofi", "latin"], gain: 0.6 },

  { id: "vocal_01", name: "Vocoder Glitched 01", file: "audio/loops/vocal_1.mp3", type: "vocals", tags: ["vocals", "electronic", "hiphop", "lofi"], gain: 0.7 },
  { id: "vocal_02", name: "Vocoder Vox Glitched 02", file: "audio/loops/vocal_2.mp3", type: "vocals", tags: ["vocals", "electronic", "hiphop", "lofi"], gain: 0.7 },
  { id: "vocal_03", name: "Melodic Vocal Cuts 01", file: "audio/loops/vocal_3.mp3", type: "vocals", tags: ["vocals", "electronic", "hiphop", "lofi", "latin"], gain: 0.7 },
  { id: "vocal_04", name: "Melodic Vocal Cuts 02", file: "audio/loops/vocal_4.mp3", type: "vocals", tags: ["vocals", "electronic", "hiphop", "lofi", "latin"], gain: 0.7 },
  { id: "vocal_05", name: "Ethereal Choir 01", file: "audio/loops/vocal_5.mp3", type: "vocals", tags: ["vocals", "electronic", "hiphop", "lofi", "latin"], gain: 0.7 }
];


const ELEMENT_OPTIONS = [
  { key: "drums", textKey: "drumsElement" },
  { key: "bass", textKey: "bassElement" },
  { key: "texture", textKey: "instrumentsElement" },
  { key: "vocals", textKey: "vocalsElement" }
];

const STYLE_OPTIONS = [
  { key: "hiphop", textKey: "hiphopStyle" },
  { key: "electronic", textKey: "electronicStyle" },
  { key: "lofi", textKey: "lofiStyle" },
  { key: "latin", textKey: "latinStyle" }
];

const PRODUCER_NAME_KEY = "beatseed_producer_name";
const MAX_LAYERS = 8;
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
let activePreviewSource = null;
let activePreviewGainNode = null;

let isPlaying = false;
let transportStartTime = 0;
let pausedOffset = 0;

let selectedChopLoopId = null;
let selectedChopSlotIndex = 0;

let selectedElementFilter = null;
let selectedStyleFilter = null;
let selectedStyleFilters = [];
let previewLoopId = null;
let previewLoopVolume = 1.0;
let filterPanelOpen = false;
let currentProducerName = localStorage.getItem(PRODUCER_NAME_KEY) || "";
let producerNameDecisionMade = false;
let hasAutoScrolledToPlayer = false;
let loadedFromShareLink = false;
let pendingContributionLoopId = null;
let pendingContributionElementFilter = null;
let pendingContributionStyleFilter = null;
let currentUserContributionType = null;

let chopEditorPlayheadAnimation = null;

let beat = {
  name: "Untitled Beat",
  loops: [],
  volumes: {},
  chops: {},
  startedBy: "",
  contributors: {}
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
const onboardingPanelEl = document.getElementById("onboardingPanel");
const playerCardEl = document.querySelector(".player-card");
const libraryCardEl = document.querySelector(".library-card");
const shareCardEl = document.querySelector(".share-card");
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
  if (!beat.contributors) beat.contributors = {};
  if (!beat.startedBy) beat.startedBy = "";
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
      stutter: {},
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

  const stutter = {};
  const incomingStutter = recipe.stutter || recipe.reverse || {};
  if (incomingStutter) {
    for (const key in incomingStutter) {
      const cleanKey = Math.floor(Number(key));
      if (!Number.isNaN(cleanKey) && cleanKey >= 0 && cleanKey < sliceCount) {
        stutter[cleanKey] = incomingStutter[key] === true;
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
    stutter: stutter,
    silent: silent
  };
}

function setChopRecipe(loopId, recipe) {
  ensureBeatDataObjects();

  beat.chops[loopId] = {
    slices: recipe.slices,
    pattern: recipe.pattern.slice(),
    stutter: recipe.stutter || recipe.reverse || {},
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
    if (recipe.stutter && recipe.stutter[i] === true) return true;
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
    const isStutter = useChopPattern && recipe.stutter && recipe.stutter[slotIndex] === true;

    const sourceStartSample = Math.floor((sourceSliceIndex / sliceCount) * data.length);
    const sourceEndSample = Math.floor(((sourceSliceIndex + 1) / sliceCount) * data.length);
    const sourceLength = Math.max(1, sourceEndSample - sourceStartSample);

    const visualSlotIndex = slotIndex - startSlot;
    const visualStartX = visualSlotIndex * slotWidth;
    const visualEndX = (visualSlotIndex + 1) * slotWidth;

    for (let px = Math.floor(visualStartX); px < Math.floor(visualEndX); px++) {
      const rawLocalPos = (px - visualStartX) / slotWidth;
      const localPos = isStutter ? (rawLocalPos % Math.max(0.01, (1 / 64) / (1 / sliceCount))) : rawLocalPos;
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

  // Strong musical bar markers.
  // 16-slice mode: markers at 0, 4, 8, 12, 16.
  // 32-slice mode: each visible row gets start, middle, and end markers.
  const quarterSize = sliceCount / 4;
  const markerSlots = [
    0,
    quarterSize,
    quarterSize * 2,
    quarterSize * 3,
    sliceCount
  ];

  ctx.strokeStyle = "rgba(255, 255, 255, 0.48)";
  ctx.lineWidth = 2.5;

  markerSlots.forEach(markerSlot => {
    if (markerSlot < startSlot || markerSlot > rowEndSlot) return;

    const markerX = (markerSlot - startSlot) * slotWidth;

    ctx.beginPath();
    ctx.moveTo(markerX, 0);
    ctx.lineTo(markerX, displayHeight);
    ctx.stroke();
  });
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

        const existingIndex = isSingleUseElement(incomingLoop.type)
          ? cleanedLoops.findIndex(existingId => {
              const existingLoop = getLoopById(existingId);
              return existingLoop && existingLoop.type === incomingLoop.type;
            })
          : -1;

        if (existingIndex >= 0) {
          cleanedLoops[existingIndex] = incomingLoop.id;
        } else if (cleanedLoops.length < MAX_LAYERS) {
          cleanedLoops.push(incomingLoop.id);
        }
      });

      loadedFromShareLink = cleanedLoops.length > 0;

      beat = {
        name: incoming.name || t("friendBeat"),
        loops: cleanedLoops,
        volumes: incoming.volumes || {},
        chops: incoming.chops || {},
        startedBy: incoming.startedBy || "",
        contributors: incoming.contributors || {}
      };
    }
  } catch (err) {
    console.warn("Could not read beat from URL", err);
  }

  ensureBeatDataObjects();
  pendingContributionLoopId = null;
  pendingContributionElementFilter = null;
  pendingContributionStyleFilter = null;
  currentUserContributionType = null;
  selectedStyleFilters = [];
  previewLoopId = null;
  filterPanelOpen = false;
}

function updateShareLink() {
  ensureBeatDataObjects();

  const nextUrl = getCurrentShareUrl();
  shareLinkEl.value = nextUrl;
  history.replaceState(null, "", nextUrl);
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

  loadedFromShareLink = false;
  beat = JSON.parse(JSON.stringify(found.beat));
  ensureBeatDataObjects();
  producerNameDecisionMade = false;
  loadedFromShareLink = false;

  pendingContributionLoopId = null;
  pendingContributionElementFilter = null;
  pendingContributionStyleFilter = null;
  currentUserContributionType = null;

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


function getDisplayProducerName() {
  return currentProducerName.trim() || t("anonymousName");
}

function saveProducerNameFromInput() {
  const input = document.getElementById("producerNameInput");
  if (!input) return;

  currentProducerName = input.value.trim();
  producerNameDecisionMade = true;

  if (currentProducerName) {
    localStorage.setItem(PRODUCER_NAME_KEY, currentProducerName);
  } else {
    localStorage.setItem(PRODUCER_NAME_KEY, "");
  }

  render();
}

function continueAsAnonymous() {
  currentProducerName = "";
  producerNameDecisionMade = true;
  localStorage.setItem(PRODUCER_NAME_KEY, "");
  render();
}

function hasProducerNameDecision() {
  return producerNameDecisionMade;
}

function isSingleUseElement(elementKey) {
  return elementKey === "drums" || elementKey === "bass";
}

function getUsedElementKeys() {
  return beat.loops
    .map(loopId => getLoopById(loopId))
    .filter(loop => loop)
    .map(loop => loop.type);
}

function isElementUsed(elementKey) {
  return getUsedElementKeys().includes(elementKey);
}

function isElementUnavailable(elementKey) {
  if (!isSingleUseElement(elementKey)) {
    return false;
  }

  return isElementUsed(elementKey);
}

function getLoopContributor(loopId) {
  const loop = getLoopById(loopId);
  if (!loop || !beat.contributors) return "";

  if (beat.contributors[loopId]) {
    return beat.contributors[loopId];
  }

  if (beat.contributors[loop.type]) {
    return beat.contributors[loop.type];
  }

  return "";
}

function beatIsShareReady() {
  const used = getUsedElementKeys();

  return used.includes("drums")
    && used.includes("bass")
    && used.some(elementKey => elementKey !== "drums" && elementKey !== "bass");
}


function getCompletedLoopsOwnedByCurrentUser() {
  const currentName = getDisplayProducerName();

  return beat.loops.filter(loopId => {
    if (pendingContributionLoopId === loopId) return false;
    return getLoopContributor(loopId) === currentName;
  });
}

function currentUserOwnsAnyCompletedLoop() {
  return getCompletedLoopsOwnedByCurrentUser().length > 0;
}

function getAvailableLoopsForSelectedElement() {
  if (!selectedElementFilter) return [];

  return LOOP_LIBRARY.filter(loop => {
    if (loop.type !== selectedElementFilter) return false;
    if (beat.loops.includes(loop.id)) return false;

    if (isSingleUseElement(loop.type) && isElementUsed(loop.type)) {
      return false;
    }

    if (selectedStyleFilters.length === 0) {
      return true;
    }

    if (!Array.isArray(loop.tags)) return false;

    return selectedStyleFilters.some(styleKey => loop.tags.includes(styleKey));
  });
}

function getElementText(elementKey) {
  const found = ELEMENT_OPTIONS.find(option => option.key === elementKey);
  return found ? t(found.textKey) : elementKey;
}

function getContributorElementsText() {
  const used = getUsedElementKeys();

  if (used.length === 0) {
    return "";
  }

  return used.map(key => getElementText(key)).join(" + ");
}

function getStyleText(styleKey) {
  const found = STYLE_OPTIONS.find(option => option.key === styleKey);
  return found ? t(found.textKey) : styleKey;
}

function loopMatchesGuidedFilters(loop) {
  if (!selectedElementFilter) return false;
  if (!loop || !Array.isArray(loop.tags)) return false;
  if (loop.type !== selectedElementFilter) return false;

  if (selectedStyleFilters.length === 0) {
    return true;
  }

  return selectedStyleFilters.some(styleKey => loop.tags.includes(styleKey));
}


function currentUserHasCompletedContribution() {
  return currentUserContributionType !== null && pendingContributionLoopId === null;
}

function getCurrentShareUrl() {
  ensureBeatDataObjects();

  const url = new URL(window.location.href);

  if (beat.loops.length > 0) {
    url.hash = "beat=" + safeEncode(beat);
  } else {
    url.hash = "";
  }

  return url.toString();
}

function getPendingLoopElementText() {
  const loop = pendingContributionLoopId ? getLoopById(pendingContributionLoopId) : null;
  return loop ? getElementText(loop.type) : "";
}

async function copyInviteLinkFromGuide() {
  const inviteInput = document.getElementById("guideInviteLink");
  const inviteButton = document.getElementById("guideCopyInviteButton");
  const valueToCopy = inviteInput ? inviteInput.value : getCurrentShareUrl();

  try {
    await navigator.clipboard.writeText(valueToCopy);
    if (inviteButton) {
      inviteButton.textContent = t("inviteLinkCopied");
      setTimeout(() => inviteButton.textContent = t("sendToFriend"), 900);
    }
  } catch (err) {
    if (inviteInput) {
      inviteInput.select();
      document.execCommand("copy");
    }
  }
}

function buildGuideShareHtml(buttonTextKey = "sendToFriend") {
  return `
    <div class="guide-invite-box">
      <button id="guideCopyInviteButton" type="button">${t(buttonTextKey)}</button>
      <input id="guideInviteLink" readonly value="${getCurrentShareUrl()}">
      <p class="hint">${t("inviteShareHint")}</p>
    </div>
  `;
}

function renderOnboardingPanel() {
  if (!onboardingPanelEl) return;

  const hasLoops = beat.loops.length > 0;
  const producerReady = hasProducerNameDecision();
  const starterName = beat.startedBy || Object.values(beat.contributors || {})[0] || "";
  const isSharedCollaboration = loadedFromShareLink && hasLoops;
  const hasCompletedOwnContribution = currentUserHasCompletedContribution();
  const ownsCompletedLoop = currentUserOwnsAnyCompletedLoop();

  onboardingPanelEl.classList.remove("hidden");

  if (pendingContributionLoopId) {
    onboardingPanelEl.innerHTML = "";
    onboardingPanelEl.classList.add("hidden");
    return;
  }

  const contributionSummary = hasLoops
    ? beat.loops.map(loopId => {
        const loop = getLoopById(loopId);
        if (!loop) return "";
        const contributor = getLoopContributor(loopId) || t("anonymousName");
        return `<div class="contributor-pill">${contributor} - ${getElementText(loop.type)}</div>`;
      }).join("")
    : "";

  const producerHtml = `
    <div class="producer-box single-step-box">
      <label class="label" for="producerNameInput">${t("producerLabel")}</label>
      <input
        id="producerNameInput"
        class="producer-input"
        type="text"
        value="${currentProducerName}"
        placeholder="${t("producerPlaceholder")}">
      <div class="producer-actions">
        <button id="continueProducerButton" type="button">${t("continueButton")}</button>
        <button id="anonymousProducerButton" class="secondary" type="button">${t("anonymousButton")}</button>
      </div>
    </div>
  `;

  const elementButtonsHtml = ELEMENT_OPTIONS.map(option => {
    const unavailable = isElementUnavailable(option.key);
    const hasLoopsForElement = LOOP_LIBRARY.some(loop => loop.type === option.key);
    const selected = selectedElementFilter === option.key;
    const disabled = unavailable || !hasLoopsForElement || beat.loops.length >= MAX_LAYERS;
    const extraText = unavailable ? ` <span>${t("alreadyAdded")}</span>` : "";

    return `
      <button
        class="guide-choice-button ${selected ? "selected" : ""}"
        data-guide-element="${option.key}"
        ${disabled ? "disabled" : ""}
        type="button">
        ${t(option.textKey)}${extraText}
      </button>
    `;
  }).join("");

  if (!producerReady) {
    const title = isSharedCollaboration && starterName
      ? t("collabBeatTitle").replace("{name}", starterName)
      : t("startBeatTitle");

    const body = isSharedCollaboration
      ? t("collabBeatText")
      : t("startBeatText");

    onboardingPanelEl.innerHTML = `
      <div class="guide-header single-step-header">
        <p class="label">BeatSeed</p>
        <h2>${title}</h2>
        <p class="guide-copy">${body}</p>
      </div>
      ${producerHtml}
    `;
  } else if (beat.loops.length >= MAX_LAYERS) {
    onboardingPanelEl.innerHTML = `
      <div class="guide-header single-step-header">
        <p class="label">${t("nextStep")}</p>
        <h2>${t("completeBeat")}</h2>
        <p class="guide-copy">${t("completeBeatText")}</p>
      </div>
      ${contributionSummary ? `<div class="contributor-list">${contributionSummary}</div>` : ""}
      ${buildGuideShareHtml(ownsCompletedLoop ? "shareLatestUpdate" : "sendToFriend")}
    `;
  } else if (!selectedElementFilter) {
    let title;
    let body;
    let eyebrow;
    let elementHeading;

    if (hasLoops && isSharedCollaboration && !hasCompletedOwnContribution && !ownsCompletedLoop && starterName) {
      eyebrow = t("nextStep");
      title = t("collabBeatTitle").replace("{name}", starterName);
      body = t("collabBeatText");
      elementHeading = t("chooseElement");
    } else if (hasLoops && hasCompletedOwnContribution) {
      eyebrow = t("nextStep");
      title = t("continueBeatHelp");
      body = t("addedElementPrefix").replace("{element}", getElementText(currentUserContributionType));
      elementHeading = t("chooseAnotherElement");
    } else if (hasLoops) {
      eyebrow = t("nextStep");
      title = t("continueBeatHelp");
      body = ownsCompletedLoop ? t("chooseElementHelp") : t("collabBeatText");
      elementHeading = t("chooseAnotherElement");
    } else {
      eyebrow = "BeatSeed";
      title = t("chooseElement");
      body = t("chooseElementHelp");
      elementHeading = t("chooseElement");
    }

    onboardingPanelEl.innerHTML = `
      <div class="guide-header single-step-header">
        <p class="label">${eyebrow}</p>
        <h2>${title}</h2>
        <p class="guide-copy">${body}</p>
      </div>
      ${contributionSummary ? `<div class="contributor-list">${contributionSummary}</div>` : ""}
      <div class="guide-step single-visible-step">
        <h3>${elementHeading}</h3>
        <div class="guide-button-grid">
          ${elementButtonsHtml}
        </div>
      </div>
      ${hasLoops && ownsCompletedLoop ? buildGuideShareHtml(hasCompletedOwnContribution ? "sendToFriend" : "shareLatestUpdate") : ""}
    `;
  } else {
    onboardingPanelEl.innerHTML = "";
    onboardingPanelEl.classList.add("hidden");
  }

  const producerInput = document.getElementById("producerNameInput");
  if (producerInput) {
    producerInput.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        saveProducerNameFromInput();
      }
    });
  }

  const continueButton = document.getElementById("continueProducerButton");
  if (continueButton) {
    continueButton.addEventListener("click", saveProducerNameFromInput);
  }

  const anonymousButton = document.getElementById("anonymousProducerButton");
  if (anonymousButton) {
    anonymousButton.addEventListener("click", continueAsAnonymous);
  }

  onboardingPanelEl.querySelectorAll("[data-guide-element]").forEach(button => {
    button.addEventListener("click", () => {
      stopPreviewLoop();
      previewLoopId = null;
      selectedElementFilter = button.dataset.guideElement;
      selectedStyleFilter = null;
      selectedStyleFilters = [];
      filterPanelOpen = false;
      render();
    });
  });

  const guideCopyInviteButton = document.getElementById("guideCopyInviteButton");
  if (guideCopyInviteButton) {
    guideCopyInviteButton.addEventListener("click", copyInviteLinkFromGuide);
  }
}

function updateGuidedLayoutVisibility() {
  const hasLoops = beat.loops.length > 0;
  const producerReady = hasProducerNameDecision();
  const readyToChooseLoop = producerReady && selectedElementFilter && !pendingContributionLoopId;
  const showPlayer = producerReady && hasLoops;
  const showGuideFooter = producerReady && hasLoops && !pendingContributionLoopId && currentUserOwnsAnyCompletedLoop();

  if (playerCardEl) {
    playerCardEl.classList.toggle("hidden", !showPlayer);
  }

  if (libraryCardEl) {
    libraryCardEl.classList.toggle("hidden", !readyToChooseLoop);
  }

  if (shareCardEl) {
    shareCardEl.classList.add("hidden");
  }

  const footerEl = document.querySelector(".site-footer");
  if (footerEl) {
    footerEl.classList.toggle("hidden", !showGuideFooter);
  }

  if (!onboardingPanelEl || !playerCardEl) return;

  if (!producerReady) {
    playerCardEl.insertAdjacentElement("beforebegin", onboardingPanelEl);
    return;
  }

  if (pendingContributionLoopId) {
    playerCardEl.insertAdjacentElement("afterend", onboardingPanelEl);
    return;
  }

  if (readyToChooseLoop) {
    if (libraryCardEl) {
      libraryCardEl.insertAdjacentElement("afterend", onboardingPanelEl);
    }
    return;
  }

  if (hasLoops) {
    playerCardEl.insertAdjacentElement("afterend", onboardingPanelEl);
  } else {
    playerCardEl.insertAdjacentElement("beforebegin", onboardingPanelEl);
  }
}


function canCurrentUserEditLoop(loopId) {
  const loop = getLoopById(loopId);
  if (!loop) return false;

  // The loop currently being added can always be edited until the user clicks Done.
  if (pendingContributionLoopId === loopId) {
    return true;
  }

  const ownerName = getLoopContributor(loopId);
  return ownerName === getDisplayProducerName();
}

function render() {
  ensureBeatDataObjects();

  if (!beat.name || beat.name === "Untitled Beat") {
    beat.name = `${t("beatPrefix")} ${Math.floor(1000 + Math.random() * 9000)}`;
  }

  beatNameEl.textContent = beat.name;

  newBeatButton.textContent = t("newBeat");
  copyButton.textContent = t("copy");
  playButton.textContent = isPlaying ? t("pause") : t("play");
  stopButton.textContent = t("stop");

  document.getElementById("heroEyebrow").textContent = t("heroEyebrow");
  document.getElementById("heroTagline").textContent = t("heroTagline");
  document.getElementById("chooseContributionLabel").textContent = selectedElementFilter
    ? t("pickLoop")
    : t("chooseContribution");
  document.getElementById("addLoopTitle").textContent = selectedElementFilter
    ? getElementText(selectedElementFilter)
    : t("addLoop");
  document.getElementById("shareLinkLabel").textContent = t("inviteShareTitle");
  document.getElementById("shareHint").textContent = t("inviteShareHint");
  document.getElementById("footerMadeBy").textContent = t("madeBy");
  document.getElementById("footerText").textContent = t("footerText");
  document.getElementById("wishlistText").textContent = t("wishlist");
  document.getElementById("supportText").textContent = t("support");

  loopCountEl.style.display = "none";

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

  renderOnboardingPanel();
  updateGuidedLayoutVisibility();

  activeLoopsEl.innerHTML = "";

  if (beat.loops.length === 0) {
    activeLoopsEl.innerHTML = `<div class="empty">${t("noLoops")}</div>`;
  } else {
    beat.loops.forEach((loopId, index) => {
      const loop = getLoopById(loopId);
      if (!loop) return;

      const contributor =
          getLoopContributor(loop.id) ||
          t("anonymousName");

      const row = document.createElement("div");
      row.className = "active-loop";
      row.innerHTML = `
        <strong>${index + 1}. ${loop.name}</strong>
        <span class="loop-meta">${getElementText(loop.type)} - ${contributor}</span>

        <div class="volume-control">
          <span class="loop-meta">${t("vol")}</span>
          <input class="volume-slider" type="range" min="0" max="150" value="${Math.round(getLoopVolume(loop.id) * 100)}">
          <span class="volume-readout">${Math.round(getLoopVolume(loop.id) * 100)}%</span>
        </div>

        ${
          canCurrentUserEditLoop(loop.id)
            ? `<button class="edit-chop-button" type="button">${hasCustomChop(loop.id) ? t("editChop") : t("chop")}</button>
               <button class="remove-loop-button" type="button">${t("remove")}</button>`
            : `<span class="locked-loop-pill">${t("locked")}</span>`
        }
      `;

      const removeLoopButton = row.querySelector(".remove-loop-button");
      if (removeLoopButton) {
        removeLoopButton.addEventListener("click", () => removeLoop(loop.id));
      }

      const editChopButton = row.querySelector(".edit-chop-button");
      if (editChopButton) {
        editChopButton.addEventListener("click", () => openChopEditor(loop.id));
      }

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

  if (selectedElementFilter) {
    const filteredLoops = getAvailableLoopsForSelectedElement();
    const previewLoopData = previewLoopId ? getLoopById(previewLoopId) : null;

    const filterButtonsHtml = STYLE_OPTIONS.map(option => {
      const selected = selectedStyleFilters.includes(option.key);

      return `
        <button
          class="filter-chip ${selected ? "selected" : ""}"
          data-filter-style="${option.key}"
          type="button">
          ${t(option.textKey)}
        </button>
      `;
    }).join("");

    const loopButtonsHtml = filteredLoops.map((loop, screenIndex) => {
      const selected = previewLoopId === loop.id;

      return `
        <button
          class="loop-number-button ${selected ? "selected" : ""}"
          data-preview-loop-id="${loop.id}"
          type="button"
          aria-label="${loop.name}">
          ${screenIndex + 1}
        </button>
      `;
    }).join("");

    loopLibraryEl.innerHTML = `
      <div class="loop-picker-panel">
        <div class="number-loop-grid">
          ${loopButtonsHtml || `<div class="empty">${t("noMatchingLoops")}</div>`}
        </div>

        <div class="preview-status ${previewLoopData ? "active" : ""}">
          ${previewLoopData ? `${t("previewing")}: <strong>${previewLoopData.name}</strong>` : t("pickLoopHelp")}
        </div>

        <div class="loop-picker-actions">
          <button
            id="pickPreviewLoopButton"
            type="button"
            ${previewLoopData ? "" : "disabled"}>
            ${t("pickThisLoop")}
          </button>
          <button id="toggleFilterPanelButton" class="secondary" type="button">
            ${filterPanelOpen ? t("hideFilters") : t("filterResults")}
          </button>
        </div>

        <div class="preview-volume-control ${previewLoopData ? "" : "hidden"}">
          <span class="loop-meta">${t("vol")}</span>
          <input
            id="previewVolumeSlider"
            class="volume-slider"
            type="range"
            min="0"
            max="150"
            value="${Math.round(previewLoopVolume * 100)}">
          <span id="previewVolumeReadout" class="volume-readout">${Math.round(previewLoopVolume * 100)}%</span>
        </div>

        <div class="filter-panel ${filterPanelOpen ? "" : "hidden"}">
          <p class="loop-meta">${selectedStyleFilters.length === 0 ? t("noFiltersActive") : selectedStyleFilters.map(getStyleText).join(" / ")}</p>
          <div class="filter-chip-grid">
            ${filterButtonsHtml}
          </div>
        </div>
      </div>
    `;

    loopLibraryEl.querySelectorAll("[data-preview-loop-id]").forEach(button => {
      button.addEventListener("click", () => previewLoop(button.dataset.previewLoopId));
    });

    const pickPreviewLoopButton = document.getElementById("pickPreviewLoopButton");
    if (pickPreviewLoopButton) {
      pickPreviewLoopButton.addEventListener("click", confirmPreviewLoop);
    }

  const previewVolumeSlider = document.getElementById("previewVolumeSlider");
  const previewVolumeReadout = document.getElementById("previewVolumeReadout");

  if (previewVolumeSlider && previewVolumeReadout) {
    previewVolumeSlider.addEventListener("input", () => {
      previewLoopVolume = Number(previewVolumeSlider.value) / 100;
      previewVolumeReadout.textContent = `${previewVolumeSlider.value}%`;

      if (activePreviewGainNode && previewLoopId) {
        const loop = getLoopById(previewLoopId);

        if (loop) {
          activePreviewGainNode.gain.value = loop.gain * previewLoopVolume;
        }
      }
    });
  }   

    const toggleFilterPanelButton = document.getElementById("toggleFilterPanelButton");
    if (toggleFilterPanelButton) {
      toggleFilterPanelButton.addEventListener("click", () => {
        filterPanelOpen = !filterPanelOpen;
        render();
      });
    }

    loopLibraryEl.querySelectorAll("[data-filter-style]").forEach(button => {
      button.addEventListener("click", () => {
        const styleKey = button.dataset.filterStyle;

        if (selectedStyleFilters.includes(styleKey)) {
          selectedStyleFilters = selectedStyleFilters.filter(existingKey => existingKey !== styleKey);
        } else {
          selectedStyleFilters.push(styleKey);
        }

        if (previewLoopId && !getAvailableLoopsForSelectedElement().some(loop => loop.id === previewLoopId)) {
          stopPreviewLoop();
          previewLoopId = null;
        }

        render();
      });
    });
  }

  updateShareLink();
  renderChopEditor();
  renderSavedBeats();
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


function finishChopContribution() {
  if (pendingContributionLoopId) {
    const loop = getLoopById(pendingContributionLoopId);
    currentUserContributionType = loop ? loop.type : currentUserContributionType;
    pendingContributionLoopId = null;
    pendingContributionElementFilter = null;
    pendingContributionStyleFilter = null;
    selectedElementFilter = null;
    selectedStyleFilter = null;
  }

  closeChopEditor();
  render();
}

function pickDifferentLoopForPendingContribution() {
  if (!pendingContributionLoopId) {
    closeChopEditor();
    return;
  }

  const loopIdToRemove = pendingContributionLoopId;
  const loopToRemove = getLoopById(loopIdToRemove);

  beat.loops = beat.loops.filter(existingLoopId => existingLoopId !== loopIdToRemove);
  delete beat.chops[loopIdToRemove];
  delete beat.volumes[loopIdToRemove];

  if (beat.contributors) {
    delete beat.contributors[loopIdToRemove];

    if (loopToRemove && isSingleUseElement(loopToRemove.type)) {
      delete beat.contributors[loopToRemove.type];
    }
  }

  selectedElementFilter = pendingContributionElementFilter || (loopToRemove ? loopToRemove.type : null);
  selectedStyleFilter = null;
  selectedStyleFilters = Array.isArray(pendingContributionStyleFilter) ? pendingContributionStyleFilter.slice() : (pendingContributionStyleFilter ? [pendingContributionStyleFilter] : []);

  pendingContributionLoopId = null;
  pendingContributionElementFilter = null;
  pendingContributionStyleFilter = null;
  currentUserContributionType = null;

  if (selectedChopLoopId === loopIdToRemove) {
    selectedChopLoopId = null;
    selectedChopSlotIndex = 0;
  }

  if (isPlaying) {
    stopLoopSource(loopIdToRemove);
  }

  render();
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

  if (!recipe.stutter) {
    recipe.stutter = {};
  }

  recipe.stutter[selectedChopSlotIndex] = recipe.stutter[selectedChopSlotIndex] !== true;

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
        const stutterText = recipe.stutter && recipe.stutter[slotIndex] === true ? "≋ " : "";
        const slotText = isSilent ? "X" : `${stutterText}${sourceSliceIndex + 1}`;

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
      ${pendingContributionLoopId === loop.id ? "" : `<button class="ghost close-chop-button" type="button">${t("close")}</button>`}
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
      <button class="secondary pick-different-loop-button" type="button">${t("pickDifferentLoop")}</button>
      <button class="done-chop-button" type="button">${t("done")}</button>
    </div>
  `;

  const closeChopButton = chopEditorEl.querySelector(".close-chop-button");
  if (closeChopButton) {
    closeChopButton.addEventListener("click", closeChopEditor);
  }
  chopEditorEl.querySelector(".done-chop-button").addEventListener("click", finishChopContribution);
  chopEditorEl.querySelector(".reset-chop-button").addEventListener("click", () => resetCurrentChop(loop.id));
  chopEditorEl.querySelector(".random-chop-button").addEventListener("click", () => randomizeChop(loop.id));
  chopEditorEl.querySelector(".reverse-chop-button").addEventListener("click", () => toggleReverseSelectedChop(loop.id));
  chopEditorEl.querySelector(".mute-chop-button").addEventListener("click", () => toggleSilentSelectedChop(loop.id));
  chopEditorEl.querySelector(".pick-different-loop-button").addEventListener("click", pickDifferentLoopForPendingContribution);

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

    document.addEventListener(
      "touchstart",
      async () => {
        if (audioContext && audioContext.state === "suspended") {
          await audioContext.resume();
        }
      },
      { once: true }
    );

    document.addEventListener(
      "click",
      async () => {
        if (audioContext && audioContext.state === "suspended") {
          await audioContext.resume();
        }
      },
      { once: true }
    );

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

function scheduleChopSlice(active, sourceSliceIndex, playTime, sourceOffset, duration, shouldFadeIn, shouldFadeOut, slotIndexForVisual, isStutter) {
  if (!active || active.stopped) return;
  if (duration <= 0.005) return;

  const tinyChunkDuration = active.buffer.duration / 64;
  const useStutter = isStutter && tinyChunkDuration > 0.005;
  const repeatDuration = useStutter ? Math.min(tinyChunkDuration, duration) : duration;
  const repeatCount = useStutter ? Math.ceil(duration / repeatDuration) : 1;

  for (let repeatIndex = 0; repeatIndex < repeatCount; repeatIndex++) {
    const segmentStartTime = playTime + (repeatIndex * repeatDuration);
    const remainingDuration = (playTime + duration) - segmentStartTime;
    const segmentDuration = Math.min(repeatDuration, remainingDuration);

    if (segmentDuration <= 0.005) continue;

    const source = audioContext.createBufferSource();
    const sliceGain = audioContext.createGain();

    source.buffer = active.buffer;

    const fadeTime = Math.min(0.006, segmentDuration * 0.35);
    const fadeThisIn = shouldFadeIn || useStutter;
    const fadeThisOut = shouldFadeOut || useStutter;

    sliceGain.gain.setValueAtTime(fadeThisIn ? 0 : 1, segmentStartTime);

    if (fadeThisIn) {
      sliceGain.gain.linearRampToValueAtTime(1, segmentStartTime + fadeTime);
    }

    if (fadeThisOut) {
      sliceGain.gain.setValueAtTime(1, Math.max(segmentStartTime, segmentStartTime + segmentDuration - fadeTime));
      sliceGain.gain.linearRampToValueAtTime(0, segmentStartTime + segmentDuration);
    }

    source.connect(sliceGain);
    sliceGain.connect(active.gainNode);

    try {
      source.start(segmentStartTime, sourceOffset, segmentDuration);

      if (repeatIndex === 0) {
        const delayUntilHeard = Math.max(0, (segmentStartTime - audioContext.currentTime) * 1000);

        setTimeout(() => {
          if (!active.stopped) {
            updateChopPlayhead(active.loopId, slotIndexForVisual);
          }
        }, delayUntilHeard);
      }

    } catch (err) {
      console.warn("Could not schedule chop slice", err);
      return;
    }

    active.sources.push(source);

    source.onended = () => {
      active.sources = active.sources.filter(item => item !== source);
    };
  }
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

  const isStutter = active.recipe.stutter && active.recipe.stutter[active.nextSlotIndex] === true;

    const sourceOffset = sourceSliceIndex * active.sliceDuration;

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
      isStutter
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
    gainNode: gainNode,
    recipe: recipe,
    sliceDuration: sliceDuration,
    sources: [],
    stopped: false,
    nextSlotIndex: startSlotIndex,
    nextSlotTime: actualStartTime
  };

  const firstSourceSliceIndex = recipe.pattern[startSlotIndex];
  const firstIsStutter = recipe.stutter && recipe.stutter[startSlotIndex] === true;
  const firstIsSilent = recipe.silent && recipe.silent[startSlotIndex] === true;

  const firstSourceOffset = (firstSourceSliceIndex * sliceDuration) + offsetInsideSlot;
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
      firstIsStutter
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
  stopPreviewLoop();
  previewLoopId = null;

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
  stopPreviewLoop();
  previewLoopId = null;

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

function stopPreviewLoop() {
  if (activePreviewSource) {
    try {
      activePreviewSource.stop();
    } catch (err) {}
  }

  activePreviewSource = null;
  activePreviewGainNode = null;
}

async function previewLoop(loopId) {

  if (previewLoopId === loopId) {
    stopPreviewLoop();
    previewLoopId = null;
    render();
    return;
  }

  const loop = getLoopById(loopId);
  if (!loop) return;

  previewLoopVolume = getLoopVolume(loop.id);

  // Update the UI immediately so the button glows even while audio loads.
  previewLoopId = loopId;
  render();

  try {
    await ensureAudioContext();

    stopPreviewLoop();

    if (beat.loops.length > 0 && !isPlaying) {
      await startAllLoopSources();
    }

    const buffer = await loadBuffer(loop);
    const source = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();

    gainNode.gain.value = loop.gain * previewLoopVolume;
    gainNode.connect(masterGainNode);

    source.buffer = buffer;
    source.loop = true;
    source.connect(gainNode);

    const startTime = audioContext.currentTime + 0.08;
    let offset = 0;

    if (isPlaying) {
      offset = getOffsetAtTime(buffer.duration, startTime);
    } else {
      transportStartTime = startTime;
      pausedOffset = 0;
    }

    source.start(startTime, offset);

    activePreviewSource = source;
    activePreviewGainNode = gainNode;

    source.onended = () => {
      if (activePreviewSource === source) {
        activePreviewSource = null;
        activePreviewGainNode = null;
      }
    };
  } catch (err) {
    console.warn("Could not preview loop", err);
  }
}

async function confirmPreviewLoop() {
  if (!previewLoopId) return;

  const loopIdToAdd = previewLoopId;
  stopPreviewLoop();
  previewLoopId = null;

  beat.volumes[loopIdToAdd] = previewLoopVolume;

  await addLoop(loopIdToAdd);
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
  const wasEmptyBeat = beat.loops.length === 0;
  const chosenElementFilter = selectedElementFilter || newLoop.type;
  const chosenStyleFilter = selectedStyleFilters.slice();

  const existingIndex = isSingleUseElement(newLoop.type)
    ? beat.loops.findIndex(existingLoopId => {
        const existingLoop = getLoopById(existingLoopId);
        return existingLoop && existingLoop.type === newLoop.type;
      })
    : -1;

  if (existingIndex >= 0) {
    replacedLoopId = beat.loops[existingIndex];
    beat.loops[existingIndex] = newLoop.id;
  } else if (beat.loops.length < MAX_LAYERS) {
    beat.loops.push(newLoop.id);
  } else {
    return;
  }

  if (!beat.chops[newLoop.id]) {
    beat.chops[newLoop.id] = {
      slices: DEFAULT_CHOP_SLICES,
      pattern: makeIdentityPattern(DEFAULT_CHOP_SLICES)
    };
  }

  let contributorName = getDisplayProducerName();

if (!contributorName || contributorName === t("anonymousName")) {
  const savedProducerName = localStorage.getItem(PRODUCER_NAME_KEY);

  if (savedProducerName && savedProducerName.trim() !== "") {
    contributorName = savedProducerName.trim();
  }
}

if (!contributorName || contributorName.trim() === "") {
  contributorName = t("anonymousName");
}

  if (wasEmptyBeat && !beat.startedBy) {
    beat.startedBy = contributorName;
  }

  beat.contributors[newLoop.id] = contributorName;

  if (isSingleUseElement(newLoop.type)) {
    beat.contributors[newLoop.type] = contributorName;
  }

  if (replacedLoopId) {
    delete beat.chops[replacedLoopId];
    delete beat.volumes[replacedLoopId];

    const replacedLoop = getLoopById(replacedLoopId);
    if (beat.contributors) {
      delete beat.contributors[replacedLoopId];

      if (replacedLoop && isSingleUseElement(replacedLoop.type)) {
        delete beat.contributors[replacedLoop.type];
      }
    }

    if (selectedChopLoopId === replacedLoopId) {
      selectedChopLoopId = newLoop.id;
      selectedChopSlotIndex = 0;
    }
  }

  pendingContributionLoopId = newLoop.id;
  pendingContributionElementFilter = chosenElementFilter;
  pendingContributionStyleFilter = chosenStyleFilter;
  currentUserContributionType = null;

  selectedElementFilter = null;
  selectedStyleFilter = null;
  selectedStyleFilters = [];
  previewLoopId = null;
  filterPanelOpen = false;

  render();
  openChopEditor(newLoop.id);

  if (playerCardEl && !hasAutoScrolledToPlayer) {
    hasAutoScrolledToPlayer = true;
    setTimeout(() => {
      playerCardEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  if (replacedLoopId) {
    stopLoopSource(replacedLoopId);
  }

  // Auto-play as soon as a loop is added. This runs from the user's click,
  // so the browser should allow the AudioContext to start.
  if (!isPlaying) {
    await startAllLoopSources();
  } else {
    await startLoopSource(newLoop.id);
  }
}

async function removeLoop(loopId) {
  if (!canCurrentUserEditLoop(loopId)) {
    return;
  }

  beat.loops = beat.loops.filter(existingLoopId => existingLoopId !== loopId);

  const removedLoop = getLoopById(loopId);

  delete beat.chops[loopId];
  delete beat.volumes[loopId];

  if (beat.contributors) {
    delete beat.contributors[loopId];

    if (removedLoop && isSingleUseElement(removedLoop.type)) {
      delete beat.contributors[removedLoop.type];
    }
  }

  if (pendingContributionLoopId === loopId) {
    pendingContributionLoopId = null;
    pendingContributionElementFilter = null;
    pendingContributionStyleFilter = null;
  }

  if (removedLoop && currentUserContributionType === removedLoop.type) {
    currentUserContributionType = null;
  }

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
    chops: {},
    startedBy: "",
    contributors: {}
  };

  producerNameDecisionMade = false;
  loadedFromShareLink = false;

  pendingContributionLoopId = null;
  pendingContributionElementFilter = null;
  pendingContributionStyleFilter = null;
  currentUserContributionType = null;

  selectedChopLoopId = null;
  selectedChopSlotIndex = 0;
  selectedElementFilter = null;
  selectedStyleFilter = null;
  selectedStyleFilters = [];
  previewLoopId = null;
  filterPanelOpen = false;
  hasAutoScrolledToPlayer = false;

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
