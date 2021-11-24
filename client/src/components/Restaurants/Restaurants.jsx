import React from "react";
import PropTypes from "prop-types";
import Restaurant from "./Restaurant";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Restaurants = ({
  restaurants,
  getBestRestaurant,
  setCurrentIdx,
  currentIdx,
}) => {
  const filteredReviewCount = restaurants.filter(
    (restaurant) => restaurant.review_count >= 20
  );
  const filteredRatings = filteredReviewCount.filter(
    (restaurant) => restaurant.rating >= 4
  );
  const sortedByReviewCount = filteredRatings.sort(
    (a, b) => b.review_count - a.review_count
  );
  const sortedByRating = sortedByReviewCount.sort(
    (a, b) => b.rating - a.rating
  );

  const restaurantIndex = sortedByRating.map((restaurant, idx) => (
    <li class="item">
      <Restaurant
        key={restaurant.id}
        restaurant={restaurant}
        idx={idx}
        setCurrentIdx={setCurrentIdx}
      />
    </li>
  ));

  //   const sortedRestaurants = restaurants.sort((a,b) => {
  //       let aValue = (a.user_ratings_total < 15 || a.rating === 5) ? 0 : a.rating + a.user_ratings_total/100000
  //       let bValue = (b.user_ratings_total < 15 || a.rating === 5) ? 0 : b.rating + b.user_ratings_total/100000
  //       return bValue - aValue
  //   })

  if (getBestRestaurant) {
    return (
      <div className="slider">
        <ul id="autoWidth" class="cs-hidden">
          {restaurantIndex[currentIdx]}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="slider">
        <ul id="autoWidth" class="cs-hidden">
          {restaurantIndex.length > 10
            ? restaurantIndex.slice(0, 6)
            : restaurantIndex}
        </ul>
      </div>
      //   <div className="restaurant-list">
      //     <FaAngleLeft
      //       onClick={() => setCurrentIdx(currentIdx > 0 ? currentIdx - 1 : 0)}
      //     />
      //     {restaurantIndex.length > 10
      //       ? restaurantIndex.slice(0, 6)
      //       : restaurantIndex}
      //     <FaAngleRight
      //       onClick={() =>
      //         setCurrentIdx(
      //           currentIdx < sortedByRating.length - 1
      //             ? currentIdx + 1
      //             : sortedByRating.length - 1
      //         )
      //       }
      //     />
      //   </div>
    );
  }
};

Restaurants.propTypes = {
  restaurants: PropTypes.array,
  setBestRestaurant: PropTypes.func,
  currentIdx: PropTypes.number,
  setCurrentIdx: PropTypes.func,
};

Restaurants.defaultProps = {
  getBestRestaurant: false,
};

export default Restaurants;
