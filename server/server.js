// const NBA = require("nba");
// const curry = NBA.findPlayer("Stephen Curry");
// console.log(curry);
// NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(console.log);
const express = require("express");
const NBA = require("nba");

const app = express();
const port = 5000;
// const curry = NBA.findPlayer("Stephen Curry");
// console.log(curry);
// NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(console.log);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/players/:playerId", (req, res, next) => {
  NBA.stats
    .playerInfo({ PlayerID: req.params.playerId })
    .then((playerInfo) => {
      // console.log(playerInfo);
      res.send(JSON.stringify(playerInfo));
    })
    .catch((e) => {
      next(e);
    });
});

// app.get("/players/:playerId/shots", (req, res, next) => {
//   NBA.stats
//     .shots({ PlayerID: req.params.playerId, Season: "2018-19" })
//     .then((shots) => {
//       res.send(JSON.stringify(shots));
//     })
//     .catch((e) => {
//       next(e);
//     });
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
