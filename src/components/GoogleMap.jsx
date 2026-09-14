import "./GoogleMap.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function GoogleMap() {
  return (
    <section className="google-map-section">

      <div
        className="google-map-header"
        data-aos="fade-up"
      >

        <p className="google-map-eyebrow">
          OUR LOCATION
        </p>

        <h2>
          Based in
          <span> Karnataka, India</span>
        </h2>

        <p className="map-subtitle">
          Velvora Global Exim is based in Yadgir, Karnataka, India,
          with a focus on connecting Indian agricultural products with
          international buyers.
        </p>

      </div>


      <div
        className="location-card"
        data-aos="fade-up"
        data-aos-delay="100"
      >

        <div className="location-icon-wrapper">
          <FaMapMarkerAlt className="location-icon" />
        </div>

        <div className="location-details">

          <p className="location-label">
            BUSINESS ADDRESS
          </p>

          <h3>
            VELVORA GLOBAL EXIM
          </h3>

          <p>Near Gunj Area</p>
          <p>Yadgir District</p>
          <p>Karnataka - 585202</p>
          <p>India</p>

        </div>

      </div>


      <div
        className="contact-options"
        data-aos="fade-up"
        data-aos-delay="200"
      >

        <div className="contact-option">

          <FaPhoneAlt />

          <div>
            <span>PHONE</span>
            <strong>+91 6362185920</strong>
          </div>

        </div>


        <div className="contact-option">

          <MdEmail />

          <div>
            <span>EMAIL</span>
            <strong>velvoraglobalexim@gmail.com</strong>
          </div>

        </div>


        <div className="contact-option">

          <FaWhatsapp />

          <div>
            <span>WHATSAPP</span>
            <strong>+91 6362185920</strong>
          </div>

        </div>

      </div>


      <div
        className="map-coming-soon"
        data-aos="fade-up"
        data-aos-delay="300"
      >

        <p>
          Our Google Maps location will be added once the exact
          business location link is available.
        </p>

      </div>

    </section>
  );
}

export default GoogleMap;