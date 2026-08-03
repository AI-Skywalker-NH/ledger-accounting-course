/* ===========================================================================
   Course 4 · Module OT-6 — Simplifying Complexity & Data Storytelling
   =========================================================================== */
Ledger.register({
  id: "ot-06",
  title: "Simplifying Complexity & Data Storytelling",
  subtitle:
    "Turning massive, messy analysis into a clear message a leader can act on — structured thinking, the 'so what', the right visual, and the right altitude.",
  est: "~50 min",
  objectives: [
    "Explain why simplification is the analyst's core communication job.",
    "Apply the pyramid principle and MECE structure.",
    "Convert data into a headline 'so what'.",
    "Choose the right visual for the message.",
    "Tailor depth and framing to the audience.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Why Simplify?",
      html: `
        <span class="eyebrow">Course 4 · Lesson 1 of 6</span>
        <h2>Why Simplify?</h2>
        <p>The posting asks you to "apply data-driven presentation skills with an ability to simplify
        complex problems." In a role with massive data and complex operations, <strong>complexity is the
        enemy of action</strong>. Your analysis only creates value if a busy decision-maker can grasp it
        and act.</p>

        <p>Simplifying is not dumbing down — it's doing the hard work of finding the signal so the audience
        doesn't have to. You absorb the complexity; they receive the clarity.</p>

        <div class="callout">
          <strong>The test of understanding:</strong> if you can't explain your analysis simply, you
          probably don't understand it well enough yet. Distilling a tangle of data into one clear message
          is itself a form of Dive Deep — and it's what separates an analyst from a data dump.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Structured Thinking: The Pyramid",
      html: `
        <span class="eyebrow">Course 4 · Lesson 2 of 6</span>
        <h2>Structured Thinking: The Pyramid</h2>
        <p>The <span class="kt">pyramid principle</span> (Barbara Minto) is the backbone of clear
        communication: <strong>lead with the answer</strong>, then support it with grouped arguments, then
        the data beneath each.</p>
        <div class="equation">Answer first → key reasons → supporting data</div>

        <p>The supporting groups should be <span class="kt">MECE</span> — <strong>M</strong>utually
        <strong>E</strong>xclusive, <strong>C</strong>ollectively <strong>E</strong>xhaustive: no overlaps,
        no gaps. "Cost rose due to volume, rate, and mix" is MECE; "volume, labor, and West region" isn't
        (they overlap).</p>

        <div class="callout">
          <strong>Answer-first is the opposite of a mystery novel:</strong> don't build up to a
          conclusion — state it, then justify. Busy leaders want the punchline immediately, with the
          evidence available if they want to drill in. This mirrors the narrative discipline from OT-2.
        </div>
      `,
    },
    {
      id: "l3",
      title: "The 'So What' & the Headline",
      html: `
        <span class="eyebrow">Course 4 · Lesson 3 of 6</span>
        <h2>The 'So What' &amp; the Headline</h2>
        <p>Data isn't a message until you add the <span class="kt">so what</span>. Every chart, table, and
        number needs a takeaway — ideally stated as a <strong>headline</strong>.</p>

        <table>
          <tr><th>Data (weak)</th><th>Headline (strong)</th></tr>
          <tr><td>"Cost per unit is \$5.40."</td><td>"Cost per unit fell 10% to \$5.40 — \$6M annualized — driven by higher trailer fill."</td></tr>
          <tr><td>A table of regional costs</td><td>"West drives 60% of the overage; fixing it closes most of the gap."</td></tr>
        </table>

        <p>The headline states the message; the data supports it. A good rule: if you deleted every chart
        and kept only the headlines, the story should still hold together.</p>

        <div class="callout">
          <strong>Turn absolutes into comparisons:</strong> "\$6M" means little alone; "\$6M — 10% of the
          cost base" lands. Percentages, trends, and benchmarks are what make a number a message. The
          audience should never have to ask "so what?"
        </div>
      `,
    },
    {
      id: "l4",
      title: "Choosing the Right Visual",
      html: `
        <span class="eyebrow">Course 4 · Lesson 4 of 6</span>
        <h2>Choosing the Right Visual</h2>
        <p>Match the visual to the message — one message per visual:</p>
        <table>
          <tr><th>Message</th><th>Visual</th></tr>
          <tr><td>Compare categories</td><td>Bar chart</td></tr>
          <tr><td>Trend over time</td><td>Line chart</td></tr>
          <tr><td>Decompose a total into drivers</td><td>Waterfall / bridge (OF-7)</td></tr>
          <tr><td>Precise values to read/reference</td><td>Table</td></tr>
        </table>

        <p>Avoid <span class="kt">chart-junk</span>: 3-D effects, too many series, decorative clutter. A
        clean table often beats a busy chart when readers need exact numbers (the narrative-culture point
        from OT-2). Every element should earn its place.</p>

        <div class="callout">
          <strong>The visual has a job:</strong> before you pick a chart, write its headline. If the chart
          doesn't obviously prove that headline at a glance, it's the wrong chart. Never make the reader
          hunt for the point.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Knowing Your Audience",
      html: `
        <span class="eyebrow">Course 4 · Lesson 5 of 6</span>
        <h2>Knowing Your Audience</h2>
        <p>The same analysis is framed differently for different audiences — matching the
        <span class="kt">altitude</span> to who's in the room:</p>
        <table>
          <tr><th>Audience</th><th>Wants</th></tr>
          <tr><td>Senior leader</td><td>The answer, the ask, the risk — high altitude, decision-focused.</td></tr>
          <tr><td>Operator / partner</td><td>The driver and the action — granular, floor-level.</td></tr>
          <tr><td>Finance peer</td><td>The methodology and assumptions — technical rigor.</td></tr>
        </table>

        <p>Ask before you present: <em>what decision does this person need to make, and what's the minimum
        they need to make it well?</em> Then give exactly that — with depth in reserve (an appendix) for
        those who want it.</p>

        <div class="callout">
          <strong>Altitude is a skill:</strong> burying a senior leader in shift-level detail, or giving
          an operator only the P&amp;L headline, both fail. Reading the room and pitching at the right
          altitude is what makes you a trusted communicator, not just an accurate one.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Delivering the Message",
      html: `
        <span class="eyebrow">Course 4 · Lesson 6 of 6</span>
        <h2>Delivering the Message</h2>
        <p>The last step is delivery — written or verbal:</p>
        <ul>
          <li><strong>Lead with the punchline</strong> (pyramid), then support.</li>
          <li><strong>Anticipate the questions</strong> — pre-build the answers (the FAQ instinct from OT-2).</li>
          <li><strong>Be brief.</strong> Respect the audience's time; cut everything that doesn't advance the decision.</li>
          <li><strong>Confidence + humility</strong> — state what you know plainly; be honest about what's uncertain (the DCF/forecast discipline).</li>
        </ul>

        <div class="callout">
          <strong>Clarity is a form of respect:</strong> a clear, well-structured message says you did the
          work of thinking so the audience doesn't have to. That's how analysis earns action — and how you
          become the person leaders come to. Next (OT-7): driving the program that turns that decision into
          a result.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Why", front: "Why is simplification the analyst's core communication job?", back: "Complexity is the enemy of action; analysis only creates value if a busy leader can grasp and act on it." },
    { id: "f2",  tag: "Why", front: "Is simplifying the same as dumbing down?", back: "No — it's doing the hard work of finding the signal so the audience receives clarity while you absorb the complexity." },
    { id: "f3",  tag: "Why", front: "What does it mean if you can't explain your analysis simply?", back: "You probably don't understand it well enough yet — distillation is itself a form of Dive Deep." },
    { id: "f4",  tag: "Pyramid", front: "State the pyramid principle.", back: "Lead with the answer, then key reasons, then supporting data — answer first, not a build-up." },
    { id: "f5",  tag: "Pyramid", front: "What does MECE mean?", back: "Mutually Exclusive, Collectively Exhaustive — supporting groups have no overlaps and no gaps." },
    { id: "f6",  tag: "Pyramid", front: "Is 'volume, rate, mix' MECE? Is 'volume, labor, West region'?", back: "Volume/rate/mix is MECE (clean split). Volume/labor/West overlaps (labor and West both include volume) — not MECE." },
    { id: "f7",  tag: "So what", front: "When does data become a message?", back: "When you add the 'so what' — a takeaway, ideally stated as a headline. Every number needs one." },
    { id: "f8",  tag: "So what", front: "Weak: 'CPU is $5.40.' Make it a headline.", back: "'CPU fell 10% to $5.40 — $6M annualized — driven by higher trailer fill.' State the message, support with data." },
    { id: "f9",  tag: "So what", front: "Why turn absolutes into comparisons?", back: "'$6M' alone means little; '$6M — 10% of the cost base' lands. %s, trends, and benchmarks make a number a message." },
    { id: "f10", tag: "Visual", front: "Which visual for: compare categories? trend? decompose a total? precise values?", back: "Bar (compare); line (trend); waterfall/bridge (decompose); table (precise values)." },
    { id: "f11", tag: "Visual", front: "What is chart-junk?", back: "3-D effects, too many series, decorative clutter — anything that doesn't help prove the visual's headline." },
    { id: "f12", tag: "Visual", front: "The test before picking a chart?", back: "Write its headline first; if the chart doesn't prove that headline at a glance, it's the wrong chart." },
    { id: "f13", tag: "Audience", front: "What does a senior leader want vs. an operator?", back: "Leader: the answer, ask, and risk (high altitude). Operator: the driver and the action (granular, floor-level)." },
    { id: "f14", tag: "Audience", front: "What question should you ask before presenting?", back: "What decision does this person need to make, and what's the minimum they need to make it well? Give exactly that." },
    { id: "f15", tag: "Deliver", front: "Four delivery principles?", back: "Lead with the punchline, anticipate questions (FAQ), be brief, and pair confidence with honesty about uncertainty." },
    { id: "f16", tag: "Deliver", front: "Why is clarity 'a form of respect'?", back: "A clear message shows you did the thinking so the audience doesn't have to — that's how analysis earns action." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "Simplifying a complex analysis means…",
      options: ["Removing the rigor", "Finding the signal so the audience receives clarity", "Using bigger words", "Adding more charts"],
      answer: 1,
      explain: "You absorb the complexity and deliver the signal — clarity, not dumbing down.",
    },
    {
      id: "q2",
      prompt: "The pyramid principle says to…",
      options: ["Build up to the conclusion", "Lead with the answer, then support it", "Hide the answer", "Present data with no message"],
      answer: 1,
      explain: "Answer first, then key reasons, then supporting data — not a mystery-novel build-up.",
    },
    {
      id: "q3",
      prompt: "MECE stands for…",
      options: [
        "Measure, Estimate, Compare, Explain",
        "Mutually Exclusive, Collectively Exhaustive",
        "Model Every Cost Element",
        "Metrics Enable Clear Execution",
      ],
      answer: 1,
      explain: "Supporting groups should have no overlaps (mutually exclusive) and no gaps (collectively exhaustive).",
    },
    {
      id: "q4",
      prompt: "Which turns a number into a message?",
      options: ["'Cost per unit is $5.40.'", "'CPU fell 10% to $5.40, $6M annualized, from higher trailer fill.'", "A bigger font", "A 3-D chart"],
      answer: 1,
      explain: "The 'so what' — the change, the size, and the driver — makes it a headline the audience can act on.",
    },
    {
      id: "q5",
      prompt: "To show a trend over time, the best visual is a…",
      options: ["Pie chart", "Line chart", "Table of raw values", "Word cloud"],
      answer: 1,
      explain: "Line charts show trends; bars compare categories; tables give precise values; waterfalls decompose totals.",
    },
    {
      id: "q6",
      prompt: "Before choosing a chart, you should…",
      options: ["Pick the prettiest one", "Write its headline and confirm the chart proves it at a glance", "Add 3-D effects", "Use every data series"],
      answer: 1,
      explain: "The visual must obviously prove its headline; if not, it's the wrong visual. Never make readers hunt for the point.",
    },
    {
      id: "q7",
      prompt: "A senior leader audience primarily wants…",
      options: ["Shift-level detail", "The answer, the ask, and the risk (high altitude)", "The raw query", "Every assumption"],
      answer: 1,
      explain: "Match altitude to audience — leaders want the decision-focused headline, with depth in reserve.",
    },
    {
      id: "q8",
      prompt: "Good message delivery pairs confidence with…",
      options: ["Arrogance", "Honesty about what's uncertain", "Length", "Jargon"],
      answer: 1,
      explain: "State what you know plainly and be honest about uncertainty — the same discipline as a DCF range.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Common-size for the story. Convert raw category costs into percentages so the audience sees the mix at a glance.",
      rows: [
        { label: "Category A cost ($)", value: 300000, given: true },
        { label: "Category B cost ($)", value: 500000, given: true },
        { label: "Category C cost ($)", value: 200000, given: true },
        { label: "Total cost ($)", key: "tot", answer: 1000000, hint: "A + B + C" },
        { label: "A as % of total", key: "a", answer: 30, hint: "A ÷ total × 100" },
        { label: "B as % of total", key: "b", answer: 50, hint: "B ÷ total × 100" },
        { label: "C as % of total", key: "c", answer: 20, hint: "C ÷ total × 100" },
      ],
      prefix: "",
      explain: "\"B is half the cost.\" Percentages turn three dollar figures into an instantly graspable mix — the story, not the raw numbers.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Build the headline. From a before/after and volume, compute the single improvement figure and the annualized dollars.",
      rows: [
        { label: "Cost per unit before ($)", value: 6.00, given: true },
        { label: "Cost per unit after ($)", value: 5.40, given: true },
        { label: "Annual volume (units)", value: 10000000, given: true },
        { label: "Savings per unit ($)", key: "spu", answer: 0.60, hint: "before − after" },
        { label: "Improvement (%)", key: "pct", answer: 10, hint: "savings per unit ÷ before × 100" },
        { label: "Annualized savings ($)", key: "ann", answer: 6000000, hint: "savings per unit × volume" },
      ],
      prefix: "",
      explain: "Headline: \"Cost per unit down 10% to \$5.40 — \$6M annualized.\" One sentence carries the whole story.",
    },
  ],
});
