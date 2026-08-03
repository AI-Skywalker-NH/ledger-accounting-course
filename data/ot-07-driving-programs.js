/* ===========================================================================
   Course 4 · Module OT-7 — Driving Programs from Concept to Execution
   =========================================================================== */
Ledger.register({
  id: "ot-07",
  title: "Driving Programs from Concept to Execution",
  subtitle:
    "Owning the whole arc — turning an approved idea into a launched program, influencing cross-functional partners, and measuring the impact that actually lands.",
  est: "~60 min",
  objectives: [
    "Explain why the analyst owns execution, not just analysis.",
    "Scope a program with a charter and success metric.",
    "Map stakeholders and influence without authority.",
    "Drive execution with milestones and unblocking.",
    "Measure realized impact and handle a shortfall.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "From Analysis to Program",
      html: `
        <span class="eyebrow">Course 4 · Lesson 1 of 6</span>
        <h2>From Analysis to Program</h2>
        <p>The posting is explicit: "drive programs and projects from concept through execution, measuring
        tangible impact." This role doesn't hand off a recommendation and walk away — you
        <strong>own the outcome</strong>. Analysis that never ships is, here, incomplete work.</p>

        <p>That's a big shift from a pure analyst mindset. You move from "here's what we should do" to
        "I'll make it happen and prove it worked" — which requires project management, influence, and
        follow-through on top of the analysis.</p>

        <div class="callout">
          <strong>Ownership (the LP) in action:</strong> "surface an insight → build the case → drive the
          program → measure the result" is the full loop from OF-1. This module is the middle-to-end —
          turning an approved business case into a launched, measured program.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Scoping & the Charter",
      html: `
        <span class="eyebrow">Course 4 · Lesson 2 of 6</span>
        <h2>Scoping &amp; the Charter</h2>
        <p>A program starts with a tight <span class="kt">charter</span> — a one-pager that prevents scope
        creep and aligns everyone. It answers:</p>
        <ul>
          <li><strong>Goal</strong> — the outcome, working backwards from the customer/business impact.</li>
          <li><strong>Success metric</strong> — how you'll know it worked (e.g. cost per unit down \$0.08, \$1.6M run-rate).</li>
          <li><strong>Scope</strong> — what's in and, crucially, what's <em>out</em>.</li>
          <li><strong>Timeline &amp; milestones</strong> — the path and the checkpoints.</li>
          <li><strong>Owners &amp; stakeholders</strong> — who's doing what.</li>
        </ul>

        <div class="callout">
          <strong>Define the success metric up front:</strong> agree on how impact will be measured
          <em>before</em> you start, or you'll fight about it at the end. The metric ties straight back to
          the business case (OF-8) — the program exists to deliver that number.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Stakeholders & Influence",
      html: `
        <span class="eyebrow">Course 4 · Lesson 3 of 6</span>
        <h2>Stakeholders &amp; Influence</h2>
        <p>Programs in this role are <strong>cross-functional</strong> — you work "shoulder to shoulder
        with Operations and Technology leaders." But you rarely have authority over them, so you must
        <span class="kt">influence without authority</span>.</p>

        <p>Two tools:</p>
        <ul>
          <li><strong>Stakeholder mapping</strong> — who's affected, who decides, who must be consulted or
          just informed (a <span class="kt">RACI</span>: Responsible, Accountable, Consulted, Informed).</li>
          <li><strong>Earning buy-in</strong> — bring data, frame the win for <em>their</em> goals, and
          co-create rather than impose. Credibility (from walking the network) is what makes operators
          say yes.</li>
        </ul>

        <div class="callout">
          <strong>Influence is earned, not assigned:</strong> operators commit to a change when they
          trust the analyst and see it helping their metrics. This is Earn Trust + Have Backbone in
          practice — challenge with data, but make the partner a co-owner of the win.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Execution: Milestones & Unblocking",
      html: `
        <span class="eyebrow">Course 4 · Lesson 4 of 6</span>
        <h2>Execution: Milestones &amp; Unblocking</h2>
        <p>Break the program into <span class="kt">milestones</span> — discrete deliverables, each with an
        owner and a date — and track them relentlessly. Execution is mostly about surfacing and clearing
        blockers before they slip the timeline.</p>

        <ul>
          <li><strong>A living plan</strong> — milestones, owners, dates, status; updated, not static.</li>
          <li><strong>Unblocking</strong> — the driver's core job: chase down decisions, resolve
          dependencies, escalate when stuck (Bias for Action).</li>
          <li><strong>A status mechanism</strong> — a recurring check-in (a mini-WBR for the program) that
          keeps it moving.</li>
        </ul>

        <div class="callout">
          <strong>The driver drives:</strong> a program doesn't execute itself. Your value in this phase
          isn't analysis — it's momentum: removing friction, holding owners to dates, and refusing to let
          the program stall. Bias for Action over waiting for perfect certainty.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Measuring Realized Impact",
      html: `
        <span class="eyebrow">Course 4 · Lesson 5 of 6</span>
        <h2>Measuring Realized Impact</h2>
        <p>The program isn't done when it launches — it's done when the impact is <strong>measured and
        proven</strong>. Compare the realized result to the projected case:</p>
        <div class="equation">Realization Rate = Realized Impact ÷ Projected Impact</div>

        <p>If you projected \$2,000,000 of annual savings and realized a \$1,700,000 run-rate, that's an
        <strong>85% realization rate</strong> and a \$300,000 shortfall. Measuring against the baseline
        (OF-8) is what makes the impact credible — and closes the loop back to the business case.</p>

        <div class="callout">
          <strong>Watch for adoption ramp:</strong> impact rarely lands at 100% on day one. If a program
          ramps (50% in month one, full thereafter), first-quarter realized savings are naturally below
          run-rate — so measure both the ramp and the steady state, and don't declare failure prematurely.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Landing & Handing Off",
      html: `
        <span class="eyebrow">Course 4 · Lesson 6 of 6</span>
        <h2>Landing &amp; Handing Off</h2>
        <p>Close the program deliberately:</p>
        <ul>
          <li><strong>Declare done</strong> against the charter's success metric — with the realized number.</li>
          <li><strong>Handle the shortfall</strong> — if impact lagged, root-cause it (OF-7) and escalate a plan (the posting's "escalation plan" qualification), don't quietly move on.</li>
          <li><strong>Transition to steady state</strong> — bake the change into the ongoing WBR so it sticks (make it a mechanism, OT-3).</li>
          <li><strong>Capture the win &amp; the learning</strong> — document the result; it's your STAR story and your next promotion narrative.</li>
        </ul>

        <div class="callout">
          <strong>Make the win permanent:</strong> a savings that isn't wired into the ongoing metrics
          can erode back. Handing the program off into a durable mechanism is what makes the impact last —
          and lets you move on to the next opportunity. Final module (OT-8): using AI to do all of this
          faster and better.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Own", front: "Why does this role own execution, not just analysis?", back: "The posting requires driving programs concept→execution and measuring impact — analysis that never ships is incomplete work." },
    { id: "f2",  tag: "Own", front: "How does the mindset shift from analyst to program driver?", back: "From 'here's what we should do' to 'I'll make it happen and prove it worked' — adding PM, influence, and follow-through." },
    { id: "f3",  tag: "Charter", front: "What does a program charter define?", back: "Goal (worked backfrom impact), success metric, scope (in AND out), timeline/milestones, and owners/stakeholders." },
    { id: "f4",  tag: "Charter", front: "Why agree the success metric before starting?", back: "So you don't fight about how impact is measured at the end; it ties straight to the business case's projected number." },
    { id: "f5",  tag: "Charter", front: "Why is defining what's OUT of scope important?", back: "It prevents scope creep — the main way programs balloon and slip." },
    { id: "f6",  tag: "Influence", front: "What is 'influence without authority'?", back: "Getting cross-functional partners to act when you don't manage them — via data, framing the win for their goals, and buy-in." },
    { id: "f7",  tag: "Influence", front: "What is a RACI?", back: "Responsible, Accountable, Consulted, Informed — a map of who does what / decides / is consulted / is kept informed." },
    { id: "f8",  tag: "Influence", front: "What makes operators commit to a change?", back: "Trust in the analyst (earned by understanding their operation) and seeing it help their own metrics — co-create, don't impose." },
    { id: "f9",  tag: "Execution", front: "What is a milestone?", back: "A discrete deliverable with an owner and a date; programs are driven by tracking milestones relentlessly." },
    { id: "f10", tag: "Execution", front: "What is the driver's core execution job?", back: "Unblocking — chasing decisions, resolving dependencies, escalating when stuck (Bias for Action)." },
    { id: "f11", tag: "Execution", front: "What keeps a program moving?", back: "A living plan (updated milestones/owners/dates) and a status mechanism — a recurring check-in, a mini-WBR for the program." },
    { id: "f12", tag: "Impact", front: "Realization rate formula?", back: "Realized Impact ÷ Projected Impact. (E.g. $1.7M realized ÷ $2.0M projected = 85%.)" },
    { id: "f13", tag: "Impact", front: "When is a program actually 'done'?", back: "When the impact is measured and proven against the baseline — not when it merely launches." },
    { id: "f14", tag: "Impact", front: "Why account for adoption ramp when measuring impact?", back: "Impact rarely hits 100% day one; early-period savings run below steady-state run-rate, so don't declare failure prematurely." },
    { id: "f15", tag: "Landing", front: "What do you do if realized impact lags the projection?", back: "Root-cause it (OF-7) and escalate a plan (the 'escalation plan' qualification) — don't quietly move on." },
    { id: "f16", tag: "Landing", front: "How do you make a win permanent?", back: "Bake the change into the ongoing WBR/metrics (make it a mechanism) so the savings can't erode back, then document the win." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "In this role, an analysis is 'complete' when…",
      options: ["The recommendation is written", "The program has driven and measured a real result", "The deck is presented", "It's filed"],
      answer: 1,
      explain: "You own the outcome — concept through execution, with measured impact. Analysis alone isn't the finish line.",
    },
    {
      id: "q2",
      prompt: "A program charter should define scope as…",
      options: ["Only what's in scope", "What's in AND what's out of scope", "Nothing — stay flexible", "Just the budget"],
      answer: 1,
      explain: "Explicitly defining what's OUT prevents scope creep, the main way programs balloon and slip.",
    },
    {
      id: "q3",
      prompt: "'Influence without authority' is needed because…",
      options: [
        "The analyst manages everyone",
        "Programs are cross-functional and you rarely have authority over the partners",
        "Authority is unimportant",
        "It's a legal requirement",
      ],
      answer: 1,
      explain: "You drive ops and tech partners you don't manage — via data, framing wins for their goals, and earned trust.",
    },
    {
      id: "q4",
      prompt: "In a RACI, the 'A' stands for…",
      options: ["Analyst", "Accountable", "Approved", "Action"],
      answer: 1,
      explain: "Responsible, Accountable, Consulted, Informed — 'A' is the single person accountable for the outcome.",
    },
    {
      id: "q5",
      prompt: "The program driver's core job during execution is…",
      options: ["More analysis", "Unblocking — clearing dependencies and holding owners to dates", "Writing reports", "Waiting for certainty"],
      answer: 1,
      explain: "Momentum, not analysis: surface and clear blockers, escalate when stuck (Bias for Action).",
    },
    {
      id: "q6",
      scenario: "Projected annual savings \$2,000,000; realized run-rate \$1,700,000.",
      prompt: "What is the realization rate?",
      options: ["117%", "85%", "70%", "30%"],
      answer: 1,
      explain: "Realization rate = 1,700,000 ÷ 2,000,000 = 85% (a \$300,000 shortfall to explain).",
    },
    {
      id: "q7",
      prompt: "If realized impact lags the projection, you should…",
      options: ["Quietly move on", "Root-cause it and escalate a plan", "Hide the shortfall", "Blame the operators"],
      answer: 1,
      explain: "Root-cause (OF-7) and escalate with a plan — the 'escalation plan' the posting explicitly values.",
    },
    {
      id: "q8",
      prompt: "To make a program's savings permanent, you…",
      options: ["Announce it once", "Bake the change into the ongoing WBR/metrics (a mechanism)", "Delete the baseline", "Stop measuring"],
      answer: 1,
      explain: "Wiring it into steady-state metrics keeps the savings from eroding back — hand off into a durable mechanism.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Measure realized impact. Compare the realized run-rate to the projected case.",
      rows: [
        { label: "Projected annual savings ($)", value: 2000000, given: true },
        { label: "Realized run-rate savings ($)", value: 1700000, given: true },
        { label: "Realization rate (%)", key: "rate", answer: 85, hint: "realized ÷ projected × 100" },
        { label: "Shortfall ($)", key: "short", answer: 300000, hint: "projected − realized" },
      ],
      prefix: "",
      explain: "85% realization, \$300k short of the case — root-cause the gap (OF-7) and escalate a plan; don't quietly move on.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Account for the adoption ramp. The program reaches 50% impact in month 1, then full run-rate. Compute month-1 and first-quarter realized savings.",
      rows: [
        { label: "Annual run-rate savings ($)", value: 2400000, given: true },
        { label: "Month-1 adoption (%)", value: 50, given: true },
        { label: "Monthly run-rate savings ($)", key: "mo", answer: 200000, hint: "annual run-rate ÷ 12" },
        { label: "Month-1 realized savings ($)", key: "m1", answer: 100000, hint: "monthly run-rate × month-1 adoption% ÷ 100" },
        { label: "First-quarter realized savings ($)", key: "q1", answer: 500000, hint: "month-1 + month-2 (full) + month-3 (full)" },
      ],
      prefix: "",
      explain: "Monthly run-rate \$200k; month 1 ramps at 50% (\$100k), months 2–3 full (\$200k each) → Q1 = \$500k, below the \$600k steady-state quarter. Ramp is normal, not failure.",
    },
  ],
});
