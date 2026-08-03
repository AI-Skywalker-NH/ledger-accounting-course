/* ===========================================================================
   Course 3 · Module OF-1 — The Role & the Mission
   Operations finance analyst embedded in a transportation/logistics network.
   =========================================================================== */
Ledger.register({
  id: "of-01",
  title: "The Role & the Mission",
  subtitle:
    "What an operations-finance analyst actually does — a thought partner to the business who turns deep operational understanding into financial insight and action.",
  est: "~55 min",
  objectives: [
    "Describe the operations-finance analyst role and how it differs from a reporting function.",
    "Explain how finance embeds in operations and earns credibility.",
    "Break the mandate into its core activities (dive deep → business case → drive → measure).",
    "Size an opportunity: quantify a cost-savings prize and its payback.",
    "Speak both the operational and financial languages of the business.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Decoding the Role",
      html: `
        <span class="eyebrow">Course 3 · Lesson 1 of 6</span>
        <h2>Decoding the Role</h2>
        <p>This role sits at the intersection of <strong>finance and operations</strong>: an analyst
        embedded within a transportation/logistics network, working alongside Operations and Technology
        leaders. The job is not to produce reports at arm's length — it's to understand how the network
        runs at a granular level and turn that understanding into <span class="kt">financial insight that
        drives action</span>.</p>

        <p>Reading the posting closely, the role is defined by five verbs:</p>
        <ul>
          <li><strong>Learn</strong> the network at the most granular level.</li>
          <li><strong>Partner</strong> with business leaders to build the business cases behind investments and cost initiatives.</li>
          <li><strong>Drive</strong> programs from concept through execution.</li>
          <li><strong>Surface</strong> inefficiencies and opportunities others miss.</li>
          <li><strong>Leverage</strong> AI-powered tools to elevate the quality of recommendations.</li>
        </ul>

        <div class="callout">
          <strong>The one-line mission:</strong> be the person who understands the operation so deeply
          that your financial analysis changes what the business decides to do. Everything in this course
          builds toward that.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Thought Partner, Not Reporting Function",
      html: `
        <span class="eyebrow">Course 3 · Lesson 2 of 6</span>
        <h2>Thought Partner, Not Reporting Function</h2>
        <p>The single biggest distinction in the posting: you are a <span class="kt">thought partner</span>
        to the business, not a reporting function that operates at arm's length. A reporting analyst
        answers "what happened?" A thought partner answers "what should we do about it, and what's it
        worth?"</p>

        <table>
          <tr><th>Reporting function</th><th>Thought partner (this role)</th></tr>
          <tr><td>Produces the number</td><td>Explains what drives the number and what to change</td></tr>
          <tr><td>Observes from the sidelines</td><td>Walks the network; learns the operation firsthand</td></tr>
          <tr><td>Reacts to requests</td><td>Surfaces opportunities others miss</td></tr>
          <tr><td>Hands off analysis</td><td>Drives the program that acts on it</td></tr>
        </table>

        <div class="callout">
          <strong>Earning credibility:</strong> the posting is explicit — you "earn credibility by showing
          up with insights that reflect genuine operational understanding." Operators trust finance
          partners who understand the floor, not just the spreadsheet. Credibility is the currency of the
          role.
        </div>
      `,
    },
    {
      id: "l3",
      title: "How Finance Embeds in Operations",
      html: `
        <span class="eyebrow">Course 3 · Lesson 3 of 6</span>
        <h2>How Finance Embeds in Operations</h2>
        <p>"Embedded" finance means you're attached to a part of the operation and accountable for
        understanding and improving its economics — not sitting in a central team fielding tickets.</p>

        <h3>What embedding looks like day to day</h3>
        <ul>
          <li><strong>Walk the network.</strong> Tour the fulfillment center or sort facility; watch the
          process; talk to the operators. You'd "rather tour a facility than read a slide deck about one."</li>
          <li><strong>Own a cost area.</strong> Know its drivers cold — what makes it go up and down.</li>
          <li><strong>Sit with the business.</strong> Join the operational reviews; understand the goals
          and constraints the operators live with.</li>
        </ul>

        <p>The payoff is that your analysis lands. When you propose a change, you already know why the
        current process exists, what the operators will object to, and where the real friction is — so
        your recommendation is credible and actionable, not theoretical.</p>

        <div class="callout">
          <strong>Ground truth beats the dataset:</strong> the numbers describe the operation, but they
          don't explain it. The best insights come from pairing the data with what you saw on the floor.
        </div>
      `,
    },
    {
      id: "l4",
      title: "The Mandate: From Insight to Action",
      html: `
        <span class="eyebrow">Course 3 · Lesson 4 of 6</span>
        <h2>The Mandate: From Insight to Action</h2>
        <p>The key responsibilities describe a repeatable arc — the core loop of the job:</p>
        <ol>
          <li><strong>Dive deep</strong> into processes and cost drivers to uncover efficiency opportunities.</li>
          <li><strong>Substantiate</strong> a strategy with data analysis, partnering with the business.</li>
          <li><strong>Develop the methodology</strong> — a defensible cost-savings calculation.</li>
          <li><strong>Write it up</strong> — a white paper taking the idea from inception to a full project.</li>
          <li><strong>Design the metrics</strong> and business-review docs to guide execution.</li>
          <li><strong>Measure the impact</strong> on both the P&amp;L and the customer experience.</li>
        </ol>

        <p>Notice the loop starts and ends in the operation: a floor-level insight becomes a quantified
        opportunity, becomes a written proposal, becomes a launched program, becomes a measured result.
        Analysis that never becomes action is, in this role, incomplete work.</p>

        <div class="callout">
          <strong>Two scorecards, always:</strong> impact is measured on the <strong>P&amp;L</strong>
          (cost saved, margin gained) <em>and</em> the <strong>customer experience</strong> (speed,
          reliability). A cost cut that degrades the customer isn't a win — hold both in view.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Sizing an Opportunity",
      html: `
        <span class="eyebrow">Course 3 · Lesson 5 of 6</span>
        <h2>Sizing an Opportunity</h2>
        <p>The most common analytical move in the role is <span class="kt">sizing the prize</span> —
        quickly quantifying what an idea is worth. In a high-volume network, tiny per-unit changes scale
        into enormous numbers:</p>
        <div class="equation">Annual Savings = Savings per Unit × Annual Volume</div>

        <p>Shaving \$0.05 off the cost of handling a package sounds trivial — until you multiply by 40
        million packages a year: <strong>\$2,000,000</strong>. That leverage is why "Think Big" matters
        and why the details matter: at scale, a rounding error is a real number.</p>

        <p>A credible size also nets out the cost to capture it and states the payback:</p>
        <div class="equation">Payback (years) = Implementation Cost ÷ Annual Savings</div>

        <div class="callout">
          <strong>Rigor from the start:</strong> use the <em>right</em> volume (annualized, in-scope
          only), separate one-time costs from run-rate savings, and never double-count a saving another
          project already claims. A sloppy size destroys credibility faster than anything.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Speaking Two Languages",
      html: `
        <span class="eyebrow">Course 3 · Lesson 6 of 6</span>
        <h2>Speaking Two Languages</h2>
        <p>To be a thought partner you must be <span class="kt">bilingual</span> — fluent in the language
        of operations <em>and</em> the language of finance, and able to translate between them.</p>

        <table>
          <tr><th>Operators say…</th><th>You translate to…</th></tr>
          <tr><td>Units per hour dropped</td><td>Labor cost per unit rose → margin impact</td></tr>
          <tr><td>We're adding a night shift</td><td>Fixed cost step-up; needs volume to justify</td></tr>
          <tr><td>Trailers are running half-empty</td><td>Transportation cost per unit is inflated → savings opportunity</td></tr>
        </table>

        <p>Fluency in both directions is what earns you a seat at the table: operators trust you because
        you understand their world; finance trusts you because you tie it to the P&amp;L. The rest of this
        course builds that fluency — the network, the lingo, the cost drivers, the metrics, the
        forecasting, and the business-case methodology.</p>

        <div class="callout">
          <strong>The bar:</strong> produce work you'd put your name on. Get the details right, quantify
          honestly, and use AI as a tool to ask better questions — not to skip the understanding. That
          standard is what makes you "this person."
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Role", front: "In one line, what is this operations-finance role?", back: "An embedded analyst who understands the network deeply and turns that understanding into financial insight that drives action." },
    { id: "f2",  tag: "Role", front: "Thought partner vs. reporting function?", back: "Reporting answers 'what happened?'; a thought partner answers 'what should we do, and what's it worth?' — and helps drive the action." },
    { id: "f3",  tag: "Role", front: "How does an operations-finance analyst earn credibility?", back: "By showing up with insights that reflect genuine operational understanding — walking the network, not observing from the sidelines." },
    { id: "f4",  tag: "Embedding", front: "What does 'embedded' finance mean here?", back: "You're attached to part of the operation and accountable for understanding and improving its economics — not a central ticket-taker." },
    { id: "f5",  tag: "Embedding", front: "Why does walking the network matter for analysis?", back: "Ground truth explains what the data only describes; pairing floor-level understanding with data makes recommendations credible and actionable." },
    { id: "f6",  tag: "Mandate", front: "What is the core loop of the role?", back: "Dive deep into cost drivers → substantiate with data → build the methodology & business case → write it up → drive the program → measure impact." },
    { id: "f7",  tag: "Mandate", front: "Impact is measured on which two scorecards?", back: "The P&L (cost saved / margin) AND the customer experience (speed, reliability). A cost cut that hurts the customer isn't a win." },
    { id: "f8",  tag: "Sizing", front: "Formula for sizing an opportunity's annual savings?", back: "Annual Savings = Savings per Unit × Annual Volume. Small per-unit changes scale hugely at network volume." },
    { id: "f9",  tag: "Sizing", front: "Simple payback formula?", back: "Payback (years) = Implementation Cost ÷ Annual Savings." },
    { id: "f10", tag: "Sizing", front: "Three rigor rules when sizing an opportunity?", back: "Use the right (annualized, in-scope) volume; separate one-time cost from run-rate savings; never double-count another project's savings." },
    { id: "f11", tag: "Sizing", front: "Why does 'Think Big' pair with 'get the details right'?", back: "At network scale a tiny per-unit change is worth millions — so the size is big, but only if the details (volume, scope) are exactly right." },
    { id: "f12", tag: "Bilingual", front: "What does being 'bilingual' mean in this role?", back: "Fluent in operations and finance, and able to translate operational metrics into financial impact and vice versa." },
    { id: "f13", tag: "Bilingual", front: "Translate: 'units per hour dropped' into finance.", back: "Lower productivity → higher labor cost per unit → margin/cost-per-unit impact." },
    { id: "f14", tag: "Culture", front: "What does 'Dive Deep' mean for an analyst?", back: "Go to the granular level of processes and cost drivers; understand root causes, not just top-line numbers." },
    { id: "f15", tag: "Culture", front: "How should AI be used in this role?", back: "As a tool to ask better questions and elevate recommendations — accelerating analysis, not replacing the operational understanding or rigor." },
    { id: "f16", tag: "Bar", front: "What is the standard for the work you produce?", back: "Work you'd put your name on — details right, quantified honestly, credible to both operators and finance." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "The defining feature of this operations-finance role is that you act as…",
      options: ["A central reporting function", "A thought partner to the business", "An external auditor", "A data-entry clerk"],
      answer: 1,
      explain: "The role is a thought partner embedded with the business — driving action, not producing reports at arm's length.",
    },
    {
      id: "q2",
      prompt: "According to the role, credibility is earned by…",
      options: [
        "Producing the most reports",
        "Insights that reflect genuine operational understanding",
        "Having the fanciest slides",
        "Staying at your desk",
      ],
      answer: 1,
      explain: "You 'earn credibility by showing up with insights that reflect genuine operational understanding' — walk the network.",
    },
    {
      id: "q3",
      prompt: "Impact in this role is measured on…",
      options: ["The P&L only", "The customer experience only", "Both the P&L and the customer experience", "Neither — only activity"],
      answer: 2,
      explain: "Work is measured on tangible impact to both the P&L and the customer experience.",
    },
    {
      id: "q4",
      scenario: "A process change saves \$0.05 per package across 40,000,000 packages per year.",
      prompt: "What is the annual savings?",
      options: ["\$200,000", "\$2,000,000", "\$20,000,000", "\$800,000"],
      answer: 1,
      explain: "Annual savings = 0.05 × 40,000,000 = \$2,000,000. Tiny per-unit changes scale enormously at network volume.",
    },
    {
      id: "q5",
      scenario: "An initiative saves \$2,000,000 per year and costs \$500,000 to implement.",
      prompt: "What is the simple payback period?",
      options: ["4 years", "0.25 years", "2.5 years", "1 year"],
      answer: 1,
      explain: "Payback = implementation ÷ annual savings = 500,000 ÷ 2,000,000 = 0.25 years (~3 months).",
    },
    {
      id: "q6",
      prompt: "Which is a rigor rule when sizing an opportunity?",
      options: [
        "Use the largest volume you can find",
        "Combine one-time costs with run-rate savings",
        "Never double-count savings another project already claims",
        "Ignore implementation cost",
      ],
      answer: 2,
      explain: "Double-counting savings destroys credibility. Use the right in-scope volume and separate one-time costs from run-rate savings.",
    },
    {
      id: "q7",
      prompt: "Being 'bilingual' in this role means being fluent in…",
      options: ["Two spoken languages", "Operations and finance, and translating between them", "SQL and Python", "Debits and credits only"],
      answer: 1,
      explain: "You must speak operations and finance and translate operational metrics into financial impact (and back).",
    },
    {
      id: "q8",
      prompt: "How should AI tools be used, per the role?",
      options: [
        "To skip understanding the operation",
        "To ask better questions and elevate recommendations",
        "To replace the business partners",
        "Only for formatting",
      ],
      answer: 1,
      explain: "AI is a tool to accelerate analysis and ask better questions — not a substitute for operational understanding or rigor.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Size the prize. A process change saves cost per package; compute the annual savings, net year-1 impact, and payback. (Values are stated in the labels — build with formulas.)",
      rows: [
        { label: "Savings per package ($)", value: 0.05, given: true },
        { label: "Annual package volume (units)", value: 40000000, given: true },
        { label: "Implementation cost ($)", value: 500000, given: true },
        { label: "Annual gross savings ($)", key: "gross", answer: 2000000, hint: "savings per package × annual volume" },
        { label: "Net year-1 savings ($)", key: "net", answer: 1500000, hint: "annual gross savings − implementation cost" },
        { label: "Simple payback (years)", key: "pb", answer: 0.25, hint: "implementation cost ÷ annual gross savings" },
      ],
      prefix: "",
      explain: "0.05 × 40,000,000 = \$2.0M annual savings; net of \$0.5M cost = \$1.5M in year 1; payback 0.25 years (~3 months).",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Cost-per-unit improvement. A change lowers the cost to handle each unit — compute the per-unit and annual savings and the percent improvement.",
      rows: [
        { label: "Baseline cost per unit ($)", value: 8.00, given: true },
        { label: "Improved cost per unit ($)", value: 7.80, given: true },
        { label: "Annual volume (units)", value: 10000000, given: true },
        { label: "Savings per unit ($)", key: "spu", answer: 0.20, hint: "baseline − improved cost per unit" },
        { label: "Annual savings ($)", key: "ann", answer: 2000000, hint: "savings per unit × annual volume" },
        { label: "Cost improvement (%)", key: "pct", answer: 2.5, hint: "savings per unit ÷ baseline × 100" },
      ],
      prefix: "",
      explain: "\$0.20 per unit × 10,000,000 = \$2.0M annual savings — a 2.5% reduction in unit cost. Small % moves, big absolute dollars.",
    },
  ],
});
