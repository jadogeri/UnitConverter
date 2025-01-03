import React  from 'react';
import APICard from '../components/APICard';
import ServiceTable from '../components/ServiceTable';

const Home = () => {

  return (
    <>
      <div id='home' style={{backgroundColor:"red",display:"flex"}}>

        <div class="w3-container" style={{padding:128}} id="team">
          <h3 class="w3-center">THE API'S</h3>
          <p class="w3-center w3-large">Quickly convert to preferred unit easily</p>
          <div class="w3-row-padding w3-grayscale" style={{marginTop:64}}>

              <APICard src="./api.jpg"
                          label="TEMPERATURE" route="temperature" />
              <APICard src="./api.jpg"
                          label="GEOMETRY" route="geometry" />
              <APICard src="./api.jpg"
                          label="COOKING" route="cooking" />
              <APICard src="./api.jpg"
                          label="TIME" route="time" />
            
              <hr/>
            <ServiceTable />

          </div>
        </div>
      </div>
     
    </>
  );
}

export default Home;


