/* =========================================================
   サイトの中身はすべてこのファイルで編集できます。
   - 文章を書き換える → 保存 → ブラウザを再読み込み
   - 画像を差し替える → assets/img/ に画像を置き、image のパスを変更
   - プロジェクトやニュースを増やす → { ... } のかたまりをコピーして追加
     （id は英数字とハイフンで、重複しないように）
   "xxxxxx" になっている箇所が、あとで文章を入れる場所です。
   ========================================================= */

/* ---------- サイト全体 ---------- */
window.SITE = {
  name: "Hiroki Hasegawa",           // ロゴ・タイトルに出る名前（英字）
  nameJa: "xxxxxx",                  // 日本語表記
  brandSub: "RESEARCH & CREATION",   // ロゴ下の小さな文字
  tagline: "Computation × Nature × Expression",
  description: "xxxxxx",
  since: 2026,                        // コピーライトの開始年

  // 空文字 "" にしたものは表示されません
  links: {
    github: "https://github.com/0x6869726f6b69",
    x: "",
    email: "",                       // 例: "you@example.com"
  },
};

/* ---------- VISION ---------- */
window.VISION = {
  image: "assets/img/vision.svg",
  statement: "xxxxxx",
  lead: "xxxxxx",
  body: ["xxxxxx", "xxxxxx", "xxxxxx"],
  keywords: [
    { en: "INTERACTION", ja: "インタラクション", text: "xxxxxx" },
    { en: "FABRICATION", ja: "ファブリケーション", text: "xxxxxx" },
    { en: "EXPRESSION", ja: "表現", text: "xxxxxx" },
  ],
};

/* ---------- PROFILE ---------- */
window.PROFILE = {
  photo: "assets/img/profile.svg",
  role: "RESEARCHER / CREATOR",
  affiliation: "xxxxxx",
  bio: ["xxxxxx", "xxxxxx"],
  history: [
    { year: "2026", text: "xxxxxx" },
    { year: "2025", text: "xxxxxx" },
    { year: "2023", text: "xxxxxx" },
    { year: "2023", text: "xxxxxx" },
  ],
  skills: ["Python", "C++", "Unity", "TouchDesigner", "Arduino", "Fusion 360", "Blender", "3D Printing"],
  awards: [
    { year: "2025", text: "xxxxxx" },
    { year: "2024", text: "xxxxxx" },
  ],
};

/* ---------- PROJECTS（並び順がそのまま表示順。トップには先頭6件） ---------- */
window.PROJECTS = [
  {
    id: "light-field-canvas",
    title: "Light Field Canvas",
    subtitle: "xxxxxx",
    year: 2026,
    tags: ["Interaction", "Installation"],
    image: "assets/img/project-01.svg",
    summary: "xxxxxx",
    body: ["xxxxxx"],
    role: "xxxxxx",
    links: [{ label: "Demo Video", url: "https://www.youtube.com/" }],
  },
  {
    id: "sound-ripple",
    title: "Sound Ripple",
    subtitle: "xxxxxx",
    year: 2026,
    tags: ["Audio", "Visualization"],
    image: "assets/img/project-02.svg",
    summary: "xxxxxx",
    body: ["xxxxxx"],
    role: "xxxxxx",
    links: [],
  },
  {
    id: "haptic-texture",
    title: "Haptic Texture",
    subtitle: "xxxxxx",
    year: 2025,
    tags: ["Haptics", "HCI"],
    image: "assets/img/project-03.svg",
    summary: "xxxxxx",
    body: ["xxxxxx"],
    role: "xxxxxx",
    links: [],
  },
  {
    id: "generative-forest",
    title: "Generative Forest",
    subtitle: "xxxxxx",
    year: 2025,
    tags: ["CG", "Simulation"],
    image: "assets/img/project-04.svg",
    summary: "xxxxxx",
    body: ["xxxxxx"],
    role: "xxxxxx",
    links: [],
  },
  {
    id: "soft-fabrication",
    title: "Soft Fabrication",
    subtitle: "xxxxxx",
    year: 2024,
    tags: ["Fabrication"],
    image: "assets/img/project-05.svg",
    summary: "xxxxxx",
    body: ["xxxxxx"],
    role: "xxxxxx",
    links: [],
  },
  {
    id: "data-garden",
    title: "Data Garden",
    subtitle: "xxxxxx",
    year: 2024,
    tags: ["IoT", "Visualization"],
    image: "assets/img/project-06.svg",
    summary: "xxxxxx",
    body: ["xxxxxx"],
    role: "xxxxxx",
    links: [],
  },
];

/* ---------- NEWS（日付の新しい順に自動で並びます。トップには最新3件） ---------- */
window.NEWS = [
  {
    id: "website-open",
    date: "2026-10-19",
    title: "xxxxxx",
    image: "assets/img/news-01.svg",
    body: ["xxxxxx"],
  },
  {
    id: "conference-presentation",
    date: "2026-09-12",
    title: "xxxxxx",
    image: "assets/img/news-02.svg",
    body: ["xxxxxx"],
  },
  {
    id: "exhibition",
    date: "2026-07-01",
    title: "xxxxxx",
    image: "assets/img/news-03.svg",
    body: ["xxxxxx"],
  },
  {
    id: "award",
    date: "2026-04-20",
    title: "xxxxxx",
    image: "assets/img/news-04.svg",
    body: ["xxxxxx"],
  },
];

/* ---------- PUBLICATION ---------- */
window.PUBLICATIONS = [
  { year: 2026, type: "Conference", text: "xxxxxx", url: "" },
  { year: 2026, type: "Domestic", text: "xxxxxx", url: "" },
  { year: 2025, type: "Poster / Demo", text: "xxxxxx", url: "" },
  { year: 2025, type: "Exhibition", text: "xxxxxx", url: "" },
];

/* ---------- CONTACT ---------- */
window.CONTACT = {
  lead: "xxxxxx",
  location: "xxxxxx",
};
