import React from "react";

import "./Forecast.css";

export default function ForecastDay(props) {
  return (
    <div class="col-2">
      <div className="forecast-wrap">
        <div className="date">{props.Day}</div>
        <img
          src="http://openweathermap.org/img/wn/02d@2x.png"
          alt=""
          width="42"
        ></img>
        <div className="temperature-forecast">
          <span className="max-temp-forecast">{props.MaxTemp}° </span>
          <span className="min-temp-forecast">{props.MinTemp}°</span>
        </div>
      </div>
    </div>
  );
}
