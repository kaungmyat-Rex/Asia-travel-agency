import React from "react";

const SideNav = ({ openSidnav, setOpenSidenav }) => {
  const closeSidenav = () => {
    setOpenSidenav(false);
  };
  return (
    <div className={`sidenav-show-hide ${openSidnav ? "sidenav-show" : ""}`}>
      <div className="sidenav-section">
        <div className="sidenav-main">
          <a
            onClick={() => closeSidenav()}
            href="#home"
            style={{ textDecoration: "none" }}
          >
            <p>HOME</p>
          </a>
          <a
            onClick={() => closeSidenav()}
            href="#package"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <p>PACKAGE</p>
          </a>
          <a
            onClick={() => closeSidenav()}
            href="#about"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <p>ABOUT</p>
          </a>
          <a
            onClick={() => closeSidenav()}
            href="#contact"
            style={{ textDecoration: "none" }}
          >
            <p>CONTACT</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
