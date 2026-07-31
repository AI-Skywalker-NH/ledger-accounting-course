/* ===========================================================================
   Course 2 · Module FM-7 — Comparable Company Analysis
   =========================================================================== */
Ledger.register({
  id: "fm-07",
  title: "Comparable Company Analysis",
  subtitle:
    "Relative valuation — pricing a company off the trading multiples of its peers, and bridging enterprise value to a share price.",
  est: "~60 min",
  objectives: [
    "Explain relative valuation and how it differs from a DCF.",
    "Compute the key trading multiples (EV/EBITDA, EV/EBIT, EV/Revenue, P/E).",
    "Pair enterprise-value metrics with EV and equity metrics with equity value.",
    "Apply a peer multiple to a target and bridge to value per share.",
    "Recognize the strengths and pitfalls of comps.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Relative Valuation",
      html: `
        <span class="eyebrow">Course 2 · Lesson 1 of 6</span>
        <h2>Relative Valuation</h2>
        <p>A DCF builds value from a company's own cash flows. <span class="kt">Comparable company
        analysis</span> ("comps") takes the opposite tack: a company is worth roughly what the market
        pays for <em>similar</em> companies right now. It's <span class="kt">relative</span> valuation —
        priced off peers, not first principles.</p>

        <p>The mechanic is a <span class="kt">multiple</span> — a ratio of value to a financial metric.
        If comparable businesses trade at 8× EBITDA, and your target earns \$250,000 of EBITDA, comps
        imply an enterprise value near 8 × 250,000 = \$2,000,000.</p>

        <div class="callout">
          <strong>Comps vs. DCF:</strong> comps reflect what the market will actually pay today (great
          for a real transaction) but inherit whatever mispricing is in the market. DCF is independent of
          market sentiment but hostage to its assumptions. Analysts run both and triangulate.
        </div>
      `,
    },
    {
      id: "l2",
      title: "The Key Multiples",
      html: `
        <span class="eyebrow">Course 2 · Lesson 2 of 6</span>
        <h2>The Key Multiples</h2>
        <table>
          <tr><th>Multiple</th><th>Formula</th><th>Note</th></tr>
          <tr><td><strong>EV / EBITDA</strong></td><td>Enterprise value ÷ EBITDA</td><td>The workhorse — capital-structure neutral.</td></tr>
          <tr><td>EV / EBIT</td><td>Enterprise value ÷ EBIT</td><td>After depreciation; useful when capex intensity differs.</td></tr>
          <tr><td>EV / Revenue</td><td>Enterprise value ÷ Revenue</td><td>For unprofitable or early-stage companies.</td></tr>
          <tr><td><strong>P / E</strong></td><td>Price ÷ EPS (= Equity value ÷ Net income)</td><td>An equity multiple — after interest and tax.</td></tr>
        </table>

        <p><span class="kt">EV/EBITDA</span> is the most-used because it's <strong>capital-structure
        neutral</strong>: both the numerator (enterprise value, all investors) and denominator (EBITDA,
        pre-interest) ignore how the company is financed. That lets you compare firms with different debt
        loads on equal footing — which a P/E, distorted by leverage and tax, can't.</p>

        <div class="callout">
          <strong>Enterprise value reminder:</strong> EV = equity value (market cap) + net debt, where
          net debt = total debt − cash. It's the price to buy the whole business.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Enterprise vs. Equity Multiples",
      html: `
        <span class="eyebrow">Course 2 · Lesson 3 of 6</span>
        <h2>Enterprise vs. Equity Multiples</h2>
        <p>The single most important rule in comps: <strong>match the numerator to the denominator.</strong></p>

        <table>
          <tr><th>Value</th><th>Pairs with metrics that are…</th><th>Examples</th></tr>
          <tr><td><strong>Enterprise value</strong></td><td>Before interest (all-investor)</td><td>EBITDA, EBIT, Revenue</td></tr>
          <tr><td><strong>Equity value / price</strong></td><td>After interest &amp; tax (equity-only)</td><td>Net income, EPS</td></tr>
        </table>

        <p>Enterprise value belongs to all capital providers, so it pairs with metrics computed
        <em>before</em> paying lenders (EBITDA, EBIT, revenue). Equity value belongs only to
        shareholders, so it pairs with metrics <em>after</em> interest and tax (net income, EPS). Putting
        equity value over EBITDA — or EV over net income — is a classic, fatal comps error.</p>

        <div class="callout">
          <strong>The bridge:</strong> an EV multiple gives you enterprise value; subtract net debt to
          reach equity value. A P/E gives you equity value directly. Both should reconcile.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Building the Comp Set",
      html: `
        <span class="eyebrow">Course 2 · Lesson 4 of 6</span>
        <h2>Building the Comp Set</h2>
        <p>A comps analysis is only as good as its peer group. Choose companies genuinely comparable in
        <strong>business, size, growth, and margins</strong> — not just the same broad sector.</p>

        <h3>The process</h3>
        <ol>
          <li>Select the peer set (typically 5–10 truly comparable public companies).</li>
          <li>Compute each peer's multiples (EV/EBITDA, P/E, …).</li>
          <li>Summarize with the <strong>median</strong> (and mean) to get a representative multiple.</li>
        </ol>

        <p>Analysts favor the <span class="kt">median</span> over the mean because it resists outliers —
        one peer trading at a crazy multiple can drag the average but barely moves the median. (In this
        module's grid drills we use the average, since it's a single formula; in practice, reach for the
        median.)</p>

        <div class="callout">
          <strong>Garbage comps in, garbage value out:</strong> a sloppy peer set is the top failure of
          a comps analysis. Defend every name in the set — why is it truly comparable?
        </div>
      `,
    },
    {
      id: "l5",
      title: "Applying the Multiple to the Target",
      html: `
        <span class="eyebrow">Course 2 · Lesson 5 of 6</span>
        <h2>Applying the Multiple to the Target</h2>
        <p>Take the representative peer multiple and apply it to the target's metric, then bridge to a
        share price:</p>

        <table>
          <tr><td>Chosen EV/EBITDA (from peers)</td><td>8.0×</td></tr>
          <tr><td>× Target EBITDA</td><td>250,000</td></tr>
          <tr><td><strong>= Implied enterprise value</strong></td><td><strong>2,000,000</strong></td></tr>
          <tr><td>− Net debt</td><td>400,000</td></tr>
          <tr><td><strong>= Implied equity value</strong></td><td><strong>1,600,000</strong></td></tr>
          <tr><td>÷ Shares outstanding</td><td>160,000</td></tr>
          <tr><td><strong>= Implied value per share</strong></td><td><strong>$10.00</strong></td></tr>
        </table>

        <p>Note the same enterprise-value → equity-value → per-share bridge you used in the DCF. The only
        difference is where enterprise value came from: a peer multiple instead of discounted cash flows.</p>

        <div class="callout">
          <strong>Cross-check:</strong> an implied P/E should reconcile with the EV multiple once you
          account for net debt. If EV multiples and equity multiples tell wildly different stories, dig
          into why.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Strengths, Pitfalls & the Football Field",
      html: `
        <span class="eyebrow">Course 2 · Lesson 6 of 6</span>
        <h2>Strengths, Pitfalls &amp; the Football Field</h2>
        <h3>Strengths</h3>
        <ul>
          <li>Fast, market-grounded, and easy to communicate.</li>
          <li>Reflects what buyers are actually paying right now.</li>
        </ul>
        <h3>Pitfalls</h3>
        <ul>
          <li><strong>No two companies are identical</strong> — differences in growth and margins distort raw multiples.</li>
          <li><strong>Market mispricing</strong> — if the whole sector is over/undervalued, comps inherit it.</li>
          <li><strong>Cyclicality &amp; one-offs</strong> — a depressed or inflated EBITDA warps the multiple; normalize first (FM-1).</li>
        </ul>

        <p>Because every method has flaws, bankers present a <span class="kt">football field</span> — a
        bar chart showing the valuation <em>range</em> from each method (comps, precedent transactions,
        DCF, LBO) side by side. The overlap is the defensible zone.</p>

        <div class="callout">
          <strong>Integrity again:</strong> present valuation as a range across methods, name the
          assumptions, and don't let a single multiple masquerade as a precise answer. Triangulation
          beats false precision.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Concept", front: "What is comparable company analysis?", back: "Relative valuation: pricing a company off the trading multiples of similar public companies — what the market pays for peers." },
    { id: "f2",  tag: "Concept", front: "Comps vs. DCF — the key contrast?", back: "Comps reflect current market pricing (but inherit mispricing); DCF is intrinsic (but hostage to assumptions). Use both." },
    { id: "f3",  tag: "Multiples", front: "Formula and appeal of EV/EBITDA?", back: "Enterprise value ÷ EBITDA. Capital-structure neutral — both parts ignore financing, so firms with different debt compare fairly." },
    { id: "f4",  tag: "Multiples", front: "What is the P/E multiple?", back: "Price ÷ EPS (= Equity value ÷ Net income). An equity multiple, after interest and tax." },
    { id: "f5",  tag: "Multiples", front: "When is EV/Revenue used?", back: "For unprofitable or early-stage companies with no meaningful EBITDA or earnings." },
    { id: "f6",  tag: "Multiples", front: "Enterprise value formula?", back: "EV = equity value (market cap) + net debt, where net debt = total debt − cash." },
    { id: "f7",  tag: "Pairing", front: "The cardinal rule of multiples?", back: "Match numerator to denominator: EV with pre-interest metrics (EBITDA/EBIT/Revenue); equity value/price with net income/EPS." },
    { id: "f8",  tag: "Pairing", front: "Why can't you put equity value over EBITDA?", back: "EBITDA is pre-interest (belongs to all investors); equity value is post-debt. Mixing them is a fatal comps error — use EV/EBITDA." },
    { id: "f9",  tag: "Comp set", front: "What makes a good comp set?", back: "Companies genuinely comparable in business, size, growth, and margins — not just the same broad sector." },
    { id: "f10", tag: "Comp set", front: "Why use the median multiple rather than the mean?", back: "The median resists outliers — one peer at an extreme multiple barely moves it, but can distort the average." },
    { id: "f11", tag: "Apply", front: "How do you get implied enterprise value from a peer multiple?", back: "Implied EV = chosen EV/EBITDA × target EBITDA (or the relevant metric)." },
    { id: "f12", tag: "Apply", front: "Bridge from implied EV to value per share?", back: "Equity value = EV − net debt; value per share = equity value ÷ shares outstanding." },
    { id: "f13", tag: "Pitfalls", front: "Name two pitfalls of comps.", back: "No two companies are identical (growth/margin differences), and comps inherit any sector-wide mispricing." },
    { id: "f14", tag: "Pitfalls", front: "Why normalize EBITDA before computing a multiple?", back: "Cyclical or one-off items distort EBITDA and thus the multiple; normalizing (FM-1) gives a cleaner run-rate." },
    { id: "f15", tag: "Presentation", front: "What is a 'football field'?", back: "A bar chart showing the valuation range from each method (comps, precedents, DCF, LBO) side by side; the overlap is the defensible zone." },
    { id: "f16", tag: "Discipline", front: "How should a comps-based valuation be presented?", back: "As a range, triangulated with other methods, with the peer set and assumptions defended — not a single precise number." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "Comparable company analysis values a business based on…",
      options: ["Its own discounted cash flows", "The trading multiples of similar companies", "Its book value", "Its dividend history"],
      answer: 1,
      explain: "Comps is relative valuation — it prices the target off what the market pays for comparable peers.",
    },
    {
      id: "q2",
      prompt: "Why is EV/EBITDA the most-used multiple?",
      options: ["It's always the highest", "It's capital-structure neutral — both parts ignore financing", "It uses net income", "It requires no data"],
      answer: 1,
      explain: "EV (all investors) over EBITDA (pre-interest) ignores capital structure, so firms with different leverage compare fairly.",
    },
    {
      id: "q3",
      prompt: "Which pairing is CORRECT?",
      options: ["Equity value ÷ EBITDA", "EV ÷ Net income", "EV ÷ EBITDA", "Price ÷ Revenue"],
      answer: 2,
      explain: "EV pairs with pre-interest metrics like EBITDA. Equity value/price pairs with net income/EPS. EV/EBITDA is correct.",
    },
    {
      id: "q4",
      scenario: "Market cap \$800,000; total debt \$300,000; cash \$100,000.",
      prompt: "What is enterprise value?",
      options: ["\$800,000", "\$1,000,000", "\$1,200,000", "\$600,000"],
      answer: 1,
      explain: "EV = equity value + net debt = 800,000 + (300,000 − 100,000) = \$1,000,000.",
    },
    {
      id: "q5",
      scenario: "Peers trade at 8.0× EV/EBITDA; the target's EBITDA is \$250,000.",
      prompt: "What is the implied enterprise value?",
      options: ["\$2,000,000", "\$258,000", "\$1,600,000", "\$31,250"],
      answer: 0,
      explain: "Implied EV = 8.0 × 250,000 = \$2,000,000.",
    },
    {
      id: "q6",
      scenario: "Implied EV \$2,000,000; net debt \$400,000; 160,000 shares.",
      prompt: "What is the implied value per share?",
      options: ["\$12.50", "\$10.00", "\$15.00", "\$8.00"],
      answer: 1,
      explain: "Equity value = 2,000,000 − 400,000 = 1,600,000; ÷ 160,000 = \$10.00 per share.",
    },
    {
      id: "q7",
      prompt: "Why do analysts prefer the median multiple over the mean?",
      options: ["It's larger", "It resists outliers", "It's easier to type", "It uses more comps"],
      answer: 1,
      explain: "The median isn't skewed by one peer trading at an extreme multiple, giving a more representative figure.",
    },
    {
      id: "q8",
      prompt: "A 'football field' chart is used to…",
      options: ["Track quarterly earnings", "Show the valuation range from multiple methods side by side", "Rank employees", "Plot a stock's price history"],
      answer: 1,
      explain: "It displays the valuation ranges from comps, precedents, DCF, and LBO together; their overlap is the defensible value.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Compute enterprise value and the key multiples for a company.",
      rows: [
        { label: "Market cap (equity value)", value: 800000, given: true },
        { label: "Total debt", value: 300000, given: true },
        { label: "Cash", value: 100000, given: true },
        { label: "EBITDA", value: 200000, given: true },
        { label: "Net income", value: 80000, given: true },
        { label: "Net debt", key: "nd", answer: 200000, hint: "total debt − cash" },
        { label: "Enterprise value", key: "ev", answer: 1000000, hint: "market cap + net debt" },
        { label: "EV / EBITDA (×)", key: "evebitda", answer: 5, hint: "enterprise value ÷ EBITDA" },
        { label: "P / E (×)", key: "pe", answer: 10, hint: "market cap ÷ net income" },
      ],
      prefix: "$",
      explain: "Net debt 200,000 → EV 1,000,000. EV/EBITDA = 1,000,000 ÷ 200,000 = 5.0×; P/E = 800,000 ÷ 80,000 = 10.0×.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Summarize the peer set and apply it. (Use the average of the peers; in practice, prefer the median.)",
      rows: [
        { label: "Comp A — EV/EBITDA (×)", value: 6, given: true },
        { label: "Comp B — EV/EBITDA (×)", value: 8, given: true },
        { label: "Comp C — EV/EBITDA (×)", value: 10, given: true },
        { label: "Target EBITDA", value: 250000, given: true },
        { label: "Average peer EV/EBITDA (×)", key: "avg", answer: 8, hint: "AVERAGE of the three, or (A + B + C) ÷ 3" },
        { label: "Implied enterprise value", key: "ev", answer: 2000000, hint: "average multiple × target EBITDA" },
      ],
      prefix: "$",
      explain: "Average multiple = (6 + 8 + 10) ÷ 3 = 8.0×; implied EV = 8.0 × 250,000 = \$2,000,000.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Apply the chosen multiple and bridge to value per share.",
      rows: [
        { label: "Chosen EV/EBITDA (×)", value: 8, given: true },
        { label: "Target EBITDA", value: 250000, given: true },
        { label: "Net debt", value: 400000, given: true },
        { label: "Shares outstanding", value: 160000, given: true },
        { label: "Implied enterprise value", key: "ev", answer: 2000000, hint: "multiple × EBITDA" },
        { label: "Implied equity value", key: "eq", answer: 1600000, hint: "enterprise value − net debt" },
        { label: "Implied value per share", key: "ps", answer: 10, hint: "equity value ÷ shares outstanding" },
      ],
      prefix: "$",
      explain: "Implied EV 2,000,000 − net debt 400,000 = equity value 1,600,000 ÷ 160,000 shares = \$10.00 per share.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Enterprise vs. equity multiples. Apply each multiple to the matching metric and note EV multiples agree while P/E gives equity value directly.",
      rows: [
        { label: "EBITDA", value: 250000, given: true },
        { label: "EBIT", value: 200000, given: true },
        { label: "Revenue", value: 1000000, given: true },
        { label: "Net income", value: 100000, given: true },
        { label: "EV/EBITDA (×)", value: 8, given: true },
        { label: "EV/EBIT (×)", value: 10, given: true },
        { label: "EV/Revenue (×)", value: 2, given: true },
        { label: "P/E (×)", value: 16, given: true },
        { label: "Implied EV from EV/EBITDA", key: "e1", answer: 2000000, hint: "EV/EBITDA × EBITDA" },
        { label: "Implied EV from EV/EBIT", key: "e2", answer: 2000000, hint: "EV/EBIT × EBIT" },
        { label: "Implied EV from EV/Revenue", key: "e3", answer: 2000000, hint: "EV/Revenue × Revenue" },
        { label: "Implied equity value from P/E", key: "eq", answer: 1600000, hint: "P/E × net income" },
      ],
      prefix: "$",
      explain: "All three EV multiples imply EV = \$2,000,000 (a consistent peer set). P/E implies equity value \$1,600,000 = EV − \$400,000 net debt. Metrics and values must match.",
    },
  ],
});
