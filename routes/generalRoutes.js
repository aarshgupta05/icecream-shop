const { Router } = require('express')
const generalController = require('../controllers/generalController')

const router = Router()


// Main Page
router.get('/', generalController.main)

// About Page
router.get('/about/', generalController.about)

// Promotions Page
router.get('/promotions/', generalController.promotions)

// Cart Page
router.get('/cart/', generalController.cart)

// Fake (get) Checkout Page
router.get('/checkout/', generalController.checkout_get)

// Checkout Page
router.post('/checkout/', generalController.checkout_post)

// GET Contact Page
router.get('/contact/', generalController.contact_get)

// POST Contact Page
router.post('/contact/', generalController.contact_post)

