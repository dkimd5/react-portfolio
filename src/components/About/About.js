import React from "react";
import "./About.css";
import aboutImg from "../../images/aboutImg.jpg";

function About() {
  // Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="about component__space" id="About">
      <div className="section__container">
        <div className="about__wrapper">
          <div className="about__img__wrapper">
            <img src={aboutImg} alt="personal_photo" className="about__img" />
          </div>
          <div className="about__text__wrapper">
            <h1 className="about__heading">About Me</h1>
            <p className="p__text">
              I started my way at programming with <span>C++ & Java</span> and
              after some time I decided to switch to
              <span> Front-end development</span>. I'm enjoy bringing technical
              and visual aspects of digital products to life.
            </p>
            <p className="p__text">
              I studied Front-end at
              <a href="https://gb.ru/" target="_blank" rel="noreferrer">
                {" "}
                GeekBrains school
              </a>
              , you can see some of my{" "}
              <a href="#Certificates">certificates below</a>, and I'm searching
              for new knowledge on my own reading materials, watching videos,
              solving tasks at
              <a
                href="https://www.codewars.com/dashboard"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Codewars
              </a>{" "}
              and etc.
            </p>
            <p className="p__text">
              I'm happy to create, learn and explore new things. Currently
              improving and sharping my skills. Feel free to contact me!
            </p>
            <div className="about__button align__items_center">
              <a href="#Contact">
                <button className="about btn pointer">Get In Touch!</button>
              </a>
            </div>
          </div>
        </div>
        {/* UP TO TOP BTN */}
        <div className="up__to__top__btn">
          <a href="##" className="bottom__to__top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-up white"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
