const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Product = require('../models/product');
const jwt = require('jsonwebtoken');

const getProducts = async (req, res, next) => {
    let products;
    try 
    {
        products = await Product.find();
    } 
    catch (err)
     {
      const error = new HttpError('Fetching products failed, please try again later.',500 );
      return next(error);
    }
    return res.send(products);
}

const getProductById = async (req, res) => {
    let product ;
    try{
        product = await Product.findById(req.params.id).populate('user');
    }
    catch{
        const error = new HttpError('Fetching products failed, please try again later.',500 );
        return next(error);
    }

    if (!product) return new HttpError("Coudn't find a product with the given id",404 );
    return res.send(product);
};

const createProduct = async (req, res, next) => {
    //Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
    {
        return next( new HttpError('Invalid products passed, please check your data.', 422) );
    }
    const { title, about, category, image, price, quantity } = req.body;
    //Check if found
    let existingProduct
    try 
    {
        existingProduct = await Product.findOne({ title }) && await Product.findOne({ about }) ;
    } 
    catch (err) 
    {
        const error = new HttpError( 'Add New Product failed, please try again later.',500 );
        return next(error);
    }
    if (existingProduct)
    {
        return next( new HttpError('Product exists already, please insert New Data.',422) );
    }
    //Check if login
    const token = req.header('auth-token');
    if (!token) 
    return next( new HttpError('Unauthorized, please login first', 401) );
    try 
    {
        const user = jwt.verify(token,'p@ssw0rd');
        const product = new Product({ title, about, category, image, price, quantity, user: user._id });
        //console.log(product);
        await product.save();
        return res.send(product);
    } 
    catch (err) 
    {
        return next( new HttpError('Invalid token', 401) );
    }
    
};




exports.getProducts = getProducts;
exports.createProduct = createProduct;
exports.getProductById = getProductById;