import React, { useContext } from "react";
import getWeeksInMonth from "../utils";
import * as Styles from "../styles";
import { AppStore }from "../Calendar";

export default function DateContent(){
    const {timeReducer} =  useContext(AppStore);
    const mmt = timeReducer[0];

    let weekContentList = getWeeksInMonth(mmt);
    let result = [];
    return (
      <div className="DateContainer" style={Styles.DateContainer}>
        {
          weekContentList.map((week, wIdx)=>{
            let aWeek = [];
            week.map((day, dIdx)=>
              aWeek.push(<span className="dateContent-day" style={Styles.dayStyle} key={`${day}-${dIdx}`}>{day===0?"":day}</span>))
            result.push(<div className="aweek" style={Styles.aWeekStyle} key={`${week}-${wIdx}`}>{aWeek}</div>);
          })
        }
        {result}
      </div>
      )
  }