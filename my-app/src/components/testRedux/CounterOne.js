import React, { useReducer, useContext } from "react";
import {ContextStore} from  "../../index"

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
    // const [state, dispatch] = useReducer(OneReducer, 5);             //<-- 移除原本在local端使用useReducer

    const [state, dispatch] = useContext(ContextStore)['reducers']['one']; //<-- 改為在上層使用，並透過context傳遞過來這邊使用，達到全部的component都能存取共同的資訊
  return (
    <>
      <h2>{state}</h2>
      <button onClick={()=>dispatch({type:"ADD"})}>加1</button> <button onClick={()=>dispatch({type:"SUB"})}>減1</button>
    </>
  );
}
