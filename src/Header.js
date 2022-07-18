import React from "react";

import logo from "./images/logo";

import profile from "./images/profile";

import "./Header.scss"

function Header() {
  return (
    <header>
      <div className="topnav">
        <div className="logo-cont"><img src={logo}/><span>Knowledge base</span></div>
        <div className="profile-cont"> <img src={profile}/></div>
      </div>
    </header>
  );
}

export default Header;