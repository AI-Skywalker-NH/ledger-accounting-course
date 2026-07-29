/* ===========================================================================
   Module 6 — Linking the Three Statements
   =========================================================================== */
Ledger.register({
  id: "module-06",
  title: "Linking the Three Statements",
  subtitle:
    "The capstone: how the income statement, balance sheet, and cash flow statement wire together into one integrated system — the skeleton of every financial model.",
  est: "~70 min",
  objectives: [
    "Trace the three primary links that connect the statements.",
    "Follow a single transaction as it ripples across all three statements.",
    "Explain how depreciation touches all three statements at once.",
    "Understand why an integrated model always balances — and what a 'plug' is.",
    "Describe the intuition behind circularity (interest ↔ debt ↔ cash).",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Three Statements, One System",
      html: `
        <span class="eyebrow">Lesson 1 of 6</span>
        <h2>Three Statements, One System</h2>
        <p>You've now met each statement on its own. The insight that unlocks financial modeling is that
        they are not three separate reports — they are <strong>one integrated system</strong> that
        shares numbers. Change one figure and the effect flows through all three.</p>

        <table>
          <tr><th>Statement</th><th>Question</th><th>Horizon</th></tr>
          <tr><td>Income statement</td><td>Did we make a profit?</td><td>Period</td></tr>
          <tr><td>Cash flow statement</td><td>Where did cash move?</td><td>Period</td></tr>
          <tr><td>Balance sheet</td><td>What do we own & owe?</td><td>Point in time</td></tr>
        </table>

        <h3>The three primary links</h3>
        <ol>
          <li><strong>Net income → Retained Earnings.</strong> The bottom line of the income statement
          feeds equity on the balance sheet (and is the top line of the cash flow statement).</li>
          <li><strong>Ending cash → Cash on the balance sheet.</strong> The cash flow statement's final
          number becomes the top asset.</li>
          <li><strong>Changes in balance-sheet accounts → the cash flow statement.</strong> The period's
          movements in working capital, PP&amp;E, debt, and equity ARE the operating, investing, and
          financing cash flows.</li>
        </ol>

        <div class="callout">
          <strong>Frame for the whole module:</strong> the income statement and balance sheet are linked
          <em>through</em> the cash flow statement. Master these three links and you can build a model.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Link 1 — Net Income to Retained Earnings",
      html: `
        <span class="eyebrow">Lesson 2 of 6</span>
        <h2>Link 1 — Net Income to Retained Earnings</h2>
        <p>Net income doesn't vanish at the bottom of the income statement — it flows into
        <span class="kt">retained earnings</span> inside equity, via the roll-forward you've now seen
        several times:</p>

        <div class="equation">Ending RE = Beginning RE + Net Income − Dividends</div>

        <p>So the income statement (a period report) updates the balance sheet (a point-in-time report).
        Two consecutive balance sheets differ in retained earnings by exactly net income minus
        dividends.</p>

        <table>
          <tr><th>Line</th><th style="text-align:right">Amount</th></tr>
          <tr><td>Beginning retained earnings</td><td style="text-align:right">90,000</td></tr>
          <tr><td>+ Net income (from income statement)</td><td style="text-align:right">60,000</td></tr>
          <tr><td>− Dividends</td><td style="text-align:right">(10,000)</td></tr>
          <tr><td><strong>= Ending retained earnings</strong></td><td style="text-align:right"><strong>140,000</strong></td></tr>
        </table>

        <div class="callout">
          <strong>Net income appears three times:</strong> as the bottom line of the income statement,
          the top line of the cash flow statement, and (net of dividends) as the change in retained
          earnings on the balance sheet. Same number, three roles.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Link 2 — Ending Cash to the Balance Sheet",
      html: `
        <span class="eyebrow">Lesson 3 of 6</span>
        <h2>Link 2 — Ending Cash to the Balance Sheet</h2>
        <p>The cash flow statement takes beginning cash, walks it through operating, investing, and
        financing activity, and lands on ending cash:</p>

        <div class="equation">Ending Cash = Beginning Cash + CFO + CFI + CFF</div>

        <p>That ending-cash figure <em>is</em> the Cash line on the period-end balance sheet. It's the
        second bridge: the cash flow statement determines the single most important asset on the balance
        sheet.</p>

        <ul>
          <li>Beginning cash came from <em>last</em> period's balance sheet.</li>
          <li>Ending cash goes onto <em>this</em> period's balance sheet.</li>
        </ul>

        <div class="callout">
          <strong>The reconciliation test:</strong> if the cash you computed on the CFS doesn't equal
          the Cash line on the balance sheet, the model is broken. Links 1 and 2 are the two places
          model-builders check first when a balance sheet won't balance.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Link 3 — The Balance Sheet Drives the Cash Flow Statement",
      html: `
        <span class="eyebrow">Lesson 4 of 6</span>
        <h2>Link 3 — The Balance Sheet Drives the Cash Flow Statement</h2>
        <p>The deepest link runs the other way: the <em>changes</em> in balance-sheet accounts between
        two dates ARE the cash flows. The CFS is, in effect, a reorganized list of how every non-cash
        balance-sheet line moved.</p>

        <table>
          <tr><th>Balance-sheet change</th><th>Where it lands on the CFS</th></tr>
          <tr><td>Working capital (A/R, inventory, A/P…)</td><td>Operating (CFO)</td></tr>
          <tr><td>PP&amp;E (net of depreciation)</td><td>Investing — capex (CFI)</td></tr>
          <tr><td>Debt balances</td><td>Financing — borrow/repay (CFF)</td></tr>
          <tr><td>Equity (stock issued, dividends)</td><td>Financing (CFF)</td></tr>
        </table>

        <h3>Depreciation: the triple-touch</h3>
        <p>One item shows all three links at once. A year of \$20,000 depreciation:</p>
        <ul>
          <li><strong>Income statement:</strong> a \$20,000 expense that lowers net income.</li>
          <li><strong>Cash flow statement:</strong> added back in CFO (it moved no cash).</li>
          <li><strong>Balance sheet:</strong> accumulated depreciation rises \$20,000, reducing net
          PP&amp;E by \$20,000.</li>
        </ul>

        <div class="callout">
          <strong>This is why net PP&amp;E falls without any cash leaving:</strong> depreciation is a
          non-cash reallocation. Following it across the three statements is the classic interview
          question — and the clearest proof the statements are one system.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Walking a Transaction Through All Three",
      html: `
        <span class="eyebrow">Lesson 5 of 6</span>
        <h2>Walking a Transaction Through All Three</h2>
        <p>Take one event and trace every ripple: <strong>the company makes a \$10,000 sale on credit</strong>
        (customer will pay later), on goods that cost \$0 to keep it simple.</p>

        <table>
          <tr><th>Statement</th><th>Effect</th></tr>
          <tr><td>Income statement</td><td>Revenue +\$10,000 → net income +\$10,000.</td></tr>
          <tr><td>Balance sheet</td><td>Accounts Receivable +\$10,000 (asset); Retained Earnings +\$10,000 (equity). Still balances.</td></tr>
          <tr><td>Cash flow statement</td><td>CFO: net income +\$10,000, but A/R rose \$10,000 → subtract \$10,000. Net cash effect: \$0.</td></tr>
        </table>

        <p>The profit is real, but no cash moved — the receivable increase exactly offsets the net-income
        bump in CFO. When the customer later pays, the mirror image happens: cash rises, A/R falls, net
        income is untouched.</p>

        <div class="callout">
          <strong>The takeaway:</strong> every transaction keeps the balance sheet balanced and is fully
          traceable through the other two statements. If you can walk any transaction through all three,
          you understand the system.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Why Models Balance: Plugs & Circularity",
      html: `
        <span class="eyebrow">Lesson 6 of 6</span>
        <h2>Why Models Balance: Plugs &amp; Circularity</h2>
        <p>When you project these statements forward, two mechanical ideas make the model hang together.
        This is the bridge into the modeling course.</p>

        <h3>The cash plug</h3>
        <p>If you build the income statement and every balance-sheet line except cash, then run the cash
        flow statement, <strong>ending cash</strong> falls out as the plug that makes assets equal
        liabilities-plus-equity. You don't force the balance sheet to balance — it balances
        <em>because</em> cash is derived from the other two statements. If it doesn't balance, a link is
        broken.</p>

        <h3>The revolver</h3>
        <p>Real models often add a <span class="kt">revolver</span> (a short-term credit line) that
        automatically draws when cash would go negative and repays when there's surplus — a financing
        plug that keeps cash from ever going impossibly negative.</p>

        <h3>Circularity</h3>
        <p>Interest expense depends on the debt balance; debt depends on how much cash the business needs;
        cash depends on net income; net income depends on interest expense. That loop is
        <span class="kt">circularity</span>. Modelers resolve it with iterative calculation or a
        circularity switch — but the intuition is what matters now: the statements are so tightly linked
        that some figures depend on each other.</p>

        <div class="callout">
          <strong>You've arrived at the foundation.</strong> A three-statement model is exactly these
          statements, projected forward and wired by the three links — with cash as the plug. Everything
          in the modeling course builds on what you now understand.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "System", front: "What's the key insight about the three statements?", back: "They're one integrated system that shares numbers — change one figure and it flows through all three." },
    { id: "f2",  tag: "System", front: "The income statement and balance sheet are linked THROUGH which statement?", back: "The cash flow statement — it bridges period profit to the point-in-time balance sheet." },
    { id: "f3",  tag: "Link 1", front: "Link 1: where does net income go on the balance sheet?", back: "Into retained earnings: Ending RE = Beginning RE + Net Income − Dividends." },
    { id: "f4",  tag: "Link 1", front: "Net income appears in how many places, and where?", back: "Three: bottom line of the income statement, top line of the CFS, and (net of dividends) the change in retained earnings." },
    { id: "f5",  tag: "Link 2", front: "Link 2: ending cash from the CFS becomes what?", back: "The Cash line on the period-end balance sheet." },
    { id: "f6",  tag: "Link 2", front: "Formula tying beginning to ending cash?", back: "Ending Cash = Beginning Cash + CFO + CFI + CFF." },
    { id: "f7",  tag: "Link 3", front: "Link 3: what does the cash flow statement really represent?", back: "The changes in every non-cash balance-sheet account, reorganized into operating, investing, and financing." },
    { id: "f8",  tag: "Depreciation", front: "How does depreciation touch all three statements?", back: "IS: an expense lowering net income. CFS: added back in CFO (non-cash). BS: accumulated depreciation up, net PP&E down." },
    { id: "f9",  tag: "Depreciation", front: "Why can net PP&E fall with no cash leaving?", back: "Depreciation is a non-cash reallocation — it reduces net PP&E and net income without any cash outflow." },
    { id: "f10", tag: "Transaction", front: "A $10,000 credit sale: net effect on operating CASH this period?", back: "Zero — net income rises $10k but A/R rises $10k and is subtracted in CFO, exactly offsetting it." },
    { id: "f11", tag: "Modeling", front: "What is the 'cash plug' in a 3-statement model?", back: "Ending cash is derived from the IS and the other BS lines via the CFS, so the balance sheet balances automatically." },
    { id: "f12", tag: "Modeling", front: "What is a revolver in a model?", back: "A short-term credit line that auto-draws when cash would go negative and repays on surplus — a financing plug." },
    { id: "f13", tag: "Modeling", front: "What is circularity in a 3-statement model?", back: "Interest depends on debt, debt on cash needs, cash on net income, net income on interest — a dependency loop, resolved by iterative calc." },
    { id: "f14", tag: "Debugging", front: "If a modeled balance sheet won't balance, where do you look first?", back: "The two links: net income → retained earnings, and CFS ending cash → balance-sheet Cash." },
    { id: "f15", tag: "Dividends", front: "Where do dividends show up across the statements?", back: "They reduce retained earnings on the balance sheet and are a financing outflow on the cash flow statement (not on the income statement)." },
    { id: "f16", tag: "Big picture", front: "In one sentence, what is a three-statement model?", back: "The three statements projected forward and wired together by the three links, with cash as the plug." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "The income statement and the balance sheet are connected primarily THROUGH…",
      options: ["The auditor's report", "The cash flow statement", "The notes to the financials", "Nothing — they're independent"],
      answer: 1,
      explain: "The CFS bridges period profit and point-in-time position: net income and cash movements flow through it into the balance sheet.",
    },
    {
      id: "q2",
      scenario: "Beginning retained earnings \$90,000; net income \$60,000; dividends \$10,000.",
      prompt: "What is ending retained earnings?",
      options: ["\$150,000", "\$140,000", "\$40,000", "\$160,000"],
      answer: 1,
      explain: "Ending RE = 90,000 + 60,000 − 10,000 = \$140,000. Net income (less dividends) is the link to equity.",
    },
    {
      id: "q3",
      prompt: "Ending cash on the statement of cash flows must equal…",
      options: ["Net income", "Retained earnings", "The Cash line on the balance sheet", "Free cash flow"],
      answer: 2,
      explain: "Link 2: the CFS's ending cash becomes the Cash line on the period-end balance sheet. If they differ, the model is broken.",
    },
    {
      id: "q4",
      prompt: "Which statement correctly describes how depreciation flows through the statements?",
      options: [
        "It's a cash outflow in investing",
        "IS expense; added back in CFO; raises accumulated depreciation, lowering net PP&E",
        "It only appears on the balance sheet",
        "It increases net income",
      ],
      answer: 1,
      explain: "Depreciation lowers net income (IS), is added back as non-cash (CFO), and raises accumulated depreciation so net PP&E falls (BS).",
    },
    {
      id: "q5",
      scenario: "A company makes a \$10,000 sale entirely on credit (no cost of goods).",
      prompt: "What is the effect on operating cash flow this period?",
      options: ["+\$10,000", "\$0 — the A/R increase offsets net income", "−\$10,000", "+\$20,000"],
      answer: 1,
      explain: "Net income rises \$10k, but A/R rises \$10k and is subtracted in CFO. Net operating cash effect this period is \$0.",
    },
    {
      id: "q6",
      scenario: "Beginning cash \$40,000; net income \$60,000; D&A \$30,000; no working-capital change; capex \$50,000; dividends \$10,000; no other financing.",
      prompt: "What is ending cash?",
      options: ["\$60,000", "\$70,000", "\$130,000", "\$90,000"],
      answer: 1,
      explain: "CFO = 60 + 30 = 90; CFI = −50; CFF = −10. Net change = 30. Ending cash = 40 + 30 = \$70,000.",
    },
    {
      id: "q7",
      prompt: "In an integrated model, ending cash is best described as…",
      options: [
        "A hard-coded assumption",
        "The plug that makes the balance sheet balance, derived via the CFS",
        "Always equal to net income",
        "Set equal to free cash flow",
      ],
      answer: 1,
      explain: "Cash is derived from the income statement and the other balance-sheet lines through the CFS, so the balance sheet balances automatically.",
    },
    {
      id: "q8",
      prompt: "Circularity in a three-statement model arises because…",
      options: [
        "Revenue depends on dividends",
        "Interest depends on debt, which depends on cash, which depends on net income, which depends on interest",
        "The balance sheet never balances",
        "Depreciation is non-cash",
      ],
      answer: 1,
      explain: "That interest ↔ debt ↔ cash ↔ net income loop is circularity, typically resolved with iterative calculation or a circularity switch.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "journal",
      prompt: "Trace a transaction: the company makes a \$10,000 sale on credit. Record the entry, then read the explanation for the ripple across all three statements.",
      amount: "\$10,000",
      accounts: ["Cash", "Accounts Receivable", "Revenue", "Retained Earnings", "Accounts Payable", "Inventory"],
      answer: { debit: "Accounts Receivable", credit: "Revenue" },
      explain: "Dr Accounts Receivable / Cr Revenue. IS: revenue +10k → net income +10k. BS: A/R +10k, retained earnings +10k (balances). CFS: +10k net income but −10k for the A/R increase → net operating cash \$0.",
    },
    {
      id: "d2",
      type: "journal",
      prompt: "Trace another: buy \$100,000 of equipment financed entirely with a long-term note (no cash paid). Record it, then note how it appears on the CFS.",
      amount: "\$100,000",
      accounts: ["Cash", "Equipment", "Note Payable", "Accounts Payable", "Revenue", "Retained Earnings"],
      answer: { debit: "Equipment", credit: "Note Payable" },
      explain: "Dr Equipment / Cr Note Payable. No cash moved, so it's a non-cash investing/financing activity (a supplemental disclosure) — a good reminder that not every balance-sheet change hits cash.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Link 1 — roll retained earnings forward from the income statement.",
      rows: [
        { label: "Beginning retained earnings", value: 90000, given: true },
        { label: "Net income (from the income statement)", value: 60000, given: true },
        { label: "Dividends declared", value: 10000, given: true },
        { label: "Ending retained earnings", key: "re", answer: 140000, hint: "Beginning + Net income − Dividends" },
      ],
      prefix: "$",
      explain: "Ending RE = 90,000 + 60,000 − 10,000 = \$140,000 — this is how the income statement updates equity on the balance sheet.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Full linkage. From the givens, build the cash flow statement and roll retained earnings — the two bridges to the balance sheet. (No working-capital changes; enter outflows as negative.)",
      rows: [
        { label: "Net income", value: 60000, given: true },
        { label: "Depreciation & amortization", value: 30000, given: true },
        { label: "Cash from operations (CFO)", key: "cfo", answer: 90000, hint: "Net income + D&A" },
        { label: "Capital expenditures", value: 50000, given: true },
        { label: "Cash from investing (CFI)", key: "cfi", answer: -50000, hint: "capex is an outflow" },
        { label: "Dividends paid", value: 10000, given: true },
        { label: "Cash from financing (CFF)", key: "cff", answer: -10000, hint: "dividends are an outflow" },
        { label: "Net change in cash", key: "net", answer: 30000, hint: "CFO + CFI + CFF" },
        { label: "Beginning cash", value: 40000, given: true },
        { label: "Ending cash → Balance-sheet Cash", key: "cash", answer: 70000, hint: "beginning + net change" },
        { label: "Beginning retained earnings", value: 90000, given: true },
        { label: "Ending retained earnings → Balance-sheet Equity", key: "re", answer: 140000, hint: "beginning RE + net income − dividends" },
      ],
      prefix: "$",
      explain: "CFO 90k, CFI −50k, CFF −10k → net change +30k → ending cash \$70,000 (Link 2). Ending RE = 90 + 60 − 10 = \$140,000 (Link 1). Those two figures land directly on the balance sheet.",
    },
    {
      id: "d5",
      type: "model",
      prompt: "Depreciation, the triple-touch. A machine cost \$100,000; record one year of \$20,000 depreciation and trace it.",
      rows: [
        { label: "Depreciation expense on the income statement", key: "exp", answer: 20000, hint: "the annual amount" },
        { label: "Cash outflow from the depreciation itself", key: "cash", answer: 0, hint: "it's a non-cash charge" },
        { label: "Accumulated depreciation after year 1", key: "accum", answer: 20000, hint: "one year's worth" },
        { label: "Net PP&E after year 1", key: "netppe", answer: 80000, hint: "cost − accumulated depreciation" },
      ],
      prefix: "$",
      explain: "IS: −\$20,000 expense. CFS: \$0 cash (added back in CFO). BS: accumulated depreciation \$20,000, so net PP&E = 100,000 − 20,000 = \$80,000. One item, all three statements.",
    },
    {
      id: "d6",
      type: "model",
      prompt: "The balance check. Using the ending balances built above, confirm the balance sheet balances.",
      rows: [
        { label: "Ending cash", value: 70000, given: true },
        { label: "Accounts receivable", value: 10000, given: true },
        { label: "Net PP&E", value: 80000, given: true },
        { label: "Total assets", key: "ta", answer: 160000, hint: "sum the assets" },
        { label: "Total liabilities", value: 20000, given: true },
        { label: "Common stock", value: 0, given: true },
        { label: "Ending retained earnings", value: 140000, given: true },
        { label: "Total liabilities + equity", key: "tle", answer: 160000, hint: "liabilities + common stock + retained earnings" },
      ],
      prefix: "$",
      explain: "Assets = 70 + 10 + 80 = 160k. Liabilities + equity = 20 + 0 + 140 = 160k. Assets = L + E → the statements tie out. That balance is the proof the links are wired correctly.",
    },
  ],
});
