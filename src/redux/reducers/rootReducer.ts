import { combineReducers } from "redux";
import StateReducer from "../slices/StateReducer";

const rootReducer = combineReducers({
  This: StateReducer,
});

export default rootReducer;
