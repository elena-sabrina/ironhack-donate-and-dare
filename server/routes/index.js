'use strict';

const express = require('express');

const Donor = require('./../models/donor');
const Template = require('./../models/template');
const Dare = require('./../models/dare');

const routeGuard = require('./../middleware/route-guard');

const router = new express.Router();

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

router.get('/profile/:id', routeGuard, async (req, res, next) => {
  try {
    console.log('route running');
    const dares = await Dare.find({
      donor: { _id: '606e5b21ffcba08b8665da85' }
    });
    console.log('dare/profile/:id passes the dares:');
    console.log(dares);
    res.json({ dares });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
