const express = require('express');
const { addToCart, updateCartItem, removeCartItem } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/cart', protect, addToCart);
router.put('/cart/:id', protect, updateCartItem);
router.delete('/cart/:id', protect, removeCartItem);

module.exports = router;