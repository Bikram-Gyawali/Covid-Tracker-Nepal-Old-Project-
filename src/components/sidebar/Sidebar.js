import React from "react";
import { Link } from "react-router-dom";
import "../sidebar/Sidebar.css";

function Sidebar(props) {
  return (
    <div
      onClick={props.hidebar}
      className={props.bar ? "overlay open" : "overlay"}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        id="mySidenav"
        className={props.bar ? "sidenav open" : "sidenav "}
      >
        <span
          className="closebtn"
          style={{
            color: "tomato",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={props.hidebar}
        >
          <i className="fas fa-times"></i>
        </span>
        <Link to="/about">About Me</Link>
        <Link to="/services">Services</Link>
        <Link to="/clients">Source Code</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Sidebar;
