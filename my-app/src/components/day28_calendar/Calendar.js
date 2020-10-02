import React from "react";
import getWeeksInMonth from "./utils";
import moment from "moment";
import * as Styles from "./styles";

// Global Vars
const WeekDayNameList = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];


function Header(){
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



function WeekDay() {
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

function DateContent(){
  let weekContentList = getWeeksInMonth();
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

export default function Calendar() {
  return (
    <div>
      <h1>{"Calendar Demo"}</h1>
      <div className="calendar-container" style={Styles.calendarContainer}>
        <Header />
        <WeekDay />
        <DateContent />
      </div>
    </div>
  );
}
