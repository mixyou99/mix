# MBA Case Library — CASE_LOG (KMB689 Big Data)

*Change log: **Sep 9, 2026 — Exhibit B·C·D·F 저작 완료, 전 게이트 통과.** 회귀표 셋(표 4·5·6)을
Exhibit B·C·D 로, 학생 실습 별지를 EXHIBITS_F_KR·EN 으로 신규 저작. A–E KR 8/8 · EN 7/7 PASS,
별지 F KR 7/7 · EN 6/6 PASS. 원문 대조 기준은 게재본 `vol24_no3_1.pdf` 다 —
Dropbox 의 `…_교정본.pdf` 는 게재 전 판이라 값이 다르다(→ `docs/rounds/BCDF_kickoff.md` §3).
**Sep 9, 2026 — R2 (Exhibit A·E) 전 게이트 통과.** `cases/ReviewResponsePlaybook/student/` 에
본문·Exhibit KR·EN docx 4종 배치(바이트 동일 복사). 게이트: E-G0·G3·G4·G5·G7·G7R·G8 KR·EN 전항 PASS,
E-G9(KR/EN 등가) PASS. 편집 원본·렌더러·게이트는 `work/reviewresponse/` · `tools/`.
`03_final` 승격은 Exhibit F 이후. 상세 → `docs/rounds/ExhibitAE_R2_report.md`.
⚠ 본문 쪽수는 이 로그에 싣지 않는다 — 재렌더마다 바뀌므로 지속 상태가 아니다(2026-09-09 판정).
Jun 18, 2026 — created. Rev Jun 18, 2026 — **FILED**: 32 cases (64 KR/EN files) in `cases/`; prereg
in `research_docs/`; columns filled from the actual files; three curriculum decisions applied. **No case content
authored or altered — organization + logging only.** Source of every case = **the professor's own research
(copyright-safe).***

---

## Status — FILED ✅
- **`cases/` = 32 cases × 2 languages = 64 `.docx`** (KR + EN each, all verified present).
- **`research_docs/` = `prereg_study1_private_vs_externality.docx`** (NOT a case — separated).
- **Dedup done:** dropped all ` copy` / ` (1)` / ` (2)` duplicates (AttentionDisplacement, WhenMoreIsLess) and the
  `__MACOSX` metadata. **SmartAround:** three versions existed (all 12–13 sections, *not* a clean 13-vs-10 split);
  **kept `(1)`** — the **13-section, longest (KR 6,274 / EN 13,796 chars), with the "★ 케이스 확장 씨앗" expansion
  seeds** (the true 확장형) — discarded `(2)` and the base. *(Flagged: it was longest-file selection, per the rule.)*
- **PrivacyLabels rename done** (two independent studies): B1 "덜 모으겠다"(minimization) → **PrivacyLabelsMinimization**;
  B2 "얼마나 어떻게 쓸"(utilization) → **PrivacyLabelsUtilization**. Topics verified from the files.
- **`InvisibleSpillover` case STAYS in `cases/`** (teaching case); only the **prereg protocol** moved to
  `research_docs/` — not conflated. ✅
- **InvoiceAutopilot 풀 케이스 승격 (2026-08-14):** 본문+Exhibit+교원 노트를 `03_final/cases/InvoiceAutopilot/`로
  복사 승격(바이트 동일, 재렌더 없음). 브리프는 `cases/`에 존치. 상세 → "Full-case promotions — 03_final" 섹션.
  **Citable ☐ 유지(IPM 심사 중).** ✅
- **InvoiceAutopilot Exhibit F 정정·재승격 (2026-08-23):** 학생 EXHIBITS를 A–E로 축소, F를 별지(문제만)로 분리, F 오류 Halden→Holden으로 de-conflict, 교원 노트 F답 1줄 갱신. student 8→12파일. **Citable ☐ 유지.** ✅
- **PrivacyLabelsUtilization 풀 케이스 승격 (2026-08-24):** 본문+Exhibit A–E+별지 F+교원 노트를
  `03_final/cases/PrivacyLabelsUtilization/`로 복사 승격(바이트 동일). student 12·instructor 4·reference 4.
  원 논문 **게재 완료**(경영정보학연구 27(1), 2025.2) → **Citable ✅ 전환 — 라이브러리 첫 사례.** ✅
