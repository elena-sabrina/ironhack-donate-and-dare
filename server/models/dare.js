'use strict';

const mongoose = require('mongoose');

//mongoose.Schema.Types.ObjectId

const dareschema = new mongoose.Schema({
  template: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Template'
  },
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Donor'
  },
  price: {
    type: Number,
    required: true
  },
  payment_id: {
    type: String,
    trim: true
  },
  dared: {
    name: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      trim: true
    }
  },
  charity: {
    type: String,
    enum: ['bali-children', 'street-paw', 'solemen']
  },
  status: {
    type: String,
    enum: ['dare-sent', 'video-uploaded', 'confirmed', 'rejected', 'canceled']
  },
  video: {
    type: String
  }
});

module.exports = mongoose.model('Dare', dareschema);
