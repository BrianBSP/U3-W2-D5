import { useEffect } from "react";
import { useState } from "react";
import { getForecast, getWeather } from "./weatherApi";
import CitySelector from "./componenst/CitySelector";
import WeatherInfo from "./componenst/WeatherInfo";
import Forecast from "./componenst/Forecast";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (city) {
      getWeather(city).then((data) => setWeather(data));
      getForecast(city).then((data) => setForecast(data));
    }
  }, [city]);

  return (
    <div>
      <CitySelector onCityChange={setCity} />
      <WeatherInfo weather={weather} />
      <Forecast forecast={forecast} />
    </div>
  );
};

export default App;
