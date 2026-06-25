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
    heroEyebrow: "",
    heroTagline: "Add a sound. Send to a friend. Build a full beat together in minutes.",
    chooseContribution: "Choose your contribution",
    shareHint: "This first prototype stores the beat inside the URL. No server needed yet.",
    madeBy: "Made by Azido Games",
    footerText: "If you enjoy BeatSeed, check out my upcoming rhythm shooter, Stellar Rhythm.",
    wishlist: "Stellar Rhythm on Steam",
    support: "Support on Ko-fi",
    load: "Load",
    delete: "Delete",
    chopEditor: "Chop Editor",
    close: "X",
    grid: "Grid",
    rearrangedLoop: "Step 1: Tap or drag a slot in your rearranged loop",
    originalLoop: "Step 2: Tap a slice below to replace the selected slot",
    reset: "Reset",
    random: "Randomize",
    randomOrder: "Randomize Order",
    randomFx: "Randomize FX",
    undo: "Undo",
    randomized: "Randomized",
    reverseSelected: "Stutter",
    muteSelected: "Mute",
    transformSelected: "Transform",
    tripletTransformSelected: "Triplet-Trans",
    halfSpeedSelected: "Half Speed",
    doubleSpeedSelected: "Double Speed",
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
    shareLatestUpdate: "Share Latest Update",
    creatingShareLink: "Creating share link...",
    shareLinkFailed: "Could not create short link. Copied backup link instead.",
    audioHelpToast: "No sound? Check your phone volume or silent mode.",
    editPermissionWarning: "Only the original creator can replace or remove this sound. You can still remix it.",
    createdBy: "Created by",
    lastEditedBy: "Last edited by",
    restoreOriginal: "Restore Original",
    restoreLatestEdit: "Restore Latest Edit",
    originalRestored: "Original restored",
    latestEditRestored: "Latest edit restored",
    exportTitle: "Done with this beat?",
    exportText: "Export your finished beat or keep collaborating.",
    exportLength: "Length",
    exportLengthShort: "Short",
    exportLengthShortTime: "~40 sec",
    exportLengthMedium: "Medium",
    exportLengthMediumTime: "~1 min 20 sec",
    exportLengthLong: "Long",
    exportLengthLongTime: "~2 min 40 sec",
    exportMp3: "Export as WAV",
    downloadWav: "Download WAV",
    exportStems: "Export individual stems",
    exportVideo: "Export to video",
    comingSoon: "Coming soon",
    exportComingSoon: "Export features are coming soon.",
    exportPreparing: "Preparing WAV export...",
    exportFailed: "Could not export WAV.",
    chooseDifferentSound: "Choose Different Sound",
    faqButton: "FAQ",
    faqTitle: "FAQ",
    faqWhatIsQuestion: "What is BeatSeed?",
    faqWhatIsAnswer: "BeatSeed is a collaborative music toy. Add one sound, send it to a friend, and build a beat together.",
    faqWhoMadeQuestion: "Who made BeatSeed?",
    faqWhoMadeAnswer: "BeatSeed was created by Azido Games, the developer of Stellar Rhythm.",
    faqCommercialQuestion: "Can I use these sounds in my own music or videos?",
    faqCommercialAnswer: "Yes. All sounds in BeatSeed are royalty-free and may be used in your own creations without attribution.",
    faqAiQuestion: "Are the sounds AI-generated?",
    faqAiAnswer: "No. All loops are created and curated by real human producers and musicians.",
    faqMoreQuestion: "Will more sounds be added?",
    faqMoreAnswer: "Yes. New sounds and improvements will be added over time.",
    shareLatestUpdate: "Share Latest Update",
    audioHelpMessage: "No sound? Check your phone volume or silent mode.",
    editPermissionWarning: "Only the original creator can replace or remove this sound. You can still remix it.",
    stutterSelected: "Stutter Selected"
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
    heroEyebrow: "",
    heroTagline: "加入一個聲音，傳給朋友，幾分鐘內一起完成完整節拍。",
    chooseContribution: "選擇你的貢獻",
    shareHint: "這個初版會把節拍存在網址裡，暫時不需要伺服器。",
    madeBy: "Azido Games 製作",
    footerText: "如果你喜歡 BeatSeed，也可以看看我正在開發的節奏射擊遊戲 Stellar Rhythm。",
    wishlist: "將 Stellar Rhythm 加入願望清單",
    support: "在 Ko-fi 支持我",
    load: "載入",
    delete: "刪除",
    chopEditor: "切片編輯器",
    close: "X",
    grid: "格數",
    rearrangedLoop: "步驟 1：點選或拖曳上方重新編排的格子",
    originalLoop: "步驟 2：點選下方切片來替換目前選取的格子",
    reset: "重設",
    random: "隨機編排",
    randomOrder: "隨機排序",
    randomFx: "隨機效果",
    undo: "復原",
    randomized: "已隨機化",
    reverseSelected: "Stutter",
    muteSelected: "靜音",
    transformSelected: "Transform",
    tripletTransformSelected: "Triplet-Trans",
    halfSpeedSelected: "Half Speed",
    doubleSpeedSelected: "Double Speed",
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
    shareLatestUpdate: "分享最新版本",
    creatingShareLink: "正在建立分享連結...",
    shareLinkFailed: "無法建立短連結，已改為複製備用連結。",
    audioHelpToast: "沒有聲音？請檢查手機音量或靜音模式。",
    editPermissionWarning: "只有原作者可以更換或移除此聲音。你仍然可以重新編排它。",
    createdBy: "建立者",
    lastEditedBy: "最後編輯者",
    restoreOriginal: "還原原作者版本",
    restoreLatestEdit: "還原最新編輯",
    originalRestored: "已還原原作者版本",
    latestEditRestored: "已還原最新編輯",
    exportTitle: "這首節拍完成了嗎？",
    exportText: "匯出完成的節拍，或繼續和朋友一起創作。",
    exportLength: "長度",
    exportLengthShort: "短",
    exportLengthShortTime: "約 40 秒",
    exportLengthMedium: "中",
    exportLengthMediumTime: "約 1 分 20 秒",
    exportLengthLong: "長",
    exportLengthLongTime: "約 2 分 40 秒",
    exportMp3: "匯出為 WAV",
    downloadWav: "下載 WAV",
    exportStems: "匯出各個分軌",
    exportVideo: "匯出成影片",
    comingSoon: "即將推出",
    exportComingSoon: "匯出功能即將推出。",
    exportPreparing: "正在準備 WAV 匯出...",
    exportFailed: "無法匯出 WAV。",
    chooseDifferentSound: "選擇不同聲音",
    faqButton: "FAQ",
    faqTitle: "常見問題",
    faqWhatIsQuestion: "什麼是 BeatSeed？",
    faqWhatIsAnswer: "BeatSeed 是一個合作創作音樂的小工具。加入一個聲音、傳給朋友，一起完成一首節拍。",
    faqWhoMadeQuestion: "誰製作了 BeatSeed？",
    faqWhoMadeAnswer: "BeatSeed 由 Azido Games 製作，也就是 Stellar Rhythm 的開發者。",
    faqCommercialQuestion: "我可以在自己的作品中使用這些聲音嗎？",
    faqCommercialAnswer: "可以。BeatSeed 中所有聲音皆為免版稅素材，可自由使用於你的作品中，無需標註來源。",
    faqAiQuestion: "這些聲音是 AI 生成的嗎？",
    faqAiAnswer: "不是。所有 Loop 都是由真實的人類音樂製作人與樂手創作及挑選。",
    faqMoreQuestion: "未來會加入更多聲音嗎？",
    faqMoreAnswer: "會。未來將持續新增更多聲音與功能改進。",
    shareLatestUpdate: "分享最新版本",
    audioHelpMessage: "沒有聲音？請檢查手機音量或靜音模式。",
    editPermissionWarning: "只有原作者可以更換或移除此聲音。你仍然可以重新編排它。",
    stutterSelected: "重複所選切片"
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
  { id: "texture_09", name: "Ethereal Strings 02", file: "audio/loops/texture_9.mp3", type: "texture", tags: ["texture", "electronic", "hiphop", "lofi", "latin"], gain: 0.6 },
  { id: "texture_10", name: "Ethereal Strings 03", file: "audio/loops/texture_10.mp3", type: "texture", tags: ["texture", "electronic", "hiphop", "lofi", "latin"], gain: 0.6 },
  { id: "texture_11", name: "Pleasant Bleeps 01", file: "audio/loops/texture_11.mp3", type: "texture", tags: ["texture", "electronic", "hiphop", "lofi", "latin"], gain: 0.6 },

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

// Supabase short-link storage.
// This publishable key is safe to use in frontend JavaScript because Row Level Security is enabled.
const SUPABASE_URL = "https://dkumaaqpzxdaphkiunmm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_G5IPJfIaubHl8hV1404Njg_2hgmIidj";
const SUPABASE_BEATS_TABLE = "beats";
const BEAT_ID_LENGTH = 7;
const BEAT_ID_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
const SHORT_LINK_CACHE_KEY = "beatseed_short_link_cache_v1";

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
let draggedChopSlotIndex = null;
let activeChopDrag = null;
let chopDragGhostEl = null;
let chopDragTargetSlotIndex = null;
let chopUndoByLoopId = {};
let suppressChopUndoSnapshot = false;

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
let audioHelpToastTimer = null;
let editWarningToastTimer = null;

let chopEditorPlayheadAnimation = null;

let faqOpen = false;
let exportLengthMode = "medium";
let exportWavOptionsOpen = false;

function buildFaqHtml() {
  return `
    <div class="faq-content">
      <h2>${t("faqTitle")}</h2>

      <div class="faq-item">
        <h3>${t("faqWhatIsQuestion")}</h3>
        <p>${t("faqWhatIsAnswer")}</p>
      </div>

      <div class="faq-item">
        <h3>${t("faqWhoMadeQuestion")}</h3>
        <p>${t("faqWhoMadeAnswer")}</p>
      </div>

      <div class="faq-item">
        <h3>${t("faqCommercialQuestion")}</h3>
        <p>${t("faqCommercialAnswer")}</p>
      </div>

      <div class="faq-item">
        <h3>${t("faqAiQuestion")}</h3>
        <p>${t("faqAiAnswer")}</p>
      </div>

      <div class="faq-item">
        <h3>${t("faqMoreQuestion")}</h3>
        <p>${t("faqMoreAnswer")}</p>
      </div>
    </div>
  `;
}

function renderFaqPanel() {
  if (!faqPanel) return;

  faqPanel.classList.toggle("hidden", !faqOpen);
  faqPanel.innerHTML = faqOpen ? buildFaqHtml() : "";
}

function toggleFaq() {
  faqOpen = !faqOpen;
  renderFaqPanel();
}

function buildExportPanelHtml() {
  const lengthOptions = [
    { key: "short", labelKey: "exportLengthShort", timeKey: "exportLengthShortTime" },
    { key: "medium", labelKey: "exportLengthMedium", timeKey: "exportLengthMediumTime" },
    { key: "long", labelKey: "exportLengthLong", timeKey: "exportLengthLongTime" }
  ];

  const lengthButtonsHtml = lengthOptions.map(option => `
    <button
      class="export-length-btn ${exportLengthMode === option.key ? "active" : ""}"
      data-export-length="${option.key}"
      type="button">
      ${t(option.labelKey)}
      <span class="export-length-sub">${t(option.timeKey)}</span>
    </button>
  `).join("");

  return `
    <div class="export-content">
      <div class="guide-header compact-guide-header">
        <h2>${t("exportTitle")}</h2>
        <p class="guide-copy">${t("exportText")}</p>
      </div>

      <div class="export-actions">
        <button class="export-placeholder-button ${exportWavOptionsOpen ? "selected" : ""}" data-export-action="wav-options" type="button">${t("exportMp3")}</button>
        <button class="secondary export-disabled-button" data-export-action="stems" type="button" aria-disabled="true">
          ${t("exportStems")} <span>${t("comingSoon")}</span>
        </button>
        <button class="secondary export-disabled-button" data-export-action="video" type="button" aria-disabled="true">
          ${t("exportVideo")} <span>${t("comingSoon")}</span>
        </button>
      </div>

      <div class="export-length-panel ${exportWavOptionsOpen ? "" : "hidden"}">
        <p class="label">${t("exportLength")}</p>
        <div class="export-length-options">
          ${lengthButtonsHtml}
        </div>
        <button class="export-download-button" data-export-action="wav-download" type="button">${t("downloadWav")}</button>
      </div>
    </div>
  `;
}

