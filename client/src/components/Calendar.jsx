import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles.css";
import Calendar from "react-awesome-calendar";

const CalendarComponent = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(`/${path}`, { replace: true });
  };
  const events = {
    1: {
      id: 1,
      color: "#fd3153",
      from: "2022-30-01T18:00:00+00:00",
      to: "2022-30-01T19:00:00+00:00",
      title: "This is an event",
    },
    2: {
      id: 2,
      color: "red",
      from: "2019-05-01T13:00:00+00:00",
      to: "2019-05-05T14:00:00+00:00",
      title: "This is another event",
    },
    3: {
      id: 3,
      color: "#3694DF",
      from: "2022-01-30T13:00:00+00:00",
      to: "2022-01-30T20:00:00+00:00",
      title: "This is also another event",
    },
  };

  console.log();

  const handleClick = (id) => {
    // <Link to="/Holidays"></Link>;
    console.log("e:");
    const path = events[id].title.replaceAll(" ", "");
    navigateTo("Holidays/" + path);
  };

  return (
    <div className="calendar-container">
      <Calendar
        events={Object.entries(events).map((day) => day[1])}
        className="calendar"
        onClickEvent={handleClick}
      />
    </div>
  );
};
export default CalendarComponent;
