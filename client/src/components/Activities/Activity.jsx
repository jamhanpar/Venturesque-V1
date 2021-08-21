import React, { useEffect, useState } from "react";
import { fetchGooglePhoto } from "../../util/apis/activities";

import "../stylesheets/results.scss";
import '../stylesheets/restaurants.scss';

const Activity = ({ activity }) => {
  const [photoURL, setPhotoURL] = useState(null);

  console.log(activity);

  useEffect(() => {
    if (activity.photos) {
        fetchGooglePhoto(activity.photos[0].photo_reference)
            .then(res => setPhotoURL(res));
    }

    // eslint-disable-next-line
  }, [activity]);

  return (
    <div>
      <div className="search-result-item-card">
        <img className="activity-img" src={photoURL} alt="business" />
        <div className="item-info-container">
          <h2>{activity.name}</h2>
          <div>{activity.rating}</div>
          <div>{activity.user_ratings_total}</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
