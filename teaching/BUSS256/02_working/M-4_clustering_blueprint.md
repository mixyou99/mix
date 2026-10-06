# M-4 — Clustering Module Blueprint (Weeks 12–13 / Seminars 10–11) · STAGE 1 (design only)

*Change log: Jun 18, 2026 — created. Design blueprint for professor approval. **No lecture notes, scripts,
slides, or exercises authored here** — content is Stage 2, after approval. Mirrors the M-3 blueprint shape
(4 sessions, like M-1/M-2).*

**Inputs read:** existing `Seminar 10-11 Clustering/` (lecture decks, R-tutorials, `Exercise/…_Clustering_
R_Exercise_Code.r`, `snsdata.csv` + `protein.csv`); COURSE_PROFILE §3 (two literacies) + §4 (hand-first →
AI-verify); audit **S-7/S-8/S-9**; the M-2 **and** M-3 blueprints + notes (templates — M-4 combines both
patterns); CURRENCY_LOG §B model policy.

**No new web scan:** tooling is established/validated (`ellmer` chat + the **code** model `qwen2.5-coder`,
from M-2/M-3); the clustering R stack (`scale`/`kmeans`/`hclust`) is current and stable. **Lighter lift than
M-1** — clean code, no statistical error to fix; the work is the AI layer + a dataset-date relabel + variant
hygiene.

**Sessions:** Weeks 12–13 = **4 class sessions** (Clustering I + Clustering II), like M-1/M-2.

**Locked direction (inherited from M-2/M-3):** classical clustering (k-means, hierarchical/Ward,
standardization, WSS elbow, cluster interpretation) taught faithfully; the student's **own work — reading
the elbow, hand-labeling clusters from their centers — is the verification yardstick**; AI at
use-and-interpret depth via `ellmer` chat + `qwen2.5-coder`; spine = **hand-first → AI-verify**, rehearsing
**final-exam Q4**; AI errors framed as **error TYPES** (never "the AI will do X").

**No on-ramp (key difference from M-3).** On the real calendar M-4 is the **third** technique module (Wk
12–13, after M-3 Wk 9 and M-2 Wk 10–11), so students have already met and practiced hand-first → AI-verify.
M-4 **reuses** the pattern (a light "as we've been doing" callback), it does **not** re-introduce it.
*(Flag for the later cross-module pass, NOT to fix now: the "as we did last module" phrasing across modules
must eventually reconcile with the real calendar **M-3 → M-2 → M-4 → M-1**.)*

---

## The design centerpiece — M-4 is a HYBRID: verification has THREE layers
This module combines M-2's **code-trap** and M-3's **interpretation-judgment**, and adds a *second* judgment.
**Predicted** focus (Stage 2-A will validate — see the box at the end of this section):

1. **CODE TRAP — standardization.** Forgetting `scale()` before `kmeans` silently wrecks the result via
   **scale-dominance** (e.g., on snsdata, `friends` in the hundreds swamps the 0–10 interest counts) — and
   it produces **no error**, so only verification catches it. Also `set.seed` for reproducibility. The
   *mechanics* (`kmeans(data, k)`, `hclust(dist())`, the WSS loop) are formulaic/low-DoF, so qwen likely
   writes them fine (like apriori) — **standardization is the real catchable code error** (unlike M-3's
   clean apriori).
2. **JUDGMENT — CHOOSING K.** The elbow is ambiguous; the lecture's own line — *"no rule/theory determines
   optimal K; it depends on purpose/domain knowledge"* — is the AI-resistant anchor. The AI will confidently
   pick a K; the student verifies it against the **elbow + domain sense**.
3. **JUDGMENT — LABELING CLUSTERS (the best authenticity hook, S-9).** Naming/justifying a cluster from its
   **actual centers/members** cannot be faked from raw AI output. The AI will confidently name clusters; the
   student verifies each label against the **real cluster centers** (does cluster 3 *really* mean "athletes,"
   or did it confabulate?). **Final-exam Q4 tests exactly this.**

> **Stage-2-A validation (the M-2/M-3 lesson).** The three layers above are the **predicted** focus.
> Predictions can be wrong: M-2's predicted code errors **differed** from the real run; M-3's interpretation
> prediction **matched**. So Stage 2-A will run real `qwen2.5-coder` on the actual clustering prompts and
> **re-weight the three layers to reality** before the notes/scripts are finalized.

---

