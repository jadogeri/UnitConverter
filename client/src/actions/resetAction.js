import { ACTION_TYPES } from "../actionTypes/actionTypes"


const resetResultAction = (dispatch) => {

    return async () => {
        try {

            dispatch({ type: ACTION_TYPES.RESET})
    
        } catch (err) {
            dispatch({ type: 'ERROR', payload: "Something went wrong" })
        }
    
    }
}


export { resetResultAction }
