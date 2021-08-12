import React from 'react';
import "../stylesheets/searchResultItem.scss";

export function SearchResult({ restaurant, activity, type }) { 
    const { image_url, name, phone, price, rating, review_count, is_closed, coordinates, url } = restaurant;
    const { image_url, rating, user_ratings_total } = activity;

    if (type === 'restaurant') {
      return (
        <div className="search-result-item-card">
          <img className="restaurant-img" src={image_url} alt="business" />
          <div className="item-info-container">
            <h2>{name}</h2>
            <div>{rating}</div>
            <p>{price}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="search-result-item-card">
          <img className="restaurant-img" src={image_url} alt="business" />
          <div className="item-info-container">
            <h2>{name}</h2>
            <div>{user_ratings_total}</div>
          </div>
        </div>
      );
    }
}