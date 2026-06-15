import { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("searchHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const API_KEY = "3935a6679f1febb523f0905fec07c54a";

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [history]);

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(response.data);

      if (!history.includes(city)) {
        setHistory((prev) => [city, ...prev]);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to fetch weather data"
      );
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="header">
        <h1>🌦️ Weather App</h1>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <SearchBar onSearch={fetchWeather} />

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherCard weather={weather} />}

      <div className="history">
        <h3>Recent Searches</h3>

        {history.length === 0 ? (
          <p>No searches yet</p>
        ) : (
          history.map((city, index) => (
            <button
              key={index}
              className="history-btn"
              onClick={() => fetchWeather(city)}
            >
              {city}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default App;