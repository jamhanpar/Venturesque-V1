import React from 'react';

const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <div className="search-result-item-card">
                <img className="restaurant-img" src={restaurant.image_url} alt="business" />
                <div className="item-info-container">
                <h2>{restaurant.name}</h2>
                <div>{restaurant.rating}</div>
                <div>{restaurant.review_count}</div>
                <p>{restaurant.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;
