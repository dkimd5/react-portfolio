import React from 'react';
import './About.css';
import aboutImg from '../img/aboutImg.jpg'

function About() {
  return (
        <div className='about component__space'>
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={aboutImg} alt="" className='about__img' />
                    </div>
                    <div className="col__2">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
