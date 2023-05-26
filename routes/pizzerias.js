var express = require('express');
var router = express.Router();

const pizzeriasCtrl = require('../controllers/pizzerias');

// GET pizzerias/new
// create the mere existence of
// a new pizzeria to Slice
router.get('/new', pizzeriasCtrl.new);
// POST /pizzerias
// add newly created pizzeria to /pizzerias
router.post('/', pizzeriasCtrl.create);


module.exports = router;
