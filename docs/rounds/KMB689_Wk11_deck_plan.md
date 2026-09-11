# KMB689 Wk11 덱 개정·재구성 계획

작성: 2026-09-11
상태: **43장 저작 완료 · 활성 게이트 6/6 통과 · G5 figD 대기(분모 제외)**
주제: 분류 · 기저율 · 목표 누출 · 비용 비대칭

## 0 · 결론

- `MBA_S11` 정본 자료는 매핑표와 같은 **7종**이다. 학생 4종·교원 3종, 합계 459행을 전문 확인했다.
- 1블록은 `10+20+15+15+15 = 75분`, 2블록은 `15+약 20+약 20+약 15 = 약 70분`이다. 남는 5분은 운영 여유로 둔다.
- 기존 `Extra_Lecture_Classification.pptx`는 **78장**이 맞다. SHA-256은
  `079f9eb225a251a75dad0398bbf703121c084f024c8de961a2a6f153741690cc`다.
- 이 파일은 2025 정규 세션 덱이 아니라 `[참고] Classification` 자료다. 1장은 `BUSS305: Artificial Intelligence for Business`와
  `Seminar 7`, 2장은 `KMB689`와 `Supplementary Materials#1`로 서로 다른 계보를 한 파일 안에 담는다.
- 내용도 Wk11의 로지스틱 출력 읽기보다 의사결정나무 구축·Gini·가지치기·교차검증에 치우쳐 있다. 따라서 78장을
  통째로 재배치하지 않는다. 정의·평가·비용 원천 **11장**만 씨앗으로 쓰고 67장은 제외한다.
- 목표는 **43장**이다: 1블록 35장 + 2블록 8장. 판정은 `그대로 0 · 재배치 0 · 개정 12 · 신규 31`이다.
  한국어 설명 원칙 때문에 원본 장을 위치만 옮기는 순수 재배치는 없다.
- 세 함정은 같은 비중으로 병렬 배치하지 않는다. 자료가 `1차 함정`으로 명시한 **목표 누출을 중심**에 두고,
  **기저율**은 모델 성과 검증, **비용 비대칭**은 행동·임계값 결정 검증으로 받친다.
- W1-X는 **활성**이다. 3장에서 Wk1 27장 정본 신조를 정확히 한 번 회수한다.
- 학생 자료가 답을 미리 담고 있다. 특히 Block1 LectureNotes·Student AI Exhibit·Worksheet는 배포 시점을 늦춰야 한다.
- Student/Instructor AI Exhibit이 참조하는 figD 두 판은 **부재**다. 임의 복원하지 않는다.

## 1 · `MBA_S11` 실물 7종 전문 확인

`03_final`의 7종을 정본으로 셌다. `deck_inputs/promotion_source/Wk8-13_final/markdown/`의 동명 7개는 전부
바이트 동일 사본이므로 별도 자료로 세지 않는다.

| 구분 | 파일 | 행 | SHA-256 | 역할·정답 포함 여부 |
|---|---|---:|---|---|
| 학생 | `MBA_S11_Block1_LectureNotes_KR.md` | 87 | `78dac1fac3717c83f87758b5196180f5fd1cdbab2b416a054dba59651620392e` | 1블록 75분 청사진. **슈퍼호스트 누출 답·45.4%→약 55% 답 포함** |
| 학생 | `MBA_S11_Case_Handout_KR.md` | 57 | `188865c078a7730f7198a3bab5c19a4c9395197e8022cf977955c8e28239c3df` | 2.1 사례 설정·표면 유인. 45.4% 원자료와 강한 힌트 포함, 계산 답은 없음 |
| 학생 | `MBA_S11_AI_ClassifInterp_Exhibit_KR_STUDENT.md` | 52 | `f9eadafb1a32dda1074228afeb747b0ffc77a347ec754e8cb4909c6de93d9986` | AI 주장·오즈비 표. **배지 자격 사실 박스·누출 질문·45.4% 포함** |
| 학생 | `MBA_S11_Verification_Worksheet_KR.md` | 60 | `7c5ec12b5043fd1f4c5713a9f53e1df747357add512d8de3cf3291ac087d79ee` | 2.3 가이드 검증. **목표 누출 명칭·0→1·기저율 계산 유도 포함** |
| 교원 | `MBA_S11_AI_ClassifInterp_Exhibit_KR_INSTRUCTOR.md` | 61 | `ee039dea5673bc1fc0f6866635f7985a3809df4245bad4ee8de80a34c7f5f4b7` | 정답판. 학생 배포 금지 |
| 교원 | `MBA_S11_Instructor_Demo_Script_INSTRUCTOR_KR.md` | 72 | `ad687947f6ae4beddb211ede4aa9b8e35a548c709fd7f79fa7ce8673c522bd5b` | 2.2 약 20분 시연. §3이 세 답을 조기 발화하므로 공개 순서 수정 필요 |
| 교원 | `MBA_S11_Discussion_Prompts_INSTRUCTOR_KR.md` | 70 | `8eeef28432551cf6477e87a15f747016371014759e582b769c22cb1d0fc6f2b7` | 2.4 약 15분 회수·결정 정답판 |

