import React, { useReducer, useContext } from "react";
import { ContextStore } from "../../index";

// export const OneState = { init: 5, max: 99, min: 0 };
export const OneState = 5;

export function OneReducer(state, action) {
  console.log("One Reducer " + action.type);
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUB":
      return state - 1;
    default:
      return state;
  }
}

export default function CounterOne() {
  console.log("Counter One", useContext(ContextStore));
  const {globalState, globalDispatch} = useContext(ContextStore); //<--
  const state = globalState.one;
  return (
    <>
      <h2>{state}</h2>
      <button onClick={() => globalDispatch({ type: "ADD" })}>加1</button>
      <button onClick={() => globalDispatch({ type: "SUB" })}>減1</button>
    </>
  );
}
