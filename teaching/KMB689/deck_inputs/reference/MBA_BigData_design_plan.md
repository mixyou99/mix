# KMB689 (MBA Big Data) — Design Plan (Stage 2, PLANNING — no case/session authoring)

*Change log: **R4 — Jul 18, 2026: Wk6 재정의 — GA3 해소.** 진단: Wk6 정의의 두 요소가 모두 이미 이관됨
— **"Tools" → Wk3·Wk4**(§3 각주: 두 도구 주차를 Wk3+Wk4로 재배치), **"data-analytic thinking" → Wk4**
(P-F Ch1 제목이 문자 그대로 *"Introduction: Data-Analytic Thinking"*, Wk4가 Ch1–2 소화). **P-F 후반부(Ch7·8·11·13)가
전 완결본에 0건**이라 Wk6이 소유 — **Wk6 = "좋은 분석이란 무엇인가·비즈니스 가치"**(Ch7 좋은 모델이란 · Ch11 분석
공학 · Ch13 전략 일부). 시연 = **두 분석 대비**(비용 비대칭 축). **lift curve 제외**(Wk13 향상도 충돌) · **기저율
제외**(Wk11 소유, 비용 비대칭으로 대체). §3 Wk6 행 갱신 + **§8.11로 RE-LOCK**. **완결본 불변** — Wk1 로드맵
*"데이터분석적 사고"* 가 P-F Ch7·11(*"Decision Analytic Thinking"*)을 덮어 정합, Wk5 *"Wk6 예고 금지"* 는 논지가
"여섯 기법 직진"이라 유효. Wk4(Ch1–2 한정) 불변. — **R3 — Jul 18, 2026: Wk2 정의에 Wk4 경계 명시.** 진단 결과 Wk4가 "데이터과학 what"을 이미 수행하나
(강의노트 A.1 소제목 = "데이터과학이란 무엇인가"), **Wk4 완결본 9자료에 "빅데이터"·"3V" 0건**. **용어 축 분할**로
해소 — **Wk2 = 빅데이터·비즈니스 애널리틱스(현상·산업 층위) / Wk4 = 데이터과학(개념틀)**. Wk2를 출처로 참조하는
하류 문장 **0건**이고 Wk1이 배포한 예고가 이미 "빅데이터·비즈니스 애널리틱스"로 정합하므로, **§3 표 경계 한 줄로
충분**(§8.10식 전면 재정의 불필요). **Wk3·Wk4·Wk5·Wk8–13 자료 불변.** — **R2 — Jul 16, 2026: Wk1 정의에서 "STAR 스파인 창시"를 제거.** 진단 결과 Wk3가 STAR를 실제로
도입하고 있고(강의노트 A.2 소제목 = "STAR 프레임의 도입"; "이 강의 전체를 관통하는 프레임이 STAR다…4단계 절차다"로
처음 정의), 하류 자료(Wk4·Wk5 선수내용)가 STAR 출처를 **Wk3**로 참조하며, **"(Wk1에서 배운 STAR)" 표현이 0건**임을
확인. Wk3는 **R1.2 완결·잠금** 상태이므로 Wk1을 재정의하는 편이 비용이 낮다(professor-agreed). **Wk1 = 오리엔테이션
+ AI 감독 철학·동기 + 16주 로드맵** (STAR 메커니즘은 Wk3 소유). §3 Wk1 행 갱신 + **§8.10으로 RE-LOCK**. — **R1 — Jul 14, 2026: Wk4 = 데이터과학 개념 지도 (Provost-Fawcett Ch 1–2) 로 확정.** Wk3 확정 과정에서
Wk3가 R-읽기 도구 전체(문법 4요소 + 3원칙 + STAR)를 한 세션에 담아냈으므로, 기존 **"Read-R intro II"** 노선에서
변경. **새 구조: Wk3 = R 읽기 도구 / Wk4 = 개념 지도.** Wk4 미니 함정 = **서술 vs 예측 혼동**(6개 기법 함정과
비중복). §8.1은 SUPERSEDED 처리 후 **§8.1-R1로 RE-LOCK**; §3 표 Wk3–4 행과 §3 "reading-level R" 줄 갱신. — Jun 18,
2026 — created. Design plan for the MBA Big Data redesign toward **minimize-R + theory/cases
+ AI-verification-as-star**, read from the real source (Dropbox connector; tutorial PDF + `.r` files read).
**No case content or sessions authored.** Locked direction: R = **reading-only** (90%+ zero coding); cases sourced
**professor-research → web-supplement → HBR-only-if-licensed**.*

