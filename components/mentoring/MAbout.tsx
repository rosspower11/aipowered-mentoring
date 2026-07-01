const CDN = "https://aipowered-assets.com";

export default function MAbout() {
  return (
    <section className="about" id="about-section">
      <div className="about-layout">
        <div className="about-photo-col anim">
          <div className="about-photo" style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={`${CDN}/ross-headshots/${encodeURIComponent("ross promise photo.png")}`}
              alt="Ross Power"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="about-role">AI Founder &amp; Educator</div>
        </div>
        <div className="about-text anim d1">
          <div className="eyebrow eyebrow-light">ABOUT ME</div>
          <h2 className="white" style={{ marginTop: "8px" }}>Meet Ross.</h2>
          <p>Years before any of this started, I worked at Accenture, one of the largest tech consulting companies in the world, training in design thinking and workshop facilitation.</p>
          <p>Across the short time I was there I ran well over 100 workshops and presented to more than 1,000 individuals along the way. My &ldquo;one thing&rdquo; through all of it was making tech and business simple and accessible to people, which is something I&apos;ve always loved doing and always wanted to turn into some kind of business of my own.</p>
          <p>I moved into startups (yes, I was a full techbro), leading product and engineering teams in blockchain, facilitating design sprints for C-suite executives, and most recently as Head of Product at a NYSE-listed education company.</p>
          <p>When we work one to one, you get all of that pointed straight at your business. Most people arrive unsure about Claude. They leave with a setup that works, a strategy that fits, and a blueprint to get the best out of it.</p>
        </div>
      </div>
    </section>
  );
}
