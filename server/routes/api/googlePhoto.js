const express = require("express");
const router = express.Router();
const axios = require('axios');

// this is required to access the .env file
require('dotenv').config() 

router.get('/photoref=:photoref', (req, res) => {
  const { photoref } = req.params;
  console.log(photoref);

  let googleREST = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/place",
  })

  googleREST("/photo?", {
    params: {
      photoreference: photoref,
      maxheight: 500,
      sensor: false,
      key: `${process.env.GOOGLE_API_KEY}`,
    },
  }).then(({ data }) => {
      res.json(data);
  })

});

module.exports = router;