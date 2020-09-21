import React, { useContext, useState } from "react";
import { ContextStore } from "./ToDoApp";

function handleAddClick(newMsg, dispatch) {
  const anEvent = { type: "ADD", newEvent: newMsg};
  return (e)=>dispatch(anEvent);
}

export default function Input() {
  const [msg, setMsg] = useState("");
  const { appReducer } = useContext(ContextStore);
  const dispatch = appReducer[1];

  console.log("msg", msg); //<--放一個console驗證看看
  return (
    <div>
      <input
        style={{ width: "150px" }}
        onChange={(e) => setMsg(e.target.value)}
      ></input>
      <button onClick={handleAddClick(msg, dispatch)}>{"Send"}</button>
    </div>
  );
}
