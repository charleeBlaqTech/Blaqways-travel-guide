import React from 'react'
import PropsTemplate from './PropsTemplate';
import DestinatinData from './DestinatinData';
import "./DestinationStyles.css"
import Spain1 from "./images/spainimg1.jpg"
import Spain2 from "./images/spainimg2.jpg"
import Nigeria1 from "./images/nigeriaimg1.jpg"
import Nigeria2 from "./images/nigeriaimg2.jpg"

const Destination = () => {
  return (
    <section id='destination'>

      <div className='destination-heading'>
        <h1>POPULAR DESTINATION</h1>
        <hr />
      </div>
      
      <PropsTemplate
            key={DestinatinData[0].id}
            location={DestinatinData[0].country}
            description={DestinatinData[0].desc}
            cName={DestinatinData[0].classname}
            image1={Spain1}
            image2={Spain2}
      />
      <PropsTemplate
            key={DestinatinData[1].id}
            location={DestinatinData[1].country}
            description={DestinatinData[1].desc}
            cName={DestinatinData[1].classname}
            image1={Nigeria1}
            image2={Nigeria2}
      />
          
    </section>
  )
}

export default Destination