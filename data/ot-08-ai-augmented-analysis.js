/* ===========================================================================
   Course 4 · Module OT-8 — AI-Augmented Financial Analysis
   The finale: using AI to ask better questions and elevate recommendations.
   =========================================================================== */
Ledger.register({
  id: "ot-08",
  title: "AI-Augmented Financial Analysis",
  subtitle:
    "Using AI to accelerate analysis and ask better questions — with the verification, judgment, and security discipline that keeps you accountable for the output.",
  est: "~55 min",
  objectives: [
    "Frame AI as a tool to ask better questions, not just get faster answers.",
    "Identify where AI accelerates the analyst workflow.",
    "Apply the verification imperative to every AI output.",
    "Prompt effectively for analytical work.",
    "Use AI responsibly — judgment, ground truth, and data security.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "AI as a Tool for Better Questions",
      html: `
        <span class="eyebrow">Course 4 · Lesson 1 of 6</span>
        <h2>AI as a Tool for Better Questions</h2>
        <p>The posting is precise about this: "Leverage AI-powered tools to accelerate analysis and
        elevate the quality of recommendations," and — the key line — "View AI and automation as tools to
        <strong>ask better questions, not just get faster answers</strong>."</p>

        <p>That framing is the whole module. AI is a force multiplier for a strong analyst: it clears the
        grunt work so you can spend your judgment on the questions that matter — <em>why</em> is this cost
        moving, <em>what</em> should we do, <em>what</em> haven't we considered? It doesn't replace the
        operational understanding or the accountability; it amplifies them.</p>

        <div class="callout">
          <strong>The multiplier, not the substitute:</strong> AI makes a great analyst far more
          productive and a careless one far more dangerous (faster wrong answers). Your value moves
          <em>up</em> the stack — to judgment, framing, and verification — precisely because AI handles
          the mechanics.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Where AI Accelerates the Workflow",
      html: `
        <span class="eyebrow">Course 4 · Lesson 2 of 6</span>
        <h2>Where AI Accelerates the Workflow</h2>
        <p>Concrete, high-value uses across everything in these courses:</p>
        <table>
          <tr><th>Task</th><th>AI assist</th></tr>
          <tr><td>SQL (OT-4)</td><td>Draft a query from a plain-English question; explain an unfamiliar query.</td></tr>
          <tr><td>Narratives (OT-2)</td><td>First-draft a white paper section; tighten and edit prose.</td></tr>
          <tr><td>Analysis</td><td>Summarize a long document/dataset; brainstorm hypotheses for a variance.</td></tr>
          <tr><td>Modeling</td><td>Explain a formula, suggest a sensitivity structure, sanity-check an approach.</td></tr>
          <tr><td>Learning</td><td>Explain a concept, quiz you, generate practice — like this course.</td></tr>
        </table>

        <div class="callout">
          <strong>Best on the first 80%:</strong> AI excels at the fast first draft — a query, an outline,
          a summary, a list of hypotheses. You supply the last 20%: the judgment, the operational context,
          and the verification that make it correct and credible.
        </div>
      `,
    },
    {
      id: "l3",
      title: "The Verification Imperative",
      html: `
        <span class="eyebrow">Course 4 · Lesson 3 of 6</span>
        <h2>The Verification Imperative</h2>
        <p>The non-negotiable rule: <strong>you own the output, not the AI.</strong> AI can be confidently
        wrong — it hallucinates figures, invents sources, and makes subtle logic errors. If your name is
        on it, you are accountable for every number.</p>

        <p>So verify before you trust:</p>
        <ul>
          <li><strong>Reconcile to source</strong> — tie any AI-produced number back to the GL/warehouse (OT-5).</li>
          <li><strong>Re-derive the logic</strong> — check the reasoning, don't just accept the answer.</li>
          <li><strong>Test the query</strong> — run AI-drafted SQL and validate the totals.</li>
          <li><strong>Never present unverified AI output</strong> — a hallucinated figure in a leadership doc is a credibility catastrophe.</li>
        </ul>

        <div class="callout">
          <strong>Verify, then trust:</strong> treat AI output as a capable draft from a fast but
          fallible junior analyst — useful, but everything gets checked. In a numbers-driven role, an
          unverified AI figure is exactly the kind of error the data-quality mandate (OT-4) exists to
          catch. Errors are real: assume some are there and go find them.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Prompting Well",
      html: `
        <span class="eyebrow">Course 4 · Lesson 4 of 6</span>
        <h2>Prompting Well</h2>
        <p>Output quality tracks input quality. Strong analytical prompts include:</p>
        <ul>
          <li><strong>Context</strong> — the situation, the data shape, the goal.</li>
          <li><strong>Specificity</strong> — exactly what you want (a query, a 200-word summary, three hypotheses).</li>
          <li><strong>Constraints</strong> — format, assumptions to use, what to avoid.</li>
          <li><strong>Examples</strong> — a sample of the input/output you expect.</li>
          <li><strong>Ask for reasoning</strong> — have it show its work so you can check it (which aids verification).</li>
        </ul>

        <p>Then <strong>iterate</strong>: treat it as a dialogue — refine, correct, push back. The first
        answer is rarely the best one.</p>

        <div class="callout">
          <strong>Garbage in, garbage out:</strong> a vague prompt gets a vague, generic answer; a precise
          prompt with context gets something useful. Prompting is a skill worth deliberately building —
          and asking for the reasoning makes the output far easier to verify.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Keeping Judgment & Ground Truth",
      html: `
        <span class="eyebrow">Course 4 · Lesson 5 of 6</span>
        <h2>Keeping Judgment &amp; Ground Truth</h2>
        <p>AI has a fundamental gap: it hasn't <em>walked the network</em>. It doesn't know your
        operation's quirks, why a process exists, or what the operators will actually accept. The
        floor-level understanding that earns you credibility (OF-1) is exactly what AI lacks.</p>

        <p>So the pattern is <strong>AI speed + your ground truth</strong>: let AI generate the draft,
        query, or hypotheses fast, then apply your operational judgment to decide what's real, what's
        missing, and what to recommend. Don't outsource the thinking — outsource the typing.</p>

        <div class="callout">
          <strong>The Dive Deep tension:</strong> AI can hand you an answer without the understanding —
          and an answer you don't understand is one you can't defend or build on. Use AI to go faster,
          not to skip the depth that makes you credible. The judgment is still yours.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Data Security & Responsible Use",
      html: `
        <span class="eyebrow">Course 4 · Lesson 6 of 6</span>
        <h2>Data Security &amp; Responsible Use</h2>
        <p>With power comes responsibility. The guardrails:</p>
        <ul>
          <li><strong>Protect confidential data</strong> — never paste sensitive financials, customer PII,
          or unreleased information into ungoverned/public AI tools. Use approved, governed tools only.</li>
          <li><strong>Watch for bias &amp; error</strong> — AI reflects its training data; sanity-check for skew and nonsense.</li>
          <li><strong>Be transparent</strong> — don't pass off AI-generated work as fully your own where it matters; own the result and the verification.</li>
          <li><strong>Keep a human in the loop</strong> — for any decision that moves money or affects customers, a person is accountable.</li>
        </ul>

        <div class="callout">
          <strong>The finish line — and the through-line:</strong> across four courses the theme has been
          the same — rigor, honesty, and ground truth. AI changes the speed, not the standard. Use it to
          ask better questions and move faster, verify everything, protect the data, and keep your
          judgment in the loop. That's the analyst this whole curriculum was built to make you.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Framing", front: "How does the role frame AI's purpose?", back: "As a tool to ask better questions, not just get faster answers — a force multiplier for judgment, not a replacement for it." },
    { id: "f2",  tag: "Framing", front: "Why does AI make a careless analyst more dangerous?", back: "It produces faster wrong answers; without verification and judgment, errors scale as fast as insights." },
    { id: "f3",  tag: "Framing", front: "Where does the analyst's value move in an AI world?", back: "Up the stack — to judgment, framing, and verification — since AI handles the mechanics." },
    { id: "f4",  tag: "Uses", front: "High-value AI uses across the analyst workflow?", back: "Draft/explain SQL, first-draft & edit narratives, summarize docs/data, brainstorm variance hypotheses, explain formulas, learn concepts." },
    { id: "f5",  tag: "Uses", front: "What part of a task is AI best at, and what do you supply?", back: "AI does the fast first 80% (draft/query/summary); you supply the last 20% — judgment, context, and verification." },
    { id: "f6",  tag: "Verify", front: "The non-negotiable rule about AI output?", back: "You own the output, not the AI — you're accountable for every number, so verify before you trust." },
    { id: "f7",  tag: "Verify", front: "Ways AI can be confidently wrong?", back: "Hallucinated figures, invented sources, and subtle logic errors — delivered with full confidence." },
    { id: "f8",  tag: "Verify", front: "How do you verify AI output?", back: "Reconcile numbers to source (GL/warehouse), re-derive the logic, test/run queries, and never present unverified output." },
    { id: "f9",  tag: "Verify", front: "The mindset for AI output?", back: "Treat it as a capable but fallible junior analyst's draft — useful, but everything gets checked. Verify, then trust." },
    { id: "f10", tag: "Prompt", front: "What makes a strong analytical prompt?", back: "Context, specificity, constraints, examples, and a request for reasoning — then iterate as a dialogue." },
    { id: "f11", tag: "Prompt", front: "Why ask the AI to show its reasoning?", back: "So you can check the logic — it makes the output far easier to verify (and catches errors)." },
    { id: "f12", tag: "Prompt", front: "Prompting version of 'garbage in, garbage out'?", back: "A vague prompt yields a generic answer; a precise, context-rich prompt yields something useful." },
    { id: "f13", tag: "Judgment", front: "What does AI fundamentally lack for this role?", back: "Ground truth — it hasn't walked the network; it doesn't know the operation's quirks or what operators will accept." },
    { id: "f14", tag: "Judgment", front: "The core pattern for using AI well?", back: "AI speed + your ground truth: let it draft fast, then apply operational judgment. Outsource the typing, not the thinking." },
    { id: "f15", tag: "Security", front: "The data-security rule for AI tools?", back: "Never paste confidential financials, customer PII, or unreleased info into ungoverned/public tools — use approved, governed tools only." },
    { id: "f16", tag: "Responsible", front: "Why keep a human in the loop?", back: "For any decision that moves money or affects customers, a person must be accountable — AI changes the speed, not the standard." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "The role frames AI primarily as a tool to…",
      options: ["Replace the analyst", "Ask better questions, not just get faster answers", "Avoid learning the operation", "Generate final decisions"],
      answer: 1,
      explain: "AI is a force multiplier for judgment — it clears grunt work so you focus on the questions that matter.",
    },
    {
      id: "q2",
      prompt: "AI is generally best used for…",
      options: ["The final decision", "The fast first 80% (draft, query, summary), with you supplying judgment and verification", "Replacing operational understanding", "Signing off unchecked"],
      answer: 1,
      explain: "AI drafts fast; you provide the last 20% — context, judgment, and verification — that make it correct and credible.",
    },
    {
      id: "q3",
      prompt: "The non-negotiable rule about AI output is…",
      options: ["The AI is accountable", "You own the output — verify before you trust", "Never use AI", "Present it as-is if it sounds right"],
      answer: 1,
      explain: "Your name is on it, so you're accountable for every figure — reconcile and re-derive before presenting.",
    },
    {
      id: "q4",
      prompt: "How should you verify an AI-produced number for a leadership doc?",
      options: ["Trust the confident tone", "Reconcile it to source (GL/warehouse) and re-derive the logic", "Make it bigger", "Ask the AI if it's sure"],
      answer: 1,
      explain: "Tie it to the authoritative source and check the reasoning; a hallucinated figure in a leadership doc is a credibility catastrophe.",
    },
    {
      id: "q5",
      prompt: "A strong analytical prompt includes…",
      options: ["Only a one-word topic", "Context, specificity, constraints, examples, and a request for reasoning", "No details, to stay flexible", "Just 'do my analysis'"],
      answer: 1,
      explain: "Quality tracks input quality; add context and constraints, ask for reasoning, and iterate.",
    },
    {
      id: "q6",
      prompt: "What does AI fundamentally lack that this role requires?",
      options: ["Speed", "Ground truth — it hasn't walked the network", "Access to formulas", "The ability to summarize"],
      answer: 1,
      explain: "AI doesn't know the operation's quirks or what operators will accept; that floor-level judgment stays with you.",
    },
    {
      id: "q7",
      prompt: "The data-security rule for AI tools is to…",
      options: [
        "Paste anything to get better answers",
        "Never put confidential data/PII into ungoverned tools; use approved ones",
        "Only use AI offline",
        "Share the GL freely",
      ],
      answer: 1,
      explain: "Protect confidential financials and customer PII — only governed, approved tools, never public/ungoverned ones.",
    },
    {
      id: "q8",
      prompt: "The core pattern for using AI well is…",
      options: [
        "Outsource the thinking to AI",
        "AI speed + your ground truth — outsource the typing, not the thinking",
        "Never verify",
        "Use it only for formatting",
      ],
      answer: 1,
      explain: "Let AI draft fast, then apply your operational judgment and verification. AI changes the speed, not the standard.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Quantify the acceleration. AI cuts a recurring task's time — compute the time saved and the annual hours freed.",
      rows: [
        { label: "Manual time per task (hours)", value: 10, given: true },
        { label: "AI-assisted time per task (hours)", value: 4, given: true },
        { label: "Tasks per year", value: 50, given: true },
        { label: "Hours saved per task", key: "saved", answer: 6, hint: "manual − AI-assisted" },
        { label: "Time reduction (%)", key: "pct", answer: 60, hint: "hours saved ÷ manual × 100" },
        { label: "Annual hours freed", key: "ann", answer: 300, hint: "hours saved per task × tasks per year" },
      ],
      prefix: "",
      explain: "6 hours saved per task (60% faster) × 50 tasks = 300 hours freed a year — capacity you redeploy to judgment and verification.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "The verification catch. A review of AI-generated figures found errors — quantify why you always check.",
      rows: [
        { label: "AI-generated figures", value: 20, given: true },
        { label: "Errors caught in review", value: 3, given: true },
        { label: "Error rate (%)", key: "rate", answer: 15, hint: "errors ÷ figures × 100" },
        { label: "Figures verified correct", key: "ok", answer: 17, hint: "figures − errors" },
      ],
      prefix: "",
      explain: "3 of 20 figures wrong — a 15% error rate. That's exactly why unverified AI output never reaches a leadership doc: you own every number.",
    },
  ],
});
