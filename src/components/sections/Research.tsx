"use client";

import { RESEARCH } from "@/lib/data";

function StatusDot({ s }: { s: string }) {
  const active = ["live", "active", "complete", "published"].includes(s);
  const warm   = ["wip", "research", "review", "in progress", "under review"].includes(s);
  const bg = active ? "var(--accent)" : warm ? "var(--collapse)" : "var(--ink-3)";
  return (
    <span
      style={{
        display: "inline-block",
        width: 6,
        height: 6,
        background: bg,
        marginRight: 8,
        verticalAlign: "middle",
        flexShrink: 0,
      }}
    />
  );
}

export default function Research() {
  const R = RESEARCH;

  return (
    <section id="research" style={{ padding: "var(--pad-section) 0", background: "var(--bg-2)" }}>
      <div className="frame">
        <div className="section-marker">
          <span className="roman">§ II</span>
          <span className="title">Research / Publications</span>
          <span className="meta">{R.length} entries · sorted by recency</span>
        </div>

        <ol style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--ink)" }}>
          {R.map((r, i) => (
            <li
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "100px minmax(0, 1fr) 240px",
                gap: 32,
                padding: "32px 0",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              {/* Left — number + status */}
              <div>
                <div
                  className="display"
                  style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}
                >
                  {r.n}
                </div>
                <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", marginTop: 6, letterSpacing: "0.06em" }}>
                  {r.period}
                </div>
                <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-2)", marginTop: 6, display: "flex", alignItems: "center" }}>
                  <StatusDot s={r.status} />{r.status}
                </div>
              </div>

              {/* Middle — title + summary + eq + stack */}
              <div>
                <h3
                  style={{
                    fontSize: 22,
                    lineHeight: 1.25,
                    fontWeight: 500,
                    margin: 0,
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {r.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-2)", margin: "12px 0 16px", maxWidth: 640 }}>
                  {r.summary}
                </p>
                <div
                  className="mono"
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    border: "1px solid var(--rule)",
                    background: "var(--bg)",
                    fontSize: 12.5,
                    color: "var(--accent)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {r.eq}
                </div>
                <div style={{ marginTop: 16, display: "flex", gap: 14, flexWrap: "wrap" }}>
                  {r.stack.map((s, j) => (
                    <span key={j} className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.04em" }}>
                      · {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — venue + repo */}
              <div>
                <div className="label" style={{ marginBottom: 10 }}>↳ venue</div>
                <div className="mono" style={{ fontSize: 11.5, color: "var(--ink-2)", marginBottom: 18 }}>
                  {r.doi ? (
                    <a href={`https://${r.doi}`} target="_blank" rel="noreferrer" className="ghost-link" style={{ color: "var(--ink-2)" }}>
                      {r.venue} <span className="arr">↗</span>
                    </a>
                  ) : r.venue}
                </div>
                <a
                  href={`https://${r.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-link"
                >
                  {r.repo} <span className="arr">→</span>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
