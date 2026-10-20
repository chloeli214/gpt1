/*
 * EDIT HERE FIRST
 * ----------------
 * Change passcode, sample data, and the home screen app list here.
 * Translated interface copy is in COPY below.
 */
const PHONE_CONFIG = {
  passcode: '0913',
  requirePasscode: false,
  appName: 'Orbit Phone',
  location: 'Seoul',
  temperature: '18°',
  apps: [
    { name: 'Reminders', icon: '☷', color: 'linear-gradient(145deg,#ffffff,#f1f2f4)', type: 'reminders' },
    { name: 'Photos', icon: '✿', color: 'linear-gradient(145deg,#fff,#d8e9ff)', type: 'photos' },
    { name: 'Mail', icon: '✉', color: 'linear-gradient(145deg,#64c5ff,#2374eb)', badge: '6', type: 'mail' },
    { name: 'Calendar', icon: '17', color: '#fff', type: 'calendar' },
    { name: 'Clock', icon: '◷', color: 'linear-gradient(145deg,#fff,#e6e6e6)', type: 'clock' },
    { name: 'Notes', icon: '▤', color: 'linear-gradient(145deg,#fff5a7,#f4bb27)', type: 'notes' },
    { name: 'Weather', icon: '⛅', color: 'linear-gradient(145deg,#8ed3ff,#498fe7)', type: 'weather' },
    { name: 'Settings', icon: '⚙', color: 'linear-gradient(145deg,#c4c8d0,#70747f)', type: 'settings' },
    { name: 'Calculator', icon: '＋', color: 'linear-gradient(145deg,#3a3a3c,#111113)', type: 'calculator' },
    { name: 'YouTube', icon: '▶', color: '#fff', type: 'youtube' },
    { name: 'Camera', icon: '▣', color: 'linear-gradient(145deg,#70747b,#17191e)', type: 'camera' },
  ],
  dock: [
    { name: 'Phone', icon: '☎', color: 'linear-gradient(145deg,#6edc77,#21a94a)', type: 'phone' },
    { name: 'Naver', icon: 'N', color: '#03C75A', type: 'naver' },
    { name: 'KakaoTalk', icon: 'TALK', color: '#FAE100', type: 'kakaotalk' },
    { name: 'Spotify', icon: '♫', color: '#000', type: 'spotify' },
  ],
};

