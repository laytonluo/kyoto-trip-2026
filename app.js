
const itinerary = [
  {
    id: 1,
    date: '6/23（二）',
    title: '抵達＋市比賣＋平等寺＋下鴨',
    area: '京都市區',
    theme: '抵達日 / 輕參拜',
    transport: 'HARUKA＋步行＋計程車',
    stay: 'Rakuten STAY URBAN Shijo Teramachi',
    focus: '抵達後不排滿，保留還願、御朱印與河原町散步節奏。',
    routeText: '桃園 → 關西機場 → HARUKA → 京都站 → 飯店 → 市比賣神社 → 平等寺 → 下鴨神社 → 河原町 → 飯店',
    steps: [
      { title: '關西機場 → 京都', time: 'HARUKA 12:16 → 13:32（備案 12:46 → 14:02）', transport: 'JR 特急', cost: '依票價方案', note: '第一天最適合示範交通券使用。' },
      { title: '京都站 → 飯店', time: '抵達後', transport: '計程車', cost: '¥1500～2000', note: '不要拖行李轉乘。' },
      { title: '飯店 → 市比賣神社 → 平等寺', time: '15:00～16:20', transport: '步行', cost: '步行', note: '輕參拜暖身。' },
      { title: '平等寺 → 下鴨神社 → 河原町', time: '16:30～晚間', transport: '計程車', cost: '¥1500～2200 + ¥1800～2500', note: '下鴨神社與糺之森是記憶點。' },
    ],
    systemCouponIds: ['sys-haruka', 'sys-goshuin']
  },
  {
    id: 2,
    date: '6/24（三）',
    title: '天橋立一日團',
    area: '京都站集合',
    theme: '固定團 / 不加點',
    transport: '觀光巴士',
    stay: 'Rakuten STAY URBAN Shijo Teramachi',
    focus: '重點是準時到京都站八條口集合。',
    routeText: '飯店 → 京都站八條口觀光巴士乘車場 → 天橋立一日團 → 京都站解散 → 飯店',
    steps: [
      { title: '飯店 → 京都站八條口集合', time: '08:35 集合', transport: '計程車或提早出發', cost: '依當日交通', note: '京都站內動線要抓寬鬆。' },
      { title: '天橋立一日團', time: '08:35～17:30', transport: '觀光巴士', cost: '依團費', note: '回市區後建議直接休息。' }
    ],
    systemCouponIds: ['sys-tour']
  },
  {
    id: 3,
    date: '6/25（四）',
    title: '北野天滿宮＋上七軒＋金閣寺＋晴明神社',
    area: '洛北／西陣',
    theme: '天神市 / 市集 / 文化參拜',
    transport: '計程車＋步行＋公車',
    stay: 'Rakuten STAY URBAN Shijo Teramachi',
    focus: '25 日天神市優先，下午再收金閣寺與晴明神社。',
    routeText: '飯店 → 北野天滿宮 → 上七軒 / 澤屋粟餅 → 金閣寺 → 晴明神社 →（可加白峯神宮）→ 飯店',
    steps: [
      { title: '飯店 → 北野天滿宮', time: '09:00～11:00', transport: '計程車', cost: '¥2500～3500', note: '早上不要先進公車地獄。' },
      { title: '北野天滿宮 → 上七軒 → 金閣寺', time: '11:00～13:00', transport: '步行 / 計程車', cost: '門票 ¥500；短程車 ¥800～1200', note: '太熱就直接搭車。' },
      { title: '金閣寺 → 晴明神社 → 回飯店', time: '13:00～晚間', transport: '公車 / 計程車', cost: '公車依票；計程車 ¥1500～2200', note: '白峯神宮看體力再加。' }
    ],
    systemCouponIds: ['sys-bus', 'sys-goshuin']
  },
  {
    id: 4,
    date: '6/26（五）',
    title: '苔寺＋嵐山',
    area: '嵐山',
    theme: '預約景點 / 景觀散步',
    transport: '計程車＋步行＋JR',
    stay: 'Rakuten STAY URBAN Shijo Teramachi',
    focus: '先守住苔寺預約時間，嵐山以大河內山莊為優先保留點。',
    routeText: '飯店 → 苔寺 → 嵐山（渡月橋 → 電電宮 → 竹林 → 野宮神社 → 大河內山莊 → 常寂光寺可刪）→ JR嵯峨嵐山站 → 京都站 → 飯店',
    steps: [
      { title: '飯店 → 苔寺', time: '08:20 出發 / 09:30 預約', transport: '計程車', cost: '¥3500～5000', note: '預約制，不要賭公車。' },
      { title: '苔寺 → 嵐山核心段', time: '中午～下午', transport: '計程車 + 步行', cost: '¥1200～1800', note: '竹林與電電宮是輕鬆點。' },
      { title: '大河內山莊 → 回飯店', time: '下午～傍晚', transport: '步行 + JR + 計程車', cost: 'JR 依票價；飯店回程 ¥1500～2000', note: '常寂光寺可刪。' }
    ],
    systemCouponIds: ['sys-reservation']
  },
  {
    id: 5,
    date: '6/27（六）',
    title: '奈良一日＋入住東山旅館',
    area: '奈良',
    theme: '跨城 / 神社寺院 / 換住宿',
    transport: '計程車＋JR奈良線',
    stay: '東山旅館',
    focus: '大行李留主基地，只帶一晚小包。',
    routeText: '飯店 → 京都站 → JR奈良站 → 春日大社 → 奈良公園 → 冰室神社 → 東大寺 → 麺闘庵 → 御霊神社 → 奈良町 → JR奈良站 → 京都站 → 東山旅館',
    steps: [
      { title: '主基地 → 京都站 → JR奈良站', time: '早上出發', transport: '計程車 + JR', cost: '車 ¥1500～2000；JR ¥720/人', note: '交通券核心場景。' },
      { title: '奈良神社寺院核心線', time: '09:30～下午', transport: '計程車 + 步行', cost: '門票與短程車', note: '東大寺後段最容易疲勞。' },
      { title: '奈良町 → 京都 → 東山旅館', time: '下午～晚上', transport: '步行 + JR + 計程車', cost: 'JR ¥720/人；京都站到旅館 ¥2000～3000', note: '晚間要換住宿。' }
    ],
    systemCouponIds: ['sys-jr-nara', 'sys-goshuin']
  },
  {
    id: 6,
    date: '6/28（日）',
    title: '清晨清水寺＋宇治',
    area: '東山＋宇治',
    theme: '清晨景觀 / 紫陽花 / 抹茶線',
    transport: '步行＋京阪＋JR',
    stay: 'Rakuten STAY URBAN Shijo Teramachi',
    focus: '這天很漂亮，但也是很早起而且移動較多的一天。',
    routeText: '東山旅館 → 清水寺 → 退房 → 清水五條站 → 中書島 → 三室戶 → 三室戶寺 → 中村藤吉 → 平等院 → 宇治上神社 → 辻利兵衛本店 → JR宇治站 → 京都站 → 主基地',
    steps: [
      { title: '東山旅館 → 清水寺', time: '05:45～07:00', transport: '步行', cost: '門票 ¥500', note: '住東山旅館的核心價值。' },
      { title: '東山 → 三室戶寺', time: '早餐後 / 10:00～11:30', transport: '計程車 + 京阪 + 步行', cost: '車 ¥1000～1500；門票 ¥1000', note: '太熱可在三室戶站改短程計程車。' },
      { title: '宇治抹茶線 → 回京都', time: '中午～傍晚', transport: '步行 / 短程計程車 + JR', cost: 'JR 依票價；京都站至飯店 ¥1500～2000', note: '宇治段不建議再加其他點。' }
    ],
    systemCouponIds: ['sys-keihan-uji', 'sys-jr-nara', 'sys-goshuin']
  },
  {
    id: 7,
    date: '6/29（一）',
    title: '貴船＋流水麵＋補貨＋回程',
    area: '貴船 / 河原町 / 關西機場',
    theme: '郊區收尾 / 最後採買 / 返程',
    transport: '計程車＋叡山電鐵＋巴士＋HARUKA',
    stay: '返台',
    focus: '上午衝貴船與流水麵，中午後回市區補貨，傍晚整理行李接 HARUKA。',
    routeText: '飯店 → 出町柳站 → 貴船口 → 貴船 → ひろ文流水麵 → 貴船神社 → 出町柳 → 飯店 → 高島屋 / LOFT / HANDS / Nintendo KYOTO → 飯店 → 京都站 → 關西機場',
    steps: [
      { title: '飯店 → 出町柳 → 貴船', time: '早上出發', transport: '計程車 + 叡山電鐵 + 巴士', cost: '車 ¥2000～3000', note: '巴士轉乘要抓時間。' },
      { title: 'ひろ文流水麵 → 貴船神社', time: '10:30～13:15', transport: '步行', cost: '依現場；水占卜 ¥200', note: '10 點先到拿號碼牌。' },
      { title: '回飯店 → 補貨 → 京都站 → 關西機場', time: '下午～晚間', transport: '巴士 + 電車 + 計程車 + JR 特急', cost: '京都站到飯店 ¥1500～2000；HARUKA 依票價', note: '若貴船排隊超時，補貨縮成高島屋＋LOFT。' }
    ],
    systemCouponIds: ['sys-haruka', 'sys-eizan', 'sys-reservation']
  }
];

