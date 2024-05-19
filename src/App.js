import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Weather from './components/Weather';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = 'c2655b3e93174b1a54e03bc5466b7c45';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-4">Weather App</h1>
      <Search fetchWeather={fetchWeather} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weather && <Weather data={weather} />}
    </div>
  );
};

export default App;
