import React from 'react';
import { fetchRestaurants } from '../../util/restaurants';
import { WeatherDisplay } from '../Weather/WeatherDisplay';
import { fetchActivities, fetchGooglePhoto } from '../../util/activities';

const Testing = () => {
    return (
        <div>
            <WeatherDisplay />
            <div>
                <button onClick={() => fetchRestaurants('hoboken', 'restaurant')}>Restaurants</button>
                <button onClick={() => fetchActivities({lat: 40.7440, lng: -74.0324})}>Activities</button>
                <button onClick={() => fetchGooglePhoto("Aap_uEBKiq1wMmnu2IfnEZq-B3g3QTtL3hwg0mJmhvCMAqHqhXxKyxRs06HPGj7ccXHvOgv3313p-l4D6ISnkAme3LZvJWaM15LYwH2mb18LoP_d3XQkpLKKdm84am3OpuVD3YLSIb-i3P7XjhdzUNEuLeMpFht3hKeoTJqeyvzvykiitxRA")}>Photo</button>
            </div>
        </div>
    )
}

export default Testing;