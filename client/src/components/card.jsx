import React from "react";
import PropTypes from "prop-types";

import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Card = ({ restaurant }) => {
  const displayStars = [];

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
          <span>
            {displayStars} {restaurant.rating}
          </span>
          <span>Hiking</span>
        </div>
        <a href="#" class="price">
          {restaurant.price}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  restaurant: PropTypes.object,
};

export default Card;
