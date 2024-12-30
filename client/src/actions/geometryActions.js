import api  from "../configs/axios"
import { ACTION_TYPES } from "../actionTypes/actionTypes"


const areaRectangleAction = (dispatch) => {
    return async (width, length) => {
        try {
            const response = await api.get(`/geometry/getAreaRectangle?width=${width}&length=${length}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const areaTriangleAction = (dispatch) => {
    return async (base, height) => {
        try {
            const response = await api.get(`/geometry/getAreaTriangle?base=${base}&height=${height}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}


const areaCircleAction = (dispatch) => {
    return async (radius) => {
        try {
            const response = await api.get(`/geometry/getAreaCircle?radius=${radius}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const perimeterRectangleAction = (dispatch) => {
    return async (width, length) => {
        try {
            const response = await api.get(`/geometry/getPerimeterRectangle?width=${width}&length=${length}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const  perimeterTriangleAction = (dispatch) => {
    return async (side1,side2,side3) => {
        try {
            const response = await api.get(`/geometry/getPerimeterTriangle?side1=${side1}&side2=${side2}&side3=${side3}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const  perimeterCircleAction = (dispatch) => {
    return async (radius) => {
        try {
            const response = await api.get(`/geometry/getPerimeterCircle?radius=${radius}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}


export const geometryActions = {
    areaRectangleAction, areaTriangleAction, areaCircleAction,  
    perimeterRectangleAction, perimeterTriangleAction, perimeterCircleAction

}