### 참조 도판 부재

두 Exhibit은 다음 파일을 참조하지만 저장소와 Downloads에 실물이 없다.

1. `MBA_S11_figures/figD_odds_ratios_STUDENT_EN.png` — **부재**
2. `MBA_S11_figures/figD_odds_ratios_INSTRUCTOR_EN.png` — **부재**

39장은 이 도판 자리다. 저작 승인 뒤에도 실물이 없으면 Wk9의 E 규칙대로 제목·자리·장 번호만 두고 본문을 비우며,
G5를 `미완·합격 분모 제외`로 기록한다. 표를 임의 그림으로 바꾸거나 도판을 재생성하지 않는다.

## 2 · 분 단위 배분

### 1블록 — 정확히 75분

| 구간 | 분 | 자료의 요구 | 덱 역할 |
|---|---:|---|---|
| 1.1 | 10 | 감독 신조·오늘의 기준 | W1-X, 두 블록 경로 |
| 1.2 | 20 | 이진 결과·로지스틱·오즈비 | 분류 출력 읽기 |
| 1.3 | 15 | 정확도·정밀도·재현율·기저율 | 성과 기준과 다수범주 기준선 |
| 1.4 | 15 | 목표 누출·오즈비 오독·성과 누락 | 세 함정의 판정 도구. Airbnb 정답 금지 |
| 1.5 | 15 | 분류 검증 5문 | 질문만 들고 2블록으로 이동 |

### 2블록 — 약 70분

| 구간 | 분 | 자료 | 공개 경계 |
|---|---:|---|---|
| 2.1 | 15 | Case Handout | 사례·AI 표면 유인. `Case Handout`만 배포 |
| 2.2 | 약 20 | Instructor Demo | 기준·질문을 시범하고 멈춤. 정답 발화 금지 |
| 2.3 | 약 20 | Student AI Exhibit + Worksheet | 학생이 목표 누출 → 기저율 → 비용 부재 순으로 발견 |
| 2.4 | 약 15 | Discussion Prompts + Instructor Exhibit | 세 판정과 실행·보류 결정을 처음 회수 |
| 운영 여유 | 약 5 | 자료에 미지정 | 새 내용으로 채우지 않음 |

## 3 · `design_plan` §3의 Wk11 설계

- 세션: `Classification (MBA-only technique, kept)`
- 형태: `concept + case + verify`
- R 수준: `read output`; 학생은 모델을 돌리지 않는다.
- 1차 사례: `AirbnbSuccessSignals (logistic)`, 보조 `AppPortfolio`
- 경영 질문: `Predict & act — churn / fraud / credit approve-or-not`
- 설계 판정: `reframe MBA deck; verify thread NEW`
- 언어: 학생 설명은 한국어, 실제 표·그림의 지표명과 오즈비 표기는 영어.

설계 문서의 `No BUSS256 equivalent`는 **2025 정규 운영표 기준**으로는 맞지만, 전체 실물 인벤토리 기준으로는
보정이 필요하다. §5에 적은 과거 BUSS256 덱이 실제로 남아 있다.

## 4 · `[참고]` 78장 원본 정체와 전수 목차

원본:
`/Users/gunwoonglee/Downloads/Teaching_2025/Spring/4_KBM_689_Big Data/Classification/Extra_Lecture_Classification.pptx`

- 2,276,185 B · 78장 · 수정시각 2025-05-27 18:14:52 MST
- 78/78장을 XML 텍스트로 읽고, 78/78장 렌더를 전수 확인했다.
- 1장은 BUSS305/Seminar 7, 2장은 KMB689 Supplementary Materials#1이다.
- 정규 세션의 시간표·학습 경로·Airbnb 사례·검증 활동이 없다.

