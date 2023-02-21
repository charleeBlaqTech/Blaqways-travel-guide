import React from 'react'
import "./DestinationStyles.css"

const PropsTemplate = (props) => {
  return (
    <div className={props.cName}>
        <div className="destination-section-text">
            <h3>{props.location}</h3>
            <p>{props.description}</p>
        </div>
        <div className="destination-section-images">
          <img src={props.image1} alt="" />
          <img src={props.image2} alt="" />
        </div>
    </div>
  )
}

export default PropsTemplate