---

## 1. CURRENCY CHECK — resolved (§E flag)
- **F-9 — CONFIRMED present.** `Seminar 3_R_Tutorial_DataFrame.pdf` has the **identical broken `<-` glyph**
  (`a < ̶ seq(1,6)`, `b < ̶ 1:12`, `dim(b) < ̶ c(3,4)`, `id < ̶ c('C001'…)`, `sales < ̶ data.frame(…)`,
  `hello < ̶ function(x)…`) **+ smart quotes** — it is **literally the same tutorial** as BUSS256 Seminar-3 /
  BUSS215 Tutorial-3. **Fix = regenerate ASCII** (the known BUSS256 M-6 fix). *(The technique `.r` files — LRM,
  Seminar-5 — are **clean ASCII**, verified.)* **Lands in the build** (like BUSS215).
- **F-20 — install guide NOT located.** Seminar 3 has tutorials + exercises but **no dedicated R/RStudio install
  doc**; it may be in Seminar 4, the course intro, or done in-class. **Flag to find** — if one exists it likely
  carries `rstudio.com` → apply `posit.co/download/rstudio-desktop/`. *(Under reading-only R, install matters
  less — but if students install at all, fix it.)*
- **Datasets:** `MobileApp.csv` (2017), association mba/groceries lineage — **dated historical snapshots** (F-13
  stance). Reuse as case data.

## 2. REVISABILITY — per-artifact (revise / **reframe** / fresh)
**The key difference from BUSS215: this is a DIRECTION CHANGE (hands-on lab → minimize-R/theory-case/verify), so
most calls are REFRAME, not currency-patch.** Honest per-artifact:

| Artifact | Call | Reason |
|---|---|---|
| Seminar 3 R tutorials (DataFrame + basics PDFs) | **REFRAME + currency** | Good content, but (a) **F-9 regenerate ASCII**, and (b) **compress to reading-level** — the "recognize a variable / data frame / model / output" intro, **not** hands-on writing. |
| Technique `.r` exercises (LRM, clustering, association, classification, Seminar-5) | **REFRAME** | Clean ASCII; **keep as the AI-written R students READ and VERIFY**, not write. The lab becomes "read this output, is it right?" |
| **LRM / regression** (deck + `MobileApp.csv` model) | **REVISE→FORK (direct)** | The model **is BUSS256 M-2** (same `-log(Rank)`, `log(x+1)`, category dummies). Fork the concept + reframe the lab into read-and-verify + a regression case. |
| Technique lecture decks (regression, clustering, association, **classification**, viz; 2025-maintained) | **REFRAME** | Concept content is current/good → **reframe delivery** to concept + **case** + **verify-demo**. The decks' theory survives; the case + verify parts are **new**. |
| **Classification** ("Extra" lecture + `.r`) | **REFRAME (keep)** | MBA-relevant (churn/fraud/credit). No BUSS256 equivalent, but the same verify logic applies. Keep as a technique session. |
| Business **cases** | **FRESH** | None exist (the textbook supplies generic examples only). Author later from professor research / web. |
| **AI-verify thread** | **FRESH** | The current course has none — this is the new spine. |
| Provost-Fawcett textbook framing | **REUSE** | The data-analytic-thinking lens is the perfect MBA concept anchor — lean on it. |

## 3. THE 16-WEEK RE-STRUCTURE (UPDATED — decisions folded in)
**Session pattern for technique weeks:** **concept/theory (Provost-Fawcett + BUSS256 fork) → business CASE
(assigned, from CASE_LOG) → "direct-and-verify-the-AI" demo (read R output, verify, decide).**

