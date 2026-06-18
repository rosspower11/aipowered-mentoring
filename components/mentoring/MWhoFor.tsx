export default function MWhoFor() {
  const cards = [
    { title: "YOU'RE NOT SURE WHERE TO START WITH CLAUDE", desc: "You've got an account but you're not clear on what to focus on first. You want someone who's done this before to point you at the highest-value move." },
    { title: "YOU WANT COWORK SET UP PROPERLY", desc: "Connectors, file structure, data safety. You'd rather get it right in an hour with an expert than trial-and-error it alone for weeks." },
    { title: "YOU'RE IN THE COHORT AND WANT TO GO DEEPER", desc: "You love the group sessions, but you want an hour on your specific business, your tools, and your edge cases." },
    { title: "YOUR TIME IS WORTH MORE THAN THE FEE", desc: "You'd rather pay for one focused hour of clarity than spend another month guessing your way through Claude." },
  ];

  return (
    <section className="who-section" id="who">
      <div className="container">
        <div className="eyebrow anim" style={{ color: "var(--text-dark-grey)" }}>IS THIS FOR YOU?</div>
        <h2 className="dark anim">THIS IS FOR YOU IF...</h2>
        <div className="who-grid">
          {cards.map((c, i) => (
            <div key={i} className={`who-card anim ${i % 2 === 1 ? "d1" : ""}`}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
