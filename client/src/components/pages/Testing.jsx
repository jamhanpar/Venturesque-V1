import React, { useState, useEffect } from 'react';
import { fetchRestaurants } from '../../util/restaurants';
import { fetchActivities, fetchGooglePhoto } from '../../util/activities';
import { fetchWeather } from '../../util/weather';

import Restaurants from '../Restaurants/Restaurants';

import { FaTimes, FaSearch } from 'react-icons/fa';
import '../stylesheets/testing.scss';

const Testing = () => {
    // const [user, setUser] = useState();
    const [restaurants, setRestaurants] = useState([]);
    const city = 'palisades park';
    const cuisine = 'restaurant';

    useEffect(() => {
        // const fetchUser = async () => {
        //     const res = await fetch('http://localhost:5000/user');
        //     const data = await res.json()
        //     console.log(data);
        //     setUser(data);
        // }

        fetchRestaurants(city, cuisine)
            .then(res => setRestaurants(res));
    }, [])

    if (!restaurants) return null;

    return (
        <div>
            <div className="border">
                <h1>Icons</h1>
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}/>
                <FaSearch style={{ color: 'red' }}/>
            </div>
            <div className="border">
                <h1>API Testing:</h1>
                <button onClick={() => fetchRestaurants('queens', 'restaurant')}>Restaurants</button>
                <button onClick={() => fetchActivities( 40.7440, -74.0324)}>Activities</button>
                <button onClick={() => fetchGooglePhoto("Aap_uEBKiq1wMmnu2IfnEZq-B3g3QTtL3hwg0mJmhvCMAqHqhXxKyxRs06HPGj7ccXHvOgv3313p-l4D6ISnkAme3LZvJWaM15LYwH2mb18LoP_d3XQkpLKKdm84am3OpuVD3YLSIb-i3P7XjhdzUNEuLeMpFht3hKeoTJqeyvzvykiitxRA")}>Photo</button>
                <button onClick={() => fetchWeather(339490)}>Weather</button>
            </div>
            <div className="border">
                <h1>Component Testing</h1>
                <Restaurants restaurants={restaurants} />
            </div>
        </div>
    )
}

export default Testing;