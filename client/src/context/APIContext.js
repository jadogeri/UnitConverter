import createDataContext from "./createDataContext";
import { cookingActions } from "../actions/cookingActions";
import { temperatureActions } from "../actions/temperatureActions";
import { timeActions } from "../actions/timeActions";
import { geometryActions } from "../actions/geometryActions";
import { APIReducer } from "../reducers/APIReducer";
import { resetResultAction } from "../actions/resetAction";
const initialState = { isLoading: true,  result : 0}

export const { Provider, Context } = createDataContext(
    APIReducer,
    {  ...cookingActions, ...temperatureActions, ...timeActions, ...geometryActions, resetResultAction},
    initialState
);