import { BOOK_CTA, CHECKOUT_URL } from "@/lib/mentoring";

export default function MFinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2 className="anim">THE FASTEST WAY<br />TO GET UNSTUCK<br />IS TO STOP DOING<br />IT ALONE.</h2>
        <p className="sub anim" style={{ color: "var(--text-muted)", textAlign: "center", margin: "0 auto 20px" }}>
          One to one with Ross. Your business, your pace, my full focus. Confidence comes from doing.
        </p>
        <div className="final-details anim">
          <div className="final-detail"><strong>Format</strong> 1:1, live</div>
          <div className="final-detail"><strong>Length</strong> 1, 2 or 3 hrs</div>
          <div className="final-detail"><strong>From</strong> $600</div>
          <div className="final-detail"><strong>Built</strong> around you</div>
        </div>
        <a href={CHECKOUT_URL} className="btn-white anim">{BOOK_CTA}</a>
      </div>
    </section>
  );
}
