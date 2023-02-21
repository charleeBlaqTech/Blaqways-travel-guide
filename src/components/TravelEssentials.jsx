import React, { Fragment } from 'react';
import "./TravelEssentialsStyles.css";



const TravelEssentials = () => {
  return (
    <Fragment>
        <section id='essentials'>
            <div className="essentials-row1">
                <p>Planning on Your Own?</p>
                <h6>prepare for your Trip</h6>
                <p>Use BlaqWays Guide's Trusted Partners For Great Rates</p>
            </div>
            <div className="essentials-row2">
                <div className="essentials-package-container">
                    <i class="fa fa-fighter-jet" aria-hidden="true"></i>
                    <h4>Flights</h4>
                </div>
                <div className="essentials-package-container">
                    <i class="fa fa-bed" aria-hidden="true"></i>
                    <h4>Accommodation</h4>
                </div>
                <div className="essentials-package-container">
                    <i class="fa fa-car" aria-hidden="true"></i>
                    <h4>Rent A Car</h4>
                </div>
                <div className="essentials-package-container">
                    <i class="fa fa-hourglass-start" aria-hidden="true"></i>
                    <h4>Experiences</h4>
                </div>
                <div className="essentials-package-container">
                    <i class="fa fa-university" aria-hidden="true"></i>
                    <h4>Insurance</h4>
                </div>
            </div>
            <div className="essentials-button-container">
                <button><a href="#">Eplore Services &#8594;</a></button>
            </div>
        </section>
    </Fragment>
  )
}

export default TravelEssentials