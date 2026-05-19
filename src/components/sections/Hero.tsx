"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { HERO } from "@/lib/data";

const QuantumCanvas = dynamic(() => import("./QuantumCanvas"), { ssr: false });

export default function Hero() {
  const tipRef = useRef<HTMLDivElement>(null);
  const H = HERO;

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
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

      {/* Journal masthead */}
      <div
        className="frame"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: 28,
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--ink-3)" }}>
          VOL. III &nbsp;·&nbsp; ISSUE 04 &nbsp;·&nbsp; CHENNAI &nbsp;·&nbsp; MAY 2026
        </div>
        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--ink-3)" }}>
          PORTFOLIO &nbsp;/&nbsp; LAB JOURNAL &nbsp;/&nbsp; CV
        </div>
      </div>

      {/*
        Single-column grid frame — stretches to viewport height so the inner
        two-column grid (alignItems: end) can push name/thesis to the bottom.
      */}
      <div
        className="frame"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: 0,
          paddingTop: 56,
          paddingBottom: 80,
          minHeight: "calc(100vh - 80px)",
        }}
      >
        {/*
          Two-column grid — alignItems: end pushes both columns to the bottom
          of the stretched parent grid area.
        */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 7fr) minmax(0, 5fr)",
            gap: 56,
            alignItems: "end",
          }}
        >
          {/* Left — name + state vector */}
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--ink-3)", marginBottom: 18 }}>
              ⟨φ|{" "}
              <span style={{ color: "var(--accent)" }}>Sricharan Suresh</span>
              {" "}|φ⟩ &nbsp;·&nbsp; aspiring quantum engineer
            </div>

            <h1
              className="display"
              style={{
                fontSize: "clamp(56px, 9.5vw, 132px)",
                lineHeight: 0.86,
                fontWeight: 800,
                letterSpacing: "-0.03em",
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

            <div className="mono" style={{ fontSize: 13, color: "var(--accent)", marginTop: 18, letterSpacing: "0.04em" }}>
              {H.state}
            </div>
          </div>

          {/* Right — thesis */}
          <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 24 }}>
            <div className="label" style={{ marginBottom: 10 }}>↳ THESIS · eq. 0.1</div>
            <p style={{ fontSize: 18, lineHeight: 1.45, margin: 0, color: "var(--ink)", maxWidth: 360, fontWeight: 400 }}>
              <span className="italic-serif" style={{ fontSize: 22, color: "var(--accent)" }}>&ldquo;</span>
              {H.thesis}
              <span className="italic-serif" style={{ fontSize: 22, color: "var(--accent)" }}>&rdquo;</span>
            </p>

            <hr className="rule-soft" style={{ margin: "20px 0" }} />

            <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.08em" }}>
              {H.affil}
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#research"
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "10px 16px",
                  border: "1px solid var(--ink)",
                  background: "var(--ink)",
                  color: "var(--bg)",
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
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "10px 16px",
                  border: "1px solid var(--ink)",
                }}
              >
                github ↗
              </a>
            </div>
          </div>

          {/* Status strip — spans full width via gridColumn */}
          <div
            style={{
              gridColumn: "1 / -1",
              marginTop: 64,
              paddingTop: 22,
              borderTop: "1px solid var(--rule)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
            }}
          >
            {H.status.map((s, i) => (
              <div
                key={i}
                style={{
                  paddingRight: 24,
                  borderRight: i < 2 ? "1px solid var(--rule)" : "none",
                  paddingLeft: i > 0 ? 24 : 0,
                }}
              >
                <div className="label" style={{ marginBottom: 8 }}>↳ {s.k}</div>
                <div style={{ fontSize: 14, lineHeight: 1.4, color: "var(--ink)" }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="frame" style={{ position: "relative", zIndex: 2, paddingBottom: 24 }}>
        <hr className="rule" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", paddingTop: 16, gap: 24 }}>
          {[
            ["click qubits", "to collapse |0⟩ or |1⟩"],
            ["scroll",       "for the rest of the issue"],
            ["§ I",          "About"],
            ["§ V",          "Contact"],
          ].map(([k, v], i) => (
            <div key={i} className="mono" style={{ fontSize: 10.5, letterSpacing: "0.06em" }}>
              <div style={{ color: "var(--ink-4)", marginBottom: 2 }}>{k}</div>
              <div style={{ color: "var(--ink-2)" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
