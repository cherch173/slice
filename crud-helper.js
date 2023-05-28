// If the db connection string is in a .env file, we need 
// to read in those env variables just like in server.js
require('dotenv').config();
// Connect to the database
require('./config/database');

// Require the app's Mongoose models
const Movie = require('./models/movie');
const Performer = require('./models/performer');

let movies = await Movie.find({});
console.log(movies);