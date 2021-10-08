const { check, validationResult } = require('express-validator');

exports.validateContact = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Tu dois mettre ton nom.')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('Ton nom est incorrect')
    .bail(),

  check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Tu dois mettre ton email.')
    .normalizeEmail()
    .isEmail()
    .withMessage('Ton email est incorrect.')
    .isLength({ max: 50 })
    .withMessage('Ton email est incorrect.')
    .bail(),

  check('message')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Tu dois mettre ton message.')
    .bail()
    .isLength({ min: 5 })
    .withMessage('Ton message est incorrect.')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({
        success: false,
        error: errors.array(),
      });
    next();
  },
];
