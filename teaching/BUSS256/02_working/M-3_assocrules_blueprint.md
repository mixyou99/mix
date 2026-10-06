# M-3 — Association Rules Module Blueprint (Week 9 / Seminar 7) · STAGE 1 (design only)

*Change log: Jun 18, 2026 — created. Design blueprint for professor approval. **No lecture notes, scripts,
slides, or exercises authored here** — content is Stage 2, after approval. Mirrors the M-2 blueprint shape.*
*Jun 18, 2026 — SUPERSEDED IN PART (reconciliation): this blueprint's framing of the AI on-ramp as "the term's
first" no longer holds — **M-5 (Wk 7) is the term's first AI on-ramp**; in the delivered M-3 notes/scripts the
on-ramp is **demoted to a Week-7 callback**. Blueprint content left unchanged as a design record. See
`RECONCILIATION_AUDIT.md` Cat 2.*

**Inputs read:** existing `Seminar 7_Association Rules/` (lecture decks, the script, `Seminar
7_R_Exercise_Code.r`, `groceries.csv` + `Exercise/mba.csv`); COURSE_PROFILE §3 (two literacies) + §4
(hand-first → AI-verify); audit **S-1/S-2/S-3**; the M-2 blueprint + notes (template); CURRENCY_LOG §B
model policy; benchmark **Themes 1 & 4**.

**No new web scan needed:** the tooling is already established and validated (`ellmer` chat + the **code**
model `qwen2.5-coder`, from M-2), and the `arules` package is the current, stable standard. This is the
**lightest** of the three modules so far (clean code, no A2 coupling, no statistical error to fix).

**Sessions:** Week 9 = **2 class sessions** (Mon + Wed; Seminar 7). Smaller than M-1/M-2 (which were 4
sessions over 2 weeks).

**Locked direction (mostly inherited from M-2):** classical association rules (apriori; support,
confidence, lift) taught faithfully; the student's **own hand-computed support/confidence/lift is the
verification yardstick**; AI at use-and-interpret depth via `ellmer` chat + `qwen2.5-coder` (NOT
`mall`/`llama3.2`); spine = **hand-first → AI-verify**, rehearsing **final-exam Q2**; AI errors framed as
**error TYPES** (never "the AI will do X"). **Two M-3-specific points:** (a) **no A2 dependency**; (b) an
**AI-collaboration on-ramp** because this is the term's *first* technique module.

---

## 1. Learning objectives (each ladders to a literacy)
By the end of Week 9 a student can:
1. **Work with AI the course way** — *do it by hand first, then direct the AI, then verify* — and say why that order matters. → *verification* + the term's operating habit. **(The on-ramp objective.)**
2. Explain what an **association rule** is and read one (LHS → RHS) in plain language. → *algorithm literacy*.
3. **Hand-compute support, confidence, and lift** for a rule on a small basket. → *algorithm + data literacy* (and exam-Q2 readiness).
4. **Direct the AI** to write/diagnose the `arules` apriori pipeline and interpret rules, then **verify** its output against the hand-computed measures and **catch errors**. → *verification*.
5. Turn the top rules into a **merchandising/recommendation decision**, and judge a rule's usefulness (esp. **lift**). → *data literacy*.

---

## 2. Session-by-session outline (Week 9 — 2 sessions)
*Design only — activities described, not authored.*

| Session | Classical (hand-first) | AI orchestration layered on | Hand-first → AI-verify activity |
|---|---|---|---|
| **W9-1 — Concepts, the three measures, and the AI on-ramp** | **The on-ramp** (how we'll work with AI all term — see §2a). Then: association rules / market-basket idea; **support, confidence, lift** defined and **hand-computed** on a tiny basket (the yardstick). *(Light, optional: recommendation-systems framing — see Q1.)* | Introduce the AI as a *thing to direct and check* (the on-ramp's live moment): ask it to confirm/explain a measure. | **Hand-compute first:** students compute support/confidence/lift for a rule on a small basket by hand. **Then verify the AI:** direct it to compute the same and check it against your arithmetic. |
| **W9-2 — apriori at scale, verify, and decide** | Run the classical `arules` pipeline (`read.transactions` → `itemFrequency(Plot)` → `apriori(support, confidence, minlen)` → `sort(by="lift")` → `inspect`) on a real basket dataset; read the top rules. | **Direct the AI** to write the apriori pipeline (choose support/confidence/minlen) and interpret the top-lift rules. | **Verify #2:** pick one rule the AI surfaced, **hand-check its support/confidence/lift** against the data, and **catch errors** (wrong params, swapped support↔confidence, misread lift<1, hallucinated functions). Then **interpret** the top rules into a merchandising decision. Rehearses exam Q2. |