| 원본 장 | 화면 제목 문자열 | 원본 장 | 화면 제목 문자열 |
|---:|---|---:|---|
| 1 | `Supervised Learning - Classification` | 40 | `Overfitting and Pruning` |
| 2 | `Supplementary Materials#1 / Classification` | 41 | `Overfitting` |
| 3 | `Classification: Definition` | 42 | `Overfitting` |
| 4 | `Key Procedures in Machine Learning` | 43 | `Notes on Overfitting` |
| 5 | `Key Procedures in a Classification Analysis` | 44 | `Avoid Overfitting` |
| 6 | `Partitioning the Data` | 45 | `Subtree Replacement` |
| 7 | `Classification Techniques` | 46 | `Subtree Replacement` |
| 8 | `Decision Tree` | 47 | `Cost Complexity Pruning` |
| 9 | `Model Construction` | 48 | `Cost Complexity Pruning` |
| 10 | `Decision Tree (an upside-down tree)` | 49 | `Pruning with Re-sampling` |
| 11 | `Rules (multiple conditions)` | 50 | `Holdout Method / Cross-validation Method` |
| 12 | `Model Use` | 51 | `K-Fold Cross-Validation` |
| 13 | `Model Use` | 52 | `5-fold Cross-Validation` |
| 14 | `Model Use` | 53 | `Cross-Validation: Example` |
| 15 | `Model Use` | 54 | `Example: Repeated K-Fold Cross-Validation` |
| 16 | `Model Use` | 55 | `Improving Model Performance` |
| 17 | `Model Use` | 56 | `Accuracy Improvement` |
| 18 | `Tree Construction` | 57 | `Boosting` |
| 19 | `Basic Steps in Tree Construction` | 58 | `Boosting Procedure` |
| 20 | `Review: Classification` | 59 | `Making Mistakes More Costlier than Others` |
| 21 | `Select Attributes to Split` | 60 | `Making Mistakes More Costlier than Others` |
| 22 | `Review: Attribute Selection` | 61 | `Q&A` *(그림 안 표기)* |
| 23 | `Determine how to split the instances` | 62 | `Supplementary Slides` |
| 24 | `Impurity` | 63 | `Example: Tree Construction` |
| 25 | `GINI Index` | 64 | `Example: Tree Construction (Cont.)` |
| 26 | `Three candidate variables` | 65 | `Example: Tree Construction (Cont.)` |
| 27 | `Gini Index` | 66 | `Example: Tree Construction (Cont.)` |
| 28 | `Female / Male` | 67 | `Binary Attributes: GINI Index` |
| 29 | `Gini Index After Splitting` | 68 | `Categorical Attributes: Gini Index` |
| 30 | `Gini(Gender)` | 69 | `Continuous Attributes: Gini Index` |
| 31 | `How to Find the Best Split` | 70 | `Continuous Attributes: Gini Index...` |
| 32 | `How to Find the Best Split` | 71 | `Lift Charts: How to Compute` |
| 33 | `The Constructed Tree` | 72 | `Lift Chart` |
| 34 | `Model Evaluation Metrics` | 73 | `Lift Chart – Cumulative Performance` |
| 35 | `Model Evaluation` | 74 | `Lift Chart: Goal` |
| 36 | `Apply Model to an Observation` | 75 | `Oversampling` |
| 37 | `Accuracy and Error Rate` | 76 | `An Oversampling Procedure` |
| 38 | `Alternate Accuracy Measures` | 77 | `Evaluation` |
| 39 | `ROC Curve` | 78 | `Boosted Trees` |

### 원본 유지·제외 판정

| 원본 장 | 판정 | 이유 |
|---:|---|---|
| 1 | 제외 | BUSS305·Seminar 7 표지. KMB689 정규 Wk11 표지로 쓸 수 없음 |
| 2–4 | 원천 | KMB689 보조표지, 분류 정의, 구축–평가–적용 흐름. 최종 1·5·7장으로 개정 |
| 5 | 제외 | 내용이 완성되지 않은 진행 장 |
| 6–7 | 원천 | 훈련/테스트 분리와 기법 개관. 최종 8·9장으로 개정 |
| 8–33 | 제외 | 의사결정나무 작동·Gini 계산 26장. Wk11의 `read logistic output` 범위를 벗어남 |
| 34–35 | 원천 | 모델 평가 구분. 최종 18장으로 통합 개정 |
| 36 | 제외 | 세금 회피 나무 적용 반복. Airbnb 로지스틱 사례와 불일치 |
| 37–38 | 원천 | 정확도·중요 클래스 평가. 최종 19–20장으로 개정 |
| 39 | 제외 | ROC. S11 7종과 설계에 요구되지 않음 |
| 40–54 | 제외 | 과적합·가지치기·교차검증 15장. 모델 훈련 상세이며 읽기 전용 목표를 침범 |
| 55–58 | 제외 | bagging·boosting 훈련법. 같은 이유 |
| 59–60 | 원천 | 오류 비용 비대칭과 cost matrix. 최종 25–26장의 유일한 직접 원천 |
| 61 | 제외 | Q&A 상용구 |
| 62–70 | 제외 | 보충 의사결정나무·Gini 계산 9장 |
| 71–74 | 제외 | lift curve. Wk13 향상도 1차 함정 소유 |
| 75–77 | 제외 | oversampling 훈련 절차. 읽기 전용 범위 밖 |
| 78 | 제외 | boosted trees 수식·훈련 상세 |

