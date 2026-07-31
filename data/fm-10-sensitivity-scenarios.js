/* ===========================================================================
   Course 2 · Module FM-10 — Sensitivity & Scenario Analysis
   Worked on a simplified perpetuity value  V = FCF / (WACC - g).
   With FCF = 120,000, denominators land clean:
   0.06->2,000,000 · 0.08->1,500,000 · 0.10->1,200,000.
   =========================================================================== */
Ledger.register({
  id: "fm-10",
  title: "Sensitivity & Scenario Analysis",
  subtitle:
    "Turning a single valuation into an honest range — data tables, scenarios, and knowing which assumptions actually move the answer.",
  est: "~55 min",
  objectives: [
    "Explain why a valuation should be a range, not a point.",
    "Build one- and two-variable sensitivity (data) tables.",
    "Run base / bull / bear scenario analysis.",
    "Identify the key value drivers (tornado thinking).",
    "Communicate a valuation range honestly.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Why a Range, Not a Point",
      html: `
        <span class="eyebrow">Course 2 · Lesson 1 of 6</span>
        <h2>Why a Range, Not a Point</h2>
        <p>A DCF spits out a single share price, but that number rests on a stack of assumptions — WACC,
        growth, margins, the exit. Change any of them a little and the answer moves a lot. Presenting one
        precise figure is <span class="kt">false precision</span>; the honest output of a model is a
        <strong>range</strong>, with the assumptions that drive it made explicit.</p>

        <p>Two disciplines produce that range:</p>
        <ul>
          <li><span class="kt">Sensitivity analysis</span> — flex <em>one</em> (or two) inputs at a time
          and watch the output.</li>
          <li><span class="kt">Scenario analysis</span> — flex a <em>coherent set</em> of inputs together
          (a base case, an optimistic case, a pessimistic case).</li>
        </ul>

        <div class="callout">
          <strong>The mindset:</strong> a model's job isn't to predict the future — it's to show how the
          answer depends on your assumptions, so a decision-maker can judge the risk. The range is the
          product; the point estimate is just its midpoint.
        </div>
      `,
    },
    {
      id: "l2",
      title: "One-Variable Data Tables",
      html: `
        <span class="eyebrow">Course 2 · Lesson 2 of 6</span>
        <h2>One-Variable Data Tables</h2>
        <p>A <span class="kt">data table</span> recomputes the model's output as you step one input across
        a range of values. We'll use a simplified perpetuity value to keep the arithmetic clean:</p>
        <div class="equation">Value = Free Cash Flow ÷ (WACC − g)</div>

        <p>Hold g at 2% and FCF at \$120,000, and vary WACC:</p>
        <table>
          <tr><th>WACC</th><th>WACC − g</th><th>Value</th></tr>
          <tr><td>8%</td><td>0.06</td><td>2,000,000</td></tr>
          <tr><td>10%</td><td>0.08</td><td>1,500,000</td></tr>
          <tr><td>12%</td><td>0.10</td><td>1,200,000</td></tr>
        </table>

        <p>A 4-point move in WACC swings value from \$2.0M to \$1.2M — a 40% range. Seeing that
        sensitivity laid out is far more informative than any single cell in it.</p>

        <div class="callout">
          <strong>In real Excel</strong>, this is the Data Table feature (What-If Analysis). Here you'll
          build it by hand on the grid — which is exactly how you learn what the feature is doing under
          the hood.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Two-Variable Data Tables",
      html: `
        <span class="eyebrow">Course 2 · Lesson 3 of 6</span>
        <h2>Two-Variable Data Tables</h2>
        <p>The classic DCF output is a grid: value across two inputs at once — almost always
        <strong>WACC</strong> down one axis and <strong>terminal growth</strong> across the other, since
        those two dominate a DCF.</p>

        <p>Value = 120,000 ÷ (WACC − g):</p>
        <table>
          <tr><th>WACC ↓ / g →</th><th>g = 2%</th><th>g = 4%</th></tr>
          <tr><td><strong>10%</strong></td><td>1,500,000</td><td>2,000,000</td></tr>
          <tr><td><strong>12%</strong></td><td>1,200,000</td><td>1,500,000</td></tr>
        </table>

        <p>Each cell is the same formula with a different WACC and g. The grid shows the whole
        neighborhood of outcomes at a glance — and reveals how tightly value clusters (or doesn't) around
        the base case.</p>

        <div class="callout">
          <strong>Why WACC × g:</strong> the terminal value dominates a DCF, and it's driven by exactly
          these two inputs (recall TV = FCF·(1+g)/(WACC−g)). Small changes here move the valuation most —
          so this is the table analysts always show.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Scenario Analysis",
      html: `
        <span class="eyebrow">Course 2 · Lesson 4 of 6</span>
        <h2>Scenario Analysis</h2>
        <p>Sensitivity tables flex one or two inputs mechanically. <span class="kt">Scenario analysis</span>
        flexes a <em>coherent set</em> of assumptions together, because in reality inputs move as a
        package — a downturn hits revenue <em>and</em> margins at once, not one in isolation.</p>

        <table>
          <tr><th>Driver</th><th>Bear</th><th>Base</th><th>Bull</th></tr>
          <tr><td>Revenue</td><td>900,000</td><td>1,000,000</td><td>1,100,000</td></tr>
          <tr><td>Operating margin</td><td>10%</td><td>12%</td><td>15%</td></tr>
          <tr><td>Operating income</td><td>90,000</td><td>120,000</td><td>165,000</td></tr>
        </table>

        <p>Each column is an internally consistent story. Modelers wire a <span class="kt">scenario
        toggle</span> — a single switch that swaps the whole assumption set — so the model can flip
        between cases instantly.</p>

        <div class="callout">
          <strong>Coherence is the point:</strong> a scenario should tell a believable story. Pairing
          bull-case revenue with bear-case margins isn't a scenario — it's noise. Move the drivers
          together the way the real world would.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Key Drivers & Tornado Thinking",
      html: `
        <span class="eyebrow">Course 2 · Lesson 5 of 6</span>
        <h2>Key Drivers &amp; Tornado Thinking</h2>
        <p>Not all assumptions matter equally. A <span class="kt">tornado chart</span> ranks inputs by how
        much the output moves when each is flexed by the same amount — the widest bar at the top, tapering
        down like a tornado. It answers: <em>where should I focus my diligence?</em></p>

        <p>In a typical DCF, WACC and terminal growth produce the widest bars (they drive the dominant
        terminal value), while a year-3 SG&amp;A assumption barely registers. Spend your time pinning down
        the inputs that actually swing the answer — not polishing the ones that don't.</p>

        <div class="callout">
          <strong>The 80/20 of modeling:</strong> a handful of drivers usually determine most of the
          value. Find them (that's what sensitivity analysis is for), pressure-test them hardest, and
          don't sweat the rounding on the rest.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Communicating Uncertainty",
      html: `
        <span class="eyebrow">Course 2 · Lesson 6 of 6</span>
        <h2>Communicating Uncertainty</h2>
        <p>The final step is presenting the range with integrity.</p>
        <ul>
          <li><strong>Football field</strong> — show the valuation range from each method (DCF, comps,
          precedents, LBO) as bars; the overlap is the defensible zone.</li>
          <li><strong>Sensitivity grid</strong> — display the WACC × g table so the audience sees the
          spread, not just a point.</li>
          <li><strong>Name the assumptions</strong> — state what drives the case and where it could be
          wrong.</li>
        </ul>

        <div class="callout">
          <strong>The through-line of this whole course:</strong> a model is a tool for reasoning under
          uncertainty, not a crystal ball. Present ranges, expose assumptions, and be the first to say
          where the analysis could break. That honesty is what separates a real analyst from a
          spreadsheet operator — and it's the note to end on.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Concept", front: "Why present a valuation as a range rather than a point?", back: "The output rests on uncertain assumptions that swing it a lot; a single figure is false precision. The range is the real product." },
    { id: "f2",  tag: "Concept", front: "Sensitivity vs. scenario analysis?", back: "Sensitivity flexes one or two inputs mechanically; scenario analysis flexes a coherent set of inputs together (base/bull/bear)." },
    { id: "f3",  tag: "Data table", front: "What is a data table (What-If)?", back: "A grid that recomputes the model's output as one or two inputs step across a range of values." },
    { id: "f4",  tag: "Data table", front: "Which two inputs form the classic DCF sensitivity grid, and why?", back: "WACC and terminal growth — the terminal value dominates a DCF and is driven by exactly these two." },
    { id: "f5",  tag: "Data table", front: "In V = FCF/(WACC − g), what happens as WACC rises?", back: "The denominator grows, so value falls. (FCF 120k: WACC 8%→2.0M, 10%→1.5M, 12%→1.2M with g=2%.)" },
    { id: "f6",  tag: "Scenario", front: "What defines a good scenario?", back: "A coherent, believable set of assumptions moved together (e.g. a downturn cutting revenue AND margins) — not one input in isolation." },
    { id: "f7",  tag: "Scenario", front: "What is a scenario toggle?", back: "A single switch that swaps the entire assumption set (bear/base/bull) so the model flips between cases instantly." },
    { id: "f8",  tag: "Scenario", front: "Why is pairing bull revenue with bear margins wrong?", back: "It's incoherent — not a real scenario. Drivers should move together the way the world actually would." },
    { id: "f9",  tag: "Tornado", front: "What does a tornado chart show?", back: "Inputs ranked by how much they move the output when each is flexed equally — widest bar (biggest driver) on top." },
    { id: "f10", tag: "Tornado", front: "Which inputs usually dominate a DCF's tornado chart?", back: "WACC and terminal growth (they drive the dominant terminal value); far-out operating details barely move it." },
    { id: "f11", tag: "Tornado", front: "What's the practical use of identifying key drivers?", back: "Focus diligence and pressure-testing on the few inputs that actually swing value; don't over-polish the rest." },
    { id: "f12", tag: "Communicate", front: "What is a football field chart?", back: "A bar chart of the valuation range from each method (DCF, comps, precedents, LBO); the overlap is the defensible value." },
    { id: "f13", tag: "Communicate", front: "Three ways to present valuation uncertainty?", back: "A football field (range across methods), a sensitivity grid (WACC × g), and explicitly naming the assumptions." },
    { id: "f14", tag: "Concept", front: "The 80/20 of modeling?", back: "A handful of drivers determine most of the value; find them via sensitivity analysis and pressure-test those hardest." },
    { id: "f15", tag: "Discipline", front: "What is the honest analyst's stance on a model?", back: "It's a tool for reasoning under uncertainty, not a crystal ball — present ranges, expose assumptions, name where it could break." },
    { id: "f16", tag: "Real Excel", front: "What Excel feature builds data tables automatically?", back: "Data Table under What-If Analysis — building it by hand teaches what it's doing under the hood." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "A valuation should be presented as a range because…",
      options: ["Ranges look more impressive", "The output is highly sensitive to uncertain assumptions", "Point estimates are illegal", "It hides the analysis"],
      answer: 1,
      explain: "Small changes in key assumptions swing the answer a lot, so a range is more honest than false precision.",
    },
    {
      id: "q2",
      prompt: "The difference between sensitivity and scenario analysis is…",
      options: [
        "They are the same",
        "Sensitivity flexes one/two inputs; scenarios flex a coherent set together",
        "Sensitivity uses more data",
        "Scenarios only change WACC",
      ],
      answer: 1,
      explain: "Sensitivity isolates one or two inputs; scenario analysis moves a coherent bundle of assumptions together.",
    },
    {
      id: "q3",
      prompt: "The classic two-variable DCF sensitivity table flexes…",
      options: ["Revenue and COGS", "WACC and terminal growth", "Cash and debt", "Shares and price"],
      answer: 1,
      explain: "WACC and terminal growth drive the dominant terminal value, so they're the standard axes.",
    },
    {
      id: "q4",
      scenario: "V = FCF ÷ (WACC − g), with FCF \$120,000, WACC 10%, g 2%.",
      prompt: "What is the value?",
      options: ["\$1,200,000", "\$1,500,000", "\$2,000,000", "\$960,000"],
      answer: 1,
      explain: "V = 120,000 ÷ (0.10 − 0.02) = 120,000 ÷ 0.08 = \$1,500,000.",
    },
    {
      id: "q5",
      prompt: "A coherent scenario would pair…",
      options: [
        "Bull revenue with bear margins",
        "Bear revenue with bear margins",
        "Random inputs",
        "Only a change in WACC",
      ],
      answer: 1,
      explain: "Scenarios move drivers together believably — a downturn hits revenue and margins together (bear/bear).",
    },
    {
      id: "q6",
      prompt: "A tornado chart is used to…",
      options: ["Forecast weather", "Rank inputs by how much they move the output", "Show cash flows over time", "Compare comps"],
      answer: 1,
      explain: "It ranks assumptions by impact (widest bar = biggest driver), directing where to focus diligence.",
    },
    {
      id: "q7",
      prompt: "A scenario toggle in a model is…",
      options: ["A chart type", "A switch that swaps the entire assumption set", "A tax setting", "A discount rate"],
      answer: 1,
      explain: "It flips the whole model between coherent cases (bear/base/bull) with a single input.",
    },
    {
      id: "q8",
      prompt: "The honest way to communicate a valuation is to…",
      options: [
        "Give one precise number",
        "Show a range, expose the assumptions, and note where it could be wrong",
        "Only show the bull case",
        "Hide the WACC",
      ],
      answer: 1,
      explain: "Ranges plus explicit, stress-tested assumptions reflect the real uncertainty — the mark of a real analyst.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "One-variable sensitivity. Compute V = FCF ÷ (WACC − g) across three WACCs (FCF \$120,000, g fixed at 2%).",
      rows: [
        { label: "Free cash flow", value: 120000, given: true },
        { label: "Terminal growth g (%)", value: 2, given: true },
        { label: "Value at WACC = 8%", key: "w8", answer: 2000000, hint: "FCF ÷ ((8 − 2) ÷ 100)" },
        { label: "Value at WACC = 10%", key: "w10", answer: 1500000, hint: "FCF ÷ ((10 − 2) ÷ 100)" },
        { label: "Value at WACC = 12%", key: "w12", answer: 1200000, hint: "FCF ÷ ((12 − 2) ÷ 100)" },
      ],
      prefix: "$",
      explain: "A 4-point WACC move swings value from \$2.0M to \$1.2M — a 40% range from one input.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Two-variable data table. Compute the four cells of value = FCF ÷ (WACC − g), FCF \$120,000.",
      rows: [
        { label: "Free cash flow", value: 120000, given: true },
        { label: "WACC 10%, g 2%", key: "a", answer: 1500000, hint: "FCF ÷ ((10 − 2) ÷ 100)" },
        { label: "WACC 10%, g 4%", key: "b", answer: 2000000, hint: "FCF ÷ ((10 − 4) ÷ 100)" },
        { label: "WACC 12%, g 2%", key: "c", answer: 1200000, hint: "FCF ÷ ((12 − 2) ÷ 100)" },
        { label: "WACC 12%, g 4%", key: "d", answer: 1500000, hint: "FCF ÷ ((12 − 4) ÷ 100)" },
      ],
      prefix: "$",
      explain: "The grid ranges from \$1.2M to \$2.0M. Two cells equal \$1.5M — different WACC/g pairs can produce the same value.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Scenario analysis. Compute operating income in each coherent case (operating income = revenue × margin).",
      rows: [
        { label: "Bear revenue", value: 900000, given: true },
        { label: "Bear operating margin (%)", value: 10, given: true },
        { label: "Base revenue", value: 1000000, given: true },
        { label: "Base operating margin (%)", value: 12, given: true },
        { label: "Bull revenue", value: 1100000, given: true },
        { label: "Bull operating margin (%)", value: 15, given: true },
        { label: "Bear operating income", key: "bear", answer: 90000, hint: "bear revenue × bear margin ÷ 100" },
        { label: "Base operating income", key: "base", answer: 120000, hint: "base revenue × base margin ÷ 100" },
        { label: "Bull operating income", key: "bull", answer: 165000, hint: "bull revenue × bull margin ÷ 100" },
      ],
      prefix: "$",
      explain: "Bear 90,000 · Base 120,000 · Bull 165,000. Each case moves revenue AND margin together — a coherent story, not one input.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "DCF share-price sensitivity to WACC. Value the equity per share at two discount rates (FCF \$120,000, g 2%, net debt \$200,000, 100,000 shares).",
      rows: [
        { label: "Free cash flow", value: 120000, given: true },
        { label: "Terminal growth g (%)", value: 2, given: true },
        { label: "Net debt", value: 200000, given: true },
        { label: "Shares outstanding", value: 100000, given: true },
        { label: "Enterprise value at WACC 10%", key: "ev10", answer: 1500000, hint: "FCF ÷ ((10 − 2) ÷ 100)" },
        { label: "Value per share at WACC 10%", key: "ps10", answer: 13, hint: "(EV − net debt) ÷ shares" },
        { label: "Enterprise value at WACC 12%", key: "ev12", answer: 1200000, hint: "FCF ÷ ((12 − 2) ÷ 100)" },
        { label: "Value per share at WACC 12%", key: "ps12", answer: 10, hint: "(EV − net debt) ÷ shares" },
      ],
      prefix: "$",
      explain: "At 10% WACC: EV 1.5M → \$13.00/share. At 12%: EV 1.2M → \$10.00/share. A 2-point WACC change moves the price \$3.",
    },
  ],
});
