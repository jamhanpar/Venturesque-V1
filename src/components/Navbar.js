import React, { useState } from 'react';
import { connect } from 'react-redux';
import "./stylesheets/navbar.css";

const Nav = () => {
    return (
      <div className="nav-container">
        <div className="logo-container">
            <img src="../../assets/img/temp-logo.png" alt="App Logo"></img>
        </div>
        <div className="login-signup-container">
            <button>Login</button>
            <button>Signup</button>
        </div>
      </div>
    );
}

// const msp = () => ({

// });

// const mdp = dispatch => ({
    
// });

export default connect(null, null)(Nav);