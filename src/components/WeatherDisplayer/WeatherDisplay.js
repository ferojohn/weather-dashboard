import "./WeatherDisplay.css"

const WeatherDisplay = ({ weatherData }) => {
  
    if (!weatherData) {
      return <p>No data available</p>;
    }
  
    const { name, main, weather, wind } = weatherData;
  
    return (
      <div className="weather-wrapper">
         <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="Weather Icon"
          className="weather_img"
        />
       <div className="details">
        <h2>{name}</h2>
        <div>
        <p>Temperature:<span>{main.temp}°C</span> </p>
        <p>Humidity:<span>{main.humidity}%</span></p>
        <p>Wind Speed:<span>{wind.speed} m/s</span></p>
        <p>Condition:<span>{weather[0].description}</span></p>
        </div>
       
       </div>
        
       
      </div>
    );
  };
  
  export default WeatherDisplay;
  