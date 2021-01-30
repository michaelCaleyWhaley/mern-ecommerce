const { validationResult } = require("express-validator");
const { mongoConnect } = require("../helpers/mongoConnect.js");
const { User } = require("../models/user");

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, about = "" } = req.body;
  const newUser = await User({
    name,
    email,
    password,
    about,
  });

  try {
    mongoConnect(async (db) => {
      const collection = db.collection("users");

      const existingUser = await collection.findOne({ email: newUser.email });
      if (existingUser) {
        res.status(400).json({ error: "Email already registered." });
        return;
      }

      await collection.insertOne(newUser);

      newUser.password = undefined;

      res
        .status(200)
        .json({ success: true, user: { name: newUser.name, email: newUser } });
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

exports.signin = (req, res) => {};
