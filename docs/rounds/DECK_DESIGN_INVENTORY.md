# KMB689 덱 디자인 인벤토리

작성: 2026-09-10
상태: 내용 저작 단계의 누적 기록

## 0 · 현재 방침

전 주차의 **내용 저작을 먼저 끝내고**, 마스터·서체·색 체계의 통일은 별도 디자인 라운드에서 한다.
현재 라운드에서는 미적 개선에 시간을 쓰지 않는다. 다만 G6의 합격선은 낮추지 않는다.

- 잘림 0건
- 겹침 0건
- 판독 불가 0건
- 정상 PPTX 패키지·관계·렌더 장수

위 네 조건을 넘는 미적 정돈, 마스터 통합, 서체 통일, 색 재조정은 후속 디자인 라운드 범위다.
새 주차 덱을 저작할 때마다 이 문서에 실제 사용 마스터·서체·색 체계와 기존 주차와의 차이를 추가한다.

## 1 · 주차별 실측

| 주차 | 산출물·상태 | 마스터·레이아웃·테마 | 서체 | 주 색 체계 | 차이·후속 통일 포인트 |
|---|---|---|---|---|---|
| Wk1 | `KMB689_Wk1_Orientation_Supervision_R1.pptx` · 47장 · SHA-256 `d66710c6…` | Class25S 원본 기반 · master 1 · layout 19 · theme `Plaza` | 테마 major/minor `Century Gothic`; 실제 본문 중심 `Apple SD Gothic Neo`, 보조 `Times New Roman`, `Arial` | `#A50000` 적색 · `#002060` 남색 · `#333333` 본문 · `#666666` 보조 · `#F3F4F6` 바탕 | Wk6과 같은 계열. (나) 5장은 교수 직접 입력 자리라 디자인 통일 전까지 제목 외 본문 공란 유지 |
| Wk6 | `KMB689_Wk6_Good_Analysis_R1.pptx` · 36장 · SHA-256 `a5aab383…` | Wk1 Class25S 원본을 시각 마스터로 사용 · master 1 · layout 19 · theme `Plaza` | 테마 major/minor `Century Gothic`; 실제 본문 중심 `Apple SD Gothic Neo`, 보조 `Times New Roman` | Wk1과 동일한 `#A50000`·`#002060`·`#333333`·`#666666`·`#F3F4F6` 계열 | Wk1과 이미 가까움. 전 장 신규라 원본 내용이 아니라 마스터·기본 스타일만 공유 |
| Wk10 | `KMB689_Wk10_Block1_Clustering_R3.pptx` · 35장 · SHA-256 `67e2c987…` | BUSS256 군집 원본 기반 · master 1 · layout 13 · theme `Theme1` | 테마 major `Helvetica Neue`, minor `Helvetica Neue Light`; 실제 본문 `Apple SD Gothic Neo`, `Helvetica Neue`, `Arial`, `Times New Roman` 혼용 | NTU `Deep Red`: `#C60C30` 적색 · `#003478` 청색 · `#C49000` 금색 · `#262626` 본문 · `#5B6573` 보조 | Wk1·Wk6과 마스터, 라틴 서체, 적·청 색값이 모두 다름. 후속 통일 라운드의 주요 대상 |
| Wk8 | `KMB689_Wk8_Regression_CausalInference_R1.pptx` · 43장 · SHA-256 `2c0acdb3…` | BUSS256 LRM 원본 기반 · master 1 · layout 11 · theme `NTUPowerpointTemplate_Aug2010` | 테마 major `Helvetica Neue`, minor `Helvetica Neue Light`; 실제 `Apple SD Gothic Neo`, `Helvetica Neue`, `Book Antiqua`, `Tahoma`, `Times New Roman` | NTU `Deep Red`: `#C60C30` 적색 · `#003478` 청색 · `#C49000` 금색 · `#262626` 본문 | Wk10과 같은 Theme1/NTU 색 계열. 재배치 장이 원본 라틴 서체를 유지하고 신규 한국어 장은 Apple SD Gothic Neo 중심. 후속 통일 대상 |
| Wk9 | `KMB689_Wk9_Visualization_MeasurementValidity_R1.pptx` · 43장 · SHA-256 `7cfa4d77…` | KMB689 119장 InClass 대조본 기반 · master 1 · layout 14 · theme `NTUPowerpointTemplate_Aug2010` | 테마 major `Helvetica Neue`, minor `Helvetica Neue Light`; 실제 `Apple SD Gothic Neo`, `Helvetica Neue`, `Helvetica Neue Light`, `Times New Roman`, `ＭＳ Ｐゴシック` | NTU `Deep Red`: `#C60C30` 적색 · `#003478` 청색 · `#C49000` 금색 · `#262626` 본문 · `#5B6573` 보조 | Wk8·Wk10과 같은 NTU 계열. 원천 장의 서체·도판은 유지하고 신규 장은 Apple SD Gothic Neo 중심. P2 도판 반입 전 37·38·42장 본문 공란 |
| Wk11 | `KMB689_Wk11_Classification_R1.pptx` · 43장 · SHA-256 `f7e804dd…` | KMB689 `[참고] Classification` 78장 기반 · master 1 · layout 12 · theme `Theme1` | 테마 major `Helvetica Neue`, minor `Helvetica Neue Light`, EA `ＭＳ Ｐゴシック`; 실제 `Apple SD Gothic Neo`, `Helvetica Neue` | NTU `Deep Red`: `#C60C30` 적색 · `#003478` 청색 · `#C49000` 금색 · `#262626` 본문 · `#5B6573` 보조 | Wk8·Wk9·Wk10과 같은 NTU 계열. 전 장은 내용 저작 우선의 평면 구성. Old BUSS256 55장은 마스터가 아닌 보조 씨앗. figD 회수 전 39장 본문 공란 |

