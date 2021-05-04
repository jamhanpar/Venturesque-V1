import React from 'react';
import { A } from 'hookrouter';
import logo from './../assets/img/temp-logo.png';
import "./stylesheets/navbar.css";

export const Nav = () => {
    return (
        <div className="nav-container">
            <img className="logo" src={logo} alt="App Logo"></img>   
            <ul className="login-signup-container">
                <A href="/">Home</A>
                <A href="/auth/login">Login</A>
                <A href="/auth/signup">Signup</A>
            </ul>        
        </div>
    );
}