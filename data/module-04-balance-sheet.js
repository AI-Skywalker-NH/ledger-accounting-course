/* ===========================================================================
   Module 4 — The Balance Sheet in Depth
   =========================================================================== */
Ledger.register({
  id: "module-04",
  title: "The Balance Sheet in Depth",
  subtitle:
    "The point-in-time snapshot of what a company owns and owes — organized by liquidity, and always in balance.",
  est: "~55 min",
  objectives: [
    "Read the classified balance sheet and explain why it always balances.",
    "Split assets and liabilities into current vs. non-current.",
    "Identify the components of shareholders' equity.",
    "Compute working capital and the current ratio.",
    "Explain what book value does and does not tell you (historical cost).",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Anatomy of the Balance Sheet",
      html: `
        <span class="eyebrow">Lesson 1 of 6</span>
        <h2>Anatomy of the Balance Sheet</h2>
        <p>The <span class="kt">balance sheet</span> is a snapshot at a single
        <em>point in time</em> — "as of" a specific date — of everything the company owns and everything
        it owes. It is the accounting equation, written out as a report:</p>

        <div class="equation">Assets = Liabilities + Equity</div>

        <p>Unlike the income statement, which covers a <em>period</em>, the balance sheet is a still
        photograph. It answers: on this date, what does the business own, who financed it, and what's
        left for the owners?</p>

        <h3>Two sides, always equal</h3>
        <ul>
          <li>The <strong>left side</strong> (or top) lists <strong>assets</strong> — the resources.</li>
          <li>The <strong>right side</strong> (or bottom) lists <strong>liabilities and equity</strong>
          — the claims on those resources.</li>
        </ul>
        <p>Every asset was financed by a creditor (liability) or an owner (equity), so the two sides are
        equal <em>by construction</em>. That's why it's called a <em>balance</em> sheet.</p>

        <div class="callout">
          <strong>Ordering by liquidity:</strong> within each section, items are listed from most to
          least liquid — Cash first, then assets that convert to cash soonest, down to long-lived assets
          like buildings. The same logic orders liabilities from soonest-due to latest.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Assets: Current vs. Non-Current",
      html: `
        <span class="eyebrow">Lesson 2 of 6</span>
        <h2>Assets: Current vs. Non-Current</h2>
        <p>A <span class="kt">classified</span> balance sheet splits assets by how soon they'll turn
        into cash or be used up. The dividing line is <strong>one year</strong> (or one operating cycle,
        if longer).</p>

        <h3>Current assets — used or converted within a year</h3>
        <table>
          <tr><th>Asset</th><th>Note</th></tr>
          <tr><td>Cash &amp; equivalents</td><td>The most liquid; listed first.</td></tr>
          <tr><td>Accounts Receivable</td><td>Cash owed by customers, due soon.</td></tr>
          <tr><td>Inventory</td><td>Goods held for sale.</td></tr>
          <tr><td>Prepaid expenses</td><td>Costs paid in advance (e.g. prepaid insurance).</td></tr>
        </table>

        <h3>Non-current (long-term) assets</h3>
        <table>
          <tr><th>Asset</th><th>Note</th></tr>
          <tr><td>Property, plant &amp; equipment (PP&amp;E)</td><td>Shown <em>net</em> of accumulated depreciation.</td></tr>
          <tr><td>Intangible assets</td><td>Patents, trademarks, software.</td></tr>
          <tr><td>Goodwill</td><td>Premium paid to acquire a business above its net asset value.</td></tr>
        </table>

        <div class="callout">
          <strong>Why the split matters:</strong> current assets are the raw material of short-term
          liquidity. Analysts compare them against current liabilities to judge whether a company can
          pay its near-term bills (Lesson 5).
        </div>
      `,
    },
    {
      id: "l3",
      title: "Liabilities: Current vs. Non-Current",
      html: `
        <span class="eyebrow">Lesson 3 of 6</span>
        <h2>Liabilities: Current vs. Non-Current</h2>
        <p>Liabilities use the same one-year dividing line — split by when the obligation comes due.</p>

        <h3>Current liabilities — due within a year</h3>
        <table>
          <tr><th>Liability</th><th>Note</th></tr>
          <tr><td>Accounts Payable</td><td>Owed to suppliers for purchases on credit.</td></tr>
          <tr><td>Accrued expenses</td><td>Incurred but not yet paid (e.g. wages payable).</td></tr>
          <tr><td>Unearned revenue</td><td>Cash collected before delivering goods/services.</td></tr>
          <tr><td>Current portion of long-term debt</td><td>The slice of a loan due within the year.</td></tr>
        </table>

        <h3>Non-current liabilities</h3>
        <ul>
          <li><strong>Long-term debt</strong> — loans and bonds due beyond one year.</li>
          <li><strong>Deferred tax liabilities</strong>, long-term lease obligations, and similar.</li>
        </ul>

        <div class="callout">
          <strong>Watch the reclassification:</strong> as a long-term loan approaches maturity, the
          portion due within twelve months is moved into <em>current</em> liabilities. Same debt,
          different bucket — timing is everything on the balance sheet.
        </div>
      `,
    },
    {
      id: "l4",
      title: "The Equity Section",
      html: `
        <span class="eyebrow">Lesson 4 of 6</span>
        <h2>The Equity Section</h2>
        <p><span class="kt">Shareholders' equity</span> is the owners' residual claim — assets minus
        liabilities. For a corporation it breaks into a few standard pieces:</p>

        <table>
          <tr><th>Component</th><th>What it is</th></tr>
          <tr><td>Common stock &amp; APIC</td><td><span class="kt">Contributed capital</span> — cash owners paid in when they bought shares. (APIC = additional paid-in capital, the amount above par value.)</td></tr>
          <tr><td>Retained earnings</td><td>Cumulative net income the company has kept rather than paid out as dividends.</td></tr>
          <tr><td>Treasury stock</td><td>Shares the company bought back. A <em>contra-equity</em> account — it <strong>reduces</strong> equity.</td></tr>
        </table>

        <p><span class="kt">Retained earnings</span> is the hinge between the statements. It rolls
        forward every period:</p>
        <div class="equation">Beginning RE + Net Income − Dividends = Ending RE</div>

        <div class="callout">
          <strong>Two ways equity grows:</strong> owners put money in (contributed capital) or the
          business earns and keeps it (retained earnings). Dividends and buybacks (treasury stock) send
          it back out.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Liquidity: Working Capital & the Current Ratio",
      html: `
        <span class="eyebrow">Lesson 5 of 6</span>
        <h2>Liquidity: Working Capital &amp; the Current Ratio</h2>
        <p>The classified split exists so you can measure <span class="kt">liquidity</span> — whether a
        company can cover its near-term obligations. Two staples:</p>

        <div class="equation">Working Capital = Current Assets − Current Liabilities</div>
        <p>Positive working capital means current assets more than cover the bills due within a year — a
        cushion. Negative working capital can signal strain (though some efficient businesses run it
        deliberately).</p>

        <div class="equation">Current Ratio = Current Assets ÷ Current Liabilities</div>
        <p>Expressed as a multiple. A current ratio of 2.0 means \$2 of current assets for every \$1 of
        current liabilities. Higher generally means safer short-term liquidity; very high can mean idle,
        under-deployed assets.</p>

        <div class="callout">
          <strong>Example:</strong> Current assets \$120,000, current liabilities \$40,000 →
          working capital \$80,000 and a current ratio of 3.0.
        </div>
      `,
    },
    {
      id: "l6",
      title: "What the Balance Sheet Does & Doesn't Tell You",
      html: `
        <span class="eyebrow">Lesson 6 of 6</span>
        <h2>What the Balance Sheet Does &amp; Doesn't Tell You</h2>

        <h3>Book value vs. market value</h3>
        <p>Most assets are carried at <span class="kt">historical cost</span> — what the company paid,
        less depreciation — not what they're worth today. So the <span class="kt">book value</span> of
        equity (assets − liabilities on the books) usually differs, often sharply, from the company's
        <strong>market value</strong>. A brand or a piece of land bought decades ago may be worth far
        more than its recorded cost.</p>

        <h3>What it can miss</h3>
        <ul>
          <li>Internally-built intangibles (a self-grown brand) generally aren't recorded as assets.</li>
          <li>Some obligations can be structured off the balance sheet.</li>
          <li>It's a single date — it says nothing about the flow of activity between dates.</li>
        </ul>

        <h3>How it links to the other statements</h3>
        <ul>
          <li><strong>Cash</strong> (top asset) ties to the ending cash on the statement of cash flows.</li>
          <li><strong>Retained earnings</strong> ties to net income from the income statement.</li>
        </ul>

        <div class="callout">
          <strong>Takeaway:</strong> the balance sheet is an authoritative record of a company's
          <em>accounting</em> position at a moment in time — not a valuation. Bridging book value to
          market value is exactly the work of the modeling course ahead.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Structure", front: "What does the balance sheet show, and as of when?", back: "What a company owns and owes at a single point in time (an 'as of' date). Assets = Liabilities + Equity." },
    { id: "f2",  tag: "Structure", front: "Why does the balance sheet always balance?", back: "Every asset is financed by a creditor (liability) or an owner (equity), so the two sides are equal by construction." },
    { id: "f3",  tag: "Classification", front: "What separates a current asset from a non-current one?", back: "Whether it will be converted to cash or used up within one year (or one operating cycle, if longer)." },
    { id: "f4",  tag: "Assets", front: "Name the typical current assets, most-liquid first.", back: "Cash & equivalents, Accounts Receivable, Inventory, Prepaid expenses." },
    { id: "f5",  tag: "Assets", front: "Name typical non-current assets.", back: "PP&E (net of depreciation), intangible assets, and goodwill." },
    { id: "f6",  tag: "Assets", front: "What is goodwill?", back: "The premium paid to acquire a business above the fair value of its net identifiable assets." },
    { id: "f7",  tag: "Liabilities", front: "Name typical current liabilities.", back: "Accounts Payable, accrued expenses (e.g. wages payable), unearned revenue, and the current portion of long-term debt." },
    { id: "f8",  tag: "Liabilities", front: "What happens to long-term debt as it nears maturity?", back: "The portion due within 12 months is reclassified from non-current to current liabilities." },
    { id: "f9",  tag: "Equity", front: "What are the main components of shareholders' equity?", back: "Contributed capital (common stock + APIC), retained earnings, and treasury stock (contra-equity)." },
    { id: "f10", tag: "Equity", front: "What is retained earnings?", back: "Cumulative net income the company has kept rather than distributed as dividends." },
    { id: "f11", tag: "Equity", front: "What is treasury stock and how does it affect equity?", back: "Repurchased shares. It's a contra-equity account — it reduces total equity." },
    { id: "f12", tag: "Liquidity", front: "Formula for working capital?", back: "Working Capital = Current Assets − Current Liabilities." },
    { id: "f13", tag: "Liquidity", front: "Formula for the current ratio, and what a 2.0 means?", back: "Current Assets ÷ Current Liabilities. 2.0 = $2 of current assets for every $1 of current liabilities." },
    { id: "f14", tag: "Valuation", front: "Book value vs. market value — why do they differ?", back: "Assets are carried at historical cost (less depreciation), not today's value, so book equity usually differs from market value." },
    { id: "f15", tag: "Links", front: "Which balance-sheet lines tie to the other statements?", back: "Cash ties to ending cash on the cash flow statement; Retained Earnings ties to net income on the income statement." },
    { id: "f16", tag: "Limits", front: "Name something the balance sheet typically does NOT capture.", back: "Internally-built intangibles (e.g. a self-grown brand), some off-balance-sheet obligations, and any activity between dates." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "The balance sheet reports a company's position…",
      options: ["Over a period of time", "At a single point in time", "Only at fiscal year-end", "Across its entire history"],
      answer: 1,
      explain: "The balance sheet is a point-in-time snapshot ('as of' a date). The income statement and cash flow statement cover periods.",
    },
    {
      id: "q2",
      prompt: "Which of these is a CURRENT liability?",
      options: ["Long-term bonds due in 5 years", "Goodwill", "Unearned revenue", "Common stock"],
      answer: 2,
      explain: "Unearned revenue is an obligation to deliver, typically within a year → current liability. Goodwill and common stock aren't liabilities; the 5-year bond is non-current.",
    },
    {
      id: "q3",
      prompt: "Which item is NOT part of shareholders' equity?",
      options: ["Retained earnings", "Common stock & APIC", "Accounts payable", "Treasury stock"],
      answer: 2,
      explain: "Accounts payable is a liability. Retained earnings, common stock/APIC, and treasury stock (contra-equity) are all equity components.",
    },
    {
      id: "q4",
      scenario: "Current assets \$120,000; current liabilities \$40,000.",
      prompt: "What is working capital?",
      options: ["\$160,000", "\$80,000", "\$3,000", "\$40,000"],
      answer: 1,
      explain: "Working capital = current assets − current liabilities = 120,000 − 40,000 = \$80,000.",
    },
    {
      id: "q5",
      scenario: "Current assets \$120,000; current liabilities \$40,000.",
      prompt: "What is the current ratio?",
      options: ["0.33", "2.0", "3.0", "80,000"],
      answer: 2,
      explain: "Current ratio = current assets ÷ current liabilities = 120,000 ÷ 40,000 = 3.0.",
    },
    {
      id: "q6",
      prompt: "Most assets on the balance sheet are recorded at…",
      options: ["Today's market value", "Historical cost (less depreciation)", "Replacement cost", "The owner's estimate"],
      answer: 1,
      explain: "Assets are generally carried at historical cost less accumulated depreciation — which is why book value usually differs from market value.",
    },
    {
      id: "q7",
      scenario: "A company has total assets of \$420,000 and total equity of \$260,000.",
      prompt: "What are its total liabilities?",
      options: ["\$680,000", "\$160,000", "\$260,000", "Cannot be determined"],
      answer: 1,
      explain: "Rearranging the equation: Liabilities = Assets − Equity = 420,000 − 260,000 = \$160,000.",
    },
    {
      id: "q8",
      prompt: "How does buying back shares (treasury stock) affect the balance sheet?",
      options: ["Increases equity", "Decreases equity — it's a contra-equity account", "Increases liabilities", "Has no effect on equity"],
      answer: 1,
      explain: "Treasury stock is contra-equity: repurchasing shares reduces total shareholders' equity (and cash on the asset side).",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "journal",
      prompt: "The company issues common stock to investors for \$60,000 cash. Record the entry.",
      amount: "\$60,000",
      accounts: ["Cash", "Common Stock", "Retained Earnings", "Accounts Payable", "Note Payable", "Treasury Stock"],
      answer: { debit: "Cash", credit: "Common Stock" },
      explain: "Cash (asset) up → debit. Contributed capital via Common Stock (equity) up → credit.",
    },
    {
      id: "d2",
      type: "journal",
      prompt: "The company buys \$180,000 of equipment, financed entirely with a long-term note (no cash paid now). Record the entry.",
      amount: "\$180,000",
      accounts: ["Cash", "Equipment", "Note Payable", "Accounts Payable", "Common Stock", "Retained Earnings"],
      answer: { debit: "Equipment", credit: "Note Payable" },
      explain: "Equipment (non-current asset) up → debit. Note Payable (non-current liability) up → credit. Debt financed the asset.",
    },
    {
      id: "d3",
      type: "journal",
      prompt: "Employees have earned \$15,000 of wages that will be paid next month. Record the accrual at period-end.",
      amount: "\$15,000",
      accounts: ["Wages Expense", "Wages Payable", "Cash", "Accounts Receivable", "Revenue", "Common Stock"],
      answer: { debit: "Wages Expense", credit: "Wages Payable" },
      explain: "The cost is incurred now → debit Wages Expense. Cash isn't paid yet, so an accrued liability, Wages Payable → credit.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Total the asset side of a classified balance sheet.",
      rows: [
        { label: "Cash", value: 40000, given: true },
        { label: "Accounts Receivable", value: 30000, given: true },
        { label: "Inventory", value: 50000, given: true },
        { label: "Total current assets", key: "tca", answer: 120000, hint: "sum the current assets" },
        { label: "Property, plant & equipment (net)", value: 180000, given: true },
        { label: "Total assets", key: "ta", answer: 300000, hint: "current + non-current assets" },
      ],
      prefix: "$",
      explain: "Current assets = 40 + 30 + 50 = 120k. Total assets = 120k + 180k = \$300,000.",
    },
    {
      id: "d5",
      type: "model",
      prompt: "Total the liabilities-and-equity side, then confirm it balances against total assets of \$300,000.",
      rows: [
        { label: "Accounts Payable", value: 25000, given: true },
        { label: "Accrued wages", value: 15000, given: true },
        { label: "Long-term debt", value: 110000, given: true },
        { label: "Total liabilities", key: "tl", answer: 150000, hint: "sum all liabilities" },
        { label: "Common stock", value: 60000, given: true },
        { label: "Retained earnings", value: 90000, given: true },
        { label: "Total equity", key: "te", answer: 150000, hint: "sum the equity components" },
        { label: "Total liabilities + equity", key: "tle", answer: 300000, hint: "should equal total assets" },
      ],
      prefix: "$",
      explain: "Liabilities = 25 + 15 + 110 = 150k. Equity = 60 + 90 = 150k. L + E = \$300,000 = total assets. It balances.",
    },
    {
      id: "d6",
      type: "model",
      prompt: "Compute the two staple liquidity measures. Enter the current ratio as a multiple (e.g. 2 or 1.5).",
      rows: [
        { label: "Total current assets", value: 120000, given: true },
        { label: "Total current liabilities", value: 40000, given: true },
        { label: "Working capital", key: "wc", answer: 80000, hint: "current assets − current liabilities" },
        { label: "Current ratio", key: "cr", answer: 3, hint: "current assets ÷ current liabilities" },
      ],
      prefix: "$",
      explain: "Working capital = 120,000 − 40,000 = \$80,000. Current ratio = 120,000 ÷ 40,000 = 3.0.",
    },
    {
      id: "d7",
      type: "model",
      prompt: "Use the accounting equation to solve for the missing side.",
      rows: [
        { label: "Total assets", value: 420000, given: true },
        { label: "Total equity", value: 260000, given: true },
        { label: "Total liabilities", key: "tl", answer: 160000, hint: "Assets − Equity" },
      ],
      prefix: "$",
      explain: "Liabilities = Assets − Equity = 420,000 − 260,000 = \$160,000.",
    },
  ],
});
