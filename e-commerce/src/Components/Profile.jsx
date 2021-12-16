import React from "react";
import { TEAM_PIC_URL_PREFIX, PROFILE_PIC_URL_PREFIX } from "../constant";
import { ProfileStyled } from "./ProfileStyled";
const Profile = ({ playerInfo }) => {
  const {
    teamAbbreviation,
    teamCity,
    teamName,
    playerName,
    height,
    weight,
    playerId,
    pts,
    reb,
    ast,
    school,
  } = playerInfo;
  return (
    <ProfileStyled>
      <div className="prof-left">
        <img
          className="profile-pic"
          src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
          alt="Profile"
        />
        <div className="profile-entry player-name">{`${playerName}`}</div>
        <div className="profile-entry">
          <div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
        </div>
        <img
          className="team-logo"
          src={`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
          alt="Team"
        />
      </div>
      <div className="prof-right">
        <div className="profile-entry">
          <p>Height:{height}</p>
          {/* <div className="profile-entry-left">Height</div>
          <div className="profile-entry-right">{`${height}`}</div> */}
        </div>
        <div className="profile-entry">
          <p>Weight:{weight}</p>
          {/* <div className="profile-entry-left">Weight</div>
          <div className="profile-entry-right">:{`${weight}`}</div> */}
        </div>
        <div className="profile-entry">
          <p>PPG:{pts}</p>
          {/* <div className="profile-entry-left">PTS</div>
          <div className="profile-entry-right">{`${pts}`}</div> */}
        </div>
        <div className="profile-entry">
          <p>RPG:{reb}</p>
          {/* <div className="profile-entry-left">REB</div>
          <div className="profile-entry-right">{`${reb}`}</div> */}
        </div>
        <div className="profile-entry">
          <p>AST:{ast}</p>
          {/* <div className="profile-entry-left">AST</div>
          <div className="profile-entry-right">{`${ast}`}</div> */}
        </div>
        <div className="profile-entry">
          <p>College:{school}</p>
          {/* <div className="profile-entry-left">AST</div>
          <div className="profile-entry-right">{`${ast}`}</div> */}
        </div>
      </div>
    </ProfileStyled>
  );
};

export default Profile;
