/* ===========================================================================
   Course 3 · Module OF-8 — Cost-Savings Methodology & Business Cases
   The capstone: turn an identified opportunity into a defensible, written case.
   =========================================================================== */
Ledger.register({
  id: "of-08",
  title: "Cost-Savings Methodology & Business Cases",
  subtitle:
    "The deliverable the whole role builds toward — a rigorous, incremental, defensible savings case, written up and taken from idea to funded project.",
  est: "~80 min",
  objectives: [
    "Frame the arc from opportunity to funded business case.",
    "Establish a baseline and compute run-rate vs. year-one savings.",
    "Count only incremental savings and avoid double-counting.",
    "Net out costs and compute payback and NPV.",
    "Structure a cost-savings white paper and make the ask.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "From Opportunity to Business Case",
      html: `
        <span class="eyebrow">Course 3 · Lesson 1 of 6</span>
        <h2>From Opportunity to Business Case</h2>
        <p>Everything in this course converges here. A <span class="kt">business case</span> takes an
        opportunity you've sized and turns it into a decision-ready proposal that answers four questions:</p>
        <ol>
          <li><strong>What's the prize?</strong> The credible, incremental savings.</li>
          <li><strong>What does it cost?</strong> Investment and ongoing cost to capture it.</li>
          <li><strong>Is it worth it?</strong> Net savings, payback, NPV.</li>
          <li><strong>What are the risks?</strong> Assumptions, sensitivities, and what could go wrong.</li>
        </ol>

        <p>The posting's arc — "draft and present white papers, taking an idea from inception to a
        full-fledged project" — is exactly this. The analysis earns the funding; the writing earns the
        decision.</p>

        <div class="callout">
          <strong>Credibility is everything:</strong> a business case lives or dies on whether leaders
          trust the numbers. One inflated or double-counted saving and the whole case — and your
          reputation — is discounted. Rigor is not optional.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Baseline & Run-Rate",
      html: `
        <span class="eyebrow">Course 3 · Lesson 2 of 6</span>
        <h2>Baseline &amp; Run-Rate</h2>
        <p>Savings are always measured <em>against a baseline</em> — what cost would be <strong>without</strong>
        the change. Get the baseline wrong and every savings number is wrong.</p>

        <p>Two savings figures matter, and people confuse them constantly:</p>
        <table>
          <tr><th>Figure</th><th>Means</th></tr>
          <tr><td><span class="kt">Run-rate savings</span></td><td>The annualized savings once fully implemented — the steady-state number.</td></tr>
          <tr><td><span class="kt">Year-one savings</span></td><td>The partial savings actually realized in the first year, given when it goes live.</td></tr>
        </table>

        <p>Cut cost per unit from \$0.50 to \$0.42 on 20,000,000 units → \$0.08 × 20M =
        <strong>\$1,600,000 run-rate</strong>. But if it launches mid-year (live 6 of 12 months), year-one
        savings are only <strong>\$800,000</strong>.</p>

        <div class="callout">
          <strong>Always label which one:</strong> leaders plan the P&amp;L on year-one (what actually
          lands this year) but judge the idea on run-rate (its full potential). Quoting run-rate as if
          it's this year's savings overstates the plan — a common and costly slip.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Incrementality & Double-Counting",
      html: `
        <span class="eyebrow">Course 3 · Lesson 3 of 6</span>
        <h2>Incrementality &amp; Double-Counting</h2>
        <p>The single most important rigor rule: count only the savings <span class="kt">incremental</span>
        to <em>this</em> initiative — savings that would not happen without it.</p>

        <p>Strip out:</p>
        <ul>
          <li><strong>Overlap</strong> — savings another project already claims (counting them here
          double-counts them across the portfolio).</li>
          <li><strong>Baseline drift</strong> — savings that would have happened anyway (from volume
          growth, existing trends).</li>
          <li><strong>Cannibalization</strong> — new cost the change creates elsewhere.</li>
        </ul>

        <p>Gross identified savings of \$1,600,000, less \$400,000 already claimed elsewhere and \$200,000
        that would have happened anyway, gives <strong>\$1,000,000 truly incremental</strong>.</p>

        <div class="callout">
          <strong>Double-counting is the cardinal sin:</strong> when every project claims overlapping
          savings, the sum of the parts far exceeds what the P&amp;L actually delivers — and finance loses
          credibility. Reconciling savings claims to the actual P&amp;L is a core part of the job.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Costs, Payback & NPV",
      html: `
        <span class="eyebrow">Course 3 · Lesson 4 of 6</span>
        <h2>Costs, Payback &amp; NPV</h2>
        <p>A prize isn't free to capture. Net the savings against the cost to get there:</p>
        <ul>
          <li><strong>One-time investment</strong> — implementation, capex, ramp.</li>
          <li><strong>Ongoing incremental cost</strong> — any new recurring cost the change adds.</li>
        </ul>
        <div class="equation">Net Annual Savings = Incremental Savings − Ongoing Cost</div>

        <p>Then judge the return the way you learned in the modeling course:</p>
        <div class="equation">Payback (years) = Investment ÷ Net Annual Savings</div>
        <p>\$1,000,000 net savings against a \$500,000 investment pays back in 0.5 years. For a multi-year
        case, discount the savings to an <span class="kt">NPV</span> (from FM-6) — a \$1,000,000/year
        stream for 3 years at a 10% rate, net of the \$500,000 upfront, is worth about \$1.99M today.</p>

        <div class="callout">
          <strong>Match the metric to the decision:</strong> payback for a quick "does this pay for
          itself fast?"; NPV for "is this the best multi-year use of capital?". A strong case usually
          shows both — and the modeling from Course 2 is exactly what powers them.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Risks, Assumptions & Sensitivity",
      html: `
        <span class="eyebrow">Course 3 · Lesson 5 of 6</span>
        <h2>Risks, Assumptions &amp; Sensitivity</h2>
        <p>Every savings number rests on assumptions — volume, the size of the per-unit saving, adoption.
        A credible case makes them explicit and <span class="kt">sensitizes</span> the ones that matter
        (straight from FM-10).</p>

        <p>Show a range, not a single point. At 20,000,000 units, a \$0.08 base saving is \$1.6M — but at a
        conservative \$0.06 it's \$1.2M, and at an optimistic \$0.10 it's \$2.0M. Present the band and,
        where you can, lead with the conservative case.</p>

        <div class="callout">
          <strong>Be your own toughest critic:</strong> name what would make the case fail (lower
          adoption, the saving not materializing, a hidden offsetting cost) before someone else does.
          Underwriting to a defensible, often conservative, number is what makes a case survive scrutiny
          — and builds the trust that gets your <em>next</em> case funded.
        </div>
      `,
    },
    {
      id: "l6",
      title: "The White Paper & the Ask",
      html: `
        <span class="eyebrow">Course 3 · Lesson 6 of 6</span>
        <h2>The White Paper &amp; the Ask</h2>
        <p>The analysis becomes a decision through a written <span class="kt">white paper</span> (the
        narrative you'll study in depth in Course 4). A cost-savings case typically runs:</p>
        <ol>
          <li><strong>The opportunity</strong> — the problem/inefficiency and why it matters.</li>
          <li><strong>The proposal</strong> — what you'd do.</li>
          <li><strong>The financials</strong> — incremental savings, cost, payback/NPV (conservative case up front).</li>
          <li><strong>Risks &amp; assumptions</strong> — honestly stated, with sensitivities.</li>
          <li><strong>The ask</strong> — the specific decision/resources you need, and the plan to execute and measure.</li>
        </ol>

        <div class="callout">
          <strong>End with a clear ask:</strong> a business case without an explicit ask is just a report.
          State exactly what you need (funding, headcount, a go-decision) and how you'll measure the
          result — closing the loop back to the metrics and variance analysis. That's the full role, and
          the end of Course 3. Course 4 builds the craft that makes all of this land.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Arc", front: "What four questions must a business case answer?", back: "What's the prize (incremental savings)? What does it cost? Is it worth it (payback/NPV)? What are the risks?" },
    { id: "f2",  tag: "Arc", front: "What makes or breaks a business case?", back: "Credibility — one inflated or double-counted number and leaders discount the whole case (and you)." },
    { id: "f3",  tag: "Baseline", front: "What is a baseline, and why does it matter?", back: "What cost would be WITHOUT the change; savings are measured against it, so a wrong baseline makes every savings number wrong." },
    { id: "f4",  tag: "Baseline", front: "Run-rate vs. year-one savings?", back: "Run-rate = annualized steady-state savings once fully live; year-one = the partial savings actually realized this year given launch timing." },
    { id: "f5",  tag: "Baseline", front: "$0.08/unit saving on 20M units, launched mid-year — run-rate and year-one?", back: "Run-rate = 0.08 × 20M = $1.6M; year-one (6/12 months) = $800,000." },
    { id: "f6",  tag: "Baseline", front: "Which figure do leaders plan the P&L on vs. judge the idea on?", back: "Plan on year-one (what lands this year); judge the idea on run-rate (full potential). Always label which." },
    { id: "f7",  tag: "Incremental", front: "The cardinal rigor rule of savings?", back: "Count only savings incremental to THIS initiative — that wouldn't happen without it." },
    { id: "f8",  tag: "Incremental", front: "Three things to strip out to get incremental savings?", back: "Overlap (another project's claim), baseline drift (would happen anyway), and cannibalization (new cost created elsewhere)." },
    { id: "f9",  tag: "Incremental", front: "Why is double-counting the cardinal sin?", back: "If projects claim overlapping savings, the parts exceed what the P&L delivers — destroying finance's credibility." },
    { id: "f10", tag: "Net case", front: "Net annual savings formula?", back: "Net Annual Savings = Incremental Savings − Ongoing Incremental Cost." },
    { id: "f11", tag: "Net case", front: "Simple payback formula?", back: "Payback (years) = Investment ÷ Net Annual Savings." },
    { id: "f12", tag: "Net case", front: "When use payback vs. NPV?", back: "Payback for 'does it pay for itself fast?'; NPV (discounting, FM-6) for 'best multi-year use of capital?'. Strong cases show both." },
    { id: "f13", tag: "Risk", front: "How should assumptions be handled in a case?", back: "Made explicit and sensitized (FM-10); show a range and often lead with the conservative case." },
    { id: "f14", tag: "Risk", front: "Why be your own toughest critic on a case?", back: "Naming what could make it fail before others do — and underwriting conservatively — is what survives scrutiny and earns trust for the next case." },
    { id: "f15", tag: "White paper", front: "The five parts of a cost-savings white paper?", back: "Opportunity → proposal → financials (conservative up front) → risks & assumptions → the ask + execution/measurement plan." },
    { id: "f16", tag: "White paper", front: "Why must a business case end with a clear ask?", back: "Without a specific ask (funding, headcount, go-decision) it's just a report; the ask + measurement plan is what drives a decision." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "Savings must always be measured against…",
      options: ["Zero", "A baseline (cost without the change)", "The best case", "Last decade's cost"],
      answer: 1,
      explain: "Savings = baseline − new. A wrong baseline makes every savings figure wrong.",
    },
    {
      id: "q2",
      scenario: "Cost per unit falls \$0.50 → \$0.42 on 20,000,000 units, launched mid-year (live 6 months).",
      prompt: "What is the run-rate (annualized) savings?",
      options: ["\$800,000", "\$1,600,000", "\$160,000", "\$2,000,000"],
      answer: 1,
      explain: "Run-rate = \$0.08 × 20,000,000 = \$1,600,000; the year-one figure would be \$800,000 (6/12 months).",
    },
    {
      id: "q3",
      prompt: "Incremental savings means savings that…",
      options: [
        "Are the largest possible",
        "Would not happen without this initiative",
        "Include other projects' savings",
        "Ignore the baseline",
      ],
      answer: 1,
      explain: "Count only what this initiative causes — strip out overlap, baseline drift, and cannibalization.",
    },
    {
      id: "q4",
      scenario: "Gross savings \$1,600,000; \$400,000 already claimed by another project; \$200,000 would happen anyway.",
      prompt: "What is the incremental savings?",
      options: ["\$1,600,000", "\$1,000,000", "\$1,200,000", "\$600,000"],
      answer: 1,
      explain: "1,600,000 − 400,000 − 200,000 = \$1,000,000 truly incremental.",
    },
    {
      id: "q5",
      scenario: "Net annual savings \$1,000,000; one-time investment \$500,000.",
      prompt: "What is the simple payback?",
      options: ["2 years", "0.5 years", "1 year", "5 years"],
      answer: 1,
      explain: "Payback = investment ÷ net annual savings = 500,000 ÷ 1,000,000 = 0.5 years.",
    },
    {
      id: "q6",
      prompt: "Double-counting savings across projects is dangerous because…",
      options: [
        "It's illegal",
        "The sum of claims exceeds what the P&L delivers, destroying credibility",
        "It lowers savings",
        "It speeds up payback",
      ],
      answer: 1,
      explain: "Overlapping claims inflate the portfolio total beyond reality; reconciling to the P&L is essential.",
    },
    {
      id: "q7",
      prompt: "A credible business case handles assumptions by…",
      options: [
        "Hiding them",
        "Making them explicit and showing a sensitized range (often leading conservative)",
        "Using only the optimistic case",
        "Ignoring risk",
      ],
      answer: 1,
      explain: "State assumptions, sensitize the key ones, and present a range — usually leading with the conservative case.",
    },
    {
      id: "q8",
      prompt: "A business case without a clear ask is…",
      options: ["Ideal", "Just a report", "Automatically approved", "A white paper"],
      answer: 1,
      explain: "The ask (specific decision/resources) plus a measurement plan is what turns analysis into a funded project.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Baseline to savings. Compute the per-unit saving, the run-rate, and the year-one savings (launched mid-year, live 6 of 12 months).",
      rows: [
        { label: "Current cost per unit ($)", value: 0.50, given: true },
        { label: "New cost per unit ($)", value: 0.42, given: true },
        { label: "Annual volume (units)", value: 20000000, given: true },
        { label: "Months live in year 1 (of 12)", value: 6, given: true },
        { label: "Savings per unit ($)", key: "spu", answer: 0.08, hint: "current − new cost per unit" },
        { label: "Annual run-rate savings ($)", key: "rr", answer: 1600000, hint: "savings per unit × annual volume" },
        { label: "Year-1 savings ($)", key: "y1", answer: 800000, hint: "run-rate × months live ÷ 12" },
      ],
      prefix: "",
      explain: "\$0.08/unit × 20M = \$1.6M run-rate; live only 6 months in year 1 → \$800,000 realized this year.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Incrementality. Strip overlap and baseline drift from the gross savings to get the truly incremental number.",
      rows: [
        { label: "Gross identified savings ($)", value: 1600000, given: true },
        { label: "Already claimed by another project ($)", value: 400000, given: true },
        { label: "Would have happened anyway ($)", value: 200000, given: true },
        { label: "Total adjustments ($)", key: "adj", answer: 600000, hint: "overlap + baseline-anyway" },
        { label: "Incremental savings ($)", key: "inc", answer: 1000000, hint: "gross − total adjustments" },
      ],
      prefix: "",
      explain: "1,600,000 − 400,000 − 200,000 = \$1,000,000 incremental — the only number you can honestly claim.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "The net case. Compute year-1 net, payback, the 3-year cumulative net, and the 3-year NPV at 10%. (NPV uses ^.)",
      rows: [
        { label: "Annual net savings ($)", value: 1000000, given: true },
        { label: "One-time investment ($)", value: 500000, given: true },
        { label: "Discount rate (%)", value: 10, given: true },
        { label: "Net year-1 savings ($)", key: "y1", answer: 500000, hint: "annual net savings − investment" },
        { label: "Simple payback (years)", key: "pb", answer: 0.5, hint: "investment ÷ annual net savings" },
        { label: "3-year cumulative net (undiscounted, $)", key: "cum", answer: 2500000, hint: "3 × annual net − investment" },
        { label: "3-year NPV at 10% ($)", key: "npv", answer: 1986851.99, hint: "-investment + savings/1.1 + savings/1.1^2 + savings/1.1^3" },
      ],
      prefix: "",
      explain: "Payback 0.5 yr; 3-yr undiscounted net \$2.5M; discounted NPV ≈ \$1,986,852 — payback for speed, NPV for capital-allocation rigor.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Sensitize the case. Compute annual savings at conservative, base, and optimistic per-unit savings on the same volume.",
      rows: [
        { label: "Annual volume (units)", value: 20000000, given: true },
        { label: "Conservative saving per unit ($)", value: 0.06, given: true },
        { label: "Base saving per unit ($)", value: 0.08, given: true },
        { label: "Optimistic saving per unit ($)", value: 0.10, given: true },
        { label: "Conservative annual savings ($)", key: "cons", answer: 1200000, hint: "conservative saving × volume" },
        { label: "Base annual savings ($)", key: "base", answer: 1600000, hint: "base saving × volume" },
        { label: "Optimistic annual savings ($)", key: "opt", answer: 2000000, hint: "optimistic saving × volume" },
      ],
      prefix: "",
      explain: "Range \$1.2M–\$2.0M around a \$1.6M base — present the band and lead with the conservative \$1.2M.",
    },
  ],
});
