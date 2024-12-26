export const APIReducer = (state, action) => {
    switch (action.type) {

        case 'TEMPERATURE':
            return { ...state, temperature: state.temperature + 1,
                  result: action.payload, isLoading: false }
        case 'TIME':
            return { ...state, time: state.time + 1,
                result: action.payload, isLoading: false }
        case 'GEOMETRY':
            return { ...state, geometry : state.geometry + 1,
                result: action.payload, isLoading: false }
        case 'COOKING':
            return { ...state, cooking : state.cooking + 1,
                result: action.payload, isLoading: false }
        case 'RESET':
            return { ...state, result: 0, isLoading: false }
        default: return state;
    }
}