const defaultCoupons = [
  {
    id: 'sys-haruka',
    name: 'JR HARUKA 券',
    type: '交通',
    validFrom: '2026-06-23',
    validTo: '2026-06-29',
    suggestion: '優先用在關西機場往返京都。',
    relatedDays: [1, 7],
    image: '',
    source: 'default',
    used: false
  },
  {
    id: 'sys-jr-nara',
    name: 'JR 奈良線券',
    type: '交通',
    validFrom: '2026-06-27',
    validTo: '2026-06-28',
    suggestion: '奈良與宇治回京都可集中使用。',
    relatedDays: [5, 6],
    image: '',
    source: 'default',
    used: false
  },
  {
    id: 'sys-bus',
    name: '京都巴士一日券',
    type: '交通',
    validFrom: '2026-06-25',
    validTo: '2026-06-25',
    suggestion: 'Day 3 若以公車串金閣寺 / 晴明神社才划算。',
    relatedDays: [3],
    image: '',
    source: 'default',
    used: false
  },
  {
    id: 'sys-goshuin',
    name: '御朱印 / 參拜優惠包',
    type: '景點',
    validFrom: '2026-06-23',
    validTo: '2026-06-29',
    suggestion: '神社寺院集中日都可掛用。',
    relatedDays: [1, 3, 5, 6],
    image: '',
    source: 'default',
    used: false
  },
  {
    id: 'sys-reservation',
    name: '預約憑證',
    type: '預約',
    validFrom: '2026-06-26',
    validTo: '2026-06-29',
    suggestion: '苔寺與流水麵屬時間敏感項目，要獨立標示。',
    relatedDays: [4, 7],
    image: '',
    source: 'default',
    used: false
  },
  {
    id: 'sys-tour',
    name: '天橋立一日團憑證',
    type: '預約',
    validFrom: '2026-06-24',
    validTo: '2026-06-24',
    suggestion: '只要顧好集合時間即可。',
    relatedDays: [2],
    image: '',
    source: 'default',
    used: false
  },
  {
    id: 'sys-keihan-uji',
    name: '京阪宇治線券',
    type: '交通',
    validFrom: '2026-06-28',
    validTo: '2026-06-28',
    suggestion: '東山 → 三室戶寺 → 宇治最有價值。',
    relatedDays: [6],
    image: '',
    source: 'default',
    used: false
  },
  {
    id: 'sys-eizan',
    name: '叡山電鐵 / 貴船交通券',
    type: '交通',
    validFrom: '2026-06-29',
    validTo: '2026-06-29',
    suggestion: '避免貴船日來回分段購票。',
    relatedDays: [7],
    image: '',
    source: 'default',
    used: false
  }
];

