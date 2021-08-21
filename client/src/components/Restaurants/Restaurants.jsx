import React, { useState } from 'react';
import Restaurant from './Restaurant';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "../stylesheets/results.scss";
import '../stylesheets/restaurants.scss';

const Restaurants = (props) => {
    const [currentIdx, setCurrentIdx] = useState(0);

    const filtered = props.restaurants.filter(restaurant => restaurant.rating >= 4);
    const sortedByReviewCount = filtered.sort((a, b) => b.review_count - a.review_count);
    const sortedByRating = sortedByReviewCount.sort((a, b) => b.rating - a.rating);

    const restaurantIndex = sortedByRating.map(restaurant => (
        <Restaurant key={ restaurant.id } restaurant={ restaurant }/>
    ))

    //   const sortedRestaurants = restaurants.sort((a,b) => {
    //       let aValue = (a.user_ratings_total < 15 || a.rating === 5) ? 0 : a.rating + a.user_ratings_total/100000
    //       let bValue = (b.user_ratings_total < 15 || a.rating === 5) ? 0 : b.rating + b.user_ratings_total/100000
    //       return bValue - aValue
    //   })

    if (props.getBestRestaurant) {
        return (
            <div className="search-results">
                <FaAngleLeft onClick={() => setCurrentIdx(currentIdx > 0 ? currentIdx - 1 : 0)} />
                {restaurantIndex[currentIdx]}
                <FaAngleRight onClick={() => setCurrentIdx(currentIdx < sortedByRating.length - 1 ? currentIdx + 1 : sortedByRating.length - 1)} />
            </div>
        )
    } else {
        return (
            <div className="restaurant-list">
                {restaurantIndex.length > 10 ? restaurantIndex.slice(0, 10) : restaurantIndex}
            </div>
        )
    }
}

Restaurants.defaultProps = {
  getBestRestaurant: false,
};

export default Restaurants;
