module.exports = (req, res, next) => {
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

  transport
    .sendMail({
      rom: process.env.GMAIL_ADDRESS, // Sender
      to: process.env.GMAIL_ADDRESS,
      subject: 'Hello World',
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
          <h1>Welcome </h1>
          <a href="https://example.com">Confirm your email address</a>
        </body>
        </html>
        `
    })
    .then((result) => {
      console.log('email sent');
      console.log(result);
    })
    .catch((error) => {
      console.log('there was an error sending the email');
      console.log(error);
    });
};
