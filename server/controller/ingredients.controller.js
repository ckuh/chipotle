const Ingredient = require('../model/ingredients.model.js')
const Q = require('q')

const getIngredients = (req, res) => {
  const Ingredients = Q.nbind(Ingredient.find, Ingredient)

  Ingredients()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((error) => {
      res.status(400).send(error)
    })
}

const postIngredients = (req, res) => {
  const Ingredients = Q.nbind(Ingredient.create, Ingredient)
  Ingredients({
    name: req.body.name,
    url: req.body.url
  })
    .then(() => {
      res.status(200).json({'success': true})
    })
    .catch((error) => {
      console.log('failed get, in /projects')
      res.status(400).send(error)
    })
}

exports.ingredients = {
  get: getIngredients,
  post: postIngredients
}