- **PrivacyLabelsMinimization 풀 케이스 승격 (2026-08-25):** 본문+Exhibit A–E+별지 F+교원 노트를
  `03_final/cases/PrivacyLabelsMinimization/`로 복사 승격(바이트 동일). student 12·instructor 4·reference 4.
  원 논문 **POM 심사 중** → **Citable ☐ 유지**(짝 케이스 Utilization의 ✅와 혼동 금지). ✅
- **정정 (2026-08-26) · 렌더 이스케이프 누출 — PrivacyLabelsUtilization + PrivacyLabelsMinimization 재승격:**
  `render.js` 인라인 파서에 백슬래시 이스케이프 처리가 없어 **유의도 별표가 한 단계 낮게 표기**되던 결함
  (`***`→`**`, `**`→`*`)을 정정. **소스 md는 정상, 변환 단계에서만 파손**이었다.
  대상: 두 케이스의 `student/EXHIBITS_KR·EN` + `instructor/TeachingNote_KR·EN` (docx·pdf **8종 = 16파일**)
  및 **패킷 6종씩 12개**. **계수·표준오차·표본 등 숫자값 무변경 — 유의도 표기만 복원.**
  본문·Exhibit 구성·표 행·페이지 배치·글꼴 변경 없음(diff-가드 8/8 통과: 마크업 제거 후 텍스트·구조 완전 동일).
  백슬래시 408→0 · **손상 값 토큰 144개 전수 복원**(재렌더 별 개수 = 정정 전 이스케이프 개수, 불일치 0) ·
  손상 분포는 **표 셀 82 + 표 밖 문단 22** · **diff-가드 8/8**(마크업 제거 후 텍스트 완전 동일, 길이까지 일치) ·
  **숫자 토큰 600개**(소수 표기 기준, 런 구분자 적용) 순서열까지 정정 전과 완전 일치 — 파일 단위 불일치 0.
  Min 부호 반전 `−0.062***`/`+0.052***` 별 3개 복원, 범례 `*** p<0.01 · ** p<0.05 · * p<0.1` 판독 회복.
  베이스 렌더러는 무손상 파일 역추적으로 확정(`exam_assets_final` 판) + 이스케이프 패치만 적용
  → `02_working/_shared_scripts/render_privacy_reissue.js`. 백업: `_archive/backup_pre_escape_fix_20260826/`(03_final 밖 · `DO_NOT_DISTRIBUTE.txt` 동봉).
  **Citable 상태 불변 — Utilization ✅ 유지 · Minimization ☐ 유지.** 새 케이스 등록이 아니라 기존 항목의 정정 이력이다. ✅
- **정정 2차 (2026-08-26) · 인라인 파서 결함 — PrivacyLabelsMinimization EXHIBITS 재승격:**
  1차 정정(이스케이프)과 다른 결함이다. 베이스 파서의 정규식이 비이스케이프 별 런을 강조 구분자로 오인해,
  한 문단 안의 별 런 두 개가 짝지어져 사이 텍스트를 굵게 먹고 별을 소실시켰다(E-5b).
  진단 결과 승격물 피해는 **Min EXHIBITS KR·EN 2종뿐**이며, 성격은 머리말 끝 짝 없는 `**` 노출(미용)
  — **유의도 별표·계수·표본 손상 없음.** docx·pdf **4파일** + **패킷 4종**(Student KR·EN, Exec KR·EN) 교체.
  **F-G1~F-G8 전항 PASS** · 나머지 26파일 md5 불변 · `cases/` 역복사 완료.
  백업: `_archive/backup_escape_fix2_20260826/`. **Citable 상태 불변 — Minimization ☐ 유지.**
  진단 경로: 수정된 렌더러를 오라클로 삼아 **실자산 183쌍 재렌더 diff, 합격 기준 회귀 0**.
  (v1~v3는 픽스처 전건 통과 후 실자산에서 회귀 140→105→68건을 냈다. **픽스처 통과는 승인 근거가 아니다.**) ✅
