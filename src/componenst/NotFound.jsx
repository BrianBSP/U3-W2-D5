import { Col, Container, Row } from "react-bootstrap";
//import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <h1 className="display-3 text-primary">404 - NOT FOUND</h1>
          <p className="lead">Nessuna pagina trovata</p>
          <div className="text-center">{/* <Link to="/" /> */}</div>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
