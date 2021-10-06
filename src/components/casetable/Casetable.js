import React from "react";
import "./Casetable.css";

function Casetable(props) {
  return (
    <div style={{ marginTop: "13vh" }} className="main-table">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>New Update</h1>
        <div className="table-left">
          <div className="">
            Active Case:
            <i class="fas fa-frown-open"></i>
            <h2>{props.update.activeCases}</h2>
          </div>
          <div className="">
            New Case:
            <i class="fas fa-user-plus"></i>
            <h2>{props.update.newCases}</h2>
          </div>
          <div className="">
            New Deaths:
            <i class="far fa-frown"></i>
            <h2>{props.update.newDeaths}</h2>
          </div>
        </div>
      </div>
      <div>
        <h1>Total</h1>
        <p>
          {Date()}
          <a target="_blank" href={props.val.source}>
            Get Report <i class="far fa-file-alt mx-3"></i>
          </a>
        </p>
        <div className="table-right">
          <div className="total">
            Tests:<i class="fas fa-vials"></i>
            <h3>{props.val.tested_total}</h3>
          </div>

          <div className="newcase">
            Infected:
            <i class="fas fa-user-plus"></i>
            <h3>{props.val.tested_positive}</h3>
          </div>
          <div className="negative">
            Negative:
            <i class="fas fa-user-minus"></i>
            <h3>{props.val.tested_negative}</h3>
          </div>
          <div className="recovered">
            Recovered:
            <i class="fas fa-smile"></i>
            <h3>{props.val.recovered}</h3>
          </div>
          <div className="quarantine">
            Quarantined:<i class="fas fa-street-view"></i>
            <h3>{props.val.quarantined}</h3>
          </div>
          <div className="deaths">
            Deaths:
            <i class="far fa-frown"></i>
            <h3>{props.val.deaths}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Casetable;
