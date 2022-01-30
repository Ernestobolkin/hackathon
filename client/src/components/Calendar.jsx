import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles.css";
import Calendar from "react-awesome-calendar";
import axios from "axios";
import { convertAllDates } from "../utils/convertDate";
import { removeEmptySpaces } from "../utils/global";

const events = {
  1: {
    color: "#1fa506",
    from: "2022-02-02",
    id: 112,
    title: "All Hallows Eve",
    to: "2022-02-02",
  },
  2: {
    color: "#1fa506",
    from: "2022-02-02",
    id: 2,
    title: "All Hallows Eve",
    to: "2022-02-02",
  },
  // color: "#1db255"
  // from: "2022-06-01"
  // id: 0
  // title: "Epiphany"
  // to: "2022-06-01"
  // 2: {
  //   id: 2,
  //   color: "#fd3153",
  //   from: "2022-02-02",
  //   to: "2022-02-02",
  //   title: "This is an event",
  // },
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

  const handleClick = (e) => {
    const path = removeEmptySpaces(holidays[e].title);
    console.log(e);
    // navigateTo("Holidays/" + path);
  };

  const getDataByReligion = () => {
    holidays.forEach((religion) => {
      if (religion.region === "israel") setIsrael(religion.dates);

      if (religion.region === "islam") setMuslim(religion.dates);

      if (religion.region === "christian") setChristian(religion.dates);
    });
  };

  useEffect(() => {
    try {
      async function getHoliday() {
        const { data: holidays } = await axios.get(
          "http://localhost:8080/get/holidays"
        );
        const holidaysData = convertAllDates(holidays.data);
        setHolidays(holidaysData);
      }
      getHoliday();
    } catch (error) {
      console.log(error);
    }
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
        events={israel}
        // events={Object.entries(events).map((day) => day[1])}
        className="calendar"
        onClickEvent={(e) => handleClick(e)}
      />
    </div>
  );
};
export default CalendarComponent;
