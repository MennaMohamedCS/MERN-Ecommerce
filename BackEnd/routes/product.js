const express = require('express');
const { check } = require('express-validator');

const productsController = require('../controllers/product');

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProductById);

router.post('/', 
        [
            check('title').not().isEmpty(),
            check('about').not().isEmpty(),
            check('image').not().isEmpty(),
            check('price').not().isEmpty(),
            check('category').not().isEmpty(),
            check('quantity').not().isEmpty(),
        ], 
            productsController.createProduct );


module.exports = router;
