/* ===========================================================================
   Course 4 · Module OT-4 — SQL & Data Fundamentals for Analysts
   =========================================================================== */
Ledger.register({
  id: "ot-04",
  title: "SQL & Data Fundamentals for Analysts",
  subtitle:
    "Getting answers out of massive datasets yourself — the SELECT, aggregation, joins, window functions, and the ETL/data-quality discipline behind them.",
  est: "~80 min",
  objectives: [
    "Explain why SQL is essential for a data-heavy analyst role.",
    "Read and write a core SELECT query.",
    "Aggregate with GROUP BY and aggregate functions.",
    "Combine tables with JOINs.",
    "Recognize window functions and the ETL / data-quality workflow.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Why SQL Matters",
      html: `
        <span class="eyebrow">Course 4 · Lesson 1 of 6</span>
        <h2>Why SQL Matters</h2>
        <p>The posting lists it plainly: "Knowledge of SQL/ETL" and "experience with large-scale data
        mining and reporting tools." In a network that generates billions of events, the data lives in
        databases and warehouses — and <span class="kt">SQL</span> (Structured Query Language) is how you
        get answers out of it yourself, instead of waiting on someone else to pull them.</p>

        <p>SQL is the analyst's superpower for three reasons:</p>
        <ul>
          <li><strong>Self-service</strong> — ask your own questions at the speed of curiosity.</li>
          <li><strong>Scale</strong> — it works the same on a thousand rows or a billion.</li>
          <li><strong>Depth</strong> — Dive Deep means going to the granular data; SQL is how you get there.</li>
        </ul>

        <div class="callout">
          <strong>You don't need to be a database engineer:</strong> analysts mostly <em>read</em> data
          with SELECT queries. Master SELECT, GROUP BY, and JOINs and you can answer most operational
          questions on your own — which is exactly the independence the role rewards.
        </div>
      `,
    },
    {
      id: "l2",
      title: "The Core SELECT",
      html: `
        <span class="eyebrow">Course 4 · Lesson 2 of 6</span>
        <h2>The Core SELECT</h2>
        <p>Every query answers "which columns, from which table, for which rows, in what order?"</p>
        <pre style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px;overflow:auto;font-size:13px;line-height:1.5">SELECT   fc, cost, units      -- which columns
FROM     shipments            -- which table
WHERE    region = 'West'      -- which rows (filter)
ORDER BY cost DESC            -- sort
LIMIT    10;                  -- cap the rows returned</pre>

        <table>
          <tr><th>Clause</th><th>Does</th></tr>
          <tr><td><code>SELECT</code></td><td>Chooses the columns.</td></tr>
          <tr><td><code>FROM</code></td><td>Names the table.</td></tr>
          <tr><td><code>WHERE</code></td><td>Filters rows by a condition.</td></tr>
          <tr><td><code>ORDER BY</code></td><td>Sorts (ASC/DESC).</td></tr>
          <tr><td><code>LIMIT</code></td><td>Returns only the first N rows.</td></tr>
        </table>

        <div class="callout">
          <strong>Read queries before writing them:</strong> most of the job is understanding and tweaking
          existing queries. Learn to read a SELECT top-to-bottom and you can adapt it to your question.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Aggregation: GROUP BY",
      html: `
        <span class="eyebrow">Course 4 · Lesson 3 of 6</span>
        <h2>Aggregation: GROUP BY</h2>
        <p>The analyst's bread and butter: rolling millions of rows up into a summary. Aggregate functions
        (<code>SUM</code>, <code>COUNT</code>, <code>AVG</code>, <code>MIN</code>, <code>MAX</code>)
        collapse rows; <code>GROUP BY</code> does it per category.</p>
        <pre style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px;overflow:auto;font-size:13px;line-height:1.5">SELECT   fc,
         SUM(cost)              AS total_cost,
         SUM(units)             AS total_units,
         SUM(cost)/SUM(units)   AS cost_per_unit
FROM     shipments
GROUP BY fc                     -- one row per FC
HAVING   SUM(units) > 100000;   -- filter the groups</pre>

        <p>This returns cost per unit <em>by fulfillment center</em> — exactly the OF-4 analysis, computed
        across the whole dataset in one query. <code>WHERE</code> filters rows <em>before</em> grouping;
        <code>HAVING</code> filters the groups <em>after</em>.</p>

        <div class="callout">
          <strong>GROUP BY is where cost analysis lives:</strong> cost per unit by node, volume by day,
          defects by process — nearly every operational metric is a GROUP BY. This one clause does most of
          your analytical work.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Joins",
      html: `
        <span class="eyebrow">Course 4 · Lesson 4 of 6</span>
        <h2>Joins</h2>
        <p>Data is split across tables to avoid duplication — a big <span class="kt">fact</span> table of
        events (shipments) and smaller <span class="kt">dimension</span> tables of attributes (a facility
        list, a region map). A <span class="kt">JOIN</span> stitches them back together on a shared
        <strong>key</strong>.</p>
        <pre style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px;overflow:auto;font-size:13px;line-height:1.5">SELECT   f.region, SUM(s.cost) AS cost
FROM     shipments s
JOIN     facilities f  ON s.fc_id = f.fc_id   -- match on the key
GROUP BY f.region;</pre>

        <table>
          <tr><th>Join</th><th>Keeps</th></tr>
          <tr><td><code>INNER JOIN</code></td><td>Only rows that match in both tables.</td></tr>
          <tr><td><code>LEFT JOIN</code></td><td>All rows from the left table; NULLs where no match on the right.</td></tr>
        </table>

        <div class="callout">
          <strong>LEFT JOIN is a data-quality tool:</strong> a LEFT JOIN that produces unexpected NULLs
          tells you rows on the left have no match on the right — often the first sign of missing or dirty
          data (the "identify incomplete data" qualification in action).
        </div>
      `,
    },
    {
      id: "l5",
      title: "Window Functions",
      html: `
        <span class="eyebrow">Course 4 · Lesson 5 of 6</span>
        <h2>Window Functions</h2>
        <p><span class="kt">Window functions</span> compute across a set of rows <em>without</em>
        collapsing them — so you keep the detail rows and add a calculation alongside. They use
        <code>OVER (...)</code>, often with <code>PARTITION BY</code>.</p>
        <pre style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:12px;overflow:auto;font-size:13px;line-height:1.5">SELECT   fc, day, cost,
         SUM(cost)  OVER (PARTITION BY fc ORDER BY day) AS running_cost,
         RANK()     OVER (PARTITION BY fc ORDER BY cost DESC) AS cost_rank
FROM     daily_costs;</pre>

        <p>This adds a running total and a rank <em>per FC</em> while keeping every daily row. Common
        window functions: running totals (<code>SUM OVER</code>), <code>RANK</code>/<code>ROW_NUMBER</code>,
        and period-over-period with <code>LAG</code>/<code>LEAD</code> (last week vs. this week, right in
        SQL).</p>

        <div class="callout">
          <strong>Why they matter:</strong> WoW and YoY comparisons, running totals, and "top-N per group"
          are everyday analyst needs. Window functions do them in one query — the step up from basic
          aggregation that marks a capable SQL user.
        </div>
      `,
    },
    {
      id: "l6",
      title: "ETL & Data Quality",
      html: `
        <span class="eyebrow">Course 4 · Lesson 6 of 6</span>
        <h2>ETL &amp; Data Quality</h2>
        <p>Before you query, data has to get into the warehouse. <span class="kt">ETL</span> —
        Extract, Transform, Load — pulls data from source systems, cleans/reshapes it, and loads it into a
        <span class="kt">data warehouse</span> (or the tools the posting names: Essbase, Cognos, Oracle,
        SAP). Analysts mostly consume the output, but must understand the pipeline to trust it.</p>

        <h3>The data-quality mandate</h3>
        <p>A preferred qualification is literally "identifying incomplete or inaccurate data, identifying
        the root cause and creating an escalation plan." The workflow:</p>
        <ol>
          <li><strong>Detect</strong> — reconcile totals, check for NULLs/gaps/duplicates, sanity-check against known figures.</li>
          <li><strong>Root-cause</strong> — trace back through the pipeline to where it broke (source, transform, load).</li>
          <li><strong>Escalate</strong> — flag it, own the fix or hand it to the right team with a clear plan.</li>
        </ol>

        <div class="callout">
          <strong>Trust nothing you can't reconcile:</strong> the most damaging analyst error is a
          confident answer built on bad data. Always tie your query's totals back to a known source (the
          P&amp;L, a trusted report) before you act on them. Garbage in, garbage out — and it's your name
          on the output.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Why", front: "Why is SQL essential for this analyst role?", back: "The data is massive and lives in databases; SQL lets you self-serve answers at any scale and Dive Deep to the granular data." },
    { id: "f2",  tag: "Why", front: "Do analysts mostly read or write/engineer data?", back: "Mostly read — SELECT queries. Mastering SELECT, GROUP BY, and JOINs answers most operational questions independently." },
    { id: "f3",  tag: "SELECT", front: "What do the five core SELECT clauses do?", back: "SELECT (columns), FROM (table), WHERE (filter rows), ORDER BY (sort), LIMIT (cap rows)." },
    { id: "f4",  tag: "SELECT", front: "What does WHERE do?", back: "Filters which rows are returned, by a condition (e.g. region = 'West')." },
    { id: "f5",  tag: "Aggregate", front: "Name the main aggregate functions.", back: "SUM, COUNT, AVG, MIN, MAX — they collapse many rows into one value." },
    { id: "f6",  tag: "Aggregate", front: "What does GROUP BY do?", back: "Applies aggregate functions per category — e.g. cost per unit BY fulfillment center — one output row per group." },
    { id: "f7",  tag: "Aggregate", front: "WHERE vs. HAVING?", back: "WHERE filters rows before grouping; HAVING filters the groups after aggregation." },
    { id: "f8",  tag: "Aggregate", front: "Why is GROUP BY the heart of cost analysis?", back: "Cost per unit by node, volume by day, defects by process — nearly every operational metric is a GROUP BY." },
    { id: "f9",  tag: "Joins", front: "What is a JOIN, and what does it match on?", back: "It combines rows from two tables on a shared key (e.g. fc_id), stitching facts to their attributes." },
    { id: "f10", tag: "Joins", front: "INNER JOIN vs. LEFT JOIN?", back: "INNER keeps only matching rows in both; LEFT keeps all left-table rows, with NULLs where no right match." },
    { id: "f11", tag: "Joins", front: "How is a LEFT JOIN a data-quality tool?", back: "Unexpected NULLs from a LEFT JOIN reveal left rows with no match — a sign of missing or dirty data." },
    { id: "f12", tag: "Window", front: "What is a window function?", back: "A calculation across a set of rows via OVER(...) that does NOT collapse them — you keep detail and add a computed column." },
    { id: "f13", tag: "Window", front: "What does PARTITION BY do in a window function?", back: "Restarts the window calculation per group (e.g. a running total or rank per FC)." },
    { id: "f14", tag: "Window", front: "Which window functions help WoW/YoY and top-N?", back: "LAG/LEAD (prior/next period), RANK/ROW_NUMBER (top-N per group), and SUM OVER (running totals)." },
    { id: "f15", tag: "ETL", front: "What is ETL?", back: "Extract, Transform, Load — pulling data from sources, cleaning/reshaping it, and loading it into a data warehouse." },
    { id: "f16", tag: "Quality", front: "The data-quality workflow (per the posting)?", back: "Detect (reconcile, check NULLs/dupes), root-cause (trace the pipeline), escalate (flag with a fix/plan). Always reconcile to a known source." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "For an analyst, SQL is mainly used to…",
      options: ["Build the database", "Read/query data to answer questions yourself", "Design web pages", "Replace Excel entirely"],
      answer: 1,
      explain: "Analysts mostly SELECT (read) data — self-serving answers at scale rather than waiting on a pull.",
    },
    {
      id: "q2",
      prompt: "Which clause filters rows before any grouping?",
      options: ["HAVING", "WHERE", "ORDER BY", "LIMIT"],
      answer: 1,
      explain: "WHERE filters individual rows before aggregation; HAVING filters groups afterward.",
    },
    {
      id: "q3",
      prompt: "To compute cost per unit for each fulfillment center, you'd use…",
      options: ["ORDER BY fc", "GROUP BY fc with SUM(cost)/SUM(units)", "LIMIT 1", "A LEFT JOIN only"],
      answer: 1,
      explain: "GROUP BY fc with aggregate functions returns one summarized row per FC.",
    },
    {
      id: "q4",
      prompt: "A LEFT JOIN keeps…",
      options: [
        "Only rows matching in both tables",
        "All rows from the left table, NULLs where no right match",
        "All rows from the right table only",
        "No rows",
      ],
      answer: 1,
      explain: "LEFT JOIN preserves every left-table row; unmatched right columns come back NULL — useful for spotting missing data.",
    },
    {
      id: "q5",
      prompt: "A window function differs from GROUP BY in that it…",
      options: ["Deletes rows", "Computes across rows without collapsing them", "Only works on one table", "Can't rank"],
      answer: 1,
      explain: "Window functions (OVER/PARTITION BY) add a calculation alongside the detail rows instead of aggregating them away.",
    },
    {
      id: "q6",
      prompt: "ETL stands for…",
      options: ["Extract, Transform, Load", "Enter, Test, Launch", "Estimate, Track, Log", "Export, Total, List"],
      answer: 0,
      explain: "Extract from sources, Transform (clean/reshape), Load into the warehouse.",
    },
    {
      id: "q7",
      prompt: "The data-quality workflow the role expects is…",
      options: [
        "Ignore bad data",
        "Detect → root-cause → escalate (with a plan)",
        "Delete the table",
        "Round until it looks right",
      ],
      answer: 1,
      explain: "Detect incomplete/inaccurate data, trace the root cause through the pipeline, and escalate with an escalation plan.",
    },
    {
      id: "q8",
      prompt: "Before acting on a query's totals, you should always…",
      options: ["Assume they're right", "Reconcile them to a known source (e.g. the P&L)", "Delete outliers", "Add 10% buffer"],
      answer: 1,
      explain: "A confident answer on bad data is the most damaging error — tie totals back to a trusted source first.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Compute what a GROUP BY query returns. Given each FC's cost and units, find cost per unit by FC and for the network.",
      rows: [
        { label: "FC1 total cost ($)", value: 3000000, given: true },
        { label: "FC1 units", value: 1000000, given: true },
        { label: "FC2 total cost ($)", value: 4500000, given: true },
        { label: "FC2 units", value: 1000000, given: true },
        { label: "FC1 cost per unit ($)", key: "cpu1", answer: 3.00, hint: "FC1 cost ÷ FC1 units" },
        { label: "FC2 cost per unit ($)", key: "cpu2", answer: 4.50, hint: "FC2 cost ÷ FC2 units" },
        { label: "Network cost per unit ($)", key: "net", answer: 3.75, hint: "(FC1 cost + FC2 cost) ÷ (FC1 units + FC2 units)" },
      ],
      prefix: "",
      explain: "This is `SELECT fc, SUM(cost)/SUM(units) ... GROUP BY fc`: FC1 \$3.00, FC2 \$4.50, network \$3.75 — note the network CPU isn't the simple average of the two.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Compute what an aggregate query returns across three regions' concession costs (SUM, AVG, MAX).",
      rows: [
        { label: "Region A concessions ($)", value: 30000, given: true },
        { label: "Region B concessions ($)", value: 40000, given: true },
        { label: "Region C concessions ($)", value: 50000, given: true },
        { label: "SUM(concessions) ($)", key: "sum", answer: 120000, hint: "A + B + C" },
        { label: "AVG(concessions) ($)", key: "avg", answer: 40000, hint: "SUM ÷ 3 (or use AVERAGE)" },
        { label: "MAX(concessions) ($)", key: "max", answer: 50000, hint: "the largest of the three (use MAX)" },
      ],
      prefix: "",
      explain: "SUM \$120,000, AVG \$40,000, MAX \$50,000 — the same aggregate functions SQL runs across the rows, here on the grid.",
    },
  ],
});
