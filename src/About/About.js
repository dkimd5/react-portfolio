import React from "react";
import "./About.css";
import aboutImg from "../img/aboutImg.jpg";

function About() {
  return (
    <div className="about component__space">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
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
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
