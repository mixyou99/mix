# Lecture Note — W13-2: Labeling clusters, and catching the AI's names

*Change log: Jun 18, 2026 — created (Stage 2-B, note 4 of 4). Lecture-note DRAFT for professor review.
Doubles toward final-exam Q4. Markdown only (Production Policy).*

**Source-file map (production):** modernizes the "cluster interpretation" close of `Seminar 10-11
Clustering`. Data = **snsdata** (k-means clusters + labels) + **protein** (regions). Pairs with
`M-4_clustering_lab.md` Parts E–F. The labeling/justifying skill is **exactly final-exam Q4**. AI step →
`_currency/clustering_llm.md` (code model); Ollama cues → `M-1_ollama_setup_guide.md`. **Model note:** AI
behavior is a *pattern to verify*, not a fixed output.

---

## Learning objectives
By the end of this session you can:
1. **Label a cluster** from its center values and **justify** the name from the data. → **data literacy** (the exam-Q4 skill).
2. **Verify the AI's cluster labels** against the real centers — catching misreads and made-up names. → **verification**.
3. Turn verified, labeled clusters into a **segmentation decision**. → **data literacy**.

## The big idea (study-from explanation)
A cluster is just a numbered group until you give it a **meaning.** That's the payoff of the whole module: reading a cluster's **center** — which interests are high, which are low — and giving it a short, honest **name** that the numbers support. "Cluster 3" means nothing to a marketer; "the appearance/shopping segment" is something they can act on.

The rule for a good label is simple: **it must be defensible from the centers.** If you call a group "sports-focused," its center had better be high on basketball, football, soccer. If you can't point to the numbers that justify the name, the name is fiction. (We use **neutral, descriptive** labels — what the data shows — not loaded or judgmental ones.)

This is also the **hardest thing for the AI**, and the reason matters. Writing the clustering *code* is formulaic — the AI's good at it. But *naming* a cluster is **judgment**: there's no single right answer, and the AI fills that uncertainty with **confident, plausible-sounding names that may not match the data.** Your defense is the same as always — read the real centers yourself.

## Worked example (real — the five snsdata segments, labeled from centers)
Reading the actual k-means centers (K = 5), here are the groups and **neutral labels justified by their top interests**:

| Cluster | n | Top interests (high center) | Neutral label |
|---|---|---|---|
| 0 | 17,680 | nothing strongly above average | **low-engagement majority** (the baseline) |
| 1 | 1,184 | kissed, sex, drugs, drunk | **at-risk / disengaged** |
| 2 | 758 | **marching, band**, music, rock | **music / band** |
| 3 | 1,155 | abercrombie, hollister, shopping, mall | **appearance / shopping** |
| 4 | 6,499 | church, god, jesus + shopping, dance | **faith / social** |

Each name points back to specific high center values — that's what makes it defensible. *(Protein works the same way: a group high on fruit/veg + fish → "Mediterranean.")*

## The AI step, then verify — the labeling catch
Direct the AI to name the clusters, then check every label against the centers:
```r
chat$chat("Here are the cluster centers (standardized) for each cluster: <paste>. Give each a short, neutral, descriptive label justified by its highest-value variables.")   # run on a machine with Ollama
```
**What we found when we ran this — two real ways it failed:**
1. **It misread the centers.** It labeled the **marching-band** cluster *"Sports Enthusiast"* — but marching *band* is music, not sports. It called the abercrombie/hollister cluster *"E-commerce Savvy"* — but that's fashion/appearance, not e-commerce. The names *sound* fine; they just don't match the high variables.
2. **It made names up wholesale.** In one run it invented a whole set — *"Extroverted," "Reading Fanatic," "Artisan,"* and so on — with **no link to the actual centers at all** (even though its own code said to inspect them). Pure confabulation in a confident voice.

The catch is the same move both times: **read the cluster's real high interests, and ask "does this name fit?"** If the center is high on marching and band, "Sports Enthusiast" is wrong, no matter how confidently it's stated. This — labeling and *justifying from the data* — is exactly what the final exam asks you to do.

## From verified clusters to a decision
Use only the labels you **verified.** A segmentation recommendation: e.g., the **appearance/shopping** segment (high on fashion brands and the mall) is a natural target for a clothing-brand campaign on social channels; the **music/band** segment for event or music promotions. Name the segment, **cite its center values**, pick a concrete message/channel — and never build a campaign on a label you didn't check.

## When / how to use it
- **Label** a cluster from its **centers**; the name must be **justified by the high/low variables.**
- Keep labels **neutral and descriptive** — what the data shows, not a value judgment.
- **Verify every AI label** against the real centers before you use it.

## Common mistakes / how to verify
- **Accepting a plausible-sounding AI label.** "Sports Enthusiast" for a band cluster *sounds* fine — read the centers; it's wrong.
- **Believing invented names.** The AI may produce a tidy label set with no link to the data. Check each against the centers.
- **Labeling without justification.** If you can't name the high variables behind a label, you can't defend it (and the exam won't accept it).

## Key takeaways
- A cluster means nothing until you **label it from its centers** — and the label must be **justified by the data.**
- The AI is good at the **code** and bad at the **names** — it misreads centers ("Sports Enthusiast" for a band group) and invents labels outright. Catch both by **reading the real centers.**
- This labeling-and-justifying skill is **final-exam Q4.** And the module's lesson is the course's: **the machine executes; you direct, verify, and decide.**
