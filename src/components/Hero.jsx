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

      <img
        src={heroImage}
        alt="Agricultural products prepared for global export"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content" data-aos="fade-up">

        <p className="hero-eyebrow">
          AGRICULTURAL EXPORTS FROM INDIA
        </p>

        <h1>
          Connecting India to
          <span> Global Markets</span>
        </h1>

        <p className="hero-description">
          Velvora Global Exim supplies quality agricultural products
          for international buyers, with a focus on reliable sourcing,
          careful handling, and professional service.
        </p>

        <p className="hero-products">
          Rice&nbsp;&nbsp;•&nbsp;&nbsp;Chilli Powder&nbsp;&nbsp;•&nbsp;&nbsp;
          Turmeric Powder
        </p>

        <div className="hero-buttons">

          <button
            className="btn-primary"
            onClick={scrollToProducts}
          >
            Explore Products
          </button>

          <Link to="/contact" className="btn-secondary">
            Contact Us
          </Link>

        </div>

      </div>

      <div className="hero-bottom">

        <div>
          <strong>QUALITY</strong>
          <span>Focused sourcing</span>
        </div>

        <div>
          <strong>RELIABILITY</strong>
          <span>Professional service</span>
        </div>

        <div>
          <strong>GLOBAL</strong>
          <span>International outlook</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;