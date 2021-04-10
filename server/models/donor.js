'use strict';

const mongoose = require('mongoose');

const donorschema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHashAndSalt: {
    type: String
  }
});

module.exports = mongoose.model('Donor', donorschema);
