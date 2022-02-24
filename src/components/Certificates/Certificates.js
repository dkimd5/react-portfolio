import React from "react";
import "./Certificates.css";
import certificateGit from "../../images/CertificateGit.jpeg";
import certificateHTMLandCSS from "../../images/CertificateHTMLandCSS.jpeg";
import certificateJS1 from "../../images/CertificateJS1.jpeg";
import certificateJS2 from "../../images/CertificateJS2.jpeg";
import certificateDB from "../../images/CertificateDatabase.jpeg";
import certificateReact from "../../images/CertificateReact.jpeg";
import loupeBtnIcon from "../../images/certificate-loupe.svg";
import externalLinkBtnIcon from "../../images/certificate-external-link.svg";

const certificatesList = [
  {
    name: "Git",
    link: "https://gb.ru/certificates/961166.en",
    image: certificateGit,
  },
  {
    name: "HTML5 & CSS3",
    link: "https://gb.ru/certificates/1060563.en",
    image: certificateHTMLandCSS,
  },
  {
    name: "JavaScript1",
    link: "https://gb.ru/certificates/1151323.en",
    image: certificateJS1,
  },
  {
    name: "JavaScript2",
    link: "https://gb.ru/certificates/1211414.en",
    image: certificateJS2,
  },
  {
    name: "Database Management",
    link: "https://gb.ru/certificates/1222062.en#",
    image: certificateDB,
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
        <h1 className="heading">My Certificates</h1>
        <h2 className="heading">
          There is not all certificates, but the most valuable of my frontend
          study
        </h2>
        <ul className="certificates__list">
          {certificatesList.map(({ name, link, image }) => (
            <li className="certificates__item">
              <img className="certificate__img" src={image} alt="" />
              <img
                className="certificate__loupe_icon"
                src={loupeBtnIcon}
                alt="loupe icon"
              />
              <a href={link} target="_blank" rel="noreferrer">
                <img
                  className="certificate__link_icon"
                  src={externalLinkBtnIcon}
                  alt="link icon"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Certificates;
