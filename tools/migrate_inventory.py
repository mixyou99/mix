#!/usr/bin/env python3
"""
migrate_inventory.py — 이관 전 인벤토리 · 무결성 기준선

이동 자체가 산출물을 바꾸지 않았음을 증명하기 위한 도구다.
잠긴 `03_final` 승격본이 이동 중에 조용히 달라지는 것이 이 작업의 최악 실패이므로,
**옮기기 전에 기준선을 뜨고 옮긴 뒤 대조한다.**

동시에, 정본 경로 혼선(F-2에서 낡은 루트 사본과 diff 를 돌려 배치 산정이 무효가 된 사고)을
재발시키지 않도록 **같은 이름의 파일이 여러 경로에 있는 경우를 전부 뽑아낸다.**

사용:
    # 1) 이동 전 — 기준선
    python3 migrate_inventory.py /path/to/워크스페이스 --out baseline.tsv

    # 2) 이동 후 — 대조
    python3 migrate_inventory.py /path/to/새리포 --out after.tsv --compare baseline.tsv

    # 3) 정본 경로 진단만
    python3 migrate_inventory.py /path/to/워크스페이스 --dupes

출력 TSV: md5 \t 크기 \t 상대경로
"""
import os, sys, hashlib, argparse, collections

SKIP_DIRS = {".git", "node_modules", ".DS_Store", "__pycache__", ".ipynb_checkpoints"}

# 의도된 이력 보관소 — 동명·내용 상이가 정상이다. --live 로 제외한다.
ARCHIVE_HINTS = ("_archive", "archive/", "backup", "pre_font_unify", "pre_meta_strip",
                 "_backup_pre_", "reissue/", "/old", "deprecated")

# 정본 후보 — 이 아래 있는 것이 정본이고, 같은 이름이 다른 곳에 있으면 사본 의심
# Teaching-Workspace 실측 구조 기준 (2026-09-08 확인):
#   00_governance · _prompts · _shared_library · graduate_mba_bigdata ·
#   undergrad_bigdata · undergrad_mis_intro
# `_shared_library` 에 있는 사본이 정본일 가능성이 높다 — 과목 폴더의 동명 파일은 소비 사본 의심.
CANON_HINTS = ("_shared_library/", "_final/markdown/", "03_final/", "/markdown/")

# git 에 넣지 말아야 할 것 — 판단은 사람이 하되, 후보를 뽑아 준다
# 외부 저작물로 의심되는 경로 — 리포에 커밋하지 말고 경로만 기록할 대상
EXTERNAL_HINTS = ("source", "원고", "manuscript", "paper", "논문")
BIG = 20 * 1024 * 1024


def md5(path, buf=1 << 20):
    h = hashlib.md5()
    with open(path, "rb") as f:
        while True:
            b = f.read(buf)
            if not b:
                break
            h.update(b)
    return h.hexdigest()


def walk(root):
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for fn in sorted(filenames):
            if fn in SKIP_DIRS:
                continue
            full = os.path.join(dirpath, fn)
            if os.path.islink(full) or not os.path.isfile(full):
                continue
            yield os.path.relpath(full, root), full


def build(root):
    rows = []
    for rel, full in walk(root):
        try:
            rows.append((md5(full), os.path.getsize(full), rel))
        except OSError as e:
            print(f"  ! 읽기 실패 {rel}: {e}", file=sys.stderr)
    return sorted(rows, key=lambda r: r[2])


def is_archive(rel):
    low = rel.lower()
    return any(k in low for k in ARCHIVE_HINTS)


def report_dupes(rows, live_only=False):
    by_name = collections.defaultdict(list)
    for h, sz, rel in rows:
        if live_only and is_archive(rel):
            continue
        by_name[os.path.basename(rel)].append((h, sz, rel))

    same, diff = [], []
    for name, items in by_name.items():
        if len(items) < 2:
            continue
        (same if len({i[0] for i in items}) == 1 else diff).append((name, items))

    scope = "이력 보관소 제외 · 라이브 자산만" if live_only else "전체"
    print(f"\n## 같은 이름 · 여러 경로 — 내용이 **다른** 것 {len(diff)}건  ⚠ 정본 판정 필요  [{scope}]")
    print("   (F-2 사고의 원인 유형이다. diff 대상을 고르기 전에 반드시 해소할 것)")
    for name, items in sorted(diff):
        print(f"\n  {name}")
        for h, sz, rel in sorted(items, key=lambda i: i[2]):
            mark = "정본후보" if any(c in "/" + rel for c in CANON_HINTS) else "        "
            print(f"    {mark}  {h[:8]}  {sz:>9,}  {rel}")

    print(f"\n## 같은 이름 · 여러 경로 — 내용이 동일한 것 {len(same)}건 (중복 사본)")
    for name, items in sorted(same)[:40]:
        print(f"  {name} × {len(items)}: {', '.join(os.path.dirname(i[2]) or '.' for i in items)}")
    if len(same) > 40:
        print(f"  … 외 {len(same) - 40}건")
    return diff


