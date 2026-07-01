"use client";

import { useState } from "react";

const faqs = [
  { q: "What happens on the call?", a: "We spend 50 focused minutes together. You'll leave with Cowork set up properly, a clean file structure, a clear strategy for where Claude fits your business, a blueprint for what to do next, connectors and skills mapped to your workflow, clear data boundaries, plus a session recording and a plan provided following the call." },
  { q: "I'm confused about Claude. Is that normal?", a: "Completely. Most people who book this call arrive unsure about whether they're using Claude properly, what to focus on, or where to start. That's exactly what the session is designed to fix." },
  { q: "How is this different from the cohort?", a: "The cohort teaches the full ClaudeOS system to a group over six weeks. This is just you and me, on your business, in 50 minutes. Many people start here to get set up and get clear, then join the cohort or go deeper once they have a blueprint." },
  { q: "What happens after the call?", a: "On the back of the call, we'll find the path that's best for you. That might mean more 1:1 time, the cohort, or simply running with what we set up. No pressure either way." },
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
