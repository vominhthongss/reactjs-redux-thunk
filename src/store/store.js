import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
/* Creating a middleware array and pushing the thunk middleware and the logger middleware into it. */
const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
/* Creating a store and passing in the reducers and the middleware. */
const store = createStore(allReducers, applyMiddleware(...middleware));

export default store;
