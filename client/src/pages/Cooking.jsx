import { useContext,useState } from 'react'
import React from 'react'
import { Context as APIContext} from "../context/APIContext"

import { handleAccordion } from '../utils/handleAccordion'


const Cooking = () => {
  const [data, setData]= useState(0);
const {state, teaspoonsToTablespoonsAction} = useContext(APIContext)


const handleAction = (teaspoons)=>{
  let t = 40
  alert(`teaspoon in handle action === ${t}`)
  teaspoonsToTablespoonsAction(t)
}
  return (
    <>
    <div id='cooking'>Cooking</div>
    <hr/>
    <h1>{JSON.stringify(state)} </h1>
    <h1>{JSON.stringify(data)} </h1>
<button onClick={()=>{handleAction(20)}}>press me</button>
<h2 className="w3-center">Accordions</h2>
<button onClick={()=>{handleAccordion('Demo1')}} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Open Section 1</button>
<div id="Demo1" className="w3-hide">
  <div className="w3-container">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>
<button onClick={()=>{handleAccordion('Demo2')}} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Open Section 2</button>
<div id="Demo2" className="w3-hide">
  <a href="#" className="w3-button w3-block w3-left-align">Link 1</a>
  <a href="#" className="w3-button w3-block w3-left-align">Link 2</a>
  <a href="#" className="w3-button w3-block w3-left-align">Link 3</a>
</div>
<button onClick={()=>{handleAccordion('Demo3')}} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Open Section 3</button>
<div id="Demo3" className="w3-hide w3-black">
  <div className="w3-container">
    <p>Accordion with Images:</p>
    <img src="img_snowtops.jpg" style={{"width":"30%"}} className="w3-animate-zoom"/>
    <p>French Alps</p>
  </div>
</div>
    </>
  )
}

export default Cooking