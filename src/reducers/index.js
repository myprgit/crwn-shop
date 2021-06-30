import bag from "./bag";
import isSignedIn from "./isSignedIn";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    bag: bag,
    user: isSignedIn
}
);

export default allReducers;