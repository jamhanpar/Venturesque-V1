import React from 'react';

const Activity = ({ activity }) => {
    return (
        <div>
            <div className="search-result-item-card">
                {/* <img className="activity-img" src={activity.image_url} alt="business" /> */}
                <div className="item-info-container">
                <h2>{activity.name}</h2>
                <div>{activity.rating}</div>
                <div>{activity.review_count}</div>
                <p>{activity.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Activity;
