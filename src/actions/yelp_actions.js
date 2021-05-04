import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const receiveRestaurants = createAction('RECEIVE_RESTAURANTS');
export const yelpBaseURL = 'https://api.yelp.com/v3/'

// export const fetchRestaurants = (term, location) => async dispatch => {
//     try {
//         const res = await axios.get(`${yelpBaseURL}/business/search`, { 
//             params: {
//                 location,
//                 term
//             }
//         }, {
//             headers: {
//                 Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
//             }
//         });
//         dispatch(receiveRestaurants(res.data));
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.REACT_APP_YELP_API_KEY);

export const fetchRestaurants = (term, location) => async dispatch => { 
    client.search({ term, location })
        .then( res => dispatch(receiveRestaurants(res.data)))
        .catch(err => console.log(err));
}


// Example
// let YelpREST = axios.create({
//     baseURL: "https://api.yelp.com/v3/",
//     headers: {
//         Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
//         "Content-type": "application/json"
//     },
// })

// yelpREST(ENDPOINT, { params: { key: value } })
//     .then(({ data }) => {
//         // do something
//     })

// yelpREST("/business/search", {
//     params: {
//         location: "kyoto",
//         term: "coffee",
//         limit: 10,
//     }
// }).then(({ data }) => {
//     let { business } = data
//     businesses.forEach(business => {
//         console.log("Name: ", business.name)
//     }) 
// })