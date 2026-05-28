#!/usr/bin/env python3
"""Generate assets/top-languages.svg and assets/activity.svg from GitHub API."""

import json, os, sys, time
from collections import defaultdict
from datetime import datetime, timedelta
import urllib.request, urllib.error

USERNAME = "verycareful"
TOKEN = os.environ.get("GITHUB_TOKEN", "")

LANG_COLORS = {
    "C++": "#f34b7d", "C": "#555555", "Python": "#3572A5",
    "TypeScript": "#3178c6", "JavaScript": "#f1e05a", "Kotlin": "#A97BFF",
    "C#": "#178600", "Java": "#b07219", "HTML": "#e34c26",
    "CSS": "#563d7c", "CMake": "#DA3434", "Shell": "#89e051",
    "Rust": "#dea584", "Go": "#00ADD8", "Dart": "#00B4AB",
}

def _headers():
    h = {"Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28"}
    if TOKEN:
        h["Authorization"] = f"Bearer {TOKEN}"
    return h

def gh(url, retries=3):
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=_headers())
            with urllib.request.urlopen(req, timeout=20) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            if e.code == 202:
                time.sleep(4)
                continue
            if e.code == 404:
                return None
            print(f"  HTTP {e.code}: {url}", file=sys.stderr)
            return None
        except Exception as e:
            print(f"  Error: {e}", file=sys.stderr)
            return None
    return None

def get_repos():
    repos, page = [], 1
    while True:
        data = gh(f"https://api.github.com/users/{USERNAME}/repos?per_page=100&page={page}&type=owner")
        if not data:
            break
        repos.extend(data)
        if len(data) < 100:
            break
        page += 1
    return [r for r in repos if not r.get("fork")]

def month_list(n=24):
    result = []
    now = datetime.now()
    for i in range(n - 1, -1, -1):
        m = now.month - i
        y = now.year
        while m <= 0:
            m += 12
            y -= 1
        result.append((f"{y:04d}-{m:02d}", datetime(y, m, 1).strftime("%b '%y")))
    return result

SVG_STYLE = """<style>
  .bg  { fill: #ffffff; }
  .bd  { stroke: #d0d7de; fill: none; }
  .ttl { fill: #57606a; font-family: 'IBM Plex Mono',ui-monospace,monospace; font-size: 10px; letter-spacing: 0.12em; }
  .lbl { fill: #57606a; font-family: 'IBM Plex Mono',ui-monospace,monospace; font-size: 11px; }
  .val { fill: #1f2328; font-family: 'IBM Plex Mono',ui-monospace,monospace; font-size: 11px; }
  .bg2 { fill: #f0f3f6; }
  .ax  { stroke: #d0d7de; }
  @media (prefers-color-scheme: dark) {
    .bg  { fill: #0d1117; }
    .bd  { stroke: #30363d; }
    .ttl { fill: #8b949e; }
    .lbl { fill: #8b949e; }
    .val { fill: #c9d1d9; }
    .bg2 { fill: #161b22; }
    .ax  { stroke: #30363d; }
  }
</style>"""


def gen_languages(repos):
    totals = defaultdict(int)
    for repo in repos:
        data = gh(f"https://api.github.com/repos/{USERNAME}/{repo['name']}/languages")
        if data:
            for lang, b in data.items():
                totals[lang] += b
        time.sleep(0.05)

    if not totals:
        return None

    grand = sum(totals.values())
    langs = sorted(totals.items(), key=lambda x: x[1], reverse=True)[:8]

    W, ROW = 760, 34
    PX, PY = 24, 16
    H = PY * 2 + 32 + len(langs) * ROW

    LABEL_W, DOT, PCT_W = 108, 12, 50
    BAR_X = PX + DOT + LABEL_W
    BAR_W = W - BAR_X - PX - PCT_W - 8

    lines = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}">',
        SVG_STYLE,
        f'<rect width="{W}" height="{H}" rx="6" class="bg"/>',
        f'<rect x="0.5" y="0.5" width="{W-1}" height="{H-1}" rx="6" class="bd" stroke-width="1"/>',
        f'<text x="{PX}" y="{PY+12}" class="ttl">↳ LANGUAGES · bytes across public repos</text>',
    ]

    for i, (lang, b) in enumerate(langs):
        pct = b / grand * 100
        color = LANG_COLORS.get(lang, "#888888")
        y = PY + 32 + i * ROW
        bw = int(pct / 100 * BAR_W)
        lines += [
            f'<rect x="{PX}" y="{y+4}" width="7" height="7" fill="{color}"/>',
            f'<text x="{PX+DOT}" y="{y+13}" class="lbl">{lang}</text>',
            f'<rect x="{BAR_X}" y="{y+2}" width="{BAR_W}" height="9" rx="2" class="bg2"/>',
            f'<rect x="{BAR_X}" y="{y+2}" width="{bw}" height="9" rx="2" fill="{color}" opacity="0.9"/>',
            f'<text x="{BAR_X+BAR_W+6}" y="{y+13}" class="val">{pct:.1f}%</text>',
        ]

    lines.append('</svg>')
    return '\n'.join(lines)


