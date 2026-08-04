import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          What Our Clients Say
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Building long-term relationships through quality products and reliable
          export services.
        </p>

        <div className="testimonial-grid">

          <div
            className="testimonial-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <p>
              "Excellent product quality and timely delivery. Velvora Global
              Exim has become our trusted export partner."
            </p>

            <h4>Ahmed Al Mansoori</h4>
            <span>UAE Importer</span>
          </div>

          <div
            className="testimonial-card"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <p>
              "Professional communication and outstanding service. Highly
              recommended for international trade."
            </p>

            <h4>Michael Schneider</h4>
            <span>Germany Buyer</span>
          </div>

          <div
            className="testimonial-card"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <p>
              "Premium agricultural products with consistent quality. Looking
              forward to many more shipments."
            </p>

            <h4>Faisal Al Harbi</h4>
            <span>Saudi Arabia Distributor</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;