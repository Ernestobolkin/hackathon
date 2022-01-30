import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";

const Holidays = ({ title, back }) => {
  //   const arrayOfHolidays = [];
  //   const holidayCard = () => {
  //     return arrayOfHolidays.map((holiday) => {
  //       return <div className="holidayCardPage">holiday</div>;
  //     });
  //   };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={back}>Back to Calendar</button>
    </>
  );
};

export default Holidays;
