import "bootstrap/dist/css/bootstrap.min.css";
const WeatherInfo = ({ weather }) => {
  return (
    <div className="d-flex flex-column align-items-center weather-info">
      {weather && (
        <>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default WeatherInfo;