function renderExportPanel() {
  if (!exportPanelEl) return;

  const shouldShowExportPanel =
    beat.loops.length >= 3 &&
    !pendingContributionLoopId;

  exportPanelEl.classList.toggle("hidden", !shouldShowExportPanel);

  if (!shouldShowExportPanel) {
    exportPanelEl.innerHTML = "";
    return;
  }

  exportPanelEl.innerHTML = buildExportPanelHtml();

  exportPanelEl.querySelectorAll("[data-export-length]").forEach(button => {
    button.addEventListener("click", () => {
      exportLengthMode = button.dataset.exportLength || "medium";
      renderExportPanel();
    });
  });

  exportPanelEl.querySelectorAll("[data-export-action]").forEach(button => {
    button.addEventListener("click", async () => {
      const exportAction = button.dataset.exportAction;

      if (exportAction === "wav-options") {
        exportWavOptionsOpen = !exportWavOptionsOpen;
        renderExportPanel();
        return;
      }

      if (exportAction === "wav-download") {
        await exportBeatAsWav();
        return;
      }

      showTemporaryToast(t("exportComingSoon"), "edit-warning-toast");
    });
  });
}

let beat = {
  name: "Untitled Beat",
  loops: [],
  volumes: {},
  chops: {},
  startedBy: "",
  contributors: {},
  loopCreators: {},
  lastEditors: {},
  originalStates: {},
  latestEditedStates: {},
  restoredOriginalLoops: {}
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
const exportPanelEl = document.getElementById("exportPanel");
const faqButton = document.getElementById("faqButton");
const faqPanel = document.getElementById("faqPanel");
const SAVED_BEATS_KEY = "beatseed_saved_beats_v1";

let chopEditorEl = document.getElementById("chopEditor");
if (!chopEditorEl) {
  chopEditorEl = document.createElement("div");
  chopEditorEl.id = "chopEditor";
  chopEditorEl.className = "chop-editor hidden";
  activeLoopsEl.insertAdjacentElement("afterend", chopEditorEl);
}

function safeEncode(data) {
  return LZString.compressToEncodedURIComponent(
    JSON.stringify(data)
  );
}

function safeDecode(text) {
  try {
    const decompressed = LZString.decompressFromEncodedURIComponent(text);

    if (decompressed) {
      return JSON.parse(decompressed);
    }
  } catch (error) {}

  // Backward compatibility for old pre-compression BeatSeed links.
  return JSON.parse(
    decodeURIComponent(
      escape(atob(text))
    )
  );
}

function getSupabaseHeaders() {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
    "Content-Type": "application/json"
  };
}

function makeShortBeatId() {
  let id = "";

  for (let i = 0; i < BEAT_ID_LENGTH; i++) {
    id += BEAT_ID_CHARS[Math.floor(Math.random() * BEAT_ID_CHARS.length)];
  }

  return id;
}

function getBeatFingerprint(data) {
  const text = JSON.stringify(data);
  let hash = 5381;

  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 5) + hash) ^ text.charCodeAt(i);
  }

  return `b${(hash >>> 0).toString(36)}_${text.length}`;
}

function getShortLinkCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(SHORT_LINK_CACHE_KEY));
    return cache && typeof cache === "object" ? cache : {};
  } catch (err) {
    return {};
  }
}

function setShortLinkCacheValue(fingerprint, beatId) {
  try {
    const cache = getShortLinkCache();
    cache[fingerprint] = beatId;
    localStorage.setItem(SHORT_LINK_CACHE_KEY, JSON.stringify(cache));
  } catch (err) {}
}

function getShortLinkCacheValue(fingerprint) {
  const cache = getShortLinkCache();
  return cache[fingerprint] || "";
}

function buildShortShareUrl(beatId) {
  const url = new URL(window.location.href);
  url.searchParams.set("b", beatId);
  url.hash = "";
  return url.toString();
}

function buildBackupShareUrl() {
  const url = new URL(window.location.href);

  if (beat.loops.length > 0) {
    url.searchParams.delete("b");
    url.hash = "beat=" + safeEncode(beat);
  } else {
    url.searchParams.delete("b");
    url.hash = "";
  }

  return url.toString();
}

