"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "var(--pad-section) 0 4rem", background: "var(--bg-2)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="frame">
        <div className="section-marker">
          <span className="roman">§ V</span>
          <span className="title">Correspondence / Colophon</span>
          <span className="meta">end of issue</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 7fr) minmax(0, 5fr)",
            gap: 56,
          }}
        >
          {/* Left — CTA */}
          <div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(56px, 7vw, 96px)",
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                margin: "0 0 24px",
              }}
            >
              Want to{" "}
              <span style={{ color: "var(--accent)" }}>collaborate</span>?
            </h2>

            <p
              className="italic-serif"
              style={{ fontSize: 18, lineHeight: 1.5, color: "var(--ink-2)", maxWidth: 560, margin: "0 0 32px" }}
            >
              I read every message. Research collaborations, internships, or projects with a clear
              technical thesis — those especially.
            </p>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <a
                href="mailto:sricharans@proton.me"
                className="mono"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "14px 22px",
                  border: "1px solid var(--ink)",
                  background: "var(--ink)",
                  color: "var(--bg)",
                }}
              >
                ✉ write me →
              </a>
              <a
                href="https://github.com/verycareful"
                target="_blank"
                rel="noreferrer"
                className="mono"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "14px 22px",
                  border: "1px solid var(--ink)",
                }}
              >
                ↗ github
              </a>
              <a
                href="https://www.linkedin.com/in/verycareful"
                target="_blank"
                rel="noreferrer"
                className="mono"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "14px 22px",
                  border: "1px solid var(--ink)",
                }}
              >
                ↗ linkedin
              </a>
              <a
                href="https://orcid.org/0009-0004-6873-5692"
                target="_blank"
                rel="noreferrer"
                className="mono"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "14px 22px",
                  border: "1px solid var(--ink)",
                }}
              >
                ↗ orcid
              </a>
            </div>
          </div>

          {/* Right — colophon */}
          <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
            <div className="label" style={{ marginBottom: 14 }}>↳ COLOPHON</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--ink-2)", margin: "0 0 16px" }}>
              Set in <span className="mono">IBM Plex Mono</span>,{" "}
              <span style={{ fontFamily: "var(--font-body)" }}>Inter Tight</span>, and{" "}
              <span className="italic-serif">Newsreader</span>. Hand-built in Next.js + TypeScript.
              Quantum sketches drawn in &lt;canvas&gt; with mouse-driven entanglement repulsion.
            </p>

            <hr className="rule-soft" />

            <p className="mono" style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 16, lineHeight: 1.6, letterSpacing: "0.04em" }}>
              © 2026 Sricharan Suresh. Some rights reserved.<br />
              Last revised May 2026 · Vol. III, Issue 04.
            </p>

            <hr className="rule-soft" style={{ margin: "20px 0" }} />

            <p className="italic-serif" style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-3)", margin: 0 }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-4)" }}>NOTE †.</span>
              &nbsp; You can collapse the qubits in the masthead. Click one. They actually pick a basis state.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
