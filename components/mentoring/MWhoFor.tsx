export default function MWhoFor() {
  const cards = [
    { title: "YOU'RE CONFUSED ABOUT CLAUDE", desc: "You've got an account but you're not sure you're using it properly, what to focus on, or whether you're missing something obvious." },
    { title: "YOU WANT IT SET UP RIGHT", desc: "Cowork, file structure, connectors, data safety. You'd rather get it done properly in one session than keep trial-and-erroring alone." },
    { title: "YOU NEED A STRATEGY, NOT MORE TIPS", desc: "You don't need another list of prompts. You need a clear view of where Claude fits your business and a blueprint for what to do next." },
    { title: "YOUR TIME IS WORTH MORE THAN THE FEE", desc: "You'd rather spend 50 focused minutes getting it right than another month feeling unsure about whether AI is actually working for you." },
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
