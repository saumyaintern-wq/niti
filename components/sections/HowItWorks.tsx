"use client";

export default function HowItWorks() {
  return (
    <section className="how">

      <div className="container">

        <div className="how-wrapper">

          {/* LABEL */}
          <p className="how-label">HOW IT WORKS</p>

          {/* GRID */}
          <div className="how-grid">

            {/* CARD 1 */}
            <div className="how-card">
              <h3>Data</h3>
              <p>
                Tweets, news, replies, and narrative-relevant coverage are
                ingested into a unified pipeline.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="how-card">
              <h3>AI</h3>
              <p>
                Narratives are clustered, scored, and linked to risk,
                sentiment, and likely actors.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="how-card">
              <h3>Insights</h3>
              <p>
                Operators get entity-level dashboards, trending narratives,
                and influence signals.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="how-card">
              <h3>Prediction</h3>
              <p>
                High-risk narratives can be escalated into scenario simulations
                for response planning.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}