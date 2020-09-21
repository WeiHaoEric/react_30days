import React, { useContext } from "react";
import { ContextStore } from "./ToDoApp";
import Message from "./Message";  //<-- 引入Message

export default function ToDoList() {
  const { appReducer } = useContext(ContextStore);
  const toDoList = appReducer[0];
  const result = toDoList.map((e, idx) => (
    <Message key={`cmd-${idx}`} msg={e} />   //<-- 改用Message component來顯示
  ));

  return (<ul>{result}</ul>)    //<--改為<ul>去顯示
}
