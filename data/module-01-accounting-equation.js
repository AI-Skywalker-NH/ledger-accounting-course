/* ===========================================================================
   Module 1 — The Accounting Equation & The Three Statements
   =========================================================================== */
Ledger.register({
  id: "module-01",
  title: "The Accounting Equation & The Three Statements",
  subtitle:
    "The single equation every financial statement is built on — and the mechanics that keep it in balance.",
  est: "~45 min",
  objectives: [
    "Explain why accounting is called “the language of business.”",
    "State the accounting equation and why it always balances.",
    "Classify items as assets, liabilities, or equity.",
    "Apply the debit/credit rules using the DEALER framework.",
    "Trace how a transaction moves through the equation via double-entry.",
    "Describe the three core statements and how they link together.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Accounting: The Language of Business",
      html: `
        <span class="eyebrow">Lesson 1 of 6</span>
        <h2>Accounting: The Language of Business</h2>
        <p>Every business — a lemonade stand or a Fortune 500 — runs on a stream of economic
        events: it sells, it buys, it borrows, it pays. <span class="kt">Accounting</span> is the
        system that records, classifies, and summarizes those events into a small set of reports
        anyone can read. That is why it is called <em>the language of business</em>: it lets an
        investor, a lender, and a manager all describe the same company using the same vocabulary.</p>

        <h3>Who reads the statements — and why</h3>
        <ul>
          <li><strong>Investors</strong> want to know if the business creates value and can grow.</li>
          <li><strong>Lenders</strong> want to know if it can repay what it borrows.</li>
          <li><strong>Managers</strong> want to know where money is made and where it leaks.</li>
        </ul>

        <p>In investment banking and equity research, you will spend your days reading these three
        reports for other companies, rebuilding them in a model, and projecting them forward. If the
        language is fluent, the modeling is mechanical. That fluency starts here.</p>

        <div class="callout">
          <strong>Why this matters for modeling:</strong> A three-statement model is just these
          reports, linked by formulas, projected into the future. You cannot model what you cannot
          read. Master the grammar first.
        </div>

        <h3>Two ground rules</h3>
        <ul>
          <li><strong>The entity is separate from its owners.</strong> A business's books track the
          business — not the owner's personal wallet.</li>
          <li><strong>Every transaction has (at least) two sides.</strong> Money always comes
          <em>from</em> somewhere and goes <em>to</em> somewhere. This is the seed of double-entry,
          which you'll meet in Lesson 4.</li>
        </ul>
      `,
    },
    {
      id: "l2",
      title: "The Accounting Equation",
      html: `
        <span class="eyebrow">Lesson 2 of 6</span>
        <h2>The Accounting Equation</h2>
        <p>Everything in accounting balances on one identity:</p>

        <div class="equation">Assets = Liabilities + Equity</div>

        <p>Read it as a story about a single question: <em>what does the company own, and who has a
        claim on it?</em></p>
        <ul>
          <li><span class="kt">Assets</span> — everything the business <strong>owns</strong> that has
          value (cash, inventory, equipment, money owed to it).</li>
          <li><span class="kt">Liabilities</span> — claims of <strong>creditors</strong> (what the
          business owes: loans, unpaid bills).</li>
          <li><span class="kt">Equity</span> — the <strong>owners'</strong> residual claim: what's
          left after creditors are paid.</li>
        </ul>

        <h3>Why it can never go out of balance</h3>
        <p>The equation is not a rule you have to enforce — it is a definition. Every asset was
        financed <em>somehow</em>: either someone the business owes (a liability) or the owners
        (equity) put it there. So the right side always explains exactly how the left side was paid
        for. Rearranged, it makes the point even more clearly:</p>

        <div class="equation">Equity = Assets − Liabilities</div>

        <p>Equity is the <strong>residual</strong>. If a company owned \$250,000 of assets and owed
        \$90,000, the owners' stake is what's left: \$160,000.</p>

        <div class="callout">
          <strong>Memory hook:</strong> "A LiE" — <strong>A</strong>ssets = <strong>Li</strong>abilities
          + <strong>E</strong>quity. If a transaction ever seems to break it, you've missed a side.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Assets, Liabilities & Equity",
      html: `
        <span class="eyebrow">Lesson 3 of 6</span>
        <h2>Assets, Liabilities &amp; Equity</h2>
        <p>Each side of the equation is made of accounts. Learning to classify them on sight is the
        core drill of this module.</p>

        <h3>Assets — what the business owns</h3>
        <table>
          <tr><th>Example</th><th>Why it's an asset</th></tr>
          <tr><td>Cash</td><td>Spendable value on hand.</td></tr>
          <tr><td>Accounts Receivable</td><td>Customers owe the business for past sales.</td></tr>
          <tr><td>Inventory</td><td>Goods held for sale.</td></tr>
          <tr><td>Equipment / PP&amp;E</td><td>Long-lived tools used to operate.</td></tr>
        </table>

        <h3>Liabilities — what the business owes</h3>
        <table>
          <tr><th>Example</th><th>Why it's a liability</th></tr>
          <tr><td>Accounts Payable</td><td>The business owes suppliers for past purchases.</td></tr>
          <tr><td>Notes / Loans Payable</td><td>Borrowed money to repay with interest.</td></tr>
          <tr><td>Unearned Revenue</td><td>Cash collected before delivering — an obligation to deliver.</td></tr>
        </table>

        <h3>Equity — the owners' residual</h3>
        <p>Equity grows and shrinks for four reasons. This is where the income statement plugs into
        the balance sheet:</p>
        <table>
          <tr><th>Increases equity</th><th>Decreases equity</th></tr>
          <tr><td>Owner investment (contributed capital)</td><td>Owner draws / dividends</td></tr>
          <tr><td>Revenue (earned)</td><td>Expenses (incurred)</td></tr>
        </table>

        <div class="callout">
          <strong>Key link:</strong> Revenue and expenses are really <em>equity</em> in motion.
          Revenue increases owners' claim; expenses reduce it. That is precisely why net income flows
          into equity — a fact you'll use in Lesson 6.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Debits & Credits — the DEALER Rule",
      html: `
        <span class="eyebrow">Lesson 4 of 6</span>
        <h2>Debits &amp; Credits — the DEALER Rule</h2>
        <p>Debit and credit simply mean <strong>left</strong> and <strong>right</strong> — the two
        sides of every account. They are not "good" or "bad," "up" or "down." Whether a debit
        increases or decreases an account depends on the account's type.</p>

        <div class="equation">DEALER</div>
        <p>Six account types, split by which side increases them:</p>
        <table>
          <tr><th>Increase with a <span class="kt">Debit</span> (left)</th><th>Increase with a <span class="kt">Credit</span> (right)</th></tr>
          <tr><td><strong>D</strong>ividends (owner draws)</td><td><strong>L</strong>iabilities</td></tr>
          <tr><td><strong>E</strong>xpenses</td><td><strong>E</strong>quity</td></tr>
          <tr><td><strong>A</strong>ssets</td><td><strong>R</strong>evenue</td></tr>
        </table>

        <p>Read it as <strong>DEA</strong> on the debit side, <strong>LER</strong> on the credit side.
        To <em>decrease</em> any account, you do the opposite side.</p>

        <div class="callout">
          <strong>The iron rule of double-entry:</strong> in every transaction,
          <strong>total debits = total credits</strong>. That equality is what keeps
          Assets = Liabilities + Equity true after every single entry.
        </div>

        <h3>Worked example</h3>
        <p>The business buys \$5,000 of equipment, paying cash.</p>
        <ul>
          <li>Equipment (an <strong>asset</strong>) goes up → <strong>debit</strong> Equipment \$5,000.</li>
          <li>Cash (an <strong>asset</strong>) goes down → <strong>credit</strong> Cash \$5,000.</li>
        </ul>
        <p>Debits \$5,000 = Credits \$5,000. One asset replaced another; the equation never moved.</p>
      `,
    },
    {
      id: "l5",
      title: "How Transactions Move the Equation",
      html: `
        <span class="eyebrow">Lesson 5 of 6</span>
        <h2>How Transactions Move the Equation</h2>
        <p>Every transaction touches at least two accounts, and after every transaction the equation
        still balances. Let's walk a young company through four events and watch the equation hold.</p>

        <table>
          <tr><th>Transaction</th><th>Assets</th><th>=</th><th>Liab.</th><th>+</th><th>Equity</th></tr>
          <tr><td>1. Owner invests \$100,000 cash</td><td>+100,000 (Cash)</td><td></td><td>—</td><td></td><td>+100,000 (Capital)</td></tr>
          <tr><td>2. Borrow \$40,000 from a bank</td><td>+40,000 (Cash)</td><td></td><td>+40,000 (Loan)</td><td></td><td>—</td></tr>
          <tr><td>3. Buy \$25,000 equipment for cash</td><td>+25,000 −25,000</td><td></td><td>—</td><td></td><td>—</td></tr>
          <tr><td>4. Provide \$8,000 of services for cash</td><td>+8,000 (Cash)</td><td></td><td>—</td><td></td><td>+8,000 (Revenue)</td></tr>
        </table>

        <p>Running totals after all four: Assets \$123,000 = Liabilities \$40,000 + Equity \$108,000. ✓</p>

        <ul>
          <li><strong>Transaction 3</strong> shows an asset swap — one asset up, another down. The
          equation doesn't move at all.</li>
          <li><strong>Transaction 4</strong> shows revenue landing in equity. Earning money makes the
          owners' claim bigger, which is why revenue lives on the equity side.</li>
        </ul>

        <div class="callout">
          <strong>Debugging tip:</strong> If your books don't balance, one side of a transaction is
          missing or mis-sized. Find the transaction where debits ≠ credits.
        </div>
      `,
    },
    {
      id: "l6",
      title: "The Three Statements & How They Link",
      html: `
        <span class="eyebrow">Lesson 6 of 6</span>
        <h2>The Three Statements &amp; How They Link</h2>
        <p>Businesses summarize all those entries into three reports. Each answers a different
        question, and — crucially — they connect.</p>

        <h3>1. Income Statement — "Did we make money?"</h3>
        <p>Revenue minus expenses over a <em>period</em> (a quarter, a year). The bottom line is
        <span class="kt">Net Income</span>.</p>
        <div class="equation">Revenue − Expenses = Net Income</div>

        <h3>2. Balance Sheet — "What do we own and owe?"</h3>
        <p>A snapshot at a <em>point in time</em>. It <strong>is</strong> the accounting equation,
        written out: Assets = Liabilities + Equity.</p>

        <h3>3. Statement of Cash Flows — "Where did the cash actually go?"</h3>
        <p>Reconciles the change in the Cash line on the balance sheet, split into Operating,
        Investing, and Financing activities. Profit and cash are <em>not</em> the same thing.</p>

        <h3>The links that make it a model</h3>
        <ul>
          <li><strong>Net Income</strong> (income statement) flows into <strong>Retained Earnings</strong>
          inside equity (balance sheet), and is the starting line of the cash flow statement.</li>
          <li><strong>Ending cash</strong> (cash flow statement) becomes the <strong>Cash</strong> line
          (balance sheet).</li>
          <li>Retained Earnings roll forward:
          <em>Beginning RE + Net Income − Dividends = Ending RE.</em></li>
        </ul>

        <div class="callout">
          <strong>This is the whole game.</strong> A three-statement model is these three reports
          wired together by exactly those links. Everything else in financial modeling is detail
          layered on top of this skeleton. You now have the skeleton.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Core", front: "State the accounting equation.", back: "Assets = Liabilities + Equity" },
    { id: "f2",  tag: "Core", front: "Rearrange the equation to isolate equity.", back: "Equity = Assets − Liabilities  (equity is the residual claim)" },
    { id: "f3",  tag: "Definitions", front: "What is an asset?", back: "A resource the business owns that has value — e.g. cash, receivables, inventory, equipment." },
    { id: "f4",  tag: "Definitions", front: "What is a liability?", back: "A claim of creditors — what the business owes. E.g. accounts payable, loans, unearned revenue." },
    { id: "f5",  tag: "Definitions", front: "What is equity?", back: "The owners' residual claim on assets after liabilities — what's left for the owners." },
    { id: "f6",  tag: "DEALER", front: "Which account types increase with a DEBIT?", back: "Dividends, Expenses, Assets (the “DEA” of DEALER)." },
    { id: "f7",  tag: "DEALER", front: "Which account types increase with a CREDIT?", back: "Liabilities, Equity, Revenue (the “LER” of DEALER)." },
    { id: "f8",  tag: "DEALER", front: "What do 'debit' and 'credit' literally mean?", back: "Left (debit) and right (credit) — the two sides of an account. Neither is inherently good or bad." },
    { id: "f9",  tag: "Rules", front: "The iron rule of double-entry?", back: "In every transaction, total debits = total credits. This keeps the equation in balance." },
    { id: "f10", tag: "Equity", front: "Four things that change equity?", back: "Up: owner investment, revenue. Down: owner draws/dividends, expenses." },
    { id: "f11", tag: "Equity", front: "Why do revenue and expenses live on the equity side?", back: "They're equity in motion — revenue increases the owners' claim; expenses decrease it." },
    { id: "f12", tag: "Statements", front: "What does the Income Statement measure, and over what horizon?", back: "Revenue − Expenses = Net Income, measured over a period of time." },
    { id: "f13", tag: "Statements", front: "The Balance Sheet is a written-out version of what?", back: "The accounting equation: Assets = Liabilities + Equity, at a single point in time." },
    { id: "f14", tag: "Statements", front: "What does the Statement of Cash Flows explain?", back: "The change in cash, split into Operating, Investing, and Financing activities." },
    { id: "f15", tag: "Links", front: "Where does Net Income go on the balance sheet?", back: "Into Retained Earnings (inside equity). It also starts the cash flow statement." },
    { id: "f16", tag: "Links", front: "Retained Earnings roll-forward formula?", back: "Beginning RE + Net Income − Dividends = Ending RE." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "A company has \$250,000 in assets and \$90,000 in liabilities. What is its equity?",
      options: ["\$340,000", "\$160,000", "\$90,000", "Cannot be determined"],
      answer: 1,
      explain: "Equity = Assets − Liabilities = 250,000 − 90,000 = \$160,000. Equity is the residual.",
    },
    {
      id: "q2",
      prompt: "Which group increases with a DEBIT?",
      options: ["Liabilities, Equity, Revenue", "Dividends, Expenses, Assets", "Revenue, Assets, Cash", "Liabilities and Expenses"],
      answer: 1,
      explain: "DEALER: Dividends, Expenses, Assets increase with debits (DEA). Liabilities, Equity, Revenue increase with credits (LER).",
    },
    {
      id: "q3",
      scenario: "The business buys \$5,000 of equipment and pays cash.",
      prompt: "What is the effect on the accounting equation?",
      options: [
        "Assets up \$5,000; Equity up \$5,000",
        "Assets unchanged; one asset up, another down",
        "Assets down \$5,000; Liabilities down \$5,000",
        "Liabilities up \$5,000; Equity down \$5,000",
      ],
      answer: 1,
      explain: "Equipment (asset) rises \$5,000 while Cash (asset) falls \$5,000. It's an asset swap — total assets and the equation are unchanged.",
    },
    {
      id: "q4",
      scenario: "The owner invests \$100,000 of personal cash into the business.",
      prompt: "How is this recorded?",
      options: [
        "Debit Cash \$100,000; Credit Contributed Capital \$100,000",
        "Debit Contributed Capital; Credit Cash",
        "Debit Cash; Credit Revenue",
        "Debit Revenue; Credit Cash",
      ],
      answer: 0,
      explain: "Cash (asset) increases → debit. Contributed Capital (equity) increases → credit. Owner investment is equity, not revenue.",
    },
    {
      id: "q5",
      prompt: "Which statement is a snapshot at a single point in time?",
      options: ["Income Statement", "Statement of Cash Flows", "Balance Sheet", "All of them"],
      answer: 2,
      explain: "The Balance Sheet is a point-in-time snapshot. The income statement and cash flow statement both cover a period of time.",
    },
    {
      id: "q6",
      prompt: "Net Income from the income statement flows into which balance-sheet account?",
      options: ["Cash", "Accounts Payable", "Retained Earnings (equity)", "Inventory"],
      answer: 2,
      explain: "Net income increases Retained Earnings within equity (Beginning RE + Net Income − Dividends = Ending RE).",
    },
    {
      id: "q7",
      scenario: "A customer pays \$3,000 in advance for services to be delivered next month.",
      prompt: "On receipt of the cash, what should be recorded?",
      options: [
        "Debit Cash; Credit Revenue",
        "Debit Cash; Credit Unearned Revenue (a liability)",
        "Debit Unearned Revenue; Credit Cash",
        "Debit Revenue; Credit Cash",
      ],
      answer: 1,
      explain: "The service isn't delivered yet, so it isn't revenue. Cash (asset) is debited; the obligation to deliver — Unearned Revenue (a liability) — is credited.",
    },
    {
      id: "q8",
      prompt: "In any single transaction, total debits must equal…",
      options: ["Total assets", "Total credits", "Net income", "Total equity"],
      answer: 1,
      explain: "Total debits always equal total credits. That equality is exactly what keeps Assets = Liabilities + Equity in balance.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "journal",
      prompt: "The business buys \$5,000 of equipment and pays cash. Record the journal entry.",
      amount: "\$5,000",
      accounts: ["Cash", "Equipment", "Accounts Payable", "Loan Payable", "Contributed Capital", "Revenue"],
      answer: { debit: "Equipment", credit: "Cash" },
      explain: "Equipment (asset) up → debit. Cash (asset) down → credit. An asset swap; the equation is unchanged.",
    },
    {
      id: "d2",
      type: "journal",
      prompt: "The owner invests \$100,000 cash to start the business. Record the journal entry.",
      amount: "\$100,000",
      accounts: ["Cash", "Equipment", "Accounts Payable", "Loan Payable", "Contributed Capital", "Revenue"],
      answer: { debit: "Cash", credit: "Contributed Capital" },
      explain: "Cash (asset) up → debit. Contributed Capital (equity) up → credit. Owner investment is equity, not revenue.",
    },
    {
      id: "d3",
      type: "journal",
      prompt: "The business provides \$8,000 of consulting services and is paid immediately in cash. Record the entry.",
      amount: "\$8,000",
      accounts: ["Cash", "Accounts Receivable", "Unearned Revenue", "Revenue", "Contributed Capital", "Loan Payable"],
      answer: { debit: "Cash", credit: "Revenue" },
      explain: "Cash (asset) up → debit. Revenue (increases equity) → credit. Earning revenue increases the owners' claim.",
    },
    {
      id: "d4",
      type: "journal",
      prompt: "The business borrows \$40,000 from a bank, received in cash. Record the entry.",
      amount: "\$40,000",
      accounts: ["Cash", "Equipment", "Accounts Payable", "Loan Payable", "Contributed Capital", "Revenue"],
      answer: { debit: "Cash", credit: "Loan Payable" },
      explain: "Cash (asset) up → debit. Loan Payable (liability) up → credit. Debt financed the new asset.",
    },
    {
      id: "d5",
      type: "model",
      prompt: "Complete the income statement. Fill in the highlighted cells.",
      rows: [
        { label: "Revenue", value: 500000, given: true },
        { label: "Cost of goods sold", value: 300000, given: true },
        { label: "Gross profit", key: "gp", answer: 200000, hint: "Revenue − COGS" },
        { label: "Operating expenses", value: 120000, given: true },
        { label: "Net income", key: "ni", answer: 80000, hint: "Gross profit − Operating expenses" },
      ],
      prefix: "$",
      explain: "Gross profit = 500,000 − 300,000 = 200,000. Net income = 200,000 − 120,000 = \$80,000.",
    },
    {
      id: "d6",
      type: "model",
      prompt: "Use the accounting equation to solve for equity.",
      rows: [
        { label: "Total assets", value: 250000, given: true },
        { label: "Total liabilities", value: 90000, given: true },
        { label: "Total equity", key: "eq", answer: 160000, hint: "Assets − Liabilities" },
      ],
      prefix: "$",
      explain: "Equity = Assets − Liabilities = 250,000 − 90,000 = \$160,000.",
    },
    {
      id: "d7",
      type: "model",
      prompt: "Roll forward retained earnings for the year.",
      rows: [
        { label: "Beginning retained earnings", value: 40000, given: true },
        { label: "Net income", value: 30000, given: true },
        { label: "Dividends paid", value: 10000, given: true },
        { label: "Ending retained earnings", key: "re", answer: 60000, hint: "Beginning + Net income − Dividends" },
      ],
      prefix: "$",
      explain: "Ending RE = 40,000 + 30,000 − 10,000 = \$60,000. This is the link between the income statement and equity.",
    },
  ],
});
