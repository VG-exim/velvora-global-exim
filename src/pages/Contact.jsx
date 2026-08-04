import "./Contact.css";

import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import GoogleMap from "../components/GoogleMap";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* Page Header */}

        <div className="contact-header">
          <h1>Contact Velvora Global Exim</h1>

          <p>
            Looking for a trusted agricultural export partner?
            Whether you're interested in Rice, Chilli Powder,
            Turmeric Powder or other agricultural products,
            our team is ready to assist you.
            Send us your inquiry and we'll get back to you promptly.
          </p>
        </div>

        {/* Contact Information & Inquiry Form */}

        <div className="contact-layout">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Location Section */}

        <GoogleMap />

      </div>
    </div>
  );
}

export default Contact;