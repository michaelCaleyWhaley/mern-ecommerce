require("dotenv").config();
const express = require("express");

// ROUTES
const userRoutes = require("./routes/user");

// APP
const app = express();

// ROUTES
app.use("/api", userRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
