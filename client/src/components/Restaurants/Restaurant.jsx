import React from 'react';
import PropTypes from 'prop-types';

import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const Restaurant = ({ restaurant, setCurrentIdx, idx }) => {
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
    <div className="search-result-item-card" onClick={() => setCurrentIdx(idx)}>
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

Restaurant.propTypes = {
  restaurant: PropTypes.object
};

export default Restaurant;
