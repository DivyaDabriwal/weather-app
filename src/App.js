// import { useState } from "react";
// import { WEATHER_API_KEY, WEATHER_API_URL } from "./API";
import "./App.css";
// import CurrentWeather from "./components/Current Weather/CurrentWeather";
// import Forecast from "./Forecast/Forecast";
// import HourlyForecast from "./Forecast/HourlyForecast";
import Sample from "./Forecast/Sample";

function App() {
  // const [currentWeather, setCurrentWeather] = useState(null);
  // const [forecast, setForecast] = useState(null);

  // // // const currentWeatherFetch = fetch(
  // // //   `${WEATHER_API_URL}/weather?q=Boston&appid=${WEATHER_API_KEY}&units=metric`
  // // // );

  // const forecastFetch = fetch(
  //   `${WEATHER_API_URL}/forecast?q=Boston&appid=${WEATHER_API_KEY}&units=metric`
  // );

  // Promise.all([forecastFetch])
  //   .then(async (response) => {
  //     //     const weatherResponse = await response[0].json();
  //     const forecastResponse = await response[0].json();
  //     // const hourlyForecastResponse = await response[2].json();

  //     //     setCurrentWeather({ ...weatherResponse });
  //     setForecast({ ...forecastResponse });
  //     // setHourlyForecast({ ...hourlyForecastResponse });
  //   })
  //   .catch(console.log);

  return (
    <div className="container">
      {/* {currentWeather && <CurrentWeather data={currentWeather} />}
      
      {/* {hourlyForecast && <HourlyForecast data={hourlyForecast} />} */}
      {/* 
      {forecast && (
        <HourlyForecast data={forecast} startInterval={0} endInterval={7} />
      )} */}
      {/* <HourlyForecast></HourlyForecast> */}
      <Sample></Sample>
      {/* <Sample data={"Sample"} startInterval={0} endInterval={7} /> */}
      {/* {forecast && <Forecast data={forecast} />} */}
    </div>
  );
}

export default App;
