import React, { useRef } from "react";
import "./Contact.css";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import vkIcon from "../../images/vk-icon.svg";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mu9wrfk",
        "template_0unfuga",
        form.current,
        "user_WBPcOWSLnWOWh1sMWDSsD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
            <form ref={form} onSubmit={handleSubmit}>
              <input
                name="user_name"
                type="text"
                className="contact name"
                placeholder="Your name*"
              />
              <input
                name="user_email"
                type="text"
                className="contact email"
                placeholder="Your Email*"
              />
              <input
                name="user_subject"
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
                Send Email
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
