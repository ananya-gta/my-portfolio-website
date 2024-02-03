import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";

export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMail />
            <h4>Email</h4>
            <h5>ananyagupta.works@gmail.com</h5>
            <a href="mailto:ananyagupta.works@gmail.com">Send a message</a>
          </article>
        </div>
      </div>
      </section>
  )
}

export default Contact