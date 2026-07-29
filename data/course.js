/* ===========================================================================
   Course registry.
   Content is stored as plain JS (not JSON) so the app works when index.html is
   opened directly from the filesystem (file://), where fetch() of JSON is
   blocked by browser CORS rules.

   Structure: a platform contains multiple COURSES; each course lists modules
   in display order. Module ids are globally unique (routing keys), so a module
   belongs to exactly one course.

   To add a module:
     1. Create data/module-0X-slug.js that calls Ledger.register({...}).
     2. Add its id to the right course's `modules` array below (order matters).
     3. Add the <script> tag in index.html.
   =========================================================================== */
window.Ledger = window.Ledger || {
  modules: {},
  register(mod) { this.modules[mod.id] = mod; },
};

window.PLATFORM = {
  title: "Master the Language of Business",
  tagline:
    "A drill-first path from accounting fundamentals to investment-banking-grade financial modeling. Learn each concept, then lock it in with spaced-repetition flashcards, quizzes, and hands-on reps.",
};

window.COURSES = [
  {
    id: "accounting-foundations",
    title: "Accounting Foundations",
    subtitle: "The Language of Business",
    tagline: "Start here — the accounting bedrock every financial model is built on.",
    modules: [
      { id: "module-01", status: "available" },
      { id: "module-02", status: "available" },
      { id: "module-03", status: "available" },
      { id: "module-04", status: "available" },
      { id: "module-05", status: "available" },
      { id: "module-06", status: "available" },
      { id: "module-07", status: "available" },
      { id: "module-08", status: "available" },
    ],
  },
  {
    id: "financial-modeling",
    title: "Financial Statement Analysis & Modeling",
    subtitle: "For Investment Banking",
    tagline:
      "The end goal: spreading financials, ratio analysis, and building three-statement, DCF, and LBO models. In development — the foundations course above prepares you for it.",
    modules: [
      { id: "fm-01", status: "coming-soon", title: "Reading & Spreading Financial Statements", est: "~60 min" },
      { id: "fm-02", status: "coming-soon", title: "Ratio Analysis: Liquidity, Leverage, Profitability", est: "~60 min" },
      { id: "fm-03", status: "coming-soon", title: "Building a Three-Statement Model", est: "~90 min" },
      { id: "fm-04", status: "coming-soon", title: "Forecasting Revenue & Operating Drivers", est: "~70 min" },
      { id: "fm-05", status: "coming-soon", title: "The Cash Flow Bridge & Circularity", est: "~60 min" },
      { id: "fm-06", status: "coming-soon", title: "DCF Valuation", est: "~90 min" },
      { id: "fm-07", status: "coming-soon", title: "Comparable Company Analysis", est: "~60 min" },
      { id: "fm-08", status: "coming-soon", title: "LBO Modeling Basics", est: "~90 min" },
    ],
  },
];
