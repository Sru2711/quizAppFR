import { combineReducers } from "redux";
import biologyReducer from "./Images/reducer";
import cardReducer from "./Cards/reducer";

const rootReducer = combineReducers({
    biologyReducer: biologyReducer,
    cardReducer:cardReducer
});

export default rootReducer;
