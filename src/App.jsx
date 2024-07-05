import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useState } from "react";
import { getForecast, getWeather } from "./weatherApi";
import CitySelector from "./componenst/CitySelector";
import WeatherInfo from "./componenst/WeatherInfo";
import Forecast from "./componenst/Forecast";
import MyNav from "./componenst/MyNav";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./componenst/NotFound";
import Detail from "./componenst/Detail";

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
    <Container fluid>
      <BrowserRouter>
        <MyNav city={city} />
        <Routes>
          <Route path="/" element={<CitySelector onCityChange={setCity} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Detail town={city} />
      <WeatherInfo weather={weather} />
      <Forecast forecast={forecast} />
    </Container>
  );
};

export default App;
