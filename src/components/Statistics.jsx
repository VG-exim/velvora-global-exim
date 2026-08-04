import "./Statistics.css";

function Statistics() {
  return (
    <section className="statistics">
      <div className="stats-container">
        <div
          className="stat-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2>25+</h2>
          <p>Countries Served</p>
        </div>

        <div
          className="stat-card"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <h2>500+</h2>
          <p>Successful Shipments</p>
        </div>

        <div
          className="stat-card"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2>100%</h2>
          <p>Premium Quality</p>
        </div>

        <div
          className="stat-card"
          data-aos="fade-up"
          data-aos-delay="550"
        >
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;