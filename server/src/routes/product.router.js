const { Router } = require('express')
const productController = require('../controllers/product.controller')
const router = Router()

router.get('/get-all/:categoryName', productController.getAll)
router.get('/get-all', productController.getAll)

router.post('/create', productController.createProduct)


module.exports = router