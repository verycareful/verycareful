"use client";

import { NOTEBOOK, PATENT } from "@/lib/data";

export default function LabNotebook() {
  const N = NOTEBOOK;
  const P = PATENT;

  return (
    <section id="lab" style={{ padding: "var(--pad-section) 0", background: "var(--bg-2)" }}>
      <div className="frame">
        <div className="section-marker">
          <span className="roman">§ V</span>
          <span className="title">Lab Notebook</span>
          <span className="meta">field journal · raw thoughts</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 4fr) minmax(0, 8fr)",
            gap: 56,
          }}
        >
          {/* Left — patent reference. Currently moved to the Roadmap section. */}
          <div>
            {/* Patent compact reference card */}
            <div
              style={{
                padding: 20,
                border: "1px solid var(--rule)",
                background: "var(--bg)",
              }}
            >
              <div className="label" style={{ marginBottom: 8 }}>↳ PATENT</div>
              <div style={{ fontSize: 14, lineHeight: 1.4, color: "var(--ink)" }}>{P.title}</div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 8 }}>
                {P.id} · filed {P.filed} · {P.office}
              </div>
            </div>
          </div>

          {/* Right — Field journal */}
          <div>
            <div className="label" style={{ marginBottom: 14 }}>↳ FIELD JOURNAL</div>
            <div style={{ borderTop: "1px solid var(--ink)" }}>
              {N.map((e, i) => (
                <article
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    gap: 24,
                    padding: "26px 0",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  <div>
                    <div className="mono" style={{ fontSize: 11, color: "var(--ink)", letterSpacing: "0.06em" }}>
                      {e.date}
                    </div>
                    <div className="mono" style={{ fontSize: 9.5, color: "var(--accent)", letterSpacing: "0.16em", marginTop: 4 }}>
                      ↳ {e.tag}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.35, margin: "0 0 8px", color: "var(--ink)" }}>
                      {e.title}
                    </h4>
                    <p className="italic-serif" style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>
                      {e.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
