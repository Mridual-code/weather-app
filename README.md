# Weather App

A responsive Weather Application built using React.js that provides real-time weather information for any city using the OpenWeatherMap API.

##  Features

* Search weather by city name
* Real-time weather data fetching using Axios
* Display city name
* Display temperature
* Display weather condition
* Display humidity
* Display wind speed
* Display weather icon
* Loading indicator while fetching data
* Error handling for invalid cities or API failures
* Responsive design for mobile, tablet, and desktop devices
* Dark/Light Mode
* Recent Search History
* Local Storage persistence using useEffect

##  Technologies Used

* React.js
* JavaScript (ES6+)
* Axios
* CSS3
* OpenWeatherMap API
* Local Storage

##  React Concepts Used

* Functional Components
* JSX
* Props
* useState Hook
* useEffect Hook
* Conditional Rendering
* Event Handling
* Component-Based Architecture

##  Project Structure

```text
src/
│
├── components/
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   ├── Loader.jsx
│   └── ErrorMessage.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

##  How It Works

1. User enters a city name.
2. Axios sends a request to the OpenWeatherMap API.
3. Weather data is received and stored in state.
4. The WeatherCard component displays the weather information.
5. Search history is saved in localStorage using useEffect.
6. Users can switch between Light and Dark modes.

##  API Used

* **API Name:** OpenWeatherMap API
* **Documentation Link:** [https://openweathermap.org/api](https://openweathermap.org/api)

##  Future Improvements

* 5-Day Weather Forecast
* Temperature Unit Conversion (°C ↔ °F)
* Geolocation-Based Weather
* Dynamic Weather Backgrounds


