#!/usr/bin/env python3
"""
V1c — 학생/교원 내용 단위 분리 게이트 (치명)

학생 배포본 docx 내부에 교원 전용 문자열이나 별지 정답 튜플이 들어 있지 않은지
`<w:t>` 실물에서 검사한다. 파일 단위 분리(V1)만으로는 못 잡는 누출을 잡는 게 목적.

── 검사식 예외 (2026-08-26 등록) ───────────────────────────────────────────
`정답` 단독 매칭은 **오탐**이다. 케이스 본문 §10의 마무리 문장
    "유일한 정답은 없다."
가 student/FULL_KR 2종에 각 1회 등장한다. 이는 서사의 종결 문장이며
정답키 누출이 아니다. **산출물은 고치지 않는다 — 검사식을 좁힌다**(G2′ 원칙:
오탐이 나면 검사식을 고치지 산출물을 고치지 않는다).

따라서 `정답`은 단독으로 보지 않고, 실제 정답키를 가리키는 패턴으로만 본다:
    정답:  /  정답 수치  /  정답키  /  정답은 다음  /  answer key
`유일한 정답은 없다`는 명시적 화이트리스트로도 한 번 더 보호한다.
──────────────────────────────────────────────────────────────────────────

사용: python3 gate_v1c.py <student_docx> [<student_docx> ...]
      python3 gate_v1c.py --case-dir 03_final/cases/PrivacyLabelsMinimization
"""
import re, sys, zipfile, html, glob, os

# 교원 전용 라벨 — 단독 등장만으로 위반
HARD_LEAKS = ["강사용", "instructor", "Instructor", "INSTRUCTOR",
              "교원 노트", "Teaching Note", "teaching note"]

# 정답키 지시 패턴 — `정답` 단독이 아니라 이 형태만 위반
ANSWER_PATTERNS = [r"정답\s*:", r"정답\s*수치", r"정답키", r"정답은\s*다음",
                   r"[Aa]nswer\s*[Kk]ey", r"correct\s+answers?\s*:"]

# 오탐 방지 화이트리스트 — 서사 종결 문장
WHITELIST = ["유일한 정답은 없다", "There is no single right answer",
             "no single right answer"]

# 케이스별 별지 정답 (토큰 경계로 검사)
#
# ⚠ 오탐 주의 (2026-08-26 정정): InvoiceAutopilot에 `0.975`를 넣었다가 FAIL이 났는데,
#    이는 별지 정답이 아니라 **원고 Table 7의 필드 단위 정확도 97.5%** 로,
#    본문·Exhibit에 정당하게 실리는 실측값이다. 별지 정답이 아닌 값을 정답 목록에
#    넣으면 정상 산출물이 FAIL로 뜬다 → 매핑에서 제거.
#    (InvoiceAutopilot의 별지 정답은 수치 튜플이 아니다 — 아래 ANSWER_DISCLOSURE_PATTERNS 참조.)
SUPPLEMENT_ANSWERS = {
    "PrivacyLabelsMinimization": ["0.64", "0.60", "0.21", "0.36"],
    "PrivacyLabelsUtilization":  ["0.29", "0.57", "0.17", "0.67"],
    "ReviewResponsePlaybook":    ["0.40", "0.25", "0.10"],
}

# 수치가 아닌 별지 정답 — **정답 공개 문장** 패턴으로만 검사한다.
#
# ⚠ 오탐 주의 2 (2026-08-26 재정정): `Holden` 토큰 자체를 금지했다가 또 FAIL이 났다.
#    InvoiceAutopilot 별지 F의 실습은 **송장(Sender Name: Halden) ↔ AI 추출 행
#    (Sender Name: Holden)을 대조해 어긋난 필드를 찾는 것**이다. 두 철자가 모두
#    문제지에 있어야 문제가 성립한다. 교원 전용인 것은 철자가 아니라
#    "심긴 오류는 발행처명 Halden→Holden" 처럼 **답을 알려주는 문장**이다.
#    → 토큰 금지가 아니라 정답 공개 문장 패턴으로 좁힌다.
ANSWER_DISCLOSURE_PATTERNS = [
    r"심긴\s*오류(는|가)", r"planted\s+error\s+is", r"정답\s*수치\s*[:：]",
    r"[A-Za-z가-힣]+\s*→\s*[A-Za-z가-힣]+\s*\((예시|illustrative)\)",
]

SEP = "\x1f"   # 런 구분자 — 셀 경계가 사라져 허위 토큰이 생기는 것을 막는다


def docx_text(path):
    """<w:t> 실물 추출. 정규식은 <w:t(?:\\s[^>]*)?> — <w:top>·<w:tblPr> 오탐 방지."""
    xml = zipfile.ZipFile(path).read("word/document.xml").decode("utf-8")
    runs = re.findall(r"<w:t(?:\s[^>]*)?>(.*?)</w:t>", xml, re.S)
    return SEP.join(html.unescape(r) for r in runs)


def check(path):
    text = docx_text(path)
    masked = text
    for w in WHITELIST:                       # 화이트리스트 문구를 먼저 가린다
        masked = masked.replace(w, " " * len(w))

    findings = []
    for s in HARD_LEAKS:
        n = masked.count(s)
        if n:
            findings.append(f"교원 라벨 '{s}' × {n}")
    for pat in ANSWER_PATTERNS:
        m = re.findall(pat, masked)
        if m:
            findings.append(f"정답키 패턴 /{pat}/ × {len(m)}")

    base = os.path.basename(path)
    case = next((c for c in SUPPLEMENT_ANSWERS if c in base), None)
    if case:
        for v in SUPPLEMENT_ANSWERS[case]:
            n = len(re.findall(re.escape(v) + r"(?!\d)", masked))   # 토큰 경계
            if n:
                findings.append(f"별지 정답 '{v}' × {n}")
    for pat in ANSWER_DISCLOSURE_PATTERNS:
        m = re.findall(pat, masked)
        if m:
            findings.append(f"정답 공개 문장 /{pat}/ × {len(m)}")

    # 참고: 화이트리스트가 실제로 쓰였는지 기록(예외가 살아 있는지 확인용)
    wl = [w for w in WHITELIST if w in text]
    return findings, wl


def main(argv):
    if argv and argv[0] == "--case-dir":
        targets = sorted(glob.glob(os.path.join(argv[1], "student", "*.docx")))
    else:
        targets = argv
    if not targets:
        print(__doc__); return 2

    failed = 0
    for p in targets:
        findings, wl = check(p)
        ok = not findings
        failed += not ok
        mark = "PASS" if ok else "FAIL"
        note = f"  (화이트리스트 적용: {wl})" if wl else ""
        print(f"[{mark}] {os.path.basename(p)[:60]}{note}")
        for f in findings:
            print(f"        ⚠ {f}")
    print(f"\nV1c 종합: {len(targets)}파일 중 위반 {failed} — "
          f"{'PASS' if failed == 0 else 'FAIL'}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
