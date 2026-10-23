// Keep this phone demo session-only: app changes may be used during a visit,
// but anything stored by the app is cleared when the page is refreshed.
try {
  for (let index = window.localStorage.length - 1; index >= 0; index -= 1) {
    const key = window.localStorage.key(index);
    if (key?.startsWith('orbit-phone-')) window.localStorage.removeItem(key);
  }
} catch (_error) { /* Continue with the default demo state if storage is unavailable. */ }

/*
 * EDIT HERE FIRST
 * ----------------
 * Change passcode, sample data, and the home screen app list here.
 * Translated interface copy is in COPY below.
 */
const PHONE_CONFIG = {
  passcode: '0913',
  requirePasscode: true,
  appName: 'Orbit Phone',
  location: 'Seoul',
  temperature: '18°',
  apps: [
    { name: 'Reminders', icon: '☷', color: 'linear-gradient(145deg,#ffffff,#f1f2f4)', type: 'reminders' },
    { name: 'Photos', icon: '✿', color: '#fff', iconAsset: 'assets/icons/photos.jpg', type: 'photos' },
    { name: 'Mail', icon: '✉', color: 'linear-gradient(145deg,#64c5ff,#2374eb)', badge: '6', type: 'mail' },
    { name: 'Calendar', icon: '17', color: '#fff', iconAsset: 'assets/icons/calendar.jpg', type: 'calendar' },
    { name: 'Clock', icon: '◷', color: '#fff', type: 'clock' },
    { name: 'Notes', icon: '▤', color: '#fff', iconAsset: 'assets/icons/notes.jpg', type: 'notes' },
    { name: 'Weather', icon: '⛅', color: '#fff', iconAsset: 'assets/icons/weather.jpg', type: 'weather' },
    { name: 'Settings', icon: '⚙', color: '#fff', iconAsset: 'assets/icons/settings.jpg', type: 'settings' },
    { name: 'Calculator', icon: '＋', color: '#fff', iconAsset: 'assets/icons/calculator.jpg', type: 'calculator' },
    { name: 'YouTube', icon: '▶', color: '#fff', iconAsset: 'assets/icons/youtube.jpg', type: 'youtube' },
    { name: 'Camera', icon: '▣', color: '#fff', iconAsset: 'assets/icons/camera.jpg', type: 'camera' },
    { name: 'Instagram', icon: '◎', color: 'linear-gradient(135deg,#833ab4,#fd1d1d 55%,#fcb045)', type: 'instagram' },
  ],
  dock: [
    { name: 'Phone', icon: '☎', color: '#fff', iconAsset: 'assets/icons/phone.jpg', type: 'phone' },
    { name: 'Naver', icon: 'N', color: '#03C75A', type: 'naver' },
    { name: 'KakaoTalk', icon: 'TALK', color: '#FAE100', type: 'kakaotalk' },
    { name: 'Spotify', icon: '♫', color: '#000', type: 'spotify' },
  ],
};

// Public RIIZE schedule entries for 2026. Edit this list to add or correct dates.
const RIIZE_CALENDAR_YEAR = Number(new Intl.DateTimeFormat('en', { timeZone: 'Asia/Seoul', year: 'numeric' }).format(new Date()));
const seoulTomorrowKey = () => {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const todayKey = `${values.year}-${values.month}-${values.day}`;
  const tomorrow = new Date(`${todayKey}T12:00:00Z`);
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
  return tomorrow.toISOString().slice(0, 10);
};
const RIIZE_2026_EVENTS = [
  { date: seoulTomorrowKey(), time: '7:00 PM', title: 'Dinner with Eunseok', titleByLanguage: { en: 'Dinner with Eunseok', 'zh-Hant': '和恩奭吃晚餐', ko: '은석이와 저녁 식사' }, type: 'event', location: 'Dinner', locationByLanguage: { en: 'Dinner', 'zh-Hant': '晚餐', ko: '저녁 식사' }, custom: true, dailyTomorrow: true },
  { date: '2026-03-02', title: 'Wonbin’s birthday', titleByLanguage: { en: 'Wonbin’s birthday', 'zh-Hant': '元彬生日', ko: '원빈 생일' }, type: 'birthday', location: 'Happy birthday, Wonbin!', locationByLanguage: { en: 'Happy birthday, Wonbin!', 'zh-Hant': '元彬，生日快樂！', ko: '원빈 생일 축하해!' } },
  { date: '2026-01-10', title: 'RIIZING LOUD — Jakarta', type: 'concert', location: 'ICE BSD, Indonesia', source: 'https://weverse.io/riize/notice/26847' },
  { date: '2026-01-17', title: 'RIIZING LOUD — Manila', type: 'concert', location: 'Mall of Asia Arena, Philippines', source: 'https://weverse.io/riize/notice/26847' },
  { date: '2026-01-24', title: 'RIIZING LOUD — Singapore', type: 'concert', location: 'Singapore Indoor Stadium', source: 'https://weverse.io/riize/notice/26847' },
  { date: '2026-01-31', title: 'SMTOWN LIVE 2025–26', type: 'festival', location: 'Fukuoka, Japan' },
  { date: '2026-02-01', title: 'SMTOWN LIVE 2025–26', type: 'festival', location: 'Fukuoka, Japan' },
  { date: '2026-02-07', title: 'RIIZING LOUD — Macau', type: 'concert', location: 'Galaxy Arena', source: 'https://weverse.io/riize/notice/26847' },
  { date: '2026-02-08', title: 'RIIZING LOUD — Macau', type: 'concert', location: 'Galaxy Arena', source: 'https://weverse.io/riize/notice/26847' },
  { date: '2026-02-09', title: '“All of You” digital release', type: 'comeback', location: 'Japan single' },
  { date: '2026-02-14', title: 'SMTOWN LIVE — Bangkok', type: 'festival', location: 'Bangkok, Thailand' },
  { date: '2026-02-18', title: '“All of You” release', type: 'comeback', location: '2nd Japanese single', source: 'https://riizeofficial.jp/news/' },
  { date: '2026-02-21', title: 'RIIZING LOUD Special Edition', type: 'concert', location: 'Tokyo Dome, Japan', source: 'https://riizeofficial.jp/news/20250913/' },
  { date: '2026-02-22', title: 'RIIZING LOUD Special Edition', type: 'concert', location: 'Tokyo Dome, Japan', source: 'https://riizeofficial.jp/news/20250913/' },
  { date: '2026-02-23', title: 'RIIZING LOUD Special Edition', type: 'concert', location: 'Tokyo Dome, Japan', source: 'https://riizeofficial.jp/news/20250913/' },
  { date: '2026-03-06', title: 'RIIZING LOUD FINALE IN SEOUL', type: 'concert', location: 'KSPO Dome', source: 'https://weverse.io/riize/notice/32821' },
  { date: '2026-03-07', title: 'RIIZING LOUD FINALE IN SEOUL', type: 'concert', location: 'KSPO Dome', source: 'https://weverse.io/riize/notice/32821' },
  { date: '2026-03-08', title: 'RIIZING LOUD FINALE IN SEOUL', type: 'concert', location: 'KSPO Dome', source: 'https://weverse.io/riize/notice/32821' },
  { date: '2026-03-15', title: 'Lollapalooza Argentina', type: 'festival', location: 'Buenos Aires' },
  { date: '2026-03-16', title: 'Lollapalooza Chile', type: 'festival', location: 'Santiago' },
  { date: '2026-03-19', title: 'Eunseok’s birthday', titleByLanguage: { en: 'Eunseok’s birthday', 'zh-Hant': '恩奭生日', ko: '은석 생일' }, type: 'birthday', location: 'Happy birthday, Eunseok!', locationByLanguage: { en: 'Happy birthday, Eunseok!', 'zh-Hant': '恩奭，生日快樂！', ko: '은석 생일 축하해!' }, noteByLanguage: { en: 'Ah, what should I buy for eunseok...?', 'zh-Hant': '買什麼給恩奭好呢...?', ko: '은석이한테 뭐 사주지? 고민이네...' } },
  { date: '2026-03-21', title: 'Anton’s birthday', titleByLanguage: { en: 'Anton’s birthday', 'zh-Hant': '李燦榮生日', ko: '앤톤 생일' }, type: 'birthday', location: 'Happy birthday, Anton!', locationByLanguage: { en: 'Happy birthday, Anton!', 'zh-Hant': '李燦榮，生日快樂！', ko: '앤톤 생일 축하해!' } },
  { date: '2026-03-20', title: 'Lollapalooza Brasil', type: 'festival', location: 'São Paulo' },
  { date: '2026-03-22', title: 'Lollapalooza Brasil', type: 'festival', location: 'São Paulo' },
  { date: '2026-04-10', title: 'The Performance', type: 'festival', location: 'Japan' },
  { date: '2026-04-11', title: 'The Performance', type: 'festival', location: 'Japan' },
  { date: '2026-04-12', title: '2026 LOVESOME', type: 'festival', location: 'Seoul' },
  { date: '2026-04-14', title: 'K2O Songkran Music Festival', type: 'festival', location: 'Thailand' },
  { date: '2026-04-19', title: 'RIIZE × SATUR fansign', type: 'fansign', location: 'Starfield Hanam, Korea' },
  { date: '2026-04-25', title: 'Weibo International Entertainment Festival', type: 'festival', location: 'Macau' },
  { date: '2026-05-08', title: 'Incheon National University Festival', type: 'festival', location: 'Incheon, Korea' },
  { date: '2026-05-10', title: 'Kstyle Party 2026', type: 'festival', location: 'Japan' },
  { date: '2026-05-14', title: 'Sogang University Festival “Odyssey”', type: 'festival', location: 'Seoul' },
  { date: '2026-05-14', title: 'Soongsil University Festival “Cheongram”', type: 'festival', location: 'Seoul' },
  { date: '2026-05-25', title: 'Channel B Baseball Music Fest', type: 'festival', location: 'Taiwan' },
  { date: '2026-05-30', title: '1000 Days Fan Party “RIIZE OFFIICE”', type: 'fanmeeting', location: 'Songdo Convensia, Incheon' },
  { date: '2026-06-15', title: 'The 2nd Mini Album “II” release', type: 'comeback', location: 'Digital release', source: 'https://riizeofficial.jp/news/20260526/' },
  { date: '2026-06-15', title: 'Ulsan Music Festival', type: 'festival', location: 'Ulsan, Korea' },
  { date: '2026-06-20', title: 'RAPBEAT 2026', type: 'festival', location: 'Seoul' },
  { date: '2026-06-21', title: '“II” video-call fansign', type: 'fansign', location: 'Online event' },
  { date: '2026-06-26', title: 'MyK LIVE', type: 'festival', location: 'KINTEX, Goyang' },
  { date: '2026-06-28', title: 'Busan One Asia Festival', type: 'festival', location: 'Busan' },
  { date: '2026-06-29', title: '“II” Hong Kong fansign & photo event', type: 'fansign', location: 'Hong Kong' },
  { date: '2026-06-30', title: '“II” Hong Kong fansign & photo event', type: 'fansign', location: 'Hong Kong' },
  { date: '2026-07-01', title: '“II” Hong Kong fansign & photo event', type: 'fansign', location: 'Hong Kong' },
  { date: '2026-07-02', title: '“II” Hong Kong fansign & photo event', type: 'fansign', location: 'Hong Kong' },
  { date: '2026-07-05', title: '18th Beer Rock Festival', type: 'festival', location: 'Taiwan' },
  { date: '2026-07-08', title: '“II” Japanese release', type: 'comeback', location: 'Japan' },
  { date: '2026-07-08', title: '“II” Hong Kong fansign & photo event', type: 'fansign', location: 'Hong Kong' },
  { date: '2026-07-09', title: '“II” Hong Kong fansign & photo event', type: 'fansign', location: 'Hong Kong' },
  { date: '2026-07-10', title: 'RIIZE JAPAN FANMEETING “RPG”', type: 'fanmeeting', location: 'Marine Messe Fukuoka B Hall', source: 'https://riizeofficial.jp/news/20260424/' },
  { date: '2026-07-10', title: '“RPG” all-member send-off event', type: 'fansign', location: 'Fukuoka, Japan', source: 'https://riizeofficial.jp/news/20260608/' },
  { date: '2026-07-10', title: '“II” video-call fansign', type: 'fansign', location: 'Online event' },
  { date: '2026-07-14', title: '“II” Malaysia fansign & photo event', type: 'fansign', location: 'Kuala Lumpur' },
  { date: '2026-07-15', title: 'RIIZE JAPAN FANMEETING “RPG”', type: 'fanmeeting', location: 'Yoyogi National Gymnasium, Tokyo', source: 'https://riizeofficial.jp/news/20260424/' },
  { date: '2026-07-15', title: '“RPG” all-member send-off event', type: 'fansign', location: 'Tokyo, Japan', source: 'https://riizeofficial.jp/news/20260608/' },
  { date: '2026-07-16', title: 'RIIZE JAPAN FANMEETING “RPG” — 2 shows', type: 'fanmeeting', location: 'Yoyogi National Gymnasium, Tokyo', source: 'https://riizeofficial.jp/news/20260424/' },
  { date: '2026-07-16', title: '“RPG” all-member send-off event', type: 'fansign', location: 'Tokyo, Japan', source: 'https://riizeofficial.jp/news/20260608/' },
  { date: '2026-07-17', title: '“II” Malaysia fansign & photo event', type: 'fansign', location: 'Kuala Lumpur' },
  { date: '2026-07-22', title: '“Sunburst” premium group fansign', type: 'fansign', location: 'Osaka, Japan', source: 'https://riizeofficial.jp/news/2026070902/' },
  { date: '2026-07-23', title: 'RIIZE JAPAN FANMEETING “RPG”', type: 'fanmeeting', location: 'World Memorial Hall, Kobe', source: 'https://riizeofficial.jp/news/20260424/' },
  { date: '2026-07-23', title: '“RPG” all-member send-off event', type: 'fansign', location: 'Kobe, Japan', source: 'https://riizeofficial.jp/news/20260608/' },
  { date: '2026-07-24', title: 'RIIZE JAPAN FANMEETING “RPG”', type: 'fanmeeting', location: 'World Memorial Hall, Kobe', source: 'https://riizeofficial.jp/news/20260424/' },
  { date: '2026-07-24', title: '“RPG” all-member send-off event', type: 'fansign', location: 'Kobe, Japan', source: 'https://riizeofficial.jp/news/20260608/' },
  { date: '2026-07-26', title: 'WATERBOMB SEOUL 2026', type: 'festival', location: 'Goyang, Korea' },
  { date: '2026-08-08', title: 'LG Twins first pitch & performance', type: 'performance', location: 'Seoul' },
  { date: '2026-08-09', title: 'SBS Gayo Daejeon Summer', type: 'festival', location: 'KINTEX, Goyang' },
  { date: '2026-08-12', title: '“Sunburst” premium group fansign', type: 'fansign', location: 'Tokyo, Japan', source: 'https://riizeofficial.jp/news/2026070902/' },
  { date: '2026-08-13', title: 'Mezamashi WANGAN Fest', type: 'festival', location: 'Tokyo, Japan' },
  { date: '2026-08-14', title: 'POP MART × RIIZE pop-up opens', type: 'event', location: 'Japan (through Aug 23)' },
  { date: '2026-08-16', title: '“II” video-call fansign', type: 'fansign', location: 'Online event' },
  { date: '2026-08-22', title: 'TMElive International Music Awards', type: 'awards', location: 'Hong Kong' },
  { date: '2026-08-26', title: '“Sunburst” Japanese single release', type: 'comeback', location: 'Japan', source: 'https://riizeofficial.jp/news/20260709/' },
  { date: '2026-08-27', title: 'K-WORLD DREAM AWARDS', type: 'awards', location: 'Goyang, Korea' },
  { date: '2026-09-10', title: 'Spotify House Seoul — Day 1', type: 'event', location: 'Seoul' },
  { date: '2026-09-12', title: '3rd Anniversary Fanmeeting “Ch. RIIZE : ON AIR”', type: 'fanmeeting', location: 'INSPIRE Arena, Incheon', source: 'https://weverse.io/riize/notice/37622' },
  { date: '2026-09-13', title: '3rd Anniversary Fanmeeting “Ch. RIIZE : ON AIR”', type: 'fanmeeting', location: 'INSPIRE Arena, Incheon', source: 'https://weverse.io/riize/notice/37622' },
  { date: '2026-09-13', title: 'My birthday', titleByLanguage: { en: 'My birthday', 'zh-Hant': '我的生日', ko: '내 생일' }, type: 'birthday', location: 'My birthday', locationByLanguage: { en: 'My birthday', 'zh-Hant': '我的生日', ko: '내 생일' } },
  { date: '2026-09-19', title: 'The Fact Music Awards 2026', type: 'awards', location: 'Busan' },
  { date: '2026-09-20', title: 'FEST. INAZUMA 2026', type: 'festival', location: 'Japan' },
  { date: '2026-09-22', title: 'Inkigayo Live in Tokyo', type: 'festival', location: 'Japan' },
  { date: '2026-09-23', title: 'Inkigayo Live in Tokyo', type: 'festival', location: 'Japan' },
  { date: '2026-09-26', title: 'Milan Fashion Show', titleByLanguage: { en: 'Milan Fashion Show', 'zh-Hant': '米蘭時裝秀', ko: '밀라노 패션쇼' }, type: 'event', location: 'Milan, Italy', locationByLanguage: { en: 'Milan, Italy', 'zh-Hant': '義大利米蘭', ko: '이탈리아 밀라노' } },
  { date: '2026-10-20', title: '“TON-AIR” begins', type: 'event', location: 'Anton’s radio program' },
  { date: '2026-10-21', title: 'Wonbin × Off & Relax premium fansign', type: 'fansign', location: 'Tokyo, Japan' },
  { date: '2026-10-26', title: '“Insomnia” digital single release', type: 'comeback', location: 'Korea' },
  { date: '2026-10-28', title: 'Hyo’s Level Up appearance', type: 'performance', location: 'Online broadcast' },
  { date: '2026-11-08', title: 'Korea Grand Music Awards 2026', type: 'awards', location: 'Gocheok Sky Dome, Seoul' },
  { date: '2026-11-14', title: 'Melon Music Awards 2026', type: 'awards', location: 'Gocheok Sky Dome, Seoul' },
  { date: '2026-11-21', title: 'Sohee’s birthday', titleByLanguage: { en: 'Sohee’s birthday', 'zh-Hant': '炤熙生日', ko: '소희 생일' }, type: 'birthday', location: 'Happy birthday, Sohee!', locationByLanguage: { en: 'Happy birthday, Sohee!', 'zh-Hant': '炤熙，生日快樂！', ko: '소희 생일 축하해!' } },
  { date: '2026-11-25', title: 'Shotaro’s birthday', titleByLanguage: { en: 'Shotaro’s birthday', 'zh-Hant': '將太郎生日', ko: '쇼타로 생일' }, type: 'birthday', location: 'Happy birthday, Shotaro!', locationByLanguage: { en: 'Happy birthday, Shotaro!', 'zh-Hant': '將太郎，生日快樂！', ko: '쇼타로 생일 축하해!' } },
  { date: '2026-12-05', title: 'Asia Artist Awards 2026 — RIIZE lineup (show date TBA)', type: 'awards', location: 'Kaohsiung, Taiwan' },
  { date: '2026-12-06', title: 'Asia Artist Awards 2026 — RIIZE lineup (show date TBA)', type: 'awards', location: 'Kaohsiung, Taiwan' },
  { date: '2026-12-12', title: 'Music Bank Global Festival in Japan', type: 'festival', location: 'Tokyo, Japan' },
];

const calendarEvents = () => RIIZE_2026_EVENTS.map((event) => event.dailyTomorrow ? { ...event, date: seoulTomorrowKey() } : event);

// Localized calendar text. Official artist, album, and event names stay recognizable.
const CALENDAR_EVENT_TRANSLATIONS = {
  'zh-Hant': {
    titles: {
      'RIIZING LOUD — Jakarta': 'RIIZING LOUD — 雅加達',
      'RIIZING LOUD — Manila': 'RIIZING LOUD — 馬尼拉',
      'RIIZING LOUD — Singapore': 'RIIZING LOUD — 新加坡',
      'SMTOWN LIVE 2025–26': 'SMTOWN LIVE 2025–26 演唱會',
      'RIIZING LOUD — Macau': 'RIIZING LOUD — 澳門',
      '“All of You” digital release': '「All of You」數位單曲發行',
      'SMTOWN LIVE — Bangkok': 'SMTOWN LIVE — 曼谷',
      '“All of You” release': '「All of You」單曲發行',
      'RIIZING LOUD Special Edition': 'RIIZING LOUD 特別版演唱會',
      'RIIZING LOUD FINALE IN SEOUL': 'RIIZING LOUD 首爾最終場',
      'Lollapalooza Argentina': 'Lollapalooza 阿根廷場',
      'Lollapalooza Chile': 'Lollapalooza 智利場',
      'Lollapalooza Brasil': 'Lollapalooza 巴西場',
      'The Performance': 'The Performance 演出',
      '2026 LOVESOME': '2026 LOVESOME 音樂節',
      'K2O Songkran Music Festival': 'K2O 潑水節音樂節',
      'RIIZE × SATUR fansign': 'RIIZE × SATUR 粉絲簽售會',
      'Weibo International Entertainment Festival': '微博國際娛樂節',
      'Incheon National University Festival': '仁川國立大學校慶',
      'Kstyle Party 2026': 'Kstyle Party 2026',
      'Sogang University Festival “Odyssey”': '西江大學校慶「Odyssey」',
      'Soongsil University Festival “Cheongram”': '崇實大學校慶「Cheongram」',
      'Channel B Baseball Music Fest': 'Channel B 棒球音樂節',
      '1000 Days Fan Party “RIIZE OFFIICE”': '出道 1000 天粉絲派對「RIIZE OFFIICE」',
      'The 2nd Mini Album “II” release': '第 2 張迷你專輯「II」發行',
      'Ulsan Music Festival': '蔚山音樂節',
      'RAPBEAT 2026': 'RAPBEAT 2026 音樂節',
      '“II” video-call fansign': '「II」視訊通話粉絲簽售會',
      'MyK LIVE': 'MyK LIVE 演出',
      'Busan One Asia Festival': '釜山 One Asia Festival',
      '“II” Hong Kong fansign & photo event': '「II」香港粉絲簽售暨合照活動',
      '18th Beer Rock Festival': '第 18 屆 Beer Rock 音樂節',
      '“II” Japanese release': '「II」日本版發行',
      'RIIZE JAPAN FANMEETING “RPG”': 'RIIZE 日本粉絲見面會「RPG」',
      '“RPG” all-member send-off event': '「RPG」全員歡送會',
      'RIIZE JAPAN FANMEETING “RPG” — 2 shows': 'RIIZE 日本粉絲見面會「RPG」— 2 場',
      '“II” Malaysia fansign & photo event': '「II」馬來西亞粉絲簽售暨合照活動',
      '“Sunburst” premium group fansign': '「Sunburst」特別團體粉絲簽售會',
      'WATERBOMB SEOUL 2026': 'WATERBOMB SEOUL 2026 音樂節',
      'LG Twins first pitch & performance': 'LG Twins 開球暨演出',
      'SBS Gayo Daejeon Summer': 'SBS 歌謠大戰 Summer',
      'Mezamashi WANGAN Fest': 'Mezamashi WANGAN 音樂節',
      'POP MART × RIIZE pop-up opens': 'POP MART × RIIZE 快閃店開幕',
      'TMElive International Music Awards': 'TMElive 國際音樂大獎',
      '“Sunburst” Japanese single release': '「Sunburst」日本單曲發行',
      'K-WORLD DREAM AWARDS': 'K-WORLD DREAM AWARDS 頒獎典禮',
      'Spotify House Seoul — Day 1': 'Spotify House Seoul — 第 1 天',
      '3rd Anniversary Fanmeeting “Ch. RIIZE : ON AIR”': '3 週年粉絲見面會「Ch. RIIZE : ON AIR」',
      'The Fact Music Awards 2026': 'The Fact Music Awards 2026 頒獎典禮',
      'FEST. INAZUMA 2026': 'FEST. INAZUMA 2026 音樂節',
      'Inkigayo Live in Tokyo': '人氣歌謠 Live in Tokyo',
      '“TON-AIR” begins': '「TON-AIR」節目開播',
      'Wonbin × Off & Relax premium fansign': '元彬 × Off & Relax 特別粉絲簽售會',
      '“Insomnia” digital single release': '「Insomnia」數位單曲發行',
      'Hyo’s Level Up appearance': '孝淵出演 Level Up 節目',
      'Korea Grand Music Awards 2026': 'Korea Grand Music Awards 2026 頒獎典禮',
      'Melon Music Awards 2026': 'Melon Music Awards 2026 頒獎典禮',
      'Asia Artist Awards 2026 — RIIZE lineup (show date TBA)': 'Asia Artist Awards 2026 — RIIZE 出演（日期待公布）',
      'Music Bank Global Festival in Japan': 'Music Bank 日本全球音樂節',
    },
    locations: {
      'ICE BSD, Indonesia': '印度尼西亞 ICE BSD', 'Mall of Asia Arena, Philippines': '菲律賓 Mall of Asia Arena',
      'Singapore Indoor Stadium': '新加坡室內體育館', 'Fukuoka, Japan': '日本福岡', 'Galaxy Arena': '澳門 Galaxy Arena',
      'Japan single': '日本單曲', 'Bangkok, Thailand': '泰國曼谷', '2nd Japanese single': '第 2 張日本單曲',
      'Tokyo Dome, Japan': '日本東京巨蛋', 'KSPO Dome': '首爾 KSPO Dome', 'Buenos Aires': '阿根廷布宜諾斯艾利斯',
      'Santiago': '智利聖地牙哥', 'São Paulo': '巴西聖保羅', 'Japan': '日本', 'Seoul': '首爾', 'Thailand': '泰國',
      'Starfield Hanam, Korea': '韓國河南 Starfield', 'Macau': '澳門', 'Incheon, Korea': '韓國仁川', 'Digital release': '數位發行',
      'Ulsan, Korea': '韓國蔚山', 'Online event': '線上活動', 'KINTEX, Goyang': '高陽 KINTEX', 'Busan': '釜山',
      'Hong Kong': '香港', 'Taiwan': '台灣', 'Songdo Convensia, Incheon': '仁川 Songdo Convensia',
      'Kuala Lumpur': '吉隆坡', 'Marine Messe Fukuoka B Hall': '福岡 Marine Messe B 展覽館',
      'Tokyo, Japan': '日本東京', 'Yoyogi National Gymnasium, Tokyo': '東京代代木國立體育館', 'Osaka, Japan': '日本大阪',
      'World Memorial Hall, Kobe': '神戶 World Memorial Hall', 'Kobe, Japan': '日本神戶', 'Goyang, Korea': '韓國高陽',
      'Tokyo, Japan': '日本東京', 'Japan (through Aug 23)': '日本（至 8 月 23 日）', 'INSPIRE Arena, Incheon': '仁川 INSPIRE Arena',
      'Anton’s radio program': '李燦榮的電台節目', 'Korea': '韓國', 'Online broadcast': '線上播出',
      'Gocheok Sky Dome, Seoul': '首爾高尺天空巨蛋', 'Kaohsiung, Taiwan': '台灣高雄', 'Tokyo, Japan': '日本東京',
    },
  },
  ko: {
    titles: {
      'RIIZING LOUD — Jakarta': 'RIIZING LOUD — 자카르타',
      'RIIZING LOUD — Manila': 'RIIZING LOUD — 마닐라',
      'RIIZING LOUD — Singapore': 'RIIZING LOUD — 싱가포르',
      'SMTOWN LIVE 2025–26': 'SMTOWN LIVE 2025–26 공연',
      'RIIZING LOUD — Macau': 'RIIZING LOUD — 마카오',
      '“All of You” digital release': '“All of You” 디지털 싱글 발매',
      'SMTOWN LIVE — Bangkok': 'SMTOWN LIVE — 방콕',
      '“All of You” release': '“All of You” 싱글 발매',
      'RIIZING LOUD Special Edition': 'RIIZING LOUD 스페셜 에디션 공연',
      'RIIZING LOUD FINALE IN SEOUL': 'RIIZING LOUD 서울 파이널 공연',
      'Lollapalooza Argentina': 'Lollapalooza 아르헨티나',
      'Lollapalooza Chile': 'Lollapalooza 칠레',
      'Lollapalooza Brasil': 'Lollapalooza 브라질',
      'The Performance': 'The Performance 공연',
      '2026 LOVESOME': '2026 LOVESOME 페스티벌',
      'K2O Songkran Music Festival': 'K2O 송크란 뮤직 페스티벌',
      'RIIZE × SATUR fansign': 'RIIZE × SATUR 팬사인회',
      'Weibo International Entertainment Festival': '웨이보 국제 엔터테인먼트 페스티벌',
      'Incheon National University Festival': '인천대학교 축제',
      'Kstyle Party 2026': 'Kstyle Party 2026',
      'Sogang University Festival “Odyssey”': '서강대학교 축제 “Odyssey”',
      'Soongsil University Festival “Cheongram”': '숭실대학교 축제 “Cheongram”',
      'Channel B Baseball Music Fest': 'Channel B 야구 뮤직 페스트',
      '1000 Days Fan Party “RIIZE OFFIICE”': '데뷔 1000일 팬 파티 “RIIZE OFFIICE”',
      'The 2nd Mini Album “II” release': '두 번째 미니 앨범 “II” 발매',
      'Ulsan Music Festival': '울산 뮤직 페스티벌',
      'RAPBEAT 2026': 'RAPBEAT 2026 페스티벌',
      '“II” video-call fansign': '“II” 영상 통화 팬사인회',
      'MyK LIVE': 'MyK LIVE 공연',
      'Busan One Asia Festival': '부산 One Asia Festival',
      '“II” Hong Kong fansign & photo event': '“II” 홍콩 팬사인회 및 포토 이벤트',
      '18th Beer Rock Festival': '제18회 Beer Rock Festival',
      '“II” Japanese release': '“II” 일본 발매',
      'RIIZE JAPAN FANMEETING “RPG”': 'RIIZE 일본 팬미팅 “RPG”',
      '“RPG” all-member send-off event': '“RPG” 멤버 전원 배웅 이벤트',
      'RIIZE JAPAN FANMEETING “RPG” — 2 shows': 'RIIZE 일본 팬미팅 “RPG” — 2회 공연',
      '“II” Malaysia fansign & photo event': '“II” 말레이시아 팬사인회 및 포토 이벤트',
      '“Sunburst” premium group fansign': '“Sunburst” 프리미엄 단체 팬사인회',
      'WATERBOMB SEOUL 2026': 'WATERBOMB SEOUL 2026 페스티벌',
      'LG Twins first pitch & performance': 'LG 트윈스 시구 및 공연',
      'SBS Gayo Daejeon Summer': 'SBS 가요대전 Summer',
      'Mezamashi WANGAN Fest': '메자마시 WANGAN 페스트',
      'POP MART × RIIZE pop-up opens': 'POP MART × RIIZE 팝업스토어 오픈',
      'TMElive International Music Awards': 'TMElive 국제 뮤직 어워즈',
      '“Sunburst” Japanese single release': '“Sunburst” 일본 싱글 발매',
      'K-WORLD DREAM AWARDS': 'K-WORLD DREAM AWARDS 시상식',
      'Spotify House Seoul — Day 1': 'Spotify House Seoul — 1일 차',
      '3rd Anniversary Fanmeeting “Ch. RIIZE : ON AIR”': '3주년 팬미팅 “Ch. RIIZE : ON AIR”',
      'The Fact Music Awards 2026': 'The Fact Music Awards 2026 시상식',
      'FEST. INAZUMA 2026': 'FEST. INAZUMA 2026 페스티벌',
      'Inkigayo Live in Tokyo': '인기가요 Live in Tokyo',
      '“TON-AIR” begins': '“TON-AIR” 방송 시작',
      'Wonbin × Off & Relax premium fansign': '원빈 × Off & Relax 프리미엄 팬사인회',
      '“Insomnia” digital single release': '“Insomnia” 디지털 싱글 발매',
      'Hyo’s Level Up appearance': '효연의 Level Up 출연',
      'Korea Grand Music Awards 2026': 'Korea Grand Music Awards 2026 시상식',
      'Melon Music Awards 2026': 'Melon Music Awards 2026 시상식',
      'Asia Artist Awards 2026 — RIIZE lineup (show date TBA)': 'Asia Artist Awards 2026 — RIIZE 출연 (날짜 미정)',
      'Music Bank Global Festival in Japan': '뮤직뱅크 글로벌 페스티벌 인 재팬',
    },
    locations: {
      'ICE BSD, Indonesia': '인도네시아 ICE BSD', 'Mall of Asia Arena, Philippines': '필리핀 Mall of Asia Arena',
      'Singapore Indoor Stadium': '싱가포르 실내 경기장', 'Fukuoka, Japan': '일본 후쿠오카', 'Galaxy Arena': '마카오 Galaxy Arena',
      'Japan single': '일본 싱글', 'Bangkok, Thailand': '태국 방콕', '2nd Japanese single': '두 번째 일본 싱글',
      'Tokyo Dome, Japan': '일본 도쿄돔', 'KSPO Dome': '서울 KSPO Dome', 'Buenos Aires': '아르헨티나 부에노스아이레스',
      'Santiago': '칠레 산티아고', 'São Paulo': '브라질 상파울루', 'Japan': '일본', 'Seoul': '서울', 'Thailand': '태국',
      'Starfield Hanam, Korea': '한국 하남 스타필드', 'Macau': '마카오', 'Incheon, Korea': '한국 인천', 'Digital release': '디지털 발매',
      'Ulsan, Korea': '한국 울산', 'Online event': '온라인 이벤트', 'KINTEX, Goyang': '고양 KINTEX', 'Busan': '부산',
      'Hong Kong': '홍콩', 'Taiwan': '대만', 'Songdo Convensia, Incheon': '인천 송도컨벤시아',
      'Kuala Lumpur': '쿠알라룸푸르', 'Marine Messe Fukuoka B Hall': '마린멧세 후쿠오카 B관',
      'Tokyo, Japan': '일본 도쿄', 'Yoyogi National Gymnasium, Tokyo': '도쿄 국립 요요기 경기장', 'Osaka, Japan': '일본 오사카',
      'World Memorial Hall, Kobe': '고베 월드기념홀', 'Kobe, Japan': '일본 고베', 'Goyang, Korea': '한국 고양',
      'Japan (through Aug 23)': '일본 (8월 23일까지)', 'INSPIRE Arena, Incheon': '인천 INSPIRE Arena',
      'Anton’s radio program': '앤톤 라디오 프로그램', 'Korea': '한국', 'Online broadcast': '온라인 방송',
      'Gocheok Sky Dome, Seoul': '서울 고척스카이돔', 'Kaohsiung, Taiwan': '대만 가오슝',
    },
  },
};

function localizedCalendarText(event, field) {
  const explicitTranslation = event[`${field}ByLanguage`]?.[currentLanguage];
  if (explicitTranslation) return explicitTranslation;
  return CALENDAR_EVENT_TRANSLATIONS[currentLanguage]?.[field === 'title' ? 'titles' : 'locations']?.[event[field]] || event[field];
}

// All interface copy lives here, so adding or revising translations is easy.
const COPY = {
  en: {
    locale: 'en-US', language: 'English', location: 'Seoul', lockScreen: 'Lock screen', chooseLanguage: 'Choose language',
    swipe: 'Swipe up to open', reminder: 'Reminder', reminderBody: 'Dinner with Eunseok · Tomorrow at 7:00 PM', now: 'now',
    passcode: 'Enter Passcode', fourDigit: 'Four digit passcode', deleteDigit: 'Delete last digit', emergency: 'Emergency', cancel: 'Cancel',
    flashlight: 'Toggle flashlight', camera: 'Open camera', home: 'Go to home screen', homeScreen: 'Home screen', close: 'Close', statusIcons: 'Cellular, Wi-Fi, battery',
    dynamicIsland: 'Open Dynamic Island details', dynamicIslandExpanded: 'Close Dynamic Island details', islandLocation: 'Seoul · 5G',
    eventOne: 'Groceries', eventTwo: 'Laundry', allDay: 'All-day', weatherSummary: 'Mostly Sunny', weatherRange: 'H:21°  ·  L:12°', search: 'Search',
    weatherLoading: 'Loading weather', weatherUnavailable: 'Weather unavailable', weatherHighLow: 'H:{high}°  ·  L:{low}°',
    weatherFeelsLike: 'Feels like {temperature}°', weatherHourly: 'HOURLY FORECAST', weatherWeek: '7-DAY FORECAST', weatherToday: 'Today',
    calendarToday: 'Today', calendarNoEvents: 'No events', calendarPreviousMonth: 'Previous month', calendarNextMonth: 'Next month',
    calendarAddSchedule: 'Add schedule', calendarEventTitle: 'Schedule title', calendarEventTime: 'Time (optional)', calendarEventLocation: 'Location (optional)', calendarSaveSchedule: 'Save', calendarCancelSchedule: 'Cancel',
    calendarCategories: { concert: 'Concert', comeback: 'Release', fansign: 'Fansign', fanmeeting: 'Fan meeting', festival: 'Festival', awards: 'Awards', performance: 'Appearance', event: 'Event', birthday: 'Birthday' },
    weatherCredit: 'Weather data by Open-Meteo', spotifyLabel: 'Spotify', spotifyUnlock: 'Enter your passcode to open Spotify',
    spotifyPopup: 'Spotify could not open automatically. Tap here to open Spotify.', batteryStatus: 'Battery 23 percent', caption: 'A little world in your pocket', calendarDay: 'SATURDAY',
    cameraUnavailable: 'Camera access is unavailable in this browser.', cameraPermission: 'Allow camera access in your browser to use the camera preview.',
    cameraTakePhoto: 'Take photo', cameraSwitch: 'Switch camera', cameraVideo: 'Video', cameraPhoto: 'Photo',
    conditions: { clear: 'Clear', mostlyClear: 'Mostly clear', partlyCloudy: 'Partly cloudy', cloudy: 'Cloudy', fog: 'Fog', drizzle: 'Drizzle', rain: 'Rain', snow: 'Snow', showers: 'Rain showers', storm: 'Thunderstorm' },
    apps: { reminders: 'Reminders', photos: 'Photos', mail: 'Mail', calendar: 'Calendar', clock: 'Clock', notes: 'Notes', weather: 'Weather', settings: 'Settings', calculator: 'Calculator', youtube: 'YouTube', camera: 'Camera', instagram: 'Instagram', phone: 'Phone', browser: 'Safari', messages: 'Messages', music: 'Music', naver: 'Naver', kakaotalk: 'KakaoTalk', spotify: 'Spotify' },
    details: {
      photos: ['Recent memories', 'Your photos will live here. This screen is ready for your own images.'],
      mail: ['Inbox', 'Welcome to Orbit Phone. Your inbox is looking peaceful.'],
      calendar: ['Calendar', '9:00 AM  ·  Coffee with Alex\nAll day  ·  Groceries\nAll day  ·  Laundry'],
      clock: ['World clock', 'Seoul  9:41\nHong Kong  8:41\nNew York  8:41 PM'],
      notes: ['Quick note', 'Tap to add your own idea. The Notes preview content is in app.js.'],
      reminders: ['Reminders', '__IMPORTANT__\nDinner with Eunseok · Tomorrow at 7:00 PM\n__REMINDER__\nCheck today’s schedule\nWarm up your voice\nPractice choreography\nPack in-ear monitors and stage essentials\nDrink water and stretch\nGo to the gym'],
    weather: ['Mostly sunny', 'Seoul\n18°  ·  Feels like 19°\nHigh 21°  ·  Low 12°'],
      settings: ['Settings', ''], calculator: ['Calculator', ''], youtube: ['YouTube', 'Open YouTube to browse videos.'], instagram: ['Instagram', 'Open Instagram.'],
      naver: ['Naver', 'Open Naver search.'], kakaotalk: ['KakaoTalk', 'Open KakaoTalk.'],
      phone: ['Favorites', 'Mom\nAlex\nVoicemail'], browser: ['Start page', 'Search or enter website name'],
      messages: ['Messages', 'Alex  ·  See you soon!\nMina  ·  That sounds perfect\nSam  ·  Sent a photo'],
      music: ['Now playing', 'A little starlight\nYour music player preview'], search: ['Search', 'Search apps, messages, and more'],
      notification: ['Reminder', 'Dinner with Eunseok · Tomorrow at 7:00 PM'], emergency: ['Emergency call', 'This is a visual demo. No calls can be placed.'],
      spotify: ['Spotify', 'Spotify will open in a new browser tab after you unlock the phone.'],
    },
    settingsLabels: { language: 'Language', notifications: 'Notifications', sound: 'Sounds & Haptics', wallpaper: 'Wallpaper' }, defaultApp: 'This app preview is ready for you to customize.',
  },
  'zh-Hant': {
    locale: 'zh-TW', language: '繁體中文', location: '首爾', lockScreen: '鎖定畫面', chooseLanguage: '選擇語言',
    swipe: '向上滑動以開啟', reminder: '提醒事項', reminderBody: '和恩奭共進晚餐 · 明晚 7:00', now: '現在',
    passcode: '輸入密碼', fourDigit: '四位數密碼', deleteDigit: '刪除上一位數字', emergency: '緊急情況', cancel: '取消',
    flashlight: '開啟或關閉手電筒', camera: '開啟相機', home: '返回主畫面', homeScreen: '主畫面', close: '關閉', statusIcons: '行動網路、Wi-Fi、電池',
    dynamicIsland: '展開動態島', dynamicIslandExpanded: '收合動態島', islandLocation: '首爾 · 5G',
    eventOne: '買菜', eventTwo: '洗衣服', allDay: '全天', weatherSummary: '晴時多雲', weatherRange: '最高 21°  ·  最低 12°', search: '搜尋',
    weatherLoading: '正在載入天氣', weatherUnavailable: '暫時無法取得天氣', weatherHighLow: '最高 {high}°  ·  最低 {low}°',
    weatherFeelsLike: '體感 {temperature}°', weatherHourly: '逐小時預報', weatherWeek: '7 日天氣預報', weatherToday: '今天',
    calendarToday: '今天', calendarNoEvents: '沒有活動', calendarPreviousMonth: '上個月', calendarNextMonth: '下個月',
    calendarAddSchedule: '新增行程', calendarEventTitle: '行程名稱', calendarEventTime: '時間（選填）', calendarEventLocation: '地點（選填）', calendarSaveSchedule: '儲存', calendarCancelSchedule: '取消',
    calendarCategories: { concert: '演唱會', comeback: '發行', fansign: '簽售會', fanmeeting: '粉絲見面會', festival: '音樂節', awards: '頒獎典禮', performance: '演出', event: '活動', birthday: '生日' },
    weatherCredit: '天氣資料來源：Open-Meteo', spotifyLabel: 'Spotify', spotifyUnlock: '輸入密碼以開啟 Spotify',
    spotifyPopup: 'Spotify 未能自動開啟。點此開啟 Spotify。', batteryStatus: '電量 23%', caption: '掌心裡的小小世界', calendarDay: '星期六',
    cameraUnavailable: '此瀏覽器無法使用相機。', cameraPermission: '請允許瀏覽器使用相機，以開啟相機預覽。',
    cameraTakePhoto: '拍照', cameraSwitch: '切換相機', cameraVideo: '影片', cameraPhoto: '照片',
    conditions: { clear: '晴朗', mostlyClear: '大致晴朗', partlyCloudy: '局部多雲', cloudy: '多雲', fog: '有霧', drizzle: '毛毛雨', rain: '下雨', snow: '下雪', showers: '陣雨', storm: '雷雨' },
    apps: { reminders: '提醒事項', photos: '照片', mail: '郵件', calendar: '行事曆', clock: '時鐘', notes: '備忘錄', weather: '天氣', settings: '設定', calculator: '計算機', youtube: 'YouTube', camera: '相機', instagram: 'Instagram', phone: '電話', browser: 'Safari', messages: '訊息', music: '音樂', naver: 'Naver', kakaotalk: 'KakaoTalk', spotify: 'Spotify' },
    details: {
      photos: ['最近回憶', '你的照片可以放在這裡。這個畫面已準備好加入圖片。'],
      mail: ['收件匣', '歡迎來到 Orbit Phone。你的收件匣目前很清靜。'],
      calendar: ['行事曆', '上午 9:00  ·  和 Alex 喝咖啡\n全天  ·  買菜\n全天  ·  洗衣服'],
      clock: ['世界時鐘', '首爾  9:41\n香港  8:41\n紐約  晚上 8:41'],
      notes: ['快速備忘', '點一下即可新增想法。你可以在 app.js 修改備忘錄預覽內容。'],
      reminders: ['提醒事項', '__IMPORTANT__\n和恩奭共進晚餐 · 明晚 7:00\n__REMINDER__\n確認今天的行程\n進行聲音暖身\n練習舞蹈\n準備耳返與舞台用品\n補充水分並伸展\n去健身房'],
      weather: ['晴時多雲', '首爾\n18°  ·  體感 19°\n最高 21°  ·  最低 12°'],
      settings: ['設定', ''], calculator: ['計算機', ''], youtube: ['YouTube', '開啟 YouTube 瀏覽影片。'], instagram: ['Instagram', '開啟 Instagram。'],
      naver: ['Naver', '開啟 Naver 搜尋。'], kakaotalk: ['KakaoTalk', '開啟 KakaoTalk。'],
      phone: ['常用聯絡人', '媽媽\nAlex\n語音留言'], browser: ['起始頁', '搜尋或輸入網站名稱'],
      messages: ['訊息', 'Alex  ·  等等見！\nMina  ·  聽起來很棒\nSam  ·  傳送了一張照片'],
      music: ['正在播放', '一點星光\n音樂播放器預覽'], search: ['搜尋', '搜尋 App、訊息及其他內容'],
      notification: ['提醒事項', '和恩奭共進晚餐 · 明晚 7:00'], emergency: ['緊急通話', '這是互動示範，無法撥打電話。'],
      spotify: ['Spotify', '解鎖手機後，Spotify 會在新的瀏覽器分頁開啟。'],
    },
    settingsLabels: { language: '語言', notifications: '通知', sound: '聲音與觸覺', wallpaper: '桌布' }, defaultApp: '你可以自訂這個 App 的預覽畫面。',
  },
  ko: {
    locale: 'ko-KR', language: '한국어', location: '서울', lockScreen: '잠금 화면', chooseLanguage: '언어 선택',
    swipe: '위로 쓸어 열기', reminder: '미리 알림', reminderBody: '은석이와 저녁 식사 · 내일 오후 7:00', now: '지금',
    passcode: '암호 입력', fourDigit: '4자리 암호', deleteDigit: '마지막 숫자 지우기', emergency: '긴급 통화', cancel: '취소',
    flashlight: '손전등 켜기 또는 끄기', camera: '카메라 열기', home: '홈 화면으로 이동', homeScreen: '홈 화면', close: '닫기', statusIcons: '셀룰러, Wi-Fi, 배터리',
    dynamicIsland: '다이내믹 아일랜드 펼치기', dynamicIslandExpanded: '다이내믹 아일랜드 접기', islandLocation: '서울 · 5G',
    eventOne: '장보기', eventTwo: '빨래', allDay: '종일', weatherSummary: '대체로 맑음', weatherRange: '최고 21°  ·  최저 12°', search: '검색',
    weatherLoading: '날씨 불러오는 중', weatherUnavailable: '날씨 정보를 불러올 수 없음', weatherHighLow: '최고 {high}°  ·  최저 {low}°',
    weatherFeelsLike: '체감 {temperature}°', weatherHourly: '시간별 예보', weatherWeek: '7일 예보', weatherToday: '오늘',
    calendarToday: '오늘', calendarNoEvents: '일정 없음', calendarPreviousMonth: '이전 달', calendarNextMonth: '다음 달',
    calendarAddSchedule: '일정 추가', calendarEventTitle: '일정 제목', calendarEventTime: '시간 (선택)', calendarEventLocation: '장소 (선택)', calendarSaveSchedule: '저장', calendarCancelSchedule: '취소',
    calendarCategories: { concert: '콘서트', comeback: '발매', fansign: '팬사인회', fanmeeting: '팬미팅', festival: '페스티벌', awards: '시상식', performance: '출연', event: '이벤트', birthday: '생일' },
    weatherCredit: '날씨 정보 제공: Open-Meteo', spotifyLabel: 'Spotify', spotifyUnlock: 'Spotify를 열려면 암호를 입력하세요',
    spotifyPopup: 'Spotify를 자동으로 열 수 없습니다. 여기를 눌러 Spotify를 여세요.', batteryStatus: '배터리 23%', caption: '손안의 작은 세상', calendarDay: '토요일',
    cameraUnavailable: '이 브라우저에서는 카메라를 사용할 수 없습니다.', cameraPermission: '카메라 미리보기를 사용하려면 브라우저에서 카메라 접근을 허용하세요.',
    cameraTakePhoto: '사진 촬영', cameraSwitch: '카메라 전환', cameraVideo: '비디오', cameraPhoto: '사진',
    conditions: { clear: '맑음', mostlyClear: '대체로 맑음', partlyCloudy: '구름 조금', cloudy: '흐림', fog: '안개', drizzle: '이슬비', rain: '비', snow: '눈', showers: '소나기', storm: '뇌우' },
    apps: { reminders: '미리 알림', photos: '사진', mail: '메일', calendar: '캘린더', clock: '시계', notes: '메모', weather: '날씨', settings: '설정', calculator: '계산기', youtube: 'YouTube', camera: '카메라', instagram: 'Instagram', phone: '전화', browser: 'Safari', messages: '메시지', music: '음악', naver: '네이버', kakaotalk: '카카오톡', spotify: 'Spotify' },
    details: {
      photos: ['최근 추억', '사진을 여기에 모아 보세요. 나만의 이미지로 꾸밀 수 있습니다.'],
      mail: ['받은 편지함', 'Orbit Phone에 오신 것을 환영해요. 받은 편지함이 한가롭네요.'],
      calendar: ['캘린더', '오전 9:00  ·  Alex와 커피\n종일  ·  장보기\n종일  ·  빨래'],
      clock: ['세계 시계', '서울  9:41\n홍콩  8:41\n뉴욕  오후 8:41'],
      notes: ['빠른 메모', '탭해서 아이디어를 적어 보세요. app.js에서 미리보기 문구를 수정할 수 있어요.'],
      reminders: ['미리 알림', '__IMPORTANT__\n은석이와 저녁 식사 · 내일 오후 7:00\n__REMINDER__\n오늘 일정 확인하기\n보컬 워밍업하기\n안무 연습하기\n인이어와 무대 준비물 챙기기\n물 마시고 스트레칭하기\n헬스장 가기'],
      weather: ['대체로 맑음', '서울\n18°  ·  체감 19°\n최고 21°  ·  최저 12°'],
      settings: ['설정', ''], calculator: ['계산기', ''], youtube: ['YouTube', 'YouTube에서 동영상을 둘러보세요.'], instagram: ['Instagram', 'Instagram을 엽니다.'],
      naver: ['네이버', '네이버 검색을 엽니다.'], kakaotalk: ['카카오톡', '카카오톡을 엽니다.'],
      phone: ['즐겨찾기', '엄마\nAlex\n음성 사서함'], browser: ['시작 페이지', '검색하거나 웹사이트 주소 입력'],
      messages: ['메시지', 'Alex  ·  이따 봐!\nMina  ·  정말 좋다\nSam  ·  사진을 보냈어요'],
      music: ['재생 중', '작은 별빛\n음악 플레이어 미리보기'], search: ['검색', '앱, 메시지 등을 검색'],
      notification: ['미리 알림', '은석이와 저녁 식사 · 내일 오후 7:00'], emergency: ['긴급 통화', '시각적 데모이며 실제 통화는 연결되지 않습니다.'],
      spotify: ['Spotify', '휴대폰 잠금을 해제하면 Spotify가 새 브라우저 탭에서 열립니다.'],
    },
    settingsLabels: { language: '언어', notifications: '알림', sound: '사운드 및 햅틱', wallpaper: '배경화면' }, defaultApp: '이 앱 미리보기는 자유롭게 수정할 수 있어요.',
  },
};

// Fictional sample inbox for the Mail app. Each message is localized with the selected UI language.
const MAIL_MESSAGES = [
  { unread: true,
    en: ['Management Desk', 'Tomorrow’s call sheet', 'Van at 7:20 AM; hair and makeup at 8:00.', 'Your schedule is confirmed. Please meet the van downstairs at 7:20 AM. Hair and makeup begins at 8:00, followed by rehearsal at the studio.', '9:18 PM'],
    'zh-Hant': ['經紀團隊', '明日行程表', '早上 7:20 集合，8:00 開始妝髮。', '明日行程已確認。請於早上 7:20 在樓下集合，8:00 開始妝髮，之後前往工作室彩排。', '晚上 9:18'],
    ko: ['매니지먼트팀', '내일 콜시트 안내', '오전 7:20 차량 출발, 8:00 헤어·메이크업.', '내일 일정이 확정됐어요. 오전 7:20에 건물 아래에서 만나고, 8:00부터 헤어와 메이크업을 진행합니다.', '오후 9:18'] },
  { unread: true,
    en: ['A&R Team', 'Album jacket photo selects', 'Please choose your final three images.', 'The retouched jacket photos are ready. Please reply with your favorite three by noon tomorrow so we can lock the album booklet.', '8:46 PM'],
    'zh-Hant': ['A&R 團隊', '專輯封面照片挑選', '請選出最喜歡的三張照片。', '修圖完成的專輯照片已寄上。請在明天中午前選出最喜歡的三張，讓我們完成專輯內頁。', '晚上 8:46'],
    ko: ['A&R팀', '앨범 재킷 사진 셀렉', '마음에 드는 사진 세 장을 골라 주세요.', '앨범 재킷 사진 보정이 끝났어요. 내일 정오까지 가장 마음에 드는 세 장을 골라 주면 북클릿 작업을 마무리할게요.', '오후 8:46'] },
  { unread: true,
    en: ['Performance Team', 'Comeback stage rehearsal', 'Updated formation and camera marks attached.', 'We adjusted the second chorus formation after today’s run-through. Please review the attached camera marks before tomorrow’s full rehearsal.', '7:55 PM'],
    'zh-Hant': ['舞台製作團隊', '回歸舞台彩排', '已附上更新後的隊形與鏡位。', '今天走位後，我們調整了第二段副歌的隊形。請在明天正式彩排前確認更新後的鏡位。', '晚上 7:55'],
    ko: ['퍼포먼스팀', '컴백 무대 리허설', '수정된 동선과 카메라 큐를 첨부했어요.', '오늘 리허설 후 2절 후렴 동선을 수정했어요. 내일 전체 리허설 전에 새 카메라 큐를 확인해 주세요.', '오후 7:55'] },
  { unread: true,
    en: ['Studio M Styling', 'Fitting appointment confirmed', 'Your stage outfit fitting is Thursday at 2 PM.', 'The fitting room is reserved for Thursday at 2:00 PM. We prepared two jacket options and comfortable shoes for the encore stage.', '6:32 PM'],
    'zh-Hant': ['造型工作室', '服裝試穿時間確認', '舞台服試穿安排在週四下午 2 點。', '我們已預約週四下午 2:00 試衣。另準備了兩款外套，以及適合安可舞台的舒適鞋款。', '晚上 6:32'],
    ko: ['스타일링 스튜디오', '의상 피팅 일정 확인', '목요일 오후 2시에 무대 의상 피팅이 있어요.', '목요일 오후 2시로 피팅룸을 예약했어요. 재킷 두 가지와 앙코르 무대용 편한 신발도 준비해 둘게요.', '오후 6:32'] },
  { unread: true,
    en: ['Music Show Production', 'Pre-recording call time', 'Please arrive at the broadcast hall by 5:40 AM.', 'Your pre-recording is scheduled for Friday morning. Bring your staff badge and check in at the artist entrance by 5:40 AM.', '5:48 PM'],
    'zh-Hant': ['音樂節目製作組', '預錄集合時間', '請於清晨 5:40 前抵達攝影棚。', '預錄安排在週五早上。請帶上工作證，並於清晨 5:40 前從藝人入口報到。', '下午 5:48'],
    ko: ['음악방송 제작팀', '사전 녹화 콜타임', '오전 5:40까지 방송국에 도착해 주세요.', '금요일 오전 사전 녹화가 예정되어 있어요. 스태프 출입증을 챙기고 오전 5:40까지 아티스트 출입구로 와 주세요.', '오후 5:48'] },
  { unread: true,
    en: ['Partnerships Team', 'Campaign storyboard for review', 'The new storyboard is ready for your feedback.', 'The brand campaign storyboard is attached. Please flag any lines or styling details you would like us to adjust before filming.', '4:27 PM'],
    'zh-Hant': ['品牌合作團隊', '廣告分鏡請確認', '新版分鏡已完成，想請你提供意見。', '品牌廣告分鏡已附上。拍攝前若有台詞或造型細節需要調整，請告訴我們。', '下午 4:27'],
    ko: ['브랜드 협업팀', '캠페인 스토리보드 확인', '새 스토리보드가 준비됐어요. 의견 부탁드려요.', '브랜드 캠페인 스토리보드를 첨부했어요. 촬영 전에 수정하고 싶은 대사나 스타일링이 있으면 알려 주세요.', '오후 4:27'] },
  { unread: false,
    en: ['MBC Radio Production', 'Guest interview cue sheet', 'The host will ask about your favorite song lately.', 'Here is the cue sheet for next week’s radio visit. The interview is relaxed, and we included a few topics about music and life on tour.', '3:16 PM'],
    'zh-Hant': ['MBC 電台製作組', '來賓訪問流程表', '主持人會問你最近喜歡的歌曲。', '這是下週電台節目的流程表。訪談氣氛輕鬆，也準備了音樂和巡演生活相關的題目。', '下午 3:16'],
    ko: ['MBC 라디오 제작팀', '게스트 인터뷰 질문지', '요즘 즐겨 듣는 노래를 물어볼 예정이에요.', '다음 주 라디오 출연 질문지를 보내 드려요. 편안한 분위기의 인터뷰이며 음악과 투어 생활에 관한 질문도 준비했어요.', '오후 3:16'] },
  { unread: false,
    en: ['Fanmail Office', 'Letters delivered to the office', 'Your fan letters are sorted and ready.', 'A new bundle of fan letters arrived this afternoon. The team has sorted them by member and placed yours in the studio lounge.', '2:42 PM'],
    'zh-Hant': ['粉絲來信中心', '送到公司的粉絲來信', '粉絲來信已整理完成。', '今天下午收到一批新的粉絲來信。團隊已按成員整理好，並放在工作室休息區。', '下午 2:42'],
    ko: ['팬레터 담당팀', '회사에 도착한 팬레터', '팬레터를 정리해 두었어요.', '오늘 오후 새 팬레터가 도착했어요. 멤버별로 정리해서 스튜디오 라운지에 두었습니다.', '오후 2:42'] },
  { unread: false,
    en: ['Venue Production', 'Soundcheck and mic pack list', 'Please confirm your preferred in-ear mix.', 'Soundcheck begins at 4:30 PM. Reply with any in-ear mix changes and confirm which backup microphone you would like on stage.', '1:35 PM'],
    'zh-Hant': ['場館製作團隊', '音響測試與麥克風清單', '請確認你偏好的耳返混音。', '音響測試將於下午 4:30 開始。如需調整耳返混音，請回覆我們，也請確認舞台備用麥克風。', '下午 1:35'],
    ko: ['공연장 제작팀', '사운드체크 및 마이크 목록', '원하는 인이어 믹스를 확인해 주세요.', '사운드체크는 오후 4:30에 시작해요. 인이어 믹스 변경 사항과 무대에서 사용할 예비 마이크를 알려 주세요.', '오후 1:35'] },
  { unread: false,
    en: ['Vocal Director', 'Guide track notes', 'The new guide track is in the shared folder.', 'I uploaded the revised guide track. The key is unchanged, and the ad-lib section has a little more room for your own style.', '12:18 PM'],
    'zh-Hant': ['聲樂指導', '導唱音檔備註', '新版導唱已放進共用資料夾。', '我已上傳修改後的導唱音檔。調性沒有改變，尾段轉音也留了更多空間讓你發揮自己的風格。', '中午 12:18'],
    ko: ['보컬 디렉터', '가이드 트랙 안내', '새 가이드 트랙을 공유 폴더에 올렸어요.', '수정한 가이드 트랙을 업로드했어요. 키는 그대로이고 애드리브 파트는 본인만의 스타일을 더 살릴 수 있도록 여유를 뒀어요.', '오후 12:18'] },
  { unread: false,
    en: ['Travel Desk', 'Tokyo travel itinerary', 'Hotel and airport transfer details are attached.', 'Your Tokyo itinerary is attached. The team will meet in the lobby at 6:15 AM, and airport transfers are arranged for everyone.', '11:26 AM'],
    'zh-Hant': ['行程安排組', '東京行程表', '已附上飯店與機場接送資訊。', '東京行程表已附上。團隊將於早上 6:15 在大廳集合，所有人的機場接送都已安排完成。', '上午 11:26'],
    ko: ['출장 지원팀', '도쿄 이동 일정', '호텔과 공항 이동 안내를 첨부했어요.', '도쿄 일정표를 첨부했어요. 오전 6:15에 로비에서 만나고, 공항 이동 차량도 모두 준비되어 있습니다.', '오전 11:26'] },
  { unread: false,
    en: ['Communications Team', 'Interview answers for approval', 'Please review the final quote before publication.', 'The magazine interview is edited. Please check the highlighted quote and let us know if it is okay to publish by 5 PM.', '10:34 AM'],
    'zh-Hant': ['公關團隊', '訪問內容確認', '刊登前請確認最後引用的內容。', '雜誌訪談已完成編輯。請確認標註的引言，並在下午 5 點前告訴我們是否可以刊登。', '上午 10:34'],
    ko: ['홍보팀', '인터뷰 답변 최종 확인', '기사 공개 전에 인용 문구를 확인해 주세요.', '잡지 인터뷰 편집이 끝났어요. 표시한 인용 문구를 확인하고 오후 5시까지 게재 여부를 알려 주세요.', '오전 10:34'] },
  { unread: false,
    en: ['Fan Event Coordinator', 'Fansign order and greetings', 'The event order and greeting notes are attached.', 'Your fansign starts at 2:00 PM on Saturday. We attached the running order and a few pronunciation notes for the fan names.', '9:52 AM'],
    'zh-Hant': ['粉絲活動協調組', '簽售順序與問候語', '已附上活動順序與問候備註。', '週六下午 2:00 開始簽售會。附件包含活動順序，以及幾個粉絲姓名的發音備註。', '上午 9:52'],
    ko: ['팬 이벤트 담당자', '팬사인회 순서와 인사말', '행사 순서와 인사말 메모를 첨부했어요.', '토요일 오후 2시에 팬사인회가 시작돼요. 진행 순서와 팬 이름 발음 메모를 첨부했습니다.', '오전 9:52'] },
  { unread: false,
    en: ['Recording Studio', 'Studio B reserved', 'Your recording session is booked for 6 PM.', 'Studio B is reserved for tonight from 6:00 to 9:00 PM. The engineer has prepared the latest demo and vocal guide.', '9:05 AM'],
    'zh-Hant': ['錄音室', '已預約 B 錄音室', '今晚 6 點的錄音時段已安排完成。', '今晚 6:00 至 9:00 已預約 B 錄音室。錄音師已準備好最新 Demo 和聲樂導唱。', '上午 9:05'],
    ko: ['레코딩 스튜디오', 'B 스튜디오 예약 완료', '오늘 오후 6시 녹음 세션이 예약됐어요.', '오늘 오후 6시부터 9시까지 B 스튜디오를 예약했어요. 엔지니어가 최신 데모와 보컬 가이드를 준비했습니다.', '오전 9:05'] },
  { unread: false,
    en: ['Wellness Coordinator', 'Recovery plan after rehearsal', 'Your voice rest and hydration plan is attached.', 'After the long rehearsal, please keep this evening light. The attached plan has gentle stretches, hydration reminders, and a vocal rest window.', 'Yesterday'],
    'zh-Hant': ['健康管理團隊', '彩排後的恢復計畫', '已附上護嗓與補水安排。', '長時間彩排後，今晚請盡量放鬆。附件有簡單伸展、補水提醒和休息嗓音的時段安排。', '昨天'],
    ko: ['컨디션 관리팀', '리허설 후 회복 계획', '휴식과 수분 섭취 계획을 첨부했어요.', '긴 리허설 후에는 오늘 저녁을 가볍게 보내 주세요. 간단한 스트레칭, 수분 섭취 알림, 보컬 휴식 시간을 정리했어요.', '어제'] },
  { unread: false,
    en: ['Music Video Production', 'Revised storyboard and set list', 'The rooftop scene moved to the last shoot block.', 'We updated tomorrow’s storyboard. The rooftop scene is now last so you can change outfits only once between locations.', 'Yesterday'],
    'zh-Hant': ['MV 製作團隊', '更新後的分鏡與場景表', '天台場景改到最後一段拍攝。', '明日分鏡已更新。天台場景改至最後拍攝，這樣不同地點之間只需要換一次服裝。', '昨天'],
    ko: ['뮤직비디오 제작팀', '수정된 스토리보드와 촬영 순서', '옥상 장면을 마지막 촬영 순서로 옮겼어요.', '내일 스토리보드를 수정했어요. 옥상 장면을 마지막으로 배치해 장소 이동 중 의상을 한 번만 갈아입으면 됩니다.', '어제'] },
  { unread: false,
    en: ['Dance Team', 'Extra practice room confirmed', 'Room 4 is open from 8:30 to 10 tonight.', 'Room 4 is available after dinner. The mirror wall and speaker are ready if you want to run the chorus once more.', 'Yesterday'],
    'zh-Hant': ['舞蹈團隊', '加練教室已確認', '今晚 8:30 至 10:00 可使用 4 號教室。', '晚餐後 4 號教室可以使用。鏡牆和音響都已準備好，想再練一次副歌的話可以過來。', '昨天'],
    ko: ['댄스팀', '추가 연습실 예약 완료', '오늘 저녁 8:30부터 10시까지 4번 연습실을 쓸 수 있어요.', '저녁 식사 후 4번 연습실을 사용할 수 있어요. 거울 벽과 스피커도 준비되어 있으니 후렴을 한 번 더 맞춰 보고 싶으면 들러 주세요.', '어제'] },
  { unread: false,
    en: ['Digital Content Team', 'Short-form video approval', 'Please choose the ending caption for the dance clip.', 'The new dance challenge clip is ready. Pick one of the two caption options in the shared folder and we can schedule the post.', 'Yesterday'],
    'zh-Hant': ['數位內容團隊', '短影音發布確認', '請選擇舞蹈影片的結尾字幕。', '新的舞蹈挑戰影片已完成。請從共用資料夾選一個結尾字幕，我們就能安排發布時間。', '昨天'],
    ko: ['디지털 콘텐츠팀', '숏폼 영상 게시 승인', '댄스 영상의 마지막 자막을 골라 주세요.', '새 댄스 챌린지 영상이 완성됐어요. 공유 폴더에서 마무리 자막을 골라 주면 게시 일정을 잡을게요.', '어제'] },
];

const $ = (selector) => document.querySelector(selector);
const lockView = $('#lockView');
const passcodeView = $('#passcodeView');
const homeView = $('#homeView');
const appPanel = $('#appPanel');
const screen = $('#screen');
const wallpaperLayer = $('.wallpaper');
const DEFAULT_WALLPAPER_SOURCE = 'assets/dog-wallpaper.jpg';
let enteredCode = '';
let currentView = 'lock';
let currentLanguage = 'ko';
let currentAppType = null;
let unlockAnimationActive = false;
let mailInboxReturn = null;
let clockCleanup = null;
let currentWeather = null;
let weatherError = false;
let pendingSpotifyLaunch = false;
let activeSpotifyAudio = null;
let activeSpotifyTrackId = null;
let spotifyIsPlaying = false;
let pendingAppLaunch = null;
let cameraStream = null;
let flashlightStream = null;
let currentWallpaperSource = DEFAULT_WALLPAPER_SOURCE;

const APP_STATUS_SURFACES = Object.freeze({
  weather: '#4088d8', calendar: '#f7f7fa', clock: '#000000', calculator: '#000000',
  settings: '#f4f3f7', photos: '#f6f6f8', camera: '#000000', instagram: '#ffffff',
  kakaotalk: '#ffffff', youtube: '#ffffff', spotify: '#202b26', naver: '#f4f6f7',
  phone: '#f7f7fa', reminders: '#f7f5fa', mail: '#f7f5fa', notes: '#f7f5fa',
});
const LIGHT_STATUS_APPS = new Set(['weather', 'clock', 'calculator', 'camera', 'spotify']);

function updateAppStatusSurface(appType) {
  if (!appType) {
    screen.classList.remove('status-dark');
    screen.style.removeProperty('--status-surface');
    return;
  }
  screen.style.setProperty('--status-surface', APP_STATUS_SURFACES[appType] || '#f7f5fa');
  screen.classList.toggle('status-dark', !LIGHT_STATUS_APPS.has(appType));
}

function applyWallpaper(source) {
  currentWallpaperSource = source;
  wallpaperLayer.style.backgroundImage = `linear-gradient(180deg,#00000032 0%,transparent 31%,transparent 69%,#00000038 100%), url("${source}")`;
}

function imageFileToWallpaperDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Unable to read the selected image.'));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error('Unable to open the selected image.'));
      image.onload = () => {
        const maxDimension = 1800;
        const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
        const context = canvas.getContext('2d');
        if (!context) {
          reject(new Error('Image processing is unavailable.'));
          return;
        }
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.86));
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

try {
  const savedLanguage = window.localStorage.getItem('orbit-phone-language');
  if (savedLanguage && COPY[savedLanguage]) currentLanguage = savedLanguage;
} catch (_error) {
  // The picker still works when browser storage is disabled.
}

function copy() {
  return COPY[currentLanguage];
}

const APP_LANGUAGE_COPY = {
  en: {
    naver: { search: 'Search Naver', home: 'Home', news: 'News', content: 'Content', shopping: 'Shopping', clip: 'Clip', shortcuts: 'Quick links', mail: 'Mail', cafe: 'Cafe', blog: 'Blog', map: 'Map', webtoon: 'Webtoon', weather: 'Weather', headlines: 'Today’s news', trending: 'Trending searches', placeholder: 'Search the web', noResults: 'No results found', webSearch: 'Search the web for', close: 'Close' },
    kakaotalk: { chats: 'Chats', friends: 'Friends', openChat: 'Open Chat', now: 'Now', more: 'More', search: 'Search', searchChats: 'Search chats', messagePlaceholder: 'Write a message', send: 'Send', back: 'Back', online: 'Today', noMessages: 'Start a conversation', roomInfo: 'Chat room', navigation: 'KakaoTalk navigation', sent: 'Message sent' },
    spotify: { navigation: 'Spotify navigation', greeting: 'Good evening', greetingMorning: 'Good morning', greetingAfternoon: 'Good afternoon', madeForYou: 'Made for you', recentlyPlayed: 'Recently played', yourLibrary: 'Your Library', search: 'Search', home: 'Home', all: 'All', music: 'Music', podcasts: 'Podcasts', createPlaylist: 'Create playlist', newPlaylist: 'New playlist', likedSongs: 'Liked Songs', playlists: 'Playlists', albums: 'Albums', artists: 'Artists', songs: 'Songs', play: 'Play', pause: 'Pause', shuffle: 'Shuffle', nowPlaying: 'Now playing', searchPlaceholder: 'What do you want to play?', searchResults: 'Browse all', noResults: 'No results found', featuredMix: 'Your daily mix', subtitle: 'Made for you', featuredTitle: 'RIIZE Radio', featuredDescription: 'RIIZE, K-pop, and more', playlistOne: 'RIIZE Hits', playlistTwo: 'K-pop Now', playlistThree: 'On Repeat', playlistFour: 'New Releases', artist: 'RIIZE', album: 'RIIZING', demo: 'Preview player' },
    youtube: { search: 'Search', searchVideos: 'Search saved videos', choose: 'Choose a saved video', watch: 'Watch on YouTube', saved: 'Saved videos', video: 'Saved video', metadata: 'YouTube · Saved link' },
    instagram: { create: 'Create post', navigation: 'Instagram navigation', homeTab: 'Home', messageTab: 'Message', searchTab: 'Search', profileTab: 'Profile', storyAdd: 'Add to your story', postNew: 'New post', choosePhoto: 'Choose a photo', chooseProfilePhoto: 'Choose from library', storyCaption: 'Add a story caption…', postCaption: 'Write a caption…', caption: 'Caption', shareStory: 'Share story', share: 'Share', cancel: 'Cancel', saving: 'Saving…', story: 'Your story', feedReady: 'Your feed is ready', firstPost: 'Share a photo to create your first post.', photosLater: 'Photos for the six profiles can be added when you send them.', changePhoto: 'Change photo', posts: 'Posts', noPosts: 'No posts yet. Share your first photo.', postsLater: 'Post photos will appear here when they are added.', followers: 'Followers', following: 'Following', search: 'Search', searchPeople: 'Search people', searchProfiles: 'Search profiles', messages: 'Messages', message: 'Message', messagePlaceholder: 'Message…', send: 'Send', demoAccount: 'RIIZE · Demo account', demoProfile: 'Demo profile · Not connected to Instagram', demoConversation: 'This is the beginning of your demo conversation with {name}.', demoConversationShort: 'Demo conversation', photoError: 'That photo could not be added. Please choose another image.', photoUseError: 'That photo could not be used. Please choose another image.', yourStory: 'Your story', storyAlt: 'Jung Sungchan story', storyCaptionFallback: 'Jung Sungchan’s story', followButton: 'Following', postAlt: 'Post' },
    phone: { nav: 'Phone navigation', calls: 'Calls', contacts: 'Contacts', keypad: 'Keypad', search: 'Search', searchContacts: 'Search contacts', calling: 'Calling {name}…', endCall: 'End Call', call: 'Call', birthday: 'Birthday · {date}', outgoing: 'Outgoing · {number}', deleteDigit: 'Delete last digit', noMatch: 'No saved contact matches this number.' },
  },
  'zh-Hant': {
    naver: { search: '搜尋 Naver', home: '首頁', news: '新聞', content: '內容', shopping: '購物', clip: '短片', shortcuts: '捷徑', mail: '郵件', cafe: '咖啡廳', blog: '部落格', map: '地圖', webtoon: '網漫', weather: '天氣', headlines: '今日新聞', trending: '熱門搜尋', placeholder: '搜尋網頁', noResults: '找不到結果', webSearch: '搜尋網頁：', close: '關閉' },
    kakaotalk: { chats: '聊天室', friends: '好友', openChat: '開放聊天室', now: '動態', more: '更多', search: '搜尋', searchChats: '搜尋聊天室', messagePlaceholder: '輸入訊息', send: '傳送', back: '返回', online: '今天', noMessages: '開始聊天', roomInfo: '聊天室', navigation: 'KakaoTalk 導覽', sent: '訊息已傳送' },
    spotify: { navigation: 'Spotify 導覽', greeting: '晚上好', greetingMorning: '早上好', greetingAfternoon: '下午好', madeForYou: '為你打造', recentlyPlayed: '最近播放', yourLibrary: '你的音樂庫', search: '搜尋', home: '首頁', all: '全部', music: '音樂', podcasts: 'Podcast', createPlaylist: '建立播放清單', newPlaylist: '新播放清單', likedSongs: '已按讚的歌曲', playlists: '播放清單', albums: '專輯', artists: '演出者', songs: '歌曲', play: '播放', pause: '暫停', shuffle: '隨機播放', nowPlaying: '正在播放', searchPlaceholder: '想聽些什麼？', searchResults: '瀏覽全部', noResults: '找不到結果', featuredMix: '每日混音', subtitle: '為你打造', featuredTitle: 'RIIZE 電台', featuredDescription: 'RIIZE、K-pop 等更多音樂', playlistOne: 'RIIZE 熱門歌曲', playlistTwo: 'K-pop 新歌', playlistThree: '單曲循環', playlistFour: '最新發行', artist: 'RIIZE', album: 'RIIZING', demo: '歌曲預覽播放器' },
    youtube: { search: '搜尋', searchVideos: '搜尋已儲存的影片', choose: '選擇已儲存的影片', watch: '在 YouTube 觀看', saved: '已儲存的影片', video: '已儲存影片', metadata: 'YouTube · 已儲存連結' },
    instagram: { create: '建立貼文', navigation: 'Instagram 導覽', homeTab: '首頁', messageTab: '訊息', searchTab: '搜尋', profileTab: '個人檔案', storyAdd: '新增至限時動態', postNew: '新增貼文', choosePhoto: '選擇照片', chooseProfilePhoto: '從圖庫選擇', storyCaption: '新增限時動態文字…', postCaption: '撰寫貼文說明…', caption: '說明文字', shareStory: '分享限時動態', share: '分享', cancel: '取消', saving: '儲存中…', story: '你的限時動態', feedReady: '你的動態消息已準備好', firstPost: '分享照片，建立你的第一篇貼文。', photosLater: '你傳送照片後，就能為六個個人檔案新增照片。', changePhoto: '更換照片', posts: '貼文', noPosts: '還沒有貼文。分享你的第一張照片吧。', postsLater: '新增貼文照片後會顯示在這裡。', followers: '粉絲', following: '追蹤中', search: '搜尋', searchPeople: '搜尋用戶', searchProfiles: '搜尋個人檔案', messages: '訊息', message: '訊息', messagePlaceholder: '傳送訊息…', send: '傳送', demoAccount: 'RIIZE · 示範帳號', demoProfile: '示範個人檔案 · 未連結 Instagram', demoConversation: '這裡是你與{name}的示範對話開端。', demoConversationShort: '示範對話', photoError: '無法新增這張照片，請選擇其他圖片。', photoUseError: '無法使用這張照片，請選擇其他圖片。', yourStory: '你的限時動態', storyAlt: '鄭成燦的限時動態', storyCaptionFallback: '鄭成燦的限時動態', followButton: '追蹤中', postAlt: '貼文' },
    phone: { nav: '電話導覽', calls: '通話記錄', contacts: '聯絡人', keypad: '鍵盤', search: '搜尋', searchContacts: '搜尋聯絡人', calling: '正在撥打 {name}…', endCall: '結束通話', call: '通話', birthday: '生日 · {date}', outgoing: '撥出 · {number}', deleteDigit: '刪除上一個數字', noMatch: '找不到符合此號碼的已儲存聯絡人。' },
  },
  ko: {
    naver: { search: '네이버 검색', home: '홈', news: '뉴스', content: '콘텐츠', shopping: '쇼핑', clip: '클립', shortcuts: '바로가기', mail: '메일', cafe: '카페', blog: '블로그', map: '지도', webtoon: '웹툰', weather: '날씨', headlines: '오늘의 뉴스', trending: '급상승 검색어', placeholder: '검색어를 입력하세요', noResults: '검색 결과가 없어요', webSearch: '웹 검색:', close: '닫기' },
    kakaotalk: { chats: '채팅', friends: '친구', openChat: '오픈채팅', now: '소식', more: '더보기', search: '검색', searchChats: '채팅 검색', messagePlaceholder: '메시지 입력', send: '전송', back: '뒤로', online: '오늘', noMessages: '대화를 시작해 보세요', roomInfo: '채팅방', navigation: '카카오톡 탐색', sent: '메시지를 보냈어요' },
    spotify: { navigation: 'Spotify 탐색', greeting: '좋은 저녁이에요', greetingMorning: '좋은 아침이에요', greetingAfternoon: '안녕하세요', madeForYou: '회원님을 위한 추천', recentlyPlayed: '최근 재생한 항목', yourLibrary: '내 라이브러리', search: '검색', home: '홈', all: '전체', music: '음악', podcasts: '팟캐스트', createPlaylist: '플레이리스트 만들기', newPlaylist: '새 플레이리스트', likedSongs: '좋아요 표시한 곡', playlists: '플레이리스트', albums: '앨범', artists: '아티스트', songs: '곡', play: '재생', pause: '일시정지', shuffle: '셔플', nowPlaying: '지금 재생 중', searchPlaceholder: '무엇을 재생할까요?', searchResults: '모두 둘러보기', noResults: '검색 결과가 없어요', featuredMix: '데일리 믹스', subtitle: '회원님을 위한 추천', featuredTitle: 'RIIZE 라디오', featuredDescription: 'RIIZE, K-pop 등', playlistOne: 'RIIZE 히트곡', playlistTwo: 'K-pop 최신곡', playlistThree: '반복 재생', playlistFour: '최신 발매', artist: 'RIIZE', album: 'RIIZING', demo: '미리 듣기 플레이어' },
    youtube: { search: '검색', searchVideos: '저장된 동영상 검색', choose: '저장된 동영상 선택', watch: 'YouTube에서 보기', saved: '저장된 동영상', video: '저장된 동영상', metadata: 'YouTube · 저장된 링크' },
    instagram: { create: '게시물 만들기', navigation: 'Instagram 탐색', homeTab: '홈', messageTab: '메시지', searchTab: '검색', profileTab: '프로필', storyAdd: '스토리에 추가', postNew: '새 게시물', choosePhoto: '사진 선택', chooseProfilePhoto: '보관함에서 선택', storyCaption: '스토리 문구 추가…', postCaption: '게시물 문구 작성…', caption: '문구', shareStory: '스토리 공유', share: '공유', cancel: '취소', saving: '저장 중…', story: '내 스토리', feedReady: '피드가 준비됐어요', firstPost: '사진을 공유해 첫 게시물을 만들어 보세요.', photosLater: '사진을 보내 주시면 여섯 프로필에 사진을 추가할 수 있어요.', changePhoto: '사진 변경', posts: '게시물', noPosts: '아직 게시물이 없어요. 첫 사진을 공유해 보세요.', postsLater: '게시물 사진을 추가하면 여기에 표시돼요.', followers: '팔로워', following: '팔로잉', search: '검색', searchPeople: '사람 검색', searchProfiles: '프로필 검색', messages: '메시지', message: '메시지', messagePlaceholder: '메시지…', send: '보내기', demoAccount: 'RIIZE · 데모 계정', demoProfile: '데모 프로필 · Instagram에 연결되지 않음', demoConversation: '{name}님과의 데모 대화가 여기서 시작돼요.', demoConversationShort: '데모 대화', photoError: '사진을 추가할 수 없어요. 다른 이미지를 선택해 주세요.', photoUseError: '사진을 사용할 수 없어요. 다른 이미지를 선택해 주세요.', yourStory: '내 스토리', storyAlt: '정성찬 스토리', storyCaptionFallback: '정성찬 스토리', followButton: '팔로잉', postAlt: '게시물' },
    phone: { nav: '전화 탐색', calls: '통화', contacts: '연락처', keypad: '키패드', search: '검색', searchContacts: '연락처 검색', calling: '{name}에게 전화 거는 중…', endCall: '통화 종료', call: '전화', birthday: '생일 · {date}', outgoing: '발신 · {number}', deleteDigit: '마지막 숫자 삭제', noMatch: '이 번호와 일치하는 연락처가 없어요.' },
  },
};

function appCopy(app) {
  return APP_LANGUAGE_COPY[currentLanguage]?.[app] || APP_LANGUAGE_COPY.en[app];
}

function applyLanguage() {
  const text = copy();
  document.documentElement.lang = text.locale;
  $('#lockView').setAttribute('aria-label', text.lockScreen);
  $('#languageToggle').setAttribute('aria-label', text.chooseLanguage);
  $('#languageToggle').setAttribute('aria-expanded', String(!$('#languageMenu').hidden));
  $('#languageLabel').textContent = text.language;
  $('#languageMenu').setAttribute('aria-label', text.chooseLanguage);
  $('#languageMenu').querySelectorAll('[data-language]').forEach((option) => {
    const selected = option.dataset.language === currentLanguage;
    option.setAttribute('aria-checked', String(selected));
  });
  $('#notification').setAttribute('aria-label', `${text.reminder}: ${text.reminderBody}`);
  $('#swipeLabel').textContent = text.swipe;
  $('#passcodeTitle').textContent = pendingSpotifyLaunch ? text.spotifyUnlock : text.passcode;
  $('#passcodeDots').setAttribute('aria-label', text.fourDigit);
  $('#deleteKey').setAttribute('aria-label', text.deleteDigit);
  $('#emergencyButton').textContent = text.emergency;
  $('#cancelUnlock').textContent = text.cancel;
  $('#flashlightButton').setAttribute('aria-label', text.flashlight);
  $('#cameraButton').setAttribute('aria-label', text.camera);
  $('#homeIndicator').setAttribute('aria-label', text.home);
  $('#homeView').setAttribute('aria-label', text.homeScreen);
  $('#closeApp').setAttribute('aria-label', text.close);
  $('.status-right').setAttribute('aria-label', text.statusIcons);
  $('#dynamicIsland').setAttribute('aria-label', $('#dynamicIsland').classList.contains('expanded') ? text.dynamicIslandExpanded : text.dynamicIsland);
  $('#islandLocation').textContent = text.islandLocation;
  $('.top-battery').setAttribute('aria-label', text.batteryStatus || 'Battery 23 percent');
  $('.phone-battery').setAttribute('aria-label', text.batteryStatus || 'Battery 23 percent');
  $('#spotifyShortcut').setAttribute('aria-label', text.spotifyLabel);
  $('#stageCaption').textContent = text.caption;
  renderHome();
  updateClock();
  renderWeather();
  if (currentAppType) openApp(currentAppType);
}

function setLanguage(language) {
  if (!COPY[language]) return;
  currentLanguage = language;
  try {
    window.localStorage.setItem('orbit-phone-language', language);
  } catch (_error) {
    // Keep the current choice for this page even when storage is unavailable.
  }
  $('#languageMenu').hidden = true;
  applyLanguage();
}

let eunseokPopupScheduled = false;
function updateKakaoHomeBadge() {
  const unread = KAKAO_UNREAD_COUNTS[EUNSEOK_DINNER_CONTACT] || 0;
  const appLabel = copy().apps.kakaotalk || 'KakaoTalk';
  document.querySelectorAll('.app-icon[data-app="kakaotalk"]').forEach((button) => {
    let badge = button.querySelector('.kakao-unread-badge');
    if (!unread) {
      badge?.remove();
      button.setAttribute('aria-label', appLabel);
      return;
    }
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'badge kakao-unread-badge';
      button.append(badge);
    }
    badge.textContent = String(unread);
    badge.setAttribute('aria-label', `${unread} unread messages`);
    button.setAttribute('aria-label', `${appLabel}, ${unread} unread messages`);
  });
}

function scheduleEunseokHomePopup() {
  if (eunseokPopupScheduled) return;
  eunseokPopupScheduled = true;
  window.setTimeout(() => {
    if (currentView !== 'home' || document.visibilityState === 'hidden') return;
    const eunseok = PHONE_CONTACT_DATA.find((person) => person.number === '+82 20010319');
    if (!eunseok) return;
    const messages = KAKAO_MESSAGES[eunseok.number] ||= [];
    const dinnerReplies = [
      { date: '2026-10-22', time: '14:17', from: 'contact', text: { en: 'Yeah, I’m in.', 'zh-Hant': '嗯，吃', ko: 'ㅇㅇ 먹을게' } },
      { date: '2026-10-22', time: '14:18', from: 'contact', text: { en: 'What do you want to eat?', 'zh-Hant': '想吃什麼', ko: '뭐 먹을 건데' } },
    ];
    dinnerReplies.forEach((reply) => {
      if (!messages.some((message) => message.date === reply.date && message.time === reply.time)) messages.push(reply);
    });
    KAKAO_UNREAD_COUNTS[eunseok.number] = dinnerReplies.length;
    updateKakaoHomeBadge();
    const notificationGroup = document.createElement('div');
    notificationGroup.className = 'home-message-notifications';
    const senderName = currentLanguage === 'ko' ? '은석' : currentLanguage === 'zh-Hant' ? '恩奭' : 'Eunseok';
    const makePopup = (reply) => {
      const popup = document.createElement('button');
      popup.type = 'button'; popup.className = 'home-message-popup';
      popup.setAttribute('aria-label', currentLanguage === 'ko' ? '은석의 새 메시지' : currentLanguage === 'zh-Hant' ? '恩奭的新訊息' : 'New message from Eunseok');
      const avatar = document.createElement('span'); avatar.className = 'home-message-popup-avatar'; avatar.textContent = 'SE';
      const copyBlock = document.createElement('span'); copyBlock.className = 'home-message-popup-copy';
      const sender = document.createElement('strong'); sender.textContent = senderName;
      const body = document.createElement('span'); body.textContent = localizedChatText(reply.text);
      const time = document.createElement('small'); time.textContent = currentLanguage === 'ko' ? '지금' : currentLanguage === 'zh-Hant' ? '現在' : 'now';
      copyBlock.append(sender, body); popup.append(avatar, copyBlock, time);
      popup.addEventListener('click', () => {
        notificationGroup.remove();
        pendingKakaoContactNumber = eunseok.number;
        openApp('kakaotalk');
      });
      return popup;
    };
    const showPopup = (reply) => {
      const popup = makePopup(reply);
      notificationGroup.append(popup);
      window.setTimeout(() => {
        if (!popup.isConnected) return;
        popup.classList.add('is-dismissing');
        window.setTimeout(() => {
          popup.remove();
          if (!notificationGroup.querySelector('.home-message-popup')) notificationGroup.remove();
        }, 300);
      }, 3000);
    };
    homeView.append(notificationGroup);
    showPopup(dinnerReplies[0]);
    window.setTimeout(() => {
      if (notificationGroup.isConnected && currentView === 'home') {
        showPopup(dinnerReplies[1]);
      }
    }, 2200);
  }, 7000);
}

function toggleLanguageMenu() {
  const menu = $('#languageMenu');
  menu.hidden = !menu.hidden;
  $('#languageToggle').setAttribute('aria-expanded', String(!menu.hidden));
}

function updateClock() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat(copy().locale, {
    timeZone: 'Asia/Seoul', hour: 'numeric', minute: '2-digit', second: '2-digit', hourCycle: 'h12',
  }).formatToParts(now);
  const time = `${parts.find((part) => part.type === 'hour')?.value || ''}:${parts.find((part) => part.type === 'minute')?.value || ''}`;
  const clockParts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23',
  }).formatToParts(now);
  const clockValues = Object.fromEntries(clockParts.map(({ type, value }) => [type, Number(value)]));
  const hourAngle = ((clockValues.hour % 12) + clockValues.minute / 60) * 30;
  const minuteAngle = (clockValues.minute + clockValues.second / 60) * 6;
  const secondAngle = clockValues.second * 6;
  document.querySelector('#clockIconHour')?.setAttribute('transform', `rotate(${hourAngle} 32 32)`);
  document.querySelector('#clockIconMinute')?.setAttribute('transform', `rotate(${minuteAngle} 32 32)`);
  document.querySelector('#clockIconSecond')?.setAttribute('transform', `rotate(${secondAngle} 32 32)`);
  const date = new Intl.DateTimeFormat(copy().locale, {
    timeZone: 'Asia/Seoul', weekday: 'short', month: 'short', day: 'numeric',
  }).format(now).replace(',', '');
  $('#lockTime').textContent = time;
  $('#lockDate').textContent = date;
  $('#widgetDay').textContent = new Intl.DateTimeFormat(copy().locale, { timeZone: 'Asia/Seoul', weekday: 'long' }).format(now);
  $('#widgetDate').textContent = new Intl.DateTimeFormat(copy().locale, { timeZone: 'Asia/Seoul', day: 'numeric' }).format(now);
}

function weatherGroup(code) {
  if (code === 0) return 'clear';
  if (code === 1) return 'mostlyClear';
  if (code === 2) return 'partlyCloudy';
  if (code === 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if ([51, 53, 55, 56, 57].includes(code)) return 'drizzle';
  if ([61, 63, 65, 66, 67].includes(code)) return 'rain';
  if ([71, 73, 75, 77].includes(code)) return 'snow';
  if ([80, 81, 82].includes(code)) return 'showers';
  if ([85, 86].includes(code)) return 'snow';
  if ([95, 96, 99].includes(code)) return 'storm';
  return 'cloudy';
}

function weatherSymbol(group, isDay = true) {
  if (group === 'clear') return isDay ? '☀' : '☾';
  if (group === 'mostlyClear' || group === 'partlyCloudy') return '⛅';
  if (group === 'fog') return '≋';
  if (group === 'drizzle' || group === 'rain' || group === 'showers') return '☂';
  if (group === 'snow') return '❄';
  if (group === 'storm') return 'ϟ';
  return '☁';
}

function renderWeather() {
  const group = currentWeather ? weatherGroup(currentWeather.code) : null;
  const condition = currentWeather ? copy().conditions[group] : (weatherError ? copy().weatherUnavailable : copy().weatherLoading);
  const temperature = currentWeather ? `${Math.round(currentWeather.temperature)}°` : '--°';
  const range = currentWeather
    ? copy().weatherHighLow.replace('{high}', Math.round(currentWeather.high)).replace('{low}', Math.round(currentWeather.low))
    : (weatherError ? '—' : 'H:--°  L:--°');
  $('#lockWeatherIcon').textContent = currentWeather ? weatherSymbol(group, currentWeather.isDay) : '…';
  $('#lockWeatherTemp').textContent = temperature;
  $('#lockWeatherCondition').textContent = condition;
  $('#lockWeatherRange').textContent = range;
  $('#lockWeather').setAttribute('aria-label', `${copy().location}: ${temperature}, ${condition}, ${range}`);
  $('.weather-widget strong').textContent = temperature;
  $('#weatherSummary').textContent = condition;
  $('#weatherRange').textContent = range;
  $('.weather-sun').textContent = currentWeather ? weatherSymbol(group, currentWeather.isDay) : '…';
}

function appendWeatherApp(content) {
  const view = document.createElement('div');
  view.className = 'weather-app-view';
  const overview = document.createElement('section');
  overview.className = 'weather-overview';
  const place = document.createElement('div');
  place.className = 'weather-app-place';
  place.textContent = copy().location;
  const condition = document.createElement('div');
  condition.className = 'weather-app-condition';
  const temperature = document.createElement('div');
  temperature.className = 'weather-app-temperature';
  const feelsLike = document.createElement('div');
  feelsLike.className = 'weather-app-feels';
  const highLow = document.createElement('div');
  highLow.className = 'weather-app-highlow';
  if (currentWeather) {
    const group = weatherGroup(currentWeather.code);
    condition.textContent = `${weatherSymbol(group, currentWeather.isDay)}  ${copy().conditions[group]}`;
    temperature.textContent = `${Math.round(currentWeather.temperature)}°`;
    feelsLike.textContent = copy().weatherFeelsLike.replace('{temperature}', Math.round(currentWeather.feelsLike));
    highLow.textContent = copy().weatherHighLow.replace('{high}', Math.round(currentWeather.high)).replace('{low}', Math.round(currentWeather.low));
  } else {
    condition.textContent = weatherError ? copy().weatherUnavailable : copy().weatherLoading;
    temperature.textContent = '--°';
    highLow.textContent = '—';
  }
  overview.append(place, condition, temperature, feelsLike, highLow);
  view.append(overview);

  const makeSection = (title, className) => {
    const section = document.createElement('section');
    section.className = `weather-forecast-card ${className}`;
    const heading = document.createElement('h2');
    heading.textContent = title;
    section.append(heading);
    return section;
  };
  const hourlySection = makeSection(copy().weatherHourly, 'weather-hourly-section');
  const hourlyList = document.createElement('div');
  hourlyList.className = 'weather-hourly-list';
  const hours = currentWeather?.hourly || [];
  if (hours.length) {
    hours.slice(0, 12).forEach((hour, index) => {
      const item = document.createElement('div');
      item.className = 'weather-hour-item';
      const label = document.createElement('span');
      label.textContent = index === 0 ? copy().weatherToday : new Intl.DateTimeFormat(copy().locale, { hour: 'numeric', timeZone: 'Asia/Seoul' }).format(hour.time);
      const icon = document.createElement('span');
      icon.className = 'weather-hour-icon';
      icon.textContent = weatherSymbol(weatherGroup(hour.code), true);
      const temp = document.createElement('strong');
      temp.textContent = `${Math.round(hour.temperature)}°`;
      item.append(label, icon, temp);
      if (hour.precipitation > 0) {
        const rain = document.createElement('small');
        rain.textContent = `${Math.round(hour.precipitation)}%`;
        item.insertBefore(rain, temp);
      }
      hourlyList.append(item);
    });
  } else {
    const empty = document.createElement('p');
    empty.className = 'weather-empty';
    empty.textContent = weatherError ? copy().weatherUnavailable : copy().weatherLoading;
    hourlyList.append(empty);
  }
  hourlySection.append(hourlyList);
  view.append(hourlySection);

  const weekSection = makeSection(copy().weatherWeek, 'weather-week-section');
  const weekList = document.createElement('div');
  weekList.className = 'weather-week-list';
  (currentWeather?.forecast || []).forEach((day, index) => {
    const row = document.createElement('div');
    row.className = 'weather-day-row';
    const dayName = document.createElement('strong');
    dayName.textContent = index === 0 ? copy().weatherToday : new Intl.DateTimeFormat(copy().locale, { weekday: 'short', timeZone: 'Asia/Seoul' }).format(day.date);
    const icon = document.createElement('span');
    icon.className = 'weather-day-icon';
    icon.textContent = weatherSymbol(weatherGroup(day.code), true);
    const low = document.createElement('span');
    low.className = 'weather-day-low';
    low.textContent = `${Math.round(day.low)}°`;
    const range = document.createElement('span');
    range.className = 'weather-day-range';
    range.setAttribute('aria-hidden', 'true');
    const fill = document.createElement('span');
    fill.style.left = `${Math.max(0, Math.min(100, (day.low - Math.min(...currentWeather.forecast.map((item) => item.low))) / (Math.max(...currentWeather.forecast.map((item) => item.high)) - Math.min(...currentWeather.forecast.map((item) => item.low)) || 1) * 100))}%`;
    fill.style.width = `${Math.max(8, (day.high - day.low) / (Math.max(...currentWeather.forecast.map((item) => item.high)) - Math.min(...currentWeather.forecast.map((item) => item.low)) || 1) * 100)}%`;
    range.append(fill);
    const high = document.createElement('span');
    high.className = 'weather-day-high';
    high.textContent = `${Math.round(day.high)}°`;
    row.append(dayName, icon, low, range, high);
    weekList.append(row);
  });
  if (!weekList.childElementCount) {
    const empty = document.createElement('p');
    empty.className = 'weather-empty';
    empty.textContent = weatherError ? copy().weatherUnavailable : copy().weatherLoading;
    weekList.append(empty);
  }
  weekSection.append(weekList);
  view.append(weekSection);
  content.append(view);
}

function appendCalendarApp(content) {
  const customEventStorageKey = 'orbit-phone-calendar-custom-events';
  let customEvents = [];
  try {
    const storedEvents = JSON.parse(localStorage.getItem(customEventStorageKey) || '[]');
    customEvents = Array.isArray(storedEvents) ? storedEvents : [];
  } catch (_error) {
    customEvents = [];
  }
  let scheduleComposerOpen = false;
  const view = document.createElement('div');
  view.className = 'calendar-app-view';
  const nav = document.createElement('div');
  nav.className = 'calendar-month-nav';
  const previous = document.createElement('button');
  previous.type = 'button';
  previous.className = 'calendar-nav-button';
  previous.textContent = '‹';
  previous.setAttribute('aria-label', copy().calendarPreviousMonth);
  const monthLabel = document.createElement('h2');
  const next = document.createElement('button');
  next.type = 'button';
  next.className = 'calendar-nav-button';
  next.textContent = '›';
  next.setAttribute('aria-label', copy().calendarNextMonth);
  nav.append(previous, monthLabel, next);
  const todayButton = document.createElement('button');
  todayButton.type = 'button';
  todayButton.className = 'calendar-today-button';
  todayButton.textContent = copy().calendarToday;
  const weekdayRow = document.createElement('div');
  weekdayRow.className = 'calendar-weekdays';
  const weekdays = Array.from({ length: 7 }, (_, index) => {
    const weekday = document.createElement('span');
    weekday.textContent = new Intl.DateTimeFormat(copy().locale, { weekday: 'short', timeZone: 'UTC' }).format(new Date(Date.UTC(2024, 0, 7 + index)));
    return weekday;
  });
  weekdayRow.append(...weekdays);
  const daysGrid = document.createElement('div');
  daysGrid.className = 'calendar-days-grid';
  const agenda = document.createElement('section');
  agenda.className = 'calendar-agenda';
  const agendaDate = document.createElement('h3');
  const events = document.createElement('div');
  events.className = 'calendar-agenda-events';
  agenda.append(agendaDate, events);
  view.append(nav, todayButton, weekdayRow, daysGrid, agenda);

  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const today = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const todayKey = `${today.year}-${today.month}-${today.day}`;
  const isCalendarYear = Number(today.year) === RIIZE_CALENDAR_YEAR;
  const startMonth = isCalendarYear ? Number(today.month) - 1 : 0;
  let displayedMonth = new Date(Date.UTC(RIIZE_CALENDAR_YEAR, startMonth, 1));
  let selectedDay = isCalendarYear ? todayKey : `${RIIZE_CALENDAR_YEAR}-01-01`;

  const renderAgenda = () => {
    const date = new Date(`${selectedDay}T12:00:00+09:00`);
    agendaDate.textContent = new Intl.DateTimeFormat(copy().locale, { dateStyle: 'full', timeZone: 'Asia/Seoul' }).format(date);
    events.replaceChildren();
    const dayEvents = [...calendarEvents(), ...customEvents].filter((event) => event.date === selectedDay);
    if (dayEvents.length) {
      dayEvents.forEach((event) => {
        const row = document.createElement('div');
        row.className = 'calendar-agenda-event';
        const category = document.createElement('span');
        category.className = `calendar-event-category category-${event.type}`;
        category.textContent = copy().calendarCategories[event.type] || copy().calendarCategories.event;
        const detail = document.createElement('div');
        detail.className = 'calendar-event-detail';
        const title = event.source ? document.createElement('a') : document.createElement('strong');
        title.textContent = localizedCalendarText(event, 'title');
        if (event.source) {
          title.href = event.source;
          title.target = '_blank';
          title.rel = 'noopener noreferrer';
          title.className = 'calendar-event-link';
        }
        const location = document.createElement('small');
        const eventTime = event.time || '';
        const eventLocation = localizedCalendarText(event, 'location') || '';
        location.textContent = event.custom
          ? [eventTime, eventLocation].filter(Boolean).join(' · ')
          : eventLocation;
        detail.append(title, location);
        const noteText = event.noteByLanguage?.[currentLanguage];
        if (noteText) {
          const note = document.createElement('small');
          note.className = 'calendar-event-note';
          note.textContent = noteText;
          detail.append(note);
        }
        row.append(category, detail);
        events.append(row);
      });
    } else {
      const empty = document.createElement('p');
      empty.className = 'calendar-no-events';
      empty.textContent = copy().calendarNoEvents;
      events.append(empty);
    }
    if (scheduleComposerOpen) {
      const form = document.createElement('form');
      form.className = 'calendar-add-event-form';
      const titleInput = document.createElement('input');
      titleInput.type = 'text';
      titleInput.name = 'title';
      titleInput.required = true;
      titleInput.maxLength = 80;
      titleInput.placeholder = copy().calendarEventTitle;
      titleInput.setAttribute('aria-label', copy().calendarEventTitle);
      const timeInput = document.createElement('input');
      timeInput.type = 'time';
      timeInput.name = 'time';
      timeInput.setAttribute('aria-label', copy().calendarEventTime);
      const timeField = document.createElement('label');
      timeField.className = 'calendar-event-time-field';
      const timeFieldLabel = document.createElement('span');
      timeFieldLabel.textContent = copy().calendarEventTime;
      timeField.append(timeFieldLabel, timeInput);
      const locationInput = document.createElement('input');
      locationInput.type = 'text';
      locationInput.name = 'location';
      locationInput.maxLength = 80;
      locationInput.placeholder = copy().calendarEventLocation;
      locationInput.setAttribute('aria-label', copy().calendarEventLocation);
      const actions = document.createElement('div');
      actions.className = 'calendar-add-event-actions';
      const saveButton = document.createElement('button');
      saveButton.type = 'submit';
      saveButton.textContent = copy().calendarSaveSchedule;
      const cancelButton = document.createElement('button');
      cancelButton.type = 'button';
      cancelButton.textContent = copy().calendarCancelSchedule;
      cancelButton.addEventListener('click', () => {
        scheduleComposerOpen = false;
        renderAgenda();
      });
      actions.append(cancelButton, saveButton);
      form.append(titleInput, timeField, locationInput, actions);
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = titleInput.value.trim();
        if (!title) {
          titleInput.focus();
          return;
        }
        customEvents.push({
          id: `calendar-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          date: selectedDay,
          title,
          time: timeInput.value,
          location: locationInput.value.trim(),
          type: 'event',
          custom: true,
        });
        try { localStorage.setItem(customEventStorageKey, JSON.stringify(customEvents)); } catch (_error) { /* Keep the schedule for this visit. */ }
        scheduleComposerOpen = false;
        renderMonth();
        renderAgenda();
      });
      events.append(form);
      titleInput.focus();
    }
  };

  const renderMonth = () => {
    const year = RIIZE_CALENDAR_YEAR;
    const month = displayedMonth.getUTCMonth();
    previous.disabled = month === 0;
    next.disabled = month === 11;
    monthLabel.textContent = new Intl.DateTimeFormat(copy().locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(displayedMonth);
    daysGrid.replaceChildren();
    const offset = new Date(Date.UTC(year, month, 1)).getUTCDay();
    const numberOfDays = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const gridSize = Math.ceil((offset + numberOfDays) / 7) * 7;
    for (let index = 0; index < gridSize; index += 1) {
      const dayNumber = index - offset + 1;
      if (dayNumber < 1 || dayNumber > numberOfDays) {
        const blank = document.createElement('span');
        blank.className = 'calendar-day-empty';
        daysGrid.append(blank);
        continue;
      }
      const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`;
      const dayButton = document.createElement('button');
      dayButton.type = 'button';
      dayButton.className = 'calendar-day-button';
      dayButton.textContent = String(dayNumber);
      dayButton.setAttribute('aria-label', new Intl.DateTimeFormat(copy().locale, { dateStyle: 'full', timeZone: 'UTC' }).format(new Date(Date.UTC(year, month, dayNumber, 12))));
      dayButton.setAttribute('aria-pressed', String(dateKey === selectedDay));
      if (dateKey === todayKey) dayButton.classList.add('is-today');
      if (dateKey === selectedDay) dayButton.classList.add('is-selected');
      if ([...calendarEvents(), ...customEvents].some((event) => event.date === dateKey)) {
        const eventDot = document.createElement('i');
        eventDot.className = 'calendar-event-dot';
        dayButton.append(eventDot);
      }
      dayButton.addEventListener('click', () => {
        selectedDay = dateKey;
        renderMonth();
        renderAgenda();
      });
      daysGrid.append(dayButton);
    }
  };
  previous.addEventListener('click', () => {
    if (displayedMonth.getUTCMonth() === 0) return;
    displayedMonth = new Date(Date.UTC(displayedMonth.getUTCFullYear(), displayedMonth.getUTCMonth() - 1, 1));
    selectedDay = `${displayedMonth.getUTCFullYear()}-${String(displayedMonth.getUTCMonth() + 1).padStart(2, '0')}-01`;
    renderMonth();
    renderAgenda();
  });
  next.addEventListener('click', () => {
    if (displayedMonth.getUTCMonth() === 11) return;
    displayedMonth = new Date(Date.UTC(displayedMonth.getUTCFullYear(), displayedMonth.getUTCMonth() + 1, 1));
    selectedDay = `${displayedMonth.getUTCFullYear()}-${String(displayedMonth.getUTCMonth() + 1).padStart(2, '0')}-01`;
    renderMonth();
    renderAgenda();
  });
  todayButton.addEventListener('click', () => {
    displayedMonth = new Date(Date.UTC(RIIZE_CALENDAR_YEAR, startMonth, 1));
    selectedDay = isCalendarYear ? todayKey : `${RIIZE_CALENDAR_YEAR}-01-01`;
    renderMonth();
    renderAgenda();
  });
  renderMonth();
  renderAgenda();
  content.append(view);
  const addScheduleButton = document.createElement('button');
  addScheduleButton.type = 'button';
  addScheduleButton.className = 'reminder-add-button';
  addScheduleButton.setAttribute('aria-label', copy().calendarAddSchedule);
  const addScheduleIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  addScheduleIcon.setAttribute('viewBox', '0 0 24 24');
  addScheduleIcon.setAttribute('aria-hidden', 'true');
  const addSchedulePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  addSchedulePath.setAttribute('d', 'M12 4.5v15M4.5 12h15');
  addSchedulePath.setAttribute('fill', 'none');
  addSchedulePath.setAttribute('stroke', 'currentColor');
  addSchedulePath.setAttribute('stroke-width', '1.8');
  addSchedulePath.setAttribute('stroke-linecap', 'round');
  addScheduleIcon.append(addSchedulePath);
  addScheduleButton.append(addScheduleIcon);
  addScheduleButton.addEventListener('click', () => {
    scheduleComposerOpen = true;
    renderAgenda();
  });
  appPanel.append(addScheduleButton);
}

async function loadSeoulWeather() {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current=temperature_2m,apparent_temperature,weather_code,is_day&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FSeoul&forecast_days=7';
  weatherError = false;
  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
    const data = await response.json();
    currentWeather = {
      temperature: data.current.temperature_2m,
      feelsLike: data.current.apparent_temperature,
      code: data.current.weather_code,
      isDay: data.current.is_day === 1,
      high: data.daily.temperature_2m_max[0],
      low: data.daily.temperature_2m_min[0],
      hourly: data.hourly.time.map((time, index) => ({ time: new Date(`${time}:00+09:00`), temperature: data.hourly.temperature_2m[index], code: data.hourly.weather_code[index], precipitation: data.hourly.precipitation_probability[index] }))
        .filter((hour) => hour.time >= new Date()).slice(0, 12),
      forecast: data.daily.time.map((day, index) => ({ date: new Date(`${day}T12:00:00+09:00`), code: data.daily.weather_code[index], high: data.daily.temperature_2m_max[index], low: data.daily.temperature_2m_min[index] })),
    };
  } catch (_error) {
    if (!currentWeather) weatherError = true;
  }
  renderWeather();
  if (currentAppType === 'weather') openApp('weather');
}

function showView(view) {
  if (view !== 'lock' && $('#flashlightButton').classList.contains('active')) {
    void toggleFlashlight($('#flashlightButton'));
  }
  currentView = view;
  if (view === 'lock') pendingAppLaunch = null;
  if (view !== 'passcode') pendingSpotifyLaunch = false;
  [lockView, passcodeView, homeView].forEach((element) => {
    const active = element.id === `${view}View`;
    element.classList.toggle('active', active);
    element.setAttribute('aria-hidden', String(!active));
  });
  if (view !== 'passcode') clearPasscode();
  closeApp();
  if (view === 'home') scheduleEunseokHomePopup();
}

function openPasscode() {
  if (currentView === 'lock') {
    if (!PHONE_CONFIG.requirePasscode) {
      const appToOpen = pendingAppLaunch;
      const shouldOpenSpotify = pendingSpotifyLaunch;
      pendingAppLaunch = null;
      pendingSpotifyLaunch = false;
      showView('home');
      if (appToOpen) openApp(appToOpen);
      else if (shouldOpenSpotify) openApp('spotify');
      return;
    }
    $('#passcodeTitle').textContent = pendingSpotifyLaunch ? copy().spotifyUnlock : copy().passcode;
    showView('passcode');
  }
}

function swipeToOpen() {
  if (currentView !== 'lock' || unlockAnimationActive) return;
  unlockAnimationActive = true;
  const revealsHome = !PHONE_CONFIG.requirePasscode;
  const nextView = revealsHome ? homeView : passcodeView;
  lockView.classList.add('swipe-in-progress');
  nextView.classList.add('unlock-prep');
  window.requestAnimationFrame(() => {
    lockView.classList.add('swipe-away');
    window.requestAnimationFrame(() => nextView.classList.add('slide-up'));
  });
  window.setTimeout(() => {
    lockView.classList.remove('swipe-in-progress', 'swipe-away');
    nextView.classList.remove('unlock-prep', 'slide-up');
    unlockAnimationActive = false;
    openPasscode();
  }, 430);
}

function clearPasscode() {
  enteredCode = '';
  updatePasscodeDots();
}

function updatePasscodeDots() {
  [...$('#passcodeDots').children].forEach((dot, index) => dot.classList.toggle('filled', index < enteredCode.length));
}

function enterDigit(digit) {
  if (currentView !== 'passcode' || enteredCode.length >= 4) return;
  enteredCode += digit;
  updatePasscodeDots();
  if (enteredCode.length === 4) {
    if (enteredCode === PHONE_CONFIG.passcode) {
      const appToOpen = pendingAppLaunch;
      const shouldOpenSpotify = pendingSpotifyLaunch;
      pendingAppLaunch = null;
      pendingSpotifyLaunch = false;
      window.setTimeout(() => {
        showView('home');
        if (appToOpen) openApp(appToOpen);
        else if (shouldOpenSpotify) openApp('spotify');
      }, 180);
    } else {
      const dots = $('#passcodeDots');
      dots.classList.remove('shake');
      void dots.offsetWidth;
      dots.classList.add('shake');
      window.setTimeout(clearPasscode, 420);
    }
  }
}

function deleteDigit() {
  enteredCode = enteredCode.slice(0, -1);
  updatePasscodeDots();
}

const ICON_ART = {
  reminders: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="17" cy="18" r="5" fill="#3988ff"/><circle cx="17" cy="32" r="5" fill="#ff9f0a"/><circle cx="17" cy="46" r="5" fill="#ff453a"/><path d="M28 18h21M28 32h21M28 46h21" stroke="#85858b" stroke-width="4" stroke-linecap="round"/></svg>',
  photos: '<svg viewBox="0 0 64 64" aria-hidden="true"><g transform="translate(32 32)"><ellipse cy="-13" rx="7.5" ry="14" fill="#ff453a"/><ellipse transform="rotate(60)" cy="-13" rx="7.5" ry="14" fill="#ff9f0a"/><ellipse transform="rotate(120)" cy="-13" rx="7.5" ry="14" fill="#ffd60a"/><ellipse transform="rotate(180)" cy="-13" rx="7.5" ry="14" fill="#34c759"/><ellipse transform="rotate(240)" cy="-13" rx="7.5" ry="14" fill="#0a84ff"/><ellipse transform="rotate(300)" cy="-13" rx="7.5" ry="14" fill="#bf5af2"/><circle r="6" fill="#fff"/></g></svg>',
  mail: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="15" width="48" height="35" rx="8" fill="#fff"/><path d="m11 21 21 16 21-16" fill="none" stroke="#4aa5ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  clock: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="25" fill="#fff"/><circle cx="32" cy="32" r="22" fill="none" stroke="#191a20" stroke-width="2"/><path d="M32 14v3M50 32h-3M32 50v-3M14 32h3M32 32V19M32 32l12 7" fill="none" stroke="#18191f" stroke-width="3" stroke-linecap="round"/></svg>',
  notes: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="10" width="44" height="46" rx="7" fill="#fff"/><path d="M10 20h44" stroke="#ffcc00" stroke-width="8"/><path d="M17 29h30M17 37h30M17 45h22" stroke="#c8c8ce" stroke-width="2" stroke-linecap="round"/></svg>',
  weather: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="43" cy="22" r="12" fill="#ffd60a"/><path d="M17 48a11 11 0 0 1-1-22 16 16 0 0 1 30-3 13 13 0 0 1 2 25z" fill="#fff" stroke="#d7eaff" stroke-width="2"/></svg>',
  settings: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="m27 7-2 6a20 20 0 0 0-5 2l-6-3-6 7 4 5a20 20 0 0 0-1 6l-5 4 3 9 7-1a20 20 0 0 0 4 4l1 7 9 2 3-6a20 20 0 0 0 6-1l5 4 7-6-3-6a20 20 0 0 0 2-6l6-3-2-9-7-1a20 20 0 0 0-4-5l1-7-9-3-4 6a20 20 0 0 0-6 0z" fill="#f3f3f5"/><circle cx="32" cy="32" r="9" fill="#777b83" stroke="#d6d7db" stroke-width="3"/></svg>',
  camera: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M9 21a5 5 0 0 1 5-5h9l4-6h10l4 6h9a5 5 0 0 1 5 5v27a5 5 0 0 1-5 5H14a5 5 0 0 1-5-5z" fill="#24262b"/><circle cx="32" cy="34" r="13" fill="#e4e6e9"/><circle cx="32" cy="34" r="9" fill="#69727d"/><circle cx="32" cy="34" r="5" fill="#15191e"/><circle cx="48" cy="22" r="2" fill="#ff453a"/></svg>',
  phone: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M19 10c2-2 5-2 7 0l7 7c2 2 2 5 0 7l-4 4c3 6 8 11 14 14l4-4c2-2 5-2 7 0l7 7c2 2 2 5 0 7l-4 4c-3 3-7 4-11 3C31 55 9 33 5 18c-1-4 0-8 3-11z" fill="#fff" transform="translate(5 0) scale(.88)"/></svg>',
  browser: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="26" fill="#fff"/><circle cx="32" cy="32" r="22" fill="none" stroke="#48a9ff" stroke-width="3"/><path d="m43 19-7 17-16 9 8-17z" fill="#ff453a"/><path d="m43 19-15 9 8 8z" fill="#fff"/></svg>',
  messages: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 9c-14 0-25 9-25 21 0 7 4 13 11 17l-2 9 12-5 4 1c14 0 25-9 25-22S46 9 32 9" fill="#fff"/><circle cx="21" cy="31" r="3" fill="#28c840"/><circle cx="32" cy="31" r="3" fill="#28c840"/><circle cx="43" cy="31" r="3" fill="#28c840"/></svg>',
  music: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M38 12v29a9 9 0 1 1-5-8V19l21-5v25a9 9 0 1 1-5-8V9z" fill="#fff"/></svg>',
  calculator: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="7" width="48" height="50" rx="10" fill="#242426"/><rect x="14" y="12" width="36" height="12" rx="4" fill="#434347"/><text x="45" y="22" text-anchor="end" fill="#fff" font-size="10" font-family="Arial">0</text><g fill="#85858a"><circle cx="20" cy="33" r="5"/><circle cx="32" cy="33" r="5"/><circle cx="44" cy="33" r="5"/><circle cx="20" cy="46" r="5"/><circle cx="32" cy="46" r="5"/></g><g fill="#ff9f0a"><circle cx="44" cy="46" r="5"/><circle cx="20" cy="57" r="5"/><circle cx="32" cy="57" r="5"/><circle cx="44" cy="57" r="5"/></g></svg>',
  youtube: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="5" y="13" width="54" height="38" rx="12" fill="#ff0033"/><path d="m27 23 16 9-16 9z" fill="#fff"/></svg>',
  instagram: '<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="instagramGradient" x1="8%" y1="92%" x2="92%" y2="8%"><stop offset="0" stop-color="#ffdc80"/><stop offset=".28" stop-color="#fcaf45"/><stop offset=".52" stop-color="#f77737"/><stop offset=".75" stop-color="#e1306c"/><stop offset="1" stop-color="#833ab4"/></linearGradient></defs><rect width="64" height="64" rx="17" fill="url(#instagramGradient)"/><rect x="13" y="13" width="38" height="38" rx="11" fill="none" stroke="#fff" stroke-width="4.5"/><circle cx="32" cy="32" r="9" fill="none" stroke="#fff" stroke-width="4.5"/><circle cx="44" cy="20" r="3" fill="#fff"/></svg>',
  naver: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 50V14h11l14 19V14h11v36H39L25 31v19z" fill="#fff"/></svg>',
  kakaotalk: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 10c-13 0-23 8-23 19 0 7 5 13 12 16l-3 9 13-7c13 0 24-8 24-19S45 10 32 10" fill="#3b2928"/><text x="32" y="33" text-anchor="middle" fill="#fae100" font-size="10" font-weight="800" font-family="Arial,sans-serif">TALK</text></svg>',
  spotify: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="#1ed760"/><path d="M15 25c12-4 26-2 36 4M18 33c10-3 22-1 30 4M21 41c8-2 16-1 23 3" fill="none" stroke="#101010" stroke-width="4.2" stroke-linecap="round"/></svg>',
};

function clockIconMarkup() {
  const ticks = Array.from({ length: 60 }, (_, index) => {
    const angle = index * Math.PI / 30;
    const outer = 25;
    const inner = index % 5 === 0 ? 20 : 23;
    const x1 = 32 + Math.sin(angle) * inner;
    const y1 = 32 - Math.cos(angle) * inner;
    const x2 = 32 + Math.sin(angle) * outer;
    const y2 = 32 - Math.cos(angle) * outer;
    return `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${index % 5 === 0 ? '#4a4a4f' : '#a8a8ac'}" stroke-width="${index % 5 === 0 ? 1.1 : .55}" stroke-linecap="round"/>`;
  }).join('');
  return `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="2" y="2" width="60" height="60" rx="17" fill="#fff" stroke="#d8d8dc" stroke-width="2"/><g>${ticks}</g><g fill="#35353a" font-family="Arial,sans-serif" font-size="7" font-weight="600" text-anchor="middle"><text x="32" y="17">12</text><text x="47" y="34.5">3</text><text x="32" y="52">6</text><text x="17" y="34.5">9</text></g><line id="clockIconHour" x1="32" y1="32" x2="32" y2="24" stroke="#111" stroke-width="3" stroke-linecap="round"/><line id="clockIconMinute" x1="32" y1="32" x2="32" y2="17" stroke="#111" stroke-width="2.3" stroke-linecap="round"/><line id="clockIconSecond" x1="32" y1="34" x2="32" y2="9" stroke="#ff9f0a" stroke-width="1" stroke-linecap="round"/><circle cx="32" cy="32" r="1.9" fill="#ff9f0a"/></svg>`;
}

const APP_URLS = {
  youtube: 'https://www.youtube.com/',
  instagram: 'https://www.instagram.com/',
};

const PHOTO_FILE_NAMES = [
  '31a0bd56d1b751a9d7020797e6f50396678e857d.JPG', '4e829fa9dcb59bcf452658f350c046a6ff96f239.JPG',
  '53aa6eb587120b4218ba89696e7ffd493178672a.JPG', 'fb747f34f99c20de6803ba1d06bd757e533218da.JPG',
  '4b25b461576eae2da2cc33416ec5c7efbbd2e88c.JPG', 'fabdc0627718ebb32242427b8bc52539366d3001.JPG',
  'a9d2917eb129eee51ee57b939438a394336af05c.JPG', 'e338b86a4f17cb43ffe183aceab4a6c04566c348.JPG',
  '6b357f434f96249b4232ee869df54cf6ef9fc163.JPG', '741dddaa2c8283544ab88b7033259cabe55c5bae.JPG',
  '4f21586668a32627cf223f2b4c33ec0621bb6eeb.JPG', '5d2544b0cc33ddb5f58830cdb87556865522902c.JPG',
  'd11ddae128b79c744090925aec953dffb32ab501.JPG', '88d60231e9150f23ff3e77f693cbd70398597756.JPG',
  'fff7c951216d6857cd89f7c53b2461482d75f451.JPG', '19df28614577aee8c0967e0057000207a5db38cb.JPG',
  '35e6b8fd3c28034f5093d66fc94361588daaa51d.JPG', '035f0fd0197bde6b81f76537d540e5e6c7fd6722.JPG',
  '9f8875b662ab2b50a3fb7003aab62f1455e6afb9.JPG', 'f88dc2bfd8caf88fde21176dd482b4d2f02bd719.JPG',
  'b02656320510758d745d441615d43842580cf94d.JPG', '0939bb00ac1ad56abf03eab7f9b8e6891483dbd2.JPG',
  'f086775f2f23d000f22bfa77ff5191b33613a9f0.JPG', '7eaf4771af122a3faec005f8619174341430c14d.JPG',
  'd837c61ed38abb8b557771f248de2372f8f4febb.JPG', '6648cffde290e0238971bdc481da510d9c5e01f9.JPG',
  '5b09df66007533f863f5077bebed1f996259188c.JPG', '9ae3269f9f723bb05e68d19e3ada2ccd30b3781f.JPG',
  '0ef4d8a7b069540edc1a48f84eac9e583c03b4c8.JPG', 'a0e480e15e2cf1d5b6912604f80df833f500deb9.JPG',
  '5b968d1461795cb5865902dc287df9824413dc79.JPG', 'IMG_7470.jpg',
  '88cc22a432ef121cabfc6fea8d775582282ee6ff.JPG', 'IMG_7487.jpg', 'IMG_7477.jpg', 'IMG_7476.jpg',
  'IMG_7524.jpg', 'IMG_7523.jpg', 'IMG_7522.jpg', 'IMG_7485.jpg', 'IMG_7481.jpg', 'IMG_7486.jpg',
  'IMG_7483.jpg', 'IMG_7480.jpg', 'IMG_7479.jpg', 'IMG_7475.jpg',
  'IMG_7537 2.jpg', 'IMG_7542 2.jpg', 'IMG_7540 2.jpg', 'IMG_7541 2.jpg', 'IMG_7538 2.jpg', 'IMG_7539 2.jpg',
  'IMG_7545.jpg', 'IMG_7544.jpg', 'IMG_7543.jpg',
  'IMG_7548.jpg', 'IMG_7552.jpg', 'IMG_7553.jpg', 'IMG_7549.jpg', 'IMG_7547.jpg', 'IMG_7546.jpg',
  'IMG_7555.jpg', 'IMG_7558.jpg', 'IMG_7556.jpg', 'IMG_7557.jpg',
  'IMG_7560.jpg', 'IMG_7559.jpg', 'IMG_7562.jpg', 'IMG_7561.jpg',
  'weverse_20261021165008_1628161902.JPG', 'weverse_20261021164955_88809314.JPG',
  'weverse_20261021164940_1440808573.JPG', 'weverse_20261021164932_3554816689.JPG',
  'weverse_20261021164920_2251415106.JPG', 'weverse_20261021164802_1695729478.JPG',
  'weverse_20261021164636_3183304105.JPG', 'weverse_20261021164617_3684770608.JPG',
  'weverse_20261021164429_3436659414.JPG', 'weverse_20261021164541_2697698120.JPG',
  'weverse_20261021164655_4220029705.JPG', 'weverse_20261021164613_563878040.JPG',
  'IMG_7550.jpg', 'IMG_7551.jpg',
];

// User-assigned years; photos without a specific year are grouped under 2026.
const PHOTO_YEAR_OVERRIDES = {
  'IMG_7470.jpg': 2004,
  'IMG_7485.jpg': 2011,
  'IMG_7483.jpg': 2011,
  'IMG_7481.jpg': 2009,
  'IMG_7487.jpg': 2002,
  'IMG_7477.jpg': 2002,
  'IMG_7476.jpg': 2003,
  'IMG_7537 2.jpg': 2025,
  'IMG_7542 2.jpg': 2025,
  'IMG_7540 2.jpg': 2025,
  'IMG_7541 2.jpg': 2025,
  'IMG_7538 2.jpg': 2021,
  'IMG_7539 2.jpg': 2025,
  'IMG_7545.jpg': 2020,
  'IMG_7544.jpg': 2020,
  'IMG_7543.jpg': 2020,
  'IMG_7548.jpg': 2021,
  'IMG_7552.jpg': 2021,
  'IMG_7553.jpg': 2021,
  'IMG_7549.jpg': 2021,
  'IMG_7547.jpg': 2021,
  'IMG_7546.jpg': 2021,
  'IMG_7555.jpg': 2022,
  'IMG_7558.jpg': 2022,
  'IMG_7556.jpg': 2022,
  'IMG_7557.jpg': 2022,
  'IMG_7560.jpg': 2025,
  'IMG_7559.jpg': 2025,
  'IMG_7562.jpg': 2025,
  'IMG_7561.jpg': 2025,
  'weverse_20261021165008_1628161902.JPG': 2023,
  'weverse_20261021164955_88809314.JPG': 2023,
  'weverse_20261021164940_1440808573.JPG': 2023,
  'weverse_20261021164932_3554816689.JPG': 2023,
  'weverse_20261021164920_2251415106.JPG': 2023,
  'weverse_20261021164802_1695729478.JPG': 2023,
  'weverse_20261021164636_3183304105.JPG': 2024,
  'weverse_20261021164617_3684770608.JPG': 2024,
  'weverse_20261021164429_3436659414.JPG': 2024,
  'weverse_20261021164541_2697698120.JPG': 2024,
  'weverse_20261021164655_4220029705.JPG': 2024,
  'weverse_20261021164613_563878040.JPG': 2024,
  'IMG_7550.jpg': 2024,
  'IMG_7551.jpg': 2025,
  'IMG_7475.jpg': 2005,
  'IMG_7480.jpg': 2006,
  'IMG_7486.jpg': 2015,
  'IMG_7479.jpg': 2004,
  'IMG_7524.jpg': 2023,
  'IMG_7523.jpg': 2025,
  '035f0fd0197bde6b81f76537d540e5e6c7fd6722.JPG': 2026,
  '19df28614577aee8c0967e0057000207a5db38cb.JPG': 2026,
};
const PHOTO_COPY = {
  en: { library: 'Library', oldestFirst: 'Oldest first', approximate: 'Approximate dates', unknown: 'Date unavailable', unavailable: 'Not available in the source file', video: 'Video', wallpaper: 'Wallpaper', backToSettings: 'Back to Settings', chooseWallpaper: 'Choose Wallpaper', wallpaperUpdated: 'Wallpaper updated', wallpaperError: 'Could not use that image. Please choose another one.', settings: 'Settings', close: 'Close', favorite: 'Add to Favorites', unfavorite: 'Remove from Favorites', delete: 'Delete', cancel: 'Cancel', confirmDelete: 'Remove this item from Photos on this device?', share: 'Share', info: 'Info', copied: 'Link copied', mediaCount: 'items' },
  'zh-Hant': { library: '圖庫', oldestFirst: '由舊至新', approximate: '日期為估計', unknown: '日期不明', unavailable: '原始檔案沒有拍攝日期', video: '影片', wallpaper: '桌布', backToSettings: '返回設定', chooseWallpaper: '選擇桌布', wallpaperUpdated: '桌布已更新', wallpaperError: '無法使用這張圖片，請選擇其他圖片。', settings: '設定', close: '關閉', favorite: '加入收藏', unfavorite: '從收藏移除', delete: '刪除', cancel: '取消', confirmDelete: '要從此裝置的照片中移除此項目嗎？', share: '分享', info: '資訊', copied: '已複製連結', mediaCount: '個項目' },
  ko: { library: '보관함', oldestFirst: '오래된 순', approximate: '날짜는 추정치', unknown: '날짜를 알 수 없음', unavailable: '원본 파일에 촬영 날짜가 없습니다', video: '비디오', wallpaper: '배경화면', backToSettings: '설정으로 돌아가기', chooseWallpaper: '배경화면 선택', wallpaperUpdated: '배경화면을 변경했어요', wallpaperError: '이 이미지를 사용할 수 없어요. 다른 이미지를 선택해 주세요.', settings: '설정', close: '닫기', favorite: '즐겨찾기에 추가', unfavorite: '즐겨찾기에서 제거', delete: '삭제', cancel: '취소', confirmDelete: '이 기기의 사진 앱에서 이 항목을 삭제할까요?', share: '공유', info: '정보', copied: '링크를 복사했습니다', mediaCount: '개 항목' },
};

function readPhotoSet(storageKey) {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return new Set(Array.isArray(value) ? value.filter((file) => typeof file === 'string') : []);
  } catch (_error) {
    return new Set();
  }
}

function writePhotoSet(storageKey, values) {
  try { localStorage.setItem(storageKey, JSON.stringify([...values])); } catch (_error) { /* Keep the photo controls usable for this visit. */ }
}

const PHOTO_FAVORITES = readPhotoSet('orbit-phone-photo-favorites');
// Deletions are temporary for this visit; the original library returns on refresh.
const PHOTO_DELETED = new Set();
const PHOTO_LIBRARY_ALL = PHOTO_FILE_NAMES.map((file, index) => {
  const year = PHOTO_YEAR_OVERRIDES[file] ?? 2026;
  return {
    file,
    index,
    type: 'photo',
    year: year || null,
    caption: year && year < 2020 ? 'Sungchan · childhood photo' : year ? 'Sungchan · photo' : 'Sungchan · capture date unavailable',
    sortKey: year ? `${year}-01-01` : '9999-01-01',
  };
}).concat([
  { file: 'af864478a0d35a42c4081a4ef9bec4a61c2d4524.MP4', index: 46, type: 'video', year: 2026, caption: 'Sungchan · video', sortKey: '2026-01-01' },
  { file: 'ScreenRecording_10-20-2026 22-46-58_1.mov', index: 47, type: 'video', year: 2002, caption: 'Screen recording', sortKey: '2002-01-01', time: '10:46 PM' },
]);
let PHOTO_LIBRARY = PHOTO_LIBRARY_ALL.filter((item) => !PHOTO_DELETED.has(item.file));

function photoAssetPath(file) {
  return `assets/photos/${encodeURIComponent(file)}`;
}

function openPhotoViewer(item, { isWallpaper = false, returnToCamera = false } = {}) {
  const labels = PHOTO_COPY[currentLanguage] || PHOTO_COPY.en;
  screen.classList.remove('status-dark');
  const viewer = document.createElement('section');
  viewer.className = `photo-viewer${isWallpaper ? ' wallpaper-viewer' : ''}`;
  viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-modal', 'true');
  viewer.setAttribute('aria-label', item.caption || labels.wallpaper);
  const dismissViewer = () => {
    viewer.remove();
    updateAppStatusSurface(currentAppType);
    document.removeEventListener('keydown', handleViewerKeydown);
  };
  viewer.dismiss = dismissViewer;
  const handleViewerKeydown = (event) => {
    if (event.key === 'Escape' && viewer.isConnected) {
      const libraryPicker = viewer.querySelector('.wallpaper-library-picker');
      if (libraryPicker) libraryPicker.remove();
      else dismissViewer();
    }
  };
  const toolbar = document.createElement('div');
  toolbar.className = 'photo-viewer-toolbar';
  const close = document.createElement('button');
  close.className = 'photo-viewer-close';
  close.type = 'button';
  close.setAttribute('aria-label', isWallpaper ? labels.backToSettings : returnToCamera ? copy().apps.camera : labels.close);
  close.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>';
  if (isWallpaper || returnToCamera) {
    close.classList.add('photo-viewer-back');
    const backLabel = document.createElement('span');
    backLabel.textContent = isWallpaper ? labels.settings : copy().apps.camera;
    close.append(backLabel);
  }
  close.addEventListener('click', dismissViewer);
  const title = document.createElement('strong');
  title.textContent = isWallpaper ? labels.wallpaper : item.type === 'video' ? labels.video : '';
  toolbar.append(close, title, document.createElement('span'));
  const stage = document.createElement('div');
  stage.className = 'photo-viewer-stage';
  let media;
  if (item.type === 'video') {
    media = document.createElement('video');
    media.controls = true;
    media.playsInline = true;
    media.preload = 'metadata';
    media.src = photoAssetPath(item.file);
  } else {
    media = document.createElement('img');
    media.src = item.src || photoAssetPath(item.file);
    media.alt = item.caption || labels.wallpaper;
  }
  media.className = 'photo-viewer-media';
  stage.append(media);
  stage.addEventListener('click', (event) => {
    if (event.target === stage && item.type !== 'video') dismissViewer();
  });
  let touchStart = null;
  stage.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    touchStart = touch ? { x: touch.clientX, y: touch.clientY } : null;
  }, { passive: true });
  stage.addEventListener('touchend', (event) => {
    const touch = event.changedTouches[0];
    if (touchStart && touch && touch.clientY - touchStart.y > 110 && Math.abs(touch.clientX - touchStart.x) < 80) dismissViewer();
    touchStart = null;
  }, { passive: true });
  const details = document.createElement('div');
  details.className = 'photo-viewer-details';
  const dateValue = document.createElement('span');
  dateValue.className = 'photo-viewer-date';
  dateValue.textContent = isWallpaper ? labels.wallpaper : item.year ? String(item.year) : '';
  const timeValue = document.createElement('span');
  timeValue.className = 'photo-viewer-time';
  timeValue.textContent = item.time || '';
  if (isWallpaper) details.hidden = true;
  else if (item.type === 'video') {
    if (item.year) details.append(dateValue);
    if (item.time) details.append(timeValue);
    details.hidden = !item.year && !item.time;
  } else details.hidden = true;
  if (isWallpaper || item.type === 'video' || returnToCamera) viewer.append(toolbar);
  viewer.append(stage, details);

  if (isWallpaper) {
    const actionBar = document.createElement('div');
    actionBar.className = 'wallpaper-viewer-actionbar';
    const choose = document.createElement('button');
    choose.type = 'button';
    choose.className = 'wallpaper-choose-button';
    choose.textContent = labels.chooseWallpaper;
    const status = document.createElement('span');
    status.className = 'wallpaper-picker-status';
    status.setAttribute('role', 'status');
    const openLibrary = () => {
      const picker = document.createElement('section');
      picker.className = 'wallpaper-library-picker';
      picker.setAttribute('role', 'dialog');
      picker.setAttribute('aria-modal', 'true');
      const pickerHeader = document.createElement('header');
      pickerHeader.className = 'wallpaper-library-header';
      const back = document.createElement('button');
      back.type = 'button';
      back.className = 'wallpaper-library-back';
      back.textContent = '‹';
      back.setAttribute('aria-label', labels.cancel);
      back.addEventListener('click', () => picker.remove());
      const pickerTitle = document.createElement('strong');
      pickerTitle.textContent = labels.library;
      pickerHeader.append(back, pickerTitle, document.createElement('span'));
      const grid = document.createElement('div');
      grid.className = 'wallpaper-library-grid';
      PHOTO_LIBRARY.filter((photo) => photo.type === 'photo').forEach((photo) => {
        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = 'wallpaper-library-tile';
        tile.setAttribute('aria-label', photo.caption);
        const image = document.createElement('img');
        image.src = photoAssetPath(photo.file);
        image.alt = '';
        tile.append(image);
        tile.addEventListener('click', () => {
          const source = photoAssetPath(photo.file);
          applyWallpaper(source);
          media.src = source;
          const preview = appPanel.querySelector('.settings-wallpaper-row img');
          if (preview) preview.src = source;
          status.textContent = labels.wallpaperUpdated;
          picker.remove();
        });
        grid.append(tile);
      });
      picker.append(pickerHeader, grid);
      viewer.append(picker);
      back.focus();
    };
    choose.addEventListener('click', openLibrary);
    actionBar.append(choose, status);
    viewer.append(actionBar);
  } else {
    const actionBar = document.createElement('div');
    actionBar.className = 'photo-viewer-actionbar';
    const makeAction = (name, label, markup) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `photo-action photo-action-${name}`;
      button.setAttribute('aria-label', label);
      button.title = label;
      button.innerHTML = markup;
      return button;
    };
    const favorite = makeAction('favorite', labels.favorite, '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/></svg>');
    const deleteButton = makeAction('delete', labels.delete, '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16m-10 0V4h4v3m-8 0 1 13h10l1-13M10 11v5m4-5v5"/></svg>');
    const refreshFavorite = () => {
      const active = PHOTO_FAVORITES.has(item.file);
      favorite.classList.toggle('is-active', active);
      favorite.setAttribute('aria-pressed', String(active));
      favorite.setAttribute('aria-label', active ? labels.unfavorite : labels.favorite);
      favorite.title = active ? labels.unfavorite : labels.favorite;
    };
    refreshFavorite();
    favorite.addEventListener('click', () => {
      if (PHOTO_FAVORITES.has(item.file)) PHOTO_FAVORITES.delete(item.file);
      else PHOTO_FAVORITES.add(item.file);
      writePhotoSet('orbit-phone-photo-favorites', PHOTO_FAVORITES);
      refreshFavorite();
      const tile = [...appPanel.querySelectorAll('.photo-tile')].find((candidate) => candidate.dataset.photoFile === item.file);
      if (tile) renderPhotoFavoriteBadge(tile, item);
    });
    deleteButton.addEventListener('click', () => {
      const backdrop = document.createElement('div');
      backdrop.className = 'photo-delete-backdrop';
      const dialog = document.createElement('div');
      dialog.className = 'photo-delete-dialog';
      dialog.setAttribute('role', 'alertdialog');
      dialog.setAttribute('aria-modal', 'true');
      const message = document.createElement('p');
      message.textContent = labels.confirmDelete;
      const buttons = document.createElement('div');
      buttons.className = 'photo-delete-dialog-buttons';
      const cancel = document.createElement('button');
      cancel.type = 'button';
      cancel.textContent = labels.cancel;
      const confirm = document.createElement('button');
      confirm.type = 'button';
      confirm.className = 'is-destructive';
      confirm.textContent = labels.delete;
      buttons.append(cancel, confirm);
      dialog.append(message, buttons);
      backdrop.append(dialog);
      viewer.append(backdrop);
      cancel.addEventListener('click', () => backdrop.remove());
      backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) backdrop.remove();
      });
      confirm.addEventListener('click', () => {
        PHOTO_DELETED.add(item.file);
        PHOTO_FAVORITES.delete(item.file);
        writePhotoSet('orbit-phone-photo-favorites', PHOTO_FAVORITES);
        PHOTO_LIBRARY = PHOTO_LIBRARY.filter((photo) => photo.file !== item.file);
        const libraryContainer = appPanel.querySelector('.photo-library')?.parentElement;
        dismissViewer();
        if (libraryContainer) {
          libraryContainer.querySelector('.photo-library')?.remove();
          renderPhotoLibrary(libraryContainer);
        }
      });
    });
    actionBar.append(favorite, deleteButton);
    viewer.append(actionBar);
  }
  appPanel.append(viewer);
  document.addEventListener('keydown', handleViewerKeydown);
}

function renderPhotoFavoriteBadge(tile, item) {
  tile.querySelector('.photo-favorite-badge')?.remove();
  if (!PHOTO_FAVORITES.has(item.file)) return;
  const badge = document.createElement('span');
  badge.className = 'photo-favorite-badge';
  badge.setAttribute('aria-label', 'Favorite');
  badge.textContent = '♥';
  tile.append(badge);
}

function renderPhotoLibrary(container) {
  const labels = PHOTO_COPY[currentLanguage] || PHOTO_COPY.en;
  const library = document.createElement('section');
  library.className = 'photo-library';
  const toolbar = document.createElement('div');
  toolbar.className = 'photo-library-toolbar';
  const heading = document.createElement('h2');
  heading.textContent = labels.library;
  const count = document.createElement('span');
  count.textContent = `${PHOTO_LIBRARY.length} ${labels.mediaCount}`;
  toolbar.append(heading, count);
  const chronology = document.createElement('p');
  chronology.className = 'photo-order-note';
  chronology.textContent = labels.oldestFirst;
  const grid = document.createElement('div');
  grid.className = 'photo-grid';
  const sorted = [...PHOTO_LIBRARY].sort((a, b) => a.sortKey.localeCompare(b.sortKey) || a.index - b.index);
  let group = '';
  sorted.forEach((item) => {
    const nextGroup = item.year ? String(item.year) : item.time ? '2026' : labels.unknown;
    if (nextGroup !== group) {
      group = nextGroup;
      const groupTitle = document.createElement('h3');
      groupTitle.className = 'photo-grid-heading';
      groupTitle.textContent = item.year ? String(item.year) : labels.unknown;
      grid.append(groupTitle);
    }
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = `photo-tile${item.type === 'video' ? ' video-tile' : ''}`;
    tile.dataset.photoFile = item.file;
    tile.setAttribute('aria-label', `${item.caption}, ${item.year ? String(item.year) : labels.unavailable}`);
    if (item.type === 'video') {
      const videoArt = document.createElement('span');
      videoArt.className = 'photo-video-art';
      videoArt.innerHTML = '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="#ffffff30"/><path d="m16 11 13 9-13 9z" fill="white"/></svg>';
      tile.append(videoArt);
      const videoLabel = document.createElement('span');
      videoLabel.className = 'photo-tile-video-label';
      videoLabel.textContent = labels.video;
      tile.append(videoLabel);
    } else {
      const image = document.createElement('img');
      image.src = photoAssetPath(item.file);
      image.alt = item.caption;
      image.loading = 'lazy';
      tile.append(image);
    }
    renderPhotoFavoriteBadge(tile, item);
    tile.addEventListener('click', () => openPhotoViewer(item));
    grid.append(tile);
  });
  library.append(toolbar, chronology, grid);
  container.append(library);
}

function renderIcon(app, dock = false) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'app-icon';
  button.dataset.app = app.type;
  const appName = copy().apps[app.type] || app.name;
  button.setAttribute('aria-label', `${appName}`);
  const glyph = document.createElement('span');
  glyph.className = 'app-glyph';
  glyph.style.background = app.color;
  if (app.type === 'clock') glyph.innerHTML = clockIconMarkup();
  else if (app.iconAsset) {
    const art = document.createElement('img');
    art.className = 'app-glyph-art';
    art.src = app.iconAsset;
    art.alt = '';
    glyph.append(art);
  } else if (ICON_ART[app.type]) glyph.innerHTML = ICON_ART[app.type];
  else glyph.textContent = app.icon;
  const label = document.createElement('span');
  label.className = 'app-label';
  label.textContent = appName;
  button.append(glyph, label);
  if (app.badge) {
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = app.badge;
    button.append(badge);
  }
  button.addEventListener('click', () => {
    if (app.type === 'camera') openCamera();
    else if (app.type === 'youtube') openApp('youtube');
    else if (app.type === 'instagram') openApp('instagram');
    else if (app.type === 'spotify') openApp('spotify');
    else if (app.type === 'naver') openApp('naver');
    else if (app.type === 'kakaotalk') openApp('kakaotalk');
    else if (APP_URLS[app.type]) {
      const externalApp = window.open(APP_URLS[app.type], '_blank');
      if (externalApp) externalApp.opener = null;
      else openApp(app.type);
    } else openApp(app.type);
  });
  if (dock) button.classList.add('dock-icon');
  return button;
}

function renderHome() {
  $('#appGrid').replaceChildren(...PHONE_CONFIG.apps.map((app) => renderIcon(app)));
  $('#dock').replaceChildren(...PHONE_CONFIG.dock.map((app) => renderIcon(app, true)));
  updateKakaoHomeBadge();
  $('#notificationIcon').innerHTML = ICON_ART.reminders;
  $('#notificationTitle').textContent = copy().reminder;
  $('#notificationMessage').textContent = copy().reminderBody;
  $('#notificationNow').textContent = copy().now;
  $('.weather-place').innerHTML = `${copy().location} <span>↗</span>`;
  $('#weatherTemperature').textContent = PHONE_CONFIG.temperature;
  $('#weatherSummary').textContent = copy().weatherSummary;
  $('#weatherRange').textContent = copy().weatherRange;
  const todayParts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const todayValues = Object.fromEntries(todayParts.map(({ type, value }) => [type, value]));
  const todayKey = `${todayValues.year}-${todayValues.month}-${todayValues.day}`;
  const todayEvents = calendarEvents().filter((event) => event.date === todayKey).slice(0, 2);
  $('#eventOne').textContent = todayEvents[0] ? localizedCalendarText(todayEvents[0], 'title') : copy().calendarNoEvents;
  $('#eventTwo').textContent = todayEvents[1] ? localizedCalendarText(todayEvents[1], 'title') : '';
  $('#allDayOne').textContent = todayEvents[0] ? copy().calendarCategories[todayEvents[0].type] : '';
  $('#allDayTwo').textContent = todayEvents[1] ? copy().calendarCategories[todayEvents[1].type] : '';
  $('#eventTwo').closest('.widget-event').hidden = !todayEvents[1];
  $('#searchLabel').textContent = copy().search;
}

function appendNaverApp(content) {
  const labels = appCopy('naver');
  const app = document.createElement('section');
  app.className = 'naver-app';
  const header = document.createElement('header');
  header.className = 'naver-topbar';
  const back = document.createElement('button'); back.type = 'button'; back.className = 'naver-back'; back.textContent = '‹'; back.setAttribute('aria-label', copy().close); back.addEventListener('click', closeApp);
  const brand = document.createElement('strong'); brand.className = 'naver-brand'; brand.innerHTML = '<span>N</span>NAVER';
  const headerActions = document.createElement('div'); headerActions.className = 'naver-header-actions';
  [['₩', labels.shopping], ['♙', labels.close], ['☰', labels.shortcuts]].forEach(([icon, label]) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'naver-header-icon'; button.textContent = icon; button.setAttribute('aria-label', label); headerActions.append(button);
  });
  header.append(back, brand, headerActions);
  const main = document.createElement('main'); main.className = 'naver-main';
  const search = document.createElement('label'); search.className = 'naver-search';
  const brandMark = document.createElement('span'); brandMark.className = 'naver-search-mark'; brandMark.textContent = 'N';
  const input = document.createElement('input'); input.type = 'search'; input.placeholder = labels.placeholder; input.setAttribute('aria-label', labels.search);
  const ai = document.createElement('button'); ai.type = 'button'; ai.className = 'naver-ai-button'; ai.textContent = 'AI'; ai.setAttribute('aria-label', labels.search);
  const lens = document.createElement('button'); lens.type = 'button'; lens.className = 'naver-lens-button'; lens.textContent = '◎'; lens.setAttribute('aria-label', labels.search);
  search.append(brandMark, input, ai, lens);
  const result = document.createElement('div'); result.className = 'naver-search-result'; result.hidden = true;
  const searchHistory = currentLanguage === 'ko'
    ? ['데이트하기 좋은 맛집 추천', '내일 날씨', '운동 팁', '성찬', '은석']
    : currentLanguage === 'zh-Hant'
      ? ['適合約會的推薦餐廳', '明天的天氣', '健身小技巧', '成燦', '恩奭']
      : ['recommended dining restaurants for dating', 'Tomorrow’s weather', 'gym tips', 'Sungchan', 'Eunseok'];
  const showSearchHistory = () => {
    if (input.value.trim()) return;
    result.replaceChildren();
    result.classList.add('is-history');
    const title = document.createElement('strong');
    title.className = 'naver-search-history-title';
    title.textContent = currentLanguage === 'ko' ? '최근 검색어' : currentLanguage === 'zh-Hant' ? '最近搜尋' : 'Recent searches';
    result.append(title);
    searchHistory.forEach((term) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'naver-search-history-item';
      item.innerHTML = '<span aria-hidden="true">◷</span>';
      const text = document.createElement('span');
      text.textContent = term;
      item.append(text);
      item.addEventListener('click', () => {
        input.value = term;
        input.dispatchEvent(new Event('input'));
        input.focus();
      });
      result.append(item);
    });
    result.hidden = false;
  };
  const tabs = document.createElement('nav'); tabs.className = 'naver-tabbar'; tabs.setAttribute('aria-label', 'NAVER');
  let activeTab = 'home';
  const tabRows = [['shopping', labels.shopping, '▦'], ['home', labels.home, '⌂'], ['content', labels.content, '▤'], ['clip', labels.clip, '▷']];
  const tabButtons = new Map();
  tabRows.forEach(([key, label, icon]) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = `naver-tab${key === activeTab ? ' is-active' : ''}`;
    button.innerHTML = `<span aria-hidden="true">${icon}</span><small>${label}</small>`;
    button.addEventListener('click', () => { activeTab = key; tabButtons.forEach((tab, id) => tab.classList.toggle('is-active', id === key)); renderContent(); });
    tabButtons.set(key, button); tabs.append(button);
  });
  const makeSectionTitle = (text, extra = '') => {
    const row = document.createElement('div'); row.className = 'naver-section-heading';
    const title = document.createElement('h2'); title.textContent = text; row.append(title);
    if (extra) { const more = document.createElement('span'); more.textContent = extra; row.append(more); }
    return row;
  };
  const createCard = (eyebrow, title, style = 0, summaryText = '') => {
    const card = document.createElement('article'); card.className = `naver-feed-card naver-feed-card-${style % 4}`;
    const art = document.createElement('div'); art.className = 'naver-feed-art';
    const artText = document.createElement('span'); artText.textContent = (currentLanguage === 'ko' ? ['오늘','라이프','트렌드','추천'] : currentLanguage === 'zh-Hant' ? ['今日','生活','趨勢','精選'] : ['TODAY','LIFE','TREND','PICK'])[style % 4]; art.append(artText);
    const copy = document.createElement('div'); copy.className = 'naver-feed-copy';
    const source = document.createElement('small'); source.textContent = eyebrow;
    const heading = document.createElement('strong'); heading.textContent = title;
    const summary = document.createElement('span'); summary.textContent = summaryText || (currentLanguage === 'ko' ? '관심 있는 새로운 소식을 확인해 보세요.' : currentLanguage === 'zh-Hant' ? '看看你感興趣的最新內容。' : 'Explore new stories picked for you.');
    copy.append(source, heading, summary); card.append(art, copy); return card;
  };
  const addCardPhoto = (card, src, alt) => {
    const art = card.querySelector('.naver-feed-art');
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    image.loading = 'lazy';
    art.replaceChildren(image);
  };
  const renderContent = () => {
    main.replaceChildren(); result.hidden = true;
    if (activeTab === 'home') {
      const widget = document.createElement('button'); widget.type = 'button'; widget.className = 'naver-weather-widget';
      widget.innerHTML = `<span class="naver-weather-icon">☀</span><span><strong>${currentLanguage === 'ko' ? '서울 18°' : currentLanguage === 'zh-Hant' ? '首爾 18°' : 'Seoul 18°'}</strong><small>${currentLanguage === 'ko' ? '맑고 쾌적해요' : currentLanguage === 'zh-Hant' ? '晴朗舒適' : 'Clear and comfortable'}</small></span><b>›</b>`;
      const feedTitle = makeSectionTitle(labels.headlines, '›');
      const feed = document.createElement('div'); feed.className = 'naver-feed-list';
      const headlines = currentLanguage === 'ko'
        ? [
          ['RIIZE, ‘RIIZE into INSOMNIA’ 릴리스 체험 이벤트 개최', '서울에서 10월 26일부터 29일까지 미니 라이브와 멤버 세션을 진행해요.'],
          ['은석·성찬 아티스트 세션, 10월 27일 진행', '성수 SPACE S50에서 BRIIZE 멤버십 회차로 열려요.'],
          ['쇼타로·앤톤 세션은 10월 28일', '원빈·소희 세션은 10월 29일에 진행돼요.'],
        ]
        : currentLanguage === 'zh-Hant'
          ? [
            ['RIIZE 宣布舉辦「RIIZE into INSOMNIA」發行體驗活動', '首爾活動將於 10 月 26 至 29 日舉行，包含迷你 Live 與成員場次。'],
            ['銀錫與成燦將於 10 月 27 日舉行藝人交流場次', '活動地點為聖水 SPACE S50，開放 BRIIZE 會員場次報名。'],
            ['將太郎與李燦榮場次定於 10 月 28 日', '元彬與炤熙的場次則安排於 10 月 29 日。'],
          ]
          : [
            ['RIIZE Announces “RIIZE into INSOMNIA” Release Experience', 'The Seoul event runs Oct 26–29, with a mini live and member sessions.'],
            ['Eunseok and Sungchan Artist Sessions Set for Oct 27', 'The BRIIZE membership sessions take place at SPACE S50 in Seongsu.'],
            ['Shotaro and Anton Sessions Announced for Oct 28', 'Wonbin and Sohee sessions follow on Oct 29.'],
          ];
      const newsPhotos = [
        'assets/photos/weverse_20261021164613_563878040.JPG',
        'assets/photos/weverse_20261021164617_3684770608.JPG',
        'assets/photos/weverse_20261021164636_3183304105.JPG',
      ];
      headlines.forEach(([title, summary], index) => {
        const card = createCard(index === 0 ? (currentLanguage === 'ko' ? '네이버 뉴스 · 오늘' : currentLanguage === 'zh-Hant' ? 'NAVER 新聞 · 今日' : 'NAVER NEWS · TODAY') : (currentLanguage === 'ko' ? '네이버 홈피드' : currentLanguage === 'zh-Hant' ? 'NAVER 首頁動態' : 'NAVER HOME FEED'), title, index, summary);
        addCardPhoto(card, newsPhotos[index], `${currentLanguage === 'ko' ? 'RIIZE 관련 사진' : currentLanguage === 'zh-Hant' ? 'RIIZE 相關照片' : 'RIIZE news photo'} ${index + 1}`);
        feed.append(card);
      });
      const trendTitle = makeSectionTitle(labels.trending);
      const trends = document.createElement('div'); trends.className = 'naver-trending-list';
      ['RIIZE', currentLanguage === 'ko' ? '서울 날씨' : currentLanguage === 'zh-Hant' ? '首爾天氣' : 'Seoul weather', 'K-pop', currentLanguage === 'ko' ? '오늘' : currentLanguage === 'zh-Hant' ? '今天' : 'Today'].forEach((term, index) => {
        const row = document.createElement('button'); row.type = 'button'; row.className = 'naver-trend';
        const number = document.createElement('b'); number.textContent = String(index + 1);
        const word = document.createElement('span'); word.textContent = term;
        row.append(number, word); row.addEventListener('click', () => { input.value = term; input.dispatchEvent(new Event('input')); input.focus(); }); trends.append(row);
      });
      main.append(widget, feedTitle, feed, trendTitle, trends);
    } else if (activeTab === 'shopping') {
      const title = makeSectionTitle(labels.shopping, '›'); main.append(title);
      const chips = document.createElement('div'); chips.className = 'naver-shopping-chips';
      (currentLanguage === 'ko' ? ['전체','패션','뷰티','리빙'] : currentLanguage === 'zh-Hant' ? ['全部','時尚','美妝','居家'] : ['All','Fashion','Beauty','Living']).forEach((label) => { const chip = document.createElement('button'); chip.type = 'button'; chip.textContent = label; chips.append(chip); });
      const products = document.createElement('div'); products.className = 'naver-product-grid';
      const productsData = currentLanguage === 'ko'
        ? [
          ['보테가 베네타', '인트레치아토 백', '미니 안디아모 · 위빙 레더', 'assets/photos/naver-bottega-v2.png'],
          ['운동 보충제', '프로틴 파우더', '초콜릿 웨이 · 운동 후 회복', 'assets/photos/naver-protein.webp'],
          ['adidas × MUSINSA', '은석 캠페인', 'RIIZE 은석 · 무신사 에디션', 'assets/photos/naver-adidas-eunseok.jpg'],
          ['유이크 스킨케어', 'UIQ × RIIZE', '마이크로바이옴 스킨케어', 'assets/photos/naver-uiq.png'],
        ]
        : currentLanguage === 'zh-Hant'
          ? [
            ['BOTTEGA VENETA', '編織皮革手袋', 'Mini Andiamo · 經典編織皮革', 'assets/photos/naver-bottega-v2.png'],
            ['健身補給', '蛋白粉', '朱古力乳清 · 運動後補充', 'assets/photos/naver-protein.webp'],
            ['adidas × MUSINSA', '恩奭形象企劃', 'RIIZE 恩奭 · MUSINSA Edition', 'assets/photos/naver-adidas-eunseok.jpg'],
            ['UIQ 護膚', 'UIQ × RIIZE', '微生物群護膚系列', 'assets/photos/naver-uiq.png'],
          ]
          : [
            ['BOTTEGA VENETA', 'Intrecciato bag', 'Mini Andiamo · Woven leather', 'assets/photos/naver-bottega-v2.png'],
            ['GYM ESSENTIALS', 'Protein powder', 'Chocolate whey · Post-workout fuel', 'assets/photos/naver-protein.webp'],
            ['adidas × MUSINSA', 'Eunseok campaign', 'RIIZE Eunseok · Musinsa Edition', 'assets/photos/naver-adidas-eunseok.jpg'],
            ['UIQ SKINCARE', 'UIQ × RIIZE', 'Barrier care · RIIZE skincare partner', 'assets/photos/naver-uiq.png'],
          ];
      productsData.forEach(([brandName, productName, description, imageUrl], index) => {
        const card = createCard(brandName, productName, index + 1, description);
        card.classList.add('naver-product-card');
        const art = card.querySelector('.naver-feed-art');
        const image = document.createElement('img'); image.src = imageUrl; image.alt = `${brandName} ${productName}`; image.loading = 'lazy';
        art.replaceChildren(image);
        products.append(card);
      });
      main.append(chips, products);
    } else if (activeTab === 'content') {
      main.append(makeSectionTitle(labels.content, '›'));
      const contentItems = currentLanguage === 'ko'
        ? [
          ['RIIZE 무대 모먼트', '팬들이 다시 찾는 라이브 무대와 퍼포먼스.', 'assets/photos/weverse_20261021164613_563878040.JPG'],
          ['성찬과 은석의 커버곡', 'RIIZE 멤버들의 보컬 커버를 모아 봐요.', 'assets/photos/weverse_20261021164617_3684770608.JPG'],
          ['은석 × adidas MUSINSA 에디션', '은석이 함께한 무신사 에디션 화보.', 'assets/photos/naver-adidas-eunseok.jpg'],
        ]
        : currentLanguage === 'zh-Hant'
          ? [
            ['RIIZE 舞台時刻', '重溫粉絲喜愛的現場舞台與表演。', 'assets/photos/weverse_20261021164613_563878040.JPG'],
            ['成燦與恩奭的翻唱歌曲', '一起回顧 RIIZE 成員的翻唱作品。', 'assets/photos/weverse_20261021164617_3684770608.JPG'],
            ['恩奭 × adidas MUSINSA Edition', '恩奭參與拍攝的 MUSINSA Edition 形象照。', 'assets/photos/naver-adidas-eunseok.jpg'],
          ]
          : [
            ['RIIZE stage moments', 'Live stages and performances fans come back to.', 'assets/photos/weverse_20261021164613_563878040.JPG'],
            ['Sungchan and Eunseok cover songs', 'A short guide to RIIZE members’ vocal covers.', 'assets/photos/weverse_20261021164617_3684770608.JPG'],
            ['Eunseok × adidas MUSINSA Edition', 'A look at Eunseok’s MUSINSA Edition campaign.', 'assets/photos/naver-adidas-eunseok.jpg'],
          ];
      contentItems.forEach(([title, summary, photo], index) => {
        const card = createCard(currentLanguage === 'ko' ? 'RIIZE 콘텐츠' : currentLanguage === 'zh-Hant' ? 'RIIZE 內容' : 'RIIZE CONTENT', title, index, summary);
        addCardPhoto(card, photo, title);
        main.append(card);
      });
    } else {
      main.append(makeSectionTitle(labels.clip, '⌕'));
      const clipGrid = document.createElement('div'); clipGrid.className = 'naver-clip-grid';
      const clips = currentLanguage === 'ko'
        ? [
          ['RIIZE 무대의 한 장면', '공연 준비 중인 성찬', 'assets/photos/weverse_20261021164613_563878040.JPG'],
          ['성찬의 무대 셀카', 'RIIZE 무대 비하인드', 'assets/photos/weverse_20261021164636_3183304105.JPG'],
          ['안경 쓴 성찬', '오늘의 RIIZE 포토 클립', 'assets/photos/weverse_20261021164429_3436659414.JPG'],
          ['편안한 하루의 성찬', '팬들을 위한 포토 모먼트', 'assets/photos/weverse_20261021164541_2697698120.JPG'],
        ]
        : currentLanguage === 'zh-Hant'
          ? [
            ['RIIZE 舞台一刻', '演出準備中的成燦', 'assets/photos/weverse_20261021164613_563878040.JPG'],
            ['成燦的舞台自拍', 'RIIZE 舞台幕後', 'assets/photos/weverse_20261021164636_3183304105.JPG'],
            ['戴眼鏡的成燦', '今日 RIIZE 相片短片', 'assets/photos/weverse_20261021164429_3436659414.JPG'],
            ['休閒時光的成燦', '送給粉絲的相片時刻', 'assets/photos/weverse_20261021164541_2697698120.JPG'],
          ]
          : [
            ['A RIIZE stage moment', 'Sungchan at the venue', 'assets/photos/weverse_20261021164613_563878040.JPG'],
            ['Sungchan’s stage selfie', 'A RIIZE backstage moment', 'assets/photos/weverse_20261021164636_3183304105.JPG'],
            ['Sungchan in glasses', 'Today’s RIIZE photo clip', 'assets/photos/weverse_20261021164429_3436659414.JPG'],
            ['A relaxed moment with Sungchan', 'A photo moment for fans', 'assets/photos/weverse_20261021164541_2697698120.JPG'],
          ];
      clips.forEach(([title, summary, photo], index) => {
        const card = createCard(currentLanguage === 'ko' ? '네이버 클립' : currentLanguage === 'zh-Hant' ? 'NAVER 短片' : 'NAVER CLIP', title, index, summary);
        card.classList.add('naver-clip-card');
        addCardPhoto(card, photo, title);
        clipGrid.append(card);
      });
      main.append(clipGrid);
    }
    main.prepend(search, result);
  };
  input.addEventListener('input', () => {
    const term = input.value.trim();
    result.hidden = !term;
    result.replaceChildren();
    result.classList.remove('is-history');
    if (term) {
      const line = document.createElement('strong'); line.textContent = `${labels.webSearch} ${term}`;
      const hint = document.createElement('small'); hint.textContent = labels.search;
      result.append(line, hint);
    } else if (document.activeElement === input) {
      showSearchHistory();
    }
  });
  input.addEventListener('focus', showSearchHistory);
  renderContent();
  app.append(header, main, tabs); content.append(app);
}

const RIIZE_MOCK_REPLIES = {
  shotaro: {
    food: [
      { en: 'Have you eaten? Let’s go together after practice. I’ll help you pick 😄', 'zh-Hant': '吃飯了嗎？練習後一起去吧，我幫你選 😄', ko: '밥 먹었어? 연습 끝나고 같이 가자. 내가 골라줄게 😄' },
      { en: 'Something warm sounds good. Are you in the mood for noodles?', 'zh-Hant': '吃點熱的好像不錯。想吃麵嗎？', ko: '따뜻한 거 먹으면 좋겠다. 면 먹고 싶어?' },
    ],
    dance: [{ en: 'Let’s run it once together. I’ll show you the part that felt tricky.', 'zh-Hant': '一起再練一次吧，我示範你覺得難的部分。', ko: '같이 한 번 더 맞춰 보자. 헷갈린 부분은 내가 보여줄게.' }],
    music: [{ en: 'Send it over! I’ll listen on the way back 😊', 'zh-Hant': '傳給我吧！我回去路上聽 😊', ko: '보내 줘! 돌아가는 길에 들어볼게 😊' }],
    other: [
      { en: 'Oh, what happened? Tell me. I’m listening 😄', 'zh-Hant': '怎麼了？跟我說吧，我在聽 😄', ko: '무슨 일이야? 말해 봐. 듣고 있어 😄' },
      { en: 'You’ve been working hard. Take a little break with me, okay?', 'zh-Hant': '你最近很努力，跟我休息一下吧，好嗎？', ko: '요즘 열심히 했잖아. 나랑 잠깐 쉬자, 알겠지?' },
    ],
  },
  eunseok: {
    food: [
      { en: 'You choose. Just don’t spend half an hour deciding.', 'zh-Hant': '你選吧，別花半小時才決定就好。', ko: '네가 골라. 메뉴 정하는 데 30분 쓰진 말고.' },
      { en: 'I can cook something. Tell me what you actually want to eat.', 'zh-Hant': '我可以煮點東西。先說你到底想吃什麼。', ko: '내가 뭐 해줄게. 진짜 먹고 싶은 게 뭔지 말해.' },
    ],
    game: [{ en: 'One round? Fine. But don’t blame lag when you lose 😏', 'zh-Hant': '打一場？好啊，輸了可別怪延遲 😏', ko: '한 판? 좋아. 져도 렉 탓은 하지 마 😏' }],
    other: [
      { en: 'ㅋㅋ What did you do this time?', 'zh-Hant': 'ㅋㅋ 你這次又做了什麼？', ko: 'ㅋㅋ 이번엔 또 뭐 했는데?' },
      { en: 'I’m listening. Give me the short version first.', 'zh-Hant': '我在聽。先簡短說一下。', ko: '듣고 있어. 일단 짧게 말해 봐.' },
    ],
  },
  sungchan: {
    food: [
      { en: 'Let’s get something good after practice! I’m already starving 😂', 'zh-Hant': '練習後去吃好吃的吧！我已經餓了 😂', ko: '연습 끝나고 맛있는 거 먹자! 나 벌써 배고파 😂' },
      { en: 'I’m in. Wait, are we choosing now? I might need a snack first lol', 'zh-Hant': '好啊。等等，現在要選嗎？我可能要先吃點東西 lol', ko: '좋아. 잠깐, 지금 고르는 거야? 나 간식부터 먹어야 할지도 ㅋㅋ' },
    ],
    sport: [{ en: 'Let’s go! I’ll bring my stuff. …I think I know where I left it 😂', 'zh-Hant': '走吧！我帶裝備。…我想我知道放在哪了 😂', ko: '가자! 장비 챙길게. …어디 뒀는지 알 것 같아 😂' }],
    animal: [{ en: 'Send me the video right now. Cute animals fix everything 🐶', 'zh-Hant': '現在就傳影片給我。可愛動物能治癒一切 🐶', ko: '영상 지금 보내 줘. 귀여운 동물 보면 다 괜찮아져 🐶' }],
    game: [{ en: 'I’m ready. One more round—this time I’m actually winning 🎮', 'zh-Hant': '我準備好了。再一場，這次我真的會贏 🎮', ko: '준비됐어. 한 판 더 하자. 이번엔 진짜 이길 거야 🎮' }],
    other: [
      { en: 'Wait, really? Tell me everything 😂', 'zh-Hant': '等等，真的嗎？全部跟我說 😂', ko: '잠깐, 진짜? 다 말해 줘 😂' },
      { en: 'I’m listening! Hold on, where did I put my phone…', 'zh-Hant': '我在聽！等等，我手機放哪了……', ko: '듣고 있어! 잠깐, 내 폰 어디 뒀지…' },
    ],
  },
  wonbin: {
    food: [{ en: 'I’m good with anything. Somewhere quiet with good music would be nice.', 'zh-Hant': '吃什麼都可以。找間安靜、音樂好聽的店就好。', ko: '난 다 괜찮아. 조용하고 음악 좋은 곳이면 좋겠다.' }],
    music: [
      { en: 'I’ve been practicing that part on guitar. I’ll play it for you later.', 'zh-Hant': '我最近在練那段吉他，晚點彈給你聽。', ko: '그 부분 기타로 연습하고 있어. 나중에 들려줄게.' },
      { en: 'I’ll listen carefully. Send me the track when you can.', 'zh-Hant': '我會仔細聽，有空傳那首歌給我。', ko: '잘 들어볼게. 시간 되면 곡 보내 줘.' },
    ],
    dance: [{ en: 'Let’s go over it slowly once more. That usually helps me.', 'zh-Hant': '慢慢再對一次吧，這樣對我比較有用。', ko: '천천히 한 번 더 맞춰 보자. 난 그게 도움이 되더라.' }],
    other: [
      { en: 'I saw your message. You did better than you think.', 'zh-Hant': '我看到你的訊息了。你比自己想的更好。', ko: '메시지 봤어. 네가 생각하는 것보다 잘했어.' },
      { en: 'Really? Tell me more when you feel like it.', 'zh-Hant': '真的嗎？你想說的時候再多跟我說一點。', ko: '그래? 괜찮으면 더 얘기해 줘.' },
    ],
  },
  sohee: {
    food: [
      { en: 'Let’s eat something good! Sungchan hyung gets to choose today 😆', 'zh-Hant': '去吃好吃的吧！今天讓成燦哥選 😆', ko: '맛있는 거 먹자! 오늘은 성찬 형이 골라요 😆' },
      { en: 'Chicken? I’m saying yes before you even answer 😂', 'zh-Hant': '炸雞？你還沒回答我就先說好 😂', ko: '치킨? 형 대답하기도 전에 난 좋아요 😂' },
    ],
    music: [{ en: 'Want to sing it together? I’ll start, you come in on the chorus 🎤', 'zh-Hant': '要不要一起唱？我先開始，你在副歌進來 🎤', ko: '같이 불러 볼래요? 제가 먼저 할게요. 형은 후렴에서 들어와요 🎤' }],
    dance: [{ en: 'ㅋㅋ I’ll show you the right direction this time. No promises I won’t laugh.', 'zh-Hant': 'ㅋㅋ 這次我會示範正確方向，不過不保證不笑。', ko: 'ㅋㅋ 이번엔 방향 제대로 알려줄게요. 웃지 않는다는 보장은 없어요.' }],
    other: [
      { en: 'ㅋㅋ No way. What happened next?', 'zh-Hant': 'ㅋㅋ 不會吧，後來怎麼了？', ko: 'ㅋㅋ 말도 안 돼. 그다음엔 어떻게 됐어요?' },
      { en: 'I’m listening, hyung. This sounds interesting 😆', 'zh-Hant': '我在聽，哥。聽起來很有趣 😆', ko: '듣고 있어요, 형. 재밌을 것 같은데요 😆' },
    ],
  },
  anton: {
    food: [{ en: 'Anything is fine with me, hyung. Maybe something warm after practice?', 'zh-Hant': '我吃什麼都可以，哥。練習後吃點熱的如何？', ko: '저는 다 괜찮아요, 형. 연습 끝나고 따뜻한 거 먹을까요?' }],
    music: [
      { en: 'I’ve been thinking about that melody too. Want to try writing something together?', 'zh-Hant': '我也一直在想那段旋律。要不要一起試著寫點東西？', ko: '저도 그 멜로디 생각하고 있었어요. 같이 써 볼까요?' },
      { en: 'Send me what you have so far. I’ll listen and think about it.', 'zh-Hant': '把目前的版本傳給我吧。我會聽聽看再想想。', ko: '지금까지 만든 거 보내 주세요. 들어보고 생각해 볼게요.' },
    ],
    sport: [{ en: 'A little tired, but I’m okay. Let’s take it at a comfortable pace.', 'zh-Hant': '有一點累，不過沒事。我們照舒服的步調來吧。', ko: '조금 피곤하지만 괜찮아요. 무리하지 말고 편하게 해요.' }],
    other: [
      { en: 'Oh, I see. Thanks for telling me. I’m here if you want to talk more 🙂', 'zh-Hant': '嗯，我知道了。謝謝你跟我說。如果還想聊，我會在 🙂', ko: '그렇구나. 말해 줘서 고마워요. 더 얘기하고 싶으면 들어줄게요 🙂' },
      { en: 'I’ll think about that. You don’t have to rush to figure it out.', 'zh-Hant': '我會想想看。你不用急著把事情想清楚。', ko: '저도 생각해 볼게요. 너무 서둘러 답을 정하지 않아도 돼요.' },
    ],
  },
};

function makeRiizeMockReply(person, userText) {
  const key = (person?.name || person?.id || '').toLowerCase();
  const member = key.includes('shotaro') || key.includes('shortaro') || key.includes('쇼타로') ? 'shotaro'
    : key.includes('eunseok') || key.includes('은석') ? 'eunseok'
      : key.includes('sungchan') || key.includes('성찬') || key.includes('jung') ? 'sungchan'
        : key.includes('wonbin') || key.includes('원빈') ? 'wonbin'
          : key.includes('sohee') || key.includes('소희') ? 'sohee'
            : key.includes('anton') || key.includes('앤톤') ? 'anton' : null;
  const topic = /eat|food|dinner|lunch|breakfast|hungry|menu|먹|밥|저녁|점심|아침|배고|식사|晚餐|午餐|早餐|吃|餓|餐|菜單/i.test(userText) ? 'food'
    : /gym|workout|exercise|sports|baseball|축구|운동|헬스|야구|농구|健身|運動|棒球/i.test(userText) ? 'sport'
      : /game|gaming|게임|겜|遊戲|電玩/i.test(userText) ? 'game'
        : /animal|dog|cat|puppy|강아지|고양이|동물|狗|貓|動物/i.test(userText) ? 'animal'
          : /guitar|music|song|sing|lyrics|노래|음악|기타|가사|唱歌|音樂|吉他/i.test(userText) ? 'music'
            : /dance|choreo|practice|stage|안무|춤|연습|무대|舞蹈|編舞|練習|舞台/i.test(userText) ? 'dance' : 'other';
  if (member) {
    const replies = RIIZE_MOCK_REPLIES[member];
    const options = replies[topic] || replies.other;
    return options[Math.floor(Math.random() * options.length)];
  }
  const fallback = {
    en: 'Got your message! I’ll check and get back to you soon.',
    'zh-Hant': '收到你的訊息了！我確認一下，很快回覆你。',
    ko: '메시지 확인했어! 보고 곧 답장할게.',
  };
  return fallback;
}

function localizedChatText(value) {
  return value && typeof value === 'object' ? (value[currentLanguage] || value.en || '') : String(value || '');
}

const KAKAO_MESSAGES = Object.assign(Object.create(null), window.KAKAO_CHAT_SEED || {});
const KAKAO_UNREAD_COUNTS = Object.create(null);
const EUNSEOK_DINNER_CONTACT = '+82 20010319';
const EUNSEOK_DINNER_SCRIPT = [
  { date: '2026-10-22', time: '14:19', from: 'me', text: { en: 'You can pick.', 'zh-Hant': '你選就好', ko: '네가 고르면 됨' } },
  { date: '2026-10-22', time: '14:20', from: 'contact', text: { en: 'Dumplings, then?', 'zh-Hant': '那餃子？', ko: '그럼 교자?' } },
  { date: '2026-10-22', time: '14:21', from: 'me', text: { en: 'Okay.', 'zh-Hant': '好', ko: 'ㅇㅋ' } },
  { date: '2026-10-22', time: '14:22', from: 'me', text: { en: 'So it’ll just be the two of us tomorrow, right?', 'zh-Hant': '明天是只有我們兩個吃吧？', ko: '내일은 둘만 먹는 거지?' } },
  { date: '2026-10-22', time: '14:23', from: 'contact', text: { en: 'Of course.', 'zh-Hant': '當然', ko: '당연하지' } },
  { date: '2026-10-22', time: '14:24', from: 'me', text: { en: 'Don’t invite anyone else.', 'zh-Hant': '不能叫其他人', ko: '다른 사람 부르면 안 돼' } },
  { date: '2026-10-22', time: '14:25', from: 'contact', text: { en: 'Why?', 'zh-Hant': '為什麼', ko: '왜' } },
  { date: '2026-10-22', time: '14:26', from: 'me', text: { en: 'Just because.', 'zh-Hant': '就只是', ko: '그냥' } },
  { date: '2026-10-22', time: '14:27', from: 'contact', text: { en: 'There you go with “just because” again.', 'zh-Hant': '又是「就只是」', ko: '또 그냥이네' } },
  { date: '2026-10-22', time: '14:28', from: 'me', text: { en: 'Eunseok.', 'zh-Hant': '恩奭啊', ko: '은석아' } },
  { date: '2026-10-22', time: '14:29', from: 'contact', text: { en: 'What?', 'zh-Hant': '幹嘛', ko: '왜' } },
  { date: '2026-10-22', time: '14:30', from: 'me', text: { en: 'I want to see you tomorrow.', 'zh-Hant': '明天想見你', ko: '내일 보고 싶다' } },
  { date: '2026-10-22', time: '14:31', from: 'contact', text: { en: '…I’m already looking at you.', 'zh-Hant': '……已經在看了', ko: '…이미 보는데' } },
  { date: '2026-10-22', time: '14:32', from: 'me', text: { en: 'That’s not what I mean.', 'zh-Hant': '不是那個意思', ko: '그게 아니라' } },
  { date: '2026-10-22', time: '14:33', from: 'contact', text: { en: 'I know.', 'zh-Hant': '知道', ko: '알아' } },
];
let eunseokDinnerScriptStarted = false;
let eunseokDinnerScriptDone = false;
let eunseokDinnerDraft = '';
let eunseokContactTyping = false;
let pendingKakaoContactNumber = null;
function saveKakaoMessages() { /* User and bot messages intentionally stay in memory and clear on refresh. */ }

function localizedKakaoSpeaker(speaker) {
  const names = {
    '쇼타로': { en: 'Shotaro', 'zh-Hant': '將太郎', ko: '쇼타로' },
    '은석': { en: 'Eunseok', 'zh-Hant': '恩奭', ko: '은석' },
    '성찬': { en: 'Sungchan', 'zh-Hant': '成燦', ko: '성찬' },
    '원빈': { en: 'Wonbin', 'zh-Hant': '元彬', ko: '원빈' },
    '소희': { en: 'Sohee', 'zh-Hant': '炤熙', ko: '소희' },
    '앤톤': { en: 'Anton', 'zh-Hant': '李燦榮', ko: '앤톤' },
    '매니저': { en: 'Manager', 'zh-Hant': '經紀人', ko: '매니저' },
    '아빠': { en: 'Dad', 'zh-Hant': '爸爸', ko: '아빠' },
    '엄마': { en: 'Mom', 'zh-Hant': '媽媽', ko: '엄마' },
    '형': { en: 'Brother', 'zh-Hant': '哥哥', ko: '형' },
  };
  return names[speaker]?.[currentLanguage] || speaker || '';
}

function formatKakaoDay(date) {
  if (!date) return '';
  const dateValue = new Date(`${date}T12:00:00+09:00`);
  const locale = currentLanguage === 'ko' ? 'ko-KR' : currentLanguage === 'zh-Hant' ? 'zh-Hant' : 'en-US';
  return new Intl.DateTimeFormat(locale, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'Asia/Seoul' }).format(dateValue);
}

function formatKakaoTime(date, time) {
  if (!date || !/^\d{2}:\d{2}$/.test(time || '')) return time || '';
  const locale = currentLanguage === 'ko' ? 'ko-KR' : currentLanguage === 'zh-Hant' ? 'zh-Hant' : 'en-US';
  return new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Seoul' }).format(new Date(`${date}T${time}:00+09:00`));
}

const MEMBER_AVATAR_PATHS = {
  shortaro: 'assets/avatars/shotaro.jpg',
  eunseok: 'assets/avatars/eunseok.jpg',
  jung: 'assets/avatars/sungchan.jpg',
  wonbin: 'assets/avatars/wonbin.jpg',
  sohee: 'assets/avatars/sohee.jpg',
  anton: 'assets/avatars/anton.jpg',
};
const MEMBER_AVATAR_BY_PHONE = {
  '+82 20001125': MEMBER_AVATAR_PATHS.shortaro,
  '+82 20010319': MEMBER_AVATAR_PATHS.eunseok,
  '+82 20020302': MEMBER_AVATAR_PATHS.wonbin,
  '+82 20031121': MEMBER_AVATAR_PATHS.sohee,
  '+82 20040321': MEMBER_AVATAR_PATHS.anton,
  'kakao-self': MEMBER_AVATAR_PATHS.jung,
  'riize-group': 'assets/avatars/riize-group.jpg',
};

function appendKakaoTalkApp(content) {
  const labels = appCopy('kakaotalk');
  const contacts = PHONE_CONTACT_DATA;
  const groupContact = { name: 'RIIZE', number: 'riize-group' };
  const groupSpeakerContacts = {
    '쇼타로': contacts.find((person) => person.number === '+82 20001125'),
    '은석': contacts.find((person) => person.number === '+82 20010319'),
    '성찬': { name: 'Jung Sungchan', number: 'kakao-self' },
    '원빈': contacts.find((person) => person.number === '+82 20020302'),
    '소희': contacts.find((person) => person.number === '+82 20031121'),
    '앤톤': contacts.find((person) => person.number === '+82 20040321'),
  };
  const displayName = (person) => person.number === 'riize-group' ? 'RIIZE' : phoneContactName(person);
  const contactIndex = (person) => Math.max(0, contacts.indexOf(person));
  const app = document.createElement('section'); app.className = 'kakao-app';
  let activeTab = 'chats'; let activeContact = pendingKakaoContactNumber ? contacts.find((person) => person.number === pendingKakaoContactNumber) || null : null; let searchTerm = '';
  pendingKakaoContactNumber = null;
  if (activeContact?.number === EUNSEOK_DINNER_CONTACT) { KAKAO_UNREAD_COUNTS[EUNSEOK_DINNER_CONTACT] = 0; updateKakaoHomeBadge(); }
  const header = document.createElement('header'); header.className = 'kakao-topbar';
  const main = document.createElement('main'); main.className = 'kakao-main';
  const nav = document.createElement('nav'); nav.className = 'kakao-tabbar'; nav.setAttribute('aria-label', labels.navigation);
  const tabRows = [['friends',labels.friends,'♙'],['chats',labels.chats,'▢']];
  const initialsFor = (person) => displayName(person).split(/\s+/).map((part) => part[0]).join('').slice(0,2).toUpperCase();
  const avatarFor = (person, index, className = '') => {
    const avatar = document.createElement('span'); avatar.className = `kakao-avatar ${className}`.trim();
    avatar.style.setProperty('--kakao-avatar', ['#a8bbd2','#d3a78c','#8fb8a0','#aaa1cb','#d295ae','#8fb3c0','#d0a36f','#9caca1','#b98e89'][index % 9]);
    const imagePath = MEMBER_AVATAR_BY_PHONE[person.number];
    if (imagePath) { const image = document.createElement('img'); image.src = imagePath; image.alt = ''; avatar.append(image); }
    else avatar.textContent = initialsFor(person);
    return avatar;
  };
  const makeButton = (text, label, className) => { const button = document.createElement('button'); button.type = 'button'; button.className = className; button.textContent = text; button.setAttribute('aria-label', label); return button; };
  const render = () => {
    if (activeContact?.number === EUNSEOK_DINNER_CONTACT) { KAKAO_UNREAD_COUNTS[EUNSEOK_DINNER_CONTACT] = 0; updateKakaoHomeBadge(); }
    app.classList.toggle('kakao-room-open', Boolean(activeContact));
    header.replaceChildren(); main.replaceChildren();
    if (activeContact) {
      const back = makeButton('‹', labels.back, 'kakao-back'); back.addEventListener('click', () => { activeContact = null; render(); });
      const titleBlock = document.createElement('button'); titleBlock.type = 'button'; titleBlock.className = 'kakao-room-title-block';
      const roomName = document.createElement('strong'); roomName.textContent = displayName(activeContact);
      const roomStatus = document.createElement('small'); roomStatus.textContent = activeContact.number === 'riize-group' ? (currentLanguage === 'ko' ? '멤버 6명' : currentLanguage === 'zh-Hant' ? '6 位成員' : '6 members') : (currentLanguage === 'ko' ? '1:1 채팅' : currentLanguage === 'zh-Hant' ? '一對一聊天' : '1:1 chat');
      titleBlock.append(roomName, roomStatus);
      const roomActions = document.createElement('div'); roomActions.className = 'kakao-room-actions';
      roomActions.append(makeButton('⌕', labels.search, 'kakao-icon-button'), makeButton('☰', labels.roomInfo, 'kakao-icon-button'));
      header.append(back, titleBlock, roomActions);
      const messages = document.createElement('div'); messages.className = 'kakao-messages';
      const intro = document.createElement('div'); intro.className = 'kakao-room-intro';
      intro.append(avatarFor(activeContact, contactIndex(activeContact), 'kakao-room-avatar'));
      const introName = document.createElement('strong'); introName.textContent = displayName(activeContact);
      const introCopy = document.createElement('small'); introCopy.textContent = currentLanguage === 'ko' ? '카카오톡 데모 채팅방' : currentLanguage === 'zh-Hant' ? 'KakaoTalk 示範聊天室' : 'KakaoTalk demo chat';
      intro.append(introName, introCopy); messages.append(intro);
      const entries = KAKAO_MESSAGES[activeContact.number] || [];
      if (!entries.length) { const empty = document.createElement('p'); empty.className = 'kakao-empty-chat'; empty.textContent = labels.noMessages; messages.append(empty); }
      let previousDate = '';
      entries.forEach((message) => {
        if (message.date && message.date !== previousDate) {
          const day = document.createElement('span'); day.className = 'kakao-day-label'; day.textContent = formatKakaoDay(message.date); messages.append(day);
          previousDate = message.date;
        }
        const line = document.createElement('div'); line.className = `kakao-message-line ${message.from === 'me' ? 'from-me' : 'from-contact'}`;
        const groupSpeaker = activeContact.number === 'riize-group' && message.speaker
          ? groupSpeakerContacts[message.speaker] || { name: localizedKakaoSpeaker(message.speaker) || 'Member', number: `group-speaker-${message.speaker}` }
          : activeContact;
        if (message.from !== 'me' || activeContact.number === 'riize-group') {
          if (message.from !== 'me') line.append(avatarFor(groupSpeaker, contactIndex(groupSpeaker), 'kakao-message-avatar'));
        }
        const messageContent = document.createElement('span'); messageContent.className = 'kakao-message-content';
        if (activeContact.number === 'riize-group' && message.speaker) {
          const speaker = document.createElement('small'); speaker.className = 'kakao-message-speaker'; speaker.textContent = localizedKakaoSpeaker(message.speaker); messageContent.append(speaker);
        }
        const bubble = document.createElement('p'); bubble.className = `kakao-bubble ${message.from === 'me' ? 'from-me' : 'from-contact'}`; bubble.textContent = localizedChatText(message.text);
        messageContent.append(bubble); line.append(messageContent); const time = document.createElement('small'); time.className = 'kakao-bubble-time'; time.textContent = formatKakaoTime(message.date, message.time) || message.time || ''; line.append(time);
        if (message.from === 'me' && activeContact.number === 'riize-group') line.append(avatarFor(groupSpeaker, contactIndex(groupSpeaker), 'kakao-message-avatar'));
        messages.append(line);
      });
      if (activeContact.number === EUNSEOK_DINNER_CONTACT && eunseokContactTyping) {
        const line = document.createElement('div'); line.className = 'kakao-message-line from-contact kakao-contact-typing';
        line.append(avatarFor(activeContact, contactIndex(activeContact), 'kakao-message-avatar'));
        const bubble = document.createElement('p'); bubble.className = 'kakao-bubble from-contact'; bubble.textContent = '•••';
        line.append(bubble); messages.append(line);
      }
      const form = document.createElement('div'); form.className = `kakao-compose${activeContact.number === EUNSEOK_DINNER_CONTACT && eunseokDinnerScriptStarted ? ' kakao-compose-simulated' : ''}`;
      if (activeContact.number === EUNSEOK_DINNER_CONTACT) {
        const add = makeButton('+', currentLanguage === 'ko' ? '첨부' : currentLanguage === 'zh-Hant' ? '新增附件' : 'Add attachment', 'kakao-attach-button');
        const input = document.createElement('input'); input.className = 'kakao-script-input'; input.type = 'text'; input.readOnly = true;
        input.placeholder = labels.messagePlaceholder; input.setAttribute('aria-label', labels.messagePlaceholder); input.autocomplete = 'off';
        const startScript = () => {
          if (eunseokDinnerScriptStarted || eunseokDinnerScriptDone) return;
          eunseokDinnerScriptStarted = true;
          render();
          const sendNextMessage = (index) => {
            if (index >= EUNSEOK_DINNER_SCRIPT.length) {
              eunseokDinnerScriptDone = true; eunseokDinnerDraft = ''; eunseokContactTyping = false;
              if (activeContact?.number === EUNSEOK_DINNER_CONTACT) render();
              return;
            }
            const message = EUNSEOK_DINNER_SCRIPT[index];
            if (message.from === 'me') {
              eunseokContactTyping = false;
              const text = localizedChatText(message.text);
              let position = 0;
              const typingTimer = window.setInterval(() => {
                position += 1; eunseokDinnerDraft = text.slice(0, position);
                const draftInput = app.querySelector('.kakao-script-input');
                if (draftInput) draftInput.value = eunseokDinnerDraft;
                if (position >= text.length) {
                  window.clearInterval(typingTimer);
                  window.setTimeout(() => {
                    (KAKAO_MESSAGES[EUNSEOK_DINNER_CONTACT] ||= []).push(message);
                    eunseokDinnerDraft = ''; saveKakaoMessages();
                    if (activeContact?.number === EUNSEOK_DINNER_CONTACT) render();
                    window.setTimeout(() => sendNextMessage(index + 1), 1500);
                  }, 1100);
                }
              }, 65);
            } else {
              eunseokDinnerDraft = ''; eunseokContactTyping = true;
              if (activeContact?.number === EUNSEOK_DINNER_CONTACT) render();
              window.setTimeout(() => {
                eunseokContactTyping = false;
                (KAKAO_MESSAGES[EUNSEOK_DINNER_CONTACT] ||= []).push(message); saveKakaoMessages();
                if (activeContact?.number === EUNSEOK_DINNER_CONTACT) render();
                window.setTimeout(() => sendNextMessage(index + 1), 1700);
              }, 1900);
            }
          };
          sendNextMessage(0);
        };
        input.addEventListener('click', startScript);
        input.addEventListener('focus', startScript);
        const emoji = makeButton('☺', currentLanguage === 'ko' ? '이모티콘' : currentLanguage === 'zh-Hant' ? '表情符號' : 'Emoji', 'kakao-emoji-button');
        const send = document.createElement('button'); send.type = 'button'; send.className = 'kakao-send-button'; send.textContent = '↑'; send.setAttribute('aria-label', labels.send); send.addEventListener('click', startScript);
        form.append(add, input, emoji, send);
        if (eunseokDinnerScriptStarted) {
          input.value = eunseokDinnerDraft;
          const keyboard = document.createElement('div'); keyboard.className = 'kakao-simulated-keyboard'; keyboard.setAttribute('aria-hidden', 'true');
          [['Q W E R T Y U I O P'],['A S D F G H J K L'],['⇧ Z X C V B N M ⌫'],['.?123','☺',currentLanguage === 'ko' ? '한국어' : currentLanguage === 'zh-Hant' ? '中文' : 'EN','space',currentLanguage === 'ko' ? '완료' : currentLanguage === 'zh-Hant' ? '完成' : 'return']].forEach((rowText, rowIndex) => {
            const row = document.createElement('div'); row.className = 'kakao-key-row';
            rowText[0].split(' ').forEach((key) => {
              const keycap = document.createElement('span'); keycap.className = `kakao-key${rowIndex === 3 ? ' kakao-key-special' : ''}${key === 'space' ? ' kakao-key-space' : ''}`;
              keycap.textContent = key === 'space' ? '' : key; row.append(keycap);
            });
            keyboard.append(row);
          });
          form.append(keyboard);
        }
      } else {
        const add = makeButton('+', currentLanguage === 'ko' ? '첨부' : currentLanguage === 'zh-Hant' ? '新增附件' : 'Add attachment', 'kakao-attach-button');
        const input = document.createElement('input'); input.name = 'message'; input.placeholder = labels.messagePlaceholder; input.setAttribute('aria-label', labels.messagePlaceholder); input.autocomplete = 'off'; input.readOnly = true;
        const emoji = makeButton('☺', currentLanguage === 'ko' ? '이모티콘' : currentLanguage === 'zh-Hant' ? '表情符號' : 'Emoji', 'kakao-emoji-button');
        const send = document.createElement('button'); send.type = 'button'; send.className = 'kakao-send-button'; send.textContent = '↑'; send.setAttribute('aria-label', labels.send);
        const sendMessage = () => {
          const message = input.value.trim(); if (!message) return;
          const recipient = activeContact;
          const now = new Date();
          const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
          const nowLabel = new Intl.DateTimeFormat(currentLanguage === 'ko' ? 'ko-KR' : currentLanguage === 'zh-Hant' ? 'zh-Hant' : 'en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Seoul' }).format(now);
          (KAKAO_MESSAGES[recipient.number] ||= []).push({ date: today, from: 'me', text: message, time: nowLabel });
          saveKakaoMessages(); render();
          window.setTimeout(() => {
            const replyTime = new Intl.DateTimeFormat(currentLanguage === 'ko' ? 'ko-KR' : currentLanguage === 'zh-Hant' ? 'zh-Hant' : 'en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Seoul' }).format(new Date());
            (KAKAO_MESSAGES[recipient.number] ||= []).push({ date: today, from: 'contact', text: makeRiizeMockReply(recipient, message), time: replyTime });
            saveKakaoMessages(); render();
          }, 700);
        };
        send.addEventListener('click', sendMessage);
        form.append(add, input, emoji, send);
      }
      main.append(messages, form);
      const scrollToLatest = () => { messages.scrollTop = messages.scrollHeight; };
      window.requestAnimationFrame(() => { scrollToLatest(); window.requestAnimationFrame(scrollToLatest); });
    } else {
      const title = document.createElement('strong'); title.className = 'kakao-page-title'; title.textContent = tabRows.find(([key]) => key === activeTab)?.[1] || labels.chats;
      const actions = document.createElement('div'); actions.className = 'kakao-header-actions';
      actions.append(makeButton('⌕', labels.search, 'kakao-icon-button'));
      if (activeTab === 'chats') actions.append(makeButton('+', labels.chats, 'kakao-icon-button kakao-new-chat'));
      header.append(title, actions);
      if (activeTab === 'friends' || activeTab === 'chats') {
        const search = document.createElement('label'); search.className = 'kakao-search';
        const icon = document.createElement('span'); icon.textContent = '⌕'; icon.setAttribute('aria-hidden', 'true');
        const input = document.createElement('input'); input.type = 'search'; input.placeholder = labels.searchChats; input.setAttribute('aria-label', labels.searchChats); input.value = searchTerm;
        const paintList = () => {
          const term = searchTerm.trim().toLowerCase(); list.replaceChildren();
          if (activeTab === 'friends') {
            const groupTitle = document.createElement('h2'); groupTitle.className = 'kakao-list-section-title'; groupTitle.textContent = currentLanguage === 'ko' ? `친구 ${contacts.length}` : currentLanguage === 'zh-Hant' ? `好友 ${contacts.length}` : `Friends ${contacts.length}`; list.append(groupTitle);
          }
          const peopleForTab = activeTab === 'chats' ? [groupContact, ...contacts] : contacts;
          peopleForTab.filter((person) => `${person.name} ${displayName(person)}`.toLowerCase().includes(term)).forEach((person, index) => {
            const row = document.createElement('button'); row.type = 'button'; row.className = `kakao-chat-row${activeTab === 'friends' ? ' kakao-friend-row' : ''}`;
            row.addEventListener('click', () => { activeContact = person; render(); });
            row.append(avatarFor(person, index));
            const copyBlock = document.createElement('span'); copyBlock.className = 'kakao-chat-copy';
            const name = document.createElement('strong'); name.textContent = displayName(person);
            const lastText = KAKAO_MESSAGES[person.number]?.at(-1)?.text;
            const preview = document.createElement('small'); preview.textContent = activeTab === 'friends' ? (currentLanguage === 'ko' ? '메시지 보내기' : currentLanguage === 'zh-Hant' ? '傳送訊息' : 'Send a message') : (lastText ? localizedChatText(lastText) : currentLanguage === 'ko' ? '대화를 시작해 보세요' : currentLanguage === 'zh-Hant' ? '開始聊天' : 'Start a conversation');
            copyBlock.append(name, preview); row.append(copyBlock);
            if (activeTab === 'chats') {
              const meta = document.createElement('span'); meta.className = 'kakao-chat-meta';
              const time = document.createElement('small'); time.textContent = '5:08'; meta.append(time);
              const unreadCount = KAKAO_UNREAD_COUNTS[person.number] || 0;
              if (unreadCount > 0) { const badge = document.createElement('b'); badge.textContent = String(unreadCount); badge.setAttribute('aria-label', `${unreadCount} unread messages`); meta.append(badge); }
              row.append(meta);
            } else { const arrow = document.createElement('span'); arrow.className = 'kakao-row-chevron'; arrow.textContent = '›'; row.append(arrow); }
            list.append(row);
          });
        };
        const list = document.createElement('div'); list.className = 'kakao-chat-list';
        input.addEventListener('input', () => { searchTerm = input.value; paintList(); }); search.append(icon, input); main.append(search, list);
        paintList();
        const newChat = header.querySelector('.kakao-new-chat');
        if (newChat) newChat.addEventListener('click', () => { activeTab = 'friends'; searchTerm = ''; render(); });
      } else if (activeTab === 'open') {
        const intro = document.createElement('section'); intro.className = 'kakao-open-intro';
        const title = document.createElement('h2'); title.textContent = currentLanguage === 'ko' ? '숏폼과 오픈채팅' : currentLanguage === 'zh-Hant' ? '短片與開放聊天室' : 'Shorts & Open Chat';
        const subtitle = document.createElement('p'); subtitle.textContent = currentLanguage === 'ko' ? '짧은 영상과 관심사 기반 대화를 둘러보세요.' : currentLanguage === 'zh-Hant' ? '瀏覽短片與興趣聊天室。' : 'Explore short videos and conversations around your interests.';
        intro.append(title, subtitle);
        const topics = document.createElement('div'); topics.className = 'kakao-topic-chips';
        (currentLanguage === 'ko' ? ['RIIZE','음악','서울','라이프스타일'] : currentLanguage === 'zh-Hant' ? ['RIIZE','音樂','首爾','生活風格'] : ['RIIZE','Music','Seoul','Lifestyle']).forEach((topic) => { const chip = document.createElement('button'); chip.type = 'button'; chip.textContent = topic; topics.append(chip); });
        const videoRail = document.createElement('div'); videoRail.className = 'kakao-now-video-rail';
        (currentLanguage === 'ko' ? ['오늘의 무대','팬들의 순간'] : currentLanguage === 'zh-Hant' ? ['今日舞台','粉絲時刻'] : ['Today’s stage','Fan moments']).forEach((label,index) => { const card = document.createElement('button'); card.type = 'button'; card.className = `kakao-now-video-card video-${index+1}`; const play = document.createElement('span'); play.textContent = '▶'; const caption = document.createElement('small'); caption.textContent = label; card.append(play,caption); videoRail.append(card); });
        const openTitle = document.createElement('h3'); openTitle.className = 'kakao-list-section-title'; openTitle.textContent = labels.openChat;
        main.append(intro, topics, videoRail, openTitle);
        contacts.slice(0,4).forEach((person,index) => { const row = document.createElement('button'); row.type = 'button'; row.className = 'kakao-open-chat-row'; row.append(avatarFor(person,index)); const text = document.createElement('span'); text.innerHTML = `<strong>${currentLanguage === 'ko' ? 'RIIZE 팬 채팅' : currentLanguage === 'zh-Hant' ? 'RIIZE 粉絲聊天室' : 'RIIZE fan chat'}</strong><small>${phoneContactName(person)} · ${currentLanguage === 'ko' ? '활발한 대화' : currentLanguage === 'zh-Hant' ? '熱門聊天' : 'Active conversation'}</small>`; row.append(text); main.append(row); });
      } else {
        const grid = document.createElement('div'); grid.className = 'kakao-more-grid';
        const items = currentLanguage === 'ko' ? [['⌕','검색'],['♙','친구'],['◉','오픈채팅'],['⚙','설정'],['☻','이모티콘'],['▦','캘린더']] : currentLanguage === 'zh-Hant' ? [['⌕','搜尋'],['♙','好友'],['◉','開放聊天室'],['⚙','設定'],['☻','表情符號'],['▦','行事曆']] : [['⌕','Search'],['♙','Friends'],['◉','Open Chat'],['⚙','Settings'],['☻','Emoticons'],['▦','Calendar']];
        items.forEach(([icon,label],index) => { const button = document.createElement('button'); button.type = 'button'; button.className = 'kakao-more-item'; button.innerHTML = `<span>${icon}</span><small>${label}</small>`; button.addEventListener('click', () => { activeTab = index === 1 ? 'friends' : index === 2 ? 'open' : 'chats'; render(); }); grid.append(button); });
        main.append(grid);
      }
    }
    nav.replaceChildren();
    tabRows.forEach(([key,label,icon]) => {
      const button = document.createElement('button'); button.type = 'button'; button.className = `kakao-tab${activeTab === key && !activeContact ? ' is-active' : ''}`; button.innerHTML = `<span aria-hidden="true">${icon}</span><small>${label}</small>`;
      button.addEventListener('click', () => { activeTab = key; activeContact = null; render(); }); nav.append(button);
    });
  };
  app.append(header, main, nav); content.append(app); render();
}

function appendSpotifyApp(content) {
  const labels = appCopy('spotify');
  const tracks = [
    { id: 'DiyBJqGTmgE', title: '‘정승환 - 눈사람’ by SUNGCHAN', artist: 'RIIZE', album: 'RIIZING : Epilogue', cover: 'assets/photos/spotify-snowman-cover.webp', audioSrc: 'assets/audio/sungchan-song.mp3' },
    { id: 'xB2GXNjFYlM', title: "'Kenshi Yonezu - Eine Kleine' by EUNSEOK", artist: 'RIIZE', album: 'RIIZING : Epilogue', cover: 'assets/photos/spotify-eine-kleine-cover.jpg', audioSrc: 'assets/audio/eunseok-song.mp3' },
  ];
  const app = document.createElement('section');
  app.className = 'spotify-app';
  const header = document.createElement('header');
  header.className = 'spotify-topbar';
  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'spotify-back';
  back.textContent = '‹';
  back.setAttribute('aria-label', copy().close);
  back.addEventListener('click', closeApp);
  const brand = document.createElement('span');
  brand.className = 'spotify-brand';
  brand.innerHTML = `${ICON_ART.spotify}<strong>Spotify</strong>`;
  const avatar = document.createElement('span');
  avatar.className = 'spotify-avatar';
  avatar.textContent = 'S';
  header.append(back, brand, avatar);

  let activeTab = 'home';
  let selectedTrack = tracks.find((track) => track.id === activeSpotifyTrackId) || tracks[0];
  let playing = Boolean(spotifyIsPlaying && activeSpotifyAudio && !activeSpotifyAudio.paused);
  let query = '';
  const main = document.createElement('main');
  main.className = 'spotify-main';
  const player = document.createElement('section');
  player.className = 'spotify-player';
  player.setAttribute('aria-label', labels.demo);
  const nav = document.createElement('nav');
  nav.className = 'spotify-tabbar';
  nav.setAttribute('aria-label', labels.navigation || 'Spotify navigation');

  const makeCover = (track, className = '') => {
    const cover = document.createElement('span');
    cover.className = `spotify-cover ${className}`.trim();
    const image = document.createElement('img');
    image.src = track.cover;
    image.alt = `${track.title} YouTube cover`;
    cover.append(image);
    return cover;
  };
  const makeTrackRow = (track, index) => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = `spotify-track-row${selectedTrack === track ? ' is-selected' : ''}`;
    row.addEventListener('click', () => playTrack(track));
    row.append(makeCover(track, 'spotify-track-cover'));
    const copyBlock = document.createElement('span');
    copyBlock.className = 'spotify-track-copy';
    const title = document.createElement('strong');
    title.textContent = track.title;
    const detail = document.createElement('small');
    detail.textContent = `${track.artist} · ${labels.songs}`;
    copyBlock.append(title, detail);
    row.append(copyBlock);
    const number = document.createElement('span');
    number.className = 'spotify-track-index';
    number.textContent = String(index + 1).padStart(2, '0');
    row.append(number);
    return row;
  };
  const playTrack = (track) => {
    selectedTrack = track;
    activeSpotifyTrackId = track.id;
    activeSpotifyAudio?.pause();
    playing = true;
    spotifyIsPlaying = true;
    if (track.audioSrc) {
      if (!activeSpotifyAudio) activeSpotifyAudio = new Audio();
      activeSpotifyAudio.src = track.audioSrc;
      activeSpotifyAudio.currentTime = 0;
      activeSpotifyAudio.onended = () => {
        playing = false;
        spotifyIsPlaying = false;
        if (currentAppType === 'spotify') render();
      };
      activeSpotifyAudio.play().catch(() => {
        playing = false;
        spotifyIsPlaying = false;
        if (currentAppType === 'spotify') render();
      });
    }
    render();
  };

  const renderHome = () => {
    const heading = document.createElement('h1');
    const hour = new Date().getHours();
    heading.textContent = hour < 12 ? labels.greetingMorning : hour < 18 ? labels.greetingAfternoon : labels.greeting;
    const recentTitle = document.createElement('h2');
    recentTitle.textContent = labels.recentlyPlayed;
    const list = document.createElement('div');
    list.className = 'spotify-track-list';
    tracks.forEach((track, index) => list.append(makeTrackRow(track, index)));
    main.replaceChildren(heading, recentTitle, list);
  };
  const renderSearch = () => {
    const heading = document.createElement('h1');
    heading.textContent = labels.search;
    const searchBox = document.createElement('label');
    searchBox.className = 'spotify-search-box';
    const searchIcon = document.createElement('span');
    searchIcon.setAttribute('aria-hidden', 'true');
    searchIcon.textContent = '⌕';
    const input = document.createElement('input');
    input.type = 'search';
    input.placeholder = labels.searchPlaceholder;
    input.setAttribute('aria-label', labels.searchPlaceholder);
    input.value = query;
    const results = document.createElement('div');
    results.className = 'spotify-track-list spotify-search-results';
    const renderResults = () => {
      const matches = tracks.filter((track) => `${track.title} ${track.artist}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
      results.replaceChildren();
      if (!matches.length) {
        const empty = document.createElement('p');
        empty.className = 'spotify-empty';
        empty.textContent = labels.noResults;
        results.append(empty);
      } else matches.forEach((track, index) => results.append(makeTrackRow(track, index)));
    };
    input.addEventListener('input', () => { query = input.value; renderResults(); });
    searchBox.append(searchIcon, input);
    const browse = document.createElement('h2');
    browse.textContent = labels.searchResults;
    renderResults();
    main.replaceChildren(heading, searchBox, browse, results);
  };
  const renderLibrary = () => {
    const title = document.createElement('h1');
    title.textContent = labels.yourLibrary;
    const items = document.createElement('div');
    items.className = 'spotify-library-list';
    const liked = document.createElement('button');
    liked.type = 'button';
    liked.className = 'spotify-library-item';
    liked.addEventListener('click', () => { activeTab = 'liked'; render(); });
    const likedArt = document.createElement('span');
    likedArt.className = 'spotify-liked-art';
    likedArt.textContent = '♥';
    const likedCopy = document.createElement('span');
    likedCopy.className = 'spotify-track-copy';
    const likedTitle = document.createElement('strong');
    likedTitle.textContent = labels.likedSongs;
    const likedDetail = document.createElement('small');
    likedDetail.textContent = `${labels.playlists} · ${tracks.length} ${labels.songs}`;
    likedCopy.append(likedTitle, likedDetail);
    liked.append(likedArt, likedCopy);
    items.append(liked);
    main.replaceChildren(title, items);
  };
  const renderLiked = () => {
    const backToLibrary = document.createElement('button');
    backToLibrary.type = 'button';
    backToLibrary.className = 'spotify-liked-back';
    backToLibrary.textContent = `‹  ${labels.yourLibrary}`;
    backToLibrary.addEventListener('click', () => { activeTab = 'library'; render(); });
    const heading = document.createElement('h1');
    heading.textContent = labels.likedSongs;
    const list = document.createElement('div');
    list.className = 'spotify-track-list';
    tracks.forEach((track, index) => list.append(makeTrackRow(track, index)));
    main.replaceChildren(backToLibrary, heading, list);
  };
  const makeOfficialPlayer = () => {
    const frame = document.createElement('iframe');
    frame.className = 'spotify-youtube-embed';
    frame.title = `${selectedTrack.title} — in-app player`;
    frame.loading = 'eager';
    frame.src = `https://www.youtube-nocookie.com/embed/${selectedTrack.id}?autoplay=1&playsinline=1&controls=1&rel=0&modestbranding=1`;
    frame.allow = 'autoplay; encrypted-media; picture-in-picture';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    const wrapper = document.createElement('div');
    wrapper.className = 'spotify-youtube-frame';
    wrapper.append(frame);
    return wrapper;
  };
  const render = () => {
    if (activeTab === 'home') renderHome();
    else if (activeTab === 'search') renderSearch();
    else if (activeTab === 'liked') renderLiked();
    else renderLibrary();
    if (playing && !selectedTrack.audioSrc) main.prepend(makeOfficialPlayer());
    player.replaceChildren(makeCover(selectedTrack, 'spotify-player-cover'));
    const info = document.createElement('span');
    info.className = 'spotify-player-copy';
    const song = document.createElement('strong');
    song.textContent = selectedTrack.title;
    const artist = document.createElement('small');
    artist.textContent = `${selectedTrack.artist} · ${labels.demo}`;
    info.append(song, artist);
    const play = document.createElement('button');
    play.type = 'button';
    play.className = 'spotify-player-toggle';
    play.setAttribute('aria-label', playing ? labels.pause : labels.play);
    play.innerHTML = playing ? '<span aria-hidden="true">Ⅱ</span>' : '<span aria-hidden="true">▶</span>';
    play.addEventListener('click', () => {
      playing = !playing;
      spotifyIsPlaying = playing;
      activeSpotifyTrackId = selectedTrack.id;
      if (selectedTrack.audioSrc) {
        if (playing) {
          if (!activeSpotifyAudio) activeSpotifyAudio = new Audio(selectedTrack.audioSrc);
          activeSpotifyAudio.onended = () => {
            playing = false;
            spotifyIsPlaying = false;
            if (currentAppType === 'spotify') render();
          };
          activeSpotifyAudio.play().catch(() => {
            playing = false;
            spotifyIsPlaying = false;
            if (currentAppType === 'spotify') render();
          });
        } else activeSpotifyAudio?.pause();
      }
      render();
    });
    player.append(info, play);
    nav.replaceChildren();
    [
      ['home', labels.home, '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>'],
      ['search', labels.search, '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/>'],
      ['library', labels.yourLibrary, '<path d="M4 5h16M4 12h16M4 19h16"/>'],
    ].forEach(([key, label, path]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `spotify-tab${activeTab === key ? ' is-active' : ''}`;
      button.setAttribute('aria-label', label);
      button.setAttribute('aria-current', String(activeTab === key));
      button.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg><span>${label}</span>`;
      button.addEventListener('click', () => { activeTab = key; render(); });
      nav.append(button);
    });
  };
  app.append(header, main, player, nav);
  content.append(app);
  render();
}

function appendYouTubeApp(content) {
  const labels = appCopy('youtube');
  const savedVideos = [
    { id: 'L6fM5Po_eoM', title: '여자라면 영원즈' },
    { id: 'lZ96aoccs_M', title: '정성찬 소녀미' },
    { id: 'XouPEEWKUQY', title: '은석 & 성찬 - 걘 아니야 (pt.1+2)' },
    { id: 'jm2gdalfAKI', title: '안정형 남친' },
    { id: 'nv76O2WeiAQ', title: 'RIIZE 성찬 | 그대 반드시 행복해지세요' },
  ];
  const page = document.createElement('section');
  page.className = 'youtube-app';
  const masthead = document.createElement('header');
  masthead.className = 'youtube-masthead';
  masthead.innerHTML = '<span class="youtube-brand-mark" aria-hidden="true">▶</span><strong>YouTube</strong>';
  const search = document.createElement('input');
  search.className = 'youtube-search';
  search.type = 'search';
  search.placeholder = labels.search;
  search.setAttribute('aria-label', labels.searchVideos);
  masthead.append(search);

  const player = document.createElement('div');
  player.className = 'youtube-player';
  const frame = document.createElement('iframe');
  frame.title = `${copy().apps.youtube} · ${labels.video}`;
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.loading = 'lazy';
  const videoInfo = document.createElement('div');
  videoInfo.className = 'youtube-video-info';
  const selectedTitle = document.createElement('strong');
  selectedTitle.textContent = labels.choose;
  videoInfo.append(selectedTitle);
  player.append(frame, videoInfo);

  const heading = document.createElement('h2');
  heading.className = 'youtube-section-title';
  heading.textContent = labels.saved;
  const list = document.createElement('div');
  list.className = 'youtube-video-list';
  const cards = savedVideos.map(({ id, title: videoTitle }) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'youtube-video-card';
    card.dataset.search = `${videoTitle} youtube`;
    const thumbnail = document.createElement('span');
    thumbnail.className = 'youtube-thumbnail';
    const image = document.createElement('img');
    image.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    image.alt = '';
    image.loading = 'lazy';
    const play = document.createElement('span');
    play.className = 'youtube-thumbnail-play';
    play.textContent = '▶';
    const copy = document.createElement('span');
    copy.className = 'youtube-video-copy';
    const title = document.createElement('strong');
    title.textContent = videoTitle;
    copy.append(title);
    thumbnail.append(image, play);
    card.append(thumbnail, copy);
    card.addEventListener('click', () => {
      frame.src = `https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0`;
      selectedTitle.textContent = videoTitle;
      cards.forEach((other) => other.classList.toggle('selected', other === card));
      player.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    list.append(card);
    return card;
  });
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    cards.forEach((card) => { card.hidden = query && !card.dataset.search.includes(query); });
  });
  page.append(masthead, player, heading, list);
  content.append(page);
}

async function instagramImageData(file, maxSize = 1000) {
  if (!file?.type?.startsWith('image/')) throw new Error('Choose an image file.');
  const source = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read that image.'));
    reader.onload = () => resolve(String(reader.result));
    reader.readAsDataURL(file);
  });
  const image = await new Promise((resolve, reject) => {
    const element = new Image();
    element.onload = () => resolve(element);
    element.onerror = () => reject(new Error('Could not open that image.'));
    element.src = source;
  });
  const scale = Math.min(1, maxSize / Math.max(image.naturalWidth, image.naturalHeight));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/jpeg', 0.78);
}

function appendInstagramApp(content) {
  const labels = appCopy('instagram');
  const people = [
    { id: 'shortaro', name: 'Shortaro', initials: 'S' },
    { id: 'eunseok', name: 'Song Eunseok', initials: 'SE' },
    { id: 'wonbin', name: 'Park Wonbin', initials: 'PW' },
    { id: 'sohee', name: 'Lee Sohee', initials: 'LS' },
    { id: 'anton', name: 'Anton Lee', initials: 'AL' },
  ];
  const user = { id: 'jung', name: 'Jung Sungchan', handle: 'jsungchan23', initials: 'JS' };
  const instagramAccounts = {
    shortaro: { id: '_shotaroo_', username: '타로짱' },
    eunseok: { id: 'seunseok39', username: 'ㅅㅇㅅ' },
    jung: { id: user.handle, username: '정성찬성찬' },
    wonbin: { id: 'w0nb1n._', username: '삐니' },
    sohee: { id: '5o2ee', username: '또리' },
    anton: { id: 'antinitonny', username: '엥톤' },
  };
  const memberPosts = {
    shortaro: [
      { id: 'shotaro-post-1', authorId: 'shortaro', date: '2026-03-12', caption: { en: 'Wore glasses today', 'zh-Hant': '今天戴眼鏡出門', ko: '오늘 안경 쓰고 나왔음' }, images: ['assets/photos/instagram-shotaro-post-1a.jpg', 'assets/photos/instagram-shotaro-post-1b.jpg'] },
      { id: 'shotaro-post-2', authorId: 'shortaro', date: '2026-04-18', caption: { en: 'Before practice today', 'zh-Hant': '今天練習前', ko: '오늘 연습 전' }, images: ['assets/photos/instagram-shotaro-post-2a.JPG', 'assets/photos/instagram-shotaro-post-2b.JPG'] },
      { id: 'shotaro-post-3', authorId: 'shortaro', date: '2026-06-05', caption: { en: 'Breakfast was good', 'zh-Hant': '早餐好吃', ko: '아침 맛있다' }, images: ['assets/photos/instagram-shotaro-post-3.jpg'] },
      { id: 'shotaro-post-4', authorId: 'shortaro', date: '2026-07-22', caption: { en: 'Night in Japan', 'zh-Hant': '日本的夜晚', ko: '일본 밤' }, images: ['assets/photos/instagram-shotaro-post-4.jpg'] },
      { id: 'shotaro-post-5', authorId: 'shortaro', date: '2026-09-03', caption: { en: 'It snowed—so cold', 'zh-Hant': '下雪了，好冷', ko: '눈 왔다 추웠다' }, images: ['assets/photos/instagram-shotaro-post-5a.jpg', 'assets/photos/instagram-shotaro-post-5b.jpg'] },
    ],
    eunseok: [
      { id: 'eunseok-post-1', authorId: 'eunseok', date: '2026-02-28', caption: { en: 'Had tea today', 'zh-Hant': '今天喝了茶', ko: '오늘 차 마심' }, images: ['assets/photos/instagram-eunseok-post-1a.jpg', 'assets/photos/instagram-eunseok-post-1b.jpg', 'assets/photos/instagram-eunseok-post-1c.jpg', 'assets/photos/instagram-eunseok-post-1d.jpg'] },
      { id: 'eunseok-post-2', authorId: 'eunseok', date: '2026-04-09', caption: { en: 'Home today', 'zh-Hant': '今天在家', ko: '오늘 집에 있음' }, images: ['assets/photos/instagram-eunseok-post-2a.JPG', 'assets/photos/instagram-eunseok-post-2b.JPG'] },
      { id: 'eunseok-post-3', authorId: 'eunseok', date: '2026-05-30', caption: { en: 'Ate well today', 'zh-Hant': '今天吃得不錯', ko: '오늘 먹음' }, images: ['assets/photos/instagram-eunseok-post-3.jpg'] },
      { id: 'eunseok-post-4', authorId: 'eunseok', date: '2026-07-15', caption: { en: 'Today', 'zh-Hant': '今天', ko: '오늘' }, images: ['assets/photos/instagram-eunseok-post-4.jpg'] },
      { id: 'eunseok-post-5', authorId: 'eunseok', date: '2026-09-11', caption: { en: 'Tired today', 'zh-Hant': '今天好累', ko: '오늘 피곤함' }, images: ['assets/photos/instagram-eunseok-post-5a.JPG', 'assets/photos/instagram-eunseok-post-5b.JPG', 'assets/photos/instagram-eunseok-post-5c.JPG', 'assets/photos/instagram-eunseok-post-5d.JPG'] },
    ],
    sungchan: [
      { id: 'sungchan-post-1', authorId: 'jung', date: '2026-03-05', caption: { en: 'Done working out today. That was tough lol', 'zh-Hant': '今天運動結束了，好累ㅋㅋ', ko: '오늘 운동 끝 힘들었다 ㅋㅋ' }, images: ['assets/photos/instagram-sungchan-post-1.jpg'] },
      { id: 'sungchan-post-2', authorId: 'jung', date: '2026-04-22', caption: { en: 'Home today. So cute lol', 'zh-Hant': '今天在家，好可愛ㅋㅋ', ko: '오늘 집에 있음 너무 귀여움 ㅋㅋ' }, images: ['assets/photos/instagram-sungchan-post-2a.JPG', 'assets/photos/instagram-sungchan-post-2b.JPG'] },
      { id: 'sungchan-post-3', authorId: 'jung', date: '2026-06-14', caption: { en: 'Changed my hair color today. How is it?', 'zh-Hant': '今天換了髮色，怎麼樣？', ko: '오늘 머리 색 바꿈 어때?' }, images: ['assets/photos/instagram-sungchan-post-3.JPG'] },
      { id: 'sungchan-post-4', authorId: 'jung', date: '2026-08-02', caption: { en: 'Home today. I’m tired lol', 'zh-Hant': '今天在家，好累ㅋㅋ', ko: '오늘 집에 있음 피곤하다 ㅋㅋ' }, images: ['assets/photos/instagram-sungchan-post-4a.jpg', 'assets/photos/instagram-sungchan-post-4b.jpg', 'assets/photos/instagram-sungchan-post-4c.jpg'] },
      { id: 'sungchan-post-5', authorId: 'jung', date: '2026-09-20', caption: { en: 'Had an apple today. It was good', 'zh-Hant': '今天吃了蘋果，很好吃', ko: '오늘 사과 먹음 맛있다' }, images: ['assets/photos/instagram-sungchan-post-5a.JPG', 'assets/photos/instagram-sungchan-post-5b.JPG', 'assets/photos/instagram-sungchan-post-5c.JPG'] },
    ],
    wonbin: [
      { id: 'wonbin-post-1', authorId: 'wonbin', date: '2026-03-18', caption: { en: 'Guitar today', 'zh-Hant': '今天彈吉他', ko: '오늘 기타' }, images: ['assets/photos/instagram-wonbin-post-1.jpg'] },
      { id: 'wonbin-post-2', authorId: 'wonbin', date: '2026-05-07', caption: { en: 'Hotel today', 'zh-Hant': '今天在飯店', ko: '오늘 호텔' }, images: ['assets/photos/instagram-wonbin-post-2a.jpg', 'assets/photos/instagram-wonbin-post-2b.jpg'] },
      { id: 'wonbin-post-3', authorId: 'wonbin', date: '2026-06-25', caption: { en: 'After a shower today', 'zh-Hant': '今天洗完澡後', ko: '오늘 샤워 후' }, images: ['assets/photos/instagram-wonbin-post-3.jpg'] },
      { id: 'wonbin-post-4', authorId: 'wonbin', date: '2026-08-09', caption: { en: 'At an exhibition today', 'zh-Hant': '今天去看展', ko: '오늘 전시' }, images: ['assets/photos/instagram-wonbin-post-4a.JPG', 'assets/photos/instagram-wonbin-post-4b.JPG'] },
      { id: 'wonbin-post-5', authorId: 'wonbin', date: '2026-10-01', caption: { en: 'Before the show today', 'zh-Hant': '今天演出前', ko: '오늘 공연 전' }, images: ['assets/photos/instagram-wonbin-post-5a.jpg', 'assets/photos/instagram-wonbin-post-5b.jpg'] },
    ],
    sohee: [
      { id: 'sohee-post-1', authorId: 'sohee', date: '2026-02-15', caption: { en: 'I smiled today lol', 'zh-Hant': '今天笑了ㅋㅋ', ko: '오늘 웃었다 ㅋㅋ' }, images: ['assets/photos/instagram-sohee-post-1.jpg'] },
      { id: 'sohee-post-2', authorId: 'sohee', date: '2026-04-03', caption: { en: 'Went out today. The weather was nice', 'zh-Hant': '今天出門了，天氣很好', ko: '오늘 밖에 나감 날씨 좋았다' }, images: ['assets/photos/instagram-sohee-post-2a.jpg', 'assets/photos/instagram-sohee-post-2b.jpg'] },
      { id: 'sohee-post-3', authorId: 'sohee', date: '2026-06-11', caption: { en: 'The sea was so nice today', 'zh-Hant': '今天海邊真舒服', ko: '오늘 바다 좋았다' }, images: ['assets/photos/instagram-sohee-post-3.jpg'] },
      { id: 'sohee-post-4', authorId: 'sohee', date: '2026-07-28', caption: { en: 'Got food today. It was good lol', 'zh-Hant': '今天去吃東西了，好吃ㅋㅋ', ko: '오늘 먹었다 맛있었다 ㅋㅋ' }, images: ['assets/photos/instagram-sohee-post-4a.jpg', 'assets/photos/instagram-sohee-post-4b.jpg'] },
      { id: 'sohee-post-5', authorId: 'sohee', date: '2026-09-16', caption: { en: 'What do you think of my hair color? lol', 'zh-Hant': '今天的髮色怎麼樣？ㅋㅋ', ko: '오늘 머리 색 어때? ㅋㅋ' }, images: ['assets/photos/instagram-sohee-post-5.jpg'] },
    ],
    anton: [
      { id: 'anton-post-1', authorId: 'anton', date: '2026-03-25', caption: { en: 'Cello today', 'zh-Hant': '今天的大提琴', ko: '오늘 첼로' }, images: ['assets/photos/instagram-anton-post-1.jpg'] },
      { id: 'anton-post-2', authorId: 'anton', date: '2026-05-19', caption: { en: 'At the studio today', 'zh-Hant': '今天在工作室', ko: '오늘 스튜디오' }, images: ['assets/photos/instagram-anton-post-2.jpg'] },
      { id: 'anton-post-3', authorId: 'anton', date: '2026-07-08', caption: { en: 'Swimming today', 'zh-Hant': '今天游泳', ko: '오늘 수영' }, images: ['assets/photos/instagram-anton-post-3.jpg'] },
      { id: 'anton-post-4', authorId: 'anton', date: '2026-08-21', caption: { en: 'Dinner tonight', 'zh-Hant': '今晚吃晚餐', ko: '오늘 저녁' }, images: ['assets/photos/instagram-anton-post-4.jpg'] },
      { id: 'anton-post-5', authorId: 'anton', date: '2026-10-05', caption: { en: 'Paris today', 'zh-Hant': '今天在巴黎', ko: '오늘 파리' }, images: ['assets/photos/instagram-anton-post-5a.JPG', 'assets/photos/instagram-anton-post-5b.JPG', 'assets/photos/instagram-anton-post-5c.JPG'] },
    ],
  };
  const memberCommentBank = {
    shortaro: [
      { by: 'eunseok', text: { en: 'Those glasses suit you.', 'zh-Hant': '這副眼鏡很適合你。', ko: '안경 잘 어울리네.' } },
      { by: 'sungchan', text: { en: 'Hyung, you look so cool 😂', 'zh-Hant': '哥，這也太帥了吧😂', ko: '형 너무 멋있다 😂' } },
      { by: 'sohee', text: { en: 'Save me some breakfast next time!', 'zh-Hant': '下次早餐也幫我留一份！', ko: '다음엔 나도 아침 챙겨 줘요!' } },
      { by: 'anton', text: { en: 'The night lights look really nice.', 'zh-Hant': '夜景真的很好看。', ko: '밤 풍경이 정말 예뻐요.' } },
      { by: 'wonbin', text: { en: 'That view looks cold.', 'zh-Hant': '看起來好冷。', ko: '추워 보인다.' } },
    ],
    eunseok: [
      { by: 'sungchan', text: { en: 'You found a quiet café again 😂', 'zh-Hant': '又找到安靜的咖啡廳了😂', ko: '또 조용한 카페 찾았네 😂' } },
      { by: 'sungchan', text: { en: 'That little dog is adorable. You two look alike 😂', 'zh-Hant': '小狗好可愛，跟你有點像😂', ko: '강아지 너무 귀엽다. 너랑 좀 닮았어 😂' } },
      { by: 'sungchan', text: { en: 'You ate without telling us? Save me a bite next time 😭', 'zh-Hant': '吃東西也不叫我們嗎？下次留一口給我😭', ko: '우리 빼고 먹었어요? 다음엔 한 입 남겨 줘요 😭' } },
      { by: 'sungchan', text: { en: 'This looks like your kind of quiet place.', 'zh-Hant': '這裡很像你會喜歡的安靜地方。', ko: '여기 형이 좋아할 만한 조용한 곳이네.' } },
      { by: 'sungchan', text: { en: 'Hyung, get some proper rest too.', 'zh-Hant': '哥，也要好好休息。', ko: '형도 푹 쉬어요.' } },
    ],
    sungchan: [
      { by: 'eunseok', text: { en: 'Did you put your shirt on after the photo?', 'zh-Hant': '拍完才把上衣穿回去？', ko: '사진 찍고 옷 입었냐?' } },
      { by: 'eunseok', text: { en: 'Your puppy looks so happy with you!', 'zh-Hant': '小狗跟你在一起好開心！', ko: '강아지가 성찬이랑 있어서 신났네!' } },
      { by: 'eunseok', text: { en: 'Blond suits you. Don’t make me say it twice 😆', 'zh-Hant': '金髮很適合你，別讓我說第二次😆', ko: '금발 잘 어울려. 두 번 말하게 하지 마 😆' } },
      { by: 'eunseok', text: { en: 'You said you were tired. Go to sleep early.', 'zh-Hant': '你不是說累了嗎？早點睡。', ko: '피곤하다며. 일찍 자.' } },
      { by: 'eunseok', text: { en: 'You and that apple again. Save me one.', 'zh-Hant': '又是你和蘋果，幫我留一顆。', ko: '너 또 사과 먹네. 내 것도 남겨.' } },
    ],
    wonbin: [
      { by: 'sungchan', text: { en: 'The guitar fits this photo so well 🎸', 'zh-Hant': '吉他跟這張照片好搭🎸', ko: '기타랑 사진 분위기 잘 어울린다 🎸' } },
      { by: 'sohee', text: { en: 'Hotel selfie, but make it a photoshoot 😄', 'zh-Hant': '飯店自拍也拍得像畫報😄', ko: '호텔 셀카가 화보 같아요 😄' } },
      { by: 'anton', text: { en: 'The after-shower quiet is the best.', 'zh-Hant': '洗完澡後安靜的時間最棒。', ko: '샤워 후 조용한 시간이 제일 좋아요.' } },
      { by: 'shotaro', text: { en: 'That exhibition looks interesting. Let’s go together!', 'zh-Hant': '展覽看起來很有趣，下次一起去吧！', ko: '전시 재밌어 보인다. 다음에 같이 가자!' } },
      { by: 'eunseok', text: { en: 'Good luck today.', 'zh-Hant': '今天加油。', ko: '오늘 잘해.' } },
    ],
    sohee: [
      { by: 'shotaro', text: { en: 'That smile made me smile too 😊', 'zh-Hant': '看到你的笑容我也笑了😊', ko: '소희 웃는 거 보니까 나도 웃게 돼 😊' } },
      { by: 'eunseok', text: { en: 'Weather was nice. You were right.', 'zh-Hant': '天氣不錯，你說得對。', ko: '날씨 좋더라. 네 말 맞았어.' } },
      { by: 'anton', text: { en: 'I like the sound of the waves there.', 'zh-Hant': '我喜歡那裡海浪的聲音。', ko: '거기 파도 소리 좋았을 것 같아요.' } },
      { by: 'sungchan', text: { en: 'You brought food back for us, right? 😂', 'zh-Hant': '有幫我們帶吃的回來吧？😂', ko: '우리 먹을 것도 사 왔지? 😂' } },
      { by: 'wonbin', text: { en: 'Pink looks good on you.', 'zh-Hant': '粉色很適合你。', ko: '분홍색 잘 어울린다.' } },
    ],
    anton: [
      { by: 'shotaro', text: { en: 'Your cello playing is always so calming.', 'zh-Hant': '聽你拉大提琴總是很療癒。', ko: '앤톤 첼로 연주는 늘 편안해.' } },
      { by: 'sungchan', text: { en: 'Studio time again? Show me what you made 😄', 'zh-Hant': '又去工作室啦？做了什麼給我看😄', ko: '또 스튜디오야? 뭐 만들었는지 보여 줘 😄' } },
      { by: 'eunseok', text: { en: 'Did you swim enough?', 'zh-Hant': '游夠了嗎？', ko: '수영 충분히 했냐?' } },
      { by: 'wonbin', text: { en: 'That place looks peaceful.', 'zh-Hant': '那裡看起來很安靜。', ko: '분위기 차분해 보인다.' } },
      { by: 'sohee', text: { en: 'Paris! Bring back a little story for us 🇫🇷', 'zh-Hant': '巴黎！回來跟我們分享一個小故事吧🇫🇷', ko: '파리다! 돌아오면 얘기 들려줘요 🇫🇷' } },
    ],
  };
  const memberStories = {
    shortaro: [
      { image: 'assets/photos/shotaro-story-1.jpg', caption: '' },
      { image: 'assets/photos/shotaro-story-2.jpg', caption: '' },
    ],
    eunseok: [
      { image: 'assets/photos/eunseok-story-1.jpg', caption: '' },
      { image: 'assets/photos/eunseok-story-2.jpg', caption: '' },
      { image: 'assets/photos/eunseok-story-3.jpg', caption: '' },
      { image: 'assets/photos/eunseok-story-4.jpg', caption: '' },
    ],
    anton: [
      { image: 'assets/photos/anton-story-1.jpg', caption: '' },
      { image: 'assets/photos/anton-story-2.jpg', caption: '' },
    ],
    sungchan: [
      { image: 'assets/photos/sungchan-story-1.jpg', caption: '' },
      { image: 'assets/photos/sungchan-story-2.jpg', caption: '' },
    ],
    wonbin: [
      { image: 'assets/photos/wonbin-story-1.jpg', caption: '' },
      { image: 'assets/photos/wonbin-story-2.jpg', caption: '' },
    ],
    sohee: [
      { image: 'assets/photos/sohee-story-1.jpg', caption: '' },
      { image: 'assets/photos/sohee-story-2.jpg', caption: '' },
    ],
  };
  const storageKey = 'orbit-phone-instagram-v1';
  let data = { avatar: '', posts: [], stories: [], messages: {}, likedPosts: {}, savedPosts: [] };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && typeof saved === 'object') data = { ...data, ...saved };
  } catch (_error) { /* Use the demo account for this visit if storage is unavailable. */ }
  if (!Array.isArray(data.posts)) data.posts = [];
  if (!Array.isArray(data.stories)) data.stories = [];
  if (!data.likedPosts || typeof data.likedPosts !== 'object' || Array.isArray(data.likedPosts)) data.likedPosts = {};
  if (!Array.isArray(data.savedPosts)) data.savedPosts = [];
  const instagramChatPhoneById = {
    shortaro: '+82 20001125',
    eunseok: '+82 20010319',
    wonbin: '+82 20020302',
    sohee: '+82 20031121',
    anton: '+82 20040321',
  };
  data.messages = Object.fromEntries(people.map((person) => [
    person.id,
    (KAKAO_MESSAGES[instagramChatPhoneById[person.id]] || []).map((message) => ({
      from: message.from,
      text: message.text && typeof message.text === 'object' ? { ...message.text } : message.text,
      time: message.time,
      date: message.date,
    })).filter((message) => {
      if (person.id !== 'eunseok') return true;
      const text = message.text;
      const koreanText = text && typeof text === 'object' ? text.ko : text;
      const removedEunseokMessages = [
        ['2026-10-22', '14:15', '내일 저녁에 같이 밥 먹을래?'],
        ['2026-10-22', '14:17', 'ㅇㅇ 먹을게'],
        ['2026-10-22', '14:18', '뭐 먹을 건데'],
      ];
      return !removedEunseokMessages.some(([date, time, removedText]) =>
        message.date === date && message.time === time && koreanText === removedText
      );
    }),
  ]));
  const persist = () => {
    const { avatar, posts, stories, likedPosts, savedPosts } = data;
    try { localStorage.setItem(storageKey, JSON.stringify({ avatar, posts, stories, likedPosts, savedPosts })); } catch (_error) { /* Keep the Instagram demo usable for this visit. */ }
  };
  const app = document.createElement('section');
  app.className = 'instagram-app';
  const header = document.createElement('header');
  header.className = 'instagram-topbar';
  const brand = document.createElement('strong');
  brand.className = 'instagram-brand';
  brand.textContent = 'Instagram';
  const postButton = document.createElement('button');
  postButton.type = 'button';
  postButton.className = 'instagram-create-button';
  postButton.setAttribute('aria-label', labels.create);
  postButton.textContent = '+';
  const instagramActions = document.createElement('div'); instagramActions.className = 'instagram-header-actions';
  instagramActions.append(postButton);
  const activityButton = document.createElement('button'); activityButton.type = 'button'; activityButton.className = 'instagram-header-icon'; activityButton.setAttribute('aria-label', labels.messages); activityButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 11.2-8.8 11.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 5.9a4.8 4.8 0 0 1 8.8 2.9Z"/></svg>';
  instagramActions.append(activityButton);
  header.append(brand, instagramActions);
  const page = document.createElement('main');
  page.className = 'instagram-page';
  const nav = document.createElement('nav');
  nav.className = 'instagram-tabbar';
  nav.setAttribute('aria-label', labels.navigation);
  const navItems = [
    ['home', labels.homeTab, '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>'],
    ['message', labels.messageTab, '<path d="m22 3-7.1 18-3.8-7.1L4 10.1 22 3Z"/><path d="m11.1 13.9 4.4-4.4"/>'],
    ['search', labels.searchTab, '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/>'],
    ['profile', labels.profileTab, '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'],
  ];
  let activeTab = 'home';
  let selectedProfile = 'jung';
  let activeChat = null;
  let chatReturn = { tab: 'message', profile: 'jung' };
  let profileReturn = { tab: 'home', chat: null, profile: 'jung', peopleListMode: null };
  const chatBack = () => {
    activeChat = null;
    activeTab = chatReturn?.tab || 'message';
    if (activeTab === 'profile') selectedProfile = chatReturn.profile || 'jung';
    render();
  };
  const personFor = (id) => id === 'jung' ? user : people.find((person) => person.id === id) || user;
  const instagramDisplayName = (person) => phoneContactName(person);
  const avatar = (person, className = '', photo = '') => {
    const element = document.createElement('span');
    element.className = `instagram-avatar instagram-avatar-${person.id} ${className}`.trim();
    element.setAttribute('aria-hidden', 'true');
    if (photo) {
      const image = document.createElement('img');
      image.src = photo;
      image.alt = '';
      element.append(image);
    } else if (MEMBER_AVATAR_PATHS[person.id]) {
      const image = document.createElement('img');
      image.src = MEMBER_AVATAR_PATHS[person.id];
      image.alt = '';
      element.append(image);
    } else {
      const initials = document.createElement('span');
      initials.textContent = person.initials;
      element.append(initials);
    }
    return element;
  };
  const createButton = (label, handler, className = '') => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.textContent = label;
    button.addEventListener('click', handler);
    return button;
  };
  const returnFromProfile = () => {
    const destination = profileReturn || { tab: 'home' };
    activeTab = destination.tab === 'profile' ? 'home' : (destination.tab || 'home');
    activeChat = destination.chat || null;
    selectedProfile = destination.profile || 'jung';
    peopleListMode = destination.peopleListMode || null;
    render();
  };
  const showProfile = (id) => {
    if (activeTab !== 'profile') {
      profileReturn = { tab: activeTab, chat: activeChat, profile: selectedProfile, peopleListMode: peopleListMode || null };
    }
    selectedProfile = id;
    activeTab = 'profile';
    activeChat = null;
    peopleListMode = null;
    render();
  };
  const closeModal = () => app.querySelector('.instagram-modal')?.remove();
  const sessionComments = {};
  const iconMarkup = {
    heart: '<path d="M20.8 8.8c0 5.2-8.8 11.2-8.8 11.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 5.9a4.8 4.8 0 0 1 8.8 2.9Z"/>',
    comment: '<path d="M20.5 11.5a8.4 8.4 0 0 1-12.8 7.2L3 20l1.3-4.1a8.4 8.4 0 1 1 16.2-4.4Z"/>',
    share: '<path d="m22 3-7.1 18-3.8-7.1L4 10.1 22 3Z"/><path d="m11.1 13.9 4.4-4.4"/>',
    bookmark: '<path d="M6 3.8h12v17l-6-4-6 4v-17Z"/>',
  };
  const iconButton = (name, label, className = '') => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `instagram-icon-button instagram-icon-${name} ${className}`.trim();
    button.setAttribute('aria-label', label);
    button.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${iconMarkup[name]}</svg>`;
    return button;
  };
  const isPostLiked = (post) => Object.hasOwn(data.likedPosts, post.id) ? Boolean(data.likedPosts[post.id]) : true;
  const openComments = (post, seededComment) => {
    const modal = document.createElement('div');
    modal.className = 'instagram-modal instagram-comments-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', labels.comments || labels.messages);
    const sheet = document.createElement('section');
    sheet.className = 'instagram-comments-sheet';
    const toolbar = document.createElement('header');
    const close = createButton('×', () => modal.remove(), 'instagram-comments-close');
    close.setAttribute('aria-label', copy().close);
    const title = document.createElement('strong');
    title.textContent = labels.comments || labels.messages;
    toolbar.append(close, title, document.createElement('span'));
    const list = document.createElement('div');
    list.className = 'instagram-comments-list';
    const appendComment = (commenter, message) => {
      const row = document.createElement('p');
      row.className = 'instagram-comment-row';
      const name = document.createElement('strong');
      name.textContent = instagramDisplayName(commenter);
      row.append(name, document.createTextNode(` ${message}`));
      list.append(row);
    };
    if (seededComment) appendComment(personFor(seededComment.by), seededComment.text[currentLanguage] || seededComment.text.ko || seededComment.text.en);
    (sessionComments[post.id] || []).forEach((comment) => appendComment(user, comment));
    if (!seededComment && !(sessionComments[post.id] || []).length) {
      const empty = document.createElement('p');
      empty.className = 'instagram-comments-empty';
      empty.textContent = labels.noComments || labels.firstComment || (currentLanguage === 'ko' ? '아직 댓글이 없어요.' : currentLanguage === 'zh-Hant' ? '還沒有留言。' : 'No comments yet.');
      list.append(empty);
    }
    const form = document.createElement('form');
    form.className = 'instagram-comment-form';
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 500;
    input.placeholder = currentLanguage === 'ko' ? '댓글 달기…' : currentLanguage === 'zh-Hant' ? '新增留言⋯' : 'Add a comment…';
    input.setAttribute('aria-label', input.placeholder);
    const send = document.createElement('button');
    send.type = 'submit';
    send.textContent = labels.postComment || (currentLanguage === 'ko' ? '게시' : currentLanguage === 'zh-Hant' ? '發佈' : 'Post');
    form.append(input, send);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const value = input.value.trim();
      if (!value) return;
      (sessionComments[post.id] ||= []).push(value);
      appendComment(user, value);
      input.value = '';
      list.scrollTop = list.scrollHeight;
    });
    sheet.append(toolbar, list, form);
    modal.append(sheet);
    modal.addEventListener('click', (event) => { if (event.target === modal) modal.remove(); });
    app.append(modal);
    input.focus();
  };
  const createPostEngagement = (post, seededComment) => {
    const block = document.createElement('div');
    block.className = 'instagram-engagement-block';
    const actions = document.createElement('div');
    actions.className = 'instagram-post-actions';
    const like = iconButton('heart', currentLanguage === 'ko' ? '좋아요' : currentLanguage === 'zh-Hant' ? '讚' : 'Like');
    const paintLike = () => {
      const liked = isPostLiked(post);
      like.classList.toggle('is-liked', liked);
      like.setAttribute('aria-pressed', String(liked));
      like.setAttribute('aria-label', liked ? (currentLanguage === 'ko' ? '좋아요 취소' : currentLanguage === 'zh-Hant' ? '收回讚' : 'Unlike') : (currentLanguage === 'ko' ? '좋아요' : currentLanguage === 'zh-Hant' ? '讚' : 'Like'));
      count.textContent = `${5 + (liked ? 0 : -1)} ${currentLanguage === 'ko' ? '명' : currentLanguage === 'zh-Hant' ? '個讚' : 'likes'}`;
    };
    like.addEventListener('click', () => { data.likedPosts[post.id] = !isPostLiked(post); persist(); paintLike(); });
    const comments = iconButton('comment', currentLanguage === 'ko' ? '댓글 보기' : currentLanguage === 'zh-Hant' ? '查看留言' : 'View comments');
    comments.addEventListener('click', () => openComments(post, seededComment));
    const share = iconButton('share', labels.share);
    const save = iconButton('bookmark', currentLanguage === 'ko' ? '저장' : currentLanguage === 'zh-Hant' ? '儲存' : 'Save', 'instagram-post-save');
    const paintSaved = () => {
      const saved = data.savedPosts.includes(post.id);
      save.classList.toggle('is-saved', saved);
      save.setAttribute('aria-pressed', String(saved));
      save.setAttribute('aria-label', saved ? (currentLanguage === 'ko' ? '저장 취소' : currentLanguage === 'zh-Hant' ? '取消儲存' : 'Remove saved post') : (currentLanguage === 'ko' ? '저장' : currentLanguage === 'zh-Hant' ? '儲存' : 'Save'));
    };
    save.addEventListener('click', () => {
      data.savedPosts = data.savedPosts.includes(post.id) ? data.savedPosts.filter((id) => id !== post.id) : [...data.savedPosts, post.id];
      persist();
      paintSaved();
    });
    actions.append(like, comments, share, save);
    const count = document.createElement('strong');
    count.className = 'instagram-like-count';
    paintLike();
    paintSaved();
    block.append(actions, count);
    return block;
  };
  const openPhotoComposer = (kind) => {
    closeModal();
    const modal = document.createElement('div');
    modal.className = 'instagram-modal';
    const sheet = document.createElement('form');
    sheet.className = 'instagram-composer';
    const title = document.createElement('h2');
    title.textContent = kind === 'story' ? labels.storyAdd : labels.postNew;
    let selectedPhoto = null;
    const pickerButton = createButton(labels.choosePhoto, null, 'instagram-library-open');
    const selectedPreview = document.createElement('div');
    selectedPreview.className = 'instagram-selected-photo';
    selectedPreview.textContent = currentLanguage === 'ko' ? '사진을 선택해 주세요.' : currentLanguage === 'zh-Hant' ? '請選擇一張照片。' : 'Choose a photo from your library.';
    const photoGrid = document.createElement('div');
    photoGrid.className = 'instagram-photo-picker-grid instagram-composer-photo-grid';
    photoGrid.hidden = true;
    const libraryItems = [...PHOTO_LIBRARY].filter((item) => item.type === 'photo').sort((a, b) => b.sortKey.localeCompare(a.sortKey) || b.index - a.index);
    libraryItems.forEach((item) => {
      const tile = document.createElement('button');
      tile.type = 'button';
      tile.className = 'instagram-photo-picker-item';
      tile.setAttribute('aria-label', item.caption || labels.choosePhoto);
      const image = document.createElement('img');
      image.src = photoAssetPath(item.file);
      image.alt = '';
      tile.append(image);
      tile.addEventListener('click', () => {
        selectedPhoto = item;
        selectedPreview.replaceChildren();
        const preview = document.createElement('img'); preview.src = photoAssetPath(item.file); preview.alt = item.caption || labels.postAlt;
        const detail = document.createElement('span'); detail.textContent = item.caption || labels.choosePhoto;
        selectedPreview.append(preview, detail);
        photoGrid.hidden = true;
        pickerButton.textContent = labels.changePhoto || labels.choosePhoto;
        share.disabled = false;
      });
      photoGrid.append(tile);
    });
    pickerButton.addEventListener('click', () => { photoGrid.hidden = !photoGrid.hidden; });
    const caption = document.createElement('textarea');
    caption.placeholder = kind === 'story' ? labels.storyCaption : labels.postCaption;
    caption.setAttribute('aria-label', labels.caption);
    const actions = document.createElement('div');
    actions.className = 'instagram-composer-actions';
    actions.append(createButton(labels.cancel, closeModal));
    const share = document.createElement('button');
    share.type = 'submit';
    share.textContent = kind === 'story' ? labels.shareStory : labels.share;
    actions.append(share);
    share.disabled = true;
    sheet.append(title, pickerButton, selectedPreview, photoGrid, caption, actions);
    sheet.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!selectedPhoto) return;
      const image = photoAssetPath(selectedPhoto.file);
      const item = { id: `ig-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, image, images: [image], caption: caption.value.trim(), createdAt: Date.now(), date: new Date().toISOString().slice(0, 10) };
      if (kind === 'story') data.stories.unshift(item);
      else data.posts.unshift(item);
      persist();
      closeModal();
      activeTab = kind === 'story' ? 'home' : 'profile';
      selectedProfile = 'jung';
      render();
    });
    modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
    modal.append(sheet);
    app.append(modal);
  };
  const openStory = (storyOrStories, owner = user) => {
    const stories = Array.isArray(storyOrStories) ? storyOrStories : [storyOrStories];
    let storyIndex = 0;
    closeModal();
    const modal = document.createElement('div');
    modal.className = 'instagram-modal instagram-story-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', labels.storyAlt);
    const card = document.createElement('article');
    card.className = 'instagram-story-viewer';
    const close = createButton('×', closeModal, 'instagram-story-close');
    close.setAttribute('aria-label', copy().close);
    const progress = document.createElement('div'); progress.className = 'instagram-story-progress';
    const progressSegments = stories.map(() => { const segment = document.createElement('span'); progress.append(segment); return segment; });
    const ownerLine = document.createElement('div'); ownerLine.className = 'instagram-story-owner';
    ownerLine.append(avatar(owner, '', owner.id === 'jung' ? data.avatar : ''));
    const ownerName = document.createElement('strong'); ownerName.textContent = instagramAccounts[owner.id]?.id || owner.name;
    ownerLine.append(ownerName);
    const image = document.createElement('img');
    image.alt = labels.storyAlt;
    const caption = document.createElement('p');
    caption.className = 'instagram-story-caption';
    const previous = createButton('', () => showStory(storyIndex - 1), 'instagram-story-nav is-previous');
    previous.setAttribute('aria-label', currentLanguage === 'ko' ? '이전 스토리' : currentLanguage === 'zh-Hant' ? '上一則限時動態' : 'Previous story');
    const next = createButton('', () => showStory(storyIndex + 1), 'instagram-story-nav is-next');
    next.setAttribute('aria-label', currentLanguage === 'ko' ? '다음 스토리' : currentLanguage === 'zh-Hant' ? '下一則限時動態' : 'Next story');
    function showStory(index) {
      if (index < 0) { modal.remove(); return; }
      if (index >= stories.length) { modal.remove(); return; }
      storyIndex = index;
      const story = stories[storyIndex];
      image.src = story.image;
      caption.textContent = story.caption || '';
      caption.hidden = !story.caption;
      progressSegments.forEach((segment, position) => segment.classList.toggle('is-current-or-seen', position <= storyIndex));
      previous.hidden = storyIndex === 0;
      next.hidden = stories.length < 2;
    }
    showStory(0);
    card.append(image, previous, next, progress, ownerLine, close, caption);
    modal.append(card);
    modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
    app.append(modal);
  };
  const renderHome = () => {
    const stories = document.createElement('div');
    stories.className = 'instagram-stories';
    const ownStories = [...(memberStories.sungchan || []), ...data.stories];
    const ownStory = ownStories[0];
    const ownStoryButton = document.createElement('button');
    ownStoryButton.type = 'button';
    ownStoryButton.className = 'instagram-story-item';
    ownStoryButton.append(avatar(user, `instagram-story-avatar${ownStory ? ' has-story' : ''}`, data.avatar));
    const ownName = document.createElement('span');
    ownName.textContent = labels.yourStory;
    ownStoryButton.append(ownName);
    ownStoryButton.addEventListener('click', () => ownStory ? openStory(ownStories, user) : openPhotoComposer('story'));
    stories.append(ownStoryButton);
    people.forEach((person) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'instagram-story-item';
      const hasStories = Boolean(memberStories[person.id]?.length);
      item.append(avatar(person, `instagram-story-avatar${hasStories ? ' has-story' : ' instagram-story-muted'}`));
      const name = document.createElement('span');
      name.textContent = instagramDisplayName(person);
      item.append(name);
      item.addEventListener('click', () => hasStories ? openStory(memberStories[person.id], person) : showProfile(person.id));
      stories.append(item);
    });
    page.append(stories);
    const feedPosts = [
      ...Object.values(memberPosts).flat(),
      ...data.posts.map((post) => ({ ...post, authorId: 'jung', images: post.images || [post.image], date: post.date || (post.createdAt ? new Date(post.createdAt).toISOString().slice(0, 10) : '') })),
    ].sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
    if (!feedPosts.length) {
      const empty = document.createElement('section');
      empty.className = 'instagram-empty-feed';
      empty.append(avatar(user, 'instagram-empty-avatar', data.avatar));
      const heading = document.createElement('h2');
      heading.textContent = labels.feedReady;
      const copy = document.createElement('p');
      copy.textContent = `${labels.firstPost} ${labels.photosLater}`;
      empty.append(heading, copy, createButton(labels.create, () => openPhotoComposer('post'), 'instagram-primary-button'));
      page.append(empty);
      return;
    }
    feedPosts.forEach((post) => {
      const article = document.createElement('article');
      article.className = 'instagram-post';
      const postUser = personFor(post.authorId || 'jung');
      const postHandle = instagramAccounts[postUser.id]?.id || postUser.id;
      const postHead = document.createElement('button');
      postHead.type = 'button';
      postHead.className = 'instagram-post-owner';
      postHead.append(avatar(postUser, '', postUser.id === 'jung' ? data.avatar : ''));
      const name = document.createElement('strong');
      name.textContent = postHandle;
      postHead.append(name);
      postHead.addEventListener('click', () => showProfile(postUser.id));
      const images = Array.isArray(post.images) && post.images.length ? post.images : post.image ? [post.image] : [];
      const image = document.createElement('img');
      image.className = 'instagram-post-image';
      image.src = images[0] || '';
      const rawCaption = typeof post.caption === 'object' ? (post.caption[currentLanguage] || post.caption.ko || '') : post.caption;
      image.alt = rawCaption || `${instagramDisplayName(postUser)} ${labels.postAlt}`;
      image.addEventListener('click', () => openPostViewer(post, feedPosts, feedPosts.indexOf(post)));
      if (images.length > 1) {
        let imageIndex = 0;
        const carousel = document.createElement('div'); carousel.className = 'instagram-carousel';
        const count = document.createElement('span'); count.className = 'instagram-carousel-count';
        const updateCarousel = () => { image.src = images[imageIndex]; count.textContent = `${imageIndex + 1}/${images.length}`; };
        const previous = document.createElement('button'); previous.type = 'button'; previous.className = 'instagram-carousel-control is-previous'; previous.textContent = '‹'; previous.setAttribute('aria-label', currentLanguage === 'ko' ? '이전 사진' : currentLanguage === 'zh-Hant' ? '上一張照片' : 'Previous photo');
        const next = document.createElement('button'); next.type = 'button'; next.className = 'instagram-carousel-control is-next'; next.textContent = '›'; next.setAttribute('aria-label', currentLanguage === 'ko' ? '다음 사진' : currentLanguage === 'zh-Hant' ? '下一張照片' : 'Next photo');
        previous.addEventListener('click', () => { imageIndex = (imageIndex - 1 + images.length) % images.length; updateCarousel(); });
        next.addEventListener('click', () => { imageIndex = (imageIndex + 1) % images.length; updateCarousel(); });
        updateCarousel(); carousel.append(image, previous, next, count); article.append(postHead, carousel);
      } else article.append(postHead, image);
      const commentOwnerId = post.authorId === 'jung' ? 'sungchan' : post.authorId;
      const ownerPostIndex = (memberPosts[commentOwnerId] || []).findIndex((entry) => entry.id === post.id);
      const seededComment = memberCommentBank[commentOwnerId]?.[ownerPostIndex];
      const postActions = createPostEngagement(post, seededComment);
      const captionLine = document.createElement('p');
      captionLine.innerHTML = '';
      const captionOwner = document.createElement('strong');
      captionOwner.textContent = postHandle;
      captionLine.append(captionOwner, document.createTextNode(rawCaption ? ` ${rawCaption}` : ''));
      article.append(postActions, captionLine);
      if (seededComment) {
        const comment = document.createElement('p'); comment.className = 'instagram-seeded-comment';
        const commenter = document.createElement('strong'); commenter.textContent = instagramDisplayName(personFor(seededComment.by));
        const commentText = seededComment.text[currentLanguage] || seededComment.text.ko || seededComment.text.en;
        comment.append(commenter, document.createTextNode(` ${commentText}`));
        article.append(comment);
      }
      if (post.date) {
        const date = document.createElement('time'); date.className = 'instagram-post-date'; date.dateTime = post.date;
        date.textContent = new Intl.DateTimeFormat(currentLanguage === 'ko' ? 'ko-KR' : currentLanguage === 'zh-Hant' ? 'zh-Hant' : 'en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${post.date}T12:00:00Z`));
        article.append(date);
      }
      page.append(article);
    });
  };
  const renderProfile = () => {
    const person = personFor(selectedProfile);
    const own = person.id === 'jung';
    const profile = document.createElement('section');
    profile.className = 'instagram-profile';
    const summary = document.createElement('div');
    summary.className = 'instagram-profile-summary';
    const avatarBlock = document.createElement('div');
    avatarBlock.className = 'instagram-profile-avatar-block';
    const profilePhoto = avatar(person, 'instagram-profile-avatar', own ? data.avatar : '');
    avatarBlock.append(profilePhoto);
    if (own) {
      const displayName = document.createElement('strong');
      displayName.className = 'instagram-profile-display-name';
      displayName.textContent = '정성찬성찬';
      avatarBlock.append(displayName);
    }
    summary.append(avatarBlock);
    const stats = document.createElement('div');
    stats.className = 'instagram-profile-stats';
    const postCount = own ? (memberPosts.sungchan.length + data.posts.length) : (memberPosts[selectedProfile]?.length || 0);
      [[postCount, labels.posts, () => {}], ['5', labels.followers, () => showPeopleList('followers')], ['5', labels.following, () => showPeopleList('following')]].forEach(([value, label, handler]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'instagram-stat';
      const count = document.createElement('strong'); count.textContent = value;
      const name = document.createElement('span'); name.textContent = label;
      button.append(count, name);
      button.addEventListener('click', handler);
      stats.append(button);
    });
    summary.append(stats);
    if (own) {
      const change = document.createElement('button');
      change.type = 'button';
      change.className = 'instagram-avatar-change';
      change.textContent = labels.changePhoto;
      change.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'instagram-modal instagram-photo-picker-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-label', labels.chooseProfilePhoto);
        const sheet = document.createElement('section');
        sheet.className = 'instagram-photo-picker';
        const toolbar = document.createElement('header');
        const cancel = document.createElement('button');
        cancel.type = 'button'; cancel.textContent = labels.cancel; cancel.addEventListener('click', closeModal);
        const title = document.createElement('strong'); title.textContent = labels.chooseProfilePhoto;
        toolbar.append(cancel, title);
        const grid = document.createElement('div'); grid.className = 'instagram-photo-picker-grid';
        [...PHOTO_LIBRARY].filter((item) => item.type === 'photo').sort((a, b) => b.sortKey.localeCompare(a.sortKey) || b.index - a.index).forEach((item) => {
          const tile = document.createElement('button'); tile.type = 'button'; tile.className = 'instagram-photo-picker-item';
          tile.setAttribute('aria-label', item.caption || labels.choosePhoto);
          const image = document.createElement('img'); image.src = photoAssetPath(item.file); image.alt = '';
          tile.append(image);
          tile.addEventListener('click', () => { data.avatar = photoAssetPath(item.file); persist(); closeModal(); render(); });
          grid.append(tile);
        });
        sheet.append(toolbar, grid); modal.append(sheet); app.append(modal);
      });
      profile.append(change);
    }
    const identity = document.createElement('div');
    identity.className = 'instagram-profile-identity';
    const handle = document.createElement('strong'); handle.textContent = instagramAccounts[person.id]?.username || instagramDisplayName(person);
    identity.append(handle);
    if (own) profile.prepend(summary);
    else profile.prepend(summary, identity);
    if (!own) {
      const actions = document.createElement('div'); actions.className = 'instagram-profile-actions';
      actions.append(createButton(labels.followButton, () => {}, 'instagram-following-button'));
      actions.append(createButton(labels.message, () => { chatReturn = { tab: 'profile', profile: person.id }; activeTab = 'message'; activeChat = person.id; render(); }, 'instagram-secondary-button'));
      profile.append(actions);
    }
    const gridTitle = document.createElement('h2'); gridTitle.className = 'instagram-grid-title'; gridTitle.textContent = labels.posts;
    profile.append(gridTitle);
    const grid = document.createElement('div'); grid.className = 'instagram-post-grid';
    const profilePosts = (own ? [...memberPosts.sungchan, ...data.posts.map((post) => ({ ...post, images: post.images || [post.image] }))] : (memberPosts[selectedProfile] || [])).slice().sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
    profilePosts.forEach((post, index) => {
      const tile = document.createElement('button'); tile.type = 'button'; tile.className = 'instagram-post-tile'; tile.setAttribute('aria-label', typeof post.caption === 'object' ? (post.caption[currentLanguage] || post.caption.ko || labels.postAlt) : (post.caption || labels.postAlt));
      const image = document.createElement('img'); image.src = post.images?.[0] || post.image || ''; image.alt = '';
      tile.append(image); tile.addEventListener('click', () => openPostViewer(post, profilePosts, index)); grid.append(tile);
    });
    if (!profilePosts.length) {
      const empty = document.createElement('div'); empty.className = 'instagram-profile-empty';
      const camera = document.createElement('span'); camera.textContent = '▧';
      const message = document.createElement('p'); message.textContent = own ? labels.noPosts : labels.postsLater;
      empty.append(camera, message);
      profile.append(empty);
    } else profile.append(grid);
    page.append(profile);
  };
  const openPostViewer = (post, profilePosts, startIndex) => {
    let imageIndex = 0;
    const images = post.images?.length ? post.images : post.image ? [post.image] : [];
    const person = personFor(post.authorId || selectedProfile);
    const captionText = typeof post.caption === 'object' ? (post.caption[currentLanguage] || post.caption.ko || post.caption.en || '') : (post.caption || '');
    const modal = document.createElement('div'); modal.className = 'instagram-modal instagram-post-viewer-modal'; modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-label', labels.posts);
    const card = document.createElement('article'); card.className = 'instagram-post-viewer';
    const header = document.createElement('header'); header.className = 'instagram-post-viewer-header';
    const close = document.createElement('button'); close.type = 'button'; close.className = 'instagram-post-viewer-close'; close.textContent = '‹'; close.setAttribute('aria-label', copy().close); close.addEventListener('click', () => modal.remove());
    header.append(close, avatar(person, 'instagram-post-viewer-avatar', person.id === 'jung' ? data.avatar : ''));
    const owner = document.createElement('strong'); owner.textContent = instagramAccounts[person.id]?.id || person.id; header.append(owner);
    const media = document.createElement('div'); media.className = 'instagram-post-viewer-media';
    const image = document.createElement('img'); image.alt = captionText || labels.postAlt; media.append(image);
    let counter = null;
    const updateImage = () => { image.src = images[imageIndex] || ''; image.alt = captionText || labels.postAlt; if (counter) counter.textContent = `${imageIndex + 1}/${images.length}`; };
    if (images.length > 1) {
      const previous = document.createElement('button'); previous.type = 'button'; previous.className = 'instagram-carousel-control is-previous'; previous.textContent = '‹'; previous.setAttribute('aria-label', currentLanguage === 'ko' ? '이전 사진' : currentLanguage === 'zh-Hant' ? '上一張照片' : 'Previous photo');
      const next = document.createElement('button'); next.type = 'button'; next.className = 'instagram-carousel-control is-next'; next.textContent = '›'; next.setAttribute('aria-label', currentLanguage === 'ko' ? '다음 사진' : currentLanguage === 'zh-Hant' ? '下一張照片' : 'Next photo');
      counter = document.createElement('span'); counter.className = 'instagram-carousel-count';
      previous.addEventListener('click', () => { imageIndex = (imageIndex - 1 + images.length) % images.length; updateImage(); });
      next.addEventListener('click', () => { imageIndex = (imageIndex + 1) % images.length; updateImage(); });
      media.append(previous, next, counter);
      updateImage();
    } else updateImage();
    const details = document.createElement('div'); details.className = 'instagram-post-viewer-details';
    const authorKey = post.authorId === 'jung' ? 'sungchan' : post.authorId;
    const postIndex = (memberPosts[authorKey] || []).findIndex((entry) => entry.id === post.id);
    const comment = memberCommentBank[authorKey]?.[postIndex];
    const actions = createPostEngagement(post, comment);
    const caption = document.createElement('p'); caption.className = 'instagram-post-viewer-caption'; const captionOwner = document.createElement('strong'); captionOwner.textContent = person.id === 'jung' ? '정성찬성찬' : instagramDisplayName(person); caption.append(captionOwner, document.createTextNode(captionText ? ` ${captionText}` : ''));
    details.append(actions, caption);
    if (comment) { const line = document.createElement('p'); line.className = 'instagram-post-viewer-comment'; const commenter = document.createElement('strong'); commenter.textContent = instagramDisplayName(personFor(comment.by)); line.append(commenter, document.createTextNode(` ${comment.text[currentLanguage] || comment.text.ko || comment.text.en}`)); details.append(line); }
    if (post.date) { const date = document.createElement('time'); date.className = 'instagram-post-viewer-date'; date.dateTime = post.date; date.textContent = new Intl.DateTimeFormat(currentLanguage === 'ko' ? 'ko-KR' : currentLanguage === 'zh-Hant' ? 'zh-Hant' : 'en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${post.date}T12:00:00Z`)); details.append(date); }
    card.append(header, media, details); modal.append(card);
    modal.addEventListener('click', (event) => { if (event.target === modal) modal.remove(); });
    app.append(modal);
  };
  let peopleListMode = null;
  const showPeopleList = (title) => {
    peopleListMode = title;
    activeTab = 'search';
    render();
  };
  const renderSearch = () => {
    const heading = document.createElement('h2'); heading.className = 'instagram-page-title'; heading.textContent = peopleListMode === 'followers' ? labels.followers : peopleListMode === 'following' ? labels.following : labels.search;
    if (peopleListMode) {
      const back = createButton('‹', () => { peopleListMode = null; activeTab = 'profile'; render(); }, 'instagram-list-back');
      back.setAttribute('aria-label', currentLanguage === 'ko' ? '뒤로' : currentLanguage === 'zh-Hant' ? '返回' : 'Back');
      page.append(back);
    }
    const input = document.createElement('input'); input.className = 'instagram-search-input'; input.placeholder = labels.searchPeople; input.setAttribute('aria-label', labels.searchProfiles);
    const list = document.createElement('div'); list.className = 'instagram-contact-list';
    const allPeople = [user, ...people];
    const paint = () => {
      list.replaceChildren();
      const query = input.value.trim().toLowerCase();
      allPeople.filter((person) => (!peopleListMode || person.id !== selectedProfile) && `${person.name} ${instagramDisplayName(person)} ${instagramAccounts[person.id]?.id || ''} ${instagramAccounts[person.id]?.username || ''}`.toLowerCase().includes(query)).forEach((person) => {
        const row = document.createElement('button'); row.type = 'button'; row.className = 'instagram-contact-row';
        row.append(avatar(person, '', person.id === 'jung' ? data.avatar : ''));
        const label = document.createElement('span'); label.className = 'instagram-contact-copy';
        const strong = document.createElement('strong'); strong.textContent = instagramDisplayName(person);
        label.append(strong); row.append(label);
        row.addEventListener('click', () => showProfile(person.id));
        list.append(row);
      });
    };
    input.addEventListener('input', paint); paint();
    page.append(heading, input, list);
  };
  const renderMessages = () => {
    if (activeChat) {
      const person = personFor(activeChat);
      const chatHead = document.createElement('div'); chatHead.className = 'instagram-chat-head';
      const back = createButton('‹', chatBack, 'instagram-chat-back'); back.setAttribute('aria-label', currentLanguage === 'ko' ? '뒤로' : currentLanguage === 'zh-Hant' ? '返回' : 'Back');
      chatHead.append(back);
      chatHead.append(avatar(person));
      const name = document.createElement('button'); name.type = 'button'; name.className = 'instagram-chat-profile'; name.textContent = instagramDisplayName(person); name.addEventListener('click', () => showProfile(person.id));
      const titleBlock = document.createElement('div'); titleBlock.className = 'instagram-chat-title-block';
      const roomStatus = document.createElement('small'); roomStatus.textContent = currentLanguage === 'ko' ? '1:1 채팅' : currentLanguage === 'zh-Hant' ? '一對一聊天' : '1:1 chat';
      titleBlock.append(name, roomStatus);
      const roomActions = document.createElement('div'); roomActions.className = 'instagram-chat-actions';
      const search = createButton('⌕', () => {}, 'instagram-chat-action'); search.setAttribute('aria-label', currentLanguage === 'ko' ? '검색' : currentLanguage === 'zh-Hant' ? '搜尋' : 'Search');
      const info = createButton('☰', () => {}, 'instagram-chat-action'); info.setAttribute('aria-label', currentLanguage === 'ko' ? '채팅방 정보' : currentLanguage === 'zh-Hant' ? '聊天室資訊' : 'Chat info');
      roomActions.append(search, info);
      chatHead.append(titleBlock, roomActions); page.append(chatHead);
      const thread = document.createElement('div'); thread.className = 'instagram-message-thread';
      // Instagram conversations are text-only here; ignore legacy media-only records.
      const messages = (data.messages[person.id] || []).filter((message) =>
        typeof message === 'string' || (message && typeof message === 'object' && message.text && ['string', 'object'].includes(typeof message.text))
      );
      let previousMessageDate = '';
      messages.forEach((message, index) => {
        if (message && typeof message === 'object' && message.date && message.date !== previousMessageDate) {
          const day = document.createElement('span'); day.className = 'instagram-message-day'; day.textContent = formatKakaoDay(message.date); thread.append(day);
          previousMessageDate = message.date;
        }
        const from = (message && typeof message === 'object' && message.from) || (index % 2 ? 'contact' : 'me');
        const text = message && typeof message === 'object' && 'text' in message ? localizedChatText(message.text) : localizedChatText(message);
        const line = document.createElement('div'); line.className = `instagram-message-line ${from === 'me' ? 'from-me' : 'from-contact'}`;
        if (from !== 'me') line.append(avatar(person, 'instagram-message-avatar'));
        const content = document.createElement('span'); content.className = 'instagram-message-content';
        const bubble = document.createElement('p'); bubble.className = 'instagram-message-bubble'; bubble.textContent = text; content.append(bubble); line.append(content);
        if (message && typeof message === 'object' && message.time) { const time = document.createElement('small'); time.className = 'instagram-message-time'; time.textContent = message.date ? formatKakaoTime(message.date, message.time) : message.time; line.append(time); }
        thread.append(line);
      });
      const form = document.createElement('div'); form.className = 'instagram-message-form'; form.setAttribute('aria-label', labels.message);
      const field = document.createElement('input'); field.type = 'text'; field.autocomplete = 'off'; field.readOnly = true; field.disabled = true; field.placeholder = labels.messagePlaceholder; field.setAttribute('aria-label', labels.message);
      const send = document.createElement('button'); send.type = 'button'; send.disabled = true; send.textContent = labels.send;
      form.append(field, send);
      page.append(thread, form);
      thread.scrollTop = thread.scrollHeight;
      return;
    }
    const heading = document.createElement('h2'); heading.className = 'instagram-page-title'; heading.textContent = labels.messages; page.append(heading);
    people.forEach((person) => {
      const row = document.createElement('button'); row.type = 'button'; row.className = 'instagram-contact-row'; row.append(avatar(person));
      const label = document.createElement('span'); label.className = 'instagram-contact-copy';
      const name = document.createElement('strong'); name.textContent = instagramDisplayName(person);
      const last = document.createElement('small'); const messages = data.messages[person.id] || []; const latest = messages.at(-1); last.textContent = latest ? localizedChatText(latest && typeof latest === 'object' && 'text' in latest ? latest.text : latest) : '';
      label.append(name, last); row.append(label); row.addEventListener('click', () => { chatReturn = { tab: 'message', profile: selectedProfile }; activeChat = person.id; render(); }); page.append(row);
    });
  };
  const render = () => {
    page.replaceChildren();
    header.replaceChildren();
    if (activeTab === 'profile') {
      const back = createButton('‹', returnFromProfile, 'instagram-profile-back');
      back.setAttribute('aria-label', currentLanguage === 'ko' ? '뒤로' : currentLanguage === 'zh-Hant' ? '返回' : 'Back');
      header.append(back, brand);
    } else header.append(brand);
    brand.textContent = activeTab === 'message' && activeChat ? instagramDisplayName(personFor(activeChat)) : 'Instagram';
    if (activeTab === 'home') header.append(instagramActions);
    header.classList.toggle('instagram-profile-topbar', activeTab === 'profile');
    if (activeTab === 'profile') brand.textContent = instagramAccounts[selectedProfile]?.id || user.handle;
    header.classList.toggle('instagram-header-hidden', activeTab === 'message' || activeTab === 'search');
    if (activeTab === 'home') renderHome();
    else if (activeTab === 'message') renderMessages();
    else if (activeTab === 'search') renderSearch();
    else renderProfile();
    nav.replaceChildren();
    nav.classList.toggle('instagram-chat-tabbar-hidden', activeTab === 'message' && Boolean(activeChat));
    navItems.forEach(([key, label, path]) => {
      const button = document.createElement('button'); button.type = 'button'; button.className = `instagram-tab${activeTab === key ? ' selected' : ''}`; button.setAttribute('aria-label', label); button.setAttribute('aria-current', String(activeTab === key));
      const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); icon.setAttribute('viewBox', '0 0 24 24'); icon.setAttribute('aria-hidden', 'true'); icon.style.setProperty('stroke', '#000'); icon.style.setProperty('color', '#000'); icon.innerHTML = path;
      const text = document.createElement('span'); text.textContent = label;
      button.append(icon, text);
      button.addEventListener('click', () => {
        activeTab = key;
        activeChat = null;
        if (key === 'profile') {
          selectedProfile = 'jung';
          profileReturn = { tab: 'home', chat: null, profile: 'jung', peopleListMode: null };
        }
        if (key === 'search') peopleListMode = null;
        render();
      });
      nav.append(button);
    });
  };
  postButton.addEventListener('click', () => openPhotoComposer('post'));
  app.append(header, page, nav);
  content.append(app);
  render();
}

const PHONE_CONTACT_DATA = [
    { name: 'Shortaro', number: '+82 20001125', birthday: 'November 25' },
    { name: 'Song Eunseok', number: '+82 20010319', birthday: 'March 19' },
    { name: 'Park Wonbin', number: '+82 20020302', birthday: 'March 2' },
    { name: 'Lee Sohee', number: '+82 20031121', birthday: 'November 21' },
    { name: 'Anton Lee', number: '+82 20040321', birthday: 'March 21' },
    { name: 'Dad', number: '+82 10 4837 2619' },
    { name: 'Mum', number: '+82 10 7264 8531' },
    { name: 'Brother', number: '+82 10 3951 7428' },
    { name: 'Manager', number: '+82 10 6183 4927' },
  ];

function phoneContactName(contact) {
  const translations = {
    'zh-Hant': { 'Jung Sungchan': '鄭成燦', Shortaro: '將太郎', 'Song Eunseok': '宋恩奭', 'Park Wonbin': '朴元彬', 'Lee Sohee': '李炤熙', 'Anton Lee': '李燦榮', Dad: '爸爸', Mum: '媽媽', Brother: '哥哥', Manager: '經紀人' },
    ko: { 'Jung Sungchan': '정성찬', Shortaro: '쇼타로', 'Song Eunseok': '송은석', 'Park Wonbin': '박원빈', 'Lee Sohee': '이소희', 'Anton Lee': '앤톤', Dad: '아빠', Mum: '엄마', Brother: '형', Manager: '매니저' },
  };
  return translations[currentLanguage]?.[contact.name] || contact.name;
}

function appendPhoneApp(content) {
  const labels = appCopy('phone');
  const contacts = PHONE_CONTACT_DATA;
  const root = document.createElement('section');
  root.className = 'phone-app';
  const page = document.createElement('main');
  page.className = 'phone-app-page';
  const nav = document.createElement('nav');
  nav.className = 'phone-app-tabbar';
  nav.setAttribute('aria-label', labels.nav);
  let activeTab = 'Contacts';
  let selectedContact = null;
  const setTab = (tab) => { activeTab = tab; selectedContact = null; render(); };
  const showContact = (contact) => { selectedContact = contact; render(); };
  const startCall = (contact) => {
    page.replaceChildren();
    const call = document.createElement('section');
    call.className = 'phone-call-screen';
    const avatar = document.createElement('div'); avatar.className = 'phone-contact-avatar'; avatar.textContent = phoneContactName(contact).split(/\s+/).map((part) => part[0]).join('').slice(0,2);
    const name = document.createElement('strong'); name.textContent = phoneContactName(contact);
    const number = document.createElement('span'); number.textContent = labels.calling.replace('{name}', phoneContactName(contact));
    const hangup = document.createElement('button'); hangup.type = 'button'; hangup.className = 'phone-hangup'; hangup.textContent = labels.endCall; hangup.addEventListener('click', () => showContact(contact));
    call.append(avatar, name, number, hangup); page.append(call);
  };
  const render = () => {
    page.replaceChildren();
    if (selectedContact) {
      const detail = document.createElement('section'); detail.className = 'phone-contact-detail';
      const avatar = document.createElement('div'); avatar.className = 'phone-contact-avatar'; avatar.textContent = phoneContactName(selectedContact).split(/\s+/).map((part) => part[0]).join('').slice(0,2);
      const name = document.createElement('h2'); name.textContent = phoneContactName(selectedContact);
      const number = document.createElement('p'); number.textContent = selectedContact.number;
      const call = document.createElement('button'); call.type = 'button'; call.className = 'phone-contact-call'; call.textContent = labels.call; call.addEventListener('click', (event) => { event.preventDefault(); startCall(selectedContact); });
      detail.append(avatar, name, number, call);
      if (selectedContact.birthday) { const birthday = document.createElement('p'); birthday.className = 'phone-contact-birthday'; birthday.textContent = labels.birthday.replace('{date}', selectedContact.birthday); detail.append(birthday); }
      page.append(detail);
    } else if (activeTab === 'Contacts') {
      const heading = document.createElement('h2'); heading.className = 'phone-app-heading'; heading.textContent = labels.contacts; page.append(heading);
      const search = document.createElement('input'); search.className = 'phone-contact-search'; search.type = 'search'; search.placeholder = labels.search; search.setAttribute('aria-label', labels.searchContacts); page.append(search);
      const list = document.createElement('div'); list.className = 'phone-contact-list';
      const renderList = () => {
        list.replaceChildren();
        const term = search.value.trim().toLowerCase();
        contacts.filter((contact) => `${contact.name} ${phoneContactName(contact)}`.toLowerCase().includes(term)).forEach((contact) => {
          const row = document.createElement('button'); row.type = 'button'; row.className = 'phone-contact-row';
          const avatar = document.createElement('span'); avatar.className = 'phone-contact-avatar-small'; avatar.textContent = phoneContactName(contact).split(/\s+/).map((part) => part[0]).join('').slice(0,2);
          const copy = document.createElement('span'); copy.className = 'phone-contact-row-copy'; const name = document.createElement('strong'); name.textContent = phoneContactName(contact); const number = document.createElement('small'); number.textContent = contact.number; copy.append(name, number);
          const arrow = document.createElement('span'); arrow.className = 'phone-contact-arrow'; arrow.textContent = '›'; row.append(avatar, copy, arrow); row.addEventListener('click', () => showContact(contact)); list.append(row);
        });
      };
      search.addEventListener('input', renderList); renderList(); page.append(list);
    } else if (activeTab === 'Calls') {
      const heading = document.createElement('h2'); heading.className = 'phone-app-heading'; heading.textContent = labels.calls; page.append(heading);
      const list = document.createElement('div'); list.className = 'phone-contact-list';
      contacts.forEach((contact) => { const row = document.createElement('button'); row.type = 'button'; row.className = 'phone-contact-row'; const copy = document.createElement('span'); copy.className = 'phone-contact-row-copy'; const name = document.createElement('strong'); name.textContent = phoneContactName(contact); const number = document.createElement('small'); number.textContent = labels.outgoing.replace('{number}', contact.number); copy.append(name, number); row.append(copy); row.addEventListener('click', () => startCall(contact)); list.append(row); }); page.append(list);
    } else {
      const heading = document.createElement('h2'); heading.className = 'phone-app-heading'; heading.textContent = labels.keypad; page.append(heading);
      const display = document.createElement('output'); display.className = 'phone-keypad-display'; display.setAttribute('aria-live', 'polite'); page.append(display);
      const status = document.createElement('span'); status.className = 'phone-keypad-status'; status.setAttribute('aria-live', 'polite'); page.append(status);
      const keypad = document.createElement('div'); keypad.className = 'phone-keypad';
      ['1','2','3','4','5','6','7','8','9','*','0','#'].forEach((digit) => { const button = document.createElement('button'); button.type = 'button'; button.textContent = digit; button.addEventListener('click', () => { display.value = `${display.value || ''}${digit}`; }); keypad.append(button); });
      const actions = document.createElement('div'); actions.className = 'phone-keypad-actions';
      const call = document.createElement('button'); call.type = 'button'; call.className = 'phone-keypad-call'; call.textContent = labels.call;
      call.addEventListener('click', () => {
        const normalize = (value) => String(value || '').replace(/\D/g, '').replace(/^82/, '').replace(/^0/, '');
        const entered = normalize(display.value);
        const match = contacts.find((contact) => normalize(contact.number) === entered);
        if (match) startCall(match);
        else { status.textContent = labels.noMatch; display.classList.remove('phone-keypad-invalid'); void display.offsetWidth; display.classList.add('phone-keypad-invalid'); }
      });
      const deleteButton = document.createElement('button'); deleteButton.type = 'button'; deleteButton.className = 'phone-keypad-delete'; deleteButton.textContent = '⌫'; deleteButton.setAttribute('aria-label', labels.deleteDigit); deleteButton.title = labels.deleteDigit;
      deleteButton.addEventListener('click', () => { display.value = String(display.value || '').slice(0,-1); status.textContent = ''; display.classList.remove('phone-keypad-invalid'); });
      actions.append(call, deleteButton);
      page.append(keypad, actions);
    }
    nav.replaceChildren();
    [[labels.calls,'◷'],[labels.contacts,'◉'],[labels.keypad,'▦']].forEach(([label, icon], index) => { const keys = ['Calls','Contacts','Keypad']; const key = keys[index]; const button = document.createElement('button'); button.type = 'button'; button.className = `phone-app-tab${activeTab === key ? ' selected' : ''}`; button.innerHTML = `<span aria-hidden="true">${icon}</span><small>${label}</small>`; button.addEventListener('click', () => setTab(key)); nav.append(button); });
  };
  root.append(page, nav); content.append(root); render();
}

function openApp(key) {
  appPanel.querySelectorAll('iframe[src*="youtube.com/embed"], iframe[src*="youtube-nocookie.com/embed"]').forEach((frame) => { frame.src = 'about:blank'; });
  appPanel.querySelector('.reminder-add-button')?.remove();
  appPanel.querySelector('.clock-tabbar')?.remove();
  appPanel.querySelector('.photo-viewer')?.dismiss?.();
  if (clockCleanup) clockCleanup();
  clockCleanup = null;
  appPanel.classList.remove('clock-alarms-view');
  mailInboxReturn = null;
  appPanel.classList.remove('mail-message-open');
  $('#closeApp').textContent = '‹';
  $('#closeApp').setAttribute('aria-label', copy().close);
  const app = [...PHONE_CONFIG.apps, ...PHONE_CONFIG.dock].find((item) => item.type === key);
  let [title, body] = copy().details[key] || [key, copy().defaultApp];
  if (key === 'weather') {
    title = copy().apps.weather;
  }
  currentAppType = key;
  updateAppStatusSurface(key);
  $('#panelTitle').textContent = title;
  const content = $('#panelContent');
  content.replaceChildren();
  appPanel.classList.toggle('weather-open', key === 'weather');
  appPanel.classList.toggle('calendar-open', key === 'calendar');
  appPanel.classList.toggle('clock-open', key === 'clock');
  appPanel.classList.toggle('photos-open', key === 'photos');
  appPanel.classList.toggle('calculator-open', key === 'calculator');
  appPanel.classList.toggle('settings-open', key === 'settings');
  appPanel.classList.toggle('youtube-open', key === 'youtube');
  appPanel.classList.toggle('instagram-open', key === 'instagram');
  appPanel.classList.toggle('phone-open', key === 'phone');
  appPanel.classList.toggle('spotify-open', key === 'spotify');
  appPanel.classList.toggle('naver-open', key === 'naver');
  appPanel.classList.toggle('kakaotalk-open', key === 'kakaotalk');
  screen.classList.toggle('clock-app-open', key === 'clock');
  if (key === 'weather') {
    appendWeatherApp(content);
    const credit = document.createElement('a');
    credit.href = 'https://open-meteo.com/';
    credit.target = '_blank';
    credit.rel = 'noopener noreferrer';
    credit.className = 'weather-credit';
    credit.textContent = copy().weatherCredit;
    content.append(credit);
    appPanel.classList.add('open');
    appPanel.setAttribute('aria-hidden', 'false');
    return;
  }
  if (key === 'calendar') {
    appendCalendarApp(content);
    appPanel.classList.add('open');
    appPanel.setAttribute('aria-hidden', 'false');
    return;
  }
  if (key === 'youtube') {
    appendYouTubeApp(content);
    appPanel.classList.add('open');
    appPanel.setAttribute('aria-hidden', 'false');
    return;
  }
  if (key === 'instagram') {
    appendInstagramApp(content);
    appPanel.classList.add('open');
    appPanel.setAttribute('aria-hidden', 'false');
    return;
  }
  if (key === 'phone') {
    appendPhoneApp(content);
    appPanel.classList.add('phone-open','open');
    appPanel.setAttribute('aria-hidden', 'false');
    return;
  }
  if (key === 'spotify') {
    appendSpotifyApp(content);
    appPanel.classList.add('spotify-open', 'open');
    appPanel.setAttribute('aria-hidden', 'false');
    return;
  }
  if (key === 'naver') {
    appendNaverApp(content);
    appPanel.classList.add('naver-open', 'open');
    appPanel.setAttribute('aria-hidden', 'false');
    return;
  }
  if (key === 'kakaotalk') {
    appendKakaoTalkApp(content);
    appPanel.classList.add('kakaotalk-open', 'open');
    appPanel.setAttribute('aria-hidden', 'false');
    return;
  }
  if (!['reminders', 'mail', 'clock', 'photos', 'calculator', 'settings', 'notes'].includes(key)) {
    const card = document.createElement('article');
    card.className = 'panel-card';
    const icon = document.createElement('div');
    icon.className = 'panel-large-icon';
    icon.style.background = app?.color || 'linear-gradient(145deg,#dadce2,#858a94)';
    if (ICON_ART[key]) icon.innerHTML = ICON_ART[key];
    else icon.textContent = app?.icon || '✦';
    const heading = document.createElement('h2');
    heading.textContent = title;
    const paragraph = document.createElement('p');
    paragraph.style.whiteSpace = 'pre-line';
    paragraph.textContent = body;
    card.append(icon, heading, paragraph);
    content.append(card);
  }
  const controls = document.createElement('section');
  controls.className = 'app-actions';
  const actionCopy = {
    en: { note: 'Write a note…', addNote: 'Add note', noteTitlePlaceholder: 'Note title', noteBodyPlaceholder: 'Write your note…', saveNote: 'Save note', cancelNote: 'Cancel', deleteNote: 'Delete note', search: 'Search the web', go: 'Go', call: 'Call', calling: 'Calling', hangup: 'End Call', newMessage: 'New Message', send: 'Send', play: 'Play', pause: 'Pause', photo: 'Your wallpaper', notifications: 'Notifications', sound: 'Sounds & Haptics', language: 'Language', wallpaper: 'Wallpaper', today: 'Today', important: 'Important', reminderCategory: 'Reminder', addReminder: 'Add reminder', reminderPlaceholder: 'New reminder', openYouTube: 'Open YouTube', openNaver: 'Open Naver', openKakaoTalk: 'Open KakaoTalk', openInstagram: 'Open Instagram' },
    'zh-Hant': { note: '寫下備忘…', addNote: '新增備忘錄', noteTitlePlaceholder: '備忘錄標題', noteBodyPlaceholder: '寫下備忘內容…', saveNote: '儲存備忘錄', cancelNote: '取消', deleteNote: '刪除備忘錄', search: '搜尋網頁', go: '前往', call: '致電', calling: '正在撥打', hangup: '結束通話', newMessage: '新增訊息', send: '傳送', play: '播放', pause: '暫停', photo: '你的桌布', notifications: '通知', sound: '聲音與觸覺', language: '語言', wallpaper: '桌布', today: '今天', important: '重要事項', reminderCategory: '提醒事項', addReminder: '新增提醒事項', reminderPlaceholder: '新增提醒事項', openYouTube: '開啟 YouTube', openNaver: '開啟 Naver', openKakaoTalk: '開啟 KakaoTalk', openInstagram: '開啟 Instagram' },
    ko: { note: '메모 작성…', addNote: '메모 추가', noteTitlePlaceholder: '메모 제목', noteBodyPlaceholder: '메모를 작성하세요…', saveNote: '메모 저장', cancelNote: '취소', deleteNote: '메모 삭제', search: '웹 검색', go: '이동', call: '전화', calling: '전화 거는 중', hangup: '통화 종료', newMessage: '새 메시지', send: '보내기', play: '재생', pause: '일시 정지', photo: '내 배경화면', notifications: '알림', sound: '사운드 및 햅틱', language: '언어', wallpaper: '배경화면', today: '오늘', important: '중요', reminderCategory: '리마인더', addReminder: '미리 알림 추가', reminderPlaceholder: '새로운 미리 알림', openYouTube: 'YouTube 열기', openNaver: '네이버 열기', openKakaoTalk: '카카오톡 열기', openInstagram: 'Instagram 열기' },
  }[currentLanguage];
  const actionButton = (label, handler, className = '') => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `app-action-button ${className}`.trim();
    button.textContent = label;
    button.addEventListener('click', handler);
    return button;
  };
  if (key === 'notes') {
    const noteStorageKey = 'orbit-phone-notes-v2';
    const legacyStarterBodies = [
      'Warm up for 10 minutes. Practice squats, push-ups, and rows with good form. Stretch after training.',
      'Drink water through the day. Build meals around protein, vegetables, and filling carbs. Keep snacks simple.',
      'Start with gentle breathing and vocal warm-ups. Practice pitch slowly, then record a take and listen back.',
      'Stretch first. Mark the choreography slowly, clean up transitions, then run it with the music.',
      'Practice the verse slowly with a metronome. Mark breaths, sharpen consonants, and raise the tempo gradually.',
    ];
    const starterNotes = [
      { title: 'Gym', body: 'Warm up, then hit squats and a few sets with good form. Keep the energy up, cool down after—and check I still have my water bottle this time.' },
      { title: 'Diet', body: 'Practice days need real meals. Get some protein, rice or another good carb, and vegetables; drink water too. No skipping dinner just because the schedule got busy.' },
      { title: 'Singing', body: 'Breathe first, warm up gently, then work through the tricky notes one at a time. Record a take and listen back. If it goes a little wrong, laugh and try again.' },
      { title: 'Dancing', body: 'Mark the moves slowly, then bring the energy up with the music. Clean up the transitions and run it again. Save a little room to have fun on stage.' },
      { title: 'Rapping', body: 'Find the rhythm before speeding up. Mark the breaths, make each consonant clear, then try it with the beat. Keep it relaxed and enjoy the flow.' },
    ];
    const localizedStarterNotes = {
      'zh-Hant': [
        { title: '健身', body: '先暖身，再認真練深蹲和幾組訓練，姿勢要做好。保持精神，最後記得收操——這次也確認一下水壺有沒有帶走。' },
        { title: '飲食', body: '有練習的日子要好好吃飯。補充蛋白質、米飯或其他碳水化合物和蔬菜，也要喝水。別因為行程忙就不吃晚餐。' },
        { title: '唱歌', body: '先調整呼吸、輕輕暖嗓，再一個音一個音練習難的地方。錄下來聽聽看；唱錯一點也沒關係，笑一笑再試一次。' },
        { title: '舞蹈', body: '先慢慢記熟動作，再跟著音樂把能量帶起來。修整動作銜接後再跑一次，也留點空間享受舞台。' },
        { title: '饒舌', body: '先抓穩節奏再加快速度。標記換氣位置、把子音咬清楚，接著跟著節拍練習。放輕鬆，享受律動。' },
      ],
      ko: [
        { title: '운동', body: '먼저 몸을 풀고 스쿼트랑 몇 세트를 자세 신경 써서 하자. 힘내서 운동하고 마무리 스트레칭도 하기. 이번엔 물병도 챙겼는지 확인하자.' },
        { title: '식단', body: '연습하는 날엔 제대로 먹기. 단백질이랑 밥이나 든든한 탄수화물, 채소도 챙기고 물도 마시자. 바쁘다고 저녁 거르지 않기.' },
        { title: '노래 연습', body: '호흡부터 하고 가볍게 목을 풀자. 어려운 음은 하나씩 연습하고 녹음해서 다시 들어 보기. 조금 틀려도 웃고 다시 하면 돼.' },
        { title: '춤 연습', body: '동작을 천천히 익힌 다음 음악에 맞춰 에너지를 올리자. 연결 동작을 다듬고 한 번 더 해 보기. 무대에서 즐길 여유도 남겨 두기.' },
        { title: '랩 연습', body: '속도를 높이기 전에 리듬부터 잡기. 숨 쉴 곳을 표시하고 자음을 또렷하게 한 뒤 비트에 맞춰 연습하자. 편하게, 흐름을 즐기면서.' },
      ],
    };
    let notes = starterNotes.map((note, index) => ({ id: `starter-${index}`, ...note }));
    let migratedStarterNotes = false;
    try {
      const storedNotes = localStorage.getItem(noteStorageKey);
      if (storedNotes !== null) {
        const parsedNotes = JSON.parse(storedNotes);
        if (Array.isArray(parsedNotes)) notes = parsedNotes.filter((note) => note && typeof note.id === 'string' && typeof note.title === 'string' && typeof note.body === 'string');
        notes.forEach((note) => {
          const starterIndex = note.id.startsWith('starter-') ? Number(note.id.slice('starter-'.length)) : -1;
          if (!note.customized && legacyStarterBodies[starterIndex] === note.body) {
            note.body = starterNotes[starterIndex]?.body || note.body;
            migratedStarterNotes = true;
          }
        });
      } else {
        const oldNote = localStorage.getItem('orbit-phone-note');
        if (oldNote?.trim()) notes.push({ id: `migrated-${Date.now()}`, title: 'Quick note', body: oldNote });
        localStorage.setItem(noteStorageKey, JSON.stringify(notes));
      }
    } catch (_error) { /* Keep starter notes available if browser storage is unavailable. */ }
    const saveNotes = () => {
      try { localStorage.setItem(noteStorageKey, JSON.stringify(notes)); } catch (_error) { /* Keep notes available for this visit. */ }
    };
    if (migratedStarterNotes) saveNotes();
    const list = document.createElement('div');
    list.className = 'notes-list';
    const renderNotes = () => {
      list.replaceChildren();
      notes.forEach((item) => {
        const card = document.createElement('article');
        card.className = 'notes-card';
        const header = document.createElement('div');
        header.className = 'notes-card-header';
        const titleInput = document.createElement('input');
        titleInput.className = 'notes-title-input';
        const starterIndex = item.id.startsWith('starter-') ? Number(item.id.slice('starter-'.length)) : -1;
        const originalStarter = starterNotes[starterIndex];
        const isUneditedStarter = originalStarter && item.title === originalStarter.title && item.body === originalStarter.body;
        const localizedStarter = isUneditedStarter && currentLanguage !== 'en' ? localizedStarterNotes[currentLanguage]?.[starterIndex] : null;
        titleInput.value = localizedStarter?.title || item.title;
        titleInput.setAttribute('aria-label', actionCopy.noteTitlePlaceholder);
        titleInput.addEventListener('input', () => { item.title = titleInput.value; item.customized = true; saveNotes(); });
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'notes-delete-button';
        deleteButton.setAttribute('aria-label', actionCopy.deleteNote);
        deleteButton.title = actionCopy.deleteNote;
        deleteButton.textContent = '×';
        deleteButton.addEventListener('click', () => {
          notes = notes.filter((noteItem) => noteItem.id !== item.id);
          saveNotes();
          renderNotes();
        });
        const bodyInput = document.createElement('textarea');
        bodyInput.className = 'notes-editor';
        bodyInput.value = localizedStarter?.body || item.body;
        bodyInput.placeholder = actionCopy.noteBodyPlaceholder;
        bodyInput.setAttribute('aria-label', `${item.title || actionCopy.noteTitlePlaceholder}: ${actionCopy.noteBodyPlaceholder}`);
        bodyInput.addEventListener('input', () => { item.body = bodyInput.value; item.customized = true; saveNotes(); });
        header.append(titleInput, deleteButton);
        card.append(header, bodyInput);
        list.append(card);
      });
    };
    renderNotes();
    const composer = document.createElement('form');
    composer.className = 'notes-composer';
    composer.hidden = true;
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = actionCopy.noteTitlePlaceholder;
    titleInput.setAttribute('aria-label', actionCopy.noteTitlePlaceholder);
    const bodyInput = document.createElement('textarea');
    bodyInput.placeholder = actionCopy.noteBodyPlaceholder;
    bodyInput.setAttribute('aria-label', actionCopy.noteBodyPlaceholder);
    const actions = document.createElement('div');
    actions.className = 'notes-composer-actions';
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = actionCopy.cancelNote;
    cancelButton.addEventListener('click', () => { composer.hidden = true; titleInput.value = ''; bodyInput.value = ''; });
    const saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.textContent = actionCopy.saveNote;
    actions.append(cancelButton, saveButton);
    composer.append(titleInput, bodyInput, actions);
    composer.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = titleInput.value.trim();
      if (!title) { titleInput.focus(); return; }
      notes.push({ id: `note-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, title, body: bodyInput.value.trim() });
      saveNotes();
      renderNotes();
      composer.hidden = true;
      titleInput.value = '';
      bodyInput.value = '';
    });
    controls.append(list, composer);
    const addNoteButton = document.createElement('button');
    addNoteButton.type = 'button';
    addNoteButton.className = 'reminder-add-button';
    addNoteButton.setAttribute('aria-label', actionCopy.addNote);
    addNoteButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5v15M4.5 12h15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    addNoteButton.addEventListener('click', () => {
      composer.hidden = false;
      titleInput.focus();
    });
    appPanel.append(addNoteButton);
  } else if (key === 'mail') {
    const mailMessages = MAIL_MESSAGES.map((message) => ({
      source: message,
      fields: message[currentLanguage] || message.en,
    }));
    const mailLabels = {
      en: { message: 'Message', toMe: 'To me', returnToInbox: 'Return to Inbox' },
      'zh-Hant': { message: '郵件', toMe: '寄給我', returnToInbox: '返回收件匣' },
      ko: { message: '메일', toMe: '받는 사람: 나', returnToInbox: '받은 편지함으로 돌아가기' },
    }[currentLanguage];
    const renderInbox = () => {
      mailInboxReturn = null;
      appPanel.classList.remove('mail-message-open');
      $('#closeApp').textContent = '‹';
      $('#closeApp').setAttribute('aria-label', copy().close);
      $('#panelTitle').textContent = copy().details.mail[0];
      const inbox = document.createElement('div');
      inbox.className = 'mail-inbox';
      mailMessages.forEach(({ source, fields }) => {
        const [sender, subject, preview, , time] = fields;
        const row = document.createElement('button');
        row.type = 'button';
        row.className = `mail-row${source.unread ? ' unread' : ''}`;
        const avatar = document.createElement('span');
        avatar.className = 'mail-avatar';
        avatar.textContent = [...sender][0] || '✉';
        const text = document.createElement('span');
        text.className = 'mail-row-copy';
        const meta = document.createElement('span');
        meta.className = 'mail-row-meta';
        const from = document.createElement('strong');
        from.className = 'mail-from';
        from.textContent = sender;
        const timestamp = document.createElement('time');
        timestamp.className = 'mail-time';
        timestamp.textContent = time;
        const title = document.createElement('span');
        title.className = 'mail-subject';
        title.textContent = subject;
        const excerpt = document.createElement('span');
        excerpt.className = 'mail-excerpt';
        excerpt.textContent = preview;
        meta.append(from, timestamp);
        text.append(meta, title, excerpt);
        row.append(avatar, text);
        row.addEventListener('click', () => {
          source.unread = false;
          renderMessage(fields);
        });
        inbox.append(row);
      });
      controls.replaceChildren(inbox);
    };
    const renderMessage = (fields) => {
      const [sender, subject, , body, time] = fields;
      mailInboxReturn = renderInbox;
      appPanel.classList.add('mail-message-open');
      $('#closeApp').textContent = '‹';
      $('#closeApp').setAttribute('aria-label', mailLabels.returnToInbox);
      $('#panelTitle').textContent = mailLabels.message;
      const detail = document.createElement('article');
      detail.className = 'mail-message';
      const title = document.createElement('h2');
      title.className = 'mail-detail-subject';
      title.textContent = subject;
      const meta = document.createElement('div');
      meta.className = 'mail-detail-meta';
      const avatar = document.createElement('span');
      avatar.className = 'mail-avatar';
      avatar.textContent = [...sender][0] || '✉';
      const senderInfo = document.createElement('span');
      senderInfo.className = 'mail-sender-info';
      const senderName = document.createElement('strong');
      senderName.textContent = sender;
      const recipient = document.createElement('small');
      recipient.textContent = mailLabels.toMe;
      const timestamp = document.createElement('time');
      timestamp.className = 'mail-time';
      timestamp.textContent = time;
      senderInfo.append(senderName, recipient);
      meta.append(avatar, senderInfo, timestamp);
      const separator = document.createElement('hr');
      const messageBody = document.createElement('p');
      messageBody.className = 'mail-detail-body';
      messageBody.textContent = body;
      detail.append(title, meta, separator, messageBody);
      controls.replaceChildren(detail);
    };
    renderInbox();
  } else if (key === 'reminders') {
    const reminderLabels = body.split('\n').filter(Boolean);
    let reminderIndex = 0;
    let deletedReminderIds = new Set();
    try {
      const deleted = JSON.parse(localStorage.getItem('orbit-phone-dismissed-reminders') || '[]');
      if (Array.isArray(deleted)) deletedReminderIds = new Set(deleted.filter((id) => typeof id === 'string' && id.startsWith('custom-')));
    } catch (_error) { /* Keep reminders available when browser storage is disabled. */ }

    let checkedReminders = [];
    try { checkedReminders = JSON.parse(localStorage.getItem('orbit-phone-reminders') || '[]'); } catch (_error) { /* Start with unchecked reminders. */ }
    if (!Array.isArray(checkedReminders)) checkedReminders = [];

    let savedReminders = [];
    try { savedReminders = JSON.parse(localStorage.getItem('orbit-phone-custom-reminders') || '[]'); } catch (_error) { /* Start with no custom reminders. */ }
    if (!Array.isArray(savedReminders)) savedReminders = [];
    savedReminders = savedReminders.map((reminder, index) => {
      if (typeof reminder === 'string') return { id: `custom-legacy-${index}`, text: reminder };
      if (reminder && typeof reminder.id === 'string' && typeof reminder.text === 'string') return reminder;
      return null;
    }).filter(Boolean);
    try { localStorage.setItem('orbit-phone-custom-reminders', JSON.stringify(savedReminders)); } catch (_error) { /* Keep custom reminders usable for this visit. */ }

    const saveDeletedReminderIds = () => {
      try { localStorage.setItem('orbit-phone-dismissed-reminders', JSON.stringify([...deletedReminderIds])); } catch (_error) { /* The reminder still disappears for this visit. */ }
    };
    const appendReminderRow = (label, reminderId, seedIndex = null) => {
      const row = document.createElement('label');
      row.className = 'reminder-row';
      row.dataset.reminderId = reminderId;
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.setAttribute('aria-label', label);
      if (seedIndex !== null) checkbox.checked = checkedReminders[seedIndex] === true;
      row.classList.toggle('completed', checkbox.checked);
      let removalTimer = null;
      checkbox.addEventListener('change', () => {
        row.classList.toggle('completed', checkbox.checked);
        if (seedIndex !== null) {
          checkedReminders[seedIndex] = checkbox.checked;
          try { localStorage.setItem('orbit-phone-reminders', JSON.stringify(checkedReminders)); } catch (_error) { /* Keep the current checkbox state usable. */ }
          return;
        }
        if (removalTimer) window.clearTimeout(removalTimer);
        removalTimer = null;
        if (!checkbox.checked) return;
        removalTimer = window.setTimeout(() => {
          deletedReminderIds.add(reminderId);
          saveDeletedReminderIds();
          savedReminders = savedReminders.filter((reminder) => reminder.id !== reminderId);
          try { localStorage.setItem('orbit-phone-custom-reminders', JSON.stringify(savedReminders)); } catch (_error) { /* The reminder still disappears for this visit. */ }
          row.remove();
        }, 2000);
      });
      const text = document.createElement('span');
      text.textContent = label;
      row.append(checkbox, text);
      controls.append(row);
    };
    reminderLabels.forEach((label) => {
      if (label === '__IMPORTANT__') {
        const heading = document.createElement('h3');
        heading.className = 'reminder-category-heading';
        heading.textContent = actionCopy.important;
        controls.append(heading);
        return;
      }
      if (label === '__REMINDER__') {
        const heading = document.createElement('h3');
        heading.className = 'reminder-category-heading';
        heading.textContent = actionCopy.reminderCategory;
        controls.append(heading);
        return;
      }
      const seedIndex = reminderIndex++;
      appendReminderRow(label, `seed-${seedIndex}`, seedIndex);
    });
    savedReminders.forEach((reminder) => {
      if (!deletedReminderIds.has(reminder.id)) appendReminderRow(reminder.text, reminder.id);
    });

    const composer = document.createElement('form');
    composer.className = 'reminder-composer';
    composer.hidden = true;
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = actionCopy.reminderPlaceholder;
    input.setAttribute('aria-label', actionCopy.reminderPlaceholder);
    const addReminder = document.createElement('button');
    addReminder.type = 'submit';
    addReminder.textContent = actionCopy.addReminder;
    composer.append(input, addReminder);
    composer.addEventListener('submit', (event) => {
      event.preventDefault();
      const label = input.value.trim();
      if (!label) return;
      const reminder = { id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, text: label };
      savedReminders.push(reminder);
      try { localStorage.setItem('orbit-phone-custom-reminders', JSON.stringify(savedReminders)); } catch (_error) { /* Keep the new reminder visible for this session. */ }
      appendReminderRow(reminder.text, reminder.id);
      input.value = '';
      composer.hidden = true;
    });
    controls.append(composer);

    const plusButton = document.createElement('button');
    plusButton.type = 'button';
    plusButton.className = 'reminder-add-button';
    plusButton.setAttribute('aria-label', actionCopy.addReminder);
    const plusIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    plusIcon.setAttribute('viewBox', '0 0 24 24');
    plusIcon.setAttribute('aria-hidden', 'true');
    const plusPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    plusPath.setAttribute('d', 'M12 4.5v15M4.5 12h15');
    plusPath.setAttribute('fill', 'none');
    plusPath.setAttribute('stroke', 'currentColor');
    plusPath.setAttribute('stroke-width', '1.8');
    plusPath.setAttribute('stroke-linecap', 'round');
    plusIcon.append(plusPath);
    plusButton.append(plusIcon);
    plusButton.addEventListener('click', () => {
      composer.hidden = false;
      input.focus();
    });
    appPanel.append(plusButton);
  } else if (key === 'photos') {
    renderPhotoLibrary(controls);
  } else if (key === 'browser' || key === 'search') {
    const form = document.createElement('form');
    form.className = 'browser-search';
    const input = document.createElement('input');
    input.type = 'search';
    input.placeholder = actionCopy.search;
    input.setAttribute('aria-label', actionCopy.search);
    const go = document.createElement('button');
    go.type = 'submit';
    go.textContent = actionCopy.go;
    form.append(input, go);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = input.value.trim();
      if (query) window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank', 'noopener,noreferrer');
    });
    controls.append(form);
  } else if (key === 'calculator') {
    const calculator = document.createElement('div');
    calculator.className = 'calculator-ui';
    const display = document.createElement('output');
    display.className = 'calculator-display';
    display.setAttribute('aria-live', 'polite');
    display.textContent = '0';
    calculator.append(display);
    const keys = [
      ['AC', 'clear', 'calc-function'], ['±', 'sign', 'calc-function'], ['%', 'percent', 'calc-function'], ['÷', '÷', 'calc-operator'],
      ['7', '7', ''], ['8', '8', ''], ['9', '9', ''], ['×', '×', 'calc-operator'],
      ['4', '4', ''], ['5', '5', ''], ['6', '6', ''], ['−', '−', 'calc-operator'],
      ['1', '1', ''], ['2', '2', ''], ['3', '3', ''], ['+', '+', 'calc-operator'],
      ['0', '0', 'calc-zero'], ['.', '.', ''], ['', 'spacer', ''], ['=', '=', 'calc-operator'],
    ];
    keys.forEach(([label, action, style]) => {
      if (action === 'spacer') {
        calculator.append(document.createElement('span'));
        return;
      }
      const keyButton = document.createElement('button');
      keyButton.type = 'button';
      keyButton.className = `calc-key ${style}`.trim();
      keyButton.dataset.calcAction = action;
      keyButton.textContent = label;
      calculator.append(keyButton);
    });
    let current = '0';
    let saved = null;
    let operator = null;
    let resetAfterOperator = false;
    const showNumber = (value) => {
      if (!Number.isFinite(value)) {
        current = 'Error';
        display.textContent = current;
        resetAfterOperator = true;
        return;
      }
      current = String(Number(value.toPrecision(10)));
      if (current.length > 11) current = Number(current).toExponential(5);
      display.textContent = current;
    };
    calculator.addEventListener('click', (event) => {
      const keyButton = event.target.closest('[data-calc-action]');
      if (!keyButton) return;
      const action = keyButton.dataset.calcAction;
      if (/^\d$/.test(action)) {
        current = resetAfterOperator || current === '0' ? action : `${current}${action}`;
        if (current.length > 11) current = current.slice(0, 11);
        resetAfterOperator = false;
        display.textContent = current;
      } else if (action === '.') {
        if (resetAfterOperator) { current = '0'; resetAfterOperator = false; }
        if (!current.includes('.')) current += '.';
        display.textContent = current;
      } else if (action === 'clear') {
        current = '0'; saved = null; operator = null; resetAfterOperator = false; display.textContent = current;
      } else if (action === 'sign') {
        showNumber(-Number(current));
      } else if (action === 'percent') {
        showNumber(Number(current) / 100);
      } else if (['+', '−', '×', '÷'].includes(action)) {
        if (operator && !resetAfterOperator) {
          const left = saved;
          const right = Number(current);
          const result = operator === '+' ? left + right : operator === '−' ? left - right : operator === '×' ? left * right : right === 0 ? NaN : left / right;
          showNumber(result);
        }
        saved = Number(current); operator = action; resetAfterOperator = true;
        calculator.querySelectorAll('.calc-operator').forEach((button) => button.classList.toggle('selected', button === keyButton));
      } else if (action === '=' && operator) {
        const right = Number(current);
        const result = operator === '+' ? saved + right : operator === '−' ? saved - right : operator === '×' ? saved * right : right === 0 ? NaN : saved / right;
        showNumber(result); saved = null; operator = null; resetAfterOperator = true;
        calculator.querySelectorAll('.calc-operator').forEach((button) => button.classList.remove('selected'));
      }
    });
    controls.append(calculator);
  } else if (['youtube', 'naver', 'kakaotalk'].includes(key)) {
    const link = document.createElement('a');
    link.className = 'app-action-button external-action';
    link.href = APP_URLS[key];
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = key === 'youtube' ? actionCopy.openYouTube : key === 'naver' ? actionCopy.openNaver : key === 'instagram' ? actionCopy.openInstagram : actionCopy.openKakaoTalk;
    controls.append(link);
  } else if (key === 'phone') {
    copy().details.phone[1].split('\n').filter(Boolean).forEach((name) => controls.append(actionButton(`${name}  ·  ${actionCopy.call}`, (event) => {
      controls.replaceChildren();
      const calling = document.createElement('div');
      calling.className = 'calling-card';
      calling.textContent = `${actionCopy.calling} ${name}…`;
      controls.append(calling, actionButton(actionCopy.hangup, () => openApp('phone'), 'hangup-button'));
    })));
  } else if (key === 'messages') {
    const compose = document.createElement('form');
    compose.className = 'browser-search';
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = actionCopy.newMessage;
    input.setAttribute('aria-label', actionCopy.newMessage);
    const send = document.createElement('button');
    send.type = 'submit';
    send.textContent = actionCopy.send;
    compose.append(input, send);
    compose.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!input.value.trim()) return;
      const bubble = document.createElement('p');
      bubble.className = 'message-bubble';
      bubble.textContent = input.value.trim();
      controls.insertBefore(bubble, compose);
      input.value = '';
    });
    controls.append(compose);
  } else if (key === 'music') {
    const player = document.createElement('div');
    player.className = 'music-player';
    const toggle = actionButton(actionCopy.play, () => {
      const playing = toggle.dataset.playing !== 'true';
      toggle.dataset.playing = String(playing);
      toggle.textContent = playing ? actionCopy.pause : actionCopy.play;
      player.classList.toggle('playing', playing);
    }, 'music-toggle');
    player.append(toggle);
    controls.append(player);
  } else if (key === 'settings') {
    controls.classList.add('settings-view');
    const settingsLabels = copy().settingsLabels;
    const languageRow = document.createElement('label');
    languageRow.className = 'setting-row setting-language-row';
    const languageName = document.createElement('span');
    languageName.textContent = settingsLabels.language;
    const languageSelect = document.createElement('select');
    languageSelect.className = 'setting-select';
    languageSelect.setAttribute('aria-label', settingsLabels.language);
    [['en', 'English'], ['zh-Hant', '繁體中文'], ['ko', '한국어']].forEach(([value, label]) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      languageSelect.append(option);
    });
    languageSelect.value = currentLanguage;
    languageSelect.addEventListener('change', () => setLanguage(languageSelect.value));
    languageRow.append(languageName, languageSelect);
    controls.append(languageRow);
    [['notifications', settingsLabels.notifications, true], ['sound', settingsLabels.sound, true]].forEach(([keyName, label, defaultOn]) => {
      const row = document.createElement('label');
      row.className = 'setting-row';
      const name = document.createElement('span');
      name.textContent = label;
      const toggle = document.createElement('input');
      toggle.type = 'checkbox';
      toggle.className = 'ios-switch';
      try { toggle.checked = localStorage.getItem(`orbit-phone-${keyName}`) === null ? defaultOn : localStorage.getItem(`orbit-phone-${keyName}`) === 'true'; } catch (_error) { toggle.checked = defaultOn; }
      toggle.setAttribute('aria-label', label);
      toggle.addEventListener('change', () => {
        try { localStorage.setItem(`orbit-phone-${keyName}`, String(toggle.checked)); } catch (_error) { /* Keep the setting for this visit. */ }
        if (keyName === 'notifications') $('#notification').hidden = !toggle.checked;
      });
      row.append(name, toggle);
      controls.append(row);
    });
    const wallpaperButton = document.createElement('button');
    wallpaperButton.type = 'button';
    wallpaperButton.className = 'settings-wallpaper-row';
    wallpaperButton.setAttribute('aria-label', `${settingsLabels.wallpaper} · ${copy().details.settings[1] || actionCopy.photo}`);
    const wallpaperImage = document.createElement('img');
    wallpaperImage.src = currentWallpaperSource;
    wallpaperImage.alt = '';
    const wallpaperName = document.createElement('span');
    wallpaperName.textContent = settingsLabels.wallpaper;
    const wallpaperArrow = document.createElement('span');
    wallpaperArrow.className = 'settings-arrow';
    wallpaperArrow.textContent = '›';
    wallpaperButton.append(wallpaperImage, wallpaperName, wallpaperArrow);
    wallpaperButton.addEventListener('click', () => openPhotoViewer({ type: 'photo', src: currentWallpaperSource, caption: settingsLabels.wallpaper }, { isWallpaper: true }));
    controls.append(wallpaperButton);
  } else if (key === 'clock') {
    const clockApp = createClockApp(content, appPanel);
    appPanel.append(clockApp.tabbar);
    clockCleanup = clockApp.cleanup;
  }
  if (controls.childElementCount) content.append(controls);
  if (key === 'weather') {
    const credit = document.createElement('a');
    credit.href = 'https://open-meteo.com/';
    credit.target = '_blank';
    credit.rel = 'noopener noreferrer';
    credit.className = 'weather-credit';
    credit.textContent = copy().weatherCredit;
    content.append(credit);
  }
  appPanel.classList.add('open');
  appPanel.setAttribute('aria-hidden', 'false');
}

function createClockApp(content, appPanel) {
  const labels = {
    en: {
      tabs: ['World Clock', 'Alarms', 'Stopwatch', 'Timers'], cities: ['Seoul', 'Milan'],
      addAlarm: 'Add Alarm', noAlarms: 'No Alarms', delete: 'Delete', cancel: 'Cancel', done: 'Done',
      edit: 'Edit', other: 'Other', sleepWake: 'Sleep | Wake Up', sleep: 'Sleep', wakeUp: 'Wake Up', change: 'Change',
      alarm: 'Alarm', am: 'AM', pm: 'PM', sleepTime: 'Sleep time', wakeTime: 'Wake-up time',
      repeat: 'Repeat', never: 'Never', label: 'Label', sound: 'Sound', snooze: 'Snooze', snoozeDuration: 'Snooze Duration',
      videoSound: 'Video sound', ringing: 'Alarm is ringing', stopAlarm: 'Stop', playSound: 'Play sound', timerFinished: 'Timer finished',
      repeatDayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      repeatDayShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      wake: 'Wake up', practice: 'Practice', start: 'Start', stop: 'Stop', lap: 'Lap', reset: 'Reset',
      hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds', hourUnit: 'hours', minuteUnit: 'min', secondUnit: 'sec', setTimer: 'Start', pause: 'Pause', resume: 'Resume',
      alarmSaved: 'Alarm', lapLabel: 'Lap',
    },
    'zh-Hant': {
      tabs: ['世界時鐘', '鬧鐘', '碼錶', '計時器'], cities: ['首爾', '米蘭'],
      addAlarm: '新增鬧鐘', noAlarms: '沒有鬧鐘', delete: '刪除', cancel: '取消', done: '完成',
      edit: '編輯', other: '其他', sleepWake: '睡眠｜起床', sleep: '就寢', wakeUp: '起床', change: '更改',
      alarm: '鬧鐘', am: '上午', pm: '下午', sleepTime: '就寢時間', wakeTime: '起床時間',
      repeat: '重複', never: '永不', label: '標籤', sound: '聲音', snooze: '稍後提醒', snoozeDuration: '稍後提醒間隔',
      videoSound: '影片聲音', ringing: '鬧鐘響了', stopAlarm: '停止', playSound: '播放聲音', timerFinished: '計時結束',
      repeatDayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      repeatDayShort: ['日', '一', '二', '三', '四', '五', '六'],
      wake: '起床', practice: '練習', start: '開始', stop: '停止', lap: '分圈', reset: '重設',
      hours: '小時', minutes: '分鐘', seconds: '秒', hourUnit: '小時', minuteUnit: '分', secondUnit: '秒', setTimer: '開始', pause: '暫停', resume: '繼續',
      alarmSaved: '鬧鐘', lapLabel: '分圈',
    },
    ko: {
      tabs: ['세계 시계', '알람', '스톱워치', '타이머'], cities: ['서울', '밀라노'],
      addAlarm: '알람 추가', noAlarms: '알람 없음', delete: '삭제', cancel: '취소', done: '완료',
      edit: '편집', other: '기타', sleepWake: '수면 | 기상', sleep: '취침', wakeUp: '기상', change: '변경',
      alarm: '알람', am: '오전', pm: '오후', sleepTime: '취침 시간', wakeTime: '기상 시간',
      repeat: '반복', never: '안 함', label: '레이블', sound: '사운드', snooze: '다시 알림', snoozeDuration: '다시 알림 간격',
      videoSound: '영상 사운드', ringing: '알람이 울리는 중', stopAlarm: '중지', playSound: '사운드 재생', timerFinished: '타이머 종료',
      repeatDayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
      repeatDayShort: ['일', '월', '화', '수', '목', '금', '토'],
      wake: '기상', practice: '연습', start: '시작', stop: '중단', lap: '랩', reset: '재설정',
      hours: '시간', minutes: '분', seconds: '초', hourUnit: '시간', minuteUnit: '분', secondUnit: '초', setTimer: '시작', pause: '일시 정지', resume: '재개',
      alarmSaved: '알람', lapLabel: '랩',
    },
  }[currentLanguage];
  const tabKeys = ['world', 'alarms', 'stopwatch', 'timers'];
  const iconPaths = {
    world: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    alarms: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M5 3 2.5 5.5M19 3l2.5 2.5M12 5v2"/>',
    stopwatch: '<circle cx="12" cy="13" r="8"/><path d="M12 13l4-3M9 2h6M12 5V2M18.5 6.5 20 5"/>',
    timers: '<circle cx="12" cy="13" r="8"/><path d="M9 2h6M12 5v8l4 2"/>',
  };
  const tabbar = document.createElement('nav');
  tabbar.className = 'clock-tabbar';
  tabbar.setAttribute('role', 'tablist');
  tabbar.setAttribute('aria-label', copy().apps.clock);
  const pageHost = document.createElement('div');
  pageHost.className = 'clock-page-host';
  content.append(pageHost);

  let activeTab = 'world';
  let alarmItems = [];
  const alarmStorageKey = 'orbit-phone-clock-alarms-v2';
  let editingAlarms = false;
  let showAlarmForm = false;
  let alarmDraft = null;
  let ringAudio = null;
  let ringNotice = null;
  let ringingLabel = '';
  let ringingAlarm = null;
  let snoozedAlarm = null;
  let alarmCheckInterval = null;
  let alarmPreviewAudio = null;
  let alarmAudioContext = null;
  let alarmAudioBuffer = null;
  let alarmAudioLoadPromise = null;
  let ringSource = null;
  const firedAlarmKeys = new Set();
  let sleepTime = '01:00';
  let wakeTime = '09:00';
  let editingSleep = false;
  const defaultAlarms = [
    { id: 'sample-1', time: '01:22', label: labels.alarm, enabled: false },
    { id: 'sample-2', time: '04:00', label: labels.alarm, enabled: false },
    { id: 'sample-3', time: '04:05', label: labels.alarm, enabled: false },
    { id: 'sample-4', time: '07:45', label: labels.alarm, enabled: false },
    { id: 'sample-5', time: '20:30', label: labels.alarm, enabled: false },
  ];
  try {
    const savedAlarms = JSON.parse(localStorage.getItem(alarmStorageKey) || 'null');
    const validSnoozeDurations = [5, 10, 15];
    alarmItems = (Array.isArray(savedAlarms) ? savedAlarms : defaultAlarms).map((alarm) => ({
      ...alarm,
      snoozeMinutes: validSnoozeDurations.includes(Number(alarm.snoozeMinutes)) ? Number(alarm.snoozeMinutes) : 10,
    }));
  } catch (_error) {
    alarmItems = defaultAlarms.map((alarm) => ({ ...alarm, snoozeMinutes: 10 }));
  }
  let stopwatchElapsed = 0;
  let stopwatchStartedAt = 0;
  let stopwatchRunning = false;
  let stopwatchInterval = null;
  let laps = [];
  let timerRemaining = 0;
  let timerEndAt = 0;
  let timerRunning = false;
  let timerInterval = null;
  let timerSelection = { hours: 0, minutes: 0, seconds: 0 };

  const saveAlarms = () => {
    try { localStorage.setItem(alarmStorageKey, JSON.stringify(alarmItems)); } catch (_error) { /* Keep changes for this visit. */ }
  };
  const prepareAlarmAudio = () => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return Promise.resolve(false);
    try {
      if (!alarmAudioContext) alarmAudioContext = new AudioContextClass();
      const resume = alarmAudioContext.state === 'suspended' ? alarmAudioContext.resume() : Promise.resolve();
      return resume.then(() => {
        if (alarmAudioBuffer) return true;
        if (!alarmAudioLoadPromise) {
          alarmAudioLoadPromise = fetch(new URL('assets/alarm-ring.m4a', document.baseURI))
            .then((response) => { if (!response.ok) throw new Error('Alarm sound could not be loaded'); return response.arrayBuffer(); })
            .then((data) => alarmAudioContext.decodeAudioData(data))
            .then((buffer) => { alarmAudioBuffer = buffer; return true; })
            .catch(() => false);
        }
        return alarmAudioLoadPromise;
      }).catch(() => false);
    } catch (_error) {
      return Promise.resolve(false);
    }
  };
  // Opening Clock comes from a tap, so prepare the audio context before the alarm timer fires.
  void prepareAlarmAudio();
  const stopAlarmSound = () => {
    if (ringSource) {
      try { ringSource.stop(); } catch (_error) { /* The sound may already have stopped. */ }
      ringSource.disconnect();
      ringSource = null;
    }
    if (ringAudio) {
      ringAudio.pause();
      ringAudio.currentTime = 0;
      ringAudio = null;
    }
    ringingAlarm = null;
    ringNotice?.remove();
    ringNotice = null;
  };
  const showRingingNotice = () => {
    ringNotice?.remove();
    const notice = document.createElement('section');
    notice.className = 'clock-ringing-notice';
    notice.setAttribute('role', 'alertdialog');
    notice.setAttribute('aria-modal', 'true');
    const title = document.createElement('h2');
    title.textContent = ringingLabel || labels.alarm;
    const message = document.createElement('p');
    message.textContent = labels.ringing;
    const controls = document.createElement('div');
    controls.className = 'clock-ringing-actions';
    if (ringingAlarm && ringingAlarm.snoozeEnabled !== false) {
      const snooze = document.createElement('button');
      snooze.type = 'button';
      snooze.textContent = `${labels.snooze} · ${ringingAlarm.snoozeMinutes || 10} ${labels.minuteUnit}`;
      snooze.addEventListener('click', () => {
        const nextRing = {
          label: ringingLabel,
          alarm: ringingAlarm,
          dueAt: Date.now() + (ringingAlarm.snoozeMinutes || 10) * 60000,
        };
        stopAlarmSound();
        snoozedAlarm = nextRing;
      });
      controls.append(snooze);
    }
    const stop = document.createElement('button');
    stop.type = 'button';
    stop.textContent = labels.stopAlarm;
    stop.addEventListener('click', stopAlarmSound);
    controls.append(stop);
    notice.append(title, message, controls);
    appPanel.append(notice);
    ringNotice = notice;
  };
  const startAlarmSound = (label, alarm = null) => {
    if (ringAudio) return;
    ringingLabel = label || labels.alarm;
    ringingAlarm = alarm;
    ringAudio = new Audio(new URL('assets/alarm-ring.m4a', document.baseURI).href);
    ringAudio.loop = true;
    const fallbackAudio = ringAudio;
    prepareAlarmAudio().then((ready) => {
      if (ringAudio !== fallbackAudio) return;
      if (ready && alarmAudioContext && alarmAudioBuffer) {
        ringSource = alarmAudioContext.createBufferSource();
        ringSource.buffer = alarmAudioBuffer;
        ringSource.loop = true;
        ringSource.connect(alarmAudioContext.destination);
        ringSource.start();
      } else {
        fallbackAudio.play().catch(() => {});
      }
    });
    showRingingNotice();
  };
  const checkAlarms = () => {
    const now = new Date();
    if (snoozedAlarm && Date.now() >= snoozedAlarm.dueAt) {
      const nextRing = snoozedAlarm;
      snoozedAlarm = null;
      startAlarmSound(nextRing.label, nextRing.alarm);
    }
    const today = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    alarmItems.forEach((alarm) => {
      if (!alarm.enabled || alarm.time !== time) return;
      const days = Array.isArray(alarm.repeatDays) ? alarm.repeatDays : [];
      if (days.length && !days.includes(now.getDay())) return;
      const firedKey = `${today}:${alarm.id}`;
      if (firedAlarmKeys.has(firedKey)) return;
      firedAlarmKeys.add(firedKey);
      startAlarmSound(alarm.label || labels.alarm, alarm);
      if (!days.length) {
        alarm.enabled = false;
        saveAlarms();
        if (activeTab === 'alarms') renderTab('alarms');
      }
    });
  };
  const formattedAlarmParts = (timeValue) => {
    const [rawHour, minute] = timeValue.split(':').map(Number);
    const time = `${rawHour % 12 || 12}:${String(minute).padStart(2, '0')}`;
    const period = rawHour < 12 ? labels.am : labels.pm;
    const periodFirst = currentLanguage !== 'en';
    return { time, period, periodFirst, display: periodFirst ? `${period} ${time}` : `${time} ${period}` };
  };
  const formatStopwatch = (milliseconds) => {
    const totalCentiseconds = Math.floor(milliseconds / 10);
    const centiseconds = String(totalCentiseconds % 100).padStart(2, '0');
    const totalSeconds = Math.floor(totalCentiseconds / 100);
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const minutes = String(Math.floor(totalSeconds / 60) % 60).padStart(2, '0');
    const hours = Math.floor(totalSeconds / 3600);
    return `${hours ? `${String(hours).padStart(2, '0')}:` : ''}${minutes}:${seconds}.${centiseconds}`;
  };
  const formatTimer = (seconds) => `${String(Math.floor(seconds / 3600)).padStart(2, '0')}:${String(Math.floor(seconds / 60) % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

  const renderWorld = () => {
    const list = document.createElement('section');
    list.className = 'clock-world-list';
    ['Asia/Seoul', 'Europe/Rome'].forEach((zone, index) => {
      const row = document.createElement('article');
      row.className = 'clock-city-card';
      const place = document.createElement('div');
      place.className = 'clock-city-copy';
      const name = document.createElement('strong');
      name.textContent = labels.cities[index];
      const date = document.createElement('span');
      date.className = 'clock-city-date';
      date.dataset.timeZone = zone;
      place.append(name, date);
      const time = document.createElement('time');
      time.className = 'clock-city-time';
      time.dataset.timeZone = zone;
      row.append(place, time);
      list.append(row);
    });
    pageHost.append(list);
    updateWorldClock();
  };

  const renderAlarms = () => {
    const page = document.createElement('section');
    page.className = 'clock-alarm-page';
    const toolbar = document.createElement('div');
    toolbar.className = 'clock-alarm-toolbar';
    const edit = document.createElement('button');
    edit.type = 'button';
    edit.className = 'clock-edit-button';
    edit.textContent = editingAlarms ? labels.done : labels.edit;
    edit.addEventListener('click', () => {
      editingAlarms = !editingAlarms;
      renderTab('alarms');
    });
    const addAlarmButton = document.createElement('button');
    addAlarmButton.type = 'button';
    addAlarmButton.className = 'clock-add-alarm-button';
    addAlarmButton.setAttribute('aria-label', labels.addAlarm);
    addAlarmButton.textContent = '+';
    addAlarmButton.addEventListener('click', () => {
      showAlarmForm = true;
      const now = new Date();
      const hour24 = now.getHours();
      alarmDraft = {
        hour: hour24 % 12 || 12,
        minute: now.getMinutes(),
        period: hour24 >= 12 ? 'PM' : 'AM',
        repeatDays: [],
        repeatOpen: false,
        snoozeEnabled: true,
        snoozeMinutes: 10,
      };
      renderTab('alarms');
    });
    toolbar.append(edit, addAlarmButton);
    const heading = document.createElement('h1');
    heading.className = 'clock-alarm-title';
    heading.textContent = labels.tabs[1];

    const sleepSection = document.createElement('section');
    sleepSection.className = 'clock-sleep-section';
    const sleepTitle = document.createElement('h2');
    sleepTitle.className = 'clock-sleep-heading';
    sleepTitle.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10V6a1 1 0 0 1 1-1h3a2 2 0 0 1 2 2v2h6V7a2 2 0 0 1 2-2h3a1 1 0 0 1 1 1v4M2 10h20v9h-2v-2H4v2H2z"/></svg>';
    const sleepHeadingText = document.createElement('span');
    sleepHeadingText.textContent = labels.sleepWake;
    sleepTitle.append(sleepHeadingText);
    const sleepTimes = document.createElement('div');
    sleepTimes.className = 'clock-sleep-times';
    const sleepTimeRow = document.createElement('div');
    sleepTimeRow.className = 'clock-sleep-time-row';
    const sleepName = document.createElement('span');
    sleepName.textContent = labels.sleep;
    const sleepValue = document.createElement('strong');
    const sleepParts = formattedAlarmParts(sleepTime);
    sleepValue.textContent = sleepParts.display;
    sleepTimeRow.append(sleepName, sleepValue);
    const wakeTimeRow = document.createElement('div');
    wakeTimeRow.className = 'clock-sleep-time-row';
    const wakeName = document.createElement('span');
    wakeName.textContent = labels.wakeUp;
    const wakeValue = document.createElement('strong');
    const wakeParts = formattedAlarmParts(wakeTime);
    wakeValue.textContent = wakeParts.display;
    wakeTimeRow.append(wakeName, wakeValue);
    sleepTimes.append(sleepTimeRow, wakeTimeRow);
    const changeSleep = document.createElement('button');
    changeSleep.type = 'button';
    changeSleep.className = 'clock-sleep-change';
    changeSleep.textContent = labels.change;
    changeSleep.addEventListener('click', () => {
      editingSleep = !editingSleep;
      renderTab('alarms');
    });
    if (editingSleep) {
      const sleepForm = document.createElement('form');
      sleepForm.className = 'clock-sleep-form';
      const sleepInput = document.createElement('input');
      sleepInput.type = 'time';
      sleepInput.name = 'sleepTime';
      sleepInput.value = sleepTime;
      sleepInput.setAttribute('aria-label', labels.sleepTime);
      const wakeInput = document.createElement('input');
      wakeInput.type = 'time';
      wakeInput.name = 'wakeTime';
      wakeInput.value = wakeTime;
      wakeInput.setAttribute('aria-label', labels.wakeTime);
      const saveSleep = document.createElement('button');
      saveSleep.type = 'submit';
      saveSleep.textContent = labels.done;
      const cancelSleep = document.createElement('button');
      cancelSleep.type = 'button';
      cancelSleep.textContent = labels.cancel;
      cancelSleep.addEventListener('click', () => {
        editingSleep = false;
        renderTab('alarms');
      });
      sleepForm.append(sleepInput, wakeInput, saveSleep, cancelSleep);
      sleepForm.addEventListener('submit', (event) => {
        event.preventDefault();
        sleepTime = sleepInput.value || sleepTime;
        wakeTime = wakeInput.value || wakeTime;
        editingSleep = false;
        renderTab('alarms');
      });
      sleepSection.append(sleepTitle, sleepForm);
    } else {
      const sleepRow = document.createElement('div');
      sleepRow.className = 'clock-sleep-summary';
      sleepRow.append(sleepTimes, changeSleep);
      sleepSection.append(sleepTitle, sleepRow);
    }

    const otherHeading = document.createElement('h2');
    otherHeading.className = 'clock-other-heading';
    otherHeading.textContent = labels.other;
    const list = document.createElement('div');
    list.className = 'clock-alarm-list';
    alarmItems.forEach((alarm) => {
      const row = document.createElement('article');
      row.className = 'clock-alarm-row';
      const info = document.createElement('div');
      info.className = 'clock-alarm-info';
      const time = document.createElement('time');
      const timeParts = formattedAlarmParts(alarm.time);
      const timeValue = document.createElement('span');
      timeValue.textContent = timeParts.time;
      const period = document.createElement('small');
      period.textContent = timeParts.period;
      time.append(...(timeParts.periodFirst ? [period, timeValue] : [timeValue, period]));
      const name = document.createElement('button');
      name.type = 'button';
      name.className = 'clock-alarm-name';
      name.textContent = alarm.label || labels.alarm;
      name.setAttribute('aria-label', `${labels.playSound}: ${alarm.label || labels.alarm}`);
      name.title = labels.playSound;
      name.addEventListener('click', () => {
        stopAlarmSound();
        startAlarmSound(alarm.label || labels.alarm, alarm);
      });
      info.append(time, name);
      const toggle = document.createElement('input');
      toggle.type = 'checkbox';
      toggle.className = 'clock-alarm-toggle';
      toggle.checked = Boolean(alarm.enabled);
      toggle.setAttribute('aria-label', `${alarm.label || labels.alarm} ${alarm.time}`);
      toggle.addEventListener('change', () => {
        alarm.enabled = toggle.checked;
        saveAlarms();
      });
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'clock-delete-alarm';
      remove.textContent = '×';
      remove.setAttribute('aria-label', labels.delete);
      remove.hidden = !editingAlarms;
      remove.addEventListener('click', () => {
        alarmItems = alarmItems.filter((item) => item.id !== alarm.id);
        saveAlarms();
        renderTab('alarms');
      });
      row.classList.toggle('disabled', !alarm.enabled);
      row.append(info, remove, toggle);
      list.append(row);
    });
    page.append(toolbar, heading, sleepSection, otherHeading, list);
    pageHost.append(page);
    if (showAlarmForm && alarmDraft) renderAddAlarmSheet();
  };

  const renderAddAlarmSheet = () => {
    const modal = document.createElement('div');
    modal.className = 'clock-alarm-modal';
    const sheet = document.createElement('section');
    sheet.className = 'clock-alarm-sheet';
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-modal', 'true');
    sheet.setAttribute('aria-label', labels.addAlarm);

    const header = document.createElement('header');
    header.className = 'clock-alarm-modal-header';
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'clock-alarm-modal-close';
    close.setAttribute('aria-label', labels.cancel);
    close.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg>';
    const title = document.createElement('h2');
    title.textContent = labels.addAlarm;
    const save = document.createElement('button');
    save.type = 'button';
    save.className = 'clock-alarm-modal-save';
    save.setAttribute('aria-label', labels.done);
    save.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7"/></svg>';
    header.append(close, title, save);

    const wheelGroup = document.createElement('div');
    wheelGroup.className = 'clock-alarm-wheels';
    const wheelConfigs = [
      { key: 'hour', values: Array.from({ length: 12 }, (_, index) => index + 1), format: (value) => String(value) },
      { key: 'minute', values: Array.from({ length: 60 }, (_, index) => index), format: (value) => String(value).padStart(2, '0') },
      { key: 'period', values: ['AM', 'PM'], format: (value) => value },
    ];
    wheelConfigs.forEach(({ key, values, format }) => {
      const wheel = document.createElement('div');
      wheel.className = `clock-alarm-wheel clock-alarm-wheel-${key}`;
      wheel.setAttribute('aria-label', key === 'period' ? `${labels.am}/${labels.pm}` : labels.alarm);
      const scroll = document.createElement('div');
      scroll.className = 'clock-alarm-wheel-scroll';
      scroll.tabIndex = 0;
      scroll.setAttribute('role', 'spinbutton');
      scroll.setAttribute('aria-valuemin', '0');
      scroll.setAttribute('aria-valuemax', String(values.length - 1));
      const items = [];
      values.forEach((value, index) => {
        const item = document.createElement('div');
        item.className = 'clock-alarm-wheel-item';
        item.textContent = key === 'period' ? (value === 'AM' ? labels.am : labels.pm) : format(value);
        scroll.append(item);
        items.push(item);
      });
      const selection = document.createElement('span');
      selection.className = 'clock-alarm-wheel-selection';
      const updateValue = () => {
        const index = Math.max(0, Math.min(values.length - 1, Math.round(scroll.scrollTop / 42)));
        alarmDraft[key] = values[index];
        scroll.setAttribute('aria-valuenow', String(index));
        scroll.setAttribute('aria-valuetext', String(key === 'period' ? (values[index] === 'AM' ? labels.am : labels.pm) : format(values[index])));
        items.forEach((item, itemIndex) => item.classList.toggle('selected', itemIndex === index));
      };
      scroll.addEventListener('scroll', updateValue, { passive: true });
      scroll.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') scroll.scrollTop = Math.max(0, scroll.scrollTop - 42);
        else if (event.key === 'ArrowDown') scroll.scrollTop = Math.min((values.length - 1) * 42, scroll.scrollTop + 42);
        else return;
        event.preventDefault();
      });
      wheel.append(scroll, selection);
      wheelGroup.append(wheel);
      const selectedIndex = values.indexOf(alarmDraft[key]);
      window.requestAnimationFrame(() => {
        scroll.scrollTop = Math.max(0, selectedIndex) * 42;
        updateValue();
      });
    });

    const settings = document.createElement('div');
    settings.className = 'clock-alarm-settings';
    const repeatRow = document.createElement('button');
    repeatRow.type = 'button';
    repeatRow.className = 'clock-alarm-setting-row clock-alarm-setting-button';
    const repeatName = document.createElement('span');
    repeatName.textContent = labels.repeat;
    const repeatValue = document.createElement('span');
    repeatValue.className = 'clock-alarm-setting-value';
    const updateRepeatValue = () => {
      repeatValue.textContent = alarmDraft.repeatDays.length
        ? alarmDraft.repeatDays.slice().sort((a, b) => a - b).map((day) => labels.repeatDayShort[day]).join(' ')
        : labels.never;
    };
    updateRepeatValue();
    const repeatChevron = document.createElement('span');
    repeatChevron.className = 'clock-alarm-chevron';
    repeatChevron.textContent = '›';
    repeatRow.append(repeatName, repeatValue, repeatChevron);
    const repeatDays = document.createElement('div');
    repeatDays.className = 'clock-alarm-repeat-days';
    repeatDays.hidden = !alarmDraft.repeatOpen;
    labels.repeatDayNames.forEach((dayName, dayIndex) => {
      const dayButton = document.createElement('button');
      dayButton.type = 'button';
      dayButton.className = 'clock-alarm-day';
      dayButton.textContent = labels.repeatDayShort[dayIndex];
      dayButton.setAttribute('aria-label', dayName);
      dayButton.setAttribute('aria-pressed', String(alarmDraft.repeatDays.includes(dayIndex)));
      dayButton.classList.toggle('selected', alarmDraft.repeatDays.includes(dayIndex));
      dayButton.addEventListener('click', () => {
        alarmDraft.repeatDays = alarmDraft.repeatDays.includes(dayIndex)
          ? alarmDraft.repeatDays.filter((day) => day !== dayIndex)
          : [...alarmDraft.repeatDays, dayIndex];
        dayButton.classList.toggle('selected', alarmDraft.repeatDays.includes(dayIndex));
        dayButton.setAttribute('aria-pressed', String(alarmDraft.repeatDays.includes(dayIndex)));
        updateRepeatValue();
      });
      repeatDays.append(dayButton);
    });
    repeatRow.addEventListener('click', () => {
      alarmDraft.repeatOpen = !alarmDraft.repeatOpen;
      repeatDays.hidden = !alarmDraft.repeatOpen;
      repeatRow.classList.toggle('expanded', alarmDraft.repeatOpen);
    });
    settings.append(repeatRow, repeatDays);

    const labelRow = document.createElement('label');
    labelRow.className = 'clock-alarm-setting-row';
    const labelName = document.createElement('span');
    labelName.textContent = labels.label;
    const labelInput = document.createElement('input');
    labelInput.className = 'clock-alarm-label-input';
    labelInput.type = 'text';
    labelInput.name = 'alarmLabel';
    labelInput.maxLength = 30;
    labelInput.value = alarmDraft.label || labels.alarm;
    labelInput.autocomplete = 'off';
    labelInput.spellcheck = false;
    labelInput.setAttribute('aria-label', labels.label);
    labelInput.addEventListener('input', () => { alarmDraft.label = labelInput.value; });
    labelRow.append(labelName, labelInput);
    settings.append(labelRow);

    const soundRow = document.createElement('button');
    soundRow.type = 'button';
    soundRow.className = 'clock-alarm-setting-row clock-alarm-setting-button';
    const soundName = document.createElement('span');
    soundName.textContent = labels.sound;
    const soundValue = document.createElement('span');
    soundValue.className = 'clock-alarm-setting-value';
    soundValue.textContent = labels.videoSound;
    const soundChevron = document.createElement('span');
    soundChevron.className = 'clock-alarm-chevron';
    soundChevron.textContent = '›';
    soundRow.append(soundName, soundValue, soundChevron);
    soundRow.addEventListener('click', () => {
      if (alarmPreviewAudio) alarmPreviewAudio.pause();
      alarmPreviewAudio = new Audio(new URL('assets/alarm-ring.m4a', document.baseURI).href);
      alarmPreviewAudio.play().catch(() => {});
    });
    settings.append(soundRow);

    const snoozeRow = document.createElement('div');
    snoozeRow.className = 'clock-alarm-setting-row';
    const snoozeName = document.createElement('span');
    snoozeName.textContent = labels.snooze;
    const snoozeToggle = document.createElement('input');
    snoozeToggle.type = 'checkbox';
    snoozeToggle.className = 'clock-alarm-toggle';
    snoozeToggle.checked = Boolean(alarmDraft.snoozeEnabled);
    snoozeToggle.setAttribute('aria-label', labels.snooze);
    snoozeRow.append(snoozeName, snoozeToggle);
    settings.append(snoozeRow);

    const snoozeDurationRow = document.createElement('div');
    snoozeDurationRow.className = 'clock-alarm-setting-row';
    const snoozeDurationName = document.createElement('span');
    snoozeDurationName.textContent = labels.snoozeDuration;
    const snoozeDurationButton = document.createElement('button');
    snoozeDurationButton.type = 'button';
    snoozeDurationButton.className = 'clock-alarm-snooze-duration';
    const snoozeChoices = [5, 10, 15];
    const updateSnoozeDuration = () => { snoozeDurationButton.textContent = `${alarmDraft.snoozeMinutes} ${labels.minuteUnit}`; };
    updateSnoozeDuration();
    snoozeDurationButton.disabled = !alarmDraft.snoozeEnabled;
    snoozeDurationButton.setAttribute('aria-label', labels.snoozeDuration);
    snoozeDurationButton.addEventListener('click', () => {
      const index = snoozeChoices.indexOf(alarmDraft.snoozeMinutes);
      alarmDraft.snoozeMinutes = snoozeChoices[(index + 1) % snoozeChoices.length];
      updateSnoozeDuration();
    });
    snoozeToggle.addEventListener('change', () => {
      alarmDraft.snoozeEnabled = snoozeToggle.checked;
      snoozeDurationButton.disabled = !snoozeToggle.checked;
    });
    snoozeDurationRow.append(snoozeDurationName, snoozeDurationButton);
    settings.append(snoozeDurationRow);

    const closeSheet = () => {
      showAlarmForm = false;
      alarmDraft = null;
      alarmPreviewAudio?.pause();
      alarmPreviewAudio = null;
      modal.remove();
      renderTab('alarms');
    };
    close.addEventListener('click', closeSheet);
    modal.addEventListener('click', (event) => { if (event.target === modal) closeSheet(); });
    save.addEventListener('click', () => {
      void prepareAlarmAudio();
      const hour24 = alarmDraft.hour % 12 + (alarmDraft.period === 'PM' ? 12 : 0);
      const time = `${String(hour24).padStart(2, '0')}:${String(alarmDraft.minute).padStart(2, '0')}`;
      alarmItems.push({
        id: `alarm-${Date.now()}`,
        time,
        label: labelInput.value.trim() || labels.alarm,
        repeatDays: alarmDraft.repeatDays.slice(),
        snoozeEnabled: alarmDraft.snoozeEnabled,
        snoozeMinutes: alarmDraft.snoozeMinutes,
        sound: 'assets/alarm-ring.m4a',
        enabled: true,
      });
      saveAlarms();
      closeSheet();
    });
    sheet.append(header, wheelGroup, settings);
    modal.append(sheet);
    appPanel.append(modal);
  };

  const renderStopwatch = () => {
    const page = document.createElement('section');
    page.className = 'clock-stopwatch-page';
    const display = document.createElement('output');
    display.className = 'clock-stopwatch-display';
    display.textContent = formatStopwatch(stopwatchRunning ? performance.now() - stopwatchStartedAt + stopwatchElapsed : stopwatchElapsed);
    const controls = document.createElement('div');
    controls.className = 'clock-round-controls';
    const lapButton = document.createElement('button');
    lapButton.type = 'button';
    lapButton.className = 'clock-round-button secondary';
    lapButton.textContent = labels.lap;
    lapButton.disabled = !stopwatchRunning;
    lapButton.addEventListener('click', () => {
      laps.unshift(formatStopwatch(performance.now() - stopwatchStartedAt + stopwatchElapsed));
      renderTab('stopwatch');
    });
    const startButton = document.createElement('button');
    startButton.type = 'button';
    startButton.className = `clock-round-button ${stopwatchRunning ? 'stop' : 'go'}`;
    startButton.textContent = stopwatchRunning ? labels.stop : labels.start;
    startButton.addEventListener('click', () => {
      if (stopwatchRunning) {
        stopwatchElapsed += performance.now() - stopwatchStartedAt;
        stopwatchRunning = false;
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
      } else {
        stopwatchStartedAt = performance.now();
        stopwatchRunning = true;
        stopwatchInterval = window.setInterval(() => {
          const currentDisplay = pageHost.querySelector('.clock-stopwatch-display');
          if (currentDisplay) currentDisplay.textContent = formatStopwatch(performance.now() - stopwatchStartedAt + stopwatchElapsed);
        }, 30);
      }
      renderTab('stopwatch');
    });
    const resetButton = document.createElement('button');
    resetButton.type = 'button';
    resetButton.className = 'clock-round-button secondary';
    resetButton.textContent = labels.reset;
    resetButton.disabled = !stopwatchRunning && stopwatchElapsed === 0 && laps.length === 0;
    resetButton.addEventListener('click', () => {
      stopwatchElapsed = 0;
      stopwatchRunning = false;
      laps = [];
      clearInterval(stopwatchInterval);
      stopwatchInterval = null;
      renderTab('stopwatch');
    });
    controls.append(lapButton, startButton, resetButton);
    const lapList = document.createElement('div');
    lapList.className = 'clock-lap-list';
    laps.forEach((lap, index) => {
      const row = document.createElement('div');
      row.className = 'clock-lap-row';
      row.innerHTML = `<span>${labels.lapLabel} ${laps.length - index}</span><time></time>`;
      row.querySelector('time').textContent = lap;
      lapList.append(row);
    });
    page.append(display, controls, lapList);
    pageHost.append(page);
  };

  const renderTimer = () => {
    const page = document.createElement('section');
    page.className = 'clock-timer-page';
    if (timerRemaining > 0 && !timerRunning) {
      timerSelection = {
        hours: Math.floor(timerRemaining / 3600),
        minutes: Math.floor(timerRemaining / 60) % 60,
        seconds: timerRemaining % 60,
      };
    }
    let display;
    if (timerRunning) {
      display = document.createElement('output');
      display.className = 'clock-timer-display';
      display.textContent = formatTimer(Math.max(0, Math.ceil((timerEndAt - Date.now()) / 1000)));
      page.append(display);
    } else {
      const wheels = document.createElement('div');
      wheels.className = 'clock-timer-wheels';
      const wheelConfig = [
        { label: labels.hours, unit: labels.hourUnit, key: 'hours', max: 23 },
        { label: labels.minutes, unit: labels.minuteUnit, key: 'minutes', max: 59 },
        { label: labels.seconds, unit: labels.secondUnit, key: 'seconds', max: 59 },
      ];
      wheelConfig.forEach(({ label, unit, key, max }) => {
        const column = document.createElement('div');
        column.className = 'clock-timer-wheel-column';
        column.setAttribute('aria-label', label);
        const scroll = document.createElement('div');
        scroll.className = 'clock-wheel-scroll';
        scroll.tabIndex = timerRunning ? -1 : 0;
        scroll.setAttribute('role', 'spinbutton');
        scroll.setAttribute('aria-label', label);
        scroll.setAttribute('aria-valuemin', '0');
        scroll.setAttribute('aria-valuemax', String(max));
        scroll.setAttribute('aria-valuenow', String(timerSelection[key]));
        scroll.setAttribute('aria-valuetext', `${timerSelection[key]} ${unit}`);
        if (timerRunning) scroll.setAttribute('aria-disabled', 'true');
        const itemNodes = [];
        for (let value = 0; value <= max; value += 1) {
          const item = document.createElement('div');
          item.className = `clock-wheel-item${value === timerSelection[key] ? ' selected' : ''}`;
          item.dataset.value = String(value);
          const number = document.createElement('span');
          number.textContent = String(value);
          const suffix = document.createElement('small');
          suffix.textContent = unit;
          item.append(number, suffix);
          scroll.append(item);
          itemNodes.push(item);
        }
        const selectionMark = document.createElement('span');
        selectionMark.className = 'clock-wheel-selection';
        selectionMark.setAttribute('aria-hidden', 'true');
        column.append(scroll, selectionMark);

        const updateSelection = () => {
          const value = Math.max(0, Math.min(max, Math.round(scroll.scrollTop / 42)));
          timerSelection[key] = value;
          if (!timerRunning && timerRemaining > 0) {
            timerRemaining = timerSelection.hours * 3600 + timerSelection.minutes * 60 + timerSelection.seconds;
          }
          scroll.setAttribute('aria-valuenow', String(value));
          scroll.setAttribute('aria-valuetext', `${value} ${unit}`);
          itemNodes.forEach((item, index) => item.classList.toggle('selected', index === value));
        };
        scroll.addEventListener('scroll', updateSelection, { passive: true });
        scroll.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowUp') scroll.scrollTop = Math.max(0, scroll.scrollTop - 42);
          else if (event.key === 'ArrowDown') scroll.scrollTop = Math.min(max * 42, scroll.scrollTop + 42);
          else return;
          event.preventDefault();
        });
        wheels.append(column);
        window.requestAnimationFrame(() => { scroll.scrollTop = timerSelection[key] * 42; });
      });
      page.append(wheels);
    }
    const controls = document.createElement('div');
    controls.className = 'clock-timer-controls';
    const action = document.createElement('button');
    action.type = 'button';
    action.className = 'clock-timer-action';
    action.textContent = timerRunning ? labels.pause : timerRemaining > 0 ? labels.resume : labels.setTimer;
    action.addEventListener('click', () => {
      if (timerRunning) {
        timerRemaining = Math.max(0, Math.ceil((timerEndAt - Date.now()) / 1000));
        timerRunning = false;
        clearInterval(timerInterval);
        timerInterval = null;
      } else {
        if (!timerRemaining) timerRemaining = timerSelection.hours * 3600 + timerSelection.minutes * 60 + timerSelection.seconds;
        if (!timerRemaining) return;
        timerEndAt = Date.now() + timerRemaining * 1000;
        timerRunning = true;
        timerInterval = window.setInterval(() => {
          timerRemaining = Math.max(0, Math.ceil((timerEndAt - Date.now()) / 1000));
          const currentDisplay = pageHost.querySelector('.clock-timer-display');
          if (currentDisplay) currentDisplay.textContent = formatTimer(timerRemaining);
          if (timerRemaining <= 0) {
            timerRunning = false;
            timerSelection = { hours: 0, minutes: 0, seconds: 0 };
            clearInterval(timerInterval);
            timerInterval = null;
            startAlarmSound(labels.timerFinished);
            if (activeTab === 'timers') renderTab('timers');
          }
        }, 250);
      }
      renderTab('timers');
    });
    const reset = document.createElement('button');
    reset.type = 'button';
    reset.className = 'clock-timer-reset';
    reset.textContent = labels.reset;
    reset.addEventListener('click', () => {
      timerRemaining = 0;
      timerRunning = false;
      timerSelection = { hours: 0, minutes: 0, seconds: 0 };
      clearInterval(timerInterval);
      timerInterval = null;
      renderTab('timers');
    });
    controls.append(action, reset);
    page.append(controls);
    pageHost.append(page);
  };

  const renderTab = (tab) => {
    activeTab = tab;
    appPanel.classList.toggle('clock-alarms-view', tab === 'alarms');
    pageHost.replaceChildren();
    const index = tabKeys.indexOf(tab);
    $('#panelTitle').textContent = labels.tabs[index];
    tabbar.querySelectorAll('button').forEach((button) => {
      const selected = button.dataset.clockTab === tab;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-selected', String(selected));
    });
    if (tab === 'world') renderWorld();
    if (tab === 'alarms') renderAlarms();
    if (tab === 'stopwatch') renderStopwatch();
    if (tab === 'timers') renderTimer();
  };

  tabKeys.forEach((key, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'clock-tab';
    button.dataset.clockTab = key;
    button.setAttribute('role', 'tab');
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = iconPaths[key];
    const name = document.createElement('span');
    name.textContent = labels.tabs[index];
    button.append(icon, name);
    button.addEventListener('click', () => renderTab(key));
    tabbar.append(button);
  });
  renderTab(activeTab);
  alarmCheckInterval = window.setInterval(checkAlarms, 1000);

  return {
    tabbar,
    cleanup: () => {
      clearInterval(stopwatchInterval);
      clearInterval(timerInterval);
      clearInterval(alarmCheckInterval);
      stopAlarmSound();
      snoozedAlarm = null;
      alarmPreviewAudio?.pause();
      appPanel.querySelector('.clock-alarm-modal')?.remove();
      stopwatchInterval = null;
      timerInterval = null;
      alarmCheckInterval = null;
    },
  };
}

function updateWorldClock() {
  if (currentAppType !== 'clock') return;
  const now = new Date();
  document.querySelectorAll('.clock-city-time').forEach((element) => {
    element.textContent = new Intl.DateTimeFormat(copy().locale, { hour: 'numeric', minute: '2-digit', timeZone: element.dataset.timeZone }).format(now);
  });
  document.querySelectorAll('.clock-city-date').forEach((element) => {
    element.textContent = new Intl.DateTimeFormat(copy().locale, { weekday: 'short', month: 'short', day: 'numeric', timeZone: element.dataset.timeZone }).format(now);
  });
}

async function openCamera() {
  closeApp();
  currentAppType = 'camera';
  updateAppStatusSurface('camera');
  appPanel.classList.add('camera-open');
  $('#panelTitle').textContent = copy().camera;
  const content = $('#panelContent');
  content.replaceChildren();
  const camera = document.createElement('section');
  camera.className = 'camera-screen';
  const top = document.createElement('div');
  top.className = 'camera-top-controls';
  const topLine = document.createElement('div');
  topLine.className = 'camera-top-line';
  const exposure = document.createElement('span');
  exposure.className = 'camera-exposure';
  exposure.innerHTML = '<small>EV</small> 2.3';
  const formatButton = document.createElement('button');
  formatButton.type = 'button';
  formatButton.className = 'camera-format-button';
  formatButton.setAttribute('aria-label', copy().camera);
  formatButton.innerHTML = '<svg viewBox="0 0 28 28" aria-hidden="true"><path d="M5 4.5 15 9v15L5 19.5zM13 3l10 4.5v15L13 18"/></svg>';
  topLine.append(exposure, formatButton);
  const tools = document.createElement('div');
  tools.className = 'camera-tool-strip';
  ['◌', 'ϟ', '◉', '⠿'].forEach((symbol) => {
    const tool = document.createElement('span');
    tool.textContent = symbol;
    tool.setAttribute('aria-hidden', 'true');
    tools.append(tool);
  });
  top.append(topLine, tools);

  const preview = document.createElement('div');
  preview.className = 'camera-preview-frame';
  const previewImage = document.createElement('img');
  previewImage.className = 'camera-preview-image';
  previewImage.src = 'assets/IMG_7591.GIF';
  previewImage.alt = copy().camera;
  previewImage.setAttribute('aria-hidden', 'true');
  const grid = document.createElement('div');
  grid.className = 'camera-preview-grid';
  grid.setAttribute('aria-hidden', 'true');
  const zoom = document.createElement('div');
  zoom.className = 'camera-zoom-levels';
  ['.5', '1×', '2'].forEach((level, index) => {
    const zoomLevel = document.createElement('span');
    zoomLevel.className = index === 1 ? 'selected' : '';
    zoomLevel.textContent = level;
    zoom.append(zoomLevel);
  });
  preview.append(previewImage, grid, zoom);

  const bottom = document.createElement('div');
  bottom.className = 'camera-bottom-controls';
  const shutterRow = document.createElement('div');
  shutterRow.className = 'camera-shutter-row';
  const shutter = document.createElement('button');
  shutter.type = 'button';
  shutter.className = 'camera-shutter-button';
  shutter.setAttribute('aria-label', copy().cameraTakePhoto);
  shutterRow.append(shutter);
  const footer = document.createElement('div');
  footer.className = 'camera-footer-row';
  const latestPhoto = [...PHOTO_LIBRARY].filter((item) => item.type === 'photo')
    .sort((a, b) => a.sortKey.localeCompare(b.sortKey) || a.index - b.index).pop();
  const latestButton = document.createElement('button');
  latestButton.type = 'button';
  latestButton.className = 'camera-latest-photo';
  latestButton.setAttribute('aria-label', latestPhoto?.caption || copy().apps.photos);
  if (latestPhoto) {
    const latestImage = document.createElement('img');
    latestImage.src = photoAssetPath(latestPhoto.file);
    latestImage.alt = '';
    latestButton.append(latestImage);
  }
  latestButton.addEventListener('click', () => {
    if (!latestPhoto) return;
    openPhotoViewer(latestPhoto, { returnToCamera: true });
  });
  const modes = document.createElement('div');
  modes.className = 'camera-mode-switch';
  const videoMode = document.createElement('button');
  videoMode.type = 'button';
  videoMode.textContent = copy().cameraVideo;
  const photoMode = document.createElement('button');
  photoMode.type = 'button';
  photoMode.className = 'selected';
  photoMode.textContent = copy().cameraPhoto;
  [videoMode, photoMode].forEach((modeButton) => modeButton.addEventListener('click', () => {
    videoMode.classList.toggle('selected', modeButton === videoMode);
    photoMode.classList.toggle('selected', modeButton === photoMode);
  }));
  modes.append(videoMode, photoMode);
  const switchButton = document.createElement('button');
  switchButton.type = 'button';
  switchButton.className = 'camera-switch-button';
  switchButton.setAttribute('aria-label', copy().cameraSwitch);
  switchButton.innerHTML = '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 17.5A16.5 16.5 0 0 1 36.2 8M36.2 8V3.8M36.2 8h-4.3M40 30.5A16.5 16.5 0 0 1 11.8 40M11.8 40v4.2M11.8 40h4.3"/><path d="M17.5 19.5h13a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 15 29v-7a2.5 2.5 0 0 1 2.5-2.5Z"/><circle cx="24" cy="26" r="3.5"/><path d="m19 19.5 1.5-2h4l1.5 2"/></svg>';
  footer.append(latestButton, modes, switchButton);
  bottom.append(shutterRow, footer);
  camera.append(top, preview, bottom);
  content.append(camera);
  appPanel.classList.add('open');
  appPanel.setAttribute('aria-hidden', 'false');
}

function closeApp() {
  appPanel.querySelectorAll('iframe[src*="youtube.com/embed"], iframe[src*="youtube-nocookie.com/embed"]').forEach((frame) => { frame.src = 'about:blank'; });
  appPanel.querySelector('.reminder-add-button')?.remove();
  appPanel.querySelector('.clock-tabbar')?.remove();
  appPanel.querySelector('.photo-viewer')?.dismiss?.();
  if (clockCleanup) clockCleanup();
  clockCleanup = null;
  mailInboxReturn = null;
  appPanel.classList.remove('mail-message-open');
  $('#closeApp').textContent = '‹';
  $('#closeApp').setAttribute('aria-label', copy().close);
  appPanel.classList.remove('open');
  appPanel.classList.remove('weather-open');
  appPanel.classList.remove('calendar-open');
  appPanel.classList.remove('clock-open');
  appPanel.classList.remove('clock-alarms-view');
  appPanel.classList.remove('camera-open');
  appPanel.classList.remove('youtube-open');
  appPanel.classList.remove('instagram-open');
  appPanel.classList.remove('phone-open');
  appPanel.classList.remove('spotify-open');
  appPanel.classList.remove('naver-open');
  appPanel.classList.remove('kakaotalk-open');
  screen.classList.remove('clock-app-open');
  appPanel.setAttribute('aria-hidden', 'true');
  updateAppStatusSurface(null);
  currentAppType = null;
  if (cameraStream) {
    cameraStream.getTracks().forEach((track) => track.stop());
    cameraStream = null;
  }
}

function drawBackdrop() {
  const canvas = $('.starfield');
  const context = canvas.getContext('2d');
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * pixelRatio;
  canvas.height = window.innerHeight * pixelRatio;
  context.scale(pixelRatio, pixelRatio);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const gradient = context.createRadialGradient(width * .5, height * .44, 0, width * .5, height * .44, Math.max(width, height) * .7);
  gradient.addColorStop(0, '#171526');
  gradient.addColorStop(1, '#07080c');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  let seed = 142;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  for (let i = 0; i < 175; i++) {
    const x = random() * width;
    const y = random() * height;
    const radius = random() * 1.35 + .25;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(219,211,255,${random() * .55 + .13})`;
    context.fill();
  }
}

function setDynamicIslandExpanded(expanded) {
  const island = $('#dynamicIsland');
  island.classList.toggle('expanded', expanded);
  island.setAttribute('aria-expanded', String(expanded));
  island.setAttribute('aria-label', expanded ? copy().dynamicIslandExpanded : copy().dynamicIsland);
  $('#islandDetails').setAttribute('aria-hidden', String(!expanded));
}

async function toggleFlashlight(button) {
  const turnOn = !button.classList.contains('active');
  button.classList.toggle('active', turnOn);
  button.setAttribute('aria-pressed', String(turnOn));
  screen.classList.toggle('flash-on', turnOn);

  if (!turnOn) {
    flashlightStream?.getTracks().forEach((track) => track.stop());
    flashlightStream = null;
    return;
  }

  // On phones that expose the camera torch to the browser, use the real LED.
  // The screen glow remains as a visual fallback on devices without torch support.
  if (!navigator.mediaDevices?.getUserMedia) return;
  try {
    flashlightStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false });
    const track = flashlightStream.getVideoTracks()[0];
    const canUseTorch = track?.getCapabilities?.().torch === true;
    if (canUseTorch) await track.applyConstraints({ advanced: [{ torch: true }] });
    else {
      flashlightStream.getTracks().forEach((item) => item.stop());
      flashlightStream = null;
    }
  } catch (_error) {
    flashlightStream?.getTracks().forEach((track) => track.stop());
    flashlightStream = null;
  }
}

function setupInteractions() {
  $('#dynamicIsland').addEventListener('click', () => setDynamicIslandExpanded(!$('#dynamicIsland').classList.contains('expanded')));
  $('#openPrompt').addEventListener('click', swipeToOpen);
  $('#notification').addEventListener('click', () => {
    if (currentView === 'lock' && PHONE_CONFIG.requirePasscode) {
      pendingAppLaunch = 'reminders';
      pendingSpotifyLaunch = false;
      $('#passcodeTitle').textContent = copy().passcode;
      showView('passcode');
      return;
    }
    if (currentView === 'lock') {
      showView('home');
    }
    openApp('reminders');
  });
  $('#lockWeather').addEventListener('click', () => openApp('weather'));
  $('#flashlightButton').addEventListener('click', (event) => toggleFlashlight(event.currentTarget));
  $('#cameraButton').addEventListener('click', openCamera);
  $('#spotifyShortcut').addEventListener('click', () => {
    pendingSpotifyLaunch = true;
    openPasscode();
  });
  document.querySelectorAll('.widget[data-app]').forEach((widget) => {
    widget.addEventListener('click', () => openApp(widget.dataset.app.toLowerCase()));
  });
  $('#keypad').addEventListener('click', (event) => {
    const key = event.target.closest('[data-digit]');
    if (key) enterDigit(key.dataset.digit);
  });
  $('#deleteKey').addEventListener('click', deleteDigit);
  $('#cancelUnlock').addEventListener('click', () => showView('lock'));
  $('#emergencyButton').addEventListener('click', () => openApp('emergency'));
  $('#closeApp').addEventListener('click', () => {
    if (currentAppType === 'mail' && mailInboxReturn) {
      mailInboxReturn();
      return;
    }
    closeApp();
  });
  $('#homeIndicator').addEventListener('click', () => {
    if (appPanel.classList.contains('open')) closeApp();
    else if (currentView === 'passcode') showView('lock');
    else if (currentView === 'lock') openPasscode();
    else showView('lock');
  });
  $('#searchButton').addEventListener('click', () => {
    openApp('naver');
    appPanel.querySelector('.naver-search input')?.focus();
  });
  $('#languageToggle').addEventListener('click', toggleLanguageMenu);
  $('#languageMenu').addEventListener('click', (event) => {
    const option = event.target.closest('[data-language]');
    if (option) setLanguage(option.dataset.language);
  });
  document.addEventListener('click', (event) => {
    const menu = $('#languageMenu');
    if (!menu.hidden && !menu.contains(event.target) && !$('#languageToggle').contains(event.target)) {
      menu.hidden = true;
      $('#languageToggle').setAttribute('aria-expanded', 'false');
    }
    if ($('#dynamicIsland').classList.contains('expanded') && !$('#dynamicIsland').contains(event.target)) setDynamicIslandExpanded(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !$('#languageMenu').hidden) {
      $('#languageMenu').hidden = true;
      $('#languageToggle').setAttribute('aria-expanded', 'false');
    }
    if (event.key === 'Escape' && $('#dynamicIsland').classList.contains('expanded')) {
      setDynamicIslandExpanded(false);
      return;
    }
    if (currentView !== 'passcode') return;
    if (/^\d$/.test(event.key)) enterDigit(event.key);
    else if (event.key === 'Backspace') deleteDigit();
    else if (event.key === 'Escape') showView('lock');
  });
  let startY = null;
  screen.addEventListener('pointerdown', (event) => { startY = event.clientY; });
  screen.addEventListener('pointerup', (event) => {
    if (startY !== null && currentView === 'lock' && startY - event.clientY > 45) swipeToOpen();
    if (startY !== null && currentView === 'home' && !appPanel.classList.contains('open') && event.clientY - startY > 75) showView('lock');
    startY = null;
  });
}

drawBackdrop();
applyLanguage();
loadSeoulWeather();
window.setInterval(updateClock, 1_000);
window.setInterval(updateWorldClock, 15_000);
window.setInterval(loadSeoulWeather, 15 * 60 * 1000);
window.addEventListener('resize', drawBackdrop);
setupInteractions();
