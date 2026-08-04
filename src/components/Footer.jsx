import "./Footer.css";
import logo from "../assets/logo/logo.png";
import worldMap from "../assets/world-map/world-map.png";
import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* World Map Background */}
      <img
        src={worldMap}
        alt="World Map"
        className="footer-world-map"
      />

      <div className="footer-container">

        {/* Company */}

        <div className="footer-section">

          <img
            src={logo}
            alt="Velvora Global Exim Logo"
            className="footer-logo"
          />

          <h2>Velvora Global Exim</h2>

          <p className="footer-tagline">
            Connecting Indian Quality to Global Markets
          </p>

          <p>
            Exporting premium agricultural products from India
            to international markets with quality, trust and
            reliability.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/products">Products</Link></li>

            <li>
              <Link to="/export-markets">
                Export Markets
              </Link>
            </li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        {/* Products */}

        <div className="footer-section">

          <h3>Our Products</h3>

          <ul>

            <li>🌾 Rice</li>

            <li>🌶️ Chilli Powder</li>

            <li>🟡 Turmeric Powder</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact Us</h3>

          <div className="footer-contact">

            <FaPhoneAlt className="footer-icon" />

            <a href="tel:+916363440530">
              +91 6363440530
            </a>

          </div>

          <div className="footer-contact">

            <MdEmail className="footer-icon" />

            <a href="mailto:velvoraglobalexim@gmail.com">
              velvoraglobalexim@gmail.com
            </a>

          </div>

          <div className="footer-contact">

            <FaMapMarkerAlt className="footer-icon" />

            <div>
              Near Gunj Area<br />
              Yadgir District<br />
              Karnataka - 585202<br />
              India
            </div>

          </div>

        </div>

      </div>

      <hr />

      <div className="copyright">

        © 2026 Velvora Global Exim. All Rights Reserved.

        <br /><br />

        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          style={{
            color: "#FFD166",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          <FaArrowUp /> Back to Top
        </a>

      </div>

    </footer>
  );
}

export default Footer;