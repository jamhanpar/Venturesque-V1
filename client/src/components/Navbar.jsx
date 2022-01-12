import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/temp-logo.png";
import { FaBars } from "react-icons/fa";

export const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  console.log(toggleMenu);

  return (
    <div className="nav-container">
      <div className="home-link">
        <Link to="/">
          <img className="logo" src={logo} alt="App Logo" />
        </Link>
      </div>
      <FaBars
        className="toggle-button"
        size={32}
        onClick={() => setToggleMenu(!toggleMenu)}
      />
      <ul className={`auth-nav-container ${toggleMenu ? "active" : ""}`}>
        <li>
          <Link className="auth-nav-link login-button" to="/about">
            About Us
          </Link>
        </li>
        {/* <li>
          <Link className="auth-nav-link login-button" to="/testing">
            Testing
          </Link>
        </li>
        <li>
          <Link className="auth-nav-link login-button" to="/results-layout">
            Layout
          </Link>
        </li> */}
        <li>
          <Link
            className="auth-nav-link login-button modal-trigger"
            data-target="modal-login"
            to="/auth/login"
          >
            Login
          </Link>
        </li>
        <li className="nav-button">
          <Link className="link-button" to="/auth/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
};
