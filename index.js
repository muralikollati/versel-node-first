// api/index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Export as a serverless function
module.exports = (req, res) => {
  app(req, res);
};
