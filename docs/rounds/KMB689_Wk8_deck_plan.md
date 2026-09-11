# KMB689 Wk8 덱 재배치·확장 계획

작성: 2026-09-10
상태: **착수 전 실측 완료 · 계획안 · PPTX 미저작**
주제: 회귀 · 인과추론

## 0 · 결론

- MBA_S8 실물은 매핑표의 8종이 아니라 **9종**이다. 학생 6종·교원 3종, 합계 543행을 전문 확인했다.
- 1블록의 명시 배분은 **75분**이다. 2블록은 자료에 15+약 20+약 20+약 15 = **약 70분**만
  명시돼 있다. 남는 5분의 별도 내용은 **지정 없음**이며 추정으로 채우지 않는다.
- KMB689 47장과 BUSS256 76장은 장수만 다른 판이 아니다. 공통 회귀 코어 위에 BUSS256이 통계
  기초·반복 복습·변수 변환·MobileApp·예측오차를 더한 **내용 차이**다.
- 내용 출발점은 최신이고 MobileApp 71–72장을 가진 **BUSS256 76장**으로 잡는다. KMB689 47장은
  한국어 용어·표현의 대조본으로 쓴다. 기존 두 덱 모두 그대로 수업 순서가 되지는 않는다.
- 목표는 **43장**이다: 1블록 35장 + 2블록 8장. 기존 덱 23개 원천 장을 19장으로 재배치·개정하고,
  MBA_S8 자료에서 24장을 신규로 만든다. `그대로 0 · 재배치 4 · 개정 15 · 신규 24`다.
- W1-X는 **활성**이다. 3장에서 Wk1 27장의 네 단계 감독 신조를 정확히 한 번 회수한다.
- 디자인 통일은 후속 라운드다. 이번 계획의 G6는 잘림·겹침·판독 불가 0건만 요구한다.

## 1 · MBA_S8 실물 9종 전문 확인

| 구분 | 파일 | 행 | SHA-256 | 덱 역할 |
|---|---|---:|---|---|
| 학생 | `MBA_S8_AI_Output_Exhibit_KR_STUDENT.md` | 57 | `286331826cb0…` | 의도적으로 자신감 있게 틀린 AI 분석; 2블록 검증 대상 |
| 학생 | `MBA_S8_Block1_LectureNotes_KR.md` | 108 | `f6c37326089a…` | 1블록 75분 청사진과 회귀 검증 5문 |
| 학생 | `MBA_S8_Case_Handout_KR.md` | 47 | `bce47123d6eb…` | AIAdReach 사례·의사결정·공개 경계 |
| 학생 | `MBA_S8_Exhibit1_SummaryStats_KR.md` | 40 | `a02822fc1d51…` | 표면 성과와 도입 전 차이; 1차 유인 |
| 학생 | `MBA_S8_Exhibit2_Decomposition_KR.md` | 42 | `618e3fe11c81…` | GMV 증가의 분해; 활동 중 공개할 핵심 증거 |
| 학생 | `MBA_S8_Verification_Worksheet_KR.md` | 55 | `fe0feee06e9f…` | 검증 5문·팀 판정·추가 분석 요청 |
| 교원 | `MBA_S8_AI_Output_Exhibit_KR_INSTRUCTOR.md` | 65 | `78cebfcd6e03…` | AI 주장의 오류·채점 기준·정답 경계 |
| 교원 | `MBA_S8_Discussion_Prompts_INSTRUCTOR_KR.md` | 56 | `37ff8af7dc18…` | 15분 전체 토론의 네 갈래와 회수 문장 |
| 교원 | `MBA_S8_Instructor_Demo_Script_INSTRUCTOR_KR.md` | 73 | `44302524b421…` | 약 20분 강사 시범; 정답 전 냄새까지만 보여 주기 |

매핑표 `MBA_S8 (8종)`은 실측에 맞춰 9종으로 정정하고 이력을 남겼다. 별도 파일명에 `blueprint`가
붙은 문서는 없으며, 시간 청사진은 위 9종에 분산돼 있다.