### Class-time structure — TWO 75-minute blocks (locked; each session maps to this)
KMB689 meets **once a week, 2h40m** = **two 75-min blocks** (first-half 75 + 10-min break + second-half 75). The
professor's established rhythm: **first half = lecture**; **second half = lecture on content-heavy days, else
~70 min of student presentation / discussion / hands-on activity.** Each technique session maps to it:
- **First 75 min — concept lecture:** Provost-Fawcett framing + the BUSS256 fork asset (M-1/M-2/M-3/M-4/M-5).
- **Second 75 min — business case + AI-verification activity:** the case analysis and the *"read the AI's
  analysis → verify against business logic → decide"* activity. **This activity is the natural successor to the
  professor's existing discussion/presentation slot** — same format he already runs, just with the content now
  being *supervise-and-verify the AI* (aligns with §5's mix: instructor-demo early → light guided student-verify
  later). **Not a new imposition — a reframe of a slot that already exists.**
- **Authoring implication:** every session produces material for **BOTH blocks** — (a) first-half lecture material,
  and (b) second-half activity material (*what to show students, what to have them judge, how to run the
  discussion*). Content-heavy days may run lecture into the second half (as the professor already does).

### Data-Management compression judgment — VERIFIED FEASIBLE (2 wk → 1 wk)
*Read the real KMB689 materials (Seminars 5–6):* **DM I** = hands-on **data-frame manipulation** (`data.frame`,
`rbind`/`cbind`, a derived `Final_Price` column, `subset`/filter by mean); **DM II** = **import + descriptive
analysis** on `admission.csv` (`read.csv`, `ifelse`-derived vars, filtering, proportions — the same admission
exercise as BUSS215 DM3). **Judgment:** under the **reading-only** direction, **DM I's core (writing manipulation
code) is exactly what drops**, and the *structure-recognition* it also teaches is **already covered by the
Wk3 Read-R session** *(§8.1-R1, Jul 14 2026 — was "the 2-session Read-R intro")*. What genuinely survives is **DM II's descriptive-reading skill** — *read a summary/
correlation, spot data-quality problems* — which is **~1 session** as reading (not writing). **So DM compresses
to ONE "understanding & reading data" week; the freed week funds the Text session.** *(Honest note: the dropped
content is real hands-on manipulation, not padding — this compression is a genuine consequence of minimize-R, not
forced.)*

