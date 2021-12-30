require("dotenv").config();
/* ==== External Modules ==== */
const path = require("path");
const express = require("express");
const cors = require("cors");

/* ==== Internal Modules ==== */
const routes = require("./routes");

/* ==== Instanced Modules  ==== */
const app = express(); // create express app

/* ====  Configuration  ==== */
//NOTE bring in config from packages
const config = require("@monorepoexample/config");

/* ====  Middleware  ==== */
//Cors
app.use(cors());
// to serve static files and to serve the react build
app.use(express.static(path.join("build")));
app.use(express.static("public"));
// JSON parsing middleware
app.use(express.json());
//custom logger to show the url and req.body if one exists
app.use((req, res, next) => {
  console.log(req.url);
  // is there an auth header
  console.log("AUTH HEADER: ", req.headers.authorization);
  if (req.body) {
    console.log("BODY BEING SENT: ", req.body);
  }
  next();
});

/* ====  Routes & Controllers  ==== */
// All of our routes will start with "/api", we're going to route them through index.js
app.use("/api", routes);

//This is to catch anything that's trying to hit an api route that isn't made
app.all("/api/*", function (req, res, next) {
  res.send("THIS IS NOT AN API ROUTE");
});

//IS THE REACT FULL STACK MAGIC MIDDLEWARE
/*
ANY REQUEST not covered by routes express makes -- will get piped to this middleware
and this middleware's job is to handover control to react
*/
app.use((req, res, next) => {
  console.log(req.headers);
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/* ====  Server Listener / Connection ==== */
// start express server
app.listen(config.PORT, () => {
  console.log(`server started on port ${config.PORT}`);
});
