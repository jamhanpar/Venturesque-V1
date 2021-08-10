import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { fetchRestaurants } from '../actions/yelp_actions';
import useReactRouter from "use-react-router";
import './stylesheets/splash.scss';
import { useSearchContext } from '../hooks/contexts/searchContext';

//icons
import { FaSistrix } from 'react-icons/fa';

const Splash = (props) => {
    const searchCtx = useSearchContext();
    // const [searchTerm, setSearchTerm] = useState('restaurants');
    const searchTerm = 'restaurants';
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [friend, setFriend] = useState('Vivian Chen');    

    const { history } = useReactRouter();

    function results(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search/term=${urlEncodedTerm}&location=${urlEncodedLocation}`);
    }
    
    // const select = (el, all = false) => {
    //     el = el.trim()
    //     if (all) {
    //         return [...document.querySelectorAll(el)]
    //     } else {
    //         return document.querySelector(el)
    //     }
    // }

    const handleSubmit = (e) => {
        // on submission route to results page with location and default search parameter for now
        e.preventDefault();
        results(searchTerm, location);
        searchCtx.setSearch(location);
    }

    return (
        <section className='search-input'>
            <form onSubmit={handleSubmit}>
                <div className='search-input-item'>
                    <label className='landing-page-text' htmlFor='location'>the best first date near </label>  
                    <input className='landing-page-input' type='text' id='location' placeholder='address, city, zipcode' onChange={(e) => setLocation(e.target.value)} value={location}/>
                    <button className='generate-button' type='submit' onClick={handleSubmit}><FaSistrix className="search-icon"/></button>
                </div>
                {/* <div className='search-input-item'>
                    <label className='landing-page-text' htmlFor='friend'>with </label>
                    <input className='landing-page-input' type='text' id='friend' placeholder='friend' onChange={() => setFriend()} value={friend}/>
                </div> */}
                {/* <div className='search-input-item'>
                    <label className='landing-page-text' htmlFor='date'>on </label>
                    <input className='landing-page-date-input' type='date' id='date' placeholder='date' onChange={() => setDate()} value={date}/>
                </div> */}
                <div className='submit-button-container'>
                </div>
            </form>
        </section>
    );
}

// const msp = () => ({

// });

const mdp = dispatch => ({
    // fetchRestaurants: (term, location) => dispatch(fetchRestaurants(term, location))
});

export default connect(null, mdp)(Splash);