var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);
// PASSPORT FACEBOOK
const passport = require("passport")

const FacebookStrategy = require("passport-facebook").Strategy;
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(function(user, cb) {
  cb(null,user)
 });
 
 passport.deserializeUser(function(user, cb) {
     return cb(null, user);
 });
passport.use(new FacebookStrategy({
  clientID: '2820737694743560',
  clientSecret: 'f51c6db96116167f8bd5b0ddc5fb46f3',
  callbackURL: "https://badf-2402-800-6379-693-9c1-f098-5fc5-f4fd.ngrok-free.app/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
  //   return cb(err, user);
  // });
  return cb(null,profile)
}
));
app.get('/home',(req,res,next) => {
  res.json(req.user)
})
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
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
