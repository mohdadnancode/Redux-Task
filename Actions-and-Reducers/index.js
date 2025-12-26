import store from "./store.js";

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "SET_NAME", payload: "Adnan" });

console.log(store.getState());