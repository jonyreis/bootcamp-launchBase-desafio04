const data = require('../data.json')


exports.home =  function(req, res) {
    return res.render('user/home', { items : data.recipes })
}

exports.sobre = function(req, res) {
    return res.render('user/sobre')
}

exports.recipes = function(req, res) {
    return res.render('user/recipes', { items : data.recipes })
}

exports.showIndex = function (req, res) {
    const recipeData = data.recipes // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index
    const id = recipeData[recipeIndex - 1]
  
    return res.render('user/recipe', { items: id } )
}