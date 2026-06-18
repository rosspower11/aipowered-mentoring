import {
  BOOK_CTA,
  CHECKOUT_URL,
  DURATION,
  FOLLOW_UP,
  OUTCOMES,
  PRICE_GBP,
  PRICE_USD,
  PRODUCT_NAME,
  SESSION_INCLUDES,
} from "@/lib/mentoring";

export default function MPricing() {
  return (
    <section className="pricing" id="investment">
      <div className="container">
        <div className="pricing-head anim" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "var(--text-dark-grey)" }}>INVESTMENT</div>
          <h2 className="dark">Your investment.</h2>
          <p className="pricing-cohort-tag anim">{DURATION} · {PRODUCT_NAME} · private with Ross</p>
        </div>

        <div className="pricing-card anim d1">
          <div className="pricing-card-grid">
            <div>
              <div className="m-includes-label" style={{ textAlign: "left", marginBottom: 16 }}>
                In this one hour you will walk away with
              </div>
              <ul className="pricing-checklist">
                {OUTCOMES.map((item) => (
                  <li key={item}>
                    <span className="pricing-tick" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="pricing-checklist" style={{ marginTop: 28 }}>
                {SESSION_INCLUDES.map((item) => (
                  <li key={item}>
                    <span className="pricing-tick" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="m-followup m-followup--light">{FOLLOW_UP}</p>
            </div>

            <div className="pricing-side">
              <div className="pricing-total">
                <div className="pricing-total-label">{PRODUCT_NAME}</div>
                <div className="pricing-total-amount">{PRICE_USD}</div>
                <div className="pricing-total-gbp">≈ {PRICE_GBP}</div>
              </div>

              <div className="pricing-perday">
                <div className="pricing-perday-amount">1</div>
                <div className="pricing-perday-label">hour · private 1:1</div>
              </div>

              <a href={CHECKOUT_URL} className="btn-dark pricing-cta">{BOOK_CTA}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
