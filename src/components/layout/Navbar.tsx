"use client";

import { useTheme } from "@/components/ThemeProvider";

const NAV_ITEMS = [
  ["I",   "About",    "#about"],
  ["II",  "Research", "#research"],
  ["III", "Projects", "#projects"],
  ["IV",  "Lab",      "#lab"],
  ["V",   "Contact",  "#contact"],
] as const;

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "color-mix(in srgb, var(--bg) 88%, transparent)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div
        className="frame"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 32px",
        }}
      >
        <a
          href="#hero"
          className="mono"
          style={{ fontSize: 11, letterSpacing: "0.18em", fontWeight: 600 }}
        >
          SS &nbsp;·&nbsp; <span style={{ color: "var(--ink-3)" }}>EST. 2024</span>
        </a>

        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_ITEMS.map(([n, label, href]) => (
            <a
              key={label}
              href={href}
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              <span style={{ color: "var(--ink-4)", marginRight: 6 }}>{n}.</span>
              <span>{label}</span>
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="mono"
            style={{
              fontSize: 10.5,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "none",
              border: "1px solid var(--rule)",
              color: "var(--ink-3)",
              padding: "4px 10px",
              cursor: "pointer",
              marginLeft: 12,
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "paper" : "dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
