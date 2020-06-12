import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c60388b79d5ff38524a67315bd3c0edb";

export const fetchWeather = async query => {
  const { data } = await axios.get(url, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
