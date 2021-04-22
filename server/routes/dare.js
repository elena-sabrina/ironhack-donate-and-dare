'use strict';

const express = require('express');

const Donor = require('./../models/donor');
const Template = require('./../models/template');
const Dare = require('./../models/dare');

const routeGuard = require('./../middleware/route-guard');
const uploadMiddleware = require('./../middleware/file-upload');
const processPayment = require('./../utilities/process-payment');
const sendEmail = require('./../utilities/send-email');

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

    res.json({ template });
  } catch (error) {
    next(error);
  }
});

//| POST | /dare/create/:id | Allow donors to create a dare | ❌ |

router.post('/create/:id', routeGuard, async (req, res, next) => {
  try {
    const template = await Template.findById(req.params.id);

    const donorId = req.donor._id;
    const donorName = req.donor.name;
    const donorEmail = req.donor.email;

    const { daredname, daredemail, price, token, charity } = req.body;

    const payment = await processPayment({
      token,
      amount: Math.floor(price * 100),
      currency: 'EUR'
    });
    console.log('paymentId', payment.id);

    const dare = await Dare.create({
      template: {
        _id: template._id,
        name: template.name,
        description: template.description,
        image: template.image,
        price: template.price
      },
      donor: donorId,
      dared: {
        name: daredname,
        email: daredemail
      },
      price,
      payment_id: payment.id,
      charity,
      status: 'dare-sent',
      video: null
    });

    console.log('sendemail going to run');
    await sendEmail({
      receiver: `${daredemail}`,
      subject: `You've been dared for a good cause`,
      body: `
      <h1> Hi ${daredname}, ${donorName} has dared you for a good cause.  </h1>
      <p> Fullfill your dare and ${donorName} pays ${price} Euros to ${charity}. </p>
      `,
      domain: `http://localhost:3001/`,
      path: `{dare/${dare._id}/dared}`,
      linkdescription: `Fullfill your Dare`
    });
    await sendEmail({
      receiver: `${donorEmail}`,
      subject: `You've been dared for a good cause`,
      body: `
      <h1> Hi ${donorName}, you have dared ${daredname} for a good cause.  </h1>
      <p> If ${daredname} fulfills the dare your donation of ${price} Euros will be sent to ${charity}. 
Otherwise it will be transfered back to you. </p>
      `,
      domain: `http://localhost:3001/`,
      path: `{dare/${dare._id}/donor}`,
      linkdescription: `View status of your Dare`
    });
    res.json({ dare, payment });
  } catch (error) {
    console.log(error);
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

    console.log('dare/:id/donor route running');

    res.json({ dare });
  } catch (error) {
    next(error);
  }
});

//| PATCH | /dare/id/donor | Changing the state| ❌ |

router.patch('/:id/donor', routeGuard, async (req, res, next) => {
  try {
    const dareId = req.params.id;
    const { confirmation } = req.body;
    console.log('confirmation');
    console.log(confirmation);

    if (confirmation === 'confirming') {
      const dare = await Dare.findByIdAndUpdate(
        dareId,
        {
          $set: {
            status: 'confirmed'
          }
        },
        { new: true }
      );
      /* await sendEmail({
      receiver: `${donorEmail}`,
      subject: `Thank you for your donation`,
      body: `
      <h1> Hi ${donorName}, thank you for confirming ${daredname}'s dare.  </h1>
      <p> Your donation of ${price} Euros  will be sent to  ${charity}. </p>
      `,
      domain: `http://localhost:3001/`,
      path: `{dare/${dare._id}/donor}`,
      linkdescription: `View status of your Dare`
    });*/
      console.log(('dare:', dare));
      res.json({ dare });
    } else {
      const dare = await Dare.findByIdAndUpdate(
        dareId,
        {
          $set: {
            status: 'rejected'
          }
        },
        { new: true }
      );
      console.log('dare');
      res.json({ dare });
    }
  } catch (error) {
    next(error);
  }
});

//| GET | /dare/id/dared | Displays dare infos for dared | ❌ |
router.get('/:id/dared', async (req, res, next) => {
  try {
    const dare = await Dare.findById(req.params.id)
      .populate('template')
      .populate('donor');

    res.json({ dare });
  } catch (error) {
    next(error);
  }
});

//| PATCH | /dare/id/dared | Changing the state| ❌ |

router.patch(
  '/:id/dared',
  uploadMiddleware.single('picture'),
  routeGuard,
  async (req, res, next) => {
    try {
      console.log('patch /:id/dared ruuuunning');
      const dareId = req.params.id;
      const video = req.body.video;
      const videopath = req.file.path;
      console.log(videopath);

      const dare = await Dare.findByIdAndUpdate(
        dareId,
        {
          $set: {
            video: video
          }
        },
        { new: true }
      );

      res.json({ dare });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
