import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles.css";
import Calendar from "react-awesome-calendar";
import axios from "axios";
import { convertAllDates } from "../utils/convertDate";
import { removeEmptySpaces } from "../utils/global";

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

const CalendarComponent = () => {
  const navigate = useNavigate();
  const [holidays, setHolidays] = useState([]);
  const [israel, setIsrael] = useState([]);
  const [muslim, setMuslim] = useState([]);
  const [christian, setChristian] = useState([]);

  const navigateTo = (path) => {
    navigate(`/${path}`, { replace: true });
  };

  const handleClick = (id) => {
    const path = removeEmptySpaces(events[id].title);
    navigateTo("Holidays/" + path);
  };

  const getDataByReligion = () => {
    holidays.forEach((religion) => {
      if (religion.region === "israel") setIsrael(religion.dates);

      if (religion.region === "islam") setMuslim(religion.dates);

      if (religion.region === "christian") setChristian(religion.dates);
    });
  };


  useEffect(() => {
    async function getHoliday() {
      const { data: holidays } = await axios.get(
        "http://localhost:8080/get/holidays"
      );
      const holidaysData = convertAllDates(holidays.data);
      console.log(holidaysData);
      setHolidays(holidaysData);
    }
    getHoliday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!holidays.length) return;
    getDataByReligion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [holidays]);

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