const STORAGE_KEY = 'kyoto_trip_custom_coupons_v2';
const HIDDEN_COUPONS_KEY = 'kyoto_hidden_coupons_v1';

function loadHiddenCoupons() {
  try { return new Set(JSON.parse(localStorage.getItem(HIDDEN_COUPONS_KEY)) || []); }
  catch { return new Set(); }
}
function hideCopon(id) {
  const set = loadHiddenCoupons();
  set.add(id);
  localStorage.setItem(HIDDEN_COUPONS_KEY, JSON.stringify([...set]));
}
const STEPS_STORAGE_KEY = 'kyoto_custom_steps_v1';
let editingStep = null; // { dayId, stepIdx }

// ── Custom steps storage ───────────────────────────────────────
function loadCustomSteps() {
  try { return JSON.parse(localStorage.getItem(STEPS_STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveCustomSteps(data) {
  localStorage.setItem(STEPS_STORAGE_KEY, JSON.stringify(data));
}
function getStepsForDay(dayId) {
  const custom = loadCustomSteps();
  if (custom[dayId]) return custom[dayId];
  const day = itinerary.find(d => d.id === dayId);
  return day ? day.steps.map(s => ({ ...s })) : [];
}
function setStepsForDay(dayId, steps) {
  const custom = loadCustomSteps();
  custom[dayId] = steps;
  saveCustomSteps(custom);
}

// ── Cost display (步行 = ¥ 0) ─────────────────────────────────
function getStepCostDisplay(step) {
  if (step.transport && step.transport.trim() === '步行') return '¥ 0';
  return step.cost || '—';
}

// ── Step edit / add / delete ───────────────────────────────────
function deleteStep(dayId, stepIdx) {
  const steps = getStepsForDay(dayId);
  steps.splice(stepIdx, 1);
  setStepsForDay(dayId, steps);
  editingStep = null;
  renderScheduleCards();
}

function insertNewStep(dayId, afterIdx) {
  const steps = getStepsForDay(dayId);
  steps.splice(afterIdx + 1, 0, { title: '', time: '', transport: '', cost: '', note: '' });
  setStepsForDay(dayId, steps);
  editingStep = { dayId, stepIdx: afterIdx + 1 };
  renderScheduleCards();
}

function saveStepEdit(dayId, stepIdx) {
  const form = document.querySelector(`.step-edit-form[data-day="${dayId}"][data-step="${stepIdx}"]`);
  if (!form) return;
  const steps = getStepsForDay(dayId);
  steps[stepIdx] = {
    title:     form.querySelector('[name="title"]').value.trim(),
    time:      form.querySelector('[name="time"]').value.trim(),
    transport: form.querySelector('[name="transport"]').value.trim(),
    cost:      form.querySelector('[name="cost"]').value.trim(),
    note:      form.querySelector('[name="note"]').value.trim(),
  };
  setStepsForDay(dayId, steps);
  editingStep = null;
  renderScheduleCards();
}

function renderStepEditForm(step, dayId, stepIdx) {
  return `
    <div class="step-edit-form" data-day="${dayId}" data-step="${stepIdx}">
      <div class="step-edit-fields">
        <label class="step-edit-label">地點<input name="title" type="text" value="${(step.title || '').replace(/"/g, '&quot;')}" /></label>
        <label class="step-edit-label">時間<input name="time" type="text" value="${(step.time || '').replace(/"/g, '&quot;')}" /></label>
        <label class="step-edit-label">交通方式<input name="transport" type="text" value="${(step.transport || '').replace(/"/g, '&quot;')}" /></label>
        <label class="step-edit-label">交通費（數字或文字）<input name="cost" type="text" value="${(step.cost || '').replace(/"/g, '&quot;')}" placeholder="例如：1500" /></label>
        <label class="step-edit-label">備註<textarea name="note">${step.note || ''}</textarea></label>
      </div>
      <div class="step-action-row">
        <button class="confirm-step-btn btn btn-primary" data-day="${dayId}" data-step="${stepIdx}">確認修改</button>
        <button class="cancel-step-btn btn btn-secondary" data-day="${dayId}" data-step="${stepIdx}">取消</button>
      </div>
    </div>`;
}

// ── Route path with Google Maps buttons ───────────────────────
const STATION_SET = new Set(['京都', '奈良', '中書島', '三室戶', '貴船口', '出町柳']);
const NO_MAP_WORDS = ['HARUKA', '退房'];
const ACTION_SUFFIXES = ['集合', '解散', '出發', '抵達', '退房'];

function getLocationMapUrl(name, stay) {
  let n = name.trim();
  if (!n || n.length < 2) return null;
  if (NO_MAP_WORDS.some(w => n.includes(w))) return null;

  // Strip trailing action words (e.g. "京都站八條口集合" → "京都站八條口")
  for (const suffix of ACTION_SUFFIXES) {
    if (n.endsWith(suffix)) { n = n.slice(0, -suffix.length).trim(); break; }
  }
  if (!n || n.length < 2) return null;

  let query = n;
  if (n === '飯店' || n === '主基地') {
    query = stay || 'Rakuten STAY URBAN Shijo Teramachi';
  } else if (n === '桃園') {
    query = '桃園國際機場';
  } else if (n === '關西機場') {
    query = '關西國際機場';
  } else if (STATION_SET.has(n)) {
    query = n + '站';
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderRouteStop(name, stay) {
  const url = getLocationMapUrl(name, stay);
  if (url) {
    return `<span class="route-stop">${name}<a class="map-btn" href="${url}" target="_blank" rel="noopener">地圖</a></span>`;
  }
  return `<span class="route-stop no-map">${name}</span>`;
}

function renderRoutePath(routeText, stay) {
  const parens = [];
  const processed = routeText.replace(/（[^）]*）/g, m => {
    parens.push(m);
    return `__P${parens.length - 1}__`;
  });

  return processed.split('→').map(s => s.trim()).filter(Boolean).map(stop => {
    if (/^__P\d+__$/.test(stop)) {
      const idx = parseInt(stop.match(/\d+/)[0]);
      return `<span class="route-paren">${parens[idx]}</span>`;
    }
    const subParts = stop.split('/').map(s => s.trim()).filter(Boolean);
    if (subParts.length > 1) {
      return subParts.map(s => renderRouteStop(s, stay)).join('<span class="route-slash"> / </span>');
    }
    return renderRouteStop(stop, stay);
  }).join('<span class="route-sep"> → </span>');
}

// ── Schedule step event delegation ───────────────────────────
function handleScheduleClick(e) {
  const editBtn    = e.target.closest('.edit-step-btn');
  const confirmBtn = e.target.closest('.confirm-step-btn');
  const cancelBtn  = e.target.closest('.cancel-step-btn');
  const addBtn     = e.target.closest('.add-step-btn');
  const deleteBtn  = e.target.closest('.delete-step-btn');

  if (editBtn) {
    const { day, step } = editBtn.dataset;
    editingStep = { dayId: parseInt(day), stepIdx: parseInt(step) };
    renderScheduleCards();
    return;
  }
  if (confirmBtn) {
    const { day, step } = confirmBtn.dataset;
    saveStepEdit(parseInt(day), parseInt(step));
    return;
  }
  if (cancelBtn) {
    editingStep = null;
    renderScheduleCards();
    return;
  }
  if (addBtn) {
    const { day, step } = addBtn.dataset;
    insertNewStep(parseInt(day), parseInt(step));
    return;
  }
  if (deleteBtn) {
    const { day, step } = deleteBtn.dataset;
    if (confirm('確定刪除此行程段落？')) deleteStep(parseInt(day), parseInt(step));
  }
}
const FILTER_ALL = 'all';
let selectedDayFilter = FILTER_ALL;
let editingCouponId = null;
let currentImageData = '';

function loadCustomCoupons() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('load custom coupons failed', err);
    return [];
  }
}

function saveCustomCoupons(coupons) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(coupons));
}

function getAllCoupons() {
  const hidden = loadHiddenCoupons();
  return [...defaultCoupons, ...loadCustomCoupons()].filter(c => !hidden.has(c.id));
}

function getCouponById(id) {
  return getAllCoupons().find(c => c.id === id);
}

function formatDateRange(from, to) {
  if (!from && !to) return '未設定';
  if (from && to) return `${from} ～ ${to}`;
  return from || to;
}

function createId() {
  return `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function dayLabel(dayId) {
  const day = itinerary.find(d => d.id === dayId);
  return day ? `Day ${day.id}｜${day.title}` : `Day ${dayId}`;
}

function getCouponsForDay(dayId) {
  return getAllCoupons().filter(c => Array.isArray(c.relatedDays) && c.relatedDays.includes(dayId));
}

function renderTripSummary() {
  const target = document.getElementById('tripSummary');
  target.innerHTML = '';
  itinerary.forEach(day => {
    const div = document.createElement('div');
    div.className = 'summary-item';
    div.innerHTML = `
      <strong>Day ${day.id}｜${day.title}</strong>
      <div class="small muted">${day.date}・${day.transport}</div>
      <div class="small muted">${day.focus}</div>
    `;
    target.appendChild(div);
  });
}

// ── Reminders (localStorage) ──────────────────────────────────
const REMINDERS_KEY = 'kyoto_reminders_v1';
const DEFAULT_REMINDERS = [
  { id: 'rd_0', text: '苔寺預約 Day 4 09:30，務必搭計程車，不要賭公車。' },
  { id: 'rd_1', text: 'ひろ文流水麵 Day 7 請 10:00 前到場拿號碼牌。' },
  { id: 'rd_2', text: 'Day 5/6 JR 奈良線券集中用在奈良與宇治回程。' },
  { id: 'rd_3', text: 'Day 7 貴船排隊超時，補貨縮成高島屋＋LOFT 即可。' },
];
let reminderMode = null; // null | 'new' | 'edit' | 'delete'

function loadReminders() {
  try {
    const saved = JSON.parse(localStorage.getItem(REMINDERS_KEY));
    if (Array.isArray(saved) && saved.length) return saved;
  } catch {}
  const defaults = DEFAULT_REMINDERS.map(r => ({ ...r }));
  localStorage.setItem(REMINDERS_KEY, JSON.stringify(defaults));
  return defaults;
}
function saveReminders(list) {
  localStorage.setItem(REMINDERS_KEY, JSON.stringify(list));
}

function renderReminders() {
  const target = document.getElementById('dynamicReminders');
  target.innerHTML = '';
  const list = loadReminders();

  // Update mode button active states
  ['New', 'Edit', 'Delete'].forEach(m => {
    document.getElementById(`reminder${m}Btn`)
      ?.classList.toggle('active', reminderMode === m.toLowerCase());
  });

  list.forEach(r => {
    const div = document.createElement('div');
    div.className = 'summary-item reminder-item';

    if (reminderMode === 'delete') {
      div.innerHTML = `<span class="reminder-text">${r.text}</span><button class="reminder-x-btn" data-id="${r.id}">✕</button>`;
      div.querySelector('.reminder-x-btn').onclick = () => {
        if (confirm('確定刪除此提醒？')) {
          saveReminders(loadReminders().filter(x => x.id !== r.id));
          renderReminders();
        }
      };
    } else if (reminderMode === 'edit') {
      div.innerHTML = `<span class="reminder-text">${r.text}</span><button class="reminder-pencil-btn" data-id="${r.id}">✏️</button>`;
      div.querySelector('.reminder-pencil-btn').onclick = () => {
        div.innerHTML = `
          <textarea class="reminder-textarea">${r.text}</textarea>
          <button class="reminder-done-btn btn btn-primary">完成</button>`;
        div.querySelector('.reminder-textarea').focus();
        div.querySelector('.reminder-done-btn').onclick = () => {
          const newText = div.querySelector('.reminder-textarea').value.trim();
          if (newText) {
            const updated = loadReminders();
            const item = updated.find(x => x.id === r.id);
            if (item) item.text = newText;
            saveReminders(updated);
          }
          reminderMode = null;
          renderReminders();
        };
      };
    } else {
      div.innerHTML = `<span>${r.text}</span>`;
    }
    target.appendChild(div);
  });

  if (reminderMode === 'new') {
    const row = document.createElement('div');
    row.className = 'reminder-new-row';
    row.innerHTML = `
      <textarea class="reminder-textarea" placeholder="輸入新提醒內容…"></textarea>
      <button class="reminder-done-btn btn btn-primary">新增</button>`;
    row.querySelector('.reminder-done-btn').onclick = () => {
      const text = row.querySelector('.reminder-textarea').value.trim();
      if (text) {
        const updated = loadReminders();
        updated.push({ id: `r_${Date.now()}`, text });
        saveReminders(updated);
      }
      reminderMode = null;
      renderReminders();
    };
    target.appendChild(row);
    setTimeout(() => row.querySelector('.reminder-textarea').focus(), 50);
  }
}

function renderDayFilters() {
  const group = document.getElementById('dayFilterGroup');
  group.innerHTML = '';

  const allBtn = document.createElement('button');
  allBtn.className = `day-filter-btn ${selectedDayFilter === FILTER_ALL ? 'active' : ''}`;
  allBtn.textContent = '全部';
  allBtn.onclick = () => { selectedDayFilter = FILTER_ALL; renderScheduleCards(); };
  group.appendChild(allBtn);

  itinerary.forEach(day => {
    const btn = document.createElement('button');
    btn.className = `day-filter-btn ${selectedDayFilter === day.id ? 'active' : ''}`;
    btn.textContent = `Day ${day.id}`;
    btn.onclick = () => { selectedDayFilter = day.id; renderScheduleCards(); };
    group.appendChild(btn);
  });
}

function renderScheduleCards() {
  renderDayFilters();
  const target = document.getElementById('scheduleCards');
  target.innerHTML = '';
  const template = document.getElementById('scheduleCardTemplate');

  itinerary
    .filter(day => selectedDayFilter === FILTER_ALL || selectedDayFilter === day.id)
    .forEach(day => {
      const node = template.content.firstElementChild.cloneNode(true);
      node.querySelector('.js-date').textContent = day.date;
      node.querySelector('.js-area').textContent = day.area;
      node.querySelector('.js-theme').textContent = day.theme;
      node.querySelector('.js-title').textContent = `Day ${day.id}｜${day.title}`;
      node.querySelector('.js-focus').textContent = day.focus;
      node.querySelector('.js-stay').textContent = day.stay;
      node.querySelector('.js-transport').textContent = day.transport;
      const couponWrap = node.querySelector('.js-coupons');
      getCouponsForDay(day.id).forEach(coupon => {
        const tag = document.createElement('span');
        tag.textContent = coupon.name;
        couponWrap.appendChild(tag);
      });

      const stepsWrap = node.querySelector('.js-steps');
      const steps = getStepsForDay(day.id);
      steps.forEach((step, idx) => {
        const div = document.createElement('div');
        div.className = 'step-item';
        const isEditing = editingStep && editingStep.dayId === day.id && editingStep.stepIdx === idx;
        if (isEditing) {
          div.innerHTML = renderStepEditForm(step, day.id, idx);
        } else {
          div.innerHTML = `
            <div class="step-title-row">${renderRoutePath(step.title, day.stay)}</div>
            <div class="small muted">${step.time}</div>
            <div class="step-meta">
              <div><strong>交通</strong><br>${step.transport}</div>
              <div class="cost-cell"><strong>交通費</strong><br><span class="cost-display">${getStepCostDisplay(step)}</span></div>
              <div><strong>備註</strong><br>${step.note}</div>
            </div>
            <div class="step-action-row">
              <button class="edit-step-btn text-btn" data-day="${day.id}" data-step="${idx}">修改</button>
              <button class="add-step-btn text-btn" data-day="${day.id}" data-step="${idx}">新增下一筆</button>
              <button class="delete-step-btn text-btn delete" data-day="${day.id}" data-step="${idx}">刪除</button>
            </div>`;
        }
        stepsWrap.appendChild(div);
      });

      target.appendChild(node);
    });
}

function renderCouponDaySelector() {
  const target = document.getElementById('couponDaySelector');
  target.innerHTML = '';
  itinerary.forEach(day => {
    const label = document.createElement('label');
    label.className = 'checkbox-chip';
    label.innerHTML = `<input type="checkbox" value="${day.id}" /> <span>Day ${day.id}｜${day.title}</span>`;
    target.appendChild(label);
  });
}

function getSelectedDaysFromForm() {
  return [...document.querySelectorAll('#couponDaySelector input:checked')].map(el => Number(el.value));
}

function setSelectedDays(days) {
  [...document.querySelectorAll('#couponDaySelector input')].forEach(input => {
    input.checked = days.includes(Number(input.value));
  });
}

function setPreviewImage(src) {
  const img = document.getElementById('imagePreview');
  const empty = document.getElementById('imagePreviewEmpty');
  if (src) {
    img.src = src;
    img.classList.remove('hidden');
    empty.classList.add('hidden');
  } else {
    img.src = '';
    img.classList.add('hidden');
    empty.classList.remove('hidden');
  }
}

function resetForm() {
  editingCouponId = null;
  currentImageData = '';
  document.getElementById('couponForm').reset();
  document.getElementById('couponId').value = '';
  setPreviewImage('');
  document.getElementById('cancelEditBtn').classList.add('hidden');
}

function renderCouponStats() {
  const target = document.getElementById('couponStats');
  target.innerHTML = '';
  const all = getAllCoupons();
  const items = [
    { label: '總票券', value: all.length },
    { label: '含圖片', value: all.filter(c => !!c.image).length },
    { label: '已使用', value: all.filter(c => !!c.used).length },
  ];
  items.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<div class="small muted">${item.label}</div><div><strong>${item.value}</strong></div>`;
    target.appendChild(div);
  });
}

