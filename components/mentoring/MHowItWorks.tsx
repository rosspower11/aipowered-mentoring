import { DURATION } from "@/lib/mentoring";

const steps = [
  {
    n: "01",
    title: "Book your call",
    desc: "Pick a time and complete a short intake. Tell me about your business and where you are with Claude today.",
    meta: "Takes 2 minutes",
  },
  {
    n: "02",
    title: "We get Claude working for you",
    desc: "50 minutes, just the two of us. We set up Cowork properly, organise your files, map your strategy, and build the blueprint for what comes next.",
    meta: `${DURATION} · live`,
  },
  {
    n: "03",
    title: "You leave clear, not confused",
    desc: "Strong setup in place, a strategy that fits your business, and a plan to follow. Plus a recording and written plan after the call.",
    meta: "Recording included",
  },
];

export default function MHowItWorks() {
  return (
    <section className="apply" id="how">
      <div className="container">
        <div className="apply-head anim">
          <div className="eyebrow eyebrow-light">HOW IT WORKS</div>
          <h2 className="white">How your call runs.</h2>
        </div>
        <div className="apply-list">
          {steps.map((s, i) => (
            <div key={s.n} className={`apply-item anim d${(i % 5) + 1}`}>
              <div className="apply-item-num">{s.n}</div>
              <div className="apply-item-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="apply-item-meta">{s.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
