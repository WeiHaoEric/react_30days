import React from "react";
import * as Styles from "../styles";

export default function Header(){
  let handleLastMonthEvent = ()=>{
    console.log("click last month")
    return (e)=>{}
  }   
  let handleNextMonthEvent = ()=>{
    console.log("click next month")
    return (e)=>{}
  }

  return (
    <div className="header-container" style={Styles.headerContainer}>
      <span style={Styles.headerMonthYearStyle} className="month-year">{"Month-Year"}</span>
      <span style={Styles.headerButtonStyle} onClick={handleLastMonthEvent}> {"<"} </span>
      <span style={Styles.headerButtonStyle} onClick={handleNextMonthEvent}> {">"} </span>
    </div>
  )
}