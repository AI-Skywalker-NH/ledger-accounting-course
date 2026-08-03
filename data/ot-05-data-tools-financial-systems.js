/* ===========================================================================
   Course 4 · Module OT-5 — Data Tools & Financial Systems
   =========================================================================== */
Ledger.register({
  id: "ot-05",
  title: "Data Tools & Financial Systems",
  subtitle:
    "Knowing where the numbers live and which tool to reach for — ERP/GL systems, OLAP cubes, data warehouses, Excel at scale, and BI dashboards.",
  est: "~50 min",
  objectives: [
    "Map the data stack from source systems to reporting.",
    "Explain the role of an ERP / general ledger.",
    "Describe an OLAP cube (Essbase/Cognos) and slicing.",
    "Place the data warehouse and query tools in the stack.",
    "Choose the right tool and reconcile to the authoritative source.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "The Data Stack: Where Numbers Live",
      html: `
        <span class="eyebrow">Course 4 · Lesson 1 of 6</span>
        <h2>The Data Stack: Where Numbers Live</h2>
        <p>The posting lists a wall of systems — SQL, MS Access, Essbase, Cognos, Oracle, SAP, Lawson, JD
        Edwards. They aren't random; they're layers of a <span class="kt">data stack</span>:</p>
        <table>
          <tr><th>Layer</th><th>Examples</th><th>Purpose</th></tr>
          <tr><td>Source / operational systems</td><td>WMS, transport systems</td><td>Capture raw events.</td></tr>
          <tr><td><span class="kt">ERP / general ledger</span></td><td>Oracle, SAP, Lawson, JD Edwards</td><td>System of record for financials.</td></tr>
          <tr><td><span class="kt">Data warehouse</span></td><td>Redshift and similar</td><td>Central analytics store for querying.</td></tr>
          <tr><td><span class="kt">OLAP / BI</span></td><td>Essbase, Cognos, dashboards</td><td>Reporting, planning, slice-and-dice.</td></tr>
        </table>

        <p>Data flows up: events are captured, posted to the GL, piped (via ETL, OT-4) into the warehouse,
        and surfaced through cubes and dashboards. Analysts mostly consume the top layers.</p>

        <div class="callout">
          <strong>Know the stack to trust the number:</strong> when two reports disagree, it's usually
          because they pulled from different layers at different times. Understanding the flow lets you
          find which one is authoritative — and why they differ.
        </div>
      `,
    },
    {
      id: "l2",
      title: "ERP & the General Ledger",
      html: `
        <span class="eyebrow">Course 4 · Lesson 2 of 6</span>
        <h2>ERP &amp; the General Ledger</h2>
        <p>An <span class="kt">ERP</span> (Enterprise Resource Planning system) — Oracle, SAP, Lawson, JD
        Edwards — runs the company's core transactions, and its <span class="kt">general ledger (GL)</span>
        is the official <strong>system of record</strong> for the financials. When you need the
        <em>authoritative</em> actuals, they come from the GL.</p>

        <p>The GL is where the accounting from Course 1 physically lives: every transaction posts to
        accounts, rolls into the trial balance, and produces the financial statements. Actuals in your
        variance analysis ultimately trace here.</p>

        <div class="callout">
          <strong>The GL is truth for actuals:</strong> warehouse and BI numbers are copies, transformed
          for analysis. If an analysis disagrees with the GL, the GL wins — reconcile to it. This is the
          "reconcile to a known source" rule made concrete.
        </div>
      `,
    },
    {
      id: "l3",
      title: "OLAP Cubes: Essbase & Cognos",
      html: `
        <span class="eyebrow">Course 4 · Lesson 3 of 6</span>
        <h2>OLAP Cubes: Essbase &amp; Cognos</h2>
        <p>Finance planning and reporting often run on <span class="kt">OLAP cubes</span> (Essbase is
        Oracle's; Cognos is IBM's). A cube stores data multidimensionally: <span class="kt">measures</span>
        (cost, units, revenue) across <span class="kt">dimensions</span> (region, time, product, cost
        center).</p>

        <p>The power is <strong>slice, dice, and drill</strong>: view total cost, then slice to one
        region, then drill from year → quarter → month — instantly, because the cube pre-aggregates every
        combination. It's a PivotTable at enterprise scale, built for the finance planning cycle.</p>

        <div class="callout">
          <strong>Cubes are why finance can reforecast fast:</strong> the OP1/OP2 and MBR numbers usually
          live in a cube, so you can re-slice the plan by any dimension in seconds. Knowing the cube's
          dimensions is knowing what questions you can ask of it.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Data Warehouses & Query Tools",
      html: `
        <span class="eyebrow">Course 4 · Lesson 4 of 6</span>
        <h2>Data Warehouses &amp; Query Tools</h2>
        <p>The <span class="kt">data warehouse</span> is the central store built for analytics — large,
        query-optimized, and where the granular event data lands after ETL. It's what you hit with the
        SQL from OT-4, and where "large-scale data mining" happens.</p>

        <p>Lighter query tools have their place too: <span class="kt">MS Access</span> (a desktop database
        for smaller, self-contained datasets) appears in the posting, alongside the enterprise warehouse.
        The common thread is structured query — you ask precise questions of structured tables.</p>

        <div class="callout">
          <strong>Warehouse vs. GL:</strong> the warehouse is optimized for slicing millions of rows fast
          (analytics); the GL is optimized for correct, auditable financial records (truth). You explore
          in the warehouse, then reconcile the answer to the GL before you commit to it.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Excel at Scale & BI Dashboards",
      html: `
        <span class="eyebrow">Course 4 · Lesson 5 of 6</span>
        <h2>Excel at Scale &amp; BI Dashboards</h2>
        <p>Excel remains the analyst's workbench — models, ad-hoc analysis, PivotTables against extracts.
        But it has limits: it strains past ~1M rows, and manual spreadsheets are error-prone and hard to
        audit at scale.</p>

        <p>When a number needs to be seen repeatedly by many people, graduate from a spreadsheet to a
        <span class="kt">BI dashboard</span> (Cognos, QuickSight, Tableau-style) fed directly from the
        warehouse — a self-serve, always-fresh, single source of truth. Building the recurring WBR as a
        dashboard turns a manual weekly pull into a mechanism.</p>

        <div class="callout">
          <strong>Right tool for the job:</strong> Excel for bespoke modeling and one-off analysis; a
          cube for the finance plan; a dashboard for recurring metrics at scale. Reaching for Excel when
          you need a dashboard (or vice versa) is a common inefficiency.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Choosing the Tool & Reconciling",
      html: `
        <span class="eyebrow">Course 4 · Lesson 6 of 6</span>
        <h2>Choosing the Tool &amp; Reconciling</h2>
        <p>System literacy is knowing, for any question: <em>where does the authoritative number live, and
        what's the fastest tool to get it?</em></p>
        <table>
          <tr><th>Need</th><th>Reach for</th></tr>
          <tr><td>Authoritative actuals</td><td>GL / ERP</td></tr>
          <tr><td>Slice the plan by dimension</td><td>OLAP cube (Essbase/Cognos)</td></tr>
          <tr><td>Mine granular event data</td><td>Data warehouse (SQL)</td></tr>
          <tr><td>Bespoke model / one-off</td><td>Excel</td></tr>
          <tr><td>Recurring metrics for many</td><td>BI dashboard</td></tr>
        </table>

        <p>And the discipline that ties it together: <strong>reconcile across systems</strong>. If a
        warehouse report shows \$1,045,000 but the GL shows \$1,100,000, that \$55,000 (5%) gap must be
        explained before you trust either — often a timing or ETL difference.</p>

        <div class="callout">
          <strong>The authoritative source wins:</strong> know which system is truth for each number, and
          reconcile to it. This is the systems-literacy backbone of the data-quality mandate from OT-4 —
          and what keeps your analysis defensible. Next (OT-6): turning all this data into a story a
          leader can act on.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Stack", front: "Name the layers of the data stack, bottom to top.", back: "Source/operational systems → ERP/GL → data warehouse → OLAP/BI (cubes & dashboards)." },
    { id: "f2",  tag: "Stack", front: "Which direction does data flow, and what do analysts use?", back: "Up: events → GL → warehouse (via ETL) → cubes/dashboards. Analysts mostly consume the top layers." },
    { id: "f3",  tag: "Stack", front: "Why does knowing the stack help when two reports disagree?", back: "They likely pulled from different layers/times; understanding the flow tells you which is authoritative and why they differ." },
    { id: "f4",  tag: "ERP", front: "What is an ERP, and examples?", back: "Enterprise Resource Planning system running core transactions — Oracle, SAP, Lawson, JD Edwards." },
    { id: "f5",  tag: "ERP", front: "What is the general ledger (GL) and its role?", back: "The ERP's official system of record for financials; authoritative actuals come from the GL." },
    { id: "f6",  tag: "ERP", front: "If an analysis disagrees with the GL, which wins?", back: "The GL — warehouse/BI figures are transformed copies; reconcile the analysis back to the GL." },
    { id: "f7",  tag: "Cube", front: "What is an OLAP cube (Essbase/Cognos)?", back: "A multidimensional store of measures (cost, units) across dimensions (region, time, product) for fast slice/dice/drill." },
    { id: "f8",  tag: "Cube", front: "What does slice / dice / drill mean?", back: "Slice to one dimension value, dice by combinations, drill from summary to detail (year→quarter→month) — instantly, via pre-aggregation." },
    { id: "f9",  tag: "Cube", front: "Why does finance run planning on cubes?", back: "Cubes pre-aggregate every combination, so you can re-slice the plan (OP1/OP2, MBR) by any dimension in seconds." },
    { id: "f10", tag: "Warehouse", front: "What is a data warehouse?", back: "A large, query-optimized central store where granular event data lands after ETL — what you hit with SQL for data mining." },
    { id: "f11", tag: "Warehouse", front: "Warehouse vs. GL — what's each optimized for?", back: "Warehouse = fast slicing of millions of rows (analytics); GL = correct, auditable financial records (truth)." },
    { id: "f12", tag: "Excel/BI", front: "What are Excel's limits at scale?", back: "It strains past ~1M rows and manual spreadsheets are error-prone and hard to audit; graduate to a dashboard for recurring, shared metrics." },
    { id: "f13", tag: "Excel/BI", front: "When should a recurring report become a BI dashboard?", back: "When many people need it repeatedly — a warehouse-fed, always-fresh single source of truth turns a manual pull into a mechanism." },
    { id: "f14", tag: "Choose", front: "Which tool for: authoritative actuals? slicing the plan? mining granular data?", back: "Actuals → GL/ERP; slice the plan → OLAP cube; mine granular data → warehouse (SQL)." },
    { id: "f15", tag: "Choose", front: "Which tool for a bespoke model vs. recurring metrics for many?", back: "Bespoke/one-off → Excel; recurring metrics at scale → BI dashboard." },
    { id: "f16", tag: "Reconcile", front: "What must you do when a warehouse report and the GL disagree?", back: "Explain the gap (often timing or ETL) and reconcile to the authoritative source (GL) before trusting either." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "The authoritative system of record for financial actuals is the…",
      options: ["Data warehouse", "ERP / general ledger", "BI dashboard", "Excel model"],
      answer: 1,
      explain: "The ERP's general ledger is truth for actuals; warehouse and BI figures are transformed copies.",
    },
    {
      id: "q2",
      prompt: "Essbase and Cognos are examples of…",
      options: ["ERPs", "OLAP / BI tools (cubes & reporting)", "Programming languages", "Spreadsheets"],
      answer: 1,
      explain: "They're OLAP/BI tools — Essbase (Oracle) is a planning cube; Cognos (IBM) is BI/reporting.",
    },
    {
      id: "q3",
      prompt: "An OLAP cube stores…",
      options: [
        "A single flat table",
        "Measures across multiple dimensions for fast slice/dice/drill",
        "Only text",
        "Source code",
      ],
      answer: 1,
      explain: "Measures (cost, units) across dimensions (region, time, product) — pre-aggregated for instant slicing.",
    },
    {
      id: "q4",
      prompt: "The data warehouse is optimized for…",
      options: ["Auditable financial truth", "Fast querying/slicing of large granular data (analytics)", "Word processing", "Email"],
      answer: 1,
      explain: "The warehouse is the analytics store you mine with SQL; the GL is optimized for correct financial records.",
    },
    {
      id: "q5",
      prompt: "A recurring metric needed by many people is best delivered via…",
      options: ["A one-off Excel file", "A warehouse-fed BI dashboard", "An email screenshot", "A verbal update"],
      answer: 1,
      explain: "A dashboard is a self-serve, always-fresh single source of truth — turning a manual pull into a mechanism.",
    },
    {
      id: "q6",
      prompt: "For a bespoke one-off model, the right tool is usually…",
      options: ["A BI dashboard", "Excel", "The GL", "An OLAP cube"],
      answer: 1,
      explain: "Excel is the analyst's workbench for bespoke modeling and ad-hoc analysis; dashboards/cubes serve recurring/planning needs.",
    },
    {
      id: "q7",
      scenario: "A warehouse report shows \$1,045,000; the GL shows \$1,100,000.",
      prompt: "What is the discrepancy, and which is authoritative?",
      options: ["\$55,000; the warehouse", "\$55,000; the GL", "\$45,000; the GL", "\$0; they can't differ"],
      answer: 1,
      explain: "Gap = 1,100,000 − 1,045,000 = \$55,000 (5%); the GL is authoritative — explain the gap before trusting the report.",
    },
    {
      id: "q8",
      prompt: "System literacy means knowing, for any question…",
      options: [
        "Which programming language is trendiest",
        "Where the authoritative number lives and the fastest tool to get it",
        "How to avoid data",
        "The CEO's preference",
      ],
      answer: 1,
      explain: "Match the tool to the task and know which system is truth for each number — then reconcile to it.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Slice a cube. Given cost by region × month, compute a region slice, a month slice, and the grand total.",
      rows: [
        { label: "West · January ($)", value: 200000, given: true },
        { label: "West · February ($)", value: 250000, given: true },
        { label: "East · January ($)", value: 300000, given: true },
        { label: "East · February ($)", value: 350000, given: true },
        { label: "West total (slice by region) ($)", key: "west", answer: 450000, hint: "West Jan + West Feb" },
        { label: "February total (slice by month) ($)", key: "feb", answer: 600000, hint: "West Feb + East Feb" },
        { label: "Grand total ($)", key: "grand", answer: 1100000, hint: "sum of all four cells" },
      ],
      prefix: "",
      explain: "Slicing the cube: West = \$450k, February = \$600k, grand total = \$1,100k — the same value viewed along different dimensions.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Reconcile across systems. The warehouse report and the GL disagree — quantify the gap.",
      rows: [
        { label: "GL (system of record) ($)", value: 1100000, given: true },
        { label: "Warehouse report ($)", value: 1045000, given: true },
        { label: "Discrepancy ($)", key: "diff", answer: 55000, hint: "GL − warehouse" },
        { label: "Discrepancy (% of GL)", key: "pct", answer: 5, hint: "discrepancy ÷ GL × 100" },
      ],
      prefix: "",
      explain: "A \$55,000 (5%) gap — the GL is authoritative, so explain the difference (timing/ETL) before trusting the warehouse report.",
    },
  ],
});
