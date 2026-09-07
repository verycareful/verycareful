"use client";

import { CURRENTLY, ROADMAP } from "@/lib/data";
import activityJson from "@/lib/activity.json";
import type { ActivitySnapshot } from "@/lib/types";

const activity = activityJson as ActivitySnapshot;

/** Shading for one heatmap cell. Zero reads as an empty rule, not a faint bar. */
function cellStyle(count: number, max: number): React.CSSProperties {
  if (count === 0) {
    return { background: "var(--rule-soft)" };
  }
  // Floor at 0.18 so a single commit is still visible against the paper.
  const t = 0.18 + 0.82 * (count / max);
  return { background: `color-mix(in oklch, var(--accent) ${Math.round(t * 100)}%, transparent)` };
}

export default function Roadmap() {
  const C = CURRENTLY;
  const R = ROADMAP;
  const A = activity;

  const max = Math.max(1, ...A.repos.flatMap((r) => r.weeks));
  const generated = new Date(A.generated).toISOString().slice(0, 10);

  return (
    <section id="roadmap" style={{ padding: "var(--pad-section) 0", background: "var(--bg)" }}>
      <div className="frame">
        <div className="section-marker">
          <span className="roman">§ IV</span>
          <span className="title">Roadmap / Plan and Record</span>
          <span className="meta">plan written by hand · record generated weekly</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 4fr) minmax(0, 8fr)",
            gap: 56,
          }}
        >
          {/* Left — Currently */}
          <div>
            <div className="label" style={{ marginBottom: 14 }}>↳ CURRENTLY</div>
            <div style={{ borderTop: "1px solid var(--ink)" }}>
              {C.map((it, i) => (
                <div key={i} style={{ padding: "16px 0", borderBottom: "1px solid var(--rule)" }}>
                  <div
                    className="mono"
                    style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.08em", marginBottom: 6 }}
                  >
                    {it.k.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "var(--ink)" }}>{it.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Planned weeks */}
          <div>
            <div className="label" style={{ marginBottom: 14 }}>↳ PLANNED · NEXT FOUR WEEKS</div>
            <div style={{ borderTop: "1px solid var(--ink)" }}>
              {R.map((w) => (
                <div
                  key={w.start}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "88px 1fr",
                    gap: 24,
                    padding: "18px 0",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  <div
                    className="mono"
                    style={{ fontSize: 11, color: "var(--ink)", letterSpacing: "0.06em", paddingTop: 2 }}
                  >
                    {w.label}
                  </div>
                  <div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {w.projects.length === 0 ? (
                        <span style={{ fontSize: 14, color: "var(--ink-3)" }}>unallocated</span>
                      ) : (
                        w.projects.map((p) => (
                          <span
                            key={p}
                            className="mono"
                            style={{
                              fontSize: 11.5,
                              padding: "4px 10px",
                              border: "1px solid var(--rule)",
                              background: "var(--bg-2)",
                              color: "var(--ink)",
                            }}
                          >
                            {p}
                          </span>
                        ))
                      )}
                    </div>
                    {w.note && (
                      <p
                        className="italic-serif"
                        style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--ink-2)", margin: "10px 0 0" }}
                      >
                        {w.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p
              className="italic-serif"
              style={{ fontSize: 13, lineHeight: 1.55, color: "var(--ink-3)", margin: "16px 0 0" }}
            >
              A plan, not a promise. What actually happened is recorded below, and the two
              are not always the same.
            </p>
          </div>
        </div>

        {/* Record — generated activity */}
        <div style={{ marginTop: 56 }}>
          <div className="label" style={{ marginBottom: 14 }}>↳ RECORD · COMMITS PER WEEK</div>

          <div style={{ borderTop: "1px solid var(--ink)", overflowX: "auto" }}>
            {/* Week axis */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `160px repeat(${A.weeks.length}, minmax(34px, 1fr)) 56px`,
                gap: 4,
                padding: "10px 0",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              <div />
              {A.weeks.map((w) => (
                <div
                  key={w}
                  className="mono"
                  style={{ fontSize: 9.5, color: "var(--ink-3)", letterSpacing: "0.04em", textAlign: "center" }}
                >
                  {w}
                </div>
              ))}
              <div
                className="mono"
                style={{ fontSize: 9.5, color: "var(--ink-3)", letterSpacing: "0.06em", textAlign: "right" }}
              >
                TOTAL
              </div>
            </div>

            {A.repos.map((r) => (
              <div
                key={r.repo}
                style={{
                  display: "grid",
                  gridTemplateColumns: `160px repeat(${A.weeks.length}, minmax(34px, 1fr)) 56px`,
                  gap: 4,
                  alignItems: "center",
                  padding: "8px 0",
                  borderBottom: "1px solid var(--rule-soft)",
                }}
              >
                <a
                  href={`https://github.com/verycareful/${r.repo}`}
                  className="mono"
                  style={{ fontSize: 11.5, color: "var(--ink)", textDecoration: "none" }}
                >
                  {r.repo}
                </a>
                {r.weeks.map((n, i) => (
                  <div
                    key={i}
                    title={`${r.repo} · ${A.weeks[i]} · ${n} commit${n === 1 ? "" : "s"}`}
                    style={{ height: 20, ...cellStyle(n, max) }}
                  />
                ))}
                <div
                  className="mono"
                  style={{ fontSize: 11.5, color: "var(--ink-2)", textAlign: "right" }}
                >
                  {r.total}
                </div>
              </div>
            ))}
          </div>

          <p
            className="mono"
            style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.04em", margin: "14px 0 0" }}
          >
            public repositories only · all branches · generated {generated}
          </p>
        </div>
      </div>
    </section>
  );
}
