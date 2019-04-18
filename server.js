const express = require("express");
var logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
// const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Use morgan logger for logging requests
app.use(logger("dev"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Provide access to API (API.js) route in src and api routes (books.js) in routes
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, ".client/build/index.html"));
});

// Connect to mongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