원천은 **11장**(2, 3, 4, 6, 7, 34, 35, 37, 38, 59, 60), 제외는 **67장**이다.
참고 자료였다는 사실이 재배치 판정을 직접 바꾼다. 정규 세션의 뼈대로 쓰지 않고 개념·평가 도판의 원천으로만 쓴다.

## 5 · BUSS256 대응 세션과 겹침

2025 Fall BUSS256의 정규 세션 폴더에는 Classification이 없다. 그러나 보관 폴더에 대응 덱이 있다.

| 실물 | 장수 | SHA-256 | 판정 |
|---|---:|---|---|
| `Old/Weeks 13-14/Seminars 22-24_Lecture_Notes.pptx` | 55 | `a98261a53d4218617a89dd68be69341b65d2129aa75494188de5617644f201dc` | 과거 BUSS256 Classification/Decision Tree 강의 |
| `Old/Weeks 13-14/Seminars 22-24_Tree Construction Example.pptx` | 5 | `d07765dcb2d4ba6eb4afbacca14c1a9c885e6cdd3a53f81b0159dede158184a1` | 나무 구축 보충 예제 |
| `Old/Weeks 13-14/Seminars 22-24_R Exercise.pptx` | 28 | `f4ecd4089d61706c6dcd47ba5b4ba6238b9498e68912ff753d67027d9e6a4556` | 과거 실습 덱 |

78장 KMB 참고 덱과 55장 BUSS 강의 덱을 정규화 문자열·순서·렌더로 대조했다.

대조 방법은 U+00A0·줄바꿈·탭·연속 공백만 정규화한 전문 완전 일치와, 페이지 번호를 뺀 문자열의
`SequenceMatcher` 유사도 0.52 이상 후보를 전후 순서·렌더로 재확인하는 방식이다.

- 정규화 전문 완전 일치: **14장**
  (`K5=B5, K7=B7, K8=B8, K10–18=B10–18, K21=B21, K46=B54`)
- 내용·순서·도판이 명백히 대응하는 KMB 장: **38장**, BUSS 원천 기준 **37장**
- 공통 줄기: KMB 3–18 ↔ BUSS 3–18, KMB 21–39 ↔ BUSS 21–46의 분류·나무·평가 흐름,
  KMB 40–48 ↔ BUSS 47–55의 과적합·가지치기 흐름
- KMB 49–60과 62–78은 교차검증·boosting·비용·보충 예제가 확장된 영역이다.

따라서 `BUSS256 대응 없음`은 **현행 정규 세션 없음**으로 한정해 읽는다. 과거 대응 덱은 존재한다.

**씨앗 판정:** 55장 Old 덱은 정본·마스터가 아닌 **보조 씨앗**으로만 쓴다. KMB 78장이 Wk11의 주 내용
출발점이며, BUSS 씨앗은 다음 다섯 장으로 한정한다.

| BUSS 원본 장 | 최종 장 | 씨앗으로 쓰는 이유 |
|---:|---:|---|
| 37–38 | 20 | 혼동행렬의 실제/예측 축과 네 칸을 읽는 일반형 구조가 분명하다. Airbnb 정답은 없다 |
| 42·44 | 22 | TP/FN/FP/TN과 sensitivity/specificity를 연결해 재현율의 일반형 질문을 세울 수 있다 |
| 40 | 23 | `9,990/10` 다수범주 예시는 기저율 기준선을 일반형으로 가르치면서 Airbnb의 `45.4%→약55%`를 숨긴다 |

이외 B1–32의 나무·Gini와 B47–55의 가지치기는 범위 밖이라 쓰지 않는다. Old 폴더라는 이유로 계보 정본으로
승격하지 않고, 선택한 다섯 장의 일반형 평가 문구만 provenance에 남긴다. 이 판정으로 최종 22·23장은
`신규`에서 `개정`으로 바뀌며, 합계는 개정 12·신규 31이다.

