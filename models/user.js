const bcrypt = require("bcrypt");

const formatName = (name) => {
  if (typeof name !== "string" || name.length > 32) return null;
  return name.trim();
};

const formatString = (string) => {
  if (typeof string !== "string") return null;
  return string.trim();
};

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const userSchema = async ({
  name,
  email,
  password,
  about,
  role = 0,
  history = [],
}) => ({
  name: formatName(name),
  email: formatString(email),
  password: await hashPassword(password),
  about: formatString(about),
  role,
  history,
});

// (async function () {
//   const newUser = await userSchema({
//     name: "Michael",
//     email: "testemail",
//     password: "password",
//     about: "about",
//   });

//   console.log(`newUser: `, newUser);
//   console.log(`bcrypt.compare: `, await bcrypt.compare("password", newUser.password));
// })();

exports.user = userSchema;
