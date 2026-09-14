import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.png";

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="feature-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M52 8C28 10 12 22 12 40c0 8 5 14 13 14 18 0 27-19 27-46Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M10 56C22 38 33 27 48 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShipIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="feature-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 29h40l-5 18H17L12 29Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <path
        d="M23 29V17h18v12M29 17v-7h6v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <path
        d="M8 47c5 5 10 5 16 0 5 5 11 5 16 0 6 5 11 5 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M18 36h28"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="feature-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 25l12-10 12 8 10-7 14 10-8 14-11-5-9 9-8-8-7 5-9-16Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M20 15l8 10M44 16l-8 10M26 35l7 7M33 31l8 8M40 29l7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 25l-4 5 9 16 8-5M56 26l4 5-9 16-8-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.querySelector(".products");

    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero">

      {/* HERO BACKGROUND */}
      <img
        src={heroImage}
        alt="Agricultural products prepared for global export"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      {/* HERO CONTENT */}
      <div className="hero-content" data-aos="fade-up">

        <p className="hero-eyebrow">
          TRUST BEYOND BORDERS
        </p>

        <h1>
          Connecting Quality.
          <span>Delivering Globally.</span>
        </h1>

        <p className="hero-description">
          Reliable agricultural sourcing and export solutions
          from India for a sustainable tomorrow.
        </p>

        <div className="hero-buttons">

          <button
            className="btn-primary"
            onClick={scrollToProducts}
          >
            Explore Products
            <span className="button-arrow">→</span>
          </button>

          <Link to="/contact" className="btn-secondary">
            Get a Quote
          </Link>

        </div>

      </div>

      {/* RIGHT SIDE TEXT */}
      <div className="hero-side-text">
        <span>PEOPLE</span>
        <span>PRODUCTS</span>
        <span>POSSIBILITIES</span>
        <span>GLOBALLY</span>
      </div>

      {/* BOTTOM INFORMATION */}
      <div className="hero-bottom">

        <div className="hero-bottom-item">
          <strong>QUALITY</strong>
          <span>Carefully sourced products</span>
        </div>

        <div className="hero-bottom-divider"></div>

        <div className="hero-bottom-item">
          <strong>GLOBAL</strong>
          <span>International outlook</span>
        </div>

        <div className="hero-bottom-divider"></div>

        <div className="hero-bottom-item">
          <strong>LONG-TERM</strong>
          <span>Professional partnerships</span>
        </div>

      </div>

      {/* FEATURE CARDS */}
      <div className="hero-feature-cards">

        <div className="hero-feature-card">

          <div className="feature-icon">
            <LeafIcon />
          </div>

          <div className="feature-content">
            <h3>Quality Products</h3>
            <p>
              Sourced with care.
              <br />
              Delivered with confidence.
            </p>
          </div>

          <span className="feature-arrow">→</span>

        </div>

        <div className="hero-feature-card">

          <div className="feature-icon">
            <ShipIcon />
          </div>

          <div className="feature-content">
            <h3>Reliable Logistics</h3>
            <p>
              Efficient and secure
              <br />
              delivery solutions.
            </p>
          </div>

          <span className="feature-arrow">→</span>

        </div>

        <div className="hero-feature-card">

          <div className="feature-icon">
            <HandshakeIcon />
          </div>

          <div className="feature-content">
            <h3>Global Partnerships</h3>
            <p>
              Building sustainable
              <br />
              business relationships.
            </p>
          </div>

          <span className="feature-arrow">→</span>

        </div>

      </div>

    </section>
  );
}

export default Hero;