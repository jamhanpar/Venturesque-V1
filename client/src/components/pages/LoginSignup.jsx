import React from "react";
import { AuthForm } from '../components/AuthForm';
import { useParams } from 'react-router-dom';

export const LoginSignup = () => {
    const { toggle } = useParams();
    
    return <AuthForm toggle={ toggle } />
};
