import React, { useContext } from "react";
import { ContextStore } from "./ToDoApp";

export default function ToDoList() {
  const { appReducer } = useContext(ContextStore);
  const toDoList = appReducer[0];
  const result = toDoList.map((e, idx) => (<p key={`cmd-${idx}`}>{e}</p>));

  return result
    
  ;
}
