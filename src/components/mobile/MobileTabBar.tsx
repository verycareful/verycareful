"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
  { roman: "I",   label: "About",    href: "#about"    },
  { roman: "II",  label: "Research", href: "#research" },
  { roman: "III", label: "Projects", href: "#projects" },
  { roman: "IV",  label: "Lab",      href: "#lab"      },
  { roman: "V",   label: "Contact",  href: "#contact"  },
] as const;

const SECTION_IDS = ["about", "research", "projects", "lab", "contact"];

export default function MobileTabBar() {
  const [activeIdx, setActiveIdx] = useState(0);
  const observersRef = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIdx(i);
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    observersRef.current = observers;
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="m-tabbar" role="navigation" aria-label="Page sections">
      {TABS.map((tab, i) => (
        <a
          key={tab.label}
          href={tab.href}
          className={`m-tab${i === activeIdx ? " active" : ""}`}
          aria-label={tab.label}
          aria-current={i === activeIdx ? "page" : undefined}
        >
          <span className="m-tab-roman">{tab.roman}</span>
          <span className="m-tab-label">{tab.label}</span>
        </a>
      ))}
    </div>
  );
}
