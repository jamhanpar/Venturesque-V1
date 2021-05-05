import React from 'react';
import { A } from 'hookrouter';
import logo from './../assets/img/temp-logo.png';
import "./stylesheets/navbar.scss";

export const Nav = () => {
    return (
        <div className="nav-container">
            <A href="/"><img className="logo" src={logo} alt="App Logo" /></A>
            <ul className="auth-nav-container">
                <li><A className="auth-nav-link login-button" href="/auth/login">Log In</A></li>
                <li><A className="auth-nav-link signup-button" href="/auth/signup">Sign Up</A></li>
            </ul>        
        </div>
    );
}