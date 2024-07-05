import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getForecast } from "../weatherApi";

const Detail = () => {
  const { city } = useParams();
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (city) {
      getForecast(city).then((data) => setForecast(data));
    }
  }, [city]);

  return (
    <div className="forecast-detail mt-4">
      <h2 className="text-xl font-bold">Previsioni per {city}</h2>
      {forecast && forecast.list && (
        <ul>
          {forecast.list.map((item) => (
            <li key={item.dt} className="py-2 border-b">
              {new Date(item.dt * 1000).toLocaleString()} - {item.main.temp} °C, {item.weather[0].description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Detail;
