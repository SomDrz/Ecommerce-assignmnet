const router = require('express').Router();
const { createOrder, getOrders } = require('../controllers/orderController');
const { Verify } = require('../middlewares/authMiddleware');

router.post('/', Verify, createOrder);
router.get('/', Verify, getOrders);

module.exports = router;
