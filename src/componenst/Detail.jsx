import { Container } from "react-bootstrap";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";

const Detail = ({ city }) => {
  return (
    <Container>
      <Forecast city={city} />
      <WeatherInfo city={city} />
    </Container>
  );
};
export default Detail;
