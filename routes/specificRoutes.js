const { Router } = require('express')
const specificController = require('../controllers/specificController')

const router = Router()


router.get('/:type/', specificController.type_get)
router.get('/:type/:id', specificController.id_get)
router.get('*', specificController._404_get)
router.post('*', specificController._404_post)


module.exports = router;
