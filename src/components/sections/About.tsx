"use client";

import { ABOUT } from "@/lib/data";
import { useEffect, useState } from "react";

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
    const KEY = "gh_lang_stats_v1";
    const cached = sessionStorage.getItem(KEY);
    if (cached) { setLangs(JSON.parse(cached)); return; }

    (async () => {
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
    <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-4)", letterSpacing: "0.08em" }}>
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
      {/* stacked bar */}
      <div style={{ display: "flex", height: 6, width: "100%", gap: 1, marginBottom: 14, overflow: "hidden" }}>
        {sorted.map(({ lang, pct }) => (
          <div
            key={lang}
            style={{
              width: `${pct}%`,
              background: LANG_COLORS[lang] ?? "var(--ink-3)",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
      {/* legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px" }}>
        {sorted.map(({ lang, pct }) => (
          <span key={lang} className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 7, height: 7, background: LANG_COLORS[lang] ?? "var(--ink-3)", display: "inline-block", flexShrink: 0 }} />
            {lang} <span style={{ color: "var(--ink-4)" }}>{pct.toFixed(1)}%</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const A = ABOUT;

  return (
    <section id="about" style={{ padding: "var(--pad-section) 0" }}>
      <div className="frame">
        <div className="section-marker">
          <span className="roman">§ I</span>
          <span className="title">About / Hypothesis</span>
          <span className="meta">fig. 1.0 — 1.4</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: 56,
          }}
        >
          {/* Left — abstract */}
          <div>
            <div className="label" style={{ marginBottom: 14 }}>↳ ABSTRACT</div>
            <p
              className="dropcap"
              style={{ fontSize: 17, lineHeight: 1.55, margin: 0, color: "var(--ink)" }}
            >
              {A.body}
            </p>
            <hr className="rule-soft" style={{ margin: "32px 0 18px" }} />
            <p
              className="italic-serif"
              style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-3)", margin: 0 }}
            >
              <span className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-4)" }}>
                NOTE 1.
              </span>
              &nbsp; I prefer technically serious work that ships. Reproducibility is not optional.
            </p>
          </div>

          {/* Right — stats + education + affiliations */}
          <div>
            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderTop: "1px solid var(--ink)",
                borderLeft: "1px solid var(--rule)",
              }}
            >
              {A.stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px 22px",
                    borderRight: "1px solid var(--rule)",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  <div
                    className="display"
                    style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1, color: "var(--ink)" }}
                  >
                    {s.v}
                  </div>
                  <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.06em", marginTop: 8 }}>
                    {s.k}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div style={{ marginTop: 36 }}>
              <div className="label" style={{ marginBottom: 14 }}>↳ EDUCATION</div>
              {A.edu.map((e, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr auto",
                    gap: 16,
                    padding: "14px 0",
                    borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                    borderBottom: "1px solid var(--rule)",
                    alignItems: "baseline",
                  }}
                >
                  <span className="mono" style={{ fontSize: 11, color: "var(--ink-4)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div style={{ fontSize: 15, color: "var(--ink)" }}>{e.d}</div>
                    <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 2 }}>
                      {e.i} · {e.p}
                    </div>
                  </div>
                  <span className="mono" style={{ fontSize: 12, color: "var(--accent)" }}>
                    CGPA {e.c}
                  </span>
                </div>
              ))}
            </div>

            {/* Affiliations */}
            <div style={{ marginTop: 36 }}>
              <div className="label" style={{ marginBottom: 14 }}>↳ AFFILIATIONS</div>
              {A.org.map((o, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr auto",
                    gap: 16,
                    padding: "14px 0",
                    borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                    borderBottom: "1px solid var(--rule)",
                    alignItems: "baseline",
                  }}
                >
                  <span className="mono" style={{ fontSize: 11, color: "var(--ink-4)" }}>
                    0{i + 1}
                  </span>
                  <div>
                    <div style={{ fontSize: 15, color: "var(--ink)" }}>{o.n}</div>
                    <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 2 }}>{o.r}</div>
                  </div>
                  <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>{o.p}</span>
                </div>
              ))}
            </div>
            {/* Language stats */}
            <div style={{ marginTop: 36 }}>
              <div className="label" style={{ marginBottom: 14 }}>↳ LANGUAGES · by lines across public repos</div>
              <LangBar username="verycareful" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
