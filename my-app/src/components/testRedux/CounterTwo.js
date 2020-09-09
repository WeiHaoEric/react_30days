import React, { useReducer, useContext } from "react";
import { ContextStore } from "../../index";

// export const TwoState = { init: 100, max: 3000, min: -3000 };
export const TwoState = 100;

export function TwoReducer(state, action) {
  console.log("Two Reducer " + action.type);
  switch (action.type) {
    case "ADD":
      return state + 10;
    case "SUB":
      return state - 10;
    default:
      return state;
  }
}

export default function CounterTwo() {
  const { globalState, globalDispatch } = useContext(ContextStore); //<--
  const state = globalState.two;

  return (
    <>
      <h2>{state}</h2>
      <button onClick={() => globalDispatch({ type: "ADD" })}>加10</button>{" "}
      <button onClick={() => globalDispatch({ type: "SUB" })}>減10</button>
    </>
  );
}
