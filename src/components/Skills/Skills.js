import React from "react";
import "./Skills.css";
import responsiveIcon from "../../images/icon-tablet-phone-and-browser.svg";
import w3cIcon from "../../images/icon-w3c.svg";

function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="section__container">
        <div className="heading">
          <h1 className="heading">Skills & Tools</h1>
          <h2 className="heading p__color">
            The skills, tools and technologies I use to bring your products to
            life:
          </h2>
        </div>
        <ul className="box-container">
          <li className="box__icon">
            <i className="devicon devicon-html5-plain colored"></i>
            <p>HTML5</p>
          </li>
          <li className="box__icon">
            <i className="devicon devicon-css3-plain colored"></i>
            <p>CSS3</p>
          </li>
          <li className="box__icon">
            <i className="devicon devicon-javascript-plain colored"></i>
            <p>JavaScript</p>
          </li>
          <li className="box__icon">
            <i className="devicon devicon-react-original colored"></i>
            <p>React</p>
          </li>
          <li className="box__icon">
            <i className="devicon devicon-git-plain colored"></i>
            <p>Git</p>
          </li>
          <li className="box__icon">
            <i className="devicon devicon-github-original devicon-color"></i>
            <p>Github</p>
          </li>
          <li className="box__icon">
            <i className="devicon devicon-firebase-plain colored"></i>
            <p>Firebase</p>
          </li>
          <li className="box__icon">
            <i className="devicon devicon-sass-original colored"></i>
            <p>SASS</p>
          </li>
          <li className="box__icon devicon-color">
            <i className="devicon fas fa-cogs"></i>
            <p>RESTful APIs</p>
          </li>
          <li className="box__icon">
            <i className="devicon devicon-vscode-plain colored"></i>
            <p>VS Code</p>
          </li>
          <li className="box__icon devicon-color2">
            <i className="devicon fas fa-terminal"></i>
            <p>Command Line</p>
          </li>
          <li className="box__icon">
            <i className="devicon devicon-webpack-plain colored"></i>
            <p>Webpack</p>
          </li>
          <li className="box__icon">
            <i className="devicon devicon-redux-original colored"></i>
            <p>Redux</p>
          </li>
          <li className="box__icon">
            <i className="devicon devicon-materialui-plain colored"></i>
            <p>Material-UI</p>
          </li>
          <li className="box__icon">
            <div className="container-img-i i-responsive">
              <img
                src={responsiveIcon}
                alt="icon of tablet, phone and browser window."
              />
            </div>
            <p>Responsive Websites</p>
          </li>
          <li className="box__icon">
            <div className="container-img-i i-w3c">
              <img src={w3cIcon} alt="W3C logo" />
            </div>
            <p>
              Web <br /> Accessibility
            </p>
          </li>
        </ul>
        <div className="h3__wrap">
          <h3 className="skills__h3__header">Currently working on:</h3>
          <p className="skills__h3__text">
            Improving my skills in, and understanding of vanilla JavaScript and
            React.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