- **강의 자료 유의도 표기 정정 (2026-08-26) · `02_working`:** 렌더 이스케이프 결함이 `Wk8-13_final`·`Wk3_final`
  산출물에도 있었음을 **라이브 docx 252개 백슬래시 전수 스캔**으로 확인하고 정정. 대상 **8종(docx 8 + PDF 8)**
  — `S8_AI_Output`(학생·강사), `S8_Exhibit1`, `S8_Exhibit2`, `S8_Block1_LectureNotes`,
  `S11_ClassifInterp`(학생·강사), `Wk3_01_lecture_notes`.
  **유의수준이 판독 불가 상태였다** — 예: S11 학생본에서 `\\\*`(1%)와 `\*`(10%)가 시각적으로 구분되지 않았고,
  `S8_AI_Output` 입점기간 행은 별표가 하나도 남지 않았다. 정정 후 `***`/`*` 정상 판독.
  `S8_Exhibit2` 범례도 `\\\ p<0.001` → `*** p<0.001` 로 복원(별 개수 집합 {1,2,3}이 범례와 일치).
  빌드 경로가 디스크에 없어(세션 내 임시 실행) `Wk8-13_final/scripts/build_wk8_13.js`를 신설했으며,
  그림 허용목록은 교체 전 docx의 `word/media` png md5에서 **역산**했다(학생본·강사본이 서로 다른 그림을 쓴다).
  이미지 보존 게이트(`media` 개수·png md5·PDF 페이지 수) 전항 PASS. 백업 `_archive/backup_wk_escape_fix_20260826/`.
  **미용 결함(F-2)은 정정하지 않고 보류** — 여러 줄에 걸친 이탤릭 블록과 줄 단위 파서의 구조적 불일치로,
  재렌더 시 노출 별이 오히려 늘어 24건 중 17건이 악화되어 전건 롤백했다(2026-08-26). 원인은 소스 md에 있다.
  ⚠ **정정 (같은 날 재측정)**: 위 F-2 보류 건과 함께 보고했던 **"소스 md와 산출물이 어긋난 9건"은 실재하지 않았다.**
  대조 잡 목록이 `02_working/` 루트의 **구 md 사본**을 참조한 데서 비롯된 오판이며,
  정본(`*_final/markdown/`) 기준 재렌더 시 **본문 차이 0건**이다.
  검증 워크시트의 자가채점 정답 블록도 정본 md와 배포본이 일치한다.
  같은 원인으로 **E-6 오라클의 `02_working` 대조 결과와 거기서 파생된 F-2 61건·후속 배치 대상 선정은 무효**이며,
  재개 시 정본 경로로 재판정한다. **백슬래시 전수 스캔, F-1 8종 정정, `03_final`·`cases` 판정은 영향 없다.**
  경위 → `SOURCE_DRIFT_20260826.md`. ✅
- **렌더러 계보 (2026-08-26 확인):** 진본으로 확정된 것은 **C(`exam_assets_final/scripts/render.js`)뿐**이다.
  exam 잠금자산 6종을 `<w:t>` 시퀀스까지 재현한다. **A 세대**(`40040c…`, Wk1·2·6·14)는 **빈 런 1개 차이**로
  완전 재현되지 않으며, 빌드 당시 `docx` 버전이 기록되지 않아 원인을 확정할 수 없다.
  이후 빌드는 `02_working/_shared_scripts/package.json`으로 버전을 고정한다(`docx 9.7.1` · `node 22.23.2`).

## Full-case promotions — 03_final
*브리프는 `cases/`에 존치(교원용 사실 요약). "풀 케이스" = HBR급 본문 + Exhibit + 별책 교원 노트를 강의실 배포용
`03_final`로 승격한 것. 승격 = 바이트 동일 복사(재렌더 없음), 학생/강사 물리 분리.*

| Case | Components (`03_final/cases/<case>/`) | Verified | Citable? |
|---|---|---|---|
| InvoiceAutopilot | student/: FULL_KR·EN (본문 §1–10), EXHIBITS_KR·EN (A–E), EXHIBITS_F_KR·EN (별지 F·학생 실습·임원 제외) · instructor/: TeachingNote_KR·EN · reference/: brief_KR·EN | V1 분리·V1c 내용분리·V2 해시 20/20·V3 12/4/4·V4 강사표기 · Exhibit F 정답유출 정정(Halden→Holden)·재승격 (2026-08-23) | ☐ IPM 심사 중 — 외부 인용 전 재확인 |
| PrivacyLabelsUtilization | student/: FULL_KR·EN (본문 §1–10), EXHIBITS_KR·EN (A–E), EXHIBITS_F_KR·EN (별지 F·학생 실습·임원 제외) · instructor/: TeachingNote_KR·EN · reference/: brief_KR·EN | V1 분리·V1c 내용분리·V2 해시 20/20·V3 12/4/4·V4 강사표기·V5 T8′ 교차오염 0 (2026-08-24) · **이스케이프 정정 재승격 (2026-08-26)** — D-G1~D-G6 전항 PASS, 숫자값 무변경 | ✅ 게재 완료 — 경영정보학연구(Information Systems Review) 27(1), 2025.2, DOI 10.14329/isr.2025.27.1.075 |
| PrivacyLabelsMinimization | student/: FULL_KR·EN (본문 §1–10), EXHIBITS_KR·EN (A–E), EXHIBITS_F_KR·EN (별지 F·학생 실습·임원 제외) · instructor/: TeachingNote_KR·EN · reference/: brief_KR·EN | V1 분리·V1c 내용분리·V2 해시 20/20·V3 12/4/4·V4 강사표기+심사중표기·V5 G2′ 교차오염 0 (2026-08-25) · **이스케이프 정정 재승격 (2026-08-26)** — D-G1~D-G6 전항 PASS, 숫자값 무변경 · **인라인 파서 정정 재승격 (2026-08-26)** — E-5b 미용 결함 2종, 숫자·유의도 무변경 | ☐ POM 심사 중 — 외부 인용 전 재확인 |

