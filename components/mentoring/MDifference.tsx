const cards = [
  {
    title: "It's your work, not the room's",
    desc: "No splitting attention with 20 other people. Every minute is spent on your business, your files, your goals, your questions.",
  },
  {
    title: "Your pace, your priorities",
    desc: "No syllabus to keep up with and nothing to sit through. We start exactly where you are and go straight to what matters most to you.",
  },
  {
    title: "Direct access to Ross",
    desc: "The full methodology, applied one to one, straight to your situation. You're not getting a recording, you're getting me in the room.",
  },
  {
    title: "Move weeks faster",
    desc: "The thing you'd circle for weeks alone, we solve together in an hour. You leave with it working, not with a to-do list.",
  },
];

export default function MDifference() {
  return (
    <section className="painpoints" id="difference">
      <div className="container">
        <div className="painpoints-head anim">
          <div className="eyebrow" style={{ color: "var(--text-dark-grey)" }}>THE DIFFERENCE</div>
          <h2 className="dark">Group teaches the system. A strategy call finds your path.</h2>
          <p className="painpoints-sub">
            The cohort is brilliant for learning ClaudeOS alongside other founders. But before you dive in, it helps to know exactly where Claude fits in your business, with Cowork set up and the right connectors mapped.
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
