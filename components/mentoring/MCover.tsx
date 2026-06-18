import { FOLLOW_UP, OUTCOMES } from "@/lib/mentoring";
import { OutcomeIcon } from "@/components/mentoring/MOutcomeIcon";

export default function MCover() {
  return (
    <section className="offer" id="cover">
      <div className="container">
        <div className="eyebrow eyebrow-light anim" style={{ textAlign: "center" }}>WHAT YOU GET</div>
        <h2 className="white anim" style={{ textAlign: "center" }}>In this one hour, you will walk away with:</h2>

        <div className="m-outcomes anim" style={{ marginTop: 48 }}>
          {OUTCOMES.map((item, i) => (
            <div key={item.text} className={`m-outcome anim d${(i % 4) + 1}`}>
              <div className="m-outcome-top">
                <div className="m-outcome-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="m-outcome-icon">
                  <OutcomeIcon id={item.icon} />
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <p className="m-followup anim">{FOLLOW_UP}</p>
      </div>
    </section>
  );
}
