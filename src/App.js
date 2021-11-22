import React, {useState, useEffect} from "react";
import "./App.css";
import WeatherCurrent from "./components/WeatherCurrent"
import WeatherForecast from "./components/Forecast";

import { filterForecast } from "./utils/functions"


const API_KEY = process.env.REACT_APP_MY_API_ID;



const App = () => {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Reykjavik");
  const [forecast, setForecast] = useState(null);

  const fetchWeather = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      })
  }


  const fetchForecast = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
       setForecast(filterForecast(data.list));
      })
  }



  
  useEffect(() => {
    fetchWeather(city);
    fetchForecast(city);
  }, [city]);


  const handleButtonClick = (event) => {
    setCity(event.target.innerText)
  }


  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
           <div className="button-group">
            <button className="button" onClick={handleButtonClick}>Reykjavik</button>
            <button className="button" onClick={handleButtonClick}>New York</button>
            <button className="button" onClick={handleButtonClick}>Copenhagen</button>
          </div>
         <WeatherCurrent weather={weather} />
         {forecast?.map((f, index) => ( <WeatherForecast key={index} forecast={f} /> ))}
          
        </div>
      </div>
    </div>
  );
};

export default App;
