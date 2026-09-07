"use client";

import { NOTEBOOK, PATENT } from "@/lib/data";

export default function MLabNotebook() {
  const N = NOTEBOOK;
  const P = PATENT;

  return (
    <section id="lab" className="m-sec-tint reveal">
      <div className="m-section-marker">
        <span className="roman">§ V</span>
        <span className="title">Lab Notebook</span>
        <span className="meta">field journal · raw thoughts</span>
      </div>

      {/* Patent card. Currently moved to the Roadmap section. */}
      <div className="patent-card">
        <div className="label">↳ PATENT</div>
        <div className="patent-title">{P.title}</div>
        <div className="patent-meta">
          {P.id} · filed {P.filed} · {P.office}
        </div>
      </div>

      {/* Field journal */}
      <div style={{ marginTop: 44 }}>
        <div className="label" style={{ marginBottom: 12 }}>↳ FIELD JOURNAL</div>
        <div className="journal-list">
          {N.map((e, i) => (
            <article key={i} className="journal-entry">
              <div className="journal-head">
                <span className="journal-date">{e.date}</span>
                <span className="journal-tag">↳ {e.tag}</span>
              </div>
              <h4 className="journal-title">{e.title}</h4>
              <p className="journal-body">{e.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