## 2 · 마스터 원천 정체

| 사용 주차 | 원천 PPTX | SHA-256 | 역할 |
|---|---|---|---|
| Wk1·Wk6 | `work/source/KMB689_Wk1_S1_Course_Introduction_Class25S.pptx` | `b0ef19f9a9763b2d9dbaa8bdb2d553dc9b6b8b48c62b51f5f98b9dd67f9c0f55` | Plaza 마스터와 기본 레이아웃 |
| Wk10 | `Seminars 10-11_Clustering_Lecture_Inclass2_25F.pptx` | `e2c25691da97572feb7a2a633ffd9d8ed500aa502e4275a4e20c3b2b1ef01b81` | NTU Deep Red 마스터와 재사용 슬라이드 |
| Wk8 | `Seminars 8-9_Linear Regression Model_InClass3_F25.pptx` | `f41e514e76e13f9a00dc8ec2b06e49323e91aabe940acbb7e3fabfb4fcdc3036` | NTU Deep Red 마스터, 재배치·개정 19장의 내용 출발점 |
| Wk9 | `Seminar 9_Lecture_Data Visualization_InClass.pptx` | `ff4cf50718afce4e61f2b01a7e6853fb7757cf29d2a8fe5ac7b33b6c1059cc52` | NTU Deep Red 마스터와 재배치·개정 17장의 편집 원천. 배포 정본은 별도 107장 판(`bad93f93…`) |
| Wk11 | `Extra_Lecture_Classification.pptx` | `079f9eb225a251a75dad0398bbf703121c084f024c8de961a2a6f153741690cc` | Theme1/NTU 마스터와 개정 10장의 주 내용 원천. Old BUSS256 55장은 개정 3장의 보조 씨앗이며 마스터로 쓰지 않음 |

## 3 · 현재 확인된 주차 간 차이

1. **마스터:** Wk1·Wk6은 Plaza/19 layouts, Wk10은 Theme1/13 layouts, Wk8은 NTU/11 layouts, Wk9는 NTU/14 layouts, Wk11은 Theme1/12 layouts다.
2. **라틴 서체:** Wk1·Wk6의 테마는 Century Gothic이고, Wk8·Wk9·Wk10은 Helvetica Neue 계열이다.
3. **한국어 서체:** 현재 덱들은 실제 본문에 Apple SD Gothic Neo를 주로 쓴다.
4. **색:** Wk1·Wk6은 `#A50000`·`#002060`, Wk8·Wk9·Wk10·Wk11은 `#C60C30`·`#003478`·`#C49000`이다.
5. **현재 판정:** 차이는 기록만 한다. 내용 저작 단계에서는 G6의 판독성 결함만 고치며, 색·서체·마스터
   통일을 이유로 슬라이드를 다시 디자인하지 않는다.
