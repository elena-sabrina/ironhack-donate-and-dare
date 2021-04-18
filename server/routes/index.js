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
    })
      .populate('donor')
      .populate('template');

    console.log('profile/:id passes');
    console.log(dares);

    const donor = await Donor.findOne({ _id: req.session.donorId });
    console.log('donor');
    console.log(donor);

    res.json({ donor, dares });
  } catch (error) {
    next(error);
  }
});

router.patch('/profile/:id', routeGuard, async (req, res, next) => {
  console.log('route patch');
  console.log(req.body);
  console.log(req.user._id);
  /*
  Donor.findByIdAndUpdate(userId, {
      name: data.name,
      email: data.email,
      //passwordHashAndSalt: passwordHashAndSalt
    })
      .then((users) => {
        res.redirect('/profile');
      })
      .catch((error) => {
        console.log(error);
        next(error);
      });
  */
});

module.exports = router;
