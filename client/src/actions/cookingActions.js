import api  from "../configs/axios"
import { ACTION_TYPES } from "../actionTypes/actionTypes"

const teaspoonsToTablespoonsAction = (dispatch) => {

    return async (teaspoons) => {
        try {
            const response = await api.get(`/cooking/teaspoonsToTablespoons?teaspoons=${teaspoons}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
            return result;
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const tablespoonsToTeaspoonsAction = (dispatch) => {
    return async (tablespoons) => {
        try {
            const response = await api.get(`/cooking/tablespoonsToTeaspoons?tablespoons=${tablespoons}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result})
            return result
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}


const tablespoonsToCupsAction = (dispatch) => {

    return async (tablespoons) => {
        try {
            const response = await api.get(`/cooking/tablespoonsToCups?tablespoons=${tablespoons}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const cupsToTablespoonsAction = (dispatch) => {
    return async (cups) => {
        try {
            const response = await api.get(`/cooking/cupsToTablespoons?cups=${cups}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result})
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const ouncesToCupsAction = (dispatch) => {
    return async (ounces) => {
        try {
            const response = await api.get(`/cooking/ouncesToCups?ounces=${ounces}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload:result })
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}


const cupsToOuncesAction = (dispatch) => {
    return async (cups) => {
        try {
            const response = await api.get(`/cooking/cupsToOunces?cups=${cups}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const pintsToCupsAction = (dispatch) => {

    return async (pints) => {
        try {
            const response = await api.get(`/cooking/pintsToCups?pints=${pints}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result})
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

const cupsToPintsAction = (dispatch) => {
    return async (cups) => {
        try {
            const response = await api.get(`/cooking/cupsToPints?cups=${cups}`);
            const result = response.data
            console.log(result)
            dispatch({ type: ACTION_TYPES.UPDATE, payload: result })
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}

export const cookingActions = {
    teaspoonsToTablespoonsAction, tablespoonsToTeaspoonsAction,
    cupsToPintsAction,  pintsToCupsAction, cupsToOuncesAction,
    ouncesToCupsAction, cupsToTablespoonsAction, tablespoonsToCupsAction

}


