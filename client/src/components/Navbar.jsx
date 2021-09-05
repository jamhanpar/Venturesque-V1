import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/temp-logo.png';

export const Nav = () => {
    return (
        <div className="nav-container">
            <Link to="/"><img className="logo" src={logo} alt="App Logo" /></Link>
            <ul className="auth-nav-container">
                <Link className="auth-nav-link login-button" to="/about">About Us</Link>
                <Link className="auth-nav-link login-button" to="/testing">Testing</Link>
                <Link className="auth-nav-link login-button" to="/auth/login">Log In</Link>
                <Link className="auth-nav-link signup-button" to="/auth/signup">Sign Up</Link>
            </ul>        
        </div>
    );
}