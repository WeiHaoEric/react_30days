import React, { createContext, useReducer } from "react";
import ReactDOM from "react-dom";
import CounterOne, {
  OneReducer,
  OneState,
} from "./components/testRedux/CounterOne";

import CounterTwo, {
  TwoReducer,
  TwoState,
} from "./components/testRedux/CounterTwo";
import combineReducers from "./components/testRedux/combineReducers";

// collect all reducers
const allReducers = {
  one: OneReducer,
  // two: TwoReducer,
};

// collect all states
const allStates = {
  one: OneState,
  // two: TwoState,
};

export const ContextStore = createContext();

// *
//
//
//
// *

function Titles() {
  const globalReducer = combineReducers({ allReducers, allStates });
  const [globalState, globalDispatch] = useReducer(globalReducer, allStates); //<-- combine a master reducer

  return (
    <ContextStore.Provider value={{ globalState, globalDispatch, test:123 }}>
      <h1>{`OneCounter:${OneState}`}</h1>
      <h1>{`TwoCounter:${TwoState}`}</h1>
      <CounterOne />
      {/* <CounterTwo /> */}
    </ContextStore.Provider>
  );
}

ReactDOM.render(<Titles />, document.getElementById("root"));
