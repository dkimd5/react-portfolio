import React from "react";
import "./Contact.css";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import vkIcon from "../../images/vk-icon.svg";

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="section__container">
        <h1 className="heading">Get In Touch</h1>
        <div className="contact__content__wrp">
          <div className="contact__form">
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
          <div className="contact__socials">
            <p className="p__text">
              Feeling social?
              <br /> Find me on these online spaces!
            </p>
            <ul className="socials__list">
              <li>
                <AiFillGithub size={40} className="icon-color" />
              </li>
              <li>
                <AiOutlineInstagram size={40} className="icon-color" />
              </li>
              <li>
                <AiFillLinkedin size={40} className="icon-color" />
              </li>
              <li>
                <AiOutlineWhatsApp size={40} className="icon-color" />
              </li>
              <li>
                <BsTelegram size={40} className="icon-color" />
              </li>
              <li>
                <img src={vkIcon} alt="vk icon" className="vk-icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
