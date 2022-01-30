import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles.css";
import Calendar from "react-awesome-calendar";
import axios from "axios";

const CalendarComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [israel, setIsrael] = useState();
  const [muslim, setMuslim] = useState();
  const [christian, setChristian] = useState();
  const navigateTo = (path) => {
    navigate(`/${path}`, { replace: true });
  };
  const events = {
    1: {
      id: 1,
      color: "#fd3153",
      from: "2022-02-02T09:00:00+00:00",
      to: "2022-02-02T10:00:00+00:00",
      title: "This is an event",
    },
  };

  const handleClick = (id) => {
    const path = events[id].title.replaceAll(" ", "");
    navigateTo("Holidays/" + path);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:8080/get/holidays");
      setData(data.data);
      return data;
    };
    const getDataByReligion = async () => {
      await getData();
      data.forEach((religion) => {
        if (religion.region === "israel") {
          console.log(israel);
          setIsrael(religion.dates);
        }
        if (religion.region === "islam") {
          setMuslim(religion.dates);
          console.log(muslim);
        }
        if (religion.region === "christian") {
          setChristian(religion.dates);
          console.log(christian);
        }
      });
    };
    getDataByReligion();
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
