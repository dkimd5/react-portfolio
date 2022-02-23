import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { name, deployLink, githubLink, image, description } = project;
  return (
    <div className="project__card">
      <div className="project__container__img">
        <div className="project__browser">
          <div className="project__circle"></div>
          <div className="project__circle"></div>
          <div className="project__circle"></div>
        </div>
        <img
          src={image}
          alt="project page image"
          className="project__img"
        ></img>
      </div>
      <div className="project__container__text">
        <h2>{name}</h2>
        <p className="p__color">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
