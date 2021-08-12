import axios from 'axios';

export const fetchWeather = async (location) => {
    try {
        const res = await axios.get(`/api/weather/location=${location}`);
        debugger
        console.log(res);
        return res;
    }
    catch (err) {
        console.log(err);
    }
}