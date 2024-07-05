const Forecast = ({ forecast }) => {
  return (
    <div>
      {forecast && forecast.list && (
        <>
          <h2>Forecast</h2>
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
