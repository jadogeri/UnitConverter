export const APIReducer = (state, action) => {
    switch (action.type) {

        case 'UPDATE':
            return { ...state, result: action.payload, isLoading: false }
        case 'RESET':
            return { ...state, result: 0, isLoading: false }
        default: return state;
    }
}