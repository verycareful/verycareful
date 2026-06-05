"use client";

import { CERTS } from "@/lib/data";

export default function MCertifications() {
  const C = CERTS;

  return (
    <section id="certs" className="m-sec reveal">
      <div className="m-section-marker">
        <span className="roman">§ IV·a</span>
        <span className="title">Coursework / Certifications</span>
        <span className="meta">{C.length} entries</span>
      </div>

      <div className="cert-list">
        {C.map((c, i) => (
          <div key={i} className="cert-row">
            <span className="cert-num">{String(i + 1).padStart(3, "0")}</span>
            <div>
              <div className="cert-nm">{c.n}</div>
              <div className="cert-iss">
                {c.i}
                {c.d ? <span className="cert-date"> · {c.d}</span> : null}
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
              <span className="mono" style={{ fontSize: 10.5, color: "var(--ink-4)", alignSelf: "center" }}>—</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
