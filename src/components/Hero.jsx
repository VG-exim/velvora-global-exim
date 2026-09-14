import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.png";

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

    </section>
  );
}

export default Hero;