# KMB689 덱 개정 — 입력 꾸러미 (2026-09-09)

착수 전 실측에서 부재로 판정된 자료를 채운 것이다. 원본 무수정.

## 무엇이 들어 있나

```
KMB689_SESSION_MAPPING.md        ← 기준 문서. 이것부터 읽는다
S10/                             ← 2단계 Wk10 군집 자료 (11개)
  MBA_S10_Clustering_blueprint.md          §1 분 단위 배분이 여기 있다
  MBA_S10_Block1_LectureNotes_KR.md
  MBA_S10_Case_Handout_KR.md
  MBA_S10_AI_ClusterInterp_Exhibit_KR{,_STUDENT,_INSTRUCTOR}.md
  MBA_S10_Verification_Worksheet_KR.md
  MBA_S10_Discussion_Prompts{,_INSTRUCTOR}_KR.md
  MBA_S10_Instructor_Demo_Script{,_INSTRUCTOR}_KR.md
  EXISTING_DECK_OUTLINES.md                기존 덱 두 개의 슬라이드 목차
promotion_source/                ← 1단계 승격 대상 13주치 markdown
  Wk1_final/ … Wk14_final/
  _existing_03_final/                      현재 03_final 실물 (시험 자산 6종)
reference/
  MBA_BigData_design_plan.md               16주 설계 §3
  Wk_curriculum_gap_audit.md               GA1·GA2·GA3
  MBA_BigData_scoping.md
  DECK_CANON_2027S.md                      덱 정본 판정표
```

## 해소된 부재 항목

| 지난 보고의 부재 | 상태 |
|---|---|
| `KMB689_SESSION_MAPPING.md` | ✅ 최상단 |
| `02_working` 승격 대상 | ✅ `promotion_source/` (markdown만) |
| 기존 `03_final` 구조 | ✅ `promotion_source/_existing_03_final/` |
| MBA_S10 자료 7종 | ✅ `S10/` (11개 — 분리본 포함) |
| S10 청사진 | ✅ `S10/MBA_S10_Clustering_blueprint.md` |
| 기존 덱 두 개 목차 | ✅ `S10/EXISTING_DECK_OUTLINES.md` |

## 여전히 부재 — 그리고 그 영향

**`MBA_S10_figures/figC_dbscan_clusters_EN.png`** — 회수 꾸러미 P1 이 `.md·.csv·.js·.py` 로
필터돼 있어 도판이 빠졌다. **P2 (렌더 산출물, 55MB) 에 있을 가능성이 높다.**
계획 단계에서는 청사진 §5 의 도판 서술로 충분하고, 저작 단계에 실물이 필요하다.

**DOCX·PDF 렌더 산출물** — 같은 이유로 P1 에 없다. 승격이 "바이트 동일 복사" 이므로
**최종 승격에는 렌더 산출물이 필요하다.** 아래 §승격 범위 판단 참조.

**BUSS256 `Inclass2_25F` 원본 pptx** — 5 MiB 상한·CDN 차단으로 컨테이너에서 못 읽는다.
대신 **슬라이드 목차를 텍스트로 추출해 `EXISTING_DECK_OUTLINES.md` 에 넣었다.**
계획 수립에는 목차로 충분하다. 저작 시 원본이 필요하면 그때 별도 전달한다.

## 승격 범위 판단 — 먼저 보고할 것

`promotion_source/` 에는 **markdown 만** 있다. 시험 자산 승격(2026-08)은 `md·docx·pdf`
3형식을 모두 올렸다. 그래서 두 갈래다.

- **(가) 3형식 전부 승격** — 시험 자산과 같은 방식. **렌더 산출물 전달이 선행돼야 한다**
- **(나) markdown 먼저 승격, 렌더 산출물은 뒤에** — 덱 작업은 markdown 을 읽으므로
  이것만으로도 2단계가 열린다

**어느 쪽인지 판단해 먼저 보고하라.** 부족한 자료를 전제로 착수하지 마라.

## 규약

원본 대조 규약(`SOURCE_IDENTITY.md`)이 그대로 적용된다.
이 꾸러미의 파일은 **Cowork 워크스페이스에서 회수한 것**이며 Dropbox `3_Teaching` 의
강의 아카이브와는 다른 트리다. 혼동하지 말 것.
