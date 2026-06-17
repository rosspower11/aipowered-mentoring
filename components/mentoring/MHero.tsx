import { BOOK_CTA } from "@/lib/mentoring";

export default function MHero() {
  return (
    <section className="hero hero-center">
      <div className="hero-inner">
        <div className="hero-cohort-badge anim">Private 1:1 · with Ross</div>
        <h1 className="anim">
          One to one with <strong>Ross</strong>.<br />Your business, my full focus.
        </h1>
        <p className="hero-sub anim d1">
          The group cohort is powerful. But sometimes you want the room to yourself. Your challenges, your tools, your pace, with me working alongside you the whole time, on the things that actually move your business.
        </p>
        <div className="anim d2">
          <a href="#investment" className="btn-white">{BOOK_CTA}</a>
        </div>
        <p className="anim d3" style={{ marginTop: 18, fontFamily: "var(--mono)", fontSize: "0.72rem", letterSpacing: "0.06em", color: "var(--text-muted)", textTransform: "uppercase" }}>
          1, 2 or 3 hours · Built around you · Guided by the ClaudeOS methodology
        </p>
      </div>
    </section>
  );
}
