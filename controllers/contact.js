const { validationResult } = require('express-validator');

const ErrorResponse = require('../utils/ErrorResponse');
const sendMail = require('../utils/sendMail');
const asyncHandler = require('../middleware/asyncHandler');

exports.contact = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty) {
    return res.status(422).json({
      success: false,
      errors: errors.array(),
    });
  }

  console.log(req.body);
});
