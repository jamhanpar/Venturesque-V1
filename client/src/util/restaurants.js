import axios from 'axios';

export const fetchRestaurants = async (location, cuisine) => {
<<<<<<< HEAD
    try {
        const data = await axios.get(`/api/yelp/restaurants/location=${location}&cuisine=${cuisine}`)
        return data;
    } 
    catch (err) {
        console.log(err)
    }
=======
    let res = await axios.get(`/api/yelp/restaurants/location=${location}&cuisine=${cuisine}`)
    
    return res.data;
>>>>>>> e3aaaf7 (component reset)
}