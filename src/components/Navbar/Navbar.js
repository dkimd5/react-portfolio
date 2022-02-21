import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo-haski.png";

function Navbar() {
  return (
    <div className="header">
      <div className="section__container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className="nav-menu">
          <li className="nav__items">
            <a href="#Home">Home</a>
          </li>
          <li className="nav__items">
            <a href="#About">About</a>
          </li>
          <li className="nav__items">
            <a href="#Projects">Projects</a>
          </li>
          <li className="nav__items">
            <a href="#Certificates">Certificates</a>
          </li>
          <li className="nav__items">
            <a href="#Skills">Skills</a>
          </li>
          <li className="nav__items">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
