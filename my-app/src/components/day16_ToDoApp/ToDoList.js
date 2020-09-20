import React, { useContext } from "react";
import { ContextStore } from "./ToDoApp";

export default function ToDoList() {
  const { appReducer } = useContext(ContextStore);
  const toDoList = appReducer[0];

  return (
    <div>
      {
        toDoList.map((e) => (<p>{e}</p>) )
      }
    </div>
  );
}
