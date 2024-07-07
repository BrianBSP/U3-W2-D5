import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const WeatherToday = ({ weather }) => {
  //console.log(weather);
  return (
    <div className="d-flex flex-column align-items-center weather-info">
      {weather && (
        <>
          <h2 className="text-xl font-bold">
            <Link to={`/detail/${weather.name}`} className="nav-link">
              {weather.name}
              <span className="lead fs-2"> {weather.sys.country}</span>
            </Link>
          </h2>
          <p className="display-3">{Math.round(weather.main.temp)} °C</p>
          <p>
            Meteo: <strong /* className="fs-4" */>{weather.weather[0].description}</strong>
          </p>
        </>
      )}
    </div>
  );
};

export default WeatherToday;
