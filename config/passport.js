const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user')

passport.use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    async function(accessToken, refreshToken, profile, cb) {
      // A user has logged in with OAuth...
      try {
       let user = await User.findOne({ googleId: profile.ed});
       if (user) return cb(null, user);
       user = await User.create({
        name: profile.displayName,
        googleId: profile.id,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value
       })
      } catch (err) {
        return cb(err);
      }
    }
  ));