var express = require('express');
var router = express.Router();

// pizzeria controller module
const pizzeriasCtrl = require('../controllers/pizzerias');

// all Routes DEFAULT to .movies

// GET Route for pizzerias/new
// create the mere existence of
// a new pizzeria to Slice
router.get('/new', pizzeriasCtrl.new);

// GET /pizzerias/:id (SHOW functionality) 
// this MUST be below the GET NEW Route
// router.get('/:id', pizzeriasCtrl.show);

// POST Route for /pizzerias
// add newly created pizzeria to /pizzerias
router.post('/', pizzeriasCtrl.create);

// GET Route for /pizzerias (Index Route)
router.get('/', pizzeriasCtrl.index);



module.exports = router;
