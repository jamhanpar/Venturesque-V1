import axios from 'axios';

export const fetchActivities = async (lat, lng) => {
    try {
        const encodedLoc = encodeURI(lat, lng);
        const data = await axios.get(`/api/google/activities/location=${encodedLoc}`)
        console.log(data);
        return data;
    } 
    catch (err) {
        console.log(err)
    }
}