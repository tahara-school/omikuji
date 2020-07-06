const express = require('express');
const app = express();
const port = 3000;

fortunes = ['大吉', '吉', '中吉', '小吉', '末吉', '凶'];
statistics = {};

for (f of fortunes) {
  statistics[f] = 0;
}

app.get('/omikuji/', (req, res) => {
  randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  statistics[randomFortune]++;

  result = {
    fortune: randomFortune
  };
  res.json(result);
});

app.get('/omikuji/analytics/', (req, res) => {
  res.json(statistics);
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}/`);
});
