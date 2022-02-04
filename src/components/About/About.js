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
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="about__text__wrapper">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus iusto magnam fuga corrupti fugiat voluptatum aliquam
                aut facere cum repellat quis reiciendis sunt deserunt architecto
                itaque, expedita consectetur at quidem repellendus minima.
                Minima magnam quia nisi dolores, rem aperiam quas consectetur!
              </p>
              <p className="about__text p__color">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus iusto magnam fuga corrupti fugiat voluptatum aliquam
                aut facere cum repellat quis reiciendis sunt deserunt architecto
                itaque, expedita consectetur at quidem repellendus minima.
                Minima magnam quia nisi dolores, rem aperiam quas consectetur!
              </p>
              <p className="about__text p__color">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus iusto magnam fuga corrupti fugiat voluptatum aliquam
              </p>
              <div className="about__button d__flex align__items_center">
                <a href="#Contact">
                  <button className="about btn pointer">Get In Touch!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* UP TO TOP BTN */}
        <div className="up__to__top__btn">
          <a href="#" className="bottom__to__top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-up white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
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
