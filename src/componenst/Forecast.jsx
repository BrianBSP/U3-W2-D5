import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
const Forecast = ({ forecast }) => {
  console.log(forecast);
  return (
    <div className="d-flex flex-column align-items-center forecast">
      {forecast && forecast.list && (
        <>
          <h2>Previsioni</h2>
          <ListGroup>
            {forecast.list.slice(0, 5).map((item) => (
              <ListGroup.Item key={item.dt}>
                {new Date(item.dt * 1000).toLocaleDateString()} - {new Date(item.dt * 1000).toLocaleTimeString()} -{" "}
                {Math.round(item.main.temp)} °C - <strong>{item.weather[0].description}</strong>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </div>
  );
};

export default Forecast;