// ── Image modal ───────────────────────────────────────────────
function showCouponImage(src, name) {
  const overlay = document.createElement('div');
  overlay.className = 'img-modal-overlay';
  overlay.innerHTML = `<div class="img-modal"><button class="img-modal-close">✕</button><img src="${src}" alt="${name}" /></div>`;
  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target.classList.contains('img-modal-close')) overlay.remove();
  });
  document.body.appendChild(overlay);
}

function renderCouponList() {
  const target = document.getElementById('couponList');
  target.innerHTML = '';
  getAllCoupons().forEach(coupon => {
    const card = document.createElement('div');
    card.className = 'coupon-card';
    const usedBadge = coupon.used ? '<span class="chip chip-green">已使用</span>' : '<span class="chip chip-amber">未使用</span>';
    const dateLabel = coupon.validFrom ? `預計使用：${coupon.validFrom}` : '';

    card.innerHTML = `
      <div class="coupon-card-head">
        <div>
          <h3>${coupon.name}</h3>
          <div class="small muted">類型：${coupon.type}</div>
          ${dateLabel ? `<div class="small muted">${dateLabel}</div>` : ''}
        </div>
        <div class="coupon-actions">
          ${usedBadge}
          <button class="text-btn" data-action="toggle-used" data-id="${coupon.id}">${coupon.used ? '改回未使用' : '標記已使用'}</button>
          ${coupon.image ? `<button class="text-btn" data-action="show-image" data-id="${coupon.id}">顯示票券</button>` : ''}
        </div>
      </div>
      ${coupon.suggestion ? `<div class="small muted">備註：${coupon.suggestion}</div>` : ''}
      ${coupon.image ? `<img class="coupon-card-img" src="${coupon.image}" alt="${coupon.name}" />` : ''}
      <div class="step-action-row">
        <button class="text-btn" data-action="new-coupon">新增</button>
        <button class="text-btn" data-action="edit" data-id="${coupon.id}">修改</button>
        <button class="text-btn delete" data-action="delete" data-id="${coupon.id}">刪除</button>
      </div>
    `;
    target.appendChild(card);
  });

  target.querySelectorAll('[data-action="new-coupon"]').forEach(btn => {
    btn.addEventListener('click', () => {
      resetForm();
      document.getElementById('coupons').scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => document.getElementById('couponName').focus(), 400);
    });
  });
  target.querySelectorAll('[data-action="edit"]').forEach(btn => {
    btn.addEventListener('click', () => startEditCoupon(btn.dataset.id));
  });
  target.querySelectorAll('[data-action="delete"]').forEach(btn => {
    btn.addEventListener('click', () => deleteCoupon(btn.dataset.id));
  });
  target.querySelectorAll('[data-action="toggle-used"]').forEach(btn => {
    btn.addEventListener('click', () => toggleCouponUsed(btn.dataset.id));
  });
  target.querySelectorAll('[data-action="show-image"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const coupon = getAllCoupons().find(c => c.id === btn.dataset.id);
      if (coupon?.image) showCouponImage(coupon.image, coupon.name);
    });
  });
}

