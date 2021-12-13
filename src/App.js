import React, {useState, useEffect} from "react";
import "./App.css";
import WeatherCurrent from "./components/WeatherCurrent";
import WeatherForecast from "./components/Forecast";

import { filterForecast } from "./utils/functions";
import { cities } from "./utils/functions"

//api key hidden in .env file, which is in gitignore file hidden so github would not show it
const API_KEY = process.env.REACT_APP_MY_API_ID;



const App = () => {

  //use states to store vlues of the weather for one day, city and forecats for more days
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Reykjavik");
  const [forecast, setForecast] = useState(null);

  //getting data for a one day weather with the particular city
  const fetchWeather = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      })
  }

//getting data for the five days
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


  // const handleButtonClick = (event) => {
  //   setCity(event.target.innerText)
  // }

  const cityChange = (e) => {
    setCity(e.target.value);
  }


  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>

        {/* dropdown select */}
        <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={cityChange}
          >
            {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))} 
          </select>
        </div>


        <div className="weather">
           {/* <div className="button-group">
            <button className="button" onClick={handleButtonClick}>Reykjavik</button>
            <button className="button" onClick={handleButtonClick}>New York</button>
            <button className="button" onClick={handleButtonClick}>Copenhagen</button>
          </div> */}

          {/* maping the weather forecast */}
         <WeatherCurrent weather={weather} />
         <div class="weather__forecast" id="predpoved">
         {forecast?.map((f, index) => ( <WeatherForecast key={index} forecast={f} /> ))}
         </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
