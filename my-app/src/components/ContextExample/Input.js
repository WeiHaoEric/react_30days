import React, { useContext } from "react";
import { MsgStore } from "./Message";

export default function Input() {
  const { titleState, titleFunc } = useContext(MsgStore); //<--傳遞時用object, 因此接收時，也用object
  console.log("get titleState from Context:" + titleState);
  return (
    <>
      <input onChange={(e) => titleFunc(e.target.value)}></input>
    </>
  );
}
