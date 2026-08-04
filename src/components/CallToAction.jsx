import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="cta">
      <div
        className="cta-content"
        data-aos="fade-up"
      >
        <h2>Ready to Grow Your Business Globally?</h2>

        <p data-aos="fade-up" data-aos-delay="150">
          Partner with Velvora Global Exim for premium-quality agricultural
          exports and reliable international trade solutions.
        </p>

        <div
          className="cta-buttons"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button className="btn-primary">
            Send Inquiry
          </button>

          <button className="btn-secondary">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;