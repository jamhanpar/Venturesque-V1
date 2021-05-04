import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/yelp_actions';
import './stylesheets/splash.css';

const Splash = () => {
    const [searchTerm, setSearchTerm] = useState('Restaurants');
    const [location, setLocation] = useState('Hoboken');
    const [date, setDate] = useState(`${new Date().toLocaleDateString()}`);
    const [friend, setFriend] = useState('Vivian Chen');    
    
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    const onSubmit = () => {
        console.log("inputs submitted");
    }

    return (
        <div className="app-container">
            <section className="search-input">
                <form onSubmit={onSubmit}>
                    <div className="search-input-item">
                        <label htmlFor="location">The best first date near </label>    
                        <input type="text" id="location" placeholder='address, city, zipcode' onChange={() => setLocation()} value={location}/>
                    </div>
                    <div className="search-input-item">
                        <input type="text" id="date" placeholder='date' onChange={() => setDate()} value={date}/>
                    </div>
                    <div className="search-input-item">
                        <label htmlFor="friend">with </label>
                        <input type="text" id="friend's email" placeholder='friend' onChange={() => setFriend()} value={friend}/>
                    </div>
                    <div className="search-input-item">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </section>
            {/* <footer>Footer</footer> */}
        </div>
    );
}

// const msp = () => ({

// });

const mdp = dispatch => ({
    fetchRestaurants: (term, location) => dispatch(fetchRestaurants(term, location))
});

export default connect(null, mdp)(Splash);