import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/temp-logo.png';

export const Nav = () => {
    return (
      <div className="nav-container">
        <Link to="/">
          <img className="logo" src={logo} alt="App Logo" />
        </Link>
        <ul className="auth-nav-container">
          <li className="logged-in">
            <Link className="auth-nav-link login-button" to="/about">
              About Us
            </Link>
          </li>
          <li className="logged-in">
            <Link className="auth-nav-link login-button" to="/testing">
              Testing
            </Link>
          </li>
          <li className="logged-in">
            <Link className="auth-nav-link login-button" to="/dashboard">
              Account
            </Link>
          </li>
          {/* <li className="logged-in">
            <Link
              className="auth-nav-link login-button modal-trigger"
              data-target="modal-login"
              to="/login"
            >
              Login/Signup
            </Link>
          </li> */}
          <li className="logged-in">
            <Link
              className="auth-nav-link login-button modal-trigger"
              data-target="modal-login"
              to="/auth/login"
            >
              Login
            </Link>
          </li>
          {/* <li className="logged-in nav-button">
            <Link className="link-button" to="/auth/signup">
              Logout
            </Link>
          </li> */}
          <li className="logged-in nav-button">
            <Link className="link-button" to="/auth/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    );
}