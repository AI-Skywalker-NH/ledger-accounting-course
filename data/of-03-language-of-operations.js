/* ===========================================================================
   Course 3 · Module OF-3 — The Language of Operations
   The vocabulary that earns credibility with operators.
   =========================================================================== */
Ledger.register({
  id: "of-03",
  title: "The Language of Operations",
  subtitle:
    "The working vocabulary of a logistics operation — volume, productivity, speed, cost, quality, and transportation terms you must use fluently and correctly.",
  est: "~50 min",
  objectives: [
    "Use the volume/work-unit vocabulary precisely (unit, item, package, shipment).",
    "Define and compute productivity terms (UPH, rate).",
    "Speak the speed and time terms (cycle time, dwell, CPT, SLA).",
    "Use cost, capacity, and quality terms correctly (CPU, cube, DPMO).",
    "Speak the core transportation vocabulary.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Volume & Work Units",
      html: `
        <span class="eyebrow">Course 3 · Lesson 1 of 6</span>
        <h2>Volume &amp; Work Units</h2>
        <p>Precision starts with counting the right thing. These sound interchangeable but aren't — mixing
        them up is a quick way to lose credibility:</p>
        <table>
          <tr><th>Term</th><th>Means</th></tr>
          <tr><td><span class="kt">Unit / item / each</span></td><td>A single sellable item (one product).</td></tr>
          <tr><td><span class="kt">Order</span></td><td>One customer purchase — may contain several units.</td></tr>
          <tr><td><span class="kt">Package / box</span></td><td>A physical parcel shipped — may contain several units, or an order may split across several packages.</td></tr>
          <tr><td><span class="kt">Shipment</span></td><td>A movement of one or more packages.</td></tr>
        </table>

        <div class="callout">
          <strong>Why it matters for cost:</strong> "cost per unit," "cost per package," and "cost per
          order" are different denominators. Quote a per-package cost when someone expects per-unit and
          your whole analysis looks off. Always state the denominator.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Productivity & Rate",
      html: `
        <span class="eyebrow">Course 3 · Lesson 2 of 6</span>
        <h2>Productivity &amp; Rate</h2>
        <p>Productivity is how fast work gets done — the bridge from labor hours to output.</p>
        <div class="equation">UPH (Units per Hour) = Units Processed ÷ Labor Hours</div>

        <p>Every process has its own rate: a stow rate, a pick rate, a pack rate. Higher UPH means fewer
        labor hours per unit and therefore lower labor cost per unit:</p>
        <div class="equation">Labor Cost per Unit = (Labor Hours × Wage) ÷ Units = Wage ÷ UPH</div>

        <p>So a pick line running at 100 UPH with a \$25/hour wage costs \$0.25 of labor per unit. Push UPH
        to 125 and the labor cost per unit falls to \$0.20 — the productivity lever in action.</p>

        <div class="callout">
          <strong>Rate is the operator's language for cost:</strong> when an operator says "our rate
          dropped," translate immediately to "labor cost per unit went up." That instant translation is
          what makes you a credible partner.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Time & Speed Terms",
      html: `
        <span class="eyebrow">Course 3 · Lesson 3 of 6</span>
        <h2>Time &amp; Speed Terms</h2>
        <table>
          <tr><th>Term</th><th>Means</th></tr>
          <tr><td><span class="kt">Cycle time</span></td><td>Time to complete one full pass of a process.</td></tr>
          <tr><td><span class="kt">Dwell time</span></td><td>Time work (or a trailer) sits idle between steps — pure waste.</td></tr>
          <tr><td><span class="kt">Lead time</span></td><td>Total time from start to availability (e.g. order to ship-ready).</td></tr>
          <tr><td><span class="kt">CPT</span></td><td>Critical Pull Time — the cutoff to leave a node on schedule.</td></tr>
          <tr><td><span class="kt">SLA</span></td><td>Service-level agreement — the promised standard (e.g. deliver within 2 days).</td></tr>
          <tr><td><span class="kt">Click-to-ship / click-to-deliver</span></td><td>Order → shipped, and order → delivered.</td></tr>
        </table>

        <div class="callout">
          <strong>Dwell is money:</strong> idle time is capacity you paid for and didn't use, and it
          eats into the CPT buffer. Reducing dwell often improves both cost and speed at once — the ideal
          kind of win.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Cost & Capacity Terms",
      html: `
        <span class="eyebrow">Course 3 · Lesson 4 of 6</span>
        <h2>Cost &amp; Capacity Terms</h2>
        <table>
          <tr><th>Term</th><th>Means</th></tr>
          <tr><td><span class="kt">CPU (cost per unit)</span></td><td>Total cost ÷ units. The headline efficiency metric — also stated per package or per shipment.</td></tr>
          <tr><td><span class="kt">Fixed vs. variable cost</span></td><td>Fixed doesn't move with volume (facility, salaried); variable does (line labor, transport).</td></tr>
          <tr><td><span class="kt">Cube / cube utilization</span></td><td>Volumetric space used; how full a box or trailer is by volume (not just weight).</td></tr>
          <tr><td><span class="kt">Capacity / throughput / utilization</span></td><td>Max processable / actual volume / their ratio.</td></tr>
        </table>

        <p>Two things "fill up" in shipping: <strong>weight</strong> and <strong>cube</strong> (volume). A
        trailer full of light, bulky goods "cubes out" before it hits its weight limit — so cube
        utilization, not just weight, drives transportation cost per unit.</p>

        <div class="callout">
          <strong>CPU is the number:</strong> most operations-finance conversations end at cost per unit
          (or per package). Know exactly what's in the numerator (which costs) and the denominator (which
          volume) every time you quote it.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Quality & Defect Terms",
      html: `
        <span class="eyebrow">Course 3 · Lesson 5 of 6</span>
        <h2>Quality &amp; Defect Terms</h2>
        <p>Quality isn't separate from cost — defects create rework, returns, and customer harm.</p>
        <table>
          <tr><th>Term</th><th>Means</th></tr>
          <tr><td><span class="kt">DPMO</span></td><td>Defects Per Million Opportunities — defect rate scaled to a million, for comparability.</td></tr>
          <tr><td><span class="kt">Defect rate</span></td><td>Defects ÷ opportunities (as a %).</td></tr>
          <tr><td><span class="kt">On-time delivery %</span></td><td>Share of packages delivered by the promised time.</td></tr>
          <tr><td><span class="kt">Fill rate</span></td><td>Share of demand met from available inventory.</td></tr>
          <tr><td><span class="kt">Concessions</span></td><td>Credits/refunds given to customers for service failures — a direct cost of poor quality.</td></tr>
        </table>

        <div class="equation">DPMO = (Defects ÷ Opportunities) × 1,000,000</div>

        <div class="callout">
          <strong>Quality has a P&amp;L:</strong> a defect triggers a redelivery, a return, or a
          concession — all real cost, plus customer damage. When you propose speeding something up, check
          it doesn't quietly raise the defect rate; the concessions can erase the savings.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Transportation Terms",
      html: `
        <span class="eyebrow">Course 3 · Lesson 6 of 6</span>
        <h2>Transportation Terms</h2>
        <table>
          <tr><th>Term</th><th>Means</th></tr>
          <tr><td><span class="kt">Linehaul</span></td><td>Long-haul trucking between facilities (middle mile).</td></tr>
          <tr><td><span class="kt">Injection</span></td><td>Handing packages off into a carrier's or the next network.</td></tr>
          <tr><td><span class="kt">Cross-dock</span></td><td>Inbound straight to outbound, no storage.</td></tr>
          <tr><td><span class="kt">Trailer utilization</span></td><td>How full a trailer is — drives transport cost per unit.</td></tr>
          <tr><td><span class="kt">Stops per route</span></td><td>Deliveries per route; higher = better last-mile density.</td></tr>
          <tr><td><span class="kt">Cost per mile / per stop</span></td><td>Transportation cost denominators for routing decisions.</td></tr>
        </table>

        <div class="callout">
          <strong>You now speak the language.</strong> Volume, productivity, speed, cost, quality, and
          transport terms are the vocabulary operators use every day. Using them precisely — and
          translating each into its cost implication — is what earns you the seat at the table. Next:
          turning these terms into the cost-driver models (OF-4).
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Volume", front: "Unit vs. order vs. package?", back: "Unit = one sellable item; order = one customer purchase (may hold many units); package = one physical parcel shipped." },
    { id: "f2",  tag: "Volume", front: "Why must you always state the denominator on a cost metric?", back: "Cost per unit, per package, and per order differ; quoting the wrong one makes the analysis look wrong." },
    { id: "f3",  tag: "Productivity", front: "Formula for UPH (units per hour)?", back: "UPH = Units Processed ÷ Labor Hours." },
    { id: "f4",  tag: "Productivity", front: "How does UPH relate to labor cost per unit?", back: "Labor cost per unit = Wage ÷ UPH. Higher UPH → lower labor cost per unit." },
    { id: "f5",  tag: "Productivity", front: "Translate 'our rate dropped' into finance.", back: "Productivity fell → labor hours per unit rose → labor cost per unit went up." },
    { id: "f6",  tag: "Time", front: "Cycle time vs. dwell time?", back: "Cycle time = time to complete one process pass; dwell time = idle time between steps (waste)." },
    { id: "f7",  tag: "Time", front: "What is CPT, and SLA?", back: "CPT = Critical Pull Time (cutoff to leave a node on schedule); SLA = service-level agreement (the promised standard)." },
    { id: "f8",  tag: "Time", front: "Why is dwell time 'money'?", back: "Idle time is paid-for capacity going unused and eats the CPT buffer; cutting dwell often improves cost and speed together." },
    { id: "f9",  tag: "Cost", front: "What is CPU?", back: "Cost per unit = total cost ÷ units — the headline efficiency metric (also per package or per shipment)." },
    { id: "f10", tag: "Cost", front: "Fixed vs. variable cost?", back: "Fixed doesn't move with volume (facility, salaried); variable does (line labor, transportation)." },
    { id: "f11", tag: "Cost", front: "What does it mean for a trailer to 'cube out'?", back: "It fills up on volume (cube) before hitting its weight limit — common with light, bulky goods; cube utilization drives cost." },
    { id: "f12", tag: "Quality", front: "What is DPMO and its formula?", back: "Defects Per Million Opportunities = (Defects ÷ Opportunities) × 1,000,000 — a comparable defect-rate scale." },
    { id: "f13", tag: "Quality", front: "What are concessions?", back: "Credits/refunds given to customers for service failures — a direct P&L cost of poor quality." },
    { id: "f14", tag: "Quality", front: "Why check the defect rate when speeding a process up?", back: "Faster can raise defects; the resulting concessions/returns can erase the intended savings. Quality has a P&L." },
    { id: "f15", tag: "Transport", front: "What is linehaul, and injection?", back: "Linehaul = long-haul trucking between facilities (middle mile); injection = handing packages into a carrier's/next network." },
    { id: "f16", tag: "Transport", front: "How does 'stops per route' relate to last-mile cost?", back: "More stops per route = higher delivery density = lower cost per package on the last mile." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "A single sellable product is a…",
      options: ["Shipment", "Unit (each)", "Route", "Manifest"],
      answer: 1,
      explain: "A unit (or 'each') is one sellable item; an order may contain several units, and a package is the physical parcel.",
    },
    {
      id: "q2",
      scenario: "5,000 units processed in 50 labor hours.",
      prompt: "What is the UPH?",
      options: ["50", "100", "250", "10"],
      answer: 1,
      explain: "UPH = units ÷ labor hours = 5,000 ÷ 50 = 100 units per hour.",
    },
    {
      id: "q3",
      scenario: "A process runs at 100 UPH with a \$25/hour fully-loaded wage.",
      prompt: "What is the labor cost per unit?",
      options: ["\$2.50", "\$0.25", "\$25.00", "\$0.04"],
      answer: 1,
      explain: "Labor cost per unit = wage ÷ UPH = 25 ÷ 100 = \$0.25.",
    },
    {
      id: "q4",
      prompt: "Dwell time is…",
      options: ["Time to complete a process", "Idle time between steps (waste)", "Delivery time", "The wage rate"],
      answer: 1,
      explain: "Dwell is idle time work or a trailer spends waiting — non-value-added and a target for reduction.",
    },
    {
      id: "q5",
      scenario: "There were 50 defects across 100,000 opportunities.",
      prompt: "What is the DPMO?",
      options: ["50", "500", "5,000", "0.05"],
      answer: 1,
      explain: "DPMO = (50 ÷ 100,000) × 1,000,000 = 500 defects per million opportunities.",
    },
    {
      id: "q6",
      prompt: "A trailer 'cubes out' when it…",
      options: ["Runs out of fuel", "Fills up on volume before reaching its weight limit", "Is exactly half full", "Breaks down"],
      answer: 1,
      explain: "Light, bulky goods fill the trailer's volume (cube) before its weight capacity — so cube utilization drives cost.",
    },
    {
      id: "q7",
      prompt: "Concessions are…",
      options: [
        "Discounts to suppliers",
        "Credits/refunds to customers for service failures",
        "Employee bonuses",
        "A type of trailer",
      ],
      answer: 1,
      explain: "Concessions are customer credits for failures (late, damaged) — a direct cost of poor quality.",
    },
    {
      id: "q8",
      prompt: "'Cost per unit' should always be quoted with…",
      options: ["A stock ticker", "A clear denominator (which volume) and numerator (which costs)", "A delivery date", "The CEO's approval"],
      answer: 1,
      explain: "Per-unit vs. per-package vs. per-order differ; always be explicit about what's in the numerator and denominator.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Productivity to cost. Compute UPH, the labor cost, and the labor cost per unit.",
      rows: [
        { label: "Units processed", value: 5000, given: true },
        { label: "Labor hours worked", value: 50, given: true },
        { label: "Fully-loaded wage ($/hour)", value: 25, given: true },
        { label: "UPH (units per hour)", key: "uph", answer: 100, hint: "units ÷ labor hours" },
        { label: "Total labor cost ($)", key: "cost", answer: 1250, hint: "labor hours × wage" },
        { label: "Labor cost per unit ($)", key: "cpu", answer: 0.25, hint: "total labor cost ÷ units (= wage ÷ UPH)" },
      ],
      prefix: "",
      explain: "UPH = 5,000 ÷ 50 = 100; labor cost = 50 × \$25 = \$1,250; per unit = \$1,250 ÷ 5,000 = \$0.25 (= \$25 ÷ 100 UPH).",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Quality metrics. Compute the defect rate and DPMO.",
      rows: [
        { label: "Defects", value: 50, given: true },
        { label: "Opportunities (units inspected)", value: 100000, given: true },
        { label: "Defect rate (%)", key: "rate", answer: 0.05, hint: "defects ÷ opportunities × 100" },
        { label: "DPMO", key: "dpmo", answer: 500, hint: "defects ÷ opportunities × 1,000,000" },
      ],
      prefix: "",
      explain: "Defect rate = 50 ÷ 100,000 = 0.05%; DPMO = 500. DPMO scales the rate to a million for comparability across processes.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Trailer utilization & the fill opportunity. Compute cost per unit as loaded, utilization, and the savings from filling the trailer.",
      rows: [
        { label: "Linehaul cost per trailer ($)", value: 2000, given: true },
        { label: "Units loaded", value: 4000, given: true },
        { label: "Trailer capacity (units)", value: 5000, given: true },
        { label: "Cost per unit as loaded ($)", key: "cpl", answer: 0.50, hint: "cost per trailer ÷ units loaded" },
        { label: "Trailer utilization (%)", key: "util", answer: 80, hint: "units loaded ÷ capacity × 100" },
        { label: "Cost per unit if full ($)", key: "cpf", answer: 0.40, hint: "cost per trailer ÷ capacity" },
        { label: "Savings per unit from filling ($)", key: "sav", answer: 0.10, hint: "cost as loaded − cost if full" },
      ],
      prefix: "",
      explain: "As loaded: \$2,000 ÷ 4,000 = \$0.50/unit at 80% full. Full: \$2,000 ÷ 5,000 = \$0.40/unit — a \$0.10/unit savings from filling the trailer.",
    },
  ],
});
