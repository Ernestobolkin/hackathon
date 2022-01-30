import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles.css";
import Calendar from "react-awesome-calendar";
import Holidays from "./Holidays";
import axios from "axios";
import { convertToEvents } from "../utils/convertToEvents";
import { convertAllDates } from "../utils/convertDate";
import { removeEmptySpaces } from "../utils/global";

const CalendarComponent = ({ selectHoliday, back, selectedHoliday }) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  // const [selectedHoliday, setSelectedHoliday] = useState(null);
  const [holidays, setHolidays] = useState([]);
  const [israel, setIsrael] = useState([]);
  const [muslim, setMuslim] = useState([]);
  const [christian, setChristian] = useState([]);

  const navigateTo = (path) => {
    navigate(`/${path}`, { replace: true });
  };

  const handleClick = (e) => {
    // const path = removeEmptySpaces(holidays[e].title);
    const holiday = events.find((event) => (event.id = event));
    selectHoliday(holiday.title);
    // setSelectedHoliday(holiday.title);
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
        setEvents(convertToEvents(holidaysData));
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
      {selectedHoliday ? (
        <Holidays title={selectedHoliday} back={back} />
      ) : (
        <Calendar
          events={events}
          className="calendar"
          onClickEvent={(e) => handleClick(e)}
        />
      )}
    </div>
  );
};
export default CalendarComponent;
