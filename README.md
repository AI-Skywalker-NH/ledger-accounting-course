# Ledger — The Language of Business

An interactive, **drill-first learning platform** I built to master the language of business end to
end — from financial accounting through investment-banking modeling to operations-finance analysis.
Inspired by the structure of a CFI course, but with **heavier repetition**: every concept is reinforced
with spaced-repetition flashcards, auto-graded quizzes, and hands-on journal-entry and from-scratch
spreadsheet drills. It has grown into **four courses / 34 modules**.

> **Why I built this:** to prove I can build clean, working software *and* that I know the finance —
> accounting, modeling, and operations analysis — cold, before I have formal work experience to point to.

**Live demo:** https://ai-skywalker-nh.github.io/ledger-accounting-course/

---

## What it does

- **Learn** — bite-size lessons that build from the accounting equation up to how the three financial
  statements link together.
- **Flashcards** — Anki-style **spaced repetition** (an SM-2-style scheduler). Cards you find hard
  resurface sooner; cards you know get pushed further out. A "due today" counter tracks your queue.
- **Quizzes** — auto-graded multiple-choice with instant explanations and a saved best score.
- **Drills** — two kinds of hands-on reps:
  - **Journal entries** — pick the correct debit and credit accounts for a transaction.
  - **Excel builds** — a required, **from-scratch in-screen spreadsheet** with real formulas
    (`=B2-B3`, `=SUM(B2:B5)`). The drill gives you the inputs and the results to produce; you lay out
    the statement and compute it yourself. It's **keyboard-first**: clicking cells is disabled (navigate
    with arrows / Tab / Enter / F2), and a live mouse-usage counter — with an optional strict "mouse =
    fail" mode — trains you to work without the trackpad, the way modelers do.
- **Excel Shortcuts reference** — a searchable, categorized tab of Windows + Mac shortcuts.
- **Audio narration** — a "🔊 Listen" bar on every lesson (play/pause, speed, voice picker) plus read-aloud
  on flashcards, for auditory reinforcement. Uses the browser's built-in Web Speech API — no audio files.
- **Progress & streaks** — per-module mastery %, lesson/card/quiz/drill completion, and a daily study
  streak. All saved locally in your browser.

## Course 1 — Accounting Foundations (complete, Modules 1–8)

1. The Accounting Equation & The Three Statements
2. Debits, Credits & the T-Account
3. The Income Statement in Depth
4. The Balance Sheet in Depth
5. The Statement of Cash Flows
6. Linking the Three Statements
7. Accrual vs. Cash Accounting
8. Working Capital & the Cash Cycle

Each module has ~6 lessons, ~16 flashcards, 8 quiz questions, and hands-on drills.

## Course 2 — Financial Statement Analysis & Modeling (complete, FM-1–FM-10)

1. Reading & Spreading Financial Statements
2. Ratio Analysis (Liquidity, Leverage, Profitability, Efficiency, DuPont)
3. Building a Three-Statement Model
4. Forecasting Revenue & Operating Drivers
5. The Cash Flow Bridge & Circularity (free cash flow)
6. DCF Valuation
7. Comparable Company Analysis
8. LBO Modeling Basics
9. Precedent Transaction Analysis
10. Sensitivity & Scenario Analysis

Course 2's drills are **all in-screen, from-scratch spreadsheet builds** — you construct the model with
real formulas, keyboard-first. Highlights: a full three-statement model that recomputes to a zero
balance check (FM-3), a complete DCF that resolves to $10.00/share (FM-6), an LBO returns build with
MOIC and IRR (FM-8), and a two-variable WACC × terminal-growth data table (FM-10).

## Course 3 — Operations Finance: The Network & Its Numbers (complete, OF-1–OF-8)

Prep for an operations-finance / FP&A analyst role embedded in a transportation/logistics network.

1. The Role & the Mission
2. How the Fulfillment & Transportation Network Works
3. The Language of Operations
4. Cost Drivers & Unit Economics
5. Operational & Financial Metrics (WBR / MBR)
6. Forecasting, Budgeting & the Annual Plan
7. Variance Analysis & Bridges
8. Cost-Savings Methodology & Business Cases

## Course 4 — The Operator-Analyst's Craft (complete, OT-1–OT-8)

The hard skills (SQL, data, financial systems) and soft skills (writing, Leadership Principles,
storytelling, program leadership) that make the analysis land.

1. Leadership Principles in Practice
2. The Writing Culture: Narratives & White Papers
3. Business Reviews & Mechanisms
4. SQL & Data Fundamentals for Analysts
5. Data Tools & Financial Systems
6. Simplifying Complexity & Data Storytelling
7. Driving Programs from Concept to Execution
8. AI-Augmented Financial Analysis

**34 modules across four courses** — ~200 lessons, ~540 flashcards, ~270 quiz questions, and ~140
hands-on drills, from the accounting equation to LBO returns to running an operations business review.

## Tech

Deliberately **zero dependencies and no build step** — plain HTML, CSS, and vanilla JavaScript.

- Hash-based single-page router
- `localStorage` for all progress, streaks, and the spaced-repetition schedule
- Course content lives in plain-JS data files (`data/*.js`) so the app runs by simply opening
  `index.html` — no server required
- Responsive layout with automatic light/dark theming

## Run it

Just open the file — no install, no server:

```bash
open index.html      # macOS
```

## Add a module

1. Copy an existing `data/*.js` module to a new file and edit the content.
2. Register its id under the right course in `data/course.js` (`COURSES[].modules`).
3. Add its `<script>` tag in `index.html`.

The content shape (lessons / flashcards / quiz / drills) is documented inline in the Module 1 file.
Quantitative drills validate against an in-browser spreadsheet engine (`spreadsheet.js`) that supports
`+ − × ÷ ^`, parentheses, cell references, ranges, and `SUM/AVERAGE/MIN/MAX/ABS/ROUND/POWER/SQRT`.

---

_Built by Nicholas Hogan._
