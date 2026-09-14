import "./Testimonials.css";

function Testimonials() {
  const expectations = [
    {
      title: "Clear Communication",
      text: "Straightforward discussions about products, requirements, packing and order details.",
    },
    {
      title: "Buyer-Focused Approach",
      text: "We take time to understand buyer requirements and work toward suitable sourcing solutions.",
    },
    {
      title: "Professional Coordination",
      text: "We aim to keep the sourcing and export process organized, transparent and easy to understand.",
    },
  ];

  return (
    <section className="testimonials">

      <div className="container">

        <div
          className="testimonials-header"
          data-aos="fade-up"
        >

          <p className="testimonials-eyebrow">
            WHAT BUYERS CAN EXPECT
          </p>

          <h2 className="section-title">
            A Simple Approach to
            <span> Doing Business</span>
          </h2>

          <p className="section-subtitle">
            We believe good international business starts with clear
            communication, attention to requirements and a professional
            approach from the beginning.
          </p>

        </div>


        <div className="testimonial-grid">

          {expectations.map((item, index) => (

            <div
              className="testimonial-card"
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;