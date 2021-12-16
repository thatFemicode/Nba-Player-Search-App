import React from "react";
import { useState } from "react";
import { useRef } from "react";
import nba from "../api/index";
import { PROFILE_PIC_URL_PREFIX } from "../constant";
const SearchBar = ({ handleSelectPlayer }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTem] = useState("");
  const inputEl = useRef("");
  const handleSearch = (value) => {
    setSearchTem(value);
    const players = nba.searchPlayers(value);
    console.log(players);
    //step 1 fetch data
    setData(
      !value
        ? []
        : nba.searchPlayers(value).map((player) => ({
            fullName: player.fullName,
            playerId: player.playerId,
          }))
    );
  };

  const onSelect = (name) => {
    handleSelectPlayer(name);
  };

  const options = data.map((player) => {
    //get key and display value by optionlabelprop
    return (
      <div
        key={player.fullName}
        value={player.fullName}
        className="player-option"
        onClick={() => onSelect(inputEl.current.value)}
      >
        <img
          className="player-option-image"
          alt="Player"
          src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}
        />
        <span className="player-option-label">{player.fullName}</span>
      </div>
    );
  });
  return (
    <div className="search">
      {/* <AutoComplete
        className="search-bar"
        dataSource={options}
        //   value=""
        onSelect={onSelect}
        onSearch={handleSearch}
        placeholder="Search NBA Player"
        size="large"
        //   optionLabelProp="value"
      >
        <Input
        // suffix={<Icon type="search" className="certain-category-icon" />}
        />
      </AutoComplete> */}
      <input
        ref={inputEl}
        type="text"
        value={searchTerm}
        onChange={() => handleSearch(inputEl.current.value)}
        placeholder="SearchBar"
      />
      <div
        className={`${searchTerm ? "player-options scroll" : "player-options"}`}
      >
        {options.length > 0 ? options : "Search Player"}
      </div>
    </div>
    // <div>
    //   <select
    //     aria-label="regions"
    //     // onChange={searchRegion}
    //     value={options}
    //     // name="regions"
    //     // id="region-select"
    //     // className="select-form-select"
    //   >
    //     {/* <option value="all" disabled hidden>
    //             Filter by Region
    //           </option> */}
    //   </select>
    // </div>
  );
};

export default SearchBar;
