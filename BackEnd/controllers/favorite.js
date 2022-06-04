const HttpError = require('../models/http-error');
const Product = require('../models/product');
const User = require('../models/user');

const addFavorite = async (req, res, next) => {
  console.log(req.body);
  const { id } = req.body;
  if (!id) return next(new HttpError('Product id is required', 400));
  const product = await Product.findById(id);
  if (!product)
    return next(
      new HttpError('The product you are looking for is not found', 404)
    );

  if (req.user.favorite.includes(product._id))
    return next(
      new HttpError('The product is already in your Favorite List', 404)
    );

  console.log(id);
  const user = await User.findByIdAndUpdate(req.user._id, {
    $push: { favorite: [product._id] },
  });

  return res.send(user);
};


const getFavoriteOfUser = async (req, res, next) => {
  return res.send(req.user.favorite);
};


const deleteSavedItem = async (req, res, next) => {
  console.log(req.body);
  const { id } = req.body;

  req.user.favorite = req.user.favorite.filter(productId => productId !== id);
  return res.send(await req.user.save());
};

exports.deleteSavedItem = deleteSavedItem;
exports.addFavorite = addFavorite;
exports.getFavoriteOfUser = getFavoriteOfUser;
