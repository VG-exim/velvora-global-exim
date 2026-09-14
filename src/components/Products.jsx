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

  const products = [
    {
      image: riceImage,
      category: "GRAINS",
      name: "Rice",
      description:
        "Indian rice available for international buyers. Product grade, specifications and packing requirements can be discussed according to buyer needs.",
    },
    {
      image: chilliImage,
      category: "SPICES",
      name: "Chilli Powder",
      description:
        "Indian chilli powder for buyers seeking agricultural spice products. Product specifications and packing requirements can be discussed before order confirmation.",
    },
    {
      image: turmericImage,
      category: "SPICES",
      name: "Turmeric Powder",
      description:
        "Indian turmeric powder for international sourcing requirements. Product specifications and packing requirements can be discussed according to buyer needs.",
    },
  ];

  return (
    <section className="products">

      <div className="container">

        <div className="products-header" data-aos="fade-up">

          <p className="section-eyebrow">
            OUR PRODUCT RANGE
          </p>

          <h2 className="section-title">
            Agricultural Products for
            <span> Global Buyers</span>
          </h2>

          <p className="section-subtitle">
            Explore our current range of agricultural products. We welcome
            inquiries from international buyers and can discuss product
            requirements, specifications and packing based on individual needs.
          </p>

        </div>


        <div className="product-grid">

          {products.map((product, index) => (

            <div
              className="product-card"
              key={product.name}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>


              <div className="product-content">

                <p className="product-category">
                  {product.category}
                </p>

                <h3>
                  {product.name}
                </h3>

                <p className="product-description">
                  {product.description}
                </p>

                <button
                  onClick={() => handleInquiry(product.name)}
                >
                  Send Inquiry
                </button>

              </div>

            </div>

          ))}

        </div>


        <div
          className="products-note"
          data-aos="fade-up"
        >

          <span>
            Looking for a specific agricultural product?
          </span>

          <button
            onClick={() => navigate("/contact")}
          >
            Talk to Our Team
          </button>

        </div>

      </div>

    </section>
  );
}

export default Products;