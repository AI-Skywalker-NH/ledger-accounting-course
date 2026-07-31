/* ===========================================================================
   Course 2 · Module FM-6 — DCF Valuation
   Clean example: WACC 10%, terminal g 2%. FCF grows 10% (110k/121k/133.1k)
   so each PV = 100,000; TV = 1,697,025; PV(TV) = 1,275,000; EV = 1,575,000;
   net debt 575,000 -> equity 1,000,000; 100,000 shares -> $10.00/share.
   =========================================================================== */
Ledger.register({
  id: "fm-06",
  title: "DCF Valuation",
  subtitle:
    "Valuing a business as the present value of the free cash flow it will generate — the analytical centerpiece of the modeling course.",
  est: "~90 min",
  objectives: [
    "Explain the intrinsic-value idea behind a DCF.",
    "Discount a future cash flow to present value.",
    "Compute WACC and use it as the discount rate.",
    "Calculate a terminal value with the perpetuity-growth method.",
    "Walk enterprise value down to value per share.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "A Company Is Worth Its Future Cash",
      html: `
        <span class="eyebrow">Course 2 · Lesson 1 of 6</span>
        <h2>A Company Is Worth Its Future Cash</h2>
        <p>A <span class="kt">discounted cash flow (DCF)</span> values a business from first principles:
        it is worth the cash it will generate for its investors in the future, translated into
        today's dollars.</p>

        <p>Why translate? Because of the <span class="kt">time value of money</span>: a dollar next year
        is worth less than a dollar today — you could invest today's dollar, and the future dollar
        carries risk. <span class="kt">Discounting</span> converts future cash into its worth today.</p>

        <div class="equation">Value today = Present value of all future free cash flows</div>

        <div class="callout">
          <strong>Intrinsic, not relative:</strong> unlike comps (FM-7), a DCF doesn't ask what the
          market pays for similar companies — it builds value from the company's own cash generation and
          risk. That's its strength and its vulnerability: it's only as good as the assumptions.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Discounting & Present Value",
      html: `
        <span class="eyebrow">Course 2 · Lesson 2 of 6</span>
        <h2>Discounting &amp; Present Value</h2>
        <p>The core formula converts a future amount to today's value:</p>
        <div class="equation">PV = FV ÷ (1 + r)^n</div>
        <p>where <em>r</em> is the discount rate and <em>n</em> the number of years. The
        <span class="kt">discount factor</span> 1 ÷ (1 + r)^n is what you multiply each year's cash flow
        by.</p>

        <p>At a 10% rate: \$55,000 one year out is worth 55,000 ÷ 1.10 = \$50,000 today; \$121,000 two
        years out is worth 121,000 ÷ 1.10² = \$100,000 today. Cash further in the future is discounted
        harder — the exponent grows.</p>

        <div class="callout">
          <strong>The exponent matters:</strong> discounting compounds. Year 5 cash at 10% is divided by
          1.10⁵ ≈ 1.61 — worth only ~62¢ on the dollar. This is why distant cash flows, and the terminal
          value, are so sensitive to the discount rate.
        </div>
      `,
    },
    {
      id: "l3",
      title: "The Discount Rate: WACC",
      html: `
        <span class="eyebrow">Course 2 · Lesson 3 of 6</span>
        <h2>The Discount Rate: WACC</h2>
        <p>Unlevered free cash flow belongs to all investors, so it's discounted at the blended cost of
        all capital — the <span class="kt">weighted average cost of capital (WACC)</span>:</p>
        <div class="equation">WACC = w<sub>e</sub>·k<sub>e</sub> + w<sub>d</sub>·k<sub>d</sub>·(1 − tax)</div>
        <p>Weights (w) are the shares of equity and debt in the capital structure; k<sub>e</sub> is the
        cost of equity, k<sub>d</sub> the cost of debt. Debt is multiplied by (1 − tax) because interest
        is tax-deductible — the <strong>tax shield</strong>.</p>

        <p>Example: 50% equity at 14%, 50% debt at 8%, tax 25%. After-tax cost of debt = 8% × 0.75 = 6%.
        WACC = 0.5 × 14% + 0.5 × 6% = <strong>10%</strong>.</p>

        <div class="callout">
          <strong>Cost of equity</strong> usually comes from the <span class="kt">CAPM</span>:
          k<sub>e</sub> = risk-free rate + β × equity risk premium. A higher β (more volatile stock)
          means a higher required return, a higher WACC, and — all else equal — a lower valuation.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Projecting & Discounting the FCF",
      html: `
        <span class="eyebrow">Course 2 · Lesson 4 of 6</span>
        <h2>Projecting &amp; Discounting the FCF</h2>
        <p>A DCF has two parts: an <strong>explicit forecast</strong> (usually ~5 years of projected
        unlevered FCF, from FM-4 and FM-5) and a <strong>terminal value</strong> for everything after.
        Discount each explicit year's FCF by its factor and add them up.</p>

        <p>To see discounting bite, take a flat \$100,000 FCF for three years at 10%:</p>
        <table>
          <tr><th>Year</th><th>FCF</th><th>÷ (1.10)^n</th><th>PV</th></tr>
          <tr><td>1</td><td>100,000</td><td>1.10</td><td>90,909</td></tr>
          <tr><td>2</td><td>100,000</td><td>1.21</td><td>82,645</td></tr>
          <tr><td>3</td><td>100,000</td><td>1.331</td><td>75,131</td></tr>
        </table>
        <p>Same cash each year, but its present value falls as it arrives later. Sum the PVs to get the
        present value of the explicit-period cash flows.</p>

        <div class="callout">
          <strong>On the grid:</strong> the drill uses FCF that grows at the discount rate, so every
          present value works out to a clean \$100,000 — handy for checking your formulas. Build each PV
          as <code>=FCF/(1+r)^n</code>.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Terminal Value",
      html: `
        <span class="eyebrow">Course 2 · Lesson 5 of 6</span>
        <h2>Terminal Value</h2>
        <p>A business doesn't stop at year 5. The <span class="kt">terminal value (TV)</span> captures
        the value of all cash flows beyond the explicit forecast. Two methods:</p>

        <h3>Perpetuity growth (Gordon)</h3>
        <div class="equation">TV = FCF<sub>final</sub> × (1 + g) ÷ (WACC − g)</div>
        <p>Assumes FCF grows forever at a modest rate <em>g</em> (typically ~2–3%, never above long-run
        GDP growth). Example: 100,000 × 1.02 ÷ (0.10 − 0.02) = 102,000 ÷ 0.08 = <strong>1,275,000</strong>.</p>

        <h3>Exit multiple</h3>
        <p>Applies a valuation multiple (e.g. EV/EBITDA) to a terminal-year metric — grounding TV in
        market comparables instead of a perpetuity assumption.</p>

        <p><strong>Then discount it back.</strong> The TV sits at the end of the forecast, so it must be
        discounted to today like any future amount: PV of TV = TV ÷ (1 + WACC)^n.</p>

        <div class="callout">
          <strong>The terminal value dominates:</strong> it's often 60–80% of a DCF's total value, and
          it's exquisitely sensitive to g and WACC. Small changes there swing the answer enormously —
          always sanity-check the implied multiple and stress these inputs.
        </div>
      `,
    },
    {
      id: "l6",
      title: "From Enterprise Value to Share Price",
      html: `
        <span class="eyebrow">Course 2 · Lesson 6 of 6</span>
        <h2>From Enterprise Value to Share Price</h2>
        <p>Add the present values and walk down to a per-share number:</p>
        <table>
          <tr><td>PV of explicit-period FCF</td><td>300,000</td></tr>
          <tr><td>+ PV of terminal value</td><td>1,275,000</td></tr>
          <tr><td><strong>= Enterprise value</strong></td><td><strong>1,575,000</strong></td></tr>
          <tr><td>− Net debt</td><td>575,000</td></tr>
          <tr><td><strong>= Equity value</strong></td><td><strong>1,000,000</strong></td></tr>
          <tr><td>÷ Shares outstanding</td><td>100,000</td></tr>
          <tr><td><strong>= Value per share</strong></td><td><strong>$10.00</strong></td></tr>
        </table>

        <p>Enterprise value is the whole business; subtract <span class="kt">net debt</span> (debt −
        cash) to reach the equity holders' slice, then divide by shares for intrinsic value per share —
        which you compare to the market price.</p>

        <div class="callout">
          <strong>Never trust a single output.</strong> A DCF is a range, not a point. Build a
          sensitivity table flexing WACC and terminal growth, and present the span. And keep the
          integrity rule from FM-4: a precise share price built on shaky assumptions is false precision —
          show the assumptions and where they could be wrong.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Concept", front: "What is a DCF valuation based on?", back: "A company is worth the present value of the future free cash flow it will generate for its investors." },
    { id: "f2",  tag: "Concept", front: "What is the time value of money?", back: "A dollar today is worth more than a dollar later — it can be invested and future cash carries risk; discounting reflects this." },
    { id: "f3",  tag: "Concept", front: "Intrinsic (DCF) vs. relative (comps) valuation?", back: "DCF builds value from the company's own cash flows and risk; comps read value from what the market pays for similar companies." },
    { id: "f4",  tag: "PV", front: "Present value formula?", back: "PV = FV ÷ (1 + r)^n, where r is the discount rate and n the number of years." },
    { id: "f5",  tag: "PV", front: "What is the discount factor?", back: "1 ÷ (1 + r)^n — the multiplier that converts a year-n cash flow to today's value." },
    { id: "f6",  tag: "WACC", front: "State the WACC formula.", back: "WACC = w_e·k_e + w_d·k_d·(1 − tax): equity weight × cost of equity + debt weight × after-tax cost of debt." },
    { id: "f7",  tag: "WACC", front: "Why is the cost of debt multiplied by (1 − tax)?", back: "Interest is tax-deductible — the tax shield lowers the effective cost of debt." },
    { id: "f8",  tag: "WACC", front: "Where does the cost of equity usually come from?", back: "The CAPM: k_e = risk-free rate + β × equity risk premium." },
    { id: "f9",  tag: "WACC", front: "Which cash flow is discounted at WACC?", back: "Unlevered free cash flow (FCFF), because it belongs to all capital providers → gives enterprise value." },
    { id: "f10", tag: "Terminal", front: "Perpetuity-growth (Gordon) terminal value formula?", back: "TV = FCF_final × (1 + g) ÷ (WACC − g). g is a modest perpetual growth rate, below long-run GDP." },
    { id: "f11", tag: "Terminal", front: "The other terminal-value method?", back: "Exit multiple — apply a market multiple (e.g. EV/EBITDA) to a terminal-year metric." },
    { id: "f12", tag: "Terminal", front: "After computing TV, what must you do?", back: "Discount it back to today: PV of TV = TV ÷ (1 + WACC)^n, since it sits at the end of the forecast." },
    { id: "f13", tag: "Terminal", front: "Why is the terminal value so important — and risky?", back: "It's often 60–80% of total DCF value and highly sensitive to g and WACC; small input changes swing the answer a lot." },
    { id: "f14", tag: "Bridge", front: "How do you get from enterprise value to equity value?", back: "Equity value = Enterprise value − Net debt (net debt = debt − cash)." },
    { id: "f15", tag: "Bridge", front: "How do you get value per share?", back: "Value per share = Equity value ÷ shares outstanding." },
    { id: "f16", tag: "Discipline", front: "Why present a DCF as a range?", back: "Its output is highly assumption-dependent; a sensitivity table over WACC and g shows the span and avoids false precision." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "A DCF values a company as…",
      options: ["What comparable companies trade for", "The present value of its future free cash flows", "Its book value", "Last year's net income × 10"],
      answer: 1,
      explain: "DCF is intrinsic valuation: the present value of the free cash flow the business will generate.",
    },
    {
      id: "q2",
      scenario: "A \$121,000 cash flow arrives in 2 years; the discount rate is 10%.",
      prompt: "What is its present value?",
      options: ["\$110,000", "\$100,000", "\$121,000", "\$99,174"],
      answer: 1,
      explain: "PV = 121,000 ÷ 1.10² = 121,000 ÷ 1.21 = \$100,000.",
    },
    {
      id: "q3",
      scenario: "50% equity at 14%; 50% debt at 8%; tax rate 25%.",
      prompt: "What is the WACC?",
      options: ["11%", "10%", "9%", "8%"],
      answer: 1,
      explain: "After-tax cost of debt = 8% × 0.75 = 6%. WACC = 0.5 × 14% + 0.5 × 6% = 10%.",
    },
    {
      id: "q4",
      prompt: "The cost of debt is multiplied by (1 − tax) in WACC because…",
      options: ["Debt is riskier than equity", "Interest is tax-deductible (the tax shield)", "Debt has no cost", "Dividends are deductible"],
      answer: 1,
      explain: "Interest expense reduces taxable income, so the effective (after-tax) cost of debt is lower.",
    },
    {
      id: "q5",
      scenario: "Final-year FCF \$100,000; terminal growth 2%; WACC 10%.",
      prompt: "What is the perpetuity-growth terminal value?",
      options: ["\$1,020,000", "\$1,275,000", "\$1,250,000", "\$1,500,000"],
      answer: 1,
      explain: "TV = 100,000 × 1.02 ÷ (0.10 − 0.02) = 102,000 ÷ 0.08 = \$1,275,000.",
    },
    {
      id: "q6",
      prompt: "After calculating a terminal value at the end of year 5, you must…",
      options: ["Add it to revenue", "Discount it back to today", "Multiply it by WACC", "Ignore it"],
      answer: 1,
      explain: "The TV sits at the forecast horizon, so discount it to present value: TV ÷ (1 + WACC)^n.",
    },
    {
      id: "q7",
      scenario: "Enterprise value \$1,575,000; net debt \$575,000; 100,000 shares.",
      prompt: "What is the value per share?",
      options: ["\$15.75", "\$10.00", "\$21.50", "\$5.75"],
      answer: 1,
      explain: "Equity value = 1,575,000 − 575,000 = 1,000,000; ÷ 100,000 shares = \$10.00 per share.",
    },
    {
      id: "q8",
      prompt: "Why should a DCF be presented as a range rather than a single number?",
      options: [
        "To hide the analysis",
        "Because the output is highly sensitive to assumptions like WACC and terminal growth",
        "Because share prices are always round",
        "Because comps are more accurate",
      ],
      answer: 1,
      explain: "Small changes in WACC or g move the answer a lot, so a sensitivity range is more honest than false precision.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Present value basics. Discount each cash flow to today at 10%, then total them.",
      rows: [
        { label: "Discount rate (%)", value: 10, given: true },
        { label: "Cash flow — end of year 1", value: 55000, given: true },
        { label: "Cash flow — end of year 2", value: 121000, given: true },
        { label: "PV of year 1 cash flow", key: "pv1", answer: 50000, hint: "CF ÷ (1 + rate÷100)^1" },
        { label: "PV of year 2 cash flow", key: "pv2", answer: 100000, hint: "CF ÷ (1 + rate÷100)^2" },
        { label: "Total present value", key: "tot", answer: 150000, hint: "PV1 + PV2" },
      ],
      prefix: "$",
      explain: "55,000 ÷ 1.10 = 50,000; 121,000 ÷ 1.21 = 100,000; total \$150,000. Later cash is discounted harder.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Compute the WACC. Enter weights as decimals and rates as percents.",
      rows: [
        { label: "Equity value", value: 500000, given: true },
        { label: "Debt value", value: 500000, given: true },
        { label: "Cost of equity (%)", value: 14, given: true },
        { label: "Cost of debt (%)", value: 8, given: true },
        { label: "Tax rate (%)", value: 25, given: true },
        { label: "Total capital", key: "tc", answer: 1000000, hint: "equity + debt" },
        { label: "Equity weight", key: "we", answer: 0.5, hint: "equity ÷ total capital" },
        { label: "After-tax cost of debt (%)", key: "atd", answer: 6, hint: "cost of debt × (1 − tax% ÷ 100)" },
        { label: "WACC (%)", key: "wacc", answer: 10, hint: "equity wt × cost of equity + debt wt × after-tax cost of debt" },
      ],
      prefix: "$",
      explain: "After-tax cost of debt = 8 × 0.75 = 6%. WACC = 0.5 × 14 + 0.5 × 6 = 10%.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Compute the terminal value with the perpetuity-growth (Gordon) method.",
      rows: [
        { label: "Final-year free cash flow", value: 100000, given: true },
        { label: "Terminal growth rate (%)", value: 2, given: true },
        { label: "WACC (%)", value: 10, given: true },
        { label: "Terminal value", key: "tv", answer: 1275000, hint: "FCF × (1 + g÷100) ÷ ((WACC − g) ÷ 100)" },
      ],
      prefix: "$",
      explain: "TV = 100,000 × 1.02 ÷ (0.10 − 0.02) = 102,000 ÷ 0.08 = \$1,275,000.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Full DCF. Discount three years of growing FCF, add the discounted terminal value, and walk down to value per share. (WACC 10%, terminal growth 2%.)",
      rows: [
        { label: "WACC (%)", value: 10, given: true },
        { label: "Terminal growth (%)", value: 2, given: true },
        { label: "Free cash flow — year 1", value: 110000, given: true },
        { label: "Free cash flow — year 2", value: 121000, given: true },
        { label: "Free cash flow — year 3", value: 133100, given: true },
        { label: "Net debt", value: 575000, given: true },
        { label: "Shares outstanding", value: 100000, given: true },
        { label: "PV of year 1 FCF", key: "pv1", answer: 100000, hint: "FCF1 ÷ (1.10)^1" },
        { label: "PV of year 2 FCF", key: "pv2", answer: 100000, hint: "FCF2 ÷ (1.10)^2" },
        { label: "PV of year 3 FCF", key: "pv3", answer: 100000, hint: "FCF3 ÷ (1.10)^3" },
        { label: "PV of explicit-period FCF", key: "sumpv", answer: 300000, hint: "PV1 + PV2 + PV3" },
        { label: "Terminal value (end of year 3)", key: "tv", answer: 1697025, hint: "FCF3 × (1 + g÷100) ÷ ((WACC − g)÷100)" },
        { label: "PV of terminal value", key: "pvtv", answer: 1275000, hint: "TV ÷ (1.10)^3" },
        { label: "Enterprise value", key: "ev", answer: 1575000, hint: "PV of FCF + PV of terminal value" },
        { label: "Equity value", key: "eq", answer: 1000000, hint: "enterprise value − net debt" },
        { label: "Value per share", key: "ps", answer: 10, hint: "equity value ÷ shares outstanding" },
      ],
      prefix: "$",
      explain: "Each PV = 100,000 (FCF grows at the 10% discount rate) → 300,000; TV 1,697,025 discounts to 1,275,000; EV 1,575,000; − 575,000 net debt = 1,000,000 equity; ÷ 100,000 shares = \$10.00.",
    },
  ],
});
