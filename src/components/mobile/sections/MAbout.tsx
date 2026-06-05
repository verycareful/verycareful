"use client";

import { useEffect, useState } from "react";
import { ABOUT } from "@/lib/data";

type LangMap = Record<string, number>;

const LANG_COLORS: Record<string, string> = {
  "C++":        "#f34b7d",
  "C":          "#555555",
  "Python":     "#3572A5",
  "TypeScript": "#3178c6",
  "JavaScript": "#f1e05a",
  "Kotlin":     "#A97BFF",
  "C#":         "#239120",
  "Java":       "#b07219",
  "HTML":       "#e34c26",
  "CSS":        "#563d7c",
  "CMake":      "#DA3434",
  "Shell":      "#89e051",
};

function useLangStats(username: string) {
  const [langs, setLangs] = useState<LangMap | null>(null);
  useEffect(() => {
    const KEY = "gh_lang_stats_v2";
    const cached = sessionStorage.getItem(KEY);
    if (cached) { setLangs(JSON.parse(cached)); return; }
    (async () => {
      const BASE = process.env.NODE_ENV === "production" ? "/verycareful" : "";
      try {
        const r = await fetch(`${BASE}/stats/languages.json`, { cache: "no-store" });
        if (r.ok) {
          const data: { languages: { name: string; bytes: number }[] } = await r.json();
          const map: LangMap = {};
          for (const l of data.languages) map[l.name] = l.bytes;
          sessionStorage.setItem(KEY, JSON.stringify(map));
          setLangs(map);
          return;
        }
      } catch {}
      try {
        const repos: { name: string; fork: boolean }[] = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`
        ).then(r => r.json());
        const totals: LangMap = {};
        await Promise.all(
          repos.filter(r => !r.fork).map(async repo => {
            try {
              const l: LangMap = await fetch(
                `https://api.github.com/repos/${username}/${repo.name}/languages`
              ).then(r => r.json());
              for (const [lang, bytes] of Object.entries(l))
                totals[lang] = (totals[lang] || 0) + (bytes as number);
            } catch {}
          })
        );
        sessionStorage.setItem(KEY, JSON.stringify(totals));
        setLangs(totals);
      } catch {}
    })();
  }, [username]);
  return langs;
}

function LangBar({ username }: { username: string }) {
  const raw = useLangStats(username);
  if (!raw) return (
    <div className="mono" style={{ fontSize: 10, color: "var(--ink-4)", letterSpacing: "0.08em" }}>
      loading language stats…
    </div>
  );
  const total = Object.values(raw).reduce((a, b) => a + b, 0);
  const sorted = Object.entries(raw)
    .map(([lang, bytes]) => ({ lang, pct: (bytes / total) * 100 }))
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 8);
  return (
    <div>
      <div className="langbar">
        {sorted.map(({ lang, pct }) => (
          <span
            key={lang}
            style={{ width: `${pct}%`, background: LANG_COLORS[lang] ?? "var(--ink-3)" }}
          />
        ))}
      </div>
      <div className="langlegend">
        {sorted.map(({ lang, pct }) => (
          <span key={lang} className="langleg-item">
            <span className="langleg-swatch" style={{ background: LANG_COLORS[lang] ?? "var(--ink-3)" }} />
            {lang} <span className="langleg-pct">{pct.toFixed(1)}%</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MAbout() {
  const A = ABOUT;

  return (
    <section id="about" className="m-sec reveal">
      <div className="m-section-marker">
        <span className="roman">§ I</span>
        <span className="title">About / Hypothesis</span>
        <span className="meta">fig. 1.0 — 1.4</span>
      </div>

      {/* Abstract */}
      <p
        className="dropcap"
        style={{ fontSize: 16, lineHeight: 1.55, margin: 0, color: "var(--ink)" }}
      >
        {A.body}
      </p>

      <p
        style={{ marginTop: 22, marginBottom: 0 }}
      >
        <span className="italic-serif" style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-3)" }}>
          <span className="mono" style={{ fontSize: 9, letterSpacing: "0.18em", color: "var(--ink-4)", fontStyle: "normal" }}>
            NOTE 1.
          </span>
          {" "}I prefer technically serious work that ships. Reproducibility is not optional.
        </span>
      </p>

      {/* Stats grid */}
      <div className="stats-grid" style={{ marginTop: 34 }}>
        {A.stats.map((s, i) => (
          <div key={i} className="stats-cell">
            <div className="stats-val">{s.v}</div>
            <div className="stats-key">{s.k}</div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginTop: 32 }}>
        <div className="label" style={{ marginBottom: 12 }}>↳ EDUCATION</div>
        <div className="kv-list">
          {A.edu.map((e, i) => (
            <div key={i} className="kv-row">
              <span className="kv-idx">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div className="kv-main">{e.d}</div>
                <div className="kv-sub">{e.i} · {e.p}</div>
              </div>
              <span className="kv-tail">CGPA {e.c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Affiliations */}
      <div style={{ marginTop: 32 }}>
        <div className="label" style={{ marginBottom: 12 }}>↳ AFFILIATIONS</div>
        <div className="kv-list">
          {A.org.map((o, i) => (
            <div key={i} className="kv-row">
              <span className="kv-idx">0{i + 1}</span>
              <div>
                <div className="kv-main">{o.n}</div>
                <div className="kv-sub">{o.r}</div>
              </div>
              <span className="kv-tail kv-tail-muted">{o.p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Language stats */}
      <div style={{ marginTop: 32 }}>
        <div className="label" style={{ marginBottom: 12 }}>↳ LANGUAGES · by bytes across all repos</div>
        <LangBar username="verycareful" />
      </div>
    </section>
  );
}
