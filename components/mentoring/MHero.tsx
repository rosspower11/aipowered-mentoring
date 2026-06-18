import { BOOK_CTA, DURATION, PRICE, PRODUCT_NAME } from "@/lib/mentoring";

export default function MHero() {
  return (
    <section className="hero hero-center">
      <div className="hero-inner">
        <div className="hero-cohort-badge anim">Private 1:1 · Strategy Call</div>
        <h1 className="anim">
          Get clear on <strong>Claude</strong>.<br />One hour with Ross.
        </h1>
        <p className="hero-sub anim d1">
          Not another generic AI chat. A focused strategy call to figure out where Claude actually moves the needle in your business, get Cowork set up properly, and leave knowing exactly what to do next.
        </p>
        <div className="anim d2">
          <a href="#investment" className="btn-white">{BOOK_CTA}</a>
        </div>
        <p className="anim d3" style={{ marginTop: 18, fontFamily: "var(--mono)", fontSize: "0.72rem", letterSpacing: "0.06em", color: "var(--text-muted)", textTransform: "uppercase" }}>
          {DURATION} · {PRODUCT_NAME} · {PRICE}
        </p>
      </div>
    </section>
  );
}
