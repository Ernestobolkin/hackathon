import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import React, { useState } from "react";
import CalendarComponent from "./components/Calendar";
import Holidays from "./components/Holidays";

function App() {
  const [selectedHoliday, setSelectedHoliday] = useState(null);
  const selectHoliday = (holiday) => {
    setSelectedHoliday(holiday);
  };
  const backToCalendar = () => {
    setSelectedHoliday(null);
  };
  return (
    <div>
      <BrowserRouter>
        <Header back={backToCalendar} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <CalendarComponent
                back={backToCalendar}
                selectHoliday={selectHoliday}
                selectedHoliday={selectedHoliday}
              ></CalendarComponent>
            }
          ></Route>
          <Route path="/Holidays" exact element={<Holidays></Holidays>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
