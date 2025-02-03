Features
Home Page
Search Weather: Search for any city to display its current weather details.
Weather Details Display:
Temperature in Celsius.
Humidity percentage.
Wind speed in meters per second.
Weather condition (e.g., sunny, rainy) with an icon.
Dynamic Updates: Refreshes weather data every 30 seconds for the selected city.
API Integration
OpenWeatherMap API: Fetches real-time weather data for the searched city.
Error Handling:
Displays a user-friendly error message for invalid city names or network issues.
Local Storage
Last City Memory: Saves the last searched city in localStorage and automatically displays its weather data on app reload.
Component-Based Architecture
SearchBar Component: Allows users to input a city name and triggers weather data fetch.
WeatherDisplay Component: Renders weather details and icons dynamically.
Tech Stack
React.js: Framework for building the user interface.
CSS: Styling for components and responsiveness.
OpenWeatherMap API: Data source for weather information.


1.Installation 
Clone the repository:
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

2.npm install
3.Set up the environment:

Create a .env file in the root directory.
4.npm start