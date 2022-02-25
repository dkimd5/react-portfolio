import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";
import waxomImg from "../../images/project-waxom-img.jpg";
import messengerImg from "../../images/project-messenger-img.jpg";
import firegramImg from "../../images/project-firegram-img.jpg";

const projectList = [
  {
    name: "Waxom",
    deployLink: "https://dkimd5.github.io/Waxom/",
    githubLink: "https://github.com/dkimd5/Waxom",
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
    deployLink: "https://react-messenger-dkimd5.herokuapp.com/",
    githubLink: "https://github.com/dkimd5/React-GB",
    image: messengerImg,
    description:
      "This app was my first time I touched React, I decided to make a little messenger, it's not a lot of functionality, but I am still working on it. ",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-javascript-plain colored",
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
    deployLink: "https://react-app-firegram.herokuapp.com/",
    githubLink: "https://github.com/dkimd5/firegram",
    image: firegramImg,
    description:
      "Upload and enjoy your favourite arts, photos and images to this art gallery. Made with ReactJS and Firebase, also added infinite scroll function for your comfort",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-javascript-plain colored",
      "devicon devicon-react-original colored",
      "devicon devicon-firebase-plain colored",
    ],
  },
];

function Projects() {
  return (
    <div className="projects component__space" id="Projects">
      <div className="section__container">
        <h1 className="heading">My Projects</h1>
        <h2 className="heading">
          A Selection of stuff I've built or took part. There is not all works,
          some are still in process, I will update this list in future
        </h2>
        <div className="projects__wrapper">
          {projectList.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
