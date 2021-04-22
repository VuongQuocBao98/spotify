import { combineReducers } from "redux";
import query from "./query";
const rootReducer = combineReducers({ query: query });
export default rootReducer;
