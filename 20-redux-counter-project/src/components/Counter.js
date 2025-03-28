// import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { counterActions } from "../Store/counter-slice";
import classes from "./Counter.module.css";

// using redux toolkit
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value); // subscriber
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// functionl based using redux
// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter); // subscriber
//   const show = useSelector((state) => state.showCounter);

//   const incrementHandler = () => {
//     dispatch({ type: "INCREMENT" });
//   };
//   const increaseHandler = () => {
//     dispatch({ type: "INCREASE", amount: 5 });
//   };
//   const decrementHandler = () => {
//     dispatch({ type: "DECREMENT" });
//   };

//   const toggleCounterHandler = () => {
//     dispatch({ type: "TOGGLE" })
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={increaseHandler}>Increase by 5</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

export default Counter;

// class based component
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchProps)(Counter);
