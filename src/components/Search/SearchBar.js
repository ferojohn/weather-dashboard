import { useState } from "react";
import './SearchBar.css'
const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div className="inputWrapper">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input"
      />
      <button onClick={handleSearch} className="btn">Search</button>
    </div>
  );
};

export default SearchBar;
