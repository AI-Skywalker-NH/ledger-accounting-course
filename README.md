# Ledger — The Language of Business

An interactive, **drill-first accounting course** I built to learn the fundamentals of financial
accounting cold — the foundation for financial modeling and investment-banking analysis. Inspired by
the structure of a CFI course, but with **heavier repetition**: every concept is reinforced with
spaced-repetition flashcards, auto-graded quizzes, and hands-on journal-entry and modeling drills.

> **Why I built this:** to prove I can build clean, working software *and* that I know the accounting
> that underpins every three-statement model — before I have formal work experience to point to.

**Live demo:** _(add your GitHub Pages URL here once deployed)_

---

## What it does

- **Learn** — bite-size lessons that build from the accounting equation up to how the three financial
  statements link together.
- **Flashcards** — Anki-style **spaced repetition** (an SM-2-style scheduler). Cards you find hard
  resurface sooner; cards you know get pushed further out. A "due today" counter tracks your queue.
- **Quizzes** — auto-graded multiple-choice with instant explanations and a saved best score.
- **Drills** — two kinds of hands-on reps:
  - **Journal entries** — pick the correct debit and credit accounts for a transaction.
  - **Modeling** — fill in the missing cells of a mini income statement, the accounting equation, or a
    retained-earnings roll-forward, validated against the correct figures.
- **Progress & streaks** — per-module mastery %, lesson/card/quiz/drill completion, and a daily study
  streak. All saved locally in your browser.

## Module 1 (fully built)

**The Accounting Equation & The Three Statements** — 6 lessons, 16 flashcards, 8 quiz questions, and
7 drills covering:

1. Accounting: the language of business
2. The accounting equation (`Assets = Liabilities + Equity`)
3. Assets, liabilities & equity
4. Debits & credits (the **DEALER** framework)
5. How transactions move the equation (double-entry)
6. The three statements and how they link

Modules 2–8 are outlined in the app as a roadmap.

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

1. Copy `data/module-01-accounting-equation.js` to a new file and edit the content.
2. Register it in `data/course.js` (`COURSE.modules`).
3. Add its `<script>` tag in `index.html`.

The content shape (lessons / flashcards / quiz / drills) is documented inline in the Module 1 file.

## Roadmap

- [ ] Fill in Modules 2–8 (debits & credits deep-dive → linking the three statements)
- [ ] A **second course**: financial-statement analysis & modeling for investment banking
- [ ] Deploy to GitHub Pages

---

_Built by Nicholas Hogan._
