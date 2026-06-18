import { BOOK_CTA, DURATION, PRICE, PRODUCT_NAME } from "@/lib/mentoring";

export default function MFinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2 className="anim">STOP GUESSING<br />WHERE TO START<br />WITH CLAUDE.</h2>
        <p className="sub anim" style={{ color: "var(--text-muted)", textAlign: "center", margin: "0 auto 20px" }}>
          One hour. One clear path forward. Cowork working, connectors mapped, focus locked in.
        </p>
        <div className="final-details anim">
          <div className="final-detail"><strong>Format</strong> 1:1, live</div>
          <div className="final-detail"><strong>Length</strong> {DURATION}</div>
          <div className="final-detail"><strong>Investment</strong> {PRICE}</div>
          <div className="final-detail"><strong>Call</strong> {PRODUCT_NAME}</div>
        </div>
        <a href="#investment" className="btn-white anim">{BOOK_CTA}</a>
      </div>
    </section>
  );
}
