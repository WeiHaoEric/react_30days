import React, { useState, useEffect } from "react";


export default function EffectApp() {
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(true);

  // for state1
  useEffect(() => {
    console.log("*** area1 ***");
    console.log("[state1]: ComponentDidMount...");
    return () => console.log("[state1]: ComponentDidUpdate!!!");  
  }, [state1]);

  // for state2
  useEffect(() => {
    console.log("=== area2 ===");
    console.log("[state2]: ComponentDidMount...");
    return () => console.log("[state2]: ComponentDidUpdate!!!");  
  },[]);

  let handleClick = (setState, aState) => {
    return (e) => {
      setState(!aState);
    };
  };

  return (
    <>
      <button onClick={handleClick(setState1, state1)}>{state1?"delete1":"show1"}</button>
      <div>{state1&& "area1"}</div>

       <br/>
      <button onClick={handleClick(setState2, state2)}>{state1?"delete2":"show2"}</button>
      <div>{state2&& "area2"}</div>
    </>
  );
}
