import { useState } from "react";

function WeatherCard({ weather }) {
  const [isCelsius, setIsCelsius] = useState(true);

  // Conversion logic: multiply Celsius by 1.8 and add 32
  const tempCelsius = weather.main.temp;
  const tempFahrenheit = (tempCelsius * 1.8 + 32).toFixed(2);

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <h3>{isCelsius ? `${tempCelsius}°C` : `${tempFahrenheit}°F`}</h3>
      <button onClick={() => setIsCelsius(!isCelsius)}>
        Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
      </button>
      <p>{weather.weather.main}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
