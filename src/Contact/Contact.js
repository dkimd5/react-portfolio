import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact component__space">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">
                I am available for work. Connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+7777 77 777</strong> or email{" "}
                <strong>admin@example.com</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
