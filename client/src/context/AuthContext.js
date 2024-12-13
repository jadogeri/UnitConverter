import createDataContext from "./createDataContext";

const initialState = { cooking : 0, temperature: 0, time : 0, geometry: 0, isLoading: true}

const authReducer = (state, action) => {
    switch (action.type) {

        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'RESET':
            return { ...state, errorMessage: 'joseph signed in', isLoggedIn: false, username: null, email: null, id: null, isLoading: false }

        case 'TEMPERATURE':
            return { ...state, temperature : action.payload, isLoading: false }

        default: return state;
    }
}

// if (Date.now() >= exp * 1000) {
//     return false;
//   }

const tryLocalSignin = (dispatch) => {
    return async () => {
        try {
            const token = localStorage.getItem('token')
            if (token) {

                //dispatch({ type: 'SIGN_IN', payload: token })
                //navigate to main flow navigate('TrackList')

                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                console.log(token)
                const responseUser =  {data : []} //await authApi.get('/users/current', config);
                console.log("line 123 auth after getting current user === ", JSON.stringify(responseUser))
                const currentUsername = responseUser.data.username
                const currentEmail = responseUser.data.email
                const currentId = responseUser.data.id
                console.log("current username === " + currentUsername + "\ncurrent email === " + currentEmail + "\ncurrent id === " + currentId)
                dispatch({ type: 'SIGN_IN', payload: { currentUsername, currentEmail, currentId } })

            } else {
                console.log('expired token')
                localStorage.removeItem('token');
                dispatch({ type: 'RESET' });
            }
        } catch (e) {
            console.log('expired token')
            localStorage.removeItem('token');
            dispatch({ type: 'RESET' });

        }
    }
}
const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_error_messade' })
    }
}

const signup = (dispatch) => {
    return async ({ username, email, password }) => {
        try {
            //await authApi.post('/users/register', { username, email, password });

            dispatch({ type: 'SIGN_UP' })

        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign up" })
        }

    }
}

const signin = (dispatch) => {
    /**
     *       const response = await apiAuth.post('/api/users/login', { "email": email, "password": password })

            console.log(typeof response.data)

            console.log(JSON.stringify(response.data))
            setData({ ...data, hash: JSON.stringify(response.data) })
     */

    return async (email, password) => {
        try {
            console.log('email: ' + email + ' password: ' + password)
            const response = {data : []} //await authApi.post('/users/login', { "email": email, "password": password });
            const { accessToken } = response.data
            console.log('accessToken ===' + accessToken)
           localStorage.setItem('token', accessToken)
            const config = {
                headers: { Authorization: `Bearer ${accessToken}` }
            };
            console.log(accessToken)
            const responseUser =   {data : []}//await authApi.get('/users/current', config);
            console.log("line 123 auth after getting current user === ", JSON.stringify(responseUser))
            const currentUsername = responseUser.data.username
            const currentEmail = responseUser.data.email
            const currentId = responseUser.data.id
            console.log("current username === " + currentUsername + "\ncurrent email === " + currentEmail + "\ncurrent id === " + currentId)


            dispatch({ type: 'SIGN_IN', payload: { currentUsername, currentEmail, currentId } })

        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with sign in" })
        }

    }
}

const signout = (dispatch) => {
    return async () => {
        try {
            localStorage.removeItem('token');
            dispatch({ type: 'SIGN_OUT' })

        } catch (e) {
            console.log(e)
        }

    }
}
export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signout, signin, clearErrorMessage, tryLocalSignin },
    initialState
);