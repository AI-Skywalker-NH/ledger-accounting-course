/* ===========================================================================
   Course 4 · Module OT-2 — The Writing Culture: Narratives & White Papers
   =========================================================================== */
Ledger.register({
  id: "ot-02",
  title: "The Writing Culture: Narratives & White Papers",
  subtitle:
    "How ideas actually get decided — the six-page narrative, working backwards, and writing with data so your analysis persuades.",
  est: "~60 min",
  objectives: [
    "Explain why narratives replace slide decks for decisions.",
    "Structure a six-page narrative.",
    "Apply working-backwards and the PR/FAQ.",
    "Embed data in prose with a clear 'so what'.",
    "Draft and edit a cost-savings white paper to a high bar.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Why Narratives, Not Slides",
      html: `
        <span class="eyebrow">Course 4 · Lesson 1 of 6</span>
        <h2>Why Narratives, Not Slides</h2>
        <p>Amazon famously banned PowerPoint for decision meetings in favor of written
        <span class="kt">narratives</span> — typically a <span class="kt">six-pager</span> of full prose.
        The meeting opens with everyone <strong>silently reading</strong> the document, then discussing.</p>

        <p>Why prose beats bullets for thinking:</p>
        <ul>
          <li><strong>Bullets hide fuzzy logic.</strong> Sentences force complete thoughts and expose
          gaps a slide can paper over.</li>
          <li><strong>Narratives carry reasoning.</strong> A reader gets the full argument — context,
          logic, evidence — not a presenter's verbal gloss over a chart.</li>
          <li><strong>The silent read</strong> means everyone engages with the <em>same</em> full
          argument before opinions fly.</li>
        </ul>

        <div class="callout">
          <strong>The posting made this explicit:</strong> "draft and present white papers" and "you'd
          rather tour a facility than read a slide deck." Your writing <em>is</em> the deliverable — the
          analysis only counts if the document makes it land.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Anatomy of the Six-Pager",
      html: `
        <span class="eyebrow">Course 4 · Lesson 2 of 6</span>
        <h2>Anatomy of the Six-Pager</h2>
        <p>Narratives vary, but a decision/strategy six-pager commonly runs:</p>
        <table>
          <tr><th>Section</th><th>Purpose</th></tr>
          <tr><td>Introduction / thesis</td><td>The one-paragraph point — what this is and what you're asking.</td></tr>
          <tr><td>Goals</td><td>What success looks like, ideally measurable.</td></tr>
          <tr><td>Tenets</td><td>The guiding principles/assumptions for the decision.</td></tr>
          <tr><td>Current state</td><td>The situation and the problem, with data.</td></tr>
          <tr><td>Proposal</td><td>What you recommend and why.</td></tr>
          <tr><td>FAQ</td><td>The hard questions, answered pre-emptively.</td></tr>
          <tr><td>Appendix</td><td>Supporting data and detail (doesn't count toward the six pages).</td></tr>
        </table>

        <div class="callout">
          <strong>The FAQ does heavy lifting:</strong> anticipating and answering the toughest objections
          in writing shows Dive Deep and Earn Trust, and it defuses the debate before the meeting. A great
          FAQ is often what separates an approved paper from a tabled one.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Working Backwards & the PR/FAQ",
      html: `
        <span class="eyebrow">Course 4 · Lesson 3 of 6</span>
        <h2>Working Backwards &amp; the PR/FAQ</h2>
        <p><span class="kt">Working Backwards</span> is the discipline of starting from the desired
        <em>customer outcome</em> and reasoning back to what you must build or do — the opposite of
        starting with what's convenient to build.</p>

        <p>Its signature artifact is the <span class="kt">PR/FAQ</span>: a mock <strong>press release</strong>
        written as if the initiative already shipped (describing the customer benefit in plain language),
        followed by an <strong>FAQ</strong> handling the hard questions. If you can't write a compelling
        press release, the idea probably isn't compelling.</p>

        <div class="callout">
          <strong>Even for a cost project, start from the customer:</strong> a network-cost initiative
          ultimately serves the customer (lower prices, faster delivery, or funding reinvestment). Framing
          the outcome that way — Customer Obsession — makes a cost paper far more persuasive than "we save
          \$X" alone.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Writing With Data",
      html: `
        <span class="eyebrow">Course 4 · Lesson 4 of 6</span>
        <h2>Writing With Data</h2>
        <p>A narrative isn't fluffy prose — it's an evidence-backed argument. Data discipline:</p>
        <ul>
          <li><strong>Every number earns its place</strong> and connects to the argument; no data for
          decoration.</li>
          <li><strong>Always state the "so what."</strong> Not "cost per unit is \$8.00" but "cost per
          unit is \$8.00 — 15% above the network average, driven by trailer under-fill."</li>
          <li><strong>Tables over chart-junk.</strong> A clean table in-line often communicates better
          than a busy graphic.</li>
          <li><strong>Cite and be precise.</strong> Say the source and the exact definition; a number you
          can't defend sinks the whole paper.</li>
        </ul>

        <div class="callout">
          <strong>The number must be right:</strong> everything from Course 3 — the CPU, the bridge, the
          incremental savings — lands in this document. One wrong figure and readers discount all of them.
          Reconcile before you write.
        </div>
      `,
    },
    {
      id: "l5",
      title: "The Cost-Savings White Paper",
      html: `
        <span class="eyebrow">Course 4 · Lesson 5 of 6</span>
        <h2>The Cost-Savings White Paper</h2>
        <p>Apply the form to OF-8's business case. A cost-savings white paper is a focused narrative:</p>
        <ol>
          <li><strong>Thesis</strong> — the opportunity and the ask, in one paragraph.</li>
          <li><strong>Current state</strong> — the inefficiency, quantified (the bridge, the cost driver).</li>
          <li><strong>Proposal</strong> — the change, and the incremental savings (conservative case up front).</li>
          <li><strong>Financials</strong> — run-rate, year-one, payback/NPV, in a clean table.</li>
          <li><strong>Risks &amp; FAQ</strong> — assumptions, sensitivities, and the objections answered.</li>
          <li><strong>Ask &amp; plan</strong> — the decision needed and how you'll execute and measure.</li>
        </ol>

        <div class="callout">
          <strong>Lead with the point:</strong> put the thesis and the ask in the first paragraph, not
          buried on page five. Busy leaders should grasp what you want and why in thirty seconds, then
          read on for the evidence. Bury the lede and you lose the room.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Editing to the Bar",
      html: `
        <span class="eyebrow">Course 4 · Lesson 6 of 6</span>
        <h2>Editing to the Bar</h2>
        <p>First drafts are never the bar. Great narratives are <strong>revised hard</strong>:</p>
        <ul>
          <li><strong>Cut weasel words</strong> — "should," "roughly," "we believe" — unless you mean the
          uncertainty. Say what you know.</li>
          <li><strong>Strong verbs, short sentences.</strong> Signal over noise.</li>
          <li><strong>Every paragraph earns its place</strong> — if it doesn't advance the argument, cut it.</li>
          <li><strong>Peer review.</strong> Have someone try to poke holes before leadership does.</li>
        </ul>

        <div class="callout">
          <strong>The bar is "work you'd put your name on":</strong> Insist on the Highest Standards
          applies to the writing, not just the analysis. A brilliant analysis in a sloppy document reads
          as a sloppy analysis. Next (OT-3): the reviews where these documents drive the operation — and
          later (OT-6) the craft of simplifying complexity for any audience.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Why", front: "Why are narratives used instead of slide decks for decisions?", back: "Prose forces complete, gap-free thinking and carries the full reasoning; bullets hide fuzzy logic." },
    { id: "f2",  tag: "Why", front: "What is the 'silent read'?", back: "The meeting opens with everyone reading the document in silence, so all engage with the same full argument before discussion." },
    { id: "f3",  tag: "Why", front: "What is a six-pager?", back: "A ~six-page written narrative in full prose used to make a decision or propose a strategy." },
    { id: "f4",  tag: "Structure", front: "Common sections of a decision six-pager?", back: "Intro/thesis, goals, tenets, current state, proposal, FAQ, and an appendix (appendix doesn't count toward the six pages)." },
    { id: "f5",  tag: "Structure", front: "Why is the FAQ so important?", back: "Answering the toughest objections in writing shows Dive Deep and Earn Trust and defuses debate before the meeting." },
    { id: "f6",  tag: "Backwards", front: "What is Working Backwards?", back: "Starting from the desired customer outcome and reasoning back to what to build/do — not starting from what's convenient." },
    { id: "f7",  tag: "Backwards", front: "What is a PR/FAQ?", back: "A mock press release (as if the initiative shipped, in customer terms) plus an FAQ of the hard questions." },
    { id: "f8",  tag: "Backwards", front: "How does Working Backwards apply to a cost project?", back: "Frame the cost initiative by its customer benefit (lower price, faster delivery, funded reinvestment), not just '$X saved'." },
    { id: "f9",  tag: "Data", front: "What is the 'so what' rule in writing with data?", back: "State the implication, not just the figure: not '$8.00 CPU' but '$8.00 — 15% above average, from trailer under-fill'." },
    { id: "f10", tag: "Data", front: "Tables vs. charts in a narrative?", back: "A clean in-line table often communicates better than busy chart-junk; every number must earn its place." },
    { id: "f11", tag: "Data", front: "Why must every embedded number be defensible?", back: "One wrong or undefendable figure makes readers discount all your numbers and the whole paper." },
    { id: "f12", tag: "White paper", front: "The sections of a cost-savings white paper?", back: "Thesis+ask, current state (quantified), proposal (conservative savings), financials table, risks & FAQ, ask & execution/measurement plan." },
    { id: "f13", tag: "White paper", front: "Where should the thesis and ask go?", back: "In the first paragraph — lead with the point so a busy leader grasps it in 30 seconds; don't bury the lede." },
    { id: "f14", tag: "Editing", front: "What are 'weasel words' and why cut them?", back: "Vague hedges ('should', 'roughly', 'we believe') — cut them unless you truly mean the uncertainty; say what you know." },
    { id: "f15", tag: "Editing", front: "Why peer-review a narrative before leadership sees it?", back: "So someone pokes holes first — surfacing weak logic or numbers while you can still fix them." },
    { id: "f16", tag: "Bar", front: "Why does document quality equal analysis quality?", back: "A brilliant analysis in a sloppy document reads as sloppy; Insist on the Highest Standards applies to the writing too." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "Narratives are preferred over slide decks for decisions because…",
      options: ["They're shorter", "Prose forces complete thinking and carries full reasoning", "They need no data", "They're easier to skim"],
      answer: 1,
      explain: "Full sentences expose gaps that bullets hide and convey the complete argument to every reader.",
    },
    {
      id: "q2",
      prompt: "A decision meeting typically opens with…",
      options: ["A presenter clicking through slides", "Everyone silently reading the document", "A vote", "Q&A only"],
      answer: 1,
      explain: "The silent read ensures everyone engages with the same full argument before discussion.",
    },
    {
      id: "q3",
      prompt: "Working Backwards means starting from…",
      options: ["What's easiest to build", "The desired customer outcome", "The budget", "Last year's plan"],
      answer: 1,
      explain: "You begin at the customer outcome and reason back to what must be done — the PR/FAQ is its artifact.",
    },
    {
      id: "q4",
      prompt: "A PR/FAQ consists of…",
      options: [
        "A profit report and financials",
        "A mock press release (customer terms) plus an FAQ of hard questions",
        "A slide deck",
        "A budget and a forecast",
      ],
      answer: 1,
      explain: "The future press release describes the shipped benefit; the FAQ answers the tough questions.",
    },
    {
      id: "q5",
      prompt: "Writing with data means every figure should…",
      options: ["Look impressive", "Come with a 'so what' and be defensible", "Be a chart", "Be rounded up"],
      answer: 1,
      explain: "State the implication, cite the source, and be precise — an undefendable number sinks the paper.",
    },
    {
      id: "q6",
      prompt: "In a cost-savings white paper, the thesis and ask belong…",
      options: ["In the appendix", "In the first paragraph", "On the last page", "In an email instead"],
      answer: 1,
      explain: "Lead with the point so a busy leader grasps what you want and why immediately; don't bury the lede.",
    },
    {
      id: "q7",
      prompt: "Which is a 'weasel word' to cut unless you mean the uncertainty?",
      options: ["Reduced", "Roughly", "Delivered", "Measured"],
      answer: 1,
      explain: "'Roughly' (like 'should', 'we believe') hedges; say what you know precisely unless the uncertainty is the point.",
    },
    {
      id: "q8",
      prompt: "Why does a sloppy document undermine a strong analysis?",
      options: [
        "It doesn't — content is all that matters",
        "Readers read the sloppiness as sloppy analysis; the writing is held to the same bar",
        "It saves time",
        "Leaders prefer typos",
      ],
      answer: 1,
      explain: "Insist on the Highest Standards applies to the writing; presentation quality signals analytical quality.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Build the before/after table for your white paper. Compute the per-unit saving, annual savings, and percent improvement to embed.",
      rows: [
        { label: "Current cost per unit ($)", value: 8.00, given: true },
        { label: "Proposed cost per unit ($)", value: 7.40, given: true },
        { label: "Annual volume (units)", value: 5000000, given: true },
        { label: "Savings per unit ($)", key: "spu", answer: 0.60, hint: "current − proposed" },
        { label: "Annual savings ($)", key: "ann", answer: 3000000, hint: "savings per unit × volume" },
        { label: "Cost improvement (%)", key: "pct", answer: 7.5, hint: "savings per unit ÷ current × 100" },
      ],
      prefix: "",
      explain: "The table you'd put in the paper: \$0.60/unit × 5M = \$3.0M annual savings, a 7.5% reduction — each figure defensible.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "State the 'so what'. Size the annual savings against the cost base and over a three-year horizon.",
      rows: [
        { label: "Annual savings ($)", value: 3000000, given: true },
        { label: "Relevant annual cost base ($)", value: 40000000, given: true },
        { label: "Savings as % of cost base", key: "pct", answer: 7.5, hint: "annual savings ÷ cost base × 100" },
        { label: "Three-year cumulative savings ($)", key: "cum", answer: 9000000, hint: "annual savings × 3" },
      ],
      prefix: "",
      explain: "\"$3.0M/year — 7.5% of the \$40M cost base, ~$9M over three years.\" That's a 'so what' a leader can act on.",
    },
  ],
});
