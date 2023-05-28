const express = require('express');
const router = express.Router();

const reviewsCtrl = require('../controllers/reviews')

// all routes in this router
// start with '/' (root)

// POST /pizzerias/:id/reviews
router.post('/pizzerias/:id/reviews', reviewsCtrl.create);


module.exports = router;