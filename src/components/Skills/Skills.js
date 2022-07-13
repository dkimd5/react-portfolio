import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="section__container">
        <h1 className="heading">Skills & Tools</h1>
        <h2 className="heading">
          The skills, tools and technologies I use to bring your products to life:
        </h2>
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
        </ul>
        <div className="skills__h3__wrap">
          <h3>Currently working on:</h3>
          <p>Improving my skills in, and understanding of vanilla JavaScript and React.</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
