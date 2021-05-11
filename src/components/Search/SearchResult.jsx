import React from 'react';
import "../stylesheets/searchResultItem.scss";

export function SearchResult(props) {
    if (!props.business) {
        return (
            <div className='search-result-item-card'>
                <img src='https://via.placeholder.com/468x60' alt="business"/>
                <div>
                    <h2>Business Name</h2>
                    <p>Description</p>
                </div>
            </div>
        )
    }

    return (
      <div className="search-result-item-card">
        <img className="restaurant-img" src={props.business.image_url} alt="business" />
        <div>
            {/* <img src={props.business.image_url} alt="business"/> */}
            <img src={props.business.image_url} alt="business"/>
            <div>
                <h2>{props.business.name}</h2>
                <div>Business Rating</div>
                <p>$$ <span>Burgers</span> <span>Fast Food</span></p>
            </div>
            <div>Business Contact & Address</div>
            {/* <div>{props.business.name}</div> */}
        </div>
      </div>
    );
}