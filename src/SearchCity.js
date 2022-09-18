import React from "react";
import CurrentWeather from "./CurrentWeather";

import "./SearchCity.css";

export default function SearchCity(props) {
  return (
    <div>
      <div className="row">
        <div className="col-7">
          <div className="overview">
            <h1 id="city">{props.city}</h1>
            <ul>
              <li>
                <span className="updated">Last updated:</span>
                <span id="day-time"> Saturday, 12:43</span>
              </li>
              <li id="date"> September 3, 2022 </li>
            </ul>
          </div>
        </div>
        <div className="col-5">
          <form id="search-form">
            <input
              type="search"
              placeholder="type a city.."
              className="form-control"
              id="city-input"
            />
          </form>
        </div>
      </div>
      <CurrentWeather />
    </div>
  );
}
