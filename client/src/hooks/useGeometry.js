import { useContext } from 'react';
import { Context as ServiceContext } from '../context/APIContext';

function useGeometry() {
  const {state,areaRectangleAction, areaTriangleAction,
    areaCircleAction,  perimeterRectangleAction, perimeterTriangleAction,
    perimeterCircleAction} = useContext(ServiceContext)

   return [state,areaRectangleAction, areaTriangleAction, areaCircleAction,  
          perimeterRectangleAction, perimeterTriangleAction, perimeterCircleAction];
}

export default useGeometry;

