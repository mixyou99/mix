#!/usr/bin/env python3
"""
deck_canon_lms.py — LMS 세션을 기준 축으로 한 덱 정본 판정표

앞선 deck_canon.py 는 폴더·파일명만 보고 계열을 묶었다. 그것으로는 판정이 되지 않는다.
2025 실측에서 세 가지가 드러났기 때문이다.

  1) 주차 번호는 학기마다 움직이는 좌표다.
     BUSS215 는 10/6 휴강 때문에 실라버스 주차 = LMS 세미나 + 1 (W7 이후).
     KMB689 는 특강·휴강이 세미나 번호에 안 들어가 실라버스 주차와 아예 다른 축이다.
  2) 다른 과목에서 가져온 재활용 원본이 섞여 있다.
     슬라이드 1장이 EMBA114(성균관대) · BUS930 · BUSS305 · KMB581 이라고 스스로 밝힌다.
     파일명·날짜만 보면 이런 것이 최신판으로 뽑힌다.
  3) `_InClass` 는 배포본 + 운영용 앞장(이름표·수업 일정)이다.
     그래서 첫 슬라이드가 "Show Me Your NAME!" · "Course Schedule" 로 시작한다.
     내용은 가장 발전된 판이므로 버리지 않는다.

그래서 안정적인 축은 번호가 아니라 **LMS 세션(주제)** 이다.
LMS 목록을 하드코딩해 기준으로 두고, 덱을 주제로 붙인다.

입력
  meta   : stat -f "%Sm|%z|%N" -t "%Y-%m-%d" 출력 (온전한 사본에서 뽑을 것)
  titles : 각 pptx 의 slide1/slide2 텍스트 (### 경로 / 들여쓴 본문)

사용
  python3 deck_canon_lms.py meta_clean.txt deck_titles.txt > DECK_CANON.md
"""
import sys, os, re, collections, argparse

# ── LMS 세션 (2025 실측 화면에서 옮김) ─────────────────────────────────
# (세션 라벨, 주제 매칭 키워드) — 키워드는 폴더/파일명/슬라이드 텍스트에 대해 검사
COURSES = {
    "Fall/BUSS215_MIS": [
        ("S1  Course Introduction",        ["course introduction", "intro"]),
        ("S2  Topics in MIS",              ["topics in mis", "seminar 2"]),
        ("S3  Digital Economy I",          ["digital markets_1", "digital economy i"]),
        ("S4  Digital Economy II",         ["digital markets_2", "digital markets_3", "digital economy ii"]),
        ("S5  Data Management I",          ["data management 1"]),
        ("S6  Data Management II",         ["data management 2"]),
        ("S7  Data Management III",        ["data management 3"]),
        ("S8  E-Commerce",                 ["ecommerce", "e-commerce"]),
        ("S9  Online Platforms",           ["online platform"]),
        ("S10 Business Analytics I",       ["business analytics 1", "business analytics i"]),
        ("S11 Business Analytics II",      ["business analytics 2", "data-mining types"]),
        ("S12 Association Rules",          ["association"]),
        ("S13 Artificial Intelligence",    ["artificial intelligence", "_ ai"]),
        ("S14-15 Project Presentations",   ["presentation"]),
        ("S16 Review Session",             ["review session"]),
    ],
    "Fall/BUSS256_BigData": [
        ("S1  Course Introduction",        ["seminar 1_intro", "course introduction"]),
        ("S2  Principles in Data Science", ["seminar 2_data science", "_data science"]),
        ("S3  Data Structure",             ["seminar 3_data structure", "data structure"]),
        ("S4  Data Analytics Overview",    ["seminar 4_data analytics", "_data analytics"]),
        ("S5  Data Management I",          ["seminar 5_data management", "data_management i",
                                            "data management i"]),
        # ⚠ S6 는 전용 폴더가 없다. 파일이 `Seminar 5_Data Management/Exercise/` 안에
        #    `Seminar 6_R_Exercise_Questions` 로 들어 있다 (2025 실측).
        ("S6  Data Management II&III",     ["seminar 6_r_exercise", "seminar 6_"]),
        ("R   Review: Midterm",            ["review session_midterm", "review session_mid"]),
        ("S7  Association Rules",          ["seminar 7_association", "association rules",
                                            "seminar 7_r exercise"]),
        ("S8-9  Linear Regression Model",  ["seminar 8-9 lrm", "linear regression", "_lrm_"]),
        ("S10-11 Clustering",              ["seminar 10-11 clustering", "clustering"]),
        ("S12 Text Mining",                ["seminar 12_text mining", "text_mining", "_tm_"]),
        ("S13 Review: Final",              ["review session_final", "review session_fin"]),
    ],
    "Spring/4_KBM_689_Big Data": [
        ("S1  Course Introduction",        ["course introduction"]),
        ("S2  Basics in Big Data",         ["big data_anlaytics", "big data analytics", "빅데이터 인트로"]),
        ("S3  Software Tools",             ["software tools", "seminar 3_"]),
        ("S4  Tools in BA: Data Mining",   ["tools in business analytics", "tools in business"]),
        ("S5  Data Management I",          ["data management i"]),
        ("S6  Data Management II",         ["data management ii"]),
        ("S7  Review: Midterm",            ["review session_midterm", "seminar 7_review"]),
        ("S8  Regressions",                ["lrm", "linear regression", "회귀"]),
        ("S9  Data Visualization",         ["visualization", "시각화"]),
        ("S10 Clustering",                 ["clustering"]),
        ("S11 Association Rules",          ["association", "연관분석"]),
        ("[참고] Classification",          ["classification", "분류"]),
    ],
}

