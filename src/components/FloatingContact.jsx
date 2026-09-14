import { useState } from "react";
import "./FloatingContact.css";

import { FaWhatsapp, FaPhoneAlt, FaPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function FloatingContact() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "916362185920";

  const whatsappMessage =
    "Hello! I'm interested in your export products. Could you please share more details?";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="floating-contact">
      {open && (
        <>
          {/* Email */}
          <a
            href="mailto:velvoraglobalexim@gmail.com?subject=Export%20Inquiry&body=Hello%20Velvora%20Global%20Exim,%0A%0AI%20am%20interested%20in%20your%20export%20products.%0A%0AThank%20you."
            className="contact-item email"
            aria-label="Email Us"
          >
            <MdEmail />
            <span>Email</span>
          </a>

          {/* Call */}
          <a
            href={`tel:+${phoneNumber}`}
            className="contact-item call"
            aria-label="Call Us"
          >
            <FaPhoneAlt />
            <span>Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </>
      )}

      {/* Floating Button */}
      <button
        className={`main-contact-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle Contact Menu"
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default FloatingContact;