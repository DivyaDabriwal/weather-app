import React from "react";

export default function Forecast({ data }) {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  // const date = new Date(1668944478 * 1000).getDate();
  // const month = new Date(1668944478 * 1000).toDateString().slice(4, 7);
  // const year = new Date(1668944478 * 1000).getFullYear();
  // const forecastDates = new Date(1668944478 * 1000).getDate();
  // +" " + month + " " + year;

  // const forecastDates = (timestamp) => {
  //   const date = new Date(timestamp * 1000).getDate();
  //   const month = new Date(timestamp * 1000).toDateString().slice(4, 7);
  //   const year = new Date(timestamp * 1000).getFullYear();
  //   return date+" "+month+" "+year;
  // };

  return (
    <div>
      <label className="title">Daily</label>
      {data.list.splice(0, 7).map((item, idx) => (
        <div className="accordion" id="accordionExample">
          <div
            style={{ marginBottom: "20px" }}
            className="accordion-item"
            key={idx}
          >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${idx}`}
                aria-expanded="false"
                aria-controls={`collapse${idx}`}
              >
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="icon-small"
                    alt="weather"
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {item.main.temp_min}°C /{item.main.temp_max}°C
                  </label>
                </div>
              </button>
            </h2>
            <div
              id={`collapse${idx}`}
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure:</label>
                    <label>{item.main.pressure}</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity:</label>
                    <label>{item.main.humidity}</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Clouds:</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind speed:</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Sea level:</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feels like:</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feels like:</label>
                    <label>{item.dt_txt}°C</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
