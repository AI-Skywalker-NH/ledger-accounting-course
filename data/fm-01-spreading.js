/* ===========================================================================
   Course 2 · Module FM-1 — Reading & Spreading Financial Statements
   =========================================================================== */
Ledger.register({
  id: "fm-01",
  title: "Reading & Spreading Financial Statements",
  subtitle:
    "Turning messy reported filings into a clean, standardized 'spread' — the raw material every model and analysis is built on.",
  est: "~60 min",
  objectives: [
    "Explain what 'spreading' financials means and why analysts do it.",
    "Locate the statements and disclosures in a 10-K / 10-Q.",
    "Standardize reported line items into a consistent template.",
    "Build common-size income statements and balance sheets.",
    "Compute year-over-year growth and CAGR, and normalize for one-time items.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "What “Spreading” Means",
      html: `
        <span class="eyebrow">Course 2 · Lesson 1 of 6</span>
        <h2>What “Spreading” Means</h2>
        <p>Companies report financials in their own formats, with their own line-item labels and plenty
        of clutter. <span class="kt">Spreading</span> is the analyst's craft of copying those reported
        numbers into a clean, consistent template so they can be compared, trended, and fed into a model.</p>

        <p>You did the accounting in Course 1 — building statements from transactions. Spreading is the
        reverse direction: starting from <em>finished</em> statements and reorganizing them for analysis.</p>

        <h3>Why bother</h3>
        <ul>
          <li><strong>Comparability</strong> — two companies that label things differently become
          directly comparable once spread into the same template.</li>
          <li><strong>Trend analysis</strong> — line up several years side by side to see what's growing,
          shrinking, or drifting.</li>
          <li><strong>Modeling input</strong> — a clean historical spread is the foundation you forecast
          forward (Modules FM-3 and FM-4).</li>
        </ul>

        <div class="callout">
          <strong>The analyst's habit:</strong> never model off a raw filing. Spread it first — one
          consistent template, every number traceable back to the source. Garbage in, garbage out
          starts with a sloppy spread.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Where the Numbers Live",
      html: `
        <span class="eyebrow">Course 2 · Lesson 2 of 6</span>
        <h2>Where the Numbers Live</h2>
        <p>For US public companies, the source of truth is filed with the SEC:</p>
        <table>
          <tr><th>Filing</th><th>What it is</th></tr>
          <tr><td><span class="kt">10-K</span></td><td>The audited annual report — the most complete source.</td></tr>
          <tr><td><span class="kt">10-Q</span></td><td>The unaudited quarterly update.</td></tr>
          <tr><td>8-K</td><td>Material events reported as they happen.</td></tr>
        </table>

        <p>Inside a 10-K you'll pull from:</p>
        <ul>
          <li>The three <strong>financial statements</strong> (income statement, balance sheet, cash flows).</li>
          <li>The <strong>footnotes</strong> — where the detail hides: revenue breakdowns, debt schedules,
          leases, segment data, stock comp. Spreading well means reading the footnotes.</li>
          <li>The <strong>MD&amp;A</strong> (Management's Discussion &amp; Analysis) — management's own
          narrative on drivers and trends.</li>
        </ul>

        <div class="callout">
          <strong>LTM / TTM:</strong> analysts often want the <em>last twelve months</em> (also “trailing
          twelve months”), computed as: latest full year − same partial period last year + this year's
          partial period. It gives an up-to-date annual figure between annual filings.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Standardizing the Statements",
      html: `
        <span class="eyebrow">Course 2 · Lesson 3 of 6</span>
        <h2>Standardizing the Statements</h2>
        <p>Different companies call the same thing different names — “net revenues,” “net sales,”
        “total revenue.” Spreading maps each reported line onto <strong>one standard template</strong> so
        every company you analyze has the same rows in the same order.</p>

        <p>A typical standardized income statement:</p>
        <table>
          <tr><th>Standard line</th><th>Common reported labels</th></tr>
          <tr><td>Revenue</td><td>Net sales, Total revenue, Net revenues</td></tr>
          <tr><td>COGS</td><td>Cost of sales, Cost of revenue</td></tr>
          <tr><td>Gross profit</td><td>(Revenue − COGS)</td></tr>
          <tr><td>SG&amp;A, R&amp;D</td><td>Operating expenses, Selling &amp; marketing</td></tr>
          <tr><td>EBIT</td><td>Operating income, Income from operations</td></tr>
          <tr><td>Interest, Taxes</td><td>Interest expense, Provision for income taxes</td></tr>
          <tr><td>Net income</td><td>Net earnings, Profit for the year</td></tr>
        </table>

        <div class="callout">
          <strong>Consistency beats precision here:</strong> the goal is that “EBIT” means the same thing
          for every company in your comp set. Decide where each reported line belongs and apply the same
          rule every time.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Common-Size Analysis",
      html: `
        <span class="eyebrow">Course 2 · Lesson 4 of 6</span>
        <h2>Common-Size Analysis</h2>
        <p><span class="kt">Common-size</span> (or vertical) analysis restates every line as a percentage
        of a common base, so companies of wildly different sizes line up on the same scale.</p>

        <table>
          <tr><th>Statement</th><th>Base (=100%)</th></tr>
          <tr><td>Income statement</td><td>Revenue</td></tr>
          <tr><td>Balance sheet</td><td>Total assets</td></tr>
        </table>

        <p>On a common-size income statement, COGS of \$600,000 on \$1,000,000 of revenue shows as
        <strong>60%</strong>. Now you can compare it directly to a competitor ten times its size — do
        they run a 60% cost of goods, or 45%? The dollar amounts are incomparable; the percentages
        aren't.</p>

        <div class="callout">
          <strong>What it reveals:</strong> cost structure and mix. A company whose SG&amp;A creeps from
          20% to 26% of revenue over three years is losing operating leverage — invisible in raw dollars,
          obvious once common-sized.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Growth Rates & Trends",
      html: `
        <span class="eyebrow">Course 2 · Lesson 5 of 6</span>
        <h2>Growth Rates &amp; Trends</h2>
        <p>Where common-size is vertical (down one period), <span class="kt">horizontal</span> analysis
        runs across periods to measure growth.</p>

        <h3>Year-over-year growth</h3>
        <div class="equation">Growth % = (This Year − Last Year) ÷ Last Year × 100</div>
        <p>Revenue rising from \$1,000,000 to \$1,150,000 is +15%.</p>

        <h3>CAGR — compound annual growth rate</h3>
        <p>To express multi-year growth as a single annual rate:</p>
        <div class="equation">CAGR = (Ending ÷ Beginning) ^ (1 ÷ Years) − 1</div>
        <p>Revenue growing \$100,000 → \$121,000 over 2 years is a CAGR of
        (121,000/100,000)<sup>1/2</sup> − 1 = <strong>10%</strong>. CAGR smooths the lumpiness of
        individual years into one comparable rate.</p>

        <div class="callout">
          <strong>Why analysts prefer CAGR:</strong> a company can post +40% then −10%; the CAGR tells
          you the equivalent steady rate. It's the standard way to summarize a growth track record.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Normalizing for Non-Recurring Items",
      html: `
        <span class="eyebrow">Course 2 · Lesson 6 of 6</span>
        <h2>Normalizing for Non-Recurring Items</h2>
        <p>Reported earnings often contain one-time noise that won't repeat: a restructuring charge, a
        legal settlement, a gain on selling a building, an asset write-down. To judge the ongoing
        earning power — the <em>run-rate</em> — analysts <span class="kt">normalize</span> (or “adjust”)
        the numbers by stripping those items out.</p>

        <h3>The mechanic</h3>
        <ul>
          <li><strong>Add back</strong> one-time <em>costs</em> (they depressed earnings but won't recur).</li>
          <li><strong>Subtract</strong> one-time <em>gains</em> (they inflated earnings but won't recur).</li>
        </ul>
        <p>Example: reported operating income \$100,000 included a \$20,000 one-time legal settlement.
        Normalized EBIT = 100,000 + 20,000 = <strong>\$120,000</strong> — the level the business would
        have earned in a clean year.</p>

        <div class="callout">
          <strong>Handle with care (and integrity):</strong> normalization is judgment, and companies'
          own “adjusted” or non-GAAP numbers can be self-serving — always reconcile them to GAAP and
          decide for yourself what's truly non-recurring. This is exactly the kind of claim that needs
          scrutiny, not acceptance.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Concept", front: "What does “spreading” financial statements mean?", back: "Copying reported figures into a clean, consistent template so they can be compared, trended, and modeled." },
    { id: "f2",  tag: "Concept", front: "Why spread before modeling?", back: "Comparability across companies, trend analysis across years, and a clean, traceable input for a forecast model." },
    { id: "f3",  tag: "Sources", front: "Where do US public companies' audited annuals live?", back: "The 10-K (audited annual) filed with the SEC; the 10-Q is the unaudited quarterly." },
    { id: "f4",  tag: "Sources", front: "What is the MD&A?", back: "Management's Discussion & Analysis — management's narrative on results, drivers, and trends in a filing." },
    { id: "f5",  tag: "Sources", front: "Why read the footnotes when spreading?", back: "The detail lives there: revenue breakdowns, debt schedules, leases, segments, stock comp — needed to spread accurately." },
    { id: "f6",  tag: "Sources", front: "What is LTM / TTM?", back: "Last (trailing) twelve months: latest full year − prior-year partial period + current-year partial period. An up-to-date annual figure." },
    { id: "f7",  tag: "Standardize", front: "What does standardizing line items achieve?", back: "It maps each company's labels onto one template so 'EBIT' (etc.) means the same thing for every company compared." },
    { id: "f8",  tag: "Common-size", front: "Common-size income statement: what's the 100% base?", back: "Revenue — every line is expressed as a % of revenue." },
    { id: "f9",  tag: "Common-size", front: "Common-size balance sheet: what's the 100% base?", back: "Total assets — every line is expressed as a % of total assets." },
    { id: "f10", tag: "Common-size", front: "Why use common-size analysis?", back: "It removes size, so companies of different scale can be compared on cost structure and mix; trends in % pop out." },
    { id: "f11", tag: "Growth", front: "Year-over-year growth formula?", back: "(This year − Last year) ÷ Last year × 100." },
    { id: "f12", tag: "Growth", front: "CAGR formula?", back: "(Ending ÷ Beginning) ^ (1 ÷ Years) − 1. It expresses multi-year growth as one steady annual rate." },
    { id: "f13", tag: "Analysis", front: "Vertical vs. horizontal analysis?", back: "Vertical = common-size within a period (% of a base). Horizontal = growth across periods." },
    { id: "f14", tag: "Normalize", front: "What is normalizing (adjusting) earnings?", back: "Removing one-time items — add back non-recurring costs, subtract non-recurring gains — to show ongoing run-rate earning power." },
    { id: "f15", tag: "Normalize", front: "Do you add or subtract a one-time legal charge when normalizing EBIT?", back: "Add it back — it depressed earnings but won't recur, so normalized EBIT is higher." },
    { id: "f16", tag: "Caution", front: "How should you treat a company's own 'adjusted'/non-GAAP numbers?", back: "Skeptically — reconcile them to GAAP and judge for yourself what's truly non-recurring; they can be self-serving." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "“Spreading” financial statements refers to…",
      options: ["Spreading rumors about earnings", "Copying reported figures into a clean, standardized template", "Distributing dividends", "Splitting a company into segments"],
      answer: 1,
      explain: "Spreading standardizes messy reported filings into one consistent template for comparison, trending, and modeling.",
    },
    {
      id: "q2",
      prompt: "On a common-size income statement, each line is shown as a percentage of…",
      options: ["Total assets", "Net income", "Revenue", "Total equity"],
      answer: 2,
      explain: "The income statement is common-sized to revenue (=100%); the balance sheet is common-sized to total assets.",
    },
    {
      id: "q3",
      prompt: "On a common-size balance sheet, the 100% base is…",
      options: ["Revenue", "Total assets", "Cash", "Total liabilities"],
      answer: 1,
      explain: "Balance-sheet lines are expressed as a percent of total assets.",
    },
    {
      id: "q4",
      scenario: "Revenue grew from \$1,000,000 to \$1,150,000.",
      prompt: "What is the year-over-year growth rate?",
      options: ["11.5%", "15%", "13%", "1.15%"],
      answer: 1,
      explain: "(1,150,000 − 1,000,000) ÷ 1,000,000 × 100 = 15%.",
    },
    {
      id: "q5",
      scenario: "Revenue grew from \$100,000 to \$121,000 over exactly 2 years.",
      prompt: "What is the CAGR?",
      options: ["21%", "10.5%", "10%", "11%"],
      answer: 2,
      explain: "CAGR = (121,000/100,000)^(1/2) − 1 = 1.1 − 1 = 10%.",
    },
    {
      id: "q6",
      prompt: "To normalize EBIT for a one-time legal charge included in operating expenses, you…",
      options: ["Subtract it from EBIT", "Add it back to EBIT", "Ignore it", "Move it to revenue"],
      answer: 1,
      explain: "A one-time cost depressed earnings but won't recur, so you add it back — normalized EBIT is higher than reported.",
    },
    {
      id: "q7",
      prompt: "The most complete, audited annual source for a US public company is the…",
      options: ["Press release", "10-Q", "10-K", "Investor tweet"],
      answer: 2,
      explain: "The 10-K is the audited annual report filed with the SEC; the 10-Q is the unaudited quarterly.",
    },
    {
      id: "q8",
      prompt: "Horizontal analysis measures…",
      options: ["Each line as a % of revenue", "Growth of line items across periods", "The current ratio", "Cash vs. accrual differences"],
      answer: 1,
      explain: "Horizontal analysis runs across periods (growth); vertical/common-size analysis runs within a period as a % of a base.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Common-size this income statement — express each line as a % of revenue.",
      rows: [
        { label: "Revenue", value: 1000000, given: true },
        { label: "COGS", value: 600000, given: true },
        { label: "SG&A", value: 250000, given: true },
        { label: "Net income", value: 90000, given: true },
        { label: "COGS as % of revenue", key: "cogs", answer: 60, hint: "COGS / Revenue × 100" },
        { label: "SG&A as % of revenue", key: "sga", answer: 25, hint: "SG&A / Revenue × 100" },
        { label: "Net margin (% of revenue)", key: "nm", answer: 9, hint: "Net income / Revenue × 100" },
      ],
      prefix: "$",
      explain: "COGS 60%, SG&A 25%, net margin 9%. Common-sizing lets you compare this cost structure to a company of any size.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Common-size the asset side of this balance sheet — each line as a % of total assets.",
      rows: [
        { label: "Cash", value: 50000, given: true },
        { label: "Accounts Receivable", value: 100000, given: true },
        { label: "Inventory", value: 150000, given: true },
        { label: "Net PP&E", value: 200000, given: true },
        { label: "Total assets", value: 500000, given: true },
        { label: "Cash (% of total assets)", key: "cash", answer: 10, hint: "Cash / Total assets × 100" },
        { label: "Accounts Receivable (%)", key: "ar", answer: 20, hint: "A/R / Total assets × 100" },
        { label: "Inventory (%)", key: "inv", answer: 30, hint: "Inventory / Total assets × 100" },
        { label: "Net PP&E (%)", key: "ppe", answer: 40, hint: "PP&E / Total assets × 100" },
      ],
      prefix: "$",
      explain: "Cash 10%, A/R 20%, Inventory 30%, PP&E 40% — the asset mix at a glance, comparable across companies.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Compute year-over-year growth for two lines.",
      rows: [
        { label: "Year 1 revenue", value: 1000000, given: true },
        { label: "Year 2 revenue", value: 1150000, given: true },
        { label: "Year 1 net income", value: 90000, given: true },
        { label: "Year 2 net income", value: 108000, given: true },
        { label: "Revenue growth (%)", key: "rg", answer: 15, hint: "(Y2 − Y1) / Y1 × 100" },
        { label: "Net income growth (%)", key: "ng", answer: 20, hint: "(Y2 − Y1) / Y1 × 100" },
      ],
      prefix: "$",
      explain: "Revenue +15%, net income +20%. Net income growing faster than revenue signals expanding margins (operating leverage).",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Compute the CAGR. Enter it as a whole-number percent. (Formula bar hint: use ^ or POWER.)",
      rows: [
        { label: "Beginning revenue", value: 100000, given: true },
        { label: "Ending revenue", value: 121000, given: true },
        { label: "Number of years", value: 2, given: true },
        { label: "Revenue CAGR (%)", key: "cagr", answer: 10, hint: "(End / Beginning) ^ (1 / Years) − 1, then × 100" },
      ],
      prefix: "$",
      explain: "CAGR = (121,000/100,000)^(1/2) − 1 = 1.1 − 1 = 10%. Try =(B2/B1)^(1/B3)*100-100 on the grid.",
    },
    {
      id: "d5",
      type: "model",
      prompt: "Normalize EBIT for a one-time item, then compare reported vs. normalized margin.",
      rows: [
        { label: "Revenue", value: 1000000, given: true },
        { label: "Reported operating income (EBIT)", value: 100000, given: true },
        { label: "One-time legal settlement (in opex)", value: 20000, given: true },
        { label: "Normalized EBIT", key: "nebit", answer: 120000, hint: "reported EBIT + one-time cost" },
        { label: "Reported EBIT margin (%)", key: "rm", answer: 10, hint: "reported EBIT / revenue × 100" },
        { label: "Normalized EBIT margin (%)", key: "nmg", answer: 12, hint: "normalized EBIT / revenue × 100" },
      ],
      prefix: "$",
      explain: "Add back the \$20,000 one-time charge → normalized EBIT \$120,000. Margin goes from a reported 10% to a normalized 12% run-rate.",
    },
  ],
});
