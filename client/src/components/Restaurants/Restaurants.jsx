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

    return (
        <div className="search-results">
            <FaAngleLeft onClick={() => setCurrentIdx(currentIdx > 0 ? currentIdx - 1 : 0)} />
            {restaurantIndex[currentIdx]}
            {currentIdx}
            <FaAngleRight onClick={() => setCurrentIdx(currentIdx < sortedByRating.length ? currentIdx + 1 : sortedByRating.length)} />
        </div>
    )
}

export default Restaurants;
