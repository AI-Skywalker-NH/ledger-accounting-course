/* ===========================================================================
   Course registry.
   Content is stored as plain JS (not JSON) so the app works when index.html is
   opened directly from the filesystem (file://), where fetch() of JSON is
   blocked by browser CORS rules.

   To add a module:
     1. Create data/module-0X-slug.js that calls Ledger.register({...}).
     2. Add its id to COURSE.modules below (order = display order).
     3. Add the <script> tag in index.html.
   =========================================================================== */
window.Ledger = window.Ledger || {
  modules: {},
  register(mod) { this.modules[mod.id] = mod; },
};

window.COURSE = {
  title: "The Language of Business",
  tagline:
    "A drill-first accounting course. Learn each concept, then reinforce it with spaced-repetition flashcards, quizzes, and hands-on journal-entry and modeling reps — the same foundation used to build financial models in investment banking.",
  // Display order. Modules not yet authored show as "locked / coming soon".
  modules: [
    { id: "module-01", status: "available" },
    { id: "module-02", status: "available" },
    { id: "module-03", status: "coming-soon", title: "The Income Statement in Depth", est: "~55 min" },
    { id: "module-04", status: "coming-soon", title: "The Balance Sheet in Depth", est: "~55 min" },
    { id: "module-05", status: "coming-soon", title: "The Statement of Cash Flows", est: "~60 min" },
    { id: "module-06", status: "coming-soon", title: "Linking the Three Statements", est: "~70 min" },
    { id: "module-07", status: "coming-soon", title: "Accrual vs. Cash Accounting", est: "~45 min" },
    { id: "module-08", status: "coming-soon", title: "Working Capital & the Cash Cycle", est: "~50 min" },
  ],
};
