"use client";

export default function ProductPreview() {
  return (
    <section className="product-preview">

      <div className="container">

        {/* HEADER */}
        <div className="preview-header">
          <div>
            <p className="preview-label">SCREENS</p>
            <h2 className="preview-title">Product preview</h2>
          </div>

          <p className="preview-desc">
            Clean operator-first surfaces for monitoring entities, drilling into narratives, and running scenario analysis.
          </p>
        </div>

        {/* GRID */}
        <div className="preview-grid">

          {/* CARD 1 */}
          <div className="preview-card">
            <div className="preview-ui">

              <div className="ui-dots">
                <span></span><span></span><span></span>
              </div>

              <div className="ui-bar"></div>

              <div className="ui-row">
                <div className="ui-box"></div>
                <div className="ui-box"></div>
              </div>

              <div className="ui-large"></div>

            </div>

            <p className="preview-caption">Dashboard preview</p>
          </div>

          {/* CARD 2 */}
          <div className="preview-card">
            <div className="preview-ui">

              <div className="ui-dots">
                <span></span><span></span><span></span>
              </div>

              <div className="ui-bar"></div>

              <div className="ui-row">
                <div className="ui-box"></div>
                <div className="ui-box"></div>
              </div>

              <div className="ui-large"></div>

            </div>

            <p className="preview-caption">Entity intelligence page</p>
          </div>

          {/* CARD 3 */}
          <div className="preview-card">
            <div className="preview-ui">

              <div className="ui-dots">
                <span></span><span></span><span></span>
              </div>

              <div className="ui-bar"></div>

              <div className="ui-row">
                <div className="ui-box"></div>
                <div className="ui-box"></div>
              </div>

              <div className="ui-large"></div>

            </div>

            <p className="preview-caption">Narrative drilldown modal</p>
          </div>

        </div>

      </div>

    </section>
  );
}