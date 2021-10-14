const sendMail = require('../utils/sendMail');
const asyncHandler = require('../middleware/asyncHandler');

exports.contact = asyncHandler(async (req, res, next) => {
  const { name, email, subject, message } = req.body;

  const language = req.body.language || 'en';

  const options = {
    subject,
    message: `
    <html>
      <body>
        <p>Hello Tichif,</p>
        <p>Je suis ${name}, adresse mail: <a href="mailto:${email}">${email}</a></p>
        <p>J'écris au sujet de: ${subject}</p>
        <p>${message}</p>
      </body>
    </html>
    `,
  };

  await sendMail(options);

  return res.status(200).json({
    success: true,
    message:
      language === 'en'
        ? 'Your message has been sent.'
        : 'Votre message a été envoyé.',
  });
});
