import React, { useState, useEffect } from "react";
import nepal from "./nepal.json";
import "./Maps.css";
import "leaflet/dist/leaflet.css";
import { Map, GeoJSON, TileLayer } from "react-leaflet";
import axios from "axios";

function Maps(props) {
  const [position, setPosition] = useState([28.4, 85.489494]);
  const [jilla, setJilla] = useState("RUPANDEHI");
  const [disid, setDisid] = useState("37");
  const [distcase, setDistcase] = useState([]);

  const mapdesign = {
    fillColor: "white",
    fillOpacity: 1,
    color: "black",
    weight: 2,
    zIndex: 20,
  };
  const mapInfos = (dist, layer) => {
    const district = dist.properties.DISTRICT;
    const hq = dist.properties.HQ;
    const pradesh = dist.properties.PROVINCE;
    layer.bindPopup(`${district} Provience-${pradesh}`);

    layer.on({
      mouseover: (event) => {
        event.target.setStyle({
          color: "red",
          fillColor: "crimson",
          fillOpacity: 0.6,
        });
      },
      mouseout: (event) => {
        event.target.setStyle({
          fillColor: "white",
          fillOpacity: 1,
          color: "black",
          weight: 2,
        });
      },
      click: (event) => {
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;
        // layer.bindPopup(`${district}-${pradesh} <h4>${distcase.cases}</h4>`);
        event.target.setStyle({
          weight: 4,
        });
        setPosition([lat, lng]);
        setDistcase(distcase);
      },
    });
    console.log(distcase);
    // layer.bindPopup(`${district}-${pradesh} <h4>${distcase.cases}</h4>`);
    // setJilla(district);
  };

  useEffect(() => {
    axios.get("https://data.nepalcorona.info/api/v1/districts").then((data) => {
      // console.log(data.data);
      let dataRecv = data.data;
      let districtfound = dataRecv.find((datas) => {
        return datas.title.toUpperCase() === jilla.toUpperCase();
      });
      // console.log(districtfound.id);

      setDisid(districtfound?.id);
      // console.log(disid);
    });
    axios
      .get(`https://data.nepalcorona.info/api/v1/districts/${disid}/`)
      .then((Rdata) => {
        setDistcase(Rdata.data.covid_summary);
      });
  });
  return (
    <div className="map-h">
      <Map className="mapb" center={position} zoom={8}>
        <GeoJSON
          style={mapdesign}
          data={nepal.features}
          onClick={(e) => {
            setJilla(e.layer.feature.properties.DISTRICT.toUpperCase());
            // console.log(e.layer.feature.properties.DISTRICT.toUpperCase());
          }}
          onEachFeature={mapInfos}
        />
        <table>
          <thead>
            <tr>
              <th>District</th>
              <th>Cases</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Deaths</th>
            </tr>
            <tr>
              <td>{jilla}</td>
              <td>{distcase.cases}</td>
              <td>{distcase.active}</td>
              <td>{distcase.recovered}</td>
              <td>{distcase.death}</td>
            </tr>
          </thead>
        </table>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  );
  // });
}

export default Maps;
