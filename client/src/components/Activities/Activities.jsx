import React, { useState } from 'react';
import Activity from './Activity';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Activities = (props) => {
    const [currentIdx, setCurrentIdx] = useState(0);

    const filtered = props.activities.filter(activity => activity.rating >= 4);
    const sortedByReviewCount = filtered.sort((a, b) => b.user_ratings_total - a.user_ratings_total);
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

    return (
      <div className="search-results">
        <FaAngleLeft onClick={() => setCurrentIdx(currentIdx > 0 ? currentIdx - 1 : 0)} />
        {activityIndex[currentIdx]}
        {currentIdx}
        <FaAngleRight onClick={() => setCurrentIdx(currentIdx < sortedByRating.length ? currentIdx + 1 : sortedByRating.length)} />
      </div>
    );
}

export default Activities;
