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
        "Indian rice for international buyers seeking agricultural products from India. Product specifications and packing requirements can be discussed according to buyer needs.",
    },
    {
      image: chilliImage,
      category: "SPICES",
      name: "Chilli Powder",
      description:
        "Indian chilli powder for international sourcing requirements. Product specifications and packing options can be discussed with buyers before order confirmation.",
    },
    {
      image: turmericImage,
      category: "SPICES",
      name: "Turmeric Powder",
      description:
        "Indian turmeric powder for buyers looking to source agricultural spice products from India. Specifications and packing requirements can be discussed according to buyer needs.",
    },
  ];

  return (
    <main className="products-page">

      {/* PAGE HERO */}

      <section className="products-page-hero">

        <div
          className="products-page-hero-content"
          data-aos="fade-up"
        >

          <p className="products-page-eyebrow">
            OUR PRODUCTS
          </p>

          <h1>
            Agricultural Products
            <span> from India</span>
          </h1>

          <p>
            Explore our current range of agricultural products available
            for international sourcing. Contact us to discuss product
            requirements, specifications and packing.
          </p>

        </div>

      </section>


      {/* PRODUCT CATALOGUE */}

      <section className="products-catalogue">

        <div className="products-page-container">

          <div
            className="products-page-header"
            data-aos="fade-up"
          >

            <p className="products-page-section-eyebrow">
              CURRENT PRODUCT RANGE
            </p>

            <h2>
              Explore Our
              <span> Products</span>
            </h2>

            <p>
              Our current range includes selected grains and spices from
              India. Product details can be discussed based on individual
              buyer requirements.
            </p>

          </div>


          <div className="products-page-grid">

            {products.map((product, index) => (

              <article
                className="products-page-card"
                key={product.name}
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >

                <div className="products-page-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>


                <div className="products-page-content">

                  <p className="products-page-category">
                    {product.category}
                  </p>

                  <h3>
                    {product.name}
                  </h3>

                  <p className="products-page-description">
                    {product.description}
                  </p>


                  <div className="products-page-info">

                    <div>
                      <span>ORIGIN</span>
                      <strong>India</strong>
                    </div>

                    <div>
                      <span>AVAILABILITY</span>
                      <strong>On Inquiry</strong>
                    </div>

                  </div>


                  <button
                    className="products-page-button"
                    onClick={() => handleInquiry(product.name)}
                  >
                    Send Inquiry
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* BUYER NOTE */}

      <section className="products-page-note">

        <div
          className="products-page-note-content"
          data-aos="fade-up"
        >

          <p className="products-page-note-eyebrow">
            HAVE A SPECIFIC REQUIREMENT?
          </p>

          <h2>
            Let's Discuss Your
            <span> Requirement</span>
          </h2>

          <p>
            Product specifications, packing requirements and other details
            can be discussed directly with our team.
          </p>

          <button
            onClick={() => navigate("/contact")}
          >
            Contact Velvora Global Exim
          </button>

        </div>

      </section>

    </main>
  );
}

export default Products;