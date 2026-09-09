#!/usr/bin/env python3
"""
deck_canon.py — 슬라이드 덱 정본 판정표

한 세션의 덱이 배포본 · _InClass · _Updated 로 여러 판 남는다.
이름 규칙이 학기마다 달라(`InClass2` · `InClass_2_25F` · `inClass2` · `InClass2_F25`)
**이름으로는 순서를 정할 수 없다.** 그래서 수정 시각으로 판정한다.

판정 규칙 (2025 실측에서 도출):
  · 같은 폴더 · 같은 어간(stem) = 한 계열
  · 계열 안에서 **수정일이 가장 늦은 판이 다음 개정의 출발점**
  · 근거로 전 판의 날짜·크기 이력을 함께 싣는다 (크기가 늘면 수업 중 가필)

입력: stat -f "%Sm|%z|%N" -t "%Y-%m-%d" 출력 (온전한 사본에서 뽑을 것)
사용: python3 deck_canon.py meta_clean.txt [--course "Fall/BUSS215_MIS"] > CANON.md
"""
import sys, os, re, collections, argparse

# 강의 덱이 아닌 것 — 학생 제출물·행정
EXCLUDE = ("Group Project", "Project Submissions", "Group Formation", "Presentations",
           "A2_Submissions", "좌석배치", "오픈 채팅", "Announcement", "/Old/",
           "USB_Backup", "InCLASS Files")

# 어간 정규화: 판(version) 표시를 벗겨 계열을 만든다
VARIANT = [
    r"\s*\[Autosaved\]", r"\s*-\s*복사본\d*", r"\s*copy\d*$",
    r"[_ ]?(InClass|Inclass|inClass|inclass|INCLASS)[ _]?\d*[ _]?(25S|25F|24S|24F|F25|S25|F24|S24)?\d*$",
    r"[_ ]?Class\d{2}(Fall|Spring|S|F)$",
    r"[_ ]?(Updated|updated|new|New|final|Final|revised)$",
    r"[_ ]?v\d+$", r"\s*\(\d+\)$",
]


def stem(name):
    n = os.path.splitext(name)[0]
    changed = True
    while changed:                      # 접미사가 겹쳐 붙은 경우(_InClass_Updated)를 반복 제거
        changed = False
        for p in VARIANT:
            n2 = re.sub(p, "", n)
            if n2 != n:
                n, changed = n2.strip(), True
    return n.strip(" _-")


def load(path):
    rows = []
    for l in open(path, encoding="utf-8", errors="replace"):
        l = l.rstrip("\n")
        if "|" not in l or l.startswith("====="):
            continue
        d, sz, p = l.split("|", 2)
        p = p.lstrip("./")
        if any(k in "/" + p for k in EXCLUDE):
            continue
        rows.append((d, int(sz), p))
    return rows


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("meta")
    ap.add_argument("--course", action="append",
                    help="대상 과목 경로 접두사. 여러 번 지정 가능. 생략하면 전체")
    a = ap.parse_args()

    rows = load(a.meta)
    if a.course:
        rows = [r for r in rows if any(r[2].startswith(c) for c in a.course)]

    fam = collections.defaultdict(list)
    for d, sz, p in rows:
        fam[(os.path.dirname(p), stem(os.path.basename(p)))].append((d, sz, os.path.basename(p)))

    zero = [r for r in rows if r[1] == 0]
    single = {k: v for k, v in fam.items() if len(v) == 1}
    multi = {k: v for k, v in fam.items() if len(v) > 1}

    print("# 덱 정본 판정표\n")
    print(f"- 대상 파일 {len(rows)}개 · **세션 계열 {len(fam)}개**")
    print(f"- 단일판 {len(single)} · 여러 판 {len(multi)}")
    if zero:
        print(f"- ⚠ **0바이트 {len(zero)}개 — 사본이 온전하지 않다. 판정 전에 원본을 확보할 것**")
    print("\n판정 규칙: 계열 안에서 수정일이 가장 늦은 판이 다음 개정의 출발점이다.")
    print("이름 접미사는 학기마다 달라 순서를 정하지 못하므로 날짜로만 판정한다.\n")

    # 과목별로 묶어서 출력
    by_course = collections.defaultdict(list)
    for k in fam:
        by_course["/".join(k[0].split("/")[:2])].append(k)

    for course in sorted(by_course):
        keys = by_course[course]
        m = sum(1 for k in keys if len(fam[k]) > 1)
        print(f"\n## {course} — 계열 {len(keys)}개 (여러 판 {m})\n")
        print("| 세션 계열 | 판 | **정본 후보 (최신)** | 날짜 | 크기 |")
        print("|---|---|---|---|---|")
        for k in sorted(keys, key=lambda x: (x[0], x[1])):
            v = sorted(fam[k], key=lambda t: t[0], reverse=True)
            top = v[0]
            sub = os.path.relpath(k[0], course) if k[0] != course else "."
            label = f"{sub}<br>`{k[1]}`" if sub != "." else f"`{k[1]}`"
            print(f"| {label} | {len(v)} | `{top[2]}` | {top[0]} | {top[1]/1000:,.0f}KB |")

        detail = [k for k in keys if len(fam[k]) > 1]
        if detail:
            print(f"\n<details><summary>여러 판 계열 {len(detail)}개 — 이력</summary>\n")
            for k in sorted(detail, key=lambda x: (x[0], x[1])):
                v = sorted(fam[k], key=lambda t: t[0], reverse=True)
                print(f"\n**{k[1]}**  ({os.path.relpath(k[0], course)})")
                for i, (d, sz, n) in enumerate(v):
                    mark = "**←정본**" if i == 0 else "         "
                    print(f"- {d}  {sz/1000:8,.0f}KB  `{n}`  {mark}")
            print("\n</details>")

    print("\n---\n## 확인이 필요한 계열\n")
    # 같은 폴더에 주차 번호가 다른 계열이 섞인 경우
    warn = collections.defaultdict(set)
    for (dirn, st) in fam:
        m = re.search(r"(Seminars?|Week|세미나|주차)\s*#?\s*([\d\-–~ ]+)", st)
        if m:
            warn[dirn].add(m.group(2).strip())
    for dirn, nums in sorted(warn.items()):
        if len(nums) > 1:
            print(f"- `{dirn}` — 한 폴더 안에 주차 번호가 여러 개: {sorted(nums)}")
    print("\n주차 번호가 엇갈리는 폴더는 이전 학기 잔재가 섞였을 수 있다. 파일을 열어 확인할 것.")


if __name__ == "__main__":
    main()
