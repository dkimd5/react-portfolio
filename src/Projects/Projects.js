import React from "react";
import "./Projects.css";
import Project1 from "../img/portfolio-1.jpg";

function Projects() {
  return (
    <div className="project component__space">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
