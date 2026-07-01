import {
  DURATION,
  FOLLOW_UP,
  OUTCOMES,
  PRICE,
  PRODUCT_NAME,
} from "@/lib/mentoring";
import MBookingEmbed from "@/components/mentoring/MBookingEmbed";

export default function MPricing() {
  return (
    <section className="pricing" id="investment">
      <div className="container">
        <div className="pricing-head anim" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "var(--text-dark-grey)" }}>INVESTMENT</div>
          <h2 className="dark">Your investment.</h2>
          <p className="pricing-cohort-tag anim">{DURATION} · {PRODUCT_NAME} · private with Ross</p>
        </div>

        <div className="m-invest-card anim d1">
          <div className="m-invest-header">
            <div>
              <div className="m-invest-label">{PRODUCT_NAME}</div>
              <div className="m-invest-meta">{DURATION} · private 1:1 with Ross</div>
            </div>
            <div className="m-invest-price">{PRICE}</div>
          </div>

          <div className="m-invest-body">
            <div className="m-includes-label">In {DURATION.toLowerCase()} you will walk away with</div>
            <ul className="pricing-checklist m-invest-checklist">
              {OUTCOMES.map((item) => (
                <li key={item.text}>
                  <span className="pricing-tick" aria-hidden="true">✓</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="m-followup m-followup--light">{FOLLOW_UP}</p>
          </div>
        </div>

        <MBookingEmbed />
      </div>
    </section>
  );
}
