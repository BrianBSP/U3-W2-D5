import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchCity = ({ onCityChange }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(city);
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center align-items-center mt-3 city-selector container-fluid"
      >
        <Form.Group className="mb-3 pt-3">
          <Form.Control
            type="text"
            placeholder="Inserisci la tua città..."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </Form.Group>
        <Button type="submit" className="btn btn-secondary ms-3">
          Cerca
        </Button>
      </Form>
    </>
  );
};

export default SearchCity;