### 공개 경계

- 1블록은 개념·MobileApp 읽기·두 판단 직관·검증 5문까지다. AIAdReach의 실제 결론을 주지 않는다.
- 2.1은 Case Handout과 Exhibit 1의 표면값까지 공개한다.
- 2.2 강사 시범은 오류의 **냄새**에서 멈춘다. Exhibit 2의 분해 결론을 대신 풀어주지 않는다.
- 2.3에서 학생이 Worksheet와 Exhibit 2로 직접 검증한다.
- 분해 결과와 채택/기각 판정은 2.4 전체 토론에서 처음 회수한다.

## 2 · 분 단위 배분

### 1블록 — 자료에 정확히 75분 명시

| 구간 | 분 | 요구 |
|---|---:|---|
| 1.1 여는 이야기 | 10 | 직접 돌리기보다 읽고 검증하고 결정하는 관리자 역할; 감독 신조 |
| 1.2 출력표 읽기 | 20 | 계수·유의성·R², MobileApp 읽기 예시 |
| 1.3 다중회귀·기준 | 15 | holding others constant, dummy, baseline |
| 1.4 두 판단 | 15 | aggregate vs decomposition, correlation vs causation; DID·matching은 직관만 |
| 1.5 회귀 검증 5문 | 15 | 사례로 넘어가기 위한 공통 질문 |
| **합계** | **75** |  |

### 2블록 — 자료에 약 70분만 명시

| 구간 | 분 | 근거 |
|---|---:|---|
| 2.1 사례 도입 | 15 | Case Handout + Exhibit 1 |
| 2.2 강사 검증 시범 | 약 20 | 대본 내부 1+3+6+7+2 = 19분, 문서 상단은 약 20분 |
| 2.3 짝/조별 유도 검증 | 약 20 | Verification Worksheet + Exhibit 2 |
| 2.4 전체 토론 | 약 15 | 6+4+4+1 = 15분 |
| **명시 합계** | **약 70** |  |
| **미배정** | **5** | 자료에 별도 내용·2.5 구간 지정 없음. 새 내용을 만들지 않음 |

43장은 강의 75분에 35장, 활동 70분에 진행용 8장을 두는 밀도다. 2블록은 읽기·짝 활동·토론 시간이
중심이므로 슬라이드 수를 늘리지 않는다. 미배정 5분은 교수 확인 전까지 운영 여유로만 남기고,
새 개념·사례·정답 슬라이드를 만들지 않는다.

## 3 · `design_plan` §3의 Wk8 설계

- 세션 형태는 `concept + case + verify`, R 수준은 `read output`이다.
- 1블록은 P-F/BUSS256 개념 포크, 2블록은 business case + AI 검증 활동이다.
- 주 사례는 **AIAdReach**, 보조 연결은 O2OHygieneSignal이다.
- BUSS256 M-2의 `MobileApp.csv` 회귀 모형을 직접 포크한다. 같은 `-log(Rank)`, `log(x+1)`, category
  dummies를 결과 읽기 예시로 쓴다.
- 실험 사례들은 “상관보다 실험이 왜 강한가”의 배경이지만, 현재 MBA_S8 9종에 저작된 범위를 넘어
  별도 사례를 덱에 추가하지 않는다.
- 학생 대면 자료는 한국어다. 기존 KMB689 한국어 용어가 표현 기준이고, 새 기술용어 번역을 만들지 않는다.

## 4 · 기존 덱 정본과 출발점 판정

`DECK_CANON_2027S.md`는 두 덱을 각각 원 출처 과목의 정본으로 지정한다.

| 후보 | 정본 파일 | 장수 | SHA-256 | Wk8 역할 판정 |
|---|---|---:|---|---|
| KMB689 S8 | `Seminar 8_Linear Regression Models_Inclass.pptx` | 47 | `5c11f3514b69…` | 한국어 용어·설명 흐름의 대조본. MobileApp 사례는 없음 |
| BUSS256 S8–9 | `Seminars 8-9_Linear Regression Model_InClass3_F25.pptx` | 76 | `f41e514e76e1…` | **내용 출발점**. 최신 회귀 코어와 MobileApp 71–72장을 포함 |

