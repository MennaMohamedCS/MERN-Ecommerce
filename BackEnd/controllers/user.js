const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/user');

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) 
  {
    return next( new HttpError('Invalid inputs passed, please check your data.', 422) );
  }
  const { name, email, password, street, city, phone } = req.body;

  let existingUser
  try 
  {
    existingUser = await User.findOne({ email })
  } 
  catch (err) 
  {
    const error = new HttpError( 'Signing up failed, please try again later.',500 );
    return next(error);
  }
  
  if (existingUser)
  {
    return next( new HttpError('User exists already, please login instead.',422) );
  }
  
  const createdUser = new User({
    name,
    email,
    password,
    street, 
    city, 
    phone
  });

  try
  {
    await createdUser.save();
    return res.send(await createdUser.genAuthToken());
  } 
  catch (err)
  {
    const error = new HttpError('Signing up failed, please try again.',500);
    return next(error);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try
  {
    existingUser = await User.findOne({ email })
  } 
  catch (err)
  {
    const error = new HttpError('Logging in failed, please try again later.',500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError('Invalid credentials, could not log you in.',401);
    return next(error);
  }

  const isMatch = await existingUser.checkPassword(password);
  if (!isMatch) {
    return next( new HttpError('Password not correct for given user', 400) );
  }

  return res.send(existingUser.genAuthToken());

  //res.json({message: 'Logged in!'});
};

//exports.getUsers = getUsers;
exports.signup = signup;
exports.signin = signin;
