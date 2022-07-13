import React from "react";
import "./Skills.css";

const iconsList = [
  { className: "devicon devicon-html5-plain colored", title: "HTML5" },
  { className: "devicon devicon-css3-plain colored", title: "CSS3" },
  { className: "devicon devicon-javascript-plain colored", title: "JavaScript" },
  { className: "devicon devicon-typescript-plain colored", title: "TypeScript" },
  { className: "devicon devicon-react-original colored", title: "React" },
  { className: "devicon devicon-nextjs-original", title: "Nextjs", color: "devicon-color" },
  { className: "devicon devicon-redux-original colored", title: "Redux" },
  { className: "devicon devicon-webpack-plain colored", title: "Webpack" },
  { className: "devicon devicon-git-plain colored", title: "Git" },
  { className: "devicon devicon-github-original devicon-color", title: "Github" },
  { className: "devicon devicon-firebase-plain colored", title: "Firebase" },
  { className: "devicon devicon-sass-original colored", title: "SASS" },
  { className: "devicon fas fa-cogs", title: "RESTful APIs", color: "devicon-color" },
  { className: "devicon devicon-vscode-plain colored", title: "VS Code" },
  { className: "devicon fas fa-terminal", title: "Command Line", color: "devicon-color2" },
  { className: "devicon devicon-materialui-plain colored", title: "Material-UI" },
];

function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="section__container">
        <h1 className="heading">Skills & Tools</h1>
        <h2 className="heading">
          The skills, tools and technologies I use to bring your products to life:
        </h2>
        <ul className="box-container">
          {iconsList.map(({ className, title, color }) => (
            <li className={`box__icon ${color} `}>
              <i className={className}></i>
              <p>{title}</p>
            </li>
          ))}
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
