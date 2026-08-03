/* ===========================================================================
   Course 3 · Module OF-4 — Cost Drivers & Unit Economics
   =========================================================================== */
Ledger.register({
  id: "of-04",
  title: "Cost Drivers & Unit Economics",
  subtitle:
    "The economics under the operation — what makes cost move, how cost per unit behaves with volume, and when incremental volume is worth it.",
  est: "~70 min",
  objectives: [
    "Define a cost driver and identify the driver behind a cost.",
    "Distinguish fixed from variable cost and explain operating leverage.",
    "Build cost per unit from its components.",
    "Compute contribution margin and breakeven.",
    "Reason with marginal vs. average cost on an incremental-volume decision.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "What Is a Cost Driver?",
      html: `
        <span class="eyebrow">Course 3 · Lesson 1 of 6</span>
        <h2>What Is a Cost Driver?</h2>
        <p>A <span class="kt">cost driver</span> is the underlying factor that <em>causes</em> a cost to
        change. "Dive deep into cost drivers" — the posting's first responsibility — means finding the
        real lever, not just the line item.</p>

        <p>Common drivers in a logistics operation:</p>
        <table>
          <tr><th>Cost</th><th>Primary driver(s)</th></tr>
          <tr><td>FC labor</td><td>Volume ÷ productivity (UPH)</td></tr>
          <tr><td>Transportation</td><td>Miles, trailers, and trailer fill</td></tr>
          <tr><td>Last-mile delivery</td><td>Stops and route density</td></tr>
          <tr><td>Facility</td><td>Fixed — driven by footprint, not volume</td></tr>
        </table>

        <div class="callout">
          <strong>Find the driver, not the symptom:</strong> "transportation cost went up" is a symptom.
          The driver might be falling trailer utilization, longer routes, or a volume mix shift. Your job
          is to trace cost to the driver you can actually move.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Fixed vs. Variable & Operating Leverage",
      html: `
        <span class="eyebrow">Course 3 · Lesson 2 of 6</span>
        <h2>Fixed vs. Variable &amp; Operating Leverage</h2>
        <p>Costs behave in two basic ways as volume changes:</p>
        <ul>
          <li><span class="kt">Variable cost</span> moves with volume (line labor, transportation). Per
          unit it's roughly constant.</li>
          <li><span class="kt">Fixed cost</span> doesn't move with volume (facility rent, salaried staff,
          equipment). Per unit it <em>falls</em> as volume rises.</li>
        </ul>

        <p>That falling fixed-cost-per-unit is <span class="kt">operating leverage</span>: spread the same
        fixed cost over more units and cost per unit drops. \$1,000,000 of fixed cost plus \$5/unit
        variable:</p>
        <table>
          <tr><th>Volume</th><th>Total cost</th><th>Cost per unit</th></tr>
          <tr><td>500,000</td><td>3,500,000</td><td>7.00</td></tr>
          <tr><td>1,000,000</td><td>6,000,000</td><td>6.00</td></tr>
        </table>

        <div class="callout">
          <strong>Watch for step costs:</strong> fixed costs aren't fixed forever — add a shift or open a
          building and fixed cost jumps in a <em>step</em>. Volume growth lowers CPU smoothly until you
          hit a capacity wall and must add a chunk of fixed cost.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Building Cost per Unit",
      html: `
        <span class="eyebrow">Course 3 · Lesson 3 of 6</span>
        <h2>Building Cost per Unit</h2>
        <p><span class="kt">Cost per unit (CPU)</span> is the headline efficiency number. Build it by
        stacking the components:</p>
        <div class="equation">CPU = Variable cost/unit + (Fixed cost ÷ Volume)</div>

        <table>
          <tr><td>Labor per unit</td><td>2.50</td></tr>
          <tr><td>+ Transportation per unit</td><td>3.00</td></tr>
          <tr><td>+ Fixed per unit (2,000,000 ÷ 4,000,000)</td><td>0.50</td></tr>
          <tr><td><strong>= Cost per unit</strong></td><td><strong>6.00</strong></td></tr>
        </table>

        <p>The variable pieces (\$5.50) are constant per unit; the fixed piece (\$0.50) shrinks as volume
        grows. Decomposing CPU this way shows exactly which lever to pull.</p>

        <div class="callout">
          <strong>Numerator/denominator discipline (again):</strong> be explicit about which costs are in
          the stack and which volume divides them. A CPU that quietly excludes a cost — or uses the wrong
          volume — is the most common way an analysis misleads.
        </div>
      `,
    },
    {
      id: "l4",
      title: "The Cost-to-Serve",
      html: `
        <span class="eyebrow">Course 3 · Lesson 4 of 6</span>
        <h2>The Cost-to-Serve</h2>
        <p><span class="kt">Cost-to-serve</span> is the fully-loaded cost to fulfill and deliver a unit
        (or order) — the whole stack from receive to doorstep. Its power is that it <strong>varies</strong>,
        often dramatically, across:</p>
        <ul>
          <li><strong>Product</strong> — a heavy, bulky item costs far more to store and ship than a small one.</li>
          <li><strong>Geography</strong> — a dense-city delivery is cheap per package; a remote one is expensive.</li>
          <li><strong>Speed</strong> — a faster promise carries a higher cost-to-serve.</li>
        </ul>

        <p>Averaging cost-to-serve hides these differences. The insight often lives in the
        <em>distribution</em>: which products, regions, or speed tiers are unprofitable to serve, and what
        to do about them.</p>

        <div class="callout">
          <strong>Where opportunities hide:</strong> "surface inefficiencies others miss" usually means
          disaggregating an average. The blended cost looks fine; the tail — the expensive-to-serve
          segment — is where the savings (or a pricing/policy fix) lives.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Contribution & Breakeven",
      html: `
        <span class="eyebrow">Course 3 · Lesson 5 of 6</span>
        <h2>Contribution &amp; Breakeven</h2>
        <p><span class="kt">Contribution margin</span> is what each unit contributes toward covering fixed
        cost, after its own variable cost:</p>
        <div class="equation">Contribution per Unit = Revenue per Unit − Variable Cost per Unit</div>
        <p>At \$10 revenue and \$5.50 variable cost, contribution is \$4.50 per unit (a 45% contribution
        margin). Once fixed costs are covered, each additional unit's contribution drops to the bottom
        line.</p>

        <div class="equation">Breakeven Volume = Fixed Cost ÷ Contribution per Unit</div>
        <p>With \$1,800,000 of fixed cost: 1,800,000 ÷ 4.50 = <strong>400,000 units</strong> to break
        even. Below that you lose money; above it you profit.</p>

        <div class="callout">
          <strong>Why contribution beats full CPU for decisions:</strong> for "should we take this extra
          volume?", the fixed cost is already sunk — what matters is whether the extra units contribute
          (revenue &gt; variable cost). That's the marginal thinking in the next lesson.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Marginal vs. Average Cost",
      html: `
        <span class="eyebrow">Course 3 · Lesson 6 of 6</span>
        <h2>Marginal vs. Average Cost</h2>
        <p>The most misused pair in cost analysis:</p>
        <ul>
          <li><span class="kt">Average cost</span> = total cost ÷ total units (your CPU).</li>
          <li><span class="kt">Marginal cost</span> = the cost of <em>one more</em> unit — usually just
          its variable cost, since fixed cost doesn't change.</li>
        </ul>

        <p>When marginal cost is below average cost, adding volume <strong>pulls the average down</strong>.
        Take 1,000,000 units at a \$6.00 average (total \$6,000,000) and add 1,000,000 more at a \$5.50
        marginal cost: new total \$11,500,000 over 2,000,000 units = <strong>\$5.75 average</strong>.</p>

        <div class="callout">
          <strong>The decision rule:</strong> evaluate incremental volume at <em>marginal</em> cost, not
          average. A shipment that looks unprofitable at the \$6.00 average may be very profitable at its
          \$5.50 marginal cost. Confusing the two is a classic — and expensive — analytical error.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Driver", front: "What is a cost driver?", back: "The underlying factor that causes a cost to change (e.g. volume ÷ productivity for labor; trailer fill for transport)." },
    { id: "f2",  tag: "Driver", front: "Symptom vs. driver — example?", back: "'Transportation cost rose' is a symptom; the driver might be falling trailer utilization, longer routes, or a mix shift." },
    { id: "f3",  tag: "Behavior", front: "Fixed vs. variable cost?", back: "Variable moves with volume (constant per unit); fixed doesn't move with volume (falls per unit as volume rises)." },
    { id: "f4",  tag: "Behavior", front: "What is operating leverage?", back: "Spreading fixed cost over more units lowers cost per unit as volume grows." },
    { id: "f5",  tag: "Behavior", front: "What is a step cost?", back: "A fixed cost that jumps in a chunk when you add capacity (a shift, a building) — fixed only within a capacity range." },
    { id: "f6",  tag: "CPU", front: "Formula to build cost per unit?", back: "CPU = variable cost per unit + (fixed cost ÷ volume)." },
    { id: "f7",  tag: "CPU", front: "Why insist on numerator/denominator discipline for CPU?", back: "A CPU that excludes a cost or uses the wrong volume misleads — always state which costs and which volume." },
    { id: "f8",  tag: "Cost-to-serve", front: "What is cost-to-serve?", back: "The fully-loaded cost to fulfill and deliver a unit/order, end to end — it varies a lot by product, geography, and speed." },
    { id: "f9",  tag: "Cost-to-serve", front: "Why disaggregate an average cost-to-serve?", back: "The blended average hides the expensive-to-serve tail — where inefficiencies and pricing/policy fixes usually live." },
    { id: "f10", tag: "Contribution", front: "Contribution margin per unit formula?", back: "Revenue per unit − variable cost per unit. (E.g. 10 − 5.50 = 4.50.)" },
    { id: "f11", tag: "Contribution", front: "Breakeven volume formula?", back: "Fixed cost ÷ contribution per unit. (E.g. 1,800,000 ÷ 4.50 = 400,000 units.)" },
    { id: "f12", tag: "Contribution", front: "Why use contribution (not full CPU) for a 'take this volume?' decision?", back: "Fixed cost is already sunk; what matters is whether the extra units' revenue exceeds their variable cost." },
    { id: "f13", tag: "Marginal", front: "Average vs. marginal cost?", back: "Average = total cost ÷ units (CPU); marginal = cost of one more unit (usually just its variable cost)." },
    { id: "f14", tag: "Marginal", front: "What happens to average cost when marginal cost is below it?", back: "Adding volume pulls the average down (e.g. 1M @ 6.00 + 1M @ 5.50 marginal → 5.75 average)." },
    { id: "f15", tag: "Marginal", front: "The incremental-volume decision rule?", back: "Evaluate extra volume at marginal cost, not average — a shipment unprofitable at average CPU can be profitable at marginal cost." },
    { id: "f16", tag: "Marginal", front: "Why is confusing average and marginal cost expensive?", back: "You may reject profitable incremental volume (or accept unprofitable) by using the wrong cost basis for the decision." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "A cost driver is…",
      options: ["The largest cost line", "The factor that causes a cost to change", "The person who approves costs", "A type of truck"],
      answer: 1,
      explain: "A cost driver is the underlying lever — find it to actually move the cost, rather than describing the symptom.",
    },
    {
      id: "q2",
      scenario: "Fixed cost \$1,000,000; variable cost \$5/unit; volume 1,000,000 units.",
      prompt: "What is the cost per unit?",
      options: ["\$5.00", "\$6.00", "\$7.00", "\$1.00"],
      answer: 1,
      explain: "Total = 1,000,000 + 5×1,000,000 = 6,000,000; ÷ 1,000,000 = \$6.00 per unit.",
    },
    {
      id: "q3",
      prompt: "Operating leverage means that as volume rises…",
      options: ["Variable cost per unit falls", "Fixed cost per unit falls, lowering CPU", "Total cost falls", "Revenue falls"],
      answer: 1,
      explain: "Spreading fixed cost over more units lowers fixed-cost-per-unit and therefore total cost per unit.",
    },
    {
      id: "q4",
      scenario: "Revenue \$10/unit; variable cost \$5.50/unit.",
      prompt: "What is the contribution margin per unit?",
      options: ["\$15.50", "\$4.50", "\$5.50", "\$10.00"],
      answer: 1,
      explain: "Contribution = revenue − variable cost = 10 − 5.50 = \$4.50 per unit.",
    },
    {
      id: "q5",
      scenario: "Fixed cost \$1,800,000; contribution \$4.50/unit.",
      prompt: "What is the breakeven volume?",
      options: ["400,000 units", "810,000 units", "4,500,000 units", "40,000 units"],
      answer: 0,
      explain: "Breakeven = fixed ÷ contribution = 1,800,000 ÷ 4.50 = 400,000 units.",
    },
    {
      id: "q6",
      prompt: "For a 'should we take this extra volume?' decision, the relevant cost is…",
      options: ["Average cost (CPU)", "Marginal cost (usually variable cost)", "Total fixed cost", "Last year's cost"],
      answer: 1,
      explain: "Fixed cost is sunk; evaluate incremental volume at its marginal (variable) cost.",
    },
    {
      id: "q7",
      scenario: "1,000,000 units at \$6.00 average; add 1,000,000 units at \$5.50 marginal cost.",
      prompt: "What is the new average cost per unit?",
      options: ["\$6.00", "\$5.75", "\$5.50", "\$11.50"],
      answer: 1,
      explain: "New total = 6,000,000 + 5,500,000 = 11,500,000; ÷ 2,000,000 = \$5.75. Marginal below average pulls the average down.",
    },
    {
      id: "q8",
      prompt: "Where do 'inefficiencies others miss' most often hide?",
      options: ["In the blended average", "In the disaggregated tail (expensive product/region/speed segments)", "In the headcount", "In the logo"],
      answer: 1,
      explain: "Averages hide the expensive-to-serve tail; disaggregating cost-to-serve surfaces the real opportunity.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Operating leverage. Compute total cost and cost per unit at two volumes (fixed \$1,000,000; variable \$5/unit).",
      rows: [
        { label: "Fixed cost ($)", value: 1000000, given: true },
        { label: "Variable cost per unit ($)", value: 5, given: true },
        { label: "Volume A (units)", value: 500000, given: true },
        { label: "Volume B (units)", value: 1000000, given: true },
        { label: "Total cost at A ($)", key: "ta", answer: 3500000, hint: "fixed + variable × volume A" },
        { label: "Cost per unit at A ($)", key: "cpa", answer: 7.00, hint: "total cost A ÷ volume A" },
        { label: "Total cost at B ($)", key: "tb", answer: 6000000, hint: "fixed + variable × volume B" },
        { label: "Cost per unit at B ($)", key: "cpb", answer: 6.00, hint: "total cost B ÷ volume B" },
      ],
      prefix: "",
      explain: "CPU falls from \$7.00 to \$6.00 as volume doubles — the fixed \$1,000,000 spread over twice the units.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Build cost per unit from its components.",
      rows: [
        { label: "Labor per unit ($)", value: 2.50, given: true },
        { label: "Transportation per unit ($)", value: 3.00, given: true },
        { label: "Fixed cost ($)", value: 2000000, given: true },
        { label: "Volume (units)", value: 4000000, given: true },
        { label: "Variable cost per unit ($)", key: "vpu", answer: 5.50, hint: "labor + transportation per unit" },
        { label: "Fixed cost per unit ($)", key: "fpu", answer: 0.50, hint: "fixed cost ÷ volume" },
        { label: "Total cost per unit ($)", key: "cpu", answer: 6.00, hint: "variable per unit + fixed per unit" },
      ],
      prefix: "",
      explain: "Variable \$5.50 + fixed \$0.50 = \$6.00 CPU. The \$5.50 is constant per unit; the \$0.50 shrinks as volume grows.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Contribution and breakeven.",
      rows: [
        { label: "Revenue per unit ($)", value: 10.00, given: true },
        { label: "Variable cost per unit ($)", value: 5.50, given: true },
        { label: "Fixed cost ($)", value: 1800000, given: true },
        { label: "Contribution per unit ($)", key: "cpu", answer: 4.50, hint: "revenue − variable cost per unit" },
        { label: "Contribution margin (%)", key: "cm", answer: 45, hint: "contribution ÷ revenue × 100" },
        { label: "Breakeven volume (units)", key: "be", answer: 400000, hint: "fixed cost ÷ contribution per unit" },
      ],
      prefix: "",
      explain: "Contribution \$4.50/unit (45%); breakeven = 1,800,000 ÷ 4.50 = 400,000 units.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Marginal vs. average. Add incremental volume at marginal cost and recompute the average CPU.",
      rows: [
        { label: "Current volume (units)", value: 1000000, given: true },
        { label: "Current total cost ($)", value: 6000000, given: true },
        { label: "Incremental units", value: 1000000, given: true },
        { label: "Marginal (variable) cost per unit ($)", value: 5.50, given: true },
        { label: "Incremental cost ($)", key: "inc", answer: 5500000, hint: "incremental units × marginal cost" },
        { label: "New total cost ($)", key: "nt", answer: 11500000, hint: "current total + incremental cost" },
        { label: "New total volume (units)", key: "nv", answer: 2000000, hint: "current + incremental units" },
        { label: "New average cost per unit ($)", key: "avg", answer: 5.75, hint: "new total cost ÷ new total volume" },
      ],
      prefix: "",
      explain: "Adding 1M units at \$5.50 marginal (below the \$6.00 average) drops the average to \$5.75 — why marginal cost drives the decision.",
    },
  ],
});
