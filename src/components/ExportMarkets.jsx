import "./ExportMarkets.css";

function ExportMarkets() {
  return (
    <section className="markets">
      <div className="container">
        <h2
          className="section-title"
          data-aos="fade-up"
        >
          Our Export Markets
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          We proudly serve customers across multiple international markets by
          delivering premium-quality agricultural products with reliable export
          services.
        </p>

        <div className="market-grid">
          <div
            className="market-card"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="flag">🇦🇪</div>
            <h3>United Arab Emirates</h3>
          </div>

          <div
            className="market-card"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="flag">🇸🇦</div>
            <h3>Saudi Arabia</h3>
          </div>

          <div
            className="market-card"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="flag">🇩🇪</div>
            <h3>Germany</h3>
          </div>

          <div
            className="market-card"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="flag">🇮🇹</div>
            <h3>Italy</h3>
          </div>

          <div
            className="market-card"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="flag">🇺🇸</div>
            <h3>United States</h3>
          </div>

          <div
            className="market-card"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <div className="flag">🇲🇾</div>
            <h3>Malaysia</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExportMarkets;