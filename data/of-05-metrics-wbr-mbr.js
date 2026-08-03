/* ===========================================================================
   Course 3 · Module OF-5 — Operational & Financial Metrics (WBR / MBR)
   =========================================================================== */
Ledger.register({
  id: "of-05",
  title: "Operational & Financial Metrics (WBR / MBR)",
  subtitle:
    "Designing the metrics that guide execution, and running the business reviews where the operation is steered week to week.",
  est: "~60 min",
  objectives: [
    "Explain why the analyst designs metrics, not just reports them.",
    "Distinguish input (leading) from output (lagging) metrics.",
    "Judge whether a metric is well-designed.",
    "Read a business review: variance, week-over-week, and year-over-year.",
    "Guard metric integrity against gaming and vanity.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Why Metrics — and Why You Design Them",
      html: `
        <span class="eyebrow">Course 3 · Lesson 1 of 6</span>
        <h2>Why Metrics — and Why You Design Them</h2>
        <p>The posting asks you to "design metrics and business-review documents to guide the operations
        team through execution." Metrics aren't just scorekeeping — they <strong>direct behavior</strong>.
        A team optimizes what it's measured on, so choosing the metric is choosing the behavior.</p>

        <p>That's why the analyst <em>designs</em> the metric rather than passively reporting a number. A
        well-chosen metric focuses the operation on what matters; a poorly-chosen one drives the wrong
        actions — sometimes worse than no metric at all.</p>

        <div class="callout">
          <strong>The analyst's leverage:</strong> the number you put on the review doc shapes what
          hundreds of people do next week. Getting the metric right — clear, controllable, tied to the
          goal — is one of the highest-leverage things you do in this role.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Input vs. Output Metrics",
      html: `
        <span class="eyebrow">Course 3 · Lesson 2 of 6</span>
        <h2>Input vs. Output Metrics</h2>
        <p>The most important distinction in metric design:</p>
        <table>
          <tr><th>Output (lagging)</th><th>Input (leading)</th></tr>
          <tr><td>The result you want</td><td>The controllable action that drives it</td></tr>
          <tr><td>Cost per unit, on-time %, profit</td><td>UPH, trailer fill, dwell time, defect rate</td></tr>
          <tr><td>Seen after the fact</td><td>Moveable right now</td></tr>
        </table>

        <p>You can't manage an output directly — you can only manage the <span class="kt">inputs</span>
        that produce it. "Improve cost per unit" is a wish; "raise pick UPH and trailer fill" is a plan.
        Great reviews focus the team on the controllable inputs and trust the outputs to follow.</p>

        <div class="callout">
          <strong>Leading indicators earn their keep:</strong> input metrics move first, so they warn you
          before the output (and the P&amp;L) turns. Watching only lagging outputs means you find out too
          late to act.
        </div>
      `,
    },
    {
      id: "l3",
      title: "What Makes a Good Metric",
      html: `
        <span class="eyebrow">Course 3 · Lesson 3 of 6</span>
        <h2>What Makes a Good Metric</h2>
        <p>A well-designed metric is:</p>
        <ul>
          <li><strong>Clearly defined</strong> — everyone computes it the same way, with an explicit numerator and denominator.</li>
          <li><strong>Controllable</strong> — the team can actually move it.</li>
          <li><strong>Tied to a goal</strong> — improving it improves something that matters.</li>
          <li><strong>Hard to game</strong> — you can't improve the metric without improving reality.</li>
          <li><strong>Timely</strong> — available soon enough to act on.</li>
        </ul>

        <p>Pair metrics with their tension. Optimizing cost alone invites quality shortcuts, so watch cost
        <em>and</em> a quality/speed guardrail together. Metrics in tension keep each other honest.</p>

        <div class="callout">
          <strong>Definition is half the battle:</strong> most metric disputes are really definition
          disputes — which volume, which costs, which time window. Nail the definition and write it down.
        </div>
      `,
    },
    {
      id: "l4",
      title: "The Metrics That Matter",
      html: `
        <span class="eyebrow">Course 3 · Lesson 4 of 6</span>
        <h2>The Metrics That Matter</h2>
        <p>A typical operations-finance dashboard blends cost, productivity, quality, and service:</p>
        <table>
          <tr><th>Metric</th><th>Type</th></tr>
          <tr><td>Cost per unit (CPU)</td><td>Output — the headline efficiency number</td></tr>
          <tr><td>Productivity (UPH)</td><td>Input — drives labor cost</td></tr>
          <tr><td>Trailer / cube utilization</td><td>Input — drives transport cost</td></tr>
          <tr><td>On-time delivery %</td><td>Output — the service promise</td></tr>
          <tr><td>Defect rate / DPMO</td><td>Input/quality — drives concessions</td></tr>
          <tr><td>Safety incidents</td><td>Guardrail — never traded away for cost</td></tr>
        </table>

        <div class="callout">
          <strong>Balance the card:</strong> a dashboard that shows only cost invites a team to cut
          corners on quality, service, or safety. A good review shows the efficiency metric alongside the
          guardrails it must not break.
        </div>
      `,
    },
    {
      id: "l5",
      title: "The Business Review (WBR / MBR)",
      html: `
        <span class="eyebrow">Course 3 · Lesson 5 of 6</span>
        <h2>The Business Review (WBR / MBR)</h2>
        <p>Operations run on a rhythm of reviews — the <span class="kt">WBR</span> (Weekly Business
        Review) and <span class="kt">MBR</span> (Monthly). Each is a <span class="kt">mechanism</span>: a
        repeatable process that reliably surfaces what's off and drives action.</p>

        <h3>How the numbers are read</h3>
        <ul>
          <li><strong>Actual vs. plan (variance)</strong> — where are we off target, and by how much?</li>
          <li><strong>Week-over-week (WoW)</strong> — is it improving or deteriorating right now?</li>
          <li><strong>Year-over-year (YoY)</strong> — how do we compare to the same period last year (controls for seasonality)?</li>
        </ul>

        <p>The analyst prepares the doc, calls out the variances that matter, explains the drivers, and
        frames the decisions. A change might be worse WoW yet better YoY — both are true and both matter.</p>

        <div class="callout">
          <strong>The review is a mechanism, not a status meeting:</strong> its job is to catch problems
          early and convert them into owned actions with dates. Numbers without a "so what" and an owner
          are just decoration.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Metric Integrity & Pitfalls",
      html: `
        <span class="eyebrow">Course 3 · Lesson 6 of 6</span>
        <h2>Metric Integrity &amp; Pitfalls</h2>
        <p><span class="kt">Goodhart's law</span>: "when a measure becomes a target, it ceases to be a
        good measure." People optimize the metric — including in ways you didn't intend. Common traps:</p>
        <ul>
          <li><strong>Gaming</strong> — hitting the number without improving reality (e.g. reclassifying defects).</li>
          <li><strong>Vanity metrics</strong> — big, flattering numbers that don't tie to a decision.</li>
          <li><strong>Denominator tricks</strong> — improving a ratio by quietly changing what's counted.</li>
          <li><strong>Averages hiding tails</strong> — a fine average masking a bad segment.</li>
        </ul>

        <div class="callout">
          <strong>Guarding integrity is your job:</strong> insist on precise definitions, pair metrics
          with guardrails, audit for gaming, and reconcile to the P&amp;L. A metric you'd stake your
          credibility on is one you've pressure-tested against these traps. Next: forecasting and
          budgeting (OF-6), where these metrics become the plan.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Design", front: "Why does the analyst design metrics rather than just report them?", back: "Metrics direct behavior — teams optimize what they're measured on — so choosing the metric is choosing the behavior." },
    { id: "f2",  tag: "Input/Output", front: "Input (leading) vs. output (lagging) metrics?", back: "Output = the result (CPU, on-time %); input = the controllable action that drives it (UPH, trailer fill, dwell)." },
    { id: "f3",  tag: "Input/Output", front: "Why manage inputs rather than outputs?", back: "You can't move an output directly — only the inputs that produce it. Inputs also move first, warning you before the output turns." },
    { id: "f4",  tag: "Design", front: "Five traits of a good metric?", back: "Clearly defined, controllable, tied to a goal, hard to game, and timely." },
    { id: "f5",  tag: "Design", front: "Why pair a metric with a guardrail in tension?", back: "Optimizing one metric alone (e.g. cost) invites shortcuts; a quality/speed/safety guardrail keeps it honest." },
    { id: "f6",  tag: "Design", front: "What are most metric disputes really about?", back: "Definitions — which volume, which costs, which time window. Nail and write down the definition." },
    { id: "f7",  tag: "Dashboard", front: "Which metric is the headline efficiency output?", back: "Cost per unit (CPU) — driven by input metrics like UPH and trailer utilization." },
    { id: "f8",  tag: "Dashboard", front: "Why include guardrail metrics (safety, quality) on a cost dashboard?", back: "A cost-only view invites cutting corners on quality, service, or safety — show the guardrails it must not break." },
    { id: "f9",  tag: "Review", front: "What are WBR and MBR?", back: "Weekly and Monthly Business Reviews — recurring mechanisms that surface what's off target and drive action." },
    { id: "f10", tag: "Review", front: "What is a 'mechanism'?", back: "A repeatable process that reliably produces an outcome — a review is a mechanism to catch problems and convert them into owned actions." },
    { id: "f11", tag: "Review", front: "Three lenses for reading a metric in a review?", back: "Actual vs. plan (variance), week-over-week (trend now), and year-over-year (vs. same period, controlling for seasonality)." },
    { id: "f12", tag: "Review", front: "Variance of a cost metric — favorable or unfavorable if actual > plan?", back: "Unfavorable — actual cost above plan is over budget." },
    { id: "f13", tag: "Integrity", front: "State Goodhart's law.", back: "When a measure becomes a target, it ceases to be a good measure — people optimize the metric, not always the reality." },
    { id: "f14", tag: "Integrity", front: "What is a vanity metric?", back: "A big, flattering number that doesn't tie to a decision or reflect real performance." },
    { id: "f15", tag: "Integrity", front: "What is a 'denominator trick'?", back: "Improving a ratio by quietly changing what's counted in the denominator rather than improving the numerator." },
    { id: "f16", tag: "Integrity", front: "How do you guard metric integrity?", back: "Precise definitions, guardrails in tension, audit for gaming, and reconcile to the P&L." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "The analyst designs metrics because…",
      options: ["It fills time", "Metrics direct behavior — the metric you choose shapes what the team does", "Reports need color", "Auditors require it"],
      answer: 1,
      explain: "Teams optimize what they're measured on, so the metric choice drives the behavior.",
    },
    {
      id: "q2",
      prompt: "Which is an INPUT (leading) metric?",
      options: ["Cost per unit", "On-time delivery %", "Pick UPH", "Net profit"],
      answer: 2,
      explain: "UPH is a controllable input that drives labor cost; CPU, on-time %, and profit are lagging outputs.",
    },
    {
      id: "q3",
      prompt: "You can't manage an output directly — you manage…",
      options: ["The output harder", "The controllable inputs that produce it", "The auditor", "The calendar"],
      answer: 1,
      explain: "Outputs follow from inputs; focus the team on the inputs it can actually move.",
    },
    {
      id: "q4",
      scenario: "Plan cost per unit \$6.00; actual \$6.30.",
      prompt: "What is the variance, and is it favorable?",
      options: ["\$0.30, favorable", "\$0.30, unfavorable", "\$0.05, favorable", "\$6.30, unfavorable"],
      answer: 1,
      explain: "Variance = 6.30 − 6.00 = \$0.30. Actual cost above plan is unfavorable (over budget).",
    },
    {
      id: "q5",
      prompt: "Why compare a metric year-over-year (not just week-over-week)?",
      options: ["To use bigger numbers", "To control for seasonality by comparing the same period", "Because WoW is banned", "To avoid the plan"],
      answer: 1,
      explain: "YoY compares the same period a year apart, netting out seasonal patterns that WoW can't.",
    },
    {
      id: "q6",
      prompt: "A business review (WBR/MBR) is best described as…",
      options: ["A status meeting", "A mechanism to catch problems early and drive owned actions", "A social event", "A place to admire charts"],
      answer: 1,
      explain: "It's a recurring mechanism; numbers should come with a 'so what', an owner, and a date.",
    },
    {
      id: "q7",
      prompt: "Goodhart's law warns that…",
      options: [
        "Metrics are always wrong",
        "When a measure becomes a target, it ceases to be a good measure",
        "More metrics are better",
        "Averages are illegal",
      ],
      answer: 1,
      explain: "People optimize the target — sometimes gaming it — so a measure-turned-target can stop reflecting reality.",
    },
    {
      id: "q8",
      prompt: "Which is a way to guard metric integrity?",
      options: [
        "Keep definitions vague",
        "Pair the metric with a guardrail and reconcile to the P&L",
        "Report only flattering numbers",
        "Change the denominator each week",
      ],
      answer: 1,
      explain: "Precise definitions, guardrails in tension, gaming audits, and P&L reconciliation keep metrics honest.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "WBR variance. Compute the cost-per-unit variance vs. plan in dollars and percent.",
      rows: [
        { label: "Plan cost per unit ($)", value: 6.00, given: true },
        { label: "Actual cost per unit ($)", value: 6.30, given: true },
        { label: "Variance ($, actual − plan)", key: "var", answer: 0.30, hint: "actual − plan" },
        { label: "Variance (%)", key: "pct", answer: 5, hint: "variance ÷ plan × 100" },
      ],
      prefix: "",
      explain: "Variance = 6.30 − 6.00 = \$0.30 (unfavorable), which is 5% over plan.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Trend lenses. For the actual CPU, compute week-over-week and year-over-year change.",
      rows: [
        { label: "This week CPU ($)", value: 6.30, given: true },
        { label: "Last week CPU ($)", value: 6.00, given: true },
        { label: "Same week last year CPU ($)", value: 7.00, given: true },
        { label: "Week-over-week change (%)", key: "wow", answer: 5, hint: "(this − last week) ÷ last week × 100" },
        { label: "Year-over-year change (%)", key: "yoy", answer: -10, hint: "(this week − last year) ÷ last year × 100" },
      ],
      prefix: "",
      explain: "WoW +5% (deteriorating vs. last week) but YoY −10% (much better than a year ago) — both true, both worth calling out.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Service & its cost. Compute on-time %, late packages, and the concession cost of the misses.",
      rows: [
        { label: "Packages delivered on time", value: 950000, given: true },
        { label: "Total packages", value: 1000000, given: true },
        { label: "Concession per late package ($)", value: 2, given: true },
        { label: "On-time delivery (%)", key: "otd", answer: 95, hint: "on-time ÷ total × 100" },
        { label: "Late packages", key: "late", answer: 50000, hint: "total − on-time" },
        { label: "Concession cost ($)", key: "conc", answer: 100000, hint: "late packages × concession per package" },
      ],
      prefix: "",
      explain: "95% on-time leaves 50,000 late packages × \$2 = \$100,000 of concessions — service misses have a direct P&L cost.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Scorecard. Compute each metric's variance to target (percent; for on-time, percentage points).",
      rows: [
        { label: "CPU actual ($)", value: 6.30, given: true },
        { label: "CPU target ($)", value: 6.00, given: true },
        { label: "UPH actual", value: 110, given: true },
        { label: "UPH target", value: 100, given: true },
        { label: "On-time actual (%)", value: 95, given: true },
        { label: "On-time target (%)", value: 100, given: true },
        { label: "CPU variance (%)", key: "cpu", answer: 5, hint: "(actual − target) ÷ target × 100" },
        { label: "UPH variance (%)", key: "uph", answer: 10, hint: "(actual − target) ÷ target × 100" },
        { label: "On-time variance (percentage points)", key: "otd", answer: -5, hint: "actual − target" },
      ],
      prefix: "",
      explain: "CPU +5% (unfavorable — over cost), UPH +10% (favorable — more productive), on-time −5 pts (missing the promise). Read each in context.",
    },
  ],
});
