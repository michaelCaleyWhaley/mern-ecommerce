require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

// ROUTES
const userRoutes = require("./routes/user");

// APP
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.get("/", (req, res) => {res.send('root')});
app.use("/api", userRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
