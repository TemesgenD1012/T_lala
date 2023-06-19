import React from "react";
import { Link } from "react-router-dom";
import Logo from "../pages/Assets/Logo.png";
import "./style.css";
import { useLocation } from "react-router-dom";

export const findTitle = (value) => {
  let title = "";
  switch (value) {
    case "/age":
      title = "Personality Predector";
      break;
    case "/water":
      title = "Water Intake Calculator";
      break;
    case "/food":
      title = "Food Recommendation ";
      break;
    default:
      title = "DAFTech Tools";
  }
  return title;
};

function Header({ toggleSidebar }) {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className="header">
      <div className="header_menu" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="header_logo">
        <Link to="/">
          <img src={Logo} alt="DAF Tools" className="logo_img" />
        </Link>
      </div>
      <div className="header_title ">
        <h2 className="title">{findTitle(currentUrl)}</h2>
      </div>
    </div>
  );
}

export default Header;
