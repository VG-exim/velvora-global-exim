import "./ExportMarkets.css";

function ExportMarkets() {
  const markets = [
    {
      flag: "🇦🇪",
      name: "United Arab Emirates",
      description:
        "Exploring opportunities to supply Indian agricultural products to buyers in the UAE.",
    },
    {
      flag: "🇸🇦",
      name: "Saudi Arabia",
      description:
        "Interested in building sourcing relationships with buyers across Saudi Arabia.",
    },
    {
      flag: "🇩🇪",
      name: "Germany",
      description:
        "Exploring possibilities for agricultural product sourcing in the German market.",
    },
    {
      flag: "🇮🇹",
      name: "Italy",
      description:
        "Open to discussions with buyers looking for Indian rice and spice products.",
    },
    {
      flag: "🇺🇸",
      name: "United States",
      description:
        "Developing opportunities to connect with international buyers in the United States.",
    },
    {
      flag: "🇲🇾",
      name: "Malaysia",
      description:
        "Exploring potential sourcing relationships with buyers in Malaysia.",
    },
  ];

  return (
    <main className="export-markets-page">
      <div className="export-markets-page-container">
        <div className="export-markets-page-header">
          <p className="export-markets-page-eyebrow">
            GLOBAL MARKET FOCUS
          </p>

          <h1>
            Exploring Opportunities
            <span> Beyond India</span>
          </h1>

          <p>
            Velvora Global Exim is focused on building meaningful
            relationships with international buyers and exploring
            opportunities to supply Indian agricultural products across
            selected global markets.
          </p>
        </div>

        <div className="export-markets-page-grid">
          {markets.map((market) => (
            <div className="export-markets-page-card" key={market.name}>
              <div className="export-markets-page-flag">
                {market.flag}
              </div>

              <h2>{market.name}</h2>

              <span>TARGET MARKET</span>

              <p>{market.description}</p>
            </div>
          ))}
        </div>

        <div className="export-markets-page-footer">
          <p>
            Interested in sourcing agricultural products from India?
          </p>

          <a href="/contact">
            Start a Conversation →
          </a>
        </div>
      </div>
    </main>
  );
}

export default ExportMarkets;