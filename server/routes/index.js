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
    const daresent = await Dare.find({
      $and: [{ donor: { _id: req.session.donorId } }, { status: 'dare-sent' }]
    })
      .populate('donor')
      .populate('template');

    const darevideouploaded = await Dare.find({
      $and: [
        { donor: { _id: req.session.donorId } },
        { status: 'video-uploaded' }
      ]
    })
      .populate('donor')
      .populate('template');

    const dareconfirmed = await Dare.find({
      $and: [{ donor: { _id: req.session.donorId } }, { status: 'confirmed' }]
    })
      .populate('donor')
      .populate('template');

    const darerejected = await Dare.find({
      $and: [{ donor: { _id: req.session.donorId } }, { status: 'rejected' }]
    })
      .populate('donor')
      .populate('template');

    const darecanceled = await Dare.find({
      $and: [{ donor: { _id: req.session.donorId } }, { status: 'canceled' }]
    })
      .populate('donor')
      .populate('template');

    const donor = await Donor.findOne({ _id: req.session.donorId });
    console.log('donor');
    console.log(donor);

    res.json({
      donor,
      daresent,
      darevideouploaded,
      dareconfirmed,
      darerejected,
      darecanceled
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/profile/:id', routeGuard, async (req, res, next) => {
  try {
    const donorId = req.session.donorId;
    console.log('donor:', donorId);
    console.log('req.body passes:');
    console.log(req.body);
    const { name, email, password } = req.body;
    const donor = await Donor.findByIdAndUpdate(
      donorId,
      {
        $set: {
          name,
          email,
          password
        }
      },
      { new: true }
    );

    console.log('donor');
    console.log(donor);

    res.json({ donor });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
