"use client";

import { CLUSTERS, INDEX } from "@/lib/data";
import type { ClusterMember } from "@/lib/types";
import SpecimenFigure from "@/components/SpecimenFigure";

function StatusDot({ s }: { s: string }) {
  const active = ["live", "active", "complete", "published", "accepted", "maintained"].includes(s);
  const warm   = ["wip", "research", "review", "in progress", "under review", "seeking venue", "early development"].includes(s);
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

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];
const LETTER = "abcdefgh";

function MemberLinks({ m }: { m: ClusterMember }) {
  return (
    <span style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {m.repo ? (
        <a href={`https://${m.repo}`} target="_blank" rel="noreferrer" className="ghost-link" style={{ fontSize: 10.5 }}>
          repo <span className="arr">↗</span>
        </a>
      ) : (
        <span className="mono" style={{ fontSize: 10.5, color: "var(--ink-4)" }}>private</span>
      )}
      {m.site && (
        <a href={`https://${m.site}`} target="_blank" rel="noreferrer" className="ghost-link" style={{ fontSize: 10.5 }}>
          site <span className="arr">↗</span>
        </a>
      )}
      {m.doi && (
        <a href={`https://${m.doi}`} target="_blank" rel="noreferrer" className="ghost-link" style={{ fontSize: 10.5, color: "var(--accent)" }}>
          doi <span className="arr">↗</span>
        </a>
      )}
    </span>
  );
}

/** One repository on a plate: its figure, then its caption. */
function Specimen({ m, letter, wide }: { m: ClusterMember; letter: string; wide: boolean }) {
  return (
    <figure
      style={{
        margin: 0,
        display: "grid",
        gridTemplateColumns: wide ? "minmax(0, 1fr) minmax(0, 1fr)" : "minmax(0, 1fr)",
        gap: wide ? 22 : 16,
        alignItems: "start",
        // Plates stretch every specimen to the tallest caption; keep the slack below.
        alignContent: "start",
      }}
    >
      <div
        style={{
          aspectRatio: "16 / 10",
          background: "var(--bg-2)",
          border: "1px solid var(--rule)",
          padding: 14,
        }}
      >
        <SpecimenFigure fig={m.fig} label={`Figure for ${m.name}: ${m.role}`} />
      </div>
      <figcaption>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-4)" }}>{letter}.</span>
          <span style={{ fontSize: 17, color: "var(--ink)", letterSpacing: "-0.005em" }}>{m.name}</span>
        </div>
        {m.attr && (
          <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-4)", letterSpacing: "0.06em", margin: "3px 0 0 18px" }}>
            w/ {m.attr}
          </div>
        )}
        <p style={{ fontSize: 13.5, lineHeight: 1.45, color: "var(--ink-2)", margin: "8px 0 8px 18px" }}>{m.role}</p>
        <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", margin: "0 0 10px 18px" }}>{m.stack}</div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginLeft: 18 }}>
          <span className="mono" style={{ fontSize: 10.5, display: "flex", alignItems: "center" }}>
            <StatusDot s={m.status} />{m.status}
          </span>
          <MemberLinks m={m} />
        </div>
      </figcaption>
    </figure>
  );
}

export default function ProjectsNew() {
  const C = CLUSTERS;
  const I = INDEX;

  return (
    <section id="projects" style={{ padding: "var(--pad-section) 0" }}>
      <div className="frame">
        <div className="section-marker">
          <span className="roman">§ III</span>
          <span className="title">Projects / Selected Works</span>
          <span className="meta">{C.length} clusters · {I.length} indexed</span>
        </div>

        {/* Project clusters, one plate each */}
        {C.map((c, i) => {
          const n = c.members.length;
          return (
            <article
              key={c.name}
              style={{
                padding: "28px 0 56px",
                borderTop: i === 0 ? "1px solid var(--ink)" : "1px solid var(--rule)",
              }}
            >
              <div
                className="mono"
                style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.1em", marginBottom: 28 }}
              >
                <span>PLATE {ROMAN[i]} &nbsp;·&nbsp; {c.cat.toUpperCase()}</span>
                <span>{n} SPECIMENS</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)", gap: 56, marginBottom: 40 }}>
                <div>
                  <h3
                    className="display"
                    style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.0, margin: "0 0 14px", color: "var(--ink)" }}
                  >
                    {c.name}
                  </h3>
                  <p className="italic-serif" style={{ fontSize: 18, lineHeight: 1.4, color: "var(--ink-2)", margin: 0 }}>
                    {c.sub}
                  </p>
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)", margin: 0 }}>{c.desc}</p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                  gap: n <= 2 ? 40 : 28,
                }}
              >
                {c.members.map((m, j) => (
                  <Specimen key={m.name} m={m} letter={LETTER[j]} wide={n <= 2} />
                ))}
              </div>
            </article>
          );
        })}

        {/* Index table */}
        <div style={{ marginTop: 80 }}>
          <div className="label" style={{ marginBottom: 18 }}>↳ INDEX · every project</div>
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
                    <span className="mono" style={{ fontSize: 10.5, color: "var(--ink-4)" }}>–</span>
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
