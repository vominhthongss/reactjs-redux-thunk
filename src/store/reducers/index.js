import { combineReducers } from "redux";
import postReducers from "./post";

/* Combining all the reducers into one reducer. */
const allReducers = combineReducers({ post: postReducers });
export default allReducers;