## 6 · 과목 표기와 한국어 용어 정정 목록

### 과목 표기

| 원본 장 | 현재 문자열 | 계획 |
|---:|---|---|
| 1 | `BUSS305: Artificial Intelligence for Business` · `Seminar 7` | **사용하지 않음**. 최종 표지에 들어오지 않게 G3/G6 검사 |
| 2 | `KMB689: Big Data for Business Applications` · `Supplementary Materials#1` | KMB689 표기는 유지하고 `Wk11 · 분류` 정규 세션 표지로 개정 |
| 3–78 | 다른 과목 코드 없음 | 새 footer·노트는 KMB689/Wk11만 사용 |

### 선택 원천의 용어

| 원본 장 | 원문 | 최종 한국어 기준 |
|---:|---|---|
| 3 | Classification · attributes/variables · class · outcome/target | 분류 · 속성/변수 · 클래스 · 결과/목표변수 |
| 4 | Model Construction · Model Evaluation · Model Use | 모델 구축 · 모델 평가 · 모델 적용 |
| 6 | Training Data · Test Data | 훈련 데이터 · 테스트 데이터 |
| 7 | Classification Techniques · Logistic Regression 등 | 분류 기법 · 로지스틱 회귀. 기법명 영어는 괄호 병기 |
| 34–35 | Model Evaluation Metrics | 모델 평가 지표 |
| 37 | Accuracy · Error Rate | 정확도(accuracy) · 오류율(error rate) |
| 38 | Sensitivity · Specificity | 재현율(recall/민감도)과 특이도(specificity)를 구분. 정밀도(precision)를 대신하지 않음 |
| 59 | Making Mistakes More Costlier than Others | 오류마다 비용이 다르다 · 비용 비대칭 |
| 60 | Cost Matrix · TP/FN/FP/TN | 비용 행렬 · 참양성/거짓음성/거짓양성/참음성, 영문 약어 병기 |

학생 설명은 한국어로 쓴다. 실제 표·그림 안 지표명은 `Predictor`, `Direction`, `Significance`, `Odds ratio`,
`Accuracy`, `Precision`, `Recall`처럼 영어를 유지한다. 이는 `design_plan` §8.8–§8.9의 언어 경계를 따른다.

## 7 · W1-X

`MBA_S11_Block1_LectureNotes_KR.md` 1.1에 정본 네 단계가 나온다. W1-X는 **활성**이다.

- 최종 3장: `기준을 세운다 → AI에게 시킨다 → 검증한다 → 결정한다.`
- 같은 장 하단: `분석을 직접 하지 말고, 결과를 읽고 검증한 뒤 결정한다.`
- 두 문자열 모두 Wk1 27장과 슬라이드 단위 정규화 대조
- 다른 장의 부분형·변형·화살표형 0건

## 8 · 배포 시점 감사

### 학생 자료별 판정

| 자료 | 답·반전 포함 | 최초 배포 계획 | 이유 |
|---|---|---|---|
| Block1 LectureNotes | **있음** | **2.4 종료 뒤** | §1.4가 슈퍼호스트를 목표 누출 정답으로 밝히고, 45.4%→약 55%를 계산함 |
| Case Handout | 강한 힌트·45.4% 원자료, 계산 답 없음 | **2.1** | 문서 자체가 2.1 배포를 지정. 표면 유인과 비즈니스 질문 역할 |
| Student AI Exhibit | **있음** | **2.3 시작** | 사실 박스와 검증 질문이 누출·오즈비·기저율 발견의 재료 |
| Verification Worksheet | **있음/유도형** | **2.3 시작** | 목표 누출을 명명하고 0→1·기저율 계산을 유도. 학생 발견 구간에서만 사용 |
| Instructor Exhibit | 정답판 | 학생 배포 금지 | 2.4 교원 회수용 |
| Instructor Demo Script | **정답 발화 포함** | 학생 배포 금지 | 강사도 §3 답 문구를 2.2에서 읽지 않음 |
| Discussion Prompts | 정답판 | 학생 배포 금지 | 2.4 회수용 |

Block1 LectureNotes는 이름과 달리 수업 전·1블록 배포물이 될 수 없다. 현재 파일을 수정할 권한은 없으므로,
이번 덱 계획은 **후배포**로 고정한다. 사전 배포가 필요하면 별도의 무답판을 만들지 교수 승인이 먼저 필요하다.

### 시연 대본의 내부 모순

