<<<<<<< HEAD
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRestaurants } from '../actions/yelp_actions';
import { fetchWeather } from '../actions/weather_action';
=======
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchRestaurants } from '../actions/yelp_actions';
import { fetchWeather } from '../actions/weather_actions';
>>>>>>> 🔍: imported search results and passing the business as props to SearchResults component
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';
import { SearchResults } from '../components/Search/SearchResults';
import googleMap from "../assets/img/temp-google-map.png";
import "../components/stylesheets/results.scss";

export const Results = ({ fetchUser }) => {
    // const { location } = useReactRouter();
    // console.log(location);
    // const params = new URLSearchParams(location.search);
    // const termParam = params.get('term');
    // const locationParam = params.get('location');
    const { term, location } = useParams();
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, location);
    const [date, setDate] = useState('');

    // sort by highest rated and most reviewed

    return (
        <div>
            {/* <p>{term}</p>
            <p>{location}</p> */}
            {/* <button onClick={() => fetchRestaurants(term, location)}>Fetch Restaurants</button>
            <button onClick={() => fetchWeather()}>Fetch Weather</button>
            <button onClick={() => fetchUser()}>Fetch User</button> */}
            <div className="search-results-container">
                <div className="results-search-container">
                    <h1 className="results-search-container-title">The Best Date</h1>
                    <form className="search-form" >
                        <span>in</span>
                        <input type="text" placeholder={location} />
                        <span>with</span>
                        <input type="text" placeholder="friend" />
                        <span>on</span>
                        <input type="text" placeholder={date}/>
                        <i className="fas fa-search"></i>
                    </form>
                    <div className="results-container">
                        <SearchResults businesses={businesses.slice(0, 1)} />
                        <span className="separator">&</span>
                        <SearchResults businesses={businesses.slice(0, 1)} />
                    </div>
                </div>
                <div className="google-map-container">
                    <img className="google-map-img" src={googleMap} alt="google maps" />
                </div>
            </div>
            {/* <SearchBar /> */}
        </div>
    )
}