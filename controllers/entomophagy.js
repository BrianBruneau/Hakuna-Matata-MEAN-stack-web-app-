var express = require('express');
var mongoose = require('mongoose');
var db = require('../models')
var router = express.Router();

var Recipe = require('../models/recipe');
mongoose.connect('mongodb://localhost/HakunaMatata');

router.get('/culture', function(req, res) {
  res.render('entomophagy/culture')
});

router.get('/recipe', function(req, res) {
  Recipe.find({}, function(err, recipes) {
    if(err) res.json(err);
    else res.render('entomophagy/recipe', {rec: recipes})
  })
});

router.post('/recipe', function(req, res) {
  // req.body.type: [ 'insect', 'veggie' ],
  // req.body.ingredient: [ 'Cricket', 'squash' ],
  // amount: [ '5g', '1 whole' ],


  var ingredients = [];
  if (Array.isArray(req.body.ingredient)) {
  for (i = 0; i < req.body.ingredient.length; i++) {
    var ingr = {
      type: req.body.type[i],
      name: req.body.ingredient[i],
      amount: req.body.amount[i]
    };
    ingredients.push(ingr);
  };
} else {
  var ingr = {
      type: req.body.type,
      name: req.body.ingredient,
      amount: req.body.amount
    };
    ingredients.push(ingr);
};


  var directions = [];
  if (Array.isArray(req.body.step)) {
  for (i = 0; i <req.body.step.length; i++){
    var stp = {
      step: req.body.step[i]
    };
    directions.push(stp);
  };
} else {
  var stp = {
      step: req.body.step
    };
    directions.push(stp);
};


  var newRecipe = Recipe({
    title: req.body.title,
  servings: req.body.serving,
  ingredients: ingredients, 
  directions: directions,
  notes: req.body.notes,
  }).save(function(err, doc) {
    Recipe.find({}, function(err, recipes) {
    if(err) res.json(err);
    else res.redirect('/entomophagy/recipe')
  })
});
});

router.get('/gallery', function(req, res) {
  res.render('entomophagy/gallery')
});

router.get('/scaleIt', function(req, res) {
  res.render('entomophagy/scaleIt')
})

module.exports = router;