# 슬라이드가 스스로 밝히는 과목 코드 → 이 과목 것이 아니면 재활용 원본
# 교수 확인(2026-09): 강의 덱이 없는 것이 정상인 세션.
# R 코드 위주로 진행하고, 슬라이드에는 연습문제만 실어 학생이 푸는 시간을 준다.
# 결손이 아니므로 ⚠ 를 붙이지 않는다.
EXERCISE_ONLY = {
    "Fall/BUSS215_MIS": ["S5  Data Management I", "S6  Data Management II", "S7  Data Management III"],
    "Fall/BUSS256_BigData": ["S3  Data Structure", "S6  Data Management II&III"],
    "Spring/4_KBM_689_Big Data": ["S3  Software Tools", "[참고] Classification"],
}
# 학생 발표 슬롯 — 교수 덱이 없는 것이 정상
NO_DECK = {"Fall/BUSS215_MIS": ["S14-15 Project Presentations"]}

OWN_CODE = {
    "Fall/BUSS215_MIS": ["buss215", "management information systems"],
    "Fall/BUSS256_BigData": ["buss256", "introduction to big data analytics"],
    "Spring/4_KBM_689_Big Data": ["kmb689", "kmm689", "km689", "big data for business"],
}
FOREIGN = ["emba114", "bus930", "buss305", "kmb581", "성균관"]

# 강의 덱이 아닌 것
NOT_DECK = ["submission", "group formation", "group project", "좌석배치", "오픈 채팅",
            "온라인세션참여", "참여방법", "announce", "annoucement", "/a1/", "/a2/",
            "pic.pptx", "individual_assignment", "presentations/2", "presentation_2"]

# 운영용 앞장 — 첫 슬라이드가 이것이면 자기표기를 읽을 수 없다(내용은 정상)
FRONT_MATTER = ["show me your name", "show me your", "course schedule", "수업 일정", "name tag"]

# ── 판본 계열 ─────────────────────────────────────────────────────────
# 교수 확인(2026-09): 두 계열은 용도가 다른 별개 산출물이다.
#   배포본 : 접미사 없음 · _Updated · _Updated2 — 학생 배포용. 내용이 추가된 순서.
#            **다음 학기 개정의 출발점은 이쪽이다.**
#   수업본 : _InClass + 숫자(그 학기 안의 갱신 순서) + 학기표기(25F·25S)
#            강의실 운영용. 수업 일정 · 지난 시간 복습 · 공지가 앞에 붙는다.
#            그 학기 사정이 섞이므로 개정 출발점으로 쓰면 안 된다.
#            다만 **업데이트된 내용이 여기에만 있을 수 있어** 대조 대상으로 남긴다.
# ⚠ "이 규칙들이 가끔 잘 지켜지지 않는다" — 그래서 자동 판정을 확정으로 표시하지 않고,
#    규칙과 실측이 어긋나는 건만 신뢰도 낮음으로 표시해 사람이 보게 한다.
INCLASS = re.compile(r"[_ ]?(inclass|in class|in-class)", re.I)
SEMTAG = re.compile(r"(2[45])\s*([sf])|([sf])\s*(2[45])|(20\d\d)\s*(spring|fall)", re.I)
SEQ = re.compile(r"(?:inclass|in class)[_ ]*(\d)", re.I)
UPDATED = re.compile(r"[_ ](updated\d*|new|final|revised)", re.I)


def lineage(name):
    return "수업본" if INCLASS.search(name) else "배포본"


def semester_of(path):
    """폴더 경로에서 학기를 읽는다. Spring/… → (2025,'S')"""
    low = path.lower()
    if "/spring" in low or low.startswith("spring"):
        return "S"
    if "/fall" in low or low.startswith("fall"):
        return "F"
    return None


# 실습·문제지 — 강의 덱과 별개 산출물이므로 정본을 따로 뽑는다
EXERCISE = ["exercise", "실습", "problem set", "problemset", "task", "questions"]