| Wk | Session | Shape | R level | Assigned primary case | Fork / reframe / new |
|---|---|---|---|---|---|
| 1 | Course intro + **AI-supervision teaching philosophy** | concept | none | — | Orientation (assessment · attendance · **16-week roadmap**) + supervision philosophy/motivation (why an MBA supervises rather than codes; forks BUSS256 third-literacy/on-ramp). **STAR-frame mechanism is introduced in Wk3, NOT here.** *(§8.10 RE-LOCK, Jul 16 2026 — prior wording "NEW spine (STAR 스파인 창시)" SUPERSEDED)* |
| 2 | Big Data & Business Analytics (why/what) | concept + mini-case | none | — | reframe deck; **R omitted**. **현상·산업 층위** — 빅데이터가 왜 생겼나(디지털화·센서·모바일, **AI 이전**) · 5V · BA = *조직이 데이터를 의사결정으로 바꾸는 **활동***. **데이터과학 개념틀(P-F 정의 · DDD · 여섯 과제 유형 · 지도/비지도 · 서술/예측)은 Wk4 소유 — Wk2에서 정의하지 않는다.** 미니 함정 **없음**(R 획득 이전). 미니 케이스 = **신규 저작 가상 기업**(`cases/` 32건은 전부 Methods·AI 감독 앵글 절 보유 → 부적합) *(§3 경계 명시, Jul 18 2026)* |
| **3** | **R 읽기 도구** (Read-R intro — *complete in one session*) | guided read-along | **reading-only** | — | **§8.1-R1 RE-LOCKED**; 최소 문법 4요소(할당·데이터프레임·파이프·함수호출) + 결과 읽기 3원칙(축·표본·불확실성) + STAR 프레임. 미니 함정 = **축 절단 · 지표 부적합** (repurposes old Software-Tools week) |
| **4** | **데이터과학 개념 지도** (Provost-Fawcett Ch 1–2) + **6개 기법 세션 예고편** | concept + 예고 | reading-only | — | **§8.1-R1 RE-LOCKED** (was "Read-R intro II"); 미니 함정 = **서술(descriptive) vs 예측(predictive) 혼동** — 관측 범위 밖 외삽. 6개 기법 함정과 **비중복** (repurposes old Tools-in-BA week) |
| **5** | **Data Management → "understanding & reading data"** *(COMPRESSED 2→1)* | concept + read summaries | minimal (read) | — | reframe DM I/II → *read a summary/correlation, spot problems*; **no writing** |
| 6 | **좋은 분석이란 무엇인가 — 모델의 기준·비즈니스 가치** (Provost-Fawcett **Ch 7·11·13**) | concept | **none** | — | **§8.11 RE-LOCKED (Jul 18 2026)**. "Tools / data-analytic thinking" **SUPERSEDED** — 두 요소 모두 이관됨(Tools→Wk3·4, data-analytic thinking=P-F Ch1→Wk4). Wk6 = P-F **후반부**(Ch7 좋은 모델이란 · Ch11 분석 공학 · Ch13 전략 일부). 시연 = **두 분석 대비**(비용 비대칭 축). **lift curve 제외**(Wk13 향상도 충돌) · **기저율 제외**(Wk11 소유). 함정 없음. 완결본 불변 |
| 7 | Review / **Midterm** | — | — | — | judgment exam (§6) |
| 8 | **Regression / causal inference** | concept + case + verify | read output | **AIAdReach** (+ O2OHygieneSignal) | fork BUSS256 M-2 (`MobileApp.csv`); **experiment cases (WebtoonParadox, SerialContentRS, WebtoonRecs, WebtoonReEntry) live here** as *"why experiments beat correlation"* |
| 9 | **Visualization** | concept + case + critique | read charts | **AttentionDisplacement** (+ GDPRAppTrade, OpenDartBarriers) | fork M-5 viz-judgment; *read/critique a dashboard*; near-zero R |
| 10 | **Clustering** | concept + case + verify | read output | **SmartSearch** (DBSCAN) (+ TwoSentencePitch) | fork BUSS256 M-4 |
| 11 | **Classification** (MBA-only technique, kept) | concept + case + verify | read output | **AirbnbSuccessSignals** (logistic) (+ AppPortfolio) | reframe MBA deck; verify thread NEW |
| **12** | **Text Analysis** *(NEW session — the freed DM week)* | concept + case + verify | read output | **WhenMoreIsLess** (LDA) (+ NoveltyDial, LiveCommerceAttention, TwoSentencePitch) | **fork BUSS256 M-1** for concept scaffolding |
| 13 | **Association rules** | concept + case + verify | read output | **BUSS256 M-3 fork (`mba.csv`)** — no professor case | fork BUSS256 M-3 |
| 14 | Synthesis / **AI-supervision capstone** | case + verify | read | **PhantomProgress, InvoiceAutopilot, AttentionDisplacement** | NEW — the spine made whole |
| 15 | Review | — | — | — | — |
| 16 | **Final** | — | — | — | judgment exam (§6) |

