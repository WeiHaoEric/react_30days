import React, {useReducer, createContext} from "react";
import moment from "moment";
import * as Styles from "./styles";
import reducers from "./reducers"

// components
import Header from "./components/Header";
import WeekDay from "./components/WeekDay";
import DateContent from "./components/DateContent";

// context store
export const AppStore = createContext();

// Calendar component
export default function Calendar() {
  const timeReducer = useReducer(reducers, new moment());

  return (
    <AppStore.Provider value={{timeReducer:timeReducer}}>
      <div>
        <h1>{"Calendar Demo"}</h1>
        <div className="calendar-container" style={Styles.calendarContainer}>
          <Header />
          <WeekDay />
          <DateContent />
        </div>
      </div>
    </AppStore.Provider>
  );
}
