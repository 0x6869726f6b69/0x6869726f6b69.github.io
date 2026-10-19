/* =========================================================
   サイトの中身はすべてこのファイルで編集できます。
   - 空文字 "" にした項目は表示されません
   - 論文・発表・授業を増やす → { ... } のかたまりをコピーして追加
     （id は英数字とハイフンで、重複しないように）
   - 日付は "2026-04-15" または "2026-04" の形式
   - 文中のリンクは [表示する文字](https://...) と書きます
   - 著者名は "Hasegawa, H." の形式（SITE.citationName と一致する名前が太字になります）
   ========================================================= */

/* ---------- プロフィール（左のサイドバー） ---------- */
window.SITE = {
  name: "Hiroki Hasegawa",
  pronouns: "He/Him",
  bio: "PhD Student in Policy and Planning Sciences",
  location: "Tsukuba, JPN",
  affiliation: "University of Tsukuba",
  avatar: "assets/img/avatar.svg",   // 顔写真に差し替える場合は assets/img/ に置いてパスを変更
  citationName: "Hasegawa, H.",
  since: 2026,

  links: {
    email: "hasegawa.hiroki.tkb_en@u.tsukuba.ac.jp",
    googleScholar: "https://scholar.google.com/citations?user=Z1ijml4AAAAJ",
    orcid: "https://orcid.org/0009-0009-3022-4359",
    researchmap: "https://researchmap.jp/hiroki_hasegawa",
    github: "https://github.com/0x6869726f6b69",
    linkedin: "https://www.linkedin.com/in/hiroki-hasegawa-71783a36b",
    x: "",
  },
};

/* ---------- About me（トップページ） ---------- */
window.ABOUT = {
  paragraphs: [
    "I am a first-year PhD student in Policy and Planning Sciences at the University of Tsukuba, advised by [Prof. Yukihiko Okada](https://scholar.google.com/citations?user=yXLs6SAAAAAJ). Before starting my PhD, I received my M.Eng. in Service Engineering from the University of Tsukuba under the supervision of Prof. Yukihiko Okada. I also received my B.Sc. in Mathematics from the University of Tsukuba, where I was advised by [Prof. Kazuyoshi Yata](https://scholar.google.com/citations?hl=ja&user=yi5nkqgAAAAJ).",
    "My research interests lie in high-dimensional statistics, tensor data analysis, tensor networks, statistical machine learning, and optimization. I am currently working on theoretical and methodological problems involving low-rank tensor estimation, time-varying tensor structures, and efficient computation for large-scale structured data. More broadly, I am interested in understanding how multidimensional structures can be exploited to improve statistical estimation, representation, and computation, with applications to biomedical, physiological, service, and educational data.",
  ],
};

/* ---------- News（新しい順に自動で並び、5件ずつ流れて表示されます） ---------- */
// url を入れると、その行がリンクになります（例: "publication.html?id=arxiv-2604-16894"）
window.NEWS = [
  { date: "2026-10", text: "xxxxxx", url: "" },
  { date: "2026-08", text: "xxxxxx", url: "" },
  { date: "2026-06", text: "xxxxxx", url: "" },
  { date: "2026-04", text: "xxxxxx", url: "" },
  { date: "2026-02", text: "xxxxxx", url: "" },
  { date: "2025-12", text: "xxxxxx", url: "" },
  { date: "2025-10", text: "xxxxxx", url: "" },
];

/* ---------- Publications ---------- */
// language: "ja" にすると "(in Japanese)" と表示し、titleJa（原題）を詳細ページに載せます
// links: doi / arxiv / paper / slides / code / url（空欄は非表示）
window.PUBLICATION_CATEGORIES = [
  { key: "journal", title: "Journal Articles" },
  { key: "conference", title: "Conference Papers" },
  { key: "preprint", title: "Preprints" },
];

window.PUBLICATIONS = [
  /* --- Journal Articles --- */
  {
    id: "jjs-2025",
    category: "journal",
    title: "A Value Co-Creation Model for ICT-Based Educational Services Aimed at Realizing Active and Collaborative Learning",
    titleJa: "主体的で協働的な学びの実現に向けたICT教育サービスの価値共創モデルの提案",
    language: "ja",
    authors: ["Hasegawa, H.", "Shinobu, S.", "Takahashi, H."],
    venue: "Japanese Journal of Serviceology, 9(3), 1–14",
    date: "2025-07",
    refereed: true,
    abstract: [],
    links: { doi: "https://doi.org/10.24464/jjs.9.3_1" },
  },

  /* --- Conference Papers --- */
  {
    id: "sfs14-physiological-synchrony",
    category: "conference",
    title: "Physiological Synchrony Between Performers and Audiences in String Quartet Performances and Its Association with Subjective Experience",
    titleJa: "弦楽四重奏における演奏者と観客間の生体同期と主観評価の関連分析",
    language: "ja",
    authors: ["Hasegawa, H.", "Nakayama, T.", "Miwa, H.", "Honda, K.", "Komazaki, K.", "Nishizono, R.", "Isoguchi-Shiramatsu, T.", "Kondo, K.", "Goto-Sato, T.", "Saijo, N.", "Kunimatsu, J."],
    venue: "Proceedings of the 14th Domestic Conference of Society for Serviceology",
    date: "2026-03-03",
    refereed: true,
    abstract: [],
    links: { url: "https://pub.confit.atlas.jp/en/event/sfs14/presentation/1-D-3-01" },
  },
  {
    id: "sfs14-live-performance",
    category: "conference",
    title: "Quantitative Evaluation of Emotion-Eliciting Factors in Live Performance Services: A Comparative Analysis of Acoustic Features and Real-Time Emotional Response Measurements in Professional and Amateur Concerts",
    titleJa: "ライブ演奏サービスにおける感動喚起要因の定量的評価 ― プロ・アマチュアオーケストラの音響特徴量とリアルタイム感動計測に基づく比較分析 ―",
    language: "ja",
    authors: ["Nakayama, T.", "Hasegawa, H.", "Miwa, H.", "Honda, K.", "Komazaki, K.", "Nishizono, R.", "Isoguchi-Shiramatsu, T.", "Kondo, K.", "Goto-Sato, T.", "Saijo, N.", "Kunimatsu, J."],
    venue: "Proceedings of the 14th Domestic Conference of Society for Serviceology",
    date: "2026-03-04",
    refereed: true,
    abstract: [],
    links: { url: "https://pub.confit.atlas.jp/en/event/sfs14/presentation/2-C-5-01" },
  },
  {
    id: "ieee-bigdata-2024",
    category: "conference",
    title: "Proposing a Low-Rank Approximation Method with Mathematical Guarantees for High-Dimensional Tensor Data",
    authors: ["Hasegawa, H.", "Yata, K.", "Okada, Y.", "Kunimatsu, J."],
    venue: "Proceedings of the 2024 IEEE International Conference on Big Data (BigData), pp. 34–43",
    date: "2024-12",
    refereed: true,
    abstract: [],
    links: { doi: "https://doi.org/10.1109/BigData62323.2024.10825894" },
  },
  {
    id: "icsta-2024",
    category: "conference",
    title: "Noise Reduced Common PCA for High-Dimensional, Low-Sample Size Multi-View Data",
    authors: ["Hasegawa, H.", "Kawamura, H.", "Shin, R.", "Yata, K.", "Okada, Y.", "Kunimatsu, J."],
    venue: "Proceedings of the 6th International Conference on Statistics: Theory and Applications (ICSTA'24), Paper No. 173",
    date: "2024-08",
    refereed: true,
    abstract: [],
    links: { doi: "https://doi.org/10.11159/icsta24.173" },
  },
  {
    id: "sfs12-education-value-co-creation",
    category: "conference",
    title: "Proposing a Conceptual Model for Value Co-Creation in Primary and Secondary Education Services: The Role of Teachers and ICT Based on TRI",
    titleJa: "教師の役割とTRIに基づくICTを用いた初等中等教育サービス価値共創のコンセプトモデル提案",
    language: "ja",
    authors: ["Hasegawa, H.", "Takahashi, H."],
    venue: "Proceedings of the 12th Domestic Conference of Society for Serviceology",
    date: "2024-03",
    refereed: true,
    abstract: [],
    links: { url: "https://pub.confit.atlas.jp/en/event/sfs12/presentation/C-1-1-04" },
  },
  {
    id: "sfs11-midorino-gakuen",
    category: "conference",
    title: "Analyzing Vertical and Horizontal Value Co-Creation at Midorino Gakuen Compulsory Education School, Tsukuba City",
    titleJa: "つくば市立みどりの学園義務教育学校における縦と横の価値共創の分析",
    language: "ja",
    authors: ["Hasegawa, H.", "Shinobu, S.", "Okada, Y."],
    venue: "Proceedings of the 11th Domestic Conference of Society for Serviceology",
    date: "2023-03",
    refereed: true,
    abstract: [],
    links: {},
  },

  /* --- Preprints --- */
  {
    id: "arxiv-2607-24009",
    category: "preprint",
    title: "Structural Loss Metrics for Tensor Approximation via Matrix Low-Rank Approximation",
    authors: ["Hasegawa, H."],
    venue: "arXiv preprint arXiv:2607.24009",
    date: "2026-07-27",
    abstract: [
      "Matricized low-rank approximation via SVD is a standard surrogate for tensor decompositions, but entry-wise reconstruction error fails to capture multiway geometric degradation. Under an orthogonal Tucker model, we characterize this degradation using two metrics: cross-mode Direction Loss, measuring geometric subspace deviation from rank truncation and noise rotation, and Interaction Loss, quantifying multilinear interaction distortion in the core tensor. We prove that squared relative reconstruction error orthogonally decomposes into interaction loss and out-of-subspace energy, and derive a Wedin-type bound establishing the stability of a plug-in Direction Loss estimator. Experiments on synthetic and hyperspectral datasets demonstrate that nearly identical reconstruction errors can yield markedly different structural-loss profiles; hyperspectral patches with comparable reconstruction errors exhibit up to a 4.6-fold difference in Direction Loss, correlating with severe visual blurring.",
    ],
    links: { arxiv: "https://arxiv.org/abs/2607.24009" },
  },
  {
    id: "arxiv-2604-16894",
    category: "preprint",
    title: "Covariance-Based Structural Equation Modeling in Small-Sample Settings with p > n",
    authors: ["Hasegawa, H.", "Tamura, A.", "Okada, Y."],
    venue: "arXiv preprint arXiv:2604.16894",
    date: "2026-04-18",
    abstract: [
      "Factor-based Structural Equation Modeling (SEM) relies on likelihood-based estimation assuming a nonsingular sample covariance matrix, which breaks down in small-sample settings with p > n. To address this, we propose a novel estimation principle that reformulates the covariance structure into self-covariance and cross-covariance components. The resulting framework defines a likelihood-based feasible set combined with a relative error constraint, enabling stable estimation in small-sample settings where p > n for sign and direction. Experiments on synthetic and real-world data show improved stability, particularly in recovering the sign and direction of structural parameters. These results extend covariance-based SEM to small-sample settings and provide practically useful directional information for decision-making.",
    ],
    links: { arxiv: "https://arxiv.org/abs/2604.16894" },
  },
  {
    id: "arxiv-2512-05338",
    category: "preprint",
    title: "Interaction Tensor SHAP",
    authors: ["Hasegawa, H.", "Okada, Y."],
    venue: "arXiv preprint arXiv:2512.05338",
    date: "2025-12-05",
    abstract: [
      "This study proposes Interaction Tensor SHAP (IT-SHAP), a tensor algebraic formulation of the Shapley Taylor Interaction Index (STII) that makes its computational structure explicit. STII extends the Shapley value to higher order interactions, but its exponential combinatorial definition makes direct computation intractable at scale. We reformulate STII as a linear transformation acting on a value function and derive an explicit algebraic representation of its weight tensor. This weight tensor is shown to possess a multilinear structure induced by discrete finite difference operators. When the value function admits a Tensor Train representation, higher order interaction indices can be computed in the parallel complexity class NC squared. In contrast, under general tensor network representations without structural assumptions, the same computation is proven to be P sharp hard.",
      "The main contributions are threefold. First, we establish an exact Tensor Train representation of the STII weight tensor. Second, we develop a parallelizable evaluation algorithm with explicit complexity bounds under the Tensor Train assumption. Third, we prove that computational intractability is unavoidable in the absence of such structure. These results demonstrate that the computational difficulty of higher order interaction analysis is determined by the underlying algebraic representation rather than by the interaction index itself, providing a theoretical foundation for scalable interpretation of high dimensional models.",
    ],
    links: { arxiv: "https://arxiv.org/abs/2512.05338" },
  },
  {
    id: "arxiv-2505-06203",
    category: "preprint",
    title: "A Robust and Non-Iterative Tensor Decomposition Method with Automatic Thresholding",
    authors: ["Hasegawa, H.", "Okada, Y."],
    venue: "arXiv preprint arXiv:2505.06203",
    date: "2025-05-09",
    abstract: [
      "Recent advances in IoT and biometric sensing technologies have led to the generation of massive and high-dimensional tensor data, yet achieving accurate and efficient low-rank approximation remains a major challenge. Most existing tensor decomposition methods require predefined ranks and iterative optimization, resulting in high computational costs and dependence on analyst expertise. This study proposes a novel tensor low-rank approximation method that eliminates both prior rank specification and iterative optimization. The method applies statistical singular value hard thresholding to each mode-wise unfolded matrix to automatically extract statistically significant components, effectively reducing noise while preserving the intrinsic structure.",
      "Theoretically, the optimal thresholds for each mode are derived from the asymptotic properties of the Marcenko-Pastur distribution. Simulation experiments demonstrate that the proposed method outperforms conventional approaches (HOSVD, HOOI, and Tucker-L2E) in both estimation accuracy and computational efficiency. These results indicate that the proposed approach provides a theoretically grounded, fully automatic, and non-iterative framework for tensor decomposition.",
    ],
    links: { arxiv: "https://arxiv.org/abs/2505.06203" },
  },
];

