// Middleware for Routes that require ensureLoggedIn

module.exports = function(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }