/* ===========================================================================
   Course 2 · Module FM-8 — LBO Modeling Basics
   Clean example: entry EBITDA 100k @ 8x -> EV 800k; debt 500k + equity 300k.
   Exit (yr5) EBITDA 150k @ 8x -> EV 1,200k; debt paid to 300k -> equity 900k.
   MOIC = 3.0x; IRR = 3^(1/5)-1 = 24.57%. All-equity MOIC would be 1.5x.
   =========================================================================== */
Ledger.register({
  id: "fm-08",
  title: "LBO Modeling Basics",
  subtitle:
    "How a leveraged buyout works and what drives its returns — entry, debt paydown, exit, and the IRR and MOIC that private equity lives by.",
  est: "~90 min",
  objectives: [
    "Explain the structure and logic of a leveraged buyout.",
    "Build the entry sources & uses (purchase price, debt, sponsor equity).",
    "Compute exit equity value after debt paydown.",
    "Calculate MOIC and IRR.",
    "Identify the three drivers of LBO returns and the role of leverage.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "What Is an LBO?",
      html: `
        <span class="eyebrow">Course 2 · Lesson 1 of 6</span>
        <h2>What Is an LBO?</h2>
        <p>In a <span class="kt">leveraged buyout</span>, a private-equity <span class="kt">sponsor</span>
        acquires a company using a large amount of borrowed money (debt) and a relatively small slice of
        its own cash (equity). Over a ~3–7 year hold, the company's cash flow pays down the debt; the
        sponsor then sells and collects the equity that has built up.</p>

        <p>Leverage is the engine. Because the sponsor puts in only a fraction of the purchase price, any
        growth in the company's value is spread over a small equity base — <strong>magnifying the return
        on that equity</strong>. The debt is repaid by the <em>company's</em> cash flow, not the
        sponsor's.</p>

        <div class="callout">
          <strong>The core bet:</strong> buy a stable, cash-generative business; use its cash to retire
          debt; sell it a few years later worth more (or simply less-indebted). The equity that was a
          thin sliver at entry can be the majority of the value at exit.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Sources & Uses (Entry)",
      html: `
        <span class="eyebrow">Course 2 · Lesson 2 of 6</span>
        <h2>Sources &amp; Uses (Entry)</h2>
        <p>The purchase price is usually set as an entry multiple of EBITDA:</p>
        <div class="equation">Purchase Enterprise Value = Entry EBITDA × Entry Multiple</div>
        <p>That price is funded by a mix of debt and sponsor equity — the <span class="kt">sources &amp;
        uses</span> table:</p>

        <table>
          <tr><th>Uses (what we buy)</th><th></th><th>Sources (how we pay)</th><th></th></tr>
          <tr><td>Enterprise value (100k × 8×)</td><td>800,000</td><td>Debt</td><td>500,000</td></tr>
          <tr><td></td><td></td><td>Sponsor equity (plug)</td><td>300,000</td></tr>
          <tr><td><strong>Total uses</strong></td><td><strong>800,000</strong></td><td><strong>Total sources</strong></td><td><strong>800,000</strong></td></tr>
        </table>

        <p>The <span class="kt">sponsor equity</span> is the plug: whatever the debt doesn't cover. Here
        the sponsor writes a \$300,000 check to buy an \$800,000 business — the rest is borrowed. (Real
        deals add transaction fees to uses; we omit them for clarity.)</p>

        <div class="callout">
          <strong>Leverage ratio:</strong> \$500,000 debt on \$100,000 EBITDA is 5.0× debt/EBITDA — the
          amount lenders will provide is itself often quoted as a multiple of EBITDA.
        </div>
      `,
    },
    {
      id: "l3",
      title: "The Debt Paydown",
      html: `
        <span class="eyebrow">Course 2 · Lesson 3 of 6</span>
        <h2>The Debt Paydown</h2>
        <p>During the hold, the company's free cash flow is used to <span class="kt">pay down debt</span>
        (a "cash sweep"). Every dollar of debt retired is a dollar that shifts from lenders to the
        sponsor's equity — even if the business's enterprise value never changes.</p>

        <div class="equation">Exit Debt = Entry Debt − Cumulative Debt Repaid</div>

        <p>In our example, the company repays \$200,000 of debt over five years, taking debt from
        \$500,000 down to \$300,000. This <span class="kt">deleveraging</span> is a pure transfer of
        value to the equity holder: less owed to lenders means more left for the owner at sale.</p>

        <div class="callout">
          <strong>Why cash-generative targets:</strong> the whole model depends on steady free cash flow
          to service and repay debt. That's why LBOs favor mature, predictable businesses over volatile,
          high-growth ones — the debt must get paid no matter what.
        </div>
      `,
    },
    {
      id: "l4",
      title: "The Exit",
      html: `
        <span class="eyebrow">Course 2 · Lesson 4 of 6</span>
        <h2>The Exit</h2>
        <p>At the end of the hold, the sponsor sells. Exit value is set the same way as entry — a
        multiple of (now larger) EBITDA:</p>
        <div class="equation">Exit Enterprise Value = Exit EBITDA × Exit Multiple</div>
        <p>Then subtract the debt that remains to find the equity the sponsor walks away with:</p>
        <div class="equation">Exit Equity = Exit Enterprise Value − Exit Debt</div>

        <table>
          <tr><td>Exit EBITDA (grown to)</td><td>150,000</td></tr>
          <tr><td>× Exit multiple</td><td>8.0×</td></tr>
          <tr><td><strong>Exit enterprise value</strong></td><td><strong>1,200,000</strong></td></tr>
          <tr><td>− Remaining debt</td><td>300,000</td></tr>
          <tr><td><strong>Exit equity value</strong></td><td><strong>900,000</strong></td></tr>
        </table>

        <p>The sponsor's \$300,000 entry equity has become \$900,000 — from EBITDA growth
        (100k → 150k) and debt paydown (500k → 300k) together.</p>

        <div class="callout">
          <strong>Multiple expansion/contraction:</strong> if the exit multiple is higher than entry,
          that alone lifts equity value; if lower, it's a headwind. Buying and selling at the same
          multiple (as here) isolates the operating and deleveraging gains.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Returns: MOIC & IRR",
      html: `
        <span class="eyebrow">Course 2 · Lesson 5 of 6</span>
        <h2>Returns: MOIC &amp; IRR</h2>
        <p>Private equity measures returns two ways.</p>

        <div class="equation">MOIC = Exit Equity ÷ Entry Equity</div>
        <p><span class="kt">MOIC</span> (multiple of invested capital) is the simple cash-on-cash
        multiple: 900,000 ÷ 300,000 = <strong>3.0×</strong>. The sponsor tripled its money — but MOIC
        ignores <em>how long</em> it took.</p>

        <div class="equation">IRR = MOIC ^ (1 ÷ Years) − 1</div>
        <p><span class="kt">IRR</span> (internal rate of return) is the annualized return, which accounts
        for time. Over 5 years: 3.0 ^ (1/5) − 1 = <strong>24.6%</strong>. (This shortcut holds when
        there's a single entry outflow and single exit inflow; with interim cash flows, IRR is computed
        across all of them.)</p>

        <div class="callout">
          <strong>MOIC vs. IRR:</strong> a 3× in 5 years (~24.6% IRR) is very different from a 3× in 10
          years (~11.6% IRR). MOIC tells you how much; IRR tells you how fast. Sponsors care about both.
        </div>
      `,
    },
    {
      id: "l6",
      title: "The Three Return Drivers",
      html: `
        <span class="eyebrow">Course 2 · Lesson 6 of 6</span>
        <h2>The Three Return Drivers</h2>
        <p>Every dollar of LBO return comes from one of three sources:</p>
        <ol>
          <li><strong>EBITDA growth</strong> — growing the business's earnings (revenue growth, margin improvement).</li>
          <li><strong>Debt paydown (deleveraging)</strong> — using cash flow to retire debt, shifting value to equity.</li>
          <li><strong>Multiple expansion</strong> — selling at a higher multiple than you bought (the least controllable — don't rely on it).</li>
        </ol>

        <h3>Leverage cuts both ways</h3>
        <p>The same leverage that magnifies gains magnifies losses. In our deal the sponsor's equity went
        3×; an all-equity buyer (paying the full \$800,000) selling at \$1,200,000 would earn just
        1.5×. But if the business had stumbled and value fallen, the leveraged equity would be wiped out
        far faster than the unleveraged. <strong>Leverage amplifies both directions.</strong></p>

        <div class="callout">
          <strong>Course 2 complete.</strong> You can now spread financials, run ratio analysis, build a
          linked three-statement model, forecast its drivers, generate free cash flow, and value a
          business by DCF, comps, and LBO. That's the core analytical toolkit of investment banking and
          private equity — built from scratch, keyboard-first.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Concept", front: "What is a leveraged buyout (LBO)?", back: "A sponsor buys a company mostly with debt and a small equity check; the company's cash flow repays the debt over a ~3–7 year hold." },
    { id: "f2",  tag: "Concept", front: "Why does leverage magnify the sponsor's return?", back: "The sponsor funds only a fraction of the price, so value gains are spread over a small equity base — amplifying % return." },
    { id: "f3",  tag: "Concept", front: "Who repays the debt in an LBO?", back: "The acquired company's own free cash flow — not the sponsor's other funds." },
    { id: "f4",  tag: "Entry", front: "How is the LBO purchase price usually set?", back: "Purchase enterprise value = entry EBITDA × entry multiple." },
    { id: "f5",  tag: "Entry", front: "In sources & uses, what is the sponsor equity?", back: "The plug — purchase price minus the debt raised. It's the sponsor's cash check." },
    { id: "f6",  tag: "Entry", front: "What does 5.0× debt/EBITDA mean?", back: "Debt equals 5 times EBITDA — lenders often size the debt as a multiple of EBITDA." },
    { id: "f7",  tag: "Paydown", front: "How does debt paydown create equity value?", back: "Every dollar of debt retired shifts value from lenders to the sponsor's equity, even if enterprise value is unchanged." },
    { id: "f8",  tag: "Paydown", front: "Exit debt formula?", back: "Exit Debt = Entry Debt − Cumulative Debt Repaid during the hold." },
    { id: "f9",  tag: "Paydown", front: "Why do LBOs target stable, cash-generative businesses?", back: "The model depends on steady free cash flow to service and repay the debt — volatile earnings are dangerous with leverage." },
    { id: "f10", tag: "Exit", front: "Exit equity value formula?", back: "Exit Equity = Exit Enterprise Value − Exit Debt, where Exit EV = exit EBITDA × exit multiple." },
    { id: "f11", tag: "Returns", front: "What is MOIC?", back: "Multiple of Invested Capital = Exit Equity ÷ Entry Equity — the cash-on-cash multiple (ignores time)." },
    { id: "f12", tag: "Returns", front: "What is IRR, and its shortcut for a single entry/exit?", back: "The annualized return. For one outflow and one inflow: IRR = MOIC^(1/years) − 1." },
    { id: "f13", tag: "Returns", front: "MOIC vs. IRR — the difference?", back: "MOIC = how much you made (total multiple); IRR = how fast (annualized, time-sensitive). A 3× in 5 vs 10 years is very different IRR." },
    { id: "f14", tag: "Drivers", front: "The three drivers of LBO returns?", back: "EBITDA growth, debt paydown (deleveraging), and multiple expansion." },
    { id: "f15", tag: "Drivers", front: "Which return driver is least reliable?", back: "Multiple expansion — it depends on market conditions at exit; disciplined sponsors don't underwrite to it." },
    { id: "f16", tag: "Risk", front: "How does leverage 'cut both ways'?", back: "It magnifies gains on the small equity base — but also magnifies losses, wiping out leveraged equity far faster if value falls." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "In an LBO, the acquisition is funded primarily with…",
      options: ["The sponsor's own equity", "Debt (borrowed money)", "Government grants", "Customer prepayments"],
      answer: 1,
      explain: "An LBO uses a large amount of debt and a small sponsor equity check; the company's cash flow repays the debt.",
    },
    {
      id: "q2",
      scenario: "Entry EBITDA \$100,000; entry multiple 8.0×; debt raised \$500,000.",
      prompt: "What sponsor equity is required?",
      options: ["\$800,000", "\$500,000", "\$300,000", "\$100,000"],
      answer: 2,
      explain: "Purchase EV = 100,000 × 8 = 800,000. Sponsor equity = 800,000 − 500,000 debt = \$300,000.",
    },
    {
      id: "q3",
      prompt: "Debt paydown during the hold creates equity value because…",
      options: ["It raises EBITDA", "It shifts value from lenders to the sponsor's equity", "It increases the multiple", "It reduces taxes to zero"],
      answer: 1,
      explain: "Retiring debt means less is owed at exit, so more of the enterprise value belongs to the equity holder.",
    },
    {
      id: "q4",
      scenario: "Exit EBITDA \$150,000; exit multiple 8.0×; remaining debt \$300,000.",
      prompt: "What is the exit equity value?",
      options: ["\$1,200,000", "\$900,000", "\$1,500,000", "\$600,000"],
      answer: 1,
      explain: "Exit EV = 150,000 × 8 = 1,200,000; minus 300,000 remaining debt = \$900,000 exit equity.",
    },
    {
      id: "q5",
      scenario: "Entry equity \$300,000; exit equity \$900,000.",
      prompt: "What is the MOIC?",
      options: ["2.0×", "3.0×", "6.0×", "0.33×"],
      answer: 1,
      explain: "MOIC = exit equity ÷ entry equity = 900,000 ÷ 300,000 = 3.0×.",
    },
    {
      id: "q6",
      scenario: "MOIC of 3.0× over a 5-year hold.",
      prompt: "Approximately what is the IRR?",
      options: ["60%", "24.6%", "15%", "30%"],
      answer: 1,
      explain: "IRR = 3.0^(1/5) − 1 ≈ 0.246 = 24.6% (single entry/exit shortcut).",
    },
    {
      id: "q7",
      prompt: "Which is NOT one of the three drivers of LBO returns?",
      options: ["EBITDA growth", "Debt paydown", "Multiple expansion", "Issuing more shares to the public"],
      answer: 3,
      explain: "The three drivers are EBITDA growth, debt paydown (deleveraging), and multiple expansion.",
    },
    {
      id: "q8",
      prompt: "'Leverage cuts both ways' means…",
      options: [
        "Debt is always repaid twice",
        "Leverage magnifies both gains and losses on the equity",
        "IRR equals MOIC",
        "Multiples never change",
      ],
      answer: 1,
      explain: "The small equity base amplifies returns when value rises — and amplifies losses just as sharply when it falls.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Entry sources & uses. Compute the purchase price and the sponsor's equity check.",
      rows: [
        { label: "Entry EBITDA", value: 100000, given: true },
        { label: "Entry EV/EBITDA multiple (×)", value: 8, given: true },
        { label: "Debt raised", value: 500000, given: true },
        { label: "Purchase enterprise value", key: "ev", answer: 800000, hint: "entry EBITDA × entry multiple" },
        { label: "Sponsor equity required", key: "eq", answer: 300000, hint: "purchase EV − debt raised" },
      ],
      prefix: "$",
      explain: "Purchase EV = 100,000 × 8 = 800,000; sponsor equity = 800,000 − 500,000 = \$300,000.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "The exit. Debt was paid down over the hold — compute remaining debt, exit EV, and exit equity.",
      rows: [
        { label: "Entry debt", value: 500000, given: true },
        { label: "Cumulative debt repaid over hold", value: 200000, given: true },
        { label: "Exit EBITDA", value: 150000, given: true },
        { label: "Exit EV/EBITDA multiple (×)", value: 8, given: true },
        { label: "Remaining debt at exit", key: "debt", answer: 300000, hint: "entry debt − cumulative repaid" },
        { label: "Exit enterprise value", key: "ev", answer: 1200000, hint: "exit EBITDA × exit multiple" },
        { label: "Exit equity value", key: "eq", answer: 900000, hint: "exit EV − remaining debt" },
      ],
      prefix: "$",
      explain: "Remaining debt = 500,000 − 200,000 = 300,000; exit EV = 150,000 × 8 = 1,200,000; exit equity = \$900,000.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Compute the returns. Enter MOIC as a multiple and IRR as a percent. (IRR uses ^.)",
      rows: [
        { label: "Entry equity", value: 300000, given: true },
        { label: "Exit equity", value: 900000, given: true },
        { label: "Hold period (years)", value: 5, given: true },
        { label: "MOIC (×)", key: "moic", answer: 3, hint: "exit equity ÷ entry equity" },
        { label: "IRR (%)", key: "irr", answer: 24.57, hint: "MOIC ^ (1 ÷ years) − 1, then × 100" },
      ],
      prefix: "$",
      explain: "MOIC = 900,000 ÷ 300,000 = 3.0×. IRR = 3^(1/5) − 1 = 24.57%. Try =(B_exit/B_entry)^(1/B_years)*100-100.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "The leverage effect. Same business, same exit — compare an all-equity buyer to the LBO sponsor.",
      rows: [
        { label: "Purchase enterprise value", value: 800000, given: true },
        { label: "Exit enterprise value", value: 1200000, given: true },
        { label: "LBO sponsor entry equity", value: 300000, given: true },
        { label: "LBO sponsor exit equity", value: 900000, given: true },
        { label: "All-equity buyer MOIC (×)", key: "ae", answer: 1.5, hint: "exit EV ÷ purchase EV (no debt)" },
        { label: "LBO sponsor MOIC (×)", key: "lbo", answer: 3, hint: "LBO exit equity ÷ LBO entry equity" },
      ],
      prefix: "$",
      explain: "All-equity: 1,200,000 ÷ 800,000 = 1.5×. LBO: 900,000 ÷ 300,000 = 3.0×. Same business — leverage doubled the multiple (and would magnify a loss too).",
    },
  ],
});
