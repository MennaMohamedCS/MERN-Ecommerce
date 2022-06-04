const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    min: 4,
    max: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 8,
    max: 300,
  },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  phone: {
    type: Number,
    required: true,
    minlength: 11,
  },
  cart: [
    {
      id: { type: mongoose.Types.ObjectId, ref: 'Product' },
      addedQuantity: { type: Number, require: true },
      date: {type: Date ,required:true},
    },
  ],
  favorite:[
        {type: mongoose.Types.ObjectId,ref: 'Product',}
    ]
});

//To hash a password:
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(this.password, salt);

  this.password = hash;

  next();
});

//return function to used in controller
userSchema.methods.genAuthToken = function () {
  const token = jwt.sign(this.toJSON(), 'p@ssw0rd');
  // console.log('token : ', token);
  return token;
};

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};
module.exports = mongoose.model('User', userSchema);
