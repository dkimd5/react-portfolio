import React from "react";
import "./Projects.css";
import Project1 from "../../images/portfolio-1.jpg";
import Project2 from "../../images/portfolio-2.jpg";
import Project3 from "../../images/portfolio-3.jpg";
import Project4 from "../../images/portfolio-4.jpg";

const projectsList = [
  {
    name: "Waxom",
    deployLink: "",
    githubLink: "",
    image: Project1,
  },
  {
    name: "",
    deployLink: "",
    githubLink: "",
    image: Project2,
  },
  {
    name: "",
    deployLink: "",
    githubLink: "",
    image: Project3,
  },
  {
    name: "",
    deployLink: "",
    githubLink: "",
    image: Project4,
  },
  {
    name: "",
    deployLink: "",
    githubLink: "",
    image: Project3,
  },
  {
    name: "",
    deployLink: "",
    githubLink: "",
    image: Project4,
  },
];

function Projects() {
  return (
    <div className="project component__space" id="Projects">
      <div className="section__container">
        <div className="heading">
          <h1 className="heading">My Latest Projects</h1>
          <p className="heading p__color">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="row">
          <div className="col__3">
            <div className="project__box">
              <div className="project__box__img">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box">
              <div className="project__box__img">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box">
              <div className="project__box__img">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box">
              <div className="project__box__img">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box">
              <div className="project__box__img">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box">
              <div className="project__box__img">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="view__more__btn">
            <button className="view__more btn">View more</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
