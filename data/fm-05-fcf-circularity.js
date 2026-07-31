/* ===========================================================================
   Course 2 · Module FM-5 — The Cash Flow Bridge & Circularity
   Free cash flow (the input to valuation) and the circularity mechanics.
   =========================================================================== */
Ledger.register({
  id: "fm-05",
  title: "The Cash Flow Bridge & Circularity",
  subtitle:
    "Building free cash flow — the cash a business actually generates for its investors — and handling the circular logic that makes a model live.",
  est: "~60 min",
  objectives: [
    "Explain why valuation runs on free cash flow, not accounting profit.",
    "Build unlevered free cash flow (FCFF) from EBIT.",
    "Distinguish levered (FCFE) from unlevered (FCFF) free cash flow.",
    "Handle a revolver as a cash plug.",
    "Explain circularity and how models resolve it.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Why Free Cash Flow?",
      html: `
        <span class="eyebrow">Course 2 · Lesson 1 of 6</span>
        <h2>Why Free Cash Flow?</h2>
        <p>Net income is an accounting opinion shaped by non-cash charges and accrual timing. Valuation
        cares about something harder: the actual cash a business throws off that's <em>free</em> to be
        returned to the people who funded it. That's <span class="kt">free cash flow (FCF)</span>.</p>

        <p>FCF is cash from operations after the reinvestment needed to keep the business running and
        growing — capital expenditures and the increase in working capital. What's left is available to
        debt and equity investors.</p>

        <div class="callout">
          <strong>Why it's the valuation input:</strong> a company is worth the cash it will generate
          for its investors over time. The DCF module discounts exactly this stream. Everything in this
          module exists to build that number correctly.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Unlevered Free Cash Flow (FCFF)",
      html: `
        <span class="eyebrow">Course 2 · Lesson 2 of 6</span>
        <h2>Unlevered Free Cash Flow (FCFF)</h2>
        <p><span class="kt">Unlevered free cash flow</span> (free cash flow to the firm) is the cash the
        business generates <em>before</em> any financing — available to <strong>all</strong> capital
        providers, debt and equity alike. It's the standard input to an enterprise DCF. The bridge:</p>

        <table>
          <tr><td>EBIT</td><td>200,000</td></tr>
          <tr><td>× (1 − tax rate) → <strong>NOPAT</strong></td><td>150,000</td></tr>
          <tr><td>+ Depreciation &amp; amortization</td><td>+50,000</td></tr>
          <tr><td>− Capital expenditures</td><td>−60,000</td></tr>
          <tr><td>− Increase in net working capital</td><td>−40,000</td></tr>
          <tr><td><strong>= Unlevered free cash flow</strong></td><td><strong>100,000</strong></td></tr>
        </table>

        <p><span class="kt">NOPAT</span> (net operating profit after tax) = EBIT × (1 − tax). We start
        from EBIT — <em>before</em> interest — precisely because unlevered FCF ignores financing. We add
        back non-cash D&amp;A, then subtract the reinvestment (capex and working-capital growth).</p>

        <div class="callout">
          <strong>Why “unlevered”:</strong> because we start from EBIT and never touch interest, the
          result doesn't depend on the capital structure. That's what makes it the right cash flow to
          value the whole enterprise.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Levered Free Cash Flow (FCFE)",
      html: `
        <span class="eyebrow">Course 2 · Lesson 3 of 6</span>
        <h2>Levered Free Cash Flow (FCFE)</h2>
        <p><span class="kt">Levered free cash flow</span> (free cash flow to equity) is what's left for
        <strong>shareholders</strong> after debt is serviced. It <em>does</em> reflect financing:</p>
        <div class="equation">FCFE = Cash from Operations − Capex + Net Borrowing</div>
        <p>(Net borrowing = new debt drawn − debt repaid.) Because operating cash flow is already after
        interest and taxes, FCFE is the cash available specifically to equity holders.</p>

        <table>
          <tr><th></th><th>Unlevered (FCFF)</th><th>Levered (FCFE)</th></tr>
          <tr><td>Belongs to</td><td>All investors (debt + equity)</td><td>Equity only</td></tr>
          <tr><td>Starts from</td><td>EBIT</td><td>Net income / CFO</td></tr>
          <tr><td>Reflects financing?</td><td>No</td><td>Yes</td></tr>
          <tr><td>Discount at</td><td>WACC → enterprise value</td><td>Cost of equity → equity value</td></tr>
        </table>

        <div class="callout">
          <strong>Match the cash flow to the rate:</strong> unlevered FCF is discounted at WACC to get
          enterprise value; levered FCF is discounted at the cost of equity to get equity value directly.
          Mixing them is a classic valuation error.
        </div>
      `,
    },
    {
      id: "l4",
      title: "The Cash Flow Bridge in Practice",
      html: `
        <span class="eyebrow">Course 2 · Lesson 4 of 6</span>
        <h2>The Cash Flow Bridge in Practice</h2>
        <p>You'll often start the bridge from EBITDA instead of EBIT — the same destination, one extra
        step. Watch the D&amp;A: it's subtracted to compute the tax on EBIT, then added right back
        because it's non-cash.</p>

        <table>
          <tr><td>EBITDA</td><td>250,000</td></tr>
          <tr><td>− D&amp;A → EBIT</td><td>200,000</td></tr>
          <tr><td>− Tax (25% of EBIT) → NOPAT</td><td>150,000</td></tr>
          <tr><td>+ D&amp;A (add back non-cash)</td><td>+50,000</td></tr>
          <tr><td>− Capex</td><td>−60,000</td></tr>
          <tr><td>− Increase in NWC</td><td>−40,000</td></tr>
          <tr><td><strong>= Unlevered FCF</strong></td><td><strong>100,000</strong></td></tr>
        </table>

        <div class="callout">
          <strong>Don't double-count D&amp;A:</strong> it comes out (to tax EBIT, not EBITDA) and goes
          back in (it moved no cash). Taxing EBITDA directly overstates cash flow — a common slip.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Circularity & the Revolver",
      html: `
        <span class="eyebrow">Course 2 · Lesson 5 of 6</span>
        <h2>Circularity &amp; the Revolver</h2>
        <p>A live model contains a loop. <span class="kt">Interest</span> depends on the debt balance;
        if a <span class="kt">revolver</span> covers cash shortfalls, the debt balance depends on how
        much cash the business needs; cash depends on net income; and net income depends on interest.
        The snake eats its tail — that's <span class="kt">circularity</span>.</p>

        <h3>The revolver as a plug</h3>
        <p>A revolver is a credit line the model draws on automatically when cash would fall below a
        minimum, and repays from surplus. Its draw:</p>
        <div class="equation">Revolver Draw = MAX(0, Minimum Cash − Cash Before Revolver)</div>
        <p>If cash before the revolver is −15,000 and the minimum is 0, the model draws 15,000 to land at
        exactly 0. If there's surplus, the draw is zero (and it repays).</p>

        <h3>Resolving the loop</h3>
        <p>Spreadsheets resolve circularity with <strong>iterative calculation</strong> (Excel recomputes
        until the numbers stop changing), usually paired with a <strong>circularity breaker</strong>
        switch you can flip to clear errors. Know it's there and how to toggle it.</p>

        <div class="callout">
          <strong>Practical tip:</strong> many modelers base interest on <em>beginning</em> (or prior-
          period) debt to avoid circularity entirely — a clean simplification when precision to the
          penny isn't required.
        </div>
      `,
    },
    {
      id: "l6",
      title: "From FCF to Value",
      html: `
        <span class="eyebrow">Course 2 · Lesson 6 of 6</span>
        <h2>From FCF to Value</h2>
        <p>You now have the number valuation is built on. The path from here:</p>
        <ul>
          <li><strong>Unlevered FCF</strong>, discounted at WACC, gives <span class="kt">enterprise
          value</span> — the value of the whole business.</li>
          <li>Subtract <strong>net debt</strong> from enterprise value to get <span class="kt">equity
          value</span> — what belongs to shareholders.</li>
          <li>Divide equity value by shares outstanding for <strong>value per share</strong>.</li>
        </ul>

        <div class="callout">
          <strong>On to the DCF.</strong> FM-6 takes this free cash flow, projects it over an explicit
          horizon, adds a terminal value, discounts everything to today, and walks enterprise value down
          to a share price. You've built the fuel; next you build the engine.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Concept", front: "Why does valuation use free cash flow instead of net income?", back: "FCF is the actual cash available to investors after reinvestment (capex, working capital) — harder to distort than accrual profit." },
    { id: "f2",  tag: "FCFF", front: "What is unlevered free cash flow (FCFF)?", back: "Cash the business generates before financing, available to all capital providers (debt + equity). The enterprise DCF input." },
    { id: "f3",  tag: "FCFF", front: "State the unlevered FCF bridge from EBIT.", back: "NOPAT (EBIT × (1 − tax)) + D&A − Capex − Increase in NWC = Unlevered FCF." },
    { id: "f4",  tag: "FCFF", front: "What is NOPAT?", back: "Net Operating Profit After Tax = EBIT × (1 − tax rate). The unlevered, after-tax operating profit." },
    { id: "f5",  tag: "FCFF", front: "Why start the unlevered bridge from EBIT (not net income)?", back: "EBIT is before interest, so the result is independent of capital structure — right for valuing the whole firm." },
    { id: "f6",  tag: "FCFE", front: "What is levered free cash flow (FCFE)?", back: "Cash left for equity after debt service: CFO − Capex + Net Borrowing." },
    { id: "f7",  tag: "FCFE", front: "Unlevered vs. levered: who owns each, and what rate discounts each?", back: "Unlevered = all investors, discount at WACC → enterprise value. Levered = equity, discount at cost of equity → equity value." },
    { id: "f8",  tag: "Bridge", front: "Starting from EBITDA, how do you reach unlevered FCF?", back: "EBITDA − D&A = EBIT; tax it to NOPAT; add D&A back; subtract capex and the increase in NWC." },
    { id: "f9",  tag: "Bridge", front: "Why is D&A subtracted then added back in the bridge?", back: "Subtracted to tax EBIT correctly (D&A is tax-deductible); added back because it's a non-cash charge." },
    { id: "f10", tag: "Bridge", front: "What's wrong with taxing EBITDA directly?", back: "It ignores the tax shield from D&A and overstates cash flow — you must tax EBIT, then add D&A back." },
    { id: "f11", tag: "Circularity", front: "What causes circularity in a model?", back: "Interest ← debt ← cash need ← net income ← interest. A dependency loop introduced by financing (e.g. a revolver)." },
    { id: "f12", tag: "Revolver", front: "What is a revolver and its draw formula?", back: "A credit line that plugs cash shortfalls. Draw = MAX(0, Minimum Cash − Cash Before Revolver); repays from surplus." },
    { id: "f13", tag: "Circularity", front: "How do spreadsheets resolve circularity?", back: "Iterative calculation (recompute until stable), usually with a circularity-breaker switch to clear errors." },
    { id: "f14", tag: "Circularity", front: "A simple way to avoid circularity from interest?", back: "Base interest on beginning (prior-period) debt rather than average/ending debt." },
    { id: "f15", tag: "To value", front: "How do you go from unlevered FCF to equity value?", back: "Discount unlevered FCF at WACC → enterprise value; subtract net debt → equity value; ÷ shares → value per share." },
    { id: "f16", tag: "To value", front: "Enterprise value vs. equity value?", back: "Enterprise value = the whole business (all capital). Equity value = enterprise value − net debt (shareholders' portion)." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "Valuation is based on free cash flow rather than net income because…",
      options: ["FCF is always larger", "FCF is the actual cash available to investors, harder to distort than accrual profit", "Net income ignores revenue", "FCF avoids taxes"],
      answer: 1,
      explain: "FCF is cash after reinvestment that's genuinely available to investors — the thing a company's value is built on.",
    },
    {
      id: "q2",
      prompt: "NOPAT equals…",
      options: ["EBIT + taxes", "EBIT × (1 − tax rate)", "Net income + interest", "EBITDA − capex"],
      answer: 1,
      explain: "NOPAT = EBIT × (1 − tax rate) — the unlevered, after-tax operating profit that starts the FCF bridge.",
    },
    {
      id: "q3",
      scenario: "EBIT \$200,000; tax 25%; D&A \$50,000; capex \$60,000; increase in NWC \$40,000.",
      prompt: "What is unlevered free cash flow?",
      options: ["\$150,000", "\$100,000", "\$200,000", "\$90,000"],
      answer: 1,
      explain: "NOPAT = 200,000 × 0.75 = 150,000; + 50,000 D&A − 60,000 capex − 40,000 NWC = \$100,000.",
    },
    {
      id: "q4",
      prompt: "Unlevered FCF is discounted at ___ to get ___.",
      options: ["Cost of equity; equity value", "WACC; enterprise value", "The tax rate; net income", "WACC; equity value"],
      answer: 1,
      explain: "Unlevered FCF belongs to all investors, so discount at WACC → enterprise value. Levered FCF uses cost of equity → equity value.",
    },
    {
      id: "q5",
      prompt: "Why is D&A subtracted and then added back in the cash flow bridge?",
      options: [
        "It's a mistake to do both",
        "Subtracted to tax EBIT correctly; added back because it's non-cash",
        "To double-count it",
        "It's added back only for equity holders",
      ],
      answer: 1,
      explain: "D&A reduces taxable operating profit (so tax EBIT, not EBITDA), but it moves no cash, so it's added back.",
    },
    {
      id: "q6",
      scenario: "Cash before the revolver is −\$15,000 and the minimum cash balance is \$0.",
      prompt: "What is the revolver draw?",
      options: ["\$0", "\$15,000", "−\$15,000", "\$30,000"],
      answer: 1,
      explain: "Draw = MAX(0, 0 − (−15,000)) = \$15,000 — enough to bring cash up to the \$0 minimum.",
    },
    {
      id: "q7",
      prompt: "Circularity in a model arises when…",
      options: [
        "Revenue equals expenses",
        "Interest depends on debt, which depends on cash needs, which depend on net income, which depends on interest",
        "The balance sheet balances",
        "Depreciation is non-cash",
      ],
      answer: 1,
      explain: "Financing (e.g. a revolver) creates the interest↔debt↔cash↔net income loop — resolved with iterative calculation.",
    },
    {
      id: "q8",
      prompt: "Levered free cash flow (FCFE) is best described as…",
      options: ["Cash for all investors before financing", "Cash left for equity after debt service (CFO − capex + net borrowing)", "EBIT after tax", "Revenue minus COGS"],
      answer: 1,
      explain: "FCFE = CFO − Capex + Net Borrowing — the cash available specifically to shareholders after debt is serviced.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Build unlevered free cash flow (FCFF) from EBIT.",
      rows: [
        { label: "EBIT", value: 200000, given: true },
        { label: "Tax rate (%)", value: 25, given: true },
        { label: "Depreciation & amortization", value: 50000, given: true },
        { label: "Capital expenditures", value: 60000, given: true },
        { label: "Increase in net working capital", value: 40000, given: true },
        { label: "Tax on EBIT", key: "tax", answer: 50000, hint: "EBIT × tax% ÷ 100" },
        { label: "NOPAT", key: "nopat", answer: 150000, hint: "EBIT − tax on EBIT" },
        { label: "Unlevered free cash flow", key: "fcff", answer: 100000, hint: "NOPAT + D&A − capex − increase in NWC" },
      ],
      prefix: "$",
      explain: "NOPAT = 200,000 × 0.75 = 150,000; + 50,000 − 60,000 − 40,000 = \$100,000 of unlevered FCF.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Build levered free cash flow (FCFE) to equity.",
      rows: [
        { label: "Cash from operations (CFO)", value: 150000, given: true },
        { label: "Capital expenditures", value: 60000, given: true },
        { label: "Net borrowing (new debt − repaid)", value: 10000, given: true },
        { label: "Free cash flow before financing", key: "pre", answer: 90000, hint: "CFO − capex" },
        { label: "Levered FCF to equity (FCFE)", key: "fcfe", answer: 100000, hint: "CFO − capex + net borrowing" },
      ],
      prefix: "$",
      explain: "CFO 150,000 − capex 60,000 = 90,000; + 10,000 net borrowing = \$100,000 of FCFE for shareholders.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "The revolver plug. Given a cash shortfall, compute the draw and the resulting cash. (Use MAX.)",
      rows: [
        { label: "Beginning cash", value: 20000, given: true },
        { label: "Net change in cash before financing", value: -35000, given: true },
        { label: "Minimum cash balance required", value: 0, given: true },
        { label: "Cash before revolver", key: "pre", answer: -15000, hint: "beginning cash + net change" },
        { label: "Revolver draw needed", key: "draw", answer: 15000, hint: "MAX(0, minimum cash − cash before revolver)" },
        { label: "Ending cash", key: "end", answer: 0, hint: "cash before revolver + revolver draw" },
      ],
      prefix: "$",
      explain: "Cash before revolver = 20,000 − 35,000 = −15,000. Draw = MAX(0, 0 − (−15,000)) = 15,000 → ending cash \$0.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Bridge from EBITDA to unlevered free cash flow. Watch the D&A: out to tax, back in as non-cash.",
      rows: [
        { label: "EBITDA", value: 250000, given: true },
        { label: "Depreciation & amortization", value: 50000, given: true },
        { label: "Tax rate (%)", value: 25, given: true },
        { label: "Capital expenditures", value: 60000, given: true },
        { label: "Increase in net working capital", value: 40000, given: true },
        { label: "EBIT", key: "ebit", answer: 200000, hint: "EBITDA − D&A" },
        { label: "NOPAT", key: "nopat", answer: 150000, hint: "EBIT × (1 − tax% ÷ 100)" },
        { label: "Unlevered free cash flow", key: "fcff", answer: 100000, hint: "NOPAT + D&A − capex − increase in NWC" },
      ],
      prefix: "$",
      explain: "EBIT = 250,000 − 50,000 = 200,000; NOPAT 150,000; + 50,000 − 60,000 − 40,000 = \$100,000 — same FCF, EBITDA start.",
    },
  ],
});