### 2a. The AI-collaboration on-ramp (W9-1 opening) — *term's first; design as reusable*
A short, crisp framing (≈5–8 min) that establishes the operating habit for the whole term:
- **The rule:** *you do it by hand first (your yardstick), then you direct the AI, then you verify the AI against your yardstick.* Never trust-first.
- **Why:** the AI is fast but **confidently wrong sometimes**; you can only catch that if you hold the correct answer yourself. Association rules is perfect for learning this because the measures are simple fractions you *can* check by hand.
- **What "directing" looks like:** you tell it what to build; **what "verifying" looks like:** you re-compute one piece and compare.
- *Design note:* write this generically enough that it can later seed a reusable AI-collaboration intro in `_shared_library/` for other courses (your Q3).

---

## 3. Hand-compute → AI-verify lab design

| Stage | Data | Student does (hand-first) | AI is directed to | Student verifies / catches |
|---|---|---|---|---|
| Hand-compute the three measures | a **small lab basket** (~5–6 transactions; **distinct from the exam's KU-Store table**, which is reserved) | compute support of an itemset, confidence of a rule (LHS→RHS), and **lift** by hand | confirm the same three numbers | does the AI's arithmetic match yours? (the yardstick) |
| Apriori at scale | `mba.csv` (1,138 tx) and/or `groceries.csv` (9,834 tx, Hahsler) — dated historical snapshots | run/read the classical pipeline; note a top-lift rule | write the `apriori(support=, confidence=, minlen=2)` pipeline + sort by lift + interpret | **wrong parameters** (support too high → no rules; swapped args); **swapped support↔confidence**; **lift<1 misread** as "strong/positive"; **hallucinated `arules` functions**; wrong rule direction |
| Decide | same | choose which rules are *actionable* (high lift + sensible) | suggest a merchandising action | is the AI's recommendation supported by the verified measures, or just plausible-sounding? |

**Verification checklist (hand them this):** for any rule — *support* = how often the items appear together;
*confidence* = of baskets with the LHS, how many also have the RHS; **lift** = confidence ÷ baseline rate of
the RHS, where **>1 = positive association, =1 = independent, <1 = negative**. Re-compute one rule by hand
and compare to what the AI/apriori reported.

**Known confusion points = verification gold** (both already targeted by P-4 exam items): the
**support↔confidence swap**, and reading **lift < 1** as "strong/positive." Script the verify activities to
surface these.

---

## 4. KEPT / MIGRATED / RETIRED / ADDED (vs. existing Seminar 7)
*Like M-2: the existing R code is **already clean, standard `arules`** — **no brittle-code migration.** The
work is the AI layer + the on-ramp + a cosmetic date fix.*

| Disposition | Item | Note |
|---|---|---|
| **KEPT** (faithfully) | apriori; **support / confidence / lift**; market-basket framing; `itemFrequency` / `itemFrequencyPlot`; sort-by-lift → inspect | The classical core and the hand-verifiable yardstick. |
| **KEPT** | the clean `arules` exercise code; `groceries.csv` + `mba.csv`; recommendation-systems concept *(if kept light — Q1)* | Already current; no migration. |
| **MIGRATED** | *(none — code is clean)*; **hygiene only:** fix the misspelled "Assoication" in the script title/filename; consolidate `InCLASS`/`InCLASS2` deck variants | Labeling, not code rot. |
| **RETIRED** | The slide-~24 **"groceries data made in 2020"** claim | It's the ~2000s Hahsler set → relabel as a **dated historical snapshot** (S-2 / D-5). |
| **ADDED** | The **AI-orchestration layer** (`ellmer` chat + `qwen2.5-coder`: direct apriori code + interpret); the **hand-first → AI-verify** spine; the **verification checklist + error TYPES** | The redesign's point; rehearses exam Q2. |
| **ADDED** | The **AI-collaboration on-ramp** (term's first) | §2a. |
| **ADDED** | **Date stamps** on `groceries`/`mba` as historical snapshots; a note where a **refreshed basket dataset** would plug in | Currency; re-collection is a separate task. |

---

## 5. Volatile content → `_currency/`
**Recommendation: a small pointer file `undergrad_bigdata/_currency/assocrules_llm.md`** that **points to
`reg_llm_tools.md`** for the shared **model + `ellmer` chat interface + system_prompt** (single source — the
code model and the connection are identical to M-2), and holds **only** the M-3-specific **lab prompt
templates** (e.g., "write an `apriori` call for this transaction data with support … and confidence …";
"interpret these top-lift rules for a store manager"). This matches the per-module prompt-currency pattern
and keeps the model/interface single-sourced. Registering it in `CURRENCY_LOG.md` is a Stage-2 governance
diff for approval. *(Alternative: reference `reg_llm_tools.md` directly with no new file — simpler, but
loses the per-module prompt home. I recommend the small pointer file.)*

---

## 6. Dependency map
- **NO A2 dependency (confirmed).** A2 is the **regression** assignment (App Store); association rules is
  not part of it. So — unlike M-2 — there is **no A2-consistency constraint**. This genuinely simplifies the
  module.
- **M-3 → final-exam Q2 (confirmed).** Q2 tests **support/confidence/lift by hand** on the KU-Store
  6-transaction table (P-4). The lab's hand-compute step directly rehearses it. **Keep the lab basket
  distinct from the KU-Store table** (reserve KU-Store for the exam — no overlap).
- **On-ramp role.** Week 9 is the term's **first** technique module, so M-3's on-ramp is the **first place
  students meet hand-first → AI-verify** (before M-2 regression Wk 10–11, M-4 clustering Wk 12–13, M-1 text
  mining Wk 14–15).
- **Flag for a later cross-module pass (NOT to fix now):** the M-1/M-2 notes/scripts use "as we did last
  module"/"the rule for the whole module" phrasing that assumes an order which does **not** match the real
  calendar (chronological: **M-3 → M-2 → M-4 → M-1**). A later reconciliation pass must align the
  "last module" references with the teaching sequence.

---

## 7. Open questions — need your decision before Stage 2
1. **Recommendation-systems hook** — include it **lightly** in W9-1 (collaborative vs content-based as a
   "how Netflix/Spotify recommend / then-vs-now AI" motivation, *use-and-interpret depth, no AI-build*), or
   leave it out to keep the 2-session module tight? *(Recommend: include lightly as motivation only.)*
2. **Currency file** — small pointer file `assocrules_llm.md` → `reg_llm_tools.md` (per-module prompts), or
   reference `reg_llm_tools.md` directly? *(Recommend the pointer file.)*
3. **On-ramp as a reusable asset** — should I write the on-ramp generically enough to later lift into
   `_shared_library/` as the AI-collaboration intro for other courses? *(Recommend yes.)*
4. **Datasets** — hand-compute on a fresh tiny basket (distinct from KU-Store); for the scale run, use
   **`mba.csv`** (smaller/faster on laptops) or **`groceries.csv`** (the classic)? *(Recommend: tiny basket
   for hand-compute; `mba.csv` for the live AI run; `groceries` as the lecture demo.)*
5. **Graded vs formative** — confirm the M-3 lab is **ungraded formative** (like M-1/M-2), with **exam Q2**
   as the graded assessment of the verification skill?
6. **Date fix scope** — just relabel `groceries`/`mba` as dated historical snapshots, or also queue a
   **refreshed/modern basket dataset** (separate data task)? *(Recommend: relabel now; refresh later.)*

---

## Stage-2 preview (NOT started)
On approval, Stage 2 authors: the lecture notes (with the on-ramp + the three measures hand-first) and the
spoken scripts (English, locked playful tone); the hand-compute → AI-verify lab (exercise + solution) with
the verification checklist; the `_currency/assocrules_llm.md` pointer + prompts; and the slide-24 date
correction — each as `02_working/` drafts, hand-first → AI-verify throughout, B&W + cross-platform standards
applied.
