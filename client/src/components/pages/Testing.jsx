import React, { useState, useEffect } from 'react';
import { fetchRestaurants } from '../../util/restaurants';
import { WeatherDisplay } from '../Weather/WeatherDisplay';

const Testing = (props) => {
    // const [ restaurants, setRestaurants ] = useState([]);

    useEffect(() => {
        fetchRestaurants('hoboken', 'restaurant')
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <WeatherDisplay />
            <div>
                <button onClick={() => handleClick()}>Restaurants</button>
            </div>
        </div>
    )
}

export default Testing;