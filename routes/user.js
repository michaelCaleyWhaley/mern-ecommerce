const express = require("express");
const router = express.Router();

const { main } = require("../controllers/user");

router.get("/", main);

module.exports = router;
