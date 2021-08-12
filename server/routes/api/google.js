const express = require("express");
const router = express.Router();
const axios = require('axios');

// this is required to access the .env file
require('dotenv').config() 

router.get('/activities/location=:location', (req, res) => {
  const { location } = req.params 
  
  // create a google rest instance
  let googleREST = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/place",
  })

  // replace w/ desired endpoint
  googleREST("/nearbysearch/json?", {
    params: {
      location: location,    // hoboken = { lat: 40.7440, lng: 74.0324 }
      radius: 10000,           // 10 km from location
      type: 'liquor_store',
      key: `${process.env.GOOGLE_API_KEY}`,
    },
  }).then(({ data }) => {
      res.json(data)
  })

});

router.get('/activities/photoreference=:photoreference', (req, res) => {
  const { photoreference } = req.params 

  let googleREST = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/place",
  })

  googleREST("/photo?", {
    params: {
      photoreference: {photoreference},
      key: `${process.env.GOOGLE_API_KEY}`,
    },
  }).then(({ data }) => {
      res.json(data)
  })

});

module.exports = router;