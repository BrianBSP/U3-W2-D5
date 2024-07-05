import "bootstrap/dist/css/bootstrap.min.css";
const Forecast = ({ forecast }) => {
  return (
    <div className="d-flex flex-column align-items-center forecast">
      {forecast && forecast.list && (
        <>
          <h2>Previsioni</h2>
          <ul>
            {forecast.list.slice(0, 5).map((item) => (
              <li key={item.dt}>
                {new Date(item.dt * 1000).toLocaleDateString()} - {item.main.temp} °C
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Forecast;
