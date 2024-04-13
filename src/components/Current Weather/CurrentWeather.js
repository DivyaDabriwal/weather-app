import React from "react";

export default function CurrentWeather({ data }) {
  return (
    <div className="weather" style={styles.weather}>
      <div className="top" style={styles.topAndBottom}>
        <div>
          <p className="city" style={styles.city}>
            {data.name}
          </p>
          <p className="city" style={styles.city}>
            {data.sys.country}
          </p>
          <p className="weather-description" style={styles.description}>
            {data.weather[0].description}
          </p>
        </div>
        <img
          alt="weather-icon"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
          style={styles.icon}
        />
      </div>
      <div className="bottom" style={styles.topAndBottom}>
        <p className="teperature" style={styles.temperature}>
          {Math.round(data.main.temp_min)}°C / {Math.round(data.main.temp_max)}
        </p>
      </div>
    </div>
  );
}

let styles = {
  weather: {
    width: "300px",
    borderRadius: "10px",
    boxShadow: "10px -2px 20px rgba(0 0 0/30%)",
    color: "#fff",
    backgroundColor: "#0e346c",
    margin: "20px auto 0 auto",
    padding: "0 20px 20px 20px",
  },

  topAndBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  city: {
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: 1,
    marginBottom: "10px",
    letterSpacing: "1px",
  },

  description: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: 1,
    margin: 0,
  },

  icon: {
    width: "100px",
  },

  temperature: {
    fontWeight: 600,
    fontSize: "70px",
    width: "auto",
    letterSpacing: "-5px",
    margin: "10px 0",
  },
};