둘 다 정본이지만 새 MBA_S8이 요구하는 `MobileApp`을 실제로 가진 것은 BUSS256뿐이다. 따라서
BUSS256을 내용 출발점으로 택하고, KMB689는 한국어 표현을 대조할 때만 참조한다. 이 선택은 디자인
통일 결정이 아니다.

## 5 · KMB689 47장 전수 목차

| 장 | 화면 제목·핵심 |
|---:|---|
| 1 | `Show Me Your NAME!` |
| 2 | 제목 없음 — 강의실 자리/도식 |
| 3 | `간담회#1` |
| 4 | `Seminar 8 Analytics for Business Applications I: Liner Regression Model` |
| 5 | `Content` |
| 6 | `회귀 분석` |
| 7 | `선형 회귀 모델 구성 요소` |
| 8 | `선형 회귀 모델(Linear Regression Model)` |
| 9 | `선형 회귀 모델(Linear Regression Model)` |
| 10 | `상관분석 vs. 회귀분석(Correlation vs. Regression)` |
| 11 | `선형 회귀 모델(Linear Regression Model)` |
| 12 | `선형 회귀 모델(Linear Regression Model)` |
| 13 | `표본추출 (Sampling)` |
| 14 | `회귀 모델의 종류` |
| 15 | `모델 추정 (Model Estimation)` |
| 16 | `회귀 계수 추정` |
| 17 | `모델 추정의 원리` |
| 18 | `모델 추정의 원리` |
| 19 | `모델 추정의 원리` |
| 20 | `최소자승법 OLS` |
| 21 | `요약` |
| 22 | `Review` |
| 23 | `회귀분석 결과 해석` |
| 24 | `단순 회귀 모델` |
| 25 | `R을 이용한 모델 추정 결과` |
| 26 | `모델 추정 결과` |
| 27 | `추정결과 해석` |
| 28 | `통계적 유의성 평가` |
| 29 | `모델 평가` |
| 30 | `모델 추정 결과 (R)` |
| 31 | `오차` |
| 32 | `Plot predicted vs actual` |
| 33 | `예시` |
| 34 | `결정계수` |
| 35 | `결정계수` |
| 36 | `조정된 결정계수` |
| 37 | `변수 선택/모델 구성 적절성 평가` |
| 38 | `모델 적합성/적절성 평가` |
| 39 | `요약` |
| 40 | `Review` |
| 41 | `다중 선형 회귀 모델` |
| 42 | `다중 선형 회귀 모델` |
| 43 | `다중 선형 회귀 모델` |
| 44 | `모델 추정 결과` |
| 45 | `결과 해석 및 예측` |
| 46 | `Multiple Linear Regression Model on mpg` |
| 47 | `로그 변형된 회귀 계수 해석` |

1–3장은 운영·간담회 장이고, 4–47장의 회귀 코어는 BUSS256에도 주제 단위로 모두 대응한다.

## 6 · BUSS256 76장 전수 목차와 원천 판정

`원천`은 43장 계획에서 재배치·개정의 씨앗으로 쓰는 장, `제외`는 이번 MBA_S8 범위를 넘거나 반복되는
장이다. 원천 23장은 병합·분할돼 최종 재사용 집합 19장이 된다.

