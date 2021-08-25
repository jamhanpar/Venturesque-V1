import React from "react";

const Restaurant = ({ restaurant }) => {
  return (
    <div className="search-result-item-card">
      <div className="img-container">
        <img
          className="restaurant-img"
          src={restaurant.image_url}
          alt="business"
        />
      </div>
      <div className="item-info-container">
        <h2 className="business-info">{restaurant.name}</h2>
        <p className="business-info">{restaurant.rating} / {restaurant.review_count} / {restaurant.price}</p>
      </div>
    </div>
  );
};

export default Restaurant;
