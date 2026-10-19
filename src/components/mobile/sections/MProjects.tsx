"use client";

import { CLUSTERS, INDEX } from "@/lib/data";
import SpecimenFigure from "@/components/SpecimenFigure";

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];
const LETTER = "abcdefgh";

function StatusDot({ s }: { s: string }) {
  const active = ["live", "active", "complete", "published", "accepted", "maintained"].includes(s);
  const warm   = ["wip", "research", "review", "in progress", "under review", "seeking venue", "early development"].includes(s);
  const cls = active ? "dot dot-active" : warm ? "dot dot-warm" : "dot dot-cool";
  return <span className={cls} />;
}

export default function MProjects() {
  const C = CLUSTERS;
  const I = INDEX;

  return (
    <section id="projects" className="m-sec reveal">
      <div className="m-section-marker">
        <span className="roman">§ III</span>
        <span className="title">Projects / Selected Works</span>
        <span className="meta">{C.length} clusters · {I.length} indexed</span>
      </div>

      {/* Project clusters, one plate each */}
      <div>
        {C.map((c, i) => (
          <article key={c.name} className="m-featured">
            <div className="m-figcap">PLATE {ROMAN[i]} · {c.cat.toUpperCase()} · {c.members.length} SPECIMENS</div>
            <h3 className="m-proj-name">{c.name}</h3>
            <p className="m-proj-sub">{c.sub}</p>
            <p className="m-proj-desc">{c.desc}</p>

            <div className="specimen-list">
              {c.members.map((m, j) => (
                <figure key={m.name} className="specimen">
                  <div className="diagram-frame">
                    <SpecimenFigure fig={m.fig} label={`Figure for ${m.name}: ${m.role}`} />
                  </div>
                  <figcaption>
                    <div className="specimen-head">
                      <span className="specimen-letter">{LETTER[j]}.</span>
                      <span className="index-nm">{m.name}</span>
                    </div>
                    {m.attr && <div className="index-attr">w/ {m.attr}</div>}
                    <div className="member-role">{m.role}</div>
                    <div className="index-tags">
                      <span>{m.stack}</span>
                      <span>·</span>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <StatusDot s={m.status} />{m.status}
                      </span>
                    </div>
                    <div className="specimen-links">
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
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Index */}
      <div className="index-wrap">
        <div className="label" style={{ marginBottom: 14 }}>↳ INDEX · every project</div>
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
                  <span className="mono" style={{ fontSize: 10.5, color: "var(--ink-4)" }}>–</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
