const { body } = require('express-validator');

exports.validateContact = (req, res, next) => {
  body('email')
    .notEmpty()
    .withMessage('Tu dois mettre ton message')
    .isEmail()
    .normalizeEmail()
    .isLength({ min: 10, max: 90 })
    .withMessage("Ce n'est pas un email.");

  body('name')
    .notEmpty()
    .withMessage('Tu dois mettre ton nom.')
    .matches(/^[a-zA-ZÀ-ÿ-. ]*$/)
    .isLength({ min: 3, max: 50 })
    .withMessage('Ton nom est incorrect.');

  body('message')
    .notEmpty()
    .withMessage('Tu dois mettre ton message')
    .isLength({ min: 3, max: 50 })
    .withMessage('Ton message est incorrect.');
};
