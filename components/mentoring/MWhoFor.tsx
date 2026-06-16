export default function MWhoFor() {
  const cards = [
    { title: "YOU'RE IN THE COHORT AND WANT TO GO DEEPER", desc: "You love the group sessions, but you want time on your specific business, your edge cases, the things that don't fit a group format." },
    { title: "YOU HAVE A SPECIFIC PROJECT TO GET DONE", desc: "There's a real thing you need built or set up, and you'd rather do it once, properly, with an expert beside you than wing it alone." },
    { title: "YOU LEARN BEST ONE TO ONE", desc: "Group settings aren't your thing. You want to ask anything, at any level, without holding the room up, and get answers tailored to you." },
    { title: "YOUR TIME IS WORTH MORE THAN THE FEE", desc: "You'd rather pay to compress weeks of figuring it out into a focused session and get back to running your business." },
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
