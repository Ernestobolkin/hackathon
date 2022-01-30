import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";

const Header = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Calendar
      </Link>
      <Link className="link" to="/Holidays">
        Holidays
      </Link>
    </div>
  );
};
export default Header;
