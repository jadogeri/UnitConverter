import React from 'react'
import { w3_close } from '../utils/htmlUtil/w3_close'
import { useNavigate } from 'react-router-dom'
import { w3_open } from '../utils/htmlUtil/w3_open';

const SideBar = () => {
 
  const navigate = useNavigate();
  return (
    <nav
    className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
    style={{ display: "none" }}
    id="mySidebar"
  >
    <a
      //href="javascript:void(0)"
      onClick={()=>{w3_close()

      }}
      className="w3-bar-item w3-button w3-large w3-padding-16 "
    
    >
      Close ×
    </a>
    <a  className="w3-bar-item w3-button tablinks" href="/cooking">
      COOKING
    </a>

    <a    className="w3-bar-item w3-button tablinks"  href="/temperature"
    >
      TEMPERATURE
    </a>
    <a  className="w3-bar-item w3-button tablinks" href="/time">
      TIME
    </a>
    <a   className="w3-bar-item w3-button tablinks" href="/geometry">
      GEOMETRY
    </a>


  </nav>
  
  )
}

export default SideBar