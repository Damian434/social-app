require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const postRoutes = require('./routes/post');
const { debug } = require('console');

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', postRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
   console.log('MongoDB Connected...');
   app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('Server listening on port ' + PORT);
  });
  })
  .catch((err) => {
    if (err) throw err;
  });


