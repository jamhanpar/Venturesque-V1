import React from "react";
import PropTypes from "prop-types";

import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Card = ({ restaurant, activity, imageURL }) => {
  const displayStars = [];

  
  if (restaurant) {
    for (let i = 0.0; i < 5.0; i++) {
      if (i < restaurant.rating && i + 0.5 !== restaurant.rating) {
        displayStars.push(<FaStar key={i} />);
      } else if (i + 0.5 === restaurant.rating) {
        displayStars.push(<FaStarHalfAlt key={i} />);
      } else {
        displayStars.push(<FaRegStar key={i} />);
      }
    }

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
    for (let i = 0.0; i < 5.0; i++) {
      if (i + 0.5 < activity.rating) {
        displayStars.push(<FaStar key={i} />);
      } else if (i > activity.rating) {
        displayStars.push(<FaStarHalfAlt key={i} />);
      } else {
        displayStars.push(<FaRegStar key={i} />);
      }
    }

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
            {activity.rating}
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
