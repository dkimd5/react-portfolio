import React from "react";
import footerImg from "../../images/logo(1).png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="section__container d__flex align__items__center justify__content__space__between pz-10">
        <img src={footerImg} alt="" className="footer__img pointer" />
        <span className="copyright">Kim Dmitrii</span>
      </div>
    </div>
  );
}

export default Footer;
