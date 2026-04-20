"use client";

import { useEffect, useState } from "react";

const questions = [
  "What narratives are forming?",
  "Is something going viral?",
  "Is this a reputational risk?",
  "Who is driving the conversation?",
  "Can it escalate into a national issue?",
];

export default function PlatformAnswers() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setActive((prev) => (prev + 1) % questions.length);
    }, 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="platform-magic">
      <div className="container platform-inner">

        {/* LEFT SIDE */}
        <div className="platform-left">
          <p className="platform-tag">WHAT THE PLATFORM ANSWERS</p>

          <div className="questions">
            {questions.map((q, i) => (
              <div
                key={i}
                className={`question ${active === i ? "active" : ""}`}
              >
                <span className="highlight" />
                <p>{q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="platform-right">

          <div className="floating-card card-1">
            <span>NARRATIVES</span>
            <h3>Real clusters</h3>
          </div>

          <div className="floating-card card-2">
            <span>SIGNALS</span>
            <h3>Live feed</h3>
          </div>

          <div className="floating-card card-3">
            <span>RISK</span>
            <h3>Crisis watch</h3>
          </div>

          <div className="floating-card card-4">
            <span>SIMULATION</span>
            <h3>KedarSetu</h3>
          </div>

        </div>

      </div>
    </section>
  );
}