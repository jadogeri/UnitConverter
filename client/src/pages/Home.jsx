import React, {useState, useContext} from 'react';
import { Context as APIContext } from '../context/APIContext'
import APICard from '../components/APICard';
import ServiceTable from '../components/ServiceTable';

const Home = () => {
  const {  state } = useContext(APIContext)

  return (
    <>
    {JSON.stringify(state)}
    <div id='home' style={{height:1000,backgroundColor:"red"}}>

<div class="w3-container" style={{padding:128}} id="team">
  <h3 class="w3-center">THE API'S</h3>
  <p class="w3-center w3-large">Quickly convert to preferred unit easily</p>
  <div class="w3-row-padding w3-grayscale" style={{marginTop:64}}>

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
    
    <hr/>
<ServiceTable />


  </div>
</div>
    </div>
     
    </>
  );
}

export default Home;


