import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/yelp_actions';
import './stylesheets/splash.scss';

const Splash = () => {
    const [searchTerm, setSearchTerm] = useState('Restaurants');
    const [location, setLocation] = useState('Hoboken');
    const [date, setDate] = useState('');
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
        console.log('inputs submitted');

        // on submission route to results page with location and default search parameter for now
    }

    return (
        <section className='search-input'>
            <form onSubmit={onSubmit}>
                <div className='search-input-item'>
                    <label className='landing-page-text' htmlFor='location'>the best <span className='rotate-text'>first</span> date near </label>    
                    <input className='landing-page-input' type='text' id='location' placeholder='address, city, zipcode' onChange={() => setLocation()} value={location}/>
                </div>
                <div className='search-input-item'>
                    <input className='landing-page-date-input' type='date' id='date' placeholder='date' onChange={() => setDate()} value={date}/>
                </div>
                <div className='search-input-item'>
                    <label className='landing-page-text' htmlFor='friend'>with </label>
                    <input className='landing-page-input' type='text' id='friend' placeholder='friend' onChange={() => setFriend()} value={friend}/>
                </div>
                <button className='generate-button' type='submit'>Generate</button>
            </form>
        </section>
    );
}

// const msp = () => ({

// });

const mdp = dispatch => ({
    fetchRestaurants: (term, location) => dispatch(fetchRestaurants(term, location))
});

export default connect(null, mdp)(Splash);