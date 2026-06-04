const CONFIG = {
  BOARD_IMG: "",
  DICE_IMG: "",
  COLS: 15,
  ROWS: 10,
  MAX_TILE: 150,

  PLAYER_MIN: 1,
  PLAYER_MAX: 5,

  START_MONEY: 50000,
  GOV_FUND_START: 100000,

  SEV_BY_CLASS: { blue: 1, yellow: 2, red: 3 },
  SEV_MIN: 1,
  SEV_MAX: 3,

  UNTREATED_DEATH_THRESHOLD: 3,

 FIXED_INFECT_COUNT: 14,
RANDOM_INFECT_COUNT: 46,
WORK_COUNT: 40,
ITEM_COUNT: 18,
EVENT_COUNT: 20,

STOP_TILES: new Set([
  35,
  75,
  100,
  115,
  143,
  144,
  145,
  146,
  147,
  148,
  149
]),

  INSURANCE: {
    A: { name: "A(無保険)", treatPlayerPay: 10000, treatGovPay: 0 },
    B: { name: "B(一部)", treatPlayerPay: 5000, treatGovPay: 5000 },
    C: { name: "C(全額)", treatPlayerPay: 0, treatGovPay: 10000 },
  },

  WORK_NET: { A: 20000, B: 12000, C: 8000 },
  WORK_GOV: { A: 0, B: 8000, C: 12000 },

  WORK_CP: { A: -1, B: 0, C: 1 },
  TREAT_CP: { A: 1, B: 0, C: -1 },
  REFUSE_TREAT_CP: -1,

  VACCINE_PACK: {
    cost: 25000,
    protects: ["ポリオ", "麻しん", "風しん", "水痘", "日本脳炎"],
  },

  ITEMS: [
    { key: "mask", name: "マスク", targets: ["飛沫"], base: 50 },
    { key: "n95", name: "N95", targets: ["空気", "飛沫"], base: 60 },
    { key: "suit", name: "防護服", targets: ["接触", "空気", "飛沫"], base: 70 },
    { key: "alcohol", name: "アルコール消毒", targets: ["接触"], base: 55 },
    { key: "mosquito", name: "蚊帳", targets: ["蚊媒介"], base: 60 },
    { key: "tick", name: "ダニよけ", targets: ["ダニ媒介"], base: 60 },
    { key: "rabiesVax", name: "狂犬病ワクチン", targets: ["狂犬病"], base: 100 },
  ],

  INVEST_TILES: new Set([35, 75]),
  INVEST_AMOUNTS: [10000, 30000, 50000, 100000],

INVEST_STEP: 10000,
INVEST_CAP_PER_TIME: 100000,

INVEST_FRICTION_PROB: 0,
INVEST_FRICTION_CP: 0,

INVEST_TO_GOVFUND_RATIO: 1.00,

INVEST_CP_BONUS: {
  10000: 1,
  30000: 3,
  50000: 4,
  100000: 6,
},

  INVEST_EFFECTS: {
    infectDangerMinusAtLv1: 1,
    itemSuccessPlusAtLv2: 10,
  },

  TG_FINAL: {
  CP_WEIGHT: 2,
  INVEST_PERSONAL_DIV: 10000,
  TRIAL_SUCCESS_BONUS: 3,
  UNTREATED_PENALTY: 2,
  WORLD_INVEST_LV2_BONUS: 1,
  WORLD_INVEST_LV3_BONUS: 8,
  TH_ASYMPTOMATIC: 15,
  TH_SEQUELAE: 8,
},

  SOCIAL_EVAL: {
    BONUS_PER_CATEGORY: 2,
    MAX_CATEGORIES_PER_PLAYER: 2,
  },

  EBOLA: {
    ENABLE: true,
    GOVFUND_LT: 80000,
    HIGH_SEV_STREAK_NEED: 3,
    INFECT_DANGER_PLUS: 1,
  },

  COLLAPSE_TILE: 145,
  COLLAPSE: {
    ITEM_SUCCESS_MINUS: 20,
    ITEM_SUCCESS_MIN: 10,
  },

  TRIAL_TILE: 146,
  TRIAL: {
  SUCCESS_RATE: 30,
  CP_SUCCESS: 3,
  FAIL_UNTREATED: 1,
  REFUSE_CP: -2,
},
  FINAL_MONEY: {
    SEQUELAE_PCT: 30,
    DEATH_PCT: 70,
  },

  EVENT115: {
    ENABLE: true,
    GOVFUND_DELTA_PER_PLAYER: 15000,
    CP_DELTA: 1,
    MONEY_DELTA_PER_PLAYER: 10000,
    LOG_TEXT: "【115】国際緊急会議：政策決定が行われた",
  },

  GHOST: {
    ENABLE: true,
    DEAD_INFECT_PLUS: 1,
    ENABLE_ON_147: true,
  },

MEDICAL_COLLAPSE: {
  ENABLE: true,
  TRIGGER_UNTREATED_TOTAL_AT_LEAST: 3,
  DURATION_MIN: 2,
  DURATION_MAX: 4,
  EXTRA_TREAT_PLAYER_PAY: 5000,
  LOG_TEXT: "【医療崩壊】全生存者の未治療合計が3以上。治療費+5,000。持続2〜4ターン。",
},

TRIAGE: {
  ENABLE: true,
  CP_PENALTY_NOT_CHOSEN: -1,
  LOG_TEXT: "【トリアージ】医療崩壊中、無料治療を受ける1名を投票で決定。",
},

  MONEY_UNIT: "ハマノ",
};  

const RULE_V71 = {
  WORLD_LV2: 150000,
  WORLD_LV3: 200000,

  GREEN_PASS_TILE: 100,
  GREEN_PASS_FEE: 2000,
  GREEN_PASS_BRIBE: 20000,

  WATER_TAX: 2000,
  WATER_PROB: 0.50,

  VECTOR_TAX: 5000,
  VECTOR_CP_PENALTY: -2,
  VECTOR_PROB: 0.50,

  TB_CLUSTER_PROB: 1.00,
  TB_RANGE: 3,

  RABIES_TILES: new Set(),
  RABIES_TIMER_START: 3,
  RABIES_TREAT_COST: 30000,

  MED_COLLAPSE_UNTREATED_TOTAL: 3,
  MED_COLLAPSE_EXTRA_COST: 5000,

  REFERENDUM_GOV_LT: 75000,
  REFERENDUM_COOLDOWN: 3,

  PH_BUFF_TURNS: 2,

  PHASE2_START: 143,

  LOCKDOWN_RATE: 0.20,
  ZETA_FAIL_COST: 30000,
  ZETA_GP_RATE: 80,
  ZETA_NO_GP_RATE: 30,
  ZETA_ITEM_BONUS: 10,

  TRIAL_SUCCESS_RATE: 30,
  TRIAL_SUCCESS_CP: 3,
  TRIAL_FAIL_UNTREATED: 1,
  TRIAL_REFUSE_CP: -2,

  SOCIAL_BONUS: 2,
  SOCIAL_MAX_AWARDS: 2,

  WATER_DISEASES: new Set([
    "コレラ",
    "A型肝炎",
    "ポリオ",
    "細菌性赤痢",
    "腸チフス",
    "アメーバ赤痢",
    "回虫症（Ascaris infection）",
    "住血吸虫症"
  ]),

  VECTOR_DISEASES: new Set([
    "マラリア",
    "デング熱",
    "日本脳炎",
    "黄熱",
    "日本紅斑熱（リケッチア）",
    "クリミア・コンゴ出血熱",
    "重症熱性血小板減少症候群（SFTS）",
    "シャーガス",
    "アフリカトリパノソーマ",
    "フィラリア症"
  ]),

  GP_DISEASES: new Set([
    "痘そう",
    "黄熱",
    "ウイルス性肝炎( B型)",
    "流行性耳下腺炎",
    "麻しん",
    "風しん",
    "水痘"
  ])
};

//
function getAreaByPos(pos) {

  const env = envOf(pos);

  if (env === "urban") {
    return {
      key: "urban",
      name: "🏙 都市エリア",
      desc: "人口密集・医療アクセス良好"
    };
  }

  if (env === "tropical") {
    return {
      key: "tropical",
      name: "🌴 熱帯エリア",
      desc: "高温多湿・自然豊か"
    };
  }

  return {
    key: "polluted",
    name: "☣️ 汚染エリア",
    desc: "公害・衛生環境悪化"
  };
}
/* =========================
     DOM
  ========================= */
const el = {
  btnStart: document.getElementById("btnStart"),
  btnRoll: document.getElementById("btnRoll"),

  log: document.getElementById("log"),

  roundPill: document.getElementById("roundPill"),
  govPill: document.getElementById("govPill"),
  lvPill: document.getElementById("lvPill"),
  ebolaPill: document.getElementById("ebolaPill"),
  collapsePill: document.getElementById("collapsePill"),
  phPill: document.getElementById("phPill"),
  privatizePill: document.getElementById("privatizePill"),

  playerTbody: document.getElementById("playerTbody"),
  boardBox: document.getElementById("boardBox"),
  gridLayer: document.getElementById("gridLayer"),
  tokensLayer: document.getElementById("tokensLayer"),

  diceWrapper: document.getElementById("diceWrapper"),
  dice3d: document.getElementById("dice3d"),
  diceNumber: document.getElementById("diceNumber"),

  modalBack: document.getElementById("modalBack"),
  modalTitle: document.getElementById("modalTitle"),
  modalBody: document.getElementById("modalBody"),
  modalFoot: document.getElementById("modalFoot"),

  startOverlay: document.getElementById("startOverlay"),
  playerBtns: document.getElementById("playerBtns"),

  resultOverlay: document.getElementById("resultOverlay"),
  resultTitle: document.getElementById("resultTitle"),
  resultBody: document.getElementById("resultBody"),
  resultFoot: document.getElementById("resultFoot"),
  resultTbody: document.getElementById("resultTbody"),
  diseaseList: document.getElementById("diseaseList"),
};
let lastLogTurnKey = "";

function logLine(tag, s) {
  if (!el.log) return;

  const p = players?.[turn];
  const turnKey = `${roundCounter}-${turn}`;

  if (turnKey !== lastLogTurnKey) {
    lastLogTurnKey = turnKey;

    const head = document.createElement("div");
    head.className = "logTurnBlock";
    head.textContent = `Round ${roundCounter} / ${p ? p.name : "-"} のターン`;
    el.log.appendChild(head);
  }

  const line = document.createElement("div");
  line.className = `logLine log-${String(tag).toLowerCase()}`;
  const iconMap = {
  MSG: "📢",
  CPU: "🤖",
  VAX: "💉",
  INF: "🦠",
  EBOLA: "🦇",
  ITEM: "🎁",
  WORK: "💼",
  GOV: "🏛️",
  EVENT: "⭐",
};

const icon = iconMap[tag] || "📌";
line.innerHTML = `<span class="logTag">${icon}</span> ${s}`;

  el.log.appendChild(line);
  el.log.scrollTop = el.log.scrollHeight;
}

function setMsg(s) {
  logLine("MSG", s);
}
  /* =========================
     Random
  ========================= */
  function rand01() {
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      const a = new Uint32Array(1);
      crypto.getRandomValues(a);
      return a[0] / 4294967296;
    }
    return Math.random();
  }

  function randInt(min, maxInclusive) {
    return min + Math.floor(rand01() * (maxInclusive - min + 1));
  }

  function pick(arr) {
    return arr[Math.floor(rand01() * arr.length)];
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = randInt(0, i);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* =========================
     UI: modal
  ========================= */
  function showModal(title, bodyHTML, buttons) {
  if (!el.modalBack) return;

  el.modalTitle.textContent = title;
  el.modalBody.innerHTML = bodyHTML;
  el.modalFoot.innerHTML = "";

  for (const b of buttons) {
    const btn = document.createElement("button");

    btn.textContent = b.text;
    btn.className = b.className || "";

    btn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      document.activeElement?.blur();

      if (b.onClick) b.onClick();
    });

    el.modalFoot.appendChild(btn);
  }

  el.modalBack.style.display = "flex";
}

  function closeModal() {
    if (!el.modalBack) return;
    el.modalBack.style.display = "none";
    el.modalTitle.textContent = "";
    el.modalBody.innerHTML = "";
    el.modalFoot.innerHTML = "";
  }

  function isCurrentTurnCPU() {
  const p = players?.[turn];

  return !!(
    gameStarted &&
    p &&
    p.isCPU
  );
}

function shouldAutoClosePopup(title, tone = "") {
  if (!isCurrentTurnCPU()) return false;

  const text = String(title || "");
  const t = String(tone || "");

  // 重大イベントは手動OKで残す
  const keepKeywords = [
    "エボライベント発生",
    "エボラ終了",
    "医療崩壊 発動",
    "医療崩壊 解除",
    "財政破綻",
    "可決",
    "国民投票",
    "148",
    "社会評価",
    "パンデミック",
    "最終判定",
    "リザルト"
  ];

  if (keepKeywords.some((key) => text.includes(key))) {
    return false;
  }

  // pandemic系は基本止める
  if (t === "pandemic") {
    return false;
  }

  return true;
}

