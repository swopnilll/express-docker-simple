const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from a node server inside a docker container part 3");
});

app.listen(3000, () => {
  console.log("listening at 3000");
});
