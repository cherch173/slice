var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override')

// Session Middleware
const session = require('express-session');
const passport = require('passport');

// dotenv configured for security
require('dotenv').config();
// connect to the database with AFTER the config vars are processed
require('./config/database');
// configure passport middleware
require('./config/passport');

const indexRouter = require('./routes/index');
const pizerriasRouter = require('./routes/pizzerias');
const reviewsRouter = require('./routes/reviews');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Mount method override
app.use(methodOverride('_method'));
// Session Middleware
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
// Mount Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
// ends middleware stuff

// makes user variable active inside all ejs templates
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
})

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/pizzerias', pizerriasRouter);
app.use('/', reviewsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
