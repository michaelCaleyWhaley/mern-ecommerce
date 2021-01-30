const express = require("express");
const userInputValidation = require("../validator/userInputValidation");

const router = express.Router();

const { signup, signin } = require("../controllers/user");

router.post("/signup", userInputValidation, signup);
router.post("/signin", signin);

module.exports = router;
