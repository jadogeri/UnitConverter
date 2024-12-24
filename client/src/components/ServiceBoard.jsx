import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceBoard = (props) => {
 const {time, temperature, geometry, cooking } = props.data
  return (
    <div className="w3-half">
      <div className="w3-card white">
        <div className="w3-container w3-indigo">
          <h3>{props.title}</h3>
        </div>

        <ul className="w3-ul w3-border-top">

        <ServiceCard name="Time"  total={time}/>
        <ServiceCard name="Temperature" total={temperature} />
        <ServiceCard name="Geometry" total={geometry}/>
        <ServiceCard name="Cooking" total={cooking} />


        </ul>
        <div className="w3-container w3-indigo w3-large"><span className="w3-right"></span></div>
      </div>
    </div>

  )
}

export default ServiceBoard
