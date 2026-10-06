# Cross-Module Reconciliation — STAGE 1 AUDIT (inventory only, NOTHING applied)

*Change log: Jun 18, 2026 — created. Complete change inventory for the single cross-module reconciliation pass.
**No file is edited here.** Each instance is quoted with file + line + current text + a proposed fix. Ambiguous
items are flagged **[DECIDE]** for the professor. Apply only after approval (module text in `02_working/`;
governance as DIFFs for the production phase).*

**The teaching calendar (the spine):**
`M-6 (Wk1–5, AI-free) → M-5 (Wk7 viz = FIRST AI on-ramp) → [Wk8 midterm] → M-3 (Wk9 assoc) → M-2 (Wk10–11 reg)
→ M-4 (Wk12–13 clust) → M-1 (Wk14–15 text)`. Calendar-neighbor (what actually precedes): M-5←first; M-3←M-5;
M-2←M-3; M-4←M-2; M-1←M-4.

## STATUS (updated Jun 18, 2026 — reconciliation applied)
**Cat 1, Cat 2 → APPLIED to `02_working/` module text.** Cat 3, Cat 5 → no change needed (confirmed). **Cat 4 +
governance DIFFs → PREPARED, NOT APPLIED** (touch `03_final/` + governance) — collected in
`RECONCILIATION_PREPARED_production_phase.md` for the production/governance pass. Decisions: Cat 1.2 reorder ✅;
Cat 2.7 annotate-only ✅; Cat 4.2 accept (a)+(b) ✅.

## Headline counts
| Cat | Item | Instances | Status |
|---|---|---|---|
| 1 | "As we did last module" calendar mismatch | 1 hard fix + 1 reorder | ✅ **APPLIED** (M-2 L34; M-4 L40 reordered) |
| 2 | M-3 on-ramp demotion (biggest rewrite) | 6 spots (notes + scripts) + blueprint annotation | ✅ **APPLIED** (2.1–2.6 + 2.7 annotation) |
| 3 | M-5-is-now-first confirmation | 0 fixes (consistent) | ✅ confirmed, no change |
| 4 | A1 revert — P-series ripple | 4 P-0b spots + P-2 L143 | 🟡 **PREPARED** (not applied — `03_final/`) |
| 5 | Weeks 2–3 checkpoint reframe | governance DIFF covers it | 🟡 **PREPARED** (COURSE_PROFILE §4 DIFF) |
| — | Governance DIFF drift-check | both match live text | ✅ drift-free, restated ready |

