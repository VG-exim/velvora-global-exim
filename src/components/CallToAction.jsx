import "./CallToAction.css";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="cta">

      <div
        className="cta-content"
        data-aos="fade-up"
      >

        <p className="cta-eyebrow">
          LET'S CONNECT
        </p>

        <h2>
          Looking for Agricultural
          <span> Products from India?</span>
        </h2>

        <p
          className="cta-description"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Tell us what you are looking for. We would be happy to discuss
          your product, packing and sourcing requirements.
        </p>

        <div
          className="cta-buttons"
          data-aos="fade-up"
          data-aos-delay="300"
        >

          <Link
            to="/contact"
            className="btn-primary"
          >
            Send an Inquiry
          </Link>

          <Link
            to="/contact"
            className="btn-secondary"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CallToAction;