import "./Statistics.css";

function Statistics() {
  const focusAreas = [
    {
      number: "01",
      title: "Quality",
      text: "Careful attention to product sourcing, handling and buyer requirements.",
    },
    {
      number: "02",
      title: "Transparency",
      text: "Clear communication and straightforward discussions throughout the process.",
    },
    {
      number: "03",
      title: "Flexibility",
      text: "We work to understand individual product, packing and sourcing requirements.",
    },
    {
      number: "04",
      title: "Long-Term Growth",
      text: "Building meaningful relationships with buyers as we grow our export business.",
    },
  ];

  return (
    <section className="statistics">

      <div className="statistics-header" data-aos="fade-up">

        <p className="statistics-eyebrow">
          OUR APPROACH
        </p>

        <h2>
          Built on the Right
          <span> Foundations</span>
        </h2>

        <p>
          As a growing export business, our focus is on building a
          dependable foundation for long-term international trade.
        </p>

      </div>


      <div className="stats-container">

        {focusAreas.map((area, index) => (

          <div
            className="stat-card"
            key={area.number}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >

            <span className="stat-number">
              {area.number}
            </span>

            <h3>{area.title}</h3>

            <p>{area.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Statistics;