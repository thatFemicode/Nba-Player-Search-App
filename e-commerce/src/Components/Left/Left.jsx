import React from "react";
import { LeftStyled } from "./LeftStyled";
// import Ky from "./Ky.svg";
const Left = () => {
  return (
    <LeftStyled>
      <div className="text">
        <h1>Search for your favorite players</h1>
        <p>
          Players library is a platform created to search for stats of current
          NBA players, think of it as "Google" but for NBA players{" "}
        </p>
      </div>
    </LeftStyled>
  );
};

export default Left;
