import { combineReducers } from "redux";
import Comp1Reducer from "./Comp1Reducer";
import Comp2Reducer from "./Comp2Reducer";

// Combine al reducer here
const RootReducer = combineReducers({ Comp1Reducer, Comp2Reducer });

export default RootReducer;