대본 서두는 `정답은 주지 않는다`고 쓰지만 §3은 2.2에서 다음을 그대로 말한다.

- 슈퍼호스트는 성공의 원인이 아니라 결과의 이름표
- 편의시설 11배는 0→1 전 구간
- 45.4%라 무조건 실패만 찍어도 약 55%

이 셋은 학생 발견 뒤에 나와야 한다. 덱 40장은 질문에서 멈추고, 대본 §3의 답 문구는 43장 2.4 회수로 옮겨
사용한다. 원본 대본은 이번 계획 라운드에서 수정하지 않는다.

## 9 · 세 함정의 위계와 공개 순서

**판정: 목표 누출 1개를 중심에 두고, 기저율과 비용 비대칭을 보조 검증으로 둔다.**

근거:

1. S11 Block1 notes·Worksheet·Instructor Exhibit가 목표 누출을 `오늘의 1차 함정`·`핵심`으로 명시한다.
2. 기저율은 AI가 성과지표를 주지 않은 문제를 잡는다. 모델이 유용한지 검증하는 보조축이다.
3. 비용 비대칭은 원본 59–60장에만 직접 있고 S11 7종에는 Airbnb 비용 수치가 없다. 수치를 만들지 않고
   `오류 비용 자료가 없으므로 임계값·배포 정책을 확정할 수 없다`는 결정 보조축으로 쓴다.

Wk6과는 역할을 가른다. Wk6은 `같은 정확도라도 틀림의 값이 다르다`는 비즈니스 가치 원리를 평문으로 세웠고
기저율·정밀도·재현율·거짓양성·거짓음성 용어를 의도적으로 Wk11에 남겼다. Wk11은 비용 비대칭의 일반론을 다시
강의하지 않고, 혼동행렬의 오류 유형과 비용 행렬에 그 원리를 적용한다.

공개 순서:

1. **1블록 도구:** 일반형 목표 누출 질문, 다수범주 기준선, 오류 비용 행렬을 가르친다. Airbnb 답·45.4%→55% 금지.
2. **2.1 표면 유인:** AI의 `슈퍼호스트 11배·다섯 레버` 주장만 보여 준다.
3. **2.2 질문에서 멈춤:** `원인인가 결과 라벨인가`, `기저율을 넘나`, `어느 오류가 더 비싼가`만 묻는다.
4. **2.3 학생 발견:** 목표 누출 → 기저율·성과 누락 → 오류 비용 자료 부재 순으로 판정한다.
5. **2.4 회수·결정:** 처음으로 슈퍼호스트 정답, 약 55% 기준선, 비용 자료 없는 정책 결정 보류를 함께 회수한다.

## 10 · 목표 장수

목표는 **43장**이다.

- Wk8·Wk9와 같은 150분 기법 세션이며 1블록 75분 + 2블록 약 70분 + 운영 여유 약 5분이다.
- 1블록 35장은 평균 약 2.1분/장으로, 오즈비·성과지표·세 함정 도구를 한 장씩 분리해 읽을 수 있다.
- 2블록 8장은 사례 도입 3장, 질문 시연 2장, 학생 발견 2장, 회수 1장이다.
- 78장 참고 원본의 제작 알고리즘 67장을 버리고, S11 7종의 읽기·검증 흐름을 새로 세우므로 43장이 과도한
  축소가 아니라 정규 세션으로의 재구성이다.

## 11 · 43장 슬라이드 단위 계획

### 1블록 — 35장 / 75분