## 1. Learning objectives (each ladders to a literacy)
By the end of Weeks 12–13 a student can:
1. Explain **clustering** as unsupervised grouping by similarity/distance, and when it's useful. → *algorithm literacy*.
2. **Standardize** variables and say *why it matters* — and what goes wrong if you skip it (the code trap). → *algorithm + data literacy* + *verification*.
3. Run **k-means** and **hierarchical/Ward** clustering and read the output (sizes, centers, dendrogram). → *algorithm literacy*.
4. Read the **WSS elbow** to choose K, and defend the choice as a judgment, not a formula. → *data literacy* (judgment 1).
5. **Label clusters** from their centers and justify each name from the data. → *data literacy* (judgment 2; exam-Q4 skill).
6. **Direct the AI** to run clustering + interpret, then **verify** all three layers — did it standardize? is its K defensible? do its labels match the centers? → *verification* (the core).

---

## 2. Session-by-session outline (Weeks 12–13 — 4 sessions)
*Design only. Datasets: **snsdata** (27,276 teen profiles, 36 interest keywords) for k-means-at-scale +
labeling; **protein** (25 countries × 9 protein sources) for small/hierarchical/hand-work.*

| Session | Classical (hand-first) | AI orchestration layered on | Hand-first → AI-verify activity |
|---|---|---|---|
| **W12-1 — What clustering is + standardization** | Clustering = grouping by **distance/similarity** (unsupervised); **standardization** and *why* (scale-dominance — callback to the M-2 foundations). Hand-see the trap on a tiny dataset. | *(light)* introduce the AI as the thing we'll direct + check (callback to the established habit — **no new on-ramp**). | **Layer 1 setup:** standardize a small dataset by hand and watch how un-scaled variables would dominate. (This is the trap the AI will fall into in W12-2.) |
| **W12-2 — k-means at scale + verify the CODE TRAP** | Run `kmeans` on **standardized** snsdata; read sizes/centers. | Direct the AI to write the k-means pipeline. | **Verify #1 (code trap):** did the AI **`scale()` before `kmeans`** (and `set.seed`)? The result *runs either way* — only your check catches a missing standardization. |
| **W13-1 — Choosing K (the elbow) + hierarchical/Ward** | Read the **WSS elbow** on snsdata (hand-judgment); **hierarchical Ward + dendrogram** on the small **protein** data (`dist → hclust(ward.D) → cutree`). | Direct the AI to run several K / suggest the "best" K, and to cut the tree. | **Verify #2 (judgment — K):** is the AI's K defensible against *your* elbow read + the domain? The lecture's "no rule for K" is the anchor — the AI's confident single number is the thing to question. |
| **W13-2 — Labeling clusters + decide (rehearse exam Q4)** | **Hand-label** the snsdata clusters from their centers (e.g., a cluster high on basketball/football/soccer = "sports-focused"); justify each from the numbers. | Direct the AI to **name and interpret** each cluster. | **Verify #3 (judgment — labels, the authenticity hook):** does each AI label match the **actual centers**, or did it confabulate? Then turn the verified segments into a decision (marketing/segmentation). Wrap to the course thesis. |

---

## 3. Hand-first → AI-verify lab design (the three layers)

| Layer | Data | Student does (hand-first) | AI is directed to | Student verifies / catches |
|---|---|---|---|---|
| **1. Code trap — standardization** | snsdata | `scale()` the interests, then `kmeans(.., k)` with `set.seed` | write the k-means pipeline from the raw data | **did it `scale()` before `kmeans`?** (no error if skipped — scale-dominance silently changes clusters); did it set a seed? |
| **2. Judgment — choosing K** | snsdata (WSS elbow) | read the elbow; pick a defensible K and say why | run several K and recommend the "best" K | is the AI's K supported by *your* elbow + domain sense, or a confident guess? (lecture: "no rule for K") |
| **3. Judgment — labeling** | snsdata (k-means) + protein (hierarchical) | read cluster centers; **hand-label** each + justify from the numbers | name/interpret each cluster | does each label match the **real centers/members**, or is it confabulated? (the S-9 authenticity hook; exam-Q4 skill) |

**Verification checklist (hand to students):** (a) **scale check** — was the data standardized before
clustering? (b) **K check** — is K justified by the elbow + purpose, not just asserted? (c) **label check** —
re-read the cluster's center values; does the name actually fit the high/low variables? (d) **reproducibility**
— was a seed set? **protein** (25 rows) is small enough to do the distance/dendrogram and labeling **fully by
hand** — the cleanest yardstick; **snsdata** is the at-scale case.

---

## 4. KEPT / MIGRATED / RETIRED / ADDED (vs. existing Seminar 10-11)
*Like M-2/M-3, the R code is **already clean, standard** — **no brittle-code migration.** The work is the AI
layer + a dataset-date relabel + variant hygiene.*

