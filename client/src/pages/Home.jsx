import React, {useState, useContext} from 'react';
import { Context as AuthContext } from '../context/AuthContext'


const Home = () => {
  const { signin, state ,token} = useContext(AuthContext)

  return (
    <>
      <div style={{   backgroundColor: "pink",//padding: 10,
      }}>home 1 </div>
      <p>{JSON.stringify(state)}</p>
     
    </>
  );
}

export default Home;
