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
          {certificatesList.map(({ name, link, image }) => (
            <div className="col__3">
              <a href={link}>
                <img className="certificate__img" src={image} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;
