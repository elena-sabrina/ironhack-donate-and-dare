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
    const dares = await Dare.find({
      donor: { _id: req.session.donorId }
    });
    const donor = await Donor.findOne({ _id: req.session.donorId });
    console.log(donor);

    res.json({ donor, dares });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
