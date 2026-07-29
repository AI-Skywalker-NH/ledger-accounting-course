/* ===========================================================================
   Course 2 · Module FM-2 — Ratio Analysis
   Liquidity · Leverage · Profitability · Efficiency · DuPont
   All figures trace to one consistent example company (see Lesson 1).
   =========================================================================== */
Ledger.register({
  id: "fm-02",
  title: "Ratio Analysis: Liquidity, Leverage, Profitability",
  subtitle:
    "Turning a clean spread into judgment — the four families of ratios analysts use to size up a company, and the DuPont identity that ties them together.",
  est: "~60 min",
  objectives: [
    "Explain why ratios only mean something against a benchmark.",
    "Compute liquidity ratios: current, quick, cash.",
    "Compute leverage/solvency ratios: D/E, D/A, interest coverage, Debt/EBITDA.",
    "Compute profitability ratios: margins, ROA, ROE, ROIC.",
    "Compute efficiency ratios and decompose ROE with the DuPont identity.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Why Ratios — and the Example Company",
      html: `
        <span class="eyebrow">Course 2 · Lesson 1 of 6</span>
        <h2>Why Ratios — and the Example Company</h2>
        <p>A spread gives you clean numbers; <span class="kt">ratios</span> turn those numbers into
        <em>comparisons</em>. A ratio scales one figure by another so you can judge performance across
        companies of different sizes and across time. But a ratio alone means little — it only speaks
        when set against a <strong>benchmark</strong>: the company's own history, a peer, or an industry
        norm.</p>

        <h3>The four families</h3>
        <table>
          <tr><th>Family</th><th>Question</th></tr>
          <tr><td>Liquidity</td><td>Can it pay its near-term bills?</td></tr>
          <tr><td>Leverage / solvency</td><td>How much debt, and can it service it?</td></tr>
          <tr><td>Profitability</td><td>How much profit per dollar of sales / assets / equity?</td></tr>
          <tr><td>Efficiency / activity</td><td>How hard do its assets work?</td></tr>
        </table>

        <h3>Our example company (used throughout)</h3>
        <table>
          <tr><th>Income statement</th><th></th><th>Balance sheet</th><th></th></tr>
          <tr><td>Revenue</td><td>1,000,000</td><td>Cash</td><td>50,000</td></tr>
          <tr><td>COGS</td><td>600,000</td><td>Accounts Receivable</td><td>100,000</td></tr>
          <tr><td>Operating income (EBIT)</td><td>150,000</td><td>Inventory</td><td>150,000</td></tr>
          <tr><td>Interest expense</td><td>30,000</td><td>Net PP&amp;E</td><td>300,000</td></tr>
          <tr><td>Net income</td><td>90,000</td><td><strong>Total assets</strong></td><td><strong>600,000</strong></td></tr>
          <tr><td>D&amp;A (for EBITDA)</td><td>50,000</td><td>Current liabilities</td><td>150,000</td></tr>
          <tr><td></td><td></td><td>Total debt (ST+LT)</td><td>200,000</td></tr>
          <tr><td></td><td></td><td>Total equity</td><td>300,000</td></tr>
        </table>

        <div class="callout"><strong>Keep these numbers handy</strong> — every drill in this module is built from this one company, so the ratios connect into a single picture.</div>
      `,
    },
    {
      id: "l2",
      title: "Liquidity Ratios",
      html: `
        <span class="eyebrow">Course 2 · Lesson 2 of 6</span>
        <h2>Liquidity Ratios</h2>
        <p><span class="kt">Liquidity</span> ratios ask whether current assets can cover current
        liabilities — can the company meet obligations due within a year?</p>

        <div class="equation">Current Ratio = Current Assets ÷ Current Liabilities</div>
        <p>Our company: 300,000 ÷ 150,000 = <strong>2.0</strong>.</p>

        <div class="equation">Quick Ratio = (Current Assets − Inventory) ÷ Current Liabilities</div>
        <p>The “acid test” strips out inventory (the slowest current asset to turn to cash):
        (300,000 − 150,000) ÷ 150,000 = <strong>1.0</strong>. Equivalently, (Cash + Receivables) ÷ CL.</p>

        <div class="equation">Cash Ratio = Cash ÷ Current Liabilities</div>
        <p>The most conservative: 50,000 ÷ 150,000 ≈ <strong>0.33</strong>.</p>

        <div class="callout">
          <strong>Reading them:</strong> higher generally = safer, but a very high current ratio can flag
          idle cash or bloated inventory. Context decides — a grocer runs thinner liquidity than a
          manufacturer, and that's normal.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Leverage & Solvency Ratios",
      html: `
        <span class="eyebrow">Course 2 · Lesson 3 of 6</span>
        <h2>Leverage &amp; Solvency Ratios</h2>
        <p>These size the debt load and the ability to service it.</p>

        <div class="equation">Debt-to-Equity = Total Debt ÷ Total Equity</div>
        <p>200,000 ÷ 300,000 ≈ <strong>0.67</strong>. (Some analysts use <em>total liabilities</em> ÷
        equity instead of interest-bearing debt — know which convention you're using.)</p>

        <div class="equation">Debt-to-Assets = Total Debt ÷ Total Assets</div>
        <p>200,000 ÷ 600,000 ≈ <strong>0.33</strong> — a third of the assets are debt-financed.</p>

        <div class="equation">Interest Coverage = EBIT ÷ Interest Expense</div>
        <p>150,000 ÷ 30,000 = <strong>5.0×</strong> — operating profit covers interest five times over.
        Higher is safer.</p>

        <div class="equation">Debt ÷ EBITDA = Total Debt ÷ EBITDA</div>
        <p>EBITDA = EBIT + D&amp;A = 150,000 + 50,000 = 200,000, so Debt/EBITDA = 200,000 ÷ 200,000 =
        <strong>1.0×</strong>. A key credit metric — how many years of cash earnings the debt represents.</p>

        <div class="callout">
          <strong>Solvency vs. liquidity:</strong> liquidity is about the next twelve months; solvency
          (leverage) is about the long-run ability to carry and repay debt. Lenders live in these ratios.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Profitability Ratios",
      html: `
        <span class="eyebrow">Course 2 · Lesson 4 of 6</span>
        <h2>Profitability Ratios</h2>
        <p>Margins (from FM-1) measure profit per dollar of <em>sales</em>; returns measure profit per
        dollar of <em>capital</em>.</p>

        <table>
          <tr><th>Ratio</th><th>Formula</th><th>Our company</th></tr>
          <tr><td>Gross margin</td><td>Gross profit ÷ Revenue</td><td>400/1,000 = 40%</td></tr>
          <tr><td>Operating margin</td><td>EBIT ÷ Revenue</td><td>150/1,000 = 15%</td></tr>
          <tr><td>Net margin</td><td>Net income ÷ Revenue</td><td>90/1,000 = 9%</td></tr>
          <tr><td><strong>ROA</strong></td><td>Net income ÷ Total assets</td><td>90/600 = 15%</td></tr>
          <tr><td><strong>ROE</strong></td><td>Net income ÷ Total equity</td><td>90/300 = 30%</td></tr>
        </table>

        <p><span class="kt">ROA</span> asks how well the company turns <em>all</em> its assets into
        profit; <span class="kt">ROE</span> asks how well it turns <em>shareholders'</em> money into
        profit. ROE exceeds ROA whenever the company uses debt — leverage amplifies equity returns.</p>

        <div class="callout">
          <strong>ROIC</strong> (return on invested capital) = NOPAT ÷ Invested capital, where NOPAT =
          EBIT × (1 − tax). Here: 150,000 × 0.75 ÷ 500,000 = 22.5%. ROIC vs. the cost of capital is the
          truest test of whether a business creates value — central to the DCF module ahead.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Efficiency (Activity) Ratios",
      html: `
        <span class="eyebrow">Course 2 · Lesson 5 of 6</span>
        <h2>Efficiency (Activity) Ratios</h2>
        <p>Efficiency ratios measure how hard the assets work — how much revenue or throughput each
        dollar of assets generates.</p>

        <div class="equation">Asset Turnover = Revenue ÷ Total Assets</div>
        <p>1,000,000 ÷ 600,000 ≈ <strong>1.67×</strong> — \$1.67 of sales per \$1 of assets.</p>

        <div class="equation">Inventory Turnover = COGS ÷ Inventory</div>
        <p>600,000 ÷ 150,000 = <strong>4.0×</strong> — inventory sells through four times a year. (Divide
        365 by this to recover DIO ≈ 91 days — the link back to Module 8.)</p>

        <div class="equation">Receivables Turnover = Revenue ÷ Accounts Receivable</div>
        <p>1,000,000 ÷ 100,000 = <strong>10.0×</strong> — receivables are collected ten times a year
        (DSO ≈ 36.5 days).</p>

        <div class="callout">
          <strong>A note on rigor:</strong> textbook turnover ratios use the <em>average</em> balance
          ((beginning + ending) ÷ 2) rather than the period-end figure. We use period-end here for
          simplicity; in practice, average balances smooth out end-of-period swings.
        </div>
      `,
    },
    {
      id: "l6",
      title: "The DuPont Identity",
      html: `
        <span class="eyebrow">Course 2 · Lesson 6 of 6</span>
        <h2>The DuPont Identity</h2>
        <p>ROE is the headline return, but it hides <em>why</em> a company earns what it does. The
        <span class="kt">DuPont</span> identity breaks ROE into three levers:</p>

        <div class="equation">ROE = Net Margin × Asset Turnover × Equity Multiplier</div>
        <table>
          <tr><th>Lever</th><th>Formula</th><th>Meaning</th></tr>
          <tr><td>Net margin</td><td>Net income ÷ Revenue</td><td>Profitability</td></tr>
          <tr><td>Asset turnover</td><td>Revenue ÷ Assets</td><td>Efficiency</td></tr>
          <tr><td>Equity multiplier</td><td>Assets ÷ Equity</td><td>Leverage</td></tr>
        </table>

        <p>For our company: 9% × 1.67 × 2.0 = <strong>30% ROE</strong> (the Revenue and Assets terms
        cancel, leaving Net income ÷ Equity). Two firms with identical 30% ROE can get there very
        differently — one on fat margins, another on heavy leverage. DuPont tells you which.</p>

        <div class="callout">
          <strong>Putting it together:</strong> no single ratio decides anything. Read liquidity,
          leverage, profitability, and efficiency <em>together</em>, always against a benchmark, and use
          DuPont to see what's really driving returns. That's ratio analysis.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Concept", front: "Why does a ratio only mean something with a benchmark?", back: "A ratio scales one figure by another; its value is judged only against history, peers, or industry norms — not in isolation." },
    { id: "f2",  tag: "Concept", front: "Name the four families of ratios.", back: "Liquidity, leverage/solvency, profitability, and efficiency/activity." },
    { id: "f3",  tag: "Liquidity", front: "Current ratio formula?", back: "Current Assets ÷ Current Liabilities. (Example: 300k/150k = 2.0.)" },
    { id: "f4",  tag: "Liquidity", front: "Quick (acid-test) ratio, and what it excludes?", back: "(Current Assets − Inventory) ÷ Current Liabilities — excludes inventory, the slowest current asset to become cash." },
    { id: "f5",  tag: "Liquidity", front: "Cash ratio formula?", back: "Cash (& equivalents) ÷ Current Liabilities — the most conservative liquidity measure." },
    { id: "f6",  tag: "Leverage", front: "Debt-to-equity formula (and a caveat)?", back: "Total Debt ÷ Total Equity. Some use total liabilities ÷ equity — know which convention you're using." },
    { id: "f7",  tag: "Leverage", front: "Interest coverage ratio?", back: "EBIT ÷ Interest Expense — how many times operating profit covers interest. Higher is safer. (150k/30k = 5×.)" },
    { id: "f8",  tag: "Leverage", front: "Debt/EBITDA — what it captures?", back: "Total Debt ÷ EBITDA — roughly how many years of cash earnings the debt represents. A core credit metric." },
    { id: "f9",  tag: "Profitability", front: "ROA vs. ROE?", back: "ROA = Net income ÷ Total assets (return on all assets). ROE = Net income ÷ Total equity (return on owners' capital)." },
    { id: "f10", tag: "Profitability", front: "Why does ROE usually exceed ROA?", back: "Leverage: using debt to fund assets amplifies the return on the smaller equity base." },
    { id: "f11", tag: "Profitability", front: "ROIC formula and why it matters?", back: "NOPAT ÷ Invested capital, NOPAT = EBIT × (1 − tax). Compared to cost of capital, it shows whether the business creates value." },
    { id: "f12", tag: "Efficiency", front: "Asset turnover formula?", back: "Revenue ÷ Total Assets — sales generated per dollar of assets. (1,000k/600k ≈ 1.67×.)" },
    { id: "f13", tag: "Efficiency", front: "Inventory turnover and receivables turnover?", back: "Inventory turnover = COGS ÷ Inventory. Receivables turnover = Revenue ÷ Accounts Receivable." },
    { id: "f14", tag: "Efficiency", front: "Should turnover ratios use period-end or average balances?", back: "Ideally average balances ((beginning + ending)/2) to smooth swings; period-end is a common simplification." },
    { id: "f15", tag: "DuPont", front: "State the DuPont identity for ROE.", back: "ROE = Net margin × Asset turnover × Equity multiplier (profitability × efficiency × leverage)." },
    { id: "f16", tag: "DuPont", front: "What is the equity multiplier?", back: "Total Assets ÷ Total Equity — the leverage lever in DuPont. (600k/300k = 2.0.)" },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "The quick (acid-test) ratio differs from the current ratio by excluding…",
      options: ["Cash", "Accounts receivable", "Inventory", "Current liabilities"],
      answer: 2,
      explain: "The quick ratio removes inventory — the current asset slowest to convert to cash — for a stricter liquidity test.",
    },
    {
      id: "q2",
      scenario: "Current assets \$300,000; current liabilities \$150,000.",
      prompt: "What is the current ratio?",
      options: ["0.5", "1.5", "2.0", "3.0"],
      answer: 2,
      explain: "Current ratio = 300,000 ÷ 150,000 = 2.0.",
    },
    {
      id: "q3",
      scenario: "EBIT \$150,000; interest expense \$30,000.",
      prompt: "What is the interest coverage ratio?",
      options: ["0.2×", "5.0×", "3.0×", "18×"],
      answer: 1,
      explain: "Interest coverage = EBIT ÷ Interest = 150,000 ÷ 30,000 = 5.0×.",
    },
    {
      id: "q4",
      scenario: "Net income \$90,000; total equity \$300,000.",
      prompt: "What is ROE?",
      options: ["15%", "30%", "9%", "3%"],
      answer: 1,
      explain: "ROE = Net income ÷ Total equity = 90,000 ÷ 300,000 = 30%.",
    },
    {
      id: "q5",
      prompt: "Why does ROE typically exceed ROA?",
      options: ["Because of higher revenue", "Because of the use of leverage (debt)", "Because of lower taxes", "They are always equal"],
      answer: 1,
      explain: "Debt funds part of the assets, so the same profit is measured against a smaller equity base — leverage amplifies ROE.",
    },
    {
      id: "q6",
      scenario: "COGS \$600,000; inventory \$150,000.",
      prompt: "What is inventory turnover?",
      options: ["2.5×", "4.0×", "0.25×", "9×"],
      answer: 1,
      explain: "Inventory turnover = COGS ÷ Inventory = 600,000 ÷ 150,000 = 4.0× per year.",
    },
    {
      id: "q7",
      prompt: "The DuPont identity decomposes ROE into…",
      options: [
        "Current ratio × quick ratio × cash ratio",
        "Net margin × asset turnover × equity multiplier",
        "Gross margin × tax rate × interest coverage",
        "Revenue × assets × equity",
      ],
      answer: 1,
      explain: "DuPont: ROE = net margin (profitability) × asset turnover (efficiency) × equity multiplier (leverage).",
    },
    {
      id: "q8",
      prompt: "A ratio is most useful when…",
      options: ["Viewed entirely on its own", "Compared to a benchmark (history, peers, industry)", "It is a whole number", "Taken from a press release"],
      answer: 1,
      explain: "Ratios gain meaning only against a benchmark — the company's own trend, peers, or industry norms.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Liquidity ratios. Build the current, quick, and cash ratios for the example company.",
      rows: [
        { label: "Cash", value: 50000, given: true },
        { label: "Accounts Receivable", value: 100000, given: true },
        { label: "Inventory", value: 150000, given: true },
        { label: "Total current assets", value: 300000, given: true },
        { label: "Total current liabilities", value: 150000, given: true },
        { label: "Current ratio", key: "cr", answer: 2, hint: "current assets ÷ current liabilities" },
        { label: "Quick ratio", key: "qr", answer: 1, hint: "(current assets − inventory) ÷ current liabilities" },
        { label: "Cash ratio", key: "cash", answer: 0.33, hint: "cash ÷ current liabilities" },
      ],
      prefix: "$",
      explain: "Current 300/150 = 2.0; quick (300−150)/150 = 1.0; cash 50/150 ≈ 0.33. Progressively stricter liquidity tests.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Leverage & solvency ratios.",
      rows: [
        { label: "Total debt (ST + LT)", value: 200000, given: true },
        { label: "Total equity", value: 300000, given: true },
        { label: "Total assets", value: 600000, given: true },
        { label: "EBIT", value: 150000, given: true },
        { label: "Interest expense", value: 30000, given: true },
        { label: "EBITDA", value: 200000, given: true },
        { label: "Debt-to-equity", key: "de", answer: 0.67, hint: "total debt ÷ total equity" },
        { label: "Debt-to-assets", key: "da", answer: 0.33, hint: "total debt ÷ total assets" },
        { label: "Interest coverage (×)", key: "ic", answer: 5, hint: "EBIT ÷ interest" },
        { label: "Debt / EBITDA (×)", key: "debitda", answer: 1, hint: "total debt ÷ EBITDA" },
      ],
      prefix: "$",
      explain: "D/E ≈ 0.67, D/A ≈ 0.33, interest coverage 5×, Debt/EBITDA 1×. The company carries modest, well-covered debt.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Profitability — margins and returns.",
      rows: [
        { label: "Revenue", value: 1000000, given: true },
        { label: "Net income", value: 90000, given: true },
        { label: "Total assets", value: 600000, given: true },
        { label: "Total equity", value: 300000, given: true },
        { label: "Net margin (%)", key: "nm", answer: 9, hint: "net income ÷ revenue × 100" },
        { label: "ROA (%)", key: "roa", answer: 15, hint: "net income ÷ total assets × 100" },
        { label: "ROE (%)", key: "roe", answer: 30, hint: "net income ÷ total equity × 100" },
      ],
      prefix: "$",
      explain: "Net margin 9%, ROA 15%, ROE 30%. ROE > ROA because debt funds part of the assets (leverage lifts the equity return).",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Efficiency (activity) ratios. Enter turnovers as a multiple (×).",
      rows: [
        { label: "Revenue", value: 1000000, given: true },
        { label: "COGS", value: 600000, given: true },
        { label: "Total assets", value: 600000, given: true },
        { label: "Inventory", value: 150000, given: true },
        { label: "Accounts Receivable", value: 100000, given: true },
        { label: "Asset turnover (×)", key: "at", answer: 1.67, hint: "revenue ÷ total assets" },
        { label: "Inventory turnover (×)", key: "it", answer: 4, hint: "COGS ÷ inventory" },
        { label: "Receivables turnover (×)", key: "rt", answer: 10, hint: "revenue ÷ accounts receivable" },
      ],
      prefix: "$",
      explain: "Asset turnover ≈ 1.67×, inventory 4× (DIO ≈ 91 days), receivables 10× (DSO ≈ 36.5 days). How hard the assets work.",
    },
    {
      id: "d5",
      type: "model",
      prompt: "DuPont. Build the three levers from the raw figures, then multiply them to recover ROE.",
      rows: [
        { label: "Revenue", value: 1000000, given: true },
        { label: "Net income", value: 90000, given: true },
        { label: "Total assets", value: 600000, given: true },
        { label: "Total equity", value: 300000, given: true },
        { label: "Net margin (%)", key: "nm", answer: 9, hint: "net income ÷ revenue × 100" },
        { label: "Asset turnover (×)", key: "at", answer: 1.67, hint: "revenue ÷ total assets" },
        { label: "Equity multiplier (×)", key: "em", answer: 2, hint: "total assets ÷ total equity" },
        { label: "ROE via DuPont (%)", key: "roe", answer: 30, hint: "net margin × asset turnover × equity multiplier" },
      ],
      prefix: "$",
      explain: "9% × 1.67 × 2.0 = 30% — the same ROE as Net income ÷ Equity, now decomposed into profitability × efficiency × leverage.",
    },
  ],
});
