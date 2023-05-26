var express = require('express');
var router = express.Router();

const pizzeriasCtrl = require('../controllers/pizzerias');

// GET pizzerias/new
router.get('/new', pizzeriasCtrl.new);


module.exports = router;
