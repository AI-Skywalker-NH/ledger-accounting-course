/* ===========================================================================
   Course 4 · Module OT-3 — Business Reviews & Mechanisms
   =========================================================================== */
Ledger.register({
  id: "ot-03",
  title: "Business Reviews & Mechanisms",
  subtitle:
    "The recurring machinery that runs the operation — what a mechanism is, the review cadence, and how to prepare, run, and follow through so analysis becomes action.",
  est: "~50 min",
  objectives: [
    "Define a mechanism and why it beats good intentions.",
    "Distinguish the WBR / MBR / QBR cadence and altitude.",
    "Prepare a review document that tells the story.",
    "Run a review and trigger a deep dive on the right thing.",
    "Track actions and run a correction-of-errors loop.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "What Is a Mechanism?",
      html: `
        <span class="eyebrow">Course 4 · Lesson 1 of 6</span>
        <h2>What Is a Mechanism?</h2>
        <p>A favorite Amazon maxim: <em>"Good intentions don't work; mechanisms do."</em> A
        <span class="kt">mechanism</span> is a repeatable, self-correcting process that reliably turns an
        intention into an outcome — a tool + adoption + an inspection loop that catches when it's failing.</p>

        <p>Wanting lower cost per unit is an intention. A weekly review that inspects CPU against plan,
        assigns owners to gaps, and checks last week's actions is a <strong>mechanism</strong> — it makes
        the improvement happen whether or not anyone remembers to care that week.</p>

        <div class="callout">
          <strong>The business review IS a mechanism:</strong> its whole purpose is to reliably surface
          what's off and convert it into owned, tracked action — every period, automatically. Everything
          in this module is about making that mechanism work.
        </div>
      `,
    },
    {
      id: "l2",
      title: "The Cadence: WBR / MBR / QBR",
      html: `
        <span class="eyebrow">Course 4 · Lesson 2 of 6</span>
        <h2>The Cadence: WBR / MBR / QBR</h2>
        <p>Reviews operate at different altitudes and rhythms:</p>
        <table>
          <tr><th>Review</th><th>Rhythm</th><th>Altitude</th></tr>
          <tr><td><span class="kt">WBR</span> (Weekly Business Review)</td><td>Weekly</td><td>Operational — input metrics, this week's misses, fast course-correction.</td></tr>
          <tr><td><span class="kt">MBR</span> (Monthly Business Review)</td><td>Monthly</td><td>Financial — P&amp;L vs plan, monthly trends, larger variances.</td></tr>
          <tr><td><span class="kt">QBR</span> (Quarterly Business Review)</td><td>Quarterly</td><td>Strategic — progress on goals, bigger bets, resourcing.</td></tr>
        </table>

        <p>The WBR is where an operations analyst lives — it's fast, granular, and input-focused. The MBR
        and QBR zoom out to financials and strategy. Above them sits the annual planning cycle (OP1/OP2)
        from OF-6.</p>

        <div class="callout">
          <strong>Match altitude to audience:</strong> a WBR drowning in strategy wastes the operators'
          time; a QBR lost in weekly noise wastes the leaders'. Bringing the right grain of detail to the
          right review is a craft in itself.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Preparing the Review Document",
      html: `
        <span class="eyebrow">Course 4 · Lesson 3 of 6</span>
        <h2>Preparing the Review Document</h2>
        <p>Preparing the doc is the analyst's signature contribution — the posting's "design metrics and
        business-review documents to guide the operations team." A good package:</p>
        <ul>
          <li><strong>Leads with what changed</strong> — the variances that matter, not every number.</li>
          <li><strong>Tells the story</strong> — each callout has a driver and a "so what" (from OT-2's writing discipline).</li>
          <li><strong>Uses the trend lenses</strong> — plan, WoW, YoY (from OF-5).</li>
          <li><strong>Is pre-wired</strong> — you've socialized the tough items with owners beforehand, so the meeting isn't an ambush.</li>
        </ul>

        <div class="callout">
          <strong>Curation is the value:</strong> a dashboard dumps every metric; a review <em>curates</em>
          — it points the room at the three things that need a decision this week. Deciding what NOT to
          raise is as important as what you do.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Running the Review & the Deep Dive",
      html: `
        <span class="eyebrow">Course 4 · Lesson 4 of 6</span>
        <h2>Running the Review &amp; the Deep Dive</h2>
        <p>A review isn't a status readout — it's a working session. The flow: scan the metrics, land on
        the anomalies, and <span class="kt">deep dive</span> the ones that matter.</p>

        <p>Where to spend the room's time? Prioritize by <strong>impact</strong>. If three cost lines are
        over plan by \$120k, \$300k, and \$80k, the \$300k line — 60% of the total miss — gets the deep
        dive. Chasing the \$80k line first is a waste of the meeting.</p>

        <div class="callout">
          <strong>Deep dive, don't status-update:</strong> the value of the meeting is turning "we're
          off" into "here's the root cause and who owns the fix." A review where numbers are read aloud
          and nobody leaves with an action is theater — apply the OF-7 root-cause rigor live.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Action Tracking & Follow-Through",
      html: `
        <span class="eyebrow">Course 4 · Lesson 5 of 6</span>
        <h2>Action Tracking &amp; Follow-Through</h2>
        <p>A mechanism only works if it <em>closes the loop</em>. Every deep dive should produce an action
        with an <strong>owner</strong> and a <strong>date</strong>, logged and re-inspected next period.</p>

        <p>Quantify the action's impact so you can track progress: if an action is expected to close 75%
        of that \$300k variance, that's \$225k captured, \$75k residual — and you check next week whether
        it actually landed. Actions without measurement quietly evaporate.</p>

        <div class="callout">
          <strong>The follow-up is the mechanism:</strong> re-inspecting last period's actions at the top
          of each review is what makes the whole thing self-correcting. Skip it and the review degrades
          into a weekly complaint session that changes nothing.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Correction of Errors & Continuous Improvement",
      html: `
        <span class="eyebrow">Course 4 · Lesson 6 of 6</span>
        <h2>Correction of Errors &amp; Continuous Improvement</h2>
        <p>When something goes seriously wrong, the mechanism is a <span class="kt">Correction of Errors
        (COE)</span> — a structured post-mortem that drives to root cause (the 5 Whys from OF-7) and to
        durable fixes, not blame.</p>

        <p>A COE typically captures: what happened, the impact, the timeline, the root cause(s), and the
        specific actions (with owners) that will <strong>prevent recurrence</strong>. The goal is a system
        that can't fail the same way twice.</p>

        <div class="callout">
          <strong>Blameless but rigorous:</strong> COEs work only if people surface errors honestly, so
          they focus on the <em>process</em> that allowed the error, not on punishing a person (Earn
          Trust). That's how a review culture becomes a learning loop. Next (OT-6): simplifying complex
          analysis so any audience can act on it.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Mechanism", front: "What is a mechanism?", back: "A repeatable, self-correcting process (tool + adoption + inspection) that reliably turns an intention into an outcome." },
    { id: "f2",  tag: "Mechanism", front: "Complete the maxim: 'Good intentions don't work; ___ do.'", back: "Mechanisms. Wanting an outcome is an intention; a review that inspects and assigns owners is the mechanism that delivers it." },
    { id: "f3",  tag: "Mechanism", front: "Why is a business review a mechanism?", back: "It reliably surfaces what's off and converts it into owned, tracked action every period — automatically, not by memory." },
    { id: "f4",  tag: "Cadence", front: "WBR vs MBR vs QBR?", back: "WBR = weekly, operational (inputs, fast fixes); MBR = monthly, financial (P&L vs plan); QBR = quarterly, strategic (goals, bets)." },
    { id: "f5",  tag: "Cadence", front: "Which review does an operations analyst mostly live in?", back: "The WBR — fast, granular, input-metric focused, weekly course-correction." },
    { id: "f6",  tag: "Cadence", front: "Why match altitude to audience?", back: "Strategy in a WBR wastes operators' time; weekly noise in a QBR wastes leaders'. Bring the right grain to the right review." },
    { id: "f7",  tag: "Prepare", front: "What does a good review document do?", back: "Leads with what changed, tells the story (driver + so-what), uses plan/WoW/YoY lenses, and is pre-wired with owners." },
    { id: "f8",  tag: "Prepare", front: "Dashboard vs. review document?", back: "A dashboard dumps every metric; a review curates — pointing the room at the few things needing a decision now." },
    { id: "f9",  tag: "Prepare", front: "What does 'pre-wiring' a review mean?", back: "Socializing the tough items with owners before the meeting so it isn't an ambush and time goes to decisions." },
    { id: "f10", tag: "Run", front: "How do you prioritize what to deep-dive?", back: "By impact — the largest variance/opportunity first (e.g. the line that's 60% of the total miss), not the smallest." },
    { id: "f11", tag: "Run", front: "Status update vs. deep dive?", back: "A status update reads numbers aloud; a deep dive turns 'we're off' into a root cause and an owned fix — the meeting's real value." },
    { id: "f12", tag: "Actions", front: "What must every deep dive produce?", back: "An action with an owner and a date, logged and re-inspected next period." },
    { id: "f13", tag: "Actions", front: "Why re-inspect last period's actions at the top of each review?", back: "That follow-up loop is what makes the mechanism self-correcting; skip it and the review changes nothing." },
    { id: "f14", tag: "Actions", front: "Why quantify an action's expected impact?", back: "So you can track whether it landed — e.g. an action closing 75% of a $300k gap = $225k captured, $75k residual." },
    { id: "f15", tag: "COE", front: "What is a Correction of Errors (COE)?", back: "A structured post-mortem that drives to root cause and durable fixes to prevent recurrence — not blame." },
    { id: "f16", tag: "COE", front: "Why must a COE be blameless but rigorous?", back: "People only surface errors honestly if it targets the process, not the person (Earn Trust) — enabling a learning loop." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "A mechanism is best described as…",
      options: ["A one-time project", "A repeatable, self-correcting process that turns intention into outcome", "A dashboard", "A team meeting for updates"],
      answer: 1,
      explain: "Tool + adoption + inspection loop — 'good intentions don't work, mechanisms do.'",
    },
    {
      id: "q2",
      prompt: "The WBR is characterized by…",
      options: ["Quarterly strategy", "Weekly, operational, input-metric focus with fast course-correction", "Annual planning", "Board governance"],
      answer: 1,
      explain: "The Weekly Business Review is granular and operational — where the ops analyst lives.",
    },
    {
      id: "q3",
      prompt: "A well-prepared review document primarily…",
      options: ["Shows every available metric", "Curates the few items needing a decision, with drivers and so-whats", "Avoids data", "Is made the morning of"],
      answer: 1,
      explain: "Curation and story — not a data dump — is the analyst's value; pre-wire the tough items.",
    },
    {
      id: "q4",
      scenario: "Three cost lines are over plan by \$120k, \$300k, and \$80k.",
      prompt: "Which should get the deep dive first?",
      options: ["The \$80k line", "The \$120k line", "The \$300k line", "None — discuss equally"],
      answer: 2,
      explain: "Prioritize by impact: the \$300k line is 60% of the total miss and deserves the room's time.",
    },
    {
      id: "q5",
      prompt: "The difference between a status update and a deep dive is…",
      options: [
        "Length",
        "A deep dive drives to root cause and an owned fix; a status update just reads numbers",
        "The room size",
        "Nothing",
      ],
      answer: 1,
      explain: "The value is turning 'we're off' into a cause and an action — apply root-cause rigor live.",
    },
    {
      id: "q6",
      prompt: "Every deep dive should produce…",
      options: ["A longer meeting", "An action with an owner and a date, logged for re-inspection", "A new metric only", "A blame assignment"],
      answer: 1,
      explain: "Owner + date + tracking closes the loop; the follow-up next period is what self-corrects.",
    },
    {
      id: "q7",
      scenario: "An action is expected to close 75% of a \$300,000 variance.",
      prompt: "How much is expected to be captured?",
      options: ["\$75,000", "\$225,000", "\$300,000", "\$400,000"],
      answer: 1,
      explain: "0.75 × 300,000 = \$225,000 captured, leaving \$75,000 residual to keep tracking.",
    },
    {
      id: "q8",
      prompt: "A Correction of Errors (COE) is effective when it is…",
      options: [
        "Focused on punishing the person responsible",
        "Blameless but rigorous — targeting the process to prevent recurrence",
        "Skipped to save time",
        "Kept secret",
      ],
      answer: 1,
      explain: "Blameless focus on the process (Earn Trust) makes people surface errors honestly and drives durable fixes.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Prioritize the deep dive. Total the unfavorable variances, find the largest, and its share of the total.",
      rows: [
        { label: "Line A unfavorable variance ($)", value: 120000, given: true },
        { label: "Line B unfavorable variance ($)", value: 300000, given: true },
        { label: "Line C unfavorable variance ($)", value: 80000, given: true },
        { label: "Total unfavorable variance ($)", key: "tot", answer: 500000, hint: "A + B + C (use SUM)" },
        { label: "Largest single variance ($)", key: "max", answer: 300000, hint: "the biggest of the three (use MAX)" },
        { label: "Largest as % of total", key: "pct", answer: 60, hint: "largest ÷ total × 100" },
      ],
      prefix: "",
      explain: "Line B is \$300k of the \$500k total miss — 60%. That's where the deep dive goes, not the \$80k line.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Track the action's impact. An action is expected to close 75% of the largest (\$300,000) variance.",
      rows: [
        { label: "Targeted variance ($)", value: 300000, given: true },
        { label: "Expected close rate (%)", value: 75, given: true },
        { label: "Total unfavorable variance ($)", value: 500000, given: true },
        { label: "Expected savings captured ($)", key: "cap", answer: 225000, hint: "targeted variance × close rate ÷ 100" },
        { label: "Residual on that line ($)", key: "res", answer: 75000, hint: "targeted variance − captured" },
        { label: "% of total variance closed", key: "pct", answer: 45, hint: "captured ÷ total variance × 100" },
      ],
      prefix: "",
      explain: "Capturing \$225k of the \$300k line closes 45% of the whole \$500k miss — the number you re-inspect next week.",
    },
  ],
});
