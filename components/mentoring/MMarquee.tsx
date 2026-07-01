const items = [
  "CLAUDE SETUP & STRATEGY",
  "GETTING AI RIGHT FOR YOU",
  "CLAUDE SETUP & STRATEGY",
  "GETTING AI RIGHT FOR YOU",
];

export default function MMarquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((text, i) => (
          <span key={i} className="marquee-item">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
