import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-content"
        data-aos="fade-up"
      >
        <h1>Connecting India to Global Markets</h1>

        <p>
          Velvora Global Exim is committed to delivering premium-quality
          agricultural products across the world with trust, reliability, and
          excellence.
        </p>

        <div
          className="hero-buttons"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button className="btn-primary">View Products</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;