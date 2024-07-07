import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, /* NavLink, */ Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const MyNavbar = ({ city }) => {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
          3Bri METEO
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
              Home
            </NavLink>
            <NavLink
              to={`/detail/${city}`}
              className={`nav-link ${location.pathname === `/detail/${city}` ? "active" : ""}`}
            >
              Previsioni
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
