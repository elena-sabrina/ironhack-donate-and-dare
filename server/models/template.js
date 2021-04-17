'use strict';

const mongoose = require('mongoose');

const templateschema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String
  },
  price: {
      type: Number
  }
});

module.exports = mongoose.model('Template', templateschema);

