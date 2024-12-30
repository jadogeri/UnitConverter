import React from 'react'
import { w3_open } from '../utils/htmlUtil/w3_open';

const NavBar = () => {

  return (
    <div style={{backgroundColor :"black"}} >
    <div className="w3-top" style={{backgroundColor :"black"}}>
    <div className="w3-bar w3-black w3-card" id="myNavbar" style={{backgroundColor :"black"}}>
  
      <a href="/" className="w3-bar-item w3-button w3-wide" style={{backgroundColor :"red"}} >
        Home
      </a>
      {/* Right-sided navbar links */}
      <div className="w3-right w3-hide-small tab" style={{backgroundColor :"black"}}>
      <a href="/time" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
       >
         <i style={{backgroundColor :"green"}}/> TIME
        </a>
        <a href="/temperature" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        >
           <i  style={{backgroundColor :"green"}}/>TEMPERATURE
        </a>

        <a href="/geometry" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        >
          <i style={{backgroundColor :"green"}}/> GEOMETRY
        </a>
        <a href="/cooking" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        >
          <i style={{backgroundColor :"green"}} /> COOKING
        </a>
    
      </div>
      {/* Hide right-floated links on small screens and replace them with a menu icon */}
      <a
        className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
        onClick={()=>{w3_open()}}
      >
        <i className="fa fa-bars" />
      </a>
    </div>
  </div>
  </div>
  )
}

export default NavBar

