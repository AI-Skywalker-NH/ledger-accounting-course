/* ===========================================================================
   Course 3 · Module OF-7 — Variance Analysis & Bridges
   =========================================================================== */
Ledger.register({
  id: "of-07",
  title: "Variance Analysis & Bridges",
  subtitle:
    "Explaining the gap between actual and plan — decomposing a total change into named, additive drivers that leaders can act on.",
  est: "~60 min",
  objectives: [
    "Define variance analysis and favorable vs. unfavorable.",
    "Build a bridge (waterfall) whose pieces sum to the total change.",
    "Decompose a cost change into volume and rate variances.",
    "Isolate a productivity variance and a mix variance.",
    "Root-cause and communicate a variance with a 'so what'.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "What Is Variance Analysis?",
      html: `
        <span class="eyebrow">Course 3 · Lesson 1 of 6</span>
        <h2>What Is Variance Analysis?</h2>
        <p><span class="kt">Variance analysis</span> explains the gap between what happened and what was
        expected — actual vs. plan (or vs. prior period). It's the most common analytical deliverable in
        the role: every business review turns on "we're off by X — here's why."</p>

        <p>Sign convention matters. For a <strong>cost</strong>:</p>
        <ul>
          <li>Actual &gt; plan → <span class="kt">unfavorable</span> (over budget).</li>
          <li>Actual &lt; plan → <span class="kt">favorable</span> (under budget).</li>
        </ul>
        <p>(For revenue it's the opposite.) Always label the direction — a bare number without
        favorable/unfavorable is ambiguous.</p>

        <div class="callout">
          <strong>The variance is the beginning, not the end:</strong> "we're \$930k over" is a fact.
          The value you add is decomposing it into drivers and root causes an operator can act on. A
          variance you can't explain is a variance you can't fix.
        </div>
      `,
    },
    {
      id: "l2",
      title: "The Bridge (Waterfall)",
      html: `
        <span class="eyebrow">Course 3 · Lesson 2 of 6</span>
        <h2>The Bridge (Waterfall)</h2>
        <p>A <span class="kt">bridge</span> (or waterfall) decomposes a total change into named
        components that <strong>sum exactly to the total</strong>. It walks from the starting number to
        the ending number, one driver at a time:</p>
        <table>
          <tr><td>Plan cost</td><td>6,000,000</td></tr>
          <tr><td>+ Volume impact</td><td>+600,000</td></tr>
          <tr><td>+ Rate / productivity impact</td><td>+330,000</td></tr>
          <tr><td><strong>= Actual cost</strong></td><td><strong>6,930,000</strong></td></tr>
        </table>

        <p>The discipline is that the pieces <strong>tie out</strong>: plan + all bridge items = actual,
        with nothing left in an unexplained "other." A bridge that doesn't sum to the total isn't
        finished.</p>

        <div class="callout">
          <strong>Why leaders love bridges:</strong> a single "\$930k over" is a wall; a bridge turns it
          into "\$600k from higher volume, \$330k from worse rate" — each with an owner and an action. The
          bridge is how variance becomes decisions.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Volume, Rate & Mix",
      html: `
        <span class="eyebrow">Course 3 · Lesson 3 of 6</span>
        <h2>Volume, Rate &amp; Mix</h2>
        <p>Most cost changes decompose into three classic effects:</p>
        <table>
          <tr><th>Effect</th><th>Formula</th><th>Question it answers</th></tr>
          <tr><td><span class="kt">Volume</span></td><td>(Actual vol − Plan vol) × Plan rate</td><td>How much came from doing more/less?</td></tr>
          <tr><td><span class="kt">Rate</span></td><td>(Actual rate − Plan rate) × Actual vol</td><td>How much from cost-per-unit changing?</td></tr>
          <tr><td><span class="kt">Mix</span></td><td>Shift in the blend of items with different costs</td><td>How much from a change in what we did?</td></tr>
        </table>

        <p>Holding one factor at plan while flexing the other isolates each effect. Volume variance uses
        the <em>plan</em> rate (so it's pure volume); rate variance uses the <em>actual</em> volume (so it
        captures the rate change on everything produced).</p>

        <div class="callout">
          <strong>Volume isn't automatically bad:</strong> a cost increase driven by higher volume can be
          fine (more units sold) — while the same increase from a worse rate is a real efficiency problem.
          Splitting them tells you whether to celebrate or intervene.
        </div>
      `,
    },
    {
      id: "l4",
      title: "The Cost Bridge in Practice",
      html: `
        <span class="eyebrow">Course 3 · Lesson 4 of 6</span>
        <h2>The Cost Bridge in Practice</h2>
        <p>Work a full example. Plan: 1,000,000 units at \$6.00 → \$6,000,000. Actual: 1,100,000 units at
        \$6.30 → \$6,930,000. Total variance \$930,000 unfavorable. Decompose:</p>
        <ul>
          <li><strong>Volume variance</strong> = (1,100,000 − 1,000,000) × \$6.00 = <strong>\$600,000</strong>
          (more units at plan rate).</li>
          <li><strong>Rate variance</strong> = (\$6.30 − \$6.00) × 1,100,000 = <strong>\$330,000</strong>
          (higher cost per unit on actual volume).</li>
        </ul>
        <p>Check: 600,000 + 330,000 = 930,000 = total. The bridge ties out. ✓</p>

        <div class="callout">
          <strong>Read the story:</strong> of the \$930k overage, \$600k is "we handled 10% more volume"
          (maybe good) and \$330k is "each unit cost \$0.30 more than planned" (an efficiency miss to
          root-cause). Same total, two very different conversations.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Root-Causing a Variance",
      html: `
        <span class="eyebrow">Course 3 · Lesson 5 of 6</span>
        <h2>Root-Causing a Variance</h2>
        <p>The bridge tells you <em>what</em> moved; root-causing tells you <em>why</em>. Take the \$330k
        rate variance and keep asking why:</p>
        <ol>
          <li>Cost per unit was \$0.30 high — <em>why?</em></li>
          <li>Labor cost per unit rose — <em>why?</em></li>
          <li>Productivity (UPH) fell below plan — <em>why?</em></li>
          <li>A new-hire surge lowered the average rate — <em>why?</em></li>
          <li>Training capacity didn't scale with hiring. → <strong>the root cause and the fix.</strong></li>
        </ol>

        <p>This is the <span class="kt">5 Whys</span>: push past the symptom to a cause you can actually
        act on, and attach it to an owner. "Dive Deep" is exactly this — not stopping at the first-level
        number.</p>

        <div class="callout">
          <strong>Beware "it's just timing":</strong> the laziest variance explanation. Sometimes true,
          often a dodge. Insist on a root cause specific enough to drive an action — vague explanations
          are where problems hide and repeat.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Communicating Variance",
      html: `
        <span class="eyebrow">Course 3 · Lesson 6 of 6</span>
        <h2>Communicating Variance</h2>
        <p>The last mile is turning the analysis into something a leader can act on:</p>
        <ul>
          <li><strong>Lead with the bridge</strong> — the total decomposed into named drivers.</li>
          <li><strong>Give each driver a "so what"</strong> — is it good, bad, or expected, and what's the response?</li>
          <li><strong>Name owners and actions</strong> — a variance without an owner won't close.</li>
          <li><strong>Quantify the fix</strong> — "closing the rate gap saves \$330k annualized."</li>
        </ul>

        <div class="callout">
          <strong>Bridge → root cause → action:</strong> that's the arc. You've now covered the full
          measurement-to-explanation loop (metrics in OF-5, variance here). Next, OF-8 turns an
          identified opportunity into a costed business case — the deliverable the whole role builds
          toward.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Basics", front: "What is variance analysis?", back: "Explaining the gap between actual and expected (plan or prior period) — the core review deliverable." },
    { id: "f2",  tag: "Basics", front: "For a cost, is actual > plan favorable or unfavorable?", back: "Unfavorable (over budget). For revenue it's the opposite. Always label the direction." },
    { id: "f3",  tag: "Basics", front: "Why is a variance 'the beginning, not the end'?", back: "The number is a fact; the value is decomposing it into drivers and root causes an operator can act on." },
    { id: "f4",  tag: "Bridge", front: "What is a bridge (waterfall)?", back: "A decomposition of a total change into named components that sum exactly to the total, walking start → end." },
    { id: "f5",  tag: "Bridge", front: "What discipline must a bridge satisfy?", back: "It must tie out: plan + all bridge items = actual, with no unexplained 'other'." },
    { id: "f6",  tag: "Bridge", front: "Why do leaders prefer a bridge over a single variance number?", back: "It turns a wall ('$930k over') into named drivers, each with an owner and an action." },
    { id: "f7",  tag: "Decomp", front: "Volume variance formula?", back: "(Actual volume − Plan volume) × Plan rate — pure volume effect at the planned rate." },
    { id: "f8",  tag: "Decomp", front: "Rate variance formula?", back: "(Actual rate − Plan rate) × Actual volume — the rate change applied to actual volume." },
    { id: "f9",  tag: "Decomp", front: "What is a mix variance?", back: "The cost effect of a shift in the blend of items that have different unit costs, holding per-unit costs constant." },
    { id: "f10", tag: "Decomp", front: "Why split volume from rate variance?", back: "A cost rise from higher volume may be fine; the same rise from a worse rate is an efficiency problem. The split tells you which." },
    { id: "f11", tag: "Example", front: "Plan 1.0M @ $6.00, actual 1.1M @ $6.30 — the two variances?", back: "Volume = 100,000 × 6.00 = $600,000; rate = 0.30 × 1,100,000 = $330,000; total $930,000 (ties out)." },
    { id: "f12", tag: "Root cause", front: "What are the '5 Whys'?", back: "Repeatedly asking 'why?' to push past a symptom to an actionable root cause (and an owner)." },
    { id: "f13", tag: "Root cause", front: "Why be suspicious of 'it's just timing'?", back: "It's the laziest explanation — sometimes true, often a dodge. Insist on a root cause specific enough to drive an action." },
    { id: "f14", tag: "Communicate", front: "What should accompany each driver in a variance narrative?", back: "A 'so what' (good/bad/expected + response), an owner, and a quantified fix." },
    { id: "f15", tag: "Communicate", front: "The variance-analysis arc?", back: "Bridge (what) → root cause (why) → action (owner + quantified fix)." },
    { id: "f16", tag: "Communicate", front: "Why won't a variance close without an owner?", back: "Analysis alone changes nothing; a named owner with an action and date is what converts a variance into a result." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "For a cost line, actual above plan is…",
      options: ["Favorable", "Unfavorable", "Neutral", "Impossible"],
      answer: 1,
      explain: "Higher-than-planned cost is unfavorable (over budget). Label direction — for revenue it would be favorable.",
    },
    {
      id: "q2",
      prompt: "A bridge (waterfall) must…",
      options: [
        "Use only one driver",
        "Have its components sum exactly to the total change",
        "Ignore small drivers",
        "Always show a favorable result",
      ],
      answer: 1,
      explain: "The pieces must tie out: plan + all bridge items = actual, with no unexplained residual.",
    },
    {
      id: "q3",
      scenario: "Plan 1,000,000 units; actual 1,100,000 units; plan rate \$6.00/unit.",
      prompt: "What is the volume variance?",
      options: ["\$600,000", "\$660,000", "\$100,000", "\$330,000"],
      answer: 0,
      explain: "Volume variance = (1,100,000 − 1,000,000) × \$6.00 (plan rate) = \$600,000.",
    },
    {
      id: "q4",
      scenario: "Plan rate \$6.00; actual rate \$6.30; actual volume 1,100,000.",
      prompt: "What is the rate variance?",
      options: ["\$300,000", "\$330,000", "\$30,000", "\$600,000"],
      answer: 1,
      explain: "Rate variance = (6.30 − 6.00) × 1,100,000 (actual volume) = \$330,000.",
    },
    {
      id: "q5",
      prompt: "Why separate the volume variance from the rate variance?",
      options: [
        "To make more slides",
        "A cost rise from volume may be fine, but from a worse rate is an efficiency problem",
        "They always sum to zero",
        "Rate variance is irrelevant",
      ],
      answer: 1,
      explain: "The split tells you whether the overage is 'we did more' (often okay) or 'we got less efficient' (act on it).",
    },
    {
      id: "q6",
      prompt: "The '5 Whys' technique is used to…",
      options: ["Pad a report", "Push past a symptom to an actionable root cause", "Count variances", "Approve budgets"],
      answer: 1,
      explain: "Repeated 'why?' drives from the surface number down to a cause you can actually fix, with an owner.",
    },
    {
      id: "q7",
      prompt: "'It's just timing' as a variance explanation should be…",
      options: ["Always accepted", "Treated skeptically — insist on an actionable root cause", "Never questioned", "Used for every variance"],
      answer: 1,
      explain: "It's the laziest explanation; sometimes true but often a dodge. Demand a root cause specific enough to act on.",
    },
    {
      id: "q8",
      prompt: "A complete variance write-up includes, for each driver…",
      options: [
        "Only the dollar amount",
        "A 'so what', an owner, and a quantified fix",
        "A stock price",
        "The CEO's opinion",
      ],
      answer: 1,
      explain: "Bridge → root cause → action: each driver needs its meaning, an owner, and a quantified response.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Price/volume variance. Split the total cost variance into a volume effect and a rate effect.",
      rows: [
        { label: "Plan volume (units)", value: 1000000, given: true },
        { label: "Plan rate ($/unit)", value: 6.00, given: true },
        { label: "Actual volume (units)", value: 1100000, given: true },
        { label: "Actual rate ($/unit)", value: 6.30, given: true },
        { label: "Plan cost ($)", key: "plan", answer: 6000000, hint: "plan volume × plan rate" },
        { label: "Actual cost ($)", key: "act", answer: 6930000, hint: "actual volume × actual rate" },
        { label: "Volume variance ($)", key: "vol", answer: 600000, hint: "(actual vol − plan vol) × plan rate" },
        { label: "Rate variance ($)", key: "rate", answer: 330000, hint: "(actual rate − plan rate) × actual vol" },
        { label: "Total variance ($)", key: "tot", answer: 930000, hint: "actual cost − plan cost (= volume + rate)" },
      ],
      prefix: "",
      explain: "Volume \$600k + rate \$330k = \$930k total variance — and it ties to actual − plan. The bridge closes.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Build the bridge and prove it ties out. (Given the total and the volume piece, back into the rate piece, then check.)",
      rows: [
        { label: "Plan cost ($)", value: 6000000, given: true },
        { label: "Actual cost ($)", value: 6930000, given: true },
        { label: "Volume impact ($)", value: 600000, given: true },
        { label: "Total variance ($)", key: "tot", answer: 930000, hint: "actual − plan" },
        { label: "Rate / other impact ($)", key: "rate", answer: 330000, hint: "total variance − volume impact" },
        { label: "Bridge check (should be 0)", key: "chk", answer: 0, hint: "plan + volume impact + rate impact − actual" },
      ],
      prefix: "",
      explain: "Rate = 930k − 600k = 330k; the bridge check (plan + 600k + 330k − actual) = 0 → it ties out.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Productivity variance. Lower UPH than plan means more labor hours — quantify the cost impact.",
      rows: [
        { label: "Volume (units)", value: 800000, given: true },
        { label: "Plan productivity (UPH)", value: 100, given: true },
        { label: "Actual productivity (UPH)", value: 80, given: true },
        { label: "Wage ($/hour)", value: 25, given: true },
        { label: "Plan labor hours", key: "ph", answer: 8000, hint: "volume ÷ plan UPH" },
        { label: "Actual labor hours", key: "ah", answer: 10000, hint: "volume ÷ actual UPH" },
        { label: "Productivity cost impact ($)", key: "impact", answer: 50000, hint: "(actual − plan hours) × wage" },
      ],
      prefix: "",
      explain: "80 UPH vs 100 → 10,000 vs 8,000 hours; the extra 2,000 hours × \$25 = \$50,000 unfavorable productivity variance.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Mix variance. Same total volume, but the blend shifts toward the costlier product — isolate the effect.",
      rows: [
        { label: "Product A cost per unit ($)", value: 4.00, given: true },
        { label: "Product B cost per unit ($)", value: 8.00, given: true },
        { label: "Plan: A units", value: 500000, given: true },
        { label: "Plan: B units", value: 500000, given: true },
        { label: "Actual: A units", value: 400000, given: true },
        { label: "Actual: B units", value: 600000, given: true },
        { label: "Plan total cost ($)", key: "plan", answer: 6000000, hint: "A units × A cost + B units × B cost" },
        { label: "Actual total cost ($)", key: "act", answer: 6400000, hint: "A units × A cost + B units × B cost" },
        { label: "Mix variance ($)", key: "mix", answer: 400000, hint: "actual − plan (total volume unchanged)" },
        { label: "Actual average cost per unit ($)", key: "avg", answer: 6.40, hint: "actual total ÷ 1,000,000 units" },
      ],
      prefix: "",
      explain: "Total volume is unchanged (1M), but shifting 100k units from A (\$4) to B (\$8) adds \$400,000 and lifts avg CPU from \$6.00 to \$6.40 — a pure mix effect.",
    },
  ],
});
