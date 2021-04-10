'use strict';

const express = require('express');

const Donor = require('./../models/donor');
const Template = require('./../models/template');
const Dare = require('./../models/dare');

const routeGuard = require('./../middleware/route-guard');

const router = new express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    console.log('checkout/:id passes');
    const dare = await Dare.findById(req.params.id);
    console.log(dare);
    res.json({ dare });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
