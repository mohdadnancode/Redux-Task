import store from "./store.js";

store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "DECREMENT" })

console.log(store.getState());