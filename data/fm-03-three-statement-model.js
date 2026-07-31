/* ===========================================================================
   Course 2 · Module FM-3 — Building a Three-Statement Model
   One consistent one-year projection is built across the drills:
   Yr0 revenue 1,000,000; grows 10%; GM 40%; SG&A 20% of rev; dep 40,000;
   debt 200,000 @ 10%; tax 25% -> NI 120,000. CFS -> ending cash 70,000.
   BS rolls forward and balances at 675,000.
   =========================================================================== */
Ledger.register({
  id: "fm-03",
  title: "Building a Three-Statement Model",
  subtitle:
    "Assembling the income statement, cash flow statement, and balance sheet into one live, linked model — where cash is the plug and the balance sheet must balance.",
  est: "~90 min",
  objectives: [
    "Describe the architecture and build order of a three-statement model.",
    "Project an income statement from a set of assumptions.",
    "Build the cash flow statement that bridges net income to ending cash.",
    "Roll balance-sheet accounts forward and prove the model balances.",
    "Explain the cash plug, the balance check, and circularity.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Anatomy of a Three-Statement Model",
      html: `
        <span class="eyebrow">Course 2 · Lesson 1 of 6</span>
        <h2>Anatomy of a Three-Statement Model</h2>
        <p>A <span class="kt">three-statement model</span> is the three financial statements you learned
        in Course 1 — projected forward and wired together by formulas so a change in any assumption
        ripples through all three. It is the core deliverable of financial modeling.</p>

        <h3>The pieces</h3>
        <ul>
          <li><strong>Assumptions / drivers</strong> — the inputs you forecast (growth, margins, days,
          capex, rates). These are the only hard-coded numbers; everything else is a formula.</li>
          <li><strong>Income statement</strong> — projected from the drivers.</li>
          <li><strong>Supporting schedules</strong> — debt &amp; interest, PP&amp;E &amp; depreciation,
          working capital.</li>
          <li><strong>Cash flow statement</strong> — bridges net income to the change in cash.</li>
          <li><strong>Balance sheet</strong> — rolled forward; cash comes from the CFS.</li>
        </ul>

        <div class="callout">
          <strong>The golden rule:</strong> the balance sheet must balance (Assets = Liabilities +
          Equity) in every period. You never force it — it balances <em>because</em> cash is derived
          correctly through the cash flow statement. A broken balance means a broken link.
        </div>
      `,
    },
    {
      id: "l2",
      title: "The Build Order",
      html: `
        <span class="eyebrow">Course 2 · Lesson 2 of 6</span>
        <h2>The Build Order</h2>
        <p>Models are built in a deliberate sequence so each piece has what it needs:</p>
        <ol>
          <li><strong>Assumptions</strong> — lay out the drivers first.</li>
          <li><strong>Income statement</strong> — down to EBIT (interest comes from the debt schedule).</li>
          <li><strong>Supporting schedules</strong> — PP&amp;E/depreciation, debt/interest, working capital.</li>
          <li><strong>Finish the income statement</strong> — plug in interest and taxes to reach net income.</li>
          <li><strong>Cash flow statement</strong> — start from net income, add back non-cash, adjust
          working capital, subtract capex, handle financing.</li>
          <li><strong>Balance sheet</strong> — roll each account forward; <strong>cash</strong> is the
          ending cash from the CFS.</li>
          <li><strong>Balance check</strong> — confirm Assets − (Liabilities + Equity) = 0.</li>
        </ol>

        <div class="callout">
          <strong>Two links do the heavy lifting</strong> (from Course 1): net income → retained
          earnings, and CFS ending cash → balance-sheet cash. Get those right and the model closes.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Supporting Schedules & the Roll-Forward",
      html: `
        <span class="eyebrow">Course 2 · Lesson 3 of 6</span>
        <h2>Supporting Schedules &amp; the Roll-Forward</h2>
        <p>Most balance-sheet accounts are projected with a <span class="kt">roll-forward</span> — the
        single most important pattern in modeling:</p>
        <div class="equation">Ending = Beginning + Additions − Reductions</div>

        <table>
          <tr><th>Schedule</th><th>Roll-forward</th></tr>
          <tr><td>PP&amp;E (net)</td><td>Beginning + Capex − Depreciation</td></tr>
          <tr><td>Debt</td><td>Beginning + Draws − Repayments</td></tr>
          <tr><td>Retained earnings</td><td>Beginning + Net income − Dividends</td></tr>
          <tr><td>Working capital (A/R, etc.)</td><td>Beginning + Increase (driver-based)</td></tr>
        </table>

        <p>The <strong>debt schedule</strong> also produces interest expense (beginning or average debt
        × rate), which feeds back into the income statement. The <strong>PP&amp;E schedule</strong>
        produces depreciation, which hits the income statement and the cash flow add-back. Schedules are
        where the statements get their shared numbers.</p>

        <div class="callout">
          <strong>Why roll-forwards matter:</strong> they guarantee continuity between periods — this
          year's ending balance is next year's beginning balance — so nothing leaks and the balance
          sheet stays internally consistent.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Linking It Together",
      html: `
        <span class="eyebrow">Course 2 · Lesson 4 of 6</span>
        <h2>Linking It Together</h2>
        <p>Walk our example company through one projected year. Assumptions: revenue grows 10%, gross
        margin 40%, SG&amp;A 20% of revenue, depreciation 40,000, debt 200,000 at 10%, tax 25%.</p>

        <table>
          <tr><th>Income statement</th><th></th></tr>
          <tr><td>Revenue (1,000,000 × 1.10)</td><td>1,100,000</td></tr>
          <tr><td>COGS (60%)</td><td>660,000</td></tr>
          <tr><td>Gross profit</td><td>440,000</td></tr>
          <tr><td>SG&amp;A (20%) + Depreciation</td><td>220,000 + 40,000</td></tr>
          <tr><td>EBIT</td><td>180,000</td></tr>
          <tr><td>Interest (200,000 × 10%)</td><td>20,000</td></tr>
          <tr><td>Pretax; Taxes (25%)</td><td>160,000; 40,000</td></tr>
          <tr><td><strong>Net income</strong></td><td><strong>120,000</strong></td></tr>
        </table>

        <p>Net income 120,000 flows to the cash flow statement (top line) and, less 50,000 of dividends,
        into retained earnings. The cash flow statement (next lesson's mechanics) lands on ending cash
        70,000, which becomes the balance-sheet cash. Every statement is now wired to the others.</p>

        <div class="callout">
          <strong>Trace one number:</strong> depreciation 40,000 appears as an income-statement expense,
          a cash-flow add-back, and a reduction in net PP&amp;E on the balance sheet — one driver,
          three statements. That's the model working as a system.
        </div>
      `,
    },
    {
      id: "l5",
      title: "The Balance Check & Debugging",
      html: `
        <span class="eyebrow">Course 2 · Lesson 5 of 6</span>
        <h2>The Balance Check &amp; Debugging</h2>
        <p>Every model carries a <span class="kt">balance check</span> row:</p>
        <div class="equation">Check = Total Assets − (Total Liabilities + Total Equity)</div>
        <p>It must read <strong>zero</strong> in every period. If it doesn't, something is wrong — and
        the check tells you by exactly how much.</p>

        <h3>Where models break</h3>
        <ul>
          <li><strong>Retained earnings link</strong> — net income or dividends not flowing correctly.</li>
          <li><strong>Cash link</strong> — the balance-sheet cash isn't the CFS ending cash.</li>
          <li><strong>Sign errors</strong> — a capex or dividend entered with the wrong sign.</li>
          <li><strong>A missing side</strong> — a balance-sheet change with no matching cash flow.</li>
        </ul>

        <p>Our example balances: assets 70,000 + 120,000 + 165,000 + 320,000 = 675,000; liabilities +
        equity 105,000 + 200,000 + 100,000 + 270,000 = 675,000. Check = 0. ✓</p>

        <div class="callout">
          <strong>Pro habit:</strong> build the check first and watch it as you go. A check that's off by
          exactly a dividend or a capex figure points you straight to the broken link.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Circularity & the Cash Plug",
      html: `
        <span class="eyebrow">Course 2 · Lesson 6 of 6</span>
        <h2>Circularity &amp; the Cash Plug</h2>
        <p>Two mechanics make a projected model close.</p>

        <h3>The cash plug</h3>
        <p>You build the income statement and every balance-sheet line <em>except</em> cash; the cash
        flow statement then derives ending cash. Drop that cash onto the balance sheet and it balances —
        cash is the <span class="kt">plug</span> that absorbs everything else. You don't force the
        balance; it emerges.</p>

        <h3>The revolver</h3>
        <p>A <span class="kt">revolver</span> (revolving credit line) is a financing plug: it
        automatically draws when cash would go negative and repays from surplus, so the model never
        shows impossible negative cash.</p>

        <h3>Circularity</h3>
        <p>Interest depends on the debt balance; if a revolver funds cash shortfalls, debt depends on
        cash; cash depends on net income; net income depends on interest. That loop —
        <span class="kt">circularity</span> — is resolved with iterative calculation (or a circularity
        breaker switch). Know it exists; you'll wire it in real models.</p>

        <div class="callout">
          <strong>You can now build a model.</strong> Assumptions → income statement → schedules → cash
          flow → balance sheet → check. The drills below have you build each piece from scratch on the
          grid — exactly the workflow of the job.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Architecture", front: "What is a three-statement model?", back: "The three financial statements projected forward and linked by formulas, so a change in any assumption flows through all three." },
    { id: "f2",  tag: "Architecture", front: "What are the only hard-coded numbers in a good model?", back: "The assumptions/drivers. Everything else should be a formula that traces back to them." },
    { id: "f3",  tag: "Golden rule", front: "The golden rule of a three-statement model?", back: "The balance sheet must balance every period — not by forcing it, but because cash is derived correctly through the CFS." },
    { id: "f4",  tag: "Build order", front: "What is the standard build order?", back: "Assumptions → income statement (to EBIT) → schedules → finish IS (interest, taxes) → cash flow statement → balance sheet → balance check." },
    { id: "f5",  tag: "Links", front: "The two links that make a model close?", back: "Net income → retained earnings, and CFS ending cash → balance-sheet cash." },
    { id: "f6",  tag: "Roll-forward", front: "State the roll-forward pattern.", back: "Ending = Beginning + Additions − Reductions. Used for PP&E, debt, retained earnings, and working capital." },
    { id: "f7",  tag: "Roll-forward", front: "PP&E (net) roll-forward?", back: "Ending net PP&E = Beginning + Capex − Depreciation." },
    { id: "f8",  tag: "Schedules", front: "What two shared numbers do the schedules feed back to the statements?", back: "Interest expense (from the debt schedule) and depreciation (from the PP&E schedule)." },
    { id: "f9",  tag: "Schedules", front: "Retained earnings roll-forward?", back: "Ending RE = Beginning RE + Net income − Dividends." },
    { id: "f10", tag: "Balance check", front: "What is the balance check formula, and what should it read?", back: "Check = Total Assets − (Total Liabilities + Total Equity). It must equal zero every period." },
    { id: "f11", tag: "Debugging", front: "Most common reasons a modeled balance sheet won't balance?", back: "Broken RE link, broken cash link, a sign error (capex/dividends), or a balance-sheet change with no matching cash flow." },
    { id: "f12", tag: "Plug", front: "What is the 'cash plug'?", back: "Cash is derived from the IS and other BS lines via the CFS, so it absorbs everything else and the balance sheet balances automatically." },
    { id: "f13", tag: "Plug", front: "What is a revolver in a model?", back: "A revolving credit line that auto-draws when cash would go negative and repays from surplus — a financing plug." },
    { id: "f14", tag: "Circularity", front: "What causes circularity in a model?", back: "Interest ← debt ← cash ← net income ← interest. A dependency loop, resolved with iterative calculation or a circularity switch." },
    { id: "f15", tag: "Trace", front: "How does depreciation appear across the three statements?", back: "IS expense (lowers net income), CFS add-back (non-cash), and a reduction to net PP&E on the balance sheet." },
    { id: "f16", tag: "Practice", front: "Why build the balance check first?", back: "So you can watch it as you build; a check off by exactly a dividend or capex figure points straight to the broken link." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "In a three-statement model, the balance sheet balances because…",
      options: ["You manually force totals to match", "Cash is derived correctly through the cash flow statement", "Assets are always set equal to equity", "The auditor signs off"],
      answer: 1,
      explain: "Cash is the plug derived via the CFS; when the links are right, Assets = Liabilities + Equity emerges automatically.",
    },
    {
      id: "q2",
      prompt: "Which is the correct general build order?",
      options: [
        "Balance sheet → income statement → cash flow",
        "Assumptions → income statement → schedules → cash flow → balance sheet → check",
        "Cash flow → assumptions → balance sheet",
        "Income statement → balance check → assumptions",
      ],
      answer: 1,
      explain: "Drivers first, then the IS, supporting schedules, the CFS, the balance sheet (cash from CFS), and finally the balance check.",
    },
    {
      id: "q3",
      prompt: "The roll-forward pattern is…",
      options: ["Ending = Beginning × Growth", "Ending = Beginning + Additions − Reductions", "Ending = Additions − Beginning", "Ending = Revenue − Expenses"],
      answer: 1,
      explain: "Ending = Beginning + Additions − Reductions — e.g. PP&E: beginning + capex − depreciation.",
    },
    {
      id: "q4",
      scenario: "Beginning net PP&E \$300,000; capex \$60,000; depreciation \$40,000.",
      prompt: "What is ending net PP&E?",
      options: ["\$400,000", "\$320,000", "\$280,000", "\$220,000"],
      answer: 1,
      explain: "Ending PP&E = 300,000 + 60,000 − 40,000 = \$320,000.",
    },
    {
      id: "q5",
      prompt: "The balance check row should always equal…",
      options: ["Net income", "Total assets", "Zero", "Ending cash"],
      answer: 2,
      explain: "Check = Total Assets − (Total Liabilities + Total Equity) must equal zero in every period.",
    },
    {
      id: "q6",
      scenario: "Beginning RE \$200,000; net income \$120,000; dividends \$50,000.",
      prompt: "What is ending retained earnings?",
      options: ["\$320,000", "\$270,000", "\$370,000", "\$170,000"],
      answer: 1,
      explain: "Ending RE = 200,000 + 120,000 − 50,000 = \$270,000 — the net-income link to equity.",
    },
    {
      id: "q7",
      prompt: "A revolver in a model functions as…",
      options: ["A revenue driver", "A financing plug that draws when cash is short and repays on surplus", "A tax rate", "A depreciation method"],
      answer: 1,
      explain: "The revolver auto-draws to prevent negative cash and repays from surplus — keeping the model solvent period to period.",
    },
    {
      id: "q8",
      prompt: "Circularity in a model arises because…",
      options: [
        "Revenue depends on the balance check",
        "Interest depends on debt, which can depend on cash, which depends on net income, which depends on interest",
        "Depreciation is non-cash",
        "Dividends reduce retained earnings",
      ],
      answer: 1,
      explain: "That interest↔debt↔cash↔net income loop is circularity, resolved with iterative calculation or a circularity switch.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Project the income statement from the assumptions. (Percent inputs: divide by 100 in your formulas.) EBIT = Gross profit − SG&A − Depreciation.",
      rows: [
        { label: "Prior-year revenue", value: 1000000, given: true },
        { label: "Revenue growth (%)", value: 10, given: true },
        { label: "Gross margin (%)", value: 40, given: true },
        { label: "SG&A (% of revenue)", value: 20, given: true },
        { label: "Depreciation", value: 40000, given: true },
        { label: "Beginning debt", value: 200000, given: true },
        { label: "Interest rate (%)", value: 10, given: true },
        { label: "Tax rate (%)", value: 25, given: true },
        { label: "Revenue", key: "rev", answer: 1100000, hint: "prior revenue × (1 + growth% ÷ 100)" },
        { label: "COGS", key: "cogs", answer: 660000, hint: "revenue × (1 − gross margin% ÷ 100)" },
        { label: "Gross profit", key: "gp", answer: 440000, hint: "revenue − COGS" },
        { label: "SG&A", key: "sga", answer: 220000, hint: "revenue × SG&A% ÷ 100" },
        { label: "EBIT", key: "ebit", answer: 180000, hint: "gross profit − SG&A − depreciation" },
        { label: "Interest expense", key: "int", answer: 20000, hint: "beginning debt × rate% ÷ 100" },
        { label: "Pretax income", key: "ebt", answer: 160000, hint: "EBIT − interest" },
        { label: "Taxes", key: "tax", answer: 40000, hint: "pretax × tax rate% ÷ 100" },
        { label: "Net income", key: "ni", answer: 120000, hint: "pretax − taxes" },
      ],
      prefix: "$",
      explain: "Revenue 1,100,000 → GP 440,000 → EBIT 180,000 → pretax 160,000 → net income \$120,000. The projected income statement, all from drivers.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Build the cash flow statement (indirect). Enter outflows as negative.",
      rows: [
        { label: "Net income", value: 120000, given: true },
        { label: "Depreciation", value: 40000, given: true },
        { label: "Increase in Accounts Receivable", value: 20000, given: true },
        { label: "Increase in Inventory", value: 15000, given: true },
        { label: "Increase in Accounts Payable", value: 5000, given: true },
        { label: "Capital expenditures", value: 60000, given: true },
        { label: "Dividends paid", value: 50000, given: true },
        { label: "Beginning cash", value: 50000, given: true },
        { label: "Increase in working capital", key: "wc", answer: 30000, hint: "ΔA/R + ΔInventory − ΔA/P" },
        { label: "Cash from operations (CFO)", key: "cfo", answer: 130000, hint: "net income + depreciation − increase in WC" },
        { label: "Cash from investing (CFI)", key: "cfi", answer: -60000, hint: "− capex" },
        { label: "Cash from financing (CFF)", key: "cff", answer: -50000, hint: "− dividends" },
        { label: "Net change in cash", key: "net", answer: 20000, hint: "CFO + CFI + CFF" },
        { label: "Ending cash", key: "end", answer: 70000, hint: "beginning cash + net change" },
      ],
      prefix: "$",
      explain: "ΔWC +30,000 (use of cash) → CFO 130,000; CFI −60,000; CFF −50,000; net +20,000 → ending cash \$70,000. This cash flows onto the balance sheet.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Project the ASSET side of the balance sheet using roll-forwards. (Cash comes from the CFS.)",
      rows: [
        { label: "Ending cash (from CFS)", value: 70000, given: true },
        { label: "Beginning Accounts Receivable", value: 100000, given: true },
        { label: "Increase in A/R", value: 20000, given: true },
        { label: "Beginning Inventory", value: 150000, given: true },
        { label: "Increase in Inventory", value: 15000, given: true },
        { label: "Beginning net PP&E", value: 300000, given: true },
        { label: "Capex", value: 60000, given: true },
        { label: "Depreciation", value: 40000, given: true },
        { label: "Ending Accounts Receivable", key: "ar", answer: 120000, hint: "beginning + increase" },
        { label: "Ending Inventory", key: "inv", answer: 165000, hint: "beginning + increase" },
        { label: "Ending net PP&E", key: "ppe", answer: 320000, hint: "beginning + capex − depreciation" },
        { label: "Total assets", key: "ta", answer: 675000, hint: "cash + A/R + inventory + net PP&E" },
      ],
      prefix: "$",
      explain: "A/R 120,000; Inventory 165,000; net PP&E 320,000; total assets = 70 + 120 + 165 + 320 = \$675,000.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Project LIABILITIES & EQUITY, then build the balance check. It must equal zero.",
      rows: [
        { label: "Beginning Accounts Payable", value: 100000, given: true },
        { label: "Increase in A/P", value: 5000, given: true },
        { label: "Long-term debt (unchanged)", value: 200000, given: true },
        { label: "Common stock", value: 100000, given: true },
        { label: "Beginning retained earnings", value: 200000, given: true },
        { label: "Net income", value: 120000, given: true },
        { label: "Dividends", value: 50000, given: true },
        { label: "Total assets (from asset side)", value: 675000, given: true },
        { label: "Ending Accounts Payable", key: "ap", answer: 105000, hint: "beginning + increase" },
        { label: "Ending retained earnings", key: "re", answer: 270000, hint: "beginning RE + net income − dividends" },
        { label: "Total equity", key: "te", answer: 370000, hint: "common stock + ending retained earnings" },
        { label: "Total liabilities & equity", key: "tle", answer: 675000, hint: "A/P + debt + total equity" },
        { label: "Balance check", key: "chk", answer: 0, hint: "total assets − total liabilities & equity" },
      ],
      prefix: "$",
      explain: "A/P 105,000; ending RE 270,000; equity 370,000; L&E = 105 + 200 + 370 = \$675,000 = total assets. Check = 0 → the model balances.",
    },
  ],
});
