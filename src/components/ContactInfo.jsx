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

      <h2>Contact Information</h2>

      <p className="info-subtitle">
        We'd love to hear from you. Reach out to us for export inquiries,
        quotations, partnerships, or any questions regarding our products.
      </p>

      <div className="info-card">

        <div className="info-item">
          <FaPhoneAlt className="info-icon" />
          <div>
            <h4>Phone</h4>
            <p>+91 6363440530</p>
          </div>
        </div>

        <div className="info-item">
          <MdEmail className="info-icon" />
          <div>
            <h4>Email</h4>
            <p>velvoraglobalexim@gmail.com</p>
          </div>
        </div>

        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <div>
            <h4>Location</h4>
            <p>Yadgir, Karnataka, India</p>
          </div>
        </div>

        <div className="info-item">
          <FaClock className="info-icon" />
          <div>
            <h4>Business Hours</h4>
            <p>Monday – Saturday</p>
            <p>9:00 AM – 6:00 PM</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ContactInfo;