import React from 'react';
import Activity from './Activity';

import '../stylesheets/restaurants.scss';

const Activities = (props) => {
    const sorted = props.activities.sort((a, b) => b.review_count - a.review_count)
    const filtered = sorted.filter(activity => activity.rating >= 4)

    const activityIndex = filtered.map(activity => (
        <Activity key={ activity.id } activity={ activity }/>
    ))

    return (
        <div className="restaurant-list">
            {activityIndex}
        </div>
    )
}

export default Activities;
