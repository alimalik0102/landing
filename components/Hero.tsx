export default function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero-copy">
        <span className="pill">
          <span className="dot" />
          Conversion rate optimization agency
        </span>
        <h1>
          Same traffic.
          <br />
          <span className="highlight">More revenue.</span>
        </h1>
        <p className="lead">
          We find what&apos;s stopping visitors from buying, then prove the fix with A/B tests. You keep the
          wins — and the data behind every one.
        </p>
        <div className="btn-row">
          <a href="#audit" className="btn btn-dark">
            Book a free CRO audit
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#results" className="btn btn-outline">See case studies</a>
        </div>
        <p className="fine">No retainer to start · Audit delivered in [X] days</p>
      </div>

      <div className="hero-visual" aria-label="Example A/B test result">
        <div className="ab-card">
          <div className="ab-head">
            <strong>Test #[ID] · Checkout page</strong>
            <span className="badge">Winner found</span>
          </div>
          <div className="ab-grid">
            <div className="variant">
              <span className="variant-label">Control (A)</span>
              <div className="bar" style={{ width: "80%" }} />
              <div className="bar" style={{ width: "60%" }} />
              <div className="bar-btn" />
              <span className="rate">[X.X]%</span>
              <span className="variant-label">conversion rate</span>
            </div>
            <div className="variant win">
              <span className="variant-label">Variant (B)</span>
              <div className="bar" style={{ width: "70%" }} />
              <div className="bar" style={{ width: "45%" }} />
              <div className="bar-btn" />
              <span className="rate">[Y.Y]%</span>
              <span className="variant-label" style={{ color: "var(--on-dark-faint)" }}>conversion rate</span>
            </div>
          </div>
          <div className="ab-foot">
            <span>Lift <strong className="lift">+[Z]%</strong></span>
            <span>Confidence <strong>[95]%</strong></span>
            <span>Sessions <strong>[N]</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
