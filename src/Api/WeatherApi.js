import { useState, useEffect } from "react";
import SearchBar from "../components/Search/SearchBar";
import WeatherDisplay from "../components/WeatherDisplayer/WeatherDisplay";
import '../Api/WeatherApi.css'
import Weather from '../assets/weather.jpeg'


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WeatherApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "New Delhi");

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  useEffect(() => {
    const interval = setInterval(() => fetchWeather(city), 30000);
    return () => clearInterval(interval);
  }, [city]);

  const fetchWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeatherData(data);
      console.log(data)
      localStorage.setItem("lastCity", cityName);
    } catch (error) {
      console.error(error.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="main_wrapper" 
    style={{
      backgroundImage: `url(${Weather})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      height: "100vh", 
    }}>
      <h1 className="weather_heading">Weather Dashboard</h1>
      <SearchBar onSearch={setCity} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default WeatherApi;
