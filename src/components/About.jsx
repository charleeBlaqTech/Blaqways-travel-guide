import React,  { Fragment } from 'react';
import NavBar from './NavBar';
import "./AboutStyles.css"
import bgImage from "./images/travelfamily2.jpg"
import AboutImage1 from "./images/passportbag1.jpg"
import AboutImage2 from "./images/passportglobe1.jpg"

const About = () => {
  return (
    <Fragment>
        <section id='about'>
          <NavBar/>
          <img src={bgImage} alt="" />
          <div className="image-text">
            <h1>ABOUT US</h1>
          </div>
          <div className="about-section-contents-wrapper">
            <div className="about-section-text">
                <h3>About Us</h3>
                <p>BlawWays Travel Guide (BTG) is the flagship digital consumer brand within the Nigeria Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 2year anniversary in 2023.The BTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. Updated every day by a dedicated global editorial team, the portal logs 1 million+ unique users monthly.</p>
            </div>
            <div className="about-section-images">
              <img src={AboutImage1} alt="" />
              <img src={AboutImage2} alt="" />
            </div>
          </div>
        </section>
    </Fragment>
  )
}

export default About