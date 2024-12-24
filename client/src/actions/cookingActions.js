import api  from "../configs/axios"


const teaspoonsToTablespoonsAction = (dispatch) => {

    return async (teaspoons) => {
        try {
            alert("calling teaspoon to tablespoon action")

            alert("teaspoon === ",teaspoons)

            console.log('teaspoons: ' + teaspoons)

            const response = await api.get(`/cooking/teaspoonsToTablespoons?teaspoons=${20}`);
            const result = response.data
            console.log(result)

            dispatch({ type: 'COOKING', payload: {result:result, cooking:1 } })
    
        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign in" })
        }
    
    }
}

const tablespoonsToTeaspoonsAction = (dispatch) => {
    return async () => {
        try {
   
        } catch (e) {
            console.log('expired token')
            localStorage.removeItem('token');
            dispatch({ type: 'RESET' });

        }
    }
}


const tablespoonsToCupsAction = (dispatch) => {
    return async () => {
        try {
   
        } catch (e) {
            console.log('expired token')
            localStorage.removeItem('token');
            dispatch({ type: 'RESET' });

        }
    }
}

const cupsToTablespoonsAction = (dispatch) => {
    return async () => {
        try {
   
        } catch (e) {
            console.log('expired token')
            localStorage.removeItem('token');
            dispatch({ type: 'RESET' });

        }
    }
}

const ouncesToCupsAction = (dispatch) => {
    return async () => {
        try {
   
        } catch (e) {
            console.log('expired token')
            localStorage.removeItem('token');
            dispatch({ type: 'RESET' });

        }
    }
}

const cupsToOuncesAction = (dispatch) => {
    return async () => {
        try {
   
        } catch (e) {
            console.log('expired token')
            localStorage.removeItem('token');
            dispatch({ type: 'RESET' });

        }
    }
}

const pintsToCupsAction = (dispatch) => {

return async () => {
    try {

    } catch (e) {
        console.log('expired token')
        localStorage.removeItem('token');
        dispatch({ type: 'RESET' });

    }
}
}

const cupsToPintsAction = (dispatch) => {
    return async () => {
        try {

        } catch (e) {
            console.log('expired token')
            localStorage.removeItem('token');
            dispatch({ type: 'RESET' });

        }
    }
}

export const cookingActions = {
    teaspoonsToTablespoonsAction, tablespoonsToTeaspoonsAction,
    cupsToPintsAction,  pintsToCupsAction, cupsToOuncesAction,
    ouncesToCupsAction, cupsToTablespoonsAction, tablespoonsToCupsAction


}


