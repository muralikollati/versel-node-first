// server.js (for local only)
const express = require("express");

const app = express();
app.use(express.json());

app.listen(5001, () => {
    console.log("Server running at http://localhost:5001");
  });

app.get("/", (req, res) => {
  res.send("✅ Local server working!");
});

module.exports = app
