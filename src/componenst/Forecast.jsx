import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const Forecast = ({ forecast }) => {
  console.log(forecast);
  return (
    <Container className="d-flex flex-column align-items-center">
      {forecast && forecast.list && (
        <Container>
          <h2 className="text-center">Previsioni</h2>
          <Row className="justify-content-center">
            {forecast.list.slice(0, 5).map((item) => (
              <Col xs={12} md={2} xl={2} key={item.dt} className="gx-2">
                <Card className="forecast-card text-center">
                  <Card.Title className="pt-2">{new Date(item.dt * 1000).toLocaleDateString()}</Card.Title>
                  <Card.Subtitle>{new Date(item.dt * 1000).toLocaleTimeString()}</Card.Subtitle>
                  <Card.Body className="p-0">
                    <p className="fs-2 mb-0">{Math.round(item.main.temp)} °C</p>
                    <p>
                      <strong>{item.weather[0].description}</strong>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </Container>
  );
};

{
  /* <ListGroup>
            {forecast.list.slice(0, 5).map((item) => (
              <ListGroup.Item key={item.dt}>
                {new Date(item.dt * 1000).toLocaleDateString()} - {new Date(item.dt * 1000).toLocaleTimeString()} -{" "}
                {Math.round(item.main.temp)} °C - <strong>{item.weather[0].description}</strong>
              </ListGroup.Item>
            ))}
          </ListGroup> */
}

export default Forecast;
