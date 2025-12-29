import { decrement, increment } from "./actions.js";
import store from "./store.js";

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

console.log("Final State:", store.getState());