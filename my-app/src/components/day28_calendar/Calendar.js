import React from "react";
import moment from "moment";
import * as Styles from "./styles";

// components
import Header from "./components/Header";
import WeekDay from "./components/WeekDay";
import DateContent from "./components/DateContent";

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
