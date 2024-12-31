import React from 'react'
import {RotatingLines} from "react-loader-spinner"


const Loader = (props) => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <RotatingLines 
        strokeColor={props.strokeColor} strokeWidth={props.strokeWidth} animationDuration='0.75'
        width={props.width} visible="true"   
    
    />
    </div>
  )
}

export default Loader