import api  from "../configs/axios"
import { ACTION_TYPES } from "../actionTypes/actionTypes"

const celciusToFahrenheitAction = (dispatch) => {

    return async (celcius) => {
        try {
            const response = await api.get(`/temperature/celciusToFahrenheit?celcius=${celcius}`);
            const result = response.data
            console.log(result)
            alert(result)
            dispatch({ type: ACTION_TYPES.TEMPERATURE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const celciusToKelvinAction = (dispatch) => {
    return async (celcius) => {
        try {
            const response = await api.get(`/temperature/celciusToKelvin?celcius=${celcius}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.TEMPERATURE, payload: result})
            return result
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const kelvinToFahrenheitAction = (dispatch) => {

    return async (kelvin) => {
        try {
            const response = await api.get(`/temperature/kelvinToFahrenheit?kelvin=${kelvin}`);
            const result = response.data
            console.log(result)
            alert(result)
            dispatch({ type: ACTION_TYPES.TEMPERATURE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const fahrenheitToKelvinAction = (dispatch) => {
    return async (fahrenheit) => {
        try {
            const response = await api.get(`/temperature/fahrenheitToKelvin?fahrenheit=${fahrenheit}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.TEMPERATURE, payload: result})
            return result
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const kelvinToCelciusAction = (dispatch) => {

    return async (kelvin) => {
        try {
            const response = await api.get(`/temperature/kelvinToCelcius?kelvin=${kelvin}`);
            const result = response.data
            console.log(result)
            alert(result)
            dispatch({ type: ACTION_TYPES.TEMPERATURE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const fahrenheitToCelciusAction = (dispatch) => {
    return async (fahrenheit) => {
        try {
            const response = await api.get(`/temperature/fahrenheitToCelcius?fahrenheit=${fahrenheit}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.TEMPERATURE, payload: result})
            return result
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

export const temperatureActions = {
    kelvinToCelciusAction, kelvinToFahrenheitAction,celciusToFahrenheitAction,
    celciusToKelvinAction,fahrenheitToCelciusAction,fahrenheitToKelvinAction

}

