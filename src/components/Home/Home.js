import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home" id="Home">
      <div className="section__container">
        <div className="home__bg">
          {/* HOME CONTENT */}
          <div className="container">
            <div className="home__content">
              <div className="home__meta">
                <h1 className="home__text pz__10">WELCOME TO MY PAGE</h1>
                <h2 className="home__text pz__10">Hi, I'm Dmitrii Kim</h2>
                <h3 className="home__text sweet">Front-end Developer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
