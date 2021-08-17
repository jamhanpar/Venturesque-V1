import React from 'react';
import { fetchRestaurants } from '../../util/restaurants';
import { fetchActivities, fetchGooglePhoto } from '../../util/activities';
import { fetchWeather } from '../../util/weather';

import { FaTimes } from 'react-icons/fa';

const Testing = () => {
    return (
        <div>
            <div>
                <h1>API Testing:</h1>
                <button onClick={() => fetchRestaurants('hoboken', 'restaurant')}>Restaurants</button>
                <button onClick={() => fetchActivities( 40.7440, -74.0324)}>Activities</button>
                <button onClick={() => fetchGooglePhoto("Aap_uEBKiq1wMmnu2IfnEZq-B3g3QTtL3hwg0mJmhvCMAqHqhXxKyxRs06HPGj7ccXHvOgv3313p-l4D6ISnkAme3LZvJWaM15LYwH2mb18LoP_d3XQkpLKKdm84am3OpuVD3YLSIb-i3P7XjhdzUNEuLeMpFht3hKeoTJqeyvzvykiitxRA")}>Photo</button>
                <button onClick={() => fetchWeather(339490)}>Weather</button>
            </div>
            <div>
                <h1>Icons</h1>
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}/>
            </div>
        </div>
    )
}

export default Testing;