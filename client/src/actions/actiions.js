import { cookingActions } from "./cookingActions";
import { timeActions } from "./timeActions";
import { geometryActions } from "./geometryActions";
import { temperatureActions } from "./temperatureActions";

export const actions = {...cookingActions, ...temperatureActions, ...timeActions, ...geometryActions }