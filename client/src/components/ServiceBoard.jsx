import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceBoard = (props) => {
  
  return (
    <div className="w3-half">
      <div className="w3-card white">
        <div className="w3-container w3-indigo">
          <h3>{props.title}</h3>
        </div>

        <ul className="w3-ul w3-border-top">
     
        {
          props.data.map((item)=>{
            return  <ServiceCard  name={item.name} total={item.total} />

          })
        }



        </ul>
        <div className="w3-container w3-indigo w3-large"><span className="w3-right"></span></div>
      </div>
    </div>

  )
}

export default ServiceBoard
