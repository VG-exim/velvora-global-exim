import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-content" data-aos="fade-up">

          <p className="about-eyebrow">
            ABOUT VELVORA GLOBAL EXIM
          </p>

          <h1>
            Connecting Indian
            <span> Agriculture to Global Opportunities</span>
          </h1>

          <p>
            Velvora Global Exim is an agricultural export business based in
            Yadgir, Karnataka, India, focused on connecting Indian agricultural
            products with international buyers.
          </p>

        </div>

      </section>


      {/* COMPANY INTRODUCTION */}

      <section className="about-introduction">

        <div className="about-container">

          <div className="about-section-heading" data-aos="fade-up">

            <p className="about-eyebrow">
              WHO WE ARE
            </p>

            <h2>
              A Growing Business with a
              <span> Global Outlook</span>
            </h2>

          </div>


          <div
            className="about-introduction-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <p>
              Velvora Global Exim is a growing agricultural export business
              from Karnataka, India. We work with a focus on sourcing and
              supplying agricultural products for international markets.
            </p>

            <p>
              Our current product range includes rice, chilli powder and
              turmeric powder. We aim to understand buyer requirements and
              build a professional approach to sourcing, packing and export
              coordination.
            </p>

            <p>
              As we begin our journey in international trade, our priority is
              to develop reliable business relationships through clear
              communication, careful attention to requirements and a
              straightforward way of working.
            </p>

          </div>

        </div>

      </section>


      {/* MISSION & VISION */}

      <section className="about-mission">

        <div className="about-container">

          <div className="about-cards">

            <div
              className="about-card"
              data-aos="fade-up"
            >

              <span className="about-card-number">
                01
              </span>

              <h3>
                Our Mission
              </h3>

              <p>
                To connect Indian agricultural products with international
                buyers through responsible sourcing, clear communication and
                dependable export coordination.
              </p>

            </div>


            <div
              className="about-card"
              data-aos="fade-up"
              data-aos-delay="150"
            >

              <span className="about-card-number">
                02
              </span>

              <h3>
                Our Vision
              </h3>

              <p>
                To grow into a dependable international trading partner while
                creating long-term relationships with buyers and suppliers.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* VALUES */}

      <section className="about-values">

        <div className="about-container">

          <div className="about-section-heading" data-aos="fade-up">

            <p className="about-eyebrow">
              OUR VALUES
            </p>

            <h2>
              Principles Behind
              <span> Our Approach</span>
            </h2>

          </div>


          <div className="values-grid">

            <div
              className="value-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <span>01</span>

              <h3>
                Transparency
              </h3>

              <p>
                We believe clear and honest communication is the foundation
                of a strong business relationship.
              </p>

            </div>


            <div
              className="value-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <span>02</span>

              <h3>
                Responsibility
              </h3>

              <p>
                We pay attention to product requirements, handling and the
                details involved in each business discussion.
              </p>

            </div>


            <div
              className="value-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <span>03</span>

              <h3>
                Long-Term Relationships
              </h3>

              <p>
                We aim to build lasting relationships by understanding buyer
                needs and maintaining a professional approach.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;