import React, { useState } from "react";

// *
// 設計一個Counter，包含以下三個元件
// <title />
// <Button1 /> <Button2 />
// *
export default function Counter() {
  const [numState, setNumState] = useState(5); //<-- 給定一個預設值5
  const [showColor, setShowColor] = useState(false); //<-- 給定預設的bgColor=white
  return (
    <>
      <h1 style={{backgroundColor:showColor?"yellow":"white"}}>{numState}</h1>
      <button
        onClick={() => {
          console.log("Counter+1");
          return setNumState(numState + 1);
        }}
      >
        加1
      </button>

      <button
        onClick={() => {
          console.log("Counter-1");
          return setNumState(numState - 1);
        }}
      >
        減1
      </button>

      <button
        onClick={() => {
          console.log("showColor is:"+showColor);
          return setShowColor(!showColor);
        }}
      >
				{showColor?"關閉":"打開"}
			</button>
    </>
  );
}
