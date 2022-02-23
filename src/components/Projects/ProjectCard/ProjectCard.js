import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { name, deployLink, githubLink, image, description, icons } = project;
  return (
    <div className="project__card">
      <div className="project__container__img">
        <div className="project__browser">
          <div className="project__circle"></div>
          <div className="project__circle"></div>
          <div className="project__circle"></div>
        </div>
        <img src={image} alt="project page" className="project__img"></img>
      </div>
      <div className="project__container__text">
        <h2>{name}</h2>
        <p className="p__color">{description}</p>
        <ul className="project__icons">
          {icons.map((icon) => (
            <li className="project__box__icon">
              <i className={icon}></i>
            </li>
          ))}
        </ul>
        <div className="project__buttons">
          <a href={deployLink} target="_blank" rel="noreferrer">
            <button className="btn pointer">View It Here</button>
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <button className="btn pointer">View Github Repo</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
