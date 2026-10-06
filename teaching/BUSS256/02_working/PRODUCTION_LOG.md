# PRODUCTION LOG — BUSS256 redeploy · "what shipped / what's pending"

*Change log: Jun 18, 2026 — created (Phase F final sweep). The single reference for what was produced this run,
which verification gates each passed, and what remains deferred or held. Closes the production phase except the
deferred deck round and the items awaiting professor input.*

---

## 1. What shipped this run → `03_final/production/`
**12 student-facing `.docx`** (built via the validated B&W pipeline; instructor metadata stripped):

| Type | Files |
|---|---|
| Module notes (6; sessions as chapters) | M-1_notes_text_mining · M-2_notes_regression · M-3_notes_association_rules · M-4_notes_clustering · M-5_notes_visualization · M-6_notes_foundations |
| Labs (5; student-facing, R-bearing) | M-1_compare_verify_lab · M-2_regression_lab · M-3_assocrules_lab · M-4_clustering_lab · M-5_visualization_lab |
| Setup guide (1; rebuilt) | M-1_ollama_setup_guide (qwen2.5-coder + llama3.2 model policy; dual-OS) |

**8 A2 per-group data slices** (`BUSS256_A2_<Category>.csv`): Books, Business, Education, Finance, Games,
Medical, Music, Productivity — md5-identical copies of the source `Paid*.csv`, **not pre-cleaned** (cleaning is
intended student work). N=8 default; N=7 drops Games.

**Also present (from the earlier A2 production trial, not part of this run's 12):**
`BUSS256_A2_GroupAssignment_2027.docx` (the A2 assignment brief). *Housekeeping: a Word lock file
`~$SS256_A2_GroupAssignment_2027.docx` is in the folder — the brief is open in Word; the lock file is harmless
and auto-clears when Word closes.*

## 2. Verification gates — final sweep results (Phase F)
| Check | Result |
|---|---|
| **Whole-set XML hex-scan** (grayscale-only, the B&W final gate) | **12/12 PASS** — only 000000/999999/D9D9D9/F2F2F2 grayscale codes |
| **Paste-test** (F-9 ASCII integrity) on 6 R-bearing docs | **6/6 PASS** — 0 broken `<-` glyphs, 0 smart quotes in code, balanced delimiters |
| **Metadata/DRAFT final scan** (8 marker types) | **ALL ZERO** — `(DRAFT)`, Code status, UNTESTED, _currency, *_llm.md, A2-consistency, validated;, setup-guide filename |
| **Cross-platform (§9)** | setup guide shows **both macOS + Windows** (Ollama install, terminal); labs use OS-independent `read_csv`/relative paths and defer OS-setup to the dual-OS setup guide + Wk4–5 skills (no needless duplication) |
| **A2 slice readiness** (G1–G8) | **8/8 PASS**, independence confirmed (zero shared AppIds) |
| **docx XML validation** | 12/12 parse OK |

*Pipeline provenance: docx-js build → blue-scrub (2E74B5/1F4D78/0563C1→000000) → grayscale render → XML hex-scan.
Three in-flight render bugs were caught and fixed during batch (tofu glyphs, empty chapter titles, broken lists);
the cleanup pass stripped instructor asides while preserving the run-it-yourself instructions.*

## 3. Governance + currency apply-status
| Item | Status |
|---|---|
| GRADING_POLICY §A.1 (A1→No-AI Wk5; Wk2–3 AI-free) | **APPLIED** (Phase A; dated change-log line present) |
| COURSE_PROFILE §4 (AI-verify starts Wk7; Wk2–3 AI-free seed) | **APPLIED** (Phase A; dated change-log present) |
| P-0b reverts + P-2 L143 edit (A1 wording) | **APPLIED** (Phase A) |
| Cross-module reconciliation (calendar, M-3 on-ramp demotion, etc.) | **APPLIED** (module text in 02_working) |
| Currency **F-13** (App Store historical label) | **APPLIED** (M-2 note + lab) |
| Currency **F-9 / F-20 / F-5 Option B** | **LOCKED** in `M-6_currency_refresh_spec.md` — apply at the **deck build round** (they live in first-half decks) |
| CURRENCY_LOG entry (Phase A currency) | **WRITTEN** |

## 4. DEFERRED (separate later rounds)
- **Decks — the full fresh Route-A `.pptx` build (~16 decks).** Deferred to its own later project (the ~12-year-old
  originals need replacement, not patching). When built, apply the **locked** currency fixes (F-9 broken `<-` +
  smart quotes → ASCII with the R paste-test gate; F-20 RStudio→Posit; F-5 Option B date the 2012 figures), and
  run the pptx B&W audit.
- **A2 N=7 vs 8** — both prepared; awaiting the **final roster**. N=8 = all 8 slices; N=7 = drop Games.

## 5. HELD — awaiting professor input (do not apply without decision)
- **F-3 (McKinsey "52% of C-level")** — unverifiable; HELD. Verified alternatives offered in the currency spec
  (e.g., the 47% "changed the basis of competition" McKinsey stat) — confirm original source or pick an alternative.
- **F-6 (3 dead/embedded Seminar-2 YouTube links)** — HELD; verify each and remove/replace.
- **F-5 Option A (~180 ZB headline figure)** — Option B (date the 2012 figures) was applied as the safe path;
  Option A's IDC/Statista ZB figure needs your primary-source confirmation if you want it on a slide.

## 6. Open professor-homework (from the P-series — tracked, not blocking)
- **Exams (P-4):** (a) **calculator / formula-reference-sheet** policy — open FLAG (items drafted "calculator-light");
  (b) **replace vs. augment** — does the new MC section replace or supplement the current exam? (c) ongoing
  **per-term distractor/item analysis** (p, discrimination, dead distractors) before reuse; (d) expand to the full
  per-objective MC spec after you approve the item pattern.
- **A1 production:** A1 reverted to a No-AI Week-5 hand-fluency check (governance applied); the A1 student brief
  itself is produced in the first-half/deck round (not this run).

---

## Bottom line
**The student-facing core is done and verified:** 12 clean B&W `.docx` + 8 gate-ready A2 slices in
`03_final/production/`. **Remaining:** the deferred deck round (with the locked currency fixes), the A2 roster
decision (N), and the held items (F-3, F-6, F-5A) + P-4 exam policies — all awaiting your input. Nothing is
silently pending; every open thread is listed above.
