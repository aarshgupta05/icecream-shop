const { Router } = require('express')
const generalController = require('../controllers/generalController')

const router = Router()


router.get('/', generalController.main)
router.get('/about/', generalController.about)
router.get('/promotions/', generalController.promotions)
router.get('/cart/', generalController.cart)
router.get('/checkout/', generalController.checkout_get)
router.post('/checkout/', generalController.checkout_post)
router.get('/contact/', generalController.contact_get)
router.post('/contact/', generalController.contact_post)


module.exports = router;
