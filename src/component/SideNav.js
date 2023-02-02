import React from "react";
import { SlClose } from "react-icons/sl";
const SideNav = ({ openSidnav, setOpenSidenav }) => {
  return (
    <div className={`sidenav-show-hide ${openSidnav ? "sidenav-show" : ""}`}>
      <div className="sidenav-section">
        <div className="sidenav-main">
          <p>HOME</p>
          <p>PACKAGE</p>
          <p>ABOUT</p>
          <p>CONTACT</p>
          {/* <SlClose className="sidenav-close" /> */}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