| 장 | 화면 제목·핵심 | 판정 |
|---:|---|---|
| 1 | `BUSS256 … Linear Regression Model` | 원천 |
| 2 | `Objectives` | 제외 — MBA_S8 목표로 신규 작성 |
| 3 | `Understanding Regression` | 원천 |
| 4 | `Linear Regression Model` | 원천 |
| 5 | `Linear Regression Model` | 원천 |
| 6 | `Correlation vs Regression` | 원천 |
| 7 | `Linear Regression Model` | 원천 |
| 8 | `Linear Regression Model` | 원천 |
| 9 | `Linear Regression Model` / sampling | 제외 — 표본추출은 MBA_S8 명시 범위 아님 |
| 10 | `Regression Models` | 원천 |
| 11 | `Model Estimation` | 제외 — 계산·추정 상세 축소 |
| 12 | `Estimating coefficients` | 제외 |
| 13 | `Idea behind estimations` | 제외 |
| 14 | `Idea behind estimations` | 제외 |
| 15 | `Idea behind estimations` | 제외 |
| 16 | `OLS` | 제외 |
| 17 | `Summary` | 제외 |
| 18 | `Linear Regression Model` | 제외 — 반복 |
| 19 | `Recall OLS` | 제외 — 반복·계산 |
| 20 | `Supplementary Lecture: Basics in Statistics` | 제외 — 구분장 |
| 21 | `Null vs Alternative` | 제외 — 가설검정 단독 강의로 확장하지 않음 |
| 22 | `p-value` | 원천 |
| 23 | `significance level` | 원천 |
| 24 | `Significance Relationship?` | 제외 — 22–23과 통합 |
| 25 | `Statistical Significance?` | 제외 — 22–23과 통합 |
| 26 | `Statistical Significance?` | 제외 — 22–23과 통합 |
| 27 | `Statistical Significance?` | 제외 — 22–23과 통합 |
| 28 | `Interpretation` | 제외 — 구분장 |
| 29 | `Simple Regression` example | 제외 — MobileApp로 대체 |
| 30 | `Estimation Output R` | 원천 |
| 31 | `Estimation Results` | 원천 |
| 32 | `Interpretation` | 원천 |
| 33 | `How to Interpret P-value` | 원천 |
| 34 | `Model Evaluation` | 제외 — 구분장 |
| 35 | `Estimation Output R` | 제외 — 반복 |
| 36 | `Residuals` | 제외 — MBA_S8 명시 범위 아님 |
| 37 | `Plot predicted vs actual` | 제외 — MBA_S8 명시 범위 아님 |
| 38 | `Estimation Output R` | 제외 — 반복 |
| 39 | `Example` | 제외 — MobileApp로 대체 |
| 40 | `Evaluating Model Fit` | 제외 — 구분장 |
| 41 | `R-squared` | 원천 |
| 42 | `Simple Regression` example | 제외 — 반복 |
| 43 | `Example R²=.7` | 원천 |
| 44 | `Adjusted R²` | 제외 — MBA_S8 명시 범위 아님 |
| 45 | `Specification Test` | 제외 — MBA_S8 명시 범위 아님 |
| 46 | `Estimation Output R` | 제외 — 반복 |
| 47 | `Example` | 제외 — 반복 |
| 48 | 빈 슬라이드 | 제외 |
| 49 | `Recall LRM` | 제외 — 반복 복습 |
| 50 | `Review Hypothesis Testing` | 제외 — 반복 복습 |
| 51 | `Statistical Significance?` | 제외 — 반복 |
| 52 | `Evaluating Model Fit` | 제외 — 반복 |
| 53 | `R-squared` | 제외 — 반복 |
| 54 | `Simple Regression` example | 제외 — 반복 |
| 55 | `Example R²=.7` | 제외 — 반복 |
| 56 | `Specification Test` | 제외 — 범위 밖 |
| 57 | `Estimation Output R` | 제외 — 반복 |
| 58 | `Multiple Linear Regression Model` | 원천 |
| 59 | `Multiple Linear Regression Model` | 원천 |
| 60 | `Multiple Linear Regression Model` | 원천 |
| 61 | `Estimation Output` | 원천 |
| 62 | 빈 슬라이드 | 제외 |
| 63 | `Linear Regression Model` | 제외 — 앞 장 반복 |
| 64 | `Interpretation and Prediction` | 제외 — Wk8은 결과 읽기·검증에 한정 |
| 65 | `log coefficients` | 원천 |
| 66 | `normalization` | 제외 — MBA_S8 명시 범위 아님 |
| 67 | `normalization` | 제외 |
| 68 | `variable transformation` | 제외 |
| 69 | `reducing categories` | 제외 — baseline 설명은 MBA_S8 노트와 MobileApp 출력에 한정 |
| 70 | `Multiple Linear Regression Model on mpg` | 제외 — MobileApp로 대체 |
| 71 | `Mobile App Sales model` | 원천 |
| 72 | Mobile App 결과·계산 | 원천 |
| 73 | `Evaluating Predictive Performance (for references)` | 제외 — Wk8 명시 범위 아님 |
| 74 | `Measuring Predictive Error` | 제외 |
| 75 | `MSE` | 제외 |
| 76 | `MSE` | 제외 |

