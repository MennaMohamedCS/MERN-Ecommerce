const jwt = require('jsonwebtoken');
const User = require('../models/user');
const HttpError = require('../models/http-error');

module.exports = authMid = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return next( new HttpError('Unauthorized, please login first', 401) );

    try {
        const user = jwt.verify(token, 'p@ssw0rd');
        req.user = await User.findById(user._id);
        next();
    } catch (err) {
        return next(new HttpError('Invalid token',401));
    }
};