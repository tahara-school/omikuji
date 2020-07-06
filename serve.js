const express = require('express');
const app = express();
const port = 3000;

fortunes = ['大吉', '吉', '中吉', '小吉', '末吉', '凶'];

app.get('/omikuji/', (req, res) => {
  randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  result = {
    fortune: randomFortune
  };
  res.json(result);
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}/`);
});
