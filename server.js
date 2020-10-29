// loading express and mongoose
const express = require('express');
const mongoose = require('mongoose');

const db = require("./models");

// setup port to listen on
const PORT = process.env.PORT || 8080;

// setup express
const app = express();

// set ejs engine
app.set('view engine', 'ejs');

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static(__dirname + '/public'));

// setup mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitnessdb', {
    useNewUrlParser: true,
    useFindAndModify: false
});

//Setup router
const routes = require("./controller/workout_controller.js");
app.use(routes);


// setup listener
app.listen(PORT, function () {
    console.log('Listening on PORT ' + PORT);
  });