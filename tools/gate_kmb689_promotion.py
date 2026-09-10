#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
KMB689 세션 자료 승격 + 검증 게이트 (2026-09-10)

승격 = 바이트 동일 복사. 재렌더·정정·정돈 일절 없음.
2026-08 시험 자산 승격 패턴을 그대로 따른다: 파일명으로 학생/교원을 가르고,
복사한 뒤 원본과 md5 를 전수 대조한다.

검증 세 항목 — 전부 통과해야 확정 (교수 지정, 2026-09-09)
  V1  학생/교원 물리 분리 — student 에 KEY·INSTRUCTOR 0건, instructor 에 STUDENT 0건. 치명
  V2  내용 무변경 — 원본과 md5 전수 대조
  V3  개수·구조 — reports·scripts·drafts·archive·blueprint 는 03_final 에 0건

V1c 는 교수가 지정한 세 항목에 없다. 다만 2026-08 케이스 승격이 파일명 분리(V1) 와
내용 분리(V1c) 를 나눠 본 전례가 있어, 내용 주사를 **보조 실측**으로 함께 돌린다.
합격·불합격 판정에는 넣지 않고 수치만 보고한다.

  ※ 배분 규칙은 꾸러미가 이미 갈라 놓은 네 주차(Wk1·2·6·14)로 검증했다.
    파일명 규칙이 꾸러미 자체 분리와 40/40 일치했다 — 그래서 평면 네 주차
    (Wk3·4·5·8-13)에 같은 규칙을 적용한다. 근거 없는 규칙이 아니다.
