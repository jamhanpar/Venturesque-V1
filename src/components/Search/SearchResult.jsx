import React from 'react';
import "../stylesheets/searchResultItem.scss";

<<<<<<< HEAD
export function SearchResult(props) {
=======
export function SearchResult(props) {    
>>>>>>> 🎨: formatting restaurant card
    if (!props.business) {
        return (
            <div className='search-result-item-card'>
                <img src='https://via.placeholder.com/468x60' alt="business"/>
                <div>
                    <h2>Business Name</h2>
<<<<<<< HEAD
                    <p>Description</p>
                </div>
=======
                    <div>Business Rating</div>
                    <p>$$ <span>Burgers</span> <span>Fast Food</span></p>
                </div>
                <div>Business Contact & Address</div>
>>>>>>> 🎨: formatting restaurant card
            </div>
        )
    }

    return (
      <div className="search-result-item-card">
        <img className="restaurant-img" src={props.business.image_url} alt="business" />
        <div>
          <h2>{props.business.name}</h2>
          <div>Business Rating</div>
          <p>
            $$ <span>Burgers</span> <span>Fast Food</span>
          </p>
        </div>
<<<<<<< HEAD
=======
        <div>Business Contact & Address</div>
>>>>>>> 🎨: formatting restaurant card
      </div>
    );
}