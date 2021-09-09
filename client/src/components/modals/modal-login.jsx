import React from "react";

const ModalLogin = () => {
  return (
    <div id="modal-login" className="modal">
      <div className="modal-content">
        <h4>Sign up</h4>
        <br />
        <form id="login-form">
          <div className="input-field">
            <input id="login-email" type="email" required />
            <label htmlFor="login-email">Email address</label>
          </div>
          <div className="input-field">
            <input id="login-password" type="password" required />
            <label htmlFor="login-password">Password</label>
          </div>
          <button className="">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