def is_exercise(path):
    return any(k in path.lower() for k in EXERCISE)


def load_meta(path):
    d = {}
    for l in open(path, encoding="utf-8", errors="replace"):
        l = l.rstrip("\n")
        if "|" not in l or l.startswith("====="):
            continue
        dt, sz, p = l.split("|", 2)
        d[p.lstrip("./")] = (dt, int(sz))
    return d


def load_titles(path):
    d, cur = {}, None
    for l in open(path, encoding="utf-8", errors="replace"):
        l = l.rstrip("\n")
        if l.startswith("### "):
            cur = l[4:].lstrip("./")
            d[cur] = []
        elif cur and l.strip():
            d[cur].append(l.strip())
    return {k: " | ".join(v) for k, v in d.items()}


def classify(path, title, course):
    """(구분, 사유) — own / foreign / frontmatter"""
    low = (path + " " + title).lower()
    for f in FOREIGN:
        if f in low:
            return "foreign", f.upper()
    t = title.lower()
    if any(fm in t for fm in FRONT_MATTER):
        return "frontmatter", "운영용 앞장"
    return "own", ""


def match_session(path, title, sessions):
    """폴더로 1차 매칭하되, 파일명이 스스로 다른 세션을 밝히면 파일명을 우선한다.

    ⚠ 2025 실측: 폴더 안에 다른 세션 파일이 섞여 있다.
       `Seminar 7_Association Rules/Seminars 8-9_LRM_InClass.pptx`
       `Seminar 5_Data Management/Review Session_Midterm Exam.pptx`
       폴더만 보면 이런 것이 그 세션의 정본으로 뽑힌다.
    """
    fname = os.path.basename(path).lower()
    dname = os.path.dirname(path).lower()

    def best(hay):
        hits = [(lab, len(k)) for lab, keys in sessions for k in keys if k in hay]
        return max(hits, key=lambda x: x[1])[0] if hits else None

    # 파일명 자기표기 — 세션 고유어(주제어)로만 판정
    own = best(fname)
    if own:
        return own
    return best(dname)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("meta")
    ap.add_argument("titles")
    a = ap.parse_args()

    meta, titles = load_meta(a.meta), load_titles(a.titles)

    print("# 덱 정본 판정표 — 2027 봄 강의 3과목\n")
    print("기준 축은 **LMS 세션**이다. 주차 번호는 학기마다 움직이므로 쓰지 않는다.\n")
    print("판정 순서: ① 슬라이드 1장의 과목 코드로 재활용 원본을 분리 → "
          "② 주제로 LMS 세션에 붙임 → ③ 그 안에서 수정일 최신판을 정본으로.\n")
    print("**배포본**(접미사 없음·`_Updated`)이 개정 출발점이고, **수업본**(`_InClass`+순번+학기)은 "
          "강의실 운영용이라 그 학기 일정·공지가 섞인다. 다만 업데이트가 수업본에만 남았을 수 있어 "
          "대조 대상으로 함께 싣는다.\n")
    print("이름 규칙이 늘 지켜지지는 않으므로 자동 판정을 확정으로 보지 않는다. "
          "**확인 열이 ⚠ 인 것만** 파일을 열어 보면 된다.\n")

    grand = collections.Counter()
    for course, sessions in COURSES.items():
        files = [p for p in meta if p.startswith(course)]
        buckets = collections.defaultdict(list)
        foreign, unmatched = [], []

        for p in files:
            low = p.lower()
            if any(k in low for k in NOT_DECK):
                continue
            t = titles.get(p, "")
            kind, why = classify(p, t, course)
            s = match_session(p, t, sessions)
            dt, sz = meta[p]
            rec = (dt, sz, p, t, kind, why)
            rec = rec + (is_exercise(p),)
            if kind == "foreign":
                foreign.append(rec)
            elif s is None:
                unmatched.append(rec)
            else:
                buckets[(s, is_exercise(p))].append(rec)

        print(f"\n---\n\n## {course}\n")
        sem = semester_of(course)
        print("| LMS 세션 | 종류 | **배포본 정본** (개정 출발점) | 날짜 | 수업본 최신 (대조) | 날짜 | 확인 |")
        print("|---|---|---|---|---|---|---|")
        for label, _ in sessions:
            for ex in (False, True):
                v = buckets.get((label, ex), [])
                kindname = "실습" if ex else "강의"
                if not v:
                    if not ex:
                        if label in EXERCISE_ONLY.get(course, []):
                            print(f"| {label} | 강의 | *실습 전용 — R 코드 위주, 슬라이드는 연습문제* "
                                  f"| — | — | — | ✓ |")
                            grand["실습전용"] += 1
                        elif label in NO_DECK.get(course, []):
                            print(f"| {label} | 강의 | *학생 발표 — 교수 덱 없음* | — | — | — | ✓ |")
                            grand["발표"] += 1
                        else:
                            print(f"| {label} | 강의 | ⚠ **결손 — 찾아야 함** | — | — | — | ⚠ |")
                            grand["결손"] += 1
                            grand["확인필요"] += 1
                    continue
                dist = sorted([r for r in v if lineage(os.path.basename(r[2])) == "배포본"],
                              key=lambda r: r[0], reverse=True)
                incl = sorted([r for r in v if lineage(os.path.basename(r[2])) == "수업본"],
                              key=lambda r: r[0], reverse=True)

                flags = []
                if not dist:
                    flags.append("배포본 없음")
                # ⚠ 검사식 완화(2026-09): "수업본이 배포본보다 오래됨"은 수업 후 배포본으로
                #    정리해 올리는 정상 흐름에서도 나온다. 경고에서 참고 표시로 내린다.
                note = []
                if dist and incl and incl[0][0] < dist[0][0]:
                    note.append("배포본이 나중에 정리됨")
                for r in incl:
                    nm = os.path.basename(r[2])
                    tag = SEMTAG.search(nm)
                    if tag and sem:
                        letters = "".join(c for g in tag.groups() if g for c in g).lower()
                        if sem.lower() not in letters and "spring" not in letters and "fall" not in letters:
                            flags.append(f"학기표기 불일치({nm[:28]})")
                            break
                seqs = [(int(m.group(1)), r[0]) for r in incl
                        if (m := SEQ.search(os.path.basename(r[2])))]
                if len(seqs) > 1 and [x[1] for x in sorted(seqs)] != sorted(x[1] for x in seqs):
                    flags.append("InClass 번호와 날짜 역전")

                d0 = (f"`{os.path.basename(dist[0][2])}`", dist[0][0]) if dist else ("—", "—")
                i0 = (f"`{os.path.basename(incl[0][2])}`", incl[0][0]) if incl else ("—", "—")
                mark = ("⚠ " + " · ".join(flags)) if flags else ("· " + " · ".join(note) if note else "✓")
                grand["실습" if ex else "세션"] += 1
                if flags:
                    grand["확인필요"] += 1
                print(f"| {label} | {kindname} | {d0[0]} | {d0[1]} | {i0[0]} | {i0[1]} | {mark} |")

        detail = {k: v for k, v in buckets.items() if len(v) > 1}
        if detail:
            print(f"\n<details><summary>판이 여러 개인 세션 {len(detail)}개 — 이력</summary>\n")
            for key in sorted(detail, key=lambda k: (k[0], k[1])):
                label = f"{key[0]}  ({'실습' if key[1] else '강의'})"
                v = sorted(detail[key], key=lambda r: r[0], reverse=True)
                print(f"\n**{label}**")
                v = sorted(v, key=lambda r: (lineage(os.path.basename(r[2])), r[0]), reverse=True)
                for i, (dt, sz, p, t, kind, why, _e) in enumerate(v):
                    mark = ""
                    lin = lineage(os.path.basename(p))
                    print(f"- [{lin}] {dt}  {sz/1000:8,.0f}KB  `{os.path.relpath(p, course)}`{mark}")
            print("\n</details>")

        if foreign:
            grand["재활용"] += len(foreign)
            print(f"\n<details><summary>재활용 원본 {len(foreign)}개 — 다른 과목에서 가져온 자료. "
                  f"정본 후보에서 제외</summary>\n")
            for dt, sz, p, t, kind, why, _e in sorted(foreign):
                print(f"- `{os.path.relpath(p, course)}` — 슬라이드 1장이 **{why}** 라고 표기")
            print("\n</details>")

        if unmatched:
            grand["미매칭"] += len(unmatched)
            print(f"\n**세션에 붙지 않은 파일 {len(unmatched)}개** — 확인 필요\n")
            for dt, sz, p, t, kind, why, _e in sorted(unmatched):
                print(f"- {dt}  `{os.path.relpath(p, course)}`  → {t[:60]}")

    print(f"\n---\n\n## 종합\n")
    print(f"- 강의 덱 정본이 잡힌 세션 **{grand['세션']}개**")
    print(f"- **확인이 필요한 항목 {grand['확인필요']}개** (규칙과 실측이 어긋남)")
    print(f"- 실습·문제지 정본 {grand['실습']}개")
    print(f"- 실습 전용 세션 {grand['실습전용']}개 · 학생 발표 {grand['발표']}개 (정상)")
    print(f"- **결손 {grand['결손']}개** (찾아야 함)")
    print(f"- 재활용 원본 {grand['재활용']}개 (참고용으로 보존)")
    print(f"- 세션 미매칭 {grand['미매칭']}개")


if __name__ == "__main__":
    main()