- **R omitted entirely:** Wk1, 2, 6 (+ review weeks) — pure concept/decision/case.
- **Reading-level R kept:** Wk3 (R-reading toolkit), Wk4 (concept map — R output *previewed*, not taught),
  5 (read data), 8–14 (read the AI's analysis output to verify). *(Per §8.1-R1.)*
- **ReviewShield is NOT in this structure** (MBA-MIS-course only, per decision).
- **Week-budget reconciliation (fits 16):** **Wk3 (R 읽기 도구) + Wk4 (개념 지도)** repurpose the two existing tool weeks
  *(week budget unchanged — the two weeks are still consumed, only their content changed; §8.1-R1, Jul 14 2026)*;
  (Software Tools + Tools-in-BA); **DM 2→1 frees one week → funds the new Text session (Wk12)**; midterm + final
  unchanged. *(Exact week numbers to confirm against the registrar calendar — verified anchors: midterm mid-course,
  **association ~Wk14 / final Wk16** in the real syllabus; the arc above is the session **sequence**, numbering to
  finalize.)*

*(§4's earlier "TBD case sources" are now **resolved** — every slot's assigned case is in the table above and the
`CASE_LOG`. Association is the one **fork-not-professor-case** slot.)*

## 4. THE CASE SLOTS — spec (kinds + TBD source; NO content authored)
Each technique session gets a **CASE SLOT**: the decision it should illustrate + the source to fill it (Stage 3).

| Session | Case KIND (the decision) | Source (TBD) |
|---|---|---|
| Regression (Wk8) | What **drives** an outcome? (e.g., app rank/sales drivers — the `MobileApp` data; or a pricing/demand call) | **professor research (PRIMARY — he studies app/platform markets)** |
| Visualization (Wk9) | Is this **dashboard honest**? an exec reads a chart and decides | web-supplement / constructed |
| Clustering (Wk10) | **Segment** a market/customers → target which segment? | professor research **or** web |
| **Classification (Wk11)** | **Predict & act** — churn / fraud / credit approve-or-not | **AirbnbSuccessSignals** (logistic) + AppPortfolio |
| **Text Analysis (Wk12)** | **What are the themes** — LDA topics from reviews | **WhenMoreIsLess** (LDA) + NoveltyDial · LiveCommerceAttention · TwoSentencePitch |
| **Association (Wk13)** | **Cross-sell / recommend** — what to bundle? | **BUSS256 M-3 fork (`mba.csv`)** — no professor case |
| **Capstone (Wk14, 1주)** | End-to-end **supervise the AI** on a full business problem | **InvoiceAutopilot** (+ PhantomProgress · AttentionDisplacement) |

**Sourcing rules (locked):** (a) **professor research first** — he provides facts/data/findings, we structure as
teaching cases (copyright-safe, authentic); (b) **web-supplement** for gaps — **cite + date, summarize don't
reproduce, verify-don't-assert** (MT-11/MT-12 + copyright discipline); (c) **HBR/HBS only if the professor
licenses & distributes them himself** — I won't reproduce copyrighted cases, but can design how to teach around
a case he provides. **A CASE_LOG will track each case's source + copyright status** (see §7).

## 5. THE AI-VERIFY THREAD (the STAR) — spec
**"You hold the standard → you direct the AI → you verify it → you decide,"** adapted to MBA **"supervise the
analysis"**: an MBA grad won't run the regression — they'll **commission it (from an AI or an analyst) and must
judge whether to trust it.** Heavier than BUSS215's light touch (it's the centerpiece), but **still read-level,
never student-coding.**
- **Delivery (recommended — given zero coding): a MIX.** Early sessions = **instructor-demo** (show AI-written R +
  output, walk the verify aloud). Later sessions = **light *guided* student verify** — students **read** the AI's
  output and a short structured worksheet ("did it use the right variable? does the sign make business sense? is
  the chart honest? what do you decide?") and **judge** — **no running code.** Builds from watch → do-the-judging.
- **The standard MBAs hold = business logic + the concept**, not a hand-computed number (they can't compute). So
  verification is **"does this result make business sense and match the method's logic?"** — the MBA-appropriate
  form of "hold the standard."
- Recurs every technique session as the closing beat: **direct → read → verify → decide.**
- **Where it runs in the class hour (per §3's two-block structure):** the AI-verify activity is the **second
  75-min block** — it **occupies the slot the professor already uses for discussion / presentation / hands-on**.
  So the mix maps to time: **instructor-demo** early-term second-halves (walk the verify aloud), shifting to
  **light guided student-verify** (structured worksheet + discussion) in later second-halves — the same
  participation rhythm he already runs, re-pointed at *supervising the AI.* First-half stays lecture.

## 6. ASSESSMENT FIT (proposal — flag for professor)
- **A1 / A2 re-orient** from hands-on (data-gen, regression-coding) to **case-and-verify deliverables**:
  - **A1** = *"Direct an AI to analyze [case data]; read & verify its output; write a 1-page decision memo —
    what you'd trust, what you'd question, what you'd decide."*
  - **A2** = a **regression case** (the `MobileApp`/pricing decision): verify an AI-produced regression +
    recommend. **No coding required** — the deliverable is the **judgment + memo.**
- **Midterm + final (both stay) = JUDGMENT/INTERPRETATION exams** (no coding): MC (interpret given output,
  **catch the AI's error**, technique-choice) + free-response (read a result → recommend). Mirrors the BUSS256
  exam bank **but interpretation-weighted**, every value **source-verified**. *(The BUSS256 MC items on
  output-interpretation/error-detection fork almost directly; the coding-style items drop.)*
- **Flag:** confirm the A1/A2 re-orientation and the no-coding exam stance fit your MBA grading.

## 7. GOVERNANCE — recommendation (mid-weight)
Heavier than BUSS215 (a full 16-week course), lighter than the full BUSS256 suite:
- **A COURSE PROFILE** (audience, the minimize-R/verify-star direction, fork map, R=reading-only floor).
- **A short DESIGN/CHARTER-LITE** (the session pattern, the AI-verify spine, the assessment stance).
- **A CASE_LOG** — *essential here*: tracks every case's **source (professor-research / web / HBR-licensed),
  copyright status, citation, and verification** (enforces the §4 sourcing rules).
- **NOT** the full grading-policy/style-standards/currency-log suite (unless it grows). **Recommend** profile +
  charter-lite + case-log.

## 8. SUB-DECISIONS — LOCKED vs. OPEN
**✅ LOCKED (professor-agreed Jun 18, 2026):**
- **8.1 — SUPERSEDED, then RE-LOCKED (see 8.1-R1 below).** *Original (Jun 18, 2026): "Read-R intro = 2 sessions
  (90%+ zero coding — compress but don't rush)."* **This no longer holds** — Wk3 authoring delivered the entire
  R-reading toolkit (최소 문법 4요소 + 결과 읽기 3원칙) in **one** session, so a second R-reading week is redundant.
- **8.1-R1 Wk3 / Wk4 split — RE-LOCKED (professor-agreed Jul 14, 2026):**
  **Wk3 = R 읽기 도구** (minimal-syntax 4 elements + 3 output-reading principles + STAR frame; *complete in one
  session*). **Wk4 = 데이터과학 개념 지도 (Provost-Fawcett Ch 1–2) + 6개 기법 세션(Wk8–13) 예고편.**
  **Wk4 미니 함정 = 서술(descriptive) vs 예측(predictive) 혼동** — an AI extrapolates a fitted line far beyond the
  observed data range and reports it as a forecast. **Non-overlapping with all six technique-session traps**
  (Wk8 aggregate-vs-decomposition · Wk9 measurement validity · Wk10 noise suppression · Wk11 target leakage ·
  Wk12 topic over-naming · Wk13 lift<1 misread), and distinct from Wk3's axis-truncation / metric-mismatch traps.
  *(Supersedes 8.1; updates §3 rows Wk3–4 and the §3 "reading-level R" line.)*
- **8.2 AI-verify delivery = the MIX** (instructor-demo early → light *guided* student-verify later). *(Confirms §5.)*
- **8.5 Classification = KEEP** as a full technique session (churn/fraud = MBA-relevant). *(Confirms §3 Wk12–13.)*
- **8.6 Assessment = re-orient A1/A2 to case-and-verify + no-coding judgment exams** — approved. *(Confirms §6.)*
- **8.7 Governance = mid-weight** (profile + charter-lite + case-log) — approved. *(Confirms §7.)*
- **8.8 Language = KOREAN student materials** — see §8.8 below (a third fork dimension).

**◻ STILL OPEN (recorded — do not resolve):**
- **8.3 Research → case-slot mapping.** The professor is **now collecting research-case briefs** (the test brief
  worked well). These fill the case slots **by BUSINESS QUESTION, not forced technique-matching** (locked
  case-framing rule). **Candidate recorded:** the **first brief — EPL paywall / illegal-gambling spillover** — is
  a **strong REGRESSION-session candidate** (a **DiD** framed as treatment/control comparison) **and** seeds the
  AI-verify thread richly (three concrete "AI gets it wrong" traps). *Recorded as a candidate — not authored.*
- **8.4 F-20 install-guide location.** Still to find (professor unsure). Cowork may later search Seminar 4 / intro,
  or record "none / done in-class."

### 8.8 LANGUAGE — KOREAN student materials (locked; affects the whole build)
KMB689 is **taught in Korean** (the professor explains to students in Korean). This is the **third dimension of
the fork** — alongside *audience* (undergrad → MBA) and *delivery* (hands-on → minimize-R), now **language
(English → Korean).**
- **All student-facing materials → KOREAN:** slides, readings, cases, worksheets, exams, the read-R intro.
- **Follow the EXISTING Korean materials' terminology.** The current KMB689 materials are **mixed Korean/English**;
  when reframing, **keep the Korean terms/tone already in use** (the professor's established usage — e.g. 회귀분석,
  연관분석, 분류, lift 등) and **convert the English parts to Korean.** **Do NOT invent new Korean translations for
  technical terms — the professor's established terms win.** The existing Korean materials are the **terminology
  anchor.**
- **Research-case briefs → Korean** (confirmed working — the test brief came out well in Korean).
- **⚠ Honest note (record):** Korean student-materials need **more professor review of terminology/tone** than the
  English BUSS256/BUSS215 did — **author drafts in Korean, professor refines.** Cowork anchors to the existing
  Korean materials; the professor is the final arbiter of term/tone.

### 8.9 FIGURE LANGUAGE = ENGLISH (locked Jul 5, 2026; applies to ALL sessions incl. Text/Clustering/Classification)
Rationale: MBA students read English fine, and these figures will be **reused in the undergraduate MIS/Big Data
courses (English)** — one figure set serves both.
- **Rendered figures (charts, scatters, dashboards) → ENGLISH:** title, axis labels, legend/colorbar, in-figure
  annotations, and the source line. Use the **real data item/variable names as they appear in the source** (mba.csv
  items are English, e.g. `{beef}→{butter}`; if a source is Korean, provide English).
- **Body text stays KOREAN** (per §8.8). **Term-matching rule:** wherever Korean body references a figure element,
  follow the Korean term with the **English term in parentheses matching the figure** — 지지도(support),
  신뢰도(confidence), 향상도(lift) — so students connect body ↔ figure.
- Chart-quality standard (from Wk9) still applies: 0-based axes (unless deliberately noted), units, source line,
  legend/annotations clear of points. **Verify by viewing every rendered figure.**

### 8.10 Wk1 IDENTITY = ORIENTATION + SUPERVISION PHILOSOPHY (RE-LOCK, professor-agreed Jul 16, 2026)
**Wk1 = 과목 오리엔테이션(평가·출석·A1/A2·시험) + AI 감독 교육철학·동기(왜 MBA는 코딩 대신 감독하나 — third-literacy
논지) + 16주 로드맵.** **STAR 4단계 프레임의 메커니즘은 Wk1이 아니라 Wk3가 도입한다** (Wk3 강의노트 A.2 "STAR 프레임의
도입"; Wk4·Wk5 선수내용이 STAR 출처를 Wk3로 명시).
- **경계 (중복 회피)**: Wk1은 **직업·과목 차원**("왜 감독이 필요한가")까지만 다루고, **세션 차원의 STAR 4단계(S·T·A·R)와
  결과 읽기 도구는 Wk3에 남긴다.** Wk1은 STAR를 **예고**만 하고 넘긴다 ("도구는 Wk3에서").
- **근거**: 진단 결과 "(Wk1에서 배운 STAR)" 표현 0건, 하류가 STAR를 Wk3 소속으로 참조. Wk3(R1.2 완결·잠금)를 건드리지
  않고 Wk1을 재정의하는 것이 최저비용. *(원래 §3 Wk1의 "NEW spine (STAR 스파인 창시)" 표현을 SUPERSEDED; §3 Wk1 행
  갱신·R2 개정이력 기록. Wk3·Wk4·Wk5·Wk8–13 자료 불변.)*

### 8.11 Wk6 IDENTITY = "좋은 분석이란 무엇인가 · 비즈니스 가치" (RE-LOCK, Jul 18 2026 — GA3 해소)
**Wk6 = P-F 후반부(Ch 7 좋은 모델이란 · Ch 11 분석 공학 · Ch 13 전략 일부).** 원래 §3 정의 *"Tools / data-analytic
thinking"* 의 **두 요소가 모두 이미 이관됨** — **"Tools" → Wk3·Wk4**(§3 각주: 구 도구 두 주차를 Wk3+Wk4로 재배치),
**"data-analytic thinking" → Wk4**(P-F Ch1 제목이 문자 그대로 *"Introduction: Data-Analytic Thinking"*, Wk4가 Ch1–2
소화). **§8.1-R1이 Wk4를 잠글 때 Wk6을 검토 대상에서 누락**한 것이 GA3의 구조적 원인(Wk1 STAR와 같은 반전).
- **경계 (중복 회피)**: **① Wk4** — 데이터과학 정의·DDD·서술/예측·여섯 과제유형·지도/비지도를 반복하지 않는다(Ch1–2는
  Wk4 소유, Wk6은 Ch7·11·13). **② Wk13** — **lift curve 제외**(Ch8의 lift가 Wk13 "향상도" 1차 함정과 한국어 동음).
  **③ Wk11** — **기저율 제외**(Wk11 세션 기준 3개 중 하나). Wk6은 "정확도가 기준이 아니다"를 **비용 비대칭**(같은 정확도라도
  무엇을 틀리느냐로 값이 갈림)으로 세운다. **④ Wk14** — "정확도에 종류가 있다"는 개념만, 송장·97.5% 구체 사례는 Wk14 몫.
- **함정 없음** (§3 각주 `R omitted: Wk1,2,6`, R 없음, 산문 시연).
- **근거**: P-F 후반(Ch7·8·11·13)이 전 완결본에 **0건**(진단 실측)이라 Wk6이 소유해도 겹침 없음. **완결본 불변** — Wk1
  로드맵 *"데이터분석적 사고"* 가 P-F Ch7·11(*"Decision Analytic Thinking"*)을 덮어 정합, Wk5 *"Wk6 예고 금지"* 는 논지가
  "여섯 기법 직진"이라 유효. Wk4(Ch1–2 한정) 불변. *(§3 Wk6 행 갱신 + R4 개정이력. Wk1·Wk4·Wk5·Wk8–14 자료 불변.)*

---

## Status
Currency resolved (**F-9 confirmed**, F-20 install to locate); per-artifact judgment done (**mostly REFRAME** —
direction change, not patch). **§3 16-week structure now FINALIZED:** **Data Management compressed 2→1** (verified
feasible from the real Seminars 5–6 — manipulation-coding drops under reading-only, descriptive-reading survives as
1 week); the freed week funds a **new Text Analysis session (Wk12, fork BUSS256 M-1)**; **each technique session
has its assigned primary case** (Regression=AIAdReach, Viz=AttentionDisplacement, Clustering=SmartSearch,
Classification=AirbnbSuccessSignals, Text=WhenMoreIsLess); **Association = BUSS256 M-3 fork** (`mba.csv`, no
professor case); **Experiment/A-B cases live inside the Regression/causal session**; **ReviewShield excluded**
(MBA-MIS-only); **read-R intro = 1 session (Wk3) + concept map (Wk4)** — *revised Jul 14, 2026 per §8.1-R1; was
"2 sessions"* — and midterm+final unchanged. **§8 decisions LOCKED** (incl. **Korean**
student materials, anchored to existing KMB689 terminology). **32 cases filed** (`cases/`) + `CASE_LOG` complete.
**Two parameters now recorded (Jun 18, 2026):** (1) **class-time = two 75-min blocks** — first-half concept
lecture, second-half business case + AI-verify activity (the successor to the professor's existing discussion/
presentation slot); every session authors material for **both** blocks (§3, §5). (2) **Review-status = two
contexts** — **in-class materials use the REAL figures** (no hedging); the "provisional" flag governs **external
sharing/publication only** (re-check under-review cases first) (CASE_LOG). **Still open:** exact **week-number
reconciliation** vs the registrar calendar; the **F-20 install-guide location**; and the **`Citable?`** (external)
marks per case. **No case content or sessions authored.** Stage 3 = authoring the sessions (two-block: concept
lecture + case/verify activity, in Korean) — unblocks on your go. STOP for review.
