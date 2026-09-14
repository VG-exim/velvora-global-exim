import "./ContactForm.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PopupMessage from "./PopupMessage";

function ContactForm() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    message: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    type: "error",
    title: "",
    message: "",
  });

  const phoneNumber = "916362185920";
  const businessEmail = "velvoraglobalexim@gmail.com";

  useEffect(() => {
    if (location.state?.selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        product: location.state.selectedProduct,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const closePopup = () => {
    setPopup({
      ...popup,
      show: false,
    });
  };

  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.product ||
      !formData.message
    ) {
      setPopup({
        show: true,
        type: "error",
        title: "Incomplete Form",
        message:
          "Please fill in all required fields before sending your inquiry.",
      });

      return false;
    }

    return true;
  };

  const createMessage = () => {
    return `Hello Velvora Global Exim,

I would like to make an export inquiry.

Name: ${formData.fullName}

Company: ${formData.company || "N/A"}

Email: ${formData.email}

Phone: ${formData.phone}

Country: ${formData.country}

Product Interested: ${formData.product}

Requirement:
${formData.message}

Regards,
${formData.fullName}`;
  };

  const sendWhatsApp = () => {
    if (!validateForm()) return;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      createMessage()
    )}`;

    window.open(url, "_blank");
  };

  const sendEmail = () => {
    if (!validateForm()) return;

    const subject = "Export Inquiry";
    const body = createMessage();

    window.location.href = `mailto:${businessEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PopupMessage
        show={popup.show}
        type={popup.type}
        title={popup.title}
        message={popup.message}
        onClose={closePopup}
      />

      <section className="contact-form-section">

        <h2>Export Inquiry</h2>

        <p className="contact-subtitle">
          Interested in sourcing agricultural products from India?
          Fill in the form below and share your requirements with our team.
        </p>

        <form className="contact-form">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name *"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name (Optional)"
            value={formData.company}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="country"
            placeholder="Country *"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">
              Select Product *
            </option>

            <option value="Rice">
              Rice
            </option>

            <option value="Chilli Powder">
              Chilli Powder
            </option>

            <option value="Turmeric Powder">
              Turmeric Powder
            </option>

            <option value="Other">
              Other
            </option>
          </select>

          <textarea
            name="message"
            placeholder="Describe your requirement *"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>


          <div className="button-group">

            <button
              type="button"
              className="email-btn"
              onClick={sendEmail}
            >
              📧 Send Email
            </button>

            <button
              type="button"
              className="whatsapp-btn"
              onClick={sendWhatsApp}
            >
              💬 Send WhatsApp
            </button>

          </div>

        </form>

      </section>
    </>
  );
}

export default ContactForm;