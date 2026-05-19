"use client";

import { PATENT } from "@/lib/data";

export default function Patent() {
  const P = PATENT;

  return (
    <section
      id="patent"
      style={{ padding: "calc(var(--pad-section) * 0.6) 0", background: "var(--bg-2)" }}
    >
      <div className="frame">
        <div className="section-marker">
          <span className="roman">§ II·a</span>
          <span className="title">Patent / Filed Application</span>
          <span className="meta">1 entry</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: 56,
            alignItems: "start",
          }}
        >
          {/* Left — application number */}
          <div>
            <div className="label" style={{ marginBottom: 12 }}>↳ APPLICATION №</div>
            <div
              className="display"
              style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1, color: "var(--ink)" }}
            >
              {P.id}
            </div>
            <div className="mono" style={{ fontSize: 11.5, color: "var(--ink-3)", letterSpacing: "0.06em", marginTop: 14 }}>
              filed {P.filed} &nbsp;·&nbsp; {P.office}
            </div>
            <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginTop: 10, display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  background: "var(--collapse)",
                  marginRight: 8,
                }}
              />
              pending examination
            </div>
          </div>

          {/* Right — title + abstract */}
          <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
            <div className="label" style={{ marginBottom: 14 }}>↳ TITLE</div>
            <h3
              style={{
                fontSize: 22,
                lineHeight: 1.3,
                fontWeight: 500,
                margin: 0,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
              }}
            >
              {P.title}
            </h3>
            <p
              className="italic-serif"
              style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)", margin: "18px 0 0", maxWidth: 580 }}
            >
              An assistive writing device that responds to grip pressure and stroke dynamics,
              designed for users with fine-motor limitations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
