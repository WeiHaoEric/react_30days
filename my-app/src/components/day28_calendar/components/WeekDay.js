import React from "react";
import * as Styles from "../styles";

const WeekDayNameList = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function WeekDay() {
  let weekDayList = [];
  return (
      <div style={Styles.weekDayContainerStyle}>
        {
          weekDayList = WeekDayNameList.map((name, idx)=>
          <span className="weekday-name" key={`name-${idx}`}
            style={Styles.weekDayStyle}>
            {name}
          </span>)
        }
      </div>
      );
}
