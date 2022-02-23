import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home" id="Home">
      <div className="section__container">
        <div className="header__wrapper">
          <h1 className="home__header">
            <span className="home__text1 animate__animated animate__fadeInRight">
              WELCOME TO MY PAGE
            </span>
            <span className="home__text2 animate__animated animate__fadeInLeft">
              Hi, I'm Dmitrii Kim
            </span>
            <span className="home__text3 sweet animate__animated animate__fadeInRight">
              Front-end Developer
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
