import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why-choose">
      <h2 data-aos="fade-up">Why Choose Velvora Global Exim?</h2>

      <div className="features">
        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3>Premium Quality</h3>
          <p>
            We export carefully selected agricultural products that meet
            international quality standards.
          </p>
        </div>

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <h3>Trusted Worldwide</h3>
          <p>
            Building long-term partnerships through transparency, reliability,
            and timely delivery.
          </p>
        </div>

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3>Global Reach</h3>
          <p>
            Connecting Indian farmers and suppliers with buyers across the
            globe.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;