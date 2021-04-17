'use strict';

const Donor = require('../models/donor');

module.exports = (req, res, next) => {
  const donorId = req.session.donorId;
  if (donorId) {
    Donor.findById(donorId)
      .then((donor) => {
        req.donor = donor;
        next();
      })
      .catch((error) => {
        next(error);
      });
  } else {
    next();
  }
};

