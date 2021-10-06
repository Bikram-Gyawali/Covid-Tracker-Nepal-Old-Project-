import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div>
      <img
        style={{ height: "300px", width: "300px" }}
        className="loader"
        src="https://cdn4.iconfinder.com/data/icons/coronavirus-1/512/wuhan-coronavirus-virus-outbreak-02-512.png"
        alt=""
      />
    </div>
  );
}

export default Loader;