async function saveBeatToSupabase(beatData) {
  const fingerprint = getBeatFingerprint(beatData);
  const cachedId = getShortLinkCacheValue(fingerprint);

  if (cachedId) {
    return cachedId;
  }

  for (let attempt = 0; attempt < 5; attempt++) {
    const beatId = makeShortBeatId();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_BEATS_TABLE}`, {
      method: "POST",
      headers: {
        ...getSupabaseHeaders(),
        Prefer: "return=minimal"
      },
      body: JSON.stringify({
        id: beatId,
        beat_data: beatData
      })
    });

    if (response.ok) {
      setShortLinkCacheValue(fingerprint, beatId);
      return beatId;
    }

    // 409 usually means the random ID already exists. Try another one.
    if (response.status !== 409) {
      const errorText = await response.text();
      throw new Error(errorText || `Supabase save failed with status ${response.status}`);
    }
  }

  throw new Error("Could not create a unique BeatSeed short link.");
}

async function loadBeatFromSupabase(beatId) {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/${SUPABASE_BEATS_TABLE}?id=eq.${encodeURIComponent(beatId)}&select=beat_data`,
    {
      method: "GET",
      headers: getSupabaseHeaders()
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase load failed with status ${response.status}`);
  }

  const rows = await response.json();

  if (!Array.isArray(rows) || rows.length === 0 || !rows[0].beat_data) {
    throw new Error("BeatSeed link not found.");
  }

  setShortLinkCacheValue(getBeatFingerprint(rows[0].beat_data), beatId);
  return rows[0].beat_data;
}

async function getOrCreateShortShareUrl() {
  ensureBeatDataObjects();

  if (beat.loops.length === 0) {
    return buildBackupShareUrl();
  }

  const beatData = clonePlainObject(beat);
  const beatId = await saveBeatToSupabase(beatData);
  const shortUrl = buildShortShareUrl(beatId);

  shareLinkEl.value = shortUrl;
  history.replaceState(null, "", shortUrl);

  const guideInviteInput = document.getElementById("guideInviteLink");
  if (guideInviteInput) {
    guideInviteInput.value = shortUrl;
  }

  return shortUrl;
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
  if (!beat.loopCreators) beat.loopCreators = {};
  if (!beat.lastEditors) beat.lastEditors = {};
  if (!beat.originalStates) beat.originalStates = {};
  if (!beat.latestEditedStates) beat.latestEditedStates = {};
  if (!beat.restoredOriginalLoops) beat.restoredOriginalLoops = {};
  if (!beat.startedBy) beat.startedBy = "";

  // Backward compatibility for older shared links.
  beat.loops.forEach(loopId => {
    const loop = getLoopById(loopId);
    if (!loop) return;

    if (!beat.loopCreators[loopId]) {
      const oldCreator = beat.contributors[loopId] || beat.contributors[loop.type] || "";
      if (oldCreator) {
        beat.loopCreators[loopId] = oldCreator;
      }
    }

    if (!beat.lastEditors[loopId] && beat.loopCreators[loopId]) {
      beat.lastEditors[loopId] = beat.loopCreators[loopId];
    }
  });
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

  if (beat.restoredOriginalLoops) {
    beat.restoredOriginalLoops[loopId] = false;
  }

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
      silent: {},
      transform: {},
      tripletTransform: {},
      halfSpeed: {},
      doubleSpeed: {}
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

  const transform = {};
  if (recipe.transform) {
    for (const key in recipe.transform) {
      const cleanKey = Math.floor(Number(key));
      if (!Number.isNaN(cleanKey) && cleanKey >= 0 && cleanKey < sliceCount) {
        transform[cleanKey] = recipe.transform[key] === true;
      }
    }
  }

  const tripletTransform = {};
  if (recipe.tripletTransform) {
    for (const key in recipe.tripletTransform) {
      const cleanKey = Math.floor(Number(key));
      if (!Number.isNaN(cleanKey) && cleanKey >= 0 && cleanKey < sliceCount) {
        tripletTransform[cleanKey] = recipe.tripletTransform[key] === true;
      }
    }
  }

  const halfSpeed = {};
  if (recipe.halfSpeed) {
    for (const key in recipe.halfSpeed) {
      const cleanKey = Math.floor(Number(key));
      if (!Number.isNaN(cleanKey) && cleanKey >= 0 && cleanKey < sliceCount) {
        halfSpeed[cleanKey] = recipe.halfSpeed[key] === true;
      }
    }
  }

  const doubleSpeed = {};
  if (recipe.doubleSpeed) {
    for (const key in recipe.doubleSpeed) {
      const cleanKey = Math.floor(Number(key));
      if (!Number.isNaN(cleanKey) && cleanKey >= 0 && cleanKey < sliceCount) {
        doubleSpeed[cleanKey] = recipe.doubleSpeed[key] === true;
      }
    }
  }

  return enforceExclusiveSlotEffects({
    slices: sliceCount,
    pattern: pattern,
    stutter: stutter,
    silent: silent,
    transform: transform,
    tripletTransform: tripletTransform,
    halfSpeed: halfSpeed,
    doubleSpeed: doubleSpeed
  });
}


function cloneChopRecipeForUndo(recipe) {
  return {
    slices: recipe.slices,
    pattern: Array.isArray(recipe.pattern) ? recipe.pattern.slice() : makeIdentityPattern(recipe.slices || DEFAULT_CHOP_SLICES),
    stutter: Object.assign({}, recipe.stutter || recipe.reverse || {}),
    silent: Object.assign({}, recipe.silent || {}),
    transform: Object.assign({}, recipe.transform || {}),
    tripletTransform: Object.assign({}, recipe.tripletTransform || {}),
    halfSpeed: Object.assign({}, recipe.halfSpeed || {}),
    doubleSpeed: Object.assign({}, recipe.doubleSpeed || {})
  };
}

function saveChopUndoSnapshot(loopId) {
  if (!loopId || suppressChopUndoSnapshot) return;
  if (!beat.chops || !beat.chops[loopId]) return;

  chopUndoByLoopId[loopId] = cloneChopRecipeForUndo(getChopRecipe(loopId));
}

async function undoChopEdit(loopId) {
  const undoRecipe = chopUndoByLoopId[loopId];

  if (!undoRecipe) return;

  suppressChopUndoSnapshot = true;
  setChopRecipe(loopId, cloneChopRecipeForUndo(undoRecipe));
  suppressChopUndoSnapshot = false;

  delete chopUndoByLoopId[loopId];

  const recipe = getChopRecipe(loopId);
  selectedChopSlotIndex = Math.max(0, Math.min(recipe.slices - 1, selectedChopSlotIndex));
  playingChopSlotByLoopId.set(loopId, selectedChopSlotIndex);

  await refreshPlayingLoopAfterChopEdit(loopId);

  renderChopEditor();
  render();
}

function setChopRecipe(loopId, recipe) {
  ensureBeatDataObjects();

  if (!suppressChopUndoSnapshot && selectedChopLoopId === loopId && beat.chops && beat.chops[loopId]) {
    saveChopUndoSnapshot(loopId);
  }

  const cleanRecipe = enforceExclusiveSlotEffects({
    slices: recipe.slices,
    pattern: recipe.pattern.slice(),
    stutter: recipe.stutter || recipe.reverse || {},
    silent: recipe.silent || {},
    transform: recipe.transform || {},
    tripletTransform: recipe.tripletTransform || {},
    halfSpeed: recipe.halfSpeed || {},
    doubleSpeed: recipe.doubleSpeed || {}
  });

  beat.chops[loopId] = cleanRecipe;

  if (beat.restoredOriginalLoops) {
    beat.restoredOriginalLoops[loopId] = false;
  }

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
    pattern: makeIdentityPattern(sliceCount),
    stutter: {},
    silent: {},
    transform: {},
    tripletTransform: {},
    halfSpeed: {},
    doubleSpeed: {}
  });
}

function hasCustomChop(loopId) {
  const recipe = getChopRecipe(loopId);

  for (let i = 0; i < recipe.pattern.length; i++) {
    if (recipe.pattern[i] !== i) return true;
    if (recipe.stutter && recipe.stutter[i] === true) return true;
    if (recipe.silent && recipe.silent[i] === true) return true;
    if (recipe.transform && recipe.transform[i] === true) return true;
    if (recipe.tripletTransform && recipe.tripletTransform[i] === true) return true;
    if (recipe.halfSpeed && recipe.halfSpeed[i] === true) return true;
    if (recipe.doubleSpeed && recipe.doubleSpeed[i] === true) return true;
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

  document.querySelectorAll(`.chop-play-button[data-loop-id="${loopId}"]`).forEach(button => {
    const buttonSlot = Number(button.dataset.playSlot);
    button.classList.toggle("active", buttonSlot === slotIndex);
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

  function getFxVisualAlpha(rawLocalPos, slotIndex, isMuted) {
    if (isMuted) return 0.20;

    const hasTransform = useChopPattern && recipe.transform && recipe.transform[slotIndex] === true;
    const hasTripletTransform = useChopPattern && recipe.tripletTransform && recipe.tripletTransform[slotIndex] === true;

    if (hasTripletTransform) {
      const bandIndex = Math.floor(rawLocalPos * 6);
      return (bandIndex % 2 === 0) ? 0.92 : 0.20;
    }

    if (hasTransform) {
      const bandIndex = Math.floor(rawLocalPos * 8);
      return (bandIndex % 2 === 0) ? 0.92 : 0.20;
    }

    return 0.92;
  }

  function getFxVisualLocalPos(rawLocalPos, slotIndex, sourceLength) {
    const isStutter = useChopPattern && recipe.stutter && recipe.stutter[slotIndex] === true;
    const isHalfSpeed = useChopPattern && recipe.halfSpeed && recipe.halfSpeed[slotIndex] === true;
    const isDoubleSpeed = useChopPattern && recipe.doubleSpeed && recipe.doubleSpeed[slotIndex] === true;

    if (isStutter) {
      const tinyRepeatLength = Math.max(0.01, (1 / 64) / (1 / sliceCount));
      return rawLocalPos % tinyRepeatLength;
    }

    if (isHalfSpeed) {
      return rawLocalPos * 0.5;
    }

    if (isDoubleSpeed) {
      return (rawLocalPos * 2) % 1;
    }

    return rawLocalPos;
  }

  for (let slotIndex = startSlot; slotIndex < rowEndSlot; slotIndex++) {
    const sourceSliceIndex = useChopPattern ? recipe.pattern[slotIndex] : slotIndex;
    const isMuted = useChopPattern && recipe.silent && recipe.silent[slotIndex] === true;
    const isSelected = useChopPattern && slotIndex === selectedChopSlotIndex;

    const sourceStartSample = Math.floor((sourceSliceIndex / sliceCount) * data.length);
    const sourceEndSample = Math.floor(((sourceSliceIndex + 1) / sliceCount) * data.length);
    const sourceLength = Math.max(1, sourceEndSample - sourceStartSample);

    const visualSlotIndex = slotIndex - startSlot;
    const visualStartX = visualSlotIndex * slotWidth;
    const visualEndX = (visualSlotIndex + 1) * slotWidth;

    ctx.lineWidth = isSelected ? 2.2 : 1.5;

    for (let px = Math.floor(visualStartX); px < Math.floor(visualEndX); px++) {
      const rawLocalPos = (px - visualStartX) / slotWidth;
      const localPos = Math.max(0, Math.min(0.9999, getFxVisualLocalPos(rawLocalPos, slotIndex, sourceLength)));
      const sampleIndex = sourceStartSample + Math.floor(localPos * sourceLength);
      const visualAlpha = getFxVisualAlpha(rawLocalPos, slotIndex, isMuted);

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

      if (isSelected) {
        ctx.strokeStyle = `rgba(255, 74, 112, ${Math.max(0.28, visualAlpha)})`;
      } else if (useChopPattern) {
        ctx.strokeStyle = `rgba(119, 255, 146, ${visualAlpha})`;
      } else {
        ctx.strokeStyle = "rgba(41, 231, 255, 0.92)";
      }

      ctx.beginPath();
      ctx.moveTo(px, y1);
      ctx.lineTo(px, y2);
      ctx.stroke();
    }
  }

  ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
  ctx.lineWidth = 1;

  for (let i = 1; i < visibleSlots; i++) {
    const gridX = i * slotWidth;
    ctx.beginPath();
    ctx.moveTo(gridX, 0);
    ctx.lineTo(gridX, displayHeight);
    ctx.stroke();
  }

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

async function loadBeatFromUrl() {
  const currentUrl = new URL(window.location.href);
  const shortBeatId = currentUrl.searchParams.get("b");

  if (shortBeatId) {
    try {
      const incoming = await loadBeatFromSupabase(shortBeatId);
      applyIncomingBeatData(incoming);
      return;
    } catch (err) {
      console.warn("Could not load BeatSeed short link", err);
    }
  }

  const hash = window.location.hash.replace(/^#beat=/, "");
  if (!hash) return;

  try {
    const incoming = safeDecode(hash);
    applyIncomingBeatData(incoming);
  } catch (err) {
    console.warn("Could not read beat from URL", err);
  }
}

function applyIncomingBeatData(incoming) {
  if (!incoming || !Array.isArray(incoming.loops)) return;

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
    contributors: incoming.contributors || {},
    loopCreators: incoming.loopCreators || {},
    lastEditors: incoming.lastEditors || {},
    originalStates: incoming.originalStates || {},
    latestEditedStates: incoming.latestEditedStates || {},
    restoredOriginalLoops: incoming.restoredOriginalLoops || {}
  };

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
    if (exportPanelEl) {
      exportPanelEl.insertAdjacentElement("afterend", savedBeatsEl);
    } else {
      shareLinkEl.parentElement.parentElement.insertAdjacentElement("afterend", savedBeatsEl);
    }
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


function getLoopCreator(loopId) {
  ensureBeatDataObjects();

  const loop = getLoopById(loopId);
  if (!loop) return "";

  return beat.loopCreators[loopId]
    || beat.contributors[loopId]
    || beat.contributors[loop.type]
    || "";
}

function getLoopLastEditor(loopId) {
  ensureBeatDataObjects();

  return beat.lastEditors[loopId] || getLoopCreator(loopId) || "";
}

function currentUserIsLoopCreator(loopId) {
  const creatorName = getLoopCreator(loopId);
  return creatorName !== "" && creatorName === getDisplayProducerName();
}

function canCurrentUserRemoveLoop(loopId) {
  return currentUserIsLoopCreator(loopId);
}

function canCurrentUserReplaceLoop(loopId) {
  return currentUserIsLoopCreator(loopId);
}

function clonePlainObject(value) {
  return JSON.parse(JSON.stringify(value));
}

function snapshotCurrentLoopState(loopId) {
  return {
    volume: getLoopVolume(loopId),
    chop: clonePlainObject(getChopRecipe(loopId)),
    savedBy: getLoopLastEditor(loopId) || getDisplayProducerName()
  };
}

function saveCreatorOriginalState(loopId) {
  ensureBeatDataObjects();

  if (!currentUserIsLoopCreator(loopId)) return;

  beat.originalStates[loopId] = snapshotCurrentLoopState(loopId);
}

async function restoreOriginalLoopState(loopId) {
  ensureBeatDataObjects();

  if (!currentUserIsLoopCreator(loopId)) {
    showEditPermissionWarning();
    return;
  }

  const isCurrentlyOriginal = beat.restoredOriginalLoops && beat.restoredOriginalLoops[loopId] === true;
  const originalState = beat.originalStates ? beat.originalStates[loopId] : null;
  const latestEditedState = beat.latestEditedStates ? beat.latestEditedStates[loopId] : null;

  if (isCurrentlyOriginal) {
    if (!latestEditedState) return;

    beat.volumes[loopId] = Math.max(0, Math.min(1.5, Number(latestEditedState.volume) || 1));
    beat.chops[loopId] = clonePlainObject(latestEditedState.chop);
    beat.lastEditors[loopId] = latestEditedState.savedBy || getDisplayProducerName();
    beat.restoredOriginalLoops[loopId] = false;

    updateShareLink();

    if (isPlaying) {
      await startLoopSource(loopId);
    }

    render();
    showTemporaryToast(t("latestEditRestored"), "edit-warning-toast");
    return;
  }

  if (!originalState) return;

  beat.latestEditedStates[loopId] = snapshotCurrentLoopState(loopId);

  beat.volumes[loopId] = Math.max(0, Math.min(1.5, Number(originalState.volume) || 1));
  beat.chops[loopId] = clonePlainObject(originalState.chop);
  beat.lastEditors[loopId] = getLoopCreator(loopId) || getDisplayProducerName();
  beat.restoredOriginalLoops[loopId] = true;

  updateShareLink();

  if (isPlaying) {
    await startLoopSource(loopId);
  }

  render();
  showTemporaryToast(t("originalRestored"), "edit-warning-toast");
}

function showTemporaryToast(message, className = "audio-help-toast") {
  const existing = document.querySelector(`.${className}`);
  if (existing) {
    existing.remove();
  }

  const toast = document.createElement("div");
  toast.className = className;
  toast.textContent = message;

  document.body.appendChild(toast);

  const timerName = className === "audio-help-toast" ? "audioHelpToastTimer" : "editWarningToastTimer";

  if (timerName === "audioHelpToastTimer" && audioHelpToastTimer) {
    clearTimeout(audioHelpToastTimer);
  }

  if (timerName === "editWarningToastTimer" && editWarningToastTimer) {
    clearTimeout(editWarningToastTimer);
  }

  const timer = setTimeout(() => {
    toast.remove();
  }, 4000);

  if (timerName === "audioHelpToastTimer") {
    audioHelpToastTimer = timer;
  } else {
    editWarningToastTimer = timer;
  }
}

function showAudioHelpOnce() {
  try {
    if (sessionStorage.getItem("beatseed_audio_help_shown") === "1") {
      return;
    }

    sessionStorage.setItem("beatseed_audio_help_shown", "1");
  } catch (err) {
    // If sessionStorage is blocked, still show it once per page instance.
    if (audioHelpToastTimer) return;
  }

  showTemporaryToast(t("audioHelpToast"), "audio-help-toast");
}

function showEditPermissionWarning() {
  showTemporaryToast(t("editPermissionWarning"), "edit-warning-toast");
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

function currentUserEditedAnyCompletedLoop() {
  const currentName = getDisplayProducerName();

  return beat.loops.some(loopId => {
    if (pendingContributionLoopId === loopId) return false;
    return getLoopLastEditor(loopId) === currentName;
  });
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

  if (beat.loops.length === 0) {
    return buildBackupShareUrl();
  }

  const fingerprint = getBeatFingerprint(beat);
  const cachedId = getShortLinkCacheValue(fingerprint);

  if (cachedId) {
    return buildShortShareUrl(cachedId);
  }

  // Fallback only shown before the user creates/copies the short link.
  // The Copy / Send buttons will save to Supabase and replace this with a short URL.
  return buildBackupShareUrl();
}

function getPendingLoopElementText() {
  const loop = pendingContributionLoopId ? getLoopById(pendingContributionLoopId) : null;
  return loop ? getElementText(loop.type) : "";
}

async function copyInviteLinkFromGuide() {
  const inviteInput = document.getElementById("guideInviteLink");
  const inviteButton = document.getElementById("guideCopyInviteButton");
  const originalButtonText = inviteButton ? inviteButton.textContent : "";

  try {
    if (inviteButton) {
      inviteButton.textContent = t("creatingShareLink");
    }

    const valueToCopy = await getOrCreateShortShareUrl();

    await navigator.clipboard.writeText(valueToCopy);
    if (inviteButton) {
      inviteButton.textContent = t("inviteLinkCopied");
      setTimeout(() => inviteButton.textContent = originalButtonText || t("sendToFriend"), 900);
    }
  } catch (err) {
    console.warn("Could not create short invite link", err);

    const fallbackValue = inviteInput ? inviteInput.value : buildBackupShareUrl();

    if (inviteInput) {
      inviteInput.value = fallbackValue;
      inviteInput.select();
      document.execCommand("copy");
    }

    if (inviteButton) {
      inviteButton.textContent = t("shareLinkFailed");
      setTimeout(() => inviteButton.textContent = originalButtonText || t("sendToFriend"), 1400);
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
  const editedAnyLoop = currentUserEditedAnyCompletedLoop();

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
      ${buildGuideShareHtml(
      (ownsCompletedLoop || editedAnyLoop)
      ? "shareLatestUpdate"
      : "sendToFriend"
      )}
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
      ${hasLoops && (ownsCompletedLoop || editedAnyLoop)
      ? buildGuideShareHtml("shareLatestUpdate")
      : ""}
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
  const showGuideFooter = producerReady && hasLoops && !pendingContributionLoopId && (currentUserOwnsAnyCompletedLoop() || currentUserEditedAnyCompletedLoop() || beatIsShareReady());

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

  // Everyone can remix and adjust volume. Only the creator can replace or remove.
  return true;
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

  const heroEyebrowEl = document.getElementById("heroEyebrow");
  heroEyebrowEl.textContent = t("heroEyebrow");
  heroEyebrowEl.style.display = t("heroEyebrow").trim() === "" ? "none" : "";
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

  if (faqButton) {
    faqButton.textContent = t("faqButton");
  }

  renderFaqPanel();
  renderExportPanel();

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

  const visibleActiveLoopIds = beat.loops.filter(loopId => loopId !== pendingContributionLoopId);

  if (visibleActiveLoopIds.length === 0) {
    activeLoopsEl.innerHTML = `<div class="empty">${t("noLoops")}</div>`;
  } else {
    visibleActiveLoopIds.forEach((loopId, index) => {
      const loop = getLoopById(loopId);
      if (!loop) return;

      const creator = getLoopCreator(loop.id) || getLoopContributor(loop.id) || t("anonymousName");
      const lastEditor = getLoopLastEditor(loop.id) || creator;
      const isCreator = currentUserIsLoopCreator(loop.id);
      const hasOriginalState = beat.originalStates && beat.originalStates[loop.id];
      const hasLatestEditState = beat.latestEditedStates && beat.latestEditedStates[loop.id];
      const isOriginalRestored = beat.restoredOriginalLoops && beat.restoredOriginalLoops[loop.id] === true;

      const row = document.createElement("div");
      row.className = "active-loop";
      row.innerHTML = `
        <strong>${index + 1}. ${loop.name}</strong>
        <span class="loop-meta">${getElementText(loop.type)} - ${t("createdBy")} ${creator}${lastEditor && lastEditor !== creator ? ` / ${t("lastEditedBy")} ${lastEditor}` : ""}</span>

        <div class="volume-control">
          <span class="loop-meta">${t("vol")}</span>
          <input class="volume-slider" type="range" min="0" max="150" value="${Math.round(getLoopVolume(loop.id) * 100)}">
          <span class="volume-readout">${Math.round(getLoopVolume(loop.id) * 100)}%</span>
        </div>

        <button class="edit-chop-button" type="button">${hasCustomChop(loop.id) ? t("editChop") : t("chop")}</button>

        ${
          isCreator && hasOriginalState && hasLatestEditState && hasLatestEditState.savedBy && hasLatestEditState.savedBy !== creator
            ? `<button class="restore-original-button secondary" type="button">${isOriginalRestored ? t("restoreLatestEdit") : t("restoreOriginal")}</button>`
            : ""
        }

        <button
          class="remove-loop-button ${isCreator ? "" : "disabled-action-button"}"
          type="button"
          aria-disabled="${isCreator ? "false" : "true"}">
          ${t("remove")}
        </button>
      `;

      const removeLoopButton = row.querySelector(".remove-loop-button");
      if (removeLoopButton) {
        removeLoopButton.addEventListener("click", () => {
          if (!canCurrentUserRemoveLoop(loop.id)) {
            showEditPermissionWarning();
            return;
          }

          removeLoop(loop.id);
        });
      }

      const editChopButton = row.querySelector(".edit-chop-button");
      if (editChopButton) {
        editChopButton.addEventListener("click", () => openChopEditor(loop.id));
      }

      const restoreOriginalButton = row.querySelector(".restore-original-button");
      if (restoreOriginalButton) {
        restoreOriginalButton.addEventListener("click", () => restoreOriginalLoopState(loop.id));
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

        <div class="loop-picker-actions loop-picker-actions-three">
          <button
            id="pickPreviewLoopButton"
            type="button"
            ${previewLoopData ? "" : "disabled"}>
            ${t("pickThisLoop")}
          </button>
          <button id="toggleFilterPanelButton" class="secondary" type="button">
            ${filterPanelOpen ? t("hideFilters") : t("filterResults")}
          </button>
          <button id="chooseDifferentElementButton" class="secondary" type="button">
            ${t("chooseDifferentElement")}
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

    const chooseDifferentElementButton = document.getElementById("chooseDifferentElementButton");
    if (chooseDifferentElementButton) {
      chooseDifferentElementButton.addEventListener("click", () => {
        stopPreviewLoop();
        previewLoopId = null;
        selectedElementFilter = null;
        selectedStyleFilter = null;
        selectedStyleFilters = [];
        filterPanelOpen = false;
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
  const finishedLoopId = selectedChopLoopId || pendingContributionLoopId;

  if (finishedLoopId) {
    ensureBeatDataObjects();

    const editorName = getDisplayProducerName();
    const userIsCreator = currentUserIsLoopCreator(finishedLoopId);

    beat.lastEditors[finishedLoopId] = editorName;

    if (userIsCreator) {
      saveCreatorOriginalState(finishedLoopId);
    } else {
      beat.latestEditedStates[finishedLoopId] = snapshotCurrentLoopState(finishedLoopId);
    }

    if (beat.restoredOriginalLoops) {
      beat.restoredOriginalLoops[finishedLoopId] = false;
    }
  }

  if (pendingContributionLoopId) {
    const loop = getLoopById(pendingContributionLoopId);
    currentUserContributionType = loop ? loop.type : currentUserContributionType;
    pendingContributionLoopId = null;
    pendingContributionElementFilter = null;
    pendingContributionStyleFilter = null;
    selectedElementFilter = null;
    selectedStyleFilter = null;
  }

  updateShareLink();
  closeChopEditor();
  render();
}

function handleChooseDifferentSound(loopId) {
  if (pendingContributionLoopId && pendingContributionLoopId === loopId) {
    pickDifferentLoopForPendingContribution();
    return;
  }

  if (!canCurrentUserReplaceLoop(loopId)) {
    showEditPermissionWarning();
    return;
  }

  const loopToReplace = getLoopById(loopId);
  if (!loopToReplace) return;

  beat.loops = beat.loops.filter(existingLoopId => existingLoopId !== loopId);

  delete beat.chops[loopId];
  delete beat.volumes[loopId];

  if (beat.contributors) {
    delete beat.contributors[loopId];

    if (isSingleUseElement(loopToReplace.type)) {
      delete beat.contributors[loopToReplace.type];
    }
  }

  if (beat.loopCreators) {
    delete beat.loopCreators[loopId];
  }

  if (beat.lastEditors) {
    delete beat.lastEditors[loopId];
  }

  if (beat.originalStates) {
    delete beat.originalStates[loopId];
  }

  if (beat.latestEditedStates) {
    delete beat.latestEditedStates[loopId];
  }

  if (beat.restoredOriginalLoops) {
    delete beat.restoredOriginalLoops[loopId];
  }

  if (chopUndoByLoopId) {
    delete chopUndoByLoopId[loopId];
  }

  selectedElementFilter = loopToReplace.type;
  selectedStyleFilter = null;
  selectedStyleFilters = [];
  previewLoopId = null;
  filterPanelOpen = false;

  pendingContributionLoopId = null;
  pendingContributionElementFilter = null;
  pendingContributionStyleFilter = null;
  currentUserContributionType = null;

  if (selectedChopLoopId === loopId) {
    selectedChopLoopId = null;
    selectedChopSlotIndex = 0;
  }

  if (isPlaying) {
    stopLoopSource(loopId);
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

  if (beat.loopCreators) {
    delete beat.loopCreators[loopIdToRemove];
  }

  if (beat.lastEditors) {
    delete beat.lastEditors[loopIdToRemove];
  }

  if (beat.originalStates) {
    delete beat.originalStates[loopIdToRemove];
  }

  if (beat.latestEditedStates) {
    delete beat.latestEditedStates[loopIdToRemove];
  }

  if (beat.restoredOriginalLoops) {
    delete beat.restoredOriginalLoops[loopIdToRemove];
  }

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

function convertFlagMapForGrid(oldFlagMap, oldSliceCount, newSliceCount) {
  const newFlagMap = {};
  const incomingFlagMap = oldFlagMap || {};

  if (newSliceCount === oldSliceCount) {
    for (const key in incomingFlagMap) {
      if (incomingFlagMap[key] === true) {
        newFlagMap[key] = true;
      }
    }

    return newFlagMap;
  }

  if (newSliceCount > oldSliceCount) {
    for (let newSlotIndex = 0; newSlotIndex < newSliceCount; newSlotIndex++) {
      const oldSlotIndex = Math.floor((newSlotIndex * oldSliceCount) / newSliceCount);

      if (incomingFlagMap[oldSlotIndex] === true) {
        newFlagMap[newSlotIndex] = true;
      }
    }
  } else {
    for (let newSlotIndex = 0; newSlotIndex < newSliceCount; newSlotIndex++) {
      const oldStart = Math.floor((newSlotIndex * oldSliceCount) / newSliceCount);
      const oldEnd = Math.ceil(((newSlotIndex + 1) * oldSliceCount) / newSliceCount);

      for (let oldSlotIndex = oldStart; oldSlotIndex < oldEnd; oldSlotIndex++) {
        if (incomingFlagMap[oldSlotIndex] === true) {
          newFlagMap[newSlotIndex] = true;
          break;
        }
      }
    }
  }

  return newFlagMap;
}

function convertChopRecipe(oldRecipe, newSliceCount) {
  const oldSliceCount = oldRecipe.slices;
  const oldPattern = oldRecipe.pattern;
  const newPattern = [];

  if (oldSliceCount === newSliceCount) {
    return enforceExclusiveSlotEffects({
      slices: newSliceCount,
      pattern: oldPattern.slice(),
      stutter: convertFlagMapForGrid(oldRecipe.stutter, oldSliceCount, newSliceCount),
      silent: convertFlagMapForGrid(oldRecipe.silent, oldSliceCount, newSliceCount),
      transform: convertFlagMapForGrid(oldRecipe.transform, oldSliceCount, newSliceCount),
      tripletTransform: convertFlagMapForGrid(oldRecipe.tripletTransform, oldSliceCount, newSliceCount),
      halfSpeed: convertFlagMapForGrid(oldRecipe.halfSpeed, oldSliceCount, newSliceCount),
      doubleSpeed: convertFlagMapForGrid(oldRecipe.doubleSpeed, oldSliceCount, newSliceCount)
    });
  }

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
  } else {
    for (let newSlotIndex = 0; newSlotIndex < newSliceCount; newSlotIndex++) {
      const oldSlotIndex = Math.floor((newSlotIndex * oldSliceCount) / newSliceCount);
      const oldSourceSlice = oldPattern[Math.min(oldSlotIndex, oldPattern.length - 1)];
      const newSourceSlice = Math.floor((oldSourceSlice * newSliceCount) / oldSliceCount);

      newPattern.push(Math.max(0, Math.min(newSliceCount - 1, newSourceSlice)));
    }
  }

  return enforceExclusiveSlotEffects({
    slices: newSliceCount,
    pattern: newPattern,
    stutter: convertFlagMapForGrid(oldRecipe.stutter, oldSliceCount, newSliceCount),
    silent: convertFlagMapForGrid(oldRecipe.silent, oldSliceCount, newSliceCount),
    transform: convertFlagMapForGrid(oldRecipe.transform, oldSliceCount, newSliceCount),
    tripletTransform: convertFlagMapForGrid(oldRecipe.tripletTransform, oldSliceCount, newSliceCount),
    halfSpeed: convertFlagMapForGrid(oldRecipe.halfSpeed, oldSliceCount, newSliceCount),
    doubleSpeed: convertFlagMapForGrid(oldRecipe.doubleSpeed, oldSliceCount, newSliceCount)
  });
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


function advanceSelectedChopSlot(loopId) {
  const recipe = getChopRecipe(loopId);
  selectedChopSlotIndex = (selectedChopSlotIndex + 1) % recipe.slices;
  playingChopSlotByLoopId.set(loopId, selectedChopSlotIndex);
}

function getSlotIndexFromPointerEvent(canvas, event) {
  const startSlot = Number(canvas.dataset.startSlot);
  const endSlot = Number(canvas.dataset.endSlot);
  const visibleSlots = Math.max(1, endSlot - startSlot);
  const rect = canvas.getBoundingClientRect();
  const pointerX = Math.max(0, Math.min(rect.width - 1, event.clientX - rect.left));
  const localSlot = Math.floor((pointerX / Math.max(1, rect.width)) * visibleSlots);

  return Math.max(startSlot, Math.min(endSlot - 1, startSlot + localSlot));
}

function getFlagAtSlot(flagMap, slotIndex) {
  return flagMap && flagMap[slotIndex] === true;
}

function setFlagAtSlot(flagMap, slotIndex, value) {
  if (value) {
    flagMap[slotIndex] = true;
  } else {
    delete flagMap[slotIndex];
  }
}

function clearNonMuteEffectsAtSlot(recipe, slotIndex) {
  if (recipe.stutter) delete recipe.stutter[slotIndex];
  if (recipe.transform) delete recipe.transform[slotIndex];
  if (recipe.tripletTransform) delete recipe.tripletTransform[slotIndex];
  if (recipe.halfSpeed) delete recipe.halfSpeed[slotIndex];
  if (recipe.doubleSpeed) delete recipe.doubleSpeed[slotIndex];
}

function enforceExclusiveSlotEffects(recipe) {
  if (!recipe.stutter) recipe.stutter = {};
  if (!recipe.silent) recipe.silent = {};
  if (!recipe.transform) recipe.transform = {};
  if (!recipe.tripletTransform) recipe.tripletTransform = {};
  if (!recipe.halfSpeed) recipe.halfSpeed = {};
  if (!recipe.doubleSpeed) recipe.doubleSpeed = {};

  const sliceCount = Math.max(0, Number(recipe.slices) || 0);

  for (let slotIndex = 0; slotIndex < sliceCount; slotIndex++) {
    if (recipe.silent[slotIndex] === true) {
      clearNonMuteEffectsAtSlot(recipe, slotIndex);
      continue;
    }

    if (recipe.tripletTransform[slotIndex] === true) {
      delete recipe.transform[slotIndex];
    }

    if (recipe.doubleSpeed[slotIndex] === true) {
      delete recipe.halfSpeed[slotIndex];
    }
  }

  return recipe;
}

function setExclusiveSlotFlag(recipe, activeFlagKey, inactiveFlagKey, slotIndex) {
  if (!recipe[activeFlagKey]) recipe[activeFlagKey] = {};
  if (!recipe[inactiveFlagKey]) recipe[inactiveFlagKey] = {};

  const nextValue = recipe[activeFlagKey][slotIndex] !== true;

  if (nextValue) {
    recipe[activeFlagKey][slotIndex] = true;
    delete recipe[inactiveFlagKey][slotIndex];
  } else {
    delete recipe[activeFlagKey][slotIndex];
  }
}

function swapChopSlots(loopId, firstSlotIndex, secondSlotIndex) {
  if (firstSlotIndex === secondSlotIndex) {
    selectedChopSlotIndex = firstSlotIndex;
    renderChopEditor();
    return;
  }

  const recipe = getChopRecipe(loopId);
  const flagKeys = ["stutter", "silent", "transform", "tripletTransform", "halfSpeed", "doubleSpeed"];

  flagKeys.forEach(flagKey => {
    if (!recipe[flagKey]) recipe[flagKey] = {};
  });

  const firstPattern = recipe.pattern[firstSlotIndex];
  const secondPattern = recipe.pattern[secondSlotIndex];
  const firstFlags = {};
  const secondFlags = {};

  flagKeys.forEach(flagKey => {
    firstFlags[flagKey] = getFlagAtSlot(recipe[flagKey], firstSlotIndex);
    secondFlags[flagKey] = getFlagAtSlot(recipe[flagKey], secondSlotIndex);
  });

  recipe.pattern[firstSlotIndex] = secondPattern;
  recipe.pattern[secondSlotIndex] = firstPattern;

  flagKeys.forEach(flagKey => {
    setFlagAtSlot(recipe[flagKey], firstSlotIndex, secondFlags[flagKey]);
    setFlagAtSlot(recipe[flagKey], secondSlotIndex, firstFlags[flagKey]);
  });

  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);

  selectedChopSlotIndex = secondSlotIndex;
  playingChopSlotByLoopId.set(loopId, selectedChopSlotIndex);

  renderChopEditor();
  render();
}

function setChopSlot(loopId, targetSlotIndex, sourceSliceIndex) {
  const recipe = getChopRecipe(loopId);

  recipe.pattern[targetSlotIndex] = sourceSliceIndex;
  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);

  selectedChopSlotIndex = targetSlotIndex;
  advanceSelectedChopSlot(loopId);

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
  advanceSelectedChopSlot(loopId);

  renderChopEditor();
  render();
}

function toggleSilentSelectedChop(loopId) {
  const recipe = getChopRecipe(loopId);
  const shouldMute = recipe.silent[selectedChopSlotIndex] !== true;

  recipe.silent[selectedChopSlotIndex] = shouldMute;

  if (shouldMute) {
    clearNonMuteEffectsAtSlot(recipe, selectedChopSlotIndex);
  }

  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);
  advanceSelectedChopSlot(loopId);

  renderChopEditor();
  render();
}

function toggleTransformSelectedChop(loopId) {
  const recipe = getChopRecipe(loopId);

  setExclusiveSlotFlag(recipe, "transform", "tripletTransform", selectedChopSlotIndex);

  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);
  advanceSelectedChopSlot(loopId);

  renderChopEditor();
  render();
}

function toggleTripletTransformSelectedChop(loopId) {
  const recipe = getChopRecipe(loopId);

  setExclusiveSlotFlag(recipe, "tripletTransform", "transform", selectedChopSlotIndex);

  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);
  advanceSelectedChopSlot(loopId);

  renderChopEditor();
  render();
}

function toggleHalfSpeedSelectedChop(loopId) {
  const recipe = getChopRecipe(loopId);

  setExclusiveSlotFlag(recipe, "halfSpeed", "doubleSpeed", selectedChopSlotIndex);

  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);
  advanceSelectedChopSlot(loopId);

  renderChopEditor();
  render();
}

function toggleDoubleSpeedSelectedChop(loopId) {
  const recipe = getChopRecipe(loopId);

  setExclusiveSlotFlag(recipe, "doubleSpeed", "halfSpeed", selectedChopSlotIndex);

  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);
  advanceSelectedChopSlot(loopId);

  renderChopEditor();
  render();
}

function randomizeChopOrder(loopId) {
  const recipe = getChopRecipe(loopId);

  for (let i = 0; i < recipe.slices; i++) {
    recipe.pattern[i] = Math.floor(Math.random() * recipe.slices);
  }

  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);
  showTemporaryToast(t("randomized"), "edit-warning-toast");
  renderChopEditor();
  render();
}

function clearRecipeFx(recipe) {
  recipe.stutter = {};
  recipe.silent = {};
  recipe.transform = {};
  recipe.tripletTransform = {};
  recipe.halfSpeed = {};
  recipe.doubleSpeed = {};
}

function randomizeChopFx(loopId) {
  const recipe = getChopRecipe(loopId);
  clearRecipeFx(recipe);

  for (let slotIndex = 0; slotIndex < recipe.slices; slotIndex++) {
    if (Math.random() > 0.70) {
      continue;
    }

    let appliedAnyEffect = false;

    const rhythmRoll = Math.random();
    if (rhythmRoll < 0.30) {
      recipe.stutter[slotIndex] = true;
      appliedAnyEffect = true;
    } else if (rhythmRoll < 0.55) {
      recipe.silent[slotIndex] = true;
      clearNonMuteEffectsAtSlot(recipe, slotIndex);
      appliedAnyEffect = true;
    }

    if (recipe.silent[slotIndex] !== true) {
      const transformRoll = Math.random();
      if (transformRoll < 0.25) {
        recipe.transform[slotIndex] = true;
        appliedAnyEffect = true;
      } else if (transformRoll < 0.50) {
        recipe.tripletTransform[slotIndex] = true;
        appliedAnyEffect = true;
      }

      const speedRoll = Math.random();
      if (speedRoll < 0.20) {
        recipe.halfSpeed[slotIndex] = true;
        appliedAnyEffect = true;
      } else if (speedRoll < 0.40) {
        recipe.doubleSpeed[slotIndex] = true;
        appliedAnyEffect = true;
      }
    }

    if (!appliedAnyEffect) {
      const fallbackEffects = ["stutter", "silent", "transform", "tripletTransform", "halfSpeed", "doubleSpeed"];
      const fallbackEffect = fallbackEffects[Math.floor(Math.random() * fallbackEffects.length)];
      recipe[fallbackEffect][slotIndex] = true;

      if (fallbackEffect === "silent") {
        clearNonMuteEffectsAtSlot(recipe, slotIndex);
      }
    }
  }

  setChopRecipe(loopId, recipe);
  refreshPlayingLoopAfterChopEdit(loopId);
  showTemporaryToast(t("randomized"), "edit-warning-toast");
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
    const visibleSlots = rowEnd - rowStart;

    let buttonsHtml = "";

    for (let slotIndex = rowStart; slotIndex < rowEnd; slotIndex++) {
      if (mode === "top") {
        const sourceSliceIndex = recipe.pattern[slotIndex];
        const selectedClass = slotIndex === selectedChopSlotIndex ? " selected" : "";
        const draggingClass = slotIndex === draggedChopSlotIndex ? " dragging-source" : "";
        const isSilent = recipe.silent && recipe.silent[slotIndex] === true;
        const isStutter = recipe.stutter && recipe.stutter[slotIndex] === true;
        const isTransform = recipe.transform && recipe.transform[slotIndex] === true;
        const isTripletTransform = recipe.tripletTransform && recipe.tripletTransform[slotIndex] === true;
        const isHalfSpeed = recipe.halfSpeed && recipe.halfSpeed[slotIndex] === true;
        const isDoubleSpeed = recipe.doubleSpeed && recipe.doubleSpeed[slotIndex] === true;
        const fxText = `${isStutter ? '<span class="slot-fx-symbol">≋</span>' : ""}${isTransform ? '<span class="slot-fx-symbol">◒</span>' : ""}${isTripletTransform ? '<span class="slot-fx-symbol">⅓</span>' : ""}${isHalfSpeed ? '<span class="slot-fx-symbol">½</span>' : ""}${isDoubleSpeed ? '<span class="slot-fx-symbol">2×</span>' : ""}`;
        const slotText = isSilent ? "X" : `${fxText}<span class="slot-number-text">${sourceSliceIndex + 1}</span>`;

        buttonsHtml += `
          <button
            class="chop-slot${selectedClass}${draggingClass}${isSilent ? " silent" : ""}${isTransform ? " transform" : ""}${isTripletTransform ? " triplet-transform" : ""}${isHalfSpeed ? " half-speed" : ""}${isDoubleSpeed ? " double-speed" : ""}"
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

    const selectedFrameHtml = mode === "top" && selectedChopSlotIndex >= rowStart && selectedChopSlotIndex < rowEnd
      ? `<div
          class="selected-slot-frame"
          style="left:${((selectedChopSlotIndex - rowStart) / visibleSlots) * 100}%; width:${100 / visibleSlots}%;">
        </div>`
      : "";

    const playButtonsHtml = mode === "top"
      ? Array.from({ length: visibleSlots }, (_, localIndex) => {
          const playSlotIndex = rowStart + localIndex;
          const isActive = playingChopSlotByLoopId.get(loop.id) === playSlotIndex;
          return `
            <button
              class="chop-play-button${isActive ? " active" : ""}"
              data-loop-id="${loop.id}"
              data-play-slot="${playSlotIndex}"
              type="button"
              aria-label="Play from slot ${playSlotIndex + 1}">▶</button>
          `;
        }).join("")
      : "";

    html += `
      <div
        class="chop-row-block ${mode === "top" ? "top-row-block" : "bottom-row-block"}"
        data-loop-id="${loop.id}"
        data-row-index="${rowIndex}"
        data-row-start="${rowStart}"
        data-row-end="${rowEnd}">
        ${mode === "top" ? `
          <div
            class="chop-play-lane"
            style="grid-template-columns: repeat(${visibleSlots}, 1fr);">
            ${playButtonsHtml}
          </div>
        ` : ""}
        ${selectedFrameHtml}
        <canvas
          class="chop-waveform ${mode === "top" ? "top-waveform" : "bottom-waveform"}"
          data-loop-id="${loop.id}"
          data-start-slot="${rowStart}"
          data-end-slot="${rowEnd}">
        </canvas>

        <div
          class="chop-lane ${mode === "top" ? "top-lane" : "bottom-lane"}"
          data-loop-id="${loop.id}"
          data-row-index="${rowIndex}"
          style="grid-template-columns: repeat(${visibleSlots}, 1fr);">
          ${buttonsHtml}
        </div>
      </div>
    `;
  }

  return html;
}

