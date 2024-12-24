export const APIReducer = (state, action) => {
    switch (action.type) {

        case 'TEMPERATURE':
            return { ...state, temperature: action.payload.temperature,
                  result: action.payload.result, isLoading: false }
        case 'TIME':
            return { ...state, time: action.payload.time,
                result: action.payload.result, isLoading: false }
        case 'GEOMETRY':
            return { ...state, geometry : action.payload.geometry,
                result: action.payload.result, isLoading: false }
        case 'COOKING':
            return { ...state, cooking : action.payload.cooking,
                result: action.payload.result, isLoading: false }
        case 'RESET':
            return { ...state, result: 0, isLoading: false }
        default: return state;
    }
}