| 최종 장 | 판정 | 원천 | 계획·공개 경계 |
|---:|---|---|---|
| 1 | 개정 | 원본 2 | KMB689 Wk11 표지. `Supplementary` 제거 |
| 2 | 신규 | design plan·Block1 | 두 블록 경로와 75+약70분 |
| 3 | 신규 | Wk1 27·Block1 1.1 | 감독 신조 정확히 1회. W1-X |
| 4 | 신규 | Block1 1.1 | 학습목표: 읽기·검증·결정 |
| 5 | 개정 | 원본 3 | 분류 정의와 결과/목표변수 |
| 6 | 신규 | Block1 1.2·design plan | 예/아니오 결과와 MBA 의사결정 예시. Airbnb 정답 없음 |
| 7 | 개정 | 원본 4 | 모델 구축–평가–적용. 학생 역할은 평가·적용 판단 |
| 8 | 개정 | 원본 6 | 훈련/테스트 데이터와 보지 않은 사례 평가 |
| 9 | 개정 | 원본 7·Block1 1.2 | 분류 기법 중 오늘은 로지스틱 출력 읽기 |
| 10 | 신규 | Block1 1.2 | Wk8 연속값과 Wk11 이진 결과 경계 |
| 11 | 신규 | Block1 1.2 | 로지스틱 출력의 predictor·direction·significance·odds ratio |
| 12 | 신규 | Block1 1.2 | 계수에서 오즈비로 읽는 이유 |
| 13 | 신규 | Block1 1.2 | 오즈비 >1, =1, <1 |
| 14 | 신규 | Block1 1.2 | 오즈와 확률의 구분 |
| 15 | 신규 | Block1 1.2 | 오즈비의 단위·변수 구간 확인 |
| 16 | 신규 | Block1 1.2 | 유의성과 효과 크기 구분 |
| 17 | 신규 | Block1 1.2 형식 표 | 일반형 로지스틱 출력 읽기. Airbnb 변수·11배 없음 |
| 18 | 개정 | 원본 34–35 | 모델 평가로 전환 |
| 19 | 개정 | 원본 37 | 정확도와 오류율 |
| 20 | 개정 | 원본 38·60·BUSS Old 37–38·Block1 1.3 | 혼동행렬과 네 칸. 영어 지표명 유지 |
| 21 | 신규 | Block1 1.3 | 정밀도 정의와 확인 질문 |
| 22 | 개정 | BUSS Old 42·44·Block1 1.3 | 재현율 정의와 확인 질문. 과거 덱은 보조 씨앗만 사용 |
| 23 | 개정 | BUSS Old 40·Block1 1.3 | 기저율·다수범주 기준선 공식. 일반형 9,990/10 예시만, Airbnb 45.4%·55% 없음 |
| 24 | 신규 | Block1 1.3 | 정확도·정밀도·재현율을 먼저 요구하는 습관 |
| 25 | 개정 | 원본 59 | 오류마다 비용이 다르다 |
| 26 | 개정 | 원본 60 | 비용 행렬. 거짓양성·거짓음성의 비용 비교 |
| 27 | 신규 | 원본 59–60 | 비용 자료가 없을 때 무엇을 확정할 수 없는지 질문에서 멈춤. 답은 43장 |
| 28 | 신규 | Block1 1.4 | 목표변수 정의를 먼저 읽는 이유 |
| 29 | 신규 | Block1 1.4 | 일반형 목표 누출·순환 판정. 슈퍼호스트 언급 없음 |
| 30 | 신규 | Block1 1.4 | 예측 인자와 바꿀 수 있는 레버 구분 |
| 31 | 신규 | Block1 1.4·원본 59–60 | 세 함정의 위계: 누출 중심, 기저율·비용 보조 |
| 32 | 신규 | Block1 1.5 | 검증 5문 ①–③. 질문만 |
| 33 | 신규 | Block1 1.5·원본 59–60 | 검증 5문 ④–⑤와 비용 질문. 질문만 |
| 34 | 신규 | Block1 1.5 | 사례 전 준비 점검. 답 없음 |
| 35 | 신규 | Block1·Case | Airbnb 사례로 전환. `11배` 정답 판정 없음 |

### 2블록 — 8장 / 약 70분

| 최종 장 | 판정 | 원천 | 계획·공개 경계 |
|---:|---|---|---|
| 36 | 신규 | Case Handout | AirbnbSuccessSignals 상황·정책 결정. Case Handout 배포 |
| 37 | 신규 | Case Handout | 맨해튼 1,673곳·2018·성공=평점 5.0·45.4% 원자료. 계산 답 없음 |
| 38 | 신규 | Student AI Exhibit | AI의 다섯 레버·11배·천천히 응답 표면 주장만 |
| 39 | 신규 | Student/Instructor AI Exhibit + figD | 오즈비 도판 자리. 실물 부재 시 제목·자리만 두고 본문 공란 |
| 40 | 신규 | Demo Script 0–2 | 세 검증 질문을 소리 내어 묻고 멈춤. §3 정답 문구 금지 |
| 41 | 신규 | Student Exhibit + Worksheet | 2.3 배포. 학생이 슈퍼호스트의 원인/라벨 방향을 판정 |
| 42 | 신규 | Worksheet·원본 59–60 | 학생이 기저율을 계산하고 비용 자료 부재를 찾아 결정 보류 여부 기록 |
| 43 | 신규 | Instructor Exhibit·Discussion | 첫 답 공개: 목표 누출 중심 + 약55% 기준선 + 비용 자료 없는 임계값 결정 보류 |

### 판정 합계

