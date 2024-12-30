import api  from "../configs/axios"
import { ACTION_TYPES } from "../actionTypes/actionTypes"


const secondsToMinutesAction = (dispatch) => {

    return async (seconds) => {
        try {
            const response = await api.get(`/time/secondsToMinutes?seconds=${seconds}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const secondsToHoursAction = (dispatch) => {

    return async (seconds) => {
        try {
            const response = await api.get(`/time/secondsToHours?seconds=${seconds}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const secondsToDaysAction = (dispatch) => {

    return async (seconds) => {
        try {
            const response = await api.get(`/time/secondsToDays?seconds=${seconds}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const secondsToYearsAction = (dispatch) => {

    return async (seconds) => {
        try {
            const response = await api.get(`/time/secondsToYears?seconds=${seconds}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const minutesToSecondsAction = (dispatch) => {

    return async (minutes) => {
        try {
            const response = await api.get(`/time/minutesToSeconds?minutes=${minutes}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const hoursToSecondsAction = (dispatch) => {

    return async (hours) => {
        try {
            const response = await api.get(`/time/hoursToSeconds?hours=${hours}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const daysToSecondsAction = (dispatch) => {

    return async (days) => {
        try {
            const response = await api.get(`/time/daysToSeconds?days=${days}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const yearsToSecondsAction = (dispatch) => {

    return async (years) => {
        try {
            const response = await api.get(`/time/yearsToSeconds?years=${years}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}


export const timeActions = {
    secondsToMinutesAction, secondsToDaysAction, secondsToHoursAction,
    secondsToYearsAction, daysToSecondsAction, minutesToSecondsAction,
    hoursToSecondsAction, yearsToSecondsAction

}

