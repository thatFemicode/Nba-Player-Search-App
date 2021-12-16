import nba from "nba";
const SERVER_URL = "http://localhost:5000";
export default {
  ...nba, //spread get all info from NBA
  stats: {
    //get all the interface of NBA states ref:https://github.com/bttmly/nba/blob/master/doc/stats.md
    ...nba.stats,
    //para: playerID
    //Return :
    playerInfo: function ({ PlayerID }) {
      return fetch(`${SERVER_URL}/players/${PlayerID}`).then((res) =>
        res.json()
      ); //fetch...promission: 接收信息，等待下一步的操作
    },
    // shots: function ({ PlayerID }) {
    //   return fetch(`${SERVER_URL}/players/${PlayerID}/shots`).then((res) =>
    //     res.json()
    //   );
    // },
  },
};
