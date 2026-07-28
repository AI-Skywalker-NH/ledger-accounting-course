/* ===========================================================================
   Module 2 — Debits, Credits & the T-Account
   =========================================================================== */
Ledger.register({
  id: "module-02",
  title: "Debits, Credits & the T-Account",
  subtitle:
    "How individual entries are recorded, posted, and proven — the bookkeeping engine underneath every financial statement.",
  est: "~50 min",
  objectives: [
    "Draw and read a T-account: debit (left), credit (right), and its balance.",
    "State the normal balance of every account type from the DEALER rule.",
    "Post a journal entry to the ledger and compute an account's ending balance.",
    "Build a trial balance and explain why total debits must equal total credits.",
    "Recognize contra accounts and the errors a trial balance will NOT catch.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "The T-Account",
      html: `
        <span class="eyebrow">Lesson 1 of 5</span>
        <h2>The T-Account</h2>
        <p>In Module 1 you learned that every account has two sides — a <span class="kt">debit</span>
        (left) and a <span class="kt">credit</span> (right). The <span class="kt">T-account</span> is
        just a picture of one account, shaped like the letter T: the account name on top, debits on
        the left, credits on the right.</p>

        <table>
          <tr><th colspan="2" style="text-align:center">Cash</th></tr>
          <tr><th style="text-align:center">Debit (+)</th><th style="text-align:center">Credit (−)</th></tr>
          <tr><td style="text-align:center">10,000<br>8,000</td><td style="text-align:center">5,000</td></tr>
          <tr><td style="text-align:center"><strong>Balance 13,000</strong></td><td></td></tr>
        </table>

        <p>To find an account's <strong>balance</strong>, total each side and subtract the smaller from
        the larger. The balance sits on whichever side is bigger. For Cash above: debits (10,000 +
        8,000 = 18,000) minus credits (5,000) = a <strong>13,000 debit balance</strong>.</p>

        <div class="callout">
          <strong>Why bookkeepers still think in T's:</strong> a T-account makes it obvious which side
          increases an account and lets you compute a running balance at a glance. Every ledger is
          really a stack of T-accounts.
        </div>

        <h3>Journal vs. ledger</h3>
        <ul>
          <li>The <span class="kt">journal</span> is the chronological list of entries — the diary of
          transactions, in order.</li>
          <li>The <span class="kt">ledger</span> is the same information reorganized <em>by account</em>
          — one T-account per account. Moving entries from the journal into the ledger is called
          <strong>posting</strong> (Lesson 3).</li>
        </ul>
      `,
    },
    {
      id: "l2",
      title: "Normal Balances",
      html: `
        <span class="eyebrow">Lesson 2 of 5</span>
        <h2>Normal Balances</h2>
        <p>An account's <span class="kt">normal balance</span> is the side that <em>increases</em> it —
        and therefore the side it normally rests on. This is just the DEALER rule from Module 1, viewed
        one account at a time.</p>

        <div class="equation">DEA · debit &nbsp;|&nbsp; LER · credit</div>

        <table>
          <tr><th>Account type</th><th>Increases on</th><th>Normal balance</th></tr>
          <tr><td>Assets</td><td>Debit</td><td>Debit</td></tr>
          <tr><td>Expenses</td><td>Debit</td><td>Debit</td></tr>
          <tr><td>Dividends / Draws</td><td>Debit</td><td>Debit</td></tr>
          <tr><td>Liabilities</td><td>Credit</td><td>Credit</td></tr>
          <tr><td>Equity</td><td>Credit</td><td>Credit</td></tr>
          <tr><td>Revenue</td><td>Credit</td><td>Credit</td></tr>
        </table>

        <p>To <em>decrease</em> an account, you enter on the opposite side. Paying down a loan
        (a liability, normal credit balance) is a <strong>debit</strong> to Loans Payable.</p>

        <div class="callout">
          <strong>The one-second check:</strong> ask "is this account a DEA or a LER?" DEA accounts go
          up with debits; LER accounts go up with credits. That single question resolves almost every
          entry you'll ever record.
        </div>
      `,
    },
    {
      id: "l3",
      title: "From Journal Entry to Ledger — Posting",
      html: `
        <span class="eyebrow">Lesson 3 of 5</span>
        <h2>From Journal Entry to Ledger — Posting</h2>
        <p>Recording is a two-step rhythm: first you write the <strong>journal entry</strong>, then you
        <strong>post</strong> each side into its T-account in the ledger.</p>

        <h3>Step 1 — journalize</h3>
        <p>A company provides \$4,000 of services and bills the customer (payment will come later):</p>
        <ul>
          <li>Accounts Receivable (asset) increases → <strong>debit</strong> \$4,000.</li>
          <li>Revenue (increases equity) → <strong>credit</strong> \$4,000.</li>
        </ul>
        <p>Written as an entry: <strong>Dr Accounts Receivable 4,000 / Cr Revenue 4,000.</strong>
        Debits equal credits, so the entry is balanced.</p>

        <h3>Step 2 — post</h3>
        <p>Carry each line into its T-account: the \$4,000 debit lands on the left side of the Accounts
        Receivable T-account; the \$4,000 credit lands on the right side of the Revenue T-account.</p>

        <table>
          <tr><th colspan="2" style="text-align:center">Accounts Receivable</th><th style="border:none"></th><th colspan="2" style="text-align:center">Revenue</th></tr>
          <tr><th style="text-align:center">Dr</th><th style="text-align:center">Cr</th><th style="border:none"></th><th style="text-align:center">Dr</th><th style="text-align:center">Cr</th></tr>
          <tr><td style="text-align:center">4,000</td><td></td><td style="border:none"></td><td></td><td style="text-align:center">4,000</td></tr>
        </table>

        <div class="callout">
          <strong>Nothing new happens when you post.</strong> Posting just files the same debit and
          credit under the right account so you can later read each account's balance. Journalize =
          what happened; post = where it lives.
        </div>
      `,
    },
    {
      id: "l4",
      title: "The Trial Balance",
      html: `
        <span class="eyebrow">Lesson 4 of 5</span>
        <h2>The Trial Balance</h2>
        <p>Once every entry is posted, you list every account and its balance in two columns — debit
        balances on the left, credit balances on the right. That list is the
        <span class="kt">trial balance</span>, and its whole purpose is one check:</p>

        <div class="equation">Total debits = Total credits</div>

        <p>Because every entry had equal debits and credits (the iron rule), the sum of all debit
        balances must equal the sum of all credit balances. Example:</p>

        <table>
          <tr><th>Account</th><th style="text-align:right">Debit</th><th style="text-align:right">Credit</th></tr>
          <tr><td>Cash</td><td style="text-align:right">12,000</td><td></td></tr>
          <tr><td>Equipment</td><td style="text-align:right">25,000</td><td></td></tr>
          <tr><td>Accounts Payable</td><td></td><td style="text-align:right">7,000</td></tr>
          <tr><td>Loan Payable</td><td></td><td style="text-align:right">20,000</td></tr>
          <tr><td>Contributed Capital</td><td></td><td style="text-align:right">10,000</td></tr>
          <tr><td><strong>Total</strong></td><td style="text-align:right"><strong>37,000</strong></td><td style="text-align:right"><strong>37,000</strong></td></tr>
        </table>

        <p>The columns match — the books are <em>internally consistent</em>. In a modeling context, the
        trial balance is the raw material you reorganize into the income statement and balance sheet.</p>

        <div class="callout">
          <strong>Careful:</strong> a balanced trial balance means debits equal credits — it does
          <em>not</em> mean the books are error-free. Lesson 5 covers what it misses.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Contra Accounts & What a Trial Balance Won't Catch",
      html: `
        <span class="eyebrow">Lesson 5 of 5</span>
        <h2>Contra Accounts &amp; What a Trial Balance Won't Catch</h2>

        <h3>Contra accounts</h3>
        <p>A <span class="kt">contra account</span> carries a balance <em>opposite</em> to the account
        it offsets, so you can show the original figure and the reduction separately.</p>
        <ul>
          <li><strong>Accumulated Depreciation</strong> is a contra-<em>asset</em>. Assets normally have
          debit balances, so this one has a <strong>credit</strong> balance and is subtracted from the
          equipment's cost to show its book value.</li>
          <li><strong>Allowance for Doubtful Accounts</strong> is a contra-asset that reduces Accounts
          Receivable to the amount the business realistically expects to collect.</li>
        </ul>
        <p>Contra accounts are the first place the "normal balance" rule seems to flip — but it doesn't:
        they're deliberately parked on the opposite side to net against their partner.</p>

        <h3>Errors a balanced trial balance will NOT catch</h3>
        <p>The trial balance only proves debits equal credits. It stays balanced even if:</p>
        <ul>
          <li>An <strong>entire transaction was omitted</strong> — both sides are simply missing.</li>
          <li>A transaction was <strong>recorded twice</strong>.</li>
          <li>An amount was posted to the <strong>wrong account on the correct side</strong>
          (e.g. debiting Equipment instead of Inventory).</li>
          <li>Two offsetting errors happen to cancel out.</li>
        </ul>

        <div class="callout">
          <strong>Takeaway:</strong> a balanced trial balance is necessary but not sufficient. It's a
          checksum on the mechanics — not a guarantee that every transaction was recorded correctly.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "T-account", front: "In a T-account, which side is debit and which is credit?", back: "Debit = left side, Credit = right side. The account name sits on top." },
    { id: "f2",  tag: "T-account", front: "How do you compute a T-account's balance?", back: "Total each side, subtract the smaller from the larger; the balance rests on the larger side." },
    { id: "f3",  tag: "Normal balance", front: "Normal balance of an ASSET account?", back: "Debit. Assets increase with debits (the “A” in DEALER's DEA)." },
    { id: "f4",  tag: "Normal balance", front: "Normal balance of a LIABILITY account?", back: "Credit. Liabilities increase with credits (the “L” in DEALER's LER)." },
    { id: "f5",  tag: "Normal balance", front: "Normal balance of an EXPENSE account?", back: "Debit. Expenses increase with debits." },
    { id: "f6",  tag: "Normal balance", front: "Normal balance of a REVENUE account?", back: "Credit. Revenue increases with credits." },
    { id: "f7",  tag: "Normal balance", front: "Normal balance of EQUITY?", back: "Credit. Equity increases with credits." },
    { id: "f8",  tag: "Mechanics", front: "To DECREASE a liability, do you debit or credit it?", back: "Debit. You decrease any account by entering on the side opposite its normal balance." },
    { id: "f9",  tag: "Vocabulary", front: "Journal vs. ledger?", back: "The journal lists entries chronologically; the ledger organizes the same entries by account (T-accounts)." },
    { id: "f10", tag: "Vocabulary", front: "What does 'posting' mean?", back: "Transferring each side of a journal entry into its T-account in the ledger. No new economics — just filing." },
    { id: "f11", tag: "Trial balance", front: "What is a trial balance?", back: "A list of every account and its balance in debit/credit columns, used to check that total debits = total credits." },
    { id: "f12", tag: "Trial balance", front: "Does a balanced trial balance prove the books are error-free?", back: "No. It only proves debits = credits. It misses omitted, duplicated, or misclassified entries." },
    { id: "f13", tag: "Trial balance", front: "Name two errors a trial balance will NOT catch.", back: "An entirely omitted transaction, a duplicated transaction, a posting to the wrong account on the correct side, or offsetting errors." },
    { id: "f14", tag: "Contra", front: "What is a contra account?", back: "An account with a balance opposite to the account it offsets, netted against it (e.g. Accumulated Depreciation vs. equipment)." },
    { id: "f15", tag: "Contra", front: "Normal balance of Accumulated Depreciation?", back: "Credit — it's a contra-asset that reduces the related asset's book value." },
    { id: "f16", tag: "Mechanics", front: "Buying inventory on account: which accounts, which sides?", back: "Debit Inventory (asset up), Credit Accounts Payable (liability up)." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "Which side of a T-account is the debit side?",
      options: ["The right side", "The left side", "The larger side", "Whichever side increases the account"],
      answer: 1,
      explain: "By convention, debit is always the LEFT side and credit the right — regardless of whether that side increases or decreases the particular account.",
    },
    {
      id: "q2",
      prompt: "What is the normal balance of an expense account?",
      options: ["Credit", "Debit", "Zero", "It depends on the month"],
      answer: 1,
      explain: "Expenses increase with debits (the 'E' in DEALER's DEA), so their normal balance is a debit balance.",
    },
    {
      id: "q3",
      scenario: "A company buys \$2,000 of inventory on account (on credit, to pay later).",
      prompt: "What is the correct entry?",
      options: [
        "Debit Accounts Payable; Credit Inventory",
        "Debit Inventory; Credit Cash",
        "Debit Inventory; Credit Accounts Payable",
        "Debit Cash; Credit Inventory",
      ],
      answer: 2,
      explain: "Inventory (asset) increases → debit. No cash moves yet; the obligation Accounts Payable (liability) increases → credit.",
    },
    {
      id: "q4",
      scenario: "The company later pays the \$2,000 it owed that supplier, in cash.",
      prompt: "What is the correct entry?",
      options: [
        "Debit Accounts Payable; Credit Cash",
        "Debit Cash; Credit Accounts Payable",
        "Debit Inventory; Credit Cash",
        "Debit Expense; Credit Cash",
      ],
      answer: 0,
      explain: "Paying down a liability decreases it → debit Accounts Payable. Cash (asset) decreases → credit Cash.",
    },
    {
      id: "q5",
      prompt: "A trial balance shows total debits = total credits. What does this confirm?",
      options: [
        "The books contain no errors",
        "Every transaction was recorded correctly",
        "Debits and credits are equal — the entries are internally consistent",
        "Net income is positive",
      ],
      answer: 2,
      explain: "It only confirms debits equal credits. It cannot detect omitted, duplicated, or misclassified transactions.",
    },
    {
      id: "q6",
      prompt: "Which of these errors would a balanced trial balance FAIL to reveal?",
      options: [
        "Debiting an account without a matching credit",
        "Recording a \$500 debit as a \$50 debit",
        "Forgetting to record an entire transaction",
        "Entering a credit twice but the debit once",
      ],
      answer: 2,
      explain: "An entirely omitted transaction leaves both sides missing, so the columns still balance. The other three create a debit/credit mismatch.",
    },
    {
      id: "q7",
      prompt: "What is the normal balance of Accumulated Depreciation?",
      options: ["Debit, like other assets", "Credit — it's a contra-asset", "It has no balance", "Debit, because it reduces income"],
      answer: 1,
      explain: "Accumulated Depreciation is a contra-asset. It carries a credit balance and is subtracted from the asset's cost to show book value.",
    },
    {
      id: "q8",
      scenario: "Cash begins the month with a \$10,000 debit balance. During the month it's debited \$8,000 and credited \$5,000.",
      prompt: "What is the ending balance?",
      options: ["\$7,000 debit", "\$13,000 debit", "\$23,000 debit", "\$3,000 credit"],
      answer: 1,
      explain: "For an asset: 10,000 + 8,000 (debits) − 5,000 (credits) = \$13,000 debit balance.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "journal",
      prompt: "Buy \$2,000 of inventory on account (pay the supplier later). Record the entry.",
      amount: "\$2,000",
      accounts: ["Cash", "Inventory", "Accounts Payable", "Accounts Receivable", "Revenue", "Equipment"],
      answer: { debit: "Inventory", credit: "Accounts Payable" },
      explain: "Inventory (asset) up → debit. No cash moves; Accounts Payable (liability) up → credit.",
    },
    {
      id: "d2",
      type: "journal",
      prompt: "Pay \$2,000 in cash to settle the amount owed to that supplier. Record the entry.",
      amount: "\$2,000",
      accounts: ["Cash", "Inventory", "Accounts Payable", "Accounts Receivable", "Revenue", "Equipment"],
      answer: { debit: "Accounts Payable", credit: "Cash" },
      explain: "Paying a payable decreases the liability → debit Accounts Payable. Cash (asset) down → credit Cash.",
    },
    {
      id: "d3",
      type: "journal",
      prompt: "Pay \$1,200 of office rent in cash. Record the entry.",
      amount: "\$1,200",
      accounts: ["Cash", "Rent Expense", "Accounts Payable", "Prepaid Rent", "Revenue", "Contributed Capital"],
      answer: { debit: "Rent Expense", credit: "Cash" },
      explain: "Rent Expense (an expense) up → debit. Cash (asset) down → credit. Expenses reduce equity.",
    },
    {
      id: "d4",
      type: "journal",
      prompt: "Provide \$4,000 of services and bill the customer (payment to come later). Record the entry.",
      amount: "\$4,000",
      accounts: ["Cash", "Accounts Receivable", "Unearned Revenue", "Revenue", "Accounts Payable", "Equipment"],
      answer: { debit: "Accounts Receivable", credit: "Revenue" },
      explain: "The customer owes you → Accounts Receivable (asset) up → debit. Revenue earned → credit.",
    },
    {
      id: "d5",
      type: "journal",
      prompt: "The customer pays the \$4,000 they owed. Record the entry.",
      amount: "\$4,000",
      accounts: ["Cash", "Accounts Receivable", "Unearned Revenue", "Revenue", "Accounts Payable", "Equipment"],
      answer: { debit: "Cash", credit: "Accounts Receivable" },
      explain: "Cash (asset) up → debit. The receivable is collected, so Accounts Receivable (asset) down → credit. Note: no new revenue — that was recorded when the service was provided.",
    },
    {
      id: "d6",
      type: "model",
      prompt: "Compute the ending balance of the Cash T-account (an asset).",
      rows: [
        { label: "Beginning balance (debit)", value: 10000, given: true },
        { label: "Total debits during month (increases)", value: 8000, given: true },
        { label: "Total credits during month (decreases)", value: 5000, given: true },
        { label: "Ending balance", key: "bal", answer: 13000, hint: "Beginning + debits − credits" },
      ],
      prefix: "$",
      explain: "For an asset: 10,000 + 8,000 − 5,000 = \$13,000 debit balance.",
    },
    {
      id: "d7",
      type: "model",
      prompt: "Compute the ending balance of the Accounts Payable T-account (a liability).",
      rows: [
        { label: "Beginning balance (credit)", value: 6000, given: true },
        { label: "Total credits during month (increases)", value: 9000, given: true },
        { label: "Total debits during month (decreases)", value: 4000, given: true },
        { label: "Ending balance", key: "bal", answer: 11000, hint: "Beginning + credits − debits (liability)" },
      ],
      prefix: "$",
      explain: "For a liability, increases are on the credit side: 6,000 + 9,000 − 4,000 = \$11,000 credit balance.",
    },
    {
      id: "d8",
      type: "model",
      prompt: "Total each column of this trial balance. If the mechanics are right, the two totals will match.",
      rows: [
        { label: "Cash — debit balance", value: 12000, given: true },
        { label: "Equipment — debit balance", value: 25000, given: true },
        { label: "Accounts Payable — credit balance", value: 7000, given: true },
        { label: "Loan Payable — credit balance", value: 20000, given: true },
        { label: "Contributed Capital — credit balance", value: 10000, given: true },
        { label: "Total debits", key: "dr", answer: 37000, hint: "sum the debit-balance accounts" },
        { label: "Total credits", key: "cr", answer: 37000, hint: "sum the credit-balance accounts" },
      ],
      prefix: "$",
      explain: "Debits: 12,000 + 25,000 = 37,000. Credits: 7,000 + 20,000 + 10,000 = 37,000. Equal totals — the trial balance is in balance.",
    },
  ],
});
