import { createStore, applyMiddleware } from "https://cdn.skypack.dev/redux";
import reducer from "./reducer.js";
import loggerMiddleware from "./loggerMiddleware.js";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__(
        applyMiddleware(loggerMiddleware)
      )
    : applyMiddleware(loggerMiddleware)
);

export default store;