var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Slice' });
});

// Google OAuth Login Route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'], }
));

module.exports = router;
