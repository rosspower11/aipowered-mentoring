import { BOOK_CTA, CHECKOUT_URL, TIERS } from "@/lib/mentoring";

const includes = [
  "Live 1:1 with Ross, screen to screen",
  "A flexible agenda, built around you",
  "Work done live in your real account",
  "Guided by the ClaudeOS methodology",
  "Full session recording to keep",
  "Clear next steps to carry the momentum",
];

export default function MPricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-head anim" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "var(--text-dark-grey)" }}>PRICING</div>
          <h2 className="dark">Pick your time.</h2>
          <p className="pricing-cohort-tag anim">Private 1:1 with Ross · book the length that fits the job</p>
        </div>

        <div className="m-tiers">
          {TIERS.map((t, i) => (
            <div key={t.id} className={`m-tier anim d${i + 1} ${t.featured ? "m-tier--featured" : ""}`}>
              {t.tag && <div className="m-tier-tag">{t.tag}</div>}
              <div className="m-tier-hours">{t.hours}</div>
              <div className="m-tier-price">{t.usd}</div>
              <div className="m-tier-gbp">≈ {t.gbp}</div>
              <p className="m-tier-blurb">{t.blurb}</p>
              <a href={CHECKOUT_URL} className={t.featured ? "btn-white m-tier-cta" : "btn-dark m-tier-cta"}>
                {BOOK_CTA}
              </a>
            </div>
          ))}
        </div>

        <div className="m-includes anim">
          <div className="m-includes-label">Every session includes</div>
          <ul className="m-includes-list">
            {includes.map((it) => (
              <li key={it}><span className="m-includes-tick" aria-hidden="true">✓</span>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
