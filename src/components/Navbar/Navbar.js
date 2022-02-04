import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo-haski.png";

function Navbar() {
  //fixed Header
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active", window.scrollY > 0);
  });

  //Toggle menu
  const [show, setShow] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__container section__container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navigation">
          <ul className="navbar__list">
            <li className="nav__items">
              <a href="#Home">Home</a>
            </li>
            <li className="nav__items">
              <a href="#About">About</a>
            </li>
            <li className="nav__items">
              <a href="#Services">Services</a>
            </li>
            <li className="nav__items">
              {" "}
              <a href="#Projects">Projects</a>
            </li>
            <li className="nav__items">
              <a href="#Blog">Blog</a>
            </li>
            <li className="nav__items">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* Toggle menu */}
        <div className="toggle__menu">
          <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-justify white pointer"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        {show ? (
          <div className="sideNavbar">
            <ul className="sideNavbar__list">
              <li className="sideNavbar__item">
                <a href="#Home">Home</a>
              </li>
              <li className="sideNavbar__item">
                <a href="#About">About</a>
              </li>
              <li className="sideNavbar__item">
                <a href="#Services">Services</a>
              </li>
              <li className="sideNavbar__item">
                <a href="#Projects">Projects</a>
              </li>
              <li className="sideNavbar__item">
                <a href="#Blog">Blog</a>
              </li>
              <li className="sideNavbar__item">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
