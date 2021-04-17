'use strict';

const express = require('express');

const Donor = require('./../models/donor');
const Template = require('./../models/template');
const Dare = require('./../models/dare');

const routeGuard = require('./../middleware/route-guard');
const uploadMiddleware = require('./../middleware/file-upload');

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

//| GET | /dare/create/:id | Displays single dare | ❌ |

router.get('/create/:id', routeGuard, async (req, res, next) => {
  try {
    const template = await Template.findById(req.params.id);
    console.log('dare/create/:id passes');
    console.log(template);
    res.json({ template });
  } catch (error) {
    next(error);
  }
});

//| POST | /dare/create/:id | Allow donors to create a dare | ❌ |

router.post('/create/:id', routeGuard, async (req, res, next) => {
  try {
    const template = await Template.findById(req.params.id);
    console.log('dare/create/:id passes the template:');
    console.log(template);

    const donor = req.donor._id;
    console.log('req.donor._id passes the donor:');
    console.log(donor);
    const { daredname, daredemail, price } = req.body;
    console.log('req.body passes:');
    console.log(req.body);
    const dare = await Dare.create({
      template: {
        _id: template._id,
        name: template.name,
        description: template.description,
        image: template.image,
        price: template.price
      },
      donor: donor,
      dared: {
        name: daredname,
        email: daredemail
      },
      price
    });
    res.json({ dare });
    console.log({ dare });
  } catch (error) {
    next(error);
  }
});

//| GET | /dare/id/confirmation | Say Dare is created and email sent| ❌ |

router.get('/:id/confirmation', routeGuard, async (req, res, next) => {
  try {
    const dare = await Dare.findById(req.params.id)
      .populate('template')
      .populate('donor');

    console.log('dare/:id/confirmation passes');
    console.log(dare);
    res.json({ dare });
  } catch (error) {
    next(error);
  }
});

//| GET | /dare/id/donor | Displays dare infos for donor | ❌ |

router.get('/:id/donor', routeGuard, async (req, res, next) => {
  try {
    const dare = await Dare.findById(req.params.id)
      .populate('template')
      .populate('donor');

    console.log('dare/:id/donor passes');
    console.log(dare);
    res.json({ dare });
  } catch (error) {
    next(error);
  }
});

//| POST | /dare/id/donor | Allow donor to confirm or decline dare | ❌ |

//| GET | /dare/id/dared | Displays dare infos for dared | ❌ |
router.get('/:id/dared', async (req, res, next) => {
  try {
    const dare = await Dare.findById(req.params.id)
      .populate('template')
      .populate('donor');

    console.log('dare/:id/dared passes');
    console.log(dare);
    res.json({ dare });
  } catch (error) {
    next(error);
  }
});

//| POST | /dare/id/dared | Allow dared to upload or reject dare | ❌ |

module.exports = router;
