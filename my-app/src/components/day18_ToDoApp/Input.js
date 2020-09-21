import React, { useContext, useState } from "react";
import { ContextStore } from "./ToDoApp";

function handleAddClick(newMsg, dispatch, setMsg) {
  const anEvent = { type: "ADD", newEvent: newMsg };
  return (e) => {
    setMsg("");      //<-- 給空的字串，完成清除input的動作
    dispatch(anEvent);
  };
}

export default function Input() {
  const [msg, setMsg] = useState("");
  const { appReducer } = useContext(ContextStore);
  const dispatch = appReducer[1];

  return (
    <div>
      <input
        style={{ width: "150px" }}
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
    ></input>
      <button onClick={handleAddClick(msg, dispatch, setMsg)}>{"Send"}</button>
    </div>
  );
}
