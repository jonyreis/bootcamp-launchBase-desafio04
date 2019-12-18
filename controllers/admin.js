const fs = require('fs')
const data = require('../data.json')

exports.index = function (req, res) {
    return res.render('admin/index', { items: data.recipes })
}

exports.create = function (req, res) {
    return res.render('admin/create')
}

exports.post = function (req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }

    let { image, title, author, ingredients, preparation, information } = req.body

    const id = Number(data.recipes.length + 1 )

    data.recipes.push({
        id,
        title,
        author,
        image,
        ingredients,
        preparation,
        information
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send('Write file error!')

        return res.redirect('/admin/recipes')
    })

    // return res.send(req.body)
}

exports.show = function (req, res) {

    const { id } = req.params

    const foundRecipe = data.recipes.find(function (recipe) {
        return id == recipe.id
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    return res.render('admin/recipe', { items: foundRecipe })

}

exports.edit = function (req, res) {

    const { id } = req.params

    const foundRecipe = data.recipes.find(function (recipe) {
        return id == recipe.id
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    return res.render('admin/edit', { recipe: foundRecipe })
}

exports.put = function (req, res) {

    const { id } = req.body

    const foundRecipe = data.recipes.find(function (recipe) {
        return id == recipe.id
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    const recipe = {
        ...foundRecipe,
        ...req.body
    }

    data.recipes[id - 1] = recipe

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send('Write file error!')

        return redirect(`/admin/recipes/${id}`)
    })

}

exports.delete = function (req, res) {

    const { id } = req.body

    const filteredRecipes = data.recipes.filter(function(recipe) {
        return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write file error!')

        return res.redirect('/admin/recipes')
    })

}