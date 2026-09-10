# ReviewResponsePlaybook — 케이스 산출물

R2 + B·C·D·F (2026-09-09) 전 게이트 통과분. **배포 형태(docx)만 둔다.** 편집 원본(`.md`)과
렌더러·게이트는 `work/reviewresponse/` 에 있다.

```
student/    FULL_KR.docx · FULL_EN.docx                본문 (P-4 반영)
            EXHIBITS_KR.docx · EXHIBITS_EN.docx        Exhibit A–E (D-1~D-9 · B·C·D 반영)
            EXHIBITS_F_KR.docx · EXHIBITS_F_EN.docx    별지 F — 학생 실습(문제만)
instructor/ TEACHINGNOTE_KR.docx · TEACHINGNOTE_EN.docx  교원 노트 ①~⑧ (2026-09-10)
```

⚠ **임원 세미나 배포 시 별지 F 는 제외한다.** 본문과 Exhibit A–E 만 배포한다.

⚠ **교원 노트는 학생·임원 어느 쪽에도 배포하지 않는다.**

## 아직 없는 것

- `reference/brief_KR·EN` — `Research_Cases.zip` 의 `Old_Case/` 에 있으나 이 저장소에 미반입.
  승격은 바이트 동일 복사라 여기 없는 것은 올릴 수 없다. 반입되면 그때 얹는다.
- 임원 세션 60분 대본 · 1장 요약 슬라이드 — CASE_LOG 가 교원 노트 부록으로 기록한 산출물.
  이번 교원 노트 범위(①~⑧)에 들어 있지 않다.

## 승격 — 완료 (2026-09-10)

`teaching/KMB689/03_final/cases/ReviewResponsePlaybook/` 로 **8건 승격.**
바이트 동일 복사 · md5 전수 대조 8/8 동일 · 불일치 0.
상세 → `docs/rounds/ReviewResponsePlaybook_promotion.md`

## 검증 상태 (2026-09-09)

| | KR | EN |
|---|---|---|
| E-G0 · E-G3 · E-G4 · E-G5 | PASS | PASS |
| E-G7 (미해명 0) | PASS | PASS |
| E-G7R (`required_AE.txt` 55종 · `required_BCD.txt` 35종) | PASS | PASS |
| E-G8 (사유표 13행 / 19행 · 오류 0) | PASS | PASS |
| E-G9 (KR/EN 등가) | PASS — 쌍 검사 | |
| 별지 F (E-G4S · E-G7R 미적용) | PASS 7/7 | PASS 6/6 |
| 교원 노트 (`--kind supplement` · 2026-09-10) | PASS 7/7 | PASS 7/7 |

상세 → `docs/rounds/ExhibitAE_R2_report.md`
