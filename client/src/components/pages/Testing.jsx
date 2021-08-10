import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../util/restaurants';
import { WeatherDisplay } from '../Weather/WeatherDisplay';

const Testing = (props) => {
    // const {restaurants, setRestaurants } = useState([]);

    useEffect(() => {
        // const restaurantsList = props.getRestaurants('hoboken', 'restaurant');
        // setRestaurants(restaurantsList);
    });

    return (
        <div>
            <WeatherDisplay />
        </div>
    )
}

const msp = (state) => ({
    restaurants: state.restaurants
});

const mdp = dispatch => ({
    getRestaurants: (location, searchTerm) => dispatch(fetchRestaurants(location, searchTerm))
});

export default connect(msp, mdp)(Testing);