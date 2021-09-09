import React, { useState, useRef }from "react";

import { useAuth } from "../../hooks/contexts/AuthContext";

const ModalSignup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value === passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);

    }
 
  return (
    <div id="modal-signup" className="modal">
      <div className="modal-content">
        <h4>Sign up</h4>
        <br />
        {error && <div>{error}</div>}
        <form id="signup-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input id="signup-email" type="email" ref={emailRef} required />
            <label htmlFor="signup-email">Email address</label>
          </div>
          <div className="input-field">
            <input
              id="signup-password"
              type="password"
              ref={passwordRef}
              required
            />
            <label htmlFor="signup-password">Password</label>
          </div>
          <div className="input-field">
            <input
              id="signup-password"
              type="password"
              ref={passwordConfirmRef}
              required
            />
            <label htmlFor="signup-password">Password</label>
          </div>
          <button disabled={loading} className="" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalSignup;
