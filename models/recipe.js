var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
  title: String,
  servings: String,
  ingredients: [
    {
      tipo: String,
      name: String,
      amount: String
    }
  ],
  directions: [
    {
      step: String
    }
  ],
  notes: String,
  reviews: [
    { 
      author: String,
      review: String,
      rating: Number
    }
  ]


});




var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe