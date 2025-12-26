import { combineReducers } from "redux";
import counterReducer from "./counterReducer.js";
import useReducer from "./userReducer.js";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: useReducer

});

export default rootReducer;