import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getForecast } from "../weatherApi";
import { Container, ListGroup } from "react-bootstrap";

const Detail = () => {
  const { city } = useParams();
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (city) {
      getForecast(city).then((data) => setForecast(data));
    }
  }, [city]);

  return (
    <Container className="text-center mt-4">
      <h2 className="text-xl font-bold">Previsioni Metereologiche per la città di {city}</h2>
      {forecast && forecast.list && (
        <ListGroup>
          {forecast.list.map((item) => (
            <ListGroup.Item key={item.dt} className="py-2 border-b">
              {new Date(item.dt * 1000).toLocaleString()} - {Math.round(item.main.temp)} °C,{" "}
              <strong>{item.weather[0].description}</strong>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Detail;
