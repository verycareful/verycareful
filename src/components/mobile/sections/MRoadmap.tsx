"use client";

import { CURRENTLY, ROADMAP } from "@/lib/data";
import activityJson from "@/lib/activity.json";
import type { ActivitySnapshot } from "@/lib/types";

const activity = activityJson as ActivitySnapshot;

function cellStyle(count: number, max: number): React.CSSProperties {
  if (count === 0) return { background: "var(--rule-soft)" };
  const t = 0.18 + 0.82 * (count / max);
  return { background: `color-mix(in oklch, var(--accent) ${Math.round(t * 100)}%, transparent)` };
}

export default function MRoadmap() {
  const C = CURRENTLY;
  const R = ROADMAP;
  const A = activity;

  const max = Math.max(1, ...A.repos.flatMap((r) => r.weeks));
  const generated = new Date(A.generated).toISOString().slice(0, 10);

  return (
    <section id="roadmap" className="reveal">
      <div className="m-section-marker">
        <span className="roman">§ IV</span>
        <span className="title">Roadmap / Plan and Record</span>
        <span className="meta">plan by hand · record generated weekly</span>
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

      {/* Planned */}
      <div style={{ marginTop: 40 }}>
        <div className="label" style={{ marginBottom: 12 }}>↳ PLANNED · NEXT FOUR WEEKS</div>
        <div className="plan-list">
          {R.map((w) => (
            <div key={w.start} className="plan-row">
              <div className="plan-date">{w.label}</div>
              <div className="plan-chips">
                {w.projects.length === 0 ? (
                  <span className="plan-empty">unallocated</span>
                ) : (
                  w.projects.map((p) => (
                    <span key={p} className="plan-chip">{p}</span>
                  ))
                )}
              </div>
              {w.note && <p className="plan-note">{w.note}</p>}
            </div>
          ))}
        </div>
        <p className="plan-caveat">
          A plan, not a promise. What actually happened is recorded below.
        </p>
      </div>

      {/* Record */}
      <div style={{ marginTop: 40 }}>
        <div className="label" style={{ marginBottom: 12 }}>↳ RECORD · COMMITS PER WEEK</div>
        <div className="rec-list">
          {A.repos.map((r) => (
            <div key={r.repo} className="rec-row">
              <div className="rec-head">
                <span className="rec-repo">{r.repo}</span>
                <span className="rec-total">{r.total}</span>
              </div>
              <div className="rec-strip">
                {r.weeks.map((n, i) => (
                  <div
                    key={i}
                    className="rec-cell"
                    title={`${A.weeks[i]} · ${n} commit${n === 1 ? "" : "s"}`}
                    style={cellStyle(n, max)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="rec-axis">
          <span>{A.weeks[0]}</span>
          <span>{A.weeks[A.weeks.length - 1]}</span>
        </div>
        <p className="rec-foot">
          public repositories only · all branches · generated {generated}
        </p>
      </div>
    </section>
  );
}
