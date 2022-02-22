import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project__card">
      <div className="container__img">
        <div className="project-browser">
          <div className="project-circle"></div>
          <div className="project-circle"></div>
          <div className="project-circle"></div>
        </div>
        <img
          src={project.image}
          alt="project page image"
          className="project-img"
        ></img>
      </div>
      <div className="container__text"></div>
    </div>
  );
}

export default ProjectCard;
