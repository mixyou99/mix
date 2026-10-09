# BUSS256 M6-R4A — External Verification Closure

## Scope and decision closure

This bounded pass verified only the four items already listed in `BUSS256_M6_R4A_DECISION_VERIFICATION_PACKET.md`. No M6-R4B, exercise, CSV, code, solution, task, or assessment-sensitive material was opened.

- **DECISION-R4A-01 = CLOSED.** The 2027 lecture target is 36 slides.
- **DECISION-R4A-02 = CLOSED.** An inadequately verified historical company/example claim is replaced by a clearly labeled, course-owned **ILLUSTRATIVE EXAMPLE**. Such an example makes no real-company claim, uses no unverified statistic, and implies no real-world outcome.

## Verification results

| ID | Original claim | Source slide | Proposed 2027 block | Sources checked and quality | Finding | Final status | Final wording / fallback | Content-spec action |
|---|---|---:|---|---|---|---|---|---|
| VX-R4A-01 | “In 2025, 30% of cell phone customers left when their contracts expire” for Korea Telecom. | 6 | Bridge/Churn | KT Corp. 2025 annual report filed with the U.S. SEC — primary company filing; no canonical-slide citation. | The filing discusses subscriber changes and early-termination-fee waivers following a 2025 security incident, but it does not support this company/year/30%-at-contract-expiry claim. No qualifying primary or high-quality secondary source was located for the exact claim. | **NOT-VERIFIED** | **ILLUSTRATIVE EXAMPLE:** “A telecommunications provider wants to identify customers whose contracts are nearing renewal and whose observed behavior may warrant a retention conversation.” | Replace the named company, statistic, and claimed outcome with the labeled generic example. |
| VX-R4A-02 | “Walmart’s MBA Center” as a named association-case framing. | 22 | Association | No qualifying primary or high-quality secondary source located for the exact name/framing; no canonical-slide citation. | The exact organization/name could not be confirmed to the required standard. | **NOT-VERIFIED** | **ILLUSTRATIVE EXAMPLE:** “A retailer examines which items tend to occur together in transaction records.” | Replace the named case with the labeled generic retailer example; retain the co-occurrence-is-not-causation limit. |
| VX-R4A-03 | Target behavioral-prediction case and its implied provenance. | 23 | Association | Charles Duhigg, “How Companies Learn Your Secrets,” *The New York Times Magazine* (2012) — high-quality contemporary reporting; Lindy Ryan, *The Visual Imperative* (2016), ScienceDirect chapter — academic secondary source that cautions that the commonly repeated teen anecdote is not established as fact. | Historical reporting supports a limited claim that Target’s analytics work was described as estimating pregnancy likelihood from purchasing behavior. The widely repeated individual anecdote and specific result details are not sufficiently established for unqualified classroom assertion. | **VERIFIED-WITH-QUALIFICATION** | “Historical 2012 reporting described Target’s use of purchase-history analytics to estimate pregnancy likelihood.” Present it as historical reporting, add a privacy/context limit, and do not use the individual anecdote, a prediction score, or a claimed business outcome. | Reword and limit the historical example; do not present it as a current fact or independently established anecdote. |
| VX-R4A-04 | “Cross-Industry Standard Process for Data Mining (Shearer, 2023)” attribution. | 44 | Workflow close | *CRISP-DM 1.0 Step-by-step Data Mining Guide* (Chapman, Clinton, Kerber, Khabaza, Reinartz, Shearer, and Wirth, 2000), archived by IBM — primary original guide; 2000 CRISP-DM publication notice — contemporaneous secondary record. | CRISP-DM 1.0 and its process framing are supported as 2000 material. The cited “Shearer, 2023” attribution is not supported; the relevant Shearer publication is from 2000. | **CONTRADICTED** | “CRISP-DM 1.0 (Chapman et al., 2000).” The workflow remains a process framework, not a guarantee of a decision or outcome. | Replace “Shearer, 2023” with the corrected 2000 attribution. |

## Sources consulted

- [KT Corporation, 2025 annual report (SEC filing)](https://www.sec.gov/Archives/edgar/data/892450/000162828026028096/kt-20251231.htm) — primary company filing; did not corroborate VX-R4A-01’s exact claim.
- [Charles Duhigg, “How Companies Learn Your Secrets,” *The New York Times Magazine* (2012)](https://www.nytimes.com/2012/02/19/magazine/shopping-habits.html) — high-quality contemporary reporting used only with the stated historical qualification.
- [Lindy Ryan, “Target,” *The Visual Imperative* (2016)](https://www.sciencedirect.com/science/article/pii/B9780128038444000042) — academic secondary discussion used to constrain the Target anecdote.
- [CRISP-DM 1.0 Step-by-step Data Mining Guide (2000), IBM archive](https://public.dhe.ibm.com/software/analytics/spss/documentation/modeler/14.2/es/CRISP-DM.pdf) — primary original guide.
- [CRISP-DM 1.0 proposal published (2000)](https://www.kdnuggets.com/news/2000/n17/17i.html) — contemporaneous publication record.

## Consistency and integrity check

| Check | Result |
|---|---|
| Verification items | Exactly 4. |
| Unresolved verification items | 0. |
| 36-slide target | Preserved. |
| Six-technique spine | Preserved. |
| M6-R1 overlap policy | Unchanged. |
| M6-R4B | HOLD remains unchanged. |
| `admission.csv` content used | No. |
| Exercise content used | No. |
| Assessment-sensitive material read | No. |
| Source mutations outside the content specification | 0. |
| Git staged | 0. |
| Commit | 0. |
| Push | 0. |

## Stop condition

This closure ends before deck build. A deck build requires a separate authorized instruction.
