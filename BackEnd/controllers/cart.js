const HttpError = require('../models/http-error');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const addToCart = async (req, res, next) => {
  //Check if login
  const token = req.header('auth-token');
  if (!token)
    return next(new HttpError('Unauthorized, please login first', 401));
  try {
    const user = jwt.verify(token, 'p@ssw0rd');

    console.log(req.body);
    const { cart } = req.body;

    const userbuy = await User.findByIdAndUpdate(user._id, {
      $push: { cart },
    });

    return res.send(userbuy);
  } catch (err) {
    return next(new HttpError('Invalid token', 401));
  }
};

const getCartOfUser = async (req, res, next) => {
  return res.send(req.user.cart);
};

exports.addToCart = addToCart;
exports.getCartOfUser = getCartOfUser;