| Disposition | Item | Note |
|---|---|---|
| **KEPT** (faithfully) | distance/similarity; **standardization**; **k-means**; **hierarchical/Ward** + dendrogram (`dist → hclust(ward.D) → rect.hclust → cutree`); the **WSS elbow**; cluster interpretation | The classical core + the hand-verifiable yardsticks. |
| **KEPT** | the clean exercise code; `snsdata.csv` + `protein.csv` | Already current; no migration. |
| **MIGRATED** | *(none — code clean)*; **hygiene:** quarantine the stale **`Seminars 4-5_Clustering` InClass variants (May, old week-numbering)** | Labeling, not code rot. |
| **RETIRED** | The datasets' implied "current" framing | Relabel `snsdata` (~2006) / `protein` (1970s) as **dated historical snapshots** (S-8 / D-5). |
| **NOT needed** | regression-on-cluster-scores cleanup | **Verified absent from M-4** — no `regression`/`lm`/`predict`/"cluster score" in the clustering code or lecture; that retired bridge lived in **text mining (M-1)**, not here. |
| **ADDED** | The **AI-orchestration layer** (`ellmer` chat + `qwen2.5-coder`: direct `kmeans`/`hclust`/elbow code + interpret); the **hand-first → AI-verify** spine across the **three layers**; the **verification checklist + error TYPES** | The redesign's point; rehearses exam Q4. |
| **ADDED** | **Date stamps** on `snsdata`/`protein`; a note where **refreshed segmentation data** would plug in | Currency; re-collection is a separate task. |

---

## 5. Volatile content → `_currency/`
**Recommendation: a small pointer file `undergrad_bigdata/_currency/clustering_llm.md`** that **points to
`reg_llm_tools.md`** for the shared **model + `ellmer` chat interface + system_prompt** (single source — same
code model and connection as M-2/M-3), and holds **only** the M-4 **lab prompt templates** ("write a k-means
pipeline for this data with K = …"; "suggest the best number of clusters from this WSS/elbow"; "name and
interpret each cluster from these centers"). Matches the M-3 per-module pattern (`assocrules_llm.md`).
Registering it in `CURRENCY_LOG.md` is a Stage-2 governance diff for approval. *(Alternative: reference
`reg_llm_tools.md` directly — simpler, loses the per-module prompt home. Recommend the pointer file.)*

---

## 6. Dependency map
- **NO A2 dependency (confirmed).** A2 is the **regression** assignment; clustering is not part of it. No
  A2-consistency constraint (like M-3).
- **M-4 → final-exam Q4 (confirmed).** Q4 asks students to group terms into clusters and **label/justify**
  them, and to read a **WSS elbow** to pick K. The lab's judgment layers (2 + 3) rehearse it directly. *Keep
  lab data distinct from the exam:* Q4 clusters **review terms** (Hotel KUBS), the lab uses **snsdata/protein**
  — no overlap.
- **Retired regression-on-cluster-scores bridge — NOT in M-4 (verified).** No regression reference anywhere
  in the clustering source; the bridge was a **text-mining** construct (M-1), already retired there. No M-4
  cleanup needed.
- **No on-ramp needed** — the AI-collaboration pattern is already established (M-3 introduced it Wk 9; M-2
  Wk 10–11). M-4 reuses it with a light callback.

---

## 7. Open questions — need your decision before Stage 2
1. **Stage-2-A validation** — confirm we run real `qwen2.5-coder` on the clustering prompts in 2-A (as for
   M-2/M-3) and **re-weight the three layers** to what it actually does? *(Recommend yes — predictions can be
   wrong.)*
2. **Currency file** — small pointer file `clustering_llm.md` → `reg_llm_tools.md`, or direct reference?
   *(Recommend the pointer file.)*
3. **Cluster labels — sensitivity flag.** The classic snsdata segments (Lantz) include loaded names like
   "criminals" / "basket cases." For a mixed undergrad class, **recommend neutral descriptive labels**
   ("sports-focused," "appearance/shopping," "music/band," "faith," "at-risk/disengaged") rather than the
   loaded originals. Confirm the labeling convention.
4. **Hierarchical depth** — the exercise has two hclust cases (clustering the *variables* vs the *records*).
   *Recommend:* lead with **k-means on snsdata**; use **hierarchical + dendrogram on protein** (small,
   visual, hand-doable); keep the variable-vs-record distinction light. Confirm.
5. **Datasets** — snsdata for k-means-at-scale + labeling; protein for small/hierarchical/hand-work; relabel
   dates now, refresh later — confirm?
6. **Graded vs formative** — confirm the M-4 lab is **ungraded formative**, with **exam Q4** as the graded
   check?
7. **Hygiene** — confirm quarantining the stale May `Seminars 4-5_Clustering` variants (drafts in `02_working/`,
   originals untouched)?

---

## Stage-2 preview (NOT started)
On approval: **Stage 2-A** (validate qwen on clustering, build the hand-first → AI-verify lab + solution +
`clustering_llm.md`, real numbers from snsdata/protein); then **Stage 2-B** (lecture notes + spoken scripts,
English, locked playful tone) — each as `02_working/` drafts, hand-first → AI-verify throughout, B&W +
cross-platform standards applied.
