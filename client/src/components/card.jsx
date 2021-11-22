import React, { useState } from "react";
import PropTypes from "prop-types";

import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Card = ({ restaurant, activity, imageURL }) => {
  const displayStars = [];
  const rating = restaurant ? restaurant.rating : activity.rating;

  for (let i = 0.0; i < 5.0; i++) {
    if (i < rating && i + 0.5 !== rating) {
      displayStars.push(<FaStar key={i} />);
    } else if (i + 0.5 === rating) {
      displayStars.push(<FaStarHalfAlt key={i} />);
    } else {
      displayStars.push(<FaRegStar key={i} />);
    }
  }

  if (restaurant) {
    return (
      <div class="card-item">
        <div class="slide-img">
          <img src={restaurant.image_url} alt="business image" />
        </div>
        <div class="detail-box">
          <div class="type">
            <a href="#">{restaurant.name}</a>
            <div>{displayStars}</div>
          </div>
          <a href="#" class="price">
            {restaurant.price}
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div class="card-item">
        <div class="slide-img">
          <img src={imageURL} alt="business image" />
        </div>
        <div class="detail-box">
          <div class="type">
            <a href="#">{activity.name}</a>
            <div>{displayStars}</div>
          </div>
          <a href="#" class="price">
            {rating}
          </a>
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  restaurant: PropTypes.object,
};

export default Card;
