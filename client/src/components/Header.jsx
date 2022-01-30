import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";

const Header = ({ back }) => {
  return (
    <div className="navbar">
      <Link onClick={back} className="link" to="/">
        Calendar
      </Link>
      <Link className="link" to="/Holidays">
        Holidays
      </Link>
    </div>
  );
};
export default Header;