def gen_activity(repos):
    active = sorted(repos, key=lambda r: r.get("pushed_at", ""), reverse=True)[:15]

    monthly = defaultdict(int)
    cutoff_key = month_list(25)[0][0]

    for repo in active:
        data = gh(f"https://api.github.com/repos/{USERNAME}/{repo['name']}/stats/commit_activity")
        if not data or not isinstance(data, list):
            continue
        for week in data:
            ts = week.get("week", 0)
            count = week.get("total", 0)
            if not count:
                continue
            dt = datetime.fromtimestamp(ts)
            key = f"{dt.year:04d}-{dt.month:02d}"
            if key < cutoff_key:
                continue
            monthly[key] += count
        time.sleep(0.1)

    months = month_list(24)
    counts = [monthly.get(k, 0) for k, _ in months]
    if sum(counts) == 0:
        return None

    max_c = max(counts) or 1
    total, cumulative = 0, []
    for c in counts:
        total += c
        cumulative.append(total)
    max_cum = cumulative[-1] or 1

    W, H = 760, 175
    PX, PY = 24, 16
    CHART_Y = PY + 28
    CHART_H = H - CHART_Y - PY - 22
    CHART_W = W - PX * 2
    BOTTOM = CHART_Y + CHART_H
    N = len(months)
    slot_w = CHART_W / N
    bar_w = max(slot_w - 2, 1)

    lines = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}">',
        SVG_STYLE,
        '<style>.cum{fill:none;stroke:#57a6ff;stroke-width:1.5;stroke-linejoin:round;}'
        '@media(prefers-color-scheme:dark){.cum{stroke:#388bfd;}}</style>',
        f'<rect width="{W}" height="{H}" rx="6" class="bg"/>',
        f'<rect x="0.5" y="0.5" width="{W-1}" height="{H-1}" rx="6" class="bd" stroke-width="1"/>',
        f'<text x="{PX}" y="{PY+12}" class="ttl">↳ COMMIT ACTIVITY · public repos, last 24 months</text>',
        f'<text x="{W-PX}" y="{CHART_Y+10}" class="val" font-size="9" text-anchor="end">{total} commits total</text>',
        f'<line x1="{PX}" y1="{BOTTOM}" x2="{W-PX}" y2="{BOTTOM}" class="ax" stroke-width="0.5"/>',
    ]

    for i, (count, (_, label)) in enumerate(zip(counts, months)):
        x = PX + i * slot_w
        bh = (count / max_c) * CHART_H
        by = BOTTOM - bh
        lines.append(
            f'<rect x="{x+0.5:.1f}" y="{by:.1f}" width="{bar_w:.1f}" height="{bh:.1f}" fill="#57606a" opacity="0.3" rx="1"/>'
        )
        if i % 6 == 0:
            lines.append(
                f'<text x="{x+slot_w/2:.1f}" y="{BOTTOM+14}" class="lbl" font-size="8.5" text-anchor="middle">{label}</text>'
            )

    pts = []
    for i, cum in enumerate(cumulative):
        x = PX + i * slot_w + slot_w / 2
        y = BOTTOM - (cum / max_cum) * CHART_H
        pts.append(f"{x:.1f},{y:.1f}")
    lines.append(f'<polyline points="{" ".join(pts)}" class="cum"/>')

    lines.append('</svg>')
    return '\n'.join(lines)


def write(path, content):
    os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"wrote {path}")


if __name__ == "__main__":
    print("fetching repos...")
    repos = get_repos()
    print(f"  {len(repos)} non-fork repos")

    print("fetching language data...")
    svg = gen_languages(repos)
    if svg:
        write("assets/top-languages.svg", svg)

    print("fetching commit activity (top 15 repos)...")
    svg = gen_activity(repos)
    if svg:
        write("assets/activity.svg", svg)

    print("done.")
