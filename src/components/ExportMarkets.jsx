import "./ExportMarkets.css";

function ExportMarkets() {
  const markets = [
    {
      flag: "🇦🇪",
      name: "United Arab Emirates",
    },
    {
      flag: "🇸🇦",
      name: "Saudi Arabia",
    },
    {
      flag: "🇩🇪",
      name: "Germany",
    },
    {
      flag: "🇮🇹",
      name: "Italy",
    },
    {
      flag: "🇺🇸",
      name: "United States",
    },
    {
      flag: "🇲🇾",
      name: "Malaysia",
    },
  ];

  return (
    <section className="markets">

      <div className="markets-container">

        <div className="markets-header" data-aos="fade-up">

          <p className="markets-eyebrow">
            GLOBAL MARKET FOCUS
          </p>

          <h2>
            Building Opportunities
            <span> Beyond India</span>
          </h2>

          <p>
            As a growing export business, we are exploring opportunities
            with international buyers and developing relationships across
            selected global markets.
          </p>

        </div>


        <div className="market-grid">

          {markets.map((market, index) => (

            <div
              className="market-card"
              key={market.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="flag">
                {market.flag}
              </div>

              <h3>{market.name}</h3>

              <span className="market-label">
                TARGET MARKET
              </span>

            </div>

          ))}

        </div>


        <div
          className="markets-note"
          data-aos="fade-up"
        >
          <p>
            Interested in sourcing agricultural products from India?
          </p>

          <a href="/contact">
            Start a Conversation →
          </a>
        </div>

      </div>

    </section>
  );
}

export default ExportMarkets;