/* ---------- Talks and presentations ---------- */
// type: "Oral presentation" / "Poster presentation" / "Talk" など。award を入れると受賞として表示
window.TALKS = [
  {
    id: "sfs14-physiological-synchrony",
    title: "Physiological Synchrony Between Performers and Audiences in String Quartet Performances and Its Association with Subjective Experience",
    titleJa: "弦楽四重奏における演奏者と観客間の生体同期と主観評価の関連分析",
    language: "ja",
    type: "Oral presentation",
    authors: ["Hasegawa, H.", "Nakayama, T.", "Miwa, H.", "Honda, K.", "Komazaki, K.", "Nishizono, R.", "Isoguchi-Shiramatsu, T.", "Kondo, K.", "Goto-Sato, T.", "Saijo, N.", "Kunimatsu, J."],
    venue: "14th Domestic Conference of Society for Serviceology",
    date: "2026-03-03",
    links: { url: "https://pub.confit.atlas.jp/en/event/sfs14/presentation/1-D-3-01" },
  },
  {
    id: "sfs14-live-performance",
    title: "Quantitative Evaluation of Emotion-Eliciting Factors in Live Performance Services: A Comparative Analysis of Acoustic Features and Real-Time Emotional Response Measurements in Professional and Amateur Concerts",
    titleJa: "ライブ演奏サービスにおける感動喚起要因の定量的評価 ― プロ・アマチュアオーケストラの音響特徴量とリアルタイム感動計測に基づく比較分析 ―",
    language: "ja",
    type: "Oral presentation",
    authors: ["Nakayama, T.", "Hasegawa, H.", "Miwa, H.", "Honda, K.", "Komazaki, K.", "Nishizono, R.", "Isoguchi-Shiramatsu, T.", "Kondo, K.", "Goto-Sato, T.", "Saijo, N.", "Kunimatsu, J."],
    venue: "14th Domestic Conference of Society for Serviceology",
    date: "2026-03-04",
    links: { url: "https://pub.confit.atlas.jp/en/event/sfs14/presentation/2-C-5-01" },
  },
  {
    id: "ahs-2026",
    title: "How Performance Differences Are Reflected in Audience Emotional Responses in String Quartet Performances",
    type: "Poster presentation",
    authors: ["Nakayama, T.", "Hasegawa, H.", "Miwa, H.", "Honda, K.", "Komazaki, K.", "Nishizono, R.", "Isoguchi-Shiramatsu, T.", "Kondo, K.", "Goto-Sato, T.", "Saijo, N.", "Kunimatsu, J."],
    venue: "Augmented Humans Conference 2026",
    date: "2026-03",
    links: {},
  },
  {
    id: "ses12-concert-satisfaction",
    title: "A Study of Concert Satisfaction Using Physiological Data and Tensor Data Analysis",
    titleJa: "生体情報とテンソルデータ解析によるコンサート満足度の研究",
    language: "ja",
    type: "Presentation",
    authors: ["Hasegawa, H."],
    venue: "12th Service Engineering Symposium",
    date: "2026-02",
    award: "Best Presentation Award",
    links: {},
  },
  {
    id: "tsukuba-conference-2025-denoising",
    title: "A Non-Iterative and Parameter-Free Method for Noise Reduction in Tensor Data",
    titleJa: "非反復かつパラメータフリーなテンソルデータのノイズ除去手法の提案",
    language: "ja",
    type: "Poster presentation",
    authors: ["Hasegawa, H."],
    venue: "Tsukuba Conference 2025",
    location: "Tsukuba, Japan",
    date: "2025-10-01",
    links: {},
  },
  {
    id: "tsukuba-conference-2025-tda",
    title: "Risk Assessment of Public Facility Networks Using Topological Data Analysis",
    titleJa: "位相的データ解析を用いた公共施設ネットワークのリスク評価",
    language: "ja",
    type: "Poster presentation",
    authors: ["Hasegawa, H."],
    venue: "Tsukuba Conference 2025",
    location: "Tsukuba, Japan",
    date: "2025-10-01",
    links: {},
  },
  {
    id: "jsiam-2025",
    title: "Revealing structural vulnerability in public facility networks through persistent homology-based analysis",
    titleJa: "パーシステントホモロジーに基づく公共施設ネットワークの構造的脆弱性の評価",
    language: "ja",
    type: "Poster presentation",
    authors: ["Hasegawa, H."],
    venue: "JSIAM Annual Meeting 2025",
    date: "2025-09",
    award: "Poster Award",
    links: {},
  },
  {
    id: "statistics-summer-seminar-2025",
    title: "A Non-Iterative and Parameter-Free Framework for Denoising High-Dimensional Tensor Data",
    titleJa: "非反復かつパラメータフリーなテンソルデータのノイズ除去手法の提案",
    language: "ja",
    type: "Talk",
    authors: ["Hasegawa, H."],
    venue: "Statistics Summer Seminar 2025",
    date: "2025-08-04",
    links: {},
  },
  {
    id: "ecvp-2025",
    title: "Reproducible eyeblink timings observed in string quartet performers during concerts",
    type: "Poster presentation",
    authors: ["Nishizono, R.", "Honda, K.", "Goto-Sato, T.", "Komazaki, K.", "Isoguchi-Shiramatsu, T.", "Nakayama, T.", "Hasegawa, H.", "Miwa, H.", "Fujii, S.", "Kondo, K.", "Kunimatsu, J.", "Saijo, N."],
    venue: "47th European Conference on Visual Perception (ECVP 2025)",
    date: "2025-08",
    links: {},
  },
  {
    id: "joint-action-meeting-2025",
    title: "Physiological dynamics in professional and amateur string quartets",
    type: "Poster presentation",
    authors: ["Hattori, Y.", "Miwa, H.", "Hasegawa, H.", "Nakayama, T.", "Honda, K.", "Komazaki, K.", "Nishizono, R.", "Isoguchi-Shiramatsu, T.", "Kondo, K.", "Goto-Sato, T.", "Saijo, N.", "Kunimatsu, J."],
    venue: "10th Joint Action Meeting",
    date: "2025-07",
    links: {},
  },
  {
    id: "icmpc-2025",
    title: "Investigating synchrony of subjective ratings between performers and audiences in live music concerts: comparison between professionals and amateurs",
    type: "Poster presentation",
    authors: ["Honda, K.", "Komazaki, K.", "Nishizono, R.", "Isoguchi-Shiramatsu, T.", "Nakayama, T.", "Hasegawa, H.", "Miwa, H.", "Fujii, S.", "Kondo, K.", "Kunimatsu, J.", "Goto-Sato, T.", "Saijo, N."],
    venue: "18th International Conference on Music Perception and Cognition (ICMPC 2025)",
    date: "2025-07",
    links: {},
  },
  {
    id: "jsas-2025",
    title: "A Study on Low-Rank Tensor Estimation via Non-Iterative Hard Thresholding",
    titleJa: "非反復型のハード閾値法による低ランクテンソル推定の検討",
    language: "ja",
    type: "Oral presentation",
    authors: ["Hasegawa, H.", "Okada, Y."],
    venue: "2025 Annual Meeting of the Japanese Society of Applied Statistics",
    date: "2025-05",
    award: "Best Presentation Award",
    links: {},
  },
  {
    id: "ses11-biometric-service-data",
    title: "Proposal of Service Data Analysis Methods Based on Biometric Data",
    titleJa: "生体データにもとづくサービスデータ解析手法の提案",
    language: "ja",
    type: "Poster presentation",
    authors: ["Hasegawa, H."],
    venue: "11th Service Engineering Symposium",
    date: "2025-02",
    award: "Best Performance Award",
    links: {},
  },
  {
    id: "cssj-2025",
    title: "Comparative Evaluation of Tensor and Matrix Factorization-Based Dimensionality Reduction Methods for High-Dimensional Matrix-Valued Time Series Data",
    titleJa: "高次元行列値時系列データにおけるテンソル分解と行列分解を用いた次元削減手法の有効性比較",
    language: "ja",
    type: "Oral presentation",
    authors: ["Hasegawa, H."],
    venue: "4th Annual Conference of the Computational Social Science Society of Japan",
    date: "2025-02",
    links: {},
  },
  {
    id: "ieee-bigdata-2024",
    title: "Proposing a Low-Rank Approximation Method with Mathematical Guarantees for High-Dimensional Tensor Data",
    type: "Oral presentation",
    authors: ["Hasegawa, H.", "Yata, K.", "Okada, Y.", "Kunimatsu, J."],
    venue: "2024 IEEE International Conference on Big Data (BigData), Main Conference",
    location: "Washington, DC, USA",
    date: "2024-12",
    links: { paper: "publication.html?id=ieee-bigdata-2024" },
  },
  {
    id: "jsiam-2024",
    title: "Evaluating Sparse Dimensionality Reduction Techniques on Multiple High Dimensional, Low Sample Size Datasets",
    titleJa: "複数の高次元小標本データにおけるスパース次元削減手法の検証",
    language: "ja",
    type: "Oral presentation",
    authors: ["Hasegawa, H.", "Yata, K.", "Okada, Y.", "Kunimatsu, J."],
    venue: "JSIAM Annual Meeting 2024",
    date: "2024-09",
    links: {},
  },
  {
    id: "icsta-2024",
    title: "Noise Reduced Common PCA for High-Dimensional, Low-Sample Size Multi-View Data",
    type: "Poster presentation",
    authors: ["Hasegawa, H.", "Kawamura, H.", "Shin, R.", "Yata, K.", "Okada, Y.", "Kunimatsu, J."],
    venue: "6th International Conference on Statistics: Theory and Applications (ICSTA'24)",
    location: "Barcelona, Spain",
    date: "2024-08",
    links: { paper: "publication.html?id=icsta-2024" },
  },
  {
    id: "sfs12-education-value-co-creation",
    title: "Proposing a Conceptual Model for Value Co-Creation in Primary and Secondary Education Services: The Role of Teachers and ICT Based on TRI",
    titleJa: "教師の役割とTRIに基づくICTを用いた初等中等教育サービス価値共創のコンセプトモデル提案",
    language: "ja",
    type: "Oral presentation",
    authors: ["Hasegawa, H.", "Takahashi, H."],
    venue: "12th Domestic Conference of Society for Serviceology",
    date: "2024-03",
    links: { url: "https://pub.confit.atlas.jp/en/event/sfs12/presentation/C-1-1-04" },
  },
  {
    id: "sfs11-midorino-gakuen",
    title: "Analyzing Vertical and Horizontal Value Co-Creation at Midorino Gakuen Compulsory Education School, Tsukuba City",
    titleJa: "つくば市立みどりの学園義務教育学校における縦と横の価値共創の分析",
    language: "ja",
    type: "Oral presentation",
    authors: ["Hasegawa, H.", "Shinobu, S.", "Okada, Y."],
    venue: "11th Domestic Conference of Society for Serviceology",
    date: "2023-03",
    links: {},
  },
  {
    id: "are-2022",
    title: "Action Research on Education Service Innovation through DX",
    titleJa: "DXによる教育サービスイノベーションのアクションリサーチ",
    language: "ja",
    type: "Presentation",
    authors: ["Hasegawa, H."],
    venue: "FY2022 Advancing Researcher Experience Research Presentation, University of Tsukuba",
    date: "2023-01",
    award: "Outstanding Performance Award",
    links: {},
  },
  {
    id: "are-2021",
    title: "A Mathematical Study of Optimal Reaction Strategies in Modern Cram School Management and the Difference between Theoretical and Realistic Values",
    titleJa: "現代の塾経営における最適反応戦略の数学的考察および理論値と現実値の差について",
    language: "ja",
    type: "Presentation",
    authors: ["Hasegawa, H."],
    venue: "FY2021 Advancing Researcher Experience Research Presentation, University of Tsukuba",
    date: "2022-01",
    links: {},
  },
];

