const { Router } = require('express')
const specificController = require('../controllers/specificController')

const router = Router()


// Main Flavour/Toppings/Specials/etc Page
router.get('/:type/', specificController.type_get)


// All Products Page
router.get('/:type/:id', specificController.id_get)


// 404 Page for GET request
router.get('*', specificController._404_get)


// 404 Page for POST request
router.post('*', specificController._404_post)
