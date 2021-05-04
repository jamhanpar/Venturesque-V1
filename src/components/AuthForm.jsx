import React, { useState } from 'react';
import { A } from 'hookrouter';
import './stylesheets/authform.scss';

export const AuthForm = ({ toggle }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        console.log('user login/signup request')
    }

    function toggleForm() {
        if (toggle === 'signup') {
            return (
                <div className='name-input-item'> 
                    <input type='text' id='first-name' placeholder='first name' onChange={() => setFirstName()} value={firstName}/>
                    <input type='text' id='last-name' placeholder='last name' onChange={() => setLastName()} value={lastName}/>
                </div>
            )
        }
    }

    const toggleFormLinks = () => (
        toggle === 'signup' 
            ? <p>Already have an account?<A href='/auth/login' className='login-button'>Login</A></p> 
            : <A href='/forgot-password' className='forgot-password-button'>Forgot password?</A>
    )

    return (
        <div className='auth-form-container'>
            <h1>{ toggle === 'signup' ? 'Sign up for Venturesque' : 'Log In to Venturesque' }</h1>
            <p>{ toggle === 'signup' ? '& start saving your preferences and your favorite spots!' : 'new to Venturesque? Sign up!' }</p>
            <form onSubmit={onSubmit}>
                { toggleForm() }
                <div className='email-item'>
                    <input type='email' id='email' placeholder='email' onChange={() => setEmail()} value={email}/>
                </div>
                <div className='password-input-item'>
                    <input type='password' id='password' placeholder='password' onChange={() => setPassword()} value={password}/>
                </div>
                <div className='submit-input-item'>
                    <button type='submit'>{ toggle === 'login' ? 'Log In' : 'Sign Up' }</button>
                </div>
            </form>
            { toggleFormLinks() }
        </div>
    )
}