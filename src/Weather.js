import React from "react";
import axios from "axios";

export default function Weather() {
  function handleReponse(response) {
    alert(`The weather in Lutsk is ${response.data.main.temp}`);
  }

  let apiKey = "6243bd378295e87dcd4f90e3e23db829";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lutsk&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleReponse);
  return (
    <p>
      My name is Victoria
      <br>I like to code</br>
    </p>
  );
}
