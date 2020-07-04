
const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = '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'


sgMail.setApiKey(SENDGRID_API_KEY);

const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg);