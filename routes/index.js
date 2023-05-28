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
  { 
    scope: ['profile', 'email'], 
    prompt: 'select_account'
}
));

// Google OAuth Callback Route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/pizzerias',
    failureRedirect: '/'
  }
))

// Google OAuth Logout Route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
