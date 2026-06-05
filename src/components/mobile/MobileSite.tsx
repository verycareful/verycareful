"use client";

import { useEffect } from "react";
import "./mobile.css";

import MobileTopBar from "./MobileTopBar";
import MobileTabBar from "./MobileTabBar";
import MHero from "./sections/MHero";
import MAbout from "./sections/MAbout";
import MResearch from "./sections/MResearch";
import MProjects from "./sections/MProjects";
import MLabNotebook from "./sections/MLabNotebook";
import MCertifications from "./sections/MCertifications";
import MContact from "./sections/MContact";

function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function MobileSite() {
  useReveal();

  return (
    <>
      <MobileTopBar />
      <main style={{ paddingBottom: 64 }}>
        <MHero />
        <MAbout />
        <MResearch />
        <MProjects />
        <MLabNotebook />
        <MCertifications />
        <MContact />
      </main>
      <MobileTabBar />
    </>
  );
}
