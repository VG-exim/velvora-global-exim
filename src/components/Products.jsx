import "./Products.css";

import { useNavigate } from "react-router-dom";

import riceImage from "../assets/products/rice.png";
import chilliImage from "../assets/products/chilli-powder.png";
import turmericImage from "../assets/products/turmeric-powder.png";

function Products() {
  const navigate = useNavigate();

  const handleInquiry = (product) => {
    navigate("/contact", {
      state: {
        selectedProduct: product,
      },
    });
  };

  return (
    <section className="products">
      <div className="container">
        <h2
          className="section-title"
          data-aos="fade-up"
        >
          Our Featured Products
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          We export premium-quality agricultural products to international
          markets with strict quality standards.
        </p>

        <div className="product-grid">

          {/* Rice */}

          <div
            className="product-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="product-image">
              <img
                src={riceImage}
                alt="Premium Indian Rice"
              />
            </div>

            <h3>Rice</h3>

            <p>
              Premium quality Indian rice sourced from trusted farmers and
              processed under international quality standards.
            </p>

            <button onClick={() => handleInquiry("Rice")}>
              Send Inquiry
            </button>
          </div>

          {/* Chilli Powder */}

          <div
            className="product-card"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div className="product-image">
              <img
                src={chilliImage}
                alt="Premium Chilli Powder"
              />
            </div>

            <h3>Chilli Powder</h3>

            <p>
              Finest chilli powder with rich colour, strong aroma and excellent
              purity suitable for global markets.
            </p>

            <button onClick={() => handleInquiry("Chilli Powder")}>
              Send Inquiry
            </button>
          </div>

          {/* Turmeric Powder */}

          <div
            className="product-card"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="product-image">
              <img
                src={turmericImage}
                alt="Premium Turmeric Powder"
              />
            </div>

            <h3>Turmeric Powder</h3>

            <p>
              High-curcumin turmeric powder carefully processed to retain its
              natural flavour and freshness.
            </p>

            <button onClick={() => handleInquiry("Turmeric Powder")}>
              Send Inquiry
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Products;