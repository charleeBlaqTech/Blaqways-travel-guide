import React from 'react'
import { Fragment } from 'react';
import "./MoreDestinationStyles.css";
import Spain1 from "./images/spainimg1.jpg"
import Spain2 from "./images/spainimg2.jpg"
import Nigeria1 from "./images/nigeriaimg1.jpg"
import Nigeria2 from "./images/nigeriaimg2.jpg"

const MoreDestination = () => {
  return (
    <Fragment>
        <section id='MoreDestinaion'>
            <div className="more-destination-contents">
                <h3>Get inspired by travel itineries created by localtravel agents</h3>
                <p>we know finding inspiration for youy next trip can be hard-browse itineries to see what kind of trip you would like</p>
            </div>
            <div className="more-destination-img-wrapper">
                <div className="img-container">
                    <img src={Spain1} alt="" />
                    <div className="location-name">
                        <p>Barcelona, Spain</p>
                    </div>
                </div>
                <div className="img-container">
                    <img src={Spain2} alt="" />
                    <div className="location-name">
                        <p>Barcelona, Spain</p>
                    </div>
                </div>
                <div className="img-container">
                    <img src={Nigeria1} alt="" />
                    <div className="location-name">
                        <p>lagos, Nigeria</p>
                    </div>
                </div>
                <div className="img-container">
                    <img src={Nigeria2} alt="" />
                    <div className="location-name">
                        <p>lagos, Nigeria</p>
                    </div>
                </div>
                
            </div>
            <div className="moreDestination-button-wrapper">
                <button><a href="#">MORE FROM OUR BLOG &#8594;</a></button>
            </div>
        </section>
    </Fragment>
  )
}

export default MoreDestination