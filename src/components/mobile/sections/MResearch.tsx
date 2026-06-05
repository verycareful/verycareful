"use client";

import { RESEARCH } from "@/lib/data";

function StatusDot({ s }: { s: string }) {
  const active = ["live", "active", "complete", "published"].includes(s);
  const warm   = ["wip", "research", "review", "in progress", "under review", "seeking venue"].includes(s);
  const cls = active ? "dot dot-active" : warm ? "dot dot-warm" : "dot dot-cool";
  return <span className={cls} />;
}

export default function MResearch() {
  const R = RESEARCH;

  return (
    <section id="research" className="m-sec-tint reveal">
      <div className="m-section-marker">
        <span className="roman">§ II</span>
        <span className="title">Research / Publications</span>
        <span className="meta">{R.length} entries</span>
      </div>

      <div style={{ borderTop: "1px solid var(--ink)" }}>
        {R.map((r, i) => (
          <article key={i} className="research-entry">
            <div className="research-head">
              <span className="research-serial">{r.n}</span>
              <div>
                <div className="research-meta">{r.period}</div>
                <div className="research-status">
                  <StatusDot s={r.status} />
                  {r.status}
                </div>
              </div>
            </div>

            <h3 className="research-title">{r.title}</h3>
            <p className="research-summary">{r.summary}</p>

            <div className="m-eq">{r.eq}</div>

            <div className="research-stack">
              {r.stack.map((s, j) => (
                <span key={j}>· {s}</span>
              ))}
            </div>

            <div className="venue-block">
              <div className="label" style={{ marginBottom: 8 }}>↳ venue</div>
              <div className="venue-name">
                {r.doi ? (
                  <a
                    href={`https://${r.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-link"
                  >
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
          </article>
        ))}
      </div>
    </section>
  );
}
