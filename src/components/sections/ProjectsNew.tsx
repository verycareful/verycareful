"use client";

import { FEATURED, INDEX } from "@/lib/data";
import type { Featured } from "@/lib/types";

function StatusDot({ s }: { s: string }) {
  const active = ["live", "active", "complete", "published"].includes(s);
  const warm   = ["wip", "research", "review", "in progress", "under review", "seeking venue"].includes(s);
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

function ProjectDiagram({ kind }: { kind: Featured["diagram"] }) {
  if (kind === "qpp") {
    return (
      <svg viewBox="0 0 220 100" style={{ width: "100%", height: "100%" }}>
        <line x1="6" y1="22" x2="214" y2="22" stroke="var(--ink-3)" strokeWidth="0.6" />
        <line x1="6" y1="50" x2="214" y2="50" stroke="var(--ink-3)" strokeWidth="0.6" />
        <line x1="6" y1="78" x2="214" y2="78" stroke="var(--ink-3)" strokeWidth="0.6" />
        {([40, 80, 160] as const).map((x, i) => (
          <g key={i}>
            <rect x={x - 9} y={[22, 50, 78][i % 3] - 9} width="18" height="18" fill="var(--bg)" stroke="var(--accent)" strokeWidth="0.8" />
            <text x={x} y={[22, 50, 78][i % 3] + 3} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fill="var(--accent)">
              {["H", "RZ", "X"][i]}
            </text>
          </g>
        ))}
        <line x1="120" y1="22" x2="120" y2="50" stroke="var(--accent)" strokeWidth="0.8" />
        <circle cx="120" cy="22" r="3" fill="var(--accent)" />
        <circle cx="120" cy="50" r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="0.8" />
        <line x1="115" y1="50" x2="125" y2="50" stroke="var(--accent)" strokeWidth="0.6" />
        <line x1="120" y1="45" x2="120" y2="55" stroke="var(--accent)" strokeWidth="0.6" />
        <text x="6"   y="20" fontFamily="var(--font-mono)" fontSize="7" fill="var(--ink-3)">|q₀⟩</text>
        <text x="6"   y="48" fontFamily="var(--font-mono)" fontSize="7" fill="var(--ink-3)">|q₁⟩</text>
        <text x="6"   y="76" fontFamily="var(--font-mono)" fontSize="7" fill="var(--ink-3)">|q₂⟩</text>
        <text x="206" y="20" fontFamily="var(--font-mono)" fontSize="7" fill="var(--ink-3)" textAnchor="end">⟨M⟩</text>
        <text x="206" y="48" fontFamily="var(--font-mono)" fontSize="7" fill="var(--ink-3)" textAnchor="end">⟨M⟩</text>
        <text x="206" y="76" fontFamily="var(--font-mono)" fontSize="7" fill="var(--ink-3)" textAnchor="end">⟨M⟩</text>
      </svg>
    );
  }

  if (kind === "blind") {
    return (
      <svg viewBox="0 0 220 100" style={{ width: "100%", height: "100%" }}>
        <circle cx="40"  cy="50" r="14" fill="none" stroke="var(--ink-3)" strokeWidth="0.8" />
        <text x="40"  y="53" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fill="var(--ink-3)">user</text>
        <circle cx="180" cy="20" r="14" fill="none" stroke="var(--ink-3)" strokeWidth="0.8" />
        <text x="180" y="23" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fill="var(--ink-3)">issuer</text>
        <circle cx="180" cy="80" r="14" fill="none" stroke="var(--ink-3)" strokeWidth="0.8" />
        <text x="180" y="83" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fill="var(--ink-3)">verifier</text>
        <line x1="56" y1="42" x2="164" y2="22" stroke="var(--accent)" strokeWidth="0.8" strokeDasharray="3 2" />
        <line x1="56" y1="58" x2="164" y2="78" stroke="var(--accent)" strokeWidth="0.8" />
        <text x="110" y="30" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent)">blind(m·rᵉ)</text>
        <text x="110" y="76" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent)">unblind → σ(m)</text>
        <text x="110" y="98" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="6.5" fill="var(--ink-4)">issuer ⊥ verifier (no surveillance)</text>
      </svg>
    );
  }

  if (kind === "mad") {
    return (
      <svg viewBox="0 0 220 100" style={{ width: "100%", height: "100%" }}>
        {[14, 9, 5].map((r, i) => (
          <ellipse key={`a${i}`} cx="68" cy="58" rx={r * 1.4} ry={r} fill="none" stroke="var(--ink-3)" strokeWidth="0.5" opacity={0.6 - i * 0.15} />
        ))}
        {[14, 9, 5].map((r, i) => (
          <ellipse key={`b${i}`} cx="152" cy="42" rx={r * 1.3} ry={r} fill="none" stroke="var(--ink-3)" strokeWidth="0.5" opacity={0.6 - i * 0.15} />
        ))}
        <path d="M 110 20 Q 95 35 80 50 Q 72 57 68 58" fill="none" stroke="var(--accent)" strokeWidth="0.9" strokeDasharray="3 2" />
        <path d="M 68 58 Q 90 40 120 38 Q 138 38 152 42" fill="none" stroke="var(--collapse)" strokeWidth="0.9" />
        <circle cx="68"  cy="58" r="3" fill="var(--accent)" />
        <circle cx="152" cy="42" r="3" fill="var(--accent)" />
        <circle cx="110" cy="20" r="2.5" fill="none" stroke="var(--ink-3)" strokeWidth="0.8" />
        <text x="56"  y="74" fontFamily="var(--font-mono)" fontSize="6.5" fill="var(--accent)">min₁</text>
        <text x="140" y="56" fontFamily="var(--font-mono)" fontSize="6.5" fill="var(--accent)">min₂</text>
        <text x="104" y="16" fontFamily="var(--font-mono)" fontSize="6.5" fill="var(--ink-3)">θ₀</text>
        <text x="80"  y="34" fontFamily="var(--font-mono)" fontSize="6"   fill="var(--accent)">↓ descent</text>
        <text x="98"  y="48" fontFamily="var(--font-mono)" fontSize="6"   fill="var(--collapse)">↗ ascent</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 100" style={{ width: "100%", height: "100%" }}>
      <path d="M 6 80 Q 30 20, 56 60 T 110 50 T 170 30 T 214 60" fill="none" stroke="var(--accent)" strokeWidth="1" />
      <line x1="6" y1="90" x2="214" y2="90" stroke="var(--ink-3)" strokeWidth="0.5" />
      <line x1="6" y1="10" x2="6"   y2="90" stroke="var(--ink-3)" strokeWidth="0.5" />
      <text x="6"   y="6"  fontFamily="var(--font-mono)" fontSize="7" fill="var(--ink-3)">⟨H⟩</text>
      <text x="214" y="98" textAnchor="end" fontFamily="var(--font-mono)" fontSize="7" fill="var(--ink-3)">γ, β params</text>
      <circle cx="170" cy="30" r="3" fill="var(--accent)" />
      <text x="174" y="28" fontFamily="var(--font-mono)" fontSize="7" fill="var(--accent)">min</text>
    </svg>
  );
}

