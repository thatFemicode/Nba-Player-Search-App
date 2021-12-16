import React from "react";
import { BlogNavStyled } from "./BlogNavStyled";
// import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from "./logo.svg";
import PrimaryButton from "../Button/PrimaryButton";
// import { useDispatch } from 'react-redux';
// import decode from 'jwt-decode';
import SearchBar from "../SearchBar";
const BlogNav = ({ handleSelectPlayer }) => {
  return (
    <BlogNavStyled>
      <img src={logo} alt="" className="logo" />
      <div className="items">
        {/* <p>Players Library</p> */}
        {/* <button>Logout</button> */}
        {/* <SearchBar handleSelectPlayer={handleSelectPlayer} /> */}
        <PrimaryButton name={"Players Library"} />
      </div>
    </BlogNavStyled>
  );
};

export default BlogNav;
