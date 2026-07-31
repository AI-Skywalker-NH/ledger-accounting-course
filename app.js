/* ===========================================================================
   Ledger — application logic
   Vanilla JS SPA: hash routing, localStorage progress, SM-2 spaced repetition,
   streaks, quizzes, journal-entry and modeling drills.
   =========================================================================== */
(function () {
  "use strict";

  const APP = document.getElementById("app");
  const STORE_KEY = "ledger.v1";

  /* --------------------------------------------------------------- helpers */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
  const todayStr = () => new Date().toISOString().slice(0, 10);
  const dayShift = (dateStr, days) => {
    const d = new Date(dateStr + "T00:00:00");
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  };
  const fmtMoney = (n) => {
    n = Number(n);
    return (n < 0 ? "-$" : "$") + Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: 0 });
  };

  // Track per-view intervals (drill timers) so we can stop them on navigation.
  let activeTimers = [];
  function clearTimers() { activeTimers.forEach(clearInterval); activeTimers = []; }

  function toast(msg) {
    let t = $(".toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(() => t.classList.add("show"));
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ------------------------------------------------------- state / storage */
  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { streak: { current: 0, longest: 0, lastActive: null }, modules: {} };
  }
  let STATE = loadState();
  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(STATE));
    } catch (e) {}
  }
  function modState(id) {
    if (!STATE.modules[id])
      STATE.modules[id] = { lessons: {}, cards: {}, quiz: { best: 0 }, drills: {} };
    const m = STATE.modules[id];
    m.lessons = m.lessons || {};
    m.cards = m.cards || {};
    m.quiz = m.quiz || { best: 0 };
    m.drills = m.drills || {};
    return m;
  }

  /* Streak: call on any real activity. */
  function touchStreak() {
    const s = STATE.streak;
    const t = todayStr();
    if (s.lastActive === t) return;
    if (s.lastActive === dayShift(t, -1)) s.current += 1;
    else s.current = 1;
    s.lastActive = t;
    s.longest = Math.max(s.longest || 0, s.current);
    save();
    renderTopbar();
  }

  /* --------------------------------------------------- spaced repetition */
  // Grades: 0=again, 1=hard, 2=good, 3=easy
  function cardRecord(mid, cardId) {
    const m = modState(mid);
    return m.cards[cardId] || null;
  }
  function isCardDue(rec) {
    if (!rec) return true; // never seen → due
    return rec.due <= todayStr();
  }
  function isCardMastered(rec) {
    return !!rec && rec.interval >= 4; // graded well enough to space ≥4 days out
  }
  function gradeCard(mid, cardId, grade) {
    const m = modState(mid);
    const rec = m.cards[cardId] || { ease: 2.5, interval: 0, reps: 0, due: todayStr() };
    if (grade === 0) {
      rec.reps = 0;
      rec.interval = 0;
      rec.ease = Math.max(1.3, rec.ease - 0.2);
    } else if (grade === 1) {
      rec.interval = Math.max(1, Math.round((rec.interval || 1) * 1.2));
      rec.ease = Math.max(1.3, rec.ease - 0.15);
      rec.reps += 1;
    } else if (grade === 2) {
      rec.interval = rec.reps === 0 ? 1 : rec.reps === 1 ? 3 : Math.round(rec.interval * rec.ease);
      rec.reps += 1;
    } else {
      rec.interval = rec.reps === 0 ? 3 : Math.round(rec.interval * rec.ease * 1.3);
      rec.ease = rec.ease + 0.15;
      rec.reps += 1;
    }
    rec.due = grade === 0 ? todayStr() : dayShift(todayStr(), rec.interval);
    m.cards[cardId] = rec;
    save();
    touchStreak();
    return rec;
  }
  function dueCountAll() {
    let n = 0;
    Object.keys(Ledger.modules).forEach((mid) => {
      const mod = Ledger.modules[mid];
      (mod.flashcards || []).forEach((c) => {
        if (isCardDue(cardRecord(mid, c.id))) n++;
      });
    });
    return n;
  }

  /* ------------------------------------------------------------- progress */
  function moduleProgress(mid) {
    const mod = Ledger.modules[mid];
    if (!mod) return { pct: 0, parts: {} };
    const m = modState(mid);

    const lessonsTotal = (mod.lessons || []).length || 1;
    const lessonsDone = (mod.lessons || []).filter((l) => m.lessons[l.id]).length;

    const cardsTotal = (mod.flashcards || []).length || 1;
    const cardsMastered = (mod.flashcards || []).filter((c) =>
      isCardMastered(cardRecord(mid, c.id))
    ).length;

    const quizPct = clamp(m.quiz.best || 0, 0, 100);

    const drillsTotal = (mod.drills || []).length || 1;
    const drillsDone = (mod.drills || []).filter((d) => m.drills[d.id]).length;

    const parts = {
      lessons: Math.round((lessonsDone / lessonsTotal) * 100),
      cards: Math.round((cardsMastered / cardsTotal) * 100),
      quiz: Math.round(quizPct),
      drills: Math.round((drillsDone / drillsTotal) * 100),
    };
    const pct = Math.round((parts.lessons + parts.cards + parts.quiz + parts.drills) / 4);
    return { pct, parts, lessonsDone, lessonsTotal, cardsMastered, cardsTotal, drillsDone, drillsTotal };
  }

  /* --------------------------------------------------------------- topbar */
  function renderTopbar() {
    const s = STATE.streak;
    const due = dueCountAll();
    $("#topbarStats").innerHTML = `
      <span class="stat-badge" title="Day streak — study anything to keep it alive">
        <span class="ico">🔥</span>${s.current || 0} day${(s.current || 0) === 1 ? "" : "s"}
      </span>
      <span class="stat-badge due ${due > 0 ? "has-due" : ""}" title="Flashcards due for review">
        <span class="ico">🗂️</span>${due} due
      </span>`;
  }

  /* ---------------------------------------------------------- svg ring */
  function ring(pct) {
    const r = 24, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
    return `<svg class="ring" viewBox="0 0 54 54" role="img" aria-label="${pct}% complete">
      <circle class="track" cx="27" cy="27" r="${r}"></circle>
      <circle class="fill" cx="27" cy="27" r="${r}" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"></circle>
      <text x="27" y="27" text-anchor="middle" dominant-baseline="central">${pct}%</text>
    </svg>`;
  }

  /* =======================================================================
     ROUTER
     ======================================================================= */
  const UI = { lessonIdx: 0 };

  function parseHash() {
    const h = location.hash.replace(/^#\/?/, "");
    const parts = h.split("/").filter(Boolean);
    if (parts[0] === "shortcuts") return { view: "shortcuts" };
    if (parts[0] === "m" && parts[1]) return { view: "module", mid: parts[1], tab: parts[2] || "learn" };
    return { view: "home" };
  }
  function go(hash) { location.hash = hash; }

  function highlightNav(view) {
    $$(".topnav a").forEach((a) => a.classList.toggle("active", a.dataset.nav === (view === "shortcuts" ? "shortcuts" : "home")));
  }

  function route() {
    clearTimers();
    const r = parseHash();
    window.scrollTo(0, 0);
    if (r.view === "shortcuts") renderShortcuts();
    else if (r.view === "module" && Ledger.modules[r.mid]) renderModule(r.mid, r.tab);
    else renderHome();
    renderTopbar();
    highlightNav(r.view);
  }

  /* =======================================================================
     HOME
     ======================================================================= */
  function moduleCardHTML(entry, courseModules) {
    const mod = Ledger.modules[entry.id];
    if (entry.status === "available" && mod) {
      const p = moduleProgress(entry.id);
      const idx = courseModules.indexOf(entry) + 1;
      return `
        <a class="card module-card" href="#/m/${entry.id}">
          <div class="mc-top">
            <div>
              <div class="mc-meta">Module ${idx} · ${mod.est || ""}</div>
              <h3>${mod.title}</h3>
            </div>
            ${ring(p.pct)}
          </div>
          <p class="muted" style="margin:0">${mod.subtitle}</p>
          <div class="progress-bar"><i style="width:${p.pct}%"></i></div>
          <div class="btn-row"><span class="btn btn-primary">${p.pct > 0 ? "Continue" : "Start"} →</span></div>
        </a>`;
    }
    return `
      <div class="card module-card locked">
        <div class="mc-top">
          <div>
            <div class="mc-meta">${entry.est || ""}</div>
            <h3>${entry.title || (mod && mod.title) || "Module"}</h3>
          </div>
          <span class="lock-tag">Coming soon</span>
        </div>
        <p class="muted" style="margin:0">Planned for a future release.</p>
      </div>`;
  }

  function allAvailableIds() {
    const out = [];
    COURSES.forEach((c) => c.modules.forEach((e) => {
      if (e.status === "available" && Ledger.modules[e.id]) out.push(e.id);
    }));
    return out;
  }
  function overallStats() {
    const ids = allAvailableIds();
    if (!ids.length) return { pct: 0, complete: 0, total: 0 };
    const pcts = ids.map((id) => moduleProgress(id).pct);
    return {
      pct: Math.round(pcts.reduce((a, b) => a + b, 0) / ids.length),
      complete: pcts.filter((p) => p === 100).length,
      total: ids.length,
    };
  }
  function nextModuleId() {
    const ids = allAvailableIds();
    const started = ids.find((id) => { const p = moduleProgress(id).pct; return p > 0 && p < 100; });
    return started || ids.find((id) => moduleProgress(id).pct < 100) || ids[0] || "module-01";
  }

  function renderHome() {
    const ov = overallStats();
    const due = dueCountAll();
    const s = STATE.streak;
    const nextId = nextModuleId();
    const started = ov.pct > 0;

    const sections = COURSES.map((c) => {
      const avail = c.modules.filter((e) => e.status === "available" && Ledger.modules[e.id]).length;
      const cards = c.modules.map((e) => moduleCardHTML(e, c.modules)).join("");
      return `
        <div class="section-title">
          <div><h2>${c.title}</h2><div class="muted" style="font-size:13px">${c.subtitle}</div></div>
          <span class="muted">${avail ? avail + " available" : "In development"}</span>
        </div>
        <p class="muted course-tagline">${c.tagline}</p>
        <div class="module-grid">${cards}</div>`;
    }).join("");

    APP.innerHTML = `
      <section class="hero">
        <span class="eyebrow">Interactive · self-paced</span>
        <h1>${PLATFORM.title}</h1>
        <p>${PLATFORM.tagline}</p>
        <div class="btn-row">
          <a class="btn btn-primary btn-lg" href="#/m/${nextId}">${started ? "Continue where you left off" : "Start Module 1"} →</a>
          <a class="btn btn-lg btn-ghost" href="#/m/${nextId}/cards" style="color:#eaf1f7;border-color:rgba(255,255,255,.25)">Review flashcards</a>
        </div>
      </section>

      <div class="overview">
        <div class="card ov-tile">${ring(ov.pct)}<div><div class="ov-lab">Overall mastery</div></div></div>
        <div class="card ov-tile"><div><div class="ov-num">${ov.complete}/${ov.total}</div><div class="ov-lab">Modules complete</div></div></div>
        <div class="card ov-tile"><div><div class="ov-num" style="color:${due > 0 ? "var(--gold)" : "inherit"}">${due}</div><div class="ov-lab">Cards due</div></div></div>
        <div class="card ov-tile"><div><div class="ov-num">${s.current || 0} 🔥</div><div class="ov-lab">Day streak</div></div></div>
      </div>

      ${sections}
    `;
  }
  function romanOrNum(id) {
    const m = id.match(/(\d+)/);
    return m ? String(parseInt(m[1], 10)) : "";
  }

  /* =======================================================================
     MODULE SHELL
     ======================================================================= */
  function renderModule(mid, tab) {
    const mod = Ledger.modules[mid];
    const p = moduleProgress(mid);
    const dueHere = (mod.flashcards || []).filter((c) => isCardDue(cardRecord(mid, c.id))).length;

    APP.innerHTML = `
      <div class="crumb"><a href="#/">Modules</a> › ${mod.title}</div>
      <div class="pagehead">
        <span class="eyebrow">Module ${romanOrNum(mid)} · ${mod.est || ""}</span>
        <h1>${mod.title}</h1>
        <p>${mod.subtitle}</p>
        <div class="progress-bar" style="max-width:420px;margin-top:16px"><i style="width:${p.pct}%"></i></div>
        <div class="muted" style="font-size:13px;margin-top:6px">${p.pct}% mastery ·
          Lessons ${p.lessonsDone}/${p.lessonsTotal} ·
          Cards ${p.cardsMastered}/${p.cardsTotal} ·
          Quiz ${p.parts.quiz}% ·
          Drills ${p.drillsDone}/${p.drillsTotal}</div>
      </div>

      <nav class="tabs">
        ${tabBtn(mid, "learn", "Learn", (mod.lessons || []).length)}
        ${tabBtn(mid, "cards", "Flashcards", (mod.flashcards || []).length, dueHere)}
        ${tabBtn(mid, "quiz", "Quiz", (mod.quiz || []).length)}
        ${tabBtn(mid, "drills", "Drills", (mod.drills || []).length)}
      </nav>
      <div id="tabPanel"></div>
    `;
    $$(".tab").forEach((b) => (b.onclick = () => go(`#/m/${mid}/${b.dataset.tab}`)));

    if (tab === "cards") renderFlashcards(mid);
    else if (tab === "quiz") renderQuiz(mid);
    else if (tab === "drills") renderDrills(mid);
    else renderLessons(mid);
  }
  function tabBtn(mid, tab, label, count, badge) {
    const active = parseHash().tab === tab ? "active" : "";
    const b = badge ? ` <span class="tab-count" style="color:var(--gold)">${badge} due</span>` : count != null ? ` <span class="tab-count">${count}</span>` : "";
    return `<button class="tab ${active}" data-tab="${tab}">${label}${b}</button>`;
  }

  /* =======================================================================
     LEARN (lessons)
     ======================================================================= */
  function renderLessons(mid) {
    const mod = Ledger.modules[mid];
    const m = modState(mid);
    UI.lessonIdx = clamp(UI.lessonIdx, 0, mod.lessons.length - 1);

    const panel = $("#tabPanel");
    const nav = mod.lessons
      .map((l, i) => {
        const done = m.lessons[l.id];
        return `<li><button class="${i === UI.lessonIdx ? "active" : ""} ${done ? "done" : ""}" data-i="${i}">
          <span class="dot"></span><span>${i + 1}. ${l.title}</span>${done ? '<span style="margin-left:auto">✓</span>' : ""}
        </button></li>`;
      })
      .join("");

    const l = mod.lessons[UI.lessonIdx];
    const done = m.lessons[l.id];
    panel.innerHTML = `
      <div class="lesson-layout">
        <aside class="lesson-nav"><ol>${nav}</ol></aside>
        <article class="card lesson-body" style="padding:26px 30px">
          ${l.html}
          <div class="lesson-foot">
            <button class="btn btn-ghost" id="prevL" ${UI.lessonIdx === 0 ? "disabled" : ""}>← Previous</button>
            <button class="btn ${done ? "" : "btn-primary"}" id="doneL">${done ? "✓ Completed" : "Mark complete"}</button>
            <button class="btn btn-ghost" id="nextL" ${UI.lessonIdx === mod.lessons.length - 1 ? "disabled" : ""}>Next →</button>
          </div>
        </article>
      </div>`;

    $$(".lesson-nav button").forEach((b) => (b.onclick = () => { UI.lessonIdx = +b.dataset.i; renderLessons(mid); }));
    $("#prevL").onclick = () => { UI.lessonIdx--; renderLessons(mid); };
    $("#nextL").onclick = () => { UI.lessonIdx++; renderLessons(mid); };
    $("#doneL").onclick = () => {
      m.lessons[l.id] = true;
      save();
      touchStreak();
      const allDone = mod.lessons.every((x) => m.lessons[x.id]);
      toast(allDone ? "All lessons complete! 🎓" : "Lesson complete ✓");
      if (UI.lessonIdx < mod.lessons.length - 1) UI.lessonIdx++;
      renderModule(mid, "learn");
    };
  }

  /* =======================================================================
     FLASHCARDS (spaced repetition)
     ======================================================================= */
  function renderFlashcards(mid) {
    const mod = Ledger.modules[mid];
    const panel = $("#tabPanel");

    // Build the session queue: due cards (new + overdue).
    let queue = (mod.flashcards || []).filter((c) => isCardDue(cardRecord(mid, c.id)));
    if (queue.length === 0) {
      const total = (mod.flashcards || []).length;
      panel.innerHTML = `
        <div class="empty">
          <div class="big-emoji">✅</div>
          <h2>You're all caught up</h2>
          <p class="muted">No flashcards are due right now. Spaced repetition will resurface them over the coming days.</p>
          <div class="btn-row" style="justify-content:center">
            <button class="btn" id="cramBtn">Review all ${total} anyway</button>
            <a class="btn btn-primary" href="#/m/${mid}/quiz">Take the quiz →</a>
          </div>
        </div>`;
      $("#cramBtn").onclick = () => runFlash(mid, mod.flashcards.slice());
      return;
    }
    runFlash(mid, queue);
  }

  function runFlash(mid, queue) {
    const panel = $("#tabPanel");
    let done = 0;
    const total = queue.length;

    function next() {
      if (queue.length === 0) {
        panel.innerHTML = `
          <div class="result card">
            <div class="big">🎉</div>
            <h2>Session complete</h2>
            <p class="sub">You reviewed ${done} card${done === 1 ? "" : "s"}. Each was rescheduled based on how well you knew it.</p>
            <div class="btn-row" style="justify-content:center;margin-top:14px">
              <a class="btn" href="#/m/${mid}">Back to module</a>
              <a class="btn btn-primary" href="#/m/${mid}/quiz">Take the quiz →</a>
            </div>
          </div>`;
        return;
      }
      const card = queue[0];
      panel.innerHTML = `
        <div class="study-wrap">
          <div class="study-meta"><span>Flashcards</span><span>${done + 1} / ${done + queue.length}</span></div>
          <div class="flashcard" id="fc" tabindex="0" role="button" aria-label="Flip card">
            <div class="flashcard-inner">
              <div class="flash-face flash-front">
                <div class="tag">${card.tag || "Concept"}</div>
                <div class="q">${card.front}</div>
                <div class="flash-hint">Click or press Space to reveal</div>
              </div>
              <div class="flash-face flash-back">
                <div class="tag">Answer</div>
                <div class="a">${card.back}</div>
              </div>
            </div>
          </div>
          <div id="graders"></div>
        </div>`;

      const fc = $("#fc");
      const flip = () => {
        fc.classList.add("flipped");
        $("#graders").innerHTML = `
          <div class="grade-row">
            <button class="btn grade-again" data-g="0">Again<small>&lt;1 day</small></button>
            <button class="btn grade-hard"  data-g="1">Hard<small>soon</small></button>
            <button class="btn grade-good"  data-g="2">Good<small>on track</small></button>
            <button class="btn grade-easy"  data-g="3">Easy<small>later</small></button>
          </div>`;
        $$("#graders .btn").forEach((b) => (b.onclick = () => grade(+b.dataset.g)));
      };
      fc.onclick = () => { if (!fc.classList.contains("flipped")) flip(); };
      fc.onkeydown = (e) => { if (e.code === "Space" || e.code === "Enter") { e.preventDefault(); if (!fc.classList.contains("flipped")) flip(); } };
      fc.focus();

      function grade(g) {
        const rec = gradeCard(mid, card.id, g);
        queue.shift();
        if (g === 0) queue.push(card); // re-queue this session
        else done++;
        const label = g === 0 ? "Again — back to the deck" : `Next review in ${rec.interval} day${rec.interval === 1 ? "" : "s"}`;
        toast(label);
        next();
      }
    }
    next();
  }

  /* =======================================================================
     QUIZ
     ======================================================================= */
  function renderQuiz(mid) {
    const mod = Ledger.modules[mid];
    const questions = mod.quiz || [];
    const panel = $("#tabPanel");
    let i = 0, correct = 0, answered = false;

    function draw() {
      if (i >= questions.length) return finish();
      const q = questions[i];
      answered = false;
      panel.innerHTML = `
        <div class="q-card card">
          <div class="study-meta"><span>Quiz</span><span>Question ${i + 1} / ${questions.length}</span></div>
          ${q.scenario ? `<div class="q-scenario">${q.scenario}</div>` : ""}
          <div class="q-prompt">${q.prompt}</div>
          <div class="options">
            ${q.options
              .map((o, k) => `<button class="option" data-k="${k}"><span class="key">${"ABCD"[k]}</span><span>${o}</span></button>`)
              .join("")}
          </div>
          <div id="qExplain"></div>
          <div class="btn-row" style="margin-top:18px;justify-content:flex-end">
            <button class="btn btn-primary" id="qNext" style="display:none">${i === questions.length - 1 ? "See results" : "Next question →"}</button>
          </div>
        </div>`;

      $$(".option").forEach((btn) => (btn.onclick = () => {
        if (answered) return;
        answered = true;
        const k = +btn.dataset.k;
        const right = k === q.answer;
        if (right) correct++;
        $$(".option").forEach((b, idx) => {
          if (idx === q.answer) b.classList.add("correct");
          if (idx === k && !right) b.classList.add("wrong");
          b.disabled = true;
        });
        $("#qExplain").innerHTML = `<div class="explain ${right ? "good" : "bad"}">
          <strong>${right ? "Correct." : "Not quite."}</strong> ${q.explain}</div>`;
        $("#qNext").style.display = "inline-flex";
        $("#qNext").focus();
      }));
      $("#qNext").onclick = () => { i++; draw(); };
    }

    function finish() {
      const pct = Math.round((correct / questions.length) * 100);
      const m = modState(mid);
      const isBest = pct > (m.quiz.best || 0);
      m.quiz.best = Math.max(m.quiz.best || 0, pct);
      save();
      touchStreak();
      const msg = pct === 100 ? "Perfect score! 🏆" : pct >= 75 ? "Strong work." : "Review the lessons and try again.";
      panel.innerHTML = `
        <div class="result card">
          <div class="big">${pct}%</div>
          <p class="sub">${correct} of ${questions.length} correct. ${msg}${isBest ? " New best!" : ""}</p>
          <div class="btn-row" style="justify-content:center;margin-top:16px">
            <button class="btn" id="retry">Retake quiz</button>
            <a class="btn btn-primary" href="#/m/${mid}/drills">Go to drills →</a>
          </div>
        </div>`;
      $("#retry").onclick = () => { i = 0; correct = 0; draw(); };
    }
    draw();
  }

  /* =======================================================================
     DRILLS (journal entries + modeling) — worksheet style
     ======================================================================= */
  function renderDrills(mid) {
    const mod = Ledger.modules[mid];
    const m = modState(mid);
    const panel = $("#tabPanel");
    const drills = mod.drills || [];

    panel.innerHTML = `
      <p class="muted" style="max-width:70ch">Hands-on reps. Journal-entry drills reinforce the debit/credit mechanics.
      Modeling drills must be <strong>built from scratch on the in-screen spreadsheet</strong> — lay out the statement
      and use real formulas, keyboard-first, just like you would in Excel.</p>
      <div id="drillList" style="display:flex;flex-direction:column;gap:16px;margin-top:16px"></div>`;

    const list = $("#drillList");
    drills.forEach((d, idx) => {
      const wrap = document.createElement("div");
      list.appendChild(wrap);
      if (d.type === "journal") {
        wrap.className = "q-card card";
        wrap.style.maxWidth = "720px";
        wrap.style.margin = "0";
        wrap.innerHTML = journalHTML(d, idx, m);
        wireJournal(wrap, d, mid);
      } else {
        sheetDrill(wrap, d, idx, mid);
      }
    });
  }

  function journalHTML(d, idx, m) {
    const opts = ['<option value="">— select —</option>']
      .concat(d.accounts.map((a) => `<option value="${a}">${a}</option>`))
      .join("");
    const done = m.drills[d.id];
    return `
      <div class="study-meta"><span>Journal Entry · Drill ${idx + 1}</span><span>${done ? "✓ done" : d.amount}</span></div>
      <div class="q-prompt" style="font-size:17px">${d.prompt}</div>
      <div class="journal">
        <div class="row dr"><label>Debit</label>
          <select data-role="debit">${opts}</select>
          <input value="${d.amount}" disabled aria-label="amount" />
        </div>
        <div class="row cr"><label>Credit</label>
          <select data-role="credit">${opts}</select>
          <input value="${d.amount}" disabled aria-label="amount" />
        </div>
      </div>
      <div id="fb-${d.id}"></div>
      <div class="btn-row" style="margin-top:14px"><button class="btn btn-primary" data-role="check">Check entry</button></div>`;
  }
  function wireJournal(wrap, d, mid) {
    $('[data-role="check"]', wrap).onclick = () => {
      const debit = $('[data-role="debit"]', wrap).value;
      const credit = $('[data-role="credit"]', wrap).value;
      const fb = $(`#fb-${d.id}`, wrap);
      if (!debit || !credit) { fb.innerHTML = `<div class="explain bad"><strong>Pick both accounts.</strong> Every entry needs a debit and a credit.</div>`; return; }
      const right = debit === d.answer.debit && credit === d.answer.credit;
      fb.innerHTML = `<div class="explain ${right ? "good" : "bad"}"><strong>${right ? "Correct." : "Not balanced right."}</strong> ${d.explain}${right ? "" : `<br><br>Correct entry: <strong>Dr ${d.answer.debit}</strong> / <strong>Cr ${d.answer.credit}</strong>.`}</div>`;
      if (right) markDrill(mid, d.id, wrap);
    };
  }

  // Excel-build drill: the modeling problem must be built from scratch on the
  // in-screen spreadsheet. Given rows are the inputs; answer rows are required
  // results you must produce (with formulas when inputs exist to reference).
  function sheetDrill(wrap, d, idx, mid) {
    const givens = d.rows.filter((r) => r.given);
    const targets = d.rows.filter((r) => r.key).map((r) => ({ label: r.label, target: r.answer, hint: r.hint }));
    const hasGivens = d.rows.some((r) => r.given && typeof r.value === "number");
    const money = (v) => (d.prefix === "$" ? fmtMoney(v) : v.toLocaleString("en-US"));

    wrap.className = "card sheet-drill";
    wrap.innerHTML = `
      <div class="sd-left">
        <div class="study-meta"><span>Modeling · Drill ${idx + 1} — build it in the sheet</span><span id="sd-badge-${d.id}"></span></div>
        <div class="q-prompt" style="font-size:17px">${d.prompt}</div>
        <div class="sd-h">Given inputs</div>
        <ul class="sd-given">${givens.length ? givens.map((g) => `<li>${g.label}: <strong>${money(g.value)}</strong></li>`).join("") : '<li class="muted">(the numbers are stated in the prompt)</li>'}</ul>
        <div class="sd-h">Build these results ${hasGivens ? "with formulas" : ""}</div>
        <ul class="sd-req" id="sd-checks-${d.id}">${targets.map((t, i) => `<li data-i="${i}"><span class="ck">○</span><span>${t.label} <span class="muted">— ${t.hint}</span></span></li>`).join("")}</ul>
        <label class="sd-strict"><input type="checkbox" id="sd-strict-${d.id}" checked /> Strict keyboard-only (any mouse use fails the drill)</label>
        <div id="sd-fb-${d.id}"></div>
        <div class="btn-row" style="margin-top:12px">
          <button class="btn btn-primary" data-role="check">Check my sheet</button>
          <button class="btn btn-ghost" data-role="reset">Reset sheet</button>
        </div>
        <div class="sd-help muted">Keyboard: arrows move · Enter/Tab commit · <code>F2</code> edit · type <code>=</code> to start a formula. Supports <code>+ − × ÷</code>, <code>^</code>, parentheses, <code>SUM</code>, <code>AVERAGE</code>, <code>MIN</code>, <code>MAX</code>, <code>POWER</code>, <code>SQRT</code>, and ranges like <code>B2:B5</code>. Clicking cells is disabled — navigate with the keyboard.</div>
      </div>
      <div class="sd-right">
        <div class="sd-grid-head">
          <span class="mouse-badge" id="sd-mouse-${d.id}">🖱️ 0</span>
          <span class="timer" id="sd-timer-${d.id}">0:00</span>
        </div>
        <div class="sheet-host" id="sd-host-${d.id}"></div>
      </div>`;

    let mouse = 0;
    const start = Date.now();
    const badge = $(`#sd-mouse-${d.id}`, wrap);
    const timerEl = $(`#sd-timer-${d.id}`, wrap);
    const grid = SheetGrid($(`#sd-host-${d.id}`, wrap), {
      rows: 20, cols: 6,
      onMouse: () => { mouse++; badge.textContent = "🖱️ " + mouse; badge.classList.add("bad"); },
    });
    const timer = setInterval(() => {
      const s = Math.floor((Date.now() - start) / 1000);
      timerEl.textContent = Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    }, 1000);
    activeTimers.push(timer);

    $('[data-role="reset"]', wrap).onclick = () => {
      grid.reset();
      mouse = 0; badge.textContent = "🖱️ 0"; badge.classList.remove("bad");
      $$(`#sd-checks-${d.id} li`, wrap).forEach((li) => { $(".ck", li).textContent = "○"; li.classList.remove("ok", "no"); });
      $(`#sd-fb-${d.id}`, wrap).innerHTML = "";
      grid.focus();
    };

    $('[data-role="check"]', wrap).onclick = () => {
      const strict = $(`#sd-strict-${d.id}`, wrap).checked;
      const fb = $(`#sd-fb-${d.id}`, wrap);
      if (strict && mouse > 0) {
        fb.innerHTML = `<div class="explain bad"><strong>Strict mode: mouse used ${mouse}×.</strong> Reset and complete it keyboard-only to pass.</div>`;
        return;
      }
      const snap = grid.snapshot();
      const used = new Set();
      let hardcoded = false;
      const results = targets.map((t) => {
        // Prefer a distinct formula cell matching the target value.
        let hit = snap.find((c) => !used.has(c.ref) && c.value != null && Math.abs(c.value - t.target) <= 0.01 && (!hasGivens || c.isFormula));
        if (hit) { used.add(hit.ref); return true; }
        // Fell back: is the value present but hardcoded where a formula was expected?
        const soft = snap.find((c) => !used.has(c.ref) && c.value != null && Math.abs(c.value - t.target) <= 0.01);
        if (soft && hasGivens) { used.add(soft.ref); hardcoded = true; }
        return false;
      });

      const lis = $$(`#sd-checks-${d.id} li`, wrap);
      results.forEach((ok, i) => { $(".ck", lis[i]).textContent = ok ? "✓" : "✗"; lis[i].classList.toggle("ok", ok); lis[i].classList.toggle("no", !ok); });

      if (results.every(Boolean)) {
        clearInterval(timer);
        fb.innerHTML = `<div class="explain good"><strong>Correct — sheet built.</strong> ${d.explain}${mouse === 0 ? " 🏆 Keyboard-only!" : ""}</div>`;
        markDrill(mid, d.id, wrap);
        $(`#sd-badge-${d.id}`, wrap).textContent = "✓ done";
      } else {
        fb.innerHTML = `<div class="explain bad"><strong>Not there yet.</strong> ${hardcoded ? "Some results match but are hardcoded — build them as formulas that reference your input cells (start the cell with <code>=</code>)." : "Build every required result as a computed cell on the grid."}</div>`;
      }
    };
  }

  function markDrill(mid, did, wrap) {
    const m = modState(mid);
    const wasDone = m.drills[did];
    m.drills[did] = true;
    save();
    touchStreak();
    const meta = $(".study-meta span:last-child", wrap);
    if (meta) meta.textContent = "✓ done";
    if (!wasDone) {
      const mod = Ledger.modules[mid];
      const all = (mod.drills || []).every((x) => m.drills[x.id]);
      if (all) toast("All drills complete! 💪");
    }
  }

  /* =======================================================================
     EXCEL SHORTCUTS
     ======================================================================= */
  function renderShortcuts() {
    APP.innerHTML = `
      <div class="crumb"><a href="#/">Home</a> › Excel Shortcuts</div>
      <div class="pagehead">
        <span class="eyebrow">Reference</span>
        <h1>Excel Keyboard Shortcuts</h1>
        <p>An exhaustive, searchable reference for Windows and Mac. Working a model keyboard-first is the single biggest speed gain in Excel — the modeling drills enforce it.</p>
      </div>
      <input class="sc-search" id="scSearch" placeholder="Search shortcuts…  (e.g. paste, sum, format, hide)" aria-label="Search shortcuts" />
      <p class="muted sc-note">Mac keys: <code>⌘</code> Command · <code>⌥</code> Option · <code>⌃</code> Control · <code>⇧</code> Shift · <code>fn</code> Function. On Mac, the function keys (F1–F12) may need <code>fn</code>, or enable “Use F1, F2, etc. as standard function keys” in System Settings. Some shortcuts differ between Excel for Windows and Mac; these follow Microsoft's official reference — verify edge cases in your version.</p>
      <div id="scList"></div>`;

    const draw = (q) => {
      q = (q || "").trim().toLowerCase();
      const html = SHORTCUTS.map((g) => {
        const rows = g.items.filter((it) => !q || (it.action + " " + it.win + " " + it.mac).toLowerCase().includes(q));
        if (!rows.length) return "";
        return `<div class="sc-group"><h2>${g.group}</h2>
          <table class="sc-table"><thead><tr><th>Action</th><th>Windows</th><th>Mac</th></tr></thead>
          <tbody>${rows.map((it) => `<tr><td>${it.action}</td><td><kbd>${it.win}</kbd></td><td><kbd>${it.mac}</kbd></td></tr>`).join("")}</tbody></table></div>`;
      }).join("");
      $("#scList").innerHTML = html || '<div class="empty">No shortcuts match your search.</div>';
    };
    draw("");
    $("#scSearch").oninput = (e) => draw(e.target.value);
  }

  /* --------------------------------------------------------------- boot */
  window.addEventListener("hashchange", route);
  renderTopbar();
  route();
})();
