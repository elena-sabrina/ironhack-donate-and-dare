'use strict';

const Donor = require('../models/donor');

module.exports = (req, res, next) => {
  const donorId = req.session.userId;
  if (donorId) {
    Donor.findById(donorId)
      .then((donor) => {
        req.user = donor;
        next();
      })
      .catch((error) => {
        next(error);
      });
  } else {
    next();
  }
};
