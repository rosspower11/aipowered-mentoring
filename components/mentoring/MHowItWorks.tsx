const steps = [
  {
    n: "01",
    title: "Book your strategy call",
    desc: "Check out and complete a short intake. Tell me about your business and where you are with Claude today.",
    meta: "Takes 2 minutes",
  },
  {
    n: "02",
    title: "We meet, screen to screen",
    desc: "One focused hour with just the two of us. We get Cowork working, map your integrations, skills and agents, set your data boundaries, and you leave with a recording plus a 30-day action plan.",
    meta: "1 hour · live",
  },
  {
    n: "03",
    title: "You leave with a clear path",
    desc: "You walk away knowing what to focus on, with Cowork set up and the right connectors in place. On the back of the call, we find the path that's best for you.",
    meta: "Recording included",
  },
];

export default function MHowItWorks() {
  return (
    <section className="apply" id="how">
      <div className="container">
        <div className="apply-head anim">
          <div className="eyebrow eyebrow-light">HOW IT WORKS</div>
          <h2 className="white">How your strategy call runs.</h2>
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
