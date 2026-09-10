# KMB689 — Clustering / DBSCAN Session · STRUCTURAL BLUEPRINT (Step 1, FINALIZED)

*Change log: Jul 5, 2026 — created (Option-A design). **Jul 5, 2026 — FINALIZED**: real DBSCAN executed on
snsdata; case switched to **customer segmentation** (SmartSearch dropped from this session); all [PENDING]
filled. **Blueprint only — NO Step-2 content authored.** Fifth technique session (Clustering, §3 slot ≈ Wk10),
following Regression, Visualization, Text, Association Rules. Fork asset: BUSS256 **M-4**. Korean body, English
figures (§8.9); two **75-min blocks** + 10-min break.*

> ## ✅ PATH RESOLVED — Option A executed (real DBSCAN on snsdata)
> The SmartSearch brief's DBSCAN was only a **binary dense/non-dense** preprocessing label (no clusters/profiles/
> noise/parameters — insufficient; see prior version), and TwoSentencePitch is **hierarchical, no noise trap,
> and overlaps the Text session**. Professor confirmed **Option A**: run **real DBSCAN on `snsdata.csv`**
> (27,276 teen SNS profiles × 36 interests — the M-4 segmentation dataset) with a **customer-segmentation**
> business frame that matches the data. **SmartSearch is dropped from this session** (it may serve an MIS/
> platform session elsewhere). This is a **fork**, not professor research — but the verification target is now a
> **real, reproducible DBSCAN result**, reading-only.

---

## A. THE REAL DBSCAN RESULT (executed — the verification target)
**Data:** `snsdata.csv`, 27,276 US teen SNS profiles × **36 interest keywords** (basketball…drugs), **standardized**
(z-scored). **Method:** DBSCAN (density-based), `scikit-learn`, ball_tree.
**Canonical parameters (tuned for educational clarity): epsilon = 3.0, minPts = 25.**

| Cluster | n | share | Defining interests (standardized z of centroid) | Honest read |
|---|---|---|---|---|
| **C0** | 19,241 | **70.5%** | *no high interest* — all z ≈ 0 (blonde −0.03, tennis −0.09 …) | **diffuse "mainstream" residual — NOT a real interest segment** |
| **C1** | 258 | 0.9% | **abercrombie (+3.35), hollister (+1.30)**, shopping | fashion / brand-shopping pocket |
| **C2** | 87 | 0.3% | **bible (+4.67)**, god, jesus, church | faith / religion pocket |
| **C3** | 294 | 1.1% | **marching (+3.26), band (+1.51)** | marching-band pocket |
| **C4** | 47 | 0.2% | **marching (+6.66), band (+1.90)** | marching-band pocket **(near-duplicate of C3)** |
| **Noise** | **7,349** | **26.9%** | — (belongs to no cluster) | **>1 in 4 teens are unclustered** |

