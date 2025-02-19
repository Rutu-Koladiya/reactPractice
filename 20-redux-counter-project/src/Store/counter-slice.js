import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, showCounter: true };

// using redux toolkit
// imgur
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    // We now need to access action on payload, because that is the name off the property which will hold any extra data you might be dispatching
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;