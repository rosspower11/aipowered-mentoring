"use client";

import { useEffect, useState } from "react";
import { BOOK_CTA } from "@/lib/mentoring";

export default function MNav() {
  const [open, setOpen] = useState(false);

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

    const handleScroll = () => {
      const y = window.scrollY + 120;
      let active = sections[0];
      sections.forEach((s) => {
        if ((s.target as HTMLElement).offsetTop <= y) active = s;
      });
      navPills.forEach((p) => p.classList.remove("active"));
      if (active) active.pill.classList.add("active");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav-logo">
        <span style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.01em" }}>ai powered</span>
        <span style={{ margin: "0 8px", opacity: 0.35, fontWeight: 300 }}>x</span>
        <span style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.01em" }}>Mentoring</span>
      </div>
      <div className={`nav-center ${open ? "open" : ""}`}>
        <div className="nav-pills">
          <a href="#difference" className="nav-pill" onClick={close}>The Difference</a>
          <a href="#cover" className="nav-pill" onClick={close}>What We Cover</a>
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