- **배포 규칙**: 학생 배포 = `student/`(본문+Exhibit; F는 문제만). 임원 세미나 배포 = Exhibit F 제외(Exhibit 세트 머리말 명시), 교원 노트·brief 미배포. Exhibit 정답 해설과 **F 심긴 오류의 정답 공개 문장("심긴 오류는 발행처명 **Halden→Holden**")** 은 `instructor/` 전용.
  - ⚠ **두 철자쌍을 혼동하지 말 것** (2026-08-26 실측 정정 — 이 줄에 de-conflict 이전 값이 남아 있었다):
    **`Halden→Holden`** = 별지 F의 심긴 오류. 문제지(`EXHIBITS_F_KR·EN`)에는 송장 `Halden` ↔ AI 추출 `Holden`이
    **대조 대상으로 둘 다 실린다**(그래야 문제가 성립). 교원 전용인 것은 철자가 아니라 정답을 밝히는 문장이다.
    **`Hreshwater→Freshwater`** = 별지 정답이 **아니다**. 학생용 `EXHIBITS_KR·EN`(Exhibit E)의 **오류 유형 예시표**
    ("흔한 단어로 치환 — 오류로 안 보임")에 `Kyundai→Hyundai`와 나란히 정당하게 실린 교육용 값이다.
    2026-08-23 de-conflict는 **F의 심긴 오류가 원래 이 쌍이어서 Exhibit E와 충돌**했기에 F 쪽을 바꾼 것이다.
    → 따라서 `Freshwater` 쌍을 학생 자료 금지어로 넣으면 **즉시 오탐**이 난다(`gate_v1c.py` 미등록 사유).
- **아키텍처(R1)**: 계층형 단일 케이스 — 별도 임원본 없음(임원 60분 대본 + 1장 요약 슬라이드 = 교원 노트 부록).


## Three curriculum decisions — APPLIED
1. **ReviewShield = MBA MIS ONLY.** Removed from the Big-Data technique slots; tagged **MIS-lens only** (platform
   trust / governance / game-theoretic modeling — not a data-analytics-technique case). *(Resolves the prior
   "slot pending" flag.)*
2. **Text Analysis = PROMOTED to a full technique session** (new). The four text cases — **WhenMoreIsLess** (LDA),
   **NoveltyDial** (sentiment), **TwoSentencePitch** (content analysis; dual with clustering), **LiveCommerceAttention**
   (embedding) — map to a **real Text session**. **Fork asset: BUSS256 M-1** (text module) for concept scaffolding.
3. **Association rules = fork BUSS256 M-3** (`mba.csv` market-basket). **GAP resolved** — the association session is
   assigned to the M-3 fork (no professor case fits cleanly).
