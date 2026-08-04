import "./GoogleMap.css";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function GoogleMap() {
  return (
    <section className="google-map-section">

      <h2>Our Location</h2>

      <p className="map-subtitle">
        We are proudly based in Karnataka, India, serving clients across
        international markets with premium agricultural products.
      </p>

      <div className="location-card">

        <FaMapMarkerAlt className="location-icon" />

        <h3>VELVORA GLOBAL EXIM</h3>

        <p>Near Gunj Area</p>
        <p>Yadgir District</p>
        <p>Karnataka - 585202</p>
        <p>India</p>

      </div>

      <div className="map-placeholder">

        <h3>🗺️ Google Maps</h3>

        <p>
          Our exact business location will be updated soon.
        </p>

        <p>
          Until then, please contact us using any of the methods below.
        </p>

        <div className="contact-options">

          <div>
            <FaPhoneAlt />
            <span>+91 6363440530</span>
          </div>

          <div>
            <MdEmail />
            <span>velvoraglobalexim@gmail.com</span>
          </div>

          <div>
            <FaWhatsapp />
            <span>WhatsApp Available</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default GoogleMap;