## 7 · 두 덱의 겹침 판정

장수 차이는 **47 대 76, +29장**이지만 단순 증보판은 아니다.

- KMB689의 운영 1–3장을 제외한 회귀 코어 4–47은 BUSS256의 1–17, 28–47, 58–65, 70에
  주제 단위로 대응한다. 한 장이 합쳐지거나 둘로 갈라져 exact page-to-page 판은 아니다.
- BUSS256 20–27은 별도 통계·가설검정 기초 모듈, 18–19와 49–57은 반복·복습 블록이다.
- BUSS256 66–69는 정규화·변수 변환 확장, 71–72는 MobileApp, 73–76은 예측오차다.
- KMB689만의 실질적 추가는 1–3장의 행정·간담회와 한국어 용어·설명이다. Wk8 새 수업 내용의
  출발점으로 필요한 고유 사례는 없다.
- MBA_S8은 MobileApp 71–72를 명시하므로 BUSS256이 내용 출발점이다. 반대로 76장을 통째로 쓰면
  계산·반복·예측오차가 들어와 범위를 넘는다. 필요한 23개 원천 장만 추려 19장으로 재구성한다.

따라서 두 후보의 차이는 **쪽수이자 내용**이다. 같은 코어를 공유하지만 BUSS256의 추가 29장은
통계 기초·복습·변환·MobileApp·예측오차로 구성돼 있고, 그중 Wk8에 필요한 추가 내용은 MobileApp와
baseline 읽기뿐이다.

## 8 · W1-X 판정

W1-X는 **활성**이다. 학생용 1블록 노트 1.1에 정본 네 단계가 완전하게 존재한다.

`기준을 세운다 → AI에게 시킨다 → 검증한다 → 결정한다.`

3장의 `감독 신조 recap`에서 Wk1 27장과 네 단계의 단어·순서·화살표를 정확히 대조한다. 하단 문장도
Wk1 정본을 그대로 쓴다.

`분석을 직접 하지 말고, 결과를 읽고 검증한 뒤 결정한다.`

교원 시범 대본에는 `기준을 세운다 → 검증한다 → 결정한다`라는 부분형이 한 번 있다. 이것은 대본
원문으로 남기되 덱으로 가져오지 않는다. 전 덱에서 부분형·변형 문구 0건을 검사한다.

## 9 · 목표 43장 슬라이드 단위 계획

판정 합계는 `그대로 0 · 재배치 4 · 개정 15 · 신규 24 = 43`이다. 재배치·개정 19장이 R,
신규 24장이 N이며 교집합·미분류는 0장이다.

