import React from 'react'
import { useNavigate } from 'react-router-dom'

const APICard = (props) => {
    const navigate = useNavigate();
  return (
    <div class="w3-col l3 m6 w3-margin-bottom">
    <div class="w3-card">
      <img src={props.src} alt="Dan" style={{width:"100%"}}/>
      <div class="w3-container">
        <h3>{props.label}</h3>
        <p class="w3-opacity"></p>
        <p>{props.description}</p>
        <p><button onClick={()=>{navigate(`/${props.route}`)}}
        
        class="w3-button w3-light-grey w3-block"><i class="fa fa-arrow-right"></i>START</button></p>
      </div>
    </div>
  </div>
  )
}

export default APICard