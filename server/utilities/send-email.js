'use strict';

const nodemailer = require('nodemailer');

const dotenv = require('dotenv');
dotenv.config();


const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD
  }
});

const sendEmail = async ({ receiver, subject, body }) => {
  console.log('send-email utility running');
  const result = await transport.sendMail({
    from: process.env.GMAIL_ADDRESS,
    to: receiver,
    subject,
    html: `
        <html>
          <head>
            <style>
              a {
                background-color: yellow;
              }
            </style>
          </head>
          <body>
            ${body}
          </body>
        </html>
      `
  });
  console.log('result');
  console.log(result);
  return result;
};

module.exports = sendEmail;
