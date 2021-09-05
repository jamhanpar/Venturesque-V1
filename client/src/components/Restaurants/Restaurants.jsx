import React from 'react';
import Restaurant from './Restaurant';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Restaurants = ({restaurants, getBestRestaurant, setCurrentIdx, currentIdx}) => {
    const filteredReviewCount = restaurants.filter(restaurant => restaurant.review_count >= 20);
    const filteredRatings = filteredReviewCount.filter(restaurant => restaurant.rating >= 4);
    const sortedByReviewCount = filteredRatings.sort((a, b) => b.review_count - a.review_count);
    const sortedByRating = sortedByReviewCount.sort((a, b) => b.rating - a.rating);

    const restaurantIndex = sortedByRating.map(restaurant => (
        <Restaurant key={ restaurant.id } restaurant={ restaurant }/>
    ))

    //   const sortedRestaurants = restaurants.sort((a,b) => {
    //       let aValue = (a.user_ratings_total < 15 || a.rating === 5) ? 0 : a.rating + a.user_ratings_total/100000
    //       let bValue = (b.user_ratings_total < 15 || a.rating === 5) ? 0 : b.rating + b.user_ratings_total/100000
    //       return bValue - aValue
    //   })

    if (getBestRestaurant) {
        return (
            <div className="search-results">
                {/* <FaAngleLeft onClick={() => setCurrentIdx(currentIdx > 0 ? currentIdx - 1 : 0)} /> */}
                <h3 className="search-title">something to eat</h3>
                {restaurantIndex[currentIdx]}
                {/* <FaAngleRight onClick={() => setCurrentIdx(currentIdx < sortedByRating.length - 1 ? currentIdx + 1 : sortedByRating.length - 1)} /> */}
            </div>
        )
    } else {
        return (
            <div className="restaurant-list">
                {restaurantIndex.length > 10 ? restaurantIndex.slice(0, 6) : restaurantIndex}
            </div>
        )
    }
}

Restaurants.defaultProps = {
  getBestRestaurant: false,
};

export default Restaurants;
