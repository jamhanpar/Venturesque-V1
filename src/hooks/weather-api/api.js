import React from 'react';
import axios from 'axios';
import { ACCUWEATHER_API_KEY } from '../config';

const Weather = () => {
    const tempLocationKey = 339490;

    async function getWeather() {
        try {
            const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${tempLocationKey}?apikey=${ACCUWEATHER_API_KEY}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // const getWeather = () => {
    //     axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${tempLocationKey}?apikey=BiWL0Qcw0XWr0YzB79UTc37dDx9c3UKW`)
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err));
    // }

    return (
        <>
            <button onClick={() => getWeather()}>Weather</button>
        </>
    )
}

export default Weather;