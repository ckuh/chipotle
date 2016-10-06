const router = require('express').Router()
const controller = require('../controller/ingredients.controller.js')

router.get('', controller.ingredients.get)
router.post('', controller.ingredients.post)

module.exports = router
