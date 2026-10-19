/* =========================================================
   共通ヘッダー・フッターと、各ページの中身を data.js から描画します。
   ページの種類は <body data-page="..."> で決まります。
   ========================================================= */
(() => {
  "use strict";

  const SITE = window.SITE || {};
  const VISION = window.VISION || {};
  const PROFILE = window.PROFILE || {};
  const PROJECTS = window.PROJECTS || [];
  const NEWS = [...(window.NEWS || [])].sort((a, b) => (a.date < b.date ? 1 : -1));
  const PUBLICATIONS = window.PUBLICATIONS || [];
  const CONTACT = window.CONTACT || {};

  const NAV = [
    { key: "vision", label: "VISION", href: "vision.html" },
    { key: "profile", label: "PROFILE", href: "profile.html" },
    { key: "projects", label: "PROJECTS", href: "projects.html" },
    { key: "publication", label: "PUBLICATION", href: "publication.html" },
    { key: "news", label: "NEWS", href: "news.html" },
    { key: "contact", label: "CONTACT", href: "contact.html" },
  ];

  const page = document.body.dataset.page || "home";
  const main = document.getElementById("main");
  const params = new URLSearchParams(location.search);

  /* ---------- helpers ---------- */
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const fmtDate = (d) => String(d || "").replace(/-/g, ". ");
  const paras = (list) => (list || []).map((p) => `<p>${esc(p)}</p>`).join("");
  const projectUrl = (p) => `project.html?id=${encodeURIComponent(p.id)}`;
  const postUrl = (n) => `post.html?id=${encodeURIComponent(n.id)}`;

  const ICON = {
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5L9 13 0 1.2h7.6l5.2 6.9Zm-1.3 19.5h2L6.5 3.2H4.3Z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="1"/><path d="m3 5.5 9 7.5 9-7.5"/></svg>',
    arrow:
      '<svg viewBox="0 0 64 14" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M0 7h62M55 1l7 6-7 6"/></svg>',
    arrowSm:
      '<svg viewBox="0 0 34 8" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M0 4h33M29 .5 33 4l-4 3.5"/></svg>',
    menu:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>',
    mark:
      '<svg class="brand-mark" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><circle cx="18" cy="24" r="13"/><circle cx="30" cy="24" r="13"/><circle cx="24" cy="24" r="2.2" fill="currentColor" stroke="none"/></svg>',
  };

  const snsItems = () => {
    const l = SITE.links || {};
    return [
      l.github && { href: l.github, icon: ICON.github, label: "GitHub" },
      l.x && { href: l.x, icon: ICON.x, label: "X" },
      l.email && { href: `mailto:${l.email}`, icon: ICON.mail, label: "Email" },
    ].filter(Boolean);
  };
  const snsLinks = () =>
    snsItems()
      .map((s) => {
        const ext = s.href.startsWith("http") ? ' target="_blank" rel="noopener"' : "";
        return `<a href="${esc(s.href)}" aria-label="${s.label}"${ext}>${s.icon}</a>`;
      })
      .join("");

  const activeKey = { project: "projects", post: "news" }[page] || page;

  /* ---------- header / footer ---------- */
  function renderHeader() {
    const el = document.getElementById("site-header");
    if (!el) return;
    el.outerHTML = `
<header class="site-header">
  <div class="container">
    <div class="header-top">
      <a class="brand" href="index.html" aria-label="${esc(SITE.name)} トップページ">
        ${ICON.mark}
        <span class="brand-text">
          <span class="brand-name">${esc(SITE.name)}</span>
          <span class="brand-sub">${esc(SITE.brandSub)}</span>
        </span>
      </a>
      <div class="header-right">
        <div class="sns">${snsLinks()}</div>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="global-nav">
          <span class="menu-icon">${ICON.menu}</span><span>MENU</span>
        </button>
      </div>
    </div>
    <nav id="global-nav" class="global-nav" aria-label="メインメニュー">
      <ul>
        ${NAV.map(
          (n) => `<li><a href="${n.href}"${n.key === activeKey ? ' aria-current="page"' : ""}>${n.label}</a></li>`
        ).join("")}
      </ul>
    </nav>
  </div>
</header>`;

    const btn = document.querySelector(".menu-toggle");
    const nav = document.getElementById("global-nav");
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.querySelector(".menu-icon").innerHTML = open ? ICON.close : ICON.menu;
    });
  }

  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    const year = new Date().getFullYear();
    const span = SITE.since && SITE.since < year ? `${SITE.since}-${year}` : year;
    el.outerHTML = `
<footer class="site-footer">
  <div class="container">
    <a class="pagetop" href="#top">PAGE TOP ↑</a>
    <div class="footer-sns">${snsLinks()}</div>
    <nav class="footer-nav" aria-label="フッターメニュー">
      <a href="index.html">TOP</a>
      ${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join("")}
    </nav>
    <p class="copyright">Copyright © ${span} <a href="index.html">${esc(SITE.name)}</a>. All Rights Reserved.</p>
  </div>
</footer>`;
  }

  /* ---------- shared parts ---------- */
  const sectionHead = (title, moreHref) => `
    <div class="section-head">
      <h3 class="section-title">${title}</h3>
      ${moreHref ? `<a class="more-link" href="${moreHref}">VIEW ALL ${ICON.arrowSm}</a>` : ""}
    </div>`;

  const crumbs = (items) => `
    <nav class="breadcrumb" aria-label="パンくずリスト">
      <a href="index.html">TOP</a>${items
        .map(
          (c) =>
            `<span class="sep">/</span>${
              c.href ? `<a href="${c.href}">${esc(c.label)}</a>` : `<span aria-current="page">${esc(c.label)}</span>`
            }`
        )
        .join("")}
    </nav>`;

  const pageHead = (title, sub) => `
    <div class="page-head reveal">
      ${crumbs([{ label: title }])}
      <h2 class="page-title">${title}</h2>
      ${sub ? `<p class="page-sub">${esc(sub)}</p>` : ""}
    </div>`;

  const tile = (p) => `
    <a class="tile reveal" href="${projectUrl(p)}">
      <img src="${esc(p.image)}" alt="" loading="lazy">
      <span class="tile-label"><span class="t">${esc(p.title)}</span><span class="y">${esc(p.year)}</span></span>
      <span class="visually-hidden">${esc(p.title)}</span>
    </a>`;

  const newsCard = (n) => {
    const text = (n.excerpt || (n.body || []).join(" ")).trim();
    return `
    <a class="news-card reveal" href="${postUrl(n)}">
      <div class="news-thumb"><img src="${esc(n.image)}" alt="" loading="lazy"></div>
      <div class="news-body">
        <h4 class="news-title">${esc(n.title)}<span class="date">${fmtDate(n.date)}</span></h4>
        <p class="news-excerpt">${esc(text)}</p>
      </div>
    </a>`;
  };

  const pager = (list, i, urlFn, listHref) => {
    const prev = list[i - 1];
    const next = list[i + 1];
    const cell = (item, cls, lbl) =>
      item
        ? `<a class="${cls}" href="${urlFn(item)}"><span class="lbl">${lbl}</span><span class="ttl">${esc(item.title)}</span></a>`
        : "<span></span>";
    return `
    <nav class="pager" aria-label="前後のページ">
      ${cell(prev, "prev", "← PREV")}
      <a class="list" href="${listHref}">INDEX</a>
      ${cell(next, "next", "NEXT →")}
    </nav>`;
  };

  /* ---------- pages ---------- */
  const pages = {
    home() {
      document.title = `${SITE.name} | ${SITE.tagline}`;
      main.innerHTML = `
      <section class="hero reveal" aria-label="メインビジュアル">
        <canvas id="hero-canvas" aria-hidden="true"></canvas>
        <p class="hero-caption"><strong>${esc(SITE.name)}</strong>${esc(SITE.tagline)}</p>
      </section>

      <section class="section">
        ${sectionHead("PROJECTS", "projects.html")}
        <div class="tile-grid">${PROJECTS.slice(0, 6).map(tile).join("")}</div>
      </section>

      <section class="section">
        ${sectionHead("VISION")}
        <div class="vision-row reveal">
          <a class="vision-img" href="vision.html" style="background-image:url('${esc(VISION.image)}')" aria-label="VISIONページへ"></a>
          <div class="vision-txt">
            <p class="statement">${esc(VISION.statement)}</p>
            <p>${esc(VISION.lead)}</p>
            <a class="arrow-link" href="vision.html" aria-label="VISIONをもっと読む">${ICON.arrow}</a>
          </div>
        </div>
      </section>

      <section class="section">
        ${sectionHead("NEWS", "news.html")}
        <div class="news-list">${NEWS.slice(0, 3).map(newsCard).join("")}</div>
      </section>`;
      initHero();
    },

    vision() {
      setTitle("VISION");
      main.innerHTML = `
      ${pageHead("VISION", "ビジョン")}
      <figure class="wide-img reveal"><img src="${esc(VISION.image)}" alt=""></figure>
      <p class="statement-lg reveal">${esc(VISION.statement)}</p>
      <div class="narrow prose reveal"><p>${esc(VISION.lead)}</p>${paras(VISION.body)}</div>
      <div class="keywords">
        ${(VISION.keywords || [])
          .map(
            (k, i) => `
          <div class="keyword reveal">
            <span class="num">${String(i + 1).padStart(2, "0")}</span>
            <h3>${esc(k.en)}</h3>
            <p class="ja">${esc(k.ja)}</p>
            <p>${esc(k.text)}</p>
          </div>`
          )
          .join("")}
      </div>
      <p class="center reveal"><a class="btn" href="projects.html">VIEW PROJECTS ${ICON.arrowSm}</a></p>`;
    },

    profile() {
      setTitle("PROFILE");
      const dl = (rows) =>
        `<dl class="timeline">${(rows || [])
          .map((r) => `<div><dt>${esc(r.year)}</dt><dd>${esc(r.text)}</dd></div>`)
          .join("")}</dl>`;
      main.innerHTML = `
      ${pageHead("PROFILE", "プロフィール")}
      <div class="profile">
        <div class="profile-photo reveal"><img src="${esc(PROFILE.photo)}" alt="${esc(SITE.nameJa)}のプロフィール写真"></div>
        <div class="reveal">
          <p class="profile-role">${esc(PROFILE.role)}</p>
          <h3 class="profile-name">${esc(SITE.name)}</h3>
          <p class="profile-name-ja">${esc(SITE.nameJa)}</p>
          <p class="profile-aff">${esc(PROFILE.affiliation)}</p>
          <div class="prose">${paras(PROFILE.bio)}</div>
        </div>
      </div>
      <section class="section reveal">${sectionHead("HISTORY")}${dl(PROFILE.history)}</section>
      <section class="section reveal">${sectionHead("AWARDS")}${dl(PROFILE.awards)}</section>
      <section class="section reveal">
        ${sectionHead("SKILLS")}
        <div class="tags">${(PROFILE.skills || []).map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
      </section>`;
    },

    projects() {
      setTitle("PROJECTS");
      const tags = [...new Set(PROJECTS.flatMap((p) => p.tags || []))];
      main.innerHTML = `
      ${pageHead("PROJECTS", "プロジェクト")}
      <div class="filter reveal" role="group" aria-label="カテゴリで絞り込み">
        <button type="button" data-tag="" aria-pressed="true">ALL</button>
        ${tags.map((t) => `<button type="button" data-tag="${esc(t)}" aria-pressed="false">${esc(t)}</button>`).join("")}
      </div>
      <div class="card-grid">
        ${PROJECTS.map(
          (p) => `
          <a class="card reveal" href="${projectUrl(p)}" data-tags="${esc((p.tags || []).join("|"))}">
            <div class="card-img"><img src="${esc(p.image)}" alt="" loading="lazy"></div>
            <h3 class="card-title">${esc(p.title)}</h3>
            <p class="card-meta">${esc(p.year)} — ${esc((p.tags || []).join(" / "))}</p>
            <p class="card-sum">${esc(p.summary)}</p>
          </a>`
        ).join("")}
      </div>
      <p class="empty" hidden>該当するプロジェクトはありません。</p>`;

      const buttons = [...main.querySelectorAll(".filter button")];
      const cards = [...main.querySelectorAll(".card")];
      const apply = (tag) => {
        if (tag && !tags.includes(tag)) tag = "";
        buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.tag === tag)));
        let shown = 0;
        cards.forEach((c) => {
          const hit = !tag || c.dataset.tags.split("|").includes(tag);
          c.hidden = !hit;
          if (hit) {
            shown++;
            c.classList.add("is-in");
          }
        });
        main.querySelector(".empty").hidden = shown > 0;
      };
      buttons.forEach((b) =>
        b.addEventListener("click", () => {
          apply(b.dataset.tag);
          history.replaceState(null, "", b.dataset.tag ? `#${encodeURIComponent(b.dataset.tag)}` : location.pathname);
        })
      );
      apply(decodeURIComponent(location.hash.slice(1)));
    },

    project() {
      const i = PROJECTS.findIndex((p) => p.id === params.get("id"));
      if (i < 0) return notFound();
      const p = PROJECTS[i];
      setTitle(p.title);
      main.innerHTML = `
      <div class="detail-head reveal">
        ${crumbs([{ label: "PROJECTS", href: "projects.html" }, { label: p.title }])}
        <p class="detail-label">PROJECT</p>
        <h1 class="detail-title">${esc(p.title)}</h1>
        ${p.subtitle ? `<p class="detail-sub">${esc(p.subtitle)}</p>` : ""}
      </div>
      <figure class="detail-hero reveal"><img src="${esc(p.image)}" alt="${esc(p.title)}"></figure>
      <div class="detail-grid">
        <aside class="detail-meta reveal">
          <dl>
            <div><dt>YEAR</dt><dd>${esc(p.year)}</dd></div>
            ${p.role ? `<div><dt>ROLE</dt><dd>${esc(p.role)}</dd></div>` : ""}
            <div><dt>CATEGORY</dt><dd class="tags">${(p.tags || [])
              .map((t) => `<a class="tag" href="projects.html#${encodeURIComponent(t)}">${esc(t)}</a>`)
              .join("")}</dd></div>
            ${
              (p.links || []).length
                ? `<div><dt>LINK</dt><dd>${p.links
                    .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
                    .join("<br>")}</dd></div>`
                : ""
            }
          </dl>
        </aside>
        <div class="detail-body prose reveal">${paras(p.body)}</div>
      </div>
      ${pager(PROJECTS, i, projectUrl, "projects.html")}`;
    },

    publication() {
      setTitle("PUBLICATION");
      const years = [...new Set(PUBLICATIONS.map((p) => p.year))].sort((a, b) => b - a);
      main.innerHTML = `
      ${pageHead("PUBLICATION", "研究業績・発表")}
      ${years
        .map(
          (y) => `
        <section class="pub-group reveal">
          <h3 class="pub-year">${esc(y)}</h3>
          <ul class="pub-list">
            ${PUBLICATIONS.filter((p) => p.year === y)
              .map(
                (p) => `
              <li>
                <span class="pub-type">${esc(p.type)}</span>
                <span class="pub-text">${esc(p.text)}${
                  p.url ? ` <a href="${esc(p.url)}" target="_blank" rel="noopener">[Link]</a>` : ""
                }</span>
              </li>`
              )
              .join("")}
          </ul>
        </section>`
        )
        .join("")}`;
    },

    news() {
      setTitle("NEWS");
      main.innerHTML = `
      ${pageHead("NEWS", "お知らせ")}
      <div class="news-list">${NEWS.map(newsCard).join("")}</div>`;
    },

    post() {
      const i = NEWS.findIndex((n) => n.id === params.get("id"));
      if (i < 0) return notFound();
      const n = NEWS[i];
      setTitle(n.title);
      main.innerHTML = `
      <div class="detail-head reveal">
        ${crumbs([{ label: "NEWS", href: "news.html" }, { label: n.title }])}
        <p class="detail-label">NEWS — ${fmtDate(n.date)}</p>
        <h1 class="detail-title ja">${esc(n.title)}</h1>
      </div>
      <div class="narrow">
        <figure class="detail-hero reveal"><img src="${esc(n.image)}" alt=""></figure>
        <div class="prose reveal">${paras(n.body)}</div>
      </div>
      ${pager(NEWS, i, postUrl, "news.html")}`;
    },

    contact() {
      setTitle("CONTACT");
      const l = SITE.links || {};
      const row = (dt, dd) => (dd ? `<div><dt>${dt}</dt><dd>${dd}</dd></div>` : "");
      const ext = (url, text) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(text)}</a>`;
      main.innerHTML = `
      ${pageHead("CONTACT", "お問い合わせ")}
      <p class="contact-lead reveal">${esc(CONTACT.lead)}</p>
      <dl class="contact-list reveal">
        ${row("EMAIL", l.email && `<a href="mailto:${esc(l.email)}">${esc(l.email)}</a>`)}
        ${row("GITHUB", l.github && ext(l.github, l.github.replace(/^https?:\/\//, "")))}
        ${row("X", l.x && ext(l.x, l.x.replace(/^https?:\/\//, "")))}
        ${row("LOCATION", CONTACT.location && esc(CONTACT.location))}
      </dl>
      ${l.email ? `<p class="center reveal"><a class="btn" href="mailto:${esc(l.email)}">SEND EMAIL ${ICON.arrowSm}</a></p>` : ""}`;
    },
  };

  function notFound() {
    setTitle("NOT FOUND");
    main.innerHTML = `
    <div class="notfound">
      <p class="code">404</p>
      <p>お探しのページは見つかりませんでした。</p>
      <a class="btn" href="index.html">BACK TO TOP</a>
    </div>`;
  }

  function setTitle(t) {
    document.title = `${t} | ${SITE.name}`;
  }

  /* ---------- hero: flow-field particles ---------- */
  function initHero() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const BG = "17,17,17";
    let w = 0, h = 0, t = 0, raf = 0, visible = true;
    let particles = [];
    const pointer = { x: -9999, y: -9999 };

    const spawn = (p = {}) =>
      Object.assign(p, { x: Math.random() * w, y: Math.random() * h, life: 80 + Math.random() * 260, accent: Math.random() < 0.05 });

    function resize() {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = `rgb(${BG})`;
      ctx.fillRect(0, 0, w, h);
      const count = Math.round(Math.min(1500, (w * h) / 420));
      particles = Array.from({ length: count }, () => spawn());
    }

    function angle(x, y) {
      const s = 0.0026;
      let a =
        Math.sin(x * s + t * 0.6) * 1.7 +
        Math.cos(y * s * 1.35 - t * 0.45) * 1.5 +
        Math.sin((x + y) * s * 0.55 + t * 0.3) * 1.1;
      const dx = x - pointer.x, dy = y - pointer.y;
      const d = Math.hypot(dx, dy);
      if (d < 140) a += (1 - d / 140) * 2.4;
      return a;
    }

    function step() {
      ctx.fillStyle = `rgba(${BG},0.04)`;
      ctx.fillRect(0, 0, w, h);
      const base = new Path2D();
      const accent = new Path2D();
      for (const p of particles) {
        const a = angle(p.x, p.y);
        const nx = p.x + Math.cos(a) * 1.3;
        const ny = p.y + Math.sin(a) * 1.3;
        const path = p.accent ? accent : base;
        path.moveTo(p.x, p.y);
        path.lineTo(nx, ny);
        p.x = nx;
        p.y = ny;
        if (--p.life < 0 || nx < 0 || nx > w || ny < 0 || ny > h) spawn(p);
      }
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = "rgba(236,236,236,0.26)";
      ctx.stroke(base);
      ctx.strokeStyle = "rgba(224,55,94,0.7)";
      ctx.stroke(accent);
      t += 0.004;
    }

    function loop() {
      step();
      raf = requestAnimationFrame(loop);
    }
    const start = () => {
      if (!raf && visible && !document.hidden && !reduce) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    if (reduce) {
      for (let i = 0; i < 360; i++) step();
      return;
    }

    new ResizeObserver(() => {
      const r = canvas.getBoundingClientRect();
      if (Math.abs(r.width - w) > 1 || Math.abs(r.height - h) > 1) resize();
    }).observe(canvas);
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      visible ? start() : stop();
    }).observe(canvas);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    canvas.parentElement.addEventListener("pointermove", (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    });
    canvas.parentElement.addEventListener("pointerleave", () => {
      pointer.x = pointer.y = -9999;
    });
    start();
  }

  /* ---------- scroll reveal ---------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("has-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => {
      const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
      el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 6) * 70}ms`;
      io.observe(el);
    });
  }

  /* ---------- boot ---------- */
  document.body.id = "top";
  renderHeader();
  renderFooter();
  (pages[page] || notFound)();
  initReveal();
})();
