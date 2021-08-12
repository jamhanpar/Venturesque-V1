import React, { useEffect, useState} from 'react';
import "../stylesheets/searchResultItem.scss";
import { fetchGooglePhoto } from '../../util/activities';

export function SearchResult({ restaurant, activity, type }) { 
  // const { image_url, name, phone, price, rating, review_count, is_closed, coordinates, url } = restaurant;
  // const { name, rating, user_ratings_total, photos } = activity;
  const [photoURL, setPhotoURL] = useState(null);

  useEffect(() => {
    if (type === 'activity') {
      fetchGooglePhoto(activity.photos[0].photo_reference)
        .then(res => {
          setPhotoURL(res)
        });
    }
  }, []);

  // if (!photoURL && type !== 'restaurant') return null;

  if (type === 'restaurant') {
    return (
      <div className="search-result-item-card">
        <img className="restaurant-img" src={restaurant.image_url} alt="business" />
        <div className="item-info-container">
          <h2>{restaurant.name}</h2>
          <div>{restaurant.rating}</div>
          <div>{restaurant.review_count}</div>
          <p>{restaurant.price}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="search-result-item-card">
        <img className="restaurant-img" src={photoURL} alt="business" />
        <div className="item-info-container">
          <h2>{activity.name}</h2>
          <div>{activity.rating}</div>
          <div>{activity.user_ratings_total}</div>
        </div>
      </div>
    );
  }
}