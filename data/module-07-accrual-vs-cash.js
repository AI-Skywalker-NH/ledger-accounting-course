/* ===========================================================================
   Module 7 — Accrual vs. Cash Accounting
   =========================================================================== */
Ledger.register({
  id: "module-07",
  title: "Accrual vs. Cash Accounting",
  subtitle:
    "The timing rules that decide which period a transaction lands in — and the adjusting entries that keep the books honest.",
  est: "~45 min",
  objectives: [
    "Contrast cash-basis and accrual-basis accounting.",
    "Apply the matching principle.",
    "Classify items as accruals or deferrals.",
    "Record the four types of period-end adjusting entries.",
    "Convert cash figures to accrual figures using changes in balance-sheet accounts.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Two Ways to Keep Score",
      html: `
        <span class="eyebrow">Lesson 1 of 6</span>
        <h2>Two Ways to Keep Score</h2>
        <p>There are two systems for deciding <em>when</em> a transaction hits the books.</p>

        <table>
          <tr><th>Basis</th><th>Records revenue when…</th><th>Records expense when…</th></tr>
          <tr><td><span class="kt">Cash basis</span></td><td>Cash is received</td><td>Cash is paid</td></tr>
          <tr><td><span class="kt">Accrual basis</span></td><td>It is earned (delivered)</td><td>It is incurred</td></tr>
        </table>

        <p>Cash basis is simple and tracks the bank account, but it can badly distort a period: a
        December sale collected in January would show zero December revenue. <strong>Accrual basis</strong>
        matches transactions to the period in which the economic activity actually happened, giving a
        truer picture of performance.</p>

        <div class="callout">
          <strong>The rule that matters:</strong> GAAP and IFRS require accrual accounting for essentially
          all companies of any size. Cash basis survives only for some very small businesses and certain
          tax filings. Every financial model you'll build assumes accrual.
        </div>
      `,
    },
    {
      id: "l2",
      title: "The Matching Principle",
      html: `
        <span class="eyebrow">Lesson 2 of 6</span>
        <h2>The Matching Principle</h2>
        <p>Accrual accounting rests on two ideas you've already met — revenue recognition (record revenue
        when earned) and its partner, the <span class="kt">matching principle</span>:</p>

        <div class="equation">Recognize expenses in the same period as the revenue they help produce.</div>

        <p>Costs are matched to the sales they generate, not to when cash goes out:</p>
        <ul>
          <li><strong>COGS</strong> is recorded in the period the related sale is booked — even if the
          inventory was bought months earlier.</li>
          <li><strong>Sales commissions</strong> are expensed with the sale that earned them.</li>
          <li><strong>Depreciation</strong> spreads an asset's cost across the periods it helps generate
          revenue.</li>
        </ul>

        <div class="callout">
          <strong>Why it matters:</strong> matching is what makes net income meaningful. Without it, you
          could flatter one period by delaying costs into the next. Matching keeps each period's profit
          tied to that period's real activity.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Accruals: Cash Comes Later",
      html: `
        <span class="eyebrow">Lesson 3 of 6</span>
        <h2>Accruals: Cash Comes Later</h2>
        <p>An <span class="kt">accrual</span> records revenue or expense <em>before</em> the cash moves —
        the activity happened, the cash is still to come.</p>

        <h3>Accrued revenue</h3>
        <p>Revenue earned but not yet billed or collected. You record it now with a receivable.</p>
        <ul><li>Example: consulting work performed in December, invoiced in January →
        <strong>Dr Accounts Receivable / Cr Revenue</strong> in December.</li></ul>

        <h3>Accrued expense</h3>
        <p>An expense incurred but not yet paid. You record it now with a payable.</p>
        <ul><li>Example: employees earned wages in December, paid in January →
        <strong>Dr Wages Expense / Cr Wages Payable</strong> in December.</li></ul>

        <div class="callout">
          <strong>Pattern:</strong> accruals create an <em>asset</em> (something owed to you) or a
          <em>liability</em> (something you owe), because the cash hasn't happened yet. The income
          statement leads; cash follows.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Deferrals: Cash Came First",
      html: `
        <span class="eyebrow">Lesson 4 of 6</span>
        <h2>Deferrals: Cash Came First</h2>
        <p>A <span class="kt">deferral</span> is the mirror image: the cash moved <em>first</em>, and the
        revenue or expense is recognized later, as it's earned or used up.</p>

        <h3>Deferred (unearned) revenue</h3>
        <p>Cash collected before delivering. It's a liability until earned.</p>
        <ul><li>Collect an annual subscription up front → <strong>Dr Cash / Cr Unearned Revenue</strong>,
        then recognize a slice as revenue each month.</li></ul>

        <h3>Prepaid expense</h3>
        <p>Cash paid before consuming the benefit. It's an asset until used.</p>
        <ul><li>Pay 12 months of insurance up front → <strong>Dr Prepaid Insurance / Cr Cash</strong>,
        then expense one month at a time.</li></ul>

        <div class="callout">
          <strong>Accruals vs. deferrals in one line:</strong> accrual = cash comes <em>later</em>;
          deferral = cash came <em>earlier</em>. Both exist to put the revenue or expense in the correct
          period rather than the period the cash happened to move.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Adjusting Entries at Period-End",
      html: `
        <span class="eyebrow">Lesson 5 of 6</span>
        <h2>Adjusting Entries at Period-End</h2>
        <p>Before financial statements are prepared, the books are updated with
        <span class="kt">adjusting entries</span> so revenues and expenses land in the right period. The
        four types map exactly to what you just learned:</p>

        <table>
          <tr><th>Type</th><th>Adjusting entry</th></tr>
          <tr><td>Accrued revenue</td><td>Dr Accounts Receivable / Cr Revenue</td></tr>
          <tr><td>Accrued expense</td><td>Dr Expense / Cr Payable</td></tr>
          <tr><td>Deferred revenue earned</td><td>Dr Unearned Revenue / Cr Revenue</td></tr>
          <tr><td>Prepaid expense used</td><td>Dr Expense / Cr Prepaid asset</td></tr>
        </table>

        <div class="callout">
          <strong>The tell:</strong> every adjusting entry touches exactly one income-statement account
          and one balance-sheet account — and <em>never Cash</em>. If your adjusting entry hits Cash,
          it isn't an adjusting entry; cash movements were already recorded when they happened.
        </div>

        <p>Depreciation is the classic recurring adjusting entry:
        <strong>Dr Depreciation Expense / Cr Accumulated Depreciation</strong> — an income-statement
        expense and a balance-sheet contra-asset, no cash.</p>
      `,
    },
    {
      id: "l6",
      title: "Cash vs. Accrual in Practice",
      html: `
        <span class="eyebrow">Lesson 6 of 6</span>
        <h2>Cash vs. Accrual in Practice</h2>
        <p>Because accrual and cash diverge, you often need to translate between them — and that
        translation is just the working-capital logic from the cash flow statement.</p>

        <h3>Converting cash to accrual (revenue)</h3>
        <div class="equation">Accrual revenue = Cash collected + Increase in Accounts Receivable</div>
        <p>If customers still owe you more at period-end than at the start, you earned more than you
        collected — add the increase in receivables back to cash collections.</p>

        <h3>Converting cash to accrual (expense)</h3>
        <div class="equation">Accrual expense = Cash paid − Increase in Prepaid (or + Increase in Payables)</div>

        <div class="callout">
          <strong>Full circle:</strong> this is exactly why the cash flow statement (Module 5) starts
          with accrual net income and adjusts for changes in receivables, payables, and prepaids to get
          back to cash. Accrual and cash are two views of the same activity — the balance-sheet changes
          bridge them.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Basics", front: "Cash basis: when is revenue recorded?", back: "When cash is received (and expenses when cash is paid)." },
    { id: "f2",  tag: "Basics", front: "Accrual basis: when is revenue recorded?", back: "When it's earned (delivered); expenses when incurred — regardless of cash timing." },
    { id: "f3",  tag: "Basics", front: "Which basis does GAAP require for most companies?", back: "Accrual. Cash basis is limited to some very small businesses and certain tax uses." },
    { id: "f4",  tag: "Matching", front: "State the matching principle.", back: "Recognize expenses in the same period as the revenues they help generate (e.g. COGS with the sale)." },
    { id: "f5",  tag: "Accruals", front: "What is accrued revenue, and its entry?", back: "Revenue earned but not yet billed/collected. Dr Accounts Receivable / Cr Revenue." },
    { id: "f6",  tag: "Accruals", front: "What is an accrued expense, and its entry?", back: "An expense incurred but not yet paid. Dr Expense / Cr Payable (e.g. Wages Payable)." },
    { id: "f7",  tag: "Deferrals", front: "What is deferred (unearned) revenue?", back: "Cash collected before delivering — a liability recognized as revenue as it's earned." },
    { id: "f8",  tag: "Deferrals", front: "What is a prepaid expense?", back: "Cash paid before consuming the benefit — an asset expensed as it's used up (e.g. prepaid insurance)." },
    { id: "f9",  tag: "Deferrals", front: "Accruals vs. deferrals in one line?", back: "Accrual = cash comes later; deferral = cash came earlier. Both put the item in the right period." },
    { id: "f10", tag: "Adjusting", front: "What is the purpose of adjusting entries?", back: "At period-end, to move revenues/expenses into the correct period before statements are prepared." },
    { id: "f11", tag: "Adjusting", front: "What account never appears in an adjusting entry?", back: "Cash — cash movements were already recorded when they happened. Adjusting entries are non-cash." },
    { id: "f12", tag: "Adjusting", front: "Adjusting entry to record earned unearned revenue?", back: "Dr Unearned Revenue / Cr Revenue." },
    { id: "f13", tag: "Adjusting", front: "Adjusting entry as prepaid insurance is used up?", back: "Dr Insurance Expense / Cr Prepaid Insurance." },
    { id: "f14", tag: "Adjusting", front: "Adjusting entry for depreciation?", back: "Dr Depreciation Expense / Cr Accumulated Depreciation (income statement + contra-asset, no cash)." },
    { id: "f15", tag: "Convert", front: "Convert cash collections to accrual revenue?", back: "Accrual revenue = cash collected + increase in Accounts Receivable (subtract a decrease)." },
    { id: "f16", tag: "Link", front: "How does this connect to the cash flow statement?", back: "The CFS starts with accrual net income and adjusts for changes in receivables/payables/prepaids to reach cash — the same bridge." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      scenario: "A firm delivers a service in December and collects payment in January.",
      prompt: "Under accrual accounting, when is the revenue recognized?",
      options: ["January, when cash arrives", "December, when it's earned", "Split across both months", "Whenever the invoice is created"],
      answer: 1,
      explain: "Accrual recognizes revenue when earned (December). Cash basis would record it in January.",
    },
    {
      id: "q2",
      prompt: "The matching principle says expenses should be recognized…",
      options: ["When cash is paid", "In the same period as the revenue they help generate", "Only at year-end", "Before the related revenue"],
      answer: 1,
      explain: "Matching ties costs to the revenues they produce (e.g. COGS with the sale), so each period's profit reflects its real activity.",
    },
    {
      id: "q3",
      prompt: "Cash received in advance for a service to be delivered later is…",
      options: ["Accrued revenue", "Deferred (unearned) revenue — a liability", "Revenue immediately", "A prepaid expense"],
      answer: 1,
      explain: "Cash came first but nothing is earned yet — it's deferred (unearned) revenue, a liability, until delivery.",
    },
    {
      id: "q4",
      prompt: "Wages earned by employees but not yet paid at period-end are…",
      options: ["A prepaid expense", "Deferred revenue", "An accrued expense — a liability", "Not recorded until paid"],
      answer: 2,
      explain: "The cost is incurred now but cash comes later — an accrued expense: Dr Wages Expense / Cr Wages Payable.",
    },
    {
      id: "q5",
      prompt: "Which account should NEVER appear in an adjusting entry?",
      options: ["Revenue", "Cash", "Accounts Receivable", "Depreciation Expense"],
      answer: 1,
      explain: "Adjusting entries are non-cash — they reposition revenues/expenses into the right period. Cash was recorded when it moved.",
    },
    {
      id: "q6",
      scenario: "A company prepaid \$12,000 for 12 months of insurance. Three months have passed.",
      prompt: "What is the adjusting entry at the end of month 3?",
      options: [
        "Dr Prepaid Insurance \$3,000 / Cr Cash \$3,000",
        "Dr Insurance Expense \$3,000 / Cr Prepaid Insurance \$3,000",
        "Dr Insurance Expense \$12,000 / Cr Cash \$12,000",
        "No entry needed",
      ],
      answer: 1,
      explain: "Three of twelve months are used: \$12,000 × 3/12 = \$3,000 expensed. Dr Insurance Expense / Cr Prepaid Insurance. No cash moves.",
    },
    {
      id: "q7",
      scenario: "Cash collected from customers \$100,000; Accounts Receivable rose from \$20,000 to \$30,000.",
      prompt: "What is accrual revenue for the period?",
      options: ["\$100,000", "\$90,000", "\$110,000", "\$130,000"],
      answer: 2,
      explain: "Accrual revenue = cash collected + increase in A/R = 100,000 + (30,000 − 20,000) = \$110,000. You earned more than you collected.",
    },
    {
      id: "q8",
      prompt: "Which is TRUE about accruals vs. deferrals?",
      options: [
        "Both mean cash moves at the same time as recognition",
        "Accrual = cash comes later; deferral = cash came earlier",
        "Deferral = cash comes later; accrual = cash came earlier",
        "They are the same thing",
      ],
      answer: 1,
      explain: "Accruals record the item before the cash (cash later); deferrals record it after the cash (cash earlier).",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "journal",
      prompt: "Adjusting entry — the company earned \$4,000 of consulting revenue in December but won't invoice until January. Record it.",
      amount: "\$4,000",
      accounts: ["Accounts Receivable", "Revenue", "Cash", "Unearned Revenue", "Wages Payable", "Prepaid Insurance"],
      answer: { debit: "Accounts Receivable", credit: "Revenue" },
      explain: "Accrued revenue: earned but not billed. Dr Accounts Receivable (asset) / Cr Revenue. No cash yet.",
    },
    {
      id: "d2",
      type: "journal",
      prompt: "Adjusting entry — employees earned \$6,000 of wages in December, to be paid in January. Record it.",
      amount: "\$6,000",
      accounts: ["Wages Expense", "Wages Payable", "Cash", "Accounts Receivable", "Revenue", "Prepaid Insurance"],
      answer: { debit: "Wages Expense", credit: "Wages Payable" },
      explain: "Accrued expense: incurred but unpaid. Dr Wages Expense / Cr Wages Payable (liability). No cash yet.",
    },
    {
      id: "d3",
      type: "journal",
      prompt: "Adjusting entry — of \$12,000 collected in advance, the company has now delivered \$3,000 of service. Recognize the earned portion.",
      amount: "\$3,000",
      accounts: ["Unearned Revenue", "Revenue", "Cash", "Accounts Receivable", "Prepaid Insurance", "Wages Payable"],
      answer: { debit: "Unearned Revenue", credit: "Revenue" },
      explain: "Deferred revenue now earned: Dr Unearned Revenue (reduce the liability) / Cr Revenue. No cash — it was collected earlier.",
    },
    {
      id: "d4",
      type: "journal",
      prompt: "Adjusting entry — one month of a \$12,000 annual insurance prepayment has been used (\$1,000). Record the expense.",
      amount: "\$1,000",
      accounts: ["Insurance Expense", "Prepaid Insurance", "Cash", "Accounts Payable", "Revenue", "Unearned Revenue"],
      answer: { debit: "Insurance Expense", credit: "Prepaid Insurance" },
      explain: "Prepaid used up: Dr Insurance Expense / Cr Prepaid Insurance (reduce the asset). No cash — it was paid earlier.",
    },
    {
      id: "d5",
      type: "model",
      prompt: "Compute the insurance adjusting amounts. A \$12,000 annual premium was prepaid; 3 of 12 months have elapsed.",
      rows: [
        { label: "Annual premium prepaid", value: 12000, given: true },
        { label: "Months elapsed (of 12)", value: 3, given: true },
        { label: "Insurance expense to date", key: "exp", answer: 3000, hint: "premium ÷ 12 × months elapsed" },
        { label: "Prepaid insurance remaining", key: "rem", answer: 9000, hint: "premium − expense to date" },
      ],
      prefix: "$",
      explain: "Expense = 12,000 ÷ 12 × 3 = \$3,000. Remaining prepaid asset = 12,000 − 3,000 = \$9,000.",
    },
    {
      id: "d6",
      type: "model",
      prompt: "Convert cash collections to accrual revenue.",
      rows: [
        { label: "Cash collected from customers", value: 100000, given: true },
        { label: "Beginning Accounts Receivable", value: 20000, given: true },
        { label: "Ending Accounts Receivable", value: 30000, given: true },
        { label: "Increase in Accounts Receivable", key: "dar", answer: 10000, hint: "ending − beginning A/R" },
        { label: "Accrual revenue earned", key: "rev", answer: 110000, hint: "cash collected + increase in A/R" },
      ],
      prefix: "$",
      explain: "A/R rose 10,000, so 10,000 was earned but not yet collected. Accrual revenue = 100,000 + 10,000 = \$110,000.",
    },
    {
      id: "d7",
      type: "model",
      prompt: "Convert cash paid to accrual expense. Supplies were prepaid, and the prepaid balance grew during the period.",
      rows: [
        { label: "Cash paid for supplies", value: 50000, given: true },
        { label: "Beginning prepaid supplies", value: 5000, given: true },
        { label: "Ending prepaid supplies", value: 8000, given: true },
        { label: "Increase in prepaid supplies", key: "dpre", answer: 3000, hint: "ending − beginning prepaid" },
        { label: "Accrual supplies expense", key: "exp", answer: 47000, hint: "cash paid − increase in prepaid" },
      ],
      prefix: "$",
      explain: "Prepaid rose 3,000, so 3,000 of the cash bought future benefit, not this period's expense. Expense = 50,000 − 3,000 = \$47,000.",
    },
  ],
});
