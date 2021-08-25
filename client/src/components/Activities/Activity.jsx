import React, { useEffect, useState } from "react";
import { fetchGooglePhoto } from "../../util/apis/activities";

const Activity = ({ activity }) => {
  const [photoURL, setPhotoURL] = useState(null);

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
        <p className="business-info">{activity.rating} / {activity.user_ratings_total}</p>
      </div>
    </div>
  );
};

export default Activity;
