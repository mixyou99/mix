# M-6 — Governance Reconciliation (DIFFs + the deferred flag) · STAGE 2

*Change log: Jun 18, 2026 — created (Stage 2). Collects the **approved** M-6 governance changes as **DIFFs for
the production/reconciliation phase. NOT APPLIED** — no governance file is edited here (governance changes are
always shown as DIFFs and applied only in a dedicated pass). Exact source text quoted from the live files.*

**Two DIFFs below resolve the same root cause:** the locked D-3 design (Jun 18, 2026) was written before the
first-half **calendar** was fully pinned. **A1 is a Week-5 in-class assignment and the formative checkpoints
are Weeks 2–3 — all *before* AI is introduced in Week 7 (M-5).** D-3 placed AI-collaboration / AI-verify there,
which is chronologically impossible. The fix: the *AI* versions start at the Week-7 on-ramp; Weeks 2–5 are the
**AI-free hand + verification-mindset** foundation. *(Approved: blueprint §8.1 + §8.5.)*

---

## DIFF 1 — A1 reverts to a no-AI hand-fluency check (GRADING_POLICY §A.1)
*File: `00_governance/GRADING_POLICY.md`. Approved blueprint §8.5.*

**Table row (line 50):**
```diff
-| Individual assignment (A1) | **AI Collaboration** — individual AI-verification mini-capstone |
+| Individual assignment (A1) | **No AI (secure)** — in-class R hand-fluency check (Week 5, before the AI on-ramp) |
```

**Secure-checks bullet (lines 55–58):**
```diff
-- **The only secure, no-AI assessments are the proctored mid-term and final
-  exams.** A1 is **no longer** a no-AI check; it is an AI-Collaboration task in
-  which the assessed skill is the student's hand-verification and critique of AI
-  output.
+- **The secure, no-AI assessments are the in-class A1 hand-fluency check (Week 5)
+  and the proctored mid-term and final exams.** A1 is a pure **hand-skills**
+  checkpoint: it falls in Week 5, *before* AI is introduced in Week 7, so it
+  cannot be an AI task. A2 is the AI-collaboration capstone; the clean split is
+  **A1 = hand (no AI), A2 = AI-collaboration.**
```

**Formative-checkpoints bullet (lines 63–67) — see DIFF 2 for the matching COURSE_PROFILE edit:**
```diff
-- **Ungraded formative checkpoints (design element, not assessment).** In Weeks
-  2–3, one or two in-class **hand-first → AI-verify** activities carry no points;
-  the hand-solved result is the required input to the AI-verify step, so
-  participation is enforced by design. They are the on-ramp to the second-half
-  hand-first → AI-verify sequence (see COURSE_PROFILE §4).
+- **Ungraded formative checkpoints (design element, not assessment).** In Weeks
+  2–3, one or two in-class **AI-free verification-mindset** activities carry no
+  points: students solve by hand and **check their own work by hand** ("does this
+  output look right?"). No AI is used yet (it arrives Week 7). These build the
+  standard-holding habit that the Week-7 on-ramp turns into hand-first → AI-verify
+  (see COURSE_PROFILE §4).
```
*Change-log line to add at apply time: "Jun 18, 2026 — A1 reverted to No-AI hand-fluency check (Week 5);
Weeks 2–3 checkpoints reframed AI-free (partial revision of D-3; calendar reconciliation). Approved [date]."*

---

## DIFF 2 — Weeks 2–3 checkpoints are AI-free (COURSE_PROFILE §4)
*File: `00_governance/COURSE_PROFILE_BUSS256.md`. Approved blueprint §8.1.*

**"Hand-first → AI-verify" subsection (lines 78–82):**
```diff
 **Hand-first → AI-verify (the operating sequence).** Both halves of the course
 follow one sequence: **solve by hand → let AI run it → student verifies and
-critiques the AI's output.** It appears first as one or two *ungraded* in-class
-checkpoints in Weeks 2–3 (right after R basics), and then as the standard shape
-of every second-half module's exercise.
+critiques the AI's output.** The **AI** version of this sequence begins at the
+**Week-7 on-ramp (M-5)** — the first time AI enters the course — and is then the
+standard shape of every second-half module's exercise. Its **AI-free seed**
+appears earlier: one or two *ungraded* in-class checkpoints in **Weeks 2–3**
+(right after R basics) where students **solve by hand and verify their own work
+by hand**. Same habit (hold a standard, then check against it); the Weeks 2–3
+target is the student's own output, the Week-7+ target is the AI's.
```
*(The §4 *rationale* paragraph (lines 84–89, the bootstrapping problem) needs **no change** — it already argues
that students must hold a standard before verifying; the AI-free seed is exactly that standard being built.)*

---

## Note — P-series ripple (flag, do not edit now)
Reverting A1's AI level means earlier deliverables that describe A1 as "AI Collaboration" need the **same wording
revert** when the reconciliation pass runs:
- **`03_final/` P-0b** (the A1 redefinition note) — restate A1 as the **No-AI Week-5 hand-fluency check.**
- **The produced A2 .docx / any A2 materials** that reference A1's level in passing — align the one-line A1
  descriptor. *(A2 itself is unaffected — it remains AI Collaboration.)*
- **The AIAS table** wherever it is reproduced — A1 row → No AI (secure).
*These are flagged for the single reconciliation pass, not edited here.*

---

## THE DEFERRED CROSS-MODULE RECONCILIATION FLAG — single source of truth
*Restated in full so this file is the one place to look. All items are applied together in ONE pass once all
modules exist (M-6 now does), to avoid churn. Nothing below is applied yet.*

**Root cause:** modules were **authored** in the order M-1 → M-5, but the **real teaching calendar** runs in a
different order. Authored-in cross-references ("as we did last module," "you'll see this next," "the first time
we use AI") assume authoring order and must be re-pointed to calendar order.

**Real teaching order (calendar):**
`M-6 (Wk 1–5 foundations) → M-5 (Wk 7 viz = FIRST AI) → [Wk 8 midterm] → M-3 (Wk 9 assoc. rules) → M-2
(Wk 10–11 regression) → M-4 (Wk 12–13 clustering) → M-1 (Wk 14–15 text mining).`

**Items to apply in the single pass:**
1. **"As we did last module" calendar mismatch (M-1/M-2/M-3/M-4).** Audit every back/forward cross-reference in
   M-1…M-4 and re-point it to the **calendar** neighbor, not the authoring neighbor. (E.g., a module saying "the
   clustering we just did" must match what actually precedes it in the term.)
2. **M-3 on-ramp demotion.** M-3 was originally written as the term's first AI introduction. **It is no longer
   first** — M-5 (Week 7) is. Demote M-3's on-ramp framing to a *brief callback* to the Week-7 rule ("remember:
   hold → direct → verify"), not a fresh introduction.
3. **M-5 is now the term's FIRST AI introduction (Week 7).** Confirm M-5 carries the *full* on-ramp (it does, by
   design) and that no earlier module pre-empts it. M-6 (this module) seeds it AI-free and points forward to it.
4. **A1 revert (DIFF 1 above).** A1 → No-AI Week-5 hand-fluency check; + the P-series ripple note above.
5. **Weeks 2–3 checkpoint reframe (DIFF 2 above).** AI-free verification-mindset in Weeks 2–3; AI-verify version
   starts Week 7.

**Apply trigger:** after professor approval of M-6 Stage 2, run the reconciliation pass across all modules +
governance in one sweep; then update CURRENCY_LOG / change-logs with a single dated entry.
