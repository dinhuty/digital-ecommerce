const { Router } = require('express')
const orderController = require('../controllers/order.controller')
const { auth } = require('../middlewares/auth')

const router = Router()

router.post('/create',
    auth,
    orderController.createOrder
)
router.get('/:userId',
    auth,
    orderController.getUserOrders
)

module.exports = router