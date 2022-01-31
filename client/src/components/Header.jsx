import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import logo from "../assets/logo.png";
const Header = ({ back }) => {
  return (
    <div className="navbar">
      <img src={logo} alt="diversity logo" />
      <Link onClick={back} className="link" to="/">
        Calendar
      </Link>
    </div>
  );
};
export default Header;
