// server.js (for local only)
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ Local server working now!");
});

app.get("/test", (req, res) => {
  res.send("✅ this is test route");
});

app.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});