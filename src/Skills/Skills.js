import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills" id="Skills">
      <div className="heading">
        <h1 className="heading">Skills & Tools</h1>
        <h2 className="heading p__color">
          The skills, tools and technologies I use to bring your products to
          life:
        </h2>
      </div>
      <div className="box-container">
        <div className="box__icon">
          <i class="devicon devicon-html5-plain colored"></i>
        </div>
        <div className="box__icon">
          <i class="devicon devicon-css3-plain colored"></i>
        </div>
        <div className="box__icon">
          <i class="devicon devicon-javascript-plain colored"></i>
        </div>
        <div className="box__icon">
          <i class="devicon devicon-react-original colored"></i>
        </div>
        <div className="box__icon">
          <i class="devicon devicon-git-plain colored"></i>
        </div>
        <div className="box__icon">
          <i class="devicon devicon-github-original devicon-color"></i>
        </div>
        <div className="box__icon">
          <i class="devicon devicon-firebase-plain colored"></i>
        </div>
        <div className="box__icon">
          <i class="devicon devicon-sass-original colored"></i>
        </div>
        <div className="box__icon devicon-color">
          <i class="devicon fas fa-cogs"></i>
        </div>
        <div className="box__icon">
          <i class="devicon devicon-vscode-plain colored"></i>
        </div>
        <div className="box__icon devicon-color2">
          <i class="devicon fas fa-terminal"></i>
        </div>
        <div className="box__icon">
          <i class="devicon devicon-webpack-plain colored"></i>
        </div>
        <div className="box__icon">
          <i class="devicon devicon-redux-original colored"></i>
        </div>
        <div className="box__icon">
          <i class="devicon devicon-materialui-plain colored"></i>
        </div>
      </div>
    </div>
  );
}

export default Skills;
