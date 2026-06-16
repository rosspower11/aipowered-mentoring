"use client";

import { useState } from "react";

const faqs = [
  { q: "What can we actually cover in a session?", a: "Anything Claude or AI related that matters to your business: getting set up properly, connecting your tools with Cowork, building real documents and automations, designing systems, or just strategy on where AI fits. You tell me the goal in the intake and we go straight at it." },
  { q: "How is this different from the cohort?", a: "The cohort teaches the full system to a group, week by week. This is just you and me, on your business, at your pace. Many people do both: the cohort for the system, 1:1 sessions to go deeper and faster on their specific situation." },
  { q: "Do I need to be technical?", a: "No. I'm not a developer either. I direct Claude and I'll teach you to do the same. If you can describe what you want, we can build it." },
  { q: "What do I need before the session?", a: "A paid Claude plan and the real work you want to tackle. After you book, I'll send a short intake so I arrive already knowing your goals and we don't waste a minute." },
  { q: "Which length should I choose?", a: "One hour is great for a single focused problem. Two hours lets us set things up properly and build more than one thing. Three hours is a proper working session for the bigger, end-to-end stuff. Not sure? Start with one and add more later." },
  { q: "Can I buy more than one session?", a: "Absolutely. Plenty of people book a few across a month to work through different parts of their business. You can rebook any time." },
  { q: "Is it really one to one with you, Ross?", a: "Yes. It's me, live, the whole time. No team, no recording stand-in. That's the entire point." },
];

export default function MFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq">
      <div className="container">
        <div className="eyebrow eyebrow-light anim">FREQUENTLY ASKED</div>
        <h2 className="white anim">QUESTIONS BEFORE YOU BOOK</h2>
        <div className="faq-grid anim">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
              <div className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>{faq.q}</div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
