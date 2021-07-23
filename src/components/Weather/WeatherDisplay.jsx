import React, { useState, useEffect } from 'react';
import { getWeather, getCities } from '../../hooks/weather-api/api';

export function WeatherDisplay({location}) {
    const [currentTemp, setCurrentTemp] = useState("");
    
    useEffect(() => {
        getWeather(339490)
            .then(res => setCurrentTemp(res[0].Temperature.Imperial.Value))
    }, []);

    function useWeather(location) {
        debugger
    }

    return (
      <div>
        <button onClick={() => getWeather(339490)}>Weather</button>
        <button onClick={() => getCities('Palisades Park, NJ')}>Cities</button>
        <h1>Location: {location}</h1>
        <h1>Current Temperature: {currentTemp}</h1>
      </div>
    );
}