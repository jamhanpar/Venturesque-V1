import React from 'react';
import { connect } from 'react-redux';
import './stylesheets/footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='legal-copyright'>Copyright © 2021 Venturesque Inc. All rights reserved.</div>
        </footer>
    );
}

// const msp = () => ({});
// const mdp = dispatch => ({});

export default connect(null, null)(Footer);