import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo-haski.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  return (
    <div className="header">
      <div className="section__container">
        <div className="header-wrp">
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
          <div className="hamburger">
            <FaBars size={20} className="hamburger-lines" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
