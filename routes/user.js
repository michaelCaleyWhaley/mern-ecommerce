const express = require("express");
const userSignUpValidation = require("../validator/userSignUpValidation");
const userSignInValidation = require("../validator/userSignInValidation");

const router = express.Router();

const { signup, signin } = require("../controllers/user");

router.post("/signup", userSignUpValidation, signup);
router.post("/signin", userSignInValidation, signin);

module.exports = router;
