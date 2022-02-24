import React from "react";
import "./Certificates.css";
import certificateGit from "../../images/CertificateGit.jpeg";
import certificateHTMLandCSS from "../../images/CertificateHTMLandCSS.jpeg";
import certificateJS1 from "../../images/CertificateJS1.jpeg";
import certificateJS2 from "../../images/CertificateJS2.jpeg";
import certificateDB from "../../images/CertificateDatabase.jpeg";
import certificateReact from "../../images/CertificateReact.jpeg";
import CertificateCard from "./CertificateCard/CertificateCard";

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
          {certificatesList.map((certificate) => (
            <CertificateCard certificate={certificate} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Certificates;
