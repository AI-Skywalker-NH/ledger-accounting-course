/* ===========================================================================
   Module 3 — The Income Statement in Depth
   =========================================================================== */
Ledger.register({
  id: "module-03",
  title: "The Income Statement in Depth",
  subtitle:
    "From the top line to the bottom line — how a company reports whether it made money, and the profit tiers every model forecasts.",
  est: "~55 min",
  objectives: [
    "Describe what the income statement measures and its multi-step structure.",
    "Apply the revenue recognition principle: earned, not collected.",
    "Compute gross profit, operating income (EBIT), pretax income, and net income.",
    "Distinguish COGS, operating expenses, and below-the-line items.",
    "Calculate gross, operating, and net margins, and compute EBITDA.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Anatomy of the Income Statement",
      html: `
        <span class="eyebrow">Lesson 1 of 6</span>
        <h2>Anatomy of the Income Statement</h2>
        <p>The <span class="kt">income statement</span> (also called the P&amp;L, for profit and loss)
        answers one question over a <em>period of time</em>: did the business make money? It starts
        with sales at the top and subtracts costs in tiers until it reaches profit at the bottom.</p>

        <div class="equation">Revenue − Expenses = Net Income</div>

        <p>In practice it's presented in a <strong>multi-step</strong> format, peeling off costs in
        layers so you can see profitability at each level:</p>
        <table>
          <tr><th>Line</th><th>What it shows</th></tr>
          <tr><td>Revenue <span class="muted">(top line)</span></td><td>Sales earned in the period.</td></tr>
          <tr><td>− Cost of goods sold</td><td>Direct cost of what was sold.</td></tr>
          <tr><td><strong>= Gross profit</strong></td><td>Profit after direct costs.</td></tr>
          <tr><td>− Operating expenses</td><td>Running the business (SG&amp;A, R&amp;D, D&amp;A).</td></tr>
          <tr><td><strong>= Operating income (EBIT)</strong></td><td>Profit from core operations.</td></tr>
          <tr><td>− Interest &nbsp;− Taxes</td><td>Financing cost and government's share.</td></tr>
          <tr><td><strong>= Net income</strong> <span class="muted">(bottom line)</span></td><td>What's left for the owners.</td></tr>
        </table>

        <div class="callout">
          <strong>Accrual basis:</strong> the income statement records revenue when it's
          <em>earned</em> and expenses when they're <em>incurred</em> — not when cash changes hands.
          That's why a profitable company can still be short on cash (a gap the cash flow statement
          exists to explain).
        </div>
      `,
    },
    {
      id: "l2",
      title: "Revenue Recognition",
      html: `
        <span class="eyebrow">Lesson 2 of 6</span>
        <h2>Revenue Recognition</h2>
        <p>The <span class="kt">revenue recognition principle</span> says revenue is recorded when it's
        <strong>earned</strong> — when the goods or services are delivered — regardless of when the
        customer actually pays.</p>

        <h3>The three timing cases</h3>
        <table>
          <tr><th>Situation</th><th>Recognize revenue?</th></tr>
          <tr><td>Deliver now, get paid now (cash sale)</td><td>Yes, now.</td></tr>
          <tr><td>Deliver now, get paid later (sale on credit)</td><td>Yes, now — record Accounts Receivable.</td></tr>
          <tr><td>Get paid now, deliver later (prepayment)</td><td>No — record Unearned Revenue (a liability) until delivered.</td></tr>
        </table>

        <p>The last row is the one people miss. Cash collected in advance is <strong>not</strong>
        revenue — the business still owes the customer a product or service, so it's a liability
        (<span class="kt">unearned revenue</span>). Only when delivery happens does it convert:</p>

        <ul>
          <li>On collection: <strong>Dr Cash / Cr Unearned Revenue.</strong></li>
          <li>On delivery: <strong>Dr Unearned Revenue / Cr Revenue.</strong></li>
        </ul>

        <div class="callout">
          <strong>Why this matters for modeling:</strong> revenue drives almost every projection. If
          you don't know <em>when</em> a business is allowed to book revenue, you'll misjudge both the
          income statement and the receivables/deferred-revenue lines on the balance sheet.
        </div>
      `,
    },
    {
      id: "l3",
      title: "COGS & Gross Profit",
      html: `
        <span class="eyebrow">Lesson 3 of 6</span>
        <h2>COGS &amp; Gross Profit</h2>
        <p><span class="kt">Cost of goods sold (COGS)</span> is the <em>direct</em> cost of producing
        what the company sold in the period — the raw materials, direct labor, and manufacturing cost
        of the units that actually left the door. Subtract it from revenue to get gross profit.</p>

        <div class="equation">Gross Profit = Revenue − COGS</div>

        <h3>Product vs. period costs</h3>
        <ul>
          <li><strong>Product costs</strong> attach to inventory and hit the income statement as COGS
          <em>only when the item sells</em>. Until then they sit on the balance sheet as inventory.</li>
          <li><strong>Period costs</strong> (rent, admin salaries, marketing) are expensed in the period
          they occur, as operating expenses — not COGS.</li>
        </ul>

        <p><span class="kt">Gross margin</span> — gross profit as a percent of revenue — is a first read
        on pricing power and production efficiency:</p>
        <div class="equation">Gross Margin = Gross Profit ÷ Revenue</div>

        <div class="callout">
          <strong>Example:</strong> Revenue \$500,000, COGS \$300,000 → gross profit \$200,000, a 40%
          gross margin. Every \$1 of sales leaves 40¢ after direct costs to cover everything else.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Operating Expenses & Operating Income (EBIT)",
      html: `
        <span class="eyebrow">Lesson 4 of 6</span>
        <h2>Operating Expenses &amp; Operating Income (EBIT)</h2>
        <p>Below gross profit come the costs of <em>running</em> the business — the operating expenses.
        Subtract them to get <span class="kt">operating income</span>, also called
        <span class="kt">EBIT</span> (Earnings Before Interest and Taxes).</p>

        <div class="equation">Operating Income (EBIT) = Gross Profit − Operating Expenses</div>

        <h3>What's in operating expenses</h3>
        <ul>
          <li><strong>SG&amp;A</strong> — selling, general &amp; administrative: sales teams, marketing,
          executive and admin salaries, office rent.</li>
          <li><strong>R&amp;D</strong> — research and development.</li>
          <li><strong>Depreciation &amp; amortization (D&amp;A)</strong> — spreading the cost of
          long-lived assets over their useful lives.</li>
        </ul>

        <p>EBIT is powerful because it isolates the profitability of the <em>core business</em>, before
        the effects of how the company is financed (interest) or taxed. Two companies with identical
        operations but different debt loads have the same EBIT — which makes it a clean basis for
        comparison.</p>

        <div class="callout">
          <strong>Operating vs. non-operating:</strong> EBIT is the dividing line. Everything above it
          is core operations; interest and taxes below it are financing and government items.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Interest, Taxes & Net Income",
      html: `
        <span class="eyebrow">Lesson 5 of 6</span>
        <h2>Interest, Taxes &amp; Net Income</h2>
        <p>Below EBIT sit the items that turn operating profit into what owners actually keep.</p>

        <table>
          <tr><th>Line</th><th>Meaning</th></tr>
          <tr><td>Operating income (EBIT)</td><td>Core operating profit.</td></tr>
          <tr><td>− Interest expense</td><td>Cost of borrowed money (a financing item).</td></tr>
          <tr><td><strong>= Pretax income</strong></td><td>Profit before tax (EBT).</td></tr>
          <tr><td>− Income tax expense</td><td>Government's share, ≈ pretax income × tax rate.</td></tr>
          <tr><td><strong>= Net income</strong></td><td>The bottom line — profit for the owners.</td></tr>
        </table>

        <p>So the full chain is:</p>
        <div class="equation">EBIT − Interest − Taxes = Net Income</div>

        <div class="callout">
          <strong>The link you'll use constantly:</strong> net income flows into
          <em>retained earnings</em> on the balance sheet
          (Beginning RE + Net Income − Dividends = Ending RE) and is the starting line of the cash flow
          statement. This is the hinge that ties the three statements together.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Margins & EBITDA",
      html: `
        <span class="eyebrow">Lesson 6 of 6</span>
        <h2>Margins &amp; EBITDA</h2>
        <p>Analysts rarely stop at dollar profits — they convert each profit tier to a
        <span class="kt">margin</span> (a percent of revenue) so companies of different sizes can be
        compared on the same footing. This is the essence of <em>common-size</em> analysis.</p>

        <table>
          <tr><th>Margin</th><th>Formula</th><th>Example</th></tr>
          <tr><td>Gross margin</td><td>Gross profit ÷ Revenue</td><td>200 ÷ 500 = 40%</td></tr>
          <tr><td>Operating margin</td><td>EBIT ÷ Revenue</td><td>100 ÷ 500 = 20%</td></tr>
          <tr><td>Net margin</td><td>Net income ÷ Revenue</td><td>60 ÷ 500 = 12%</td></tr>
        </table>

        <h3>EBITDA</h3>
        <p><span class="kt">EBITDA</span> — Earnings Before Interest, Taxes, Depreciation and
        Amortization — adds the non-cash D&amp;A back to EBIT:</p>
        <div class="equation">EBITDA = EBIT + Depreciation &amp; Amortization</div>

        <p>Because it strips out financing, taxes, and non-cash charges, EBITDA is used as a rough proxy
        for operating cash generation and is the backbone of valuation multiples
        (e.g. EV/EBITDA). But treat it with care:</p>
        <ul>
          <li>It ignores the very real cost of maintaining assets (capital expenditures).</li>
          <li>It is <em>not</em> a defined GAAP measure, so companies compute it inconsistently.</li>
        </ul>

        <div class="callout">
          <strong>Banker's habit:</strong> quote profit both in dollars and as a margin, and always
          know whether a figure is EBIT or EBITDA — the two are a full D&amp;A apart.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Structure", front: "What does the income statement measure, and over what horizon?", back: "Profitability (Revenue − Expenses = Net Income) over a period of time." },
    { id: "f2",  tag: "Structure", front: "What are the 'top line' and 'bottom line'?", back: "Top line = Revenue (sales). Bottom line = Net Income (profit for owners)." },
    { id: "f3",  tag: "Accrual", front: "Under accrual accounting, when is revenue recorded?", back: "When it's earned (goods/services delivered) — not when cash is received." },
    { id: "f4",  tag: "Revenue", front: "State the revenue recognition principle.", back: "Recognize revenue when earned, regardless of when payment is collected." },
    { id: "f5",  tag: "Revenue", front: "A customer pays in advance for a future service. What's recorded?", back: "Dr Cash / Cr Unearned Revenue (a liability). It becomes revenue only on delivery." },
    { id: "f6",  tag: "COGS", front: "What is COGS?", back: "Cost of goods sold — the direct cost (materials, direct labor, production) of the items actually sold in the period." },
    { id: "f7",  tag: "COGS", front: "Product cost vs. period cost?", back: "Product costs sit in inventory and hit COGS when the item sells; period costs (rent, admin) expense in the period incurred." },
    { id: "f8",  tag: "Profit tiers", front: "Formula for gross profit?", back: "Gross Profit = Revenue − COGS." },
    { id: "f9",  tag: "Profit tiers", front: "Formula for operating income (EBIT)?", back: "EBIT = Gross Profit − Operating Expenses." },
    { id: "f10", tag: "Profit tiers", front: "What's in operating expenses?", back: "SG&A (selling, general & admin), R&D, and depreciation & amortization." },
    { id: "f11", tag: "Profit tiers", front: "Formula for pretax income and net income?", back: "Pretax = EBIT − Interest. Net income = Pretax − Taxes." },
    { id: "f12", tag: "Margins", front: "Formula for gross, operating, and net margin?", back: "Each is the profit tier ÷ Revenue: gross profit/rev, EBIT/rev, net income/rev." },
    { id: "f13", tag: "EBITDA", front: "Formula for EBITDA?", back: "EBITDA = EBIT + Depreciation & Amortization (adds back non-cash D&A)." },
    { id: "f14", tag: "EBITDA", front: "Why do analysts use EBITDA — and what's the catch?", back: "It proxies operating cash generation (strips financing, taxes, non-cash D&A). Catch: it ignores capex and isn't a defined GAAP measure." },
    { id: "f15", tag: "Concepts", front: "Why can a profitable company still be short on cash?", back: "Accrual revenue/expenses ≠ cash timing (e.g. sales on credit). The cash flow statement reconciles the gap." },
    { id: "f16", tag: "Links", front: "Where does net income go after the income statement?", back: "Into Retained Earnings (equity) and as the first line of the cash flow statement." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "The income statement reports results over…",
      options: ["A single point in time", "A period of time", "The life of the company", "Only the fiscal year-end day"],
      answer: 1,
      explain: "The income statement covers a period (quarter, year). The balance sheet is the point-in-time statement.",
    },
    {
      id: "q2",
      scenario: "A gym collects \$1,200 in January for an annual membership it will deliver over the next 12 months.",
      prompt: "How much revenue is recognized in January?",
      options: ["\$1,200 — the cash was received", "\$100 — one month earned", "\$0 — nothing is earned yet in advance", "\$1,200, but only if the member attends"],
      answer: 1,
      explain: "Revenue is earned as the service is delivered: \$1,200 ÷ 12 = \$100 in January. The remaining \$1,100 sits in Unearned Revenue (a liability).",
    },
    {
      id: "q3",
      scenario: "Revenue \$500,000; COGS \$300,000; operating expenses \$100,000.",
      prompt: "What is operating income (EBIT)?",
      options: ["\$200,000", "\$100,000", "\$400,000", "\$50,000"],
      answer: 1,
      explain: "Gross profit = 500 − 300 = 200. EBIT = 200 − 100 = \$100,000.",
    },
    {
      id: "q4",
      prompt: "Which items sit BELOW operating income (EBIT) on the income statement?",
      options: ["COGS and SG&A", "Interest and taxes", "Revenue and gross profit", "R&D and depreciation"],
      answer: 1,
      explain: "EBIT is the operating/non-operating dividing line. Interest (financing) and taxes come below it; COGS, SG&A, R&D, and D&A are above it.",
    },
    {
      id: "q5",
      scenario: "EBIT \$100,000; depreciation & amortization \$30,000.",
      prompt: "What is EBITDA?",
      options: ["\$70,000", "\$100,000", "\$130,000", "\$30,000"],
      answer: 2,
      explain: "EBITDA = EBIT + D&A = 100,000 + 30,000 = \$130,000. You add non-cash D&A back.",
    },
    {
      id: "q6",
      scenario: "Revenue \$500,000; net income \$60,000.",
      prompt: "What is the net margin?",
      options: ["6%", "12%", "60%", "8.3%"],
      answer: 1,
      explain: "Net margin = net income ÷ revenue = 60,000 ÷ 500,000 = 12%.",
    },
    {
      id: "q7",
      prompt: "A sale is made on credit (customer will pay in 30 days). When is the revenue recognized?",
      options: ["When the cash is collected in 30 days", "Now, when the goods/services are delivered", "Split evenly over the 30 days", "Never, until cash clears"],
      answer: 1,
      explain: "Accrual/revenue recognition: revenue is earned on delivery. You record revenue now and an Accounts Receivable; cash timing is separate.",
    },
    {
      id: "q8",
      prompt: "Which statement about EBITDA is TRUE?",
      options: [
        "It is a strictly defined GAAP line item",
        "It includes depreciation and amortization",
        "It ignores capital expenditures needed to maintain assets",
        "It is always equal to operating cash flow",
      ],
      answer: 2,
      explain: "EBITDA adds D&A back, so it ignores the real cost of maintaining assets (capex). It is not a defined GAAP measure and is only a rough cash proxy.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "journal",
      prompt: "A customer prepays \$1,200 for services to be delivered later. Record the entry when the cash is collected.",
      amount: "\$1,200",
      accounts: ["Cash", "Unearned Revenue", "Revenue", "Accounts Receivable", "Accounts Payable", "Cost of Goods Sold"],
      answer: { debit: "Cash", credit: "Unearned Revenue" },
      explain: "Cash (asset) up → debit. Nothing is earned yet, so the obligation Unearned Revenue (a liability) → credit. Not revenue.",
    },
    {
      id: "d2",
      type: "journal",
      prompt: "Later, the company delivers the service it was prepaid \$1,200 for. Record the revenue-recognition entry.",
      amount: "\$1,200",
      accounts: ["Cash", "Unearned Revenue", "Revenue", "Accounts Receivable", "Accounts Payable", "Cost of Goods Sold"],
      answer: { debit: "Unearned Revenue", credit: "Revenue" },
      explain: "The obligation is satisfied → debit (reduce) Unearned Revenue. Revenue is now earned → credit Revenue.",
    },
    {
      id: "d3",
      type: "journal",
      prompt: "The company sells inventory that cost \$300 to produce. Record the COGS side of the sale (the cost, not the revenue).",
      amount: "\$300",
      accounts: ["Cost of Goods Sold", "Inventory", "Cash", "Revenue", "Accounts Receivable", "Accounts Payable"],
      answer: { debit: "Cost of Goods Sold", credit: "Inventory" },
      explain: "The cost of the sold item moves from the balance sheet to the income statement: debit COGS (an expense), credit Inventory (asset down).",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Build the income statement from the top line to net income. Income tax is 25% of pretax income.",
      rows: [
        { label: "Revenue", value: 500000, given: true },
        { label: "Cost of goods sold", value: 300000, given: true },
        { label: "Gross profit", key: "gp", answer: 200000, hint: "Revenue − COGS" },
        { label: "Operating expenses", value: 100000, given: true },
        { label: "Operating income (EBIT)", key: "ebit", answer: 100000, hint: "Gross profit − OpEx" },
        { label: "Interest expense", value: 20000, given: true },
        { label: "Pretax income", key: "ebt", answer: 80000, hint: "EBIT − Interest" },
        { label: "Income tax (25% of pretax)", key: "tax", answer: 20000, hint: "Pretax × 25%" },
        { label: "Net income", key: "ni", answer: 60000, hint: "Pretax − Tax" },
      ],
      prefix: "$",
      explain: "GP 200k → EBIT 100k → pretax 80k → tax 20k → net income \$60,000. Each tier peels off one layer of cost.",
    },
    {
      id: "d5",
      type: "model",
      prompt: "Compute the profit margins for the company above. Enter each as a whole-number percent.",
      rows: [
        { label: "Revenue", value: 500000, given: true },
        { label: "Gross profit", value: 200000, given: true },
        { label: "Operating income (EBIT)", value: 100000, given: true },
        { label: "Net income", value: 60000, given: true },
        { label: "Gross margin (%)", key: "gm", answer: 40, hint: "Gross profit / Revenue × 100" },
        { label: "Operating margin (%)", key: "om", answer: 20, hint: "EBIT / Revenue × 100" },
        { label: "Net margin (%)", key: "nm", answer: 12, hint: "Net income / Revenue × 100" },
      ],
      prefix: "",
      explain: "Gross 200/500 = 40%, operating 100/500 = 20%, net 60/500 = 12%. Margins let you compare companies of any size.",
    },
    {
      id: "d6",
      type: "model",
      prompt: "Compute EBITDA from operating income and non-cash charges.",
      rows: [
        { label: "Operating income (EBIT)", value: 100000, given: true },
        { label: "Depreciation & amortization", value: 30000, given: true },
        { label: "EBITDA", key: "ebitda", answer: 130000, hint: "EBIT + D&A" },
      ],
      prefix: "$",
      explain: "EBITDA = 100,000 + 30,000 = \$130,000. You add the non-cash D&A back to EBIT.",
    },
    {
      id: "d7",
      type: "model",
      prompt: "A profitable month, but watch the cash. Of \$400,000 in revenue, \$120,000 was sold on credit (not yet collected). Cash expenses were \$250,000. Compute accrual net income vs. cash collected.",
      rows: [
        { label: "Revenue (earned)", value: 400000, given: true },
        { label: "Cash expenses", value: 250000, given: true },
        { label: "Accrual profit (Revenue − Expenses)", key: "prof", answer: 150000, hint: "400,000 − 250,000" },
        { label: "Revenue collected in cash", key: "cashrev", answer: 280000, hint: "400,000 − 120,000 on credit" },
        { label: "Net cash this month (collected − cash expenses)", key: "netcash", answer: 30000, hint: "280,000 − 250,000" },
      ],
      prefix: "$",
      explain: "Accrual profit is \$150,000, but only \$30,000 of cash came in — the \$120,000 sold on credit is stuck in Accounts Receivable. Profit ≠ cash.",
    },
  ],
});
