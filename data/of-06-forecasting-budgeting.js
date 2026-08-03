/* ===========================================================================
   Course 3 · Module OF-6 — Forecasting, Budgeting & the Annual Plan
   =========================================================================== */
Ledger.register({
  id: "of-06",
  title: "Forecasting, Budgeting & the Annual Plan",
  subtitle:
    "Turning a volume forecast into a driver-based cost budget, planning capacity for peak, and reforecasting as actuals land.",
  est: "~70 min",
  objectives: [
    "Distinguish forecast, budget, and the annual plan.",
    "Build a cost budget from drivers, not top-line growth.",
    "Forecast volume with growth and seasonality.",
    "Plan capacity and headcount to the forecast.",
    "Reforecast to a full-year landing and compare to plan.",
  ],

  /* ---------------------------------------------------------------- LESSONS */
  lessons: [
    {
      id: "l1",
      title: "Forecast vs. Budget vs. Plan",
      html: `
        <span class="eyebrow">Course 3 · Lesson 1 of 6</span>
        <h2>Forecast vs. Budget vs. Plan</h2>
        <p>Three words that get used loosely — keep them straight:</p>
        <table>
          <tr><th>Term</th><th>Means</th></tr>
          <tr><td><span class="kt">Forecast</span></td><td>Your best current estimate of what <em>will</em> happen.</td></tr>
          <tr><td><span class="kt">Budget / plan</span></td><td>The financial target the org commits to — what <em>should</em> happen.</td></tr>
          <tr><td><span class="kt">Actual</span></td><td>What did happen.</td></tr>
        </table>

        <p>The <span class="kt">annual plan</span> (in Amazon's world, the fall <strong>OP1</strong> and
        the winter <strong>OP2</strong> update) sets the budget for the year. A <span class="kt">rolling
        forecast</span> then updates the best estimate every period as reality unfolds — so you always have
        a fresh view of where you'll land versus the fixed plan.</p>

        <div class="callout">
          <strong>Why both exist:</strong> the budget is the commitment you're held to; the forecast is
          the honest latest estimate. When they diverge, that gap is the story — and the analyst's job is
          to explain it and propose the response.
        </div>
      `,
    },
    {
      id: "l2",
      title: "Driver-Based Forecasting",
      html: `
        <span class="eyebrow">Course 3 · Lesson 2 of 6</span>
        <h2>Driver-Based Forecasting</h2>
        <p>A weak budget grows last year's cost by a percentage. A strong one is
        <span class="kt">driver-based</span>: forecast the operational drivers, then let cost fall out of
        them.</p>
        <div class="equation">Cost = Volume × Rate × Price</div>

        <p>For example, labor cost isn't "last year + 5%"; it's:</p>
        <div class="equation">Labor Cost = (Volume ÷ UPH) × Wage</div>
        <p>Forecast the volume, assume a productivity (UPH) and a wage, and the labor budget is built from
        real operational logic — the same driver tree you learned in OF-4.</p>

        <div class="callout">
          <strong>Why driver-based wins:</strong> it's defensible ("here's the volume and productivity
          behind it"), it flexes automatically when volume changes, and it tells you <em>why</em> the
          budget is what it is — not just how big. This is exactly the FM-4 forecasting discipline applied
          to operations.
        </div>
      `,
    },
    {
      id: "l3",
      title: "Forecasting Volume",
      html: `
        <span class="eyebrow">Course 3 · Lesson 3 of 6</span>
        <h2>Forecasting Volume</h2>
        <p>Volume is the master driver — get it wrong and everything downstream is wrong. Build it from
        three pieces:</p>
        <div class="equation">Forecast Volume = Base × (1 + Growth) × Seasonality</div>

        <ul>
          <li><strong>Base</strong> — the prior-year level.</li>
          <li><strong>Growth</strong> — expected year-over-year change.</li>
          <li><strong>Seasonality</strong> — the within-year pattern; a seasonality index above 1.0 lifts
          a period, below 1.0 dampens it.</li>
        </ul>

        <p>Take 1,200,000 units growing 10% → 1,320,000 for the year, or 330,000 per quarter on average.
        Apply a 1.4 peak index to Q4 and it forecasts 462,000 — the <span class="kt">peak</span> surge
        that stresses the network most.</p>

        <div class="callout">
          <strong>Peak is where plans break:</strong> the holiday surge concentrates volume, so capacity
          and cost planning live or die on the peak forecast. A blended annual number hides the quarter
          that actually matters most.
        </div>
      `,
    },
    {
      id: "l4",
      title: "Building the Cost Budget",
      html: `
        <span class="eyebrow">Course 3 · Lesson 4 of 6</span>
        <h2>Building the Cost Budget</h2>
        <p>With volume set, build each cost line from its driver and sum to a total budget and a budgeted
        cost per unit:</p>
        <table>
          <tr><td>Labor (\$0.25/unit × 1,320,000)</td><td>330,000</td></tr>
          <tr><td>Transportation (\$3.00/unit × 1,320,000)</td><td>3,960,000</td></tr>
          <tr><td>Fixed cost (capacity plan)</td><td>2,640,000</td></tr>
          <tr><td><strong>Total budget</strong></td><td><strong>6,930,000</strong></td></tr>
          <tr><td><strong>Budgeted cost per unit</strong></td><td><strong>5.25</strong></td></tr>
        </table>

        <p>Variable lines scale with volume; the fixed line comes from the capacity plan (next lesson).
        Divide the total by volume for the budgeted CPU — the number you'll be held to all year.</p>

        <div class="callout">
          <strong>The budget is a model:</strong> it's the FM-3 three-statement discipline in operational
          clothing — drivers → line items → totals. Change a driver and the whole budget re-flows.
        </div>
      `,
    },
    {
      id: "l5",
      title: "Capacity Planning & Peak",
      html: `
        <span class="eyebrow">Course 3 · Lesson 5 of 6</span>
        <h2>Capacity Planning &amp; Peak</h2>
        <p><span class="kt">Capacity planning</span> matches the network's ability to process against the
        forecast volume — and it's where the fixed-cost decisions get made.</p>

        <h3>Headcount from volume</h3>
        <p>The staffing plan is just volume ÷ productivity ÷ hours, from OF-2: 1,320,000 units at 100 UPH
        over the year converts to a labor-hour plan and a headcount plan. Peak needs a surge of temporary
        labor on top.</p>

        <h3>The provisioning trade-off</h3>
        <ul>
          <li><strong>Under-provision</strong> and you miss CPT, pay overtime, and hurt the customer.</li>
          <li><strong>Over-provision</strong> and you pay for idle capacity — wasted fixed cost.</li>
        </ul>

        <div class="callout">
          <strong>Peak is the crux:</strong> build too much peak capacity and it sits idle 11 months;
          build too little and the promise breaks when volume is highest. Sizing peak — and its cost — is
          one of the most consequential calls in operations finance.
        </div>
      `,
    },
    {
      id: "l6",
      title: "Reforecasting & the Landing",
      html: `
        <span class="eyebrow">Course 3 · Lesson 6 of 6</span>
        <h2>Reforecasting &amp; the Landing</h2>
        <p>The plan is fixed; reality isn't. As actuals come in, you <span class="kt">reforecast</span> —
        combine actuals-to-date with an updated estimate for the rest of the year to project the full-year
        <span class="kt">landing</span>:</p>
        <div class="equation">Landing = Actuals to Date + Estimate for the Rest of the Year</div>

        <p>Compare the landing to the plan: if three quarters of actuals plus a Q4 estimate land at
        \$7,140,000 against a \$7,000,000 plan, you're tracking \$140,000 (2%) over — and the review needs
        to know now, not at year-end.</p>

        <div class="callout">
          <strong>The forecast is a management tool, not a guess to defend:</strong> reforecast honestly
          and early. Surfacing a \$140,000 overage in Q3 lets the team act; hiding it until December
          means the miss is locked in. The best analysts refresh the landing every cycle and drive the
          response.
        </div>
      `,
    },
  ],

  /* ------------------------------------------------------------ FLASHCARDS */
  flashcards: [
    { id: "f1",  tag: "Terms", front: "Forecast vs. budget vs. actual?", back: "Forecast = best estimate of what will happen; budget/plan = the committed target; actual = what happened." },
    { id: "f2",  tag: "Terms", front: "What are OP1 and OP2?", back: "Amazon's annual operating-plan process — OP1 (fall) sets the plan; OP2 (winter) updates it. They set the budget for the year." },
    { id: "f3",  tag: "Terms", front: "What is a rolling forecast?", back: "A continually-updated best estimate of the future, refreshed each period as actuals land — separate from the fixed plan." },
    { id: "f4",  tag: "Driver", front: "What is driver-based budgeting?", back: "Forecasting operational drivers (volume, rate, price) and letting cost fall out — not growing last year's cost by a %." },
    { id: "f5",  tag: "Driver", front: "Driver-based labor cost formula?", back: "Labor Cost = (Volume ÷ UPH) × Wage." },
    { id: "f6",  tag: "Driver", front: "Why is a driver-based budget better?", back: "It's defensible, flexes automatically with volume, and explains WHY the budget is what it is." },
    { id: "f7",  tag: "Volume", front: "Formula to build a volume forecast?", back: "Forecast Volume = Base × (1 + Growth) × Seasonality." },
    { id: "f8",  tag: "Volume", front: "What does a seasonality index above 1.0 do?", back: "Lifts that period's volume above the average (e.g. a 1.4 Q4 peak index); below 1.0 dampens it." },
    { id: "f9",  tag: "Volume", front: "Why does peak matter so much in planning?", back: "The holiday surge concentrates volume; capacity and cost plans live or die on the peak forecast, which a blended annual number hides." },
    { id: "f10", tag: "Budget", front: "How do you get budgeted cost per unit?", back: "Build each cost line from its driver, sum to total budget, then divide by forecast volume." },
    { id: "f11", tag: "Budget", front: "Which budget lines scale with volume vs. come from the capacity plan?", back: "Variable lines (labor, transport) scale with volume; the fixed line comes from the capacity/headcount plan." },
    { id: "f12", tag: "Capacity", front: "How is a headcount plan derived from volume?", back: "Volume ÷ productivity (UPH) ÷ hours = labor hours → headcount; peak adds a temporary-labor surge." },
    { id: "f13", tag: "Capacity", front: "The provisioning trade-off?", back: "Under-provision → missed CPT, overtime, customer harm. Over-provision → paying for idle capacity (wasted fixed cost)." },
    { id: "f14", tag: "Reforecast", front: "Formula for the full-year landing?", back: "Landing = Actuals to Date + Estimate for the Rest of the Year." },
    { id: "f15", tag: "Reforecast", front: "Why reforecast early and honestly?", back: "Surfacing a miss early lets the team act; hiding it until year-end locks the miss in. The forecast is a management tool, not a guess to defend." },
    { id: "f16", tag: "Link", front: "How does the ops budget relate to the FM courses?", back: "It's the same driver→line-item→total modeling discipline (FM-3/FM-4) applied to operations — change a driver and the budget re-flows." },
  ],

  /* ------------------------------------------------------------------ QUIZ */
  quiz: [
    {
      id: "q1",
      prompt: "The budget (plan) represents…",
      options: ["What did happen", "The best estimate of what will happen", "The committed financial target", "Last year's actuals"],
      answer: 2,
      explain: "The budget/plan is the committed target; the forecast is the latest estimate; actual is what happened.",
    },
    {
      id: "q2",
      prompt: "Driver-based budgeting builds cost by…",
      options: [
        "Growing last year's cost by a fixed %",
        "Forecasting drivers (volume, rate, price) and deriving cost",
        "Copying a competitor",
        "Guessing the total",
      ],
      answer: 1,
      explain: "Cost = Volume × Rate × Price — forecast the drivers and let cost fall out; defensible and flexes with volume.",
    },
    {
      id: "q3",
      scenario: "Base volume 1,200,000; growth 10%.",
      prompt: "What is the forecast annual volume?",
      options: ["1,212,000", "1,320,000", "1,100,000", "2,400,000"],
      answer: 1,
      explain: "1,200,000 × 1.10 = 1,320,000 units.",
    },
    {
      id: "q4",
      scenario: "Quarterly average volume 330,000; Q4 seasonality index 1.4.",
      prompt: "What is the Q4 (peak) forecast volume?",
      options: ["330,000", "462,000", "236,000", "471,000"],
      answer: 1,
      explain: "330,000 × 1.4 = 462,000 — the peak surge that stresses capacity most.",
    },
    {
      id: "q5",
      scenario: "Volume 1,320,000; productivity 100 UPH; wage \$25.",
      prompt: "What is the labor budget?",
      options: ["\$330,000", "\$132,000", "\$33,000,000", "\$3,300,000"],
      answer: 0,
      explain: "Labor hours = 1,320,000 ÷ 100 = 13,200; × \$25 = \$330,000.",
    },
    {
      id: "q6",
      prompt: "Over-provisioning capacity results in…",
      options: ["Missed CPT", "Paying for idle capacity (wasted fixed cost)", "Higher productivity", "Lower fixed cost"],
      answer: 1,
      explain: "Too much capacity sits idle — wasted fixed cost. Under-provisioning risks missed CPT and overtime instead.",
    },
    {
      id: "q7",
      prompt: "The full-year landing is computed as…",
      options: [
        "Plan × growth",
        "Actuals to date + estimate for the rest of the year",
        "Last year's actual",
        "Budget ÷ 4",
      ],
      answer: 1,
      explain: "Landing combines what's already happened with an updated estimate for the remainder, then compares to plan.",
    },
    {
      id: "q8",
      prompt: "Why reforecast early rather than wait until year-end?",
      options: [
        "To create more work",
        "So the team can act on a projected miss while there's still time",
        "Because the plan changes",
        "To avoid the WBR",
      ],
      answer: 1,
      explain: "The forecast is a management tool — surfacing a miss early enables action; hiding it locks the miss in.",
    },
  ],

  /* ---------------------------------------------------------------- DRILLS */
  drills: [
    {
      id: "d1",
      type: "model",
      prompt: "Forecast volume. Grow the base, find the quarterly average, and apply the peak index to Q4.",
      rows: [
        { label: "Prior-year (base) volume (units)", value: 1200000, given: true },
        { label: "Growth (%)", value: 10, given: true },
        { label: "Q4 seasonality index", value: 1.4, given: true },
        { label: "Forecast annual volume (units)", key: "ann", answer: 1320000, hint: "base × (1 + growth% ÷ 100)" },
        { label: "Quarterly average volume (units)", key: "q", answer: 330000, hint: "annual ÷ 4" },
        { label: "Q4 peak volume (units)", key: "q4", answer: 462000, hint: "quarterly average × seasonality index" },
      ],
      prefix: "",
      explain: "1,200,000 × 1.10 = 1,320,000/yr; 330,000/quarter; Q4 peak = 330,000 × 1.4 = 462,000.",
    },
    {
      id: "d2",
      type: "model",
      prompt: "Labor budget from drivers. Convert forecast volume to labor hours, cost, and cost per unit.",
      rows: [
        { label: "Forecast volume (units)", value: 1320000, given: true },
        { label: "Productivity (UPH)", value: 100, given: true },
        { label: "Wage ($/hour)", value: 25, given: true },
        { label: "Labor hours required", key: "lh", answer: 13200, hint: "volume ÷ UPH" },
        { label: "Labor cost ($)", key: "lc", answer: 330000, hint: "labor hours × wage" },
        { label: "Labor cost per unit ($)", key: "lcpu", answer: 0.25, hint: "labor cost ÷ volume" },
      ],
      prefix: "",
      explain: "13,200 hours × \$25 = \$330,000 of labor; \$0.25/unit — built from volume and productivity, not a growth %.",
    },
    {
      id: "d3",
      type: "model",
      prompt: "Assemble the cost budget and the budgeted cost per unit.",
      rows: [
        { label: "Forecast volume (units)", value: 1320000, given: true },
        { label: "Labor per unit ($)", value: 0.25, given: true },
        { label: "Transportation per unit ($)", value: 3.00, given: true },
        { label: "Fixed cost ($)", value: 2640000, given: true },
        { label: "Labor cost ($)", key: "lc", answer: 330000, hint: "labor per unit × volume" },
        { label: "Transportation cost ($)", key: "tc", answer: 3960000, hint: "transport per unit × volume" },
        { label: "Total budget ($)", key: "tb", answer: 6930000, hint: "labor + transportation + fixed" },
        { label: "Budgeted cost per unit ($)", key: "cpu", answer: 5.25, hint: "total budget ÷ volume" },
      ],
      prefix: "",
      explain: "Labor 330k + transport 3,960k + fixed 2,640k = \$6,930,000 total; ÷ 1,320,000 = \$5.25 budgeted CPU.",
    },
    {
      id: "d4",
      type: "model",
      prompt: "Reforecast the landing. Combine three quarters of actuals with a Q4 estimate and compare to plan.",
      rows: [
        { label: "Plan (annual budget, $)", value: 7000000, given: true },
        { label: "Actuals Q1–Q3 ($)", value: 5250000, given: true },
        { label: "Q4 estimate ($)", value: 1890000, given: true },
        { label: "Full-year landing ($)", key: "land", answer: 7140000, hint: "actuals to date + Q4 estimate" },
        { label: "Variance to plan ($)", key: "var", answer: 140000, hint: "landing − plan" },
        { label: "Variance to plan (%)", key: "pct", answer: 2, hint: "variance ÷ plan × 100" },
      ],
      prefix: "",
      explain: "Landing = 5,250,000 + 1,890,000 = \$7,140,000, tracking \$140,000 (2%) over plan — flag it in Q3, not December.",
    },
  ],
});
