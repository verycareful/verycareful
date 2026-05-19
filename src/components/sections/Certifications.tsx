"use client";

import { CERTS } from "@/lib/data";

export default function Certifications() {
  const C = CERTS;

  return (
    <section id="certs" style={{ padding: "var(--pad-section) 0" }}>
      <div className="frame">
        <div className="section-marker">
          <span className="roman">§ IV·a</span>
          <span className="title">Coursework / Certifications</span>
          <span className="meta">{C.length} entries</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            borderTop: "1px solid var(--ink)",
            borderLeft: "1px solid var(--rule)",
          }}
        >
          {C.map((c, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "44px 1fr auto",
                gap: 14,
                padding: "18px 22px",
                borderRight: "1px solid var(--rule)",
                borderBottom: "1px solid var(--rule)",
                alignItems: "baseline",
              }}
            >
              <span className="mono" style={{ fontSize: 10.5, color: "var(--ink-4)", letterSpacing: "0.06em" }}>
                {String(i + 1).padStart(3, "0")}
              </span>
              <div>
                <div style={{ fontSize: 14.5, lineHeight: 1.35, color: "var(--ink)" }}>{c.n}</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 4 }}>
                  {c.i}
                  {c.d ? <span style={{ color: "var(--ink-4)" }}> · {c.d}</span> : null}
                </div>
              </div>
              {c.l ? (
                <a
                  href={c.l}
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-link"
                  style={{ fontSize: 10.5, alignSelf: "center" }}
                >
                  verify <span className="arr">↗</span>
                </a>
              ) : (
                <span className="mono" style={{ fontSize: 10.5, color: "var(--ink-4)" }}>—</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
