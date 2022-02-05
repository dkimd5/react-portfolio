import React from "react";
import "./Certificates.css";
import certificateReact from "../../images/CertificateReact.png";

const certificatesList = [
  {
    name: "React",
    link: "https://gb.ru/certificates/1261795.en",
    image: certificateReact,
  },
  {
    name: "React",
    link: "https://gb.ru/certificates/1261795.en",
    image: certificateReact,
  },
  {
    name: "React",
    link: "https://gb.ru/certificates/1261795.en",
    image: certificateReact,
  },
  {
    name: "React",
    link: "https://gb.ru/certificates/1261795.en",
    image: certificateReact,
  },
  {
    name: "React",
    link: "https://gb.ru/certificates/1261795.en",
    image: certificateReact,
  },
  {
    name: "React",
    link: "https://gb.ru/certificates/1261795.en",
    image: certificateReact,
  },
];

function Certificates() {
  return (
    <div className="certificates component__space" id="Certificates">
      <div className="section__container">
        <div className="heading">
          <h1 className="heading">My Certificates</h1>
          <p className="heading p__color">
            There are many variations of passages of Lorem Ipsum available
          </p>
          <p className="heading p__color">
            but the majority have suffered alteration.
          </p>
        </div>
        <div className="row">
          <div className="col__3">
            <a href="https://gb.ru/certificates/1261795.en">
              <img className="certificate__img" src={certificateReact} alt="" />
            </a>
          </div>
          <div className="col__3">
            <div className="certificates__box pointer">
              <div className="icon"></div>
              <div className="certificates__meta">
                <h1 className="certificates__text">Lorem, ipsum.</h1>
                <p className="p certificates__text p__color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam ipsum similique aspernatur, blanditiis incidunt sint
                  dolorem eligendi quia.
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="certificates__box pointer">
              <div className="icon"></div>
              <div className="certificates__meta">
                <h1 className="certificates__text">Lorem, ipsum.</h1>
                <p className="p certificates__text p__color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam ipsum similique aspernatur, blanditiis incidunt sint
                  dolorem eligendi quia.
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="certificates__box pointer">
              <div className="icon"></div>
              <div className="certificates__meta">
                <h1 className="certificates__text">Lorem, ipsum.</h1>
                <p className="p certificates__text p__color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam ipsum similique aspernatur, blanditiis incidunt sint
                  dolorem eligendi quia.
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="certificates__box pointer">
              <div className="icon"></div>
              <div className="certificates__meta">
                <h1 className="certificates__text">Lorem, ipsum.</h1>
                <p className="p certificates__text p__color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam ipsum similique aspernatur, blanditiis incidunt sint
                  dolorem eligendi quia.
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="certificates__box pointer">
              <div className="icon"></div>
              <div className="certificates__meta">
                <h1 className="certificates__text">Lorem, ipsum.</h1>
                <p className="p certificates__text p__color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam ipsum similique aspernatur, blanditiis incidunt sint
                  dolorem eligendi quia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
