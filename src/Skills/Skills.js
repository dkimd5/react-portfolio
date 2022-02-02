import React from "react";
import "./Skills.css";
import responsiveIcon from "../img/icon-tablet-phone-and-browser.svg";
import w3cIcon from "../img/icon-w3c.svg";

function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="heading">
        <h1 className="heading">Skills & Tools</h1>
        <h2 className="heading p__color">
          The skills, tools and technologies I use to bring your products to
          life:
        </h2>
      </div>
      <div className="box-container">
        <div className="box__icon">
          <i className="devicon devicon-html5-plain colored"></i>
        </div>
        <div className="box__icon">
          <i className="devicon devicon-css3-plain colored"></i>
        </div>
        <div className="box__icon">
          <i className="devicon devicon-javascript-plain colored"></i>
        </div>
        <div className="box__icon">
          <i className="devicon devicon-react-original colored"></i>
        </div>
        <div className="box__icon">
          <i className="devicon devicon-git-plain colored"></i>
        </div>
        <div className="box__icon">
          <i className="devicon devicon-github-original devicon-color"></i>
        </div>
        <div className="box__icon">
          <i className="devicon devicon-firebase-plain colored"></i>
        </div>
        <div className="box__icon">
          <i className="devicon devicon-sass-original colored"></i>
        </div>
        <div className="box__icon devicon-color">
          <i className="devicon fas fa-cogs"></i>
        </div>
        <div className="box__icon">
          <i className="devicon devicon-vscode-plain colored"></i>
        </div>
        <div className="box__icon devicon-color2">
          <i className="devicon fas fa-terminal"></i>
        </div>
        <div className="box__icon">
          <i className="devicon devicon-webpack-plain colored"></i>
        </div>
        <div className="box__icon">
          <i className="devicon devicon-redux-original colored"></i>
        </div>
        <div className="box__icon">
          <i className="devicon devicon-materialui-plain colored"></i>
        </div>
        <div className="box__icon">
          <div className="container-img-i i-responsive">
            <img
              src={responsiveIcon}
              alt="icon of tablet, phone and browser window."
            />
          </div>
          {/* <p>Responsive Websites</p> */}
        </div>
        <div className="box__icon">
          <div className="container-img-i i-w3c">
            <img src={w3cIcon} alt="W3C logo" />
          </div>
          {/* <p>Web Accessibility</p> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
