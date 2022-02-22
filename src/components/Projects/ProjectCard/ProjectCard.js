import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project__card">
      <div className="project__container__img">
        <div className="project__browser">
          <div className="project__circle"></div>
          <div className="project__circle"></div>
          <div className="project__circle"></div>
        </div>
        <img
          src={project.image}
          alt="project page image"
          className="project__img"
        ></img>
      </div>
      <div className="project__container__text"></div>
    </div>
  );
}

export default ProjectCard;
