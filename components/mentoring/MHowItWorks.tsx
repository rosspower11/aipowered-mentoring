const steps = [
  {
    n: "01",
    title: "Book your time",
    desc: "Pick 1, 2 or 3 hours and check out. You&apos;ll get a short form to tell me about your business and exactly what you want to walk away with.",
    meta: "Takes 2 minutes",
  },
  {
    n: "02",
    title: "We meet, screen to screen",
    desc: "Just the two of us, live. A flexible agenda shaped around you and guided by the methodology, working in your real account on your real work.",
    meta: "1, 2 or 3 hours",
  },
  {
    n: "03",
    title: "You leave with it done",
    desc: "Real output you can use straight away, the full recording, and clear next steps so the momentum carries on after we finish.",
    meta: "Yours to keep",
  },
];

export default function MHowItWorks() {
  return (
    <section className="apply" id="how">
      <div className="container">
        <div className="apply-head anim">
          <div className="eyebrow eyebrow-light">HOW IT WORKS</div>
          <h2 className="white">How your session runs.</h2>
        </div>
        <div className="apply-list">
          {steps.map((s, i) => (
            <div key={s.n} className={`apply-item anim d${(i % 5) + 1}`}>
              <div className="apply-item-num">{s.n}</div>
              <div className="apply-item-body">
                <h3>{s.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: s.desc }} />
                <div className="apply-item-meta">{s.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
