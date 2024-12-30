import React from 'react'
import CollapsibleOneInputField from '../components/CollapsibleOneInputField'
import CollapsibleTwoInputFields from '../components/CollapsibleTwoInputFields'
import CollapsibleThreeInputFields from '../components/CollapsibleThreeInputFields'
import { CONVERSION_TYPES } from '../data/conversionText'
import Spacer from '../components/Spacer'
import useGeometry from '../hooks/useGeometry'


const Geometry = () => {
const [areaRectangleAction, areaTriangleAction, areaCircleAction,  
  perimeterRectangleAction, perimeterTriangleAction, perimeterCircleAction
]
   = useGeometry();

  return (
    <>
    <Spacer marginTop={40} marginBottom={40}/>

    <div id='geometry'></div>
    <hr/>
    <div style={{   margin:45,   backgroundColor:"#484464"}}>
    <h3 style={{alignSelf:"center",display:"flex",justifyContent:"center",color:"white"}}>GEOMETRY</h3>
<div style={{   margin:45,  backgroundColor:"green"}}>
<CollapsibleTwoInputFields title="Calculate Area of Rectangle" id="geometry1"
                  conversionText={CONVERSION_TYPES.GEOMETRY.AREA_OF_RECTANGLE}
                  handler={areaRectangleAction} service="geometry" field1="Width" field2="length"
/>
<CollapsibleTwoInputFields title="Calculate Area of Triangle" id="geometry2"
                  conversionText={CONVERSION_TYPES.GEOMETRY.AREA_OF_TRIANGLE}
                  handler={areaTriangleAction} service="geometry" field1="base" field2="height"
/>
<CollapsibleOneInputField title="Calculate Area of Circle" id="geometry3"
                  conversionText={CONVERSION_TYPES.GEOMETRY.AREA_OF_CIRCLE}
                  handler={areaCircleAction} service="geometry" 
/>
<CollapsibleTwoInputFields title="Calculate Perimeter of Rectangle" id="geometry4"
                  conversionText={CONVERSION_TYPES.GEOMETRY.PERIMETER_OF_RECTANGLE}
                  handler={perimeterRectangleAction} service="geometry"field1="Width" field2="length"
/>
<CollapsibleThreeInputFields title="Calculate Perimeter of Triangle" id="geometry5"
                  conversionText={CONVERSION_TYPES.GEOMETRY.PERIMETER_OF_TRIANGLE}
                  handler={perimeterTriangleAction} service="geometry" field1="side1" field2="side2" field3="side3" 
/>
<CollapsibleOneInputField title="Calculate Perimeter of Circle" id="geometry6"
                  conversionText={CONVERSION_TYPES.GEOMETRY.PERIMETER_OF_CIRCLE}
                  handler={perimeterCircleAction} service="geometry"
/>
</div>
</div>
<Spacer marginTop={40} marginBottom={40}/>
  </>
  )
}

export default Geometry

