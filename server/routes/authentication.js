'use strict';

const { Router } = require('express');

const bcryptjs = require('bcryptjs');
const Donor = require('./../models/donor');

const router = new Router();

router.post('/sign-up', (req, res, next) => {
  const { name, email, password } = req.body;
  bcryptjs
    .hash(password, 10)
    .then((hash) => {
      return Donor.create({
        name,
        email,
        passwordHashAndSalt: hash
      });
    })
    .then((donor) => {
      req.session.donorId = donor._id;
      res.json({ donor });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-in', (req, res, next) => {
  let donor;
  const { email, password } = req.body;
  console.log(req.session);
  Donor.findOne({ email })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        donor = document;
        return bcryptjs.compare(password, donor.passwordHashAndSalt);
      }
    })
    .then((result) => {
      donor;
      if (result) {
        req.session.donorId = donor._id;

        res.json({ donor });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/verify', (req, res) => {
  const donor = req.donor || null;
  res.json({ donor: donor });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

module.exports = router;
