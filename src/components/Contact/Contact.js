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
                <a
                  href="https://github.com/dkimd5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={40} className="icon-color" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kim_en_su/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram size={40} className="icon-color" />
                </a>
              </li>
              <li>
                <AiFillLinkedin size={40} className="icon-color" />
              </li>
              <li>
                <a
                  href="https://wa.me/+79169143677"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineWhatsApp size={40} className="icon-color" />
                </a>
              </li>
              <li>
                <a
                  href="tg://resolve?domain=kim_en_su"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTelegram size={40} className="icon-color" />
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com/dimonkim777"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={vkIcon} alt="vk icon" className="vk-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
