import React from 'react'
import { w3_open } from '../utils/htmlUtil/w3_open';
import { useNavigate } from 'react-router-dom'


const NavBar = () => {

  const auth = JSON.parse(localStorage.getItem("AUTHKEY"));
  return (
    <div style={{backgroundColor :"black"}} >
    <div className="w3-top" style={{backgroundColor :"black"}}>
    <div className="w3-bar w3-black w3-card" id="myNavbar" style={{backgroundColor :"black"}}>
    {/* <img className="w3-bar w3-black w3-card"
    style={{backgroundColor :"green",width:100,height:200}} src={require("../assets/villainImages/PredatorHome.jpg")}/> */}

      <a href="#home" className="w3-bar-item w3-button w3-wide" style={{backgroundColor :"red"}}
     >
        {/* <img src={require("../assets/villainImages/PredatorHome.jpg")} className="w3-bar-item w3-button w3-wide"  alt="logo"  /> */}
        logo
      </a>
      {/* Right-sided navbar links */}
      <div className="w3-right w3-hide-small tab" style={{backgroundColor :"black"}}>
      <a href="/time" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
       //onClick={(event)=>{openTab(event, 'game') }}
       >
         <i className="fa fa-gamepad" style={{backgroundColor :"green"}}/> TIME
        </a>
        <a href="/temperature" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        //onClick={(event)=>{openTab(event, 'about');closeAllViews();}}
        >
           <i className="fa fa-regular fa-exclamation" style={{backgroundColor :"green"}}/>TEMPERATURE
        </a>

        <a href="/geometry" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        //onClick={(event)=>{openTab(event, 'credits');closeAllViews();}}
        >
          <i className="fa fa-th" style={{backgroundColor :"green"}}/> GEOMETRY
        </a>
        <a href="/cooking" className="w3-bar-item w3-button tablinks" style={{backgroundColor :"green"}}
        //onClick={(event)=>{openTab(event, 'contact');closeAllViews();}}
        >
          <i className="fa fa-envelope" style={{backgroundColor :"green"}} /> COOKING
        </a>
    
      </div>
      {/* Hide right-floated links on small screens and replace them with a menu icon */}
      <a
        //href="javascript:void(0)"
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

