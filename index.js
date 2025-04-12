// server.js (for local only)
const express = require("express");

const app = express();
const PORT = 4000
app.get("/", (req, res) => {
  res.status(200).json("✅ Local server working now!");
});

app.get("/test", (req, res) => {
  res.status(200).json("✅ this is test route");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;