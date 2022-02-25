import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="section__container">
        <h1 className="heading">Get In Touch</h1>
        <div className="contact__content__wrp">
          <div className="contact__form"></div>
          <p className="p__text">
            Say hi, ask for my resume or see if we can build something amazing
            together? I'd love to hear from you!
            <br />
            <br />
            Fill in your info in the form below and I look forward to hearing
            from you!
          </p>
          <form>
            <input
              type="text"
              className="contact name"
              placeholder="Your name*"
            />
            <input
              type="text"
              className="contact email"
              placeholder="Your Email*"
            />
            <input
              type="text"
              className="contact subject"
              placeholder="Write a Subject"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Write Your message"
            ></textarea>
            <button className="btn contact" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
