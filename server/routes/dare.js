'use strict';

const express = require('express');

const Donor = require('./../models/donor');
const Template = require('./../models/template');
const Dare = require('./../models/dare');

const routeGuard = require('./../middleware/route-guard');

const router = new express.Router();

//| GET | /dare/all | Displays all dare templates | ❌ |
router.get('/all', async (req, res, next) => {
  try {
    const templates = await Template.find();
    console.log('route get dare/all returns templates:');
    console.log(templates);
    res.json({ templates });
  } catch (error) {
    next(error);
  }
});

router.get('/create/:id', async (req, res, next) => {
  try {
    const template = await Template.findById(req.params.id);
    console.log('dare/create/:id passes');
    console.log(template);
    res.json({ template });
  } catch (error) {
    next(error);
  }
});

//| GET | /dare/create/:id | Displays single dare | ❌ |
//| POST | /dare/create/:id | Allow donors to create a dare | ❌ |

//| GET | /dare/id/dared | Displays dare infos for dared | ❌ |
//| POST | /dare/id/dared | Allow dared to upload or reject dare | ❌ |

//| GET | /dare/id/donor | Displays dare infos for donor | ❌ |
//| POST | /dare/id/donor | Allow donor to confirm or decline dare | ❌ |
module.exports = router;
