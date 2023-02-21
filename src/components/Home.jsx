import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import Destination from './Destination';
import MoreDestination from './MoreDestination';
import TravelEssential from './TravelEssentials';
import Banner from './Banner';
import bgImage from "./images/spainmadrid1.jpg";
import "./HomeStyles.css";


const Home = () => {
  return (

    <Fragment>
        <section id='home'>
        <NavBar />
            <img src={bgImage} alt="" />
          <div className='hero-section-content'>
            <h1>YOUR <span>JOURNEY</span> IS YOUR <span>STORY.</span></h1>
            <p>choose your destination & we will make it a reality.</p>
            <button><Link to="/explore">PLAN MY TRIP &#8594;</Link></button>
          </div>
        </section>
        <Destination/>
        <MoreDestination/>
        <TravelEssential/>
        <Banner/>
    </Fragment>
   
  )
}

export default Home