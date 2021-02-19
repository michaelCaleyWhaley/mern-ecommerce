const { body } = require("express-validator");

module.exports = [
  body("name").not().isEmpty(),
  body("password").not().isEmpty().isLength({ min: 5 }),
  body("email").not().isEmpty().isEmail(),
];
