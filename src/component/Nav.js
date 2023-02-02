import React from "react";
import { HiPaperAirplane } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Squash as Hamburger } from "hamburger-react";
import SideNav from "./SideNav";
const Nav = ({ setSearchModel, openSidnav, setOpenSidenav }) => {
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
            <a href="#home" style={{ textDecoration: "none" }}>
              {" "}
              <p className="menu-home">Home</p>
            </a>
            <a href="#package" style={{ textDecoration: "none" }}>
              <p>Package</p>
            </a>
            <a href="#about" style={{ textDecoration: "none" }}>
              <p>About</p>
            </a>
            <a href="#contact" style={{ textDecoration: "none" }}>
              <p>Contact</p>
            </a>
          </div>
          <div className="icon-list">
            <BiSearch
              className="search-icons"
              onClick={() => setSearchModel(true)}
            />

            <BsPersonCircle className="login-icons" />
            <div
              className="hambargar"
              style={{
                zIndex: "4000",
                position: `${openSidnav ? "fixed" : "relative"}`,
              }}
            >
              <Hamburger
                color="white"
                toggle={setOpenSidenav}
                toggled={openSidnav}
              />
            </div>
          </div>
          <SideNav openSidnav={openSidnav} setOpenSidenav={setOpenSidenav} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
