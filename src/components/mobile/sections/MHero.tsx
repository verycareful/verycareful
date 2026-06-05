"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { HERO } from "@/lib/data";

const QuantumCanvas = dynamic(
  () => import("@/components/sections/QuantumCanvas"),
  { ssr: false }
);

export default function MHero() {
  const tipRef = useRef<HTMLDivElement>(null);
  const H = HERO;

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      {/* Canvas background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <QuantumCanvas tipRef={tipRef} />
      </div>

      {/* Measurement tooltip */}
      <div ref={tipRef} className="measure-tip" />

      {/* Inner — flex column, 88vh min-height so hint row sits at bottom */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 20px 8px",
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Masthead */}
        <div
          className="mono"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
            flexWrap: "wrap",
            fontSize: 9,
            letterSpacing: "0.14em",
            color: "var(--ink-3)",
            paddingTop: 18,
          }}
        >
          <span>VOL. III &nbsp;·&nbsp; ISSUE 04</span>
          <span>CHENNAI &nbsp;·&nbsp; MAY 2026</span>
        </div>

        {/* Bra-ket line */}
        <div
          className="mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.14em",
            color: "var(--ink-3)",
            margin: "30px 0 14px",
            lineHeight: 1.7,
          }}
        >
          ⟨φ|{" "}
          <span style={{ color: "var(--accent)" }}>Sricharan Suresh</span>
          {" "}|φ⟩ · aspiring quantum engineer
        </div>

        {/* Name */}
        <h1
          className="display"
          style={{
            fontSize: "clamp(52px, 18vw, 86px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 0.85,
            margin: 0,
            color: "var(--ink)",
          }}
        >
          {H.name.split(" ")[0]}
          <br />
          <span style={{ color: "var(--ink-2)" }}>
            {H.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* State vector */}
        <div
          className="mono"
          style={{ fontSize: 12, color: "var(--accent)", marginTop: 16, letterSpacing: "0.03em" }}
        >
          {H.state}
        </div>

        {/* Thesis block */}
        <div
          style={{
            borderLeft: "1px solid var(--rule)",
            paddingLeft: 16,
            marginTop: 34,
            maxWidth: 520,
          }}
        >
          <div className="label" style={{ marginBottom: 10 }}>↳ THESIS · eq. 0.1</div>
          <p style={{ fontSize: 17, lineHeight: 1.45, margin: 0, color: "var(--ink)" }}>
            <span className="italic-serif" style={{ fontSize: 22, color: "var(--accent)" }}>&ldquo;</span>
            {H.thesis}
            <span className="italic-serif" style={{ fontSize: 22, color: "var(--accent)" }}>&rdquo;</span>
          </p>

          <div
            className="mono"
            style={{
              fontSize: 10,
              color: "var(--ink-3)",
              letterSpacing: "0.06em",
              marginTop: 16,
              lineHeight: 1.5,
            }}
          >
            {H.affil}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
            <a
              href="#research"
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
              Read the work →
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
              github ↗
            </a>
          </div>
        </div>

        {/* Status list */}
        <div style={{ marginTop: 40, paddingTop: 18, borderTop: "1px solid var(--rule)" }}>
          {H.status.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "14px 0",
                borderBottom: i < H.status.length - 1 ? "1px solid var(--rule-soft)" : "none",
              }}
            >
              <div className="label" style={{ marginBottom: 6 }}>↳ {s.k}</div>
              <div style={{ fontSize: 14, lineHeight: 1.4, color: "var(--ink)" }}>{s.v}</div>
            </div>
          ))}
        </div>

        {/* Flexible spacer — pushes hint row to bottom */}
        <div style={{ flex: 1, minHeight: 24 }} />

        {/* Hint row */}
        <div
          style={{
            borderTop: "1px solid var(--rule)",
            paddingTop: 16,
            paddingBottom: 22,
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          {[
            ["tap qubits", "collapse |0⟩ or |1⟩"],
            ["scroll", "for the rest of the issue"],
            ["§ I", "About"],
            ["§ V", "Contact"],
          ].map(([k, v], i) => (
            <div key={i} className="mono" style={{ fontSize: 9.5, letterSpacing: "0.05em" }}>
              <div style={{ color: "var(--ink-4)", fontWeight: 400, marginBottom: 2 }}>{k}</div>
              <span style={{ color: "var(--ink-2)" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
