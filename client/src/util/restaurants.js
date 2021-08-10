import axios from 'axios';

export const fetchRestaurants = (location, cuisine) => {
    axios.get(`/api/yelp/restaurants/location=${location}&cuisine=${cuisine}`)
        .then(data => console.log(data))
}