import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why-choose">

      <div className="why-choose-header" data-aos="fade-up">
        <p className="section-eyebrow">
          WHY VELVORA GLOBAL EXIM
        </p>

        <h2>
          A Professional Approach to
          <span> Agricultural Trade</span>
        </h2>

        <p className="section-intro">
          We focus on quality-focused sourcing, clear communication,
          and dependable service to build lasting business relationships.
        </p>
      </div>

      <div className="features">

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="feature-number">01</div>

          <h3>Quality-Focused Sourcing</h3>

          <p>
            We focus on carefully selecting agricultural products
            suitable for our buyers' requirements and intended markets.
          </p>
        </div>


        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="feature-number">02</div>

          <h3>Reliable Communication</h3>

          <p>
            Clear communication and attention to buyer requirements
            help create a smooth and professional trading experience.
          </p>
        </div>


        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="feature-number">03</div>

          <h3>Export-Ready Service</h3>

          <p>
            From product discussions to packing and shipment coordination,
            we aim to make every stage of the export process straightforward.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;