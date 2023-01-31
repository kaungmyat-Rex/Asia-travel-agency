import React from "react";
import { HiPaperAirplane } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
const Nav = ({ searchModel, setSearchModel }) => {
  return (
    <div className="main-nav">
      <div className="nav-boder">
        <div className="nav-list">
          <div className="menu-list">
            <h1>
              TR
              <HiPaperAirplane />
              VEL
            </h1>
            <p className="menu-home">Home</p>
            <p>About</p>
            <p>Package</p>
            <p>Contact</p>
          </div>
          <div className="icon-list">
            <BiSearch
              className="search-icons"
              onClick={() => setSearchModel(true)}
            />

            <BsPersonCircle className="login-icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
