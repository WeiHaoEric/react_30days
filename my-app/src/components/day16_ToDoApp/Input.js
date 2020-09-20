import React, {useContext} from 'react'
import { ContextStore } from "./ToDoApp";

export default function Input() {
  const {appReducer} = useContext(ContextStore);
  const dispatch = appReducer[1];
  return (
    <div>
      <input style={{width:"150px"}}></input>
      <button>{"Send"}</button>
    </div>
  )
}
