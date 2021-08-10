import React, { useEffect } from 'react';
import { getWeather, getCities } from '../../hooks/weather-api/api';
import { fetchRestaurants } from '../../util/restaurants';

export function WeatherDisplay({location}) {
  // const [currentTemp, setCurrentTemp] = useState("");
  
  useEffect(() => {
    // getWeather(339490)
    //   .then(res => console.log(res))
    //   .then(res => setCurrentTemp(res.data))
  }, []);

  return (
    <div>
      <button onClick={() => getWeather(339490)}>Weather</button>
      <button onClick={() => getCities("Palisades Park, NJ")}>Cities</button>
      <button onClick={() => fetchRestaurants('hoboken', 'korean')}>Restaurants</button>
      <h1>Location: {location}</h1>
      {/* <h1>Current Temperature: {currentTemp}</h1> */}
    </div>
  );
}