function startEditCoupon(id) {
  const coupon = getAllCoupons().find(c => c.id === id);
  if (!coupon) return;

  editingCouponId = coupon.source === 'custom' ? coupon.id : null;
  currentImageData = coupon.image || '';
  document.getElementById('couponId').value = editingCouponId || '';
  document.getElementById('couponName').value = coupon.name || '';
  document.getElementById('couponType').value = coupon.type || '其他';
  document.getElementById('couponValidFrom').value = coupon.validFrom || '';
  document.getElementById('couponSuggestion').value = coupon.suggestion || '';
  setPreviewImage(currentImageData);
  document.getElementById('cancelEditBtn').classList.remove('hidden');
  document.getElementById('coupons').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteCoupon(id) {
  if (id.startsWith('sys-')) {
    hideCopon(id);
  } else {
    saveCustomCoupons(loadCustomCoupons().filter(c => c.id !== id));
  }
  if (editingCouponId === id) resetForm();
  rerenderAll();
}

function toggleCouponUsed(id) {
  if (id.startsWith('sys-')) {
    const idx = defaultCoupons.findIndex(c => c.id === id);
    defaultCoupons[idx].used = !defaultCoupons[idx].used;
  } else {
    const coupons = loadCustomCoupons();
    const idx = coupons.findIndex(c => c.id === id);
    if (idx >= 0) {
      coupons[idx].used = !coupons[idx].used;
      saveCustomCoupons(coupons);
    }
  }
  rerenderAll();
}

function handleImageUpload(file) {
  if (!file) return;
  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    alert('請上傳 JPG 或 PNG 檔案');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    currentImageData = reader.result;
    setPreviewImage(currentImageData);
  };
  reader.readAsDataURL(file);
}

