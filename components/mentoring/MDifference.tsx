const cards = [
  {
    title: "Go in unsure. Come out with a plan.",
    desc: "Most people arrive a bit confused about Claude, not sure what to focus on or whether they're doing it right. That's exactly what this call is for.",
  },
  {
    title: "Setup done properly, not guesswork",
    desc: "We get Cowork working, your files organised, and your tools connected safely. Real setup on your business, not a generic walkthrough.",
  },
  {
    title: "Strategy built for your business",
    desc: "Not generic AI advice. A clear view of where Claude actually moves the needle for you, and what to ignore.",
  },
  {
    title: "A blueprint you can follow",
    desc: "You leave with a strategy and a plan for what to do next, so you're not back to guessing the moment the call ends.",
  },
];

export default function MDifference() {
  return (
    <section className="painpoints" id="difference">
      <div className="container">
        <div className="painpoints-head anim">
          <div className="eyebrow" style={{ color: "var(--text-dark-grey)" }}>THE PROMISE</div>
          <h2 className="dark">Confused going in. Clear going out.</h2>
          <p className="painpoints-sub">
            This isn&apos;t a lecture on AI. It&apos;s 50 minutes focused entirely on getting Claude working properly for you and your business, with a setup, strategy and blueprint you can actually use.
          </p>
        </div>

        <div className="usecase-grid">
          {cards.map((c, i) => (
            <div key={c.title} className={`usecase-card anim d${(i % 4) + 1}`}>
              <div className="usecase-card-num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
