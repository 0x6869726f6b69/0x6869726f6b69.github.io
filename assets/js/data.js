/* =========================================================
   サイトの中身はすべてこのファイルで編集できます。
   - "xxxxxx" になっている箇所に文章を入れてください
   - 空文字 "" にした項目は表示されません
   - 論文・発表・授業を増やす → { ... } のかたまりをコピーして追加
     （id は英数字とハイフンで、重複しないように）
   - 日付は "2026-04-15"（ニュースは "2026-04" でも可）の形式
   ========================================================= */

/* ---------- プロフィール（左のサイドバー） ---------- */
window.SITE = {
  name: "Hiroki Hasegawa",
  pronouns: "He/Him",
  bio: "PhD Student in Policy and Planning Sciences",
  location: "Tsukuba, JPN",
  affiliation: "University of Tsukuba",
  avatar: "assets/img/avatar.svg",   // 顔写真に差し替える場合は assets/img/ に置いてパスを変更
  citationName: "Hasegawa, H.",      // 著者リストの中でこの表記を太字にします
  since: 2026,

  links: {
    email: "hasegawa.hiroki.tkb_en@u.tsukuba.ac.jp",
    googleScholar: "",               // 例: "https://scholar.google.com/citations?user=..."
    orcid: "https://orcid.org/0009-0009-3022-4359",
    researchmap: "",                 // 例: "https://researchmap.jp/..."
    github: "https://github.com/0x6869726f6b69",
    linkedin: "",
    x: "",
  },
};

/* ---------- About me（トップページ） ---------- */
// 文中のリンクは [表示する文字](https://...) と書きます
window.ABOUT = {
  paragraphs: [
    "I am a first-year PhD student in Policy and Planning Sciences at the University of Tsukuba, advised by [Prof. Yukihiko Okada](https://scholar.google.com/citations?user=yXLs6SAAAAAJ). My academic background is in mathematics and statistics, and my research focuses on developing statistical theory and computational methods for high-dimensional and multidimensional data.",
    "My primary research interests lie in high-dimensional statistics, tensor data analysis, tensor network, statistical machine learning, and optimization. I am currently working on theoretical and methodological problems involving low-rank tensor estimation, time-varying tensor structures, and efficient computation for large-scale structured data. More broadly, I am interested in understanding how multidimensional structures can be exploited to improve statistical estimation, representation, and computation, with applications ranging from biomedical and physiological data to service and educational data.",
    "Outside of research, I enjoy playing tennis and exploring new ideas across mathematics, statistics, and machine learning.",
  ],
};

/* ---------- News（新しい順に自動で並び、5件ずつ流れて表示されます） ---------- */
// url を入れると、その行がリンクになります（例: "publication.html?id=journal-2026"）
window.NEWS = [
  { date: "2026-10", text: "xxxxxx", url: "" },
  { date: "2026-08", text: "xxxxxx", url: "publication.html?id=journal-2026" },
  { date: "2026-06", text: "xxxxxx", url: "talk.html?id=talk-2026" },
  { date: "2026-04", text: "xxxxxx", url: "" },
  { date: "2026-02", text: "xxxxxx", url: "" },
  { date: "2025-12", text: "xxxxxx", url: "" },
  { date: "2025-10", text: "xxxxxx", url: "" },
];

/* ---------- Publications ---------- */
window.PUBLICATION_CATEGORIES = [
  { key: "journal", title: "Journal Articles" },
  { key: "conference", title: "Conference Papers" },
  { key: "preprint", title: "Preprints" },
];

window.PUBLICATIONS = [
  {
    id: "journal-2026",
    category: "journal",
    title: "xxxxxx",
    authors: ["xxxxxx", "Hasegawa, H.", "xxxxxx"],
    venue: "xxxxxx",
    date: "2026-07-01",
    excerpt: "xxxxxx",
    abstract: ["xxxxxx"],
    citation: "xxxxxx",
    links: { paper: "", slides: "", code: "" },
  },
  {
    id: "preprint-2026",
    category: "preprint",
    title: "xxxxxx",
    authors: ["Hasegawa, H.", "xxxxxx"],
    venue: "arXiv",
    date: "2026-04-01",
    excerpt: "xxxxxx",
    abstract: ["xxxxxx"],
    citation: "xxxxxx",
    links: { paper: "", slides: "", code: "" },
  },
  {
    id: "conference-2026",
    category: "conference",
    title: "xxxxxx",
    authors: ["Hasegawa, H.", "xxxxxx", "xxxxxx"],
    venue: "xxxxxx",
    date: "2026-03-01",
    excerpt: "xxxxxx",
    abstract: ["xxxxxx"],
    citation: "xxxxxx",
    links: { paper: "", slides: "", code: "" },
  },
  {
    id: "conference-2025",
    category: "conference",
    title: "xxxxxx",
    authors: ["xxxxxx", "Hasegawa, H."],
    venue: "xxxxxx",
    date: "2025-09-01",
    excerpt: "xxxxxx",
    abstract: ["xxxxxx"],
    citation: "xxxxxx",
    links: { paper: "", slides: "", code: "" },
  },
];

/* ---------- Talks ---------- */
window.TALKS = [
  {
    id: "talk-2026",
    title: "xxxxxx",
    type: "Talk",
    venue: "xxxxxx",
    location: "xxxxxx",
    date: "2026-06-12",
    excerpt: "xxxxxx",
    description: ["xxxxxx"],
    links: { slides: "", video: "" },
  },
  {
    id: "poster-2025",
    title: "xxxxxx",
    type: "Poster",
    venue: "xxxxxx",
    location: "xxxxxx",
    date: "2025-09-20",
    excerpt: "xxxxxx",
    description: ["xxxxxx"],
    links: { slides: "", video: "" },
  },
];

/* ---------- Teaching ---------- */
window.TEACHING = [
  {
    id: "ta-2026-spring",
    title: "xxxxxx",
    type: "Teaching Assistant",
    institution: "xxxxxx",
    term: "Spring 2026",
    date: "2026-04-01",
    excerpt: "xxxxxx",
    description: ["xxxxxx"],
  },
  {
    id: "ta-2025-fall",
    title: "xxxxxx",
    type: "Teaching Assistant",
    institution: "xxxxxx",
    term: "Fall 2025",
    date: "2025-10-01",
    excerpt: "xxxxxx",
    description: ["xxxxxx"],
  },
];

/* ---------- CV（Publications / Talks / Teaching は上のデータから自動で載ります） ---------- */
window.CV = {
  pdf: "",                           // PDF版CVのパス（例: "files/cv.pdf"）。空なら非表示
  education: [
    { degree: "xxxxxx", school: "xxxxxx", year: "xxxx" },
    { degree: "xxxxxx", school: "xxxxxx", year: "xxxx" },
  ],
  experience: [
    { period: "xxxx – present", title: "xxxxxx", org: "xxxxxx", details: ["xxxxxx"] },
  ],
  skills: ["xxxxxx", "xxxxxx", "xxxxxx"],
  awards: [{ year: "xxxx", text: "xxxxxx" }],
  service: ["xxxxxx"],
};
