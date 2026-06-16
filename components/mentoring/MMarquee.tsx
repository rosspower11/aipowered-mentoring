const items = [
  "YOUR BUSINESS, MY FULL FOCUS",
  "PRIVATE 1:1 WITH ROSS",
  "CONFIDENCE COMES FROM DOING",
  "YOUR BUSINESS, MY FULL FOCUS",
  "PRIVATE 1:1 WITH ROSS",
  "CONFIDENCE COMES FROM DOING",
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
