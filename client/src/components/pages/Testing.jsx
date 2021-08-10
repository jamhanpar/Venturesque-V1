import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../util/restaurants';

const Testing = () => {
    useEffect(() => {
        fetchRestaurants('hoboken', 'restaurant')
    });
    

    return (
        <div>
            Testing Components
        </div>
    )
}

// const msp = () => ({});

const mdp = dispatch => {
    return {
        getRestaurants: (location, searchTerm) => dispatch(fetchRestaurants(location, searchTerm))
    }
};

export default connect(null, mdp)(Testing);