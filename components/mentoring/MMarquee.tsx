const items = [
  "CLAUDE STRATEGY CALL",
  "ONE HOUR · ONE CLEAR PATH",
  "CLAUDE STRATEGY CALL",
  "ONE HOUR · ONE CLEAR PATH",
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
