import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
        try {
          const apiKey = 'd3ce33b6e1014d4d96a09612cdb21dc4';
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=${apiKey}`;
          const response = await axios.get(apiUrl);
          setWeather(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
    };

    getWeather();
  }, []);
  return (
    <div className="weather-widget">
    {weather ? (
      <>
        <h2>{weather.name}</h2>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
        <p>Weather Conditions: {weather.weather[0].description}</p>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
}

export default WeatherWidget;