| 판정 | 장수 | 적용 |
|---|---:|---|
| 그대로 | 0 | 다른 과목·영어 참고 덱이므로 무변경 장 없음 |
| 재배치 | 0 | 한국어 설명과 Wk11 공개 순서 때문에 위치만 옮기는 장 없음 |
| 개정 | 12 | 1, 5, 7, 8, 9, 18, 19, 20, 22, 23, 25, 26 |
| 신규 | 31 | 나머지 전 장. S11 7종·design plan·원본 59–60에 출처 필수 |
| **합계** | **43** | 1블록 35 + 2블록 8 |

## 12 · 게이트 계획

`DECK_GATE_CONVENTIONS.md`의 6게이트와 W1-X를 적용한다.

| 게이트 | 범위·합격 기준 |
|---|---|
| G1 구조 | 43장, 1블록 35·2블록 8, 개정 12·신규 31, 블록 경계 35/36 |
| G2 원문 보존 | 개정 12장만. 유지하기로 한 숫자·기호·문구를 슬라이드 단위 정규화 문자열로 대조. 승인된 번역·삭제·병합은 manifest와 대조 |
| G3 신규 근거 | 신규 31/31. S11 7종·design plan·선택 원본 외 무근거 사례·수치·정의 0건 |
| G4 정답 누출·배포 | 1블록·2.1·2.2에 `슈퍼호스트=결과 라벨`, `평점이 높아서 배지`, `약 55%`, Airbnb 비용 판정 0건. Block1 notes 후배포와 2.3 Student Exhibit/Worksheet 배포 확인 |
| G5 도판 | figD 실물과 student/instructor 판본 대조. 부재 상태 저작 시 39장 무본문 placeholder 확인 후 **미완·분모 제외** |
| G6 패키지·시각 | PPTX 열림, 43/43 렌더, 잘림·겹침·판독 불가 0건. 미적 통일은 후속 라운드 |
| W1-X | 3장에서 Wk1 27장 신조·하단 문구 정확히 1회. 부분형·변형 0건 |

G2의 주 대상은 개정 12장, G3의 주 대상은 신규 31장이다. 개정 장의 새 연결 문구는 provenance를 남기되 같은
전체 장을 두 분모에 중복 계상하지 않는다.

저작 뒤 대조군은 다음을 넣는다.

- G2: 원문 숫자 변경·단어 삭제
- G3: 무근거 정의·출처 누락
- G4: 40장에 `슈퍼호스트는 결과의 라벨` 또는 `약 55%` 조기 삽입
- G5: placeholder에 임의 도판·본문 삽입
- W1-X: 감독 신조 부분형·변형 삽입

## 13 · 저작 전 열린 항목

1. figD student/instructor 두 판의 실물 회수와 md5 대조
2. Block1 LectureNotes의 후배포 운영 승인. 사전 배포가 필요하면 별도 무답판 저작 승인 필요
3. 기존 Instructor Demo Script §3의 조기 답 발화를 덱 공개 순서에 맞춰 사용하지 않는다는 운영 확인

## 14 · 저작·게이트 결과

- 산출물: `teaching/KMB689/02_working/Wk11/KMB689_Wk11_Classification_R1.pptx`
- SHA-256: `f7e804dd47a08698e5e6a63e1948d345d8d63ca80727942d5a531338cbbfa771`
- 구조: 43장 · 1블록 35 + 2블록 8 · 개정 12 + 신규 31
- G1·G2·G3·G4·G6·W1-X: **6/6 통과**
- G5: figD student/instructor 두 판 부재. 39장 제목·위치·페이지 외 공란, 도판·표·차트 0건.
  **미완·합격 분모 제외**. 실물 회수 뒤 별도 완결한다.
- 첫 육안검토에서 27장의 일반 결론도 비용 비대칭의 학생 도달점을 앞당길 수 있다고 판정했다. 초판을
  `/tmp/kmb689_wk11_g4_precaution.7vB6kN`에 격리하고, 27장을 질문형으로 바꿔 43장에서만 답을 공개했다.
- 43/43 최종 렌더: 잘림 0 · 겹침 0 · 판독 불가 0.
- 대조군: 원천 수치 변경 · 무근거 장 · 조기 답 · 금지 문구 · placeholder 본문 삽입 · 신조 부분형을 모두 검출했다.

강사 대본은 수정하지 않았다. Wk11·Wk12·Wk13의 공개 순서 모순과 수정 방향은
`docs/rounds/MATERIAL_REVISION_ITEMS.md`에 별건으로 기록했다.
