"use client";

import { NOTEBOOK, CURRENTLY, PATENT } from "@/lib/data";

export default function MLabNotebook() {
  const N = NOTEBOOK;
  const C = CURRENTLY;
  const P = PATENT;

  return (
    <section id="lab" className="m-sec-tint reveal">
      <div className="m-section-marker">
        <span className="roman">§ IV</span>
        <span className="title">Lab Notebook / Currently</span>
        <span className="meta">field journal · raw thoughts</span>
      </div>

      {/* Currently */}
      <div className="label" style={{ marginBottom: 12 }}>↳ CURRENTLY</div>
      <div className="currently-list">
        {C.map((it, i) => (
          <div key={i} className="currently-row">
            <div className="currently-k">{it.k}</div>
            <div className="currently-v">{it.v}</div>
          </div>
        ))}
      </div>

      {/* Patent card */}
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
