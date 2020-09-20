import React, { useReducer, createContext } from "react";
import Buttons from "./Buttons";  
import myReducer from "./Reducers";

export const contextStore = createContext();

export default function ShowDiffText() {
  const aReducer = useReducer(myReducer, "Context + Reducer Demo"); //宣告 useReducer
  const state = aReducer[0];

  return (
    <contextStore.Provider value={{reducer:aReducer}}>
      <h2 style={{color:"blue"}}>{state}</h2>
     <Buttons/>
     </contextStore.Provider>
  );
}
