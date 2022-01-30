import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles.css";
import Calendar from "react-awesome-calendar";
import axios from "axios";
import { convertAllDates } from "../utils/convertDate";

const CalendarComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const navigateTo = (path) => {
    navigate(`/${path}`, { replace: true });
  };
  const events = {
    1: {
      id: 1,
      color: "#fd3153",
      from: "2022-02-02",
      to: "2022-02-02",
      title: "This is an event",
    },
    2: {
      id: 2,
      color: "#fd3153",
      from: "2022-02-02",
      to: "2022-02-02",
      title: "This is an event",
    },
    3: {
      id: 3,
      color: "#fd3153",
      from: "2022-02-02",
      to: "2022-02-02",
      title: "This is an event",
    },
  };

  console.log();

  const handleClick = (id) => {
    // <Link to="/Holidays"></Link>;
    console.log("e:");
    const path = events[id].title.replaceAll(" ", "");
    navigateTo("Holidays/" + path);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:8080/get/holidays");
      convertAllDates(data.data);
    };
    getData();
  }, []);

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
