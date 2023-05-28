const express = require('express');
const router = express.Router();

const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// all routes in this router
// start with '/' (root)

// POST /pizzerias/:id/reviews
router.post('/pizzerias/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

// DELETE /reviews
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);


module.exports = router;