- **Experiment/A-B cases NOT a separate session** — **WebtoonParadox** (RCT), **SerialContentRS**, **WebtoonRecs**,
  **WebtoonReEntry** serve as strong cases **within the regression / causal-inference session** ("why experiments
  beat correlation"). Recorded.

## Coverage (per your analysis; technique *presence* is broad — a case carries several)
Regression ~23 · Visualization ~20 · Descriptive ~23 · **Text 4 (now a session)** · Classification 2 · Clustering
2 · **Association 1 → GAP → BUSS256 M-3 fork.** *(Per-case fine technique inventory: an auto-scan of the files is
broad/over-inclusive; the dominant technique + slot below is the authoritative curriculum mapping.)*

## Review-status policy — TWO CONTEXTS (professor decision)
The under-review status is an **external-sharing** flag, **not** an in-class one:
- **In-class teaching materials → use the REAL figures directly.** No "provisional" hedging language in the
  student-facing materials themselves. The classroom sees the actual numbers.
- **External sharing / publication → re-check first.** Before any material leaves the classroom (shared publicly,
  published, posted), the **under-review cases' status must be re-verified** — figures may have changed on
  publication, and under-review results should not be circulated externally.
- The **`Citable?`** column tracks the **external** status: blank = "under review → re-check before external use";
  the professor marks a case once it is **published / safe to cite externally.** *(This does not restrict in-class
  use — teaching materials always show the real figures.)*

---

## The 32 cases (filed) — by session slot
*All KR + EN present (✅). Source = professor's own research (copyright-safe). Review = provisional unless the
professor marks `Citable?`.*

### Regression / causal-inference session (concept + case + verify) — 15 + 4 experiment cases
| ShortName | KR/EN | Topic (business question) | Slot / role | Citable? |
|---|---|---|---|---|
| AIAdReach | ✅ | AI 광고는 무엇으로 매출을 만드는가? | Regression **(primary)** | ☐ |
| O2OHygieneSignal | ✅ | 보이지 않는 주방: O2O 배달에서 서비스 품질 '신호'는 매출을 바꾸는가? | Regression (cleanest in-curriculum) | ☐ |
| SmartAround | ✅ | 스마트어라운드: 같은 데이터, 뒤집히는 결론 | Regression (IV/robustness seeds) | ☐ |
| InvisibleSpillover | ✅ | 보이지 않는 낙수효과: 가상 대기줄이 주변 상권에 남기는 것 | Regression (DiD) *(prereg → research_docs/)* | ☐ |
| AIAdFrontier | ✅ | 운영 프런티어(operating frontier)의 확장 | Regression | ☐ |
| EqualizerAI | ✅ | AI가 참여의 문턱을 낮출 때: '참여-성과의 괴리' | Regression | ☐ |
| SelectiveLayering | ✅ | 선택적 레이어링, 대체가 아니라 | Regression | ☐ |
| AlgorithmicAssimilationGap | ✅ | 알고리즘 동화 격차 | Regression | ☐ |
| AlgoDispatchLockIn | ✅ | 알고리즘 자동배차와 드라이버 역량의 비대칭적 회복 | Regression | ☐ |
| TwitchGovernance | ✅ | '720p로 강등된 스트리머': 플랫폼 비용 통제는 누구를 다치게 하는가 | Regression (+ MIS-lens) | ☐ |
| BikeShareEqualizer | ✅ | 따릉이는 골목 상권을 살리는가? | Regression | ☐ |
| AppUpdateTiming | ✅ | 타이밍의 기술: 앱을 언제 업데이트/할인할 것인가 | Regression | ☐ |
| ReviewResponsePlaybook | ✅ | 리뷰에 답할 것인가, 어떻게 답할 것인가 | Regression · **R2 + B·C·D·F 통과 → `cases/ReviewResponsePlaybook/student/`** (FULL_KR·EN + EXHIBITS_KR·EN(A–E) + EXHIBITS_F_KR·EN(별지), docx 6종). 교원 노트 미저작 · `03_final` 승격 가능 | ☐ |
| PrivacyLabelsMinimization | ✅ | 데이터를 "덜 모으겠다"는 선언이 앱을 오래 살아남게 하는가 | Regression (+ MIS-lens) · **풀 케이스 → 03_final** | ☐ |
| PrivacyLabelsUtilization | ✅ | 프라이버시 영양 라벨의 시대: 데이터를 얼마나·어떻게 쓸 것인가 | Regression (+ MIS-lens) · **풀 케이스 → 03_final** | ✅ |
| WebtoonParadox | ✅ | 웹툰 개인화의 역설: 발견의 이점이 예측의 리스크로 | **Experiment (RCT)** — in regression session | ☐ |
| SerialContentRS | ✅ | 복귀를 돕는 추천 | **Experiment** — in regression session | ☐ |
| WebtoonRecs | ✅ | 추천이 시장 전체를 키울 때 | **Experiment** — in regression session | ☐ |
| WebtoonReEntry | ✅ | 발견을 넘어 복귀로 | **Experiment** — in regression session | ☐ |

### Visualization session — 3
| AttentionDisplacement | ✅ | 플랫폼이 화면에서 사라질 때 | Visualization **(primary)** + Capstone | ☐ |
| GDPRAppTrade | ✅ | GDPR와 글로벌 앱 시장: 규제는 무역 장벽인가 촉진제인가? | Visualization | ☐ |
| OpenDartBarriers | ✅ | 정보 접근의 두 장벽: 전자공시는 누구의 격차를 좁히는가 | Visualization (+ MIS-lens) | ☐ |

### Clustering session — 2
| SmartSearch | ✅ | 보이지 않던 가게: AI 장소추천은 강남 골목상권의 판을 바꾸는가? | Clustering (DBSCAN) **(primary)** | ☐ |
| TwoSentencePitch | ✅ | 두 문장의 승부: 앱 설명문은 매출을 바꾸는가 | Clustering (hierarchical) **+ Text** | ☐ |

### Classification session — 2
| AirbnbSuccessSignals | ✅ | 무엇이 숙소를 '성공'시키는가 — 신뢰 신호와 그 함정 | Classification (logistic, low-math) **(primary)** | ☐ |
| AppPortfolio | ✅ | 앱스토어에서 살아남기: 개발자의 포트폴리오 딜레마 | Classification (logistic) | ☐ |

### Text session (NEW — promoted; fork BUSS256 M-1) — 4 (TwoSentencePitch dual above)
| WhenMoreIsLess | ✅ | 언제 "더 많이"가 "덜 좋음"이 되는가 | Text (LDA) **(primary)** | ☐ |
| NoveltyDial | ✅ | 노벨티 다이얼(Novelty Dial) | Text (sentiment) | ☐ |
| LiveCommerceAttention | ✅ | 라이브커머스는 소상공인을 살리는가? | Text (embedding) | ☐ |

### Association session — **fork BUSS256 M-3 (`mba.csv`)** — 0 professor cases (GAP resolved by fork)

### Capstone / AI-supervision — 2 (+AttentionDisplacement dual)
| PhantomProgress | ✅ | 팬텀 프로그레스: AI가 "90% 완료"라고 말할 때 | Capstone + **MIS-lens** | ☐ |
| InvoiceAutopilot | ✅ | 송장은 AI가 읽고, 최종 확인은 사람이 한다 | Capstone + **MIS-lens** · **풀 케이스 → 03_final** | ☐ |

### MBA MIS course ONLY (not a Big-Data technique session) — 1
| ReviewShield | ✅ | 플랫폼은 가짜 리뷰를 얼마나 강하게 잡아야 하는가? | **MIS-lens only** (governance / game-theoretic) | ☐ |

**MIS-lens strong (cross-tags for the MBA MIS course):** PhantomProgress, InvoiceAutopilot,
PrivacyLabelsMinimization, PrivacyLabelsUtilization, TwitchGovernance, OpenDartBarriers, ReviewShield.

---

## Pseudonyms registry — do NOT reuse across cases

풀 케이스 저작 시 인물·기업·앱·지점명은 **케이스 간 중복 0**. 새 케이스에 새 가명을 부여한다.

| 케이스 | 인물 | 기업 | 앱·자산·지점 |
|---|---|---|---|
| InvoiceAutopilot | 서지연 | 메리디안 트레이딩(Meridian Trading) | 옵티코어(Opticore, 벤더) |
| PrivacyLabelsUtilization | 한지우 | 루비콘 스튜디오 | 데일리루프 |
| PrivacyLabelsMinimization | 정하윤 | 오르카 랩스(Orca Labs) | 스냅퀘스트(SnapQuest) |
| ReviewResponsePlaybook | **윤태경** | **하루재(Harujae)** | **모텔 3개 지점**(1·2·3번 지점) |

**규칙**: 새 케이스 저작 전 이 표를 확인하고 신설 가명이 위와 중복되지 않는지 확인한다.

---

## Flags for you
1. **Text session now needs a calendar slot** — the design plan §3 (16-week) had no Text session; it now needs
   one (fork BUSS256 M-1). **Not restructured yet** (per your instruction) — **decide: compress an existing
   session, or integrate Text into another week?**
2. **Nothing failed to classify** — all 32 cases filed with a slot; ReviewShield placed (MIS-only) per decision.
3. **`Citable?` column** — please mark which cases are published/safe-to-cite; the rest stay "provisional — do not
   cite externally."
4. *(Auto-scan note: a keyword scan of the files detects many techniques per case (over-inclusive); the
   dominant-technique/slot above is the authoritative mapping. A fine per-case technique inventory can be added if
   you want it.)*
