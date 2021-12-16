// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import nba from "./api/index";
import { DEFAULT_PLAYER_INFO } from "./constant";
import SearchBar from "./Components/SearchBar";
import Profile from "./Components/Profile";
import { MainStyled } from "./MainStyled";
import BlogNav from "./Components/Nav/BlogNav";
import { OuterLayout } from "./Layout/Layout";
import Left from "./Components/Left/Left";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  adapt: "399px",
  se: "330px",
  teams: "350px",
  foot: "375px",
  max: "400px",
  blogNav: "610px",
  min: "540px",
  make: "548px",
  mobile: "500px",
  desktop: "768px",
  player: "751px",
  dont: "1024px",
  main: "850px",
  balls: "930px",
  post: "940px",
  avatar: "1050px",
  kobe: "1200px",
  mind: "1100px",
  mins: "1300px",
  minsx: "1280px",
  minss: "1500px",
  team: "1700px",
  big: "1900px",
  img: "1201px",
};
function App() {
  const [playerInfo, setPlayerInfo] = useState(DEFAULT_PLAYER_INFO);
  console.log(playerInfo);
  useEffect(() => {
    // window.nba = nba;
    loadPlayerInfo("Stephen Curry");
  }, []);
  const loadPlayerInfo = (playerName) => {
    //playerId is getting from front end
    //nba.findPlayer('Stephen Curry').playerId 解构用法
    //PlayerID: xxx 赋值
    nba.stats
      .playerInfo({ PlayerID: nba.findPlayer(playerName).playerId })
      .then((info) => {
        //call back: 'then' is called until all the data is fetched successfully, and store into 'info'
        console.log(info);
        const playInfo = Object.assign(
          info.commonPlayerInfo[0],
          info.playerHeadlineStats[0]
        );
        console.log(playInfo);
        setPlayerInfo(playInfo);
        // setState({ playerInfo: playInfo }); //set states
      });
  };

  const handleSelectPlayer = (playerName) => {
    loadPlayerInfo(playerName);
  };
  return (
    <ThemeProvider theme={theme}>
      <MainStyled>
        <div class="circle"></div>
        <OuterLayout>
          <BlogNav />
          <div className="hero">
            <div className="left">
              <Left />
            </div>
            <div className="right">
              <SearchBar handleSelectPlayer={handleSelectPlayer} />
              <Profile playerInfo={playerInfo} />
            </div>
          </div>
        </OuterLayout>
      </MainStyled>
    </ThemeProvider>
  );
}

export default App;
