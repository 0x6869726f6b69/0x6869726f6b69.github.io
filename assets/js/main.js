/* =========================================================
   共通のヘッダー・サイドバー・フッターと、各ページの中身を data.js から描画します。
   ページの種類は <body data-page="..."> で決まります。
   ========================================================= */
(() => {
  "use strict";

  const SITE = window.SITE || {};
  const ABOUT = window.ABOUT || {};
  const byDateDesc = (list) => [...(list || [])].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const NEWS = byDateDesc(window.NEWS);
  const CATEGORIES = window.PUBLICATION_CATEGORIES || [];
  const TALKS = byDateDesc(window.TALKS);
  const TEACHING = byDateDesc(window.TEACHING);
  const CV = window.CV || {};
  // Publications are ordered by category, then newest first (same order as the list page).
  const PUBLICATIONS = CATEGORIES.flatMap((c) => byDateDesc((window.PUBLICATIONS || []).filter((p) => p.category === c.key)));

  const NAV = [
    { key: "publications", label: "Publications", href: "publications.html" },
    { key: "talks", label: "Talks", href: "talks.html" },
    { key: "teaching", label: "Teaching", href: "teaching.html" },
    { key: "cv", label: "CV", href: "cv.html" },
  ];

  const page = document.body.dataset.page || "about";
  const activeKey = { publication: "publications", talk: "talks", course: "teaching" }[page] || page;
  const main = document.getElementById("main");
  const params = new URLSearchParams(location.search);

  /* ---------- helpers ---------- */
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  // Escapes text, then turns [label](https://...) into a link.
  const rich = (s) =>
    esc(s).replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/g, (_, label, url) =>
      `<a href="${url}"${url.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`
    );
  const paras = (list) => (list || []).filter(Boolean).map((p) => `<p>${rich(p)}</p>`).join("");
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const SHORT_MONTHS = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
  const parts = (d) => String(d || "").split("-").map(Number);
  const fmtMonth = (d) => { const [y, m] = parts(d); return m ? `${MONTHS[m - 1]} ${y}` : String(y || ""); };
  const fmtShort = (d) => { const [y, m] = parts(d); return m ? `${SHORT_MONTHS[m - 1]} ${y}` : String(y || ""); };
  const fmtDay = (d) => { const [y, m, day] = parts(d); return day ? `${MONTHS[m - 1]} ${String(day).padStart(2, "0")}, ${y}` : fmtMonth(d); };
  const year = (d) => parts(d)[0] || "";
  const ext = (url) => (/^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "");
  const joinNames = (names) => (names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : names.join(""));
  const authors = (list) => joinNames((list || []).map((n) => (n === SITE.citationName ? `<strong>${esc(n)}</strong>` : esc(n))));
  const inJapanese = (item) => (item.language === "ja" ? ' <span class="muted">(in Japanese)</span>' : "");
  const TROPHY = '<span class="trophy" aria-hidden="true">🏆</span>';
  const awardBadge = (item) => (item.award ? `<span class="award-badge">${TROPHY}${esc(item.award)}</span>` : "");
  const citation = (p) => {
    if (p.citation) return p.citation;
    const link = (p.links && (p.links.doi || p.links.arxiv)) || "";
    return `${joinNames(p.authors || [])} (${year(p.date)}). ${p.title}. ${p.venue}.${link ? ` ${link}` : ""}`;
  };
  const linkRow = (links, labels) => {
    const items = Object.entries(labels)
      .filter(([k]) => links && links[k])
      .map(([k, label]) => `<a href="${esc(links[k])}"${ext(links[k])}>${label}</a>`);
    return items.length ? `<p class="small links">${items.join("")}</p>` : "";
  };
  const PUB_LINKS = { doi: "DOI", arxiv: "arXiv", paper: "Download Paper", slides: "Download Slides", code: "Code", url: "Link" };
  const TALK_LINKS = { paper: "Paper", url: "Link", slides: "Slides", video: "Video" };

  const svg = (body, attrs = 'fill="currentColor"') => `<svg class="icon" viewBox="0 0 24 24" ${attrs} aria-hidden="true">${body}</svg>`;
  const stroke = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  const ICON = {
    location: svg('<path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.6A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2Z"/>'),
    institution: svg('<path d="M12 2 2 7v2h20V7L12 2ZM4 11v7h2.5v-7H4Zm4.8 0v7h2.5v-7H8.8Zm4.9 0v7h2.5v-7h-2.5Zm4.8 0v7H21v-7h-2.5ZM2 20v2h20v-2H2Z"/>'),
    email: svg('<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>', stroke),
    scholar: svg('<path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Z"/><path d="M5 13.2V17c0 1.7 3.1 3.5 7 3.5s7-1.8 7-3.5v-3.8l-7 3.8-7-3.8Z"/>'),
    orcid: svg('<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="12" y="15.6" text-anchor="middle" font-size="9.5" font-weight="700" font-family="Arial, sans-serif" fill="currentColor">iD</text>'),
    link: svg('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>', stroke),
    github: svg('<path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/>'),
    linkedin: svg('<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5Z"/>'),
    x: svg('<path d="M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5L9 13 0 1.2h7.6l5.2 6.9Zm-1.3 19.5h2L6.5 3.2H4.3Z"/>'),
    moon: svg('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>'),
    sun: svg('<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>', stroke),
    bars: svg('<path d="M3 6h18M3 12h18M3 18h18"/>', stroke),
  };

  const profileLinks = () => {
    const l = SITE.links || {};
    return [
      l.email && { href: `mailto:${l.email}`, icon: ICON.email, label: "Email" },
      l.googleScholar && { href: l.googleScholar, icon: ICON.scholar, label: "Google Scholar" },
      l.orcid && { href: l.orcid, icon: ICON.orcid, label: "ORCID" },
      l.researchmap && { href: l.researchmap, icon: ICON.link, label: "researchmap" },
      l.github && { href: l.github, icon: ICON.github, label: "GitHub" },
      l.linkedin && { href: l.linkedin, icon: ICON.linkedin, label: "LinkedIn" },
      l.x && { href: l.x, icon: ICON.x, label: "X" },
    ].filter(Boolean);
  };

  /* ---------- masthead ---------- */
  function renderMasthead() {
    const el = document.getElementById("site-header");
    if (!el) return;
    el.outerHTML = `
<header class="masthead">
  <div class="masthead__inner">
    <a class="site-title" href="index.html"${page === "about" ? ' aria-current="page"' : ""}>${esc(SITE.name)}</a>
    <nav class="site-nav" aria-label="Main">
      <ul class="nav-links" id="nav-links">
        ${NAV.map((n) => `<li><a href="${n.href}"${n.key === activeKey ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("")}
      </ul>
    </nav>
    <button class="icon-btn theme-toggle" type="button"></button>
    <button class="icon-btn menu-btn" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Menu">${ICON.bars}</button>
  </div>
</header>`;

    // Theme toggle (dark palette by default; the visitor can switch to light)
    const root = document.documentElement;
    const themeBtn = document.querySelector(".theme-toggle");
    const current = () => (root.getAttribute("data-theme") === "light" ? "light" : "dark");
    const paint = () => {
      const dark = current() === "dark";
      themeBtn.innerHTML = dark ? ICON.sun : ICON.moon;
      themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      themeBtn.title = "toggle theme";
    };
    themeBtn.addEventListener("click", () => {
      const next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
      paint();
    });
    paint();

    // Mobile menu
    const nav = document.querySelector(".site-nav");
    const menuBtn = document.querySelector(".menu-btn");
    const setMenu = (open) => {
      nav.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    };
    menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !menuBtn.contains(e.target)) setMenu(false);
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  }

  /* ---------- sidebar ---------- */
  function renderSidebar() {
    const el = document.getElementById("sidebar");
    if (!el) return;
    const info = [
      SITE.location && `<li><span class="item">${ICON.location}${esc(SITE.location)}</span></li>`,
      SITE.affiliation && `<li><span class="item">${ICON.institution}${esc(SITE.affiliation)}</span></li>`,
    ].filter(Boolean);
    const links = profileLinks().map(
      (l) => `<li><a href="${esc(l.href)}"${ext(l.href)}>${l.icon}${l.label}</a></li>`
    );
    el.innerHTML = `
      <div class="author__avatar"><img src="${esc(SITE.avatar)}" alt="${esc(SITE.name)}"></div>
      <div class="author__content">
        <h3 class="author__name">${esc(SITE.name)}</h3>
        ${SITE.pronouns ? `<p class="author__pronouns">${esc(SITE.pronouns)}</p>` : ""}
        ${SITE.bio ? `<p class="author__bio">${esc(SITE.bio)}</p>` : ""}
      </div>
      <div class="author__urls-wrapper">
        <button class="btn follow-btn" type="button" aria-expanded="false" aria-controls="author-urls">Follow</button>
        <ul class="author__urls" id="author-urls">${info.join("")}${links.join("")}</ul>
      </div>`;

    const btn = el.querySelector(".follow-btn");
    const list = el.querySelector(".author__urls");
    const setOpen = (open) => {
      list.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    };
    btn.addEventListener("click", () => setOpen(!list.classList.contains("is-open")));
    document.addEventListener("click", (e) => {
      if (!list.contains(e.target) && !btn.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  /* ---------- footer ---------- */
  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    const now = new Date().getFullYear();
    const span = SITE.since && SITE.since < now ? `${SITE.since}–${now}` : now;
    const follow = profileLinks()
      .filter((l) => !l.href.startsWith("mailto:"))
      .map((l) => `<li><a href="${esc(l.href)}"${ext(l.href)}>${l.icon}${l.label}</a></li>`)
      .join("");
    el.outerHTML = `
<footer class="page__footer">
  <div class="page__footer-inner">
    ${follow ? `<ul class="footer-follow"><li><strong>Follow:</strong></li>${follow}</ul>` : ""}
    <p class="page__footer-copyright">© ${span} ${esc(SITE.name)}.</p>
  </div>
</footer>`;
  }

  /* ---------- shared parts ---------- */
  const pager = (list, i, urlFn) => {
    const cell = (item, label) => (item ? `<a href="${urlFn(item)}">${label}</a>` : `<span>${label}</span>`);
    return `<nav class="pager" aria-label="Previous and next">${cell(list[i - 1], "Previous")}${cell(list[i + 1], "Next")}</nav>`;
  };
  const pubUrl = (p) => `publication.html?id=${encodeURIComponent(p.id)}`;
  const talkUrl = (t) => `talk.html?id=${encodeURIComponent(t.id)}`;
  const courseUrl = (c) => `course.html?id=${encodeURIComponent(c.id)}`;
  const publishedIn = (p) =>
    `${p.category === "preprint" ? "" : "Published in "}<i>${esc(p.venue)}</i>, ${year(p.date)}${inJapanese(p)}`;
  const talkMeta = (t) => `${esc(t.type)} at <i>${esc(t.venue)}</i>${t.location ? `, ${esc(t.location)}` : ""}`;
  const originalTitle = (item) =>
    item.titleJa ? `<p class="small muted">Original title (Japanese): ${esc(item.titleJa)}</p>` : "";
  const courseMeta = (c) => `${esc(c.type)}, <i>${esc(c.institution)}</i>, ${esc(c.term)}`;

  /* ---------- pages ---------- */
  const pages = {
    about() {
      setTitle("About me");
      main.innerHTML = `
      <article>
        <h1 class="page__title">About me</h1>
        <div class="page__content">
          ${paras(ABOUT.paragraphs)}
          ${NEWS.length ? `<h1 id="news">News</h1>${newsRoll()}` : ""}
        </div>
      </article>`;
      initNewsRoll(main.querySelector(".news-roll"));
    },

    publications() {
      setTitle("Publications");
      const l = SITE.links || {};
      const profile = l.googleScholar
        ? { href: l.googleScholar, label: "my Google Scholar profile" }
        : l.researchmap && { href: l.researchmap, label: "my researchmap profile" };
      main.innerHTML = `
      <article>
        <h1 class="page__title">Publications</h1>
        <div class="page__content">
          ${profile ? `<p>You can also find my articles on <a href="${esc(profile.href)}"${ext(profile.href)}>${profile.label}</a>.</p>` : ""}
          ${CATEGORIES.map((c) => {
            const items = PUBLICATIONS.filter((p) => p.category === c.key);
            if (!items.length) return "";
            return `<h2>${esc(c.title)}</h2><hr>${items.map(pubItem).join("")}`;
          }).join("")}
        </div>
      </article>`;
    },

    publication() {
      const i = PUBLICATIONS.findIndex((p) => p.id === params.get("id"));
      if (i < 0) return notFound();
      const p = PUBLICATIONS[i];
      setTitle(p.title);
      main.innerHTML = `
      <article>
        <h1 class="page__title">${esc(p.title)}</h1>
        <p class="page__meta">${publishedIn(p)}</p>
        <div class="page__content">
          <p class="archive__item-authors">${authors(p.authors)}</p>
          ${originalTitle(p)}
          ${awardBadge(p)}
          ${linkRow(p.links, PUB_LINKS)}
          ${(p.abstract || []).length ? `<h2>Abstract</h2>${paras(p.abstract)}` : ""}
          <p class="small">Recommended citation: ${esc(citation(p))}</p>
        </div>
        ${pager(PUBLICATIONS, i, pubUrl)}
      </article>`;
    },

    talks() {
      setTitle("Talks and presentations");
      main.innerHTML = `
      <article>
        <h1 class="page__title">Talks and presentations</h1>
        <div class="page__content">
          ${TALKS.map(
            (t) => `
            <div class="archive__item">
              <h2 class="archive__item-title"><a href="${talkUrl(t)}">${esc(t.title)}</a></h2>
              ${(t.authors || []).length ? `<p class="archive__item-authors">${authors(t.authors)}</p>` : ""}
              <p class="archive__item-meta">${talkMeta(t)}${inJapanese(t)}</p>
              <p class="archive__item-meta muted">${fmtDay(t.date)}</p>
              ${awardBadge(t)}
              ${t.excerpt ? `<p class="archive__item-excerpt">${esc(t.excerpt)}</p>` : ""}
            </div>`
          ).join("")}
        </div>
      </article>`;
    },

    talk() {
      const i = TALKS.findIndex((t) => t.id === params.get("id"));
      if (i < 0) return notFound();
      const t = TALKS[i];
      setTitle(t.title);
      main.innerHTML = `
      <article>
        <h1 class="page__title">${esc(t.title)}</h1>
        <p class="page__meta">${talkMeta(t)} — ${fmtDay(t.date)}${inJapanese(t)}</p>
        <div class="page__content">
          ${(t.authors || []).length ? `<p class="archive__item-authors">${authors(t.authors)}</p>` : ""}
          ${originalTitle(t)}
          ${awardBadge(t)}
          ${paras(t.description)}
          ${linkRow(t.links, TALK_LINKS)}
        </div>
        ${pager(TALKS, i, talkUrl)}
      </article>`;
    },

    teaching() {
      setTitle("Teaching");
      main.innerHTML = `
      <article>
        <h1 class="page__title">Teaching</h1>
        <div class="page__content">
          ${TEACHING.map(
            (c) => `
            <div class="archive__item">
              <h2 class="archive__item-title"><a href="${courseUrl(c)}">${esc(c.title)}</a></h2>
              <p class="archive__item-meta">${courseMeta(c)}</p>
              ${c.excerpt ? `<p class="archive__item-excerpt">${esc(c.excerpt)}</p>` : ""}
            </div>`
          ).join("")}
        </div>
      </article>`;
    },

    course() {
      const i = TEACHING.findIndex((c) => c.id === params.get("id"));
      if (i < 0) return notFound();
      const c = TEACHING[i];
      setTitle(c.title);
      main.innerHTML = `
      <article>
        <h1 class="page__title">${esc(c.title)}</h1>
        <p class="page__meta">${courseMeta(c)}</p>
        <div class="page__content">${paras(c.description)}</div>
        ${pager(TEACHING, i, courseUrl)}
      </article>`;
    },

    cv() {
      setTitle("CV");
      const list = (items) => `<ul class="cv-list">${items.join("")}</ul>`;
      const section = (title, items) => (items.length ? `<h1>${title}</h1>${list(items)}` : "");
      const education = (CV.education || []).map(
        (e) => `<li><strong>${esc(e.degree)}</strong>, ${esc(e.school)}, ${esc(e.period)}${
          e.note ? `<br><span class="small">${rich(e.note)}</span>` : ""
        }</li>`
      );
      const experience = (CV.experience || [])
        .filter((g) => (g.items || []).length)
        .map(
          (g) => `<h2>${esc(g.group)}</h2>${list(
            g.items.map(
              (w) => `<li><strong>${esc(w.role)}</strong>${w.title ? `<br><i>${esc(w.title)}</i>` : ""}<br><span class="small muted">${[
                w.detail,
                w.period,
              ]
                .filter(Boolean)
                .map(esc)
                .join(" | ")}</span></li>`
            )
          )}`
        )
        .join("");
      const pubs = CATEGORIES.map((c) => {
        const items = PUBLICATIONS.filter((p) => p.category === c.key);
        return items.length
          ? `<h2>${esc(c.title)}</h2>${list(
              items.map(
                (p) => `<li>${authors(p.authors).replace(/(\.(<\/strong>)?)?$/, (m) => m || ".")} <a href="${pubUrl(p)}">${esc(p.title)}</a>. <i>${esc(p.venue)}</i>, ${year(p.date)}.${inJapanese(p)}</li>`
              )
            )}`
          : "";
      }).join("");
      main.innerHTML = `
      <article>
        <h1 class="page__title">CV</h1>
        <div class="page__content">
          ${CV.pdf ? `<p><a href="${esc(CV.pdf)}"${ext(CV.pdf)}>Download CV (PDF)</a></p>` : ""}
          ${section("Education", education)}
          ${experience ? `<h1>Work experience</h1>${experience}` : ""}
          ${section("Skills", (CV.skills || []).map((s) => `<li><strong>${esc(s.label)}:</strong> ${esc(s.items)}</li>`))}
          ${pubs ? `<h1>Publications</h1>${pubs}` : ""}
          ${section(
            "Talks",
            TALKS.map((t) => `<li><a href="${talkUrl(t)}">${esc(t.title)}</a>, ${talkMeta(t)}, ${fmtShort(t.date)}.${inJapanese(t)}${
              t.award ? `<br>${awardBadge(t)}` : ""
            }</li>`)
          )}
          ${section(
            "Awards",
            (CV.awards || []).map(
              (a) => `<li><strong>${fmtShort(a.date)}</strong>: ${esc(a.name)}, ${esc(a.org)}</li>`
            )
          )}
          ${section("Service and leadership", (CV.service || []).map((s) => `<li>${esc(s)}</li>`))}
        </div>
      </article>`;
    },
  };

  function pubItem(p) {
    return `
    <div class="archive__item">
      <h2 class="archive__item-title"><a href="${pubUrl(p)}">${esc(p.title)}</a></h2>
      <p class="archive__item-authors">${authors(p.authors)}</p>
      <p class="archive__item-meta">${publishedIn(p)}</p>
      ${awardBadge(p)}
      ${p.excerpt ? `<p class="archive__item-excerpt">${esc(p.excerpt)}</p>` : ""}
      ${linkRow(p.links, PUB_LINKS)}
    </div>`;
  }

  function newsRoll() {
    return `
    <div class="news-roll">
      <div class="news-roll__viewport">
        <ul class="news-roll__list">
          ${NEWS.map(
            (n) => `
            <li class="news-roll__item">
              <span class="news-roll__date">${fmtMonth(n.date)}</span>
              <span class="news-roll__text">${n.url ? `<a href="${esc(n.url)}"${ext(n.url)}>${esc(n.text)}</a>` : esc(n.text)}</span>
            </li>`
          ).join("")}
        </ul>
      </div>
      ${NEWS.length > 5 ? '<button class="news-roll__toggle" type="button" aria-expanded="false">Show all news</button>' : ""}
    </div>`;
  }

  /* News roll: shows 5 items and scrolls up one every few seconds (pauses on hover/focus). */
  function initNewsRoll(root) {
    if (!root) return;
    const VISIBLE = 5;
    const INTERVAL = 4500;
    const viewport = root.querySelector(".news-roll__viewport");
    const list = root.querySelector(".news-roll__list");
    const toggle = root.querySelector(".news-roll__toggle");
    const original = [...list.children];
    if (original.length <= VISIBLE) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let expanded = false;
    let paused = false;
    let busy = false;

    const fit = () => {
      if (expanded) {
        viewport.style.height = "";
        return;
      }
      const h = [...list.children].slice(0, VISIBLE).reduce((sum, li) => sum + li.getBoundingClientRect().height, 0);
      viewport.style.height = `${h}px`;
    };

    const tick = () => {
      if (reduce || paused || expanded || busy || document.hidden) return;
      const first = list.firstElementChild;
      busy = true;
      list.style.transition = "transform 600ms ease-in-out";
      list.style.transform = `translateY(-${first.getBoundingClientRect().height}px)`;
      setTimeout(() => {
        list.style.transition = "none";
        list.appendChild(first);
        list.style.transform = "none";
        busy = false;
        fit();
      }, 650);
    };

    root.addEventListener("mouseenter", () => (paused = true));
    root.addEventListener("mouseleave", () => (paused = false));
    root.addEventListener("focusin", () => (paused = true));
    root.addEventListener("focusout", () => (paused = false));
    addEventListener("resize", fit);

    toggle.addEventListener("click", () => {
      expanded = !expanded;
      if (expanded) original.forEach((li) => list.appendChild(li));
      list.style.transform = "none";
      toggle.textContent = expanded ? "Show fewer" : "Show all news";
      toggle.setAttribute("aria-expanded", String(expanded));
      fit();
    });

    fit();
    setInterval(tick, INTERVAL);
  }

  function notFound() {
    setTitle("Page not found");
    main.innerHTML = `
    <article class="notfound">
      <h1 class="page__title">Page not found</h1>
      <div class="page__content">
        <p>The page you were looking for could not be found. / お探しのページは見つかりませんでした。</p>
        <p><a href="index.html">Back to home</a></p>
      </div>
    </article>`;
  }

  function setTitle(t) {
    document.title = `${t} - ${SITE.name}`;
  }

  /* ---------- boot ---------- */
  renderMasthead();
  renderSidebar();
  renderFooter();
  (pages[page] || notFound)();
})();
