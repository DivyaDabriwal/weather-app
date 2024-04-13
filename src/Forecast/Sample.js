import React, { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../API";

export default function Sample() {
  const [forecast, setForecast] = useState(null);

  // // const currentWeatherFetch = fetch(
  // //   `${WEATHER_API_URL}/weather?q=Boston&appid=${WEATHER_API_KEY}&units=metric`
  // // );

  const forecastFetch = fetch(
    `${WEATHER_API_URL}/forecast?q=Boston&appid=${WEATHER_API_KEY}&units=metric`
  );

  Promise.all([forecastFetch])
    .then(async (response) => {
      //     const weatherResponse = await response[0].json();
      const forecastResponse = await response[0].json();
      // const hourlyForecastResponse = await response[2].json();

      //     setCurrentWeather({ ...weatherResponse });
      setForecast({ ...forecastResponse });
      // setHourlyForecast({ ...hourlyForecastResponse });
    })
    .catch(console.log);

  //   const WEEK_DAYS = [
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //     "Sunday",
  //   ];
  //   const dayInAWeek = new Date().getDay();
  //   const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
  //     WEEK_DAYS.slice(0, dayInAWeek)
  //   );

  return (
    <div>
      {forecast && (
        <div>
          <h1 style={{ textAlign: "center", marginTop: "50px" }}>
            Hourly Forecast
          </h1>
          <ul className="list-group" style={{ marginTop: "50px" }}>
            {forecast.list.splice(0, 7).map((item, idx) => (
              <li
                key={idx}
                className="list-group-item"
                style={{
                  justifyContent: "space-evenly",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "100px",
                  marginRight: "100px",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={`http://localhost:3000/icons/01d.png`}
                  className="icon-small"
                  alt="weather"
                  width="50px"
                  height="50px"
                />
                <label className="min-max">18°C /20 °C </label>
                <label className="description"> Sunny</label>
                <p>{item.dt_txt}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
