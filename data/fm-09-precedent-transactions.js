/* ===========================================================================
   Course 2 · Module FM-9 — Precedent Transaction Analysis
   =========================================================================== */
Ledger.register({
  id: "fm-09",
  title: "Precedent Transaction Analysis",
  subtitle:
    "Valuing a company off the multiples actually paid in past M&A deals — and the control premium that makes them run higher than trading comps.",
  est: "~55 min",
  objectives: [
    "Distinguish precedent transactions from trading comps.",
    "Explain and compute a control premium.",
    "Compute a deal's EV/EBITDA multiple.",
    "Apply precedent multiples to a target and bridge to value.",
    "Weigh the strengths and limitations of precedent analysis.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Precedents vs. Trading Comps",
      html: `
        <span class="eyebrow">Course 2 · Lesson 1 of 6</span>
        <h2>Precedents vs. Trading Comps</h2>
        <p><span class="kt">Precedent transaction analysis</span> is a cousin of the trading comps from
        FM-7. Both are relative valuation, but the reference point differs:</p>

        <table>
          <tr><th></th><th>Trading comps (FM-7)</th><th>Precedent transactions</th></tr>
          <tr><td>Multiple from</td><td>Where peers <em>trade</em> today</td><td>What acquirers <em>paid</em> in past deals</td></tr>
          <tr><td>Reflects</td><td>Minority, market pricing</td><td>Control premium + synergies</td></tr>
          <tr><td>Timing</td><td>Current</td><td>Historical (deal dates)</td></tr>
        </table>

        <p>Because precedents capture prices paid to <strong>acquire whole companies</strong>, they bake
        in a <span class="kt">control premium</span> and expected synergies — so precedent multiples are
        typically <em>higher</em> than trading multiples. They answer a different question: not "what
        does the market price this at?" but "what have buyers actually paid to own one?"</p>

        <div class="callout">
          <strong>When each is used:</strong> trading comps for everyday valuation; precedent
          transactions especially in an M&amp;A context, to gauge what an acquirer might pay. Both appear
          on the football field.
        </div>
      `,
    },
    {
      id: "l2",
      title: "The Control Premium",
      html: `
        <span class="eyebrow">Course 2 · Lesson 2 of 6</span>
        <h2>The Control Premium</h2>
        <p>To buy a company, an acquirer must persuade shareholders to sell — which means paying above
        the undisturbed market price. That excess is the <span class="kt">control premium</span>:</p>
        <div class="equation">Control Premium % = (Offer Price − Unaffected Price) ÷ Unaffected Price</div>

        <p>The <span class="kt">unaffected price</span> is the share price before the deal leaked or was
        announced (rumors inflate the price). If a stock trading undisturbed at \$40 receives a \$52
        offer, the control premium is (52 − 40) ÷ 40 = <strong>30%</strong>.</p>

        <p>Why pay it? Control lets the acquirer run the business, capture <span class="kt">synergies</span>
        (cost savings, revenue gains), and direct its cash flows. Typical premiums run ~20–40%, though
        they vary widely by deal.</p>

        <div class="callout">
          <strong>This is the reason precedents run rich:</strong> the multiples embed a premium a
          trading price never does. When you apply a precedent multiple, you're implicitly valuing the
          company as an acquisition target, premium included.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Computing Deal Multiples",
      html: `
        <span class="eyebrow">Course 2 · Lesson 3 of 6</span>
        <h2>Computing Deal Multiples</h2>
        <p>A precedent multiple is just the deal's purchase price expressed against the target's metric at
        the time — most commonly:</p>
        <div class="equation">Deal EV / EBITDA = Transaction Enterprise Value ÷ Target EBITDA</div>

        <p>The transaction enterprise value is built from the offer the same way as any EV: offer equity
        value plus the target's net debt.</p>
        <table>
          <tr><td>Offer equity value (offer price × shares)</td><td>5,200,000</td></tr>
          <tr><td>+ Target net debt</td><td>800,000</td></tr>
          <tr><td><strong>= Transaction enterprise value</strong></td><td><strong>6,000,000</strong></td></tr>
          <tr><td>÷ Target EBITDA</td><td>1,000,000</td></tr>
          <tr><td><strong>= Deal EV/EBITDA</strong></td><td><strong>6.0×</strong></td></tr>
        </table>

        <div class="callout">
          <strong>Use metrics from the deal date:</strong> the EBITDA (and net debt) should be the
          target's figures at the time of the transaction — often the last-twelve-months numbers when the
          deal was struck, not today's.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Building the Precedent Set",
      html: `
        <span class="eyebrow">Course 2 · Lesson 4 of 6</span>
        <h2>Building the Precedent Set</h2>
        <p>As with comps, the analysis is only as good as the deal set. Select transactions comparable in
        <strong>industry, size, and business model</strong> — and mind the clock.</p>

        <h3>The timing problem</h3>
        <p>Precedents are historical, and market conditions change. A deal struck at the top of a cycle,
        with cheap financing and frothy valuations, will show a richer multiple than today can support (and
        vice versa in a downturn). Favor <strong>recent</strong> transactions, and be wary of deals struck
        in a very different environment.</p>

        <h3>Where the data comes from</h3>
        <p>Deal terms come from merger announcements, press releases, and merger proxies. Disclosure is
        often <em>thinner</em> than for public trading comps — sometimes you only get the headline price —
        which is a real limitation.</p>

        <div class="callout">
          <strong>Summarize with the median</strong> (as in comps) to resist outliers, and note the date
          and context of each deal in the set. A precedent multiple without its context is misleading.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Applying Precedents to the Target",
      html: `
        <span class="eyebrow">Course 2 · Lesson 5 of 6</span>
        <h2>Applying Precedents to the Target</h2>
        <p>Apply the representative deal multiple to the target's metric, then bridge to value — the same
        mechanic as comps:</p>
        <table>
          <tr><td>Median precedent EV/EBITDA</td><td>6.0×</td></tr>
          <tr><td>× Target EBITDA</td><td>1,200,000</td></tr>
          <tr><td><strong>= Implied enterprise value</strong></td><td><strong>7,200,000</strong></td></tr>
          <tr><td>− Net debt</td><td>1,000,000</td></tr>
          <tr><td><strong>= Implied equity value</strong></td><td><strong>6,200,000</strong></td></tr>
          <tr><td>÷ Shares</td><td>200,000</td></tr>
          <tr><td><strong>= Implied value per share</strong></td><td><strong>$31.00</strong></td></tr>
        </table>

        <div class="callout">
          <strong>Read it correctly:</strong> the result is an <em>acquisition</em> value — what a buyer
          might pay to own the company, premium included — not where the stock should trade on its own.
          That's why precedent-based values typically sit above trading-comps values on the football field.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Strengths & Limitations",
      html: `
        <span class="eyebrow">Course 2 · Lesson 6 of 6</span>
        <h2>Strengths &amp; Limitations</h2>
        <h3>Strengths</h3>
        <ul>
          <li>Based on <strong>real prices paid</strong>, not theoretical value.</li>
          <li>Captures the <strong>control premium and synergies</strong> an acquirer would pay for.</li>
          <li>Directly relevant when advising on or evaluating an M&amp;A deal.</li>
        </ul>
        <h3>Limitations</h3>
        <ul>
          <li><strong>Stale</strong> — deals reflect past market conditions that may not hold now.</li>
          <li><strong>Deal-specific</strong> — each price reflects that buyer's synergies, competitive
          dynamics, and motivations, which won't repeat.</li>
          <li><strong>Thin disclosure</strong> — transaction details are often incomplete.</li>
        </ul>

        <div class="callout">
          <strong>Course 2's valuation toolkit is now complete:</strong> intrinsic (DCF), trading
          relative (comps), transaction relative (precedents), and returns-based (LBO). Real valuation
          triangulates across all four and presents a range — never a single number dressed up as truth.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Concept", front: "What is precedent transaction analysis?", back: "Relative valuation using the multiples acquirers actually paid in past M&A deals for comparable companies." },
    { id: "f2",  tag: "Concept", front: "Precedents vs. trading comps — the key difference?", back: "Trading comps use where peers trade today (minority); precedents use prices paid to acquire whole companies (control premium + synergies)." },
    { id: "f3",  tag: "Concept", front: "Why are precedent multiples usually higher than trading multiples?", back: "They embed a control premium and expected synergies that a market trading price does not." },
    { id: "f4",  tag: "Premium", front: "Control premium formula?", back: "(Offer Price − Unaffected Price) ÷ Unaffected Price." },
    { id: "f5",  tag: "Premium", front: "What is the 'unaffected' price?", back: "The target's share price before the deal leaked or was announced — before rumors moved the stock." },
    { id: "f6",  tag: "Premium", front: "Why do acquirers pay a control premium?", back: "Control lets them run the business, capture synergies, and direct cash flows. Premiums typically run ~20–40%." },
    { id: "f7",  tag: "Multiples", front: "How is a deal EV/EBITDA multiple computed?", back: "Transaction enterprise value ÷ target EBITDA (at the deal date). Transaction EV = offer equity value + target net debt." },
    { id: "f8",  tag: "Multiples", front: "Which period's EBITDA is used for a deal multiple?", back: "The target's figures at the time of the transaction (often LTM at announcement), not today's." },
    { id: "f9",  tag: "Comp set", front: "What is the 'timing problem' with precedents?", back: "Deals reflect the market conditions of their time; a top-of-cycle deal shows a richer multiple than today can support. Favor recent deals." },
    { id: "f10", tag: "Comp set", front: "Where do precedent-deal data come from, and what's the catch?", back: "Merger announcements, press releases, merger proxies — but disclosure is often thinner than for public trading comps." },
    { id: "f11", tag: "Comp set", front: "How do you summarize a precedent set?", back: "Use the median (to resist outliers), noting each deal's date and context." },
    { id: "f12", tag: "Apply", front: "How do you get implied value from a precedent multiple?", back: "Implied EV = median precedent EV/EBITDA × target EBITDA; then EV − net debt = equity value; ÷ shares = per share." },
    { id: "f13", tag: "Apply", front: "What kind of value does a precedent multiple imply?", back: "An acquisition value (what a buyer might pay to own it, premium included) — not the standalone trading price." },
    { id: "f14", tag: "Strengths", front: "Two strengths of precedent analysis?", back: "Based on real prices paid, and it captures the control premium/synergies relevant to an actual acquisition." },
    { id: "f15", tag: "Limits", front: "Two limitations of precedent analysis?", back: "Data can be stale (past conditions) and deal-specific (each buyer's synergies/motivations don't repeat); disclosure is often thin." },
    { id: "f16", tag: "Toolkit", front: "The four valuation methods on the football field?", back: "DCF (intrinsic), trading comps (relative), precedent transactions (transaction relative), and LBO (returns-based)." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "Precedent transaction analysis values a company using…",
      options: ["Its discounted cash flows", "Where comparable peers trade today", "Multiples paid in past acquisitions of similar companies", "Its book value"],
      answer: 2,
      explain: "Precedents use the multiples acquirers actually paid in comparable M&A deals.",
    },
    {
      id: "q2",
      prompt: "Precedent multiples are typically higher than trading comps because they include…",
      options: ["Higher taxes", "A control premium and synergies", "More shares", "Lower debt"],
      answer: 1,
      explain: "Acquiring control requires paying a premium over market and reflects expected synergies, lifting the multiple.",
    },
    {
      id: "q3",
      scenario: "Unaffected share price \$40; offer price \$52.",
      prompt: "What is the control premium?",
      options: ["12%", "30%", "23%", "52%"],
      answer: 1,
      explain: "Control premium = (52 − 40) ÷ 40 = 30%.",
    },
    {
      id: "q4",
      scenario: "Offer equity value \$5,200,000; target net debt \$800,000; EBITDA \$1,000,000.",
      prompt: "What is the deal EV/EBITDA?",
      options: ["5.2×", "6.0×", "5.0×", "6.5×"],
      answer: 1,
      explain: "Transaction EV = 5,200,000 + 800,000 = 6,000,000; ÷ 1,000,000 EBITDA = 6.0×.",
    },
    {
      id: "q5",
      prompt: "The 'unaffected' price is the target's share price…",
      options: ["On the deal closing date", "Before the deal leaked or was announced", "One year after the deal", "At its 52-week high"],
      answer: 1,
      explain: "It's the undisturbed price before rumors or announcement moved the stock — the base for the premium.",
    },
    {
      id: "q6",
      scenario: "Median precedent EV/EBITDA 6.0×; target EBITDA \$1,200,000; net debt \$1,000,000; 200,000 shares.",
      prompt: "What is the implied value per share?",
      options: ["\$36.00", "\$31.00", "\$26.00", "\$6.00"],
      answer: 1,
      explain: "Implied EV = 6 × 1,200,000 = 7,200,000; − 1,000,000 = 6,200,000 equity; ÷ 200,000 = \$31.00.",
    },
    {
      id: "q7",
      prompt: "A key limitation of precedent transactions is that they…",
      options: ["Never include a premium", "Can be stale and deal-specific", "Use only current data", "Ignore EBITDA"],
      answer: 1,
      explain: "Deals reflect past conditions and each buyer's specific synergies/motivations, which may not repeat.",
    },
    {
      id: "q8",
      prompt: "A precedent-based value is best interpreted as…",
      options: ["The standalone trading price", "An acquisition value (premium included)", "Book value", "The liquidation value"],
      answer: 1,
      explain: "It reflects what an acquirer might pay to own the company, control premium included — typically above trading comps.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Compute the control premium and the offer's equity value.",
      rows: [
        { label: "Unaffected share price", value: 40, given: true },
        { label: "Offer price per share", value: 52, given: true },
        { label: "Shares outstanding", value: 100000, given: true },
        { label: "Control premium (%)", key: "prem", answer: 30, hint: "(offer − unaffected) ÷ unaffected × 100" },
        { label: "Offer equity value", key: "eq", answer: 5200000, hint: "offer price × shares" },
      ],
      prefix: "$",
      explain: "Control premium = (52 − 40) ÷ 40 = 30%; offer equity value = 52 × 100,000 = \$5,200,000.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Compute the transaction enterprise value and the deal EV/EBITDA multiple.",
      rows: [
        { label: "Offer equity value", value: 5200000, given: true },
        { label: "Target net debt", value: 800000, given: true },
        { label: "Target EBITDA", value: 1000000, given: true },
        { label: "Transaction enterprise value", key: "ev", answer: 6000000, hint: "offer equity value + net debt" },
        { label: "Deal EV/EBITDA (×)", key: "mult", answer: 6, hint: "transaction EV ÷ EBITDA" },
      ],
      prefix: "$",
      explain: "Transaction EV = 5,200,000 + 800,000 = 6,000,000; ÷ 1,000,000 = 6.0× EV/EBITDA paid.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Apply the median precedent multiple to the target and bridge to value per share.",
      rows: [
        { label: "Median precedent EV/EBITDA (×)", value: 6, given: true },
        { label: "Target EBITDA", value: 1200000, given: true },
        { label: "Target net debt", value: 1000000, given: true },
        { label: "Shares outstanding", value: 200000, given: true },
        { label: "Implied enterprise value", key: "ev", answer: 7200000, hint: "multiple × EBITDA" },
        { label: "Implied equity value", key: "eq", answer: 6200000, hint: "EV − net debt" },
        { label: "Implied value per share", key: "ps", answer: 31, hint: "equity value ÷ shares" },
      ],
      prefix: "$",
      explain: "6 × 1,200,000 = 7,200,000 EV; − 1,000,000 net debt = 6,200,000 equity; ÷ 200,000 = \$31.00 (an acquisition value).",
    },
    {
      id: "d4",
      type: "model",
      prompt: "The premium gap. Compare the value implied by trading comps vs. precedent transactions on the same target.",
      rows: [
        { label: "Trading comps EV/EBITDA (×)", value: 5, given: true },
        { label: "Precedent EV/EBITDA (×)", value: 6, given: true },
        { label: "Target EBITDA", value: 1000000, given: true },
        { label: "Implied EV — trading comps", key: "tc", answer: 5000000, hint: "trading multiple × EBITDA" },
        { label: "Implied EV — precedents", key: "pt", answer: 6000000, hint: "precedent multiple × EBITDA" },
        { label: "Implied control premium (%)", key: "prem", answer: 20, hint: "(precedent EV − trading EV) ÷ trading EV × 100" },
      ],
      prefix: "$",
      explain: "Trading: 5 × 1,000,000 = 5,000,000. Precedent: 6,000,000. The 20% gap is the control premium precedents embed.",
    },
  ],
});
