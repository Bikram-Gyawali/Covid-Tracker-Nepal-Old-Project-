import React from "react";
import NavBar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Data from "../data/Data";
import Maps from "../maps/Maps";
import Maptest from "../maps/Maps";

function Home() {
  return (
    <div>
      <NavBar style={{ position: "fixed", top: "0" }} />
      <Sidebar />
      {/* <Maptest /> */}
      {/* <Maps /> */}
      <Data />
    </div>
  );
}

export default Home;
