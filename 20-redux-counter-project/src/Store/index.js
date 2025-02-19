// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./auth-slice";
import counterSliceReducer from "./counter-slice";

// without redux toolkit
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "TOGGLE") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// for one reducer
// const store = createStore(counterSlice.reducer);

// const store = configureStore({
//     reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
// });

const store = configureStore({
    reducer: { counter: counterSliceReducer, auth: authSliceReducer }
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
