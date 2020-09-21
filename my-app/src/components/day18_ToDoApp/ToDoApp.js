import React, { useReducer, createContext } from "react";
import reducers from "./reducers";
import ToDoList from "./ToDoList";
import Input from "./Input";

export const ContextStore = createContext();

export default function ToDoApp() {
  const appReducer = useReducer(
    reducers,
    localStorage.getItem("toDoList")
      ? localStorage.getItem("toDoList").split(",") //<-- true: 對字串做split, 可直接得到array, ex: 'aaa,bbb,ccc'=>['aaa', 'bbb', 'ccc']
      : [] //<-- false: 給一個空的陣列即可
  ); 

  return (
    <ContextStore.Provider value={{ appReducer: appReducer }}>
      <div>
        <h2 style={{ borderBottom: "1.5px black solid" }}>To Do List</h2>
        <Input />
        <ToDoList />
      </div>
    </ContextStore.Provider>
  );
}
