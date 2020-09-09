import React, { useReducer } from "react";

function TwoReducer(state, action) {
  console.log("One Reducer " + action.type);
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
    const [state, dispatch] = useReducer(TwoReducer, 100);
  return (
    <>
      <h2>{state}</h2>
      <button onClick={()=>dispatch({type:"ADD"})}>加10</button> <button onClick={()=>dispatch({type:"SUB"})}>減10</button>
    </>
  );
}