// Public RIIZE schedule entries for 2026. Edit this list to add or correct dates.
const RIIZE_CALENDAR_YEAR = 2026;
const RIIZE_2026_EVENTS = [
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
  { date: '2026-03-21', title: 'Anton’s birthday', titleByLanguage: { en: 'Anton’s birthday', 'zh-Hant': 'Anton 生日', ko: '앤톤 생일' }, type: 'birthday', location: 'Happy birthday, Anton!', locationByLanguage: { en: 'Happy birthday, Anton!', 'zh-Hant': 'Anton，生日快樂！', ko: '앤톤 생일 축하해!' } },
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
      'Anton’s radio program': 'Anton 的電台節目', 'Korea': '韓國', 'Online broadcast': '線上播出',
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
    calendarCategories: { concert: 'Concert', comeback: 'Release', fansign: 'Fansign', fanmeeting: 'Fan meeting', festival: 'Festival', awards: 'Awards', performance: 'Appearance', event: 'Event', birthday: 'Birthday' },
    weatherCredit: 'Weather data by Open-Meteo', spotifyLabel: 'Spotify', spotifyUnlock: 'Enter your passcode to open Spotify',
    spotifyPopup: 'Spotify could not open automatically. Tap here to open Spotify.', batteryStatus: 'Battery 23 percent', caption: 'A little world in your pocket', calendarDay: 'SATURDAY',
    cameraUnavailable: 'Camera access is unavailable in this browser.', cameraPermission: 'Allow camera access in your browser to use the camera preview.',
    conditions: { clear: 'Clear', mostlyClear: 'Mostly clear', partlyCloudy: 'Partly cloudy', cloudy: 'Cloudy', fog: 'Fog', drizzle: 'Drizzle', rain: 'Rain', snow: 'Snow', showers: 'Rain showers', storm: 'Thunderstorm' },
    apps: { reminders: 'Reminders', photos: 'Photos', mail: 'Mail', calendar: 'Calendar', clock: 'Clock', notes: 'Notes', weather: 'Weather', settings: 'Settings', calculator: 'Calculator', youtube: 'YouTube', camera: 'Camera', phone: 'Phone', browser: 'Safari', messages: 'Messages', music: 'Music', naver: 'Naver', kakaotalk: 'KakaoTalk', spotify: 'Spotify' },
    details: {
      photos: ['Recent memories', 'Your photos will live here. This screen is ready for your own images.'],
      mail: ['Inbox', 'Welcome to Orbit Phone. Your inbox is looking peaceful.'],
      calendar: ['Calendar', '9:00 AM  ·  Coffee with Alex\nAll day  ·  Groceries\nAll day  ·  Laundry'],
      clock: ['World clock', 'Seoul  9:41\nHong Kong  8:41\nNew York  8:41 PM'],
      notes: ['Quick note', 'Tap to add your own idea. The Notes preview content is in app.js.'],
      reminders: ['Reminders', '__IMPORTANT__\nDinner with Eunseok · Tomorrow at 7:00 PM\n__REMINDER__\nCheck today’s schedule\nWarm up your voice\nPractice choreography\nPack in-ear monitors and stage essentials\nDrink water and stretch'],
    weather: ['Mostly sunny', 'Seoul\n18°  ·  Feels like 19°\nHigh 21°  ·  Low 12°'],
      settings: ['Settings', ''], calculator: ['Calculator', ''], youtube: ['YouTube', 'Open YouTube to browse videos.'],
      naver: ['Naver', 'Open Naver search.'], kakaotalk: ['KakaoTalk', 'Open KakaoTalk.'],
      phone: ['Favorites', 'Mom\nAlex\nVoicemail'], browser: ['Start page', 'Search or enter website name'],
      messages: ['Messages', 'Alex  ·  See you soon!\nMina  ·  That sounds perfect\nSam  ·  Sent a photo'],
      music: ['Now playing', 'A little starlight\nYour music player preview'], search: ['Search', 'Search apps, messages, and more'],
      notification: ['Reminder', 'Dinner with Eunseok · Tomorrow at 7:00 PM'], emergency: ['Emergency call', 'This is a visual demo. No calls can be placed.'],
      spotify: ['Spotify', 'Spotify will open in a new browser tab after you unlock the phone.'],
    },
    settingsRows: ['Dark appearance', 'Notifications', 'Wallpaper'], defaultApp: 'This app preview is ready for you to customize.',
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
    calendarCategories: { concert: '演唱會', comeback: '發行', fansign: '簽售會', fanmeeting: '粉絲見面會', festival: '音樂節', awards: '頒獎典禮', performance: '演出', event: '活動', birthday: '生日' },
    weatherCredit: '天氣資料來源：Open-Meteo', spotifyLabel: 'Spotify', spotifyUnlock: '輸入密碼以開啟 Spotify',
    spotifyPopup: 'Spotify 未能自動開啟。點此開啟 Spotify。', batteryStatus: '電量 23%', caption: '掌心裡的小小世界', calendarDay: '星期六',
    cameraUnavailable: '此瀏覽器無法使用相機。', cameraPermission: '請允許瀏覽器使用相機，以開啟相機預覽。',
    conditions: { clear: '晴朗', mostlyClear: '大致晴朗', partlyCloudy: '局部多雲', cloudy: '多雲', fog: '有霧', drizzle: '毛毛雨', rain: '下雨', snow: '下雪', showers: '陣雨', storm: '雷雨' },
    apps: { reminders: '提醒事項', photos: '照片', mail: '郵件', calendar: '行事曆', clock: '時鐘', notes: '備忘錄', weather: '天氣', settings: '設定', calculator: '計算機', youtube: 'YouTube', camera: '相機', phone: '電話', browser: 'Safari', messages: '訊息', music: '音樂', naver: 'Naver', kakaotalk: 'KakaoTalk', spotify: 'Spotify' },
    details: {
      photos: ['最近回憶', '你的照片可以放在這裡。這個畫面已準備好加入圖片。'],
      mail: ['收件匣', '歡迎來到 Orbit Phone。你的收件匣目前很清靜。'],
      calendar: ['行事曆', '上午 9:00  ·  和 Alex 喝咖啡\n全天  ·  買菜\n全天  ·  洗衣服'],
      clock: ['世界時鐘', '首爾  9:41\n香港  8:41\n紐約  晚上 8:41'],
      notes: ['快速備忘', '點一下即可新增想法。你可以在 app.js 修改備忘錄預覽內容。'],
      reminders: ['提醒事項', '__IMPORTANT__\n和恩奭共進晚餐 · 明晚 7:00\n__REMINDER__\n確認今天的行程\n進行聲音暖身\n練習舞蹈\n準備耳返與舞台用品\n補充水分並伸展'],
      weather: ['晴時多雲', '首爾\n18°  ·  體感 19°\n最高 21°  ·  最低 12°'],
      settings: ['設定', ''], calculator: ['計算機', ''], youtube: ['YouTube', '開啟 YouTube 瀏覽影片。'],
      naver: ['Naver', '開啟 Naver 搜尋。'], kakaotalk: ['KakaoTalk', '開啟 KakaoTalk。'],
      phone: ['常用聯絡人', '媽媽\nAlex\n語音留言'], browser: ['起始頁', '搜尋或輸入網站名稱'],
      messages: ['訊息', 'Alex  ·  等等見！\nMina  ·  聽起來很棒\nSam  ·  傳送了一張照片'],
      music: ['正在播放', '一點星光\n音樂播放器預覽'], search: ['搜尋', '搜尋 App、訊息及其他內容'],
      notification: ['提醒事項', '和恩奭共進晚餐 · 明晚 7:00'], emergency: ['緊急通話', '這是互動示範，無法撥打電話。'],
      spotify: ['Spotify', '解鎖手機後，Spotify 會在新的瀏覽器分頁開啟。'],
    },
    settingsRows: ['深色外觀', '通知', '背景圖片'], defaultApp: '你可以自訂這個 App 的預覽畫面。',
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
    calendarCategories: { concert: '콘서트', comeback: '발매', fansign: '팬사인회', fanmeeting: '팬미팅', festival: '페스티벌', awards: '시상식', performance: '출연', event: '이벤트', birthday: '생일' },
    weatherCredit: '날씨 정보 제공: Open-Meteo', spotifyLabel: 'Spotify', spotifyUnlock: 'Spotify를 열려면 암호를 입력하세요',
    spotifyPopup: 'Spotify를 자동으로 열 수 없습니다. 여기를 눌러 Spotify를 여세요.', batteryStatus: '배터리 23%', caption: '손안의 작은 세상', calendarDay: '토요일',
    cameraUnavailable: '이 브라우저에서는 카메라를 사용할 수 없습니다.', cameraPermission: '카메라 미리보기를 사용하려면 브라우저에서 카메라 접근을 허용하세요.',
    conditions: { clear: '맑음', mostlyClear: '대체로 맑음', partlyCloudy: '구름 조금', cloudy: '흐림', fog: '안개', drizzle: '이슬비', rain: '비', snow: '눈', showers: '소나기', storm: '뇌우' },
    apps: { reminders: '미리 알림', photos: '사진', mail: '메일', calendar: '캘린더', clock: '시계', notes: '메모', weather: '날씨', settings: '설정', calculator: '계산기', youtube: 'YouTube', camera: '카메라', phone: '전화', browser: 'Safari', messages: '메시지', music: '음악', naver: '네이버', kakaotalk: '카카오톡', spotify: 'Spotify' },
    details: {
      photos: ['최근 추억', '사진을 여기에 모아 보세요. 나만의 이미지로 꾸밀 수 있습니다.'],
      mail: ['받은 편지함', 'Orbit Phone에 오신 것을 환영해요. 받은 편지함이 한가롭네요.'],
      calendar: ['캘린더', '오전 9:00  ·  Alex와 커피\n종일  ·  장보기\n종일  ·  빨래'],
      clock: ['세계 시계', '서울  9:41\n홍콩  8:41\n뉴욕  오후 8:41'],
      notes: ['빠른 메모', '탭해서 아이디어를 적어 보세요. app.js에서 미리보기 문구를 수정할 수 있어요.'],
      reminders: ['미리 알림', '__IMPORTANT__\n은석이와 저녁 식사 · 내일 오후 7:00\n__REMINDER__\n오늘 일정 확인하기\n보컬 워밍업하기\n안무 연습하기\n인이어와 무대 준비물 챙기기\n물 마시고 스트레칭하기'],
      weather: ['대체로 맑음', '서울\n18°  ·  체감 19°\n최고 21°  ·  최저 12°'],
      settings: ['설정', ''], calculator: ['계산기', ''], youtube: ['YouTube', 'YouTube에서 동영상을 둘러보세요.'],
      naver: ['네이버', '네이버 검색을 엽니다.'], kakaotalk: ['카카오톡', '카카오톡을 엽니다.'],
      phone: ['즐겨찾기', '엄마\nAlex\n음성 사서함'], browser: ['시작 페이지', '검색하거나 웹사이트 주소 입력'],
      messages: ['메시지', 'Alex  ·  이따 봐!\nMina  ·  정말 좋다\nSam  ·  사진을 보냈어요'],
      music: ['재생 중', '작은 별빛\n음악 플레이어 미리보기'], search: ['검색', '앱, 메시지 등을 검색'],
      notification: ['미리 알림', '은석이와 저녁 식사 · 내일 오후 7:00'], emergency: ['긴급 통화', '시각적 데모이며 실제 통화는 연결되지 않습니다.'],
      spotify: ['Spotify', '휴대폰 잠금을 해제하면 Spotify가 새 브라우저 탭에서 열립니다.'],
    },
    settingsRows: ['다크 모드', '알림', '배경화면'], defaultApp: '이 앱 미리보기는 자유롭게 수정할 수 있어요.',
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
let cameraStream = null;
let flashlightStream = null;

try {
  const savedLanguage = window.localStorage.getItem('orbit-phone-language');
  if (savedLanguage && COPY[savedLanguage]) currentLanguage = savedLanguage;
} catch (_error) {
  // The picker still works when browser storage is disabled.
}

function copy() {
  return COPY[currentLanguage];
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

function toggleLanguageMenu() {
  const menu = $('#languageMenu');
  menu.hidden = !menu.hidden;
  $('#languageToggle').setAttribute('aria-expanded', String(!menu.hidden));
}

function updateClock() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat(copy().locale, {
    timeZone: 'Asia/Seoul', hour: 'numeric', minute: '2-digit', hourCycle: 'h12',
  }).formatToParts(now);
  const time = `${parts.find((part) => part.type === 'hour')?.value || ''}:${parts.find((part) => part.type === 'minute')?.value || ''}`;
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
    const dayEvents = RIIZE_2026_EVENTS.filter((event) => event.date === selectedDay);
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
        location.textContent = localizedCalendarText(event, 'location');
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
      if (RIIZE_2026_EVENTS.some((event) => event.date === dateKey)) {
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
  if (view !== 'passcode') pendingSpotifyLaunch = false;
  [lockView, passcodeView, homeView].forEach((element) => {
    const active = element.id === `${view}View`;
    element.classList.toggle('active', active);
    element.setAttribute('aria-hidden', String(!active));
  });
  if (view !== 'passcode') clearPasscode();
  closeApp();
}

function openPasscode() {
  if (currentView === 'lock') {
    if (!PHONE_CONFIG.requirePasscode) {
      let popupBlocked = false;
      if (pendingSpotifyLaunch) {
        pendingSpotifyLaunch = false;
        const spotifyTab = window.open('https://open.spotify.com/', '_blank');
        if (spotifyTab) spotifyTab.opener = null;
        else popupBlocked = true;
      }
      showView('home');
      if (popupBlocked) openApp('spotify');
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
      let popupBlocked = false;
      if (pendingSpotifyLaunch) {
        pendingSpotifyLaunch = false;
        const spotifyTab = window.open('https://open.spotify.com/', '_blank');
        if (spotifyTab) spotifyTab.opener = null;
        else popupBlocked = true;
      }
      window.setTimeout(() => {
        showView('home');
        if (popupBlocked) openApp('spotify');
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
  naver: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 50V14h11l14 19V14h11v36H39L25 31v19z" fill="#fff"/></svg>',
  kakaotalk: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 10c-13 0-23 8-23 19 0 7 5 13 12 16l-3 9 13-7c13 0 24-8 24-19S45 10 32 10" fill="#3b2928"/><text x="32" y="33" text-anchor="middle" fill="#fae100" font-size="10" font-weight="800" font-family="Arial,sans-serif">TALK</text></svg>',
  spotify: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="#1ed760"/><path d="M15 25c12-4 26-2 36 4M18 33c10-3 22-1 30 4M21 41c8-2 16-1 23 3" fill="none" stroke="#101010" stroke-width="4.2" stroke-linecap="round"/></svg>',
};

const APP_URLS = {
  naver: 'https://www.naver.com/',
  kakaotalk: 'https://talk-apps.kakao.com/scheme/kakaotalk',
  spotify: 'https://open.spotify.com/',
  youtube: 'https://www.youtube.com/',
};

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
  if (ICON_ART[app.type]) glyph.innerHTML = ICON_ART[app.type];
  else glyph.textContent = app.icon;
  if (app.type === 'calendar') {
    const weekday = new Intl.DateTimeFormat(copy().locale, { weekday: 'short', timeZone: 'Asia/Seoul' }).format(new Date());
    const dateNumber = new Intl.DateTimeFormat(copy().locale, { day: 'numeric', timeZone: 'Asia/Seoul' }).format(new Date());
    glyph.innerHTML = `<span style="display:grid;line-height:1.05;text-align:center;font-size:9px;color:#ff3b30;font-weight:700">${weekday}<strong style="font-size:22px;color:#222;font-weight:400">${dateNumber}</strong></span>`;
  }
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
  const todayEvents = RIIZE_2026_EVENTS.filter((event) => event.date === todayKey).slice(0, 2);
  $('#eventOne').textContent = todayEvents[0] ? localizedCalendarText(todayEvents[0], 'title') : copy().calendarNoEvents;
  $('#eventTwo').textContent = todayEvents[1] ? localizedCalendarText(todayEvents[1], 'title') : '';
  $('#allDayOne').textContent = todayEvents[0] ? copy().calendarCategories[todayEvents[0].type] : '';
  $('#allDayTwo').textContent = todayEvents[1] ? copy().calendarCategories[todayEvents[1].type] : '';
  $('#eventTwo').closest('.widget-event').hidden = !todayEvents[1];
  $('#searchLabel').textContent = copy().search;
}

function openApp(key) {
  appPanel.querySelector('.reminder-add-button')?.remove();
  appPanel.querySelector('.clock-tabbar')?.remove();
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
  screen.classList.toggle('status-dark', key !== 'weather' && key !== 'clock');
  $('#panelTitle').textContent = title;
  const content = $('#panelContent');
  content.replaceChildren();
  appPanel.classList.toggle('weather-open', key === 'weather');
  appPanel.classList.toggle('calendar-open', key === 'calendar');
  appPanel.classList.toggle('clock-open', key === 'clock');
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
  if (key !== 'reminders' && key !== 'mail' && key !== 'clock') {
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
    en: { note: 'Write a note…', search: 'Search the web', go: 'Go', call: 'Call', calling: 'Calling', hangup: 'End Call', newMessage: 'New Message', send: 'Send', play: 'Play', pause: 'Pause', photo: 'Your wallpaper', appearance: 'Appearance', notifications: 'Notifications', sound: 'Sounds & Haptics', today: 'Today', important: 'Important', reminderCategory: 'Reminder', addReminder: 'Add reminder', reminderPlaceholder: 'New reminder', openYouTube: 'Open YouTube', openNaver: 'Open Naver', openKakaoTalk: 'Open KakaoTalk' },
    'zh-Hant': { note: '寫下備忘…', search: '搜尋網頁', go: '前往', call: '致電', calling: '正在撥打', hangup: '結束通話', newMessage: '新增訊息', send: '傳送', play: '播放', pause: '暫停', photo: '你的桌布', appearance: '外觀', notifications: '通知', sound: '聲音與觸覺', today: '今天', important: '重要事項', reminderCategory: '提醒事項', addReminder: '新增提醒事項', reminderPlaceholder: '新增提醒事項', openYouTube: '開啟 YouTube', openNaver: '開啟 Naver', openKakaoTalk: '開啟 KakaoTalk' },
    ko: { note: '메모 작성…', search: '웹 검색', go: '이동', call: '전화', calling: '전화 거는 중', hangup: '통화 종료', newMessage: '새 메시지', send: '보내기', play: '재생', pause: '일시 정지', photo: '내 배경화면', appearance: '화면 스타일', notifications: '알림', sound: '사운드 및 햅틱', today: '오늘', important: '중요', reminderCategory: '리마인더', addReminder: '미리 알림 추가', reminderPlaceholder: '새로운 미리 알림', openYouTube: 'YouTube 열기', openNaver: '네이버 열기', openKakaoTalk: '카카오톡 열기' },
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
    const note = document.createElement('textarea');
    note.className = 'notes-editor';
    note.placeholder = actionCopy.note;
    note.setAttribute('aria-label', actionCopy.note);
    try { note.value = localStorage.getItem('orbit-phone-note') || ''; } catch (_error) { /* Notes still work for this visit. */ }
    note.addEventListener('input', () => { try { localStorage.setItem('orbit-phone-note', note.value); } catch (_error) { /* Keep the current draft. */ } });
    controls.append(note);
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
    const photo = document.createElement('img');
    photo.className = 'photo-preview';
    photo.src = 'assets/dog-wallpaper.jpg';
    photo.alt = actionCopy.photo;
    photo.title = actionCopy.photo;
    controls.append(photo);
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
      ['0', '0', 'calc-zero'], ['.', '.', ''], ['=', '=', 'calc-operator'],
    ];
    keys.forEach(([label, action, style]) => {
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
    link.textContent = key === 'youtube' ? actionCopy.openYouTube : key === 'naver' ? actionCopy.openNaver : actionCopy.openKakaoTalk;
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
    const settings = [['appearance', actionCopy.appearance], ['notifications', actionCopy.notifications], ['sound', actionCopy.sound]];
    settings.forEach(([keyName, label]) => {
      const row = document.createElement('label');
      row.className = 'setting-row';
      const name = document.createElement('span');
      name.textContent = label;
      const toggle = document.createElement('input');
      toggle.type = 'checkbox';
      toggle.className = 'ios-switch';
      toggle.checked = keyName !== 'sound';
      toggle.setAttribute('aria-label', label);
      toggle.addEventListener('change', () => {
        if (keyName === 'appearance') screen.classList.toggle('appearance-dim', !toggle.checked);
        if (keyName === 'notifications') $('#notification').hidden = !toggle.checked;
      });
      row.append(name, toggle);
      controls.append(row);
    });
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
  if (key === 'spotify') {
    const link = document.createElement('a');
    link.href = 'https://open.spotify.com/';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'panel-card spotify-fallback';
    link.textContent = copy().spotifyPopup;
    content.append(link);
  }
  if (key === 'settings') {
    const settingsCard = document.createElement('article');
    settingsCard.className = 'panel-card';
    copy().settingsRows.forEach((label, index) => {
      const row = document.createElement('div');
      row.className = 'panel-row';
      const text = document.createElement('span');
      text.textContent = label;
      const value = document.createElement('span');
      value.textContent = index === 0 ? '●' : '›';
      row.append(text, value);
      settingsCard.append(row);
    });
    content.append(settingsCard);
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
    alarmItems = Array.isArray(savedAlarms) ? savedAlarms : defaultAlarms.map((alarm) => ({ ...alarm }));
  } catch (_error) {
    alarmItems = defaultAlarms.map((alarm) => ({ ...alarm }));
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
  const stopAlarmSound = () => {
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
    const play = document.createElement('button');
    play.type = 'button';
    play.textContent = labels.playSound;
    play.addEventListener('click', () => {
      if (!ringAudio) return;
      ringAudio.play().catch(() => {});
    });
    controls.append(play);
    if (ringingAlarm && ringingAlarm.snoozeEnabled !== false) {
      const snooze = document.createElement('button');
      snooze.type = 'button';
      snooze.textContent = `${labels.snooze} · ${ringingAlarm.snoozeMinutes || 9} ${labels.minuteUnit}`;
      snooze.addEventListener('click', () => {
        const nextRing = {
          label: ringingLabel,
          alarm: ringingAlarm,
          dueAt: Date.now() + (ringingAlarm.snoozeMinutes || 9) * 60000,
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
    ringAudio.play().catch(() => {});
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
        snoozeMinutes: 9,
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
      const name = document.createElement('span');
      name.className = 'clock-alarm-name';
      name.textContent = alarm.label || labels.alarm;
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
    labelInput.maxLength = 30;
    labelInput.value = alarmDraft.label || labels.alarm;
    labelInput.setAttribute('aria-label', labels.label);
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
    const snoozeChoices = [5, 9, 10, 15];
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
  screen.classList.add('status-dark');
  $('#panelTitle').textContent = copy().camera;
  const content = $('#panelContent');
  content.replaceChildren();
  const card = document.createElement('article');
  card.className = 'panel-card camera-card';
  const video = document.createElement('video');
  video.className = 'camera-preview';
  video.autoplay = true;
  video.playsInline = true;
  video.setAttribute('aria-label', copy().camera);
  const message = document.createElement('p');
  message.textContent = copy().cameraPermission;
  card.append(video, message);
  content.append(card);
  appPanel.classList.add('open');
  appPanel.setAttribute('aria-hidden', 'false');

  if (!navigator.mediaDevices?.getUserMedia) {
    message.textContent = copy().cameraUnavailable;
    return;
  }
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false });
    if (currentAppType === 'camera') video.srcObject = cameraStream;
    else cameraStream.getTracks().forEach((track) => track.stop());
  } catch (_error) {
    message.textContent = copy().cameraUnavailable;
  }
}

function closeApp() {
  appPanel.querySelector('.reminder-add-button')?.remove();
  appPanel.querySelector('.clock-tabbar')?.remove();
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
  screen.classList.remove('clock-app-open');
  appPanel.setAttribute('aria-hidden', 'true');
  screen.classList.remove('status-dark');
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
  $('#notification').addEventListener('click', () => openApp('notification'));
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
  $('#searchButton').addEventListener('click', () => openApp('search'));
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
window.setInterval(updateClock, 15_000);
window.setInterval(updateWorldClock, 15_000);
window.setInterval(loadSeoulWeather, 15 * 60 * 1000);
window.addEventListener('resize', drawBackdrop);
setupInteractions();