**Net:** the pass is **smaller than feared** — most modules use intra-session ("we just…") or generic ("you
know the drill") references that are calendar-agnostic and correct. The real work is concentrated in **Category 2
(demote M-3's on-ramp)**, plus one Category-1 line and the A1 ripple.

---

## CATEGORY 1 — "As we did last module" calendar mismatch
*Rule applied: only flag references that assert a **specific wrong neighbor**. Generic ("every module," "you
know the drill") and intra-session ("we just turned writing into a table") references are **correct as-is** and
left alone.*

### 1.1 — HARD FIX · `M-2_script_W11-2_diagnostics_recommend.md` L34
> "That's been the whole course, every module: **the machine executes; you direct, you verify, you decide.**
> **Text mining, regression**, doesn't matter — that's the skill."

- **Problem:** spoken at **Wk11 (M-2)**. **Text mining (M-1) is Wk14–15 — it hasn't happened yet.** Citing it as a
  past example is a forward-reference the students can't have lived.
- **Calendar-safe priors at Wk11:** foundations (M-6), viz (M-5), association rules (M-3), regression (M-2).
- **Proposed fix:** "**Association rules, regression**, doesn't matter — that's the skill." *(swap the not-yet-seen
  "text mining" for "association rules," which they did in Wk9.)*

### 1.2 — OPTIONAL / low-priority · `M-4_script_W12-1_clustering_standardize.md` L40  **[DECIDE]**
> "You know the drill by now — **we've done it for regression, for association rules.** Hand-first, then the AI,
> then verify."

- **Status:** **factually correct** — at Wk12 both regression (Wk10–11) and association rules (Wk9) are done. The
  only quibble is **listing order** (it names regression before association rules; chronological order is the
  reverse). The claim "we've done both" is true either way.
- **Proposed (optional):** reorder to "…**for association rules, for regression**…" for chronology — or leave it.
  **[DECIDE]:** reorder for tidiness, or leave (it's not wrong)?

### Confirmed-correct cross-references (NO change — listed so you can see they were checked)
- `M-1_note_W15-2` L34 "**Recall Seminar 1**…" — Seminar 1 (Wk1) genuinely precedes M-1 (Wk14–15). ✅
- `M-4_script_W12-2` L11 "a plot twist you've seen once before, **back in association rules**" — M-3 (Wk9)
  precedes M-4 (Wk12). ✅ Correct.
- `M-4_script_W12-2` L32 "**Just like back in association rules, remember?**" — same, correct. ✅
- `M-4_note_W12-2` L44 / `M-4_script_W12-1` L37 / `M-2_note_W10-2` L56 — generic "every module / all term / on
  every model." Calendar-agnostic. ✅
- All "we just… / you just…" hits in M-1 scripts — **intra-session**, not cross-module. ✅

---

## CATEGORY 2 — M-3 on-ramp DEMOTION (the biggest rewrite)
*M-3 currently introduces the AI rule as if for the **first time** ("our first… set the rule today… starting
now… never changes"). Since **M-5 (Wk7) is now the term's first AI on-ramp**, M-3 must **demote to a callback.**
Preserve M-3's tone and the **lift-interpretation** teaching beat (which is separate and untouched).*

**The clean reconciliation (use throughout):** M-5's rule was *"hold the standard → direct → verify,"* where the
standard was a **principle** (a good chart). M-3 is the **first time the standard becomes a number you compute by
hand** — so *"hold the standard"* becomes *"hand-first."* **Same rule, now numeric.** M-5 already foreshadows
this ("the standard comes in two forms — a principle today, a number after the midterm"), so the callback lands
cleanly.

### 2.1 — `M-3_note_W9-1_measures_onramp.md` L18 (objective 1)
> "1. State **how we'll work with AI all term** — hand-first, then direct, then verify — and why that order matters."
- **Fix:** "1. **Recall the AI rule from the visualization week (Wk7)** and apply its **hand-first** form: do it
  by hand, then direct the AI, then verify. → the course's operating habit + **verification**."

### 2.2 — `M-3_note_W9-1_measures_onramp.md` L23–24 (section header + opener) — core demotion
> "## The AI-collaboration on-ramp (how we work with AI, all term)
> This is our **first** technique of the second half, and it's where **we set the rule** for how this course uses
> AI — so listen up, because it never changes."
- **Problem:** "where we set the rule" is now **false** — the rule was set in Wk7 (M-5).
- **Fix:**
  > "## The AI rule, now with numbers (a callback from Week 7)
  > This is our **first technique after the midterm** — so before we start, a quick callback to the rule we set
  > in the **visualization week**: *hold your standard, direct the AI, verify it against your standard.* Back then
  > your standard was a **principle** (a good chart). From here on it's a **number you compute by hand** — so the
  > rule takes its working form: **hand-first, then direct, then verify.** Same rule, now with numbers."
  *(Keeps "first technique after the midterm" — that part is true.)*

### 2.3 — `M-3_note_W9-1_measures_onramp.md` L30
> "Association rules is the *perfect* place to **start this habit**, because the whole toolkit is three simple
> fractions you can compute by hand."
- **Fix:** "Association rules is the *perfect* place to **put that habit to work with real numbers**, because the
  whole toolkit is three simple fractions you can compute by hand." *(habit started Wk7, not here.)*

### 2.4 — `M-3_note_W9-1_measures_onramp.md` L75 (key takeaway)
> "- The course rule, **starting now**: **hand-first → direct the AI → verify.** Never trust-first."
- **Fix:** "- The course rule (**set in Week 7**), here in its numeric form: **hand-first → direct the AI →
  verify.** Never trust-first."

### 2.5 — `M-3_script_W9-1_measures_onramp.md` L13 ([1] Open)
> "Welcome back from the midterm. Today we start the fun half — actual techniques. … But first, two minutes on
> something bigger: how you and AI are going to work together **for the rest of this course. Because we set the
> rule today, and we never break it.**"
- **Fix:** "Welcome back from the midterm. Today we start the fun half — actual techniques. … But first, thirty
  seconds: **remember the rule we set back in the visualization week** for how you and AI work together. **It
  hasn't changed — but today it grows up, because now we've got real numbers to check.**"

### 2.6 — `M-3_script_W9-1_measures_onramp.md` L15–19 ([2] CENTERPIECE) — demote from intro to callback
> "[2] CENTERPIECE — the on-ramp … 'Here's the deal. For every technique from here on, you're going to do it **by
> hand first.** … Hand-first. Then direct. Then verify. **Say it with me** …'"
- **Problem:** delivered as a **first-time reveal** ("Here's the deal," call-and-response) — that energy belongs
  to M-5 now.
- **Fix:** keep the *content* of the rule (and the warm "why" about confidently-wrong AI), but reframe as
  **recognition, not revelation**: "You already know this one — we met it with the charts in Week 7: **hold your
  standard, direct, verify.** Here's the only new wrinkle: back then your standard was *a good chart*; now it's a
  *number you work out by hand first.* So for every technique from here on — hand-first, then the AI, then check.
  Same rule, sharper teeth." **Drop the "say it with me" first-reveal beat** (or soften to "you remember the
  drill"). *(This is the single biggest text change in the pass.)*
- **Untouched:** beats [3]–[6] (chips&salsa, the three measures, the live board-compute, the lift trap) — the
  **lift-interpretation teaching is preserved exactly.**

### 2.7 — Design-doc note (not student-facing) · `M-3_assocrules_blueprint.md` L23, L29, L45
The blueprint calls the on-ramp "**the term's first**" (L23, L45) and lists "the on-ramp objective" (L29).
- **Recommendation:** add a one-line reconciliation note to the blueprint ("on-ramp demoted to a Wk7 callback —
  see RECONCILIATION_AUDIT Cat 2; M-5 is the term's first AI"), **or** lightly edit L23/L45. Low priority (design
  record, not taught). **[DECIDE]:** edit the blueprint, or just annotate it?

---

## CATEGORY 3 — M-5-is-now-first: CONFIRMED consistent (no fixes)
- **M-5 carries the FULL on-ramp.** `M-5_note_W7` L29 "The on-ramp — how we work with AI, all term (starts
  today)"; `M-5_script_W7` [2] "this is the **first time** in this course we bring AI into the room." ✅
- **M-6 only seeds it AI-free and points forward.** `M-6_note_W1` / `M-6_script_W1` introduce the *third literacy*
  conceptually and explicitly say "no AI until after the midterm… we'll learn it for real in the visualization
  week (Week 7)." **No pre-emption.** ✅
- **M-2 / M-4 / M-1 treat the rule as already-established** (generic "every module," "hand-first → AI-verify on
  every model") — consistent with the rule having been set earlier. ✅
- **Only conflict with "M-5 is first" = M-3's first-time framing → fixed in Category 2.** Once Cat 2 applies,
  the course has exactly **one** first-AI moment (M-5, Wk7). ✅
- **Note (already correct):** M-4 scripts L5 "**No on-ramp** — light callback only" and M-4_script_W12-2 L11
  "a plot twist you've seen once before" already model the **callback** posture M-3 needs to adopt. Good template
  for the Cat-2 rewrite.

---

## CATEGORY 4 — A1 revert: the P-series ripple (text/material side)
*GRADING_POLICY §A.1 DIFF is already drafted (see governance section). Here: every **other** place that calls A1
"AI Collaboration." Do NOT edit `03_final/` now — listed for the apply step.*

### 4.1 — `03_final/P-0b_AI_and_tool_policy_draft.md` — 4 spots (in 03_final/ — list, don't edit)
- **L5 (rev note):** "A1 redefined to **AI Collaboration** (individual AI-verification mini-capstone)…"
- **L39 (AIAS table row):** "| Individual assignment (A1) | **AI Collaboration** | A constrained individual
  mini-capstone: you run the analysis **with AI**, then verify it by hand… |"
- **L94:** "Individual assignment (A1), group assignment, second-half exercises → **AI Collaboration** (open)."
- **L112–121 (whole "A1 redefined" subsection):** frames A1 as "the individual **AI-verification mini-capstone**."
- **Proposed revert (all four):** A1 = **No-AI, in-class Week-5 R hand-fluency check** (precedes the Wk7 AI
  on-ramp; cannot use AI). Move A1 out of the "AI Collaboration (open)" list into the secure/no-AI column.

### 4.2 — `02_working/P-2_A2_redesign.md` L143 — **DESIGN DEPENDENCY, not just wording [DECIDE]**
> "B-3 | One concrete verification of an AI output … | one team-level check, not a full hand-recompute
> (**that's A1's job — decision D**)"
- **The real issue:** P-0b/P-2 built the **A1-vs-A2 division of labor** on A1 being *the* individual
  AI-verification capstone (A1 = bounded individual AI-verification; A2 = open group framing). **Reverting A1 to a
  no-AI Wk5 hand-fluency check removes that pole** — A2 becomes the *sole* AI-collaboration assignment, and
  "individual AI-verification competence" is no longer assessed by A1.
- **[DECIDE] — this needs your call, not a silent wording swap:**
  - (a) **Accept the gap** — individual AI-verification is assessed by the **exams** (final Q2/Q3 rehearse it) and
    the second-half in-class exercises; A1 just does hand-fluency. *(Cleanest; A1=hand, A2=AI, exams=secure.)*
  - (b) **Re-point P-2 L143** — drop the "that's A1's job" clause; let B-3 carry team-level verification with no
    A1 reference.
  - (c) **Reconsider** whether A2 needs an individual-verification component now that A1 won't provide one.
  - *My read:* (a)+(b) together — accept the gap (exams cover individual verification) and delete the A1 clause in
    P-2. But this is a genuine assessment-design decision, so flagging it.

### 4.3 — Produced A2 .docx — CLEAR (checked)
- `02_working/BUSS256_A2_GroupAssignment_2027.docx` and `03_final/production/…docx`: **0 mentions of "A1."** No
  ripple in the produced document. ✅ (Nothing to revert there.)

### 4.4 — AIAS table reproductions
- The AIAS table appears in **P-0b L39** (4.1 above) and **GRADING_POLICY §A.1** (governance DIFF, already
  drafted). No other reproduction found. ✅

---

## CATEGORY 5 — Weeks 2–3 checkpoint reframe
- The COURSE_PROFILE §4 DIFF (governance section) is the **only** text needing this change.
- **Module-note scan:** no M-1…M-6 note/script references the Weeks 2–3 checkpoints as **AI-using**. M-6's
  verification-seed spec already frames the Wk2–5 checks as **AI-free** ("check your own work, no computer"). ✅
- **No extra fixes.**

---

## Governance DIFF drift-check (do the drafted "before" quotes still match live text?)
*Re-read the live files this session.* **Both match — no drift.**
- **GRADING_POLICY §A.1** (live lines 50, 55–58, 63–67) matches the "before" quoted in
  `M-6_governance_reconciliation.md` DIFF 1 **exactly.** ✅
- **COURSE_PROFILE §4** (live lines 78–82) matches DIFF 2's "before" **exactly.** ✅
- The two DIFFs are ready to present for the production phase unchanged.

---

## Decisions (resolved Jun 18, 2026) — all applied/prepared accordingly
1. **[Cat 1.2]** ✅ Reordered to "association rules, regression" (chronological).
2. **[Cat 2.7]** ✅ Annotated the M-3 blueprint only (one-line superseded note; content unchanged).
3. **[Cat 4.2]** ✅ Accepted (a)+(b): individual AI-verification → exams (final Q2/Q3) + second-half exercises;
   A1 = hand-fluency only; dropped the "A1's job" clause in P-2. The phantom pole is removed.

**Done:** Cat 1 + Cat 2 applied to `02_working/` module text (this file's Categories 1–2 spots). Cat 4 + the two
governance DIFFs are drafted in `RECONCILIATION_PREPARED_production_phase.md` for the production/governance pass
(not applied — they touch `03_final/` + governance).
