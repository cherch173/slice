const express = require('express');
const router = express.Router();

// pizzeria controller module
const pizzeriasCtrl = require('../controllers/pizzerias');

// ensureLoggedIn module
const ensureLoggedIn = require('../config/ensureLoggedIn');

// ***************************** //
// all Routes DEFAULT to .movies

// GET Route for /pizzerias (Index Route)
router.get('/', ensureLoggedIn, pizzeriasCtrl.index);

// GET Route for pizzerias/new
// create the mere existence of
// a new pizzeria to Slice
router.get('/new', ensureLoggedIn, pizzeriasCtrl.new);

// GET /pizzerias/:id (SHOW functionality) 
// this MUST be below the GET NEW Route
// otherwise your application would take the string
// new and try to pass it in as ID
router.get('/:id', ensureLoggedIn, pizzeriasCtrl.show);

// POST Route for /pizzerias
// add newly created pizzeria to /pizzerias
router.post('/', ensureLoggedIn, pizzeriasCtrl.create);





module.exports = router;
