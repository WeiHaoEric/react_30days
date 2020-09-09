import React, { useReducer, useContext } from "react";
import {ContextStore} from  "../../index"

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
    // const [state, dispatch] = useReducer(TwoReducer, 100);            //<-- 移除原本在local端使用useReducer

    const [state, dispatch] = useContext(ContextStore)['reducers']['two']; //<-- 改為在上層使用，並透過context傳遞過來這邊使用，達到全部的component都能存取共同的資訊
  return (
    <>
      <h2>{state}</h2>
      <button onClick={()=>dispatch({type:"ADD"})}>加10</button> <button onClick={()=>dispatch({type:"SUB"})}>減10</button>
    </>
  );
}
