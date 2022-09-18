import React from "react";
import Source from "./Source";
import ExtraCities from "./ExtraCities";
import SearchCity from "./SearchCity";
import Forecast from "./Forecast";

import "./Container.css";

function App() {
  return (
    <div className="container">
      <div className="weather-app-wrap">
        <div className="weather-app">
          <div className="inside-border">
            <ExtraCities />
            <SearchCity city="Lutsk" />
            <Forecast />
          </div>
          <Source />
        </div>
      </div>
    </div>
  );
}

export default App;
