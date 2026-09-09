# ReviewResponsePlaybook — 회수 패키지
생성: 2026-09-09 · 목적: 세션 만료 대비 파일 회수 · **원본 무수정**

## 경로 규칙
- `workspace/…` = Teaching-Workspace 기준 상대 경로 보존
- `_outputs/`  = 워크스페이스 외부(outputs 폴더) 산출물

## 부재 항목 (생성하지 않음)
- **ReviewResponsePlaybook_hardfacts.md** — 부재. 워크스페이스·/tmp·outputs 전역 탐색 결과 없음.
- **/tmp/R2/ R2 렌더 산출물 8개** (EXHIBITS/FULL × KR/EN × docx/pdf) — 소실.
  컨테이너 재시작으로 /tmp 초기화됨.
- **/tmp/AE_KR.bak · /tmp/AE_EN.bak** (R2 착수 시 백업) — 동일 사유로 소실.
  단, 두 백업의 내용은 소실 전 EXHIBITS_*.md 에 복원 완료되어 디스크에 남아 있음.

## 파일 상태 주석
- `EXHIBITS_KR.md` / `EXHIBITS_EN.md` (mtime 2026-09-09 02:31)
  = **R2 롤백 완료본**. R2 편집(D-1~D-9) 미적용, 백업 시점 상태.
- `FULL_KR.md` / `FULL_EN.md` (mtime 2026-09-09 02:25~26)
  = **P-4 편집 적용 상태**. 롤백 미완 — §6은 원문 확인됨, §7 원문 미확보로 중단.
- `FULL_*.docx` / `FULL_*.pdf` (mtime 2026-09-05 13:05)
  = **P-4 이전 렌더**. .md 와 불일치. P-4 마커 부재를 zip 스캔으로 확인.
- `scripts/SCAN_NOTES.md` (mtime 2026-09-09 02:26) = P-5 보정 2줄(L258–259) 포함 상태.
