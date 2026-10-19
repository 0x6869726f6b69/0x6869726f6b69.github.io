/* =========================================================
   サイトの中身はすべてこのファイルで編集できます。
   - 文章を書き換える → 保存 → ブラウザを再読み込み
   - 画像を差し替える → assets/img/ に画像を置き、image のパスを変更
   - プロジェクトやニュースを増やす → { ... } のかたまりをコピーして追加
     （id は英数字とハイフンで、重複しないように）
   ========================================================= */

/* ---------- サイト全体 ---------- */
window.SITE = {
  name: "Hiroki Hasegawa",           // ロゴ・タイトルに出る名前（英字）
  nameJa: "あなたの名前",              // 日本語表記
  brandSub: "RESEARCH & CREATION",   // ロゴ下の小さな文字
  tagline: "Computation × Nature × Expression",
  description: "研究と制作のポートフォリオサイトです。",
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
  statement: "「計算と自然のあいだに、まだ見ぬ表現の選択肢をつくる」",
  lead:
    "身のまわりの光や音、素材や身体は、計算機と結びつくことで新しいふるまいを見せはじめています。私はその境界に立ち、デジタルとフィジカルを行き来する装置や作品をつくりながら、人とテクノロジーがともに心地よく過ごせる環境のかたちを探っています。",
  body: [
    "コンピュータはもはや画面の中だけの存在ではありません。センサーやアクチュエータ、デジタルファブリケーションの技術によって、計算は空間や物質そのものに溶け込みつつあります。",
    "私の関心は、そうした「計算が自然の一部になった世界」で、人がどのように感じ、ふるまい、表現するのかという点にあります。研究では、インタラクション、触覚、シミュレーション、ファブリケーションといった手法を横断しながら、実際に動くプロトタイプを通して問いを立て、検証していきます。",
    "技術そのものの新しさだけでなく、それが日々の暮らしや文化にどう根づくのかまでを視野に入れて、研究と制作の両面から取り組んでいきます。",
  ],
  keywords: [
    { en: "INTERACTION", ja: "インタラクション", text: "身体の動きや環境の変化に応答する、手ざわりのあるインターフェースを設計します。" },
    { en: "FABRICATION", ja: "ファブリケーション", text: "デジタルデータから実体を生み出し、素材と計算が混ざり合うものづくりを試みます。" },
    { en: "EXPRESSION", ja: "表現", text: "研究の成果を展示や作品として社会にひらき、新しい体験として届けます。" },
  ],
};

/* ---------- PROFILE ---------- */
window.PROFILE = {
  photo: "assets/img/profile.svg",
  role: "RESEARCHER / CREATOR",
  affiliation: "〇〇大学 〇〇学群 〇〇学類 ／ 〇〇研究室",
  bio: [
    "〇〇県生まれ。〇〇大学にて、ヒューマンコンピュータインタラクションとメディアアートを学ぶ。計算機と物理世界をつなぐインターフェースの研究と、それを用いた作品制作を行っている。",
    "ここに自己紹介文を書いてください。研究テーマ、これまでの活動、今後取り組みたいことなどを2〜3段落程度でまとめると読みやすくなります。",
  ],
  history: [
    { year: "2026", text: "〇〇研究室 配属" },
    { year: "2025", text: "〇〇展 出展" },
    { year: "2023", text: "〇〇大学 〇〇学群 入学" },
    { year: "2023", text: "〇〇高等学校 卒業" },
  ],
  skills: ["Python", "C++", "Unity", "TouchDesigner", "Arduino", "Fusion 360", "Blender", "3D Printing"],
  awards: [
    { year: "2025", text: "〇〇コンテスト 優秀賞" },
    { year: "2024", text: "〇〇ハッカソン 企業賞" },
  ],
};

