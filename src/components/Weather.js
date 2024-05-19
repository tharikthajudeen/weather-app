import React from 'react';

const Weather = ({ data }) => {
  const { name, main, weather, wind } = data;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="mb-1">Temperature: {main.temp}°C</p>
      <p className="mb-1">Humidity: {main.humidity}%</p>
      <p className="mb-1">Wind Speed: {wind.speed} m/s</p>
      <p className="mb-1">Condition: {weather[0].description}</p>
    </div>
  );
};

export default Weather;
