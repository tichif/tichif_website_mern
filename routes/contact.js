const router = require('express').Router();

const { contact } = require('../controllers/contact');
const { validateContact } = require('../middleware/validation');

router.route('/').post(validateContact, contact);

module.exports = router;