export default function ProjectsNew() {
  const F = FEATURED;
  const I = INDEX;

  return (
    <section id="projects" style={{ padding: "var(--pad-section) 0" }}>
      <div className="frame">
        <div className="section-marker">
          <span className="roman">§ III</span>
          <span className="title">Projects / Selected Works</span>
          <span className="meta">{F.length} featured · {I.length} indexed</span>
        </div>

        {/* Featured projects */}
        {F.map((p, i) => (
          <article
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
              gap: 56,
              padding: "44px 0",
              borderTop: i === 0 ? "1px solid var(--ink)" : "1px solid var(--rule)",
            }}
          >
            {/* Left */}
            <div>
              <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.08em", marginBottom: 14 }}>
                fig. {String(i + 1).padStart(2, "0")} &nbsp;·&nbsp; {p.cat}
              </div>
              <h3
                className="display"
                style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.0, margin: "0 0 14px", color: "var(--ink)" }}
              >
                {p.name}
              </h3>
              <p className="italic-serif" style={{ fontSize: 17, lineHeight: 1.45, color: "var(--ink-2)", margin: "0 0 18px" }}>
                {p.sub}
              </p>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-2)", margin: "0 0 22px", maxWidth: 460 }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 22 }}>
                {p.stack.map((s, j) => (
                  <span key={j} className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.04em" }}>
                    · {s}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
                <span className="mono" style={{ fontSize: 11, display: "flex", alignItems: "center" }}>
                  <StatusDot s={p.status} />{p.status}
                </span>
                <a href={`https://${p.repo}`} target="_blank" rel="noreferrer" className="ghost-link">
                  {p.repo} <span className="arr">→</span>
                </a>
                {p.site && (
                  <a href={`https://${p.site}`} target="_blank" rel="noreferrer" className="ghost-link">
                    {p.site} <span className="arr">↗</span>
                  </a>
                )}
                {p.doi && (
                  <a href={`https://${p.doi}`} target="_blank" rel="noreferrer" className="ghost-link" style={{ color: "var(--accent)" }}>
                    doi <span className="arr">↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right — diagram */}
            <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
              <div
                style={{
                  aspectRatio: "11 / 5",
                  background: "var(--bg-2)",
                  border: "1px solid var(--rule)",
                  padding: 20,
                  marginBottom: 14,
                }}
              >
                <ProjectDiagram kind={p.diagram} />
              </div>
              <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-4)", letterSpacing: "0.06em" }}>
                fig. {String(i + 1).padStart(2, "0")} — schematic, not to scale
              </div>
            </div>
          </article>
        ))}

        {/* Index table */}
        <div style={{ marginTop: 80 }}>
          <div className="label" style={{ marginBottom: 18 }}>↳ INDEX · all other works</div>
          <div style={{ borderTop: "1px solid var(--ink)" }}>
            <div
              className="mono"
              style={{
                display: "grid",
                gridTemplateColumns: "60px minmax(0, 2.6fr) 1.1fr 1.4fr 0.7fr 0.9fr 90px",
                gap: 20,
                padding: "14px 0",
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "var(--ink-4)",
                borderBottom: "1px solid var(--rule)",
                textTransform: "uppercase",
              }}
            >
              <span>№</span>
              <span>Project</span>
              <span>Category</span>
              <span>Stack</span>
              <span>Year</span>
              <span>Status</span>
              <span style={{ textAlign: "right" }}>Links</span>
            </div>

            {I.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px minmax(0, 2.6fr) 1.1fr 1.4fr 0.7fr 0.9fr 90px",
                  gap: 20,
                  padding: "26px 0",
                  borderBottom: "1px solid var(--rule)",
                  alignItems: "baseline",
                }}
              >
                <span className="mono" style={{ fontSize: 11, color: "var(--ink-4)", letterSpacing: "0.06em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span style={{ fontSize: 16, color: "var(--ink)", letterSpacing: "-0.005em" }}>{p.name}</span>
                  {p.attr && (
                    <span className="mono" style={{ display: "block", fontSize: 9.5, color: "var(--ink-4)", letterSpacing: "0.06em", marginTop: 3 }}>
                      w/ {p.attr}
                    </span>
                  )}
                </span>
                <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>{p.cat}</span>
                <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>{p.stack}</span>
                <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>{p.year}</span>
                <span className="mono" style={{ fontSize: 11, display: "flex", alignItems: "center" }}>
                  <StatusDot s={p.status} />{p.status}
                </span>
                <span style={{ display: "flex", justifyContent: "flex-end", gap: 12, flexWrap: "wrap" }}>
                  {p.repo ? (
                    <a href={`https://${p.repo}`} target="_blank" rel="noreferrer" className="ghost-link" style={{ fontSize: 10.5 }}>
                      repo <span className="arr">↗</span>
                    </a>
                  ) : null}
                  {p.doi ? (
                    <a href={`https://${p.doi}`} target="_blank" rel="noreferrer" className="ghost-link" style={{ fontSize: 10.5, color: "var(--accent)" }}>
                      doi <span className="arr">↗</span>
                    </a>
                  ) : null}
                  {!p.repo && !p.doi ? (
                    <span className="mono" style={{ fontSize: 10.5, color: "var(--ink-4)" }}>—</span>
                  ) : null}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
