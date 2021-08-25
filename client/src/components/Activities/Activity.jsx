import React, { useEffect, useState } from "react";
import { fetchGooglePhoto } from "../../util/apis/activities";

import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Activity = ({ activity }) => {
  const [photoURL, setPhotoURL] = useState(null);
  const displayStars = [];

  for (let i = 0.0; i < 5.0; i++) {
    if (i + 0.5 < activity.rating) {
      displayStars.push(<FaStar />);
    } else if (i > activity.rating) {
      displayStars.push(<FaStarHalfAlt />);
    } else {
      displayStars.push(<FaRegStar />);
    }
  }

  useEffect(() => {
    if (activity.photos) {
        fetchGooglePhoto(activity.photos[0].photo_reference)
            .then(res => setPhotoURL(res));
    }

    // eslint-disable-next-line
  }, [activity]);

  return (
    <div className="search-result-item-card">
      <div className="img-container">
        <img className="activity-img" src={photoURL} alt="business" />
      </div>
      <div className="item-info-container">
        <h2 className="business-info">{activity.name}</h2>
        <p className="business-info">{displayStars} {activity.rating} / {activity.user_ratings_total}</p>
      </div>
    </div>
  );
};

export default Activity;
