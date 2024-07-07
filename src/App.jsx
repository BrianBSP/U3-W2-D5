import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useState } from "react";
import { getForecast, getWeather } from "./weatherApi";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Forecast from "./componenst/Forecast";
import Detail from "./componenst/Detail";
import SearchCity from "./componenst/SearchCity";
import WeatherToday from "./componenst/WeatherToday";
import MyNavbar from "./componenst/MyNavbar";
import { BrowserRouter } from "react-router-dom";

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
    <Container fluid className="bg-white p-4 rounded shadow-md">
      <BrowserRouter>
        <MyNavbar city={city} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchCity onCityChange={setCity} />
                <WeatherToday weather={weather} />
                <Forecast forecast={forecast} />
              </>
            }
          />
          <Route path="/detail/:city" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
