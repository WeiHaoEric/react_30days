import React, {useContext} from "react";
import * as Styles from "../styles";
import { AppStore }from "../Calendar";

export default function Header(){
  const { timeReducer } = useContext(AppStore);
  const dispatch = timeReducer[1];

  let handleLastMonthEvent = ()=>{
    dispatch({type:"LAST_MONTH"});
    return (e)=>{}
  }   
  let handleNextMonthEvent = ()=>{
    dispatch({type:"NEXT_MONTH"})  
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