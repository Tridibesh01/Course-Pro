import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="grid-2 contact-details">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
