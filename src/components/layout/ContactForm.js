import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon.</p>
  );
};

const ContactForm = () => {
  const [result, showResult] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ufo941q",
        "template_ae95kbf",
        e.target,
        "user_SkTmfnfcLxMJjoh7JtlqQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <div className="contact-form">
      <h1 className="text-medium text-700 py-3">Contact Info</h1>
      <form onSubmit={sendEmail}>
        <div className="grid-2">
          <div>
            <input type="text" name="from_name" placeholder="Name" />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" name="phone" placeholder="Phone" />
          </div>
          <div>
            <input type="text" name="subject" placeholder="Subject" />
          </div>
        </div>
        <div className="text-area">
          <textarea type="text" name="message" placeholder="Message" />
        </div>
        <div>{result ? <Result /> : null}</div>
        <input
          type="submit"
          className="btn btn-lg btn-outline-primary"
          value="Send"
        />
      </form>
    </div>
  );
};

export default ContactForm;