**What the real data honestly yields (reported per the professor's ask):** DBSCAN on 36 sparse interest counts
does **not** produce a clean handful of balanced segments — it produces **one huge diffuse core (70%) + a few
tiny tight interest pockets + ~27% noise.** PCA(10) pre-reduction collapsed it further (one blob), so the
**raw-standardized** result above is the best educationally-usable one. **This structure is a feature, not a
failure — it is exactly what makes the traps real** (see §4).
**Parameter sensitivity (for the secondary trap):** loosening to **eps=2.5, minPts=15 → 8 clusters, 34.0%
noise**, and a **new "drugs/risk" pocket** (drugs z high) appears that is **absent at eps=3.0.** Different
parameters → different segments and different noise. *(Both runs are real.)*

**Business frame (matches the data):** a **marketer at a social platform / consumer brand** wants targeted
campaigns to **teen interest segments**. An analyst (AI) ran the segmentation and returned "clean customer
segments." **Decision:** which segments to target (and how), **and what to do about the 27% unclustered
customers and the 70% undifferentiated majority** the segmentation doesn't really capture.

> **⚠ Handling notes:** `snsdata` is a **~2006 public teaching dataset** (label "2006 snapshot"). Neutral,
> descriptive cluster labels only (no loaded names — M-4 convention). This is a **fork** (not professor research);
> the segmentation is a real DBSCAN run, values reproducible.

---

## 0. WHAT CARRIES OVER FROM THE PRIOR TEMPLATE (by reference)
- **Two-block shape**; **Block-2 arc** (case → staged AI output → instructor-demo → guided student-verify →
  discussion → close); **creed** with 기준 = **the cluster's real profile + the noise share**; **reading-only**
  (students read the DBSCAN result + AI interpretation; no one runs it); **English figures, Korean body,
  parenthetical term-matching (§8.9); six-material template.**

## 0b. DIFFERENTIATION FROM THE TEXT SESSION (explicit — they must not feel like the same trap)
| | Text (LDA) | Clustering (DBSCAN) |
|---|---|---|
| Method | probabilistic **topics** over full subtitle text | **density**-based grouping of standardized interest vectors |
| The distinctive trap | over-reading a **topic name** from top words | **NOISE suppression** — hiding that 27% belong to **no** cluster (LDA has no "noise" concept) |
| Object read | topic = word-distribution | cluster = **profile of defining variables** + **the unclustered remainder** |
| Shared but re-cast | post-hoc naming appears in both — here it targets a **diffuse 70% blob** + **duplicate clusters**, not a word-topic |
**→ The NOISE trap is structurally unique to DBSCAN and is this session's signature (no prior session has it).**

## 1. FIRST BLOCK — 75 min · Concept lecture ("군집은 밀도로 묶은 점 — 그리고 '어디에도 안 든' 점을 보라")
**Objectives:** clustering intuition (unsupervised grouping by similarity/distance); **DBSCAN(밀도 기반)** —
density groups, **핵심(core)·경계(border)·잡음(noise)** points, **cluster count not preset**, driven by
**epsilon(반경) + minPts**; **read a cluster result** (size, **profile = defining variables**, **noise share**);
a cluster's name is a **human post-hoc interpretation.** Reading-only.

| # | Sub-topic | min | Fork / new | Read |
|---|---|---|---|---|
| 1.1 | Hook + **"분석을 감독하라" recap** — 기준 = **cluster profile + noise share** | 10 | fork prior creed | — |
| 1.2 | **군집분석 직관 + 군집 결과 읽기** — 유사도/거리로 묶기(비지도); a cluster = **size + profile(어떤 변수가 높은가 = 중심값)**; "컴퓨터가 비슷한 점을 묶고, **이름은 사람이 나중에.**" | 20 | **fork M-4** (k-means/계층 개념·프로파일 읽기, reading-only) | a cluster's size + profile |
| 1.3 | **DBSCAN = 밀도 기반 — 핵심·경계·잡음** *(NEW; M-4는 k-평균/계층)* — 밀도로 묶어 **군집 개수 미리 안 정함**; **잡음점(noise) = 어느 군집에도 안 속하는 점**; **epsilon·minPts** 가 결과를 좌우. "**얼마나 많은 데이터가 잡음인가**"를 반드시 본다 | 15 | **NEW** (DBSCAN 고유) | a DBSCAN result (clusters + **noise**) |
| 1.4 | **이 사례가 요구하는 판단** — (가) **잡음 무시**: 큰 비중이 무군집인데 AI가 "깔끔한 세분화"로 과장 안 했나(핵심); (나) **사후 의미부여**: AI 이름이 실제 프로파일을 대표하나 — 특히 **거대한 diffuse 군집**을 진짜 세그먼트로 과잉 명명, 또는 **중복 군집**을 다른 세그먼트로; (다) **파라미터 임의성**: eps·minPts 바꾸면 군집·잡음이 달라짐 | 15 | **NEW** framing | — |
| 1.5 | **군집 검증 체크리스트 — 사례로 가는 다리** | 15 | **NEW** — the spine | — |

**[슬라이드] 군집 검증 5문:** ① 각 군집의 **실제 프로파일(정의 변수)** 은? ② **얼마나 많은 점이 잡음(무군집)** 인가 —
AI가 숨겼나? ③ AI **이름이 프로파일을 대표**하나(거대 diffuse 블록·중복 군집 과잉명명 아닌가)? ④ **파라미터
(eps·minPts)** 는 왜 이 값 — 바꾸면 달라지나? ⑤ 결론이 인과인가 상관인가. *(①②③ 핵심; ④⑤ 토론.)*
**Block-1 total = 10+20+15+15+15 = 75 ✓.**

## 2. SECOND BLOCK — 75 min · 고객 세분화 사례 + AI-검증 활동
**Delivery:** instructor-demo → guided student-verify (worksheet) → discussion → close. **No clustering-running.**

| # | Segment | min | Mode |
|---|---|---|---|
| 2.1 | **Case setup** — 마케터가 10대 관심사 세그먼트에 타깃 캠페인. Distribute case handout + **[AI 군집 해석 Exhibit]** (real DBSCAN result) + **[English cluster scatter, noise visible]** | 15 | instructor-led |
| 2.2 | **The AI's confident cluster interpretation (staged)** — AI가 5개 군집을 **"5개의 깔끔한 고객 세그먼트"** 로 제시: C0을 **"주류 음악·소셜 세그먼트(70%)"** 로 명명, C3·C4를 **서로 다른 두 세그먼트**로, 그리고 **26.9% 잡음을 언급하지 않음.** **Instructor-demo the verify aloud:** hold the standard = real profiles + noise share | 20 | instructor-demo → transition |
| 2.3 | **Guided student-verify** (pairs + worksheet) — **잡음 비중 확인**(무군집 27% 어디 갔나); AI 이름을 **실제 프로파일과 대조**(C0은 정의 관심사 없음 = 진짜 세그먼트 아님; C3=C4 중복); 파라미터 질문. companion 표 불필요 — 프로파일·잡음이 정직하고 AI의 '읽기'가 검증 대상 | 20 | guided student-verify |
| 2.4 | **Structured discussion** — 잡음(27%)·거대블록(70%) 고객을 어떻게? 어떤 pocket을 타깃? 파라미터를 바꾸면(드럭스 pocket 등장) 전략이 달라지나? 세분화로 인과·행동을 단정할 수 있나 | 15 | discussion |
| 2.5 | **Close** — *"군집은 밀도로 묶은 점, 이름은 사람의 해석 — 그리고 **어디에도 안 든 점(잡음)** 을 보라. AI의 '깔끔한 세분화'는 검증의 시작이지 끝이 아니다."* | 5 | close |
**Block-2 total = 15+20+20+15+5 = 75 ✓.**

## 3. THE BUSINESS DECISION
A marketer must decide **which teen interest-segments to target and how** (C1 fashion → clothing-brand campaign;
C2 faith → community/event; C3 band → music promo) — **and crucially what to do about the 27% noise (unreachable
by this segmentation) and the 70% diffuse majority (no clear interest hook).** If the AI hides the noise and
over-names the diffuse blob, the marketer over-estimates reach and mis-allocates budget. **Verifying the
segmentation IS verifying the campaign plan's foundation.** *(DBSCAN mechanics intuition-only; the hands-on verify
is interpretation + noise.)*

