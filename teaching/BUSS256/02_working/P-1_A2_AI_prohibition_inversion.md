# P-1 — A2: Invert AI Prohibitions (DRAFT)

*Change log: Jun 18, 2026 — created. Surgical inversion of AI-permission language in the A2 group
assignment and its "Common Mistakes" handout. Markdown draft for professor review; no source file
modified. Scope: permission language ONLY — A2's task, data, group structure, and deliverables are
unchanged here (those are P-2).*

**Authority:** GRADING_POLICY §A.1 (A2 = AI Collaboration; proctored exams are the only no-AI secure
checks; integrity by exams, not detection/tool-policing), §B, §D; COURSE_PROFILE §4; P-0b.

---

## Source-file map (for the later production phase — do NOT edit now)

| Item | Editable original (to change in production) | Derived (regenerate, don't edit) | Lines affected |
|------|---------------------------------------------|----------------------------------|----------------|
| A2 assignment spec | `A2/BUSS256_Group Assignment.docx` | — | p8, p61, p68 |
| A2 "Common Mistakes" | `A2/Sample/BUSS256_Common Mistakes in Assignment#2.pptx` | `..._Common Mistakes in Assignment#2.pdf` | slide 2 |
| A2 "Tips" handout | `A2/Sample/Tips for Group Assignment2.pptx` | `...pdf` | **none — no AI-permission language found** |

*Completeness:* a full text sweep of every A2 `.docx`/`.pptx` (spec, Common Mistakes, Tips, both
sample answers) found AI-permission/AI-assuming language **only** in the three rows below. (`p9`
"Do not submit a **hard copy**…" is unrelated and left as-is.)

---

## Before → after (permission language only)

| # | File · location | Current wording (exact) | Replacement | Rationale |
|---|-----------------|-------------------------|-------------|-----------|
| 1 | `BUSS256_Group Assignment.docx` · **p8** (Notes) | **"DO NOT USE AI CHATBOTS"** | **"This is an AI Collaboration assignment — you may and are encouraged to use AI assistants. Your AI use must be disclosed and verified: follow the course AI & tool policy for what to submit. You remain responsible for checking every AI output and for explaining your analysis in your own words."** | Direct reversal of the ban to match GRADING_POLICY §A.1 (A2 = AI Collaboration). Disclosure *mechanics* (prompt log, AI-usage statement, reflection) are pointed to the policy, not built into the deliverable list here — that is P-2. |
| 2 | `BUSS256_Group Assignment.docx` · **p61** (Step 5) | **"DO NOT COPY from any online resources. Explain it in your words."** | **"Explain it in your own words. You may consult AI assistants or other sources to build your understanding, but do not paste their text verbatim — articulate it yourself and verify it is correct. Cite any external source you draw on."** | Keeps the genuine intent (own-words understanding, no verbatim copy) while removing the implicit AI-free assumption. Aligns with §D disclosure/citation. |
| 3 | `BUSS256_Group Assignment.docx` · **p68** (Step 6) | **"DO NOT COPY from any online resources. Explain it in your words."** | *(same replacement as #2)* | Same line, second occurrence (R² vs adjusted R² definition). |
| 4 | `BUSS256_Common Mistakes…pptx` · **slide 2** | **"Do not copy the definitions from online resources or AI Chatbots!"** | **"Do not paste definitions verbatim from online resources or AI assistants. Use them to learn, then write the definition in your own words and verify it is correct; cite any source you rely on."** | Reframes a prohibition into a verify-and-cite norm consistent with AI Collaboration. |

---

## Keep as-is (good criteria — reusable later, not built here)

These are NOT prohibitions and should remain; flagged as reusable inputs for the **P-2 rubric** and
**P-3 grading**, but **no rubric is built in P-1**:

- `Common Mistakes…pptx` slide 2: *"If you cited/referenced the sentences from external sources, you
  should indicate the sources in the report."* — already a disclosure/citation norm; keep, and it
  doubles as the citation half of the §D disclosure model.
- `Common Mistakes…pptx` (interpretation slides): the **technical + plain-language interpretation**
  criteria (e.g., "A one-unit increase in Price decreases Sales by 30.2%, significant at 0.1%"; "summarize
  the results in a plain manner") and the **hypothesis-evaluation** criteria ("if a hypothesis is not
  supported, explain why"). These are exactly the *interpretation/critique* criteria the redesign wants
  → **reusable as the "critique-the-AI's-interpretation" rubric in P-2/P-3.**

---

## Deferred to P-2 (structural issues noticed — NOT changed in P-1)

1. **No AI-process deliverables.** The submission list (`p4–p7`) and file-naming rules (`p88–p93`) have
   no prompt log, AI-usage statement, verification step, or reflection component. Adding these is a
   *deliverable* change → P-2 (per GRADING_POLICY §D and the locked disclosure model).
2. **Same data for every group → near-identical outputs.** All groups receive the same 8 category CSVs
   (`p14`, aggregation requirement). Unique per-group data/time slices for authenticity grading → P-2
   (audit S-17).
3. **Mechanical-compliance grading dominates.** File-naming penalty ("5 points deducted", `p93`) and
   mandated transforms/dummies (`requirements` table: `-log(Rank)`, log-normalization, ≥5 predictors,
   category dummies + baseline) are AI-auto-doable; they should become the *floor* with judgment as the
   graded *ceiling* → P-2.
4. **Currency (not AI-permission, so untouched here):** data "collected … 1st January 2013" (`p11`) vs.
   "20th January 2013" in Common Mistakes (internal date mismatch); Tips evidence is Statista **Nov 2019**
   + 2017/2019 ASO blogs. → dataset/currency refresh (P-2 / pre-semester pass).
5. **Due-date reconciliation:** spec says "November 23, Sunday" (`p2`); the canonical (Updated Oct 2025)
   syllabus places Assignment 2 in Week 13 (~Nov 24–26). Confirm in production. → P-2 / production.
6. **Legacy naming:** `A2/Sample/BUSS215_Assignment#2_Sample.docx` carries the old course code → hygiene
   (P-0d), not P-1.

---

## Boundary statement
P-1 changes only the four permission-language items in the table above. No task content, dataset, group
structure, deliverable, rubric, or file format was altered. The replacements are drafted as text only;
they will be written into the real `.docx`/`.pptx` originals during the single dedicated production
phase (TA_CHARTER §6 Production Policy), not now.
