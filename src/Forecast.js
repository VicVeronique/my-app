import React from "react";

import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row">
        <ForecastDay Day="Sat" MaxTemp={18} MinTemp={13} />
        <ForecastDay Day="Sun" MaxTemp={20} MinTemp={12} />
        <ForecastDay Day="Mon" MaxTemp={19} MinTemp={13} />
        <ForecastDay Day="Tue" MaxTemp={21} MinTemp={14} />
        <ForecastDay Day="Wed" MaxTemp={21} MinTemp={15} />
        <ForecastDay Day="Thu" MaxTemp={20} MinTemp={13} />
      </div>
    </div>
  );
}
