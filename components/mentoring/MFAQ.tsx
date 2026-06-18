"use client";

import { useState } from "react";

const faqs = [
  { q: "What happens on the strategy call?", a: "We spend one focused hour together. You'll leave with Cowork set up, a clean file structure, connectors and MCPs ranked for your business, skills and agents mapped to your week, Projects and Memory configured, clear data boundaries, plus a recording and a written 30-day action plan." },
  { q: "How is this different from the cohort?", a: "The cohort teaches the full ClaudeOS system to a group over six weeks. The strategy call is just you and me, on your business, in one hour. Many people start here to get clear, then join the cohort or book deeper 1:1 time once they know the path." },
  { q: "What happens after the call?", a: "On the back of the strategy call, we'll find the path that's best for you. That might mean more 1:1 sessions, the cohort, or simply running with what we set up. No pressure either way." },
  { q: "Do I need to be technical?", a: "No. I'm not a developer either. If you can describe your business and what you want Claude to do, we can get you set up." },
  { q: "What do I need before the call?", a: "A paid Claude plan and access to the tools you want connected. After you book, I'll send a short intake so we hit the ground running." },
  { q: "Is it really one to one with you, Ross?", a: "Yes. It's me, live, the whole time. No team, no stand-in. That's the entire point." },
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
