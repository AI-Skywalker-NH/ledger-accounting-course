/* ===========================================================================
   Course 2 · Module FM-4 — Forecasting Revenue & Operating Drivers
   =========================================================================== */
Ledger.register({
  id: "fm-04",
  title: "Forecasting Revenue & Operating Drivers",
  subtitle:
    "Where the assumptions come from — building a defensible revenue forecast and the cost and working-capital drivers that feed the model.",
  est: "~70 min",
  objectives: [
    "Explain why revenue is the primary driver of a model.",
    "Contrast top-down and bottom-up revenue forecasts.",
    "Build revenue from price × volume.",
    "Forecast costs as drivers (% of revenue, fixed vs. variable).",
    "Forecast working capital from days ratios, and sanity-check a forecast.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Revenue Is the Engine",
      html: `
        <span class="eyebrow">Course 2 · Lesson 1 of 6</span>
        <h2>Revenue Is the Engine</h2>
        <p>In FM-3 you took assumptions as given. Now you build them. Almost every line in a model keys
        off <strong>revenue</strong> — COGS as a margin, SG&amp;A as a percent, receivables and
        inventory as days of sales. Get revenue wrong and the whole model is wrong. Forecasting is
        mostly the art of forecasting revenue well, then driving everything else off it.</p>

        <h3>What a good forecast has</h3>
        <ul>
          <li><strong>Explicit drivers</strong> — revenue is a formula on things you can defend (units,
          price, share), not a number pulled from the air.</li>
          <li><strong>A horizon</strong> — typically 5 years of explicit forecast before a terminal
          assumption (you'll meet the terminal value in the DCF module).</li>
          <li><strong>Grounding</strong> — anchored to history, guidance, and industry reality.</li>
        </ul>

        <div class="callout">
          <strong>Integrity check:</strong> a forecast is a set of <em>assumptions</em>, not facts.
          Every driver should be defensible and clearly flagged as an assumption — never dressed up as
          certainty. Overconfident, hockey-stick projections are the most common modeling sin.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Top-Down vs. Bottom-Up",
      html: `
        <span class="eyebrow">Course 2 · Lesson 2 of 6</span>
        <h2>Top-Down vs. Bottom-Up</h2>
        <p>There are two directions to build a revenue forecast — the best analysts do both and check
        one against the other.</p>

        <table>
          <tr><th></th><th>Top-down</th><th>Bottom-up</th></tr>
          <tr><td>Start from</td><td>Total addressable market (TAM)</td><td>The company's own units/customers</td></tr>
          <tr><td>Method</td><td>TAM × market share</td><td>Units × price, or capacity × utilization</td></tr>
          <tr><td>Strength</td><td>Reality-checks the size of the opportunity</td><td>Grounded in operational detail</td></tr>
        </table>

        <p><strong>Top-down:</strong> a \$50M market and a projected 2.4% share implies \$1.2M of
        revenue. <strong>Bottom-up:</strong> 105,000 units at \$10.30 implies \$1.08M. If your bottom-up
        build implies a 40% market share overnight, the top-down lens will catch that it's unrealistic.</p>

        <div class="callout">
          <strong>Cross-check discipline:</strong> a bottom-up forecast that implies an absurd market
          share, or a top-down share that implies impossible unit volumes, is a red flag. Reconciling
          the two is how you pressure-test the top line.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Price × Volume",
      html: `
        <span class="eyebrow">Course 2 · Lesson 3 of 6</span>
        <h2>Price × Volume</h2>
        <p>The cleanest bottom-up revenue build separates the two things that can move it:</p>
        <div class="equation">Revenue = Units × Price</div>

        <p>Forecast each driver on its own logic and multiply:</p>
        <ul>
          <li><strong>Units</strong> grow with demand, capacity, store count, customers, etc.</li>
          <li><strong>Price</strong> grows with inflation, mix, and pricing power.</li>
        </ul>

        <p>Example: 100,000 units at \$10 = \$1,000,000 today. Grow units 5% and price 3%:
        105,000 × \$10.30 = <strong>\$1,081,500</strong>. Note the combined growth is ~8.15%, slightly
        above 5% + 3% — because the two growth rates <em>compound</em> together.</p>

        <div class="callout">
          <strong>Why separate them:</strong> a business growing purely on price increases is a very
          different (and riskier) story than one growing on units. Splitting price and volume exposes
          which is really driving the top line.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Cost & Margin Drivers",
      html: `
        <span class="eyebrow">Course 2 · Lesson 4 of 6</span>
        <h2>Cost &amp; Margin Drivers</h2>
        <p>Once revenue is set, most costs are forecast as a <strong>percent of revenue</strong> (or a
        target margin), grounded in the historical spread from FM-1.</p>

        <table>
          <tr><th>Line</th><th>Typical driver</th></tr>
          <tr><td>COGS</td><td>% of revenue (or 1 − gross margin)</td></tr>
          <tr><td>SG&amp;A</td><td>% of revenue</td></tr>
          <tr><td>R&amp;D</td><td>% of revenue</td></tr>
          <tr><td>Depreciation</td><td>From the PP&amp;E schedule (not % of revenue)</td></tr>
        </table>

        <h3>Fixed vs. variable</h3>
        <p>A pure “% of revenue” treats a cost as fully variable. In reality many costs are partly
        <strong>fixed</strong> — they don't scale one-for-one with sales. That's why margins usually
        <em>expand</em> as a company grows (operating leverage): fixed costs spread over more revenue.
        Sophisticated models split fixed and variable rather than assuming a flat percentage.</p>

        <div class="callout">
          <strong>Anchor to history:</strong> if a company has run a 60% COGS ratio for years, forecast
          near 60% unless you have a specific, defensible reason to change it. Don't assume sudden margin
          expansion without a driver behind it.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Working-Capital Drivers",
      html: `
        <span class="eyebrow">Course 2 · Lesson 5 of 6</span>
        <h2>Working-Capital Drivers</h2>
        <p>Working-capital accounts are forecast with the <strong>days ratios</strong> from Module 8 and
        FM-2 — rearranged to solve for the balance:</p>
        <table>
          <tr><th>Account</th><th>Forecast as</th></tr>
          <tr><td>Accounts Receivable</td><td>DSO ÷ 365 × Revenue</td></tr>
          <tr><td>Inventory</td><td>DIO ÷ 365 × COGS</td></tr>
          <tr><td>Accounts Payable</td><td>DPO ÷ 365 × COGS</td></tr>
        </table>

        <p>Assume a days figure (from history), and the balance grows automatically with revenue or
        COGS. Example (revenue \$1,095,000, COGS \$657,000): at DSO 40, A/R =
        40 ÷ 365 × 1,095,000 = <strong>\$120,000</strong>; at DIO 60, inventory =
        60 ÷ 365 × 657,000 = <strong>\$108,000</strong>; at DPO 30, A/P =
        30 ÷ 365 × 657,000 = <strong>\$54,000</strong>.</p>

        <div class="callout">
          <strong>Why days, not a flat dollar:</strong> forecasting working capital on days ties it to
          the business's activity, so as the company grows the model automatically consumes the extra
          cash that growth requires — the “growth eats cash” dynamic, built in.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Sanity-Checking a Forecast",
      html: `
        <span class="eyebrow">Course 2 · Lesson 6 of 6</span>
        <h2>Sanity-Checking a Forecast</h2>
        <p>A model is only as credible as its assumptions. Before you trust a forecast, stress it:</p>
        <ul>
          <li><strong>Growth decay</strong> — few companies sustain high growth forever; forecasts
          usually taper toward a mature rate, not a flat 30% for a decade.</li>
          <li><strong>Margins vs. history and peers</strong> — does your margin path require the company
          to suddenly outperform its own record and its competitors?</li>
          <li><strong>Implied share / volumes</strong> — does the revenue imply an unrealistic market
          share or physically impossible units?</li>
          <li><strong>Scenarios &amp; sensitivity</strong> — build base / bull / bear cases and flex the
          key drivers to see what the answer really hinges on.</li>
        </ul>

        <div class="callout">
          <strong>The honest analyst's stance:</strong> present a forecast as a reasoned scenario with
          its assumptions on the table — and be the first to name where it could be wrong. A precise
          number built on indefensible drivers is worse than a rough one built on sound ones.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Concept", front: "Why is revenue called the engine of a model?", back: "Most lines key off revenue (COGS as margin, SG&A as %, WC as days), so revenue errors propagate everywhere." },
    { id: "f2",  tag: "Concept", front: "How should a forecast be presented, honestly?", back: "As a set of defensible assumptions/scenarios — clearly flagged as assumptions, not dressed up as certainty." },
    { id: "f3",  tag: "Approach", front: "Top-down vs. bottom-up revenue forecast?", back: "Top-down = TAM × market share. Bottom-up = units × price (or capacity × utilization). Cross-check one against the other." },
    { id: "f4",  tag: "Approach", front: "What does a top-down lens catch that bottom-up can miss?", back: "Whether the implied market share is realistic — a bottom-up build might imply an absurd share." },
    { id: "f5",  tag: "Price×Vol", front: "The price × volume revenue formula?", back: "Revenue = Units × Price. Forecast each driver on its own logic and multiply." },
    { id: "f6",  tag: "Price×Vol", front: "If units grow 5% and price 3%, why isn't revenue growth exactly 8%?", back: "The two rates compound: 1.05 × 1.03 = 1.0815, so ~8.15% growth." },
    { id: "f7",  tag: "Price×Vol", front: "Why split price and volume rather than one growth rate?", back: "Growth on price alone is a different, riskier story than growth on units — splitting them reveals what's really driving revenue." },
    { id: "f8",  tag: "Costs", front: "How are most operating costs forecast?", back: "As a percent of revenue (or a target margin), anchored to the historical spread." },
    { id: "f9",  tag: "Costs", front: "Why do margins often expand as a company grows?", back: "Operating leverage — fixed costs are spread over more revenue, so they shrink as a % of sales." },
    { id: "f10", tag: "Costs", front: "What's the risk of forecasting every cost as a flat % of revenue?", back: "It treats all costs as fully variable and misses operating leverage from fixed costs; better models split fixed vs. variable." },
    { id: "f11", tag: "Working capital", front: "How is Accounts Receivable forecast from a days assumption?", back: "A/R = DSO ÷ 365 × Revenue." },
    { id: "f12", tag: "Working capital", front: "How are Inventory and A/P forecast from days?", back: "Inventory = DIO ÷ 365 × COGS; Accounts Payable = DPO ÷ 365 × COGS." },
    { id: "f13", tag: "Working capital", front: "Why forecast working capital on days rather than a flat dollar amount?", back: "It ties WC to activity, so it scales with revenue/COGS and automatically captures the cash that growth consumes." },
    { id: "f14", tag: "Sanity", front: "What is growth decay in a forecast?", back: "The realistic tapering of high growth toward a mature rate over the horizon — not a flat high rate forever." },
    { id: "f15", tag: "Sanity", front: "Name two sanity checks on a revenue forecast.", back: "Does it imply an unrealistic market share or impossible unit volumes? Do the margins beat history/peers without a reason?" },
    { id: "f16", tag: "Sanity", front: "Why build base / bull / bear scenarios?", back: "Sensitivity: flexing key drivers shows what the valuation really hinges on and frames the range of outcomes honestly." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "Why is revenue the most important line to forecast well?",
      options: ["It's the easiest to predict", "Most other lines are driven off it, so its errors propagate", "It equals net income", "Auditors require it"],
      answer: 1,
      explain: "COGS, SG&A, and working capital are all driven off revenue, so a bad top line corrupts the whole model.",
    },
    {
      id: "q2",
      prompt: "A top-down revenue forecast is built as…",
      options: ["Units × price", "TAM × market share", "COGS ÷ margin", "Cash + net change"],
      answer: 1,
      explain: "Top-down starts from the total addressable market and applies an assumed market share.",
    },
    {
      id: "q3",
      scenario: "100,000 units at \$10, with units +5% and price +3%.",
      prompt: "What is next year's revenue?",
      options: ["\$1,080,000", "\$1,081,500", "\$1,150,000", "\$1,000,000"],
      answer: 1,
      explain: "105,000 units × \$10.30 = \$1,081,500. The two growth rates compound to ~8.15%.",
    },
    {
      id: "q4",
      scenario: "A \$50,000,000 market; the company targets 2.4% share next year.",
      prompt: "What revenue does that imply?",
      options: ["\$1,000,000", "\$1,200,000", "\$2,400,000", "\$120,000"],
      answer: 1,
      explain: "50,000,000 × 2.4% = \$1,200,000 (top-down).",
    },
    {
      id: "q5",
      prompt: "Why do margins often expand as a company grows?",
      options: ["Taxes fall", "Operating leverage — fixed costs spread over more revenue", "Revenue is recognized faster", "Depreciation stops"],
      answer: 1,
      explain: "Fixed costs don't scale one-for-one with sales, so they shrink as a percent of revenue as the company grows.",
    },
    {
      id: "q6",
      scenario: "Revenue \$1,095,000; DSO assumption of 40 days (365-day year).",
      prompt: "What is forecast Accounts Receivable?",
      options: ["\$40,000", "\$120,000", "\$109,500", "\$150,000"],
      answer: 1,
      explain: "A/R = DSO ÷ 365 × Revenue = 40 ÷ 365 × 1,095,000 = \$120,000.",
    },
    {
      id: "q7",
      prompt: "Forecasting working capital on days (rather than a flat dollar) ensures that…",
      options: ["Working capital never changes", "It scales with activity, capturing the cash growth consumes", "Cash is always positive", "Margins expand"],
      answer: 1,
      explain: "Days-based WC ties balances to revenue/COGS, so as the company grows it automatically ties up more cash.",
    },
    {
      id: "q8",
      prompt: "Which is a sound sanity check on a forecast?",
      options: [
        "Assume growth stays flat and high forever",
        "Check whether the revenue implies a realistic market share",
        "Ignore historical margins",
        "Use one scenario only",
      ],
      answer: 1,
      explain: "Testing the implied market share (and using growth decay, margin history, and scenarios) keeps a forecast honest.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Build revenue bottom-up from price × volume, and derive the implied growth rate.",
      rows: [
        { label: "Units sold (Year 0)", value: 100000, given: true },
        { label: "Unit growth (%)", value: 5, given: true },
        { label: "Price (Year 0)", value: 10, given: true },
        { label: "Price growth (%)", value: 3, given: true },
        { label: "Year 0 revenue", key: "r0", answer: 1000000, hint: "units × price" },
        { label: "Year 1 units", key: "u1", answer: 105000, hint: "units × (1 + unit growth% ÷ 100)" },
        { label: "Year 1 price", key: "p1", answer: 10.30, hint: "price × (1 + price growth% ÷ 100)" },
        { label: "Year 1 revenue", key: "r1", answer: 1081500, hint: "Year 1 units × Year 1 price" },
        { label: "Implied revenue growth (%)", key: "g", answer: 8.15, hint: "(Yr1 − Yr0) ÷ Yr0 × 100" },
      ],
      prefix: "$",
      explain: "105,000 × \$10.30 = \$1,081,500, an 8.15% increase — above 5% + 3% because the growth rates compound.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Build revenue top-down from market size and share, and show the implied growth.",
      rows: [
        { label: "Total addressable market (TAM)", value: 50000000, given: true },
        { label: "Current market share (%)", value: 2, given: true },
        { label: "Target share next year (%)", value: 2.4, given: true },
        { label: "Current revenue", key: "cur", answer: 1000000, hint: "TAM × current share% ÷ 100" },
        { label: "Projected revenue", key: "proj", answer: 1200000, hint: "TAM × target share% ÷ 100" },
        { label: "Implied revenue growth (%)", key: "g", answer: 20, hint: "(projected − current) ÷ current × 100" },
      ],
      prefix: "$",
      explain: "\$50M × 2.4% = \$1.2M projected vs. \$1.0M current → 20% implied growth. Always ask: is a 2.4% share realistic?",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Forecast the cost lines as a percent of revenue.",
      rows: [
        { label: "Revenue", value: 1100000, given: true },
        { label: "COGS (% of revenue)", value: 60, given: true },
        { label: "SG&A (% of revenue)", value: 25, given: true },
        { label: "COGS", key: "cogs", answer: 660000, hint: "revenue × COGS% ÷ 100" },
        { label: "SG&A", key: "sga", answer: 275000, hint: "revenue × SG&A% ÷ 100" },
        { label: "Gross profit", key: "gp", answer: 440000, hint: "revenue − COGS" },
        { label: "Operating income (before D&A)", key: "oi", answer: 165000, hint: "gross profit − SG&A" },
      ],
      prefix: "$",
      explain: "COGS 660,000, SG&A 275,000, gross profit 440,000, operating income (pre-D&A) 165,000 — the cost side driven entirely off revenue.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Forecast the working-capital balances from days assumptions (365-day year).",
      rows: [
        { label: "Revenue", value: 1095000, given: true },
        { label: "COGS", value: 657000, given: true },
        { label: "DSO (days)", value: 40, given: true },
        { label: "DIO (days)", value: 60, given: true },
        { label: "DPO (days)", value: 30, given: true },
        { label: "Accounts Receivable", key: "ar", answer: 120000, hint: "DSO ÷ 365 × revenue" },
        { label: "Inventory", key: "inv", answer: 108000, hint: "DIO ÷ 365 × COGS" },
        { label: "Accounts Payable", key: "ap", answer: 54000, hint: "DPO ÷ 365 × COGS" },
      ],
      prefix: "$",
      explain: "A/R = 40/365 × 1,095,000 = 120,000; Inventory = 60/365 × 657,000 = 108,000; A/P = 30/365 × 657,000 = 54,000. Days tie working capital to activity.",
    },
  ],
});