/* ---------- PROJECTS（並び順がそのまま表示順。トップには先頭6件） ---------- */
window.PROJECTS = [
  {
    id: "light-field-canvas",
    title: "Light Field Canvas",
    subtitle: "光の干渉を描画するインタラクティブ・インスタレーション",
    year: 2026,
    tags: ["Interaction", "Installation"],
    image: "assets/img/project-01.svg",
    summary: "鑑賞者の動きに応じて、二つの光源がつくる干渉縞がリアルタイムに変化するインスタレーション。",
    body: [
      "鑑賞者の位置と動きをセンシングし、二つの仮想光源がつくる干渉パターンを空間に投影する作品です。近づく・離れるといった身体のふるまいが、縞模様の密度やリズムとして可視化されます。",
      "※このテキストはサンプルです。assets/js/data.js を編集して、あなたのプロジェクトの説明に差し替えてください。",
    ],
    role: "企画・設計・実装",
    links: [{ label: "Demo Video", url: "https://www.youtube.com/" }],
  },
  {
    id: "sound-ripple",
    title: "Sound Ripple",
    subtitle: "音の波紋を立体的に可視化する",
    year: 2026,
    tags: ["Audio", "Visualization"],
    image: "assets/img/project-02.svg",
    summary: "環境音をリアルタイムに解析し、地形のような三次元の波として描き出すビジュアライゼーション。",
    body: [
      "マイクで取得した環境音を周波数ごとに分解し、時間方向に積み重ねることで、音の風景を山並みのような立体として表現しました。",
      "※このテキストはサンプルです。",
    ],
    role: "実装",
    links: [],
  },
  {
    id: "haptic-texture",
    title: "Haptic Texture",
    subtitle: "空中に触感をつくる触覚提示",
    year: 2025,
    tags: ["Haptics", "HCI"],
    image: "assets/img/project-03.svg",
    summary: "非接触の触覚提示によって、何もない空間にざらざら・つるつるといった質感をつくり出す試み。",
    body: [
      "空中に提示する触覚刺激のパターンを変化させることで、手のひらに異なる質感を感じさせる手法を検討しました。ユーザ実験により、刺激パターンと知覚される質感の関係を調べています。",
      "※このテキストはサンプルです。",
    ],
    role: "研究・実験設計",
    links: [],
  },
  {
    id: "generative-forest",
    title: "Generative Forest",
    subtitle: "計算機による植生の成長シミュレーション",
    year: 2025,
    tags: ["CG", "Simulation"],
    image: "assets/img/project-04.svg",
    summary: "光・水・土壌のパラメータから、森が育っていく過程を生成的にシミュレーションする。",
    body: [
      "樹木の成長規則と環境条件をモデル化し、長い時間をかけて森が形成されていく様子を生成的に描画します。年輪のような同心円構造は、季節ごとの成長量を表しています。",
      "※このテキストはサンプルです。",
    ],
    role: "モデリング・実装",
    links: [],
  },
  {
    id: "soft-fabrication",
    title: "Soft Fabrication",
    subtitle: "柔らかい素材のためのデジタルファブリケーション",
    year: 2024,
    tags: ["Fabrication"],
    image: "assets/img/project-05.svg",
    summary: "格子構造の密度を変えることで、一つの素材の中に硬さの異なる領域をつくり出す造形手法。",
    body: [
      "3Dプリントする格子の形状を局所的に変形させ、同じ素材でありながら場所によって柔らかさが変わる構造を設計しました。ウェアラブルデバイスへの応用を検討しています。",
      "※このテキストはサンプルです。",
    ],
    role: "設計・造形",
    links: [],
  },
  {
    id: "data-garden",
    title: "Data Garden",
    subtitle: "環境センサーがつくる星座の庭",
    year: 2024,
    tags: ["IoT", "Visualization"],
    image: "assets/img/project-06.svg",
    summary: "庭に設置したセンサー群のデータを、互いにつながる星座のようなネットワークとして表示する。",
    body: [
      "温度・湿度・照度を計測する小型センサーを庭に分散配置し、値の近いセンサー同士を線で結ぶことで、環境の「つながり」を可視化しました。",
      "※このテキストはサンプルです。",
    ],
    role: "ハードウェア・可視化",
    links: [],
  },
];

/* ---------- NEWS（日付の新しい順に自動で並びます。トップには最新3件） ---------- */
window.NEWS = [
  {
    id: "website-open",
    date: "2026-10-19",
    title: "Webサイトを公開しました",
    image: "assets/img/news-01.svg",
    body: [
      "研究と制作の活動をまとめたWebサイトを公開しました。今後、プロジェクトや発表の情報を随時更新していきます。",
      "トップページのPROJECTSから各プロジェクトの詳細ページへ、NEWSから各記事のページへ移動できます。",
    ],
  },
  {
    id: "conference-presentation",
    date: "2026-09-12",
    title: "〇〇学会にて研究発表を行います",
    image: "assets/img/news-02.svg",
    body: [
      "〇〇年〇月〇日から開催される〇〇学会にて、研究課題「〇〇〇〇」の発表を行います。",
      "※このテキストはサンプルです。",
    ],
  },
  {
    id: "exhibition",
    date: "2026-07-01",
    title: "〇〇展に作品を出展します",
    image: "assets/img/news-03.svg",
    body: [
      "〇〇ギャラリーで開催される〇〇展に、作品「Generative Forest」を出展します。会期：〇月〇日〜〇月〇日。",
      "※このテキストはサンプルです。",
    ],
  },
  {
    id: "award",
    date: "2026-04-20",
    title: "〇〇コンテストで賞をいただきました",
    image: "assets/img/news-04.svg",
    body: [
      "〇〇コンテストにて、プロジェクト「Haptic Texture」が〇〇賞を受賞しました。",
      "※このテキストはサンプルです。",
    ],
  },
];

/* ---------- PUBLICATION ---------- */
window.PUBLICATIONS = [
  {
    year: 2026,
    type: "Conference",
    text: "Your Name, Coauthor Name. Title of the Paper Goes Here. In Proceedings of the Conference (CONF '26), 2026.",
    url: "",
  },
  {
    year: 2026,
    type: "Domestic",
    text: "あなたの名前, 共著者名. 発表タイトルをここに書きます. 〇〇シンポジウム, 2026.",
    url: "",
  },
  {
    year: 2025,
    type: "Poster / Demo",
    text: "Your Name. Title of the Demo. In Adjunct Proceedings of the Conference, 2025.",
    url: "",
  },
  {
    year: 2025,
    type: "Exhibition",
    text: "「Generative Forest」〇〇展, 〇〇ギャラリー, 2025.",
    url: "",
  },
];

/* ---------- CONTACT ---------- */
window.CONTACT = {
  lead: "研究・制作に関するご相談、取材、共同研究のご依頼などは、下記のメールアドレスまたはSNSからお気軽にご連絡ください。",
  location: "〇〇, Japan",
};