function handleCouponSubmit(event) {
  event.preventDefault();
  const payload = {
    id: editingCouponId || createId(),
    name: document.getElementById('couponName').value.trim(),
    type: document.getElementById('couponType').value,
    validFrom: document.getElementById('couponValidFrom').value,
    validTo: '',
    suggestion: document.getElementById('couponSuggestion').value.trim(),
    relatedDays: [],
    image: currentImageData || '',
    source: 'custom',
    used: false
  };

  if (!payload.name) {
    alert('請輸入票券名稱');
    return;
  }

  const coupons = loadCustomCoupons();
  const index = coupons.findIndex(c => c.id === payload.id);
  if (index >= 0) {
    payload.used = coupons[index].used || false;
    coupons[index] = payload;
  } else {
    coupons.push(payload);
  }
  saveCustomCoupons(coupons);
  resetForm();
  rerenderAll();
}


function resetCustomCoupons() {
  if (!confirm('確定要清空所有自訂 Coupon 嗎？')) return;
  localStorage.removeItem(STORAGE_KEY);
  resetForm();
  rerenderAll();
}

function rerenderAll() {
  renderTripSummary();
  renderReminders();
  renderScheduleCards();
  renderCouponList();
}

function initTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(x => x.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function initEvents() {
  document.getElementById('couponForm').addEventListener('submit', handleCouponSubmit);
  document.getElementById('couponImage').addEventListener('change', e => handleImageUpload(e.target.files[0]));
  document.getElementById('cancelEditBtn').addEventListener('click', resetForm);
  document.getElementById('schedule').addEventListener('click', handleScheduleClick);

  // Reminder mode buttons
  ['New','Edit','Delete'].forEach(m => {
    document.getElementById(`reminder${m}Btn`)?.addEventListener('click', () => {
      reminderMode = reminderMode === m.toLowerCase() ? null : m.toLowerCase();
      renderReminders();
    });
  });
}

function init() {
  initTabs();
  initEvents();
  rerenderAll();
}

document.addEventListener('DOMContentLoaded', init);
