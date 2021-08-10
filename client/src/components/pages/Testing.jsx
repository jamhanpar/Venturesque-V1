import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../util/restaurants';

const Testing = (props) => {
    const {restaurants, setRestaurants } = useState([]);

    useEffect(() => {
        const restaurantsList = props.getRestaurants('hoboken', 'restaurant');
        setRestaurants(restaurantsList);
    });

    return (
        <div>
            Testing Components
        </div>
    )
}

const msp = (state) => {
    return {
        restaurants: state.restaurants
    }
};

const mdp = dispatch => {
    return {
        getRestaurants: (location, searchTerm) => dispatch(fetchRestaurants(location, searchTerm))
    }
};

export default connect(msp, mdp)(Testing);