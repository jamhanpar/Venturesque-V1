const express = require("express");
const router = express.Router();
const axios = require('axios');

// this is required to access the .env file
require('dotenv').config() 

router.get('/restaurants', (req, res) => {
   
    // create a yelp rest instance
    let yelpREST = axios.create({
      baseURL: "https://api.yelp.com/v3/",
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        "Content-type": "application/json",
      },
    })

    // replace "/businesses/search" /w desired Endpoint
    
    yelpREST("/businesses/search", {
      params: {
        location: "New York",
        term: "coffee",
        limit: 10,
      },
    }).then(({ data }) => {
    //   let { businesses } = data
    //   businesses.forEach((b) => {
    //     console.log("Name: ", b.name)
    //   })
        res.json(data)
    })
});


// const yelp_api_key = process.env.REACT_APP_YELP_API_KEY;

module.exports = router;
// review questions routes