import React, { Fragment } from 'react'
import NavBar from './NavBar'
import "./ExploreDestinationsStyles.css";
import Spain1 from "./images/spainimg1.jpg"
import Spain2 from "./images/spainimg2.jpg"
import Nigeria1 from "./images/nigeriaimg1.jpg"
import Nigeria2 from "./images/nigeriaimg2.jpg";
import Italy1 from "./images/italyimg1.jpg"
import France2 from "./images/franceimg2.jpg"
import Kenya1 from "./images/kenyaimg1.jpg"
import Sierra2 from "./images/sierraleoneimg2.jpg"
import Madrid1 from "./images/spainmadrid2.jpg"
import Madrid2 from "./images/spainmadrid1.jpg"
import Kenya2 from "./images/kenyaimg2.jpg"
import Sierra1 from "./images/sierraleoneimg1.jpg"


const Service = () => {
  return (
    <Fragment>
    <section id='MoreDestinaion'>
      <NavBar/>
        <div className="more-destination-contents">
            <h3>GALLERY OF SOME AZMAZING DESTINATIONS</h3>
            <p>we know finding inspiration for youy next trip can be hard below are some amazing destinations explore to see what kind of trip you would like</p>
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
            <div className="img-container">
                <img src={Italy1} alt="" />
                <div className="location-name">
                    <p>Roma, Italy</p>
                </div>
            </div>
            <div className="img-container">
                <img src={Kenya1} alt="" />
                <div className="location-name">
                    <p>Nairobi, Kenya</p>
                </div>
            </div>
            <div className="img-container">
                <img src={France2} alt="" />
                <div className="location-name">
                    <p>Paris, France</p>
                </div>
            </div>
            <div className="img-container">
                <img src={Sierra2} alt="" />
                <div className="location-name">
                    <p>Freetown, Sierra Leone</p>
                </div>
            </div>
            <div className="img-container">
                <img src={Kenya2} alt="" />
                <div className="location-name">
                    <p>Nairobi, Kenya</p>
                </div>
            </div>
            <div className="img-container">
                <img src={Madrid1} alt="" />
                <div className="location-name">
                    <p>Madrid, Spain</p>
                </div>
            </div>
            <div className="img-container">
                <img src={Madrid2} alt="" />
                <div className="location-name">
                    <p>Madrid, Spain</p>
                </div>
            </div>
            <div className="img-container">
                <img src={Sierra1} alt="" />
                <div className="location-name">
                    <p>Freetown, Sierra Leone</p>
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

export default Service