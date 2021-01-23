const { User } = require("../models/user");

exports.signup = async (req, res) => {
  const { name, email, password, about } = req.body;
  if ((!name, !email, !password, !about)) {
    res.send("Creds missing");
    return;
  }

  const newUser = await User({
    name,
    email,
    password,
    about,
  });

  console.log(`newUser: `, newUser);

  res.send("hello from controller");
};
