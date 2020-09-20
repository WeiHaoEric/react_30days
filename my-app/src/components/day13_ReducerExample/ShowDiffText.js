import React, { useReducer } from "react";

// 建立reducer func
function myReducer(state, action) {
  switch (action.type) {
    case "A":
      return "Press A";
    case "B":
      return "Press B";
    case "C":
      return "Press C";
    default:
      return state;
  }
}

export default function ShowDiffText() {
  const [state, dispatch] = useReducer(myReducer, "Reducer Demo"); //宣告 useReducer
  return (
    <>
      <h2>{state}</h2>
      <div>
        <button onClick={() => dispatch({type:"A"})}>A</button>
        <button onClick={() => dispatch({type:"B"})}>B</button>
        <button onClick={() => dispatch({type:"C"})}>C</button>
      </div>
    </>
  );
}
