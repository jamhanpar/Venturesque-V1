import React from 'react';
import Restaurant from './Restaurant';

import '../stylesheets/restaurants.scss';

const Restaurants = (props) => {
    const sorted = props.restaurants.sort((a, b) => b.review_count - a.review_count)
    const filtered = sorted.filter(restaurant => restaurant.rating >= 4)

    const restaurantIndex = filtered.map(restaurant => (
        <Restaurant key={ restaurant.id } restaurant={ restaurant }/>
    ))

    return (
        <div className="restaurant-list">
            {restaurantIndex}
        </div>
    )
}

export default Restaurants
