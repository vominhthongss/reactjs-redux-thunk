import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
const store = createStore(allReducers, applyMiddleware(...middleware));

export default store;
