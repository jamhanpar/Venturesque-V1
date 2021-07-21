import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchRestaurants } from '../actions/yelp_actions';
// import { fetchWeather } from '../actions/weather_action';
import { fetchUser } from '../actions/user_actions';
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';
import { SearchResults } from '../components/Search/SearchResults';
import googleMap from "../assets/img/temp-google-map.png";
import { connect } from "react-redux";
import "../components/stylesheets/results.scss";

const Results = (props) => {
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
            <div className="search-results-container">
                <div className="results-search-container">
                    <h1 className="results-search-container-title">The Best Date</h1>
                    <form className="search-form" >
                        <span className="results-text">in</span>
                        <input className="results-search-input" type="text" placeholder={location} />
                        <span className="results-text">with</span>
                        <input className="results-search-input" type="text" placeholder="friend" />
                        <span className="results-text">on</span>
                        <input className="results-search-input" type="text" placeholder={date}/>
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
            {/* <button onClick={() => fetchRestaurants(term, location)}>Fetch Restaurants</button> */}
            <button onClick={() => props.fetchWeather()}>Fetch Weather</button>
            <button onClick={() => props.fetchUser()}>Fetch User</button>
            {/* <SearchBar /> */}
        </div>
    )
}

// const msp = () => ({

// });

const mdp = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
};

export default connect(null, mdp)(Results);