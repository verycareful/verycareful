"use client";

import { FEATURED, INDEX } from "@/lib/data";
import type { Featured } from "@/lib/types";

function StatusDot({ s }: { s: string }) {
  const active = ["live", "active", "complete", "published"].includes(s);
  const warm   = ["wip", "research", "review", "in progress", "under review", "seeking venue"].includes(s);
  const cls = active ? "dot dot-active" : warm ? "dot dot-warm" : "dot dot-cool";
  return <span className={cls} />;
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

  /* qaoa / default */
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

export default function MProjects() {
  const F = FEATURED;
  const I = INDEX;

  return (
    <section id="projects" className="m-sec reveal">
      <div className="m-section-marker">
        <span className="roman">§ III</span>
        <span className="title">Projects / Selected Works</span>
        <span className="meta">{F.length} featured · {I.length} indexed</span>
      </div>

      {/* Featured cards */}
      <div>
        {F.map((p, i) => (
          <article key={i} className="m-featured">
            <div className="m-figcap">fig. {String(i + 1).padStart(2, "0")} · {p.cat}</div>
            <h3 className="m-proj-name">{p.name}</h3>
            <p className="m-proj-sub">{p.sub}</p>

            <div className="diagram-frame">
              <ProjectDiagram kind={p.diagram} />
            </div>
            <div className="diagram-note">fig. {String(i + 1).padStart(2, "0")} — schematic, not to scale</div>

            <p className="m-proj-desc">{p.desc}</p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 4 }}>
              {p.stack.map((s, j) => (
                <span key={j} className="mono" style={{ fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.04em" }}>
                  · {s}
                </span>
              ))}
            </div>

            <div className="m-proj-links">
              <span className="mono" style={{ fontSize: 11, display: "flex", alignItems: "center" }}>
                <StatusDot s={p.status} />{p.status}
              </span>
              <a href={`https://${p.repo}`} target="_blank" rel="noreferrer" className="ghost-link">
                repo <span className="arr">↗</span>
              </a>
              {p.site && (
                <a href={`https://${p.site}`} target="_blank" rel="noreferrer" className="ghost-link">
                  site <span className="arr">↗</span>
                </a>
              )}
              {p.doi && (
                <a href={`https://${p.doi}`} target="_blank" rel="noreferrer" className="ghost-link" style={{ color: "var(--accent)" }}>
                  doi <span className="arr">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Index */}
      <div className="index-wrap">
        <div className="label" style={{ marginBottom: 14 }}>↳ INDEX · all other works</div>
        <div>
          {I.map((p, i) => (
            <div key={i} className="index-card">
              <span className="index-ix">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div className="index-nm">{p.name}</div>
                {p.attr && <div className="index-attr">w/ {p.attr}</div>}
                <div className="index-tags">
                  <span>{p.cat}</span>
                  <span>·</span>
                  <span>{p.stack}</span>
                  <span>·</span>
                  <span>{p.year}</span>
                  <span>·</span>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <StatusDot s={p.status} />{p.status}
                  </span>
                </div>
              </div>
              <div className="index-links">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
