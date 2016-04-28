var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ejsLayouts = require('express-ejs-layouts');
var session = require('express-session');
var authCtrl = require('./controllers/auth');
var entoCtrl = require('./controllers/entomophagy');
var db = require('./models');
var app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.use(ejsLayouts);
app.use(session({
  secret: 'dlkdjfi4ninainwldjijijeninalkj',
  resave: false,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
  if(req.session.userId) {
    db.user.findById(req.session.userId).then(function(user) {
      req.currentUser = user;
      res.locals.currentUser = user;
      next();
    });
  } else {
    req.currentUser = false
    res.locals.currentUser = false;
    next();
  }
});

app.use('/auth', authCtrl);
app.use('/entomophagy', entoCtrl);



app.get('/', function(req, res) {
  res.render('index');

});

app.get('/aboutUs', function(req, res) {
  res.render('aboutUs');
});


app.listen(process.env.PORT || 3000)



