const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const HttpError = require('./models/http-error');

app.use(bodyParser.json());

app.use(require('cors')());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});



mongoose.connect('mongodb+srv://<name>:<password>@main.ml6py.mongodb.net/onlineSellingDatabase?retryWrites=true&w=majority')     
        .catch(error => console.log("error***: " ,error));
app.listen(5000);