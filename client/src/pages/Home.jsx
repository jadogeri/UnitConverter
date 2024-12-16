import React, {useState, useContext} from 'react';
import { Context as AuthContext } from '../context/AuthContext'
import APICard from '../components/APICard';

const Home = () => {
  const {  state } = useContext(AuthContext)

  return (
    <>
    {JSON.stringify(state)}
    <div id='home' style={{height:1000,backgroundColor:"red"}}>

<div class="w3-container" style={{padding:128}} id="team">
  <h3 class="w3-center">THE API'S</h3>
  <p class="w3-center w3-large">Quickly convert to preferred unit easily</p>
  <div class="w3-row-padding w3-grayscale" style={{marginTop:64}}>
    {/* <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card">
        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style={{width:"100%"}}/>
        <div class="w3-container">
          <h3>John Doe</h3>
          <p class="w3-opacity">CEO & Founder</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      
      <div class="w3-card">
      <i class="fa fa-square w3-center" style={{width:"100%",fontSize:100}}></i>

         <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style={{width:"100%"}}/>
        <div class="w3-container">
          <h3>Anja Doe</h3>
          <p class="w3-opacity">Art Director</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card">
        <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike" style={{width:"100%"}}/>
        <div class="w3-container">
          <h3>Mike Ross</h3>
          <p class="w3-opacity">Web Designer</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card">
        <img src="https://www.w3schools.com/w3images/team4.jpg" alt="Dan" style={{width:"100%"}}/>
        <div class="w3-container">
          <h3>Dan Star</h3>
          <p class="w3-opacity">Designer</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>  */}
    <APICard src="https://www.w3schools.com/w3images/team4.jpg"
    label="TEMPERATURE" route="temperature"
    />
       <APICard src="https://www.w3schools.com/w3images/team4.jpg"
    label="GEOMETRY" route="geometry"
    />   <APICard src="https://www.w3schools.com/w3images/team4.jpg"
    label="COOKING" route="cooking"
    />   <APICard src="https://www.w3schools.com/w3images/team4.jpg"
    label="TIME" route="time"
    />

  </div>
</div>
    </div>
     
    </>
  );
}

export default Home;
