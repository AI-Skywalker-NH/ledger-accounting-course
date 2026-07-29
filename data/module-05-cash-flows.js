/* ===========================================================================
   Module 5 — The Statement of Cash Flows
   =========================================================================== */
Ledger.register({
  id: "module-05",
  title: "The Statement of Cash Flows",
  subtitle:
    "Where the cash actually went — reconciling profit to cash across operating, investing, and financing activities.",
  est: "~60 min",
  objectives: [
    "Explain why a profitable company can still run out of cash.",
    "Describe the three sections: operating, investing, financing.",
    "Build cash from operations using the indirect method.",
    "Apply the working-capital rule (assets up = cash down; liabilities up = cash up).",
    "Compute the net change in cash and free cash flow.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Why a Cash Flow Statement?",
      html: `
        <span class="eyebrow">Lesson 1 of 6</span>
        <h2>Why a Cash Flow Statement?</h2>
        <p>The income statement is built on <em>accrual</em> accounting — revenue when earned, expenses
        when incurred — so net income almost never equals the cash that moved. A company can report a
        healthy profit while its bank balance falls (sales made on credit, inventory piling up), or
        report a loss while cash rises. The <span class="kt">statement of cash flows (CFS)</span> exists
        to bridge that gap.</p>

        <div class="callout">
          <strong>The core idea:</strong> the CFS explains the change in the Cash line on the balance
          sheet — from beginning cash to ending cash — by grouping every cash movement into three
          buckets.
        </div>

        <h3>The three sections</h3>
        <table>
          <tr><th>Section</th><th>Answers</th></tr>
          <tr><td><strong>Operating (CFO)</strong></td><td>Cash from running the core business.</td></tr>
          <tr><td><strong>Investing (CFI)</strong></td><td>Cash spent on / received from long-term assets.</td></tr>
          <tr><td><strong>Financing (CFF)</strong></td><td>Cash from / to lenders and owners.</td></tr>
        </table>

        <div class="equation">CFO + CFI + CFF = Net Change in Cash</div>

        <p>Add the net change to beginning cash and you get ending cash — which must match the Cash line
        on the balance sheet. That tie-out is the whole point.</p>
      `,
    },
    {
      id: "l2",
      title: "Operating Activities & the Indirect Method",
      html: `
        <span class="eyebrow">Lesson 2 of 6</span>
        <h2>Operating Activities &amp; the Indirect Method</h2>
        <p>Almost every real company presents operating cash using the <span class="kt">indirect
        method</span>: start with net income, then adjust it back to a cash number in two steps.</p>

        <h3>Step 1 — add back non-cash expenses</h3>
        <p>Some expenses reduced net income but moved no cash. The biggest is
        <strong>depreciation &amp; amortization</strong>. Add it back. (Stock-based compensation is
        another common add-back.)</p>

        <h3>Step 2 — adjust for changes in working capital</h3>
        <p>Accrual net income counts a credit sale as revenue even though no cash arrived. We correct
        for that using one rule:</p>
        <div class="equation">Assets up → cash down &nbsp;|&nbsp; Liabilities up → cash down? No — up</div>
        <table>
          <tr><th>Change</th><th>Effect on cash</th><th>Why</th></tr>
          <tr><td>Accounts Receivable ↑</td><td>Subtract</td><td>Sales booked but not yet collected.</td></tr>
          <tr><td>Inventory ↑</td><td>Subtract</td><td>Cash spent building stock not yet sold.</td></tr>
          <tr><td>Accounts Payable ↑</td><td>Add</td><td>Bills incurred but not yet paid — cash conserved.</td></tr>
        </table>

        <div class="callout">
          <strong>Memorize this:</strong> an increase in a current <em>asset</em> uses cash (subtract);
          an increase in a current <em>liability</em> is a source of cash (add). Decreases flip the
          sign.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Investing Activities",
      html: `
        <span class="eyebrow">Lesson 3 of 6</span>
        <h2>Investing Activities</h2>
        <p><span class="kt">Investing activities (CFI)</span> capture cash spent on, or received from,
        long-term assets and investments — the company's bets on its future capacity.</p>

        <table>
          <tr><th>Activity</th><th>Cash effect</th></tr>
          <tr><td>Capital expenditures (buying PP&amp;E)</td><td>Outflow (−)</td></tr>
          <tr><td>Selling PP&amp;E or a business unit</td><td>Inflow (+)</td></tr>
          <tr><td>Buying investments/securities</td><td>Outflow (−)</td></tr>
          <tr><td>Acquiring another company</td><td>Outflow (−)</td></tr>
        </table>

        <p><span class="kt">Capital expenditures ("capex")</span> — cash to buy or upgrade property,
        plant, and equipment — is usually the largest line here, and a critical one: it's the cash cost
        of maintaining and growing the asset base that EBITDA conveniently ignores.</p>

        <div class="callout">
          <strong>Sign convention:</strong> spending cash is negative, receiving cash is positive.
          A capital-intensive, growing company typically shows large negative CFI — that's investment,
          not necessarily trouble.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Financing Activities",
      html: `
        <span class="eyebrow">Lesson 4 of 6</span>
        <h2>Financing Activities</h2>
        <p><span class="kt">Financing activities (CFF)</span> track cash exchanged with the two groups
        that fund the business: <strong>lenders</strong> and <strong>owners</strong>.</p>

        <table>
          <tr><th>Activity</th><th>Cash effect</th></tr>
          <tr><td>Borrowing / issuing debt</td><td>Inflow (+)</td></tr>
          <tr><td>Repaying debt principal</td><td>Outflow (−)</td></tr>
          <tr><td>Issuing stock</td><td>Inflow (+)</td></tr>
          <tr><td>Repurchasing stock (buybacks)</td><td>Outflow (−)</td></tr>
          <tr><td>Paying dividends</td><td>Outflow (−)</td></tr>
        </table>

        <div class="callout">
          <strong>Note the split:</strong> borrowing money is financing (a cash inflow now), but the
          <em>interest</em> you pay on that debt typically runs through operating cash flow. Repaying the
          <em>principal</em> is financing. Keep principal and interest separate.
        </div>

        <p>Together, CFO, CFI, and CFF tell a story: does the business generate enough operating cash to
        fund its own investment, or is it leaning on lenders and shareholders to stay afloat?</p>
      `,
    },
    {
      id: "l5",
      title: "Putting It Together",
      html: `
        <span class="eyebrow">Lesson 5 of 6</span>
        <h2>Putting It Together</h2>
        <p>Sum the three sections to get the net change in cash, then reconcile to the balance sheet.</p>

        <div class="equation">Beginning Cash + CFO + CFI + CFF = Ending Cash</div>

        <table>
          <tr><th>Line</th><th style="text-align:right">Amount</th></tr>
          <tr><td>Cash from operations (CFO)</td><td style="text-align:right">83,000</td></tr>
          <tr><td>Cash from investing (CFI)</td><td style="text-align:right">(50,000)</td></tr>
          <tr><td>Cash from financing (CFF)</td><td style="text-align:right">(20,000)</td></tr>
          <tr><td><strong>Net change in cash</strong></td><td style="text-align:right"><strong>13,000</strong></td></tr>
          <tr><td>Beginning cash</td><td style="text-align:right">40,000</td></tr>
          <tr><td><strong>Ending cash</strong></td><td style="text-align:right"><strong>53,000</strong></td></tr>
        </table>

        <p>That \$53,000 ending cash is <em>exactly</em> the Cash line on the period-end balance sheet.
        Parentheses denote outflows — a standard accounting convention for negatives.</p>

        <div class="callout">
          <strong>The reconciliation is the audit:</strong> if ending cash from the CFS doesn't match
          the balance-sheet Cash, something is wrong. This tie-out is the first thing a model-builder
          checks.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Reading It: Free Cash Flow & Earnings Quality",
      html: `
        <span class="eyebrow">Lesson 6 of 6</span>
        <h2>Reading It: Free Cash Flow &amp; Earnings Quality</h2>

        <h3>Free cash flow</h3>
        <p>Operating cash flow tells you what the core business generated; but the business must also
        reinvest to keep running. <span class="kt">Free cash flow (FCF)</span> nets out that
        reinvestment:</p>
        <div class="equation">Free Cash Flow = Cash from Operations − Capital Expenditures</div>
        <p>FCF is the cash actually left over for lenders and owners after keeping the lights on — the
        number valuation ultimately cares about.</p>

        <h3>Quality of earnings</h3>
        <p>Comparing CFO to net income is a health check. If a company reports rising profits but its
        operating cash flow is flat or falling, earnings may be low-quality — propped up by receivables
        that aren't converting to cash, or by aggressive accruals. Cash is harder to fake than accrual
        profit.</p>

        <div class="callout">
          <strong>The banker's instinct:</strong> "show me the cash." Profit is an opinion shaped by
          accounting choices; cash flow is closer to fact. The CFS is where you pressure-test the income
          statement.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Purpose", front: "Why does the statement of cash flows exist?", back: "Accrual net income ≠ cash. The CFS reconciles beginning cash to ending cash, explaining where cash actually moved." },
    { id: "f2",  tag: "Structure", front: "What are the three sections of the CFS?", back: "Operating (CFO), Investing (CFI), and Financing (CFF)." },
    { id: "f3",  tag: "Indirect", front: "Under the indirect method, what's the starting line of CFO?", back: "Net income — then adjust for non-cash items and changes in working capital." },
    { id: "f4",  tag: "Indirect", front: "Why is depreciation added back in CFO?", back: "It reduced net income but moved no cash — it's a non-cash expense, so it's added back." },
    { id: "f5",  tag: "Working capital", front: "The working-capital cash rule?", back: "An increase in a current asset uses cash (subtract); an increase in a current liability provides cash (add). Decreases flip the sign." },
    { id: "f6",  tag: "Working capital", front: "Accounts Receivable increases. Effect on operating cash?", back: "Subtract — revenue was booked but the cash hasn't been collected yet." },
    { id: "f7",  tag: "Working capital", front: "Accounts Payable increases. Effect on operating cash?", back: "Add — expenses were incurred but not yet paid, so cash was conserved." },
    { id: "f8",  tag: "Investing", front: "What goes in investing activities (CFI)?", back: "Cash for/from long-term assets: capex (buying PP&E), sales of assets, buying/selling investments, acquisitions." },
    { id: "f9",  tag: "Investing", front: "What is capex, and why does it matter?", back: "Capital expenditures — cash to buy/upgrade PP&E. It's the real cost of maintaining the asset base that EBITDA ignores." },
    { id: "f10", tag: "Financing", front: "What goes in financing activities (CFF)?", back: "Cash with lenders and owners: issuing/repaying debt principal, issuing/buying back stock, paying dividends." },
    { id: "f11", tag: "Financing", front: "Debt principal vs. interest — where does each go?", back: "Borrowing and repaying principal are financing (CFF); interest paid typically runs through operating (CFO)." },
    { id: "f12", tag: "Assembly", front: "Formula: net change in cash and ending cash?", back: "Net change = CFO + CFI + CFF. Ending cash = Beginning cash + net change." },
    { id: "f13", tag: "Assembly", front: "Ending cash on the CFS must equal what?", back: "The Cash line on the period-end balance sheet. That reconciliation is the key tie-out." },
    { id: "f14", tag: "FCF", front: "Formula for free cash flow (simple)?", back: "Free Cash Flow = Cash from Operations − Capital Expenditures." },
    { id: "f15", tag: "Analysis", front: "How is CFO vs. net income a quality check?", back: "Rising profits but weak/falling operating cash can signal low-quality earnings (uncollected receivables, aggressive accruals)." },
    { id: "f16", tag: "Convention", front: "What do parentheses around a cash-flow number mean?", back: "An outflow — i.e., a negative number, e.g. (50,000) = −$50,000." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "The statement of cash flows primarily explains…",
      options: ["Net income for the period", "The change in the balance-sheet Cash line", "Total revenue earned", "The company's market value"],
      answer: 1,
      explain: "The CFS reconciles beginning cash to ending cash — it explains the change in the Cash line — split into operating, investing, and financing.",
    },
    {
      id: "q2",
      prompt: "Under the indirect method, cash from operations starts with…",
      options: ["Revenue", "Ending cash", "Net income", "EBITDA"],
      answer: 2,
      explain: "The indirect method begins with net income, then adds back non-cash items and adjusts for changes in working capital.",
    },
    {
      id: "q3",
      prompt: "Accounts Receivable increased during the year. In CFO, this is…",
      options: ["Added — it's income", "Subtracted — cash hasn't been collected", "Ignored", "Added to financing"],
      answer: 1,
      explain: "An increase in a current asset uses cash: the sale is in net income but the cash hasn't arrived, so it's subtracted.",
    },
    {
      id: "q4",
      prompt: "Buying new equipment (capex) is classified as…",
      options: ["Operating outflow", "Investing outflow", "Financing outflow", "A non-cash item"],
      answer: 1,
      explain: "Capex is an investing activity — cash spent on a long-term asset. It's an outflow (negative CFI).",
    },
    {
      id: "q5",
      prompt: "Issuing new debt (borrowing) appears as…",
      options: ["Operating inflow", "Investing inflow", "Financing inflow", "Revenue"],
      answer: 2,
      explain: "Borrowing is a financing inflow. Note: repaying the principal later is a financing outflow; interest paid runs through operating.",
    },
    {
      id: "q6",
      scenario: "CFO \$83,000; CFI (\$50,000); CFF (\$20,000); beginning cash \$40,000.",
      prompt: "What is ending cash?",
      options: ["\$13,000", "\$53,000", "\$153,000", "\$40,000"],
      answer: 1,
      explain: "Net change = 83 − 50 − 20 = 13. Ending cash = 40 + 13 = \$53,000 — which must equal balance-sheet Cash.",
    },
    {
      id: "q7",
      scenario: "Cash from operations \$83,000; capital expenditures \$50,000.",
      prompt: "What is free cash flow?",
      options: ["\$133,000", "\$33,000", "\$50,000", "\$83,000"],
      answer: 1,
      explain: "Free cash flow = CFO − capex = 83,000 − 50,000 = \$33,000.",
    },
    {
      id: "q8",
      prompt: "A company reports growing net income but flat, weak operating cash flow. This may indicate…",
      options: ["Very high earnings quality", "Possible low-quality earnings", "That it has no debt", "A larger dividend"],
      answer: 1,
      explain: "A widening gap between profit and operating cash can signal low-quality earnings — e.g. uncollected receivables or aggressive accruals.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "journal",
      prompt: "Record the year's \$20,000 depreciation on equipment. (Notice: no cash account is involved.)",
      amount: "\$20,000",
      accounts: ["Depreciation Expense", "Accumulated Depreciation", "Cash", "Equipment", "Accounts Payable", "Retained Earnings"],
      answer: { debit: "Depreciation Expense", credit: "Accumulated Depreciation" },
      explain: "Debit Depreciation Expense (reduces net income); credit Accumulated Depreciation (contra-asset). No cash moves — which is exactly why it's added back in CFO.",
    },
    {
      id: "d2",
      type: "journal",
      prompt: "The company declares and immediately pays a \$10,000 cash dividend. Record it. (This will show up as a financing outflow.)",
      amount: "\$10,000",
      accounts: ["Cash", "Retained Earnings", "Dividends Payable", "Common Stock", "Revenue", "Accumulated Depreciation"],
      answer: { debit: "Retained Earnings", credit: "Cash" },
      explain: "Dividends reduce equity → debit Retained Earnings. Cash paid out → credit Cash. On the CFS this is a financing outflow.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Build cash from operations (indirect method). Enter each working-capital adjustment with the correct sign.",
      rows: [
        { label: "Net income", value: 60000, given: true },
        { label: "Add: depreciation & amortization", value: 30000, given: true },
        { label: "Accounts Receivable increased by 20,000 → cash adj.", key: "ar", answer: -20000, hint: "asset up = cash down" },
        { label: "Inventory decreased by 5,000 → cash adj.", key: "inv", answer: 5000, hint: "asset down = cash up" },
        { label: "Accounts Payable increased by 8,000 → cash adj.", key: "ap", answer: 8000, hint: "liability up = cash up" },
        { label: "Cash from operations (CFO)", key: "cfo", answer: 83000, hint: "sum everything above" },
      ],
      prefix: "$",
      explain: "60,000 + 30,000 − 20,000 + 5,000 + 8,000 = \$83,000. Assets up subtract; liabilities up add.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Assemble the full statement and reconcile to ending cash.",
      rows: [
        { label: "Cash from operations (CFO)", value: 83000, given: true },
        { label: "Cash from investing (CFI)", value: -50000, given: true },
        { label: "Cash from financing (CFF)", value: -20000, given: true },
        { label: "Net change in cash", key: "net", answer: 13000, hint: "CFO + CFI + CFF" },
        { label: "Beginning cash", value: 40000, given: true },
        { label: "Ending cash", key: "end", answer: 53000, hint: "beginning + net change" },
      ],
      prefix: "$",
      explain: "Net change = 83 − 50 − 20 = 13k. Ending cash = 40k + 13k = \$53,000, which ties to balance-sheet Cash.",
    },
    {
      id: "d5",
      type: "model",
      prompt: "Compute free cash flow.",
      rows: [
        { label: "Cash from operations", value: 83000, given: true },
        { label: "Capital expenditures", value: 50000, given: true },
        { label: "Free cash flow", key: "fcf", answer: 33000, hint: "CFO − capex" },
      ],
      prefix: "$",
      explain: "FCF = 83,000 − 50,000 = \$33,000 — cash left for lenders and owners after reinvestment.",
    },
    {
      id: "d6",
      type: "model",
      prompt: "Working-capital sign reps. For each change, enter the cash impact (negative for a use of cash).",
      rows: [
        { label: "Inventory increased by 12,000", key: "a", answer: -12000, hint: "asset up = cash down" },
        { label: "Accounts Payable decreased by 6,000", key: "b", answer: -6000, hint: "liability down = cash down" },
        { label: "Accounts Receivable decreased by 9,000", key: "c", answer: 9000, hint: "asset down = cash up" },
      ],
      prefix: "$",
      explain: "Assets up / liabilities down use cash (negative). Assets down / liabilities up provide cash (positive).",
    },
    {
      id: "d7",
      type: "model",
      prompt: "Reverse-solve: given the reconciliation, find cash from financing (CFF).",
      rows: [
        { label: "Beginning cash", value: 40000, given: true },
        { label: "Ending cash", value: 60000, given: true },
        { label: "Cash from operations (CFO)", value: 83000, given: true },
        { label: "Cash from investing (CFI)", value: -50000, given: true },
        { label: "Cash from financing (CFF)", key: "cff", answer: -13000, hint: "(Ending − Beginning) − CFO − CFI" },
      ],
      prefix: "$",
      explain: "Net change = 60 − 40 = 20k. CFF = 20 − 83 − (−50) = 20 − 83 + 50 = −$13,000 (a net financing outflow).",
    },
  ],
});