/* ---------- Teaching ---------- */
window.TEACHING = [
  {
    id: "service-science-2026",
    title: "Service Science",
    type: "Teaching Assistant",
    institution: "Master's Program in Service Engineering, University of Tsukuba",
    term: "2026",
    date: "2026-04-01",
    excerpt: "",
    description: [],
  },
];

/* ---------- CV（Publications / Talks は上のデータから自動で載ります） ---------- */
window.CV = {
  pdf: "",                           // PDF版CVのパス（例: "files/cv.pdf"）。空なら非表示
  education: [
    {
      degree: "Ph.D. in Policy and Planning Sciences",
      school: "University of Tsukuba",
      period: "Apr. 2026 – Present",
      note: "Advisor: [Prof. Yukihiko Okada](https://scholar.google.com/citations?user=yXLs6SAAAAAJ)",
    },
    {
      degree: "M.Eng. in Service Engineering",
      school: "University of Tsukuba",
      period: "Apr. 2024 – Mar. 2026",
      note: "Supervisor: [Prof. Yukihiko Okada](https://scholar.google.com/citations?user=yXLs6SAAAAAJ)",
    },
    {
      degree: "B.Sc. in Mathematics",
      school: "University of Tsukuba",
      period: "Apr. 2020 – Mar. 2024",
      note: "Advisor: [Prof. Kazuyoshi Yata](https://scholar.google.com/citations?hl=ja&user=yi5nkqgAAAAJ)",
    },
  ],
  // Work experience: group ごとに見出しが付きます
  experience: [
    {
      group: "Research Experience",
      items: [
        {
          role: "Research Assistant — JSPS KAKENHI, Scientific Research (B)",
          title: "Development of Non-Sparse High-Dimensional Statistical Theory for Understanding and Utilizing Large-Scale Models",
          detail: "PI: Masaaki Imaizumi (The University of Tokyo)",
          period: "Nov. 2026 – Present",
        },
        {
          role: "Research Assistant — JSPS KAKENHI, Scientific Research (A)",
          title: "Service LAD: Building a Service Design Platform through Human–AI Agent Collaboration",
          detail: "PI: Tatsunori Hara (The University of Tokyo)",
          period: "Jun. 2026 – Present",
        },
        {
          role: "Research Assistant",
          title: "Implementation Research on Digital Government/Smart City Collaboration (DGSC) in the Well-Being Domain",
          detail: "PI: Yukihiko Okada (University of Tsukuba)",
          period: "Jun. 2026 – Nov. 2026",
        },
        {
          role: "Research Assistant — Joint Research Project",
          title: "Research on LMS Usage Logs and Learning Indicators",
          detail: "PI: Yukihiko Okada (University of Tsukuba)",
          period: "Apr. 2026 – Jun. 2026",
        },
        {
          role: "Research Assistant",
          title: "Digital Government and Smart City Collaboration",
          detail: "PI: Yukihiko Okada (University of Tsukuba)",
          period: "Sep. 2025 – Mar. 2026",
        },
        {
          role: "Research Assistant — JST CREST",
          title: "Development of a New High-Dimensional Statistical Analysis Framework for Single-Cell Data Science",
          detail: "PI: Kazuyoshi Yata (University of Tsukuba)",
          period: "Jan. 2025 – Feb. 2026",
        },
        {
          role: "Research Assistant — JST PRESTO",
          title: "Effects of Respiration-Induced Fluctuations in Information Processing on Multisensory Perception",
          detail: "PI: Jun Kunimatsu (University of Tsukuba)",
          period: "Nov. 2024 – Jan. 2025",
        },
        {
          role: "Research Assistant",
          title: "Educational Data Integration and Analytics, Organization for the Advancement of Higher Education",
          detail: "PI: Yukihiko Okada (University of Tsukuba)",
          period: "Jun. 2024 – Mar. 2026",
        },
      ],
    },
    {
      group: "Teaching Experience",
      items: [
        {
          role: "Teaching Assistant — Service Science",
          detail: "Master's Program in Service Engineering, University of Tsukuba",
          period: "2026",
        },
      ],
    },
  ],
  skills: [
    { label: "Programming", items: "Python, R, Julia, MATLAB" },
    { label: "Tools", items: "Git, LaTeX, Jupyter" },
  ],
  awards: [
    { date: "2026-02", name: "Best Presentation Award", org: "12th Service Engineering Symposium" },
    { date: "2026-01", name: "Full Tuition Exemption for Students with Outstanding Research Achievements", org: "University of Tsukuba" },
    { date: "2025-09", name: "Poster Award", org: "JSIAM Annual Meeting 2025, Japan Society for Industrial and Applied Mathematics" },
    { date: "2025-05", name: "Best Presentation Award", org: "Japanese Society of Applied Statistics" },
    { date: "2025-02", name: "Best Performance Award", org: "11th Service Engineering Symposium" },
    { date: "2024-03", name: "Meikeikai Award", org: "University of Tsukuba" },
    { date: "2023-02", name: "Outstanding Performance Award", org: "Advancing Researcher Experience (ARE) Program, University of Tsukuba" },
  ],
  service: [],
};