function showOkPopup(title, lines = [], tone = "info", color = "") {
  let cls = color ? ` pop-${String(color).toLowerCase().trim()}` : "";
  const titleText = String(title || "");

  if (titleText.includes("143") || titleText.includes("不穏") || titleText.includes("噂")) cls += " pop-alert";
  else if (titleText.includes("144") || titleText.includes("ロックダウン")) cls += " pop-lock";
  else if (titleText.includes("145") || titleText.includes("ZETA") || titleText.includes("Zeta")) cls += " pop-zeta";
  else if (titleText.includes("146") || titleText.includes("治験")) cls += " pop-trial";
  else if (titleText.includes("147") || titleText.includes("情報錯綜")) cls += " pop-chaos";
  else if (titleText.includes("148") || titleText.includes("社会評価")) cls += " pop-social";
  else if (titleText.includes("149") || titleText.includes("パンデミック")) cls += " pop-pandemic";
  else if (titleText.includes("150") || titleText.includes("ゴール") || titleText.includes("生還")) cls += " pop-survive";

  const body = `
    <div class="popMsg${cls}">
      <div class="popTitle">${title}</div>
      ${lines.map((s) => `<div class="popLine">${s}</div>`).join("")}
    </div>
  `;

  return new Promise((resolve) => {
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      closeModal();
      resolve();
    };

    showModal(title, body, [
      {
        text: "OK",
        className: "btnPrimary",
        onClick: finish,
      },
    ]);

    if (shouldAutoClosePopup(title, tone)) {
      setTimeout(finish, 1500);
    }
  });
}
/* =========================
   3D Dice
========================= */
function getDiceRotation(n) {
  switch (n) {
    case 1: return { x: 0, y: 0 };
    case 2: return { x: -90, y: 0 };
    case 3: return { x: 0, y: -90 };
    case 4: return { x: 0, y: 90 };
    case 5: return { x: 90, y: 0 };
    case 6: return { x: 180, y: 0 };
    default: return { x: 0, y: 0 };
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function setDiceFace(n) {
  if (el.diceNumber) {
    el.diceNumber.textContent = String(n);
  }

  if (!el.dice3d) return;

  const r = getDiceRotation(n);

  el.dice3d.style.transition = "none";
  el.dice3d.style.transform = `rotateX(${r.x}deg) rotateY(${r.y}deg)`;

  requestAnimationFrame(() => {
    if (el.dice3d) {
      el.dice3d.style.transition =
        "transform 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    }
  });
}

async function rollDiceAnimated() {
  setMsg("サイコロ中…");

  const n = randInt(1, 6);
  const r = getDiceRotation(n);

  try {
    if (el.diceNumber) {
      el.diceNumber.textContent = "?";
    }

    if (el.diceWrapper) {
      el.diceWrapper.classList.remove("is-bouncing");
      void el.diceWrapper.offsetWidth;
      el.diceWrapper.classList.add("is-bouncing");
    }

    if (el.dice3d) {
      const spinsX = randInt(3, 5) * 360;
      const spinsY = randInt(3, 5) * 360;

      el.dice3d.style.transition =
        "transform 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

      el.dice3d.style.transform =
        `rotateX(${spinsX + r.x}deg) rotateY(${spinsY + r.y}deg)`;
    }

    await sleep(1200);

    if (el.dice3d) {
      el.dice3d.style.transition = "none";
      el.dice3d.style.transform = `rotateX(${r.x}deg) rotateY(${r.y}deg)`;
    }

    if (el.diceNumber) {
      el.diceNumber.textContent = String(n);
    }

    return n;
  } catch (e) {
    console.error("rollDiceAnimated error:", e);

    if (el.diceNumber) {
      el.diceNumber.textContent = String(n);
    }

    return n;
  }
}

  /* =========================
     Board / env
  ========================= */
  function envOf(pos) {
    if (pos <= 27) return "urban";
    if (pos <= 55) return "tropical";
    if (pos <= 80) return "polluted";
    return "urban";
  }

  function envTag(env) {
    if (env === "urban") return `<span class="tag u">都市</span>`;
    if (env === "tropical") return `<span class="tag t">熱帯</span>`;
    return `<span class="tag p">汚染</span>`;
  }

  const board = new Array(CONFIG.MAX_TILE + 1).fill(null);

 const GOV_TILES = new Set([35, 75, 100, 115]);

  const SPECIAL_TILES = new Map([
    [143, { type: "event", key: "warn143", text: "【警告】不穏な噂が広がる…（順位を記録）" }],
    [144, { type: "event", key: "lockdown144", text: "【ロックダウン】止まった人の所持金が一定%減少" }],
    [145, { type: "event", key: "collapse145", text: "【Zeta防衛戦】最終バイオテロ防衛判定" }],
    [146, { type: "event", key: "trial146", text: "【ワクチン治験】参加する？" }],
    [147, { type: "event", key: "chaos147", text: "【情報錯綜】貢献度が変動" }],
    [148, { type: "event", key: "socialEval148", text: "【社会評価】全生存プレイヤーが148以上で一括評価" }],
    [149, { type: "pandemic", key: "pandemic149", text: "未知のウイルス・パンデミック（全員停止）" }],
    [150, { type: "goal", key: "goal150", text: "ゴール！" }],
  ]);

const FIXED_INFECT_DISEASES = [
  // Green Pass専用枠 4マス
  "痘そう",
  "黄熱",
  "ウイルス性肝炎( B型)",
  "流行性耳下腺炎",

  // ワクチン当たり枠 3マス
  "麻しん",
  "風しん",
  "水痘",

  // ワクチンハズレ枠 4マス
  "ポリオ",
  "ポリオ",
  "日本脳炎",
  "日本脳炎",

  // 結核クラスター枠 3マス
  "結核",
  "結核",
  "結核",
];

function fixedInfectPositions() {
  const reserved = new Set([
    ...GOV_TILES,
    ...SPECIAL_TILES.keys(),
    ...RULE_V71.RABIES_TILES,
  ]);

  const start = 1;
  const end = 142;
  const count = FIXED_INFECT_DISEASES.length;

  const positions = [];

  for (let i = 0; i < count; i++) {
    const raw = Math.round(start + ((end - start) * i) / (count - 1));
    let pos = raw;

    while (
      pos <= end &&
      (reserved.has(pos) || positions.includes(pos))
    ) {
      pos += 1;
    }

    while (
      pos >= start &&
      (reserved.has(pos) || positions.includes(pos))
    ) {
      pos -= 1;
    }

    positions.push(pos);
    reserved.add(pos);
  }

  return positions;
}

function diseaseByName(name) {
  return DISEASES.find((d) => d.疾病候補 === name) || null;
}

function recordDiseaseEncounter(disease, reason = "発症") {
  if (!disease) return;

  encounteredDiseases.add(String(disease));

  logLine(
    "図鑑",
    `${disease} を記録（${reason}）`
  );
}

  function buildBoard() {
  for (let i = 1; i <= CONFIG.MAX_TILE; i++) {
    board[i] = { type: "safe", text: "安全" };
  }

  // 固定イベントマス
  for (const g of GOV_TILES) {
    board[g] = { type: "gov", text: `中央政府マス(${g})` };
  }

  for (const [pos, t] of SPECIAL_TILES) {
    board[pos] = { ...t };
  }

  // 固定感染14マス
  const fixedPositions = fixedInfectPositions();
  const fixedDiseases = shuffle(FIXED_INFECT_DISEASES.slice());

  for (let i = 0; i < fixedPositions.length; i++) {
    const pos = fixedPositions[i];
    const diseaseName = fixedDiseases[i];
    const disease = diseaseByName(diseaseName);

    board[pos] = {
      type: "infect",
      text: `固定感染：${diseaseName}`,
      fixedDisease: diseaseName,
      fixedDiseaseData: disease,
    };
  }

  // 残り空きマス
  const candidates = [];

  for (let i = 1; i <= CONFIG.MAX_TILE; i++) {
  if (GOV_TILES.has(i)) continue;
  if (SPECIAL_TILES.has(i)) continue;
  if (RULE_V71.RABIES_TILES.has(i)) continue;
  if (fixedPositions.includes(i)) continue;
  candidates.push(i);
}

  shuffle(candidates);

  const infectTiles = candidates.splice(0, CONFIG.RANDOM_INFECT_COUNT);
  const workTiles = candidates.splice(0, CONFIG.WORK_COUNT);
  const itemTiles = candidates.splice(0, CONFIG.ITEM_COUNT);
  const eventTiles = candidates.splice(0, CONFIG.EVENT_COUNT);

  for (const pos of infectTiles) {
    board[pos] = { type: "infect", text: "感染イベント" };
  }

  for (const pos of workTiles) {
    board[pos] = { type: "work", text: "働いた！" };
  }

  for (const pos of itemTiles) {
    board[pos] = { type: "item", text: "アイテム入手" };
  }

  for (const pos of eventTiles) {
    const negative = rand01() < 0.25;

    let v;

    if (negative) {
      v = -(4000 + randInt(0, 3) * 2000);
    } else {
      if (pos <= 40) {
        v = 15000 + randInt(0, 3) * 5000;
      } else if (pos <= 80) {
        v = 12000 + randInt(0, 4) * 4000;
      } else {
        v = 15000 + randInt(0, 4) * 5000;
      }
    }

    board[pos] = {
      type: "event",
      delta: v,
      text: v >= 0 ? `臨時収入 +${v}` : `出費 ${v}`,
    };
  }

  // 念のため固定イベントを再上書き
  for (const g of GOV_TILES) {
    board[g] = { type: "gov", text: `中央政府マス(${g})` };
  }

  for (const [pos, t] of SPECIAL_TILES) {
    board[pos] = { ...t };
  }

  logLine(
    "BOARD",
    `配置完了：固定感染${fixedPositions.length} / ランダム感染${infectTiles.length} / WORK${workTiles.length} / ITEM${itemTiles.length} / EVENT${eventTiles.length}`
  );

  return {
    fixedInfect: fixedPositions.length,
    randomInfect: infectTiles.length,
    work: workTiles.length,
    item: itemTiles.length,
    event: eventTiles.length,
  };
}

  function buildGridOverlay() {
  if (!el.gridLayer) return;

  el.gridLayer.innerHTML = "";

  const labelOf = (type) =>
    ({
      infect: "INFECT",
      work: "WORK",
      item: "ITEM",
      event: "EVENT",
      gov: "GOV",
      pandemic: "PANDEMIC",
      goal: "GOAL",
      safe: "SAFE",
    }[type] ?? "SAFE");

  const iconOf = (tile, type) => {
    if (tile === 143) return "🚨";
    if (tile === 144) return "🔒";
    if (tile === 145) return "☣";
    if (tile === 146) return "💉";
    if (tile === 147) return "📢";
    if (tile === 148) return "🏆";
    if (tile === 149) return "🦠";
    if (tile === 150) return "🏁";
    if (type === "infect") return "🦠";
    if (type === "work") return "💼";
    if (type === "item") return "🎁";
    if (type === "event") return "✨";
    if (type === "gov") return "🏛";
    return "•";
  };

  if (typeof boardFocusPos === "undefined") {
  window.boardFocusPos = 1;
}

const activePlayer = players && players[turn] ? players[turn] : null;

if (activePlayer && !activePlayer.isCPU) {
  window.boardFocusPos = activePlayer.pos;
}

const center = window.boardFocusPos || 1;

const area = getAreaByPos(center);

let areaLabel = document.getElementById("areaLabel");
if (!areaLabel) {
  areaLabel = document.createElement("div");
  areaLabel.id = "areaLabel";

  const boardContainer = document.querySelector(".board-container");

if (boardContainer) {
  boardContainer.insertBefore(areaLabel, boardContainer.firstChild);
}
}

areaLabel.textContent = `${area.name}｜${area.desc}`;
  
  const start = Math.max(1, center - 13);
const end = Math.min(CONFIG.MAX_TILE, start + 27);

  const visibleTiles = [];
  for (let tile = start; tile <= end; tile++) {
    visibleTiles.push(tile);
  }

  const cols = 7;
  const gap = 8;
  const cellW = 100 / cols;

  el.gridLayer.classList.add("focusMap");

  for (let i = 0; i < visibleTiles.length; i++) {
    const tile = visibleTiles[i];
    const cell = document.createElement("div");
    const t = board[tile] || { type: "safe", text: "安全" };

    let type = t.type || "safe";

    if (tile >= 143 && tile <= 148) type = "event";
    if (tile === 149) type = "pandemic";
    if (tile === 150) type = "goal";
    if ([35, 75, 100, 115].includes(tile)) type = "gov";

    const row = Math.floor(i / cols);
let col = i % cols;

if (row % 2 === 1) {
  col = cols - 1 - col;
}

    cell.className = `gridCell ${type} focusTile`;
    if (tile === center) cell.classList.add("currentTile");

    cell.dataset.tile = String(tile);
    cell.dataset.type = labelOf(type);
    cell.title = `${tile}: ${t.text || labelOf(type)}`;

    cell.style.left = `calc(${col * cellW}% + ${gap / 2}px)`;
    cell.style.top = `${row * 54}px`;
    cell.style.width = `calc(${cellW}% - ${gap}px)`;
    cell.style.height = `46px`;
	
    const herePlayers = players.filter(x => x.pos === tile);

const tokenHtml = herePlayers.length
  ? `<div class="miniTokens">
      ${herePlayers.map(x => `<span class="miniTokenIcon">${x.isCPU ? "🤖" : "🙂"}</span>`).join("")}
    </div>`
  : "";

cell.innerHTML = `
  ${tokenHtml}
  <span class="tileIcon">${iconOf(tile, type)}</span>
  <span class="tileNum">${tile}</span>
`;
    el.gridLayer.appendChild(cell);
  }
}
  /* =========================
     Geometry (tokens)
  ========================= */
  function tileToRowCol(tile) {
    const idx = tile - 1;
    const row = Math.floor(idx / CONFIG.COLS);
    const col = idx % CONFIG.COLS;
    return { row, col };
  }

  function tileCenterPx(tile) {
    if (!el.boardBox) return { x: 0, y: 0 };
    const w = el.boardBox.clientWidth;
    const h = el.boardBox.clientHeight;
    const { row, col } = tileToRowCol(tile);
    const x = (col + 0.5) * (w / CONFIG.COLS);
    const y = (row + 0.5) * (h / CONFIG.ROWS);
    return { x, y };
  }

  /* =========================
   Game state
========================= */

let playerCount = 4;
let selectedHumans = 4;
let selectedCPUs = 0;

let players = [];
let turn = 0;

let busy = false;
let gameStarted = false;

let govFund = 0;
let investTotal = 0;

let investedAt35 = new Set();
let investedAt75 = new Set();

let collapseActive = false;

let pandemicResolved = false;
let socialEvalTriggered = false;

let ebolaTriggered = false;
let ebolaRemainTurns = 0;
let ebolaOccurred = false;

let highSevInfectStreak = 0;
let infectionOccurredThisRound = false;

let roundCounter = 1;

let rabiesOccurred = false;

let finalPhaseStarted = false;
let rankSnapshotAt143 = null;

let finalStoryShown = new Set();

let phase2Active = false;
let phase2Step = 143;

let event115Activated = false;
let event115ChoicesDone = new Set();

let medicalCollapseActive = false;
let medicalCollapseRemainTurns = 0;
let medicalCollapseOccurred = false;

let referendumCooldown = 0;
let referendumOccurred = false;

let medicalPrivatized = false;

let publicHealthBuffTurns = 0;
let publicHealthPickCount = 0;
let publicHealthFundTotal = 0;
let tbForcedIsolationActive = false;
let encounteredDiseases = new Set();

function maxCpuAllowed() {
  return Math.max(0, CONFIG.PLAYER_MAX - selectedHumans);
}

function syncPlayerSelectionButtons() {
  if (el.playerBtns) {
    const buttons = el.playerBtns.querySelectorAll("button");

    buttons.forEach((btn, i) => {
      btn.classList.toggle("active", i + 1 === selectedHumans);
    });
  }

  const cpuBtns = document.getElementById("cpuBtns");
  if (cpuBtns) {
    const buttons = cpuBtns.querySelectorAll("button");

    buttons.forEach((btn, i) => {
      btn.classList.toggle("active", i === selectedCPUs);
      btn.disabled = i > maxCpuAllowed();
    });
  }

  const totalPill = document.getElementById("totalText");
  if (totalPill) {
    totalPill.textContent = `Total: ${selectedHumans + selectedCPUs} / ${CONFIG.PLAYER_MAX}`;
  }
}

window.selectP = function(n) {
  selectedHumans = safeClampPlayers(n);

  if (selectedHumans + selectedCPUs > CONFIG.PLAYER_MAX) {
    selectedCPUs = CONFIG.PLAYER_MAX - selectedHumans;
  }

  syncPlayerSelectionButtons();
};

window.selectCPU = function(n) {
  const x = Math.max(
    0,
    Math.min(CONFIG.PLAYER_MAX - selectedHumans, Math.floor(Number(n) || 0))
  );

  selectedCPUs = x;

  syncPlayerSelectionButtons();
};

function insuranceText(code) {
  return CONFIG.INSURANCE[code]?.name ?? String(code);
}

function addCP(p, delta, reason = "") {
  p.cp = (p.cp || 0) + delta;

  logLine(
    "CP",
    `${p.name}: ${delta >= 0 ? "+" : ""}${delta} ${reason} → CP=${p.cp}`
  );
}

function addGovContribution(p, amount) {
  p.govFundContribution =
    (p.govFundContribution || 0) + Math.max(0, amount || 0);
}

function makePlayer(i, isCPU = false, cpuIndex = 0) {
  const defaultName = isCPU ? `CPU${cpuIndex + 1}` : `P${i + 1}`;

  return {
    id: i,
    name: defaultName,
    defaultName,
    isCPU,

    pos: 1,
    money: CONFIG.START_MONEY,

    insurance: "B",
    insuranceInit: "B",
    insuranceHistory: [],

    cp: 0,
    untreated: 0,
    untreatedCount: 0,

    vaccinated: false,
    vaccinatedSet: new Set(),
    vaccinatedInit: false,

    items: {},

    alive: true,
    finished: false,
    ghost: false,
    diedMidgame: false,

    personalInvest: 0,
    govFundContribution: 0,

    trialJoined: false,
    trialSuccess: false,

    infectLanded: 0,
    itemGained: 0,

    socialEvalCategories: [],
    socialEvalBonus: 0,

    finalTG: null,
    finalOutcome: null,

    infectShield115: 0,

    hasPass: false,
    gpBase: false,
    gpSource: "",

    passlessCharge: false,

    rabiesTimer: 0,

    taxContribution: 0,
    tgBonus: 0,
  };
}

function escapeHTML(s) {
  return String(s ?? "").replace(/[&<>"']/g, (ch) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[ch];
  });
}

function cleanPlayerName(value, fallback) {
  const s = String(value ?? "").trim().replace(/\s+/g, " ");
  if (!s) return fallback;

  return s
    .replace(/[<>&"']/g, "")
    .slice(0, 12);
}

async function askPlayerNames() {
  if (!players.length) return;

  await new Promise((resolve) => {
    const rows = players
      .map((p) => {
        return `
          <div class="radioLine">
            <label>
              ${p.defaultName}${p.isCPU ? " 🤖" : ""}
            </label>
            <input
              type="text"
              id="nameInput_${p.id}"
              value="${escapeHTML(p.name)}"
              maxlength="12"
              placeholder="${escapeHTML(p.defaultName)}"
              style="width:100%;padding:8px;border-radius:8px;border:1px solid #ccc;"
            />
          </div>
        `;
      })
      .join("");

    showModal(
      "プレイヤー名設定",
      `
        <div class="popMsg">
          <div class="popTitle">名前を入力してください</div>
          <div class="small">空欄なら P1 / CPU1 などの初期名になります。CPU名も変更できます。</div>
          <hr class="popHr"/>
          <div class="grid">
            ${rows}
          </div>
        </div>
      `,
      [
        {
          text: "決定",
          className: "btnPrimary",
          onClick: () => {

  document.activeElement?.blur();

  for (const p of players) {
    const input = document.getElementById(`nameInput_${p.id}`);
    p.name = cleanPlayerName(input?.value, p.defaultName);
  }

  closeModal();

  logLine(
    "INIT",
    `名前設定：${players.map((p) => `${p.defaultName}→${p.name}`).join(" / ")}`
  );

  renderTable();
  renderTurn();
  resolve();
},
        },
      ]
    );
  });
}

function forcePay(p, amount, reason = "") {
  amount = Math.max(0, Number(amount) || 0);

  if (p.money >= amount) {
    p.money -= amount;
    logLine("PAY", `${p.name}: -${amount.toLocaleString()} ${reason}`);
    return true;
  }

  const debt = amount - p.money;

  p.money = 0;
  govFund -= debt;

  addCP(p, -1, "（国家融資）");

  logLine(
    "DEBT",
    `${p.name}: ${reason} 不足${debt.toLocaleString()}をGovFund補填 / CP-1`
  );

  return true;
}
  /* =========================
     Render
  ========================= */
  function rebuildTokens() {
    if (!el.tokensLayer) return;
    el.tokensLayer.innerHTML = "";
    for (const p of players) {
      const d = document.createElement("div");
      d.className = `token t${p.id + 1}`;
      d.id = `token_${p.id}`;
      el.tokensLayer.appendChild(d);
    }
  }

  function updateDeadRack() {
    if (!el.deadRack) return;
    el.deadRack.querySelectorAll(".deadToken").forEach((x) => x.remove());
    for (const p of players) {
      if (!p.alive) {
        const d = document.createElement("div");
        d.className = `deadToken t${p.id + 1}`;
        el.deadRack.appendChild(d);
      }
    }
  }

  function placeToken(p) {
  const t = document.getElementById(`token_${p.id}`);
  if (!t) return;

  const center = window.boardFocusPos || 1;

  const start = Math.max(1, center - 15);
  const end = Math.min(CONFIG.MAX_TILE, center + 15);

  if (p.pos < start || p.pos > end) {
    t.style.opacity = "0";
    return;
  }

  const index = p.pos - start;
  const cols = 7;
  const row = Math.floor(index / cols);
  const col = index % cols;

  const grid = el.gridLayer;
  const boxW = grid ? grid.clientWidth : 350;

  const gap = 8;
  const cellW = boxW / cols;

  const x = col * cellW + cellW / 2;
  const y = row * 54 + 23;

  t.style.left = `${x}px`;
  t.style.top = `${y}px`;
  t.style.opacity = p.alive ? "1" : "0.25";
}

  function renderTokens() {
    for (const p of players) placeToken(p);
    updateDeadRack();
  }

  function itemsToText(items) {
    const entries = Object.entries(items || {}).filter(([, v]) => v > 0);
    if (entries.length === 0) return "—";
    return entries
      .map(([k, v]) => {
        const it = CONFIG.ITEMS.find((x) => x.key === k);
        return `${it ? it.name : k}×${v}`;
      })
      .join(", ");
  }

  function statusText(p) {
    if (p.diedMidgame) return "途中死亡";
    if (p.finalOutcome === "sequelae") return "後遺症";
    if (p.finalOutcome === "asymptomatic") return "生存";
    if (p.finalOutcome === "death") return "死亡";
    if (!p.alive && p.ghost) return "死亡(👻)";
    return p.alive ? "生存" : "死亡";
  }

 function renderTable() {
  if (!el.playerTbody) return;

  el.playerTbody.innerHTML = "";

  for (const p of players) {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><b>${p.name}</b>${p.isCPU ? " 🤖" : ""}${p.alive ? "" : " 💀"}</td>
      <td>${p.pos}</td>
      <td>${p.money.toLocaleString()}</td>
      <td>${insuranceText(p.insurance)}</td>
      <td><b>${p.cp}</b></td>
      <td>${p.untreated}</td>
      <td>${p.hasPass ? "GP✅" : p.gpBase ? "GP権利" : p.vaccinated ? "💉済" : "—"}</td>
      <td>${itemsToText(p.items)}</td>
    `;

    el.playerTbody.appendChild(tr);
  }

  if (el.govPill) {
  el.govPill.innerHTML = `
    <div class="pillLabel">GOV FUND</div>
    <div class="pillValue">${govFund.toLocaleString()}</div>
  `;
}

if (el.lvPill) {
  el.lvPill.innerHTML = `
    <span class="worldInline"> World Lv ${currentInvestLv()}</span>
  `;
}

if (el.roundPill) {
  el.roundPill.innerHTML = `
    <div class="pillLabel">ROUND</div>
    <div class="pillValue">${roundCounter}</div>
  `;
}

  if (el.ebolaPill) {
  if (ebolaTriggered) {
    el.ebolaPill.style.display = "inline-block";
    el.ebolaPill.textContent = "🦇 エボラ 継続中";
  } else {
    el.ebolaPill.style.display = "none";
  }
}

  if (el.collapsePill) {
    if (medicalCollapseActive) {
      el.collapsePill.style.display = "inline-block";
      el.collapsePill.textContent = `🏥 医療崩壊中`;
    } else {
      el.collapsePill.style.display = "none";
    }
  }

  if (el.phPill) {
    el.phPill.style.display = event115Activated ? "inline-block" : "none";
  }

  if (el.privatizePill) {
    if (medicalPrivatized) {
      el.privatizePill.style.display = "inline-block";
      el.privatizePill.textContent = "🏥 医療民営化中";
    } else {
      el.privatizePill.style.display = "none";
    }
  }
}

function renderTurn() {
  const p = players[turn];

  if (el.turnPill) {
    el.turnPill.textContent = `Turn: ${p ? p.name : "-"}`;
  }

  if (el.envPill) {
    el.envPill.textContent = `Env: ${p ? envOf(p.pos) : "-"}`;
  }

  if (el.worldLv) {
  el.worldLv.innerHTML = `
  <span class="worldInline">  🌍　World Lv ${currentInvestLv()}
  </span>
`;
}

if (el.roundPill) {
  el.roundPill.innerHTML = `
    <div class="pillLabel">ROUND</div>
    <div class="pillValue">${roundCounter}</div>
  `;
}

  let area = { key: "urban" };

try {
  const viewPlayer = players.find(x => !x.isCPU) || players[turn];
  area = getAreaByPos(viewPlayer ? viewPlayer.pos : 1);
} catch (e) {
  console.warn("area update skipped", e);
}

document.body.classList.remove(
  "area-urban",
  "area-tropical",
  "area-polluted"
);
document.body.classList.add(`area-${area.key}`);
}
  /* =========================
     Movement with STOP tiles
  ========================= */
  function findNextStopInRange(from, to) {
    for (let t = from + 1; t <= to; t++) {
      if (CONFIG.STOP_TILES.has(t)) return t;
    }
    return null;
  }

  async function moveStepByStep(p, steps) {
    if (!p.alive || p.finished) return;
    if (p.pos === 149 && !pandemicResolved) return;

    const target = Math.min(p.pos + steps, CONFIG.MAX_TILE);
    const stopTile = findNextStopInRange(p.pos, target);
    const finalTarget = stopTile ?? target;

    while (p.pos < finalTarget) {
      p.pos += 1;
      renderTokens();
      renderTable();
      renderTurn();
      await sleep(160);
    }
  }

  /* =========================
     Investment thresholds
  ========================= */
function currentWorldLv() {
  if (govFund >= RULE_V71.WORLD_LV3) {
    return 3;
  }

  if (govFund >= RULE_V71.WORLD_LV2) {
    return 2;
  }

  return 1;
}

function currentInvestLv() {
  return currentWorldLv();
}

function worldInvestTGBonus() {
  const lv = currentWorldLv();

  if (lv >= 3) return 8;
  if (lv >= 2) return 1;

  return 0;
}

function applyV71Severity(sev) {
  let result = sev;

  if (currentWorldLv() >= 2) {
    result -= 1;
  }

  if (publicHealthBuffTurns > 0) {
    result -= 1;
  }

  return Math.max(CONFIG.SEV_MIN, result);
}

  /* =========================
     Ebola control (round-end)
  ========================= */
  function ebolaConditionsMetOR() {
  const c1 = govFund < CONFIG.EBOLA.GOVFUND_LT;
  const c2 = highSevInfectStreak >= CONFIG.EBOLA.HIGH_SEV_STREAK_NEED;

  return {
    c1,
    c2,
    any: c1 || c2,
  };
}

  async function maybeTriggerEbolaAtRoundEnd() {
  if (!CONFIG.EBOLA.ENABLE) return false;
  if (!gameStarted) return false;
  if (ebolaTriggered) return false;

  const cond = ebolaConditionsMetOR();
  if (!cond.any) return false;

  ebolaTriggered = true;
  ebolaRemainTurns = Infinity;
  ebolaOccurred = true;

  logLine(
    "EBOLA",
    `発生：条件成立（GovFund<${CONFIG.EBOLA.GOVFUND_LT}=${cond.c1} / 高危険度連続=${cond.c2}）`
  );

  await showOkPopup(
    "⚠️ エボライベント発生",
    [
      "エボラの脅威が拡大しました。",
      `条件：GovFund < ${CONFIG.EBOLA.GOVFUND_LT.toLocaleString()} または危険度2以上の感染が連続発生`,
      `期間中：感染危険度 +${CONFIG.EBOLA.INFECT_DANGER_PLUS}`,
      "条件が解除されるまで継続します。",
    ],
    "special",
    "red"
  );

  return true;
}

  async function tickEbolaAtRoundEnd() {
  if (!ebolaTriggered) return;

  const cond = ebolaConditionsMetOR();

  if (cond.any) {
    logLine(
      "EBOLA",
      `継続：条件未解除（GovFund条件=${cond.c1} / 高危険度連続=${cond.c2}）`
    );
    return;
  }

  ebolaTriggered = false;
  ebolaRemainTurns = 0;

  logLine("EBOLA", "終了：条件解除");

  await showOkPopup(
    "エボラ終了",
    [
      "エボラ継続条件が解除されました。",
      "感染危険度+1補正は終了します。",
    ],
    "info",
    "blue"
  );
}
  /* =========================
     Medical collapse + triage
  ========================= */
  function untreatedTotalAlive() {
    return players.filter((p) => p.alive).reduce((s, p) => s + (p.untreated || 0), 0);
  }

  async function maybeTriggerMedicalCollapseAtRoundEnd() {
  if (!CONFIG.MEDICAL_COLLAPSE.ENABLE) return false;
  if (!gameStarted) return false;
  if (medicalCollapseActive) return false;

  const total = untreatedTotalAlive();

  if (total < CONFIG.MEDICAL_COLLAPSE.TRIGGER_UNTREATED_TOTAL_AT_LEAST) {
    return false;
  }

  medicalCollapseActive = true;
  medicalCollapseOccurred = true;
  medicalCollapseRemainTurns = randInt(
    CONFIG.MEDICAL_COLLAPSE.DURATION_MIN,
    CONFIG.MEDICAL_COLLAPSE.DURATION_MAX
  );

  logLine(
    "MED",
    `医療崩壊 発動：未治療合計=${total} / 持続${medicalCollapseRemainTurns}ターン`
  );

  await showOkPopup(
    "🏥 医療崩壊 発動",
    [
      CONFIG.MEDICAL_COLLAPSE.LOG_TEXT,
      `未治療合計：${total}`,
      `治療費：自己負担 +${CONFIG.MEDICAL_COLLAPSE.EXTRA_TREAT_PLAYER_PAY.toLocaleString()} HMN`,
      `持続：${medicalCollapseRemainTurns}ターン`,
    ],
    "event",
    "red"
  );

  return true;
}

async function tickMedicalCollapseAtRoundEnd() {
  if (!medicalCollapseActive) return;

  medicalCollapseRemainTurns -= 1;

  if (medicalCollapseRemainTurns > 0) {
    logLine(
      "MED",
      `医療崩壊 継続：残り${medicalCollapseRemainTurns}ターン`
    );
    return;
  }

  medicalCollapseActive = false;
  medicalCollapseRemainTurns = 0;

  logLine("MED", "医療崩壊 解除：持続ターン終了");

  await showOkPopup(
    "🏥 医療崩壊 解除",
    [
      "医療崩壊の持続ターンが終了しました。",
      "治療費の追加負担も終了します。",
    ],
    "event",
    "blue"
  );
}

async function maybeTriageAtRoundEnd() {
  if (!CONFIG.TRIAGE.ENABLE) return;
  if (!medicalCollapseActive) return;

  const candidates = players.filter(
    (p) => p.alive && (p.untreated || 0) > 0
  );

  if (!candidates.length) {
    logLine("TRIAGE", "医療崩壊中だが未治療者なし");
    return;
  }

  logLine(
    "TRIAGE",
    `${CONFIG.TRIAGE.LOG_TEXT} 候補=${candidates.map((x) => x.name).join(",")}`
  );

  await showOkPopup(
    "医療トリアージ発生",
    [
      CONFIG.TRIAGE.LOG_TEXT,
      "対象：未治療が1以上ある生存者",
      "選ばれた1名：未治療 -1",
      `選ばれなかった未治療者：CP ${CONFIG.TRIAGE.CP_PENALTY_NOT_CHOSEN}`,
    ],
    "event",
    "yellow"
  );

  const votes = new Map();

  for (const voter of players.filter((p) => p.alive)) {
  if (voter.isCPU) {
    const target = cpuPickTriageTarget(candidates);

    if (target) {
      votes.set(target.id, (votes.get(target.id) || 0) + 1);

      logLine(
        "CPU",
        `${voter.name}: トリアージ自動投票 → ${target.name}（未治療=${target.untreated}）`
      );
    }

    continue;
  }

  await new Promise((resolve) => {
    const opts = candidates
      .map((t) => `<option value="${t.id}">${t.name}（未治療=${t.untreated}）</option>`)
      .join("");

    showModal(
      `🗳️ トリアージ投票：${voter.name}`,
      `<div class="popMsg">
        <div class="popTitle">無料治療を受ける1名を選ぶ</div>
        <div class="popLine">最多票のプレイヤーが未治療 -1</div>
        <select id="triagePick_${voter.id}">${opts}</select>
      </div>`,
      [
        {
          text: "投票する",
          className: "btnPrimary",
          onClick: () => {
            const id = Number(
              document.getElementById(`triagePick_${voter.id}`)?.value
            );

            closeModal();

            votes.set(id, (votes.get(id) || 0) + 1);
            resolve();
          },
        },
      ]
    );
  });
}

  let bestIds = [];
  let best = -1;

  for (const [id, count] of votes.entries()) {
    if (count > best) {
      best = count;
      bestIds = [id];
    } else if (count === best) {
      bestIds.push(id);
    }
  }

  const chosenId = bestIds.length === 1 ? bestIds[0] : pick(bestIds);
  const chosen = players[chosenId];

  if (!chosen || !chosen.alive || chosen.untreated <= 0) return;

  chosen.untreated = Math.max(0, chosen.untreated - 1);

  for (const p of candidates) {
    if (p.id === chosen.id) continue;

    addCP(
      p,
      CONFIG.TRIAGE.CP_PENALTY_NOT_CHOSEN,
      "（トリアージ落選）"
    );
  }

  logLine(
    "TRIAGE",
    `対象=${chosen.name}（票=${best}）→ 未治療-1 / 落選者CP${CONFIG.TRIAGE.CP_PENALTY_NOT_CHOSEN}`
  );

  await showOkPopup(
    "トリアージ結果",
    [
      `治療対象：${chosen.name}`,
      `${chosen.name}: 未治療 -1`,
      `選ばれなかった未治療者：CP ${CONFIG.TRIAGE.CP_PENALTY_NOT_CHOSEN}`,
    ],
    "event",
    "yellow"
  );

  renderTable();
}

async function tickRabiesAtRoundEnd() {
  for (const p of players) {
    if (!p.alive) continue;
    if (!p.rabiesTimer || p.rabiesTimer <= 0) continue;

    p.rabiesTimer -= 1;

    logLine(
      "RABIES",
      `${p.name}: 狂犬病タイマー 残り${p.rabiesTimer}`
    );

    if (p.rabiesTimer > 0) {
      continue;
    }

    await showOkPopup(
      "狂犬病発症",
      [
        `${p.name} の狂犬病が発症した`,
        `特別治療費：${RULE_V71.RABIES_TREAT_COST.toLocaleString()} HMN`,
        "支払えない場合は死亡",
      ],
      "infect",
      "red"
    );

    p.alive = false;
    p.diedMidgame = true;

    if (CONFIG.GHOST.ENABLE) {
      p.ghost = true;
      p.moneyFrozen = true;
    }

    logLine(
      "DEAD",
      `${p.name}: 狂犬病発症後、治療費不足で死亡`
    );

    await showOkPopup(
      "狂犬病で死亡",
      [
        `${p.name} は狂犬病の特別治療費を支払えなかった`,
        "死亡して幽霊モードになります",
      ],
      "infect",
      "red"
    );
  }

  renderTokens();
  renderTable();
}

const REFERENDUM_BILLS = [
  {
    key: "solidarityTax",
    name: "健康連帯税",
    desc: "生存者全員の所持金から20%を強制徴収し、GovFundへ充当する。",
  },
  {
    key: "privatization",
    name: "医療民営化",
    desc: "以降、政府による治療費負担が完全ゼロになる。代償として全プレイヤーの労働手取りが1.5倍になる。",
  },
  {
    key: "cpCashout",
    name: "まごころCP換金",
    desc: "生存者全員のCPを-3し、GovFundを20,000 HMN回復する。",
  },
  {
    key: "newDrugTrial",
    name: "新薬治験",
    desc: "GovFundを100,000 HMNにリセット。代償として全員が50%の確率でランダムな病気に感染する。",
  },
  {
    key: "wealthTax",
    name: "富裕層への臨時課税",
    desc: "国内で最も所持金が多いプレイヤーの資産を50%没収し、GovFundへ充当する。",
  },
  {
    key: "mobilization",
    name: "国家総動員法",
    desc: "全員が強制労働する。プランに応じた給与と税収が発生するが、過労により全員CP-2。",
  },
  {
    key: "itemConfiscation",
    name: "医療物資の国家接収",
    desc: "全員の全アイテムを没収。1つにつき10,000 HMNとしてGovFundへ強制換金する。",
  },
];

function alivePlayers() {
  return players.filter((p) => p.alive);
}

function pickReferendumBills() {
  return shuffle(REFERENDUM_BILLS.slice()).slice(0, 3);
}

function cpuPickTriageTarget(candidates) {
  if (!candidates.length) return null;

  // CPUは未治療が最も多い人を優先して救う
  let best = candidates[0];

  for (const p of candidates) {
    if ((p.untreated || 0) > (best.untreated || 0)) {
      best = p;
    }
  }

  return best;
}

function cpuPickReferendumBill(bills) {
  if (!bills.length) return null;

  // CPUの優先順位：GovFund回復・安定化を優先
  const priority = [
    "newDrugTrial",
    "solidarityTax",
    "itemConfiscation",
    "wealthTax",
    "cpCashout",
    "mobilization",
    "privatization",
  ];

  for (const key of priority) {
    const found = bills.find((b) => b.key === key);
    if (found) return found;
  }

  return bills[0];
}

async function voteReferendum(bills) {
  const votes = new Map();

  for (const voter of alivePlayers()) {
  if (voter.isCPU) {
    const bill = cpuPickReferendumBill(bills);

    if (bill) {
      votes.set(bill.key, (votes.get(bill.key) || 0) + 1);

      logLine(
        "CPU",
        `${voter.name}: 国民投票を自動投票 → ${bill.name}`
      );
    }

    continue;
  }

  await new Promise((resolve) => {
    const opts = bills
      .map((b) => `<option value="${b.key}">${b.name}</option>`)
      .join("");

    const desc = bills
      .map((b) => `<div class="popLine"><b>${b.name}</b>：${b.desc}</div>`)
      .join("");

    showModal(
      `🗳️ 国民投票：${voter.name}`,
      `<div class="popMsg">
        <div class="popTitle">可決する法案を選んでください</div>
        ${desc}
        <hr class="popHr"/>
        <select id="refVote_${voter.id}">
          ${opts}
        </select>
      </div>`,
      [
        {
          text: "投票する",
          className: "btnPrimary",
          onClick: () => {
            const key = String(
              document.getElementById(`refVote_${voter.id}`)?.value || ""
            );

            closeModal();

            votes.set(key, (votes.get(key) || 0) + 1);
            resolve();
          },
        },
      ]
    );
  });
}

  let bestKeys = [];
  let best = -1;

  for (const [key, count] of votes.entries()) {
    if (count > best) {
      best = count;
      bestKeys = [key];
    } else if (count === best) {
      bestKeys.push(key);
    }
  }

  const chosenKey = bestKeys.length === 1 ? bestKeys[0] : pick(bestKeys);
  const chosen = bills.find((b) => b.key === chosenKey);

  return chosen || bills[0];
}

async function applyReferendumBill(bill) {
  const alive = alivePlayers();

  logLine("REF", `可決法案：${bill.name}`);

  await showOkPopup(
    `🗳️ 可決：${bill.name}`,
    [bill.desc],
    "event",
    "red"
  );

  if (bill.key === "solidarityTax") {
    let total = 0;

    for (const p of alive) {
      const tax = Math.floor(p.money * 0.20);
      p.money -= tax;
      total += tax;
      addGovContribution(p, tax);
      logLine("REF", `${p.name}: 健康連帯税 -${tax.toLocaleString()}`);
    }

    govFund += total;
    logLine("REF", `GovFund +${total.toLocaleString()}`);
  }

  if (bill.key === "privatization") {
    medicalPrivatized = true;
    logLine("REF", "医療民営化：政府治療負担0 / WORK手取り1.5倍");
  }

  if (bill.key === "cpCashout") {
    for (const p of alive) {
      addCP(p, -3, "（まごころCP換金）");
    }

    govFund += 20000;
    logLine("REF", "まごころCP換金：GovFund +20,000");
  }

  if (bill.key === "newDrugTrial") {
    govFund = 100000;
    logLine("REF", "新薬治験：GovFundを100,000にリセット");

    for (const p of alive) {
      const roll = randInt(1, 100);
      if (roll <= 50) {
        logLine("REF", `${p.name}: 新薬治験副作用でランダム感染`);
        await resolveInfect(p);
      } else {
        logLine("REF", `${p.name}: 新薬治験副作用なし（出目${roll}）`);
      }
    }
  }

  if (bill.key === "wealthTax") {
    if (alive.length) {
      let richest = alive[0];

      for (const p of alive) {
        if (p.money > richest.money) richest = p;
      }

      const loss = Math.floor(richest.money * 0.50);
      richest.money -= loss;
      govFund += loss;
      addGovContribution(richest, loss);

      logLine(
        "REF",
        `${richest.name}: 富裕層課税 -${loss.toLocaleString()} / GovFund +${loss.toLocaleString()}`
      );
    }
  }

  if (bill.key === "mobilization") {
    for (const p of alive) {
      const ins = p.insurance;
      const gain = CONFIG.WORK_NET[ins] ?? 0;
      const gdelta = CONFIG.WORK_GOV[ins] ?? 0;

      p.money += gain;
      govFund += gdelta;
      if (gdelta > 0) addGovContribution(p, gdelta);

      addCP(p, -2, "（国家総動員法：過労）");

      logLine(
        "REF",
        `${p.name}: 強制労働 money+${gain.toLocaleString()} / GovFund+${gdelta.toLocaleString()} / CP-2`
      );
    }
  }

  if (bill.key === "itemConfiscation") {
    let totalItems = 0;

    for (const p of alive) {
      const count = countHeldItems(p);
      totalItems += count;
      p.items = {};
      logLine("REF", `${p.name}: 医療物資接収 item=${count}`);
    }

    const gain = totalItems * 10000;
    govFund += gain;

    logLine("REF", `医療物資換金：${totalItems}個 → GovFund +${gain.toLocaleString()}`);
  }

  renderTokens();
  renderTable();
}

async function maybeTriggerReferendumAtRoundEnd() {
  if (!gameStarted) return false;

  if (referendumCooldown > 0) {
    referendumCooldown -= 1;
    logLine(
      "REF",
      `国民投票クールダウン 残り${referendumCooldown}ラウンド`
    );
    return false;
  }

  if (govFund >= RULE_V71.REFERENDUM_GOV_LT) {
    return false;
  }

  referendumOccurred = true;
  referendumCooldown = RULE_V71.REFERENDUM_COOLDOWN;

  const bills = pickReferendumBills();

  logLine(
    "REF",
    `財政破綻：GovFund=${govFund.toLocaleString()} / 国民投票発動 / 候補=${bills.map((b) => b.name).join(", ")}`
  );

  await showOkPopup(
    "🗳️ 財政破綻：国民投票発動",
    [
      `GovFund が ${RULE_V71.REFERENDUM_GOV_LT.toLocaleString()} HMN 未満になった`,
      `現在のGovFund：${govFund.toLocaleString()} HMN`,
      "ランダムに選ばれた3法案から、多数決で1つが強制可決されます",
      `発動後は ${RULE_V71.REFERENDUM_COOLDOWN} ラウンドのクールダウン`,
    ],
    "event",
    "red"
  );

  const chosen = await voteReferendum(bills);
  await applyReferendumBill(chosen);

  return true;
}

async function startRabiesTimer(p, reason = "狂犬病曝露") {
  if (!p.alive) return;

  rabiesOccurred = true;
  p.rabiesTimer = RULE_V71.RABIES_TIMER_START;

  logLine(
    "RABIES",
    `${p.name}: 狂犬病タイマー開始（${reason} / 残り${p.rabiesTimer}ターン）`
  );

  await showOkPopup(
    "狂犬病タイマー開始",
    [
      `${p.name} は狂犬病に曝露した`,
      `理由：${reason}`,
      `発症まで残り ${p.rabiesTimer} ターン`,
      `発症時、${RULE_V71.RABIES_TREAT_COST.toLocaleString()} HMN を支払えなければ死亡`,
    ],
    "infect",
    "red"
  );
}

async function offerRabiesSpecialTreatment(p) {
  if (!p.alive) return;

  if (p.isCPU) {
    if (p.money >= RULE_V71.RABIES_TREAT_COST) {
      p.money -= RULE_V71.RABIES_TREAT_COST;
      p.rabiesTimer = 0;

      logLine(
        "CPU",
        `${p.name}: 狂犬病特別治療を自動実行 / -${RULE_V71.RABIES_TREAT_COST.toLocaleString()}`
      );

      renderTable();
      return;
    }

    logLine(
      "CPU",
      `${p.name}: 狂犬病特別治療費不足 / タイマー継続`
    );

    renderTable();
    return;
  }

  await new Promise((resolve) => {
    showModal(
      "狂犬病：特別治療",
      `<div class="popMsg">
        <div class="popTitle">🐕 狂犬病特別治療</div>
        <div class="popLine">${p.name} は狂犬病に曝露しました。</div>
        <div class="popLine">発症まで残り <b>${p.rabiesTimer}</b> ターン</div>
        <div class="popLine">特別治療費：<b>${RULE_V71.RABIES_TREAT_COST.toLocaleString()} HMN</b></div>
        <div class="small">※この支払いは借金不可。所持金不足なら支払えません。</div>
      </div>`,
      [
        {
          text: "特別治療する",
          className: "btnPrimary",
          onClick: () => {
            closeModal();

            if (p.money >= RULE_V71.RABIES_TREAT_COST) {
              p.money -= RULE_V71.RABIES_TREAT_COST;
              p.rabiesTimer = 0;

              logLine(
                "RABIES",
                `${p.name}: 狂犬病特別治療成功 / -${RULE_V71.RABIES_TREAT_COST.toLocaleString()}`
              );
            } else {
              logLine(
                "RABIES",
                `${p.name}: 所持金不足で狂犬病特別治療不可 / タイマー継続`
              );
            }

            renderTable();
            resolve();
          },
        },
        {
          text: "今は治療しない",
          className: "btnDanger",
          onClick: () => {
            closeModal();

            logLine(
              "RABIES",
              `${p.name}: 狂犬病特別治療を保留 / タイマー継続`
            );

            renderTable();
            resolve();
          },
        },
      ]
    );
  });
}

  /* =========================
     Ghost helpers
  ========================= */
  function deadGhostCount() {
    return players.filter((x) => !x.alive && x.ghost).length;
  }

  function applyDeadInfectPlus(sev) {
    if (!CONFIG.GHOST.ENABLE) return sev;
    if (deadGhostCount() <= 0) return sev;
    return Math.min(CONFIG.SEV_MAX, sev + (CONFIG.GHOST.DEAD_INFECT_PLUS || 0));
  }

  /* =========================
     Items
  ========================= */
  function hasItem(p, key) {
    return (p.items[key] || 0) > 0;
  }

  function addItem(p, key, n = 1) {
    p.items[key] = (p.items[key] || 0) + n;
  }

  function useItem(p, key) {
    if (!hasItem(p, key)) return false;
    p.items[key] -= 1;
    if (p.items[key] <= 0) delete p.items[key];
    return true;
  }

  async function gainRandomItemAtItemTile(p) {
    const it = pick(CONFIG.ITEMS);
    addItem(p, it.key, 1);
    p.itemGained = (p.itemGained || 0) + 1;
    logLine("ITEM", `${p.name}: ランダム入手 → ${it.name}（消耗）`);
    await showOkPopup("ITEM入手（ランダム）", [`${p.name} は <b>${it.name}</b> を手に入れた！`], "item", "blue");
  }

  /* =========================
     Disease data
  ========================= */
  const DISEASES = [
    { 分類: "red", 疾病候補: "エボラ出血熱", アイテム効果: "なし", 内容: "洞窟に入ってコウモリと接触、エボラウィルスに感染！", 発生場所: "ラスボス" },

    { 分類: "yellow", 疾病候補: "ジフテリア", アイテム効果: "飛沫", 内容: "突然の発熱と喉の腫れに始まり、声がかれて犬の鳴き声のような咳が出てきた！ジフテリア", 発生場所: "都市" },
    { 分類: "yellow", 疾病候補: "SARS", アイテム効果: "アルコール消毒", 内容: "SARSが流行、発熱と悪寒がする…咳がとまらず、息がしづらい", 発生場所: "都市" },
    { 分類: "yellow", 疾病候補: "結核", アイテム効果: "N95", 内容: "免疫が落ちた…結核に感染…", 発生場所: "都市" },
    { 分類: "yellow", 疾病候補: "腸管出血性大腸菌感染症", アイテム効果: "アルコール消毒", 内容: "現地の料理でO-157感染！下痢がとまらない！！", 発生場所: "汚染" },
    { 分類: "yellow", 疾病候補: "コレラ", アイテム効果: "なし", 内容: "汚染された水を飲んでしまった…コレラを発症", 発生場所: "汚染" },
    { 分類: "yellow", 疾病候補: "細菌性赤痢", アイテム効果: "なし", 内容: "突然の発熱と下痢が！トイレに行ってもスッキリしない…", 発生場所: "汚染" },
    { 分類: "yellow", 疾病候補: "腸チフス", アイテム効果: "なし", 内容: "屋台に売っている氷の入ったソーダを飲んで、高熱にうなされる。上半身にピンクの発疹が出現！", 発生場所: "汚染" },
    { 分類: "yellow", 疾病候補: "日本脳炎", アイテム効果: "蚊帳", 内容: "養豚場近くで友達と蚊に刺された！発熱と光が凄くまぶしく感じる…友達は何もないみたい", 発生場所: "熱帯" },
    { 分類: "yellow", 疾病候補: "エムポックス（Mpox / 旧称サル痘）", アイテム効果: "なし", 内容: "リスに噛まれた！サル痘！？", 発生場所: "都市" },
    { 分類: "yellow", 疾病候補: "マラリア", アイテム効果: "蚊帳", 内容: "ハマダラカに刺された！マラリアに感染！？", 発生場所: "熱帯" },
    { 分類: "yellow", 疾病候補: "レジオネラ症", アイテム効果: "なし", 内容: "激混みの温泉施設を訪れた、", 発生場所: "都市" },
    { 分類: "yellow", 疾病候補: "アメーバ赤痢", アイテム効果: "なし", 内容: "イチゴゼリーみたいな、血が混じった粘り気のある便が出た！良くなったり悪くなったり…赤痢アメーバ", 発生場所: "汚染" },
    { 分類: "yellow", 疾病候補: "破傷風", アイテム効果: "なし", 内容: "沼にはまった(汗)　釘が足に刺さって破傷風に感染", 発生場所: "汚染" },
    { 分類: "yellow", 疾病候補: "細菌性髄膜炎菌", アイテム効果: "マスク/N95/アルコール消毒", 内容: "学校で流行した風邪の症状を放置していた結果、細菌性髄膜炎に感染", 発生場所: "都市" },
    { 分類: "yellow", 疾病候補: "梅毒", アイテム効果: "なし", 内容: "繁華街で梅毒に感染", 発生場所: "都市" },
    { 分類: "yellow", 疾病候補: "住血吸虫症", アイテム効果: "なし", 内容: "衛生管理が行き届いていない地域で汚染されている水を飲んで住血吸虫に感染", 発生場所: "汚染" },
    { 分類: "yellow", 疾病候補: "シャーガス", アイテム効果: "なし", 内容: "サシガメに噛まれた…シャーガス病に", 発生場所: "熱帯" },
    { 分類: "yellow", 疾病候補: "アフリカトリパノソーマ", アイテム効果: "なし", 内容: "ツェツェバエに吸血された、アフリカトリパノソーマに感染、目が見えないよー", 発生場所: "熱帯" },
    { 分類: "yellow", 疾病候補: "フィラリア症", アイテム効果: "蚊帳", 内容: "イエカに刺された…フィラリアに感染、足が浮腫んできた", 発生場所: "熱帯" },

    { 分類: "red", 疾病候補: "クリミア・コンゴ出血熱", アイテム効果: "ダニ除け", 内容: "流行地域で家畜作業をしていたらマダニに噛まれた！その後、突然の発熱と悪寒…クリミア・コンゴ熱と診断", 発生場所: "熱帯" },
    { 分類: "red", 疾病候補: "痘そう", アイテム効果: "なし", 内容: "100年前にタイムスリップ！発熱後に同一の発疹が出現…天然痘", 発生場所: "都市" },
    { 分類: "red", 疾病候補: "南米出血熱", アイテム効果: "防護服", 内容: "野ネズミが大量発生している地域の下水に接触した。発熱と筋肉痛、頭痛が…南米出血熱", 発生場所: "汚染" },
    { 分類: "red", 疾病候補: "ペスト", アイテム効果: "なし", 内容: "ホテルのベットにノミが！！ペストに感染", 発生場所: "汚染" },
    { 分類: "red", 疾病候補: "マールブルグ病", アイテム効果: "防護服", 内容: "マールブルグ病の流行。発熱と激しい嘔吐、下痢が出現。", 発生場所: "熱帯" },
    { 分類: "red", 疾病候補: "ラッサ熱", アイテム効果: "防護服", 内容: "任務中にラッサ熱が発生した地域を無防備に通過して、数日後に急激な高熱に見舞われる", 発生場所: "熱帯" },
    { 分類: "red", 疾病候補: "MERS（中東呼吸器症候群）", アイテム効果: "アルコール消毒", 内容: "ヒトコブラクダに触れあって、MERSに感染", 発生場所: "熱帯" },
    { 分類: "red", 疾病候補: "黄熱", アイテム効果: "蚊帳", 内容: "蚊にさされた３日後、頭痛と高熱が出現！目が黄色くなってきた…", 発生場所: "熱帯" },
    { 分類: "red", 疾病候補: "狂犬病", アイテム効果: "狂犬病ワクチン", 内容: "乱暴な犬に噛まれた！！狂犬病かもしれない…", 発生場所: "熱帯" },
    { 分類: "red", 疾病候補: "重症熱性血小板減少症候群（SFTS）", アイテム効果: "ダニ除け", 内容: "マダニに刺されて発熱！？食欲が沸かない、吐いてしまう…", 発生場所: "熱帯" },
    { 分類: "red", 疾病候補: "劇症型溶血性レンサ球菌感染症", アイテム効果: "なし", 内容: "突然、腕に激しい痛みと赤い発疹が出た。ひどく腫れていてどんどん広がっていく…後の検査でA群溶血性レンサ球菌が検出された。", 発生場所: "都市" },
    { 分類: "red", 疾病候補: "HIV（後天性免疫不全症候群）", アイテム効果: "なし", 内容: "２週間前に風邪のような症状があった。パートナーがエイズを発症し、検査をしたらHIV陽性", 発生場所: "都市" },
    { 分類: "red", 疾病候補: "クリプトコックス症", アイテム効果: "なし", 内容: "鳩がたくさん飛んでいる公園でピクニックをしたら、クリプトコッカスに感染", 発生場所: "汚染" },

    { 分類: "blue", 疾病候補: "ポリオ", アイテム効果: "なし", 内容: "下水処理がおいつかない…ポリオに感染", 発生場所: "汚染" },
    { 分類: "blue", 疾病候補: "A型肝炎", アイテム効果: "なし", 内容: "手を良く洗わずに食事した、食欲がなくなり全身が黄色くなってきた…", 発生場所: "汚染" },
    { 分類: "blue", 疾病候補: "トキソプラズマ症（Toxoplasmosis）", アイテム効果: "なし", 内容: "妊娠中の友達に代わって馬刺しを沢山食べた！", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "エキノコックス症", アイテム効果: "なし", 内容: "キツネに遭遇！？糞を踏んでエキノコックスに感染", 発生場所: "汚染" },
    { 分類: "blue", 疾病候補: "デング熱", アイテム効果: "蚊帳", 内容: "ヒトスジシマカに刺されてデング熱に感染", 発生場所: "熱帯" },
    { 分類: "blue", 疾病候補: "日本紅斑熱（リケッチア）", アイテム効果: "ダニ除け", 内容: "森の中で腕をダニに刺された！熱と発疹が出てきた…", 発生場所: "熱帯" },
    { 分類: "blue", 疾病候補: "インフルエンザ", アイテム効果: "マスク/N95/アルコール消毒", 内容: "医療施設を訪れて、消毒を怠ったため、インフルエンザに感染した", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "感染性胃腸炎", アイテム効果: "アルコール消毒", 内容: "家族からノロウィルスをうつされる…", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "COVID-19", アイテム効果: "マスク/N95/アルコール消毒", 内容: "コロナのクラスターが発生！PCR検査の結果、陽性！", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "手足口病", アイテム効果: "なし", 内容: "手足口病にかかって、蕁麻疹が…", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "流行性耳下腺炎", アイテム効果: "マスク/N95", 内容: "喉が腫れて病院受診。おたふく風邪と診断", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "流行性角結膜炎（流行り目）", アイテム効果: "なし", 内容: "急に目が赤くなって涙が止まらない…かゆくてしょぼしょぼする。流行性角結膜炎", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "アニサキス", アイテム効果: "なし", 内容: "魚を食べた結果、アニサキスに感染した", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "マイコプラズマ肺炎", アイテム効果: "マスク/N95", 内容: "寒い季節、、乾いた咳がとまらない、、マイコプラズマに感染", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "ウイルス性肝炎( B型)", アイテム効果: "なし", 内容: "刺青を入れ、B型肝炎に感染した。", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "肺炎球菌", アイテム効果: "マスク/N95/アルコール消毒", 内容: "保育園に通い始めたら発熱した！先生たちは痰が絡んだ咳が出てるみたい…", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "水痘", アイテム効果: "N95", 内容: "お兄ちゃんの水疱瘡が移った", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "百日咳", アイテム効果: "マスク/N95/アルコール消毒", 内容: "咳がとまらない…百日咳に", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "風しん", アイテム効果: "マスク/N95/アルコール消毒", 内容: "テーマパークでの人混みで風疹に感染", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "麻しん", アイテム効果: "マスク/N95/アルコール消毒", 内容: "学校で麻疹に感染…", 発生場所: "都市" },
    { 分類: "blue", 疾病候補: "回虫症（Ascaris infection）", アイテム効果: "なし", 内容: "環境活動の一環で汚染された土壌を調査中、回虫の卵に接触感染", 発生場所: "汚染" },
  ];

const DISEASE_INFO = {
  "水痘": {
    type: "ウイルス感染症",
    route: "空気感染・飛沫感染・接触感染",
    vaccine: "あり",
    note: "発熱後に全身へ水疱性発疹が出現する。成人や免疫不全患者では重症化しやすい。"
  },
  "麻しん": {
    type: "ウイルス感染症",
    route: "空気感染",
    vaccine: "あり",
    note: "感染力が非常に強い。発熱、咳、結膜炎、発疹が特徴。肺炎や脳炎を合併することがある。"
  },
  "風しん": {
    type: "ウイルス感染症",
    route: "飛沫感染",
    vaccine: "あり",
    note: "発熱、発疹、リンパ節腫脹が特徴。妊娠初期の感染では先天性風しん症候群に注意が必要。"
  },
  "黄熱": {
    type: "ウイルス感染症",
    route: "蚊媒介",
    vaccine: "あり",
    note: "発熱、黄疸、出血傾向を起こすことがある。熱帯地域で問題となる感染症。"
  },
  "痘そう": {
    type: "ウイルス感染症",
    route: "飛沫感染・接触感染",
    vaccine: "あり",
    note: "天然痘。発熱後に全身へ特徴的な発疹が出現する。現在は世界的に根絶されている。"
  },
"HIV（後天性免疫不全症候群）": {
  type: "ウイルス感染症",
  route: "性的接触・血液感染・母子感染",
  vaccine: "なし",
  note: "HIVは免疫を担う細胞に感染する。未治療では免疫不全が進行し、日和見感染症などを起こしやすくなる。抗HIV療法により進行を抑えられる。"
},
"結核": {
  type: "細菌感染症",
  route: "空気感染",
  vaccine: "あり",
  note: "結核菌による感染症。長引く咳、発熱、寝汗、体重減少が特徴。公衆衛生上重要で、治療には複数の抗菌薬を長期間使用する。"
},

"コレラ": {
  type: "細菌感染症",
  route: "水系感染・経口感染",
  vaccine: "あり",
  note: "汚染された水や食品から感染する。激しい水様性下痢により急速な脱水を起こすことがあり、補液が重要。"
},

"マラリア": {
  type: "原虫感染症",
  route: "蚊媒介",
  vaccine: "一部あり",
  note: "ハマダラカが媒介する。発熱発作、悪寒、貧血などを起こす。熱帯地域で重要な感染症。"
},

"狂犬病": {
  type: "ウイルス感染症",
  route: "動物咬傷",
  vaccine: "あり",
  note: "感染動物に咬まれることで感染する。発症後は極めて致死的で、曝露後ワクチン接種が重要。"
},
"インフルエンザ": {
  type: "ウイルス感染症",
  route: "飛沫感染・接触感染",
  vaccine: "あり",
  note: "発熱、咳、筋肉痛などを起こす。高齢者や基礎疾患を持つ人では重症化することがある。"
},

"COVID-19": {
  type: "ウイルス感染症",
  route: "飛沫感染・エアロゾル感染・接触感染",
  vaccine: "あり",
  note: "新型コロナウイルスによる感染症。発熱や咳のほか、肺炎や味覚・嗅覚障害を起こすことがある。"
},

"百日咳": {
  type: "細菌感染症",
  route: "飛沫感染",
  vaccine: "あり",
  note: "激しい連続した咳発作が特徴。乳児では重症化しやすい。"
},

"流行性耳下腺炎": {
  type: "ウイルス感染症",
  route: "飛沫感染・接触感染",
  vaccine: "あり",
  note: "おたふく風邪。耳下腺の腫脹が特徴で、髄膜炎や難聴を合併することがある。"
},

"手足口病": {
  type: "ウイルス感染症",
  route: "飛沫感染・接触感染・経口感染",
  vaccine: "なし",
  note: "手足や口腔内に水疱性発疹が出現する。乳幼児に多い感染症。"
},

"感染性胃腸炎": {
  type: "ウイルス感染症",
  route: "経口感染・接触感染",
  vaccine: "なし",
  note: "嘔吐や下痢を起こす感染症。ノロウイルスなどが代表的。"
},

"A型肝炎": {
  type: "ウイルス感染症",
  route: "経口感染",
  vaccine: "あり",
  note: "汚染された食品や水から感染する。発熱や黄疸を伴う急性肝炎を起こす。"
},

"ウイルス性肝炎( B型)": {
  type: "ウイルス感染症",
  route: "血液感染・性的接触・母子感染",
  vaccine: "あり",
  note: "慢性化すると肝硬変や肝がんの原因となる。ワクチンで予防可能。"
},

"肺炎球菌": {
  type: "細菌感染症",
  route: "飛沫感染",
  vaccine: "あり",
  note: "肺炎、中耳炎、髄膜炎などを引き起こす。乳幼児や高齢者で重要な病原体。"
},

"マイコプラズマ肺炎": {
  type: "細菌感染症",
  route: "飛沫感染",
  vaccine: "なし",
  note: "若年者に多く、乾いた咳が長引くことが特徴。"
},
"ポリオ": {
  type: "ウイルス感染症",
  route: "経口感染",
  vaccine: "あり",
  note: "ポリオウイルスによる感染症。まれに手足の麻痺を起こす。"
},

"トキソプラズマ症（Toxoplasmosis）": {
  type: "原虫感染症",
  route: "経口感染・先天性感染",
  vaccine: "なし",
  note: "加熱不十分な肉や猫の糞便を介して感染する。妊娠中の初感染では胎児への影響に注意。"
},

"エキノコックス症": {
  type: "寄生虫感染症",
  route: "経口感染",
  vaccine: "なし",
  note: "キツネやイヌの糞便中の虫卵を介して感染する。肝臓に病変を形成することが多い。"
},

"デング熱": {
  type: "ウイルス感染症",
  route: "蚊媒介",
  vaccine: "一部あり",
  note: "蚊によって媒介される。高熱、関節痛、発疹が特徴。"
},

"日本紅斑熱（リケッチア）": {
  type: "細菌感染症",
  route: "ダニ媒介",
  vaccine: "なし",
  note: "マダニに刺されて感染する。発熱、発疹、刺し口が特徴。"
},

"流行性角結膜炎（流行り目）": {
  type: "ウイルス感染症",
  route: "接触感染",
  vaccine: "なし",
  note: "アデノウイルスによる結膜炎。強い充血や涙、目やにを伴う。"
},

"アニサキス": {
  type: "寄生虫感染症",
  route: "経口感染",
  vaccine: "なし",
  note: "生魚に寄生する幼虫を摂取して感染する。激しい腹痛を起こす。"
},

"回虫症（Ascaris infection）": {
  type: "寄生虫感染症",
  route: "経口感染",
  vaccine: "なし",
  note: "虫卵を摂取することで感染する。多くは無症状だが、腹痛や腸閉塞の原因になることがある。"
},
"ジフテリア": {
  type: "細菌感染症",
  route: "飛沫感染",
  vaccine: "あり",
  note: "咽頭に偽膜を形成し、重症例では気道閉塞を起こす。"
},

"SARS": {
  type: "ウイルス感染症",
  route: "飛沫感染・接触感染",
  vaccine: "なし",
  note: "SARSコロナウイルスによる重症肺炎。2003年に世界的流行を起こした。"
},

"腸管出血性大腸菌感染症": {
  type: "細菌感染症",
  route: "経口感染",
  vaccine: "なし",
  note: "O157などが代表。血便や溶血性尿毒症症候群(HUS)を起こすことがある。"
},

"細菌性赤痢": {
  type: "細菌感染症",
  route: "経口感染",
  vaccine: "なし",
  note: "高熱、腹痛、血便を伴う感染症。少量の菌でも感染する。"
},

"腸チフス": {
  type: "細菌感染症",
  route: "経口感染",
  vaccine: "あり",
  note: "サルモネラ・チフィによる感染症。高熱とバラ疹が特徴。"
},

"日本脳炎": {
  type: "ウイルス感染症",
  route: "蚊媒介",
  vaccine: "あり",
  note: "蚊を介して感染する脳炎。意識障害やけいれんを起こすことがある。"
},

"エムポックス（Mpox / 旧称サル痘）": {
  type: "ウイルス感染症",
  route: "接触感染・飛沫感染",
  vaccine: "あり",
  note: "発熱とリンパ節腫脹に続いて特徴的な発疹が出現する。"
},

"レジオネラ症": {
  type: "細菌感染症",
  route: "エアロゾル感染",
  vaccine: "なし",
  note: "人工水環境から発生する飛沫を吸入して感染する。重症肺炎の原因となる。"
},

"アメーバ赤痢": {
  type: "原虫感染症",
  route: "経口感染",
  vaccine: "なし",
  note: "血液や粘液を含む下痢を起こす。肝膿瘍を合併することもある。"
},

"破傷風": {
  type: "細菌感染症",
  route: "創傷感染",
  vaccine: "あり",
  note: "土壌中の菌が傷口から侵入する。筋肉のけいれんや開口障害を起こす。"
},
"細菌性髄膜炎菌": {
  type: "細菌感染症",
  route: "飛沫感染",
  vaccine: "あり",
  note: "髄膜炎菌による感染症。急速に進行し、髄膜炎や敗血症を起こすことがある。"
},

"梅毒": {
  type: "細菌感染症",
  route: "性的接触・母子感染",
  vaccine: "なし",
  note: "梅毒トレポネーマによる感染症。進行すると神経や心血管にも障害を起こす。"
},

"住血吸虫症": {
  type: "寄生虫感染症",
  route: "経皮感染",
  vaccine: "なし",
  note: "淡水中の幼虫が皮膚から侵入して感染する。慢性化すると肝障害などを起こす。"
},

"シャーガス": {
  type: "寄生虫感染症",
  route: "昆虫媒介",
  vaccine: "なし",
  note: "サシガメが媒介する。慢性期には心筋症や消化管障害を引き起こす。"
},

"アフリカトリパノソーマ": {
  type: "寄生虫感染症",
  route: "昆虫媒介",
  vaccine: "なし",
  note: "ツェツェバエが媒介する。進行すると睡眠障害や意識障害を起こす。"
},

"フィラリア症": {
  type: "寄生虫感染症",
  route: "蚊媒介",
  vaccine: "なし",
  note: "蚊を介して感染し、慢性化するとリンパ浮腫や象皮病を引き起こす。"
},
"エボラ出血熱": {
  type: "ウイルス感染症",
  route: "接触感染",
  vaccine: "あり",
  note: "高熱、嘔吐、下痢、出血傾向を伴う重篤な感染症。致死率が高い。"
},

"クリミア・コンゴ出血熱": {
  type: "ウイルス感染症",
  route: "ダニ媒介・接触感染",
  vaccine: "なし",
  note: "マダニを介して感染する出血熱。重症例では多臓器不全を起こす。"
},

"南米出血熱": {
  type: "ウイルス感染症",
  route: "げっ歯類媒介",
  vaccine: "一部あり",
  note: "野生げっ歯類との接触で感染する。高熱や出血症状を起こす。"
},

"ペスト": {
  type: "細菌感染症",
  route: "ノミ媒介・飛沫感染",
  vaccine: "なし",
  note: "ペスト菌による感染症。肺ペストでは人から人へ飛沫感染する。"
},

"マールブルグ病": {
  type: "ウイルス感染症",
  route: "接触感染",
  vaccine: "なし",
  note: "エボラと同じフィロウイルス科。重度の出血熱を引き起こす。"
},

"ラッサ熱": {
  type: "ウイルス感染症",
  route: "げっ歯類媒介・接触感染",
  vaccine: "なし",
  note: "ネズミの排泄物を介して感染する。西アフリカで流行する出血熱。"
},
"MERS（中東呼吸器症候群）": {
  type: "ウイルス感染症",
  route: "飛沫感染・接触感染・動物媒介",
  vaccine: "なし",
  note: "MERSコロナウイルスによる感染症。ヒトコブラクダが感染源とされ、重症肺炎を起こすことがある。"
},

"重症熱性血小板減少症候群（SFTS）": {
  type: "ウイルス感染症",
  route: "ダニ媒介",
  vaccine: "なし",
  note: "マダニによって媒介される。高熱、嘔吐、血小板減少を起こし、重症化することがある。"
},

"劇症型溶血性レンサ球菌感染症": {
  type: "細菌感染症",
  route: "接触感染・創傷感染",
  vaccine: "なし",
  note: "A群溶血性レンサ球菌による重篤な感染症。急速に軟部組織壊死や敗血症を引き起こす。"
},

"クリプトコックス症": {
  type: "真菌感染症",
  route: "空気感染（胞子吸入）",
  vaccine: "なし",
  note: "鳩などの排泄物中に存在する真菌を吸入して感染する。免疫不全患者では髄膜炎を起こすことがある。"
}
};

  function normalizeColor(cls) {
    const c = String(cls ?? "").toLowerCase().trim();
    if (c === "red" || c === "yellow" || c === "blue") return c;
    return "blue";
  }

  function severityOfClass(cls) {
    const c = normalizeColor(cls);
    return CONFIG.SEV_BY_CLASS[c] ?? 1;
  }

  function envOfDiseasePlace(place) {
    if (place === "熱帯") return "tropical";
    if (place === "汚染") return "polluted";
    if (place === "都市") return "urban";
    return "boss";
  }

  function buildPools() {
    const src = Array.isArray(DISEASES) ? DISEASES : [];
    const urban = src.filter((d) => envOfDiseasePlace(d.発生場所) === "urban");
    const tropical = src.filter((d) => envOfDiseasePlace(d.発生場所) === "tropical");
    const polluted = src.filter((d) => envOfDiseasePlace(d.発生場所) === "polluted");
    const any = src.filter((d) => envOfDiseasePlace(d.発生場所) !== "boss");
    return { urban, tropical, polluted, any };
  }

  let pool = null;

  function drawDiseaseForEnv(env) {
    const list = pool?.[env] ?? [];
    const fallback = pool?.any ?? [];
    const arr = list.length ? list : fallback;
    return pick(arr);
  }

  function parseItemHint(hint) {
    const s = String(hint || "").trim();
    if (!s || s === "なし") return [];
    return s.split("/").map((x) => x.trim()).filter(Boolean);
  }

  function usableItemsForDisease(p, d) {
    const hintNames = parseItemHint(d.アイテム効果);
    if (!hintNames.length) return [];

    const usableKeys = new Set();
    const pushIfHas = (k) => hasItem(p, k) && usableKeys.add(k);

    for (const nm of hintNames) {
      if (nm === "飛沫") {
        for (const it of CONFIG.ITEMS) if (it.targets.includes("飛沫")) pushIfHas(it.key);
        continue;
      }
      if (nm === "N95") { pushIfHas("n95"); continue; }
      if (nm === "防護服") { pushIfHas("suit"); continue; }
      if (nm === "アルコール消毒") { pushIfHas("alcohol"); continue; }
      if (nm === "蚊帳") { pushIfHas("mosquito"); continue; }
      if (nm === "ダニ除け" || nm === "ダニよけ") { pushIfHas("tick"); continue; }
      if (nm === "狂犬病ワクチン") { pushIfHas("rabiesVax"); continue; }
      if (nm === "マスク") { pushIfHas("mask"); continue; }
      if (nm === "マスク/N95/アルコール消毒") { ["mask", "n95", "alcohol"].forEach(pushIfHas); continue; }
      if (nm === "マスク/N95") { ["mask", "n95"].forEach(pushIfHas); continue; }
    }

    return Array.from(usableKeys)
      .map((k) => CONFIG.ITEMS.find((x) => x.key === k))
      .filter(Boolean);
  }

 function itemSuccessRate(it) {
  const lv = currentInvestLv();
  const plus = lv >= 2 ? CONFIG.INVEST_EFFECTS.itemSuccessPlusAtLv2 : 0;

  return Math.max(0, Math.min(100, (it.base ?? 0) + plus));
}

function cpuPickBestUsableItem(usableList) {
  if (!usableList.length) return null;

  let best = usableList[0];

  for (const it of usableList) {
    if (itemSuccessRate(it) > itemSuccessRate(best)) {
      best = it;
    }
  }

  return best;
}  

async function chooseAndUseItem(p, usableList) {
  if (!usableList.length) {
    return { used: false, success: false, item: null, rate: 0 };
  }

  if (p.isCPU) {
    const it = cpuPickBestUsableItem(usableList);

    if (!it || !hasItem(p, it.key)) {
      return { used: false, success: false, item: null, rate: 0 };
    }

    useItem(p, it.key);

    const rate = itemSuccessRate(it);
    const roll = randInt(1, 100);
    const success = roll <= rate;

    logLine(
      "CPU",
      `${p.name}: ${it.name} を自動使用（成功率${rate}% / 出目${roll}）=> ${success ? "成功" : "失敗"}`
    );

    renderTable();

    return {
      used: true,
      success,
      item: it,
      rate,
    };
  }

  const opts = usableList
      .map((it) => {
        const r = itemSuccessRate(it);
        const debuff = "";
        return `<option value="${it.key}">${it.name}（成功率 ${r}%）${debuff}</option>`;
      })
      .join("");

    const lv = currentInvestLv();
    const lines = [];
    lines.push(lv >= 2 ? `投資Lv2効果：成功率 +${CONFIG.INVEST_EFFECTS.itemSuccessPlusAtLv2}% 適用中` : "投資Lv2未満：成功率ボーナスなし");
        return await new Promise((resolve) => {
      showModal(
        `${p.name}：アイテムを使う？`,
        `<div class="popMsg">
          <div class="popTitle">🎒 アイテム選択</div>
          ${lines.map((s) => `<div class="popLine">${s}</div>`).join("")}
          <hr class="popHr"/>
          <div class="popLine">対象アイテム（どれか1つ）</div>
          <select id="itemPick">${opts}</select>
          <div class="small">※成功/失敗に関わらず消費される</div>
        </div>`,
        [
          {
            text: "使う",
            className: "btnPrimary",
            onClick: () => {
              const key = String(document.getElementById("itemPick")?.value || "");
              closeModal();

              const it = CONFIG.ITEMS.find((x) => x.key === key);
              if (!it || !hasItem(p, key)) {
                resolve({ used: false, success: false, item: null, rate: 0 });
                return;
              }

              useItem(p, key);

              const rate = itemSuccessRate(it);
              const roll = randInt(1, 100);
              const success = roll <= rate;

              logLine("ITEM", `${p.name}: ${it.name} 使用（成功率${rate}% / 出目${roll}）=> ${success ? "成功" : "失敗"}（消費）`);
              resolve({ used: true, success, item: it, rate });
            },
          },
          {
            text: "使わない",
            onClick: () => {
              closeModal();
              resolve({ used: false, success: false, item: null, rate: 0 });
            },
          },
        ]
      );
    });
  }

  /* =========================
     Treatment
  ========================= */
async function doTreatment(p) {
  const ins = CONFIG.INSURANCE[p.insurance];

  const playerPayBase = ins.treatPlayerPay;
  const govPayBase = ins.treatGovPay;

  const extra = medicalCollapseActive
    ? CONFIG.MEDICAL_COLLAPSE.EXTRA_TREAT_PLAYER_PAY
    : 0;

  const playerPay = playerPayBase + extra;
  const govPay = medicalPrivatized ? 0 : govPayBase;

  forcePay(p, playerPay, "治療費");
  govFund -= govPay;

  const cpDelta = CONFIG.TREAT_CP[p.insurance] ?? 0;
  if (cpDelta !== 0) addCP(p, cpDelta, "（治療）");

  logLine(
    "TREAT",
    `${p.name}: 治療 -${playerPay.toLocaleString()} / 政府負担 ${govPay.toLocaleString()}（base=${govPayBase.toLocaleString()}, extra=${extra.toLocaleString()} / 基金=${govFund.toLocaleString()}）`
  );

  return true;
}

async function doForcedTbTreatment(p) {
  const cost = 10000;

  govFund -= cost;

  logLine(
    "TB",
    `${p.name}: 公費強制収容により強制治療 / プレイヤー負担0 / GovFund -${cost.toLocaleString()}`
  );

  renderTable();
  return true;
}
  /* =========================
     infect resolver
  ========================= */
  function applyEbolaInfectPlus(baseSev) {
    if (!ebolaTriggered) return baseSev;
    return Math.min(CONFIG.SEV_MAX, baseSev + CONFIG.EBOLA.INFECT_DANGER_PLUS);
}

  function applyInvestDangerMinus(baseSev) {
    const lv = currentInvestLv();
    if (lv < 1) return baseSev;
    return Math.max(CONFIG.SEV_MIN, baseSev - CONFIG.INVEST_EFFECTS.infectDangerMinusAtLv1);
  }

function grantGreenPassBase(p, disease, reason = "完治") {
  if (!RULE_V71.GP_DISEASES.has(disease)) return;

  p.gpBase = true;
  p.gpSource = `${reason}:${disease}`;

  logLine(
    "GP",
    `${p.name}: ${disease} によりGreen Pass権利獲得（${reason}）`
  );
}

async function maybeWaterContamination(disease) {
  if (!RULE_V71.WATER_DISEASES.has(disease)) return;
  if (rand01() >= RULE_V71.WATER_PROB) return;

  let total = 0;

  for (const p of players) {
    if (!p.alive) continue;
    forcePay(p, RULE_V71.WATER_TAX, "水質汚染対策費");
    total += RULE_V71.WATER_TAX;
  }

  govFund += total;

  logLine(
    "WATER",
    `水質汚染発生：生存者全員から ${RULE_V71.WATER_TAX.toLocaleString()} HMN 徴収 / GovFund +${total.toLocaleString()}`
  );

  await showOkPopup(
    "水質汚染イベント",
    [
      `${disease} をきっかけに水質汚染が発生`,
      `生存者全員から ${RULE_V71.WATER_TAX.toLocaleString()} HMN を徴収`,
      `GovFund +${total.toLocaleString()}`
    ],
    "event",
    "yellow"
  );

  renderTable();
}

async function maybeVectorCampaign(disease) {
  if (!RULE_V71.VECTOR_DISEASES.has(disease)) return;
  if (rand01() >= RULE_V71.VECTOR_PROB) return;

  logLine("VECTOR", `防虫キャンペーン発生：${disease}`);

  for (const p of players) {
    if (!p.alive) continue;

if (p.isCPU) {
  forcePay(p, RULE_V71.VECTOR_TAX, "防虫キャンペーン費");

  govFund += RULE_V71.VECTOR_TAX;
  addGovContribution(p, RULE_V71.VECTOR_TAX);

  logLine(
    "CPU",
    `${p.name}: 防虫キャンペーンを自動支払い（${RULE_V71.VECTOR_TAX.toLocaleString()} HMN）`
  );

  renderTable();
  continue;
}
    await new Promise((resolve) => {
      showModal(
        "防虫キャンペーン",
       `<div class="popMsg">
  <div class="popTitle">🦟 防虫キャンペーン</div>
  <div class="popLine"><b>${disease}</b> の発生をきっかけに、地域で防虫対策が始まりました。</div>
  <div class="popLine">蚊・ダニなどの媒介感染症を広げないため、住民は対策費を負担します。</div>
  <hr class="popHr"/>
  <div class="popLine">A：${RULE_V71.VECTOR_TAX.toLocaleString()} HMN 支払う</div>
  <div class="popLine">B：劇薬を吸引して CP ${RULE_V71.VECTOR_CP_PENALTY}
</div>
        </div>`,
        [
          {
            text: "支払う",
            className: "btnPrimary",
            onClick: () => {
              closeModal();

              forcePay(p, RULE_V71.VECTOR_TAX, "防虫キャンペーン費");

              govFund += RULE_V71.VECTOR_TAX;
              addGovContribution(p, RULE_V71.VECTOR_TAX);

              logLine("VECTOR", `${p.name}: ${RULE_V71.VECTOR_TAX.toLocaleString()} HMN支払い`);
              renderTable();
              resolve();
            },
          },
          {
            text: "CPを失う",
            className: "btnDanger",
            onClick: () => {
              closeModal();

              addCP(p, RULE_V71.VECTOR_CP_PENALTY, "（防虫キャンペーン：劇薬吸引）");

              logLine("VECTOR", `${p.name}: 支払い拒否 / CP${RULE_V71.VECTOR_CP_PENALTY}`);
              renderTable();
              resolve();
            },
          },
        ]
      );
    });
  }

  await showOkPopup(
    "防虫キャンペーン終了",
    [
      `${disease} をきっかけに防虫キャンペーンが実施された`,
      "各生存者が支払いまたはCP低下を選択しました",
    ],
    "event",
    "yellow"
  );
}
 
async function resolveTbCluster(sourcePlayer, sev) {
  if (!sourcePlayer.alive) return;
  if (rand01() >= RULE_V71.TB_CLUSTER_PROB) return;

  const targets = players
  .filter((p) => {
    if (!p.alive) return false;
    return Math.abs(p.pos - sourcePlayer.pos) <= RULE_V71.TB_RANGE;
  })
  .sort((a, b) => {
    if (a.id === sourcePlayer.id) return -1;
    if (b.id === sourcePlayer.id) return 1;
    return a.id - b.id;
  });

  if (!targets.length) {
    logLine(
      "TB",
      `${sourcePlayer.name}: 結核クラスター発生判定成功、しかし範囲内対象なし`
    );

    await showOkPopup(
      "結核クラスター",
      [
        `${sourcePlayer.name} の結核がクラスター化しかけた`,
        `しかし前後${RULE_V71.TB_RANGE}マス以内に生存者はいなかった`,
      ],
      "infect",
      "yellow"
    );

    return;
  }

  logLine(
    "TB",
    `${sourcePlayer.name}: 結核クラスター発生 / 対象=${targets.map((p) => p.name).join(", ")}`
  );

  await showOkPopup(
    "結核クラスター発生",
    [
      `${sourcePlayer.name} の結核がクラスター化`,
      `前後${RULE_V71.TB_RANGE}マス以内の生存者が巻き込まれます`,
      `対象：${targets.map((p) => p.name).join(", ")}`,
    ],
    "infect",
    "red"
  );

for (const target of targets) {
  if (tbForcedIsolationActive) {
    await doForcedTbTreatment(target);

    grantGreenPassBase(target, "結核", "公費強制収容");

    logLine(
      "TB",
      `${target.name}: 公費強制収容フラグにより治療拒否不可`
    );

    renderTable();
    continue;
  }

  if (target.isCPU) {
    await doTreatment(target);

    logLine(
      "CPU",
      `${target.name}: 結核クラスターを自動治療`
    );

    renderTable();
    continue;
  }

  // ここから下は今ある人間用モーダル
  await new Promise((resolve) => {
    const ins = CONFIG.INSURANCE[target.insurance];

    const extra = medicalCollapseActive
      ? CONFIG.MEDICAL_COLLAPSE.EXTRA_TREAT_PLAYER_PAY
      : 0;

    const playerPay = ins.treatPlayerPay + extra;
    const govPay = medicalPrivatized ? 0 : ins.treatGovPay;

    showModal(
      `結核クラスター：${target.name}`,
      `<div class="popMsg">
        <div class="popTitle">🫁 結核クラスター曝露</div>
        <div class="popLine"><b>${sourcePlayer.name}</b> から濃厚接触</div>
        <div class="popLine"><b>危険度：</b>${sev}</div>
        <div class="popLine"><b>保険：</b>${insuranceText(target.insurance)}</div>
        ${
          medicalCollapseActive
            ? `<div class="popLine"><b>医療崩壊：</b>自己負担 +${extra.toLocaleString()}</div>`
            : ""
        }
        <hr class="popHr"/>
        <div class="popLine">自己負担：<b>${playerPay.toLocaleString()}</b></div>
        <div class="popLine">政府負担：<b>${govPay.toLocaleString()}</b></div>
        <div class="small">治療CP：A +1 / B 0 / C -1</div>
      </div>`,
     [
  {
    text: "治療する",
    className: "btnPrimary",
    onClick: async () => {
      closeModal();

      await doTreatment(target);
      grantGreenPassBase(target, "結核", "結核クラスター治療");

      logLine("TB", `${target.name}: 結核クラスターを治療`);

      renderTable();
      resolve();
    },
  },
  {
    text: "治療しない",
    className: "btnDanger",
    onClick: () => {
      closeModal();

      target.untreated += sev;
      target.untreatedCount = (target.untreatedCount || 0) + 1;
      addCP(target, CONFIG.REFUSE_TREAT_CP, "（結核クラスター治療拒否）");

      tbForcedIsolationActive = true;

      logLine(
        "TB",
        `${target.name}: 結核クラスター治療拒否 → 公費強制収容フラグON`
      );

      logLine(
        "TB",
        `${target.name}: 結核クラスター未治療 +${sev}（合計 ${target.untreated}）`
      );

      renderTable();
      resolve();
    },
  },
]
);
});
  if (target.untreated >= CONFIG.UNTREATED_DEATH_THRESHOLD) {
    target.alive = false;
    target.diedMidgame = true;

    if (CONFIG.GHOST.ENABLE) {
      target.ghost = true;
      target.moneyFrozen = true;
    }

    logLine(
      "DEAD",
      `${target.name}: 結核クラスター後、未治療 ${target.untreated} で死亡`
    );

    await showOkPopup(
      "結核クラスターで死亡",
      [
        `${target.name} は未治療が ${target.untreated} に達した`,
        "死亡して幽霊モードになります",
      ],
      "infect",
      "red"
    );
  }
}

  renderTokens();
  renderTable();
} 

async function cpuResolveTreatmentDecision(p, disease, sev) {
  await doTreatment(p);

  grantGreenPassBase(p, disease, "完治");

  logLine(
    "CPU",
    `${p.name}: ${disease} を自動治療（危険度${sev}）`
  );

  renderTable();
}

async function resolveInfect(p) {
  if (p.alive && (p.infectShield115 || 0) > 0) {
    p.infectShield115 = Math.max(0, (p.infectShield115 || 0) - 1);
    logLine("115", `${p.name}: 115の医療現場優先で infect を1回無効化`);
    await showOkPopup(
      "115効果：感染無効",
      [`${p.name} は「次のinfect無効化」を消費して感染を回避した！`],
      "infect",
      "blue"
    );
    return;
  }

  const env = envOf(p.pos);
const tile = board[p.pos];

const d =
  tile?.fixedDiseaseData ||
  drawDiseaseForEnv(env);

const disease = d.疾病候補;
  const color = normalizeColor(d.分類);

  const baseSev = severityOfClass(d.分類);

let sev = baseSev;
sev = applyEbolaInfectPlus(sev);
sev = applyDeadInfectPlus(sev);
sev = applyV71Severity(sev);

  // ★ infectマスに止まった回数として先に数える
  p.infectLanded = (p.infectLanded || 0) + 1;

  if (sev >= 2) highSevInfectStreak += 1;
  else highSevInfectStreak = 0;

  // ワクチンで防げるならカウントを戻して終了
if (p.vaccinated && p.vaccinatedSet.has(disease)) {
  p.infectLanded = Math.max(0, (p.infectLanded || 0) - 1);

  recordDiseaseEncounter(disease, "ワクチンで回避");

  logLine("VAX", `${p.name}: ワクチンで ${disease} を防いだ`);
    await showOkPopup(
      "ワクチンで防いだ",
      [d.内容, `対象：<b>${disease}</b> → 100%回避`],
      "infect",
      "blue"
    );
    return;
  }

  // アイテム判定
  const usable = usableItemsForDisease(p, d);
  const useRes = await chooseAndUseItem(p, usable);

  if (useRes.used && useRes.success) {
    recordDiseaseEncounter(disease, "アイテムで回避");

    logLine("INFECT", `${p.name}: ${disease} をアイテムで防御成功`);
    await showOkPopup(
      "ギリ回避！",
      [
        d.内容,
        `アイテム <b>${useRes.item.name}</b>（成功率${useRes.rate}%）で回避！`,
      ],
      "infect",
      "blue"
    );
    renderTable();
    return;
  }

  // =========================
  // ここで「感染成立」
  // =========================
  infectionOccurredThisRound = true;
  recordDiseaseEncounter(disease, "感染成立");

  if (disease === "狂犬病") {
  await startRabiesTimer(p, "狂犬病感染");
}

await maybeWaterContamination(disease);
await maybeVectorCampaign(disease);

  logLine(
    "INFECT",
    `${p.name}: 感染成立【${disease}】危険度${sev}（base${baseSev}）`
  );
  logLine("INFECT", `  ${d.内容}`);

  const dangerStars =
  "★".repeat(sev) + "☆".repeat(Math.max(0, CONFIG.SEV_MAX - sev));

const infectPopupLines = [
  d.内容,
  `⚠️ 危険度 ${dangerStars}（${sev}）`,
  `☠️ 未治療合計${CONFIG.UNTREATED_DEATH_THRESHOLD}で死亡`
];

if (deadGhostCount() > 0) {
  infectPopupLines.push(`👻 死者の影響：危険度 +${CONFIG.GHOST.DEAD_INFECT_PLUS}`);
}

if (useRes.used) {
  infectPopupLines.push("🎒 アイテムを使ったが失敗");
}

if (medicalCollapseActive) {
  infectPopupLines.push(
    `🏥 医療崩壊中：自己負担 +${CONFIG.MEDICAL_COLLAPSE.EXTRA_TREAT_PLAYER_PAY.toLocaleString()}`
  );
}

await showOkPopup(
  `🦠 ${disease} 発生`,
  infectPopupLines,
  "infect",
  color
);

if (disease === "結核") {
  await resolveTbCluster(p, sev);
  return;
}

if (disease === "狂犬病") {
  await offerRabiesSpecialTreatment(p);
  return;
}

if (p.isCPU) {
  await cpuResolveTreatmentDecision(p, disease, sev);

  if (p.untreated >= CONFIG.UNTREATED_DEATH_THRESHOLD) {
    p.alive = false;
    p.diedMidgame = true;

    if (CONFIG.GHOST.ENABLE) {
      p.ghost = true;
      p.moneyFrozen = true;
    }

    logLine(
      "DEAD",
      `${p.name}: 未治療 ${p.untreated} で死亡（ghost=${p.ghost ? "ON" : "OFF"}）`
    );

    await showOkPopup(
      "アウト…（幽霊モード）",
      [
        `${p.name} は未治療が積み重なって倒れた…`,
        "ただし盤上には残る（サイコロ不可 / money凍結）",
        "以後：147（情報錯綜）で政治介入できる",
        `死者がいる間：infect危険度 +${CONFIG.GHOST.DEAD_INFECT_PLUS}（上限${CONFIG.SEV_MAX}）`,
      ],
      "infect",
      "red"
    );
  }

  return;
}

let refusedTreatment = false;

await new Promise((resolve) => {
  const ins = CONFIG.INSURANCE[p.insurance];

  const extra = medicalCollapseActive
    ? CONFIG.MEDICAL_COLLAPSE.EXTRA_TREAT_PLAYER_PAY
    : 0;

  const playerPay = ins.treatPlayerPay + extra;
  const govPay = medicalPrivatized ? 0 : ins.treatGovPay;

  showModal(
    "治療する？",
    `<div class="popMsg">
      <div class="popTitle">🧪 治療の選択</div>
      <div class="popLine"><b>病気：</b>${disease}</div>
      <div class="popLine"><b>危険度：</b>${sev}（未治療合計${CONFIG.UNTREATED_DEATH_THRESHOLD}で死亡）</div>
      <div class="popLine"><b>保険：</b>${insuranceText(p.insurance)}</div>
      ${
        medicalPrivatized
          ? `<div class="popLine"><b>医療民営化：</b>政府負担 0</div>`
          : ""
      }
      ${
        medicalCollapseActive
          ? `<div class="popLine"><b>医療崩壊：</b>自己負担 +${extra.toLocaleString()}</div>`
          : ""
      }
      <hr class="popHr"/>
      <div class="popLine">自己負担：<b>${playerPay.toLocaleString()}</b></div>
      <div class="popLine">政府負担：<b>${govPay.toLocaleString()}</b></div>
      <div class="small">治療CP：A +1 / B 0 / C -1</div>
    </div>`,
    [
      {
        text: "治療する",
        className: "btnPrimary",
        onClick: async () => {
          closeModal();

          await doTreatment(p);

grantGreenPassBase(p, disease, "完治");

          logLine("TREAT", `${p.name}: 治療済み（未治療増加なし）`);

          renderTable();
          resolve();
        },
      },
      {
        text: "治療しない",
        className: "btnDanger",
        onClick: () => {
  closeModal();

  refusedTreatment = true;

  p.untreated += sev;
  p.untreatedCount = (p.untreatedCount || 0) + 1;
  addCP(p, CONFIG.REFUSE_TREAT_CP, "（治療拒否）");
          if (disease === "結核") {
            tbForcedIsolationActive = true;

            logLine(
              "TB",
              `${p.name}: 結核を治療拒否 → 公費強制収容フラグON`
            );
          }

          logLine(
            "UNTREAT",
            `${p.name}: 未治療 +${sev}（合計 ${p.untreated}）`
          );

          renderTable();
          resolve();
        },
      },
    ]
  );
});

if (p.untreated >= CONFIG.UNTREATED_DEATH_THRESHOLD) {
  p.alive = false;
  p.diedMidgame = true;

  if (CONFIG.GHOST.ENABLE) {
    p.ghost = true;
    p.moneyFrozen = true;
  }

  logLine(
    "DEAD",
    `${p.name}: 未治療 ${p.untreated} で死亡（ghost=${p.ghost ? "ON" : "OFF"}）`
  );

  await showOkPopup(
    "アウト…（幽霊モード）",
    [
      `${p.name} は未治療が積み重なって倒れた…`,
      "ただし盤上には残る（サイコロ不可 / money凍結）",
      "以後：147（情報錯綜）で政治介入できる",
      `死者がいる間：infect危険度 +${CONFIG.GHOST.DEAD_INFECT_PLUS}（上限${CONFIG.SEV_MAX}）`,
    ],
    "infect",
    "red"
  );
}

} 

   /* =========================
     GOV resolve (35/75 insurance + invest, 115 special)
  ========================= */
  async function resolveInsuranceChange(p) {
    await new Promise((resolve) => {
      showModal(
        `中央政府（${p.pos}）：保険を変更する？`,
        `
          <div class="grid">
            <div class="radioLine">
              <label><input type="radio" name="ins" value="A" ${p.insurance === "A" ? "checked" : ""}/> ${CONFIG.INSURANCE.A.name}</label>
              <div class="desc">治療：自己負担 10,000 / 政府 0</div>
              <div class="desc">WORK：手取り 20,000 / 政府 +0 / CP -1</div>
              <div class="desc">治療CP：+1</div>
            </div>
            <div class="radioLine">
              <label><input type="radio" name="ins" value="B" ${p.insurance === "B" ? "checked" : ""}/> ${CONFIG.INSURANCE.B.name}</label>
              <div class="desc">治療：自己負担 5,000 / 政府 5,000</div>
              <div class="desc">WORK：手取り 12,000 / 政府 +8,000 / CP 0</div>
              <div class="desc">治療CP：0</div>
            </div>
            <div class="radioLine" style="grid-column:1 / span 2;">
              <label><input type="radio" name="ins" value="C" ${p.insurance === "C" ? "checked" : ""}/> ${CONFIG.INSURANCE.C.name}</label>
              <div class="desc">治療：自己負担 0 / 政府 10,000（基金マイナスでも払う）</div>
              <div class="desc">WORK：手取り 8,000 / 政府 +12,000 / CP +1</div>
              <div class="desc">治療CP：-1</div>
            </div>
          </div>
          <div class="small" style="padding-top:8px;">※35・75マスに止まった時だけ変更可能</div>
        `,
        [
          {
            text: "決定",
            className: "btnPrimary",
            onClick: () => {
              const sel = document.querySelector('input[name="ins"]:checked');
              const before = p.insurance;
              if (sel) p.insurance = sel.value;

              if (before !== p.insurance) {
                p.insuranceHistory = p.insuranceHistory || [];
                p.insuranceHistory.push({
                  from: before,
                  to: p.insurance,
                  atTile: p.pos,
                  round: roundCounter,
                });
              }

              closeModal();
              logLine("GOV", `${p.name}: 保険を ${insuranceText(p.insurance)} に設定`);
              renderTable();
              resolve();
            },
          },
        ]
      );
    });
  }

async function resolveInsuranceChangeCPU(p) {
  const before = p.insurance;
  const choices = ["A", "B", "C"];

  p.insurance = pick(choices);

  if (before !== p.insurance) {
    p.insuranceHistory = p.insuranceHistory || [];
    p.insuranceHistory.push({
      from: before,
      to: p.insurance,
      atTile: p.pos,
      round: roundCounter,
    });
  }

  logLine(
    "CPU",
    `${p.name}: 保険を自動変更 → ${insuranceText(p.insurance)}`
  );

  renderTable();
}

function investEffectsSummary(lv) {
  const lines = [];

  if (lv >= 2) {
    lines.push("世界Lv2以上：感染危険度 -1");
    lines.push("世界Lv2以上：アイテム成功率 +10%");
  } else {
    lines.push("世界Lv1：感染危険度補正なし");
    lines.push("世界Lv1：アイテム成功率補正なし");
  }

  if (lv >= 3) {
    lines.push("世界Lv3：最終TG +8");
  } else if (lv >= 2) {
    lines.push("世界Lv2：最終TG +1");
  } else {
    lines.push("世界Lv1：最終TG +0");
  }

  return lines;
}
 
async function resolveInvest(p, atTile) {
  const already =
    atTile === 35
      ? investedAt35.has(p.id)
      : investedAt75.has(p.id);

  if (already) {
    logLine("INVEST", `${p.name}: 既にこのマスで投資済み`);
    return;
  }

  const amounts = CONFIG.INVEST_AMOUNTS || [10000, 30000, 50000, 100000];

  const options = amounts
    .map((amt) => {
      const cp = CONFIG.INVEST_CP_BONUS?.[amt] ?? Math.floor(amt / 10000);
      const disabled = p.money < amt ? "disabled" : "";

      return `
        <option value="${amt}" ${disabled}>
          ${amt.toLocaleString()} HMN 投資 / CP +${cp}
          ${p.money < amt ? "（所持金不足）" : ""}
        </option>
      `;
    })
    .join("");

  await new Promise((resolve) => {
    showModal(
      `中央政府（${atTile}）：任意投資`,
      `
        <div class="popMsg">
          <div class="popTitle">🏛️ 政府投資</div>

          <div class="popLine">
            投資額を選んでください。
          </div>

          <div class="popLine">
            投資額は <b>所持金から減算</b> され、
            <b>同額がGovFund</b> と <b>個人Invest</b> に加算されます。
          </div>

          <div class="popLine">
            投資額に応じてCPが加算されます。
          </div>

          <hr class="popHr"/>

          <div class="popLine">
            現在の所持金：<b>${p.money.toLocaleString()} HMN</b>
          </div>

          <div class="popLine">
            現在のGovFund：<b>${govFund.toLocaleString()} HMN</b>
          </div>

          <div class="popLine">
            現在の個人Invest：<b>${(p.personalInvest || 0).toLocaleString()} HMN</b>
          </div>

          <hr class="popHr"/>

          <select id="investAmt">
            ${options}
          </select>
        </div>
      `,
      [
        {
          text: "投資する",
          className: "btnPrimary",
          onClick: async () => {
            const amt = Number(document.getElementById("investAmt")?.value || 0);

            closeModal();

            if (!amounts.includes(amt) || amt <= 0) {
              logLine("INVEST", `${p.name}: 不正な投資額`);
              resolve();
              return;
            }

            if (p.money < amt) {
              logLine("INVEST", `${p.name}: 所持金不足で投資できない`);
              await showOkPopup(
                "投資できません",
                [`${p.name} は所持金不足です。`],
                "gov",
                "yellow"
              );
              resolve();
              return;
            }

            p.money -= amt;

            govFund += amt;
            investTotal += amt;
            p.personalInvest = (p.personalInvest || 0) + amt;
            addGovContribution(p, amt);

            const cpBonus =
              CONFIG.INVEST_CP_BONUS?.[amt] ?? Math.floor(amt / 10000);

            if (cpBonus !== 0) {
              addCP(p, cpBonus, "（政府投資）");
            }

            if (atTile === 35) investedAt35.add(p.id);
            if (atTile === 75) investedAt75.add(p.id);

            logLine(
              "INVEST",
              `${p.name}: ${amt.toLocaleString()} HMN投資 / GovFund +${amt.toLocaleString()} / 個人Invest +${amt.toLocaleString()} / CP +${cpBonus}`
            );

            await showOkPopup(
              "投資完了",
              [
                `${p.name}: 投資 ${amt.toLocaleString()} HMN`,
                `GovFund +${amt.toLocaleString()} HMN`,
                `個人Invest +${amt.toLocaleString()} HMN`,
                `CP +${cpBonus}`,
                `現在のGovFund：${govFund.toLocaleString()} HMN`,
                `現在のWorld Lv：${currentWorldLv()}`,
              ],
              "gov",
              "blue"
            );

            renderTable();
            resolve();
          },
        },
        {
          text: "投資しない",
          onClick: () => {
            closeModal();

            if (atTile === 35) investedAt35.add(p.id);
            if (atTile === 75) investedAt75.add(p.id);

            logLine("INVEST", `${p.name}: 投資しない`);
            resolve();
          },
        },
      ]
    );
  });
}
 async function resolveEvent115Choice(p) {
  if (!CONFIG.EVENT115.ENABLE) return;
  if (!p.alive) return;

  if (!event115Activated) {
    event115Activated = true;
  }

  if (event115ChoicesDone.has(p.id)) {
    logLine("115", `${p.name}: 115（選択済み）`);
    return;
  }

  await new Promise((resolve) => {
    showModal(
      "【115】国際緊急会議：政策を選べ",
      `<div class="popMsg">
        <div class="popTitle">生存者ごとに1つ選択</div>
        <hr class="popHr"/>

        <div class="popLine">
          <b>① 個人救済</b><br>
          所持金 +25,000 HMN / GovFund +5,000 HMN
        </div>

        <div class="popLine">
          <b>② 公衆衛生強化</b><br>
          選択人数に応じて GovFund 加算<br>
          1人目 +80,000 / 2人目 +50,000 / 3人目 +30,000 / 4人目以降 +10,000<br>
          上限 合計 +160,000<br>
          全員 CP +1 / 2ターン感染危険度 -1
        </div>

        <div class="popLine">
          <b>③ 医療現場優先</b><br>
          次回感染判定を1回無効化 / 所持金 +10,000 HMN / CP +1
        </div>
      </div>`,
      [
        {
          text: "① 個人救済",
          className: "btnPrimary",
          onClick: async () => {
            closeModal();

            event115ChoicesDone.add(p.id);

            p.money += 25000;
            govFund += 5000;
            addGovContribution(p, 5000);

            logLine(
              "115",
              `${p.name}: 個人救済 / money+25000 / GovFund+5000`
            );

            await showOkPopup(
              "115：個人救済",
              [
                `${p.name}: 所持金 +25,000`,
                "GovFund +5,000",
              ],
              "event",
              "blue"
            );

            renderTable();
            resolve();
          },
        },

        {
          text: "② 公衆衛生強化",
          className: "btnPrimary",
          onClick: async () => {
            closeModal();

            event115ChoicesDone.add(p.id);

            if (typeof publicHealthPickCount === "undefined") {
              window.publicHealthPickCount = 0;
            }

            if (typeof publicHealthFundTotal === "undefined") {
              window.publicHealthFundTotal = 0;
            }

            const decay = [80000, 50000, 30000, 10000];
            const rawAdd = decay[Math.min(publicHealthPickCount, decay.length - 1)];

            const remain = Math.max(0, 160000 - publicHealthFundTotal);
            const add = Math.min(rawAdd, remain);

            publicHealthPickCount += 1;
            publicHealthFundTotal += add;

            govFund += add;
            addGovContribution(p, add);

            for (const q of players) {
              if (q.alive) {
                addCP(q, 1, "（115：公衆衛生強化）");
              }
            }

            publicHealthBuffTurns = 2;

            logLine(
              "115",
              `${p.name}: 公衆衛生強化 / GovFund+${add} / 全員CP+1 / 危険度-1を2ターン`
            );

            await showOkPopup(
              "115：公衆衛生強化",
              [
                `GovFund +${add.toLocaleString()}`,
                `公衆衛生加算累計 ${publicHealthFundTotal.toLocaleString()} / 160,000`,
                "全生存者 CP +1",
                "2ターンの間、感染危険度 -1",
              ],
              "event",
              "yellow"
            );

            renderTable();
            resolve();
          },
        },

        {
          text: "③ 医療現場優先",
          className: "btnPrimary",
          onClick: async () => {
            closeModal();

            event115ChoicesDone.add(p.id);

            p.infectShield115 = (p.infectShield115 || 0) + 1;
            p.money += 10000;
            addCP(p, 1, "（115：医療現場優先）");

            logLine(
              "115",
              `${p.name}: 医療現場優先 / shield+1 / money+10000 / CP+1`
            );

            await showOkPopup(
              "115：医療現場優先",
              [
                "次回感染判定を1回無効化",
                `${p.name}: 所持金 +10,000`,
                `${p.name}: CP +1`,
              ],
              "event",
              "yellow"
            );

            renderTable();
            resolve();
          },
        },
      ]
    );
  });
}

async function resolveEvent115All(triggerPlayer) {
  if (!CONFIG.EVENT115.ENABLE) return;

  if (event115Activated) {
    logLine("115", `${triggerPlayer.name}: 115はすでに発動済み`);
    return;
  }

  event115Activated = true;

  // ルールブック準拠：生存者全員を115に集合
  for (const p of players) {
    if (p.alive && p.pos < 115) {
      p.pos = 115;
    }
  }

  renderTokens();
  renderTable();
  renderTurn();

  await showOkPopup(
    "【115】国際緊急会議",
    [
      `${triggerPlayer.name} が115に到達`,
      "生存者全員が115に集合し、政策を1つずつ選択します。",
    ],
    "event",
    "yellow"
  );

  for (const p of players) {
    if (!p.alive) continue;

    if (event115ChoicesDone.has(p.id)) {
      continue;
    }

    if (p.isCPU) {
      await resolveEvent115ChoiceCPU(p);
    } else {
      await resolveEvent115Choice(p);
    }
  }

  renderTokens();
  renderTable();
  renderTurn();

  logLine("115", "国際緊急会議：全生存者の政策選択が完了");
}

  async function resolveGov(p) {
  const pos = p.pos;

  if (p.isCPU) {
    await resolveGovCPU(p, pos);
    return;
  }

  if (pos === 35) {
    await resolveInsuranceChange(p);
    await resolveInvest(p, 35);
    return;
  }

  if (pos === 75) {
    await resolveInsuranceChange(p);
    await resolveInvest(p, 75);
    return;
  }

  if (pos === 100) {
    await resolveGreenPass100(p);
    return;
  }

  if (pos === 115) {
    await resolveEvent115All(p);
    return;
  }
}

async function resolveGovCPU(p, pos) {
  if (pos === 35) {
    await resolveInsuranceChangeCPU(p);
    await resolveInvestCPU(p, 35);
    return;
  }

  if (pos === 75) {
    await resolveInsuranceChangeCPU(p);
    await resolveInvestCPU(p, 75);
    return;
  }

  if (pos === 100) {
    await resolveGreenPass100CPU(p);
    return;
  }

  if (pos === 115) {
    await resolveEvent115All(p);
    return;
  }
}

async function resolveInvestCPU(p, atTile) {
  const already =
    atTile === 35
      ? investedAt35.has(p.id)
      : investedAt75.has(p.id);

  if (already) {
    logLine("CPU", `${p.name}: ${atTile}マス投資は既に処理済み`);
    return;
  }

  if (atTile === 35) investedAt35.add(p.id);
  if (atTile === 75) investedAt75.add(p.id);

  logLine("CPU", `${p.name}: ${atTile}マス投資は自動スキップ`);
  renderTable();
}

async function resolveGreenPass100CPU(p) {
  if (!p.alive) return;

  if (p.hasPass) {
    logLine("CPU", `${p.name}: すでにGreen Pass所持`);
    return;
  }

  if (p.gpBase) {
    forcePay(p, RULE_V71.GREEN_PASS_FEE, "Green Pass正規取得");
    p.hasPass = true;

    logLine("CPU", `${p.name}: GP権利あり → Green Pass自動取得`);
    renderTable();
    return;
  }

  if (p.money >= RULE_V71.GREEN_PASS_BRIBE && rand01() < 0.15) {
    forcePay(p, RULE_V71.GREEN_PASS_BRIBE, "Green Pass賄賂");
    p.hasPass = true;

    logLine("CPU", `${p.name}: GP権利なし → 15%判定で賄賂取得`);
    renderTable();
    return;
  }

  p.passlessCharge = true;
  logLine("CPU", `${p.name}: GP権利なし → パスなし特攻`);
  renderTable();
}

async function resolveEvent115ChoiceCPU(p) {
  if (!CONFIG.EVENT115.ENABLE) return;
  if (!p.alive) return;

  event115Activated = true;

  if (event115ChoicesDone.has(p.id)) {
    logLine("CPU", `${p.name}: 115政策は選択済み`);
    return;
  }

  event115ChoicesDone.add(p.id);

  const choice = randInt(0, 2);

  if (choice === 0) {
    p.money += 25000;
    govFund += 5000;
    addGovContribution(p, 5000);

    logLine(
      "CPU",
      `${p.name}: 115政策 自動選択 → 個人救済（所持金+25,000 / GovFund+5,000）`
    );
  }

  if (choice === 1) {
    publicHealthPickCount += 1;

    const decay = [80000, 50000, 30000, 10000];
    let add = decay[Math.min(publicHealthPickCount - 1, decay.length - 1)];

    const remain = Math.max(0, 160000 - publicHealthFundTotal);
    add = Math.min(add, remain);

    publicHealthFundTotal += add;
    govFund += add;
    addGovContribution(p, add);

    for (const q of players) {
      if (q.alive) {
        addCP(q, 1, "（115：公衆衛生強化）");
      }
    }

    publicHealthBuffTurns = 2;

    logLine(
      "CPU",
      `${p.name}: 115政策 自動選択 → 公衆衛生強化（GovFund+${add.toLocaleString()} / 全員CP+1 / 危険度-1）`
    );
  }

  if (choice === 2) {
    p.infectShield115 = (p.infectShield115 || 0) + 1;
    p.money += 10000;
    addCP(p, 1, "（115：医療現場優先）");

    logLine(
      "CPU",
      `${p.name}: 115政策 自動選択 → 医療現場優先（shield+1 / 所持金+10,000 / CP+1）`
    );
  }

  renderTable();
}

async function resolveGreenPass100(p) {

  if (!p.alive) return;

  if (p.hasPass) {

    await showOkPopup(
      "100：抗体検問",
      [`${p.name} は既にGreen Passを所持している`],
      "event",
      "blue"
    );

    return;
  }

  // 権利あり
  if (p.gpBase) {

    await new Promise((resolve) => {

      showModal(
        "100：抗体検問",
        `<div class="popMsg">
          <div class="popTitle">${p.name} はGP権利あり</div>
          <div class="popLine">
            理由：${p.gpSource || "免疫保持"}
          </div>
          <div class="popLine">
            正規取得費：${RULE_V71.GREEN_PASS_FEE.toLocaleString()} HMN
          </div>
        </div>`,
        [
          {
            text: "正規取得する",
            className: "btnPrimary",

            onClick: () => {

              closeModal();

              forcePay(
                p,
                RULE_V71.GREEN_PASS_FEE,
                "Green Pass取得"
              );

              p.hasPass = true;

              logLine(
                "GP",
                `${p.name}: Green Pass正規取得`
              );

              renderTable();

              resolve();
            },
          },
        ]
      );
    });

    return;
  }

  // 権利なし
  await new Promise((resolve) => {

    showModal(
      "100：抗体検問",
      `<div class="popMsg">
        <div class="popTitle">
          ${p.name} はGP権利なし
        </div>

        <div class="popLine">
          A：賄賂で取得
          (${RULE_V71.GREEN_PASS_BRIBE.toLocaleString()} HMN)
        </div>

        <div class="popLine">
          B：パスなし特攻
        </div>
      </div>`,
      [
        {
          text: "賄賂で取得",
          className: "btnPrimary",

          onClick: () => {

            closeModal();

            forcePay(
              p,
              RULE_V71.GREEN_PASS_BRIBE,
              "Green Pass賄賂"
            );

            p.hasPass = true;

            logLine(
              "GP",
              `${p.name}: 賄賂でGreen Pass取得`
            );

            renderTable();

            resolve();
          },
        },

        {
          text: "パスなし特攻",
          className: "btnDanger",

          onClick: () => {

            closeModal();

            p.passlessCharge = true;

            logLine(
              "GP",
              `${p.name}: パスなし特攻`
            );

            renderTable();

            resolve();
          },
        },
      ]
    );
  });
}
  /* =========================
     Endgame helpers
  ========================= */
  function getRankOrderByMoneyThenCP() {
    const arr = players.slice();
    arr.sort((a, b) => {
      if (a.alive !== b.alive) return (b.alive ? 1 : 0) - (a.alive ? 1 : 0);
      if (b.money !== a.money) return b.money - a.money;
      if (b.cp !== a.cp) return b.cp - a.cp;
      return b.pos - a.pos;
    });
    return arr.map((p) => p.id);
  }

async function showFinalStoryOnce(step) {
  if (finalStoryShown.has(step)) return;
  finalStoryShown.add(step);

  const stories = {
    143: {
      title: "143：未知の感染症発生",
      lines: [
        "世界各地で原因不明の肺炎患者が報告され始めた。",
        "SNSでは様々な噂が飛び交い、社会に不穏な空気が広がっている。",
        "まだ多くの人は、この異変の大きさに気づいていない。"
      ],
      tone: "yellow"
    },

    144: {
      title: "144：感染爆発・ロックダウン",
      lines: [
        "未知の感染症は急速に拡大した。",
        "都市は封鎖され、人々は外出を控えるよう求められる。",
        "経済活動は停止し、社会全体に大きな影響が及ぶ。"
      ],
      tone: "yellow"
    },

    145: {
      title: "145：Zetaウイルス最終防衛戦",
      lines: [
        "未知の病原体は『Zetaウイルス』と命名された。",
        "これまでに集めたGreen Passとアイテムを使い、感染拡大を食い止める。",
        "防衛に失敗すると大きな代償を払うことになる。"
      ],
      tone: "blue"
    },

    146: {
      title: "146：緊急承認",
      lines: [
        "新たなワクチンと治療薬が異例の速さで完成した。",
        "まだ未知の部分も残るが、人類は希望を託す。",
        "治験に参加するかどうか、その決断が求められる。"
      ],
      tone: "yellow"
    },

    147: {
      title: "147：インフォデミック",
      lines: [
        "感染症だけでなく、情報もまた社会を混乱させている。",
        "SNSには真実とデマが入り乱れ、人々は何を信じるべきか分からなくなる。"
      ],
      tone: "yellow"
    },

    148: {
      title: "148：社会からの評価",
      lines: [
        "パンデミックの中で積み重ねた行動が評価される。",
        "あなたは社会にどんな影響を残したのだろうか。"
      ],
      tone: "blue"
    },

    149: {
      title: "149：最終判定",
      lines: [
        "パンデミックは終息へ向かっている。",
        "これまでの全ての選択がTGとなり、運命を決定する。"
      ],
      tone: "red"
    }
  };

  const s = stories[step];
  if (!s) return;

  await showOkPopup(
    s.title,
    s.lines,
    "event",
    s.tone
  );
}

async function snapshotRankAt143() {
  const order = getRankOrderByMoneyThenCP();
  rankSnapshotAt143 = { order };

  const lines = order.map((id, i) => {
    const p = players[id];
    return `${i + 1}位: ${p.name}（money=${p.money.toLocaleString()} / CP=${p.cp}）`;
  });

  await showOkPopup(
    "【143】順位スナップショット（確定）",
    [
      "143到達時点の順位を記録します。",
      ...lines,
    ],
    "event",
    "yellow"
  );

  logLine("143", `順位確定: ${lines.join(" / ")}`);
}

async function startFinalPhaseAt143() {
  if (finalPhaseStarted) return;

  finalPhaseStarted = true;
  phase2Active = true;
  phase2Step = 143;

  for (const p of players) {
    if (p.alive || (CONFIG.GHOST.ENABLE && p.ghost)) {
      if (p.pos < 143) {
        p.pos = 143;
      }
    }
  }

  renderTokens();
  renderTable();
  renderTurn();

  logLine(
    "FINAL",
    "143到達：フェーズ2開始（通常サイコロ停止 / 生存者は143に集合）"
  );
await showFinalStoryOnce(143);

  if (!rankSnapshotAt143) {
    await snapshotRankAt143();
  }
}

async function resolveLockdown144(p) {
  await showFinalStoryOnce(144);

  const pct = RULE_V71.LOCKDOWN_RATE;
  const loss = Math.floor(p.money * pct);

  p.money -= loss;

  logLine(
    "144",
    `${p.name}: ロックダウン -${Math.floor(pct * 100)}%（-${loss.toLocaleString()}）`
  );

  await showOkPopup(
    "144：ロックダウン",
    [
      `${p.name}: 所持金 -${Math.floor(pct * 100)}%`,
      `没収額：-${loss.toLocaleString()} HMN`,
    ],
    "event",
    "yellow"
  );

  renderTable();
}

  function countHeldItems(p) {
  return Object.values(p.items || {}).reduce((sum, n) => {
    return sum + Math.max(0, Number(n) || 0);
  }, 0);
}

async function resolveCollapse145(p) {
  await showFinalStoryOnce(145);

  if (!p.alive) return;

  const itemCount = countHeldItems(p);

  const baseRate = p.hasPass
    ? RULE_V71.ZETA_GP_RATE
    : RULE_V71.ZETA_NO_GP_RATE;

  const itemBonus = itemCount * RULE_V71.ZETA_ITEM_BONUS;

  const successRate = Math.min(100, baseRate + itemBonus);

  const roll = randInt(1, 100);
  const success = roll <= successRate;

  logLine(
    "145",
    `${p.name}: Zeta防衛戦 / GP=${p.hasPass ? "あり" : "なし"} / item=${itemCount} / 成功率${successRate}% / 出目${roll} / ${success ? "成功" : "失敗"}`
  );

  if (success) {
    await showOkPopup(
      "145：Zeta最終防衛戦 成功",
      [
        `${p.name} はZeta防衛戦を突破した`,
        `Green Pass：${p.hasPass ? "あり" : "なし"}`,
        `所持アイテム数：${itemCount}`,
        `成功率：${successRate}%`,
        `出目：${roll}`,
      ],
      "event",
      "blue"
    );

    renderTable();
    return;
  }

  forcePay(
    p,
    RULE_V71.ZETA_FAIL_COST,
    "Zeta防衛戦失敗ペナルティ"
  );

  await showOkPopup(
    "145：Zeta最終防衛戦 失敗",
    [
      `${p.name} はZeta防衛戦に失敗した`,
      `Green Pass：${p.hasPass ? "あり" : "なし"}`,
      `所持アイテム数：${itemCount}`,
      `成功率：${successRate}%`,
      `出目：${roll}`,
      `ペナルティ：所持金 -${RULE_V71.ZETA_FAIL_COST.toLocaleString()} HMN`,
    ],
    "event",
    "red"
  );

  renderTable();
}
 
async function resolveTrial146(p) {
  await showFinalStoryOnce(146);

  if (!p.alive) return;

  logLine("146", `${p.name}: 治験 - 同調圧力`);

if (p.isCPU) {
  p.trialJoined = true;

  const roll = randInt(1, 100);
  const success = roll <= CONFIG.TRIAL.SUCCESS_RATE;

  if (success) {
    p.trialSuccess = true;

    addCP(
      p,
      CONFIG.TRIAL.CP_SUCCESS,
      "（146：CPU治験成功）"
    );

    logLine(
      "CPU",
      `${p.name}: 146治験に自動参加 → 成功 / 出目${roll} / CP +${CONFIG.TRIAL.CP_SUCCESS}`
    );
  } else {
    p.trialSuccess = false;

    p.untreated += CONFIG.TRIAL.FAIL_UNTREATED;
    p.untreatedCount = (p.untreatedCount || 0) + 1;

    logLine(
      "CPU",
      `${p.name}: 146治験に自動参加 → 失敗 / 出目${roll} / 未治療 +${CONFIG.TRIAL.FAIL_UNTREATED}`
    );

    if (p.untreated >= CONFIG.UNTREATED_DEATH_THRESHOLD) {
      p.alive = false;
      p.diedMidgame = true;

      if (CONFIG.GHOST.ENABLE) {
        p.ghost = true;
        p.moneyFrozen = true;
      }

      logLine(
        "DEAD",
        `${p.name}: CPU治験副作用により未治療 ${p.untreated} で死亡`
      );
    }
  }

  renderTokens();
  renderTable();
  return;
}

  await new Promise((resolve) => {
    showModal(
      `【146】${p.name}：治験に参加する？`,
      `<div class="popMsg">
        <div class="popTitle">🧪 治験 - 同調圧力</div>

        <div class="popLine">
          参加すると成功率 <b>${CONFIG.TRIAL.SUCCESS_RATE}%</b> で判定。
        </div>

        <hr class="popHr"/>

        <div class="popLine">
          <b>参加して成功：</b> CP +${CONFIG.TRIAL.CP_SUCCESS}
        </div>

        <div class="popLine">
          <b>参加して失敗：</b> 未治療 +${CONFIG.TRIAL.FAIL_UNTREATED}
        </div>

        <div class="popLine">
          <b>拒否：</b> CP ${CONFIG.TRIAL.REFUSE_CP}
        </div>
      </div>`,
      [
        {
          text: "参加する",
          className: "btnPrimary",
          onClick: async () => {
            closeModal();

            p.trialJoined = true;

            const roll = randInt(1, 100);
            const success = roll <= CONFIG.TRIAL.SUCCESS_RATE;

            if (success) {
              p.trialSuccess = true;

              addCP(
                p,
                CONFIG.TRIAL.CP_SUCCESS,
                "（146：治験成功）"
              );

              logLine(
                "146",
                `${p.name}: 治験成功 / 出目${roll} / CP +${CONFIG.TRIAL.CP_SUCCESS}`
              );

              await showOkPopup(
                "治験成功",
                [
                  `${p.name} は治験に成功した`,
                  `出目：${roll}`,
                  `CP +${CONFIG.TRIAL.CP_SUCCESS}`,
                ],
                "event",
                "blue"
              );
            } else {
              p.trialSuccess = false;

              p.untreated += CONFIG.TRIAL.FAIL_UNTREATED;
              p.untreatedCount = (p.untreatedCount || 0) + 1;

              logLine(
                "146",
                `${p.name}: 治験失敗 / 出目${roll} / 未治療 +${CONFIG.TRIAL.FAIL_UNTREATED}`
              );

              await showOkPopup(
                "治験失敗",
                [
                  `${p.name} は副作用を受けた`,
                  `出目：${roll}`,
                  `未治療 +${CONFIG.TRIAL.FAIL_UNTREATED}`,
                  `現在の未治療：${p.untreated}`,
                ],
                "event",
                "yellow"
              );

              if (p.untreated >= CONFIG.UNTREATED_DEATH_THRESHOLD) {
                p.alive = false;
                p.diedMidgame = true;

                if (CONFIG.GHOST.ENABLE) {
                  p.ghost = true;
                  p.moneyFrozen = true;
                }

                logLine(
                  "DEAD",
                  `${p.name}: 治験副作用により未治療 ${p.untreated} で死亡`
                );

                await showOkPopup(
                  "治験副作用で死亡",
                  [
                    `${p.name} は未治療が ${p.untreated} に達した`,
                    "死亡して幽霊モードになります",
                  ],
                  "event",
                  "red"
                );
              }
            }

            renderTokens();
            renderTable();
            resolve();
          },
        },
        {
          text: "拒否する",
          className: "btnDanger",
          onClick: async () => {
            closeModal();

            p.trialJoined = false;
            p.trialSuccess = false;

            addCP(
              p,
              CONFIG.TRIAL.REFUSE_CP,
              "（146：治験拒否）"
            );

            logLine(
              "146",
              `${p.name}: 治験拒否 / CP ${CONFIG.TRIAL.REFUSE_CP}`
            );

            await showOkPopup(
              "治験拒否",
              [
                `${p.name} は治験を拒否した`,
                `CP ${CONFIG.TRIAL.REFUSE_CP}`,
              ],
              "event",
              "yellow"
            );

            renderTable();
            resolve();
          },
        },
      ]
    );
  });
}

 async function ghostInterveneAt147() {
  if (!CONFIG.GHOST.ENABLE || !CONFIG.GHOST.ENABLE_ON_147) return;

  const ghosts = players.filter((x) => !x.alive && x.ghost);
  if (!ghosts.length) return;

  const aliveTargets = players.filter((x) => x.alive);
  if (!aliveTargets.length) return;

  for (const g of ghosts) {
    // CPU幽霊は自動介入
    if (g.isCPU) {
      const action = randInt(0, 2);

      if (action === 0 && aliveTargets.length > 0) {
        const t = pick(aliveTargets);

        addCP(t, -1, `（👻${g.name}のCPU介入）`);
        logLine("CPU", `${g.name}: 幽霊介入 → ${t.name} のCP -1`);
      } else if (action === 1) {
        addCP(g, +1, "（👻CPU幽霊自己強化）");
        logLine("CPU", `${g.name}: 幽霊介入 → 自分のCP +1`);
      } else {
        logLine("CPU", `${g.name}: 幽霊介入なし`);
      }

      renderTable();
      continue;
    }

    // 人間幽霊は従来通り選択
    await new Promise((resolve) => {
      const opts = aliveTargets
        .filter((t) => t.id !== g.id)
        .map((t) => `<option value="${t.id}">${t.name}（CP=${t.cp} / money=${t.money}）</option>`)
        .join("");

      showModal(
        `👻 ${g.name}：147に介入する？`,
        `<div class="popMsg">
          <div class="popTitle">👻 幽霊の政治介入（情報錯綜）</div>
          <div class="popLine">死者はサイコロを振れない代わりに、ここで世界に干渉できる。</div>
          <hr class="popHr"/>
          <div class="popLine">① 生存者のCPを <b>-1</b></div>
          <div class="popLine">② 自分のCPを <b>+1</b></div>
          <hr class="popHr"/>
          <div class="small">①の対象</div>
          <select id="ghostTarget_${g.id}">${opts}</select>
        </div>`,
        [
          {
            text: "生存者CP -1",
            className: "btnDanger",
            onClick: async () => {
              const id = Number(document.getElementById(`ghostTarget_${g.id}`)?.value);
              const t = players[id];

              closeModal();

              if (t && t.alive) {
                addCP(t, -1, `（👻${g.name}の介入）`);
                logLine("GHOST147", `${g.name} -> ${t.name}: CP -1`);
                renderTable();

                await showOkPopup(
                  "👻 介入成功",
                  [`${t.name} のCPを -1 した`],
                  "event",
                  "red"
                );
              }

              resolve();
            },
          },
          {
            text: "自分CP +1",
            className: "btnPrimary",
            onClick: async () => {
              closeModal();

              addCP(g, +1, "（👻幽霊介入）");
              logLine("GHOST147", `${g.name}: CP +1`);
              renderTable();

              await showOkPopup(
                "👻 自己強化",
                [`${g.name} のCPを +1 した`],
                "event",
                "blue"
              );

              resolve();
            },
          },
          {
            text: "今回は介入しない",
            onClick: () => {
              closeModal();
              logLine("GHOST147", `${g.name}: 介入しない`);
              resolve();
            },
          },
        ]
      );
    });
  }
}

async function resolveChaos147(p) {
  await showFinalStoryOnce(147);

  const order = getRankOrderByMoneyThenCP();
  const rank = order.indexOf(p.id) + 1;

  let tier = "middle";

  if (playerCount === 1) {
    tier = "middle";
  } else if (playerCount === 2) {
    tier = rank === 1 ? "upper" : "lower";
  } else if (playerCount === 3) {
    tier = rank === 1 ? "upper" : rank === 2 ? "middle" : "lower";
  } else if (playerCount === 4) {
    tier = rank === 1 ? "upper" : rank === 4 ? "lower" : "middle";
  } else {
    tier = rank === 1 ? "upper" : rank >= 4 ? "lower" : "middle";
  }

  logLine("147", `${p.name}: 情報錯綜（tier=${tier}）`);

  if (tier === "upper") {
    logLine("147", `${p.name}: 上位通過 → ノーダメージ`);

    if (!p.isCPU) {
      await showOkPopup(
        "情報錯綜",
        ["上位は冷静。ノーダメで通過。"],
        "event",
        "blue"
      );
    }

    await ghostInterveneAt147();
    return;
  }

  if (tier === "middle") {
    setMsg(`${p.name}（中位）情報錯綜判定…`);

    const d = await rollDiceAnimated();
    await sleep(80);

    let delta = 0;
    if (d <= 2) delta = 1;
    else if (d <= 4) delta = 0;
    else delta = -1;

    if (delta !== 0) {
      addCP(p, delta, "（情報錯綜：中位）");
    }

    renderTable();

    if (!p.isCPU) {
      await showOkPopup(
        "情報錯綜（中位）",
        [`出目${d} → CP ${delta >= 0 ? "+" : ""}${delta}`],
        "event",
        delta >= 0 ? "blue" : "yellow"
      );
    } else {
      logLine(
        "CPU",
        `${p.name}: 147中位 自動判定 → 出目${d} / CP ${delta >= 0 ? "+" : ""}${delta}`
      );
    }

    await ghostInterveneAt147();
    return;
  }

  // 下位：CPUは自動選択
  if (p.isCPU) {
    const candidates = players.filter((x) => x.alive && x.id !== p.id);

    if (candidates.length > 0 && rand01() < 0.5) {
      const target = pick(candidates);

      addCP(target, -1, `（情報錯綜：${p.name}のCPU操作）`);

      logLine(
        "CPU",
        `${p.name}: 147下位 自動選択 → ${target.name} のCP -1`
      );
    } else {
      addCP(p, 1, "（情報錯綜：CPU下位自己強化）");

      logLine(
        "CPU",
        `${p.name}: 147下位 自動選択 → 自分のCP +1`
      );
    }

    renderTable();
    await ghostInterveneAt147();
    return;
  }

  // 下位：人間は従来通り選択
  await new Promise((resolve) => {
    const candidates = players.filter((x) => x.alive && x.id !== p.id);
    const opts = candidates
      .map((x) => `<option value="${x.id}">${x.name}（CP=${x.cp}）</option>`)
      .join("");

    showModal(
      `【147】${p.name}（下位）：情報錯綜の選択`,
      `<div class="popMsg">
        <div class="popTitle">🎭 情報錯綜（下位）</div>
        <div class="popLine">① 他人のCPを <b>-1</b></div>
        <div class="popLine">② 自分のCPを <b>+1</b></div>
        <hr class="popHr"/>
        <div class="small">①を選ぶ場合：対象</div>
        <select id="chaosTarget">${opts}</select>
      </div>`,
      [
        {
          text: "他人のCP -1",
          className: "btnDanger",
          onClick: async () => {
            const id = Number(document.getElementById("chaosTarget")?.value);
            const t = players[id];

            closeModal();

            if (t && t.alive) {
              addCP(t, -1, `（情報錯綜：${p.name}の操作）`);
            } else {
              addCP(p, 1, "（情報錯綜：対象不在の自己強化）");
            }

            renderTable();

            await showOkPopup(
              "情報操作",
              ["ターゲットに陰謀が刺さった。"],
              "event",
              "red"
            );

            resolve();
          },
        },
        {
          text: "自分のCP +1",
          className: "btnPrimary",
          onClick: async () => {
            closeModal();

            addCP(p, 1, "（情報錯綜：下位）");
            renderTable();

            await showOkPopup(
              "自己強化",
              ["自分のCPを底上げ！ +1"],
              "event",
              "blue"
            );

            resolve();
          },
        },
      ]
    );
  });

  await ghostInterveneAt147();
}

  function getAlivePlayersForSocialEval() {
    return players.filter((p) => p.alive);
  }

  function shouldTriggerSocialEval148() {
    if (socialEvalTriggered) return false;
    const alive = getAlivePlayersForSocialEval();
    if (!alive.length) return false;
    return alive.every((p) => p.pos >= 148);
  }

  function topPlayersBy(selector) {
    const alive = getAlivePlayersForSocialEval();
    if (!alive.length) return [];

    let best = -Infinity;
    for (const p of alive) {
      const v = selector(p);
      if (v > best) best = v;
    }
    return alive.filter((p) => selector(p) === best);
  }

  async function resolveSocialEval148() {
  await showFinalStoryOnce(148);

  if (socialEvalTriggered) return;
    if (!shouldTriggerSocialEval148()) return;

    const alive = getAlivePlayersForSocialEval();
    if (!alive.length) return;

    const cpWinners = topPlayersBy((p) => p.cp);
    const moneyWinners = topPlayersBy((p) => p.money);
    const fundWinners = topPlayersBy((p) => p.govFundContribution || 0);

    const categoriesMap = new Map();
    for (const p of alive) categoriesMap.set(p.id, []);

    for (const p of cpWinners) categoriesMap.get(p.id).push("医療英雄");
    for (const p of moneyWinners) categoriesMap.get(p.id).push("経済貢献");
    for (const p of fundWinners) categoriesMap.get(p.id).push("社会貢献");

    for (const p of alive) {
      const allCats = categoriesMap.get(p.id) || [];
      const applied = allCats.slice(0, CONFIG.SOCIAL_EVAL.MAX_CATEGORIES_PER_PLAYER);
      p.socialEvalCategories = applied;
      p.socialEvalBonus = applied.length * CONFIG.SOCIAL_EVAL.BONUS_PER_CATEGORY;
      logLine(
        "148",
        `${p.name}: categories=${allCats.join(",") || "なし"} / 適用=${applied.join(",") || "なし"} / bonus=+${p.socialEvalBonus}`
      );
    }

    socialEvalTriggered = true;

    const cpText = cpWinners.map((p) => p.name).join(", ");
    const moneyText = moneyWinners.map((p) => p.name).join(", ");
    const fundText = fundWinners.map((p) => p.name).join(", ");

    await showOkPopup(
      "148 社会評価 一括実行",
      [
        `医療英雄（最終CPトップ）：<b>${cpText || "なし"}</b>`,
        `経済貢献（最終所持金トップ）：<b>${moneyText || "なし"}</b>`,
        `社会貢献（基金貢献トップ）：<b>${fundText || "なし"}</b>`,
        `※ 1人が得られるのは最大${CONFIG.SOCIAL_EVAL.MAX_CATEGORIES_PER_PLAYER}種類、最大 +${CONFIG.SOCIAL_EVAL.MAX_CATEGORIES_PER_PLAYER * CONFIG.SOCIAL_EVAL.BONUS_PER_CATEGORY}`,
      ],
      "event",
      "yellow"
    );

    renderTable();
  }

  async function resolveOmen148() {
    if (shouldTriggerSocialEval148()) {
      await resolveSocialEval148();
      await showOkPopup(
        "前兆",
        ["社会評価が確定した。次は 149：全員集合でTG判定"],
        "event",
        "yellow"
      );
    } else {
      await showOkPopup(
        "前兆",
        ["まだ全生存プレイヤーが148以上に到達していない。149で待機になる可能性あり。"],
        "event",
        "yellow"
      );
    }
  }

  function clamp(n, lo, hi) {
    return Math.max(lo, Math.min(hi, n));
  }

function calcTG(p) {
  const T = CONFIG.TG_FINAL;

  const cpPoint = p.cp * T.CP_WEIGHT;
  const investPoint = Math.floor((p.personalInvest || 0) / T.INVEST_PERSONAL_DIV);
  const untreatedPenalty = (p.untreated || 0) * T.UNTREATED_PENALTY;
  const worldBonus = worldInvestTGBonus();

  const tg =
    cpPoint +
    investPoint -
    untreatedPenalty +
    worldBonus;

  return tg;
}

  function outcomeByTG(tg) {
    const T = CONFIG.TG_FINAL;
    if (tg >= T.TH_ASYMPTOMATIC) return "asymptomatic";
    if (tg >= T.TH_SEQUELAE) return "sequelae";
    return "death";
  }

  function applyFinalMoneyPenalty(p, outcome) {
    if (outcome === "asymptomatic") return { pct: 0, loss: 0 };
    if (outcome === "sequelae") {
      const loss = Math.floor(p.money * (CONFIG.FINAL_MONEY.SEQUELAE_PCT / 100));
      p.money -= loss;
      return { pct: CONFIG.FINAL_MONEY.SEQUELAE_PCT, loss };
    }
    const loss = Math.floor(p.money * (CONFIG.FINAL_MONEY.DEATH_PCT / 100));
    p.money -= loss;
    p.alive = false;
    return { pct: CONFIG.FINAL_MONEY.DEATH_PCT, loss };
  }

  async function resolvePandemicIfReady() {
    if (pandemicResolved) return;

    if (!socialEvalTriggered) {
      if (shouldTriggerSocialEval148()) {
        await resolveSocialEval148();
      } else {
        setMsg("149にいても、148社会評価がまだなら待機！");
        return;
      }
    }

    const alivePlayers = players.filter((p) => p.alive);
    const allAt149 = alivePlayers.length > 0 && alivePlayers.every((p) => p.pos === 149);
    if (!allAt149) {
      setMsg("149に全生存プレイヤー集合するとTG判定！");
      return;
    }

    pandemicResolved = true;
await showFinalStoryOnce(149);
logLine("149", "全員集合 → TG判定開始（ダイスなし）");

    const T = CONFIG.TG_FINAL;

    await showOkPopup(
      "パンデミック最終判定",
      [
        "ここはダイスではなく TG（治療グレード）で決まる。",
        `TG ≥ ${T.TH_ASYMPTOMATIC}：無症状生存（所持金変動なし）`,
        `TG ${T.TH_SEQUELAE}〜${T.TH_ASYMPTOMATIC - 1}：後遺症（所持金 -${CONFIG.FINAL_MONEY.SEQUELAE_PCT}%）`,
        `TG ≤ ${T.TH_SEQUELAE - 1}：死亡（所持金 -${CONFIG.FINAL_MONEY.DEATH_PCT}%）`,
        "順位：生存状態 → 所持金 → TG",
      ],
      "pandemic",
      "red"
    );

    for (const p of alivePlayers) {
      const tg = calcTG(p);
      p.finalTG = tg;
      const out = outcomeByTG(tg);
      p.finalOutcome = out;

const cpPoint = p.cp * T.CP_WEIGHT;
const investPoint = Math.floor((p.personalInvest || 0) / T.INVEST_PERSONAL_DIV);
const untreatedPenalty = (p.untreated || 0) * T.UNTREATED_PENALTY;
const worldBonus = worldInvestTGBonus();

logLine(
  "TG",
  `${p.name}: TG=${tg} / CP=${p.cp}×${T.CP_WEIGHT}=${cpPoint} / personalInvest=${p.personalInvest}(${investPoint}) / untreated=${p.untreated}(-${untreatedPenalty}) / worldBonus=${worldBonus}`
);
      if (out === "asymptomatic") {
        await showOkPopup(
          `${p.name}：無症状生存`,
          [
            `TG=${tg}（>=${T.TH_ASYMPTOMATIC}）`,
            "所持金：変動なし",
          ],
          "pandemic",
          "blue"
        );
      } else if (out === "sequelae") {
        const { pct, loss } = applyFinalMoneyPenalty(p, out);
        await showOkPopup(
          `${p.name}：後遺症つきで生存`,
          [
  `TG=${tg}（${T.TH_SEQUELAE}〜${T.TH_ASYMPTOMATIC - 1}）`,
  `所持金：-${pct}%（-${loss.toLocaleString()}）`,
],
          "pandemic",
          "yellow"
        );
      } else {
        const { pct, loss } = applyFinalMoneyPenalty(p, out);
        await showOkPopup(
          `${p.name}：死亡`,
          [
  `TG=${tg}（<=${T.TH_SEQUELAE - 1}）`,
  `所持金：-${pct}%（-${loss.toLocaleString()}）`,
  "💀 退場",
],
          "pandemic",
          "red"
        );
      }

      renderTokens();
      renderTable();
      renderTurn();
      await sleep(120);
    }

    for (const p of players) {
      if (p.alive) {
        p.pos = 150;
        p.finished = true;
      } else {
        p.finished = true;
      }
    }

    renderTokens();
    renderTable();
    renderTurn();

   await showOkPopup(
  "150：PANDEMIC OVER",
  [
    "未知の感染症との戦いは終わった。",
    "",
    "だが、",
    "医療、経済、自由──",
    "その全てを守ることはできなかった。",
    "",
    "あなたは、",
    "この時代をどう生き抜いただろうか。"
  ],
  "pandemic",
  "blue"
);

    showResult();

    const entry = buildResultEntry();
    saveEntry(entry);
    renderDetailedResult(entry);
  }

  /* =========================
     Tile resolvers
  ========================= */
  async function resolveWork(p) {
  const ins = p.insurance;
  const baseNet = CONFIG.WORK_NET[ins] ?? 0;
  const baseGov = CONFIG.WORK_GOV[ins] ?? 0;

  let gain = medicalPrivatized
    ? Math.floor(baseNet * 1.5)
    : baseNet;

  let gdelta = baseGov;

  p.money += gain;
  govFund += gdelta;

  if (gdelta > 0) addGovContribution(p, gdelta);

  const cpDelta = CONFIG.WORK_CP[ins] ?? 0;
  if (cpDelta !== 0) addCP(p, cpDelta, "（WORK）");

  logLine(
  "WORK",
  `${p.name}：仕事で収入を得た（+${gain.toLocaleString()}）`
);

  await showOkPopup(
    "💼 仕事マス",
    [
      `${p.name} は働いて収入を得た。`,
      `手取り：<b>+${gain.toLocaleString()} HMN</b>`,
      `GovFund：<b>+${gdelta.toLocaleString()} HMN</b>`,
      `CP変化：<b>${cpDelta >= 0 ? "+" : ""}${cpDelta}</b>`,
      medicalPrivatized ? "医療民営化中：WORK手取り1.5倍" : `保険：${insuranceText(ins)}`,
    ],
    "event",
    "blue"
  );
}

  async function resolveItem(p) {
    await gainRandomItemAtItemTile(p);
    renderTable();
  }

  async function resolveSpecialEvent(p, tile) {
    const key = tile.key;
    if (key === "warn143") { await startFinalPhaseAt143(); return; }
    if (key === "lockdown144") { await resolveLockdown144(p); return; }
    if (key === "collapse145") { await resolveCollapse145(p); return; }
    if (key === "trial146") { await resolveTrial146(p); return; }
    if (key === "chaos147") { await resolveChaos147(p); return; }
    if (key === "socialEval148") { await resolveOmen148(); return; }
  }

  async function resolveTile(p) {
  const tile = board[p.pos];
  if (!tile || !p.alive) return;

  if (p.pos === 149) {
  logLine("149", `${p.name}: 149に到達（全員停止）`);
  await resolvePandemicIfReady();
  return;
}

if (p.pos === 100) {
  await resolveGreenPass100(p);
  return;
}

    switch (tile.type) {
  case "work":
    await resolveWork(p);
    break;

  case "item":
    await resolveItem(p);
    break;

  case "event":
    if (tile.key) {
      await resolveSpecialEvent(p, tile);
    } else {
      await resolveEvent(p, tile);
    }
    break;

  case "infect":
    await resolveInfect(p);
    break;

  case "gov":
    await resolveGov(p);
    break;

  case "goal":
    p.finished = true;
    logLine("GOAL", `${p.name}: ゴール！`);
    break;

  default:
    break;
}
  }

  /* =========================
     Result display
  ========================= */
function renderDiseaseDex(targetId = "ruleDiseaseList") {
  const target = document.getElementById(targetId);
  if (!target) return;

  const found = Array.from(encounteredDiseases || []).sort();

  if (!found.length) {
    target.innerHTML = `
      <div class="dexEmpty">
        まだ感染症に遭遇していません。
      </div>
    `;
    return;
  }

  target.innerHTML = found.map(name => {
    const info = DISEASE_INFO[name];
    const gameData = DISEASES.find(d => d.疾病候補 === name);
    const isResultDex = targetId === "diseaseList";

    if (!info) {
      return `
        <div class="dexCard">
          <div class="dexName">🦠 ${name}</div>
          <div class="dexRow">医学情報：準備中</div>
          ${
            isResultDex && gameData
              ? `
                <div class="dexRow">発生場所：${gameData.発生場所}</div>
                <div class="dexRow">有効アイテム：${gameData.アイテム効果}</div>
              `
              : ""
          }
        </div>
      `;
    }

    return `
      <div class="dexCard">
        <div class="dexName">🦠 ${name}</div>
        <div class="dexRow">分類：${info.type}</div>
        <div class="dexRow">感染経路：${info.route}</div>
        <div class="dexRow">ワクチン：${info.vaccine}</div>

        ${
          isResultDex && gameData
            ? `
              <div class="dexRow">発生場所：${gameData.発生場所}</div>
              <div class="dexRow">有効アイテム：${gameData.アイテム効果}</div>
            `
            : ""
        }

        <div class="dexNote">${info.note}</div>
      </div>
    `;
  }).join("");
}

function showResult() {
  const arr = players.slice();

  arr.sort((a, b) => {
    const aAliveRank = a.alive ? 1 : 0;
    const bAliveRank = b.alive ? 1 : 0;

    if (bAliveRank !== aAliveRank) return bAliveRank - aAliveRank;
    if (b.money !== a.money) return b.money - a.money;

    return (b.finalTG ?? b.cp) - (a.finalTG ?? a.cp);
  });

  if (el.resultTbody) {
    el.resultTbody.innerHTML = "";

    for (const p of arr) {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td><b>${p.name}</b>${p.isCPU ? " 🤖" : ""}</td>
        <td>${p.cp}</td>
        <td>${(p.personalInvest || 0).toLocaleString()}</td>
        <td>${p.untreated || 0}</td>
        <td><b>${p.finalTG ?? "-"}</b></td>
        <td>${statusText(p)}</td>
      `;

      el.resultTbody.appendChild(tr);
    }
  }

  if (el.resultOverlay) {
    el.resultOverlay.style.display = "flex";
  }

renderDiseaseDex("diseaseList");

  logLine(
    "RESULT",
    `順位確定: ${arr
      .map(
        (p, i) =>
          `${i + 1}位:${p.name}(alive=${p.alive}, money=${p.money}, TG=${p.finalTG ?? "-"}, CP=${p.cp})`
      )
      .join(" / ")}`
  );
}
/* =========================
   Turn loop
========================= */
function nextLivingTurn() {
  for (let k = 0; k < playerCount; k++) {
    turn = (turn + 1) % playerCount;
    if (players[turn]?.alive && !players[turn]?.finished) return;
  }
}

function allDone() {
  return players.filter((p) => p.alive && !p.finished).length === 0;
}

function shouldAutoRunCPU() {
  const nextP = players[turn];

  return (
    gameStarted &&
    !pandemicResolved &&
    !phase2Active &&
    nextP &&
    nextP.alive &&
    !nextP.finished &&
    nextP.isCPU
  );
}

function releaseTurnControl() {
  busy = false;

  if (shouldAutoRunCPU()) {
    if (el.btnRoll) el.btnRoll.disabled = true;

    setTimeout(() => {
      doTurn();
    }, 700);

    return;
  }

  if (el.btnRoll) {
    el.btnRoll.disabled = false;
  }
}

async function doPhase2Step() {
  if (!phase2Active || pandemicResolved) return;

  busy = true;
  if (el.btnRoll) el.btnRoll.disabled = true;

  phase2Step += 1;

  const alive = players.filter((p) => p.alive && !p.finished);

  if (!alive.length) {
    busy = false;
    if (el.btnRoll) el.btnRoll.disabled = true;
    return;
  }

  for (const p of alive) {
    p.pos = Math.min(phase2Step, CONFIG.MAX_TILE);
  }

  renderTokens();
  renderTable();
  renderTurn();

  logLine("PHASE2", `全員が ${phase2Step} マスへ一斉進行`);

  if (phase2Step === 144) {
    for (const p of alive) {
      await resolveLockdown144(p);
    }
  }

  if (phase2Step === 145) {
    for (const p of alive) {
      await resolveCollapse145(p);
    }
  }

  if (phase2Step === 146) {
    for (const p of alive) {
      await resolveTrial146(p);
    }
  }

  if (phase2Step === 147) {
    for (const p of alive) {
      if (p.alive) {
        await resolveChaos147(p);
      }
    }
  }

  if (phase2Step === 148) {
    await resolveSocialEval148();
    await showOkPopup(
      "148 社会評価",
      ["社会評価の判定が完了しました。次は149でTG判定です。"],
      "event",
      "yellow"
    );
  }

  if (phase2Step === 149) {
    for (const p of players) {
      if (p.alive) {
        p.pos = 149;
      }
    }

    renderTokens();
    renderTable();
    renderTurn();

    await resolvePandemicIfReady();

    busy = false;
    if (el.btnRoll) el.btnRoll.disabled = true;
    return;
  }

  renderTokens();
  renderTable();
  renderTurn();

  busy = false;

  if (el.btnRoll) {
    el.btnRoll.disabled = phase2Step >= 149;
  }
}

async function doTurn() {
  if (busy) return;

  try {
    if (phase2Active && !pandemicResolved) {
      await doPhase2Step();
      return;
    }

    busy = true;
    if (el.btnRoll) el.btnRoll.disabled = true;

    const p = players[turn];

    if (!p || !p.alive || p.finished) {
      nextLivingTurn();
      releaseTurnControl();
      return;
    }

    if (p.pos === 149 && !pandemicResolved) {
      logLine("149", `${p.name}: 149で待機中`);

      await resolvePandemicIfReady();

      renderTokens();
      renderTable();
      renderTurn();

      nextLivingTurn();
      releaseTurnControl();
      return;
    }

    renderTurn();

    const dice = await rollDiceAnimated();
    setMsg(`${p.name} の出目：${dice}（STOPマスは通過しても停止）`);

    await moveStepByStep(p, dice);

buildGridOverlay();
renderTokens();

await resolveTile(p);

    if (phase2Active) {
      renderTokens();
      renderTable();
      renderTurn();
      releaseTurnControl();
      return;
    }

    if (p.pos === 148 && shouldTriggerSocialEval148()) {
      await resolveSocialEval148();
    }

    if (p.pos === 149) {
      await resolvePandemicIfReady();
    }

    renderTokens();
    renderTable();
    renderTurn();

    const prevTurn = turn;
    nextLivingTurn();

    if (turn <= prevTurn) {
      roundCounter += 1;

      const collapseTriggeredNow = await maybeTriggerMedicalCollapseAtRoundEnd();

      if (!collapseTriggeredNow) {
        await tickMedicalCollapseAtRoundEnd();
      }

      const ebolaTriggeredNow = await maybeTriggerEbolaAtRoundEnd();

      if (!ebolaTriggeredNow) {
        await tickEbolaAtRoundEnd();
      }

      if (!infectionOccurredThisRound) {
        highSevInfectStreak = 0;
        logLine("EBOLA", "高危険度感染連続カウントをリセット（感染成立なし）");
      }

      infectionOccurredThisRound = false;

      await tickRabiesAtRoundEnd();
      await maybeTriggerReferendumAtRoundEnd();

      if (publicHealthBuffTurns > 0) {
        publicHealthBuffTurns -= 1;
        logLine("115", `公衆衛生強化 残り${publicHealthBuffTurns}ターン`);
      }
    }

    renderTurn();

    if (allDone() && pandemicResolved) {
      if (el.btnRoll) el.btnRoll.disabled = true;
      busy = false;
      return;
    }

    releaseTurnControl();

  } catch (e) {
    console.error("doTurn error:", e);
    logLine("ERROR", e.message || String(e));

    busy = false;

    if (el.btnRoll) {
      el.btnRoll.disabled = false;
    }
  }
}
  /* =========================
     Result detail + Save
  ========================= */
  function ensureDetailedResultUI() {
  if (!el.resultBody) return;
  if (document.getElementById("detailResultBox")) return;

  const box = document.createElement("div");
  box.id = "detailResultBox";
  box.style.marginTop = "16px";

  box.innerHTML = `
    <h3>📊 詳細リザルト</h3>

    <div class="bigMsg" id="metaResult" style="margin-bottom:10px;">-</div>

    <div class="table-wrap">
      <table class="result-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>保険</th>
            <th>初期ワクチン</th>
            <th>infect回数</th>
            <th>未治療回数</th>
            <th>最終資金</th>
            <th>累計投資</th>
            <th>基金貢献</th>
            <th>アイテム獲得</th>
            <th>最終CP</th>
            <th>148</th>
            <th>最終TG</th>
            <th>最終状態</th>
          </tr>
        </thead>
        <tbody id="detailResultTbody"></tbody>
      </table>
    </div>

    <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btnPrimary" id="btnCopyResult" type="button">結果JSONコピー</button>
    </div>
  `;

  el.resultBody.appendChild(box);
}

  function statusFinalOf(p) {
    if (p.diedMidgame) return "途中死亡";
    if (p.finalOutcome === "sequelae") return "後遺症";
    if (p.finalOutcome === "asymptomatic") return "生存";
    if (p.finalOutcome === "death") return "死亡";
    return p.alive ? "生存" : "死亡";
  }

function buildResultEntry() {
  const now = new Date();

  return {
    id: now.toISOString(),
    playedAt: now.toLocaleString("ja-JP"),

    // 全体情報
    playerCount,
    govFundFinal: govFund,
    investTotal,
    worldInvestLv: currentInvestLv(),

    ebolaOccurred: !!ebolaOccurred,
    rabiesOccurred: !!rabiesOccurred,
    socialEvalTriggered: !!socialEvalTriggered,

    // ★ここが修正ポイント
    medicalCollapseOccurred: !!medicalCollapseOccurred,
    referendumOccurred: !!referendumOccurred,
    medicalPrivatized: !!medicalPrivatized,
    encounteredDiseases: Array.from(encounteredDiseases).sort(),

    // プレイヤーごとの詳細
    players: players.map((p) => ({
      name: p.name,

      // 保険
      insuranceInit: p.insuranceInit,
      insuranceFinal: p.insurance,
      insuranceHistory: p.insuranceHistory || [],

      // ワクチン
      vaccinatedInit: !!p.vaccinatedInit,

      // 行動ログ
      infectLanded: p.infectLanded || 0,
      untreatedCount: p.untreatedCount || 0,

      // 経済
      moneyFinal: p.money,
      personalInvest: p.personalInvest || 0,
      govFundContribution: p.govFundContribution || 0,

      // その他
      itemGained: p.itemGained || 0,
      cpFinal: p.cp,

      // 148社会評価
      socialEvalCategories: p.socialEvalCategories || [],
      socialEvalBonus: p.socialEvalBonus || 0,

      // 最終結果
      finalTG: p.finalTG,
      statusFinal: statusFinalOf(p),
    })),
  };
}

  function saveEntry(entry) {
    const key = "IL150_HISTORY";
    const raw = localStorage.getItem(key);
    const arr = raw ? JSON.parse(raw) : [];
    arr.unshift(entry);
    arr.splice(30);
    localStorage.setItem(key, JSON.stringify(arr));
    localStorage.setItem("IL150_LATEST", JSON.stringify(entry));
  }

  function renderDetailedResult(entry) {
  ensureDetailedResultUI();

  const meta = document.getElementById("metaResult");
  const tb = document.getElementById("detailResultTbody");

  if (!meta || !tb) return;

  meta.innerHTML =
    `人数：<b>${entry.playerCount}</b> / ` +
    `最終政府基金：<b>${Number(entry.govFundFinal).toLocaleString()}</b> / ` +
    `総投資：<b>${Number(entry.investTotal).toLocaleString()}</b> / ` +
    `世界Lv：<b>${entry.worldInvestLv}</b> / ` +
    `148社会評価：<b>${entry.socialEvalTriggered ? "実行済み" : "未実行"}</b> / ` +
    `エボラ：<b>${entry.ebolaOccurred ? "発生" : "なし"}</b> / ` +
    `狂犬病：<b>${entry.rabiesOccurred ? "発生" : "なし"}</b> / ` +
    `医療崩壊：<b>${entry.medicalCollapseOccurred ? "発生" : "なし"}</b> / ` +
    `国民投票：<b>${entry.referendumOccurred ? "発生" : "なし"}</b> / ` +
    `図鑑：<b>${entry.encounteredDiseases?.length || 0}種</b>`;
  tb.innerHTML = "";

  for (const p of entry.players) {
    const histText = p.insuranceHistory?.length
      ? p.insuranceHistory.map((h) => `${h.from}→${h.to}@${h.atTile}`).join(", ")
      : "なし";

    const catText = p.socialEvalCategories?.length
      ? p.socialEvalCategories.join(", ")
      : "なし";

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><b>${p.name}</b></td>
      <td>${p.insuranceInit}→${p.insuranceFinal}<br>${histText}</td>
      <td>${p.vaccinatedInit ? "あり" : "なし"}</td>
      <td>${p.infectLanded}</td>
      <td>${p.untreatedCount}</td>
      <td>${Number(p.moneyFinal).toLocaleString()}</td>
      <td>${Number(p.personalInvest).toLocaleString()}</td>
      <td>${Number(p.govFundContribution).toLocaleString()}</td>
      <td>${p.itemGained}</td>
      <td><b>${p.cpFinal}</b></td>
      <td>+${p.socialEvalBonus}<br>${catText}</td>
      <td><b>${p.finalTG ?? "-"}</b></td>
      <td>${p.statusFinal}</td>
    `;

    tb.appendChild(tr);
  }

  const btn = document.getElementById("btnCopyResult");

  if (btn) {
    btn.onclick = async () => {
      const txt = JSON.stringify(entry, null, 2);

      try {
        await navigator.clipboard.writeText(txt);
        alert("コピーしたで！");
      } catch {
        prompt("コピーしてな", txt);
      }
    };
  }
}
  /* =========================
     Start flow
  ========================= */
  async function askInitialInsurancePerPlayer() {
    for (const p of players) {
      if (p.isCPU) {
  p.insurance = pick(["A", "B", "C"]);
  p.insuranceInit = p.insurance;

  logLine(
    "CPU",
    `${p.name}: 初期保険を自動選択 → ${insuranceText(p.insurance)}`
  );

  renderTable();
  continue;
}
      await new Promise((resolve) => {
        showModal(


          `開始時：${p.name} の保険を選んで`,
          `
            <div class="bigMsg">
※保険が関与するのは「infectで治療」＋「WORK手取り/政府基金/CP」<br/>
※35・75マス目で後から変更も可能（その後、投資も可能）
            </div>
            <div class="grid">
              <div class="radioLine">
                <label><input type="radio" name="ins_init" value="A" ${p.insurance === "A" ? "checked" : ""}/> ${CONFIG.INSURANCE.A.name}</label>
                <div class="desc">治療：自己負担 10,000 / 政府 0</div>
                <div class="desc">WORK：手取り <b>20,000</b> / 政府基金に <b>+0</b> / CP -1</div>
                <div class="desc">治療CP：+1</div>
              </div>
              <div class="radioLine">
                <label><input type="radio" name="ins_init" value="B" ${p.insurance === "B" ? "checked" : ""}/> ${CONFIG.INSURANCE.B.name}</label>
                <div class="desc">治療：自己負担 5,000 / 政府 5,000</div>
                <div class="desc">WORK：手取り <b>12,000</b> / 政府基金に <b>+8,000</b> / CP 0</div>
                <div class="desc">治療CP：0</div>
              </div>
              <div class="radioLine" style="grid-column:1 / span 2;">
                <label><input type="radio" name="ins_init" value="C" ${p.insurance === "C" ? "checked" : ""}/> ${CONFIG.INSURANCE.C.name}</label>
                <div class="desc">治療：自己負担 0 / 政府 10,000（基金マイナスでも払う）</div>
                <div class="desc">WORK：手取り <b>8,000</b> / 政府基金に <b>+12,000</b> / CP +1</div>
                <div class="desc">治療CP：-1</div>
              </div>
            </div>
          `,
          [
            {
              text: "決定",
              className: "btnPrimary",
              onClick: () => {
                const sel = document.querySelector('input[name="ins_init"]:checked');
                if (sel) p.insurance = sel.value;

                p.insuranceInit = p.insurance;

                closeModal();
                logLine("INIT", `${p.name}: 初期保険=${insuranceText(p.insurance)}`);
                renderTable();
                resolve();
              },
            },
          ]
        );
      });
    }
  }

  async function askVaccinePack() {
    logLine("INIT", `開始時ワクチン：${CONFIG.VACCINE_PACK.cost}で任意接種（対象疾患）`);

    for (const p of players) {
      if (!p.alive) continue;

      if (p.isCPU) {
  const willVaccinate = randInt(1, 100) <= 35;

  if (willVaccinate && p.money >= CONFIG.VACCINE_PACK.cost) {
    p.money -= CONFIG.VACCINE_PACK.cost;
    p.vaccinated = true;
    p.vaccinatedSet = new Set(CONFIG.VACCINE_PACK.protects);
    p.vaccinatedInit = true;

    logLine(
      "CPU",
      `${p.name}: ワクチン自動接種（35%判定成功 / -${CONFIG.VACCINE_PACK.cost.toLocaleString()}）`
    );
  } else {
    p.vaccinated = false;
    p.vaccinatedSet = new Set();
    p.vaccinatedInit = false;

    logLine(
      "CPU",
      `${p.name}: ワクチン自動接種なし${willVaccinate ? "（所持金不足）" : "（35%判定なし）"}`
    );
  }

  renderTable();
  continue;
}

      await new Promise((resolve) => {
        showModal(
          `${p.name}：ワクチンセットを打つ？（任意）`,
          `
            <div class="bigMsg">
対象：${CONFIG.VACCINE_PACK.protects.join(" / ")}<br/>
費用：<b>${CONFIG.VACCINE_PACK.cost.toLocaleString()}</b><br/>
効果：対象疾患の infect を <b>100%で防ぐ</b><br/>
※145「医療逼迫」でもワクチンは有効
            </div>
            <div class="small">所持金：${p.money.toLocaleString()}</div>
          `,
          [
            {
              text: `打つ（-${CONFIG.VACCINE_PACK.cost.toLocaleString()}）`,
              className: "btnPrimary",
              onClick: () => {
                closeModal();
                if (p.money >= CONFIG.VACCINE_PACK.cost) {
                  p.money -= CONFIG.VACCINE_PACK.cost;
                  p.vaccinated = true;
                  p.vaccinatedSet = new Set(CONFIG.VACCINE_PACK.protects);
                  p.vaccinatedInit = true;
                  logLine("VAX", `${p.name}: 接種（-${CONFIG.VACCINE_PACK.cost.toLocaleString()}）`);
                } else {
                  p.vaccinated = false;
                  p.vaccinatedSet = new Set();
                  p.vaccinatedInit = false;
                  logLine("VAX", `${p.name}: 所持金不足で接種不可`);
                }
                renderTable();
                resolve();
              },
            },
            {
              text: "打たない",
              onClick: () => {
                closeModal();
                p.vaccinated = false;
                p.vaccinatedSet = new Set();
                p.vaccinatedInit = false;
                logLine("VAX", `${p.name}: 接種しない`);
                renderTable();
                resolve();
              },
            },
          ]
        );
      });
    }
  }

 /* =========================
     Reset / start / player count
========================= */
function hardReset() {
  busy = false;
  pandemicResolved = false;
  socialEvalTriggered = false;

  govFund = CONFIG.GOV_FUND_START;
  investTotal = 0;
  investedAt35 = new Set();
  investedAt75 = new Set();

  collapseActive = false;

  finalPhaseStarted = false;
  rankSnapshotAt143 = null;

  phase2Active = false;
  phase2Step = 143;

  finalStoryShown = new Set();

  ebolaTriggered = false;
  ebolaRemainTurns = 0;
  ebolaOccurred = false;
  highSevInfectStreak = 0;
  roundCounter = 1;

  rabiesOccurred = false;

  event115Activated = false;
  event115ChoicesDone = new Set();

  infectionOccurredThisRound = false;

  medicalCollapseActive = false;
medicalCollapseRemainTurns = 0;
medicalCollapseOccurred = false;

referendumCooldown = 0;
referendumOccurred = false;

medicalPrivatized = false;

publicHealthBuffTurns = 0;
publicHealthPickCount = 0;
publicHealthFundTotal = 0;
tbForcedIsolationActive = false;
encounteredDiseases = new Set();
  turn = 0;
  gameStarted = false;

  pool = buildPools();

  players = [];

let id = 0;

for (let i = 0; i < selectedHumans; i++) {
  players.push(makePlayer(id, false, 0));
  id += 1;
}

for (let i = 0; i < selectedCPUs; i++) {
  players.push(makePlayer(id, true, i));
  id += 1;
}

playerCount = players.length;

  buildBoard();
  buildGridOverlay();
  rebuildTokens();

  renderTokens();
  renderTable();
  renderTurn();
  setDiceFace(1);

  if (el.resultOverlay) el.resultOverlay.style.display = "none";
  lastLogTurnKey = "";
  if (el.log) el.log.textContent = "ここにゲームの進行が表示されます。\n";

  closeModal();

  if (el.btnRoll) el.btnRoll.disabled = true;
  if (el.btnStart) el.btnStart.disabled = false;
}

async function startGame() {

  if (busy) return;

  busy = true;

  selectedHumans = safeClampPlayers(selectedHumans);
selectedCPUs = Math.max(
  0,
  Math.min(CONFIG.PLAYER_MAX - selectedHumans, Math.floor(Number(selectedCPUs) || 0))
);

playerCount = selectedHumans + selectedCPUs;

hardReset();

if (el.startOverlay) {
  el.startOverlay.style.display = "none";
}

await askPlayerNames();

gameStarted = true;

await askInitialInsurancePerPlayer();
await askVaccinePack();

document.body.classList.add("gameStarted");

const ruleBtn = document.getElementById("ruleBookBtn");

if (ruleBtn) {
  ruleBtn.style.display = "block";
}

  setMsg("サイコロを振って開始！");
  if (el.btnRoll) el.btnRoll.disabled = false;
  if (el.btnStart) el.btnStart.disabled = true;

  renderTokens();
  renderTable();
  renderTurn();

  busy = false;
}

function safeClampPlayers(n) {
  const x = Number(n);
  if (!Number.isFinite(x)) return 4;
  return Math.max(CONFIG.PLAYER_MIN, Math.min(CONFIG.PLAYER_MAX, Math.floor(x)));
} 

/* =========================
     Wire events
========================= */
function bindUI() {

  if (el.btnStart) {
    el.btnStart.onclick = () => startGame();
  }

  if (el.btnRoll) {
    el.btnRoll.onclick = () => doTurn();
  }

  let resizeTimer = null;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      renderTokens();
    }, 120);
  });
}

let tutorialStepIndex = 0;

function showTutorialStep(index) {
  const steps = Array.from(document.querySelectorAll(".tutorialStep"));
  if (!steps.length) return;

  tutorialStepIndex = Math.max(0, Math.min(index, steps.length - 1));

  steps.forEach((step, i) => {
    step.classList.toggle("active", i === tutorialStepIndex);
  });

  const backBtn = document.getElementById("tutorialBackBtn");
  const nextBtn = document.getElementById("tutorialNextBtn");

  if (backBtn) {
    backBtn.style.visibility = tutorialStepIndex === 0 ? "hidden" : "visible";
  }

  if (nextBtn) {
    nextBtn.style.display =
      tutorialStepIndex === steps.length - 1 ? "none" : "block";
    nextBtn.textContent = "次へ";
  }
}

function bindTutorialUI() {
  const backBtn = document.getElementById("tutorialBackBtn");
  const nextBtn = document.getElementById("tutorialNextBtn");

  if (backBtn) {
    backBtn.onclick = () => {
      showTutorialStep(tutorialStepIndex - 1);
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      showTutorialStep(tutorialStepIndex + 1);
    };
  }

  showTutorialStep(0);
}

document.addEventListener("DOMContentLoaded", bindTutorialUI);

/* =========================
   Hotfix CSS injection
   - red popup blank fix
   - turn-card log styling
========================= */
function injectHotfixStyles() {
  if (document.getElementById("hamanolandHotfixStyles")) return;

  const style = document.createElement("style");
  style.id = "hamanolandHotfixStyles";
  style.textContent = `
    #log{ white-space:normal !important; }
    .logTurnBlock{
      margin:10px 0 6px;
      padding:8px 10px;
      border-radius:12px;
      background:#e8fbf8;
      color:#138f86;
      font-weight:900;
      border-left:6px solid #42c7bd;
    }
    .logLine{
      padding:6px 8px;
      margin:4px 0;
      border-radius:8px;
      background:#fff;
      color:#444;
      border:1px solid #eee;
      line-height:1.45;
      word-break:break-word;
    }
    .logTag{ font-weight:900; color:#ff5c7a; }
    .pop-red{
      background:linear-gradient(135deg,#ff6b81,#d63031) !important;
      color:#fff !important;
    }
    .pop-blue{
      background:linear-gradient(135deg,#74b9ff,#0984e3) !important;
      color:#fff !important;
    }
    .pop-yellow{
      background:linear-gradient(135deg,#ffeaa7,#fdcb6e) !important;
      color:#2d3436 !important;
    }
    .popMsg, .popMsg *{ visibility:visible !important; }
  `;
  document.head.appendChild(style);
}

/* =========================
     Boot
========================= */
(function boot() {
 playerCount = 4;
selectedHumans = 4;
selectedCPUs = 0;

if (typeof window.selectP === "function") {
  window.selectP(4);
}

if (typeof window.selectCPU === "function") {
  window.selectCPU(0);
}

  injectHotfixStyles();
  bindUI();
  hardReset();
})();

setTimeout(() => {
  const style = document.createElement("style");
  style.textContent = `
    #boardBox, #gridLayer, #tokensLayer {
      opacity: 1 !important;
      visibility: visible !important;
    }

    #gridLayer {
      z-index: 20 !important;
    }

    #tokensLayer {
      z-index: 30 !important;
    }

    .gridCell {
      opacity: 1 !important;
      visibility: visible !important;
      display: flex !important;
      color: #263238 !important;
      background: #ffffff !important;
      border: 1px solid #cfd8dc !important;
    }

    .gridCell.infect { background: #ff9bb2 !important; color: #fff !important; }
    .gridCell.work { background: #98d7ff !important; color: #123 !important; }
    .gridCell.item { background: #94edcf !important; color: #123 !important; }
    .gridCell.event { background: #ffe19a !important; color: #3a2a00 !important; }
    .gridCell.gov { background: #b4bed3 !important; color: #123 !important; }
    .gridCell.pandemic { background: #8f7cff !important; color: #fff !important; }
    .gridCell.goal { background: #42c7bd !important; color: #fff !important; }

    .dice__face {
      background: #ffffff !important;
      border: 3px solid #111 !important;
      box-shadow: inset 0 0 12px rgba(0,0,0,.08), 0 4px 10px rgba(0,0,0,.18) !important;
    }

    .diceNumber3d {
      color: #111 !important;
      opacity: 1 !important;
      visibility: visible !important;
      z-index: 999 !important;
      text-shadow: none !important;
    }

    #diceNumber {
      color: #111 !important;
      font-weight: 900 !important;
    }
  `;
  document.head.appendChild(style);
  if (typeof buildGridOverlay === "function") buildGridOverlay();
  if (typeof renderTokens === "function") renderTokens();
}, 800);

/* ========================================
   HAMANOLAND DESIGN PATCH v1
   診察券UI / エリア背景 / サイコロ修正
======================================== */

function injectHamanolandDesign() {
  if (document.getElementById("hamanolandDesignV1")) return;

  const style = document.createElement("style");
  style.id = "hamanolandDesignV1";
  style.textContent = `
    body {
      background: linear-gradient(180deg,#fff8fb,#eefbf8) !important;
      font-family: "Hiragino Maru Gothic ProN","Hiragino Sans",sans-serif !important;
    }

    .header {
      background: rgba(255,255,255,.9) !important;
      border-bottom: 6px solid #ffe08a !important;
      box-shadow: 0 8px 24px rgba(0,0,0,.08) !important;
    }

    #boardBox {
      border-radius: 28px !important;
      border: 6px solid #fff !important;
      box-shadow: 0 10px 30px rgba(0,0,0,.12) !important;
      overflow: hidden !important;
      background: linear-gradient(135deg,#dff4ff,#fff8dc) !important;
    }

    body.area-urban #boardBox {
      background: linear-gradient(135deg,#dff4ff,#f7fbff) !important;
    }

    body.area-tropical #boardBox {
      background: linear-gradient(135deg,#d9ffe9,#eafff5) !important;
    }

    body.area-polluted #boardBox {
      background: linear-gradient(135deg,#f1e8df,#d8d8d8) !important;
    }

    body.area-final #boardBox {
      background: linear-gradient(135deg,#261447,#ff4f7b) !important;
    }

    .gridCell {
      border-radius: 14px !important;
      font-weight: 900 !important;
      box-shadow: 0 3px 8px rgba(0,0,0,.12) !important;
      border: 2px solid rgba(255,255,255,.85) !important;
    }

    .token {
      box-shadow: 0 6px 14px rgba(0,0,0,.35) !important;
      border: 4px solid #fff !important;
    }

    .pill {
      border-radius: 999px !important;
      background: #fff !important;
      border: 3px solid #e9eef0 !important;
      box-shadow: 0 4px 10px rgba(0,0,0,.06) !important;
      font-weight: 900 !important;
    }

    #playerCardDeck {
      margin: 14px 18px;
      display: flex;
      gap: 12px;
      overflow-x: auto;
      padding-bottom: 8px;
    }

    .hml-card {
      min-width: 210px;
      background: #fff;
      border-radius: 20px;
      border: 3px solid #b9e3f8;
      box-shadow: 0 8px 20px rgba(0,0,0,.1);
      padding: 12px;
      color: #1f3344;
    }

    .hml-card.active {
      transform: translateY(-3px);
      border-color: #ff7fa3;
      box-shadow: 0 10px 26px rgba(255,127,163,.25);
    }

    .hml-card-head {
      display:flex;
      align-items:center;
      gap:10px;
      margin-bottom:8px;
    }

    .hml-avatar {
      width:42px;
      height:42px;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      background:linear-gradient(135deg,#bdefff,#fff0b8);
      font-size:24px;
      border:2px solid #fff;
      box-shadow:0 3px 8px rgba(0,0,0,.15);
    }

    .hml-name {
      font-weight:900;
      font-size:16px;
    }

    .hml-role {
      font-size:11px;
      color:#6b7d86;
    }

    .hml-row {
      display:flex;
      justify-content:space-between;
      border-top:1px dashed #d9e4e8;
      padding:5px 0;
      font-size:13px;
    }

    .hml-pass {
      margin-top:8px;
      padding:6px 8px;
      border-radius:12px;
      background:#e9fff2;
      color:#16824a;
      font-weight:900;
      text-align:center;
      font-size:13px;
    }

    .hml-pass.bad {
      background:#fff0f3;
      color:#c7375d;
    }

    .dice__face {
      background:#fff !important;
      border:3px solid #111 !important;
    }

    .diceNumber3d,
    #diceNumber {
      color:#111 !important;
      font-weight:900 !important;
      opacity:1 !important;
      visibility:visible !important;
      z-index:999 !important;
    }
  `;
  document.head.appendChild(style);
}

function ensurePlayerCardDeck() {
  if (document.getElementById("playerCardDeck")) return;

  const deck = document.createElement("div");
  deck.id = "playerCardDeck";

  const boardContainer = document.querySelector(".board-container");

if (boardContainer) {
  boardContainer.insertAdjacentElement("afterend", deck);
}
}

/* =========================
   HAMANOLAND DESIGN PATCH v2.1
========================= */
function injectHamanolandDesign() {
  if (document.getElementById("hamanolandDesignV21")) return;

  const style = document.createElement("style");
  style.id = "hamanolandDesignV21";
  style.textContent = `
    body.area-urban { background: linear-gradient(#fff7fb,#f4fdff) !important; }
    body.area-tropical { background: linear-gradient(#ecfff4,#fff9e8) !important; }
    body.area-polluted { background: linear-gradient(#fff1ed,#eef0f3) !important; }
    body.area-final { background: linear-gradient(#251b38,#08070c) !important; }

    #playerCardDeck{
      display:flex;
      gap:14px;
      overflow-x:auto;
      padding:14px 18px 10px;
      scroll-snap-type:x mandatory;
    }

    .hml-card{
      flex:0 0 220px;
      scroll-snap-align:center;
      background:#fff;
      border:4px solid #aee7ff;
      border-radius:22px;
      padding:14px;
      box-shadow:0 10px 22px rgba(0,0,0,.10);
      font-weight:800;
      color:#203040;
    }

    .hml-card.active{
      border-color:#ff6f9c;
      background:linear-gradient(180deg,#fff,#fff2f7);
      transform:scale(1.02);
    }

    .hml-card-head{
      display:flex;
      align-items:center;
      gap:10px;
      margin-bottom:10px;
    }

    .hml-avatar{
      width:46px;
      height:46px;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      background:#e9fff8;
      font-size:26px;
      box-shadow:0 3px 8px rgba(0,0,0,.15);
    }

    .hml-name{ font-size:20px; color:#18324a; }
    .hml-role{ font-size:13px; color:#708090; }

    .hml-row{
      display:flex;
      justify-content:space-between;
      border-top:2px dashed #dbe7ec;
      padding:7px 0;
      font-size:16px;
    }

    .hml-pass{
      margin-top:8px;
      padding:9px;
      border-radius:14px;
      text-align:center;
      background:#e9fff1;
      color:#16834d;
      font-weight:900;
    }

    .hml-pass.bad{
      background:#fff0f4;
      color:#c7446d;
    }

    #boardBox{
      border-radius:24px !important;
      overflow:hidden !important;
      box-shadow:0 10px 24px rgba(0,0,0,.12) !important;
      background:#fff !important;
    }

    .dice__face{
      background:#fff !important;
      border:3px solid #111 !important;
    }

    .diceNumber3d,#diceNumber{
      color:#111 !important;
      font-weight:900 !important;
      opacity:1 !important;
      visibility:visible !important;
      z-index:999 !important;
    }
  `;
  document.head.appendChild(style);
}

function ensurePlayerCardDeck() {
  if (document.getElementById("playerCardDeck")) return;

  const deck = document.createElement("div");
  deck.id = "playerCardDeck";

  const boardContainer =
    document.querySelector(".board-container") ||
    document.getElementById("boardBox");

  if (boardContainer && boardContainer.parentNode) {
    boardContainer.parentNode.insertBefore(deck, boardContainer.nextSibling);
  }
}

function updateAreaTheme() {
  const ps = Array.isArray(players) ? players : [];
  const maxPos = ps.length ? Math.max(...ps.map(p => p.pos || 1)) : 1;

  document.body.classList.remove("area-urban","area-tropical","area-polluted","area-final");

  if (maxPos >= 143) document.body.classList.add("area-final");
  else if (maxPos >= 56) document.body.classList.add("area-polluted");
  else if (maxPos >= 28) document.body.classList.add("area-tropical");
  else document.body.classList.add("area-urban");
}

function renderPlayerCards() {
  ensurePlayerCardDeck();

  const deck = document.getElementById("playerCardDeck");
  if (!deck || !Array.isArray(players)) return;

  deck.innerHTML = players.map((p, i) => {
    const passText = p.hasPass ? "Green Pass 所持" : p.gpBase ? "Green Pass 権利あり" : "Green Pass なし";
    const passClass = p.hasPass || p.gpBase ? "" : "bad";

    return `
      <div class="hml-card ${i === turn ? "active" : ""}">
        <div class="hml-card-head">
          <div class="hml-avatar">${p.isCPU ? "🤖" : "🙂"}</div>
          <div>
            <div class="hml-name">${p.name}${i === turn ? " の番" : ""}</div>
            <div class="hml-role">${p.isCPU ? "CPU / 住民" : "Human / 住民"}</div>
          </div>
        </div>
        <div class="hml-row"><span>📍 Pos</span><b>${p.pos}</b></div>
        <div class="hml-row"><span>💰 Money</span><b>${Number(p.money || 0).toLocaleString()}</b></div>

<div class="hml-row">
  <span>🛡 保険</span>
  <b>${insuranceText(p.insurance)}</b>
</div>
        <div class="hml-row"><span>🧠 CP</span><b>${p.cp}</b></div>
        <div class="hml-row"><span>🦠 未治療</span><b>${p.untreated}</b></div>
        <div class="hml-row"><span>💉 ワクチン</span><b>${p.vaccinated ? "済" : "なし"}</b></div>

   <div class="hml-pass ${passClass}">${passText}</div>

<div class="hml-items">
  <div class="hml-items-title">所持アイテム</div>
  <div class="hml-item-list">
    ${
  p.items && Object.keys(p.items).length
    ? Object.entries(p.items).map(([key, count]) => {
  const it = CONFIG.ITEMS.find(x => x.key === key);
  return `<div class="hml-item">${it ? it.name : key} ×${count}</div>`;
}).join("")
    : `<span class="hml-empty">なし</span>`
}
  </div>
</div>
</div>
    `;
  }).join("");
}

function applyHamanolandDesignUpdate() {
  injectHamanolandDesign();
  updateAreaTheme();
  renderPlayerCards();
}

try {
  if (!window.__HAMANOLAND_DESIGN_PATCH_V21__) {
    window.__HAMANOLAND_DESIGN_PATCH_V21__ = true;

    const _renderTableDesign = renderTable;
    renderTable = function() {
      _renderTableDesign();
      applyHamanolandDesignUpdate();
    };

    const _renderTurnDesign = renderTurn;
    renderTurn = function() {
      _renderTurnDesign();
      applyHamanolandDesignUpdate();
    };

    window.addEventListener("resize", applyHamanolandDesignUpdate);
  }

  setTimeout(() => {
    applyHamanolandDesignUpdate();
    if (typeof buildGridOverlay === "function") buildGridOverlay();
    if (typeof renderTokens === "function") renderTokens();
  }, 500);
} catch (e) {
  console.warn("HAMANOLAND DESIGN PATCH failed", e);
}

/* =========================
   INSURANCE MODAL CLEAN UI
========================= */
try {
  const _resolveInsuranceChange = resolveInsuranceChange;
  const _askInitialInsurancePerPlayer = askInitialInsurancePerPlayer;

  function insuranceChoiceHTML(nameAttr, current) {
    return `
      <div class="insCards">
        ${["A","B","C"].map(code => {
          const data = CONFIG.INSURANCE[code];
          const workNet = CONFIG.WORK_NET[code];
          const workGov = CONFIG.WORK_GOV[code];
          const workCP = CONFIG.WORK_CP[code];
          const treatCP = CONFIG.TREAT_CP[code];

          return `
            <label class="insCard ins-${code}">
              <input type="radio" name="${nameAttr}" value="${code}" ${current === code ? "checked" : ""}>
              <div class="insTitle">${data.name}</div>
              <div class="insLine">🧪 治療自己負担 <b>${data.treatPlayerPay.toLocaleString()}</b></div>
              <div class="insLine">🏛 政府負担 <b>${data.treatGovPay.toLocaleString()}</b></div>
              <div class="insLine">💼 WORK収入 <b>${workNet.toLocaleString()}</b></div>
              <div class="insLine">💰 GovFund +<b>${workGov.toLocaleString()}</b></div>
              <div class="insLine">🧠 WORK CP <b>${workCP >= 0 ? "+" : ""}${workCP}</b></div>
              <div class="insLine">❤️ 治療 CP <b>${treatCP >= 0 ? "+" : ""}${treatCP}</b></div>
            </label>
          `;
        }).join("")}
      </div>
    `;
  }

  function injectInsuranceStyle() {
    if (document.getElementById("insuranceModalStyle")) return;

    const style = document.createElement("style");
    style.id = "insuranceModalStyle";
    style.textContent = `
      .modal{
        max-height:82vh !important;
        overflow-y:auto !important;
      }

      .insIntro{
        background:#f4fffd;
        border-left:6px solid #55cfc5;
        padding:10px 12px;
        border-radius:14px;
        margin-bottom:12px;
        line-height:1.5;
        font-weight:800;
      }

      .insCards{
        display:grid;
        grid-template-columns:1fr;
        gap:12px;
      }

      .insCard{
        display:block;
        position:relative;
        padding:14px 14px 14px 44px;
        border-radius:18px;
        border:3px solid #e5edf0;
        background:#fff;
        box-shadow:0 5px 14px rgba(0,0,0,.08);
        font-weight:800;
      }

      .insCard input{
        position:absolute;
        left:14px;
        top:18px;
        transform:scale(1.25);
      }

      .insCard:has(input:checked){
        border-color:#ff6f9c;
        background:#fff5f8;
      }

      .insTitle{
        font-size:20px;
        margin-bottom:8px;
        color:#18324a;
      }

      .insLine{
        display:flex;
        justify-content:space-between;
        gap:8px;
        padding:4px 0;
        border-top:1px dashed #dbe7ec;
        font-size:15px;
      }

      .ins-A .insTitle{ color:#e85c7f; }
      .ins-B .insTitle{ color:#2aa6a0; }
      .ins-C .insTitle{ color:#4c7bd9; }
    `;
    document.head.appendChild(style);
  }

  resolveInsuranceChange = async function(p) {
    injectInsuranceStyle();

    await new Promise((resolve) => {
      showModal(
        `中央政府：${p.name} の保険変更`,
        `
          <div class="insIntro">
            35・75マスでは保険変更と投資ができます。<br>
            保険は「治療費」「WORK収入」「GovFund」「CP」に影響します。
          </div>
          ${insuranceChoiceHTML("ins", p.insurance)}
        `,
        [
          {
            text: "決定",
            className: "btnPrimary",
            onClick: () => {
              const sel = document.querySelector('input[name="ins"]:checked');
              const before = p.insurance;
              if (sel) p.insurance = sel.value;

              if (before !== p.insurance) {
                p.insuranceHistory = p.insuranceHistory || [];
                p.insuranceHistory.push({
                  from: before,
                  to: p.insurance,
                  atTile: p.pos,
                  round: roundCounter,
                });
              }

              closeModal();
              logLine("GOV", `${p.name}: 保険を ${insuranceText(p.insurance)} に設定`);
              renderTable();
              resolve();
            },
          },
        ]
      );
    });
  };

  askInitialInsurancePerPlayer = async function() {
    injectInsuranceStyle();

    for (const p of players) {
      if (p.isCPU) {
        p.insurance = pick(["A", "B", "C"]);
        p.insuranceInit = p.insurance;
        logLine("CPU", `${p.name}: 初期保険を自動選択 → ${insuranceText(p.insurance)}`);
        renderTable();
        continue;
      }

      await new Promise((resolve) => {
        showModal(
          `開始時：${p.name} の保険`,
          `
            <div class="insIntro">
              最初の保険を選んでください。<br>
              後から35・75マスで変更できます。
            </div>
            ${insuranceChoiceHTML("ins_init", p.insurance)}
          `,
          [
            {
              text: "決定",
              className: "btnPrimary",
              onClick: () => {
                const sel = document.querySelector('input[name="ins_init"]:checked');
                if (sel) p.insurance = sel.value;
                p.insuranceInit = p.insurance;

                closeModal();
                logLine("INIT", `${p.name}: 初期保険=${insuranceText(p.insurance)}`);
                renderTable();
                resolve();
              },
            },
          ]
        );
      });
    }
  };
} catch(e) {
  console.warn("INSURANCE UI PATCH failed", e);
}
/* =========================
   HAMANOLAND HEADER / DICE UI PATCH
   - 上部サイコロ崩れ修正
   - Round / GovFund / World Lv をカード化
   - スマホ表示を整理
========================= */
(function hamanolandHeaderDicePatch() {
  function injectHeaderDiceStyles() {
    if (document.getElementById("hmlHeaderDiceStyle")) return;

    const style = document.createElement("style");
    style.id = "hmlHeaderDiceStyle";
    style.textContent = `
      body{
        background:#fffaf7;
      }

      .header{
        display:grid !important;
        grid-template-columns:1fr !important;
        gap:10px !important;
        padding:14px 18px 16px !important;
        background:linear-gradient(180deg,#fffaf7,#ffffff) !important;
        border-bottom:5px solid #ffe08a !important;
        box-shadow:0 6px 18px rgba(0,0,0,.06) !important;
      }

      .controls{
        display:flex !important;
        justify-content:center !important;
        align-items:center !important;
        width:100% !important;
      }

      .dice-ui{
        display:grid !important;
        grid-template-columns:92px 1fr !important;
        align-items:center !important;
        gap:14px !important;
        width:100% !important;
        max-width:520px !important;
        margin:0 auto !important;
      }

      .scene{
        width:82px !important;
        height:82px !important;
        perspective:600px !important;
        display:flex !important;
        align-items:center !important;
        justify-content:center !important;
      }

      .dice-wrapper{
        width:72px !important;
        height:72px !important;
        position:relative !important;
        transform-style:preserve-3d !important;
        border-radius:20px !important;
        background:#fff !important;
        box-shadow:0 10px 20px rgba(0,0,0,.16) !important;
      }

      .dice3d{
        width:72px !important;
        height:72px !important;
        position:relative !important;
        transform-style:preserve-3d !important;
      }

      .dice__face{
        position:absolute !important;
        width:72px !important;
        height:72px !important;
        border-radius:18px !important;
        background:#ffffff !important;
        border:3px solid #1f2d3d !important;
        box-shadow:inset 0 0 10px rgba(0,0,0,.08) !important;
      }

      .dice__face--front{ transform:rotateY(0deg) translateZ(36px) !important; }
      .dice__face--back{ transform:rotateY(180deg) translateZ(36px) !important; }
      .dice__face--right{ transform:rotateY(90deg) translateZ(36px) !important; }
      .dice__face--left{ transform:rotateY(-90deg) translateZ(36px) !important; }
      .dice__face--top{ transform:rotateX(90deg) translateZ(36px) !important; }
      .dice__face--bottom{ transform:rotateX(-90deg) translateZ(36px) !important; }

      .diceNumber3d{
        position:absolute !important;
        inset:0 !important;
        display:flex !important;
        align-items:center !important;
        justify-content:center !important;
        font-size:34px !important;
        font-weight:1000 !important;
        color:#1f2d3d !important;
        z-index:50 !important;
        pointer-events:none !important;
        text-shadow:none !important;
      }

      #btnRoll{
        height:64px !important;
        border:0 !important;
        border-radius:22px !important;
        background:linear-gradient(135deg,#55d6c9,#1faea5) !important;
        color:white !important;
        font-size:22px !important;
        font-weight:1000 !important;
        box-shadow:0 10px 20px rgba(31,174,165,.28) !important;
      }

      #btnRoll:disabled{
        opacity:.45 !important;
        filter:grayscale(.2) !important;
      }

      .pills{
        display:grid !important;
        grid-template-columns:repeat(2,minmax(0,1fr)) !important;
        gap:10px !important;
        width:100% !important;
        max-width:520px !important;
        margin:0 auto !important;
      }

      .pill{
        border-radius:18px !important;
        background:#ffffff !important;
        border:3px solid #edf1f3 !important;
        box-shadow:0 5px 12px rgba(0,0,0,.06) !important;
        color:#2d3436 !important;
        font-weight:1000 !important;
        font-size:18px !important;
        padding:12px 14px !important;
        text-align:center !important;
      }

      #roundPill::before{ content:"📅 "; }
      #govPill::before{ content:"🏛 "; }
      #lvPill::before{ content:"🌍 "; }

      #roundPill,
      #govPill,
      #lvPill{
        display:inline-block !important;
      }

      #govPill{
        grid-column:span 1 !important;
      }

      #lvPill{
        grid-column:span 2 !important;
      }

      .pill.alert{
        background:#fff0f4 !important;
        border-color:#ff9ab7 !important;
        color:#c0395b !important;
      }

      .pill.good{
        background:#eafff9 !important;
        border-color:#71dfce !important;
        color:#158f84 !important;
      }

      .pill.special{
        background:#fff6dc !important;
        border-color:#ffd36b !important;
        color:#8a6400 !important;
      }

      @media (min-width:700px){
        .header{
          grid-template-columns:360px 1fr !important;
          align-items:center !important;
        }

        .pills{
          grid-template-columns:repeat(3,minmax(0,1fr)) !important;
          max-width:none !important;
        }

        #lvPill{
          grid-column:auto !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function updateRollButtonText() {
    const btn = document.getElementById("btnRoll");
    if (!btn) return;

    const p = Array.isArray(players) ? players[turn] : null;

    if (phase2Active && !pandemicResolved) {
      btn.textContent = "次へ進む 🚨";
      return;
    }

    if (p && p.isCPU) {
      btn.textContent = `${p.name} 自動行動 🤖`;
      return;
    }

    if (p) {
      btn.textContent = `サイコロをふる 🎲`;
    } else {
      btn.textContent = "サイコロをふる 🎲";
    }
  }

  function applyHeaderDiceUpdate() {
    injectHeaderDiceStyles();
    updateRollButtonText();

    if (typeof setDiceFace === "function") {
      const n = Number(document.getElementById("diceNumber")?.textContent || 1);
      setDiceFace(Number.isFinite(n) ? n : 1);
    }
  }

  try {
    const _renderTableHeaderDice = renderTable;
    renderTable = function() {
      _renderTableHeaderDice();
      applyHeaderDiceUpdate();
    };

    const _renderTurnHeaderDice = renderTurn;
    renderTurn = function() {
      _renderTurnHeaderDice();
      applyHeaderDiceUpdate();
    };
   window.addEventListener("resize", applyHeaderDiceUpdate);

    setTimeout(() => {
      applyHeaderDiceUpdate();
    }, 300);
  } catch (e) {
    console.warn("HAMANOLAND HEADER/DICE PATCH failed", e);
  }
})();
/* =========================
   3D DICE FACE CONTENT FIX
========================= */
(function dice3DFaceContentFix() {
  function pipHTML(n) {
    const map = {
      1: [5],
      2: [1, 9],
      3: [1, 5, 9],
      4: [1, 3, 7, 9],
      5: [1, 3, 5, 7, 9],
      6: [1, 3, 4, 6, 7, 9],
    };
    const on = new Set(map[n]);
    return Array.from({ length: 9 }, (_, i) =>
      `<span class="cubePip ${on.has(i + 1) ? "on" : ""}"></span>`
    ).join("");
  }

  function fillFaces() {
    const faces = [
      [".dice__face--front", 1],
      [".dice__face--top", 2],
      [".dice__face--right", 3],
      [".dice__face--left", 4],
      [".dice__face--bottom", 5],
      [".dice__face--back", 6],
    ];

    faces.forEach(([sel, n]) => {
      document.querySelectorAll(sel).forEach(face => {
        face.innerHTML = `<div class="cubePips">${pipHTML(n)}</div>`;
      });
    });
  }

  function injectStyle() {
    if (document.getElementById("dice3DFaceContentStyle")) return;

    const style = document.createElement("style");
    style.id = "dice3DFaceContentStyle";
    style.textContent = `
      .dice3d{
        display:block !important;
        opacity:1 !important;
        transform-style:preserve-3d !important;
      }

      .dice__face{
        display:flex !important;
        align-items:center !important;
        justify-content:center !important;
        backface-visibility:hidden !important;
        background:linear-gradient(145deg,#ffffff,#eef3f6) !important;
      }

      .cubePips{
        width:54px;
        height:54px;
        display:grid;
        grid-template-columns:repeat(3,1fr);
        grid-template-rows:repeat(3,1fr);
        gap:4px;
      }

      .cubePip{
        width:10px;
        height:10px;
        border-radius:999px;
        align-self:center;
        justify-self:center;
        background:transparent;
      }

      .cubePip.on{
        background:#111;
        box-shadow:0 2px 3px rgba(0,0,0,.25);
      }

      .diceNumber3d,
      #diceNumber{
        display:none !important;
      }
    `;
    document.head.appendChild(style);
  }

  injectStyle();
  fillFaces();
})();
/* =========================
   HAMANOLAND CUTE POPUP PATCH
========================= */
(function cutePopupPatch() {
  if (document.getElementById("cutePopupStyle")) return;

  const style = document.createElement("style");
  style.id = "cutePopupStyle";
  style.textContent = `
    #modalBack{
      backdrop-filter: blur(4px);
      background: rgba(30,35,40,.45) !important;
    }

    .modal{
      width:min(92vw,520px) !important;
      max-height:82vh !important;
      border-radius:28px !important;
      overflow:hidden !important;
      background:#fffdfb !important;
      box-shadow:0 24px 60px rgba(0,0,0,.25) !important;
      border:4px solid rgba(255,255,255,.9) !important;
    }

    #modalTitle{
      padding:18px 22px !important;
      font-size:25px !important;
      font-weight:1000 !important;
      color:white !important;
      background:linear-gradient(135deg,#65d8cf,#ff6f91) !important;
      letter-spacing:.02em !important;
    }

    #modalBody{
      padding:20px !important;
      background:#fffdfb !important;
      color:#263238 !important;
      font-size:18px !important;
      line-height:1.65 !important;
    }

    #modalFoot{
      padding:16px 20px 22px !important;
      background:#fffdfb !important;
      display:flex !important;
      gap:12px !important;
      justify-content:flex-end !important;
      flex-wrap:wrap !important;
    }

    #modalFoot button{
      border:0 !important;
      border-radius:18px !important;
      padding:13px 22px !important;
      font-size:17px !important;
      font-weight:1000 !important;
      box-shadow:0 8px 16px rgba(0,0,0,.12) !important;
    }

    #modalFoot .btnPrimary{
      background:linear-gradient(135deg,#65d8cf,#22b8ad) !important;
      color:white !important;
    }

    #modalFoot .btnDanger{
      background:linear-gradient(135deg,#ff8aa5,#ff5f7e) !important;
      color:white !important;
    }

    .popMsg{
      background:#ffffff !important;
      color:#25313d !important;
      border-radius:24px !important;
      padding:18px !important;
      border:3px solid #edf4f6 !important;
      box-shadow:0 8px 20px rgba(0,0,0,.06) !important;
    }

    .popTitle{
      font-size:24px !important;
      font-weight:1000 !important;
      margin-bottom:12px !important;
      color:#17324d !important;
    }

    .popLine{
      background:#f7fbfb !important;
      border:2px solid #e8f1f2 !important;
      border-radius:16px !important;
      padding:10px 12px !important;
      margin:8px 0 !important;
      color:#25313d !important;
      font-weight:800 !important;
    }

    .small{
      color:#71808a !important;
      font-size:14px !important;
      line-height:1.5 !important;
    }

    .pop-red{
      background:#fff4f7 !important;
      border-color:#ff9ab5 !important;
    }

    .pop-red .popTitle{
      color:#d94669 !important;
    }

    .pop-blue{
      background:#f0fbff !important;
      border-color:#90dfff !important;
    }

    .pop-blue .popTitle{
      color:#1685b7 !important;
    }

    .pop-yellow{
      background:#fff9e8 !important;
      border-color:#ffd66f !important;
    }

    .pop-yellow .popTitle{
      color:#a16b00 !important;
    }

    .pop-red .popLine,
    .pop-blue .popLine,
    .pop-yellow .popLine{
      background:white !important;
      color:#25313d !important;
    }
  `;
  document.head.appendChild(style);
})();
/* =========================
   COMPACT POPUP PATCH
   - ポップアップを1画面に収める
   - popLineを小さくまとめる
========================= */
(function compactPopupPatch() {
  if (document.getElementById("compactPopupStyle")) return;

  const style = document.createElement("style");
  style.id = "compactPopupStyle";
  style.textContent = `
    .modal{
      width:min(90vw,500px) !important;
      max-height:76vh !important;
    }

    #modalTitle{
      padding:14px 18px !important;
      font-size:21px !important;
      line-height:1.35 !important;
    }

    #modalBody{
      padding:14px !important;
      font-size:16px !important;
      line-height:1.45 !important;
      max-height:52vh !important;
      overflow-y:auto !important;
    }

    #modalFoot{
      padding:10px 14px 14px !important;
    }

    #modalFoot button{
      padding:10px 20px !important;
      border-radius:16px !important;
      font-size:16px !important;
    }

    .popMsg{
      padding:14px !important;
      border-radius:20px !important;
    }

    .popTitle{
      font-size:20px !important;
      line-height:1.35 !important;
      margin-bottom:8px !important;
    }

    .popLine{
      margin:5px 0 !important;
      padding:8px 10px !important;
      border-radius:13px !important;
      font-size:15.5px !important;
      line-height:1.45 !important;
    }

    .popHr{
      margin:8px 0 !important;
    }

    .small{
      font-size:13px !important;
    }
  `;
  document.head.appendChild(style);
})();
/* =========================
   EVENT TILE FIX
   - resolveEvent 消失対策
========================= */
async function resolveEvent(p, tile) {
  if (!p || !tile) return;

  const delta = Number(tile.delta || 0);

  if (delta === 0) {
    logLine("EVENT", `${p.name}: イベントマス（変化なし）`);
    await showOkPopup(
      "⭐ イベント発生",
      [`${p.name} はイベントマスに止まった。`, "今回は変化なし。"],
      "event",
      "yellow"
    );
    return;
  }

  p.money += delta;

  logLine(
    "EVENT",
    `${p.name}: ${delta >= 0 ? "臨時収入" : "出費"} ${delta >= 0 ? "+" : ""}${delta.toLocaleString()} HMN`
  );

  await showOkPopup(
    delta >= 0 ? "⭐ 臨時収入！" : "💸 出費イベント",
    [
      `${p.name} にイベント発生。`,
      delta >= 0
        ? `所持金：+${delta.toLocaleString()} HMN`
        : `所持金：${delta.toLocaleString()} HMN`,
    ],
    "event",
    delta >= 0 ? "blue" : "yellow"
  );

  renderTable();
}

function ensureAreaCard() {
  if (document.getElementById("areaCard")) return;

  const header = document.querySelector(".header");
  if (!header) return;

  const card = document.createElement("div");
  card.id = "areaCard";
  card.innerHTML = `
    <div class="areaTitle">🏙 都市エリア</div>
    <div class="areaDisease">人口密集・医療アクセス良好</div>
  `;

  header.appendChild(card);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("#cardToggleBtn");
  if (!btn) return;

  document.body.classList.toggle("cardOpen");
});

document.addEventListener("click", (e) => {
  const closeBtn = e.target.closest("#cardCloseBtn");
  if (!closeBtn) return;

  document.body.classList.remove("cardOpen");
});

document.addEventListener("click", (e) => {
  if (e.target.closest("#logToggleBtn")) {
    document.body.classList.add("logOpen");
  }

  if (e.target.closest("#logCloseBtn")) {
    document.body.classList.remove("logOpen");
  }
});

window.addEventListener("click", function(e) {
  if (e.target.closest("#ruleBookBtn")) {
    const modal = document.getElementById("ruleBookModal");

    if (!modal) {
      console.warn("ruleBookModal が見つからない");
      return;
    }

    if (typeof renderDiseaseDex === "function") {
      renderDiseaseDex("ruleDiseaseList");
    }

    modal.classList.remove("hidden");
  }

  if (e.target.closest("#ruleBookCloseBtn")) {
    const modal = document.getElementById("ruleBookModal");
    if (modal) modal.classList.add("hidden");
  }
});

