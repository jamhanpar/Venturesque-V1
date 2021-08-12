const express = require('express');
const app = express();
const mongoose = require('mongoose');

// set up database
const db = require('./config/keys').mongoURI;

// importing questions routes
const questions = require('./routes/api/questions');

// any additional routes import here
const users = require('./routes/api/users');
const yelp = require('./routes/api/yelp');
const googleActivities = require('./routes/api/googleActivities');
const googlePhoto = require('./routes/api/googlePhoto');

// parsing all incoming req and outgoing res to json
app.use(express.json())

// connecting to mongoDB using mongoose
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo is connected'))
    .catch(err => console.log(err))

// create a route
app.get('/', (req, res) => res.send("App is working!"))

// using this router
app.use('/api/questions', questions);
// any additional routes add here
app.use('/api/users', users);
app.use('/api/yelp', yelp);
app.use('/api/google/activities', googleActivities);
app.use('/api/google/photo', googlePhoto);

// connecting our ports
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}`))