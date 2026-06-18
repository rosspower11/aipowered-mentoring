import { FOLLOW_UP, OUTCOMES } from "@/lib/mentoring";

export default function MCover() {
  return (
    <section className="offer" id="cover">
      <div className="container">
        <div className="eyebrow eyebrow-light anim" style={{ textAlign: "center" }}>WHAT YOU GET</div>
        <h2 className="white anim" style={{ textAlign: "center" }}>In this one hour, you will walk away with:</h2>

        <div className="m-outcomes anim" style={{ marginTop: 48 }}>
          {OUTCOMES.map((item, i) => (
            <div key={item} className={`m-outcome anim d${(i % 3) + 1}`}>
              <div className="m-outcome-num">{String(i + 1).padStart(2, "0")}</div>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <p className="m-followup anim">{FOLLOW_UP}</p>
      </div>
    </section>
  );
}
