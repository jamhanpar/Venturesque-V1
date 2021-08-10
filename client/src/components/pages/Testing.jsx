import React from 'react';
import { connect } from 'react-redux';

const Testing = (props) => {
    return (
        <div>
            Testing Page
        </div>
    )
}

// const msp = () => ({});

// const mdp = dispatch => {};

export default connect(null, null)(Testing);