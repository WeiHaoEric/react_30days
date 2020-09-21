import React, {useContext} from "react";
import { ContextStore } from "./ToDoApp";

function handleDelEvent(delMsg, dispatch) {
  return (e) => dispatch({ type: "DEL", delMsg: delMsg });
}

export default function Message(props) {
  const {appReducer} = useContext(ContextStore);
  const dispatch = appReducer[1];
  return (
    <li>
      {props.msg} <button onClick={handleDelEvent(props.msg, dispatch)}>{"Delete"}</button>
    </li>
  );
}
