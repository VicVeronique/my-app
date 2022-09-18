import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="row">
      <div className="col-7">
        <div className="row">
          <div className="col-4">
            <img
              className="weather-img"
              id="icon"
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt=""
            />
          </div>
          <div className="col-8">
            <div className="units">
              <ul>
                <li>
                  <strong className="temp">16</strong>
                  <small className="temp-units">
                    <a
                      href="celsius"
                      id="celcius-link"
                      className="active"
                      rel="noreferrer"
                    >
                      °C
                    </a>
                    |
                    <a
                      href="fahrenheit"
                      id="fahrenheit-link"
                      className="passive"
                      rel="noreferrer"
                    >
                      °F
                    </a>
                  </small>
                </li>
                <li id="description">Few clouds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-5">
        <ul>
          <li className="extra">
            <i className="fa-solid fa-droplet sign"> </i>{" "}
            <span className="sign-extra"> humidity: </span>{" "}
            <span id="humidity"> 80 </span>%
          </li>
          <li className="extra">
            <i className="fa-solid fa-wind sign"> </i>
            <span className="sign-extra"> wind: </span>
            <span id="wind"> 2.8 </span>
            <span className="seconds"> km/h</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
