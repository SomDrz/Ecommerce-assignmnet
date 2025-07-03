const router = require('express').Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { Verify } = require('../middlewares/authMiddleware');
const { Roles } = require('../middlewares/roleMiddleware');

router.get('/', getProducts);
router.post('/', Verify, Roles('admin'), createProduct);
router.put('/:id', Verify, Roles('admin'), updateProduct);
router.delete('/:id', Verify, Roles('admin'), deleteProduct);

module.exports = router;
