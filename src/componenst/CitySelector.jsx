import { useState } from "react";

const CitySelector = ({ onCityChange }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default CitySelector;
