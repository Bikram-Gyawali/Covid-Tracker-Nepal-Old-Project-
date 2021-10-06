import React, { useState } from "react";
import "./Navbar.css";
import Sidebar from "../sidebar/Sidebar";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [bar, setBar] = useState(false);

  const hidebar = () => {
    setBar(false);
  };
  const getbar = () => {
    setBar(true);
  };

  return (
    <div style={{ position: "", top: "0", zIndex: 10 }}>
      <div className="navbar  ">
        <div className="left-nav">
          <div onClick={getbar}>
            <i class="fas fa-bars "></i>
          </div>
        </div>

        <div className="links-page">
          <div>
            <NavLink to="#">
              <p
                style={{
                  fontSize: "25px",
                  color: "white",
                  fontFamily: "monospace",
                }}
                className="home up"
              >
                <i class="fas fa-home change-clor"></i>
              </p>
            </NavLink>
          </div>
          <div>
            <NavLink
              style={{
                fontSize: "25px",
                color: "red",
                fontFamily: "monospace",
              }}
              to="/"
            >
              <i className="fas fa-globe-asia globe"></i>
            </NavLink>
          </div>
          <div>
            <NavLink
              style={{
                fontSize: "25px",
                color: "red",
                fontFamily: "monospace",
              }}
              to="#"
            ></NavLink>
          </div>
          <div>
            <NavLink
              style={{
                color: "white",
                fontSize: "25px",
                fontFamily: "monospace",
              }}
              to="#"
            >
              <i class="far fa-newspaper change-clor"></i>
            </NavLink>
          </div>
          <div>
            <NavLink
              style={{
                color: "white ",
                fontSize: "25px",
                fontFamily: "monospace",
              }}
              to="#"
            >
              <i class="fas fa-users mx-4 change-clor"></i>
            </NavLink>
          </div>
        </div>

        <div>
          <form
            action="submit"
            style={{ alignItems: "baseline", justifyContent: "center" }}
          >
            <input type="text" placeholder="Search more..." />
            <i className="fas fa-search"></i>
          </form>
        </div>
        <div>
          <img
            id="img-logo"
            className="logo"
            src="https://seeklogo.com/images/M/mbm-logo-5E11C60B8E-seeklogo.com.jpg"
            alt="mbm-project"
          />
        </div>
      </div>
      <Sidebar hidebar={hidebar} getbar={getbar} bar={bar} />
    </div>
  );
}

export default NavBar;