| 새 장 | 분 구간 | 판정 | 기존 원천 | MBA_S8 근거·계획 |
|---:|---|---|---|---|
| 1 | 1.1 | 개정 | BUSS 1, KMB 4 | KMB689 Wk8 회귀·인과추론 표지 |
| 2 | 1.1 | 신규 | — | 두 블록 경로: 출력 읽기 → 두 판단 → 사례 검증 |
| 3 | 1.1 | 신규 | — | `감독 신조 recap`; Wk1 27장 정본 정확히 1회 |
| 4 | 1.1 | 신규 | — | 관리자의 자리: 직접 돌리기보다 읽고 검증하고 결정 |
| 5 | 1.1 | 신규 | — | 오늘의 네 목표; Block1 노트 1.1 그대로 |
| 6 | 1.2 | 개정 | BUSS 3–4, KMB 6 | 회귀가 하는 일; 출력 읽기 목적에 맞춰 계산 제거 |
| 7 | 1.2 | 개정 | BUSS 4–5, KMB 7–9 | 결과변수·설명변수·계수의 자리 |
| 8 | 1.2 | 개정 | BUSS 7–8, KMB 11–12 | 선·절편·기울기를 결과표 읽기 수준으로 |
| 9 | 1.2 | 재배치 | BUSS 6, KMB 10 | 상관과 회귀의 질문 차이; 인과 판정은 아직 주지 않음 |
| 10 | 1.2 | 재배치 | BUSS 10, KMB 14 | 단순·다중회귀의 구분 |
| 11 | 1.2 | 개정 | BUSS 30–32, KMB 25–27 | 계수의 부호와 크기 읽기 |
| 12 | 1.2 | 개정 | BUSS 22–23 | 유의성은 무엇을 묻는가; 가설검정 독립 강의로 확장하지 않음 |
| 13 | 1.2 | 개정 | BUSS 33, KMB 28 | p-value·별표·n.s.; n.s. 과장 금지 |
| 14 | 1.2 | 재배치 | BUSS 41, 43; KMB 34–35 | R²는 설명력이지 정답률이 아님 |
| 15 | 1.2 | 신규 | — | R²이 높다는 이유만으로 결론을 채택하는 유인 |
| 16 | 1.2 | 개정 | BUSS 71 | MobileApp 읽기 예시의 변수·결과 정의 |
| 17 | 1.2 | 재배치 | BUSS 71 | MobileApp 회귀 출력표; 원 수치·별표·기호 보존 |
| 18 | 1.2 | 개정 | BUSS 72 | 유의한 계수의 부호 읽기 |
| 19 | 1.2 | 개정 | BUSS 72 | 가격·평점 n.s.; 효과 주장 금지 |
| 20 | 1.2 | 개정 | BUSS 72 | R² 0.14의 정확한 해석 |
| 21 | 1.3 | 개정 | BUSS 58–60, KMB 41–43 | 다중회귀: 다른 조건을 통제한 뒤 읽기 |
| 22 | 1.3 | 개정 | BUSS 72 | dummy와 baseline의 역할; 설명은 Block1 노트 1.3에 한정 |
| 23 | 1.3 | 개정 | BUSS 72 | 게임 기준 대비 카테고리 계수 읽기 |
| 24 | 1.3 | 개정 | BUSS 65, 72 | 로그 계수와 `+0.150 ≈ 15%` 읽기; 자료 표기 그대로 |
| 25 | 1.4 | 신규 | — | 출력 읽기와 인과 판단은 다르다는 전환 |
| 26 | 1.4 | 신규 | — | `GMV = 방문자 × 전환율 × 객단가` 항등식 |
| 27 | 1.4 | 신규 | — | 같은 종합 증가율이 서로 다른 메커니즘을 숨김 |
| 28 | 1.4 | 신규 | — | 분해 결과에 따라 다음 행동이 달라짐 |
| 29 | 1.4 | 신규 | — | 도입자 단순 비교라는 유인; 사례 정답 수치 없음 |
| 30 | 1.4 | 신규 | — | self-selection 직관 |
| 31 | 1.4 | 신규 | — | DID: 전·후 변화의 차이 직관만, 계산 없음 |
| 32 | 1.4 | 신규 | — | matching: 비슷한 판매자끼리 비교 직관만 |
| 33 | 1.5 | 신규 | — | 관리자의 회귀 검증 5문 1–3 |
| 34 | 1.5 | 신규 | — | 관리자의 회귀 검증 5문 4–5 |
| 35 | 1.5 | 신규 | — | 2블록 전환: 다섯 질문을 실제 AI 분석에 적용 |
| 36 | 2.1 | 신규 | — | AIAdReach 상황·의사결정·역할; Case Handout |
| 37 | 2.1 | 신규 | — | Exhibit 1의 표면 성과·도입 전 차이; Exhibit 2 결론은 숨김 |
| 38 | 2.2 | 신규 | — | 강사 시범 시작: AI 분석 1·2절을 읽되 평가 결론 없음 |
| 39 | 2.2 | 신규 | — | 검증 5문 재호출; 이상 냄새에서 멈춤 |
| 40 | 2.3 | 신규 | — | Worksheet + Exhibit 2 짝/조별 검증 지시만; 정답값 투사 금지 |
| 41 | 2.4 | 신규 | — | 토론 1: “성공” 주장에 대한 판정과 증거 회수 |
| 42 | 2.4 | 신규 | — | 토론 2–3: 자기선택·분해·마케팅 목표 불일치 회수 |
| 43 | 2.4 | 신규 | — | 토론 4·1분 마무리: 결정과 추가 분석 요청 |