function getSlotIndexFromRowBlockPointer(rowBlock, event) {
  const startSlot = Number(rowBlock.dataset.rowStart);
  const endSlot = Number(rowBlock.dataset.rowEnd);
  const visibleSlots = Math.max(1, endSlot - startSlot);
  const rect = rowBlock.getBoundingClientRect();
  const pointerX = Math.max(0, Math.min(rect.width - 1, event.clientX - rect.left));
  const localSlot = Math.floor((pointerX / Math.max(1, rect.width)) * visibleSlots);

  return Math.max(startSlot, Math.min(endSlot - 1, startSlot + localSlot));
}

function getTopRowBlockFromPoint(clientX, clientY) {
  const elements = document.elementsFromPoint(clientX, clientY);
  return elements.find(element => element.classList && element.classList.contains("top-row-block")) || null;
}

function removeChopDragGhost() {
  if (chopDragGhostEl) {
    chopDragGhostEl.remove();
  }

  chopDragGhostEl = null;
  document.querySelectorAll(".drag-target-slot").forEach(element => element.classList.remove("drag-target-slot"));
  document.body.classList.remove("chop-dragging-active");
}

function updateChopDragGhost(event) {
  if (!activeChopDrag) return;
  if (event.cancelable) event.preventDefault();

  const moveX = event.clientX - activeChopDrag.startClientX;
  const moveY = event.clientY - activeChopDrag.startClientY;
  const movedEnough = Math.abs(moveX) > 5 || Math.abs(moveY) > 5;

  if (!activeChopDrag.hasMoved && !movedEnough) {
    return;
  }

  if (!activeChopDrag.hasMoved) {
    activeChopDrag.hasMoved = true;
    draggedChopSlotIndex = activeChopDrag.sourceMode === "top" ? activeChopDrag.slotIndex : null;
    document.body.classList.add("chop-dragging-active");

    chopDragGhostEl = document.createElement("div");
    chopDragGhostEl.className = `chop-drag-ghost ${activeChopDrag.sourceMode === "bottom" ? "source-drag-ghost" : ""}`;
    chopDragGhostEl.textContent = activeChopDrag.sourceMode === "bottom"
      ? `${activeChopDrag.sourceSliceIndex + 1}`
      : `${activeChopDrag.slotIndex + 1}`;
    chopDragGhostEl.style.width = `${activeChopDrag.slotWidth}px`;
    chopDragGhostEl.style.height = `${activeChopDrag.slotHeight}px`;
    document.body.appendChild(chopDragGhostEl);
  }

  if (chopDragGhostEl) {
    chopDragGhostEl.style.left = `${event.clientX - activeChopDrag.slotWidth / 2}px`;
    chopDragGhostEl.style.top = `${event.clientY - activeChopDrag.slotHeight / 2}px`;
  }

  document.querySelectorAll(".drag-target-slot").forEach(element => element.classList.remove("drag-target-slot"));

  const rowBlock = getTopRowBlockFromPoint(event.clientX, event.clientY);
  chopDragTargetSlotIndex = null;

  if (rowBlock) {
    const targetSlotIndex = getSlotIndexFromRowBlockPointer(rowBlock, event);
    chopDragTargetSlotIndex = targetSlotIndex;
    rowBlock.querySelector(`[data-target-slot="${targetSlotIndex}"]`)?.classList.add("drag-target-slot");
  }
}

