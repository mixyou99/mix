# KMB689 덱 개정 — 착수 전 실측 (2026-09-10)

> **1단계·2단계 모두 착수하지 못했다.** 기준 문서가 첨부되지 않았고,
> 1단계 승격 대상(`02_working`)이 어디에도 없다. 2단계 실측 4건 중 **2건만 가능**하다.
> 산출물은 만들지 않았다.

---

## 1 · 기준 문서 — 부재

`KMB689_SESSION_MAPPING.md` 가 **첨부되지 않았다.**

- 업로드 디렉터리: `5ca5b1df-R2_handoff_20260909.zip` · `9a77d97e-R2_inputs_20260909.zip` 둘뿐(어제 R2 것)
- 컨테이너 전역 `*SESSION_MAPPING*` · `*KMB689*` — **0건**
- Dropbox 파일명 검색 — **0건**

16주 설계·13주 세션 목록·2025 Spring 12세션의 근거가 전부 이 문서에 있으므로,
**없으면 1단계의 대상 목록조차 확정할 수 없다.**

## 2 · 1단계 승격 — 대상이 없다

| 대상 | 실측 |
|---|---|
| `02_working` | **부재** (컨테이너 전역 0건) |
| `03_final` | **부재** — 기존 시험 자산 6종도 확인 불가 |
| `Wk1_final` ~ `Wk14_final` | **부재** |

승격은 "검증된 바이너리를 바이트 동일 복사"인데 **복사할 원본이 없다.**
2026-08 시험 자산 승격에서 검증된 패턴을 재사용하라 하셨으나, 그 패턴이 적용된
`03_final` 구조 자체가 이 컨테이너에 없어 **덮어쓰기 위험도 판정할 수 없다.**

## 3 · 2단계 Wk10 실측 — 4건 중 2건 가능

| 요구 항목 | 실측 |
|---|---|
| MBA_S10 자료 7종 전문 | **부재** — `MBA_S10*` 컨테이너·Dropbox 모두 0건 |
| `MBA_S10_Clustering_blueprint.md` §1 분 배분 | **부재** |
| `MBA_S10_figures/figC_dbscan_clusters_EN.png` | **부재** |
| 기존 덱 두 개의 슬라이드 목차 | **가능** — 아래 |

### 덱 두 개는 Dropbox 에 있다

**KMB689 (54장이라 하신 것)**
`/3_Teaching/2025/Spring/4_KBM_689_Big Data/Seminar 10 Clustering/`
- `Seminar 10_Lecture_Clustering.pptx` 5,822,035 B · 2025-05-26
- `Seminar 10_Lecture_Clustering.pdf` 1,058,101 B
- `Exercise/` — `Seminar10_Clustering_R_Exercise.pptx`·`.pdf`·`_Code.r`·`snsdata.csv`

**BUSS256 (64장이라 하신 것)**
`/3_Teaching/2025/Fall/BUSS256_BigData/Seminar 10-11 Clustering/`
- `Seminars 10-11_Clustering_Lecture_Inclass2_25F.pptx` 5,911,225 B · 2025-11-24
- 같은 폴더에 `Inclass1_25F` · 기본 `Lecture.pptx/.pdf` · 구 포크 다수 · `Exercise/snsdata.csv`

⚠ **목차 추출에 제약이 있다.** 이 컨테이너는 Dropbox CDN 다운로드가 프록시 정책에
막혀 있고(`dl.dropboxusercontent.com` 403), 커넥터의 서버측 추출은 **5 MiB 상한**이다.
두 `.pptx` 는 각각 5.55 · 5.64 MiB 로 **상한을 넘는다.**
→ KMB689 는 **PDF(1.0 MB)로 목차를 뽑을 수 있다.** BUSS256 `Inclass2_25F` 는
   대응 PDF 가 없어 **현재 수단으로는 목차를 뽑지 못한다.**

### 데이터

`snsdata.csv` (2,461,306 B)는 두 폴더 모두에 있다. `admission.csv` 는 확인하지 않았다.
DBSCAN 실측(eps=3.0, minPts=25 → 5군집, 26.9% 잡음)의 재현은 청사진이 와야 대조가 성립한다.

---

## 4 · 필요한 것

1. **`KMB689_SESSION_MAPPING.md`** — 기준 문서. 이것 없이는 1단계 대상 목록이 확정되지 않는다
2. **`02_working` 트리** — 13주치 세션 자료 + 기존 `03_final` 구조(덮어쓰기 판정용)
3. **MBA_S10 자료 7종 + 청사진 + `figC_dbscan_clusters_EN.png`**
4. **BUSS256 `Inclass2_25F` 의 PDF 판**, 또는 pptx 를 이 세션에 직접 업로드
   (5 MiB 상한과 CDN 차단을 함께 우회하는 유일한 경로)

1·2 가 오면 1단계를, 3·4 가 오면 2단계 실측을 진행한다.
**계획만 내라 하셨으므로 저작은 하지 않는다.**
