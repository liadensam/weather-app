import React from "react";
import "./style.css";
import { getDayfromUnix } from "../../utils/functions";




const WeatherForecast =({forecast}) => (
      
    <div class="forecast">
      <div class="forecast__day">{forecast? (getDayfromUnix(forecast.dt)) : null}</div>
      <div class="forecast__icon">
        <img
          src={`http://openweathermap.org/img/wn/${forecast?.weather[0].icon}@2x.png`}
          style={{ height: "100%" }}
          alt={"current weather icon"}
        />
      </div>
      <div class="forecast__temp">{forecast? (Math.round(forecast.main.temp)) : null} °C</div>
    </div>
)

export default WeatherForecast;

