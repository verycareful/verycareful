"use client";

export default function MContact() {
  return (
    <section id="contact" className="m-sec-tint reveal">
      <div className="m-section-marker">
        <span className="roman">§ V</span>
        <span className="title">Correspondence / Colophon</span>
        <span className="meta">end of issue</span>
      </div>

      <h2 className="contact-h">
        Want to{" "}
        <span className="contact-ac">collaborate</span>?
      </h2>

      <p className="contact-lede">
        I read every message. Research collaborations, internships, or projects with a clear
        technical thesis — those especially.
      </p>

      <div className="contact-links">
        <a
          href="mailto:sricharans@proton.me"
          className="mono"
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "12px 16px",
            border: "1px solid var(--ink)",
            background: "var(--ink)",
            color: "var(--bg)",
            display: "inline-block",
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
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "12px 16px",
            border: "1px solid var(--ink)",
            display: "inline-block",
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
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "12px 16px",
            border: "1px solid var(--ink)",
            display: "inline-block",
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
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "12px 16px",
            border: "1px solid var(--ink)",
            display: "inline-block",
          }}
        >
          ↗ orcid
        </a>
      </div>

      <div className="colophon">
        <div className="label" style={{ marginBottom: 14 }}>↳ COLOPHON</div>
        <p className="colophon-p">
          Set in <span className="mono">IBM Plex Mono</span>,{" "}
          <span style={{ fontFamily: "var(--font-body)" }}>Inter Tight</span>, and{" "}
          <span className="italic-serif">Newsreader</span>. Hand-built in Next.js + TypeScript.
          Quantum sketches drawn in &lt;canvas&gt; with pointer-driven entanglement repulsion.
        </p>

        <hr className="rule-soft" />

        <p className="colophon-fine" style={{ marginTop: 16 }}>
          © 2026 Sricharan Suresh. Some rights reserved.<br />
          Last revised May 2026 · Vol. III, Issue 04.
        </p>

        <hr className="rule-soft" style={{ margin: "20px 0" }} />

        <p className="colophon-note">
          <span className="colophon-nlabel">NOTE †.</span>
          {" "}You can collapse the qubits in the masthead. Tap one. They actually pick a basis state.
        </p>
      </div>
    </section>
  );
}
