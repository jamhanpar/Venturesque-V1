import axios from 'axios';

export const fetchRestaurants = async (location, cuisine) => {
    try {
        const data = await axios.get(`/api/yelp/restaurants/location=${location}&cuisine=${cuisine}`)
        return data;
    } 
    catch (err) {
        console.log(err)
    }
}