"""
import argparse, hashlib, re, shutil, sys
from pathlib import Path

# ── 배분 규칙 ────────────────────────────────────────────────────────────────
# 대소문자 무시. 실측상 구분/무시 두 규칙의 판정이 112/112 동일했으므로
# 안전한 쪽(무시)을 쓴다 — Instructor 처럼 섞여 쓴 표기를 놓치지 않는다.
INSTRUCTOR_TOKEN = re.compile(r"KEY|INSTRUCTOR", re.I)
STUDENT_TOKEN    = re.compile(r"STUDENT", re.I)

# 승격 제외 — 저작·정정 이력이 배포본에 섞이면 안 된다 (시험 자산 때와 같은 이유)
EXCLUDE = re.compile(
    r"blueprint|report|draft|archive|audit|scoping|design_plan|canon|outline",
    re.I)

# 보조 실측: 학생 배포본에 남아서는 안 되는 내용 표식
#
# ── 정정 이력 (2026-09-10) — G2′ 산출물이 아니라 검사를 고친다 ──────────────
# 초판 패턴은 학생 폴더에서 6건을 올렸는데 **전건 오탐**이었다. 실물:
#   "정답은 하나가 아니다"                    (Wk14_03, Wk6_02)
#   "유일한 정답은 없다 — … 채점 대상이다"    (Wk7_02_midterm_STUDENT, Wk16_01_final_STUDENT)
#   "정답 라벨이 없다 … 채점표가 없다"        (Wk4_01, 비지도학습 설명)
# 전부 "정답이 하나가 아니다" 는 교육적 서술이지 정답 공개가 아니다. 정반대다.
# 원인은 두 갈래다.
#   (1) `정답\s*은` — 조사 '은' 을 공개 형태로 본 것. 한국어에서 "정답은 …" 은
#       공개보다 부정문에 훨씬 자주 붙는다. 판별력이 없다.
#   (2) `채점\s*표` — "채점표가 없다" 를 잡았다. 역시 부정문이다.
# 그래서 **공개 형태만** 남긴다: 콜론이 따라오거나("정답:"), 공개를 뜻하는 명사가
# 붙은 것("정답 예시·해설·풀이", "모범 답안"), 또는 머리표로 선 것.
# 부정 문맥(없다/아니다/않다)이 20자 안에 따라오면 제외한다.
#
# 성능 저하가 없다는 증명은 대조군으로 한다 — 실제로 정답이 들어 있는
# instructor/ 폴더에는 여전히 불이 들어와야 한다. 아래 --control 로 잰다.
NEG_CTX = re.compile(r"(?:없|아니|않)")

CONTENT_MARKERS = [
    ("교원 전용 표기", re.compile(r"교원\s*전용|강사\s*전용|instructor\s*only", re.I)),
    ("정답 공개",      re.compile(r"모범\s*답안|정답\s*(?:예시|해설|풀이)|정답\s*[:：]")),
    ("KEY 머리표",     re.compile(r"^#.*\bKEY\b", re.M)),
    ("INSTRUCTOR 머리표", re.compile(r"^#.*INSTRUCTOR", re.M)),
    ("채점 기준 공개", re.compile(r"채점\s*(?:기준|루브릭)\s*[:：]|^#+.*채점\s*(?:기준|루브릭)|\brubric\b", re.I | re.M)),
]

def md5(p: Path) -> str:
    h = hashlib.md5()
    with p.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()

def role_of(name: str) -> str:
    """파일명 하나로 배분을 정한다. 내용은 보지 않는다 — 승격은 바이트 동일 복사다."""
    return "instructor" if INSTRUCTOR_TOKEN.search(name) else "student"

def collect(src_root: Path):
    """승격 대상 markdown 을 모은다. _existing_03_final 은 원본이 아니라 현재 실물이므로 제외."""
    out = []
    for p in sorted(src_root.rglob("*.md")):
        if "_existing_03_final" in p.parts:
            continue
        out.append(p)
    return out

# ── 승격 ─────────────────────────────────────────────────────────────────────
def promote(src_root: Path, existing: Path, dst: Path, apply: bool):
    plan, collisions = [], []
    seen = {}

    # 1) 현재 실물 — 기존 시험 자산 6종. 자리와 이름 그대로 옮긴다. 덮지 않는다.
    for p in sorted(existing.rglob("*.md")):
        role = p.parent.name                    # student / instructor — 이미 갈라져 있다
        plan.append(("기존", p, dst / role / p.name))
        seen[(role, p.name)] = p

    # 2) 승격 대상 13주치
    for p in collect(src_root):
        if EXCLUDE.search(p.name):
            collisions.append(("제외대상이 승격목록에 있음", p, None))
            continue
        role = role_of(p.name)
        key = (role, p.name)
        if key in seen:
            collisions.append(("파일명 충돌", p, seen[key]))
            continue
        seen[key] = p
        plan.append(("승격", p, dst / role / p.name))

    if collisions:
        print("★ 승격 중단 — 충돌/제외 위반")
        for why, a, b in collisions:
            print(f"   {why}: {a}" + (f"  ↔ {b}" if b else ""))
        return None

    if apply:
        for role in ("student", "instructor"):
            (dst / role).mkdir(parents=True, exist_ok=True)
        for _, s, d in plan:
            if d.exists():
                print(f"★ 덮어쓰기 시도 차단: {d}")
                return None
            shutil.copyfile(s, d)               # 바이트 동일. 메타데이터 아닌 내용만.
    return plan

# ── 검증 ─────────────────────────────────────────────────────────────────────
def v1(dst: Path):
    bad = []
    for p in sorted((dst / "student").glob("*.md")):
        if INSTRUCTOR_TOKEN.search(p.name):
            bad.append(("student 에 교원 파일", p))
    for p in sorted((dst / "instructor").glob("*.md")):
        if STUDENT_TOKEN.search(p.name):
            bad.append(("instructor 에 학생 파일", p))
    return bad

def v2(plan):
    bad = []
    for _, s, d in plan:
        if not d.exists():
            bad.append(("목적지 부재", s, d, "", ""))
            continue
        a, b = md5(s), md5(d)
        if a != b or s.stat().st_size != d.stat().st_size:
            bad.append(("md5 불일치", s, d, a, b))
    return bad

def v3(dst: Path):
    bad = []
    for p in sorted(dst.rglob("*")):
        if p.is_dir():
            if p.parent == dst and p.name not in ("student", "instructor"):
                bad.append(("예상 밖 디렉터리", p))
            continue
        if p.suffix.lower() != ".md":
            bad.append(("markdown 아닌 파일", p))
        if EXCLUDE.search(p.name):
            bad.append(("제외 대상이 승격됨", p))
    return bad

def scan_content(folder: Path):
    """내용 주사. 부정 문맥(없다·아니다·않다)이 뒤따르면 공개가 아니므로 뺀다."""
    hits = []
    for p in sorted(folder.glob("*.md")):
        txt = p.read_text(encoding="utf-8", errors="replace")
        for label, rx in CONTENT_MARKERS:
            n = 0
            for m in rx.finditer(txt):
                if NEG_CTX.search(txt[m.end(): m.end() + 20]):
                    continue                 # "정답은 하나가 아니다" 류 — 공개가 아니다
                n += 1
            if n:
                hits.append((p.name, label, n))
    return hits

def v1c(dst: Path):
    """보조 실측 — 판정 밖. 학생 배포본 내용에 교원 표식이 남았는지만 센다."""
    return scan_content(dst / "student")

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--inputs", required=True, help="deck_inputs 루트")
    ap.add_argument("--dst", required=True, help="03_final 루트")
    ap.add_argument("--apply", action="store_true", help="실제로 복사한다")
    ap.add_argument("--control", action="store_true",
                    help="대조군: instructor/ 에도 같은 주사를 걸어 검사의 판별력을 확인한다")
    a = ap.parse_args()

    inputs = Path(a.inputs); dst = Path(a.dst)
    src_root = inputs / "promotion_source"
    existing = src_root / "_existing_03_final"

    plan = promote(src_root, existing, dst, a.apply)
    if plan is None:
        sys.exit(2)

    n_ex = sum(1 for k, _, _ in plan if k == "기존")
    n_pr = sum(1 for k, _, _ in plan if k == "승격")
    ns = sum(1 for _, _, d in plan if d.parent.name == "student")
    ni = sum(1 for _, _, d in plan if d.parent.name == "instructor")
    print(f"계획 — 기존 {n_ex} · 승격 {n_pr} · 합 {len(plan)}   (student {ns} · instructor {ni})")
    if not a.apply:
        print("(예행. --apply 로 실행한다)")
        return

    print()
    fails = 0

    b = v1(dst)
    print(f"V1 학생/교원 물리 분리 ......... {'PASS' if not b else 'FAIL'}  위반 {len(b)}건   [치명]")
    for why, p in b: print(f"     ★ {why}: {p.name}"); 
    fails += bool(b)

    b = v2(plan)
    print(f"V2 내용 무변경 (md5 전수) ...... {'PASS' if not b else 'FAIL'}  대조 {len(plan)}건 · 불일치 {len(b)}건")
    for why, s, d, x, y in b: print(f"     ★ {why}: {d.name}  {x} vs {y}")
    fails += bool(b)

    b = v3(dst)
    print(f"V3 개수·구조 .................. {'PASS' if not b else 'FAIL'}  위반 {len(b)}건")
    for why, p in b: print(f"     ★ {why}: {p}")
    fails += bool(b)

    h = v1c(dst)
    print(f"— 보조 실측 (판정 밖) 학생 배포본 내용 표식 ... {len(h)}건")
    for name, label, n in h: print(f"     · {name}: {label} {n}회")

    if a.control:
        c = scan_content(dst / "instructor")
        print(f"— 대조군 instructor/ 동일 주사 ................. {len(c)}건"
              f"  (0 이면 검사가 죽은 것이다)")
        for name, label, n in c[:12]: print(f"     · {name}: {label} {n}회")
        if len(c) > 12: print(f"     … 외 {len(c)-12}건")

    print()
    print(f"결과 — {'전항 통과' if not fails else f'{fails}개 항목 실패'}")
    sys.exit(0 if not fails else 1)

if __name__ == "__main__":
    main()
