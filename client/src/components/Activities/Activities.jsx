import React from 'react';
import Activity from './Activity';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Activities = ({activities, getBestActivity, setCurrentIdx, currentIdx}) => {
    const filteredReviewCount = activities.filter(activity => activity.user_ratings_total >= 20);
    const filteredRatings = filteredReviewCount.filter(activity => activity.rating >= 4 && activity.photos);
    const sortedByReviewCount = filteredRatings.sort((a, b) => b.user_ratings_total - a.user_ratings_total);
    const sortedByRating = sortedByReviewCount.sort((a, b) => b.rating - a.rating);

    const activityIndex = sortedByRating.map(activity => (
        <Activity key={ activity.place_id } activity={ activity }/>
    ))

    //   const sortedActivities = activities.sort((a, b) => {
    //     let aValue =
    //       a.review_count < 15 || a.rating === 5
    //         ? 0
    //         : a.rating + a.review_count / 100000;
    //     let bValue =
    //       b.review_count < 15 || a.rating === 5
    //         ? 0
    //         : b.rating + b.review_count / 100000;
    //     return bValue - aValue;
    //   });

    if (getBestActivity) {
        return (
          <div className="search-results">
            <FaAngleLeft onClick={() => setCurrentIdx(currentIdx > 0 ? currentIdx - 1 : 0)} />
            {activityIndex[currentIdx]}
            <FaAngleRight onClick={() => setCurrentIdx(currentIdx < sortedByRating.length - 1 ? currentIdx + 1 : sortedByRating.length - 1)} />
          </div>
        );
    } else {
        return (
          <div className="activities-list">
            {activityIndex.slice(0, 10)}
          </div>
        );
    }

    }

Activities.defaultProps = {
  getBestActivity: false,
};

export default Activities;
