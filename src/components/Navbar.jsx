import React from 'react';
// import { A } from 'hookrouter';
import { Link } from 'react-router-dom';
import logo from './../assets/img/temp-logo.png';
import "./stylesheets/navbar.scss";

export const Nav = () => {
    return (
        <div className="nav-container">
            <Link to="/"><img className="logo" src={logo} alt="App Logo" /></Link>
            {/* <A href="/"><img className="logo" src={logo} alt="App Logo" /></A> */}
            <ul className="auth-nav-container">
                <Link className="auth-nav-link login-button" to="/results">Results</Link>
                <Link className="auth-nav-link login-button" to="/auth/login">Log In</Link>
                <Link className="auth-nav-link signup-button" to="/auth/signup">Sign Up</Link>
                {/* <li><A className="auth-nav-link login-button" href="/results">Results</A></li> */}
                {/* <li><A className="auth-nav-link login-button" href="/auth/login">Log In</A></li>
                <li><A className="auth-nav-link signup-button" href="/auth/signup">Sign Up</A></li> */}
            </ul>        
        </div>
    );
}