## 4. THE TRAP FAMILY — grounded in the real run
- **PRIMARY — 잡음 억제 (noise suppression) · DBSCAN-고유:** the real result has **26.9% noise (7,349 teens in NO
  cluster).** The AI presents "5 clean segments" and **omits the noise** → overstates coverage/actionability.
  Catch = **read the noise share.** *No prior session has this trap.* **Real number: 26.9%.**
- **CO-PRIMARY — 사후 의미부여 과잉 (post-hoc naming), with two real targets:** (1) **C0 (70%) has no defining
  interest** (all z≈0) — naming it a real "Mainstream/Music segment" over-reads a **diffuse residual**; honest
  read = "not a segment, just everyone who didn't fall into a pocket." (2) **C3 & C4 are both marching-band** —
  naming them two distinct segments is a density-split **duplicate.** Catch = **check names against real profiles.**
  *Concept-based, no companion table (profile is the honest object, the name is the lie) — like Text/Wk13.*
- **SECONDARY — 파라미터 임의성:** **eps 3.0/minPts 25 → 5 clusters, 26.9% noise** vs **eps 2.5/minPts 15 → 8
  clusters, 34.0% noise + a new "drugs/risk" pocket.** Different parameters → different story. *(Both real.)*
- **Held for discussion:** 세분화→인과·행동 단정 금지(비지도, 관찰); 대표성(2006 US teens).

