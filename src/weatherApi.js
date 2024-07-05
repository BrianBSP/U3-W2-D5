const API_KEY = "45fa37c6228d4235b5b5442762b91de6";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeather = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};

export const getForecast = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};
