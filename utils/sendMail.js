const nodemailer = require('nodemailer');

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const message = {
    from: process.env.SMTP_USERNAME,
    to: 'charleshebertdalzon@gmail.com',
    subject: options.subject,
    html: options.message,
  };

  const info = await transporter.sendMail(message);

  console.log(`Message sent : %s`, info.messageId);
};

module.exports = sendMail;