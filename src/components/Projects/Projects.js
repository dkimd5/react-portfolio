import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";
import waxomImg from "../../images/project-waxom-img.jpg";
import messengerImg from "../../images/project-messenger-img.jpg";
import firegramImg from "../../images/project-firegram-img.jpg";

const projectList = [
  {
    name: "Waxom",
    deployLink: "",
    githubLink: "",
    image: waxomImg,
    description:
      "One of my first work, made only with HTMl and CSS. Check out slider at the top)",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-less-plain-wordmark colored",
    ],
  },
  {
    name: "Messenger",
    deployLink: "",
    githubLink: "",
    image: messengerImg,
    description:
      "This app was my first time I touched React, I decided to make a little messenger, it's not a lot of functionality, but I am still working on it. ",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-sass-original colored",
      "devicon devicon-webpack-plain colored",
      "devicon devicon-react-original colored",
      "devicon devicon-redux-original colored",
      "devicon devicon-materialui-plain colored",
    ],
  },
  // {
  //   name: "CookBook",
  //   deployLink: "",
  //   githubLink: "",
  //   image: "",
  // },
  {
    name: "Firegram",
    deployLink: "",
    githubLink: "",
    image: firegramImg,
    description:
      "Upload and enjoy your favourite arts, photos and images to this art gallery. Made with ReactJS and Firebase, also added infinite scroll function for your comfort",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-react-original colored",
      "devicon devicon-firebase-plain colored",
    ],
  },
];

function Projects() {
  return (
    <div className="projects component__space" id="Projects">
      <div className="section__container">
        <div className="heading">
          <h1 className="heading">My Latest Projects</h1>
          <p className="heading p__color">
            A Selection of stuff I've built or took part
          </p>
        </div>
        <div className="projects__wrapper">
          {projectList.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        {/* <div className="row">
          {projectsList.map(({ name, deployLink, githubLink, image }) => (
            <div className="col__3">
              <div className="project__box">
                <div className="project__box__img">
                  <div className="project__img__box">
                    <img src={image} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                  <div className="project__meta">
                    <h5 className="project__text">Development</h5>
                    <h4 className="project__text">{name}</h4>
                    <a href="#" className="project__btn">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
