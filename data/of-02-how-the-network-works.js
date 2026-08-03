/* ===========================================================================
   Course 3 · Module OF-2 — How the Fulfillment & Transportation Network Works
   =========================================================================== */
Ledger.register({
  id: "of-02",
  title: "How the Fulfillment & Transportation Network Works",
  subtitle:
    "The physical network end to end — how a package flows from supplier to customer, and where the cost and time are created along the way.",
  est: "~65 min",
  objectives: [
    "Trace a package's journey through the network's nodes.",
    "Describe what happens inside a fulfillment center.",
    "Explain middle-mile linehaul and sortation.",
    "Explain last-mile delivery and why density matters.",
    "Reason about capacity, throughput, and utilization.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "The Journey of a Package",
      html: `
        <span class="eyebrow">Course 3 · Lesson 1 of 6</span>
        <h2>The Journey of a Package</h2>
        <p>To translate operations into finance, you first have to see the physical flow. A package moves
        through a sequence of <span class="kt">nodes</span>, and cost and time are created at every hop:</p>

        <table>
          <tr><th>Node</th><th>What happens</th></tr>
          <tr><td>Supplier / vendor</td><td>Inventory is produced and shipped inbound.</td></tr>
          <tr><td><strong>Fulfillment center (FC)</strong></td><td>Receive, store, pick, pack, ship the order.</td></tr>
          <tr><td><strong>Sort center</strong></td><td>Packages are sorted by destination for efficient transport.</td></tr>
          <tr><td><strong>Delivery station</strong></td><td>Final staging; packages loaded to delivery routes.</td></tr>
          <tr><td>Customer</td><td>Last-mile delivery to the door.</td></tr>
        </table>

        <p>The legs between nodes are <span class="kt">transportation</span>: <strong>inbound</strong>
        (supplier → FC), <strong>middle mile</strong> (FC → sort → delivery station), and
        <strong>last mile</strong> (delivery station → customer).</p>

        <div class="callout">
          <strong>Why the map matters:</strong> every cost you'll analyze lives at a node (labor,
          facility) or on a leg (transportation). Knowing where a package is tells you which cost you're
          looking at — and where an inefficiency can hide.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Inside a Fulfillment Center",
      html: `
        <span class="eyebrow">Course 3 · Lesson 2 of 6</span>
        <h2>Inside a Fulfillment Center</h2>
        <p>The <span class="kt">fulfillment center (FC)</span> is where inventory is stored and orders are
        assembled. Its core processes, in order:</p>
        <ol>
          <li><strong>Receive / inbound</strong> — unload inbound trucks, check in inventory.</li>
          <li><strong>Stow</strong> — put inventory away into storage locations.</li>
          <li><strong>Pick</strong> — retrieve the items for a customer order.</li>
          <li><strong>Pack</strong> — box the order, add labels.</li>
          <li><strong>Ship</strong> — stage and load outbound for transport.</li>
        </ol>

        <p>Each process has a measurable <strong>rate</strong> (e.g. units picked per hour) and a
        <strong>labor cost</strong>. Because the FC is labor-intensive, small productivity changes here
        move cost meaningfully — this is where much of "cost per unit" is made.</p>

        <div class="callout">
          <strong>Finance lens:</strong> FC cost is mostly variable labor plus fixed facility cost.
          Higher throughput spreads the fixed cost over more units (operating leverage) and, if
          productivity holds, lowers cost per unit. That's the core FC economics you'll model.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Middle Mile & Sortation",
      html: `
        <span class="eyebrow">Course 3 · Lesson 3 of 6</span>
        <h2>Middle Mile &amp; Sortation</h2>
        <p>Between the FC and the customer's neighborhood sits the <span class="kt">middle mile</span> —
        the long-haul movement of packages between facilities, plus the sortation that makes it
        efficient.</p>

        <ul>
          <li><span class="kt">Linehaul</span> — trucking packages in bulk between nodes (FC → sort
          center → delivery station). Cost is driven by miles, trailers, and how full each trailer is.</li>
          <li><span class="kt">Sortation</span> — at a sort center, packages are grouped by destination
          so each onward truck carries packages heading the same way.</li>
          <li><span class="kt">Cross-dock</span> — transferring packages straight from inbound to
          outbound without storing them.</li>
          <li><span class="kt">Injection</span> — handing packages off into the next network or leg.</li>
        </ul>

        <div class="callout">
          <strong>The trailer-fill lever:</strong> a half-empty trailer costs almost the same to run as a
          full one, so <span class="kt">trailer utilization</span> (how full the trailer is) directly
          drives transportation cost per unit. Under-filled trailers are a classic savings opportunity.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Last Mile & Delivery",
      html: `
        <span class="eyebrow">Course 3 · Lesson 4 of 6</span>
        <h2>Last Mile &amp; Delivery</h2>
        <p>The <span class="kt">last mile</span> — from the delivery station to the customer's door — is
        typically the <strong>most expensive leg</strong> of the whole journey, because it can't be
        bulk-shipped: each stop is individual.</p>

        <h3>What drives last-mile cost</h3>
        <ul>
          <li><span class="kt">Density</span> — stops close together mean more deliveries per route-hour
          and lower cost per package. Sparse, rural routes cost far more per package.</li>
          <li><strong>Stops per route</strong> and <strong>packages per stop</strong> — more drops per
          mile driven spreads the route cost.</li>
          <li>Failed deliveries and redelivery — pure waste that inflates cost.</li>
        </ul>

        <p>Delivery is often executed by <strong>delivery service partners</strong> or carriers, paid per
        route or per package — so the finance question is usually cost per package at a given density.</p>

        <div class="callout">
          <strong>Why density is king:</strong> last-mile economics live or die on route density. A lot of
          network design — where to place delivery stations, how to route — exists to raise density and
          pull down the most expensive leg.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Capacity, Throughput & Flow",
      html: `
        <span class="eyebrow">Course 3 · Lesson 5 of 6</span>
        <h2>Capacity, Throughput &amp; Flow</h2>
        <p>The network is a system of connected processes, each with a limit. Three terms govern how work
        moves through it:</p>
        <table>
          <tr><td><span class="kt">Capacity</span></td><td>The maximum a node can process in a period.</td></tr>
          <tr><td><span class="kt">Throughput</span></td><td>The actual volume flowing through.</td></tr>
          <tr><td><span class="kt">Utilization</span></td><td>Throughput ÷ Capacity — how hard the node is working.</td></tr>
        </table>

        <p>A <span class="kt">bottleneck</span> is the tightest node — the one that caps the whole
        network's flow, no matter how much capacity sits elsewhere. Finding and relieving bottlenecks is
        where much operational improvement (and savings) comes from.</p>

        <div class="callout">
          <strong>Utilization is a double-edged sword:</strong> low utilization wastes fixed cost (you're
          paying for capacity you don't use); very high utilization risks fragility and overtime. Analysts
          watch it constantly — especially into <span class="kt">peak</span> (the holiday surge), when
          volume spikes and capacity is stretched.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Speed & the Customer Promise",
      html: `
        <span class="eyebrow">Course 3 · Lesson 6 of 6</span>
        <h2>Speed &amp; the Customer Promise</h2>
        <p>The network isn't optimized for cost alone — it's optimized for a <strong>speed promise</strong>
        to the customer at an acceptable cost. Time terms you'll live with:</p>
        <ul>
          <li><span class="kt">CPT (Critical Pull Time)</span> — the cutoff by which a package must leave
          a node to stay on schedule for its delivery promise. Miss CPT and the promise is at risk.</li>
          <li><span class="kt">Click-to-deliver</span> — total time from order to doorstep.</li>
          <li><span class="kt">Cycle time</span> and <span class="kt">dwell time</span> — how long work
          takes, and how long it sits idle between steps.</li>
        </ul>

        <p>Speed and cost trade off: faster promises need more capacity, fuller schedules, and sometimes
        less-full trucks — all of which cost more. Much of operations finance is quantifying that
        trade-off: <em>what does another hour of speed cost, and is it worth it to the customer?</em></p>

        <div class="callout">
          <strong>Hold both scorecards (again):</strong> a change that cuts cost but misses CPT hurts the
          customer promise. The best recommendations improve cost <em>and</em> speed — or make the
          trade-off explicit and defensible.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Flow", front: "Name the main nodes a package flows through.", back: "Supplier → Fulfillment center (FC) → Sort center → Delivery station → Customer." },
    { id: "f2",  tag: "Flow", front: "Inbound vs. middle mile vs. last mile?", back: "Inbound: supplier→FC. Middle mile: FC→sort→delivery station. Last mile: delivery station→customer's door." },
    { id: "f3",  tag: "FC", front: "The five core FC processes in order?", back: "Receive (inbound) → Stow → Pick → Pack → Ship." },
    { id: "f4",  tag: "FC", front: "What is the core FC cost economics?", back: "Mostly variable labor + fixed facility cost; higher throughput spreads fixed cost, lowering cost per unit (operating leverage)." },
    { id: "f5",  tag: "Middle mile", front: "What is linehaul?", back: "Bulk trucking of packages between facilities (FC↔sort↔delivery station). Cost driven by miles, trailers, and trailer fill." },
    { id: "f6",  tag: "Middle mile", front: "What is a cross-dock?", back: "Transferring packages straight from inbound to outbound without storing them." },
    { id: "f7",  tag: "Middle mile", front: "Why does trailer utilization matter to cost?", back: "A half-empty trailer costs nearly the same to run as a full one, so low fill inflates transportation cost per unit — a classic savings lever." },
    { id: "f8",  tag: "Last mile", front: "Why is the last mile the most expensive leg?", back: "It can't be bulk-shipped — each stop is individual. Cost hinges on route density (stops close together)." },
    { id: "f9",  tag: "Last mile", front: "What is delivery 'density' and why does it matter?", back: "How close together stops are; higher density = more deliveries per route-hour = lower cost per package." },
    { id: "f10", tag: "Capacity", front: "Capacity vs. throughput vs. utilization?", back: "Capacity = max processable; throughput = actual volume flowing; utilization = throughput ÷ capacity." },
    { id: "f11", tag: "Capacity", front: "What is a bottleneck?", back: "The tightest node that caps the whole network's flow, regardless of spare capacity elsewhere. Relieving it unlocks throughput." },
    { id: "f12", tag: "Capacity", front: "Why is very low OR very high utilization a concern?", back: "Low wastes fixed cost (paying for unused capacity); very high risks fragility and overtime. Analysts watch it, especially into peak." },
    { id: "f13", tag: "Speed", front: "What is CPT (Critical Pull Time)?", back: "The cutoff by which a package must leave a node to stay on schedule for its delivery promise." },
    { id: "f14", tag: "Speed", front: "What is click-to-deliver?", back: "Total elapsed time from the customer's order to the package arriving at the door." },
    { id: "f15", tag: "Speed", front: "How do speed and cost trade off?", back: "Faster promises need more capacity, fuller schedules, and sometimes less-full trucks — all more costly. Analysts quantify the trade-off." },
    { id: "f16", tag: "Both", front: "Why hold both cost and customer scorecards on a network change?", back: "A change that cuts cost but misses CPT hurts the promise; the best moves improve both or make the trade-off explicit." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "Which sequence correctly orders the nodes a package flows through?",
      options: [
        "Delivery station → FC → Sort center → Customer",
        "FC → Sort center → Delivery station → Customer",
        "Customer → FC → Supplier",
        "Sort center → FC → Delivery station",
      ],
      answer: 1,
      explain: "After the FC, packages are sorted, staged at a delivery station, then delivered last-mile to the customer.",
    },
    {
      id: "q2",
      prompt: "The five core FC processes are…",
      options: [
        "Receive, Stow, Pick, Pack, Ship",
        "Buy, Sell, Store, Bill, Collect",
        "Load, Drive, Sort, Deliver, Return",
        "Plan, Do, Check, Act, Review",
      ],
      answer: 0,
      explain: "Receive → Stow → Pick → Pack → Ship is the standard FC flow.",
    },
    {
      id: "q3",
      prompt: "The last mile is typically the most expensive leg because…",
      options: ["It's the longest distance", "It can't be bulk-shipped — each stop is individual", "It uses the most fuel per package always", "Trucks are newest there"],
      answer: 1,
      explain: "Bulk transport isn't possible at the door; cost depends heavily on route density (stops close together).",
    },
    {
      id: "q4",
      scenario: "A node processed 900,000 units against a capacity of 1,000,000.",
      prompt: "What is its utilization?",
      options: ["111%", "90%", "10%", "100,000%"],
      answer: 1,
      explain: "Utilization = throughput ÷ capacity = 900,000 ÷ 1,000,000 = 90%.",
    },
    {
      id: "q5",
      prompt: "A bottleneck is…",
      options: ["The largest facility", "The tightest node that caps the whole network's flow", "A type of trailer", "The last mile"],
      answer: 1,
      explain: "The bottleneck is the constraining node; spare capacity elsewhere can't raise flow beyond it.",
    },
    {
      id: "q6",
      prompt: "Trailer utilization matters to cost because…",
      options: [
        "Full trailers are illegal",
        "A half-empty trailer costs nearly as much to run as a full one, inflating cost per unit",
        "Empty trailers are faster",
        "It has no cost effect",
      ],
      answer: 1,
      explain: "The trailer's run cost is roughly fixed, so fewer units aboard means higher transportation cost per unit.",
    },
    {
      id: "q7",
      prompt: "CPT (Critical Pull Time) is…",
      options: [
        "The cost per trailer",
        "The cutoff time a package must leave a node to stay on its delivery promise",
        "Customer purchase time",
        "The pick rate",
      ],
      answer: 1,
      explain: "Miss CPT at a node and the downstream schedule — and the customer promise — is at risk.",
    },
    {
      id: "q8",
      prompt: "Higher throughput at an FC tends to lower cost per unit because…",
      options: [
        "Labor becomes free",
        "Fixed facility cost is spread over more units (operating leverage)",
        "Packages get smaller",
        "Capacity shrinks",
      ],
      answer: 1,
      explain: "Fixed cost per unit falls as volume rises (if productivity holds) — the operating-leverage effect.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Capacity utilization. Compute the node's utilization and its remaining headroom.",
      rows: [
        { label: "Units processed (throughput)", value: 900000, given: true },
        { label: "Daily capacity (units)", value: 1000000, given: true },
        { label: "Utilization (%)", key: "util", answer: 90, hint: "throughput ÷ capacity × 100" },
        { label: "Headroom (units)", key: "head", answer: 100000, hint: "capacity − throughput" },
      ],
      prefix: "",
      explain: "Utilization = 900,000 ÷ 1,000,000 = 90%; headroom = 100,000 units before the node is maxed out.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Staffing from throughput. Given the volume, the process rate (UPH), and shift length, compute the labor hours and associates needed.",
      rows: [
        { label: "Volume to process (units)", value: 100000, given: true },
        { label: "Rate (units per hour, UPH)", value: 100, given: true },
        { label: "Shift length (hours)", value: 10, given: true },
        { label: "Labor hours required", key: "lh", answer: 1000, hint: "volume ÷ rate" },
        { label: "Associates needed", key: "assoc", answer: 100, hint: "labor hours ÷ shift length" },
      ],
      prefix: "",
      explain: "Labor hours = 100,000 ÷ 100 = 1,000; associates = 1,000 ÷ 10 = 100. This is how volume converts to a staffing (and labor cost) plan.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Cost per package across the network. Sum the node/leg costs and find each leg's share.",
      rows: [
        { label: "Fulfillment cost per package ($)", value: 3.00, given: true },
        { label: "Middle-mile (linehaul) cost per package ($)", value: 1.00, given: true },
        { label: "Last-mile cost per package ($)", value: 4.00, given: true },
        { label: "Total cost per package ($)", key: "tot", answer: 8.00, hint: "sum of the three" },
        { label: "Last-mile as % of total", key: "lm", answer: 50, hint: "last mile ÷ total × 100" },
        { label: "Fulfillment as % of total", key: "fc", answer: 37.5, hint: "fulfillment ÷ total × 100" },
      ],
      prefix: "",
      explain: "Total = \$8.00/package; last mile is 50% of it (\$4.00) — which is why last-mile density is such a focus. FC is 37.5%.",
    },
  ],
});
