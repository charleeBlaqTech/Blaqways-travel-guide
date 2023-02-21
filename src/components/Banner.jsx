import React, { Fragment } from 'react';
import "./BannerStyles.css";







const Banner = () => {
  return (
    <Fragment>
        <section id="banner">
            <div className="banner-display-contents-container">
                <h5>Ready to discover</h5>
                <h5>tailor-made travel ?</h5>
                <p>Get support from our local experts for stress-free planning & worry-free travels.</p>
                <div className="banner-btn-wrapper">
                    <button><a href="#">PLAN MY TRIP &#8594;</a></button>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Banner