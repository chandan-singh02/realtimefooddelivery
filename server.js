// require("dotenv").config();
const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const PORT = process.env.PORT || 3300;

app.get("/", (req, res) => {
  res.render("home");
});
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// set Template engine
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");
