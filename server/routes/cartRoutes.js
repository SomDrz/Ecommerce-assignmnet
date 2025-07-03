const router = require('express').Router();
const { getCart, addCart, removeCart } = require('../controllers/cartController');
const { Verify } = require('../middlewares/authMiddleware');

router.get('/', Verify, getCart);
router.post('/add', Verify, addCart);
router.delete('/remove/:productid', Verify, removeCart);

module.exports = router;
