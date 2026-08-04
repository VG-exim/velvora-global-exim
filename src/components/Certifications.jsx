import "./Certifications.css";

function Certifications() {
  return (
    <section className="certifications">
      <div className="container">

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          Certifications & Compliance
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Velvora Global Exim is committed to maintaining international quality
          standards and regulatory compliance for global exports.
        </p>

        <div className="certificate-grid">

          <div
            className="certificate-card"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <h3>IEC</h3>
            <p>Import Export Code</p>
            <span>Active</span>
          </div>

          <div
            className="certificate-card"
            data-aos="flip-up"
            data-aos-delay="250"
          >
            <h3>GST</h3>
            <p>Goods & Services Tax</p>
            <span>Registered</span>
          </div>

          <div
            className="certificate-card"
            data-aos="flip-up"
            data-aos-delay="400"
          >
            <h3>FSSAI</h3>
            <p>Food Safety License</p>
            <span>Coming Soon</span>
          </div>

          <div
            className="certificate-card"
            data-aos="flip-up"
            data-aos-delay="550"
          >
            <h3>APEDA</h3>
            <p>Agricultural Export Registration</p>
            <span>Coming Soon</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;