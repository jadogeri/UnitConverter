const teaspoonsToTablespoonsAction = (dispatch) => {
    return async () => {
        try {
   
        } catch (e) {
            console.log('expired token')
            localStorage.removeItem('token');
            dispatch({ type: 'RESET' });

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

export const timeActions = {
    teaspoonsToTablespoonsAction, tablespoonsToTeaspoonsAction,
    cupsToPintsAction,  pintsToCupsAction, cupsToOuncesAction,
    ouncesToCupsAction, cupsToTablespoonsAction, tablespoonsToCupsAction


}