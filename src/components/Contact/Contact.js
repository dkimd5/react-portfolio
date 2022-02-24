import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="section__container">
        <div className="row">
          <div className="col__2">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="contact__heading">Hire Me</h1>
                <p className="hire__text white">
                  I am available for work. Connect with me via phone:
                </p>
                <p className="hire__text white">
                  <strong>+7777 77 777</strong> or email{" "}
                  <strong>admin@example.com</strong>
                </p>
              </div>
              <div className="input__box">
                <input
                  type="text"
                  className="contact name"
                  placeholder="Your name *"
                />
                <input
                  type="text"
                  className="contact email"
                  placeholder="Your Email *"
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
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
