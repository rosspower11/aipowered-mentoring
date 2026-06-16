const groups = [
  {
    n: "01",
    title: "Get set up properly",
    items: ["Projects, Memory, Skills and your voice baked in, so Claude actually works the way your business does."],
  },
  {
    n: "02",
    title: "Connect your tools (Cowork)",
    items: ["Inbox, calendar, Drive, Notion, your CRM. Get Claude working across your real stack, safely."],
  },
  {
    n: "03",
    title: "Build real things",
    items: ["A deck, a proposal, a spreadsheet model, a landing page, an automation. We build it live, on your work."],
  },
  {
    n: "04",
    title: "Design your systems",
    items: ["Agents, scheduled tasks and workflows that run the repetitive parts of your week without you."],
  },
  {
    n: "05",
    title: "Strategy & direction",
    items: ["Where AI actually moves the needle in your specific business, so you stop guessing what to do next."],
  },
  {
    n: "06",
    title: "Unstick one big thing",
    items: ["Bring the project you've been circling for weeks. We tackle it together and you leave with it done."],
  },
];

const levels = ["Chat", "Customise", "Create", "Connect", "Code", "Command"];

export default function MCover() {
  return (
    <section className="offer" id="cover">
      <div className="container">
        <div className="eyebrow eyebrow-light anim" style={{ textAlign: "center" }}>WHAT WE COVER</div>
        <h2 className="white anim" style={{ textAlign: "center" }}>Bring whatever you&apos;re stuck on.</h2>
        <p className="sub sub-grey anim" style={{ maxWidth: 720, margin: "0 auto 28px", textAlign: "center" }}>
          The session is flexible. We shape it around what you most need. It&apos;s not freeform, though: every minute is guided by the Claude methodology I&apos;ve developed, the six levels of ClaudeOS, applied straight to your business.
        </p>
        <div className="m-levels anim" style={{ marginBottom: 56 }}>
          {levels.map((l) => (
            <span key={l} className="m-level">{l}</span>
          ))}
        </div>
        <div className="offer-groups">
          {groups.map((g) => (
            <div key={g.n} className="offer-group anim">
              <div className="offer-group-head">
                <div className="offer-group-num">{g.n}</div>
                <div className="offer-group-headtext">
                  <h3 className="offer-group-title">{g.title}</h3>
                </div>
              </div>
              <ul className="offer-group-items">
                {g.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
