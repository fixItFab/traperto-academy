const words = require("./words.json");
const express = require("express");
const app = express();
const port = 3000;

app.get("/isWordInList", (req, res) => {
  if (!req.query.word) {
    res.sendStatus(400);
  }
  const found = words.some(
    (word) => word.toLowerCase() === req.query.word.toLowerCase()
  );
  res.send(found);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
