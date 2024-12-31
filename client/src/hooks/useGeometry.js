import { useContext } from 'react';
import { Context as ServiceContext } from '../context/APIContext';

function useGeometry() {
  const {areaRectangleAction, areaTriangleAction,
    areaCircleAction,  perimeterRectangleAction, perimeterTriangleAction,
    perimeterCircleAction} = useContext(ServiceContext)

   return [areaRectangleAction, areaTriangleAction, areaCircleAction,  
          perimeterRectangleAction, perimeterTriangleAction, perimeterCircleAction];
}

export default useGeometry;

