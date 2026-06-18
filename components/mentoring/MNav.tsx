"use client";

import { useEffect, useState } from "react";
import { BOOK_CTA, LOGO_BLACK, LOGO_WHITE } from "@/lib/mentoring";

export default function MNav() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const navPills = document.querySelectorAll(".nav-pill");
    const sections = Array.from(navPills)
      .map((p) => {
        const href = p.getAttribute("href");
        if (!href) return null;
        const target = document.querySelector(href);
        return { pill: p, target };
      })
      .filter((s): s is { pill: Element; target: Element } => s?.target != null);

    const lightSections = document.querySelectorAll(".painpoints, .who-section, .pricing");

    const handleScroll = () => {
      const y = window.scrollY + 120;
      let active = sections[0];
      sections.forEach((s) => {
        if ((s.target as HTMLElement).offsetTop <= y) active = s;
      });
      navPills.forEach((p) => p.classList.remove("active"));
      if (active) active.pill.classList.add("active");

      const navLine = 56;
      let overLight = false;
      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navLine && rect.bottom >= navLine) overLight = true;
      });
      setLight(overLight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={`nav ${light ? "nav--light" : ""}`}>
      <a href="#" className="nav-logo" aria-label="AI Powered">
        <img
          src={LOGO_WHITE}
          alt="AI Powered"
          className="nav-logo-img nav-logo-img--white"
          height={28}
        />
        <img
          src={LOGO_BLACK}
          alt="AI Powered"
          className="nav-logo-img nav-logo-img--black"
          height={28}
        />
      </a>
      <div className={`nav-center ${open ? "open" : ""}`}>
        <div className="nav-pills">
          <a href="#difference" className="nav-pill" onClick={close}>The Difference</a>
          <a href="#cover" className="nav-pill" onClick={close}>What You Get</a>
          <a href="#how" className="nav-pill" onClick={close}>How It Works</a>
          <a href="#about-section" className="nav-pill" onClick={close}>Meet Ross</a>
          <a href="#investment" className="nav-pill" onClick={close}>Investment</a>
        </div>
      </div>
      <a href="#investment" className="nav-cta" onClick={close}>{BOOK_CTA}</a>
      <button
        type="button"
        className={`nav-burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
