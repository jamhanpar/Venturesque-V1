import React from "react";

import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Restaurant = ({ restaurant }) => {
  const displayStars = [];

  for (let i = 0.0; i < 5.0; i++) {
    if (i < restaurant.rating && i + 0.5 !== restaurant.rating) {
      displayStars.push(<FaStar />);
    } else if (i + 0.5 === restaurant.rating) {
      displayStars.push(<FaStarHalfAlt />);
    } else {
      displayStars.push(<FaRegStar />);
    }
  }

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
        <p className="business-info">
          {displayStars} {restaurant.rating} / {restaurant.review_count} /{" "}
          {restaurant.price}
        </p>
      </div>
    </div>
  );
};

export default Restaurant;
