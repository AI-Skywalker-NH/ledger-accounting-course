/* ===========================================================================
   Module 8 — Working Capital & the Cash Cycle
   =========================================================================== */
Ledger.register({
  id: "module-08",
  title: "Working Capital & the Cash Cycle",
  subtitle:
    "How the day-to-day investment in receivables, inventory, and payables ties up (or frees) cash — and why growth can starve a profitable company.",
  est: "~50 min",
  objectives: [
    "Define net working capital and operating working capital.",
    "Explain how A/R, inventory, and A/P consume or provide cash.",
    "Compute DSO, DIO, DPO, and the cash conversion cycle.",
    "Connect changes in working capital to operating cash flow.",
    "Interpret a negative cash conversion cycle and the levers that shorten it.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "What Is Working Capital",
      html: `
        <span class="eyebrow">Lesson 1 of 6</span>
        <h2>What Is Working Capital</h2>
        <p>From the balance sheet you know <span class="kt">net working capital</span>:</p>
        <div class="equation">Net Working Capital = Current Assets − Current Liabilities</div>
        <p>It measures short-term liquidity — the cushion of near-term assets over near-term bills.</p>

        <h3>Operating working capital</h3>
        <p>For modeling, we usually strip out cash and short-term debt to isolate the working capital the
        <em>operations</em> actually require:</p>
        <div class="equation">Operating WC = (A/R + Inventory + Prepaids) − (A/P + Accrued expenses)</div>
        <p>We exclude cash (it's the thing we're trying to explain) and debt (a financing decision, not
        an operating one). What's left is the cash tied up in running the business day to day.</p>

        <div class="callout">
          <strong>Why the distinction matters:</strong> operating working capital is what moves with
          sales and drives the cash flow statement. When you forecast a company, you forecast operating
          working capital — not the raw current ratio.
        </div>
      `,
    },
    {
      id: "l2",
      title: "The Core Components",
      html: `
        <span class="eyebrow">Lesson 2 of 6</span>
        <h2>The Core Components</h2>
        <p>Three accounts do most of the work. Two tie cash up; one frees it.</p>

        <table>
          <tr><th>Account</th><th>Effect on cash</th><th>Intuition</th></tr>
          <tr><td>Accounts Receivable</td><td>Ties cash up</td><td>You've delivered but haven't been paid — your cash is in the customer's pocket.</td></tr>
          <tr><td>Inventory</td><td>Ties cash up</td><td>Cash is parked in unsold goods on the shelf.</td></tr>
          <tr><td>Accounts Payable</td><td>Frees cash up</td><td>Suppliers are effectively lending to you until you pay — free short-term financing.</td></tr>
        </table>

        <div class="callout">
          <strong>The mental model:</strong> receivables and inventory are cash you've laid out and are
          waiting to get back. Payables are cash you get to hold onto a while longer. Working capital is
          the net of the two.
        </div>
      `,
    },
    {
      id: "l3",
      title: "The Cash Conversion Cycle",
      html: `
        <span class="eyebrow">Lesson 3 of 6</span>
        <h2>The Cash Conversion Cycle</h2>
        <p>The <span class="kt">cash conversion cycle (CCC)</span> measures, in days, how long cash is
        locked up in operations — from paying for inventory to collecting from customers.</p>

        <div class="equation">CCC = DIO + DSO − DPO</div>

        <ul>
          <li><strong>DIO</strong> — Days Inventory Outstanding: how long stock sits before it sells.</li>
          <li><strong>DSO</strong> — Days Sales Outstanding: how long customers take to pay.</li>
          <li><strong>DPO</strong> — Days Payable Outstanding: how long you take to pay suppliers.</li>
        </ul>

        <p>Read it as a timeline: buy inventory → hold it (DIO) → sell on credit → wait to get paid (DSO).
        Subtract the days your suppliers finance you (DPO) and you get the number of days your <em>own</em>
        cash is tied up.</p>

        <div class="callout">
          <strong>Shorter is better.</strong> A lower CCC means cash comes back faster and the business
          needs less financing to operate. The next lesson computes each piece.
        </div>
      `,
    },
    {
      id: "l4",
      title: "The Days Ratios",
      html: `
        <span class="eyebrow">Lesson 4 of 6</span>
        <h2>The Days Ratios</h2>
        <p>Each component is a balance-sheet figure scaled by a daily flow (× 365 days).</p>

        <table>
          <tr><th>Ratio</th><th>Formula</th></tr>
          <tr><td>DSO</td><td>Accounts Receivable ÷ Revenue × 365</td></tr>
          <tr><td>DIO</td><td>Inventory ÷ COGS × 365</td></tr>
          <tr><td>DPO</td><td>Accounts Payable ÷ COGS × 365</td></tr>
        </table>

        <p>Receivables scale with <em>revenue</em> (that's what customers owe against); inventory and
        payables scale with <em>COGS</em> (that's what they're valued and paid at).</p>

        <h3>Worked example</h3>
        <p>Revenue \$365,000; COGS \$219,000; A/R \$40,000; Inventory \$36,000; A/P \$18,000.</p>
        <ul>
          <li>DSO = 40,000 ÷ 365,000 × 365 = <strong>40 days</strong></li>
          <li>DIO = 36,000 ÷ 219,000 × 365 = <strong>60 days</strong></li>
          <li>DPO = 18,000 ÷ 219,000 × 365 = <strong>30 days</strong></li>
          <li>CCC = 60 + 40 − 30 = <strong>70 days</strong></li>
        </ul>

        <div class="callout">
          <strong>Interpretation:</strong> cash is tied up for about 70 days between paying suppliers and
          collecting from customers. That's the working-capital financing the business must fund.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Working Capital & Cash Flow",
      html: `
        <span class="eyebrow">Lesson 5 of 6</span>
        <h2>Working Capital &amp; Cash Flow</h2>
        <p>Here's where it connects to Module 5. The <em>change</em> in operating working capital is a
        line in operating cash flow:</p>
        <div class="equation">Increase in working capital → uses cash. Decrease → provides cash.</div>

        <p>More receivables and inventory soak up cash; more payables release it. So as working capital
        grows, operating cash flow falls below net income.</p>

        <h3>Why growth eats cash</h3>
        <p>A growing company sells more, which means more receivables and more inventory — its operating
        working capital rises with revenue. A profitable, fast-growing business can therefore be
        <em>cash-hungry</em>: the profit is real, but it's tied up in the working capital needed to
        support the growth.</p>

        <div class="callout">
          <strong>The classic trap:</strong> "profitable but out of cash." It usually traces to working
          capital — receivables and inventory expanding faster than the company collects. Watching the
          cash conversion cycle is how you catch it early.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Managing the Cycle",
      html: `
        <span class="eyebrow">Lesson 6 of 6</span>
        <h2>Managing the Cycle</h2>
        <p>Three levers shorten the cash conversion cycle:</p>
        <ul>
          <li><strong>Collect faster</strong> — lower DSO (tighter terms, better collections).</li>
          <li><strong>Turn inventory faster</strong> — lower DIO (leaner stock, quicker sales).</li>
          <li><strong>Pay slower</strong> — higher DPO (negotiate longer supplier terms), within reason.</li>
        </ul>

        <h3>Negative CCC</h3>
        <p>Some businesses run a <span class="kt">negative</span> cash conversion cycle — they collect
        from customers <em>before</em> they pay suppliers. Fast-turning retailers and subscription
        businesses often achieve this: their suppliers effectively finance their growth, so expansion
        <em>generates</em> cash instead of consuming it.</p>

        <h3>Red flags</h3>
        <ul>
          <li><strong>Rising DSO</strong> — customers paying slower; possible collection or credit-quality problems.</li>
          <li><strong>Rising DIO</strong> — inventory building up; possible slowing demand or obsolescence.</li>
        </ul>

        <div class="callout">
          <strong>Foundations complete.</strong> You can now read all three statements, link them, and
          analyze the working capital that drives cash. That's the full toolkit the modeling course
          builds on.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Definitions", front: "Formula for net working capital?", back: "Net Working Capital = Current Assets − Current Liabilities." },
    { id: "f2",  tag: "Definitions", front: "What is operating working capital, and why exclude cash and debt?", back: "(A/R + Inventory + Prepaids) − (A/P + Accrued). Cash is what we're explaining; debt is financing, not operations." },
    { id: "f3",  tag: "Components", front: "How do Accounts Receivable affect cash?", back: "They tie cash up — you've delivered but not been paid; your cash sits with the customer." },
    { id: "f4",  tag: "Components", front: "How does Inventory affect cash?", back: "Ties cash up — cash is parked in unsold goods until they sell." },
    { id: "f5",  tag: "Components", front: "How do Accounts Payable affect cash?", back: "Free cash up — suppliers finance you until you pay; effectively free short-term credit." },
    { id: "f6",  tag: "CCC", front: "Formula for the cash conversion cycle?", back: "CCC = DIO + DSO − DPO (days cash is tied up in operations)." },
    { id: "f7",  tag: "Ratios", front: "Formula for DSO (Days Sales Outstanding)?", back: "Accounts Receivable ÷ Revenue × 365 — average days to collect." },
    { id: "f8",  tag: "Ratios", front: "Formula for DIO (Days Inventory Outstanding)?", back: "Inventory ÷ COGS × 365 — average days inventory sits before selling." },
    { id: "f9",  tag: "Ratios", front: "Formula for DPO (Days Payable Outstanding)?", back: "Accounts Payable ÷ COGS × 365 — average days taken to pay suppliers." },
    { id: "f10", tag: "Ratios", front: "Why does DSO use Revenue but DIO/DPO use COGS?", back: "Receivables are owed at selling price (revenue); inventory and payables are carried/paid at cost (COGS)." },
    { id: "f11", tag: "Cash flow", front: "How does a change in working capital affect cash?", back: "An increase in working capital uses cash; a decrease provides cash (it's a line in operating cash flow)." },
    { id: "f12", tag: "Cash flow", front: "Why does growth 'eat cash'?", back: "Growing sales raise receivables and inventory, so operating working capital rises — tying up cash even when profitable." },
    { id: "f13", tag: "Interpretation", front: "What does a negative cash conversion cycle mean?", back: "The company collects from customers before paying suppliers — suppliers finance its growth, so growth generates cash." },
    { id: "f14", tag: "Management", front: "Three levers to shorten the CCC?", back: "Lower DSO (collect faster), lower DIO (turn inventory faster), raise DPO (pay suppliers slower)." },
    { id: "f15", tag: "Red flags", front: "What might a rising DSO or DIO signal?", back: "Rising DSO: customers paying slower / credit issues. Rising DIO: inventory building up / weakening demand or obsolescence." },
    { id: "f16", tag: "Link", front: "Where does working capital connect to the cash flow statement?", back: "Changes in operating working capital are the working-capital adjustments in operating cash flow (CFO)." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "Net working capital equals…",
      options: ["Current assets + current liabilities", "Current assets − current liabilities", "Total assets − total liabilities", "Cash − debt"],
      answer: 1,
      explain: "Net working capital = current assets − current liabilities. (Operating working capital further excludes cash and short-term debt.)",
    },
    {
      id: "q2",
      prompt: "Operating working capital deliberately excludes…",
      options: ["Accounts receivable and inventory", "Cash and short-term debt", "Accounts payable", "Prepaid expenses"],
      answer: 1,
      explain: "It excludes cash (the thing being explained) and debt (a financing decision), isolating the working capital operations require.",
    },
    {
      id: "q3",
      prompt: "The cash conversion cycle is…",
      options: ["DSO + DPO − DIO", "DIO + DSO − DPO", "DIO − DSO + DPO", "DSO + DIO + DPO"],
      answer: 1,
      explain: "CCC = DIO + DSO − DPO: days holding inventory plus days to collect, minus days of supplier financing.",
    },
    {
      id: "q4",
      scenario: "Revenue \$365,000; Accounts Receivable \$40,000.",
      prompt: "What is DSO?",
      options: ["30 days", "40 days", "60 days", "9 days"],
      answer: 1,
      explain: "DSO = A/R ÷ Revenue × 365 = 40,000 ÷ 365,000 × 365 = 40 days.",
    },
    {
      id: "q5",
      scenario: "COGS \$219,000; Inventory \$36,000.",
      prompt: "What is DIO?",
      options: ["40 days", "50 days", "60 days", "30 days"],
      answer: 2,
      explain: "DIO = Inventory ÷ COGS × 365 = 36,000 ÷ 219,000 × 365 = 60 days.",
    },
    {
      id: "q6",
      prompt: "An increase in operating working capital during the period…",
      options: ["Provides cash", "Uses cash", "Has no cash effect", "Increases net income"],
      answer: 1,
      explain: "Growing receivables/inventory (net of payables) ties up cash, so an increase in working capital is a use of cash in CFO.",
    },
    {
      id: "q7",
      prompt: "A negative cash conversion cycle means the company…",
      options: [
        "Is losing money",
        "Collects from customers before it pays suppliers",
        "Has no inventory",
        "Cannot pay its debts",
      ],
      answer: 1,
      explain: "It gets paid before paying suppliers — suppliers finance its operations, so growth actually generates cash.",
    },
    {
      id: "q8",
      prompt: "Which action would SHORTEN the cash conversion cycle?",
      options: ["Let customers pay later (raise DSO)", "Hold more inventory (raise DIO)", "Negotiate longer terms to pay suppliers (raise DPO)", "Pay suppliers sooner (lower DPO)"],
      answer: 2,
      explain: "Raising DPO (paying suppliers later) subtracts more days, shortening the CCC. Higher DSO or DIO would lengthen it.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "journal",
      prompt: "The company collects \$10,000 of an outstanding customer receivable. Record it. (Note how this shrinks working capital and frees cash.)",
      amount: "\$10,000",
      accounts: ["Cash", "Accounts Receivable", "Revenue", "Inventory", "Accounts Payable", "Unearned Revenue"],
      answer: { debit: "Cash", credit: "Accounts Receivable" },
      explain: "Dr Cash / Cr Accounts Receivable. Collecting a receivable converts working capital back into cash — lower A/R, lower DSO.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Compute operating working capital from its components.",
      rows: [
        { label: "Accounts Receivable", value: 40000, given: true },
        { label: "Inventory", value: 36000, given: true },
        { label: "Accounts Payable", value: 18000, given: true },
        { label: "Operating working capital", key: "owc", answer: 58000, hint: "A/R + Inventory − A/P" },
      ],
      prefix: "$",
      explain: "Operating WC = 40,000 + 36,000 − 18,000 = \$58,000 — the cash tied up in day-to-day operations.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Compute the three days ratios. Use a 365-day year; enter each in days.",
      rows: [
        { label: "Revenue", value: 365000, given: true },
        { label: "COGS", value: 219000, given: true },
        { label: "Accounts Receivable", value: 40000, given: true },
        { label: "Inventory", value: 36000, given: true },
        { label: "Accounts Payable", value: 18000, given: true },
        { label: "DSO (days)", key: "dso", answer: 40, hint: "A/R ÷ Revenue × 365" },
        { label: "DIO (days)", key: "dio", answer: 60, hint: "Inventory ÷ COGS × 365" },
        { label: "DPO (days)", key: "dpo", answer: 30, hint: "A/P ÷ COGS × 365" },
      ],
      prefix: "$",
      explain: "DSO = 40,000/365,000×365 = 40. DIO = 36,000/219,000×365 = 60. DPO = 18,000/219,000×365 = 30.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Compute the cash conversion cycle from the days ratios.",
      rows: [
        { label: "DIO (days)", value: 60, given: true },
        { label: "DSO (days)", value: 40, given: true },
        { label: "DPO (days)", value: 30, given: true },
        { label: "Cash conversion cycle (days)", key: "ccc", answer: 70, hint: "DIO + DSO − DPO" },
      ],
      prefix: "",
      explain: "CCC = 60 + 40 − 30 = 70 days. Cash is tied up about 70 days between paying suppliers and collecting from customers.",
    },
    {
      id: "d5",
      type: "model",
      prompt: "Working capital grew this year. Compute the change and its cash impact (enter a use of cash as negative).",
      rows: [
        { label: "Beginning operating working capital", value: 58000, given: true },
        { label: "Ending operating working capital", value: 70000, given: true },
        { label: "Increase in working capital", key: "chg", answer: 12000, hint: "ending − beginning" },
        { label: "Cash impact for the period", key: "cash", answer: -12000, hint: "an increase in WC uses cash" },
      ],
      prefix: "$",
      explain: "Working capital rose \$12,000, which consumes \$12,000 of cash — a −12,000 line in operating cash flow.",
    },
    {
      id: "d6",
      type: "model",
      prompt: "A fast-turning retailer. Compute its cash conversion cycle and read the sign.",
      rows: [
        { label: "DIO (days)", value: 10, given: true },
        { label: "DSO (days)", value: 5, given: true },
        { label: "DPO (days)", value: 40, given: true },
        { label: "Cash conversion cycle (days)", key: "ccc", answer: -25, hint: "DIO + DSO − DPO" },
      ],
      prefix: "",
      explain: "CCC = 10 + 5 − 40 = −25 days. Negative: the retailer collects long before paying suppliers, so suppliers finance its growth and expansion generates cash.",
    },
  ],
});
