import React from "react";
import { AuthForm } from '../../components/AuthForm';
import { useParams } from 'react-router-dom';

import ModalSignup from "../modals/modal-signup";

export const LoginSignup = () => {
    const { toggle } = useParams();
    
    return (
        <section>
            <AuthForm toggle={ toggle } />
            <ModalSignup />
        </section>
    )
};
