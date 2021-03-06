const express = require('express')
const users = require('./controllers/user')
const recipes = require('./controllers/admin')

const routes = express.Router()

routes.get('/', users.home)
routes.get('/sobre', users.sobre)
routes.get('/recipes', users.recipes)
routes.get('/recipes/:index', users.showIndex)


routes.get('/admin/recipes', recipes.index) // Mostrar a lista de receitas
routes.get('/admin/recipes/create'  , recipes.create) // Mostrar formulário de nova receita
routes.get('/admin/recipes/:id', recipes.show) // Exibir detalhes de uma receita
routes.get('/admin/recipes/:id/edit', recipes.edit) // Mostrar formulário de edição de receita

routes.post('/admin/recipes', recipes.post) // Cadastrar nova receita
routes.put('/admin/recipes', recipes.put) // Editar uma receita
routes.delete('/admin/recipes', recipes.delete) // Deletar uma receita

module.exports = routes