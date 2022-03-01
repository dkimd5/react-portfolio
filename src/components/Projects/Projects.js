import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";
import waxomImg from "../../assets/project-waxom-img.jpg";
import messengerImg from "../../assets/project-messenger-img.jpg";
import firegramImg from "../../assets/project-firegram-img.jpg";
import momentumImg from "../../assets/project-momentum-img.jpeg";
import defiImg from "../../assets/project-defi.jpg";

const projectList = [
  {
    name: "Waxom",
    deployLink: "https://dkimd5.github.io/Waxom/",
    githubLink: "https://github.com/dkimd5/Waxom",
    image: waxomImg,
    description: "One of my first work, made only with HTMl and CSS. Check out slider at the top)",
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
  {
    name: "Momentum",
    deployLink: "https://dkimd5.github.io/momentum-clone/",
    githubLink: "https://github.com/dkimd5/momentum-clone",
    image: momentumImg,
    description:
      "A small react app based on google momentum, made with weather, random quotes apis and axios",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-javascript-plain colored",
      "devicon devicon-react-original colored",
      "devicon fas fa-cogs",
    ],
  },
  {
    name: "DeFi Crypto App",
    deployLink: "https://dkimd5.github.io/react-defi-crypto-app/",
    githubLink: "https://github.com/dkimd5/react-defi-crypto-app",
    image: defiImg,
    description:
      "React app, made with crypto API CoinGecko. You can see top six cryptocurrencies and how they changing.",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-javascript-plain colored",
      "devicon devicon-react-original colored",
      "devicon fas fa-cogs",
    ],
  },
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
          A Selection of stuff I've built or took part. There is not all works, some are still in
          process, I will update this list in future
        </h2>
        <div className="projects__wrapper">
          {projectList.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="projects__h3__wrp">
          <h3>You also can check this repositories</h3>
          <p className="additional">
            Repository of <a href="https://github.com/dkimd5/react-portfolio">this page</a>
          </p>
          <p className="additional">
            And a project made by team of five, two backend and three frontend developers. It is
            online book of recipes, with authentication and flexible search. You can look it{" "}
            <a href="https://github.com/MaxLebedinsky/CookBook">here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
