import React, { useReducer } from "react";

function OneReducer(state, action) {
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
    const [state, dispatch] = useReducer(OneReducer, 5);
  return (
    <>
      <h2>{state}</h2>
      <button onClick={()=>dispatch({type:"ADD"})}>加1</button> <button onClick={()=>dispatch({type:"SUB"})}>減1</button>
    </>
  );
}
