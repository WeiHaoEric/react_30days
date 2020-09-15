import React, { createContext, useState } from "react";
import Input from "./Input";
export const MsgStore = createContext(); //<--在這裡建立一個context物件，並export出去，預備給其他component使用

export default function Message() {
  const [titleText, setTitleText] = useState("React Rookie's 30 days"); //<--useState設定
  return (
    <MsgStore.Provider
      value={{ titleState: titleText, titleFunc: setTitleText }}
    >
      <h2>{titleText}</h2>
      <Input />
    </MsgStore.Provider>
  );
}
