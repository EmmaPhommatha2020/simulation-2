import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav">
      <div className="house_logo">
        <img
          className="logo"
          src="https://github.com/DevMountain/simulation-2/blob/master/assets/houser_logo.png?raw=true"
          alt="logo"
        />
        <div className="house_name">Houser</div>
      </div>

      <div className="link-wrap">
        <Link to="/" className="links_1">
          Dashboard
        </Link>
        <Link to="/wizard/step1" className="links_2">
          Add New Property
        </Link>
      </div>
    </nav>
  );
}

export default Header;
