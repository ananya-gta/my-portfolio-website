import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jvdmy4m",
        "template_p7rukn8",
        form.current,
        "NDZD5oxWjL8_FGexJ"
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
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>anannya.gta@gmail.com</h5>
            <a
              href="mailto:ananyagupta.works@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>in/ananya-gupta-1902</h5>
            <a
              href="https://www.linkedin.com/in/ananya-gupta-1902/message"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@ananya_192</h5>
            <a
              href="https://twitter.com/messages/compose?recipient_id=1570679027886858241"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message for Me"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
