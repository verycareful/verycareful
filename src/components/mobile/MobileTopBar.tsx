"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function MobileTopBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="m-topbar">
      <a href="#hero" className="m-topbar-brand">
        SS &nbsp;·&nbsp; <span className="m-topbar-est">EST. 2024</span>
      </a>
      <button
        onClick={toggleTheme}
        className="m-theme-btn"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "paper" : "dark"}
      </button>
    </nav>
  );
}
