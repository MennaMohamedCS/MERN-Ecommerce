const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/user');
const cartController = require('../controllers/cart');
const favoriteController = require('../controllers/favorite');

const authMid = require('../middlewares/auth');

const router = express.Router();


router.post(
  '/signup',
  [
    check('name').not().isEmpty(),
    check('email').isEmail(),
    check('password').isLength({ min: 8 }),
    check('street').not().isEmpty(),
    check('city').not().isEmpty(),
    check('phone').not().isEmpty(),

  ],
  usersController.signup
);

router.post('/signin', usersController.signin);


router.put('/add', authMid, cartController.addToCart);
router.get('/cart', authMid,cartController.getCartOfUser);

router.put('/favorite',authMid, favoriteController.addFavorite);
router.get('/favorite', authMid, favoriteController.getFavoriteOfUser);
router.delete('/favorite', authMid, favoriteController.deleteSavedItem);



module.exports = router;
