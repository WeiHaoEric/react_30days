import React,{ createContext, useReducer } from "react";
import ReactDOM from "react-dom";
import CounterOne, { OneReducer } from "./components/testRedux/CounterOne";
import CounterTwo, { TwoReducer } from "./components/testRedux/CounterTwo";


export const ContextStore = createContext({});

// *
// 為了讓更頂層的 component 可以抓到底層component的狀態，
// 我們將這些 reducer匯集起來，用 context.provider 像底層傳遞，
// 簡單來說，就是讓大家可以存取到global的東西
// *

function Titles() {
  const oneR = useReducer(OneReducer, 5);
  const twoR = useReducer(TwoReducer, 100);
  const reducers = {one:oneR, two:twoR};


  const [oneState, oneDispatch] = oneR;
  const [twoState, twoDispatch] = twoR;

  return (
    <ContextStore.Provider value={{reducers}}>
      <h1>{`OneCounter:${oneState}`}</h1>
      <h1>{`TwoCounter:${twoState}`}</h1>
      <CounterOne />
      <CounterTwo />
    </ContextStore.Provider>
    
  )
}

ReactDOM.render(
  <Titles/>,
  document.getElementById("root")
);
