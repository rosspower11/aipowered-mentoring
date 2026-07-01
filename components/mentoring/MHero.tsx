import { BOOK_CTA, DURATION, PRICE, PRODUCT_NAME, TAGLINE } from "@/lib/mentoring";

export default function MHero() {
  return (
    <section className="hero hero-center">
      <div className="hero-inner">
        <div className="hero-cohort-badge anim">Private 1:1 · with Ross</div>
        <h1 className="anim">
          <strong>Claude Setup</strong><br />&amp; Strategy.
        </h1>
        <p className="hero-sub anim d1">
          {TAGLINE} You go in a little confused about Claude, unsure where to start or whether you&apos;re using it properly. You come out with a strong setup, a clear strategy, and a blueprint to get the best out of it.
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