function finishChopDrag(loopId, event) {
  if (!activeChopDrag) return;

  updateChopDragGhost(event);

  const sourceMode = activeChopDrag.sourceMode || "top";
  const startSlotIndex = activeChopDrag.slotIndex;
  const sourceSliceIndex = activeChopDrag.sourceSliceIndex;
  const endSlotIndex = chopDragTargetSlotIndex;
  const wasRealDrag = activeChopDrag.hasMoved;

  removeChopDragGhost();

  activeChopDrag = null;
  draggedChopSlotIndex = null;
  chopDragTargetSlotIndex = null;

  if (sourceMode === "bottom") {
    if (wasRealDrag && endSlotIndex !== null) {
      setChopSlot(loopId, endSlotIndex, sourceSliceIndex);
      return;
    }

    if (wasRealDrag) {
      renderChopEditor();
      return;
    }

    setChopSlot(loopId, selectedChopSlotIndex, sourceSliceIndex);
    return;
  }

  if (wasRealDrag && endSlotIndex !== null && endSlotIndex !== startSlotIndex) {
    swapChopSlots(loopId, startSlotIndex, endSlotIndex);
    return;
  }

  selectedChopSlotIndex = startSlotIndex;
  playingChopSlotByLoopId.set(loopId, selectedChopSlotIndex);
  renderChopEditor();
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
    <div class="chop-header compact-chop-header">
      <div class="chop-title-block">
        <p class="label">${t("chopEditor")}</p>
        <h2>${loop.name}</h2>
        <p class="loop-meta">${t("createdBy")} ${getLoopCreator(loop.id) || t("anonymousName")}${getLoopLastEditor(loop.id) && getLoopLastEditor(loop.id) !== getLoopCreator(loop.id) ? ` / ${t("lastEditedBy")} ${getLoopLastEditor(loop.id)}` : ""}</p>
      </div>
      <div class="chop-header-controls">
        <div class="chop-grid-buttons compact-grid-buttons" aria-label="${t("grid")}">
          <span class="loop-meta">${t("grid")}</span>
          <button class="${recipe.slices === 4 ? "selected" : ""}" data-grid-size="4" type="button">4</button>
          <button class="${recipe.slices === 8 ? "selected" : ""}" data-grid-size="8" type="button">8</button>
          <button class="${recipe.slices === 16 ? "selected" : ""}" data-grid-size="16" type="button">16</button>
          <button class="${recipe.slices === 32 ? "selected" : ""}" data-grid-size="32" type="button">32</button>
        </div>
        ${pendingContributionLoopId === loop.id ? "" : `<button class="ghost close-chop-button" type="button" aria-label="${t("close")}">×</button>`}
      </div>
    </div>

    <div class="chop-section-divider"></div>
    <div class="chop-lane-wrap rearranged-loop-section">
      <p class="loop-meta">${t("rearrangedLoop")}</p>
      ${topRowsHtml}
    </div>

    <div class="chop-section-divider"></div>
    <div class="chop-lane-wrap original-loop-section">
      <p class="loop-meta">${t("originalLoop")}</p>
      ${bottomRowsHtml}
    </div>

    <div class="chop-section-divider"></div>
    <div class="chop-actions chop-fx-actions">
      <button class="secondary reverse-chop-button" type="button"><span class="chop-action-symbol">≋</span>${t("reverseSelected")}</button>
      <button class="secondary mute-chop-button" type="button"><span class="chop-action-symbol">✕</span>${t("muteSelected")}</button>
      <button class="secondary half-speed-chop-button" type="button"><span class="chop-action-symbol">½</span>${t("halfSpeedSelected")}</button>
      <button class="secondary transform-chop-button" type="button"><span class="chop-action-symbol">◒</span>${t("transformSelected")}</button>
      <button class="secondary triplet-transform-chop-button" type="button"><span class="chop-action-symbol">⅓</span>${t("tripletTransformSelected")}</button>
      <button class="secondary double-speed-chop-button" type="button"><span class="chop-action-symbol">2×</span>${t("doubleSpeedSelected")}</button>
    </div>

    <div class="chop-section-divider chop-action-divider"></div>
    <div class="chop-actions chop-random-actions">
      <button class="secondary random-order-chop-button" type="button"><span class="chop-action-symbol">⇄</span>${t("randomOrder")}</button>
      <button class="secondary random-fx-chop-button" type="button"><span class="chop-action-symbol">🎲</span>${t("randomFx")}</button>
    </div>

    <div class="chop-actions chop-workflow-actions">
      <button class="secondary undo-chop-button ${chopUndoByLoopId[loop.id] ? "" : "disabled-action-button"}" type="button" ${chopUndoByLoopId[loop.id] ? "" : "disabled"}>${t("undo")}</button>
      <button class="secondary reset-chop-button" type="button">${t("reset")}</button>
      <button class="done-chop-button" type="button">${t("done")}</button>
      <button
        class="secondary pick-different-loop-button ${canCurrentUserReplaceLoop(loop.id) || pendingContributionLoopId === loop.id ? "" : "disabled-action-button"}"
        type="button"
        aria-disabled="${canCurrentUserReplaceLoop(loop.id) || pendingContributionLoopId === loop.id ? "false" : "true"}">
        ${t("chooseDifferentSound")}
      </button>
    </div>
  `;

  const closeChopButton = chopEditorEl.querySelector(".close-chop-button");
  if (closeChopButton) {
    closeChopButton.addEventListener("click", closeChopEditor);
  }
  chopEditorEl.querySelector(".done-chop-button").addEventListener("click", finishChopContribution);
  chopEditorEl.querySelector(".reset-chop-button").addEventListener("click", () => resetCurrentChop(loop.id));
  chopEditorEl.querySelector(".random-order-chop-button").addEventListener("click", () => randomizeChopOrder(loop.id));
  chopEditorEl.querySelector(".random-fx-chop-button").addEventListener("click", () => randomizeChopFx(loop.id));
  const undoChopButton = chopEditorEl.querySelector(".undo-chop-button");
  if (undoChopButton && !undoChopButton.disabled) {
    undoChopButton.addEventListener("click", () => undoChopEdit(loop.id));
  }
  chopEditorEl.querySelector(".reverse-chop-button").addEventListener("click", () => toggleReverseSelectedChop(loop.id));
  chopEditorEl.querySelector(".mute-chop-button").addEventListener("click", () => toggleSilentSelectedChop(loop.id));
  chopEditorEl.querySelector(".transform-chop-button").addEventListener("click", () => toggleTransformSelectedChop(loop.id));
  chopEditorEl.querySelector(".triplet-transform-chop-button").addEventListener("click", () => toggleTripletTransformSelectedChop(loop.id));
  chopEditorEl.querySelector(".half-speed-chop-button").addEventListener("click", () => toggleHalfSpeedSelectedChop(loop.id));
  chopEditorEl.querySelector(".double-speed-chop-button").addEventListener("click", () => toggleDoubleSpeedSelectedChop(loop.id));
  chopEditorEl.querySelector(".pick-different-loop-button").addEventListener("click", () => handleChooseDifferentSound(loop.id));

  chopEditorEl.querySelectorAll("[data-play-slot]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      playFromChopSlot(loop.id, Number(button.dataset.playSlot));
    });
  });

  chopEditorEl.querySelectorAll("[data-grid-size]").forEach(button => {
    button.addEventListener("click", () => changeChopGrid(loop.id, Number(button.dataset.gridSize)));
  });

  function beginTopSlotInteraction(slotIndex, event, sourceElement) {
    event.preventDefault();

    const rowBlock = sourceElement.closest(".top-row-block");
    const rowRect = rowBlock ? rowBlock.getBoundingClientRect() : sourceElement.getBoundingClientRect();
    const recipe = getChopRecipe(loop.id);
    const rowSize = recipe.slices === 32 ? 16 : recipe.slices;

    activeChopDrag = {
      sourceMode: "top",
      slotIndex: slotIndex,
      startClientX: event.clientX,
      startClientY: event.clientY,
      slotWidth: rowRect.width / rowSize,
      slotHeight: rowRect.height,
      hasMoved: false
    };

    if (sourceElement.setPointerCapture) {
      try {
        sourceElement.setPointerCapture(event.pointerId);
      } catch (err) {}
    }

    window.addEventListener("pointermove", updateChopDragGhost, { passive: false });
    window.addEventListener("pointerup", pointerUpEvent => {
      window.removeEventListener("pointermove", updateChopDragGhost);
      finishChopDrag(loop.id, pointerUpEvent);
    }, { once: true });
    window.addEventListener("pointercancel", () => {
      window.removeEventListener("pointermove", updateChopDragGhost);
      removeChopDragGhost();
      activeChopDrag = null;
      draggedChopSlotIndex = null;
      chopDragTargetSlotIndex = null;
    }, { once: true });
  }

  function beginBottomSourceInteraction(sourceSliceIndex, event, sourceElement) {
    event.preventDefault();

    const rowBlock = sourceElement.closest(".bottom-row-block");
    const rowRect = rowBlock ? rowBlock.getBoundingClientRect() : sourceElement.getBoundingClientRect();
    const recipe = getChopRecipe(loop.id);
    const rowSize = recipe.slices === 32 ? 16 : recipe.slices;

    activeChopDrag = {
      sourceMode: "bottom",
      sourceSliceIndex: sourceSliceIndex,
      slotIndex: selectedChopSlotIndex,
      startClientX: event.clientX,
      startClientY: event.clientY,
      slotWidth: rowRect.width / rowSize,
      slotHeight: rowRect.height,
      hasMoved: false
    };

    if (sourceElement.setPointerCapture) {
      try {
        sourceElement.setPointerCapture(event.pointerId);
      } catch (err) {}
    }

    window.addEventListener("pointermove", updateChopDragGhost, { passive: false });
    window.addEventListener("pointerup", pointerUpEvent => {
      window.removeEventListener("pointermove", updateChopDragGhost);
      finishChopDrag(loop.id, pointerUpEvent);
    }, { once: true });
    window.addEventListener("pointercancel", () => {
      window.removeEventListener("pointermove", updateChopDragGhost);
      removeChopDragGhost();
      activeChopDrag = null;
      draggedChopSlotIndex = null;
      chopDragTargetSlotIndex = null;
    }, { once: true });
  }

  chopEditorEl.querySelectorAll("[data-target-slot]").forEach(button => {
    button.addEventListener("pointerdown", event => {
      beginTopSlotInteraction(Number(button.dataset.targetSlot), event, button);
    });
  });

  chopEditorEl.querySelectorAll(".top-waveform").forEach(canvas => {
    canvas.addEventListener("pointerdown", event => {
      beginTopSlotInteraction(getSlotIndexFromPointerEvent(canvas, event), event, canvas);
    });
  });

  chopEditorEl.querySelectorAll(".bottom-waveform").forEach(canvas => {
    canvas.addEventListener("pointerdown", event => {
      beginBottomSourceInteraction(getSlotIndexFromPointerEvent(canvas, event), event, canvas);
    });
  });

  chopEditorEl.querySelectorAll("[data-source-slice]").forEach(button => {
    button.addEventListener("pointerdown", event => {
      beginBottomSourceInteraction(Number(button.dataset.sourceSlice), event, button);
    });
  });

  const visiblePlayheadSlot = playingChopSlotByLoopId.has(loop.id)
  ? playingChopSlotByLoopId.get(loop.id)
  : 0;

  updateChopPlayhead(loop.id, visiblePlayheadSlot);

  drawChopWaveforms(loop.id);
}

function getExportFileName(extension) {
  const cleanName = (beat.name || t("untitledBeat"))
    .replace(/[^a-z0-9_\- ]/gi, "")
    .trim()
    .replace(/\s+/g, "_")
    || "beatseed_beat";

  return `${cleanName}.${extension}`;
}

function floatTo16BitPcmSample(sample) {
  const clampedSample = Math.max(-1, Math.min(1, sample));
  return clampedSample < 0
    ? clampedSample * 0x8000
    : clampedSample * 0x7fff;
}

function encodeWavFromAudioBuffer(audioBuffer) {
  const channelCount = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const sampleCount = audioBuffer.length;
  const bytesPerSample = 2;
  const blockAlign = channelCount * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = sampleCount * blockAlign;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  function writeString(offset, value) {
    for (let i = 0; i < value.length; i++) {
      view.setUint8(offset + i, value.charCodeAt(i));
    }
  }

  writeString(0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channelCount, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, dataSize, true);

  let writeOffset = 44;

  for (let sampleIndex = 0; sampleIndex < sampleCount; sampleIndex++) {
    for (let channelIndex = 0; channelIndex < channelCount; channelIndex++) {
      const channelData = audioBuffer.getChannelData(channelIndex);
      view.setInt16(
        writeOffset,
        floatTo16BitPcmSample(channelData[sampleIndex]),
        true
      );
      writeOffset += bytesPerSample;
    }
  }

  return new Blob([buffer], { type: "audio/wav" });
}

function downloadBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    URL.revokeObjectURL(objectUrl);
    link.remove();
  }, 1000);
}

function connectOfflineMaster(offlineContext) {
  const masterNode = offlineContext.createGain();
  masterNode.gain.value = 0.9;

  const compressorNode = offlineContext.createDynamicsCompressor();
  compressorNode.threshold.value = -10;
  compressorNode.knee.value = 18;
  compressorNode.ratio.value = 8;
  compressorNode.attack.value = 0.003;
  compressorNode.release.value = 0.16;

  masterNode.connect(compressorNode);
  compressorNode.connect(offlineContext.destination);

  return masterNode;
}

function scheduleOfflineSegment(offlineContext, masterNode, buffer, loop, sourceOffset, startTime, duration, shouldFadeIn, shouldFadeOut, playbackRate = 1) {
  if (duration <= 0.005) return;

  const source = offlineContext.createBufferSource();
  const gainNode = offlineContext.createGain();

  source.buffer = buffer;
  source.playbackRate.value = playbackRate;

  const forceHalfSpeedFade = playbackRate < 1;
  const fadeTime = Math.min(forceHalfSpeedFade ? 0.012 : 0.006, duration * 0.35);
  const targetGain = loop.gain * getLoopVolume(loop.id);
  const useFadeIn = shouldFadeIn || forceHalfSpeedFade;
  const useFadeOut = shouldFadeOut || forceHalfSpeedFade;

  gainNode.gain.setValueAtTime(useFadeIn ? 0 : targetGain, startTime);

  if (useFadeIn) {
    gainNode.gain.linearRampToValueAtTime(targetGain, startTime + fadeTime);
  }

  if (useFadeOut) {
    gainNode.gain.setValueAtTime(targetGain, Math.max(startTime, startTime + duration - fadeTime));
    gainNode.gain.linearRampToValueAtTime(0, startTime + duration);
  }

  source.connect(gainNode);
  gainNode.connect(masterNode);

  try {
    const sourceReadDuration = duration * playbackRate;
    source.start(startTime, sourceOffset, sourceReadDuration);
    source.stop(startTime + duration);
  } catch (err) {
    console.warn("Could not schedule offline export segment", err);
  }
}

function scheduleOfflineNormalLoop(offlineContext, masterNode, loop, buffer, exportDuration) {
  const source = offlineContext.createBufferSource();
  const gainNode = offlineContext.createGain();

  source.buffer = buffer;
  source.loop = true;

  gainNode.gain.value = loop.gain * getLoopVolume(loop.id);

  source.connect(gainNode);
  gainNode.connect(masterNode);

  source.start(0, 0);
  source.stop(exportDuration);
}

function scheduleOfflineChoppedLoop(offlineContext, masterNode, loop, buffer, exportDuration) {
  const recipe = getChopRecipe(loop.id);
  const sliceDuration = buffer.duration / recipe.slices;
  const totalSlots = Math.ceil(exportDuration / sliceDuration);

  for (let exportSlotIndex = 0; exportSlotIndex < totalSlots; exportSlotIndex++) {
    const slotIndex = exportSlotIndex % recipe.slices;
    const startTime = exportSlotIndex * sliceDuration;
    const duration = Math.min(sliceDuration, exportDuration - startTime);

    if (duration <= 0.005) continue;

    const isSilent = recipe.silent && recipe.silent[slotIndex] === true;
    if (isSilent) continue;

    const sourceSliceIndex = recipe.pattern[slotIndex];
    const sourceOffset = sourceSliceIndex * sliceDuration;
    const isStutter = recipe.stutter && recipe.stutter[slotIndex] === true;
    const isTransform = recipe.transform && recipe.transform[slotIndex] === true;
    const isTripletTransform = recipe.tripletTransform && recipe.tripletTransform[slotIndex] === true;
    const isHalfSpeed = recipe.halfSpeed && recipe.halfSpeed[slotIndex] === true;
    const isDoubleSpeed = recipe.doubleSpeed && recipe.doubleSpeed[slotIndex] === true;
    const playbackRate = isHalfSpeed ? 0.5 : (isDoubleSpeed ? 2 : 1);

    const previousSlotIndex = (slotIndex - 1 + recipe.slices) % recipe.slices;
    const nextSlotIndex = (slotIndex + 1) % recipe.slices;

    const previousSourceSliceIndex = recipe.pattern[previousSlotIndex];
    const nextSourceSliceIndex = recipe.pattern[nextSlotIndex];

    const naturalFromPrevious = ((previousSourceSliceIndex + 1) % recipe.slices) === sourceSliceIndex;
    const naturalToNext = ((sourceSliceIndex + 1) % recipe.slices) === nextSourceSliceIndex;

    if (isStutter) {
      const tinyChunkDuration = buffer.duration / 64;
      const repeatDuration = Math.min(tinyChunkDuration, duration);
      const repeatCount = Math.ceil(duration / repeatDuration);

      for (let repeatIndex = 0; repeatIndex < repeatCount; repeatIndex++) {
        if ((isTransform || isTripletTransform) && repeatIndex % 2 === 1) continue;

        const segmentStartTime = startTime + (repeatIndex * repeatDuration);
        const remainingDuration = (startTime + duration) - segmentStartTime;
        const segmentDuration = Math.min(repeatDuration, remainingDuration);

        scheduleOfflineSegment(
          offlineContext,
          masterNode,
          buffer,
          loop,
          sourceOffset,
          segmentStartTime,
          segmentDuration,
          true,
          true,
          playbackRate
        );
      }
    } else {
      const repeatCount = isDoubleSpeed ? 2 : 1;
      const repeatDuration = duration / repeatCount;
      const gateCount = isTripletTransform ? (active.recipe.slices === 4 ? 12 : 6) : (isTransform ? (active.recipe.slices === 4 ? 16 : 8) : 1);

      for (let repeatIndex = 0; repeatIndex < repeatCount; repeatIndex++) {
        const repeatStartTime = startTime + (repeatIndex * repeatDuration);
        const gateDuration = repeatDuration / gateCount;

        for (let gateIndex = 0; gateIndex < gateCount; gateIndex++) {
          if (gateCount > 1 && gateIndex % 2 === 1) continue;

          const segmentStartTime = repeatStartTime + (gateIndex * gateDuration);
          const segmentSourceOffset = sourceOffset + (gateIndex * gateDuration * playbackRate);
          const remainingDuration = (repeatStartTime + repeatDuration) - segmentStartTime;
          const segmentDuration = Math.min(gateDuration, remainingDuration);
          const forceSmallFade = gateCount > 1 || repeatCount > 1;

          scheduleOfflineSegment(
            offlineContext,
            masterNode,
            buffer,
            loop,
            segmentSourceOffset,
            segmentStartTime,
            segmentDuration,
            !naturalFromPrevious || forceSmallFade,
            !naturalToNext || forceSmallFade,
            playbackRate
          );
        }
      }
    }
  }
}

async function exportBeatAsWav() {
  if (beat.loops.length === 0) {
    showTemporaryToast(t("noLoops"), "edit-warning-toast");
    return;
  }

  try {
    showTemporaryToast(t("exportPreparing"), "edit-warning-toast");

    await ensureAudioContext();

    const loadedLoops = [];

    for (const loopId of beat.loops) {
      const loop = getLoopById(loopId);
      if (!loop) continue;

      const buffer = await loadBuffer(loop);

      loadedLoops.push({
        loop: loop,
        buffer: buffer
      });
    }

    if (loadedLoops.length === 0) {
      showTemporaryToast(t("exportFailed"), "edit-warning-toast");
      return;
    }

    const baseDuration = loadedLoops[0].buffer.duration;
    const exportRepeats = getExportRepeatCount();
    const exportDuration = baseDuration * exportRepeats;
    const sampleRate = audioContext ? audioContext.sampleRate : 44100;
    const offlineContext = new OfflineAudioContext(2, Math.ceil(exportDuration * sampleRate), sampleRate);
    const masterNode = connectOfflineMaster(offlineContext);

    loadedLoops.forEach(item => {
      if (hasCustomChop(item.loop.id)) {
        scheduleOfflineChoppedLoop(offlineContext, masterNode, item.loop, item.buffer, exportDuration);
      } else {
        scheduleOfflineNormalLoop(offlineContext, masterNode, item.loop, item.buffer, exportDuration);
      }
    });

    const renderedBuffer = await offlineContext.startRendering();
    const wavBlob = encodeWavFromAudioBuffer(renderedBuffer);

    downloadBlob(wavBlob, getExportFileName("wav"));
  } catch (err) {
    console.warn("Could not export WAV", err);
    showTemporaryToast(t("exportFailed"), "edit-warning-toast");
  }
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

function scheduleChopSlice(active, sourceSliceIndex, playTime, sourceOffset, duration, shouldFadeIn, shouldFadeOut, slotIndexForVisual, isStutter, isTransform = false, isHalfSpeed = false, isTripletTransform = false, isDoubleSpeed = false) {
  if (!active || active.stopped) return;
  if (duration <= 0.005) return;

  const tinyChunkDuration = active.buffer.duration / 64;
  const useStutter = isStutter && tinyChunkDuration > 0.005;
  const playbackRate = isHalfSpeed ? 0.5 : (isDoubleSpeed ? 2 : 1);

  function scheduleOneSegment(segmentStartTime, segmentSourceOffset, segmentDuration, fadeThisIn, fadeThisOut) {
    if (segmentDuration <= 0.005) return;

    const source = audioContext.createBufferSource();
    const sliceGain = audioContext.createGain();

    source.buffer = active.buffer;
    source.playbackRate.value = playbackRate;

    const forceHalfSpeedFade = isHalfSpeed === true;
    const fadeTime = Math.min(forceHalfSpeedFade ? 0.012 : 0.006, segmentDuration * 0.35);
    const useFadeIn = fadeThisIn || forceHalfSpeedFade;
    const useFadeOut = fadeThisOut || forceHalfSpeedFade;

    sliceGain.gain.setValueAtTime(useFadeIn ? 0 : 1, segmentStartTime);

    if (useFadeIn) {
      sliceGain.gain.linearRampToValueAtTime(1, segmentStartTime + fadeTime);
    }

    if (useFadeOut) {
      sliceGain.gain.setValueAtTime(1, Math.max(segmentStartTime, segmentStartTime + segmentDuration - fadeTime));
      sliceGain.gain.linearRampToValueAtTime(0, segmentStartTime + segmentDuration);
    }

    source.connect(sliceGain);
    sliceGain.connect(active.gainNode);

    try {
      const sourceReadDuration = segmentDuration * playbackRate;
      source.start(segmentStartTime, segmentSourceOffset, sourceReadDuration);
      source.stop(segmentStartTime + segmentDuration);
    } catch (err) {
      console.warn("Could not schedule chop slice", err);
      return;
    }

    active.sources.push(source);

    source.onended = () => {
      active.sources = active.sources.filter(item => item !== source);
    };
  }

  if (useStutter) {
    const repeatDuration = Math.min(tinyChunkDuration, duration);
    const repeatCount = Math.ceil(duration / repeatDuration);

    for (let repeatIndex = 0; repeatIndex < repeatCount; repeatIndex++) {
      if ((isTransform || isTripletTransform) && repeatIndex % 2 === 1) continue;

      const segmentStartTime = playTime + (repeatIndex * repeatDuration);
      const remainingDuration = (playTime + duration) - segmentStartTime;
      const segmentDuration = Math.min(repeatDuration, remainingDuration);

      scheduleOneSegment(segmentStartTime, sourceOffset, segmentDuration, true, true);
    }
  } else {
    const repeatCount = isDoubleSpeed ? 2 : 1;
    const repeatDuration = duration / repeatCount;
    const gateCount = isTripletTransform ? (active.recipe.slices === 4 ? 12 : 6) : (isTransform ? (active.recipe.slices === 4 ? 16 : 8) : 1);

    for (let repeatIndex = 0; repeatIndex < repeatCount; repeatIndex++) {
      const repeatStartTime = playTime + (repeatIndex * repeatDuration);
      const gateDuration = repeatDuration / gateCount;

      for (let gateIndex = 0; gateIndex < gateCount; gateIndex++) {
        if (gateCount > 1 && gateIndex % 2 === 1) continue;

        const segmentStartTime = repeatStartTime + (gateIndex * gateDuration);
        const segmentSourceOffset = sourceOffset + (gateIndex * gateDuration * playbackRate);
        const remainingDuration = (repeatStartTime + repeatDuration) - segmentStartTime;
        const segmentDuration = Math.min(gateDuration, remainingDuration);
        const forceSmallFade = gateCount > 1 || repeatCount > 1;

        scheduleOneSegment(
          segmentStartTime,
          segmentSourceOffset,
          segmentDuration,
          shouldFadeIn || forceSmallFade,
          shouldFadeOut || forceSmallFade
        );
      }
    }
  }

  const delayUntilHeard = Math.max(0, (playTime - audioContext.currentTime) * 1000);

  setTimeout(() => {
    if (!active.stopped) {
      updateChopPlayhead(active.loopId, slotIndexForVisual);
    }
  }, delayUntilHeard);
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
  const isTransform = active.recipe.transform && active.recipe.transform[active.nextSlotIndex] === true;
  const isTripletTransform = active.recipe.tripletTransform && active.recipe.tripletTransform[active.nextSlotIndex] === true;
  const isHalfSpeed = active.recipe.halfSpeed && active.recipe.halfSpeed[active.nextSlotIndex] === true;
  const isDoubleSpeed = active.recipe.doubleSpeed && active.recipe.doubleSpeed[active.nextSlotIndex] === true;

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
      isStutter,
      isTransform,
      isHalfSpeed,
      isTripletTransform,
      isDoubleSpeed
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
  const firstIsTransform = recipe.transform && recipe.transform[startSlotIndex] === true;
  const firstIsTripletTransform = recipe.tripletTransform && recipe.tripletTransform[startSlotIndex] === true;
  const firstIsHalfSpeed = recipe.halfSpeed && recipe.halfSpeed[startSlotIndex] === true;
  const firstIsDoubleSpeed = recipe.doubleSpeed && recipe.doubleSpeed[startSlotIndex] === true;
  const firstIsSilent = recipe.silent && recipe.silent[startSlotIndex] === true;

  const firstPlaybackRate = firstIsHalfSpeed ? 0.5 : (firstIsDoubleSpeed ? 2 : 1);
  const firstSourceOffset = (firstSourceSliceIndex * sliceDuration) + (offsetInsideSlot * firstPlaybackRate);
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
      firstIsStutter,
      firstIsTransform,
      firstIsHalfSpeed,
      firstIsTripletTransform,
      firstIsDoubleSpeed
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
  showAudioHelpOnce();
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

    showAudioHelpOnce();

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

async function playFromChopSlot(loopId, slotIndex) {
  await ensureAudioContext();

  const loop = getLoopById(loopId);
  if (!loop) return;

  const recipe = getChopRecipe(loopId);
  const buffer = await loadBuffer(loop);
  const safeSlot = Math.max(0, Math.min(recipe.slices - 1, Number(slotIndex) || 0));
  const ratio = safeSlot / Math.max(1, recipe.slices);

  pausedOffset = ratio * buffer.duration;
  playingChopSlotByLoopId.set(loopId, safeSlot);
  updateChopPlayhead(loopId, safeSlot);

  await startAllLoopSources();
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
  beat.loopCreators[newLoop.id] = contributorName;
  beat.lastEditors[newLoop.id] = contributorName;

  if (isSingleUseElement(newLoop.type)) {
    beat.contributors[newLoop.type] = contributorName;
  }

  if (replacedLoopId) {
    delete beat.chops[replacedLoopId];
    delete beat.volumes[replacedLoopId];

    if (beat.loopCreators) {
      delete beat.loopCreators[replacedLoopId];
    }

    if (beat.lastEditors) {
      delete beat.lastEditors[replacedLoopId];
    }

    if (beat.originalStates) {
      delete beat.originalStates[replacedLoopId];
    }

    if (beat.latestEditedStates) {
      delete beat.latestEditedStates[replacedLoopId];
    }

    if (beat.restoredOriginalLoops) {
      delete beat.restoredOriginalLoops[replacedLoopId];
    }

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

  if (chopEditorEl) {
    setTimeout(() => {
      chopEditorEl.scrollIntoView({ behavior: "smooth", block: "start" });
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
  if (!canCurrentUserRemoveLoop(loopId)) {
    showEditPermissionWarning();
    return;
  }

  beat.loops = beat.loops.filter(existingLoopId => existingLoopId !== loopId);

  const removedLoop = getLoopById(loopId);

  delete beat.chops[loopId];
  delete beat.volumes[loopId];

  if (beat.loopCreators) {
    delete beat.loopCreators[loopId];
  }

  if (beat.lastEditors) {
    delete beat.lastEditors[loopId];
  }

  if (beat.originalStates) {
    delete beat.originalStates[loopId];
  }

  if (beat.latestEditedStates) {
    delete beat.latestEditedStates[loopId];
  }

  if (beat.restoredOriginalLoops) {
    delete beat.restoredOriginalLoops[loopId];
  }

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
    contributors: {},
    loopCreators: {},
    lastEditors: {},
    originalStates: {},
    latestEditedStates: {},
    restoredOriginalLoops: {}
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
  chopUndoByLoopId = {};

  render();
}

async function copyShareLink() {
  const originalButtonText = copyButton.textContent;

  try {
    copyButton.textContent = t("creatingShareLink");
    const valueToCopy = await getOrCreateShortShareUrl();

    await navigator.clipboard.writeText(valueToCopy);
    copyButton.textContent = t("copied");
    setTimeout(() => copyButton.textContent = t("copy"), 900);
  } catch (err) {
    console.warn("Could not create short share link", err);

    shareLinkEl.value = buildBackupShareUrl();
    shareLinkEl.select();
    document.execCommand("copy");

    copyButton.textContent = t("shareLinkFailed");
    setTimeout(() => copyButton.textContent = originalButtonText || t("copy"), 1400);
  }
}

async function initializeBeatSeed() {
  createVisualizer();
  animateVisualizer();

  await loadBeatFromUrl();
  render();

  playButton.addEventListener("click", playBeat);
  stopButton.addEventListener("click", stopBeat);
  newBeatButton.addEventListener("click", newBeat);
  copyButton.addEventListener("click", copyShareLink);
}

initializeBeatSeed();

if (faqButton) {
  faqButton.addEventListener("click", event => {
    event.preventDefault();
    toggleFaq();
  });
}


function getExportRepeatCount(){
  if(exportLengthMode==="short") return 4;
  if(exportLengthMode==="long") return 16;
  return 8;
}
