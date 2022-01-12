const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This route is hidden, we won't be able to reach it using nginx as it is already returning index.html");
});

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
