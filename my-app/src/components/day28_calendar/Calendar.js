import React from 'react'
import getWeeksInMonth from "./utils"
import moment from "moment";

export default function Calendar() {
    let result = getWeeksInMonth(); //<--加這個
    console.log("result:", result)
  
    return (
      <div>
        <h1>{"Calendar Demo"}</h1>
        <h1>{moment().format("YYYY-MM-DD")}</h1>
      </div>
    );
  }
