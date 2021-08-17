import React from 'react';

const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <h1>{restaurant.review_count} | {restaurant.rating} | {restaurant.name}</h1>
        </div>
    )
}

export default Restaurant;
