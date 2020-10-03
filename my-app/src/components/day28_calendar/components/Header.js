import React, {useState, useContext} from "react";
import * as Styles from "../styles";
import { AppStore }from "../Calendar";

export default function Header(){
  const { timeReducer } = useContext(AppStore);
  const mmt = timeReducer[0];
  const dispatch = timeReducer[1];

  return (
    <div className="header-container" style={Styles.headerContainer}>
      <span style={Styles.headerMonthYearStyle} className="month-year">{mmt.format("MMM-YYYY")}</span>
      <span style={Styles.headerButtonStyle} onClick={()=>dispatch({type:"LAST_MONTH"})}> {"<"} </span>
      <span style={Styles.headerButtonStyle} onClick={()=>dispatch({type:"NEXT_MONTH"})}> {">"} </span>
    </div>
  )
}