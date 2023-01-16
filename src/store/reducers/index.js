import { combineReducers } from "redux";
import postReducers from "./post";

const allReducers = combineReducers({ post: postReducers });
export default allReducers;