def report_flags(rows):
    print("\n## 리포 편입 판정이 필요한 파일")
    for h, sz, rel in rows:
        ext = os.path.splitext(rel)[1].lower()
        low = rel.lower()
        notes = []
        if ext == ".pdf":
            if any(k in low for k in EXTERNAL_HINTS):
                notes.append("외부 저작물 의심(원 논문 등) — 리포에 커밋하지 말고 경로·해시만 기록")
            else:
                notes.append("우리 렌더 산출물 — 빌드 산물로 볼지, 잠긴 배포본으로 커밋할지 판정")
        if ext == ".zip":
            notes.append("압축 산출물 — 풀어서 넣을지, 빌드 산물로 볼지 판정 필요")
        if sz > BIG:
            notes.append(f"대용량 {sz/1048576:.1f}MB — git 이력에 넣을지 판정")
        if notes:
            print(f"  {rel}\n      · " + "\n      · ".join(notes))


def compare(before_path, rows):
    before = {}
    for ln in open(before_path, encoding="utf-8"):
        if ln.startswith("#") or not ln.strip():
            continue
        h, sz, rel = ln.rstrip("\n").split("\t")
        before[rel] = (h, int(sz))
    after = {rel: (h, sz) for h, sz, rel in rows}

    missing = sorted(set(before) - set(after))
    added = sorted(set(after) - set(before))
    changed = sorted(r for r in set(before) & set(after) if before[r][0] != after[r][0])

    print(f"\n## 이동 대조")
    print(f"  이동 전 {len(before)}개 · 이동 후 {len(after)}개")
    print(f"  누락 {len(missing)} · 신규 {len(added)} · **내용 변경 {len(changed)}**")
    for r in changed:
        print(f"    ⚠ 변경  {r}  {before[r][0][:8]} → {after[r][0][:8]}")
    for r in missing:
        print(f"    ⚠ 누락  {r}")
    for r in added:
        print(f"    +  신규  {r}")

    ok = not missing and not changed
    print("\n판정: " + ("PASS — 이동이 내용을 바꾸지 않았다"
                       if ok else "FAIL — 이동 중 손실·변경 발생. 되돌리고 원인 규명"))
    return 0 if ok else 1


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("root")
    ap.add_argument("--out")
    ap.add_argument("--compare")
    ap.add_argument("--dupes", action="store_true")
    ap.add_argument("--live", action="store_true",
                    help="이력 보관소(_archive·backup·pre_font_unify 등)를 제외하고 "
                         "라이브 자산끼리의 정본 충돌만 본다")
    a = ap.parse_args()

    # ⚠ 결함 정정 (2026-09-08): 존재하지 않는 경로에 대해 os.walk 가 조용히 빈 결과를
    #    돌려주어 "파일 0개"로 보고됐다. 못 본 것을 없다고 말하는 오라클이다.
    #    경로를 먼저 검증하고, 실패는 실패로 보고한다.
    if not os.path.exists(a.root):
        print(f"오류: 경로가 없다 — {a.root}")
        parent = os.path.dirname(a.root.rstrip("/")) or "."
        if os.path.isdir(parent):
            print(f"\n{parent} 아래 항목:")
            for n in sorted(os.listdir(parent))[:40]:
                print(f"  {n}")
        return 2
    if not os.path.isdir(a.root):
        print(f"오류: 디렉터리가 아니다 — {a.root}")
        return 2

    rows = build(a.root)
    if not rows:
        print(f"오류: {a.root} 아래에 파일이 하나도 없다. "
              f"경로가 맞는지, 클라우드 전용 파일이 로컬에 내려와 있는지 확인할 것.")
        print("\n바로 아래 항목:")
        for n in sorted(os.listdir(a.root))[:40]:
            print(f"  {n}")
        return 2

    total = sum(r[1] for r in rows)
    print(f"# 인벤토리 — {a.root}")
    print(f"  파일 {len(rows):,}개 · 합계 {total/1048576:.1f}MB")

    ext = collections.Counter(os.path.splitext(r[2])[1].lower() or "(없음)" for r in rows)
    print("\n## 확장자 분포")
    for e, n in ext.most_common(15):
        print(f"  {e:<10} {n:>5}")

    top = collections.Counter(r[2].split(os.sep)[0] for r in rows)
    print("\n## 최상위 항목별 파일 수")
    for d, n in top.most_common():
        print(f"  {d:<40} {n:>5}")

    if a.dupes or not a.compare:
        report_dupes(rows, live_only=a.live)
        if not a.live:
            report_flags(rows)

    if a.out:
        with open(a.out, "w", encoding="utf-8") as f:
            f.write(f"# migrate_inventory baseline — {a.root} — {len(rows)} files\n")
            for h, sz, rel in rows:
                f.write(f"{h}\t{sz}\t{rel}\n")
        print(f"\n기준선 기록: {a.out}")

    if a.compare:
        return compare(a.compare, rows)
    return 0


if __name__ == "__main__":
    sys.exit(main())
