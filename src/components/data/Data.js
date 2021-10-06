import React, { useState, useEffect } from "react";
import axios from "axios";
import Maps from "../maps/Maps";
import Casetable from "../casetable/Casetable";
import Loader from "../loader/Loader";

function Data() {
  const [datas, setDatas] = useState({});
  const [geoInfo, setGeoInfo] = useState([]);
  const [history, setHistory] = useState([]);
  const [catgroup, setCatgroup] = useState([]);
  const [update, setUpdate] = useState([]);
  const [relworlddata, setRelworlddata] = useState([]);
  const [natday, setNatday] = useState([]);
  const [disList, setDisList] = useState([]);
  const [mupList, setMupList] = useState([]);
  const [filtermup, setFiltermup] = useState([]);
  const [moreinfo, setMoreinfo] = useState([]);
  const [news, setNews] = useState([]);
  const [myths, setMyths] = useState([]);
  const [faq, setFaq] = useState([]);
  const [hoslist, setHoslist] = useState([]);
  const [mapinfo, setMapinfo] = useState([]);
  const [healthres, setHealthres] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchDatas = () => {
    // Current data on infections in nepal, sourced from MOHP SIT reports
    const data = "https://nepalcorona.info/api/v1/data/nepal/";
    //List of infection in Nepal by municipality, district and province. It has geo location, age and gender of the patient
    const geoInf = "https://data.nepalcorona.info/api/v1/covid";
    // Timeline of nepal cases, death, recoveries by date.
    const histry = "https://data.nepalcorona.info/api/v1/covid/timeline";
    // Count of nepali by different facts like agegroup, gender, currentState, province, municipality, district and more
    const catgGrp = "https://data.nepalcorona.info/api/v1/covid/summary";
    // Realtime summary of world infection information
    const worldSum = "https://data.nepalcorona.info/api/v1/world";
    // Infection data per day for each countries

    // World wide infection data, sourced from worldmeters
    let uprl = new URL(
      "?start=100",
      "https://nepalcorona.info/api/v1/data/world"
    );

    let upDates = uprl.href;
    // const upDates = "https://nepalcorona.info/api/v1/data/world/";

    const coundayData = "https://data.nepalcorona.info/api/v1/world/history";
    // fiter using name ?search={name of district
    const districtList = "https://data.nepalcorona.info/api/v1/districts";

    // fiter using name ?search={name of municipality}
    const filterName = "https://data.nepalcorona.info/api/v1/municipals";

    // <----===muncipalid and district id error====------>

    // covid cases, municipality list
    // const munciList = `https://data.nepalcorona.info/api/v1/districts/:districtid`;

    // covid cases, contact info, demographic info, wards
    // const moreInfo = `https://data.nepalcorona.info/api/v1/municipals/:1`;

    // <----=======------>

    // This list most of the coronavirus related news in Nepali media. It is updated every few hours. By default it list 50 records with paging information. You can increase this by sending limit queryString (eg. ?limit=100)
    // Response has these fields: data: list all the data limit: number of data returned start: starting point of the record in the list total: total number of data in the database page: page number of the data list

    const news = "https://nepalcorona.info/api/v1/news";

    // This list myths and rumors floating around in the society. There are accompanying facts as well. A lot of it is sourced from WHO and UNICEF. It is updated whenever we find new one. By default it list 50 records with paging information. You can increase this by sending limit queryString (eg. ?limit=100)

    // Response has these fields: data: list all the data limit: number of data returned start: starting point of the record in the list total: total number of data in the database page: page number of the data list

    const myth = "https://nepalcorona.info/api/v1/myths";

    // List of frequently asked questions relating to Coronavirus. A lot of it is sourced from EDCD,Nepal, CDC and WHO. It is updated whenever we find new one. By default it list 50 records with paging information. You can increase this by sending limit queryString (eg. ?limit=100)

    // Response has these fields: data: list all the data limit: number of data returned start: starting point of the record in the list total: total number of data in the database page: page number of the data list
    const faq = "https://nepalcorona.info/api/v1/faqs";

    // List of hospitals, temporary hospitals, health post with capacity information. We source this information from government sites and also our representatives are calling hospitals directly. This list is not comprehensive. It is updated whenever we find new one. By default it list 500 records with paging information. You can increase this by sending limit queryString (eg. ?limit=100)
    // Response has these fields: data: list all the data limit: number of data returned start: starting point of the record in the list total: total number of data in the database page: page number of the data list

    const hospitalList = "https://nepalcorona.info/api/v1/hospitals";

    // Static map information on Nepal. Filter using these ?type=municipal ?type=ward ?type=province ?type=district ?type=country
    const mapinfo = "https://data.nepalcorona.info/api/v1/mapinfo";

    // List of health resources in Nepal by ward
    const helthRes = "https://data.nepalcorona.info/api/v1/resources/health";

    // const datas =
    const datas = axios.get(data);
    const geoInfs = axios.get(geoInf);
    const histrys = axios.get(histry);
    const catgGrps = axios.get(catgGrp);
    const worldSums = axios.get(worldSum);
    const upDate = axios.get(upDates);
    const coundayDatas = axios.get(coundayData);
    const districtLists = axios.get(districtList);
    // const munciLists = axios.get(munciList);
    const filterNames = axios.get(filterName);
    // const moreInfos = axios.get(moreInfo);
    const news24 = axios.get(news);
    const myths = axios.get(myth);
    const faqs = axios.get(faq);
    const hospitalLists = axios.get(hospitalList);
    const mapinfos = axios.get(mapinfo);
    const healthResource = axios.get(helthRes);

    axios
      .all([
        datas,
        geoInfs,
        histrys,
        catgGrps,
        worldSums,
        upDate,
        coundayDatas,
        districtLists,
        // munciLists,
        filterNames,
        // moreInfos,
        news24,
        myths,
        faqs,
        hospitalLists,
        mapinfos,
        healthResource,
      ])
      .then(
        axios.spread((...allData) => {
          setDatas(allData[0].data);
          setUpdate(allData[5].data.filter((tada) => tada.country === "Nepal"));
          setCatgroup(allData[3]);
          setDisList(allData[7].data);
          setLoader(true);
        })
      );
  };
  console.log(disList);
  var list = disList.map((res) => res.title);
  var sorted = list.sort();
  useEffect(() => {
    fetchDatas();
  }, []);

  // console.log(update);

  //   console.log(datas.data);
  if (!loader) {
    return <Loader />;
  }

  return (
    <div>
      <Maps val={catgroup} list={disList} sorted={sorted} />
      {/* <Casetable val={datas} update={update[0]} /> */}
    </div>
  );
}

export default Data;
