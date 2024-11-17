import React, { useState } from "react";
import kfcLogo from "../assets/kfc.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <img className="logo" src={kfcLogo} alt="KFC Logo" />
      </div>
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <NavLink to="/english">
        <div>English</div>
      </NavLink>
      <NavLink to="/espana">
        <div>SPANISH</div>
      </NavLink>
      <NavLink to="/francia">
        <div>FRENCH</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