## 5. MATERIALS LIST (Step 2 — Korean body, English figures) — all now BUILDABLE
| # | Material | Note |
|---|---|---|
| 1 | **Lecture notes (KR)** | Forks **M-4** (profile-reading); **NEW** DBSCAN density/core/border/**noise** + parameters. Reading-only. |
| 2 | **Case handout (KR)** | Marketer segmentation setup + the target/noise decision; opens with fork/2006/observational caveats. No trap pre-reveal. |
| 3 | **[AI 군집 해석 Exhibit] (KR body + English cluster table)** — the AI-produced analysis | **CORE = a cluster table** (cluster · size · **English defining interests** · AI's confident name · narrative), over the **real §A result**, with the AI **omitting the 26.9% noise** and **over-naming C0** + **treating C3/C4 as distinct**. Profiles/noise honest; names/narrative lie. **✅ Buildable now** (real run done). Noise share revealed at verify (answer-key style, à la Text's coder-relevance). |
| 4 | **Verification worksheet (KR)** | Checks map to §1.5: profiles → **noise-share reveal** → naming (C0 blob, C3/C4 dup) → parameters → decide. |
| 5 | **Discussion prompts (KR)** | Noise/blob customers; targeting; parameter-sensitivity; no-causal-from-segmentation. |
| 6 | **Instructor demo script (KR)** | 2.2 walk; names the **noise-omission** + C0 over-naming; lure line **"자신 있는 군집 이름·개수에 속지 말고, 실제 프로파일과 잡음으로 돌아가라."** Worksheet↔checklist number line. |

**Rendered figure — CONFIRMED (re-scaled Jul 5):** `MBA_S10_figures/figC_dbscan_clusters_EN.png` (rendered, English).
Axes are **fit to the cluster structure** (X≈[−2.0, 1.5], Y≈[−2.6, 3.0]); **3,852 extreme noise points are cropped
for readability and annotated on-plot** ("...cropped, still counted in the 26.9%"), so the **noise share stays
honest** (the legend states the true **26.9%**, counting all noise incl. cropped). Cropping choice = **(b) crop +
caption note** — cleaner than letting a handful of far outliers compress everything into a corner. After
re-scaling, the pockets are **distinguishable by region** (C1 fashion = bottom, C2 faith = top, C3 band = upper-
left; **C4 overlaps C3**, honestly showing the duplicate), though they **still overlap the grey C0 majority** — an
inherent limit of projecting a 36-dim result to 2D.
> **PRIMARY verification evidence = the cluster-profile TABLE (§A)** — each cluster's **defining interests + size +
> the 26.9% noise** — this is what students check the AI's names against. **The scatter is a SUPPORTING "big
> picture"** (amorphous 70% majority + tiny pockets + large noise), **not** the sole verification object.
> **Step-2 note (lecture + demo must state):** the scatter is a **2D projection of a 36-dim clustering**, so
> visual overlap in 2D ≠ "same cluster" — the **profiles** decide.
Wk9 standard met (axis labels/units, source line, legend firm background). **Net: 6 materials + 1 figure.**

## 6. TIME RECONCILIATION
- Block 1 = 10+20+15+15+15 = **75 ✓** · Block 2 = 15+20+20+15+5 = **75 ✓** · +10 break = **2h40m ✓.**
- **Must-hit core = noise + naming (2.2–2.3).** If 2.4 runs long, compress close, push parameters → discussion.
  **1.2 buffer**; **1.3 (DBSCAN/noise) + 1.4 cannot be cut.**

---

## Open checks for you (before Step 2)
1. **Business frame:** confirm the **marketer / teen-interest segmentation** frame (SmartSearch dropped from this
   session — OK?). 
2. **Canonical parameters:** confirm **eps=3.0, minPts=25 (5 clusters, 26.9% noise)** as the exhibit's result,
   with **eps=2.5/minPts=15 (8 clusters, 34%)** as the parameter-sensitivity contrast. *(Recommend yes.)*
3. **Trap focus:** **noise suppression = primary** (distinctive), post-hoc naming (C0 blob + C3/C4 dup) co-primary,
   parameters secondary — agreed?
4. **Cluster labels:** neutral descriptive (fashion/brands, faith, marching-band) per M-4 convention — confirm.
5. **Figure:** keep the noise-visible scatter (recommended) + Step-2 color polish; add nothing else? 
6. **Week slot:** confirm ≈ Wk10 vs registrar calendar.

*Blueprint FINALIZED against the real DBSCAN run. Verification exhibit + figure are now buildable. On approval,
Step 2 authors the six Korean materials in §5. STOP for review.*
