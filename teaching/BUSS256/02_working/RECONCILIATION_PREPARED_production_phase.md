# Reconciliation — PREPARED, NOT APPLIED (production-phase package)

*Change log: Jun 18, 2026 — created. Collects the reconciliation changes that touch **`03_final/` or governance**
— drafted as exact before/after, **NOT applied** (those files change only in the dedicated production/governance
pass). The `02_working/` module-text fixes (Cat 1, Cat 2) are already applied — see RECONCILIATION_AUDIT.md.*

**Approved decisions driving this package:** A1 reverts to a No-AI Week-5 hand-fluency check; individual
AI-verification is assessed by the **exams (final Q2/Q3) + second-half in-class exercises**, not A1; A2 is the
sole AI-collaboration assignment. Clean structure: **A1 = hand (no AI) · A2 = AI-collaboration (group) · exams =
secure individual AI-verification.**

---

## Cat 4.1 — P-0b reverts (`03_final/P-0b_AI_and_tool_policy_draft.md`) — 4 spots + 1 linked
*Do NOT edit `03_final/` now. Apply in the production pass.*

### (i) Rev-note, L5–7
**BEFORE**
> *Rev Jun 18, 2026 — A1 redefined to **AI Collaboration** (individual AI-verification mini-capstone); proctored
> mid-term & final are now the ONLY no-AI secure checks; added an ungraded in-class "hand-first → AI-verify"
> formative activity (Wk 2–3).*

**AFTER**
> *Rev Jun 18, 2026 — A1 redefined to AI Collaboration. **Superseded Jun 18, 2026 (reconciliation):** A1
> **reverted to a No-AI, in-class Week-5 R hand-fluency check** (it precedes the Week-7 AI on-ramp). Secure no-AI
> checks = **A1 + proctored mid-term & final.** The Weeks 2–3 formative activity is **AI-free
> verification-mindset** (the AI-verify version starts Week 7). See RECONCILIATION_AUDIT Cat 4 + Cat 5.*

*(Note: this single edit also carries the **Cat 5 / Wk 2–3** ripple in P-0b — "hand-first → AI-verify (Wk 2–3)"
→ "AI-free verification-mindset (Wk 2–3)", consistent with COURSE_PROFILE §4 DIFF 2 below.)*

### (ii) AIAS table row, L39
**BEFORE**
> | Individual assignment (A1) | **AI Collaboration** | A constrained individual mini-capstone: you run the
> analysis with AI, then **verify it by hand** and explain where and why the AI was wrong. Open, with disclosure
> (below). |

**AFTER**
> | Individual assignment (A1) | **No AI (secure)** | An in-class **Week-5 R hand-fluency check** — you write
> and read R by hand. It falls **before** AI is introduced (Week 7), so no AI is used. |

*(Place the A1 row alongside the mid-term/final "No AI" rows; remove it from the AI-Collaboration grouping.)*

### (iii) Plain-language label list, L92–94
**BEFORE**
> - Mid-term, final → **No AI** (your own skill, proctored — the only secure checks).
> - Individual assignment (A1), group assignment, second-half exercises → **AI Collaboration** (open).

**AFTER**
> - **Individual assignment (A1)**, mid-term, final → **No AI** (your own skill — A1 in-class Week 5, exams
>   proctored; these are the secure checks).
> - Group assignment (A2), second-half exercises → **AI Collaboration** (open).

### (iv) "A1 redefined" subsection, L112–121
**BEFORE** (frames A1 as the individual AI-verification mini-capstone; builds the A1/A2 division of labor on that)
> "A1 is no longer a no-AI secure check. **A1 = the individual AI-verification mini-capstone:** … The division of
> labor: A1 isolates **individual verification competence** on a bounded task; A2 assesses **open framing +
> collaboration + interpretation** at scale. …"

**AFTER**
> "## A1 reverted — Week-5 hand-fluency (no AI)
> A1 is a **no-AI, in-class Week-5 R hand-fluency check**: it falls *before* AI is introduced (Week 7), so it
> cannot use AI. **A2 = the open group AI-collaboration capstone** — unique per-group data, prompt log, peer
> evaluation, business interpretation. **Division of labor:** A1 = individual **hand-fluency** (no AI); A2 =
> open group **framing + AI collaboration + interpretation**; the **proctored exams (final Q2/Q3) + second-half
> in-class exercises** carry **individual AI-verification competence.** The three don't overlap — different
> skills, different points in the term. *(The earlier 'A1 = individual AI-verification capstone' was
> calendar-impossible: Week-5 students hadn't met AI. This removes a phantom pole, not a real one.)*"

---

## Cat 4.2(b) — P-2 edit (`02_working/P-2_A2_redesign.md` L143)
*This file is in `02_working/`, but the edit is held with the Cat-4 package so the A1/A2 wording lands together.*

**BEFORE**
> | B-3 | **One concrete verification of an AI output** — e.g., re-derive one coefficient/metric by hand or with
> independent code, and compare | **one team-level check**, not a full hand-recompute (that's A1's job —
> decision D) |

**AFTER**
> | B-3 | **One concrete verification of an AI output** — e.g., re-derive one coefficient/metric by hand or with
> independent code, and compare | **one team-level check** — a representative verification, not a full
> hand-recompute of everything |

*(Drops the "that's A1's job — decision D" clause; B-3 now stands on its own. No other P-2 content references
A1's level.)*

---

## Governance DIFFs — drift-free, ready to apply (restated from `M-6_governance_reconciliation.md`)
*Re-confirmed against live text this session — both "before" quotes still match exactly (no drift).*

### DIFF 1 — GRADING_POLICY §A.1 (A1 revert + Wk 2–3 reframe)
```diff
-| Individual assignment (A1) | **AI Collaboration** — individual AI-verification mini-capstone |
+| Individual assignment (A1) | **No AI (secure)** — in-class R hand-fluency check (Week 5, before the AI on-ramp) |
```
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

### DIFF 2 — COURSE_PROFILE §4 (Weeks 2–3 are AI-free)
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

*Add at apply time — change-log line: "Jun 18, 2026 — A1 reverted to No-AI Week-5 hand-fluency check; Weeks 2–3
checkpoints reframed AI-free (partial revision of D-3; calendar reconciliation). Approved [date]."*

---

## Apply order (production/governance pass)
1. GRADING_POLICY §A.1 DIFF 1 + COURSE_PROFILE §4 DIFF 2 (governance).
2. P-0b reverts (i)–(iv) in `03_final/`.
3. P-2 L143 edit in `02_working/`.
4. Update CURRENCY_LOG / change-logs with one dated entry. *(A2 .docx needs no change — 0 A1 mentions.)*
