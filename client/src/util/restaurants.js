import axios from 'axios';

export const fetchRestaurants = async (location, cuisine) => {
    try {
        const data = await axios.get(`/api/yelp/restaurants/location=${location}&cuisine=${cuisine}`)
        console.log(data.data.businesses);
        return data;
    } 
    catch (err) {
        console.log(err)
    }
}