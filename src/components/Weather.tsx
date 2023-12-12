import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const Weather = () => {
  const [city, setCity] = useState('manila');
  const [data, setData] = useState<AxiosResponse | null | void>(null);

  useEffect(() => {
    const getWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      console.log(url);
      const result = await axios.get(url);
      setData(result);
    };

    if (!data) {
      getWeather();
    }
  }, [city, data]);

  console.log(data);

  return <div>Weather</div>;
};

export default Weather;
