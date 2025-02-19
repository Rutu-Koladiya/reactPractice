const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState(); // getstate is method which is available on the store created with create store. and it will give us the latest state snapshot after it was update. so the subscription fun will soon be triggered whenevr the state changes
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
