import React, {useContext} from 'react';
import {contextStore} from "./ShowDiffText";


export default function Buttons() {
    const {reducer} = useContext(contextStore);
    const state = reducer[0]; 
    const dispatch = reducer[1];


    return (
        <>
          <div>
            <button onClick={() => dispatch({type:"A"})}>A</button>
            <button onClick={() => dispatch({type:"B"})}>B</button>
            <button onClick={() => dispatch({type:"C"})}>C</button>
          </div>
        </>
      );
}
