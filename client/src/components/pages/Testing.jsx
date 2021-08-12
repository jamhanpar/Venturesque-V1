import React, { useState, useEffect } from 'react';
import { fetchRestaurants } from '../../util/restaurants';
import { WeatherDisplay } from '../Weather/WeatherDisplay';
import { fetchActivities } from '../../util/activities';

const Testing = () => {
    return (
        <div>
            <WeatherDisplay />
            <div>
                <button onClick={() => fetchRestaurants('hoboken', 'restaurant')}>Restaurants</button>
                <button onClick={() => fetchActivities()}>Activities</button>
            </div>
        </div>
    )
}

export default Testing;