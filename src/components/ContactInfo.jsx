import "./ContactInfo.css";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function ContactInfo() {
  return (
    <section className="contact-info">

      <div className="contact-info-header">
        <p className="contact-info-eyebrow">
          GET IN TOUCH
        </p>

        <h2>
          Contact
          <span> Our Team</span>
        </h2>

        <p className="info-subtitle">
          Have a requirement or an inquiry about our agricultural
          products? Reach out to us and let's discuss your sourcing needs.
        </p>
      </div>

      <div className="info-card">

        <div className="info-item">
          <div className="info-icon-wrapper">
            <FaPhoneAlt className="info-icon" />
          </div>

          <div>
            <p className="info-label">PHONE</p>
            <h4>+91 6362185920</h4>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon-wrapper">
            <MdEmail className="info-icon" />
          </div>

          <div>
            <p className="info-label">EMAIL</p>
            <h4>velvoraglobalexim@gmail.com</h4>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon-wrapper">
            <FaMapMarkerAlt className="info-icon" />
          </div>

          <div>
            <p className="info-label">BUSINESS LOCATION</p>
            <h4>Yadgir, Karnataka</h4>
            <p className="info-detail">
              India
            </p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon-wrapper">
            <FaClock className="info-icon" />
          </div>

          <div>
            <p className="info-label">BUSINESS HOURS</p>
            <h4>Monday – Saturday</h4>
            <p className="info-detail">
              9:00 AM – 6:00 PM
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ContactInfo;