import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceBoard = (props) => {

  function getRandomInt() {
    let min = 0;
    let max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let randomNumber = getRandomInt();
  console.log(randomNumber); 

  return (
    <div key={`board${props.keyValue}`}  className="w3-half">
      <div key={`card${props.keyValue}`}  className="w3-card white">
        <div key={`container${props.keyValue}`} className="w3-container w3-indigo">
          <h3 key={`service${props.key}`} >{props.title}</h3>
        </div>

        <ul className="w3-ul w3-border-top">
     
        {
          props.data.map((item)=>{
            return  <ServiceCard  name={item.name} total={item.total} keyValue={getRandomInt()} />

          })
        }

        </ul>
        <div className="w3-container w3-indigo w3-large"><span className="w3-right"></span></div>
      </div>
    </div>

  )
}

export default ServiceBoard