### 기존 23개 원천 장 → 최종 R 19장

BUSS 1, 3–8, 10, 22–23, 30–33, 41, 43, 58–61, 65, 71–72를 쓴다. 서로 이어지는 개념 장은
한 장으로 합치고, MobileApp 한 장의 표는 여러 읽기 질문에서 다시 쓴다. KMB689 대응 장의 한국어
용어를 대조한다. 원천 수와 최종 R 수가 다른 것은 승인된 병합·분할 때문이며, 원천 슬라이드별 유지
문자열과 추가·교체 문자열을 저작 전에 변환 명세로 분리한다.

## 10 · 게이트 계획

| 게이트 | 적용 | 범위·통과 기준 |
|---|---|---|
| G1 구조 | 활성 | 43장 = R 19 + N 24, 1블록 35 + 2블록 8, 구간·시간·원천 매핑 일치 |
| G2 원문 보존 | R 19만 | 유지 문자열을 슬라이드 단위로 이어붙이고 공백류만 정규화. 원 수치·별표·기호·구두점 보존 |
| G3 신규 근거 | N 24 전체 + R의 추가·교체 조각 | 모든 문구·숫자를 MBA_S8 9종, `design_plan` §3, 승인된 기존 덱 원천에 연결. 무근거 0건 |
| G4 정답 누출 | 전 43장·노트 | Exhibit 2 분해 결론과 최종 판정은 41장 전 0건. 40장은 활동 지시만 포함 |
| G5 도판·자산 | 활성 | MobileApp 표와 Exhibit 수치·별표·행 순서를 지정 문서·원천 슬라이드와 대조. 학생/교원판 혼입 0건 |
| G6 패키지·시각 | 활성 | ZIP·관계·렌더 장수 정상, 잘림·겹침·판독 불가 0건. 미적 통일은 범위 밖 |
| W1-X | 활성 | 3장 정본 1회, 나머지 장의 부분형·변형 0건 |

G2와 G3는 같은 텍스트 조각에 겹치지 않는다. G2는 R 19장의 유지 조각, G3는 N 24장의 전체와
R 19장의 추가·교체 조각을 검사한다. 백지로 추가하는 인과·분해·활동 장은 모두 G3 출처 장부가 있어야
한다. 저작 단계의 대조군은 원문 숫자 변경, 무근거 문구, 조기 정답, 학생/교원 Exhibit 혼입, 감독 신조
부분형을 각각 주입해 해당 게이트가 검출하는지 확인한다.

실패 등급은 `DECK_GATE_CONVENTIONS.md`를 따른다. 실질 실패는 전건 롤백하고, 공백류·런 분할·XML
속성 순서만 다른 형식 실패는 오탐 여부를 판정해 보고한다.

## 11 · 승인 전 열린 항목

1. 자료가 합계 약 70분만 지정한 2블록의 남는 5분은 새 콘텐츠 없이 운영 여유로 남긴다. 별도 2.5를
   만들려면 교수의 명시 지시가 필요하다.
2. 디자인은 이번 계획의 판정 대상이 아니다. 내용 저작 후 실제 마스터·서체·색을
   `DECK_DESIGN_INVENTORY.md`에 갱신한다.
3. 이 문서는 계획만 정한다. 승인 전에는 두 원본 PPTX와 기존 Wk1·Wk6·Wk10 PPTX를 수정하지 않는다.
